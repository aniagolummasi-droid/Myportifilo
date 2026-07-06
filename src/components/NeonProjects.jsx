import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import bankImg from "../assets/bank.png";
import academiaImg from "../assets/academie.png";
import philo from "../assets/store.png";
import portfolioImg from "../assets/planent.png";

const projects = [
  {
    title: "MyBank",
    category: "Web Development",
    image: bankImg,
  github: "https://github.com/aniagolummasi-droid/bank-app.git",
    demo: "https://bank-app-jeal.onrender.com",
    description:
      "A comprehensive dashboard portal with simulated secure balance management, built with React, Node.js, Express, and MongoDB.",
  },
  {
    title: "Hospital Diagnostic Portal",
    category: "Healthcare",
    image: academiaImg,
    github: "https://github.com/aniagolummasi-droid",
    demo: "#",
    description:
      "Clinical reporting interface for ECG notes, patient records, and cardiovascular diagnostic review.",
  },
  {
    title: "PhiloVeey",
    category: "Web Development",
    image: philo,
    github: "https://github.com/aniagolummasi-droid//philoveey.git",
    demo: "https://philoveeystore.com.ng/",
    description:
      "An elegant e-commerce web platform optimized for online footwear sales with seamless checkout experience.",
  },
  {
    title: "solar system",
    category: "Web Development",
    image: portfolioImg,
    github: "https://github.com/group20-capstone-project/capstone-planet-project",
    demo: "https://capstone-planet-project.vercel.app/",
    description:
      "An animated React solar systtem with polished interactions, project showcases, and responsive UI.",
  },
];

const categories = ["All", "Web Development", "Healthcare", "Research"];

export default function NeonProjects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="section-wrap">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 section-title"
        >
          Featured Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`text-xs sm:text-sm ${filter === category ? "neon-button px-4 py-2" : "ghost-button px-4 py-2"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className="panel holo-card rounded-lg overflow-hidden cursor-pointer glow-box flex flex-col h-full max-w-sm w-full mx-auto"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
                  <div className="absolute bottom-0 p-3 sm:p-4 w-full">
                    <span className="text-xs sm:text-sm text-emerald-400">{project.category}</span>
                    <h3 className="mt-1 text-lg sm:text-xl font-bold line-clamp-2">{project.title}</h3>
                  </div>
                </div>

                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <p className="text-zinc-400 leading-6 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 flex-1">{project.description}</p>
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="ghost-button h-9 w-9 sm:h-10 sm:w-10 text-sm"
                      aria-label={`${project.title} GitHub`}
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="neon-button flex-1 text-xs sm:text-sm py-2"
                    >
                      Demo
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              className="panel rounded-lg max-w-2xl w-full overflow-hidden glow-box max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-48 sm:h-56 md:h-72">
                <img src={selectedProject.image} alt="" className="h-full w-full object-cover grayscale" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-3 top-3 ghost-button h-9 w-9 sm:h-10 sm:w-10 text-sm sm:text-base"
                  aria-label="Close project"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <p className="text-emerald-400 mb-2 text-sm sm:text-base">{selectedProject.category}</p>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-zinc-400 leading-7 sm:leading-8 text-sm sm:text-base">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
