"use client";

export default function IntroText() {
  return (
    <div className="intro-text-wrap absolute left-[7vw] top-1/2 z-20 max-w-[16ch] -translate-y-1/2">
      <p className="intro-text text-[clamp(2rem,5vw,4.5rem)] font-light leading-[0.95] tracking-[-0.04em] text-[#6E6253]">
        <span className="text-part text-part-1 block opacity-0">
          Da aquisição
        </span>
        <span className="text-part text-part-2 block opacity-0">
          ao extraordinário
        </span>
      </p>
    </div>
  );
}
