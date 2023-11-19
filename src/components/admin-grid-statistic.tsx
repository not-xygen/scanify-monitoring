import Link from "next/link";

export function AdminGridStatistic() {
  return (
    <section className="flex flex-col gap-2">
      <Link
        href="/admin/data-pengunaan"
        className="bg-scanify-red text-scanify-white rounded-md p-2">
        Data Rumah
      </Link>
    </section>
  );
}
