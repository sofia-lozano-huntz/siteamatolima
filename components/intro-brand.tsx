"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(useGSAP);

export default function IntroBrand() {
  const root = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (!introDone) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [introDone]);

  useGSAP(
  useGSAP(
  () => {
    const intro = introRef.current;
    if (!intro) return;

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" }
    });

    tl.set(".intro-screen", {
      autoAlpha: 1,
      pointerEvents: "auto"
    })
      .set(".hero-layer", {
        autoAlpha: 0,
        y: 24
      })
      .set("header", {
        autoAlpha: 0
      })
      .fromTo(
        intro,
        {
          autoAlpha: 0,
          scale: 0.982,
          y: 10
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 1
        }
      )
      .to({}, { duration: 0.55 })
      .to(
        intro,
        {
          autoAlpha: 0,
          scale: 0.996,
          duration: 0.6
        }
      )
      .to(
        ".hero-layer",
        {
          autoAlpha: 1,
          y: 0,
          duration: 1
        },
        "-=0.2"
      )
      .to(
        "header",
        {
          autoAlpha: 1,
          duration: 0.6,
          onStart: () => setHeaderVisible(true)
        },
        "-=0.55"
      )
      .to(".intro-screen", {
        autoAlpha: 0,
        pointerEvents: "none",
        duration: 0.12,
        onComplete: () => setIntroDone(true)
      });
  },
  { scope: root }
);

  return (
    <div ref={root} className="relative">
      <Header visible={headerVisible} />

<div className="intro-screen fixed inset-0 z-[100] h-[100svh] w-full overflow-hidden">
  <div className="absolute inset-0 bg-[#070504]" />

  <div className="absolute inset-0 flex items-center justify-center px-6">
    <div
      ref={introRef}
      className="relative w-[min(70vw,640px)] md:w-[min(60vw,760px)]"
    >
      <Image
        src="/logo-header.png"
        alt="Amato Lima"
        width={1400}
        height={520}
        priority
        className="h-auto w-full object-contain"
      />
    </div>
  </div>
</div>

      <div className="hero-layer relative">
        <section className="texture-travertine relative min-h-[100svh] overflow-hidden text-white">
          <div className="absolute inset-0 flex items-center justify-center px-6">

          <div className="shell relative flex min-h-[100svh] items-end pb-16 pt-28 md:items-center md:pb-24">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-[0.38em] text-white/70">
                Ativos imobiliários
              </p>

              <h1 className="font-display text-5xl leading-[0.92] md:text-8xl">
                Transformados com inteligência e sofisticação.
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/78 md:text-base">
                Aquisição estratégica, reposicionamento arquitetônico e
                comercialização em regiões nobres de São Paulo.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#imoveis"
                  className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] backdrop-blur-sm transition hover:bg-white hover:text-[var(--foreground)]"
                >
                  Ver imóveis
                </a>

                <a
                  href="#projetos"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-white/10"
                >
                  Ver projetos
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
