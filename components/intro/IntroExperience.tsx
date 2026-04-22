"use client";

import { useEffect, useRef } from "react";
import IntroLines from "./IntroLines";
import IntroStoneReveal from "./IntroStoneReveal";
import IntroText from "./IntroText";
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
      <IntroText />
      <IntroLines />
      <IntroStoneReveal />
    </div>
  );
}
