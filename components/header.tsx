"use client";

import { useState } from "react";
import Link from "next/link";
import MenuOverlay from "./menu-overlay";

function Monogram() {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/10 text-[11px] font-semibold tracking-[0.25em] text-white backdrop-blur-sm">
      AL
    </div>
  );
}

export default function Header({
  visible
}: {
  visible: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
fixed inset-x-0 top-0 z-40
transition-all duration-700
backdrop-blur-md
bg-white/30
border-b border-black/5
"
      >
        <div className="shell flex items-center justify-between py-6">
          import Image from "next/image";

<Link href="/" className="flex items-center">
  <Image
    src="/logo-header.png"
    alt="Amato Lima"
    width={160}
    height={50}
    className="object-contain"
  />
</Link>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            className="group flex h-12 w-12 items-center justify-center text-white"
          >
            <span className="flex flex-col gap-2">
              <span className="hamburger-line" />
              <span className="hamburger-line w-6 group-hover:w-8" />
            </span>
          </button>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
