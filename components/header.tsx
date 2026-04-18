"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuOverlay from "./menu-overlay";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="block">
            <Image
              src="/logo-header.png"
              alt="Amato Lima"
              width={1020}
              height={260}
              priority
              className="h-auto w-[210px] md:w-[300px] object-contain opacity-95"
            />
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="group relative flex h-12 w-12 items-center justify-center"
            aria-label="Abrir menu"
          >
            <span className="flex flex-col items-end gap-[8px]">
              <span className="h-[0.5px] w-8 bg-[#EAE3D6]/85 transition-all duration-300 group-hover:w-10" />
              <span className="h-[0.5px] w-5 bg-[#EAE3D6]/85 transition-all duration-300 group-hover:w-7" />
            </span>
          </button>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
