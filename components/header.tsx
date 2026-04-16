"use client";

import { useState } from "react";
import Link from "next/link";
import MenuOverlay from "./menu-overlay";

function Monogram() {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/15 text-[11px] font-semibold tracking-[0.25em] text-white backdrop-blur-md">
      AL
    </div>
  );
}

export default function Header({
  ready
}: {
  ready: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-30 transition-all duration-700 ${
          ready ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        <div className="shell flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-3 text-white">
            <Monogram />
            <span className="font-display text-2xl tracking-[0.08em] md:text-3xl">
              Amato Lima
            </span>
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
