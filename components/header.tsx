"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuOverlay from "./menu-overlay";

export default function Header({
  visible
}: {
  visible: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-700 ${
          visible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="border-b border-black/5 bg-white/28 backdrop-blur-md">
          <div className="shell flex items-center justify-between py-5 md:py-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-header.png"
                alt="Amato Lima"
                width={160}
                height={50}
                priority
                className="h-auto w-[132px] object-contain md:w-[168px]"
              />
            </Link>

            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="group flex h-12 w-12 items-center justify-center text-[var(--foreground)]"
            >
              <span className="flex flex-col items-end gap-[7px]">
                <span className="block h-px w-7 origin-right bg-current transition-transform duration-300 group-hover:scale-x-[0.86]" />
                <span className="block h-px w-10 origin-right bg-current transition-transform duration-300 group-hover:scale-x-[1.06]" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
