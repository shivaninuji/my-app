import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div
        id="home"
        className="px-5 bg-gradient-to-b from-blue-500/20 via-blue-500/5 to-background"
      >
        <Hero />
      </div>
      <div className="max-w-6xl px-5 mx-auto">
        <div id="about">
          <About />
        </div>
        <Skills />
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <Footer />
      </div>
    </main>
  );
}
