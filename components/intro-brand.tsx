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

type BoxLine = {
  top: number;
  left: number;
  width: number;
  height: number;
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
      { left: 7, top: 4, height: 90, from: "top", variant: "soft" },
      { left: 12, top: 10, height: 72, from: "top", variant: "main" },
      { left: 19, bottom: 0, height: 94, from: "bottom", variant: "soft" },
      { left: 27, top: 3, height: 100, from: "top", variant: "main" },
      { left: 35, bottom: 10, height: 56, from: "bottom", variant: "soft" },
      { left: 48, top: 0, height: 100, from: "top", variant: "main" },
      { left: 58, top: 18, height: 60, from: "top", variant: "soft" },
      { left: 66, bottom: 0, height: 100, from: "bottom", variant: "main" },
      { left: 75, top: 8, height: 74, from: "top", variant: "soft" },
      { left: 84, bottom: 5, height: 86, from: "bottom", variant: "main" },
      { left: 92, top: 12, height: 58, from: "top", variant: "soft" }
    ],
    []
  );

  const horizontalLines = useMemo<HorizontalLine[]>(
    () => [
      { top: 8, left: 5, width: 90, from: "left", variant: "main" },
      { top: 16, right: 0, width: 56, from: "right", variant: "soft" },
      { top: 28, left: 9, width: 78, from: "left", variant: "soft" },
      { top: 41, right: 4, width: 92, from: "right", variant: "main" },
      { top: 55, left: 22, width: 46, from: "left", variant: "soft" },
      { top: 69, right: 0, width: 84, from: "right", variant: "main" },
      { top: 82, left: 6, width: 36, from: "left", variant: "soft" },
      { top: 92, right: 8, width: 62, from: "right", variant: "soft" }
    ],
    []
  );

  const boxes = useMemo<BoxLine[]>(
    () => [
      { top: 14, left: 54, width: 18, height: 12 },
      { top: 52, left: 18, width: 22, height: 16 },
      { top: 68, left: 58, width: 16, height: 10 }
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
      const boxLines = gsap.utils.toArray<HTMLElement>(".grid-box-line");

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.set(".intro-screen", {
        autoAlpha: 1,
        pointerEvents: "auto"
      })
        .set(".hero-layer", {
          autoAlpha: 0,
          y: 24,
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
        .set(boxLines, {
          scaleX: 0,
          scaleY: 0,
          opacity: 0
        })
        .set(overlay, {
          opacity: 1
        })

        .fromTo(
          intro,
          {
            autoAlpha: 0,
            scale: 0.972,
            y: 16,
            filter: "blur(12px)"
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power2.out"
          }
        )
        .to({}, { duration: 0.55 })
        .to(
          intro,
          {
            autoAlpha: 0,
            scale: 1.012,
            y: -6,
            filter: "blur(12px)",
            duration: 0.85,
            ease: "power2.inOut",
            onStart: () => setHeaderVisible(true)
          }
        )
        .to(
          overlay,
          {
            opacity: 0.62,
            duration: 1.1
          },
          "-=0.72"
        )
        .to(
          vLines,
          {
            scaleY: 1,
            opacity: (_i, target) =>
              target.dataset.variant === "main" ? 0.24 : 0.1,
            duration: 1.05,
            stagger: 0.06,
            transformOrigin: (_i, target) =>
              target.getAttribute("data-from") === "top"
                ? "top center"
                : "bottom center"
          },
          "-=0.4"
        )
        .to(
          hLines,
          {
            scaleX: 1,
            opacity: (_i, target) =>
              target.dataset.variant === "main" ? 0.18 : 0.08,
            duration: 0.95,
            stagger: 0.065,
            transformOrigin: (_i, target) =>
              target.getAttribute("data-from") === "left"
                ? "left center"
                : "right center"
          },
          "-=0.82"
        )
        .to(
          boxLines,
          {
            opacity: 0.14,
            duration: 0.55,
            stagger: 0.04
          },
          "-=0.65"
        )
        .to(
          ".grid-box-top, .grid-box-bottom",
          {
            scaleX: 1,
            duration: 0.45,
            stagger: 0.03,
            transformOrigin: "left center"
          },
          "<"
        )
        .to(
          ".grid-box-left, .grid-box-right",
          {
            scaleY: 1,
            duration: 0.45,
            stagger: 0.03,
            transformOrigin: "top center"
          },
          "-=0.35"
        )
        .to(
          ".hero-layer",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.15,
            ease: "power2.out"
          },
          "-=0.76"
        )
        .to(
          grid,
          {
            scale: 1.016,
            opacity: 0.94,
            duration: 0.85,
            ease: "power1.inOut"
          },
          "-=0.52"
        )
        .to(
          overlay,
          {
            opacity: 0.08,
            duration: 0.9,
            ease: "power2.out"
          },
          "-=0.58"
        )
        .to(
          grid,
          {
            autoAlpha: 0,
            scale: 1.028,
            duration: 0.8,
            ease: "power2.out"
          },
          "-=0.2"
        )
        .to(
          ".intro-screen",
          {
            autoAlpha: 0,
            duration: 0.5,
            ease: "power2.out"
          },
          "-=0.5"
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
          <div ref={overlayRef} className="absolute inset-0 bg-black" />

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

            {boxes.map((box, i) => (
              <div
                key={`box-${i}`}
                className="absolute"
                style={{
                  top: `${box.top}%`,
                  left: `${box.left}%`,
                  width: `${box.width}%`,
                  height: `${box.height}%`
                }}
              >
                <span className="grid-box-line grid-box-top absolute left-0 top-0 h-px w-full bg-white/12" />
                <span className="grid-box-line grid-box-right absolute right-0 top-0 h-full w-px bg-white/12" />
                <span className="grid-box-line grid-box-bottom absolute bottom-0 left-0 h-px w-full bg-white/12" />
                <span className="grid-box-line grid-box-left absolute left-0 top-0 h-full w-px bg-white/12" />
              </div>
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
          <div className="hero-grid-overlay pointer-events-none absolute inset-0 opacity-[0.08]" />

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
