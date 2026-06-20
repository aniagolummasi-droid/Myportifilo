import { FaDownload } from "react-icons/fa";

export default function ResumeButton() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Download My Resume
        </h2>

        <p className="text-gray-400 mb-8">
          View my professional experience in clinical physiology,
          research, and software development.
        </p>

        <a
          href="/resume.pdf"
          download
          className="
            inline-flex
            items-center
            gap-3
            px-8
            py-4
            bg-cyan-500
            rounded-xl
            hover:bg-cyan-600
            transition
          "
        >
          <FaDownload />
          Download Resume
        </a>

      </div>
    </section>
  );
}
