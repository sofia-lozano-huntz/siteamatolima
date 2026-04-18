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
        <div className="flex items-center justify-between">
          <Link href="/" className="block">
            <Image
              src="/logo-header.png"
              alt="Amato Lima"
              width={1160}
              height={280}
              priority
              className="h-auto w-[230px] md:w-[320px] object-contain opacity-95"
            />
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="group relative flex h-12 w-12 items-center justify-center"
            aria-label="Abrir menu"
          >
            <span className="flex flex-col items-end gap-[7px]">
              <span className="h-[2px] w-9 rounded-full bg-[#EAE3D6] transition-all duration-300 group-hover:w-11" />
              <span className="h-[2px] w-6 rounded-full bg-[#EAE3D6] transition-all duration-300 group-hover:w-8" />
            </span>
          </button>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
