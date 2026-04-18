"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-content",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.4
        }
      );

      gsap.to(".hero-image", {
        scale: 1.05,
        duration: 6,
        ease: "none"
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative h-[70vh] w-full overflow-hidden"
    >
      {/* IMAGE */}
      <Image
        src="/hero-house.png"
        alt="Amato Lima"
        fill
        priority
        className="hero-image object-cover object-center scale-100"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,10,0.1)_0%,rgba(20,15,10,0.5)_100%)]" />

      {/* CONTENT */}
      <div className="hero-content relative z-10 flex h-full items-end px-6 pb-12 md:items-center md:pb-0">
        <div className="max-w-xl text-white">
          <p className="mb-4 text-xs tracking-[0.4em] uppercase text-white/70">
            Ativos imobiliários
          </p>

          <h1 className="text-4xl md:text-6xl leading-tight">
            Transformados com inteligência e sofisticação.
          </h1>

          <p className="mt-6 text-sm md:text-base text-white/70">
            Aquisição estratégica, reposicionamento arquitetônico e
            comercialização em regiões nobres de São Paulo.
          </p>
        </div>
      </div>
    </section>
  );
}
