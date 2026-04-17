"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(useGSAP);

function HouseWireframe() {
  return (
    <svg viewBox="0 0 1200 700" className="h-full w-full" fill="none">
      <g className="wire-group wire-group-structure">
        <path className="wire-line" d="M210 560H1020" />
        <path className="wire-line" d="M250 500H970" />
        <path className="wire-line" d="M305 438H935" />
        <path className="wire-line" d="M340 355H905" />
        <path className="wire-line" d="M380 265H920" />
        <path className="wire-line" d="M420 205H915" />

        <path className="wire-line" d="M300 520V380" />
        <path className="wire-line" d="M420 500V330" />
        <path className="wire-line" d="M545 500V305" />
        <path className="wire-line" d="M760 500V285" />
        <path className="wire-line" d="M920 500V250" />
        <path className="wire-line" d="M1010 560V250" />
      </g>

      <g className="wire-group wire-group-openings">
        <rect className="wire-line" x="390" y="330" width="95" height="120" />
        <rect className="wire-line" x="490" y="330" width="95" height="120" />
        <rect className="wire-line" x="590" y="330" width="95" height="120" />
      </g>

      <g className="wire-group wire-group-details">
        <path className="wire-line wire-line-soft" d="M600 130V560" />
      </g>
    </svg>
  );
}

export default function IntroBrand() {
  const root = useRef<HTMLDivElement | null>(null);
  const introScreenRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const wireframeRef = useRef<HTMLDivElement | null>(null);
  const heroImageRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [shouldPlayIntro, setShouldPlayIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("seenIntroV4");

    if (hasSeenIntro) {
      setIntroDone(true);
      setHeaderVisible(true);
      setShouldPlayIntro(false);
      return;
    }
  }, []);

  useGSAP(
    () => {
      if (!shouldPlayIntro) return;

      const logo = logoRef.current;
      const wireframe = wireframeRef.current;
      const heroImage = heroImageRef.current;
      const overlay = overlayRef.current;
      const introScreen = introScreenRef.current;

      if (!logo || !wireframe || !heroImage || !overlay || !introScreen) return;

      const lines = gsap.utils.toArray<SVGElement>(".wire-line");

      lines.forEach((line: any) => {
        const length = line.getTotalLength?.() || 300;
        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 0.2
        });
      });

      gsap.set(".hero-layer", { autoAlpha: 0, y: 30 });

      gsap.set(logo, {
        autoAlpha: 0,
        y: 12,
        scale: 0.96
      });

      gsap.set(heroImage, {
        autoAlpha: 0,
        scale: 1.08
      });

      gsap.set(overlay, {
        opacity: 1
      });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.to(introScreen, { autoAlpha: 1, duration: 0.4 })

        // LOGO ENTRA
        .to(
          logo,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7
          },
          "0.2"
        )

        .to({}, { duration: 0.4 })

        // LOGO SAI
        .to(
          logo,
          {
            autoAlpha: 0,
            y: -10,
            scale: 0.985,
            filter: "blur(3px)",
            duration: 0.4
          },
          "1.1"
        )

        // WIREFRAME DESENHA
        .to(
          lines,
          {
            strokeDashoffset: 0,
            duration: 1,
            stagger: 0.03
          },
          "1.2"
        )

        // IMAGEM ENTRA
        .to(
          heroImage,
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1.1
          },
          "2.2"
        )

        .to(
          overlay,
          {
            opacity: 0.2,
            duration: 1
          },
          "2.2"
        )

        // LINHAS SOMEM
        .to(
          lines,
          {
            opacity: 0,
            duration: 0.6
          },
          "3.2"
        )

        // HERO FINAL
        .to(".hero-layer", {
          autoAlpha: 1,
          y: 0,
          duration: 1
        })

        .to(introScreen, {
          autoAlpha: 0,
          duration: 0.6
        })

        .call(() => {
          setIntroDone(true);
          setHeaderVisible(true);
          sessionStorage.setItem("seenIntroV4", "true");
        });
    },
    { scope: root, dependencies: [shouldPlayIntro] }
  );

  return (
    <div ref={root} className="relative">
      <Header visible={headerVisible} />

      {!introDone && (
        <div
          ref={introScreenRef}
          className="fixed inset-0 z-[100] bg-[#f4efe6]"
        >
          <div ref={heroImageRef} className="absolute inset-0">
            <Image
              src="/hero-house.jpg"
              alt=""
              fill
              className="object-cover hero-intro-image"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div ref={logoRef} className="relative w-[220px] md:w-[320px]">
              <Image
                src="/logo-header.png"
                alt="Amato Lima"
                width={700}
                height={200}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div ref={wireframeRef} className="w-full max-w-[1200px]">
              <HouseWireframe />
            </div>
          </div>

          <div ref={overlayRef} className="absolute inset-0 bg-[#f4efe6]" />
        </div>
      )}

      <div className="hero-layer">
        <section className="relative min-h-screen">
          <Image
            src="/hero-house.jpg"
            alt=""
            fill
            className="object-cover hero-main-image"
          />
        </section>
      </div>
    </div>
  );
}
