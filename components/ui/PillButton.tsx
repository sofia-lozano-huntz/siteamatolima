type Props = {
  href: string;
  label: string;
  dark?: boolean;
};

export default function PillButton({ href, label, dark = false }: Props) {
  return (
    <a
      href={href}
      className={`inline-flex rounded-full px-6 py-3 text-xs uppercase tracking-[0.25em] transition ${
        dark
          ? "bg-[#1d1d1b] text-white hover:opacity-90"
          : "border border-black/15 hover:bg-white/50"
      }`}
    >
      {label}
    </a>
  );
}
