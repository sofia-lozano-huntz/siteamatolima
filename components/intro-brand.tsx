"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(useGSAP);

type VerticalLine = {
  left: number;
  top?: number;
  bottom?: number;
  height: number;
  from: "top" | "bottom";
  variant?: "main" | "soft";
};

type HorizontalLine = {
  top: number;
  left?: number;
  right?: number;
  width: number;
  from: "left" | "right";
  variant?: "main" | "soft";
};

export default function IntroBrand() {
  const root = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [shouldPlayIntro, setShouldPlayIntro] = useState(true);

  const verticalLines = useMemo<VerticalLine[]>(
    () => [
      { left: 8, top: 6, height: 88, from: "top", variant: "soft" },
      { left: 14, top: 10, height: 74, from: "top", variant: "main" },
      { left: 22, bottom: 0, height: 92, from: "bottom", variant: "soft" },
      { left: 30, top: 4, height: 96, from: "top", variant: "main" },
      { left: 38, bottom: 8, height: 58, from: "bottom", variant: "soft" },
      { left: 50, top: 0, height: 100, from: "top", variant: "main" },
      { left: 61, top: 18, height: 56, from: "top", variant: "soft" },
      { left: 69, bottom: 0, height: 100, from: "bottom", variant: "main" },
      { left: 78, top: 8, height: 72, from: "top", variant: "soft" },
      { left: 88, bottom: 6, height: 86, from: "bottom", variant: "main" },
      { left: 94, top: 12, height: 60, from: "top", variant: "soft" }
    ],
    []
  );

  const horizontalLines = useMemo<HorizontalLine[]>(
    () => [
      { top: 8, left: 6, width: 88, from: "left", variant: "main" },
      { top: 16, right: 0, width: 58, from: "right", variant: "soft" },
      { top: 27, left: 10, width: 78, from: "left", variant: "soft" },
      { top: 39, right: 6, width: 90, from: "right", variant: "main" },
      { top: 52, left: 24, width: 48, from: "left", variant: "soft" },
      { top: 67, right: 0, width: 84, from: "right", variant: "main" },
      { top: 80, left: 6, width: 38, from: "left", variant: "soft" },
      { top: 90, right: 10, width: 64, from: "right", variant: "soft" }
    ],
    []
  );

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
      const grid = gridRef.current;
      const overlay = overlayRef.current;

      if (!intro || !grid || !overlay) return;

      const vLines = gsap.utils.toArray<HTMLElement>(".grid-v");
      const hLines = gsap.utils.toArray<HTMLElement>(".grid-h");

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.set(".intro-screen", {
        autoAlpha: 1,
        pointerEvents: "auto"
      })
        .set(".hero-layer", {
          autoAlpha: 0,
          y: 22,
          scale: 1.02
        })
        .set(grid, {
          autoAlpha: 1
        })
        .set(vLines, {
          scaleY: 0,
          opacity: 0
        })
        .set(hLines, {
          scaleX: 0,
          opacity: 0
        })
        .set(overlay, {
          opacity: 1
        })

        // Logo entra devagar
        .fromTo(
          intro,
          {
            autoAlpha: 0,
            scale: 0.975,
            y: 14,
            filter: "blur(10px)"
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power2.out"
          }
        )

        // pequena presença da marca
        .to({}, { duration: 0.4 })

        // logo sai devagar
        .to(
          intro,
          {
            autoAlpha: 0,
            scale: 1.015,
            y: -4,
            filter: "blur(12px)",
            duration: 0.7,
            ease: "power2.inOut",
            onStart: () => setHeaderVisible(true)
          }
        )

        // o preto começa a abrir junto
        .to(
          overlay,
          {
            opacity: 0.55,
            duration: 0.95,
            ease: "power2.out"
          },
          "-=0.55"
        )

        // verticais entram lentamente de lados diferentes
        .to(
          vLines,
          {
            scaleY: 1,
            opacity: (_i, target) =>
              target.dataset.variant === "main" ? 0.26 : 0.14,
            duration: 0.95,
            stagger: 0.06,
            ease: "power2.out",
            transformOrigin: (_i, target) =>
              target.getAttribute("data-from") === "top"
                ? "top center"
                : "bottom center"
          },
          "-=0.38"
        )

        // horizontais entram depois, também lentas
        .to(
          hLines,
          {
            scaleX: 1,
            opacity: (_i, target) =>
              target.dataset.variant === "main" ? 0.2 : 0.11,
            duration: 0.9,
            stagger: 0.07,
            ease: "power2.out",
            transformOrigin: (_i, target) =>
              target.getAttribute("data-from") === "left"
                ? "left center"
                : "right center"
          },
          "-=0.72"
        )

        // home aparece por trás enquanto o grid já existe
        .to(
          ".hero-layer",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.05,
            ease: "power2.out"
          },
          "-=0.78"
        )

        // grid respira / expande um pouco
        .to(
          grid,
          {
            scale: 1.018,
            opacity: 0.92,
            duration: 0.75,
            ease: "power1.inOut"
          },
          "-=0.48"
        )

        // fundo preto abre mais
        .to(
          overlay,
          {
            opacity: 0.12,
            duration: 0.8,
            ease: "power2.out"
          },
          "-=0.52"
        )

        // grid desaparece lentamente
        .to(
          grid,
          {
            autoAlpha: 0,
            scale: 1.03,
            duration: 0.75,
            ease: "power2.out"
          },
          "-=0.28"
        )

        // intro completa desaparece
        .to(
          ".intro-screen",
          {
            autoAlpha: 0,
            duration: 0.42,
            ease: "power2.out"
          },
          "-=0.42"
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
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black"
          />

          <div
            ref={gridRef}
            className="pointer-events-none absolute inset-0 origin-center opacity-0"
          >
            {verticalLines.map((line, i) => (
              <span
                key={`v-${i}`}
                className="grid-v absolute w-px bg-white/20"
                data-from={line.from}
                data-variant={line.variant ?? "soft"}
                style={{
                  left: `${line.left}%`,
                  height: `${line.height}%`,
                  top: line.top !== undefined ? `${line.top}%` : "auto",
                  bottom:
                    line.bottom !== undefined ? `${line.bottom}%` : "auto"
                }}
              />
            ))}

            {horizontalLines.map((line, i) => (
              <span
                key={`h-${i}`}
                className="grid-h absolute h-px bg-white/10"
                data-from={line.from}
                data-variant={line.variant ?? "soft"}
                style={{
                  top: `${line.top}%`,
                  width: `${line.width}%`,
                  left: line.left !== undefined ? `${line.left}%` : "auto",
                  right: line.right !== undefined ? `${line.right}%` : "auto"
                }}
              />
            ))}
          </div>

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
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <div
        className={`hero-layer relative ${
          introDone ? "translate-y-0 scale-100 opacity-100" : ""
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
