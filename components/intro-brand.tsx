"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(useGSAP);

export default function IntroBrand() {
  const root = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [shouldPlayIntro, setShouldPlayIntro] = useState(true);

  const verticalLines = useMemo(
    () => [
      { left: 10, height: 42, from: "top" },
      { left: 18, height: 76, from: "bottom" },
      { left: 28, height: 100, from: "top" },
      { left: 41, height: 58, from: "bottom" },
      { left: 52, height: 88, from: "top" },
      { left: 64, height: 100, from: "bottom" },
      { left: 76, height: 54, from: "top" },
      { left: 86, height: 70, from: "bottom" }
    ],
    []
  );

  const horizontalLines = useMemo(
    () => [
      { top: 14, width: 46, from: "left" },
      { top: 25, width: 78, from: "right" },
      { top: 39, width: 100, from: "left" },
      { top: 54, width: 62, from: "right" },
      { top: 68, width: 88, from: "left" },
      { top: 82, width: 44, from: "right" }
    ],
    []
  );

  const accentLines = useMemo(
    () => [
      { type: "v", left: 33, top: 22, height: 22, from: "top" },
      { type: "v", left: 71, top: 48, height: 18, from: "bottom" },
      { type: "h", top: 31, left: 52, width: 16, from: "left" },
      { type: "h", top: 73, left: 18, width: 22, from: "right" }
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
      if (!intro || !grid) return;

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
          y: 18,
          scale: 1.01
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
        .set(".grid-accent-v", {
          scaleY: 0,
          opacity: 0
        })
        .set(".grid-accent-h", {
          scaleX: 0,
          opacity: 0
        })
        .fromTo(
          intro,
          {
            autoAlpha: 0,
            scale: 0.985,
            y: 8,
            filter: "blur(6px)"
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.34
          }
        )
        .to({}, { duration: 0.12 })
        .to(intro, {
          autoAlpha: 0,
          scale: 1.01,
          filter: "blur(10px)",
          duration: 0.24,
          onStart: () => setHeaderVisible(true)
        })
        .to(
          vLines,
          {
            scaleY: 1,
            opacity: 0.28,
            duration: 0.42,
            stagger: 0.035,
            transformOrigin: (_i, target) =>
              target.getAttribute("data-from") === "top"
                ? "top center"
                : "bottom center"
          },
          "-=0.06"
        )
        .to(
          hLines,
          {
            scaleX: 1,
            opacity: 0.16,
            duration: 0.38,
            stagger: 0.04,
            transformOrigin: (_i, target) =>
              target.getAttribute("data-from") === "left"
                ? "left center"
                : "right center"
          },
          "-=0.28"
        )
        .to(
          ".grid-accent-v",
          {
            scaleY: 1,
            opacity: 0.2,
            duration: 0.28,
            stagger: 0.03,
            transformOrigin: (_i, target) =>
              target.getAttribute("data-from") === "top"
                ? "top center"
                : "bottom center"
          },
          "-=0.3"
        )
        .to(
          ".grid-accent-h",
          {
            scaleX: 1,
            opacity: 0.18,
            duration: 0.26,
            stagger: 0.03,
            transformOrigin: (_i, target) =>
              target.getAttribute("data-from") === "left"
                ? "left center"
                : "right center"
          },
          "-=0.24"
        )
        .to(
          ".hero-layer",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.5
          },
          "-=0.16"
        )
        .to(
          ".intro-screen",
          {
            autoAlpha: 0,
            duration: 0.42
          },
          "-=0.28"
        )
        .to(
          grid,
          {
            autoAlpha: 0,
            duration: 0.26
          },
          "-=0.18"
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
            ref={gridRef}
            className="pointer-events-none absolute inset-0 opacity-0"
          >
            {verticalLines.map((line, i) => (
              <span
                key={`v-${i}`}
                className="grid-v absolute w-px bg-white/20"
                data-from={line.from}
                style={{
                  left: `${line.left}%`,
                  height: `${line.height}%`,
                  top: line.from === "top" ? "0%" : "auto",
                  bottom: line.from === "bottom" ? "0%" : "auto"
                }}
              />
            ))}

            {horizontalLines.map((line, i) => (
              <span
                key={`h-${i}`}
                className="grid-h absolute h-px bg-white/10"
                data-from={line.from}
                style={{
                  top: `${line.top}%`,
                  width: `${line.width}%`,
                  left: line.from === "left" ? "0%" : "auto",
                  right: line.from === "right" ? "0%" : "auto"
                }}
              />
            ))}

            {accentLines.map((line, i) =>
              line.type === "v" ? (
                <span
                  key={`accent-v-${i}`}
                  className="grid-accent-v absolute w-px bg-white/16"
                  data-from={line.from}
                  style={{
                    left: `${line.left}%`,
                    top: `${line.top}%`,
                    height: `${line.height}%`
                  }}
                />
              ) : (
                <span
                  key={`accent-h-${i}`}
                  className="grid-accent-h absolute h-px bg-white/14"
                  data-from={line.from}
                  style={{
                    top: `${line.top}%`,
                    left: `${line.left}%`,
                    width: `${line.width}%`
                  }}
                />
              )
            )}
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
