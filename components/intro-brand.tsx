"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(useGSAP);

function HouseWireframe() {
  return (
    <svg
      viewBox="0 0 1200 700"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* estrutura principal */}
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

        {/* cobertura superior */}
        <path className="wire-line" d="M405 175H930" />
        <path className="wire-line" d="M930 175L975 225" />
        <path className="wire-line" d="M975 225H445" />
        <path className="wire-line" d="M405 175L445 225" />

        {/* cobertura intermediária */}
        <path className="wire-line" d="M330 255H780" />
        <path className="wire-line" d="M780 255L820 302" />
        <path className="wire-line" d="M820 302H370" />
        <path className="wire-line" d="M330 255L370 302" />

        {/* balanço esquerdo */}
        <path className="wire-line" d="M305 315H690" />
        <path className="wire-line" d="M305 315L270 365" />
        <path className="wire-line" d="M270 365H655" />
        <path className="wire-line" d="M690 315L655 365" />
      </g>

      {/* aberturas */}
      <g className="wire-group wire-group-openings">
        <rect className="wire-line" x="390" y="330" width="95" height="120" />
        <rect className="wire-line" x="490" y="330" width="95" height="120" />
        <rect className="wire-line" x="590" y="330" width="95" height="120" />
        <rect className="wire-line" x="775" y="305" width="135" height="160" />

        <rect className="wire-line" x="505" y="235" width="110" height="48" />
        <rect className="wire-line" x="620" y="235" width="110" height="48" />
        <rect className="wire-line" x="835" y="225" width="90" height="55" />

        {/* vidro lateral */}
        <path className="wire-line" d="M330 300V430" />
        <path className="wire-line" d="M330 300H388" />
        <path className="wire-line" d="M388 300V430" />
      </g>

      {/* detalhes arquitetônicos */}
      <g className="wire-group wire-group-details">
        {/* vigas / repetição superior */}
        <path className="wire-line" d="M465 205V225" />
        <path className="wire-line" d="M505 205V225" />
        <path className="wire-line" d="M545 205V225" />
        <path className="wire-line" d="M585 205V225" />
        <path className="wire-line" d="M625 205V225" />
        <path className="wire-line" d="M665 205V225" />
        <path className="wire-line" d="M705 205V225" />
        <path className="wire-line" d="M745 205V225" />
        <path className="wire-line" d="M785 205V225" />
        <path className="wire-line" d="M825 205V225" />
        <path className="wire-line" d="M865 205V225" />

        <path className="wire-line" d="M395 282V302" />
        <path className="wire-line" d="M435 282V302" />
        <path className="wire-line" d="M475 282V302" />
        <path className="wire-line" d="M515 282V302" />
        <path className="wire-line" d="M555 282V302" />
        <path className="wire-line" d="M595 282V302" />
        <path className="wire-line" d="M635 282V302" />
        <path className="wire-line" d="M675 282V302" />
        <path className="wire-line" d="M715 282V302" />
        <path className="wire-line" d="M755 282V302" />

        {/* base e escadaria simplificada */}
        <path className="wire-line" d="M145 585H955" />
        <path className="wire-line" d="M150 615H970" />
        <path className="wire-line" d="M190 535L140 585" />
        <path className="wire-line" d="M970 560L1030 615" />

        <path className="wire-line" d="M120 585H235" />
        <path className="wire-line" d="M135 605H225" />
        <path className="wire-line" d="M150 625H215" />

        {/* alguns eixos */}
        <path className="wire-line wire-line-soft" d="M600 130V560" />
        <path className="wire-line wire-line-soft" d="M420 160V540" />
        <path className="wire-line wire-line-soft" d="M820 170V540" />
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
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      return;
    }

    setShouldPlayIntro(true);
  }, []);

  useEffect(() => {
    if (!shouldPlayIntro || introDone) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [introDone, shouldPlayIntro]);

  useGSAP(
    () => {
      if (!shouldPlayIntro) return;

      const introScreen = introScreenRef.current;
      const logo = logoRef.current;
      const wireframe = wireframeRef.current;
      const heroImage = heroImageRef.current;
      const overlay = overlayRef.current;

      if (!introScreen || !logo || !wireframe || !heroImage || !overlay) return;

      const wireLines = gsap.utils.toArray<SVGPathElement | SVGRectElement>(
        ".wire-line"
      );

      wireLines.forEach((line) => {
        const length =
          typeof (line as SVGGeometryElement).getTotalLength === "function"
            ? (line as SVGGeometryElement).getTotalLength()
            : 300;

        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: line.classList.contains("wire-line-soft") ? 0.12 : 0.22
        });
      });

      gsap.set(".hero-layer", {
        autoAlpha: 0,
        y: 28
      });

      gsap.set(logo, {
  autoAlpha: 0,
  y: 12,
  scale: 0.96
});

      gsap.set(wireframe, {
        autoAlpha: 1,
        scale: 0.985,
        y: 8
      });

      gsap.set(heroImage, {
        autoAlpha: 0,
        scale: 1.025
      });

      gsap.set(overlay, {
        opacity: 1
      });

      const structure = gsap.utils.toArray(".wire-group-structure .wire-line");
      const openings = gsap.utils.toArray(".wire-group-openings .wire-line");
      const details = gsap.utils.toArray(".wire-group-details .wire-line");

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.fromTo(
        introScreen,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.35 }
      )
        // assinatura mínima
        .to(
          logo,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.6
          },
          "0.15"
        )
        .to({}, { duration: 0.35 })
        .to(logo, {
  autoAlpha: 1,
  y: 0,
  scale: 1,
  duration: 0.7
}, "0.15")

        // wireframe começa
        .to(
          wireframe,
          {
            scale: 1,
            y: 0,
            duration: 0.8
          },
          "1.0"
        )
        .to(
          structure,
          {
            strokeDashoffset: 0,
            opacity: 0.72,
            duration: 0.95,
            stagger: {
              each: 0.035,
              from: "start"
            }
          },
          "1.08"
        )
        .to(
          openings,
          {
            strokeDashoffset: 0,
            opacity: 0.68,
            duration: 0.78,
            stagger: {
              each: 0.03,
              from: "start"
            }
          },
          "1.62"
        )
        .to(
          details,
          {
            strokeDashoffset: 0,
            opacity: 0.46,
            duration: 0.72,
            stagger: {
              each: 0.02,
              from: "start"
            }
          },
          "2.0"
        )

        // imagem real surge por trás
        .to(
          heroImage,
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1.05
          },
          "2.55"
        )
        .to(
          overlay,
          {
            opacity: 0.18,
            duration: 1
          },
          "2.55"
        )

        // linhas ficam alguns frames sobre a imagem
        .to({}, { duration: 0.32 })
        .to(
          [details],
          {
            opacity: 0,
            duration: 0.35
          },
          "3.55"
        )
        .to(
          [openings],
          {
            opacity: 0,
            duration: 0.42
          },
          "3.64"
        )
        .to(
          [structure],
          {
            opacity: 0,
            duration: 0.55,
            onStart: () => setHeaderVisible(true)
          },
          "3.74"
        )

        // hero assume
        .to(
          ".hero-layer",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95
          },
          "3.68"
        )
        .to(
          introScreen,
          {
            autoAlpha: 0,
            duration: 0.65
          },
          "4.1"
        )
        .set(introScreen, {
          pointerEvents: "none"
        })
        .call(() => {
          setIntroDone(true);
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
          className="fixed inset-0 z-[100] h-[100svh] w-full overflow-hidden bg-[#f4efe6]"
        >
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-[linear-gradient(180deg,#f8f5ef_0%,#f1eadf_52%,#ece3d6_100%)]"
          />

          <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
            <div className="absolute left-[7%] top-[11%] h-px w-[13%] bg-[rgba(45,33,24,0.14)]" />
            <div className="absolute right-[9%] top-[14%] h-px w-[11%] bg-[rgba(45,33,24,0.12)]" />
            <div className="absolute left-[82%] top-[10%] h-[16%] w-px bg-[rgba(45,33,24,0.10)]" />
            <div className="absolute left-[10%] bottom-[12%] h-px w-[14%] bg-[rgba(45,33,24,0.12)]" />
          </div>

          {/* imagem real por trás */}
          <div
            ref={heroImageRef}
            className="absolute inset-0"
          >
            <Image
              src="/hero-house.jpg"
              alt="Residência Amato Lima"
              fill
              priority
              className="object-cover object-center hero-intro-image"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,239,230,0.88)_0%,rgba(244,239,230,0.42)_30%,rgba(33,23,16,0.18)_100%)]" />
          </div>

          {/* assinatura mínima */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div
  ref={logoRef}
  className="relative w-[220px] md:w-[320px]"
>
              <Image
                src="/logo-header.png"
                alt="Amato Lima"
                width={720}
                height={240}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* wireframe */}
          <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
            <div
              ref={wireframeRef}
              className="w-full max-w-[1200px] translate-y-[2%]"
            >
              <HouseWireframe />
            </div>
          </div>
        </div>
      )}

      <div
        className={`hero-layer relative ${
          introDone ? "translate-y-0 opacity-100" : ""
        }`}
      >
        <section className="relative min-h-[100svh] overflow-hidden text-white">
          <Image
            src="/hero-house.jpg"
            alt="Residência Amato Lima"
            fill
            priority
            className="object-cover object-center hero-main-image"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,20,14,0.18)_0%,rgba(28,20,14,0.28)_35%,rgba(22,16,12,0.56)_100%)]" />

          <div className="shell relative flex min-h-[100svh] items-end pb-16 pt-28 md:items-center md:pb-24">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-[0.38em] text-white/72">
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
