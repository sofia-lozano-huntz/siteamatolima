import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Villas from "@/components/sections/Villas";
import Destinations from "@/components/sections/Destinations";
import Experiences from "@/components/sections/Experiences";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="bg-[#f3efe8] text-[#1a1a1a]">
      <Header />
      <Hero />
      <About />
      <Villas />
      <Destinations />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  );
}
