
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("EmailJS integration coming next.");
  };

  return (
    <section
      id="contact"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-5xl font-bold mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <div className="flex items-center gap-4 mb-8">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <p>Nigeria</p>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <FaPhone className="text-cyan-400 text-2xl" />
              <p>+234 XXX XXX XXXX</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <p>aniagolummasi@gmail.com</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-4 bg-zinc-900 rounded-xl"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full p-4 bg-zinc-900 rounded-xl"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              className="w-full p-4 bg-zinc-900 rounded-xl"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Message"
              onChange={handleChange}
              className="w-full p-4 bg-zinc-900 rounded-xl"
            />

            <button
              type="submit"
              className="
                bg-cyan-500
                px-8
                py-4
                rounded-xl
              "
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}


  
