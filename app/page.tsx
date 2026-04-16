import Link from "next/link";
import IntroBrand from "@/components/intro-brand";
import SectionShell from "@/components/section-shell";
import { featuredProjects, featuredProperties } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <IntroBrand />

      <SectionShell>
        <div className="grid gap-10 md:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Posicionamento
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Um olhar autoral sobre aquisição, transformação e valor.
            </h2>
          </div>

          <div className="text-[15px] leading-8 text-[rgba(29,24,20,.75)]">
            Adquirimos imóveis em localizações estratégicas, reposicionamos cada
            ativo com inteligência arquitetônica e entregamos propriedades
            prontas para viver, investir ou preservar patrimônio.
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0" id="imoveis">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Seleção
            </p>
            <h2 className="font-display text-4xl md:text-6xl">
              Imóveis disponíveis
            </h2>
          </div>

          <Link
            href="/imoveis"
            className="hidden text-sm uppercase tracking-[0.2em] text-[var(--bronze)] md:block"
          >
            Ver todos
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProperties.map((item, index) => (
            <Link
              key={item.slug}
              href={`/imoveis/${item.slug}`}
              className="card-soft group overflow-hidden rounded-[28px]"
            >
              <div
                className="h-[340px] bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.02), rgba(0,0,0,.35)), radial-gradient(circle at ${30 + index * 12}% 18%, rgba(255,255,255,.65), transparent 25%), linear-gradient(135deg, #ece7df 0%, #d7cab8 52%, #c3ab92 100%)`
                }}
              />
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  <span>{item.region}</span>
                  <span>{item.status}</span>
                </div>
                <h3 className="font-display text-3xl">{item.title}</h3>
                <span className="mt-4 inline-block text-sm uppercase tracking-[0.2em] text-[var(--bronze)]">
                  Ver imóvel
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="projetos">
        <div className="mb-10">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Transformação
          </p>
          <h2 className="font-display text-4xl md:text-6xl">Projetos</h2>
        </div>

        <div className="grid gap-10">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div
                  className="card-soft h-[420px] rounded-[32px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(255,255,255,.3), rgba(255,255,255,.08)), linear-gradient(180deg, #eadfce 0%, #d8c7b1 100%)"
                  }}
                />
              </div>

              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="font-display text-3xl md:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-xl text-[15px] leading-8 text-[rgba(29,24,20,.75)]">
                  {project.description}
                </p>
                <Link
                  href="/projetos"
                  className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-[var(--bronze)]"
                >
                  Ver projetos
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="card-soft rounded-[40px] px-8 py-14 text-center md:px-16 md:py-24">
          <p className="font-display text-4xl leading-tight md:text-7xl">
            Transformamos imóveis em ativos extraordinários.
          </p>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="flex flex-col items-start justify-between gap-8 border-t border-[var(--line)] pt-10 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Contato
            </p>
            <h2 className="font-display text-4xl md:text-6xl">
              Fale com a Amato Lima
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contatos"
              className="rounded-full bg-[var(--foreground)] px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:opacity-90"
            >
              Entrar em contato
            </Link>
            <Link
              href="/contatos"
              className="rounded-full border border-[var(--line)] px-6 py-3 text-sm uppercase tracking-[0.2em]"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
