"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuOverlay from "./menu-overlay";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-6 py-6 md:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <div />

          <Link href="/" className="justify-self-center block">
            <Image
              src="/logo-header.png"
              alt="Amato Lima"
              width={900}
              height={260}
              priority
              className="h-auto w-[180px] md:w-[240px] object-contain opacity-95"
            />
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="justify-self-end text-[12px] font-semibold uppercase tracking-[0.24em] text-[#EAE3D6] transition-opacity hover:opacity-70 md:text-[13px]"
            aria-label="Abrir menu"
            type="button"
          >
            Menu
          </button>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
