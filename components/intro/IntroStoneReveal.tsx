"use client";

import Image from "next/image";

export default function IntroStoneReveal() {
  return (
    <div className="mark-stage absolute left-0 top-0 w-full">
      <div className="stone-logo-wrap relative mx-auto w-[72vw] max-w-[220px] opacity-0 md:w-[min(22vw,320px)] md:max-w-none">
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
  );
}
