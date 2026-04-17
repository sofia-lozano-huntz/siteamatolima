"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(useGSAP);

function StoneWireframe() {
  return (
    <svg
      viewBox="0 0 900 900"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* contorno externo da pedra */}
      <g className="stone-group stone-group-outline">
        <path
          className="stone-line"
          d="M150 120H760C795 120 820 145 820 180V760C820 795 795 820 760 820H180C145 820 120 795 120 760V150C120 132 132 120 150 120Z"
        />
        <path
          className="stone-line stone-line-soft"
          d="M168 138H742C776 138 802 164 802 198V742C802 776 776 802 742 802H198C164 802 138 776 138 742V168C138 150 150 138 168 138Z"
        />
      </g>

      {/* rebaixo interno principal */}
      <g className="stone-group stone-group-recess">
        <path
          className="stone-line"
          d="M250 220H680C710 220 730 240 730 270V645C730 675 710 695 680 695H645"
        />
        <path
          className="stone-line"
          d="M245 220H245L215 250V690L250 730H690L730 690"
        />
        <path
          className="stone-line stone-line-soft"
          d="M230 245H655C682 245 700 263 700 290V625C700 652 682 670 655 670H620"
        />
      </g>

      {/* símbolo interno - haste esquerda */}
      <g className="stone-group stone-group-symbol-left">
        <path
          className="stone-line stone-line-strong"
          d="M320 300L305 330V600C305 650 330 690 372 708"
        />
        <path
          className="stone-line stone-line-soft"
          d="M342 305L328 338V592C328 634 349 665 383 684"
        />
      </g>

      {/* símbolo interno - curva central */}
      <g className="stone-group stone-group-symbol-center">
        <path
          className="stone-line stone-line-strong"
          d="M395 310C465 300 520 327 555 380C585 425 587 488 560 545C533 602 483 646 420 680"
        />
        <path
          className="stone-line stone-line-strong"
          d="M395 310C380 350 372 396 372 442C372 548 412 637 492 702"
        />
        <path
          className="stone-line stone-line-soft"
          d="M420 322C476 320 522 344 551 388C575 426 576 479 554 529C532 579 491 616 440 645"
        />
      </g>

      {/* símbolo interno - arco direito */}
      <g className="stone-group stone-group-symbol-right">
        <path
          className="stone-line stone-line-strong"
          d="M455 300C570 300 650 374 650 486V610"
        />
        <path
          className="stone-line stone-line-strong"
          d="M650 610H595"
        />
        <path
          className="stone-line stone-line-soft"
          d="M480 320C575 324 630 388 630 482V590"
        />
      </g>

      {/* detalhe/fenda direita */}
      <g className="stone-group stone-group-detail">
        <path
          className="stone-line"
          d="M735 405L782 455V635L735 700"
        />
        <path
          className="stone-line stone-line-soft"
          d="M720 420L760 462V622L720 677"
        />
      </g>

      {/* cortes sutis para dar profundidade */}
      <g className="stone-group stone-group-depth">
        <path className="stone-line stone-line-faint" d="M245 220L215 250" />
        <path className="stone-line stone-line-faint" d="M730 690L690 730" />
        <path className="stone-line stone-line-faint" d="M650 610L650 675" />
        <path className="stone-line stone-line-faint" d="M372 442L405 472" />
        <path className="stone-line stone-line-faint" d="M555 380L585 350" />
      </g>
    </svg>
  );
}

