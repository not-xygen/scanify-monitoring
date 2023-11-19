import { AdminGridStatistic } from "@/components";
import { AdminLineChart } from "@/components/admin-line-chart";

const gridItems = [
  {
    label: "Rata-Rata Barang Ditambah",
    comp: (
      <div className="w-[600px]">
        <AdminLineChart />
      </div>
    ),
  },
  {
    label: "Akses Cepat",
    comp: (
      <div className="w-max">
        <AdminGridStatistic />
      </div>
    ),
  },
];

export default function AdminDashboard() {
  return (
    <section className="px-60 mt-24 flex h-max w-full flex-wrap gap-8">
      {gridItems.map((grid, i) => (
        <div
          key={i}
          className={`p-12 flex flex-col w-max shadow-md rounded-lg gap-2`}>
          <h1 className="text-xl font-bold">{grid.label}</h1>
          {grid.comp}
        </div>
      ))}
    </section>
  );
}
