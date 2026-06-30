import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Header({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    "Home",
    "About",
    "Projects",
    "Education",
    "Experience",
    "Skills",
    "Contact",
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-500 ${
        darkMode
          ? "bg-black/90 border-[#8C4E4F]"
          : "bg-[#FADADD]/90 border-[#B66E79]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${
              darkMode
                ? "bg-[#8C4E4F] text-white"
                : "bg-[#B66E79] text-white"
            }`}
          >
            NK
          </div>

          <h1
            className={`text-2xl font-serif ${
              darkMode ? "text-white" : "text-[#3B1F1B]"
            }`}
          >
            Nimra
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative transition duration-300 font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-[#B66E79]"
                  : "text-[#3B1F1B] hover:text-[#8C4E4F]"
              }`}
            >
              {item}

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#B66E79] transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* DAY / NIGHT BUTTON */}
          <button
            onClick={toggleTheme}
            className={`w-16 h-8 rounded-full p-1 flex items-center transition-all duration-300 ${
              darkMode
                ? "bg-[#8C4E4F] justify-end"
                : "bg-[#B66E79] justify-start"
            }`}
          >
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              {darkMode ? (
                <FaMoon className="text-black text-sm" />
              ) : (
                <FaSun className="text-yellow-500 text-sm" />
              )}
            </div>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden text-2xl ${
              darkMode ? "text-white" : "text-[#3B1F1B]"
            }`}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className={`flex flex-col gap-5 px-6 py-6 ${
            darkMode ? "bg-black" : "bg-[#FADADD]"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={`transition ${
                darkMode
                  ? "text-gray-300 hover:text-[#B66E79]"
                  : "text-[#3B1F1B] hover:text-[#8C4E4F]"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;


























// import { useState } from "react";


// function Header() {
//   const [open, setOpen] = useState(false); // toggle state

//   return (
//     <header className="bg-black text-white shadow-md fixed top-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

//         {/* Logo */}
//         <h1 className="text-xl font-bold tracking-wide animate-bounce">
//           NimraKashif
//         </h1>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-6">
//           <a href="#home" className="hover:text-purple-500">Home</a>
//           <a href="#about" className="hover:text-purple-500">About</a>
//           <a href="#project" className="hover:text-purple-500">Projects</a>
//           <a href="#education" className="hover:text-purple-500">Education</a>
//           <a href="#experience" className="hover:text-purple-500">Experience</a>
//           <a href="#skills" className="hover:text-purple-500">Skills</a>
//           <a href="#contact" className="hover:text-purple-500">Contact</a>
//         </nav>


//         {/* Toggle Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-2xl focus:outline-none"
//         >
//           {open ? "✖" : "☰"}
//         </button>
//       </div>

//       {/*  Menu */}
      
//         { open && (
//           <nav className="md:hidden bg-black px-4 pb-4 flex flex-col gap-3 text-lg">
//             <a onClick={() => setOpen(false)} href="#home" className="hover:text-purple-500">Home</a>
//             <a onClick={() => setOpen(false)} href="#about" className="hover:text-purple-500">About</a>
//             <a onClick={() => setOpen(false)} href="#project" className="hover:text-purple-500">Projects</a>
//             <a onClick={() => setOpen(false)} href="#education" className="hover:text-purple-500">Education</a>
//             <a onClick={() => setOpen(false)} href="#experience" className="hover:text-purple-500">Experience</a>
//             <a onClick={() => setOpen(false)} href="#skills" className="hover:text-purple-500">Skills</a>
//             <a onClick={() => setOpen(false)} href="#contact" className="hover:text-purple-500">Contact</a>
//           </nav>
//         )}

      
//     </header>
//   );
// }

// export default Header;





