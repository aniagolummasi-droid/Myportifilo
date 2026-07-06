import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function NeonFooter() {
  return (
    <footer className="relative z-10 border-t border-emerald-500/20 bg-zinc-950/45 py-6 md:py-8">
      <div className="section-wrap text-center">
        <div className="flex justify-center gap-3 md:gap-5 text-lg md:text-xl mb-4 md:mb-5">
          <a className="ghost-button h-10 w-10 md:h-12 md:w-12 text-sm md:text-base" href="https://github.com/aniagolummasi-droid" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a className="ghost-button h-10 w-10 md:h-12 md:w-12 text-sm md:text-base" href="https://www.linkedin.com/in/sylvester-aniagolu-91377b200" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a className="ghost-button h-10 w-10 md:h-12 md:w-12 text-sm md:text-base" href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a className="ghost-button h-10 w-10 md:h-12 md:w-12 text-sm md:text-base" href="mailto:aniagolummasi@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-zinc-500 text-xs md:text-sm">
          Copyright {new Date().getFullYear()} Sylvester Mmasi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
