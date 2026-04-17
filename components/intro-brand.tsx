"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(useGSAP);

function MonogramLarge() {
  return (
    <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 text-2xl font-semibold tracking-[0.22em] text-white backdrop-blur-sm md:h-28 md:w-28 md:text-3xl">
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
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          setHeaderVisible(true);
        }
      });

      tl.set(".intro-screen", { autoAlpha: 1, pointerEvents: "auto" })
        .set(".hero-layer", { autoAlpha: 0, y: 24 })

        .fromTo(
          brand,
          { autoAlpha: 0, scale: 0.94, y: 18, xPercent: -50, yPercent: -50 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 1.1 }
        )
        .fromTo(
          ".brand-line",
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.8 },
          "-=0.45"
        )
        .to({}, { duration: 0.7 })
        .to(brand, {
          scale: 0.42,
          x: () => (window.innerWidth < 768 ? -118 : -360),
          y: () => -(window.innerHeight / 2) + 78,
          duration: 1.1
        })
        .to(
          ".hero-layer",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9
          },
          "-=0.3"
        )
        .to(
          ".intro-overlay",
          {
            autoAlpha: 0,
            duration: 0.8
          },
          "-=0.8"
        )
        .to(".intro-screen", {
          autoAlpha: 0,
          pointerEvents: "none",
          duration: 0.2
        });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative overflow-hidden">
      <Header visible={headerVisible} />

      <div className="intro-screen texture-travertine fixed inset-0 z-[100] h-[100svh] w-full overflow-hidden">
        <div className="intro-overlay absolute inset-0 bg-[var(--overlay)]" />

        <div
          ref={brandRef}
          className="absolute left-1/2 top-1/2 z-[101] w-[calc(100vw-40px)] max-w-[820px] -translate-x-1/2 -translate-y-1/2 px-4 text-white"
        >
          <div className="flex items-center justify-center gap-5 md:gap-7">
            <MonogramLarge />

            <div className="min-w-0 flex-1">
              <div className="font-display text-[clamp(2.2rem,5vw,5.8rem)] uppercase tracking-[0.12em] leading-none whitespace-nowrap">
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
