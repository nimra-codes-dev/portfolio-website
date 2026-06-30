import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <section id="home">
        <Home darkMode={darkMode} />
      </section>

      <section id="about">
        <About darkMode={darkMode} />
      </section>

      <section id="project">
        <Projects darkMode={darkMode} />
      </section>

      <section id="education">
        <Education darkMode={darkMode} />
      </section>

      <section id="experience">
        <Experience darkMode={darkMode} />
      </section>

      <section id="skills">
        <Skills darkMode={darkMode} />
      </section>

      <section id="contact">
        <Contact darkMode={darkMode} />
      </section>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;























// import { Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// import Home from "./pages/Home";
// // import About from "./pages/about";
// import About from "./pages/About";
// import Project from "./pages/Project";
// import Education from "./pages/Education";
// import Contact from "./pages/Contact";
// import Skills from "./pages/Skills";
// import Experience from "./pages/experience";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//     <Header />
//       {/* Routing */}
//       <Routes>
//         {/* <Route path="/" element={<Home />} /> */}
//         <Route path="/" element={ <Home/>} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/education" element={<Education />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/skills" element={<Skills />} />
//       </Routes>
//       <Footer />
//     </>
//   )
// }

// export default App




