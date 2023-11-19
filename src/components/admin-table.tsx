"use client";

import { motion } from "framer-motion";
import {
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import { useHomesData } from "@/hooks";

interface DataItem {
  id: number;
  objectName: string;
  createdAt: string;
  users: {
    firebaseId: string;
    kWhId: number;
    name: string;
  };
  main: {
    Object_Name: string;
    Representasive_Image: string;
    Recommended_ID: string;
    avg_Energy: number;
    Dampak_Produksi: string;
    Dampak_Konsumsi: string;
    Dampak_Disposal: string;
    short_DP: string;
    short_DK: string;
    short_DD: string;
    lokasi: string;
    Sumber: string;
  };
}

interface ProcessedData {
  name: string;
  total_item_in_name: number;
  avg_energy_in_name: number;
}

const columns: ColumnDef<ProcessedData>[] = [
  {
    header: "Nama",
    accessorFn: (row) => row.name,
  },
  {
    header: "Total Barang",
    accessorFn: (row) => row.total_item_in_name,
  },
  {
    header: "Rata-Rata kWh Digunakan",
    accessorFn: (row) => `${row.avg_energy_in_name.toFixed(2)} kWh`,
  },
];

export function AdminTable() {
  const { data, isFetching, isError } = useHomesData();

  function processData(data: DataItem[] | undefined): ProcessedData[] {
    const groupedData: {
      [key: string]: { totalItems: number; totalEnergy: number };
    } = {};

    if (!data) {
      return [];
    }

    data.forEach((item) => {
      const name = item.users?.name;
      if (name) {
        if (!groupedData[name]) {
          groupedData[name] = {
            totalItems: 1,
            totalEnergy: item.main.avg_Energy || 0,
          };
        } else {
          groupedData[name].totalItems++;
          groupedData[name].totalEnergy += item.main.avg_Energy || 0;
        }
      }
    });

    const processedData: ProcessedData[] = Object.keys(groupedData).map(
      (name) => ({
        name,
        total_item_in_name: groupedData[name].totalItems,
        avg_energy_in_name:
          groupedData[name].totalEnergy / groupedData[name].totalItems,
      }),
    );

    return processedData;
  }

  const processedData: ProcessedData[] = processData(data?.data);

  const table = useReactTable({
    data: processedData,
    columns,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      {data && (
        <>
          <table className="w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="px-4 py-2 text-left text-gray-600 uppercase font-semibold tracking-wider"
                      style={{ width: header.getSize() }}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                      {header.column.getCanResize() && (
                        <div
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          className={`resizer ${
                            header.column.getIsResizing() ? "isResizing" : ""
                          }`}></div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <motion.tr
                  key={row.id}
                  className="border-t border-gray-200 hover:bg-gray-50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}>
                  {row.getVisibleCells().map((cell) => (
                    <motion.td
                      key={cell.id}
                      className="px-4 py-3 text-sm font-medium text-gray-900"
                      style={{
                        width: cell.column.getSize(),
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </motion.td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <button
              className={`px-3 py-1 mr-2 rounded-md bg-gray-200
              `}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}>
              Prev
            </button>
            <button
              className={`px-3 py-1 mr-2 rounded-md bg-gray-200`}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}>
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}
