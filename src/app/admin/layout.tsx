import { FloatingNavigationBar } from "@/components";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FloatingNavigationBar />
      {children}
    </>
  );
}
