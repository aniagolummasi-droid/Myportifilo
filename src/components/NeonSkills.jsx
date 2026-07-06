import { motion } from "framer-motion";

const skills = [
  ["React / Frontend Engineering", 95],
  ["Node.js / Express APIs", 90],
  ["MongoDB / Data Modeling", 86],
  ["Clinical Diagnostics (ECG/ECHO)", 94],
  ["Scientific Research Writing", 95],
];

export default function NeonSkills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="section-wrap grid grid-cols-1 lg:grid-cols-[.75fr_1.25fr] gap-8 md:gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold section-title">My Skills</h2>
          <p className="mt-4 md:mt-5 text-zinc-400 leading-7 md:leading-8 text-sm md:text-base">
            A blend of engineering, clinical, and research strengths for
            products that need strong execution and thoughtful domain knowledge.
          </p>
        </motion.div>

        <div className="panel rounded-lg p-5 sm:p-6 md:p-8 glow-box">
          {skills.map(([name, level], index) => (
            <div key={name} className="mb-5 md:mb-6 last:mb-0">
              <div className="flex justify-between gap-3 md:gap-4 mb-2 text-xs sm:text-sm md:text-base">
                <span className="text-zinc-200">{name}</span>
                <span className="text-emerald-400 font-semibold">{level}%</span>
              </div>

              <div className="h-2.5 md:h-3 rounded-full border border-emerald-500/25 bg-zinc-900/50 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.08, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 shadow-[0_0_18px_rgba(16,185,129,.7)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
