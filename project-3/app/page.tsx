import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Certifications from "@/components/sections/certifications";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
    </div>
  );
}