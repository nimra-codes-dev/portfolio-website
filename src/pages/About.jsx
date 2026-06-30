export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center px-4 sm:px-6 overflow-x-hidden pt-20 transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-[#FADADD] text-[#3B1F1B]"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* LEFT CONTENT */}

        <div className="text-center lg:text-left">
          <p className="uppercase tracking-[6px] sm:tracking-[8px] text-[#B66E79] text-sm mb-6">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Professional <span className="text-[#B66E79]">Frontend</span>
            <br />
            Solutions For Web
          </h2>

          <div className="w-28 h-[4px] bg-[#B66E79] rounded-full mb-10 mx-auto lg:mx-0"></div>

          <p
            className={`text-base sm:text-lg lg:text-xl leading-8 lg:leading-10 max-w-xl mb-10 mx-auto lg:mx-0 ${
              darkMode ? "text-gray-300" : "text-[#5C3A3A]"
            }`}
          >
            Hi, I'm Nimra — a Frontend Developer skilled in HTML, CSS,
            JavaScript, React.js, and Tailwind CSS. I focus on creating modern,
            responsive, and user-friendly interfaces.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
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

        <div className="relative flex justify-center mt-10 lg:mt-0 min-h-[400px] sm:min-h-[500px]">
          <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] border border-[#B66E79] rounded-full border-dashed opacity-30"></div>
                   <div className="w-[260px] sm:w-[340px] lg:w-[420px] rounded-[30px] sm:rounded-[40px] bg-gradient-to-br from-[#8C4E4F] to-[#3B1F1B] border border-[#B66E79] shadow-[0_0_50px_rgba(182,110,121,0.35)] p-6 sm:p-8 lg:p-10">

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FADADD] text-center mb-3">
              Frontend
            </h3>

            <p className="text-center text-sm sm:text-base text-[#FADADD]/80 mb-8 sm:mb-10">
              Passion • Creativity • Growth
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">

              <div
                className={`border border-[#B66E79] rounded-2xl p-3 sm:p-5 text-center hover:-translate-y-2 duration-300 ${
                  darkMode
                    ? "bg-black/40 text-[#FADADD]"
                    : "bg-[#8C4E4F] text-white"
                }`}
              >
                HTML
              </div>

              <div
                className={`border border-[#B66E79] rounded-2xl p-3 sm:p-5 text-center hover:-translate-y-2 duration-300 ${
                  darkMode
                    ? "bg-black/40 text-[#FADADD]"
                    : "bg-[#8C4E4F] text-white"
                }`}
              >
                CSS
              </div>

              <div
                className={`border border-[#B66E79] rounded-2xl p-3 sm:p-5 text-center hover:-translate-y-2 duration-300 ${
                  darkMode
                    ? "bg-black/40 text-[#FADADD]"
                    : "bg-[#8C4E4F] text-white"
                }`}
              >
                JavaScript
              </div>

              <div
                className={`border border-[#B66E79] rounded-2xl p-3 sm:p-5 text-center hover:-translate-y-2 duration-300 ${
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
