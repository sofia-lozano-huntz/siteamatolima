"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  items: { label: string; href: string }[];
};

export default function MobileMenu({ open, onClose, items }: Props) {
  return (
    <div
      className={`fixed inset-0 z-[60] transition ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-black/45" onClick={onClose} />
      <div
        className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#f3efe8] p-6 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <p className="text-xs uppercase tracking-[0.35em] text-black/45">
            Navegação
          </p>
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-[0.28em]"
          >
            Fechar
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-5">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="text-2xl font-light"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