export default function IntroBrand() {
  const root = useRef<HTMLDivElement | null>(null);
  const introScreenRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const stoneWireRef = useRef<HTMLDivElement | null>(null);
  const stoneFillRef = useRef<HTMLDivElement | null>(null);
  const heroImageRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [shouldPlayIntro, setShouldPlayIntro] = useState(true);

  useEffect(() => {
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

      const introScreen = introScreenRef.current;
      const logo = logoRef.current;
      const stoneWire = stoneWireRef.current;
      const stoneFill = stoneFillRef.current;
      const heroImage = heroImageRef.current;
      const overlay = overlayRef.current;

      if (!introScreen || !logo || !stoneWire || !stoneFill || !heroImage || !overlay) {
        return;
      }

      const stoneLines = gsap.utils.toArray<SVGPathElement>(".stone-line");

      stoneLines.forEach((line) => {
        const length =
          typeof line.getTotalLength === "function" ? line.getTotalLength() : 300;

        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: line.classList.contains("stone-line-faint")
            ? 0.08
            : line.classList.contains("stone-line-soft")
              ? 0.14
              : line.classList.contains("stone-line-strong")
                ? 0.2
                : 0.16
        });
      });

      gsap.set(".hero-layer", {
        autoAlpha: 0,
        y: 24
      });

      gsap.set(logo, {
        autoAlpha: 0,
        y: 10,
        scale: 0.985
      });

      gsap.set(stoneWire, {
        autoAlpha: 1,
        scale: 0.94,
        y: 12
      });

      gsap.set(stoneFill, {
        autoAlpha: 0,
        scale: 0.955
      });

      gsap.set(heroImage, {
        autoAlpha: 0,
        scale: 1.035
      });

      gsap.set(overlay, {
        opacity: 1
      });

      const outline = gsap.utils.toArray(".stone-group-outline .stone-line");
      const recess = gsap.utils.toArray(".stone-group-recess .stone-line");
      const left = gsap.utils.toArray(".stone-group-symbol-left .stone-line");
      const center = gsap.utils.toArray(".stone-group-symbol-center .stone-line");
      const right = gsap.utils.toArray(".stone-group-symbol-right .stone-line");
      const detail = gsap.utils.toArray(".stone-group-detail .stone-line");
      const depth = gsap.utils.toArray(".stone-group-depth .stone-line");

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.fromTo(
        introScreen,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.35 }
      )
        // assinatura
        .to(
          logo,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.62
          },
          "0.15"
        )
        .to({}, { duration: 0.34 })
        .to(
          logo,
          {
            autoAlpha: 0,
            y: -8,
            filter: "blur(2px)",
            duration: 0.34
          },
          "1.02"
        )

        // pedra em linhas
        .to(
          stoneWire,
          {
            scale: 1,
            y: 0,
            duration: 1.05
          },
          "1.0"
        )
        .to(
          outline,
          {
            strokeDashoffset: 0,
            opacity: 0.72,
            duration: 0.95,
            stagger: 0.06
          },
          "1.06"
        )
        .to(
          recess,
          {
            strokeDashoffset: 0,
            opacity: 0.62,
            duration: 0.78,
            stagger: 0.05
          },
          "1.44"
        )
        .to(
          left,
          {
            strokeDashoffset: 0,
            opacity: 0.72,
            duration: 0.68,
            stagger: 0.04
          },
          "1.72"
        )
        .to(
          center,
          {
            strokeDashoffset: 0,
            opacity: 0.84,
            duration: 0.82,
            stagger: 0.04
          },
          "1.9"
        )
        .to(
          right,
          {
            strokeDashoffset: 0,
            opacity: 0.76,
            duration: 0.7,
            stagger: 0.04
          },
          "2.14"
        )
        .to(
          detail,
          {
            strokeDashoffset: 0,
            opacity: 0.48,
            duration: 0.48,
            stagger: 0.03
          },
          "2.34"
        )
        .to(
          depth,
          {
            strokeDashoffset: 0,
            opacity: 0.22,
            duration: 0.45,
            stagger: 0.02
          },
          "2.5"
        )

        // presença do objeto
        .to(
          stoneWire,
          {
            scale: 1.015,
            duration: 0.6
          },
          "2.65"
        )
        .to(
          stoneFill,
          {
            autoAlpha: 0.34,
            scale: 1,
            duration: 0.95
          },
          "2.62"
        )

        // hero surge por trás
        .to(
          heroImage,
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1.2
          },
          "3.18"
        )
        .to(
          overlay,
          {
            opacity: 0.14,
            duration: 1.12
          },
          "3.18"
        )

        // pedra segura a cena
        .to({}, { duration: 0.3 })

        // dissolve
        .to(
          stoneFill,
          {
            autoAlpha: 0,
            scale: 1.01,
            duration: 0.55
          },
          "4.2"
        )
        .to(
          depth,
          {
            opacity: 0,
            duration: 0.28
          },
          "4.22"
        )
        .to(
          detail,
          {
            opacity: 0,
            duration: 0.3
          },
          "4.26"
        )
        .to(
          [right, center, left],
          {
            opacity: 0,
            duration: 0.42,
            stagger: 0.03
          },
          "4.32"
        )
        .to(
          [recess, outline],
          {
            opacity: 0,
            duration: 0.55,
            stagger: 0.03,
            onStart: () => setHeaderVisible(true)
          },
          "4.42"
        )

        // hero assume
        .to(
          ".hero-layer",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95
          },
          "4.32"
        )
        .to(
          introScreen,
          {
            autoAlpha: 0,
            duration: 0.7
          },
          "4.72"
        )
        .set(introScreen, {
          pointerEvents: "none"
        })
        .call(() => {
          setIntroDone(true);
          sessionStorage.setItem("seenIntroV5", "true");
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
          className="fixed inset-0 z-[100] h-[100svh] w-full overflow-hidden bg-[#f4efe6]"
        >
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-[linear-gradient(180deg,#f8f5ef_0%,#f1eadf_52%,#ece3d6_100%)]"
          />

          <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
            <div className="absolute left-[7%] top-[11%] h-px w-[13%] bg-[rgba(45,33,24,0.14)]" />
            <div className="absolute right-[9%] top-[14%] h-px w-[11%] bg-[rgba(45,33,24,0.12)]" />
            <div className="absolute left-[82%] top-[10%] h-[16%] w-px bg-[rgba(45,33,24,0.10)]" />
            <div className="absolute left-[10%] bottom-[12%] h-px w-[14%] bg-[rgba(45,33,24,0.12)]" />
          </div>

          {/* hero por trás */}
          <div ref={heroImageRef} className="absolute inset-0 z-0">
            <Image
              src="/hero-house.jpg"
              alt="Residência Amato Lima"
              fill
              priority
              className="object-cover object-center hero-intro-image"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,239,230,0.88)_0%,rgba(244,239,230,0.52)_32%,rgba(33,23,16,0.20)_100%)]" />
          </div>

          {/* assinatura mínima */}
          <div className="absolute inset-0 z-30 flex items-center justify-center px-6">
  <div
    ref={logoRef}
    className="w-[360px] md:w-[620px]"
  >
    <Image
      src="/logo-header.png"
      alt="Amato Lima"
      width={900}
      height={220}
      priority
      className="h-auto w-full object-contain"
    />
  </div>
</div>

          {/* pedra preenchida por trás das linhas */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
            <div
              ref={stoneFillRef}
              className="relative aspect-square w-[300px] md:w-[440px]"
            >
              <Image
                src="/stone-object.png"
                alt="Pedra Amato Lima"
                fill
                priority
                className="object-contain stone-fill-image"
              />
            </div>
          </div>

          {/* wireframe da pedra */}
          <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
            <div
              ref={stoneWireRef}
              className="w-[320px] md:w-[470px]"
            >
              <StoneWireframe />
            </div>
          </div>
        </div>
      )}

      <div
        className={`hero-layer relative ${
          introDone ? "translate-y-0 opacity-100" : ""
        }`}
      >
        <section className="relative min-h-[100svh] overflow-hidden text-white">
          <Image
            src="/hero-house.jpg"
            alt="Residência Amato Lima"
            fill
            priority
            className="object-cover object-center hero-main-image"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,20,14,0.16)_0%,rgba(28,20,14,0.26)_35%,rgba(22,16,12,0.58)_100%)]" />

          <div className="shell relative flex min-h-[100svh] items-end pb-16 pt-28 md:items-center md:pb-24">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-[0.38em] text-white/72">
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
