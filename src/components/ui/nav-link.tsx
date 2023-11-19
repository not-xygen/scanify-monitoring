"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
  link: { id: string; label: string; href: string };
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function NavLink({ link, activeTab, setActiveTab }: NavLinkProps) {
  return (
    <Link
      key={link.id}
      onClick={() => setActiveTab(link.id)}
      href={link.href}
      className={`relative rounded-full px-4 py-2 text-sm font-medium outline-scanify-red transition focus-visible:outline-2 ${
        activeTab === link.id
          ? "text-scanify-red font-black"
          : "text-scanify-black hover:text-scanify-black/60"
      }`}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}>
      {activeTab === link.id && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-cyan-400 mix-blend-difference"
          style={{ borderRadius: 9999 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {link.label}
    </Link>
  );
}
