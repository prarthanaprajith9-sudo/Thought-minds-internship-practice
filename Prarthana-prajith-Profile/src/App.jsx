import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="certifications">
        <Certifications />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}