"use client";

type HeaderProps = {
  visible: boolean;
};

export default function Header({ visible }: HeaderProps) {
  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-40 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="pointer-events-auto mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-10">
        <div className="flex-1" />

        <div className="flex flex-1 justify-center">
          <div className="text-[11px] uppercase tracking-[0.35em] text-neutral-700">
            AL
          </div>
        </div>

        <div className="flex flex-1 justify-end">
          <button className="text-[11px] uppercase tracking-[0.28em] text-neutral-700 transition-opacity hover:opacity-60">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
