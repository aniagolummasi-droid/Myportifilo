import { FaGithub, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-cyan-400 text-2xl font-bold glow">
          GHOST TECH
        </h1>

        <ul className="hidden md:flex gap-8">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>

          <li>
            <a
              href="https://github.com/aniagolummasi-droid"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <FaBars size={24} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-zinc-900 p-6 space-y-4">
          <a href="#home" className="block">Home</a>
          <a href="#about" className="block">About</a>
          <a href="#skills" className="block">Skills</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
}