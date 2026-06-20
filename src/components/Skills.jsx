import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Clinical Skills",
    skills: [
      { name: "Electrocardiography (ECG)", level: 95 },
      { name: "Echocardiography (ECHO)", level: 92 },
      { name: "Cardiovascular Assessment", level: 90 },
      { name: "Patient Monitoring", level: 88 },
      { name: "Medical Diagnostics", level: 90 },
    ],
  },

  {
    title: "Research Skills",
    skills: [
      { name: "Scientific Writing", level: 95 },
      { name: "Literature Review", level: 95 },
      { name: "Data Analysis", level: 90 },
      { name: "Research Design", level: 92 },
      { name: "APA Referencing", level: 98 },
    ],
  },

  {
    title: "Web Development",
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Git & GitHub", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-center
            text-5xl
            font-bold
            mb-20
          "
        >
          Technical Skills
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="
                bg-zinc-900
                rounded-3xl
                p-8
                glow-box
                hover:scale-105
                transition
              "
            >
              <h3
                className="
                  text-2xl
                  font-bold
                  text-cyan-400
                  mb-8
                  text-center
                "
              >
                {category.title}
              </h3>

              {category.skills.map((skill) => (

                <div
                  key={skill.name}
                  className="mb-6"
                >
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>

                    <span className="text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>

                  <div
                    className="
                      bg-zinc-800
                      h-4
                      rounded-full
                      overflow-hidden
                    "
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      transition={{
                        duration: 1.8,
                      }}
                      className="
                        h-full
                        bg-cyan-400
                        rounded-full
                      "
                    />
                  </div>

                </div>

              ))}

            </motion.div>

          ))}

        </div>

        {/* Extra Stats */}

        <div
          className="
            grid
            md:grid-cols-4
            gap-8
            mt-20
          "
        >

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="
              bg-zinc-900
              p-8
              rounded-2xl
              text-center
              glow-box
            "
          >
            <h3 className="text-5xl text-cyan-400 font-bold">
              100+
            </h3>
            <p>ECG Procedures</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="
              bg-zinc-900
              p-8
              rounded-2xl
              text-center
              glow-box
            "
          >
            <h3 className="text-5xl text-cyan-400 font-bold">
              200+
            </h3>
            <p>ECHO Investigations</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="
              bg-zinc-900
              p-8
              rounded-2xl
              text-center
              glow-box
            "
          >
            <h3 className="text-5xl text-cyan-400 font-bold">
              20+
            </h3>
            <p>Research Projects</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="
              bg-zinc-900
              p-8
              rounded-2xl
              text-center
              glow-box
            "
          >
            <h3 className="text-5xl text-cyan-400 font-bold">
              10+
            </h3>
            <p>Web Applications</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

