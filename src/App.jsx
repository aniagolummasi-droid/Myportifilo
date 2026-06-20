import CyberBackground from "./components/CyberBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ResumeButton from "./components/ResumeButton";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <CyberBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ResumeButton />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;