"use client";

import Image from "next/image";
import logo from "../../public/img/logo-horizontal.png";
import { NavLink } from "./ui";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/admin",
  },
  {
    id: "data-pengunaan",
    label: "Data Pengunaan",
    href: "/admin/data-pengunaan",
  },
];

export function FloatingNavigationBar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const currentPath = pathname;
    const activeLink = navLinks.find((link) => link.href === currentPath);
    if (activeLink) {
      setActiveTab(activeLink.id);
    }
  }, [pathname]);

  return (
    <header className="absolute w-screen flex flex-row justify-center items-center z-10">
      <nav className="flex flex-row justify-center items-center mt-2 gap-6 px-8 py-2 bg-scanify-white shadow-lg rounded-3xl">
        <Image src={logo} alt="Logo" className="w-24 h-full mx-4" />
        <>
          {navLinks.map((link) => {
            return (
              <NavLink
                key={link.id}
                link={link}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            );
          })}
        </>
      </nav>
    </header>
  );
}
