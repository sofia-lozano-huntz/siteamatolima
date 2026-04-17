"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(useGSAP);

function StoneWireframe() {
  return (
    <svg
      viewBox="0 0 1000 1000"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* contorno externo da pedra */}
      <g className="stone-group stone-group-outer">
        <path className="stone-line" d="M165 118H835" />
        <path className="stone-line" d="M835 118L894 176" />
        <path className="stone-line" d="M894 176V832" />
        <path className="stone-line" d="M894 832L832 890" />
        <path className="stone-line" d="M832 890H172" />
        <path className="stone-line" d="M172 890L118 835" />
        <path className="stone-line" d="M118 835V170" />
        <path className="stone-line" d="M118 170L165 118" />

        {/* leve espessura lateral */}
        <path className="stone-line stone-line-soft" d="M118 170L165 198" />
        <path className="stone-line stone-line-soft" d="M165 198H832" />
        <path className="stone-line stone-line-soft" d="M832 198L894 176" />

        <path className="stone-line stone-line-soft" d="M832 890L832 820" />
        <path className="stone-line stone-line-soft" d="M172 890L172 820" />
      </g>

      {/* cavidade interna da pedra */}
      <g className="stone-group stone-group-recess">
        <path className="stone-line" d="M262 250H748" />
        <path className="stone-line" d="M748 250L792 292" />
        <path className="stone-line" d="M792 292V714" />
        <path className="stone-line" d="M792 714L746 756" />
        <path className="stone-line" d="M746 756H270" />
        <path className="stone-line" d="M270 756L226 712" />
        <path className="stone-line" d="M226 712V292" />
        <path className="stone-line" d="M226 292L262 250" />

        {/* lado direito profundo */}
        <path className="stone-line stone-line-soft" d="M748 250V314" />
        <path className="stone-line stone-line-soft" d="M792 292H862" />
        <path className="stone-line stone-line-soft" d="M792 714H862" />
      </g>

      {/* símbolo interno */}
      <g className="stone-group stone-group-symbol">
        {/* haste esquerda */}
        <path
          className="stone-line stone-line-strong"
          d="M318 330C302 408 294 498 302 634C306 708 316 754 342 796"
        />
        <path
          className="stone-line stone-line-strong"
          d="M360 316C342 392 336 492 344 626C348 700 356 740 382 780"
        />

        {/* curva central externa */}
        <path
          className="stone-line stone-line-strong"
          d="M390 774C364 716 356 642 360 540C366 436 396 362 456 320C500 288 560 280 616 298C680 318 724 372 738 444C746 482 748 532 744 596C742 664 742 718 742 780"
        />

        {/* curva central interna */}
        <path
          className="stone-line stone-line-strong"
          d="M442 744C422 698 416 632 420 548C426 456 448 394 494 354C530 322 576 316 620 332C670 350 702 392 714 446C720 476 722 520 718 578C716 636 716 690 716 744"
        />

        {/* arco direito */}
        <path
          className="stone-line stone-line-strong"
          d="M630 300C708 300 772 302 826 304"
        />
        <path
          className="stone-line stone-line-strong"
          d="M826 304C824 448 822 590 820 736"
        />
        <path
          className="stone-line stone-line-strong"
          d="M820 736C790 736 758 736 726 736"
        />
        <path
          className="stone-line stone-line-strong"
          d="M726 736C724 662 724 590 724 520"
        />

        {/* fundo do encaixe */}
        <path className="stone-line stone-line-soft" d="M270 756L332 796" />
        <path className="stone-line stone-line-soft" d="M742 780L820 736" />
        <path className="stone-line stone-line-soft" d="M360 316L456 320" />
        <path className="stone-line stone-line-soft" d="M620 332L738 444" />
      </g>
    </svg>
  );
}

