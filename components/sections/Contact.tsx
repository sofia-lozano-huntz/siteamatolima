import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#161616] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            Enquire
          </p>
          <h2 className="mt-4 text-3xl font-light md:text-5xl">
            Begin your journey into destination living
          </h2>
          <p className="mt-6 max-w-xl text-white/65 md:text-lg md:leading-8">
            Formulário enxuto, CTA premium e fechamento com linguagem de marca.
          </p>
        </div>

        <form className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
          <input
            className="h-14 rounded-full border border-white/10 bg-white/5 px-5 outline-none placeholder:text-white/35"
            placeholder="Seu nome"
          />
          <input
            className="h-14 rounded-full border border-white/10 bg-white/5 px-5 outline-none placeholder:text-white/35"
            placeholder="Seu e-mail"
          />
          <input
            className="h-14 rounded-full border border-white/10 bg-white/5 px-5 outline-none placeholder:text-white/35"
            placeholder="Destino desejado"
          />
          <textarea
            className="min-h-[150px] rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-white/35"
            placeholder="Conte um pouco sobre sua estadia ideal"
          />
          <button className="mt-2 h-14 rounded-full bg-white text-xs uppercase tracking-[0.28em] text-[#161616] transition hover:opacity-90">
            Send enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
