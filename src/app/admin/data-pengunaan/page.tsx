import { AdminTable } from "@/components/admin-table";

export default function AdminDataPengunaan() {
  return (
    <section className="px-96 mt-24 pb-20 w-screen flex flex-col gap-2 overflow-x-hidden">
      <h1 className="font-black text-xl">Data Rumah</h1>
      <AdminTable />
    </section>
  );
}
