"use client";

export default function IntroHomeTransition() {
  return (
    <section className="relative min-h-screen bg-[#F5F1EA]">
      <div className="home-image-layer absolute inset-0 opacity-0">
        <div className="absolute inset-0 bg-[url('/images/intro/home-hero.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center">
        <div className="home-copy ml-[8vw] -translate-y-[5vh] w-[min(82vw,520px)] md:w-[min(44vw,620px)] opacity-0">
          <p className="font-light leading-[0.88] tracking-[-0.045em] text-white text-[clamp(3.2rem,9vw,8rem)] md:text-[clamp(4rem,6.2vw,7.5rem)]">
            Da aquisição
            <br />
            ao extraordinário
          </p>
        </div>
      </div>
    </section>
  );
}
