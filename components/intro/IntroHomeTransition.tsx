"use client";

export default function IntroHomeTransition() {
  return (
    <section className="relative min-h-screen bg-[#F5F1EA]">
      <div className="home-image-layer absolute inset-0 opacity-0">
        <div className="absolute inset-0 bg-[url('/images/intro/home-hero.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 min-h-screen">
        <div className="absolute left-[7vw] top-1/2 max-w-[16ch] -translate-y-1/2">
          <p className="home-phrase text-[clamp(2rem,5vw,4.5rem)] font-light leading-[0.95] tracking-[-0.04em] text-white">
            Da aquisição
            <br />
            ao extraordinário
          </p>
        </div>
      </div>
    </section>
  );
}
