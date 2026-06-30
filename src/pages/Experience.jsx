import React from "react";

export default function Experience({ darkMode }) {
  return (
    <section
      id="experience"
      className={`min-h-screen px-6 md:px-20 py-24 pt-16 transition-all duration-500 overflow-hidden ${
        darkMode
          ? "bg-black text-white"
          : "bg-[#FADADD] text-[#3B1F1B]"
      }`}
    >
      {/* HEADING */}

      <div className="mb-20">
        <p className="uppercase tracking-[6px] text-[#B66E79] text-sm">
          My Journey
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Experience &{" "}
          <span className="text-[#B66E79]">
            Growth
          </span>
        </h2>

        <p
          className={`mt-5 max-w-2xl leading-8 ${
            darkMode ? "text-gray-300" : "text-[#5A3A35]"
          }`}
        >
          Although I am currently at the beginning of my professional journey,
          I continuously work on improving my frontend development skills
          through learning, practice, and real-world projects.
        </p>
      </div>

      {/* TIMELINE */}

      <div className="max-w-4xl mx-auto relative">

        <div className="absolute left-4 top-0 h-full w-[2px] bg-[#B66E79] opacity-40"></div>

        {/* CARD 1 */}

        <div className="relative flex gap-6 mb-12">
          <div className="w-8 flex justify-center">
            <span className="w-4 h-4 bg-[#B66E79] rounded-full mt-3"></span>
          </div>

          <div
            className={`rounded-3xl p-8 border w-full transition duration-300 hover:-translate-y-2 ${
              darkMode
                ? "bg-[#111] border-[#8C4E4F]"
                : "bg-white border-[#B66E79]"
            }`}
          >
            <h3 className="text-2xl font-bold">
              Frontend Developer Internship
            </h3>

            <p className="text-[#B66E79] mt-2">
              Seeking Internship Opportunities
            </p>

            <p
              className={`mt-5 leading-8 ${
                darkMode ? "text-gray-300" : "text-[#5A3A35]"
              }`}
            >
              Currently looking for an internship opportunity where I can apply
              my frontend development knowledge, gain practical experience, and
              contribute to real-world projects while learning from experienced
              professionals.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 rounded-full border border-[#B66E79]">
                React
              </span>

              <span className="px-4 py-2 rounded-full border border-[#B66E79]">
                Tailwind CSS
              </span>

              <span className="px-4 py-2 rounded-full border border-[#B66E79]">
                JavaScript
              </span>
            </div>
          </div>
        </div>

        {/* CARD 2 */}

        <div className="relative flex gap-6 mb-12">
          <div className="w-8 flex justify-center">
            <span className="w-4 h-4 bg-[#B66E79] rounded-full mt-3"></span>
          </div>

          <div
            className={`rounded-3xl p-8 border w-full transition duration-300 hover:-translate-y-2 ${
              darkMode
                ? "bg-[#111] border-[#8C4E4F]"
                : "bg-white border-[#B66E79]"
            }`}
          >
            <h3 className="text-2xl font-bold">
              Self Learning & Practice
            </h3>

            <p className="text-[#B66E79] mt-2">
              Portfolio & UI Development
            </p>

            <p
              className={`mt-5 leading-8 ${
                darkMode ? "text-gray-300" : "text-[#5A3A35]"
              }`}
            >
              Developed responsive web interfaces and portfolio sections to
              strengthen my understanding of component-based development,
              modern UI design principles, and clean coding practices.
            </p>

            <ul
              className={`mt-5 space-y-2 ${
                darkMode ? "text-gray-300" : "text-[#5A3A35]"
              }`}
            >
              <li>• Responsive website layouts</li>
              <li>• React component development</li>
              <li>• Tailwind CSS styling</li>
              <li>• UI/UX practice projects</li>
            </ul>
          </div>
        </div>

        {/* CARD 3 */}

        <div className="relative flex gap-6">
          <div className="w-8 flex justify-center">
            <span className="w-4 h-4 bg-[#B66E79] rounded-full mt-3"></span>
          </div>

          <div
            className={`rounded-3xl p-8 border w-full transition duration-300 hover:-translate-y-2 ${
              darkMode
                ? "bg-[#111] border-[#8C4E4F]"
                : "bg-white border-[#B66E79]"
            }`}
          >
            <h3 className="text-2xl font-bold">
              Continuous Professional Growth
            </h3>

            <p className="text-[#B66E79] mt-2">
              Present • Learning Everyday
            </p>

            <p
              className={`mt-5 leading-8 ${
                darkMode ? "text-gray-300" : "text-[#5A3A35]"
              }`}
            >
              I am continuously improving my skills in React, modern frontend
              technologies, responsive design, and professional development
              practices to prepare myself for a successful career as a Frontend
              Developer.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

















