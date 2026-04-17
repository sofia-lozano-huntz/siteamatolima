"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(useGSAP);

export default function IntroBrand() {
  const root = useRef<HTMLDivElement | null>(null);
  const stoneRef = useRef<HTMLDivElement | null>(null);
  const wordmarkRef = useRef<HTMLDivElement | null>(null);
  const lineMainRef = useRef<HTMLDivElement | null>(null);
  const lineBranchTopRef = useRef<HTMLDivElement | null>(null);
  const lineBranchBottomRef = useRef<HTMLDivElement | null>(null);
  const introScreenRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [shouldPlayIntro, setShouldPlayIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("seenIntroV2");

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

      const stone = stoneRef.current;
      const wordmark = wordmarkRef.current;
      const lineMain = lineMainRef.current;
      const lineBranchTop = lineBranchTopRef.current;
      const lineBranchBottom = lineBranchBottomRef.current;
      const introScreen = introScreenRef.current;
      const overlay = overlayRef.current;

      if (
        !stone ||
        !wordmark ||
        !lineMain ||
        !lineBranchTop ||
        !lineBranchBottom ||
        !introScreen ||
        !overlay
      ) {
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.set(".hero-layer", {
        autoAlpha: 0,
        y: 14
      })
        .set(stone, {
          autoAlpha: 0,
          scale: 0.96,
          y: 10
        })
        .set(wordmark, {
          autoAlpha: 0,
          y: 6,
          filter: "blur(6px)"
        })
        .set([lineMain, lineBranchTop, lineBranchBottom], {
          scaleX: 0,
          transformOrigin: "left center",
          opacity: 0.6
        })
        .set(overlay, {
          opacity: 1
        })

        // CENA 01 – ambiente
        .fromTo(
          introScreen,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.45 }
        )

        // CENA 02 – pedra
        .to(
          stone,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.8
          },
          "0.55"
        )

        // highlight sutil na pedra
        .fromTo(
          ".stone-highlight",
          {
            xPercent: -30,
            opacity: 0
          },
          {
            xPercent: 30,
            opacity: 0.18,
            duration: 0.9
          },
          "0.72"
        )
        .to(
          ".stone-highlight",
          {
            opacity: 0,
            duration: 0.35
          },
          "-=0.2"
        )

        // CENA 03 – wordmark
        .to(
          wordmark,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7
          },
          "1.15"
        )

        // micro tracking
        .fromTo(
          ".intro-wordmark-text",
          {
            letterSpacing: "0.02em"
          },
          {
            letterSpacing: "0.08em",
            duration: 0.7
          },
          "1.15"
        )

        // CENA 04 – linha
        .to(
          lineMain,
          {
            scaleX: 1,
            duration: 0.55
          },
          "1.8"
        )
        .to(
          lineBranchTop,
          {
            scaleX: 1,
            duration: 0.42
          },
          "2.02"
        )
        .to(
          lineBranchBottom,
          {
            scaleX: 1,
            duration: 0.42
          },
          "2.12"
        )

        // CENA 05 – respiração
        .to({}, { duration: 0.45 })

        // hero começa durante a saída
        .to(
          ".hero-layer",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9
          },
          "3.2"
        )

        // saída em camadas
        .to(
          lineMain,
          {
            scaleX: 0.82,
            opacity: 0,
            duration: 0.35
          },
          "3.2"
        )
        .to(
          [lineBranchTop, lineBranchBottom],
          {
            scaleX: 0.8,
            opacity: 0,
            duration: 0.32
          },
          "3.24"
        )
        .to(
          wordmark,
          {
            autoAlpha: 0,
            y: -4,
            filter: "blur(2px)",
            duration: 0.42
          },
          "3.28"
        )
        .to(
          stone,
          {
            autoAlpha: 0,
            scale: 0.985,
            duration: 0.5,
            onStart: () => setHeaderVisible(true)
          },
          "3.34"
        )
        .to(
          overlay,
          {
            opacity: 0,
            duration: 0.8
          },
          "3.2"
        )
        .to(
          introScreen,
          {
            autoAlpha: 0,
            duration: 0.55
          },
          "3.45"
        )
        .set(introScreen, {
          pointerEvents: "none"
        })
        .call(() => {
          setIntroDone(true);
          sessionStorage.setItem("seenIntroV2", "true");
        });
    },
    { scope: root, dependencies: [shouldPlayIntro] }
  );

  return (
    <div ref={root} className="relative">
      <Header visible={headerVisible} />

      {!introDone && (
        <div
          ref={introScreenRef}
          className="fixed inset-0 z-[100] h-[100svh] w-full overflow-hidden bg-[#f3efe7]"
        >
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-[linear-gradient(180deg,#f7f4ee_0%,#f0e8dc_100%)]"
          />

          <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
            <div className="absolute left-[6%] top-[12%] h-px w-[18%] bg-[rgba(45,33,24,0.18)]" />
            <div className="absolute right-[10%] top-[18%] h-px w-[14%] bg-[rgba(45,33,24,0.14)]" />
            <div className="absolute left-[78%] top-[8%] h-[22%] w-px bg-[rgba(45,33,24,0.14)]" />
            <div className="absolute left-[12%] bottom-[10%] h-px w-[20%] bg-[rgba(45,33,24,0.14)]" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="w-full max-w-[920px]">
              <div className="flex items-center gap-4 md:gap-8">
                <div
                  ref={stoneRef}
                  className="relative h-[96px] w-[82px] shrink-0 overflow-hidden rounded-[10px] md:h-[150px] md:w-[128px]"
                >
                  <Image
                    src="/stone-intro.png"
                    alt="Pedra Amato Lima"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="stone-highlight absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)]" />
                </div>

                <div className="min-w-0 flex-1">
                  <div
                    ref={wordmarkRef}
                    className="intro-wordmark-text font-display text-[clamp(2.2rem,7vw,5.8rem)] uppercase leading-none text-[var(--foreground)]"
                  >
                    Amato Lima
                  </div>

                  <div className="mt-5 space-y-4 md:mt-7">
                    <div
                      ref={lineMainRef}
                      className="h-px w-full bg-[rgba(45,33,24,0.28)]"
                    />
                    <div
                      ref={lineBranchTopRef}
                      className="ml-[18%] h-px w-[34%] bg-[rgba(45,33,24,0.22)]"
                    />
                    <div
                      ref={lineBranchBottomRef}
                      className="ml-[52%] h-px w-[26%] bg-[rgba(45,33,24,0.22)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`hero-layer relative ${
          introDone ? "translate-y-0 opacity-100" : ""
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
