"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Header from "./Header";

export default function IntroHero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const stoneRef = useRef<HTMLImageElement | null>(null);
  const phraseRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const shimmerRef = useRef<HTMLSpanElement | null>(null);
  const exploreRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray<SVGPathElement>(".logo-stroke");

      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 0,
        });
      });

      gsap.set(stoneRef.current, {
        opacity: 0,
        scale: 0.9,
        yPercent: 6,
        rotate: -1.5,
        filter: "blur(10px)",
      });

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 22,
        filter: "blur(10px)",
      });

      gsap.set(eyebrowRef.current, {
        opacity: 0,
        y: 16,
        letterSpacing: "0.28em",
      });

      gsap.set(shimmerRef.current, {
        xPercent: -160,
        opacity: 0,
      });

      gsap.set(exploreRef.current, {
        opacity: 0,
        y: 18,
      });

      gsap.set(svgRef.current, {
        opacity: 1,
        scale: 1.02,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          body.style.overflow = originalOverflow;
          setHeaderVisible(true);

          if (stoneRef.current) {
            gsap.to(stoneRef.current, {
              yPercent: 8,
              duration: 4.8,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }
        },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.35,
      });

      tl.to(
        eyebrowRef.current,
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.22em",
          duration: 1,
        },
        "-=0.95"
      );

      tl.to(
        paths,
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.35,
          stagger: 0.08,
          ease: "power2.inOut",
        },
        "-=0.55"
      );

      tl.to(
        stoneRef.current,
        {
          opacity: 0.62,
          scale: 1,
          yPercent: 8,
          rotate: 0,
          filter: "blur(0px)",
          duration: 1.7,
          ease: "power3.out",
        },
        "-=1.05"
      );

      tl.to(
        paths,
        {
          opacity: 0.16,
          duration: 0.8,
          stagger: 0.03,
        },
        "+=0.12"
      );

      tl.to(
        svgRef.current,
        {
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(
        shimmerRef.current,
        {
          opacity: 1,
          xPercent: 170,
          duration: 1.25,
          ease: "power2.inOut",
        },
        "-=0.12"
      );

      tl.to(
        exploreRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.45"
      );
    }, rootRef);

    return () => {
      ctx.revert();
      body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <>
      <Header visible={headerVisible} />

      <section
        ref={rootRef}
        className="relative min-h-[88vh] overflow-hidden bg-[#f6f1e8] text-neutral-900"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.88),rgba(246,241,232,0.97)_42%,rgba(239,231,218,1))]" />
        <div className="grain-layer absolute inset-0 opacity-[0.045] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),transparent_24%,transparent_76%,rgba(0,0,0,0.04))]" />

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <svg
            ref={svgRef}
            viewBox="0 0 1000 1000"
            className="h-[400px] w-[400px] overflow-visible md:h-[560px] md:w-[560px]"
            aria-hidden="true"
          >
            <path
              className="logo-stroke"
              d="M180 170 H790"
              stroke="rgba(95,88,78,0.34)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              className="logo-stroke"
              d="M180 170 V820"
              stroke="rgba(95,88,78,0.34)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              className="logo-stroke"
              d="M180 820 H790"
              stroke="rgba(95,88,78,0.28)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              className="logo-stroke"
              d="M790 170 V820"
              stroke="rgba(95,88,78,0.3)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              className="logo-stroke"
              d="M305 310 L285 730"
              stroke="rgba(95,88,78,0.34)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              className="logo-stroke"
              d="M430 315 L405 735"
              stroke="rgba(95,88,78,0.3)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              className="logo-stroke"
              d="M430 315 C600 315 655 430 655 540 C655 665 585 745 430 760"
              stroke="rgba(95,88,78,0.3)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              className="logo-stroke"
              d="M405 470 C520 470 570 545 570 610 C570 690 520 735 420 760"
              stroke="rgba(95,88,78,0.26)"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
            />
            <path
              className="logo-stroke"
              d="M605 170 H790"
              stroke="rgba(95,88,78,0.28)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              className="logo-stroke"
              d="M790 170 C720 210 690 280 690 375 V720 H790"
              stroke="rgba(95,88,78,0.32)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              className="logo-stroke"
              d="M845 380 L775 755"
              stroke="rgba(95,88,78,0.24)"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <img
          ref={stoneRef}
          src="/stone-logo.png"
          alt="Logo escultural da Amato Lima"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[320px] max-w-none -translate-x-1/2 -translate-y-[42%] select-none brightness-[0.99] contrast-[1.08] saturate-[0.96] md:w-[470px]"
        />

        <div className="relative z-20 mx-auto flex min-h-[88vh] max-w-[1600px] flex-col justify-center px-6 pb-10 pt-24 md:px-10 md:pt-28">
          <div
            ref={phraseRef}
            className="relative inline-block max-w-[720px] overflow-hidden"
          >
            <p
              ref={titleRef}
              className="text-[clamp(2.6rem,6.2vw,6.2rem)] font-light leading-[0.93] tracking-[-0.05em] text-neutral-900"
            >
              Ativos imobiliários
            </p>

            <p
              ref={eyebrowRef}
              className="mt-3 text-[clamp(0.95rem,1.7vw,1.35rem)] font-light uppercase tracking-[0.22em] text-neutral-600"
            >
              Real estate assets
            </p>

            <span
              ref={shimmerRef}
              className="pointer-events-none absolute inset-y-[-18%] left-[-35%] w-[18%] rotate-[14deg] bg-gradient-to-r from-transparent via-white/85 to-transparent opacity-0 blur-xl"
            />
          </div>

          <div
            ref={exploreRef}
            className="mt-20 flex items-center gap-3 text-[11px] uppercase tracking-[0.34em] text-neutral-600 md:mt-24"
          >
            <span className="block h-px w-10 bg-neutral-500/40" />
            explorar
          </div>
        </div>
      </section>
    </>
  );
}
