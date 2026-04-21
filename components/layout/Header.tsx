"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Villas", href: "#villas" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-white/70 text-sm tracking-[0.35em] backdrop-blur">
              OV
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] uppercase tracking-[0.35em] text-black/50">
                Destination living
              </p>
              <p className="text-sm font-light tracking-[0.25em]">
                OMAI INSPIRED
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.24em] md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:opacity-60">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-black/15 bg-white/70 px-5 py-2 text-xs uppercase tracking-[0.25em] backdrop-blur transition hover:bg-white md:inline-flex"
            >
              Enquire
            </a>

            <button
              onClick={() => setOpen(true)}
              className="rounded-full border border-black/15 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.25em] backdrop-blur md:hidden"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} items={navItems} />
    </>
  );
}
