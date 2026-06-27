import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Showcase from "@/components/Showcase";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Bio />
      <Showcase />
      <Projects />
    </main>
  );
}
