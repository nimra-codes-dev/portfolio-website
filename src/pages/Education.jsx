export default function Education({ darkMode }) {
  return (
    <section
      id="education"
      className={`py-20 px-6 md:px-16 pt-16 transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-[#FADADD] text-[#3B1F1B]"
      }`}
    >
      {/* Heading */}

      <p
        className={`text-sm tracking-[6px] uppercase mb-4 ${
          darkMode ? "text-gray-400" : "text-[#8C4E4F]"
        }`}
      >
        My Education
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        Frontend{" "}
        <span className="text-[#B66E79]">
          Development
        </span>
      </h2>

      {/* Cards */}

      <div className="grid md:grid-cols-3 gap-10">

        {/* Card 1 */}

        <div
          className={`p-8 rounded-3xl border transition duration-300 hover:-translate-y-2 ${
            darkMode
              ? "bg-[#111] border-[#8C4E4F]"
              : "bg-white border-[#B66E79]"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-3">
            FA (Information Technology)
          </h3>

          <p className="text-[#B66E79] mb-2">
            Aspire College
          </p>

          <p
            className={
              darkMode ? "text-gray-400" : "text-[#5A3A35]"
            }
          >
            2023 – 2025
          </p>

          <p
            className={`mt-5 leading-7 ${
              darkMode ? "text-gray-300" : "text-[#5A3A35]"
            }`}
          >
            Completed intermediate studies with a focus on Information
            Technology, developing a strong foundation in computer science
            concepts and digital skills.
          </p>
        </div>

        {/* Card 2 */}

        <div
          className={`p-8 rounded-3xl border transition duration-300 hover:-translate-y-2 ${
            darkMode
              ? "bg-[#111] border-[#8C4E4F]"
              : "bg-white border-[#B66E79]"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-3">
            Frontend Development
          </h3>

          <p className="text-[#B66E79] mb-2">
            Self Learning & Continuous Practice
          </p>

          <p
            className={
              darkMode ? "text-gray-400" : "text-[#5A3A35]"
            }
          >
            HTML • CSS • JavaScript • React • Tailwind CSS
          </p>

          <p
            className={`mt-5 leading-7 ${
              darkMode ? "text-gray-300" : "text-[#5A3A35]"
            }`}
          >
            Continuously improving my frontend development skills through
            online resources, practical exercises, and modern web
            technologies to prepare for professional opportunities.
          </p>
        </div>

        {/* Card 3 */}

        <div
          className={`p-8 rounded-3xl border transition duration-300 hover:-translate-y-2 ${
            darkMode
              ? "bg-[#111] border-[#8C4E4F]"
              : "bg-white border-[#B66E79]"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-3">
            Portfolio & UI Projects
          </h3>

          <p className="text-[#B66E79] mb-2">
            Personal Development Work
          </p>

          <p
            className={
              darkMode ? "text-gray-400" : "text-[#5A3A35]"
            }
          >
            Responsive Web Design & UI Practice
          </p>

          <p
            className={`mt-5 leading-7 ${
              darkMode ? "text-gray-300" : "text-[#5A3A35]"
            }`}
          >
            Developed portfolio sections and practice projects to enhance
            problem-solving abilities, responsive design skills, and
            component-based frontend development techniques.
          </p>
        </div>

      </div>
    </section>
  );
}
