import { Toaster } from "react-hot-toast";
import CyberBackground from "./components/NeonBackground";
import Navbar from "./components/NeonNavbar";
import Hero from "./components/NeonHero";
import About from "./components/NeonAbout";
import Skills from "./components/NeonSkills";
import Projects from "./components/NeonProjects";
import ResumeButton from "./components/NeonResumeButton";
import Contact from "./components/NeonContact";
import Footer from "./components/NeonFooter";

function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen overflow-x-hidden">
      <CyberBackground />
      <Navbar />
      
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#18181b",
            color: "#f4f4f5",
            border: "1px solid rgba(16,185,129,.35)",
            boxShadow: "0 0 30px rgba(16,185,129,.25)",
          },
        }}
      />

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
