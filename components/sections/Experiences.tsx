import { experiences } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experiences() {
  return (
    <section id="experiences" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <SectionHeading
          eyebrow="Experiences"
          title="Every experience is made to measure."
          description="Hospitalidade, bem-estar, gastronomia e celebração como extensão natural da arquitetura."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {experiences.map((item) => (
            <div
              key={item}
              className="rounded-[1.75rem] border border-black/8 bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.04)]"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-black/40">
                Curated
              </p>
              <h3 className="mt-6 text-2xl font-light">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
