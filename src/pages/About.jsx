export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center px-6 overflow-x-hidden pt-20 transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-[#FADADD] text-[#3B1F1B]"
      }`}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}

        <div>
          <p className="uppercase tracking-[8px] text-[#B66E79] text-sm mb-6">
            About Me
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Professional <span className="text-[#B66E79]">Frontend</span>
            <br />
            Solutions For Web
          </h2>

          <div className="w-28 h-[4px] bg-[#B66E79] rounded-full mb-10"></div>

          <p
            className={`text-xl leading-10 max-w-xl mb-10 ${
              darkMode ? "text-gray-300" : "text-[#5C3A3A]"
            }`}
          >
            Hi, I'm Nimra — a Frontend Developer skilled in HTML, CSS,
            JavaScript, React.js, and Tailwind CSS. I focus on creating modern,
            responsive, and user-friendly interfaces.
          </p>

          <div className="grid grid-cols-2 gap-5 mb-12">
            <div className="border border-[#8C4E4F] rounded-2xl p-4 hover:-translate-y-2 duration-300">
              ✔ Clean UI Design
            </div>

            <div className="border border-[#8C4E4F] rounded-2xl p-4 hover:-translate-y-2 duration-300">
              ✔ Responsive Layouts
            </div>

            <div className="border border-[#8C4E4F] rounded-2xl p-4 hover:-translate-y-2 duration-300">
              ✔ React Projects
            </div>

            <div className="border border-[#8C4E4F] rounded-2xl p-4 hover:-translate-y-2 duration-300">
              ✔ Tailwind Styling
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-2xl bg-[#B66E79] hover:bg-[#8C4E4F] duration-300 shadow-xl text-white"
          >
            Contact Me
          </a>
        </div>

        {/* RIGHT CARD */}

        <div className="relative flex justify-center">
          <div className="absolute w-[450px] h-[450px] border border-[#B66E79] rounded-full border-dashed opacity-30"></div>

          <div className="w-[420px] rounded-[40px] bg-gradient-to-br from-[#8C4E4F] to-[#3B1F1B] border border-[#B66E79] shadow-[0_0_50px_rgba(182,110,121,0.35)] p-10">
            <h3 className="text-5xl font-bold text-[#FADADD] text-center mb-3">
              Frontend
            </h3>

            <p className="text-center text-[#FADADD]/80 mb-10">
              Passion • Creativity • Growth
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div
                className={`border border-[#B66E79] rounded-2xl p-5 text-center hover:-translate-y-2 duration-300 ${
                  darkMode
                    ? "bg-black/40 text-[#FADADD]"
                    : "bg-[#8C4E4F] text-white"
                }`}
              >
                HTML
              </div>

              <div
                className={`border border-[#B66E79] rounded-2xl p-5 text-center hover:-translate-y-2 duration-300 ${
                  darkMode
                    ? "bg-black/40 text-[#FADADD]"
                    : "bg-[#8C4E4F] text-white"
                }`}
              >
                CSS
              </div>

              <div
                className={`border border-[#B66E79] rounded-2xl p-5 text-center hover:-translate-y-2 duration-300 ${
                  darkMode
                    ? "bg-black/40 text-[#FADADD]"
                    : "bg-[#8C4E4F] text-white"
                }`}
              >
                JavaScript
              </div>

              <div
                className={`border border-[#B66E79] rounded-2xl p-5 text-center hover:-translate-y-2 duration-300 ${
                  darkMode
                    ? "bg-black/40 text-[#FADADD]"
                    : "bg-[#8C4E4F] text-white"
                }`}
              >
                React
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
