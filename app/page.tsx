import IntroExperience from "@/components/intro/IntroExperience";
import IntroHomeTransition from "@/components/intro/IntroHomeTransition";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F5F1EA]">
      <IntroHomeTransition />
      <IntroExperience />
    </main>
  );
}
