import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
      <SectionHeading
        eyebrow="About"
        title="Natureza, arquitetura e luxo discreto em um mesmo sistema visual."
      />

      <div className="space-y-6 text-black/68 md:text-lg md:leading-8">
        <p>
          A proposta visual aqui é menos “site imobiliário tradicional” e mais
          “marca de hospitalidade premium”.
        </p>
        <p>
          O foco está em grandes imagens, narrativa editorial, tipografia refinada
          e um ritmo visual mais lento e sofisticado.
        </p>
      </div>
    </section>
  );
}
