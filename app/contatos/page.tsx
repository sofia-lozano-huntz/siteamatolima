import Header from "@/components/header";
import SectionShell from "@/components/section-shell";

export default function ContatosPage() {
  return (
    <main>
      <Header />
      <section className="pt-32">
        <SectionShell>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Contatos
          </p>
          <h1 className="font-display text-5xl md:text-7xl">
            Fale com a Amato Lima
          </h1>
        </SectionShell>

        <SectionShell className="pt-0">
          <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="text-[15px] leading-8 text-[rgba(29,24,20,.75)]">
                Depois vamos inserir WhatsApp, e-mail, Instagram e os dados
                institucionais. Por enquanto, a estrutura já está pronta.
              </p>
            </div>

            <form className="card-soft grid gap-4 rounded-[32px] p-6 md:p-8">
              <input
                className="rounded-2xl border border-[var(--line)] bg-white/50 px-4 py-4 outline-none"
                placeholder="Nome"
              />
              <input
                className="rounded-2xl border border-[var(--line)] bg-white/50 px-4 py-4 outline-none"
                placeholder="Email"
              />
              <input
                className="rounded-2xl border border-[var(--line)] bg-white/50 px-4 py-4 outline-none"
                placeholder="Telefone"
              />
              <textarea
                className="min-h-[180px] rounded-2xl border border-[var(--line)] bg-white/50 px-4 py-4 outline-none"
                placeholder="Mensagem"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--foreground)] px-6 py-4 text-sm uppercase tracking-[0.2em] text-white"
              >
                Enviar
              </button>
            </form>
          </div>
        </SectionShell>
      </section>
    </main>
  );
}
