"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(useGSAP);

function MonogramLarge() {
  return (
    <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-2xl font-semibold tracking-[0.22em] text-white backdrop-blur-sm md:h-28 md:w-28 md:text-3xl">
      AL
    </div>
  );
}

export default function IntroBrand() {
  const root = useRef<HTMLDivElement | null>(null);
  const brandRef = useRef<HTMLDivElement | null>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useGSAP(
    () => {
      const brand = brandRef.current;
      if (!brand) return;

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.set(".intro-screen", { autoAlpha: 1, pointerEvents: "auto" })
        .set(".hero-layer", { autoAlpha: 0, y: 16 })

        .fromTo(
          brand,
          {
            autoAlpha: 0,
            scale: 0.97,
            y: 10,
            xPercent: -50,
            yPercent: -50
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.75
          }
        )
        .fromTo(
          ".brand-line",
          {
            scaleX: 0,
            transformOrigin: "left center"
          },
          {
            scaleX: 1,
            duration: 0.45
          },
          "-=0.2"
        )
        .to({}, { duration: 0.35 })
        .to(brand, {
          autoAlpha: 0,
          scale: 0.985,
          y: -8,
          duration: 0.45,
          onStart: () => setHeaderVisible(true)
        })
        .to(
          ".intro-overlay",
          {
            opacity: 0,
            duration: 0.55
          },
          "-=0.3"
        )
        .to(
          ".hero-layer",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7
          },
          "-=0.35"
        )
        .to(
          ".intro-screen",
          {
            autoAlpha: 0,
            pointerEvents: "none",
            duration: 0.15
          },
          "-=0.1"
        );
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative overflow-hidden">
      <Header visible={headerVisible} />

      <div className="intro-screen fixed inset-0 z-[100] h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#140e0a]" />
        <div className="intro-overlay absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.06),transparent_36%),linear-gradient(180deg,rgba(58,39,28,.28),rgba(20,14,10,.82))]" />

        <div
          ref={brandRef}
          className="absolute left-1/2 top-1/2 z-[101] w-[calc(100vw-40px)] max-w-[820px] -translate-x-1/2 -translate-y-1/2 px-4 text-white"
        >
          <div className="flex items-center justify-center gap-4 md:gap-7">
            <MonogramLarge />

            <div className="min-w-0 flex-1">
              <div className="font-display text-[clamp(2.1rem,5vw,5.8rem)] uppercase leading-none tracking-[0.12em] whitespace-nowrap">
                Amato Lima
              </div>
              <div className="brand-line mt-5 h-px bg-white/60" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-layer relative">
        <section className="texture-travertine relative min-h-[100svh] overflow-hidden text-white">
          <div className="absolute inset-0 bg-[var(--overlay)]" />

          <div className="shell relative flex min-h-[100svh] items-end pb-16 pt-28 md:items-center md:pb-24">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-[0.38em] text-white/70">
                Ativos imobiliários
              </p>

              <h1 className="font-display text-5xl leading-[0.92] md:text-8xl">
                Transformados com inteligência e sofisticação.
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/78 md:text-base">
                Aquisição estratégica, reposicionamento arquitetônico e
                comercialização em regiões nobres de São Paulo.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#imoveis"
                  className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] backdrop-blur-sm transition hover:bg-white hover:text-[var(--foreground)]"
                >
                  Ver imóveis
                </a>

                <a
                  href="#projetos"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-white/10"
                >
                  Ver projetos
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
