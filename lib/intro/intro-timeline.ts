import gsap from "gsap";
import { introConfig } from "./intro-config";

export function createIntroTimeline(root: HTMLElement) {
  const q = gsap.utils.selector(root);

  const {
    holdStart,
    textInDuration,
    textOverlap,
    linesDuration,
    linesStagger,
    sweepDuration,
    stoneRevealDuration,
    holdStone,
    phraseSweepDuration,
    homeRevealDuration,
    introFadeDuration,
    easeSoft,
    easePrimary,
  } = introConfig;

  const homeImageLayer = document.querySelector(".home-image-layer");
  const homeCopy = document.querySelector(".home-copy");

  gsap.set(q(".text-part-1"), { opacity: 0, y: 12 });
  gsap.set(q(".text-part-2"), { opacity: 0, y: 12 });

  gsap.set(q(".stone-path"), {
    opacity: 0,
    strokeDasharray: 1200,
    strokeDashoffset: 1200,
  });

  gsap.set(q(".lines-sweep"), {
    opacity: 0,
    xPercent: -110,
  });

  gsap.set(q(".stone-logo-wrap"), {
    opacity: 0,
    scale: 0.992,
    y: 0,
  });

  gsap.set(q(".phrase-sweep"), {
    opacity: 0,
    xPercent: -110,
  });

  if (homeImageLayer) gsap.set(homeImageLayer, { opacity: 0 });
  if (homeCopy) gsap.set(homeCopy, { opacity: 0 });

  const tl = gsap.timeline({
    defaults: { ease: easePrimary },
  });

  tl.to({}, { duration: holdStart });

  tl.to(q(".text-part-1"), {
    opacity: 1,
    y: 0,
    duration: textInDuration,
    ease: easeSoft,
  });

  tl.to(
    q(".text-part-2"),
    {
      opacity: 1,
      y: 0,
      duration: textInDuration,
      ease: easeSoft,
    },
    `>-${textOverlap}`
  );

  tl.to(
    q(".stone-path"),
    {
      opacity: 1,
      strokeDashoffset: 0,
      duration: linesDuration,
      stagger: linesStagger,
      ease: "power2.inOut",
    },
    ">-0.05"
  );

  tl.to(
    q(".lines-sweep"),
    {
      opacity: 1,
      xPercent: 118,
      duration: sweepDuration,
      ease: "power2.inOut",
    },
    ">-0.12"
  );

  tl.to(
    q(".stone-logo-wrap"),
    {
      opacity: 1,
      scale: 1,
      duration: stoneRevealDuration,
      ease: "power2.out",
    },
    ">-0.18"
  );

  tl.to({}, { duration: holdStone });

  tl.to(
    q(".stone-logo-wrap"),
    {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    ">-0.05"
  );

  tl.to(
    q(".stone-path"),
    {
      opacity: 0,
      duration: 0.45,
      stagger: 0.02,
      ease: "power2.out",
    },
    "<+0.02"
  );

  tl.to(q(".phrase-sweep"), {
    opacity: 1,
    xPercent: 138,
    duration: phraseSweepDuration,
    ease: "power2.inOut",
  });

  if (homeImageLayer) {
    tl.to(
      homeImageLayer,
      {
        opacity: 1,
        duration: homeRevealDuration,
        ease: "power2.out",
      },
      "<+0.18"
    );
  }

  if (homeCopy) {
    tl.to(
      homeCopy,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "<+0.22"
    );
  }

  tl.to(
    root,
    {
      opacity: 0,
      duration: introFadeDuration,
      ease: "power2.out",
      onComplete: () => {
        root.style.display = "none";
      },
    },
    "<+0.15"
  );

  return tl;
}
