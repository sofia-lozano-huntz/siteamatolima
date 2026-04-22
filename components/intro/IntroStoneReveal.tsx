"use client";

import Image from "next/image";

export default function IntroStoneReveal() {
  return (
    <div className="absolute inset-0 z-40 pointer-events-none">
      <div className="absolute left-1/2 top-[34%] w-[min(28vw,420px)] -translate-x-1/2 -translate-y-1/2 md:left-[54%]">
        <div className="stone-logo-wrap relative opacity-0">
          <Image
            src="/images/intro/stone-logo.png"
            alt="Logo escultórica Amato Lima"
            width={1200}
            height={1200}
            priority
            className="stone-logo h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="absolute left-[7vw] top-1/2 z-10 max-w-[16ch] -translate-y-1/2">
        <div className="light-sweep phrase-sweep" />
      </div>
    </div>
  );
}
