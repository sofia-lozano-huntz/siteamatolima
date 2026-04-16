"use client";

import Link from "next/link";
import { navItems } from "@/lib/data";

export default function MenuOverlay({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-500 ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-[rgba(20,14,10,0.25)] backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-[560px] texture-travertine border-l border-white/30 p-8 md:p-12 transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Navegação
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-sm uppercase tracking-[0.2em] text-[var(--foreground)]"
          >
            Fechar
          </button>
        </div>

        <nav className="mt-16 flex flex-col gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="font-display text-4xl md:text-6xl leading-none text-[var(--foreground)] transition-transform duration-300 hover:translate-x-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
