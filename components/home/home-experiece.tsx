"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type PlanPoint = {
  id: string;
  title: string;
  text: string;
  x: string;
  y: string;
};

const planPoints: PlanPoint[] = [
  {
    id: "implantacao",
    title: "Implantação",
    text: "Cada leitura começa pela relação entre volumetria, entorno e potencial de reposicionamento.",
    x: "18%",
    y: "24%"
  },
  {
    id: "estrutura",
    title: "Estrutura",
    text: "Intervenções precisas reorganizam circulação, matéria e percepção de valor.",
    x: "56%",
    y: "34%"
  },
  {
    id: "luz",
    title: "Luz e abertura",
    text: "Aberturas, proporção e profundidade redefinem a experiência espacial e comercial.",
    x: "72%",
    y: "62%"
  }
];

const curatedAssets = [
  {
    title: "Residência Jardins",
    location: "Jardins",
    status: "Disponível",
    image: "/hero-house.png"
  },
  {
    title: "Casa Tamboré 11",
    location: "Tamboré 11",
    status: "Disponível",
    image: "/image1.png"
  },
  {
    title: "Apartamento Higienópolis",
    location: "Higienópolis",
    status: "Disponível",
    image: "/image2.png"
  }
];

const sensoryFrames = [
  { src: "/image3.png", alt: "Frame sensorial 1" },
  { src: "/image4.png", alt: "Frame sensorial 2" },
  { src: "/image5.png", alt: "Frame sensorial 3" },
  { src: "/image6.png", alt: "Frame sensorial 4" }
];

