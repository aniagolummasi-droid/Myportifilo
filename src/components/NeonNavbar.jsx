import { useState } from "react";
import { FaBars, FaBriefcase, FaCode, FaEnvelope, FaGithub, FaHome, FaTimes, FaUser } from "react-icons/fa";

const links = [
  { href: "#home", label: "Home", icon: <FaHome /> },
  { href: "#about", label: "About", icon: <FaUser /> },
  { href: "#skills", label: "Skills", icon: <FaCode /> },
  { href: "#projects", label: "Projects", icon: <FaBriefcase /> },
  { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
];

export default function NeonNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-emerald-500/20 bg-zinc-950/85 shadow-[0_0_40px_rgba(16,185,129,0.08)] backdrop-blur-xl">
      <div className="section-wrap flex items-center justify-between gap-4 py-3 md:py-4">
        <a
          href="#home"
          className="whitespace-nowrap text-lg font-bold tracking-wide text-emerald-400 sm:text-xl md:text-2xl"
        >
          Sylvester
        </a>

        <ul className="hidden items-center gap-1 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                className="group flex items-center gap-2 rounded-full px-3 py-2 text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-500/10 hover:text-emerald-400"
                href={link.href}
              >
                <span className="text-emerald-500">{link.icon}</span>
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="https://github.com/aniagolummasi-droid"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-emerald-500/30 text-emerald-400 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-500/10"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
          </li>
        </ul>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-emerald-500/30 text-emerald-400 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-500/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-emerald-500/20 bg-zinc-900/85 backdrop-blur-md md:hidden">
          <ul className="section-wrap space-y-2 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-zinc-200 transition duration-300 hover:translate-x-1 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  <span className="text-emerald-500">{link.icon}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
