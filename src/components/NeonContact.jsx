import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from "react-icons/fa";

const contactEmail = "aniagolummasi@gmail.com";
const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const hasEmailJsValue = (value) => Boolean(value && !value.includes("xxxxx") && !value.startsWith("your_"));

export default function NeonContact() {
  const [formData, setFormData] = useState(initialForm);
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const openMailFallback = () => {
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(formData.subject || "Portfolio message")}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please add your name, email, and message.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (![serviceId, templateId, publicKey].every(hasEmailJsValue)) {
      toast("EmailJS is not configured yet, opening your email app instead.");
      openMailFallback();
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Portfolio message",
          message: formData.message,
          to_email: contactEmail,
        },
        { publicKey },
      );

      toast.success("Message sent successfully.");
      setFormData(initialForm);
    } catch (error) {
      console.error(error);
      toast.error("Email service failed, opening your email app.");
      openMailFallback();
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="section-wrap">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 section-title">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-[.82fr_1.18fr] gap-6 md:gap-8">
          <div className="panel rounded-lg p-5 sm:p-6 md:p-8 glow-box space-y-6 md:space-y-8">
            <a className="flex items-center gap-4 md:gap-5 text-zinc-300 hover:text-emerald-300 transition" href="https://maps.google.com/?q=Nigeria" target="_blank" rel="noreferrer">
              <span className="grid h-10 md:h-12 w-10 md:w-12 shrink-0 place-items-center rounded-lg border border-emerald-500/30 text-emerald-400 bg-emerald-500/5">
                <FaMapMarkerAlt />
              </span>
              <span className="text-sm md:text-base">Nigeria</span>
            </a>

            <a className="flex items-center gap-4 md:gap-5 text-zinc-300 hover:text-emerald-300 transition" href="tel:+2349696390765">
              <span className="grid h-10 md:h-12 w-10 md:w-12 shrink-0 place-items-center rounded-lg border border-emerald-500/30 text-emerald-400 bg-emerald-500/5">
                <FaPhone />
              </span>
              <span className="text-sm md:text-base">+234 8165 0288 36</span>
            </a>

            <a className="flex items-center gap-4 md:gap-5 text-zinc-300 hover:text-emerald-300 transition break-all" href={`mailto:${contactEmail}`}>
              <span className="grid h-10 md:h-12 w-10 md:w-12 shrink-0 place-items-center rounded-lg border border-emerald-500/30 text-emerald-400 bg-emerald-500/5">
                <FaEnvelope />
              </span>
              <span className="text-xs sm:text-sm md:text-base">{contactEmail}</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="panel rounded-lg p-5 sm:p-6 md:p-8 glow-box">
            <p className="text-center text-zinc-300 mb-5 md:mb-6 text-sm md:text-base">Let us get in touch. Send me a message:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <input className="field text-sm md:text-base" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
              <input className="field text-sm md:text-base" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            <input className="field mt-3 md:mt-4 text-sm md:text-base" type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            <textarea className="field mt-3 md:mt-4 min-h-32 md:min-h-36 resize-y text-sm md:text-base" name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
            <div className="mt-6 md:mt-8 flex justify-center">
              <button type="submit" disabled={sending} className="neon-button px-6 md:px-9 py-2.5 md:py-3 text-sm md:text-base disabled:cursor-not-allowed disabled:opacity-60">
                <FaPaperPlane />
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
