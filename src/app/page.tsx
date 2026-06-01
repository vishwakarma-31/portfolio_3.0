import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <div id="projects">
        <Reveal>
          <ProjectGrid />
        </Reveal>
      </div>
      <div id="experience">
        <Reveal>
          <Experience />
        </Reveal>
      </div>
      <div id="services">
        <Reveal>
          <Services />
        </Reveal>
      </div>
      <Reveal>
        <Certifications />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      
      <footer className="py-12 px-6 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Aryan Vishwakarma. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
