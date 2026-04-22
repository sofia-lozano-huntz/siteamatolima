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
        <div className="intro-rail ml-[8vw] -translate-y-[5vh] w-[min(82vw,520px)] md:w-[min(44vw,620px)]">
          <div className="relative mb-6 h-[170px] md:mb-8 md:h-[250px]">
            <IntroLines />
            <IntroStoneReveal />
          </div>

          <div className="intro-text-wrap relative z-20">
            <p className="intro-text font-light leading-[0.88] tracking-[-0.045em] text-[#5E5449] text-[clamp(3.2rem,9vw,8rem)] md:text-[clamp(4rem,6.2vw,7.5rem)]">
              <span className="text-part text-part-1 block opacity-0">
                Da aquisição
              </span>
              <span className="text-part text-part-2 block opacity-0">
                ao extraordinário
              </span>
            </p>

            <div className="phrase-sweep-wrap relative mt-[-6.8rem] h-[8.2rem] overflow-hidden md:mt-[-8.5rem] md:h-[10rem]">
              <div className="light-sweep phrase-sweep" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
