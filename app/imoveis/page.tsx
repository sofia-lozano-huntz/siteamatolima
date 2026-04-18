import Link from "next/link";
import Header from "@/components/header";
import SectionShell from "@/components/section-shell";
import { featuredProperties } from "@/lib/data";

export default function ImoveisPage() {
  return (
    <main>
      <Header />
      <section className="pt-32">
        <SectionShell>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Imóveis
          </p>
          <h1 className="font-display text-5xl md:text-7xl">
            Seleção de ativos disponíveis
          </h1>
        </SectionShell>

        <SectionShell className="pt-0">
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProperties.map((item, index) => (
              <Link
                key={item.slug}
                href={`/imoveis/${item.slug}`}
                className="card-soft overflow-hidden rounded-[28px]"
              >
                <div
                  className="h-[340px]"
                  style={{
                    backgroundImage: `radial-gradient(circle at ${32 + index * 15}% 20%, rgba(255,255,255,.65), transparent 22%), linear-gradient(135deg, #efe8df 0%, #d9cab7 100%)`
                  }}
                />
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                    <span>{item.region}</span>
                    <span>{item.status}</span>
                  </div>
                  <h2 className="font-display text-3xl">{item.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </SectionShell>
      </section>
    </main>
  );
}
