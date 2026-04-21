import { villas } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Villas() {
  return (
    <section id="villas" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Villas"
          title="Architectural sanctuaries designed for destination living"
        />
        <p className="max-w-xl text-black/60 md:text-lg">
          Cartões editoriais com imagem dominante, microcopy, metadados e navegação limpa.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {villas.map((villa) => (
          <article
            key={villa.title}
            className="group overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
          >
            <div
              className="aspect-[4/4.8] bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
              style={{ backgroundImage: `url('${villa.image}')` }}
            />
            <div className="space-y-4 p-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-black/40">
                  {villa.meta}
                </p>
                <h3 className="mt-3 text-2xl font-light">{villa.title}</h3>
              </div>
              <p className="text-sm leading-7 text-black/62">{villa.description}</p>
              <a
                href="#contact"
                className="inline-flex text-xs uppercase tracking-[0.28em] text-black/70 transition hover:opacity-60"
              >
                View villa
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
