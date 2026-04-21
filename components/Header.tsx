"use client";

type HeaderProps = {
  visible: boolean;
};

export default function Header({ visible }: HeaderProps) {
  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-40 transition-all duration-1000 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 py-5 md:px-10 md:py-7">
        <div className="pointer-events-auto flex items-center justify-between rounded-full border border-white/25 bg-white/18 px-4 py-3 shadow-[0_10px_40px_rgba(80,70,55,0.08)] backdrop-blur-xl md:px-6">
          <div className="flex-1" />

          <div className="flex flex-1 justify-center">
            <div className="text-[10px] uppercase tracking-[0.42em] text-neutral-700 md:text-[11px]">
              AL
            </div>
          </div>

          <div className="flex flex-1 justify-end">
            <button className="group relative text-[10px] uppercase tracking-[0.32em] text-neutral-700 transition-opacity hover:opacity-75 md:text-[11px]">
              Menu
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-neutral-700/60 transition-all duration-500 group-hover:w-full" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
