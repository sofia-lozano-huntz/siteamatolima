"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(useGSAP);

function MonogramLarge() {
  return (
    <div className="grid h-24 w-24 place-items-center rounded-full border border-white/30 bg-white/10 text-2xl font-semibold tracking-[0.22em] text-white backdrop-blur-sm md:h-32 md:w-32 md:text-3xl">
      AL
    </div>
  );
}

export default function IntroBrand() {
  const root = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => setReady(true)
      });

      tl.set(".intro-stage", { autoAlpha: 1, pointerEvents: "auto" })
        .set(".brand-center", { autoAlpha: 0, scale: 0.96, y: 24 })
        .set(".hero-reveal", { autoAlpha: 0, y: 40 })

        .to(".brand-center", {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 1.2
        })
        .fromTo(
          ".brand-line",
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.8 },
          "-=0.55"
        )
        .to({}, { duration: 0.45 })
        .to(".brand-center", {
          scale: 0.42,
          x: () => (window.innerWidth < 768 ? -118 : -360),
          y: () => -(window.innerHeight / 2) + 84,
          duration: 1.15
        })
        .to(
          ".hero-reveal",
          {
            autoAlpha: 1,
            y: 0,
            duration: 1
          },
          "-=0.55"
        )
        .to(
          ".intro-overlay",
          {
            autoAlpha: 0,
            duration: 0.9
          },
          "-=0.9"
        )
        .to(".intro-stage", {
          autoAlpha: 0,
          pointerEvents: "none",
          duration: 0.35
        });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative">
      <Header ready={ready} />

      <div className="intro-stage texture-travertine fixed inset-0 z-50 opacity-100">
        <div className="intro-overlay absolute inset-0 bg-[var(--overlay)]" />

        <div className="brand-center absolute inset-0 flex items-center justify-center px-6 text-white">
          <div className="flex items-center gap-5 md:gap-7">
            <MonogramLarge />

            <div className="min-w-[180px] md:min-w-[420px]">
              <div className="font-display text-4xl uppercase tracking-[0.14em] md:text-7xl">
                Amato Lima
              </div>
              <div className="brand-line mt-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-reveal relative">
        <section className="relative min-h-screen overflow-hidden text-white">
          <div className="texture-travertine absolute inset-0" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,12,8,.62),rgba(18,12,8,.18),rgba(18,12,8,.5))]" />

          <div className="shell relative flex min-h-screen items-end pb-16 pt-28 md:items-center md:pb-24">
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