export default function IntroBrand() {
  const root = useRef<HTMLDivElement | null>(null);
  const introScreenRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const wireframeRef = useRef<HTMLDivElement | null>(null);
  const stoneFillRef = useRef<HTMLDivElement | null>(null);
  const heroImageRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [shouldPlayIntro, setShouldPlayIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("seenIntroV5");

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
      const stoneFill = stoneFillRef.current;
      const heroImage = heroImageRef.current;
      const overlay = overlayRef.current;

      if (!introScreen || !logo || !wireframe || !stoneFill || !heroImage || !overlay) {
        return;
      }

      const lines = gsap.utils.toArray<SVGPathElement>(".stone-line");

      lines.forEach((line) => {
        const length =
          typeof line.getTotalLength === "function" ? line.getTotalLength() : 300;

        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: line.classList.contains("stone-line-soft")
            ? 0.12
            : line.classList.contains("stone-line-strong")
            ? 0.2
            : 0.16
        });
      });

      gsap.set(".hero-layer", {
        autoAlpha: 0,
        y: 26
      });

      gsap.set(logo, {
        autoAlpha: 0,
        y: 10,
        scale: 0.975,
        filter: "blur(0px)"
      });

      gsap.set(wireframe, {
        autoAlpha: 1,
        scale: 0.98,
        y: 10
      });

      gsap.set(stoneFill, {
        autoAlpha: 0,
        scale: 0.99
      });

      gsap.set(heroImage, {
        autoAlpha: 0,
        scale: 1.025
      });

      gsap.set(overlay, {
        opacity: 1
      });

      const outer = gsap.utils.toArray(".stone-group-outer .stone-line");
      const recess = gsap.utils.toArray(".stone-group-recess .stone-line");
      const symbol = gsap.utils.toArray(".stone-group-symbol .stone-line");

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
            duration: 0.58
          },
          "0.15"
        )
        .to({}, { duration: 0.38 })
        .to(
          logo,
          {
            autoAlpha: 0,
            y: -8,
            filter: "blur(2px)",
            duration: 0.34
          },
          "0.98"
        )

        // pedra começa a surgir em linhas
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
          outer,
          {
            strokeDashoffset: 0,
            opacity: 0.72,
            duration: 0.92,
            stagger: 0.04
          },
          "1.05"
        )
        .to(
          recess,
          {
            strokeDashoffset: 0,
            opacity: 0.62,
            duration: 0.82,
            stagger: 0.035
          },
          "1.48"
        )
        .to(
          symbol,
          {
            strokeDashoffset: 0,
            opacity: 0.78,
            duration: 1.02,
            stagger: 0.045
          },
          "1.82"
        )

        // leve preenchimento com a pedra real
        .to(
          stoneFill,
          {
            autoAlpha: 0.38,
            scale: 1,
            duration: 0.75
          },
          "2.45"
        )

        // hero entra por trás
        .to(
          heroImage,
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1.05
          },
          "2.95"
        )
        .to(
          overlay,
          {
            opacity: 0.18,
            duration: 1
          },
          "2.95"
        )

        // a pedra começa a ceder espaço
        .to(
          stoneFill,
          {
            autoAlpha: 0.14,
            scale: 1.01,
            duration: 0.55
          },
          "3.45"
        )
        .to(
          symbol,
          {
            opacity: 0,
            duration: 0.42
          },
          "3.62"
        )
        .to(
          recess,
          {
            opacity: 0,
            duration: 0.44
          },
          "3.72"
        )
        .to(
          outer,
          {
            opacity: 0,
            duration: 0.55,
            onStart: () => setHeaderVisible(true)
          },
          "3.82"
        )
        .to(
          stoneFill,
          {
            autoAlpha: 0,
            duration: 0.48
          },
          "3.9"
        )

        // hero assume
        .to(
          ".hero-layer",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95
          },
          "3.78"
        )
        .to(
          introScreen,
          {
            autoAlpha: 0,
            duration: 0.65
          },
          "4.18"
        )
        .set(introScreen, {
          pointerEvents: "none"
        })
        .call(() => {
          setIntroDone(true);
          sessionStorage.setItem("seenIntroV5", "true");
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
            className="absolute inset-0 bg-[linear-gradient(180deg,#f8f5ef_0%,#f1eadf_54%,#ece3d6_100%)]"
          />

          <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
            <div className="absolute left-[7%] top-[11%] h-px w-[13%] bg-[rgba(45,33,24,0.14)]" />
            <div className="absolute right-[9%] top-[14%] h-px w-[11%] bg-[rgba(45,33,24,0.12)]" />
            <div className="absolute left-[82%] top-[10%] h-[16%] w-px bg-[rgba(45,33,24,0.10)]" />
            <div className="absolute left-[10%] bottom-[12%] h-px w-[14%] bg-[rgba(45,33,24,0.12)]" />
          </div>

          {/* hero por trás */}
          <div ref={heroImageRef} className="absolute inset-0 z-0">
            <Image
              src="/hero-house.jpg"
              alt="Residência Amato Lima"
              fill
              priority
              className="hero-intro-image object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,239,230,0.9)_0%,rgba(244,239,230,0.42)_34%,rgba(33,23,16,0.18)_100%)]" />
          </div>

          {/* assinatura mínima */}
          <div className="absolute inset-0 z-30 flex items-center justify-center px-6">
            <div
              ref={logoRef}
              className="relative h-[44px] w-[170px] md:h-[74px] md:w-[300px]"
            >
              <Image
                src="/logo-header.png"
                alt="Amato Lima"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* preenchimento leve da pedra */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
            <div
              ref={stoneFillRef}
              className="relative h-[230px] w-[230px] md:h-[360px] md:w-[360px]"
            >
              <Image
                src="/stone-object.png"
                alt="Pedra Amato Lima"
                fill
                priority
                className="object-contain stone-object-fill"
              />
            </div>
          </div>

          {/* wireframe da pedra */}
          <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
            <div
              ref={wireframeRef}
              className="h-[240px] w-[240px] md:h-[380px] md:w-[380px]"
            >
              <StoneWireframe />
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
            className="hero-main-image object-cover object-center"
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
