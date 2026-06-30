import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className={`min-h-screen px-6 py-24 pt-16 transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-[#FADADD] text-[#3B1F1B]"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-20">

          <p className="text-sm tracking-[0.3em] text-[#B66E79] uppercase mb-4">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-[#B66E79]">Connect</span>
          </h2>

          <p
            className={`max-w-3xl mx-auto text-lg leading-9 ${
              darkMode ? "text-gray-300" : "text-[#5A3A35]"
            }`}
          >
            I am currently seeking frontend internship opportunities where I
            can apply my technical skills, gain practical industry experience,
            and continue growing as a developer. I am passionate about creating
            responsive and user-friendly web applications and always eager to
            learn from experienced professionals.

            <br />
            <br />

            If you have an internship opportunity, project collaboration, or
            simply want to connect, feel free to reach out through email or
            WhatsApp. I would love to hear from you.
          </p>

        </div>

        {/* CONTACT CARDS */}

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* EMAIL CARD */}

          <a
            href="mailto:nimrakashifdev@gmail.com"
            className={`p-10 rounded-[30px] border transition-all duration-300 hover:-translate-y-3 ${
              darkMode
                ? "bg-[#111] border-[#8C4E4F]"
                : "bg-white border-[#B66E79]"
            }`}
          >
            <FaEnvelope
              size={45}
              className="text-[#B66E79] mb-6"
            />

            <h3 className="text-3xl font-bold mb-4">
              Email Me
            </h3>

            <p
              className={`leading-8 ${
                darkMode ? "text-gray-300" : "text-[#5A3A35]"
              }`}
            >
              Feel free to send me an email regarding internship opportunities,
              collaborations, frontend development discussions, or any
              professional inquiries. I usually respond as quickly as possible.
            </p>

            <p className="mt-6 text-[#B66E79] font-semibold text-lg">
              nimrakashifdev@gmail.com
            </p>

          </a>

          {/* WHATSAPP CARD */}

          <a
            href="https://wa.me/923410431839"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-10 rounded-[30px] border transition-all duration-300 hover:-translate-y-3 ${
              darkMode
                ? "bg-[#111] border-[#8C4E4F]"
                : "bg-white border-[#B66E79]"
            }`}
          >
            <FaWhatsapp
              size={45}
              className="text-green-500 mb-6"
            />

            <h3 className="text-3xl font-bold mb-4">
              WhatsApp
            </h3>

            <p
              className={`leading-8 ${
                darkMode ? "text-gray-300" : "text-[#5A3A35]"
              }`}
            >
              You can also contact me directly on WhatsApp for quick
              communication regarding internships, project discussions, or
              professional networking opportunities. I am always happy to
              connect and learn from new experiences.
            </p>

            <p className="mt-6 text-[#B66E79] font-semibold text-lg">
              +92 341 0431839
            </p>

          </a>

        </div>

      </div>
    </section>
  );
}
