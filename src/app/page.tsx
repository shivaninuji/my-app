"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CursorTrailCanvas from "@/components/ui/CursorTrailCanvas";
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
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
      {/* Include CursorTrailCanvas at the end of the main element */}
      <CursorTrailCanvas
        color="rgb(163, 194, 242, 0.6)"  // Optional: Custom color for the trail
        className="pointer-events-none z-50 md:flex hidden fixed inset-0 h-full w-full"  // Ensures it covers the viewport and doesn’t interfere with interactions
        style={{ zIndex: 10 }} // Optional: Adjust z-index if needed
      />
    </main>
  );
}
