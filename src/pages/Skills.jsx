export default function Skills({ darkMode }) {
  const mainSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
  ];

  return (
    <section
      id="skills"
      className={`min-h-screen px-6 py-24 pt-16 transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-[#FADADD] text-[#3B1F1B]"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}

        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] text-[#B66E79] uppercase mb-3">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Technical{" "}
            <span className="text-[#B66E79]">
              Expertise
            </span>
          </h2>

          <p
            className={`max-w-2xl mt-5 text-lg leading-8 ${
              darkMode ? "text-gray-300" : "text-[#5A3A35]"
            }`}
          >
            I continuously improve my frontend development skills by working on
            practical projects and learning modern technologies to create
            responsive, user-friendly, and visually appealing web applications.
          </p>
        </div>

        {/* SKILL CIRCLES */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {mainSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="relative w-24 h-24">

                <svg className="w-full h-full rotate-[-90deg]">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke={darkMode ? "#222" : "#E8C7CC"}
                    strokeWidth="8"
                    fill="none"
                  />

                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#B66E79"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={
                      2 * Math.PI * 40 -
                      (skill.level / 100) * (2 * Math.PI * 40)
                    }
                    strokeLinecap="round"
                  />
                </svg>

                <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                  {skill.level}%
                </span>
              </div>

              <p
                className={
                  darkMode ? "text-gray-300" : "text-[#5A3A35]"
                }
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* CONTENT SECTION */}

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-3xl font-semibold mb-5">
              React{" "}
              <span className="text-[#B66E79]">
                Context API
              </span>
            </h3>

            <p
              className={`leading-8 mb-5 ${
                darkMode ? "text-gray-300" : "text-[#5A3A35]"
              }`}
            >
              I use the React Context API to manage global state efficiently
              and reduce unnecessary prop drilling. It helps maintain clean,
              scalable, and reusable component structures across applications.
            </p>

            <p
              className={`leading-8 ${
                darkMode ? "text-gray-300" : "text-[#5A3A35]"
              }`}
            >
              During my learning journey, I have implemented Context API in
              projects involving theme switching, shared application data,
              and user interface state management to strengthen my React
              development skills.
            </p>
          </div>

          {/* SUPPORTING SKILLS */}

          <div className="flex flex-wrap gap-4">
            {[
              "Tailwind CSS",
              "Git & GitHub",
              "Responsive Design",
              "Bootstrap",
              "UI Development",
              "Problem Solving",
            ].map((skill, i) => (
              <span
                key={i}
                className={`px-5 py-3 border rounded-full text-sm transition duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "border-[#8C4E4F] text-gray-300 hover:bg-[#8C4E4F]"
                    : "border-[#B66E79] text-[#5A3A35] hover:bg-[#B66E79] hover:text-white"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}





















