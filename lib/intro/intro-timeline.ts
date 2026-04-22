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

  gsap.set(q(".text-part-1"), { opacity: 0, y: 10 });
  gsap.set(q(".text-part-2"), { opacity: 0, y: 10 });

  gsap.set(q(".stone-path"), {
    opacity: 0,
    strokeDasharray: 1200,
    strokeDashoffset: 1200,
  });

  gsap.set(q(".lines-sweep"), {
    opacity: 0,
    xPercent: -140,
  });

  gsap.set(q(".stone-logo-wrap"), {
    opacity: 0,
    scale: 0.985,
    y: 6,
  });

  gsap.set(q(".phrase-sweep"), {
    opacity: 0,
    xPercent: -130,
  });

  if (homeImageLayer) {
    gsap.set(homeImageLayer, { opacity: 0 });
  }

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
    ">-0.08"
  );

  tl.to(
    q(".lines-sweep"),
    {
      opacity: 1,
      xPercent: 185,
      duration: sweepDuration,
      ease: "power2.inOut",
    },
    ">-0.4"
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
    ">-0.78"
  );

  tl.to(
    q(".stone-path"),
    {
      opacity: 0,
      duration: 0.7,
      stagger: 0.03,
      ease: "power2.out",
    },
    "<+0.08"
  );

  tl.to({}, { duration: holdStone });

  tl.to(q(".phrase-sweep"), {
    opacity: 1,
    xPercent: 260,
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
      "<+0.1"
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
