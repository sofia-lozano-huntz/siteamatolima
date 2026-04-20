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

      <g className="stone-group stone-group-symbol-right">
        <path
          className="stone-line stone-line-strong"
          d="M455 300C570 300 650 374 650 486V610"
        />
        <path className="stone-line stone-line-strong" d="M650 610H595" />
        <path
          className="stone-line stone-line-soft"
          d="M480 320C575 324 630 388 630 482V590"
        />
      </g>

      <g className="stone-group stone-group-detail">
        <path className="stone-line" d="M735 405L782 455V635L735 700" />
        <path
          className="stone-line stone-line-soft"
          d="M720 420L760 462V622L720 677"
        />
      </g>

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

      if (
        !introScreen ||
        !logo ||
        !stoneWire ||
        !stoneFill ||
        !heroImage ||
        !overlay
      ) {
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
            ? 0.05
            : line.classList.contains("stone-line-soft")
              ? 0.09
              : line.classList.contains("stone-line-strong")
                ? 0.14
                : 0.11
        });
      });

      gsap.set(".hero-layer", {
        autoAlpha: 0,
        y: 12
      });

      gsap.set(".hero-copy", {
        autoAlpha: 0,
        y: 26
      });

      gsap.set(".hero-title-line", {
        autoAlpha: 0,
        y: 20
      });

      gsap.set(".hero-subtitle", {
        autoAlpha: 0,
        y: 16
      });

      gsap.set(logo, {
        autoAlpha: 0,
        y: 10,
        scale: 0.988
      });

      gsap.set(stoneWire, {
        autoAlpha: 0,
        scale: 0.97,
        y: 10
      });

      gsap.set(stoneFill, {
        autoAlpha: 0,
        scale: 0.975
      });

      gsap.set(heroImage, {
        autoAlpha: 0,
        scale: 1.03
      });

      gsap.set(overlay, {
        opacity: 1
      });

      gsap.set(".stone-highlight", {
        opacity: 0,
        xPercent: -30
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
        .to(
          ".hero-layer",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45
          },
          "0.18"
        )
        .to(
          ".hero-title-line.title-line-1",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72
          },
          "0.36"
        )
        .to(
          ".hero-title-line.title-line-2",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72
          },
          "0.52"
        )
        .to(
          stoneWire,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.9
          },
          "0.82"
        )
        .to(
          outline,
          {
            strokeDashoffset: 0,
            opacity: 0.28,
            duration: 0.92,
            stagger: 0.05
          },
          "0.92"
        )
        .to(
          recess,
          {
            strokeDashoffset: 0,
            opacity: 0.22,
            duration: 0.72,
            stagger: 0.04
          },
          "1.16"
        )
        .to(
          left,
          {
            strokeDashoffset: 0,
            opacity: 0.22,
            duration: 0.58,
            stagger: 0.03
          },
          "1.32"
        )
        .to(
          center,
          {
            strokeDashoffset: 0,
            opacity: 0.26,
            duration: 0.68,
            stagger: 0.03
          },
          "1.46"
        )
        .to(
          right,
          {
            strokeDashoffset: 0,
            opacity: 0.22,
            duration: 0.6,
            stagger: 0.03
          },
          "1.64"
        )
        .to(
          detail,
          {
            strokeDashoffset: 0,
            opacity: 0.14,
            duration: 0.4,
            stagger: 0.025
          },
          "1.74"
        )
        .to(
          depth,
          {
            strokeDashoffset: 0,
            opacity: 0.08,
            duration: 0.36,
            stagger: 0.018
          },
          "1.8"
        )
        .to(
          stoneFill,
          {
            autoAlpha: 0.26,
            scale: 1,
            duration: 0.82
          },
          "1.6"
        )
        .fromTo(
          ".stone-highlight",
          {
            xPercent: -30,
            opacity: 0
          },
          {
            xPercent: 28,
            opacity: 0.12,
            duration: 0.76
          },
          "1.9"
        )
        .to(
          ".stone-highlight",
          {
            opacity: 0,
            duration: 0.24
          },
          "2.26"
        )
        .to(
          logo,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.54
          },
          "1.82"
        )
        .to(
          heroImage,
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.95,
            ease: "power2.out"
          },
          "2.08"
        )
        .to(
          overlay,
          {
            opacity: 0.03,
            duration: 0.95,
            ease: "power2.out"
          },
          "2.08"
        )
        .to(
          logo,
          {
            autoAlpha: 0,
            y: -8,
            duration: 0.42
          },
          "2.52"
        )
        .to(
          stoneFill,
          {
            autoAlpha: 0,
            scale: 1.01,
            duration: 0.42
          },
          "2.54"
        )
        .to(
          depth,
          {
            opacity: 0,
            duration: 0.18,
            stagger: 0.01
          },
          "2.56"
        )
        .to(
          detail,
          {
            opacity: 0,
            duration: 0.2,
            stagger: 0.01
          },
          "2.6"
        )
        .to(
          [right, center, left],
          {
            opacity: 0,
            duration: 0.28,
            stagger: 0.015
          },
          "2.66"
        )
        .to(
          recess,
          {
            opacity: 0,
            duration: 0.34,
            stagger: 0.02
          },
          "2.74"
        )
        .to(
          outline,
          {
            opacity: 0,
            duration: 0.38,
            stagger: 0.02
          },
          "2.82"
        )
        .to(
          introScreen,
          {
            autoAlpha: 0,
            duration: 0.42,
            ease: "power2.out"
          },
          "2.72"
        )
        .to(
          ".hero-subtitle",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6
          },
          "2.94"
        )
        .set(introScreen, {
          pointerEvents: "none"
        })
        .call(() => {
          setIntroDone(true);
        });
    },
    { scope: root, dependencies: [shouldPlayIntro] }
  );

  return (
    <div ref={root} className="relative">
      <Header />

      {!introDone && (
        <div
          ref={introScreenRef}
          className="fixed inset-0 z-[100] h-[100svh] w-full overflow-hidden bg-[#F5F1E8]"
        >
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(214,198,168,0.08)_0%,rgba(168,142,107,0.12)_100%)]"
          />

          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="absolute left-[7%] top-[11%] h-px w-[13%] bg-[rgba(79,64,50,0.08)]" />
            <div className="absolute right-[9%] top-[14%] h-px w-[11%] bg-[rgba(79,64,50,0.08)]" />
            <div className="absolute left-[82%] top-[10%] h-[16%] w-px bg-[rgba(79,64,50,0.06)]" />
            <div className="absolute left-[10%] bottom-[12%] h-px w-[14%] bg-[rgba(79,64,50,0.06)]" />
          </div>

          <div ref={heroImageRef} className="absolute inset-0 z-0">
            <Image
              src="/hero-house.png"
              alt="Residência Amato Lima"
              fill
              className="object-cover object-center hero-intro-image"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,241,232,0.78)_0%,rgba(245,241,232,0.44)_34%,rgba(168,142,107,0.10)_100%)]" />
          </div>

          <div className="absolute inset-0 z-30 flex items-center justify-center px-6">
            <div ref={logoRef} className="w-[660px] md:w-[880px]">
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
              <div className="stone-highlight absolute inset-0 rounded-[18px] bg-[linear-gradient(90deg,transparent,rgba(245,241,232,0.18),transparent)]" />
            </div>
          </div>

          <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
            <div ref={stoneWireRef} className="w-[320px] md:w-[470px]">
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
        <section className="relative h-[68vh] min-h-[580px] overflow-hidden md:h-[78vh] md:min-h-[720px]">
          <Image
            src="/hero-house.png"
            alt="Residência Amato Lima"
            fill
            priority
            className="object-cover object-center hero-main-image"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(168,142,107,0.06)_0%,rgba(154,123,95,0.14)_40%,rgba(154,123,95,0.24)_100%)]" />

          <div className="absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,rgba(214,198,168,0)_0%,rgba(214,198,168,0.24)_40%,rgba(214,198,168,0.68)_78%,#D6C6A8_100%)]" />

          <div className="shell relative flex h-full items-center">
            <div className="hero-copy max-w-[54rem]">
              <h1 className="font-display leading-[0.88] tracking-[-0.02em] text-[#EAE3D6]">
                <span className="hero-title-line title-line-1 block whitespace-nowrap text-[clamp(2.4rem,7vw,6.8rem)] font-[600]">
                  Ativos imobiliários
                </span>
                <span className="hero-title-line title-line-2 mt-1 block whitespace-nowrap text-[clamp(2.4rem,7vw,6.8rem)] font-[600]">
                  elevados ao essencial
                </span>
              </h1>

              <p className="hero-subtitle mt-6 max-w-[30rem] text-[15px] font-[400] leading-[1.9] tracking-[0.02em] text-[#EAE3D6]/84 md:text-[18px]">
                Transformados com inteligência e sofisticação
              </p>
            </div>
          </div>
        </section>

        <div className="relative z-10 -mt-12 bg-[#D6C6A8] pt-20 md:-mt-20 md:pt-28">
          <div className="shell">
            <div className="mb-12 flex items-center justify-center">
              <div className="h-px w-full max-w-[220px] bg-[rgba(154,123,95,0.22)]" />
            </div>

            <div className="pb-10 text-center">
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#9A7B5F] md:text-[11px]">
                Curadoria inicial
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

