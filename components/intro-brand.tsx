"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(useGSAP);

export default function IntroBrand() {
  const root = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const sweepRef = useRef<HTMLDivElement | null>(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [shouldPlayIntro, setShouldPlayIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("seenIntro");

    if (hasSeenIntro) {
      setIntroDone(true);
      setHeaderVisible(true);
      setShouldPlayIntro(false);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      return;
    }

    setShouldPlayIntro(true);
  }, []);

  useEffect(() => {
    if (!shouldPlayIntro || introDone) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [introDone, shouldPlayIntro]);

  useGSAP(
    () => {
      if (!shouldPlayIntro) return;

      const intro = introRef.current;
      const sweep = sweepRef.current;
      if (!intro || !sweep) return;

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.set(".intro-screen", {
        autoAlpha: 1,
        pointerEvents: "auto"
      })
        .set(".hero-layer", {
          autoAlpha: 0,
          y: 16,
          scale: 1.01
        })
        .set(sweep, {
          xPercent: -140,
          opacity: 0
        })
        .fromTo(
          intro,
          {
            autoAlpha: 0,
            scale: 0.985,
            y: 6,
            filter: "blur(6px)"
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.42
          }
        )
        .to(
          sweep,
          {
            opacity: 0.55,
            duration: 0.12
          },
          "-=0.12"
        )
        .to(sweep, {
          xPercent: 140,
          duration: 0.55,
          ease: "power3.inOut"
        })
        .to(
          sweep,
          {
            opacity: 0,
            duration: 0.16
          },
          "-=0.18"
        )
        .to(
          intro,
          {
            autoAlpha: 0,
            scale: 1.01,
            filter: "blur(10px)",
            duration: 0.34,
            onStart: () => setHeaderVisible(true)
          },
          "-=0.1"
        )
        .to(
          ".intro-screen",
          {
            autoAlpha: 0,
            duration: 0.42,
            ease: "power2.out"
          },
          "-=0.18"
        )
        .to(
          ".hero-layer",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.52,
            ease: "power2.out"
          },
          "-=0.34"
        )
        .set(".intro-screen", {
          pointerEvents: "none"
        })
        .call(() => {
          setIntroDone(true);
          sessionStorage.setItem("seenIntro", "true");
        });
    },
    { scope: root, dependencies: [shouldPlayIntro] }
  );

  return (
    <div ref={root} className="relative">
      <Header visible={headerVisible} />

      {!introDone && (
        <div className="intro-screen fixed inset-0 z-[100] h-[100svh] w-full overflow-hidden bg-black">
          <div className="absolute inset-0 opacity-[0.06] intro-grain" />

          <div className="absolute inset-0 grid place-items-center px-6">
            <div
              ref={introRef}
              className="relative w-[min(68vw,620px)] md:w-[min(58vw,760px)]"
            >
              <Image
                src="/logo-header.png"
                alt="Amato Lima"
                width={1400}
                height={520}
                priority
                className="relative z-[2] h-auto w-full object-contain"
              />

              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2px]">
                <div
                  ref={sweepRef}
                  className="absolute inset-y-[-18%] left-[-30%] w-[42%] rotate-[12deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),rgba(255,255,255,0.24),rgba(255,255,255,0.05),transparent)] blur-xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`hero-layer relative ${
          introDone ? "translate-y-0 opacity-100 scale-100" : ""
        }`}
      >
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
