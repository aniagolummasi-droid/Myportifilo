import { motion } from "framer-motion";

const stats = [
  ["300+", "ECG and ECHO procedures"],
  ["20+", "Research projects"],
  ["10+", "Web applications"],
  ["3+", "Years clinical experience"],
];

export default function NeonAbout() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="section-wrap">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 section-title"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[.95fr_1.05fr] gap-6 md:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="panel rounded-lg p-5 sm:p-6 md:p-8 glow-box"
          >
            <p className="text-emerald-400 mb-3 md:mb-4 font-semibold text-sm md:text-base">About Me</p>
            <p className="text-zinc-300 leading-7 md:leading-8 text-sm md:text-base">
              I combine clinical experience with software engineering, using React, Node.js, Express, MongoDB, and JavaScript to turn complex ideas into practical digital products.
            </p>
            <p className="text-zinc-400 leading-7 md:leading-8 mt-4 md:mt-5 text-sm md:text-base">
              My background as a cardiac physiologist brings deep domain expertise to healthcare technology, while my full-stack development skills enable me to build scalable, user-centered solutions that make real impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4"
          >
            {stats.map(([value, label]) => (
              <div key={label} className="panel rounded-lg p-4 md:p-6 glow-box">
                <h3 className="text-2xl md:text-4xl font-bold text-emerald-400">{value}</h3>
                <p className="mt-2 md:mt-3 text-zinc-300 text-xs md:text-base">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
