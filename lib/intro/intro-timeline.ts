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

  gsap.set(q(".text-part-1"), { opacity: 0, y: 10 });
  gsap.set(q(".text-part-2"), { opacity: 0, y: 10 });

  gsap.set(q(".stone-path"), {
    opacity: 0,
    strokeDasharray: 1200,
    strokeDashoffset: 1200,
  });

  gsap.set(q(".lines-sweep"), {
    opacity: 0,
    xPercent: -120,
  });

  gsap.set(q(".stone-logo-wrap"), {
    opacity: 0,
    scale: 0.985,
    y: 4,
  });

  gsap.set(q(".phrase-sweep"), {
    opacity: 0,
    xPercent: -120,
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
      xPercent: 135,
      duration: sweepDuration,
      ease: "power2.inOut",
    },
    ">-0.35"
  );

  tl.to(
    q(".stone-logo-wrap"),
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: stoneRevealDuration,
      ease: easeSoft,
    },
    ">-0.72"
  );

  tl.to(
    q(".stone-path"),
    {
      opacity: 0,
      duration: 0.55,
      stagger: 0.02,
      ease: "power2.out",
    },
    "<+0.08"
  );

  tl.to({}, { duration: holdStone });

  tl.to(q(".phrase-sweep"), {
    opacity: 1,
    xPercent: 150,
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
      "<+0.12"
    );
  }

  if (homeCopy) {
    tl.to(
      homeCopy,
      {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "<+0.25"
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
    "<+0.12"
  );

  return tl;
}
