import Header from "@/components/header";
import SectionShell from "@/components/section-shell";
import { featuredProperties } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return featuredProperties.map((item) => ({ slug: item.slug }));
}

export default async function ImovelPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = featuredProperties.find((item) => item.slug === slug);

  if (!property) notFound();

  return (
    <main>
      <Header />

      <section className="pt-32">
        <SectionShell>
          <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr]">
            <div className="card-soft h-[520px] rounded-[32px] bg-[linear-gradient(135deg,#efe8df_0%,#d4c1aa_100%)]" />
            <div className="flex flex-col justify-end">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                {property.region}
              </p>
              <h1 className="font-display text-5xl md:text-7xl">
                {property.title}
              </h1>
              <p className="mt-6 text-[15px] leading-8 text-[rgba(29,24,20,.75)]">
                Página interna do imóvel. Depois vamos inserir galeria real,
                renders, antes e depois, dados técnicos e CTA de lead.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 text-sm uppercase tracking-[0.18em] text-[var(--muted)] md:grid-cols-4">
                <div className="rounded-2xl border border-[var(--line)] p-4">Área</div>
                <div className="rounded-2xl border border-[var(--line)] p-4">Suítes</div>
                <div className="rounded-2xl border border-[var(--line)] p-4">Vagas</div>
                <div className="rounded-2xl border border-[var(--line)] p-4">Status</div>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-soft h-[280px] rounded-[28px]" />
            <div className="card-soft h-[280px] rounded-[28px]" />
            <div className="card-soft h-[280px] rounded-[28px]" />
          </div>
        </SectionShell>
      </section>
    </main>
  );
}
