import React from "react";

export default function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className={`min-h-screen px-6 md:px-20 py-24 transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-[#FADADD] text-[#3B1F1B]"
      }`}
    >
      {/* HEADING */}

      <div className="mb-16 text-center">
        <p className="uppercase tracking-[8px] text-[#B66E79] text-sm mb-4">
          My Work
        </p>

        <h2 className="text-5xl font-bold">
          My <span className="text-[#B66E79]">Projects</span>
        </h2>

        <p
          className={`mt-5 max-w-2xl mx-auto text-lg ${
            darkMode ? "text-gray-300" : "text-[#5C3A3A]"
          }`}
        >
          Here is my personal portfolio project and my ongoing frontend
          development journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* PORTFOLIO CARD */}

        <div className="bg-gradient-to-br from-[#8C4E4F] to-[#3B1F1B] p-8 rounded-[30px] border border-[#B66E79] shadow-xl hover:-translate-y-2 duration-300">

          <h3 className="text-3xl font-bold text-[#FADADD] mb-5">
            Personal Portfolio Website
          </h3>

          <p className="text-[#FADADD]/90 leading-8 mb-6">
            A responsive personal portfolio built using React and Tailwind CSS
            to showcase my skills, education, experience, and projects.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 rounded-full bg-black/30 text-[#FADADD]">
              React
            </span>

            <span className="px-4 py-2 rounded-full bg-black/30 text-[#FADADD]">
              Tailwind CSS
            </span>

            <span className="px-4 py-2 rounded-full bg-black/30 text-[#FADADD]">
              Vite
            </span>
          </div>

          <button className="px-6 py-3 rounded-xl bg-[#B66E79] text-white hover:bg-[#FADADD] hover:text-[#3B1F1B] duration-300">
            View Project
          </button>

        </div>

        {/* INTERNSHIP MESSAGE */}

        <div
          className={`p-10 rounded-[30px] border border-[#B66E79] flex flex-col justify-center ${
            darkMode
              ? "bg-[#111]"
              : "bg-white/40 backdrop-blur-md"
          }`}
        >
          <h3 className="text-3xl font-bold text-[#B66E79] mb-6">
            Learning & Growing 🚀
          </h3>

          <p
            className={`text-lg leading-9 ${
              darkMode ? "text-gray-300" : "text-[#5C3A3A]"
            }`}
          >
            I am currently focusing on improving my frontend development skills
            and actively looking for internship opportunities to gain practical
            industry experience.
          </p>

          <p
            className={`mt-6 text-lg leading-9 ${
              darkMode ? "text-gray-300" : "text-[#5C3A3A]"
            }`}
          >
            At this stage, I have completed my personal portfolio project and
            continue building smaller practice projects while learning modern
            technologies like React, Tailwind CSS, and JavaScript.
          </p>

        </div>

      </div>
    </section>
  );
}


































// export default function Project() {
//   return <h2>Project Page</h2>;
// }


// export default function Project() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
//       <div className="max-w-5xl mx-auto">

//         {/* Heading */}
//         <h1 className="text-4xl font-bold text-purple-400 mb-10 border-b border-purple-500 pb-2">
//           My Projects
//         </h1>

//         {/* Project Grid */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {/* Project 1 */}
//           <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 duration-300">
//             <h2 className="text-2xl font-semibold text-purple-300">
//               Portfolio Website
//             </h2>
//             <p className="text-gray-300 mt-2">
//               A responsive personal portfolio built using React and TailwindCSS.
//             </p>
//             <button className="mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
//               View Project
//             </button>
//           </div>

//           {/* Project 2 */}
//           <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 duration-300">
//             <h2 className="text-2xl font-semibold text-purple-300">
//               Login Form UI
//             </h2>
//             <p className="text-gray-300 mt-2">
//               Beautiful login page with validation built using HTML, CSS and JavaScript.
//             </p>
//             <button className="mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
//               View Project
//             </button>
//           </div>

         
        

//         </div>
//       </div>
//     </div>
//   );
// }
