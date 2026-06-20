import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        bg-zinc-950
        border-t
        border-cyan-500/20
        py-10
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-center gap-8 text-2xl mb-6">

          <a
            href="https://github.com/aniagolummasi-droid"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="mailto:aniagolummasi@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} Sylvester Mmasi.
          All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
