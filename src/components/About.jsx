import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-5xl font-bold mb-16">
          About Me
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            bg-zinc-900
            p-10
            rounded-3xl
            glow-box
          "
        >

          {/* Animated Pen */}

          <motion.div
            animate={{
              x: [0, 900]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            className="text-4xl mb-4"
          >
            ✒️
          </motion.div>

          <motion.p
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{
              duration: 8
            }}
            className="
              handwriting
              overflow-hidden
              whitespace-pre-wrap
              text-green-300
              text-3xl
              leading-relaxed
              border-r-4
              border-green-400
            "
          >
{`My journey combines healthcare, scientific research and software engineering.

As a Cardiac Physiologist, I have participated in hundreds of cardiovascular diagnostic procedures including Electrocardiography (ECG) and Echocardiography (ECHO), supporting patient care and clinical decision making.

Beyond clinical practice, I am actively involved in multidisciplinary scientific research spanning cardiovascular physiology, neuroscience, toxicology, nutrition, public health and adult education.

I am also a Full Stack Web Developer who builds modern digital solutions using React, Node.js, Express.js, MongoDB and JavaScript.

My goal is to bridge healthcare, research and technology to create meaningful solutions that improve lives and solve real-world problems.`}
          </motion.p>

        </motion.div>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          <div className="bg-zinc-900 p-8 rounded-2xl text-center glow-box">
            <h3 className="text-5xl text-cyan-400 font-bold">
              300+
            </h3>
            <p>ECG & ECHO Procedures</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl text-center glow-box">
            <h3 className="text-5xl text-cyan-400 font-bold">
              20+
            </h3>
            <p>Research Projects</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl text-center glow-box">
            <h3 className="text-5xl text-cyan-400 font-bold">
              10+
            </h3>
            <p>Web Applications</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl text-center glow-box">
            <h3 className="text-5xl text-cyan-400 font-bold">
              3+
            </h3>
            <p>Years Clinical Experience</p>
          </div>

        </div>

      </div>
    </section>
  );
}

