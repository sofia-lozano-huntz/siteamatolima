import Header from "@/components/header";
import SectionShell from "@/components/section-shell";

export default function SobrePage() {
  return (
    <main>
      <Header ready />
      <section className="texture-travertine relative overflow-hidden pt-32 text-white">
        <div className="absolute inset-0 bg-[rgba(20,14,10,.42)]" />
        <div className="shell relative py-24">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/70">
            Sobre
          </p>
          <h1 className="font-display text-5xl md:text-7xl">
            Ativos imobiliários com inteligência e precisão.
          </h1>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="font-display text-4xl md:text-5xl">
            Quem é a Amato Lima
          </h2>
          <p className="text-[15px] leading-8 text-[rgba(29,24,20,.75)]">
            A Amato Lima atua na aquisição, transformação e comercialização de
            imóveis em regiões nobres, com foco em valorização real, curadoria
            de alto padrão e linguagem arquitetônica contemporânea.
          </p>
        </div>
      </SectionShell>
    </main>
  );
}
