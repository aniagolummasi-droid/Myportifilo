
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-lg mb-3">
            Welcome to my Portfolio
          </p>

          <h1 className="text-6xl font-bold mb-4">
            Sylvester
            <span className="text-cyan-400"> Mmasi</span>
          </h1>

          <h2 className="text-2xl mb-6 text-gray-300">
            Cardiac Physiologist • Clinical Researcher • Full Stack Developer
          </h2>

          <p className="text-gray-400 leading-8 mb-8">
            Transforming Healthcare, Research and Technology
            into innovative digital solutions through clinical
            expertise, scientific research and modern web development.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-cyan-500 rounded-xl hover:scale-105 transition"
            >
              <FaDownload className="inline mr-2" />
              Resume
            </a>

            <a
              href="https://github.com/aniagolummasi-droid"
              target="_blank"
              className="px-8 py-4 border border-cyan-500 rounded-xl"
            >
              <FaGithub className="inline mr-2" />
              GitHub
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border border-cyan-500 rounded-xl"
            >
              Hire Me
            </a>

          </div>
        </motion.div>

        {/* Right Side 3D Card */}

        <motion.div
          whileHover={{
            rotateY: 10,
            rotateX: 10,
            scale: 1.05,
          }}
          transition={{ type: "spring" }}
          className="
            relative
            mx-auto
            w-[350px]
            h-[450px]
            rounded-3xl
            overflow-hidden
            glow-box
            bg-zinc-900
          "
        >
          <img
            src="/profile.svg"
            alt="profile"
            className="w-full h-full object-cover"
          />

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            to-transparent
            "
          />

          <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl font-bold">
              Sylvester Mmasi
            </h3>

            <p className="text-cyan-400">
              Full Stack Developer
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
