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
      gsap.to(".menu-bg", {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out"
      });

      gsap.to(".menu-panel", {
        x: 0,
        duration: 0.55,
        ease: "power3.out"
      });

      gsap.fromTo(
        ".menu-link",
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.42,
          stagger: 0.06,
          delay: 0.14,
          ease: "power2.out"
        }
      );
    } else {
      gsap.to(".menu-link", {
        autoAlpha: 0,
        y: 10,
        duration: 0.18,
        stagger: 0.03,
        ease: "power2.inOut"
      });

      gsap.to(".menu-panel", {
        x: "100%",
        duration: 0.42,
        ease: "power3.inOut"
      });

      gsap.to(".menu-bg", {
        opacity: 0,
        duration: 0.28,
        ease: "power2.out"
      });
    }
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        className="menu-bg absolute inset-0 bg-[rgba(154,123,95,0.18)] backdrop-blur-md opacity-0"
        onClick={onClose}
      />

      <div
        className="
          menu-panel
          absolute right-0 top-0 h-full w-[75%] translate-x-full
          bg-[rgba(154,123,95,0.34)]
          px-8 py-10 backdrop-blur-xl
          md:w-[40%]
        "
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-[28px] leading-none text-[#EAE3D6]"
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>

        <nav className="mt-14 flex flex-col gap-7">
          <Link
            href="/"
            onClick={onClose}
            className="menu-link font-display text-[2rem] font-[600] leading-none tracking-[-0.02em] text-[#EAE3D6] opacity-0"
          >
            Home
          </Link>
          <Link
            href="/sobre"
            onClick={onClose}
            className="menu-link font-display text-[2rem] font-[600] leading-none tracking-[-0.02em] text-[#EAE3D6] opacity-0"
          >
            Sobre
          </Link>
          <Link
            href="/imoveis"
            onClick={onClose}
            className="menu-link font-display text-[2rem] font-[600] leading-none tracking-[-0.02em] text-[#EAE3D6] opacity-0"
          >
            Imóveis
          </Link>
          <Link
            href="/projetos"
            onClick={onClose}
            className="menu-link font-display text-[2rem] font-[600] leading-none tracking-[-0.02em] text-[#EAE3D6] opacity-0"
          >
            Projetos
          </Link>
          <Link
            href="/contatos"
            onClick={onClose}
            className="menu-link font-display text-[2rem] font-[600] leading-none tracking-[-0.02em] text-[#EAE3D6] opacity-0"
          >
            Contatos
          </Link>
        </nav>
      </div>
    </div>
  );
}
