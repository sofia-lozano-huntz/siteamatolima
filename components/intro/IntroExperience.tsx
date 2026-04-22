"use client";

import { useEffect, useRef } from "react";
import IntroLines from "./IntroLines";
import IntroStoneReveal from "./IntroStoneReveal";
import { createIntroTimeline } from "@/lib/intro/intro-timeline";

export default function IntroExperience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const timeline = createIntroTimeline(rootRef.current);

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="intro-root absolute inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      <div className="intro-bg absolute inset-0 bg-[#F5F1EA]" />

      <div className="absolute inset-0 flex items-center">
        <div className="intro-rail ml-[8vw] w-[min(76vw,420px)]">
          <div className="relative mb-8 h-[220px] md:mb-10 md:h-[300px]">
            <IntroLines />
            <IntroStoneReveal />
          </div>

          <div className="intro-text-wrap relative z-20">
            <p className="intro-text text-[clamp(2rem,5vw,4.5rem)] font-light leading-[0.95] tracking-[-0.04em] text-[#6E6253]">
              <span className="text-part text-part-1 block opacity-0">
                Da aquisição
              </span>
              <span className="text-part text-part-2 block opacity-0">
                ao extraordinário
              </span>
            </p>

            <div className="phrase-sweep-wrap relative mt-[-5.2rem] h-[7rem] overflow-hidden md:mt-[-6.2rem] md:h-[8rem]">
              <div className="light-sweep phrase-sweep" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
