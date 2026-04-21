"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Header from "./Header";

export default function IntroHero() {
  const rootRef = useRef<HTMLSectionElement | null>(null);
  const lineWrapRef = useRef<HTMLDivElement | null>(null);
  const stoneRef = useRef<HTMLImageElement | null>(null);
  const phraseRef = useRef<HTMLDivElement | null>(null);
  const shimmerRef = useRef<HTMLSpanElement | null>(null);
  const exploreRef = useRef<HTMLDivElement | null>(null);

  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".logo-line");

      gsap.set(lines, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(stoneRef.current, {
        opacity: 0,
        scale: 0.96,
      });

      gsap.set(phraseRef.current, {
        opacity: 0,
        filter: "blur(8px)",
        y: 10,
      });

      gsap.set(shimmerRef.current, {
        xPercent: -140,
        opacity: 0,
      });

      gsap.set(exploreRef.current, {
        opacity: 0,
        y: 12,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          body.style.overflow = originalOverflow;
          setHeaderVisible(true);
        },
      });

      tl.to(phraseRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1.2,
      });

      tl.to(
        lines,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.9,
          stagger: 0.08,
        },
        "-=0.45"
      );

      tl.to(
        stoneRef.current,
        {
          opacity: 0.2,
          scale: 1,
          duration: 1.2,
        },
        "-=0.45"
      );

      tl.to(
        [lines, stoneRef.current],
        {
          opacity: 0,
          duration: 1,
          stagger: 0.03,
        },
        "+=0.2"
      );

      tl.to(
        shimmerRef.current,
        {
          opacity: 1,
          xPercent: 140,
          duration: 1.1,
          ease: "power2.inOut",
        },
        "-=0.15"
      );

      tl.to(
        exploreRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
        },
        "-=0.35"
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),rgba(246,241,232,0.96)_45%,rgba(241,233,220,1))]" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply grain-layer" />

        <div
          ref={lineWrapRef}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
        >
          <div className="relative h-[360px] w-[360px] md:h-[460px] md:w-[460px]">
            <span className="logo-line absolute left-[22%] top-[20%] h-px w-[24%] bg-neutral-500/40" />
            <span className="logo-line absolute left-[22%] top-[20%] h-[24%] w-px bg-neutral-500/40" />
            <span className="logo-line absolute right-[18%] top-[20%] h-px w-[20%] bg-neutral-500/40" />
            <span className="logo-line absolute right-[18%] top-[20%] h-[55%] w-px bg-neutral-500/40" />
            <span className="logo-line absolute bottom-[18%] left-[22%] h-px w-[58%] bg-neutral-500/35" />
            <span className="logo-line absolute left-[30%] top-[28%] h-[44%] w-px rotate-[6deg] bg-neutral-500/35" />
            <span className="logo-line absolute left-[43%] top-[29%] h-[49%] w-px rotate-[4deg] bg-neutral-500/35" />
            <span className="logo-line absolute left-[41%] top-[36%] h-[30%] w-[24%] rounded-r-full border border-neutral-500/30" />
            <span className="logo-line absolute left-[57%] top-[30%] h-[44%] w-[20%] rounded-tl-[110px] rounded-bl-[110px] border border-neutral-500/30" />
            <span className="logo-line absolute right-[15%] top-[34%] h-[42%] w-px rotate-[12deg] bg-neutral-500/35" />
          </div>
        </div>

        <img
          ref={stoneRef}
          src="/stone-logo.png"
          alt="Logo escultural da Amato Lima"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[300px] max-w-none -translate-x-1/2 -translate-y-1/2 select-none md:w-[420px]"
        />

        <div className="relative z-20 mx-auto flex min-h-[88vh] max-w-[1600px] flex-col justify-center px-6 pb-10 pt-24 md:px-10 md:pt-28">
          <div className="max-w-[680px]">
            <div
              ref={phraseRef}
              className="relative inline-block overflow-hidden"
            >
              <p className="text-[clamp(2.4rem,6vw,5.8rem)] font-light leading-[0.95] tracking-[-0.04em]">
                Ativos imobiliários
              </p>
              <p className="mt-2 text-[clamp(1rem,2vw,1.45rem)] font-light tracking-[0.22em] uppercase text-neutral-600">
                Real estate assets
              </p>

              <span
                ref={shimmerRef}
                className="pointer-events-none absolute inset-y-0 left-[-30%] w-[20%] rotate-[12deg] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-md"
              />
            </div>
          </div>

          <div
            ref={exploreRef}
            className="mt-20 text-[11px] uppercase tracking-[0.32em] text-neutral-600 md:mt-24"
          >
            explorar
          </div>
        </div>
      </section>
    </>
  );
}