export default function HomeExperience() {
  const [activePoint, setActivePoint] = useState<PlanPoint>(planPoints[0]);
  const [activeAsset, setActiveAsset] = useState(0);

  const currentAsset = useMemo(() => curatedAssets[activeAsset], [activeAsset]);

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="section-space">
        <div className="shell">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-[var(--foreground-soft)]">
                Leitura do ativo
              </p>

              <h2 className="max-w-[12ch] font-display text-4xl leading-[0.94] md:text-7xl">
                Cada projeto começa antes da intervenção.
              </h2>
            </div>

            <div className="max-w-xl md:justify-self-end">
              <p className="text-sm leading-7 text-[var(--foreground-soft)] md:text-base">
                A home não explica a empresa de forma literal. Ela revela a maneira
                como a Amato Lima observa, interpreta e reposiciona ativos
                residenciais de alto padrão.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="quiet-card relative min-h-[460px] overflow-hidden rounded-[32px] p-6 md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.24),transparent_24%),linear-gradient(180deg,rgba(214,198,168,0.22),rgba(234,227,214,0.08))]" />

              <div className="architectural-plan absolute inset-[7%] rounded-[24px] border border-[var(--line)]" />

              <div className="architectural-grid absolute inset-[11%] rounded-[18px]" />

              <div className="pointer-events-none absolute left-[12%] top-[20%] h-px w-[44%] bg-[var(--line-strong)]" />
              <div className="pointer-events-none absolute left-[12%] top-[36%] h-[28%] w-px bg-[var(--line)]" />
              <div className="pointer-events-none absolute right-[18%] top-[20%] h-[48%] w-px bg-[var(--line)]" />
              <div className="pointer-events-none absolute left-[28%] bottom-[24%] h-px w-[48%] bg-[var(--line-strong)]" />
              <div className="pointer-events-none absolute left-[38%] top-[36%] h-[22%] w-[22%] rounded-[18px] border border-[var(--line)]" />
              <div className="pointer-events-none absolute right-[22%] top-[44%] h-[16%] w-[20%] rounded-[999px] border border-[var(--line)]" />

              {planPoints.map((point) => {
                const isActive = activePoint.id === point.id;

                return (
                  <button
                    key={point.id}
                    type="button"
                    onMouseEnter={() => setActivePoint(point)}
                    onFocus={() => setActivePoint(point)}
                    onClick={() => setActivePoint(point)}
                    className="plan-point group absolute z-20"
                    style={{ left: point.x, top: point.y }}
                    aria-label={point.title}
                  >
                    <span
                      className={`block h-3.5 w-3.5 rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-[var(--bronze)] bg-[var(--sand)] shadow-[0_0_0_8px_rgba(191,163,122,0.10)]"
                          : "border-[var(--foreground-soft)] bg-[var(--background)]"
                      }`}
                    />
                  </button>
                );
              })}

              <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-[var(--line)] bg-[rgba(234,227,214,0.68)] p-5 backdrop-blur-md md:bottom-10 md:left-10 md:right-auto md:max-w-[360px]">
                <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[var(--foreground-soft)]">
                  {activePoint.title}
                </p>
                <p className="text-sm leading-7 text-[var(--foreground)]">
                  {activePoint.text}
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.34em] text-[var(--foreground-soft)]">
                  Intervenção
                </p>
                <h3 className="max-w-[12ch] font-display text-3xl leading-[0.96] md:text-5xl">
                  Arquitetura como instrumento de valorização.
                </h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Leitura legal e estratégica",
                    text: "Antes de qualquer gesto, o ativo é lido em suas restrições, oportunidades e capacidade de reposicionamento."
                  },
                  {
                    title: "Intervenção arquitetônica",
                    text: "A transformação não adiciona ruído. Reorganiza proporção, luz, circulação e permanência."
                  },
                  {
                    title: "Reposicionamento de valor",
                    text: "Cada decisão construtiva existe para ampliar percepção, desirabilidade e resultado."
                  }
                ].map((item) => (
                  <article
                    key={item.title}
                    className="border-t border-[var(--line)] py-6 first:border-t"
                  >
                    <h4 className="mb-2 font-display text-2xl">{item.title}</h4>
                    <p className="max-w-xl text-sm leading-7 text-[var(--foreground-soft)] md:text-base">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space overflow-hidden">
        <div className="shell">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.34em] text-[var(--foreground-soft)]">
                Ativos em curadoria
              </p>
              <h3 className="max-w-[10ch] font-display text-3xl leading-[0.96] md:text-5xl">
                Seleção precisa, não catálogo.
              </h3>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              {curatedAssets.map((asset, index) => (
                <button
                  key={asset.title}
                  type="button"
                  onClick={() => setActiveAsset(index)}
                  className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition ${
                    activeAsset === index
                      ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
                      : "border-[var(--line)] text-[var(--foreground-soft)] hover:border-[var(--line-strong)]"
                  }`}
                >
                  {asset.location}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-stretch">
            <div className="group relative min-h-[520px] overflow-hidden rounded-[34px]">
              <Image
                src={currentAsset.image}
                alt={currentAsset.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,20,14,0.08)_0%,rgba(28,20,14,0.16)_38%,rgba(28,20,14,0.54)_100%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-white/72">
                  {currentAsset.status}
                </p>
                <h4 className="max-w-[12ch] font-display text-3xl leading-[0.96] text-white md:text-5xl">
                  {currentAsset.title}
                </h4>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-white/72">
                  {currentAsset.location}
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {curatedAssets.map((asset, index) => {
                const isActive = index === activeAsset;

                return (
                  <button
                    key={asset.title}
                    type="button"
                    onClick={() => setActiveAsset(index)}
                    className={`group rounded-[26px] border px-5 py-6 text-left transition ${
                      isActive
                        ? "border-[var(--line-strong)] bg-[rgba(214,198,168,0.28)]"
                        : "border-[var(--line)] bg-[rgba(234,227,214,0.34)] hover:border-[var(--line-strong)] hover:bg-[rgba(214,198,168,0.16)]"
                    }`}
                  >
                    <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[var(--foreground-soft)]">
                      {asset.status}
                    </p>
                    <h5 className="font-display text-2xl text-[var(--foreground)]">
                      {asset.title}
                    </h5>
                    <p className="mt-2 text-sm text-[var(--foreground-soft)]">
                      {asset.location}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <div className="grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-center">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.34em] text-[var(--foreground-soft)]">
                Transformação
              </p>

              <h3 className="max-w-[10ch] font-display text-3xl leading-[0.96] md:text-5xl">
                O potencial já estava ali.
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--foreground-soft)] md:text-base">
                A diferença está na forma como o ativo é observado, editado e
                conduzido até seu ponto máximo de percepção.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-[var(--line)] bg-[rgba(234,227,214,0.32)] p-3 md:p-4">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="relative min-h-[420px] overflow-hidden rounded-[26px]">
                  <Image
                    src="/hero-house.png"
                    alt="Ativo original"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(79,64,50,0.08),rgba(79,64,50,0.28))]" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/10 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/72 backdrop-blur-md">
                    Ativo
                  </div>
                </div>

                <div className="relative min-h-[420px] overflow-hidden rounded-[26px]">
                  <Image
                    src="/image7.png"
                    alt="Transformação espacial"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(79,64,50,0.06),rgba(79,64,50,0.22))]" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/10 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/72 backdrop-blur-md">
                    Transformação
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space overflow-hidden">
        <div className="shell">
          <div className="mb-10">
            <p className="mb-3 text-[11px] uppercase tracking-[0.34em] text-[var(--foreground-soft)]">
              Forma, luz e matéria
            </p>
            <h3 className="max-w-[10ch] font-display text-3xl leading-[0.96] md:text-5xl">
              A atmosfera também constrói valor.
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-12">
            {sensoryFrames.map((frame, index) => (
              <div
                key={frame.src}
                className={`group relative overflow-hidden rounded-[28px] ${
                  index === 0
                    ? "md:col-span-7 md:min-h-[440px]"
                    : index === 1
                      ? "md:col-span-5 md:min-h-[440px]"
                      : index === 2
                        ? "md:col-span-4 md:min-h-[320px]"
                        : "md:col-span-8 md:min-h-[320px]"
                } min-h-[300px]`}
              >
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(79,64,50,0.06),rgba(79,64,50,0.22))]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-10">
        <div className="shell">
          <div className="rounded-[34px] border border-[var(--line)] bg-[rgba(214,198,168,0.18)] px-6 py-10 text-center md:px-10 md:py-14">
            <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-[var(--foreground-soft)]">
              Amato Lima
            </p>

            <h3 className="mx-auto max-w-[12ch] font-display text-3xl leading-[0.96] md:text-5xl">
              Ativos selecionados. Intervenções precisas. Presença silenciosa.
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--foreground-soft)] md:text-base">
              Uma operação pensada para transformar leitura em valor e imóvel em
              permanência.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contatos"
                className="rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[var(--background)] transition hover:opacity-90"
              >
                Entrar em contato
              </a>

              <a
                href="/imoveis"
                className="rounded-full border border-[var(--line-strong)] px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[var(--foreground)] transition hover:border-[var(--foreground)]"
              >
                Explorar ativos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
                }
