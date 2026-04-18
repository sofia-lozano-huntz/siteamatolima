"use client";

import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

export default function MenuOverlay({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) {
      gsap.to(".menu-panel", {
        x: 0,
        duration: 0.6,
        ease: "power3.out"
      });

      gsap.to(".menu-bg", {
        opacity: 1,
        duration: 0.4
      });
    } else {
      gsap.to(".menu-panel", {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut"
      });

      gsap.to(".menu-bg", {
        opacity: 0,
        duration: 0.3
      });
    }
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* BACKGROUND BLUR */}
      <div
        className="menu-bg absolute inset-0 bg-black/20 backdrop-blur-md opacity-0"
        onClick={onClose}
      />

      {/* PANEL */}
      <div
        className="
menu-panel
absolute right-0 top-0 h-full w-[75%] md:w-[40%]
translate-x-full
bg-[rgba(120,95,70,0.35)]
backdrop-blur-xl
px-8 py-10
flex flex-col
"
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="mb-12 text-right text-white/70 text-xl"
        >
          ✕
        </button>

        {/* NAV */}
        <nav className="flex flex-col gap-8 text-2xl text-white/80">
          <Link href="/" onClick={onClose}>Home</Link>
          <Link href="/sobre" onClick={onClose}>Sobre</Link>
          <Link href="/imoveis" onClick={onClose}>Imóveis</Link>
          <Link href="/projetos" onClick={onClose}>Projetos</Link>
          <Link href="/contatos" onClick={onClose}>Contatos</Link>
        </nav>
      </div>
    </div>
  );
}
