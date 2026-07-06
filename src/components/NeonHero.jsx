import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaPaperPlane } from "react-icons/fa";
import portraitImg from "../assets/man_smoke.jpg";
import resumePdf from "../assets/resume.pdf";

export default function NeonHero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 md:py-28">
      <div className="section-wrap grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-8 lg:gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 order-2 lg:order-2"
        >
          <div className="holo-card panel glow-box relative z-10 aspect-[4/5] p-3 rounded-2xl">
            <img
              src={portraitImg}
              alt="Sylvester Mmasi portrait"
              className="h-full w-full rounded-xl object-cover grayscale contrast-125"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-lg bg-gradient-to-t from-black via-black/75 to-transparent p-4 pt-20">
              <h3 className="text-xl md:text-2xl font-bold">Sylvester Mmasi</h3>
              <p className="text-emerald-400 text-sm md:text-base">Full Stack Developer</p>
            </div>
          </div>
          <div className="orbital-base" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative order-1 lg:order-1"
        >
          <p className="text-emerald-400 text-lg mb-3 glow">I am Sylvester Mmasi.</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight section-title">
            Cardiac Physiologist | Clinical Researcher | Full-Stack Web Developer
          </h1>

          <p className="text-zinc-300 leading-7 md:leading-8 mb-6 md:mb-8 text-sm md:text-base">
            I build full-stack digital systems with React, Node.js, Express, MongoDB, and modern UI engineering, while bringing deep clinical insight to products that need accuracy, empathy, and scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
            <a href={resumePdf} download className="neon-button px-6 py-2.5 md:px-7 md:py-3 text-sm md:text-base">
              <FaDownload />
              Download Resume
            </a>

            <a
              href="https://github.com/aniagolummasi-droid"
              target="_blank"
              rel="noreferrer"
              className="ghost-button px-6 py-2.5 md:px-7 md:py-3 text-sm md:text-base"
            >
              <FaGithub />
              GitHub
            </a>

            <a href="#contact" className="ghost-button px-6 py-2.5 md:px-7 md:py-3 text-sm md:text-base">
              <FaPaperPlane />
              Hire Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
