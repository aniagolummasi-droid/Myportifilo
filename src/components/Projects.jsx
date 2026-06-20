
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Digital Banking System",
    category: "Web Development",
    image: "/projects/bank.svg",
    github: "https://github.com/aniagolummasi-droid",
    demo: "#",
    description:
      "Full-stack banking platform built with React, Node.js, Express and MongoDB featuring authentication, account management and transactions.",
  },

  {
    id: 2,
    title: "Hospital Diagnostic Portal",
    category: "Healthcare",
    image: "/projects/hospital.svg",
    github: "https://github.com/aniagolummasi-droid",
    demo: "#",
    description:
      "Healthcare platform for ECG reporting, patient records and cardiovascular diagnostics.",
  },

  {
    id: 3,
    title: "Research Management System",
    category: "Research",
    image: "/projects/research.svg",
    github: "https://github.com/aniagolummasi-droid",
    demo: "#",
    description:
      "Research publication and project management platform for scientific collaboration.",
  },

  {
    id: 4,
    title: "Professional Portfolio",
    category: "Web Development",
    image: "/projects/portfolio.svg",
    github: "https://github.com/aniagolummasi-droid",
    demo: "#",
    description:
      "Modern animated portfolio website built with React, Tailwind and Framer Motion.",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "All",
    "Web Development",
    "Healthcare",
    "Research",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section
      id="projects"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="
            text-center
            text-5xl
            font-bold
            mb-12
          "
        >
          Featured Projects
        </motion.h2>

        {/* Filter Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`
                px-6
                py-3
                rounded-xl
                transition
                ${
                  filter === category
                    ? "bg-cyan-500 text-black"
                    : "bg-zinc-900 text-white"
                }
              `}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Project Grid */}

        <div className="grid md:grid-cols-2 gap-10">

          {filteredProjects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{
                scale: 1.03,
                rotateY: 5,
              }}
              className="
                bg-zinc-900
                rounded-3xl
                overflow-hidden
                glow-box
                cursor-pointer
              "
              onClick={() =>
                setSelectedProject(project)
              }
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-64
                  object-cover
                "
              />

              <div className="p-8">

                <span
                  className="
                    text-cyan-400
                    text-sm
                  "
                >
                  {project.category}
                </span>

                <h3
                  className="
                    text-2xl
                    font-bold
                    my-3
                  "
                >
                  {project.title}
                </h3>

                <p className="text-gray-400">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                    className="
                      px-4
                      py-3
                      border
                      border-cyan-400
                      rounded-xl
                    "
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                    className="
                      px-6
                      py-3
                      bg-cyan-500
                      rounded-xl
                      text-black
                      font-bold
                      flex
                      items-center
                      gap-2
                    "
                  >
                    Demo
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Modal */}

        <AnimatePresence>

          {selectedProject && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed
                inset-0
                bg-black/80
                flex
                justify-center
                items-center
                z-50
                p-6
              "
            >
              <motion.div
                initial={{
                  scale: 0.8,
                }}
                animate={{
                  scale: 1,
                }}
                exit={{
                  scale: 0.8,
                }}
                className="
                  bg-zinc-900
                  rounded-3xl
                  max-w-3xl
                  w-full
                  overflow-hidden
                "
              >

                <div className="relative">

                  <img
                    src={selectedProject.image}
                    alt=""
                    className="
                      w-full
                      h-80
                      object-cover
                    "
                  />

                  <button
                    onClick={() =>
                      setSelectedProject(null)
                    }
                    className="
                      absolute
                      top-4
                      right-4
                      bg-black/50
                      p-3
                      rounded-full
                    "
                  >
                    <FaTimes />
                  </button>

                </div>

                <div className="p-8">

                  <h3
                    className="
                      text-3xl
                      font-bold
                      mb-4
                    "
                  >
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-400">
                    {selectedProject.description}
                  </p>

                  <div className="flex gap-4 mt-8">

                    <a
                      href={
                        selectedProject.github
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="
                        px-6
                        py-3
                        border
                        border-cyan-400
                        rounded-xl
                      "
                    >
                      GitHub
                    </a>

                    <a
                      href={
                        selectedProject.demo
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="
                        px-6
                        py-3
                        bg-cyan-500
                        text-black
                        rounded-xl
                      "
                    >
                      Live Demo
                    </a>

                  </div>

                </div>

              </motion.div>
            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </section>
  );
}

             


