"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(useGSAP);

function MonogramLarge() {
  return (
    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-xl font-semibold tracking-[0.18em] text-white backdrop-blur-sm md:h-28 md:w-28 md:text-3xl md:tracking-[0.22em]">
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
        .set(".hero-layer", { autoAlpha: 0, y: 18 })

        .fromTo(
          brand,
          {
            autoAlpha: 0,
            scale: 0.985,
            y: 8,
            xPercent: -50,
            yPercent: -50
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.9
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
            duration: 0.55
          },
          "-=0.3"
        )
        .to({}, { duration: 0.45 })
        .to(brand, {
          autoAlpha: 0,
          scale: 0.992,
          y: -6,
          duration: 0.55,
          onComplete: () => setHeaderVisible(true)
        })
        .to(
          ".intro-overlay",
          {
            opacity: 0,
            duration: 0.7
          },
          "-=0.35"
        )
        .to(
          ".hero-layer",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85
          },
          "-=0.4"
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
        <div className="absolute inset-0 bg-[#120b08]" />
        <div className="intro-overlay absolute inset-0 bg-[radial-gradient(circle_at_35%_22%,rgba(255,255,255,.05),transparent_24%),radial-gradient(circle_at_50%_50%,rgba(141,113,90,.08),transparent_45%),linear-gradient(180deg,rgba(36,22,15,.30),rgba(18,11,8,.90))]" />

        <div
          ref={brandRef}
          className="absolute left-1/2 top-1/2 z-[101] w-[min(92vw,760px)] -translate-x-1/2 -translate-y-1/2 px-3 text-white"
        >
          <div className="flex items-center justify-center gap-3 md:gap-7">
            <MonogramLarge />

            <div className="min-w-0 flex-1">
              <div className="font-display text-[clamp(1.7rem,7vw,5.8rem)] uppercase leading-none tracking-[0.08em] whitespace-nowrap md:tracking-[0.12em]">
                Amato Lima
              </div>
              <div className="brand-line mt-4 w-[78%] bg-white/60 md:mt-5 md:w-full" />
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
