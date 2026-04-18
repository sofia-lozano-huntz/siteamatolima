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
          {/* LOGO */}
          <Link href="/" className="block">
            <Image
              src="/logo-header.png"
              alt="Amato Lima"
              width={520}
              height={170}
              priority
              className="h-auto w-[140px] md:w-[180px] object-contain"
            />
          </Link>

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="group relative flex h-10 w-10 items-center justify-center"
            aria-label="Abrir menu"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-[1px] w-6 bg-white transition-all group-hover:w-8" />
              <span className="h-[1px] w-4 bg-white transition-all group-hover:w-6" />
            </span>
          </button>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
