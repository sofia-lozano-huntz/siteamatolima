import PillButton from "@/components/ui/PillButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#d9d1c6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_40%)]" />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-end gap-14 px-6 pb-12 pt-28 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-black/45">
            Luxury villas · curated stays
          </p>
          <h1 className="text-5xl font-light leading-[0.92] tracking-[-0.04em] md:text-7xl lg:text-[7.8rem]">
            Welcome home
            <span className="block italic text-black/70">
              to the extraordinary
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-black/65 md:text-lg">
            Um site editorial e cinematográfico para apresentar villas,
            destinos e experiências com uma estética silenciosa, sofisticada e
            imersiva.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <PillButton href="#villas" label="Explore villas" dark />
            <PillButton href="#about" label="Discover philosophy" />
          </div>
        </div>

        <div className="relative">
          <div
            className="aspect-[4/5] rounded-[2rem] border border-white/40 bg-cover bg-center shadow-[0_30px_100px_rgba(0,0,0,0.16)]"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          />
          <div className="absolute -bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/50 bg-white/55 p-5 backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-[0.38em] text-black/45">
              Featured stay
            </p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-light">Omai-style sanctuary</h2>
                <p className="mt-1 text-sm text-black/60">
                  Arquitetura, natureza e serviço em harmonia.
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-black/45">
                2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
