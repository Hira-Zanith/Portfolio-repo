import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Mouse Glow */}
      <div
        className="mouse-glow"
        style={{
          left: `${mouse.x}px`,
          top: `${mouse.y}px`,
        }}
      />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>
            © {new Date().getFullYear()}{" "}
            <strong>PhaNix</strong>. All rights reserved.
          </p>

          <p>Built with React ⚡</p>
        </div>
      </footer>

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
}

export default App;