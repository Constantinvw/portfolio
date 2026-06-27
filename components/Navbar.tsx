"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 mix-blend-normal">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className={`text-sm transition-opacity ${pathname === "/" ? "opacity-100" : "opacity-40 hover:opacity-100"} ${isAbout ? "text-white" : "text-black"}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`text-sm transition-opacity ${isAbout ? (pathname === "/about" ? "text-white opacity-100" : "text-white opacity-40 hover:opacity-100") : (pathname === "/about" ? "opacity-100" : "opacity-40 hover:opacity-100")} ${!isAbout ? "text-black" : ""}`}
        >
          About
        </Link>
      </div>

      <a
        href="mailto:your@email.com"
        className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border transition-colors ${
          isAbout
            ? "border-white/30 text-white hover:bg-white/10"
            : "border-black/20 text-black hover:bg-black/5"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
        Contact
      </a>
    </nav>
  );
}
