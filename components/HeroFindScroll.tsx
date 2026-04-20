"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const editorialImages = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
];

const services = [
  {
    title: "Buy",
    description:
      "Com orientação real, estratégia clara e apoio técnico em cada etapa da decisão.",
  },
  {
    title: "Sell",
    description:
      "Posicionamento, narrativa e execução comercial para acelerar valor percebido.",
  },
  {
    title: "Rent",
    description:
      "Busca precisa, leitura de contexto e acesso a oportunidades mais alinhadas.",
  },
];

const supportCards = [
  {
    title: "Mortgage Services",
    text: "Estratégia financeira conectada à decisão imobiliária.",
  },
  {
    title: "Property Management",
    text: "Apoio contínuo para preservar valor e operação.",
  },
  {
    title: "Development",
    text: "Visão de obra, produto e valorização de ativo.",
  },
];

export default function HeroFindScroll() {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTl
          .from(".hero-pretitle", {
            y: 24,
            opacity: 0,
            duration: 0.7,
          })
          .from(
            ".hero-title-line",
            {
              yPercent: 110,
              opacity: 0,
              duration: 1,
              stagger: 0.12,
            },
            "-=0.3"
          )
          .from(
            ".hero-subtitle",
            {
              y: 24,
              opacity: 0,
              duration: 0.7,
            },
            "-=0.45"
          )
          .from(
            ".hero-cta",
            {
              y: 20,
              opacity: 0,
              duration: 0.6,
            },
            "-=0.4"
          )
          .from(
            ".hero-card",
            {
              y: 30,
              opacity: 0,
              duration: 0.8,
              stagger: 0.08,
            },
            "-=0.6"
          );

        gsap.to(".hero-bg", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-overlay", {
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        const sections = gsap.utils.toArray<HTMLElement>(".reveal-section");

        sections.forEach((section) => {
          const items = section.querySelectorAll(".reveal-item");

          gsap.from(items, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>(".parallax-image").forEach((image) => {
          gsap.fromTo(
            image,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, index) => {
          gsap.from(card, {
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
            delay: index * 0.05,
          });
        });

        gsap.from(".support-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".support-section",
            start: "top 75%",
            once: true,
          },
        });

        gsap.from(".support-card", {
          y: 45,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".support-grid",
            start: "top 80%",
            once: true,
          },
        });

        gsap.to(".scroll-indicator-line", {
          scaleY: 0.25,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, root);

      return () => ctx.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} className="bg-[#f6f1e8] text-[#1a1a1a]">
      <section className="hero-section relative min-h-screen overflow-hidden">
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="hero-overlay absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-between px-6 pb-8 pt-28 md:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-[760px]">
              <p className="hero-pretitle mb-5 text-[11px] uppercase tracking-[0.28em] text-white/70 md:text-xs">
                Real Estate, Rewired
              </p>

              <div className="overflow-hidden">
                <h1 className="hero-title-line text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.04em] text-white">
                  Find What
                </h1>
              </div>

              <div className="overflow-hidden">
                <h1 className="hero-title-line text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.04em] text-white">
                  Moves You
                </h1>
              </div>

              <p className="hero-subtitle mt-6 max-w-[560px] text-sm leading-6 text-white/80 md:text-base md:leading-7">
                Expert agents. Real guidance. A clear path to what comes next.
                Uma home com cadência editorial, narrativa visual e entradas
                controladas no scroll.
              </p>

              <div className="hero-cta mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#why"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
                >
                  Start Your Search
                </a>

                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
              {editorialImages.map((image, index) => (
                <div
                  key={index}
                  className="hero-card overflow-hidden rounded-[24px] border border-white/15 bg-white/10 backdrop-blur-sm"
                >
                  <div className="aspect-[0.95/1] overflow-hidden">
                    <img
                      src={image}
                      alt={`Editorial ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-end justify-between gap-6">
            <div className="flex items-center gap-4 text-white/70">
              <span className="text-[10px] uppercase tracking-[0.28em] md:text-[11px]">
                Scroll
              </span>
              <div className="h-14 w-px overflow-hidden bg-white/20">
                <div className="scroll-indicator-line h-full w-full origin-top bg-white" />
              </div>
            </div>

            <div className="hidden max-w-[300px] text-right text-xs leading-5 text-white/70 md:block">
              Editorial hero com imagens auxiliares, headline forte e parallax
              leve no plano de fundo.
            </div>
          </div>
        </div>
      </section>

      <section
        id="why"
        className="reveal-section mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
      >
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal-item">
            <p className="text-[11px] uppercase tracking-[0.24em] text-black/45">
              Why FIND
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              This isn’t just
              <br />
              about real estate.
            </h2>
          </div>

          <div className="space-y-8">
            <p className="reveal-item max-w-[760px] text-lg leading-8 text-black/75 md:text-[1.45rem] md:leading-10">
              It’s about identity. Progress. Getting unstuck. Você não está só
              procurando um lugar — está procurando alinhamento entre desejo,
              momento e decisão.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="reveal-item overflow-hidden rounded-[24px]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Interior 1"
                  className="parallax-image h-[360px] w-full object-cover"
                />
              </div>
              <div className="reveal-item overflow-hidden rounded-[24px]">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                  alt="Interior 2"
                  className="parallax-image h-[360px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal-section border-y border-black/10 bg-[#efe8dc]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div>
              <p className="reveal-item text-[11px] uppercase tracking-[0.24em] text-black/45">
                Real Estate, Rewired.
              </p>
              <h2 className="reveal-item mt-4 text-4xl font-medium leading-[0.95] tracking-[-0.04em] md:text-6xl">
                A home que anda
                <br />
                junto com a leitura.
              </h2>
            </div>

            <div className="space-y-6">
              {[
                "Talk to a real human. A primeira dobra precisa parecer humana e precisa.",
                "Get clarity. O conteúdo entra em blocos claros, não como um mural confuso.",
                "Move forward. O scroll empurra a narrativa com cadência e intenção.",
              ].map((step, index) => (
                <div
                  key={index}
                  className="reveal-item border-b border-black/10 pb-6 text-base leading-7 text-black/75"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
      >
        <div className="mb-12 max-w-[720px]">
          <p className="text-[11px] uppercase tracking-[0.24em] text-black/45">
            Services
          </p>
          <h2 className="mt-4 text-4xl font-medium leading-[0.95] tracking-[-0.04em] md:text-6xl">
            How this structure
            <br />
            can help you
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-card group rounded-[28px] border border-black/10 bg-white p-6 md:p-8"
            >
              <div className="overflow-hidden rounded-[22px]">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                  alt={service.title}
                  className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/65 md:text-base">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="support-section bg-[#131313] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="support-heading mb-12 max-w-[780px]">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
              Support
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-[0.95] tracking-[-0.04em] md:text-6xl">
              Beyond buying
              <br />
              and selling
            </h2>
            <p className="mt-6 max-w-[620px] text-base leading-7 text-white/65">
              O mercado não para. O site também não deve parecer estático. Aqui,
              as entradas no scroll mantêm o visitante envolvido sem roubar a
              clareza da mensagem.
            </p>
          </div>

          <div className="support-grid grid gap-6 md:grid-cols-3">
            {supportCards.map((card) => (
              <article
                key={card.title}
                className="support-card rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-medium tracking-[-0.02em]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {card.text}
                </p>
                <a
                  href="#"
                  className="mt-8 inline-flex text-sm text-white/85 transition-opacity hover:opacity-70"
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
            }
