"use client";

export default function IntroHomeTransition() {
  return (
    <section className="relative min-h-screen bg-[#F5F1EA]">
      <div className="home-image-layer absolute inset-0 opacity-0">
        <div className="absolute inset-0 bg-[url('/images/intro/home-hero.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center">
        <div className="home-copy ml-[8vw] w-[min(76vw,420px)] opacity-0">
          <p className="text-[clamp(2rem,5vw,4.5rem)] font-light leading-[0.95] tracking-[-0.04em] text-white">
            Da aquisição
            <br />
            ao extraordinário
          </p>
        </div>
      </div>
    </section>
  );
}
