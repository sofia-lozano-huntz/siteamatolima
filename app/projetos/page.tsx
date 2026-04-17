import Header from "@/components/header";
import SectionShell from "@/components/section-shell";

export default function ProjetosPage() {
  return (
    <main>
      <Header visible />
      <section className="pt-32">
        <SectionShell>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Projetos
          </p>
          <h1 className="font-display text-5xl md:text-7xl">
            Transformação e valorização
          </h1>
        </SectionShell>

        <SectionShell className="pt-0">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-soft h-[420px] rounded-[32px]" />
            <div className="flex items-center">
              <p className="text-[15px] leading-8 text-[rgba(29,24,20,.75)]">
                Aqui entram renders, fotos reais, comparativos antes e depois e
                a narrativa de cada transformação.
              </p>
            </div>
          </div>
        </SectionShell>
      </section>
    </main>
  );
}
