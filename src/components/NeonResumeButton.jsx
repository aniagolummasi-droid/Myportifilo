import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import resumePdf from "../assets/resume.pdf";

export default function NeonResumeButton() {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="panel rounded-lg p-6 sm:p-8 md:p-10 text-center glow-box"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold section-title">Download My Resume</h2>
          <p className="text-zinc-400 mt-3 md:mt-4 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            View my clinical, research, and software development experience in one document.
          </p>
          <a href={resumePdf} download className="neon-button px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base">
            <FaDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
