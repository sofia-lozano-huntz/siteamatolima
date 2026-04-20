"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroFindLike() {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const introTl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        introTl
          .from(".hero-header", {
            y: -20,
            opacity: 0,
            duration: 0.8,
          })
          .from(
            ".hero-title-line",
            {
              yPercent: 110,
              opacity: 0,
              duration: 1,
              stagger: 0.12,
            },
            "-=0.35"
          )
          .from(
            ".hero-house",
            {
              y: 40,
              opacity: 0,
              scale: 0.96,
              duration: 1.2,
            },
            "-=0.75"
          )
          .from(
            ".hero-fog",
            {
              opacity: 0,
              duration: 1,
            },
            "-=0.9"
          );

        gsap.to(".hero-title-wrap", {
          yPercent: -18,
          opacity: 0.12,
          scale: 0.96,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "45% top",
            scrub: true,
          },
        });

        gsap.fromTo(
          ".hero-brand-wrap",
          {
            opacity: 0,
            yPercent: 10,
            scale: 0.92,
          },
          {
            opacity: 1,
            yPercent: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero-section",
              start: "18% top",
              end: "58% top",
              scrub: true,
            },
          }
        );

        gsap.to(".hero-house", {
          yPercent: 10,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-fog", {
          yPercent: -10,
          scale: 1.08,
          opacity: 0.98,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-brand-outline", {
          opacity: 0.92,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "30% top",
            end: "70% top",
            scrub: true,
          },
        });

        gsap.to(".hero-brand-sub", {
          opacity: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "34% top",
            end: "72% top",
            scrub: true,
          },
        });

        gsap.from(".next-section", {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".next-section",
            start: "top 88%",
            once: true,
          },
        });
      }, root);

      return () => ctx.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <section className="hero-section relative min-h-[180vh] bg-[#dfe8f2]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(215,228,241,0.95)_0%,rgba(217,229,240,0.72)_28%,rgba(224,233,241,0.32)_52%,rgba(255,255,255,0.22)_76%,rgba(255,255,255,0.95)_100%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.38),transparent_38%)]" />

          <div className="relative z-20 flex h-full flex-col px-6 pb-8 pt-7 md:px-10 lg:px-16">
            <header className="hero-header flex items-center justify-between">
              <div className="text-[clamp(1.8rem,3vw,2.8rem)] font-semibold uppercase tracking-[-0.08em] text-black">
                AL
              </div>

              <button
                type="button"
                aria-label="Abrir menu"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/20 backdrop-blur-sm"
              >
                <span className="relative block h-4 w-5">
                  <span className="absolute left-0 top-0 h-px w-full bg-black" />
                  <span className="absolute bottom-0 left-0 h-px w-full bg-black" />
                </span>
              </button>
            </header>

            <div className="relative flex flex-1 items-center justify-center">
              <div className="hero-title-wrap pointer-events-none absolute left-1/2 top-[19%] z-30 w-[92%] max-w-[980px] -translate-x-1/2 text-center md:top-[17%]">
                <div className="overflow-hidden">
                  <h1 className="hero-title-line text-[clamp(3.2rem,8.2vw,7.8rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-black/50">
                    Encontre
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="hero-title-line text-[clamp(3.2rem,8.2vw,7.8rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-black/50">
                    o que chama
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="hero-title-line text-[clamp(3.2rem,8.2vw,7.8rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-black/50">
                    por você
                  </h1>
                </div>
              </div>

              <div className="hero-brand-wrap pointer-events-none absolute left-1/2 top-[50%] z-30 w-full max-w-[1200px] -translate-x-1/2 -translate-y-1/2 px-4 text-center opacity-0">
                <div className="hero-brand-outline text-[clamp(3.6rem,12vw,10rem)] font-semibold uppercase leading-none tracking-[-0.09em] text-transparent [text-stroke:1px_rgba(255,255,255,0.8)] [-webkit-text-stroke:1px_rgba(255,255,255,0.8)]">
                  AMATO LIMA
                </div>
                <div className="hero-brand-sub -mt-2 text-[clamp(1.1rem,3vw,2.5rem)] font-light tracking-[-0.05em] text-white/0 md:-mt-4">
                  Ativos imobiliários
                </div>
              </div>

              <div className="hero-house absolute inset-x-0 bottom-0 z-10 mx-auto h-[72vh] w-full max-w-[1100px] px-0 sm:h-[74vh] md:h-[78vh] lg:h-[82vh]">
                <div className="relative h-full w-full">
                  <Image
                    src="/public/hero-house.png"
                    alt="Casa Amato Lima"
                    fill
                    priority
                    className="object-contain object-bottom"
                  />
                </div>
              </div>

              <div className="hero-fog pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[30vh] bg-[radial-gradient(circle_at_20%_40%,rgba(255,255,255,0.92),transparent_28%),radial-gradient(circle_at_50%_55%,rgba(255,255,255,0.98),transparent_34%),radial-gradient(circle_at_82%_40%,rgba(255,255,255,0.9),transparent_26%),linear-gradient(to_top,rgba(255,255,255,1),rgba(255,255,255,0.2))] blur-[12px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="next-section bg-[#f7f2eb] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[11px] uppercase tracking-[0.28em] text-black/45">
            Amato Lima
          </p>
          <h2 className="mt-4 max-w-[900px] text-3xl font-medium leading-[0.98] tracking-[-0.05em] text-black md:text-5xl">
            Aquisição estratégica, reposicionamento arquitetônico e valorização
            de ativos em regiões nobres de São Paulo.
          </h2>
        </div>
      </section>
    </div>
  );
}
