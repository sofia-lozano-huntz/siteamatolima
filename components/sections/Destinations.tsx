import SectionHeading from "@/components/ui/SectionHeading";

export default function Destinations() {
  return (
    <section id="destinations" className="bg-[#e4ddd3] py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
        <div
          className="flex min-h-[520px] flex-col justify-end rounded-[2rem] bg-cover bg-center p-8 text-white shadow-[0_25px_80px_rgba(0,0,0,0.12)]"
          style={{ backgroundImage: "url('/images/destination.jpg')" }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">
            Destination
          </p>
          <h3 className="mt-4 text-4xl font-light">O espírito do litoral, elevado</h3>
          <p className="mt-4 max-w-lg leading-7 text-white/80">
            Seções de destino com imagem cheia, headline curta e texto sensorial.
          </p>
        </div>

        <div className="rounded-[2rem] border border-black/8 bg-white p-8 md:p-10">
          <SectionHeading
            eyebrow="Destinations"
            title="Fabled locations chosen for their innate charisma"
            description="Poucas palavras, muito espaço negativo, imagens fortes e percepção de exclusividade."
          />

          <div className="mt-10 grid gap-4">
            {["Trancoso", "Angra dos Reis", "Bahia"].map((place) => (
              <div
                key={place}
                className="flex items-center justify-between rounded-[1.25rem] border border-black/8 px-5 py-4"
              >
                <span className="text-lg font-light">{place}</span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-black/40">
                  Explore
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
