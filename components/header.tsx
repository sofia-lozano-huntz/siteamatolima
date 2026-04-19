"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuOverlay from "./menu-overlay";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-8 md:py-6">
        <div className="flex items-start justify-between">
          <Link href="/" className="block">
            <div className="relative rounded-[18px] border border-[#EAE3D6]/10 bg-[linear-gradient(180deg,rgba(154,123,95,0.22)_0%,rgba(168,142,107,0.12)_100%)] px-3 py-2 shadow-[0_10px_34px_rgba(79,64,50,0.12)] backdrop-blur-[10px]">
          <Link href="/" className="block">
  <Image
    src="/logo-header.png"
    alt="Amato Lima"
    width={300}
    height={160}
    priority
    className="
      h-auto 
      w-[220px] md:w-[300px] 
      object-contain 
      opacity-100

      [filter:brightness(1.08)_contrast(1.05)_drop-shadow(0_4px_12px_rgba(79,64,50,0.18))]
    "
  />
</Link>
  

          <button
            onClick={() => setOpen(true)}
            className="group relative flex h-12 w-12 items-center justify-center"
            aria-label="Abrir menu"
          >
            <span className="absolute inset-0 rounded-full bg-[rgba(154,123,95,0.14)] opacity-0 blur-[1px] transition-all duration-300 group-hover:opacity-100" />

            <span className="relative flex flex-col items-end gap-[8px] transition-all duration-300">
              <span className="h-[2.6px] w-10 rounded-full bg-[#F3EBDD] shadow-[0_0_10px_rgba(234,227,214,0.22)] transition-all duration-300 group-hover:w-12" />
              <span className="h-[2.6px] w-7 rounded-full bg-[#F3EBDD] shadow-[0_0_10px_rgba(234,227,214,0.22)] transition-all duration-300 group-hover:w-10" />
            </span>
          </button>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
