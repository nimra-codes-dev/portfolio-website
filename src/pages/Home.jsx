// Home.jsx

import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaLaptopCode,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";


export default function Home({ darkMode }) {
  return (
    <section
      id="home"
      className={`min-h-screen overflow-hidden pt-28 transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-[FADADD] text-[black]"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <div>

            <p className="uppercase tracking-[8px] text-[#B66E79] text-sm mb-6">
              Frontend Developer
            </p>

            <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-6">
              Nimra{" "}
              <span className="text-[#B66E79]">
                Kashif
              </span>
            </h1>

            <div className="w-28 h-[4px] bg-[#B66E79] rounded-full mb-10"></div>
              
              <p
                className={`text-xl leading-[50px] max-w-xl ${
                 darkMode ? "text-gray-300" : "text-[#5C3A3A]"
                 }`}
>
                   I am a Computer Science student and aspiring frontend developer,
                   currently learning and building projects using HTML, CSS,
                   JavaScript, Bootstrap, React, and Tailwind CSS. I am looking for
                    internship opportunities to gain practical experience and grow my
                    skills.
             </p>
            {/* <p className="text-gray-300 text-xl leading-[50px] max-w-xl">
              I am a Computer Science student and aspiring frontend developer,
              currently learning and building projects using HTML, CSS,
              JavaScript, Bootstrap, React, and Tailwind CSS. I am looking for
              internship opportunities to gain practical experience and grow my
              skills.
            </p> */}

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-6 mt-12">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-[#B66E79] hover:bg-[#8C4E4F] duration-300 shadow-xl"
              >
                Download CV
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 rounded-2xl border border-[#B66E79] text-[#B66E79] hover:bg-[#B66E79] hover:text-white duration-300"
              >
                Contact Me
              </button>

            </div>

            {/* SOCIALS */}

            <div className="mt-16">

              <h4 className="tracking-[8px] uppercase text-[#B66E79] mb-8">
                Find Me On
              </h4>

              <div className="flex gap-6">

                <a
                  href="https://github.com/nimra-codes-dev"
                  target="_blank"
                  className="w-16 h-16 rounded-2xl border border-[#8C4E4F] flex items-center justify-center hover:border-[#B66E79] hover:-translate-y-2 duration-300"
                >
                  <FaGithub size={28} />
                </a>

                <a
                  href="https://www.linkedin.com/in/nimra-kashif"
                  target="_blank"
                  className="w-16 h-16 rounded-2xl border border-[#8C4E4F] flex items-center justify-center hover:border-[#B66E79] hover:-translate-y-2 duration-300"
                >
                  <FaLinkedin size={28} />
                </a>

                <a
                  href="mailto:nimrakashifdev@gmail.com"
                  className="w-16 h-16 rounded-2xl border border-[#8C4E4F] flex items-center justify-center hover:border-[#B66E79] hover:-translate-y-2 duration-300"
                >
                  <HiOutlineMail size={28} />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative flex justify-center">

            {/* CIRCLE */}

            <div className="absolute w-[500px] h-[500px] border border-[#B66E79] rounded-full border-dashed opacity-40 animate-spin-slow"></div>

            {/* HTML */}

            <div className="absolute top-0 left-32 float-animation delay-1">
              <div className="w-28 h-32 rounded-3xl bg-[#111] border border-[#8C4E4F] flex flex-col items-center justify-center shadow-2xl">
                <FaHtml5 size={50} className="text-orange-500 mb-3" />
                <p>HTML</p>
              </div>
            </div>

            {/* CSS */}

            <div className="absolute top-40 left-0 float-animation delay-2">
              <div className="w-28 h-32 rounded-3xl bg-[#111] border border-[#8C4E4F] flex flex-col items-center justify-center shadow-2xl">
                <FaCss3Alt size={50} className="text-blue-500 mb-3" />
                <p>CSS</p>
              </div>
            </div>

            {/* JS */}

            <div className="absolute bottom-0 left-28 float-animation delay-3">
              <div className="w-28 h-32 rounded-3xl bg-[#111] border border-[#8C4E4F] flex flex-col items-center justify-center shadow-2xl">
                <IoLogoJavascript
                  size={50}
                  className="text-yellow-400 mb-3"
                />
                <p>JavaScript</p>
              </div>
            </div>

            {/* BOOTSTRAP */}

            <div className="absolute top-56 right-0 float-animation delay-4">
              <div className="w-28 h-32 rounded-3xl bg-[#111] border border-[#8C4E4F] flex flex-col items-center justify-center shadow-2xl">
                <FaBootstrap size={50} className="text-purple-500 mb-3" />
                <p>Bootstrap</p>
              </div>
            </div>

            {/* MAIN CARD */}

            <div className="w-[420px] h-[520px] rounded-[50px] bg-gradient-to-br from-[#8C4E4F] to-[#3B1F1B] border border-[#B66E79] shadow-[0_0_60px_rgba(182,110,121,0.4)] flex flex-col items-center justify-center text-center px-10">

              <FaLaptopCode
                size={90}
                className="text-[#FADADD] mb-8"
              />

              <h2 className="text-5xl font-bold mb-6">
                Frontend Developer
              </h2>

              <div className="w-24 h-1 bg-[#FADADD] rounded-full mb-8"></div>

              <p className="text-gray-200 text-xl leading-10">
                Building responsive websites and improving my skills through
                projects and continuous learning.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}














// // Home.jsx

// import {
//   FaGithub,
//   FaLinkedin,
//   FaHtml5,
//   FaCss3Alt,
//   FaBootstrap,
//   FaLaptopCode,
// } from "react-icons/fa";

// import { IoLogoJavascript } from "react-icons/io5";
// import { HiOutlineMail } from "react-icons/hi";

// export default function Home() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen bg-black text-white overflow-hidden pt-28"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid lg:grid-cols-2 gap-20 items-center">

//           {/* LEFT SIDE */}

//           <div>

//             <p className="uppercase tracking-[8px] text-[#B66E79] text-sm mb-6">
//               Frontend Developer
//             </p>

//             <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-6">
//               Nimra{" "}
//               <span className="text-[#B66E79]">
//                 Kashif
//               </span>
//             </h1>

//             <div className="w-28 h-[4px] bg-[#B66E79] rounded-full mb-10"></div>

//             <p className="text-gray-300 text-xl leading-[50px] max-w-xl">
//               I am a Computer Science student and aspiring frontend developer,
//               currently learning and building projects using HTML, CSS,
//               JavaScript, Bootstrap, React, and Tailwind CSS. I am looking for
//               internship opportunities to gain practical experience and grow my
//               skills.
//             </p>

//             {/* BUTTONS */}

//             <div className="flex flex-wrap gap-6 mt-12">

//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-8 py-4 rounded-2xl bg-[#B66E79] hover:bg-[#8C4E4F] duration-300 shadow-xl"
//               >
//                 Download CV
//               </a>

//               <button
//                 onClick={() =>
//                   document
//                     .getElementById("contact")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//                 className="px-8 py-4 rounded-2xl border border-[#B66E79] text-[#B66E79] hover:bg-[#B66E79] hover:text-white duration-300"
//               >
//                 Contact Me
//               </button>

//             </div>

//             {/* SOCIALS */}

//             <div className="mt-16">

//               <h4 className="tracking-[8px] uppercase text-[#B66E79] mb-8">
//                 Find Me On
//               </h4>

//               <div className="flex gap-6">

//                 <a
//                   href="https://github.com/nimra-codes-dev"
//                   target="_blank"
//                   className="w-16 h-16 rounded-2xl border border-[#8C4E4F] flex items-center justify-center hover:border-[#B66E79] hover:-translate-y-2 duration-300"
//                 >
//                   <FaGithub size={28} />
//                 </a>

//                 <a
//                   href="https://www.linkedin.com/in/nimra-kashif"
//                   target="_blank"
//                   className="w-16 h-16 rounded-2xl border border-[#8C4E4F] flex items-center justify-center hover:border-[#B66E79] hover:-translate-y-2 duration-300"
//                 >
//                   <FaLinkedin size={28} />
//                 </a>

//                 <a
//                   href="mailto:nimrakashifdev@gmail.com"
//                   className="w-16 h-16 rounded-2xl border border-[#8C4E4F] flex items-center justify-center hover:border-[#B66E79] hover:-translate-y-2 duration-300"
//                 >
//                   <HiOutlineMail size={28} />
//                 </a>

//               </div>

//             </div>

//           </div>

//           {/* RIGHT SIDE */}

//           <div className="relative flex justify-center">

//             {/* CIRCLE */}

//             <div className="absolute w-[500px] h-[500px] border border-[#B66E79] rounded-full border-dashed opacity-40 animate-spin-slow"></div>

//             {/* HTML */}

//             <div className="absolute top-0 left-32 float-animation delay-1">
//               <div className="w-28 h-32 rounded-3xl bg-[#111] border border-[#8C4E4F] flex flex-col items-center justify-center shadow-2xl">
//                 <FaHtml5 size={50} className="text-orange-500 mb-3" />
//                 <p>HTML</p>
//               </div>
//             </div>

//             {/* CSS */}

//             <div className="absolute top-40 left-0 float-animation delay-2">
//               <div className="w-28 h-32 rounded-3xl bg-[#111] border border-[#8C4E4F] flex flex-col items-center justify-center shadow-2xl">
//                 <FaCss3Alt size={50} className="text-blue-500 mb-3" />
//                 <p>CSS</p>
//               </div>
//             </div>

//             {/* JS */}

//             <div className="absolute bottom-0 left-28 float-animation delay-3">
//               <div className="w-28 h-32 rounded-3xl bg-[#111] border border-[#8C4E4F] flex flex-col items-center justify-center shadow-2xl">
//                 <IoLogoJavascript
//                   size={50}
//                   className="text-yellow-400 mb-3"
//                 />
//                 <p>JavaScript</p>
//               </div>
//             </div>

//             {/* BOOTSTRAP */}

//             <div className="absolute top-56 right-0 float-animation delay-4">
//               <div className="w-28 h-32 rounded-3xl bg-[#111] border border-[#8C4E4F] flex flex-col items-center justify-center shadow-2xl">
//                 <FaBootstrap size={50} className="text-purple-500 mb-3" />
//                 <p>Bootstrap</p>
//               </div>
//             </div>

//             {/* MAIN CARD */}

//             <div className="w-[420px] h-[520px] rounded-[50px] bg-gradient-to-br from-[#8C4E4F] to-[#3B1F1B] border border-[#B66E79] shadow-[0_0_60px_rgba(182,110,121,0.4)] flex flex-col items-center justify-center text-center px-10">

//               <FaLaptopCode
//                 size={90}
//                 className="text-[#FADADD] mb-8"
//               />

//               <h2 className="text-5xl font-bold mb-6">
//                 Frontend Developer
//               </h2>

//               <div className="w-24 h-1 bg-[#FADADD] rounded-full mb-8"></div>

//               <p className="text-gray-200 text-xl leading-10">
//                 Building responsive websites and improving my skills through
//                 projects and continuous learning.
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

















1

/* // export default function Home() { */
//   return (
//     <section
//       id="home"
//       className="min-h-screen bg-[#0b0b0b] text-white flex items-center pt-16 scroll-mt-20"
//     >
//       <div className="max-w-6xl mx-auto px-6 w-full">

//         {/* INTRO */}
//         <p className="text-sm tracking-[0.3em] text-purple-400 uppercase mb-6">
//           Frontend Developer
//         </p>

//         {/* NAME */}
//         <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-10">
//           Nimra <span className="text-purple-500">Kashif</span>
//         </h1>

//         {/* BIO LAYOUT */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

//           {/* LEFT BIO */}
//           <div>
//             <p className="text-gray-400 text-lg leading-relaxed mb-8">
//               I’m a passionate frontend developer focused on building clean,
//               modern and user-friendly web interfaces. I enjoy turning ideas
//               into responsive designs using React and Tailwind CSS.
//             </p>

//             <p className="text-gray-400 text-lg leading-relaxed">
//               I’m continuously learning and improving my skills, with a strong
//               interest in UI design, performance and real-world usability.
//             </p>

//             {/* CTA */}
//             <div className="mt-10 flex gap-10">
//               <a
//                 href="#projects"
//                 className="text-white border-b border-white/40 pb-1 hover:border-purple-500 transition"
//               >
//                 View Projects
//               </a>

//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 className="text-purple-400 border-b border-purple-400/60 pb-1 hover:text-purple-300 transition"
//               >
//                 View Resume
//               </a>
//             </div>
//           </div>

//           {/* RIGHT SOFT CARD */}
//           <div className="relative">
//             <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-600/20 blur-2xl rounded-full"></div>

//             <div className="relative border border-purple-500/30 rounded-2xl p-8 bg-[#0f0f0f]">
//               <h3 className="text-xl font-medium mb-6 text-purple-400">
//                 Quick Overview
//               </h3>

//               <ul className="space-y-4 text-gray-400">
//                 <li>• Frontend Developer (React)</li>
//                 <li>• Clean & Responsive UI</li>
//                 <li>• Tailwind CSS Styling</li>
//                 <li>• Git & GitHub</li>
//                 <li>• Open for Internship / Junior Role</li>
//               </ul>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }



























