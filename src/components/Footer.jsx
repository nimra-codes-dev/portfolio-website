import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer({ darkMode }) {
  return (
    <footer
      className={`py-12 transition-all duration-500 ${
        darkMode
          ? "bg-black text-gray-300"
          : "bg-[#FADADD] text-[#3B1F1B]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Divider */}

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#B66E79] to-transparent mb-8"></div>

        

        {/* Social Icons */}

        <div className="flex justify-center gap-8 mb-8">

          {/* GitHub */}

          <a
            href="https://github.com/nimra-codes-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-[#B66E79] flex items-center justify-center hover:bg-[#B66E79] hover:text-white transition duration-300"
          >
            <FaGithub size={20} />
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-[#B66E79] flex items-center justify-center hover:bg-[#B66E79] hover:text-white transition duration-300"
          >
            <FaLinkedin size={20} />
          </a>

        </div>

        {/* Copyright */}

        <p
          className={`text-sm ${
            darkMode ? "text-gray-400" : "text-[#5A3A35]"
          }`}
        >
          © {new Date().getFullYear()} Nimra Kashif. All Rights Reserved.
        </p>

        <p
          className={`text-sm mt-2 flex justify-center items-center gap-2 ${
            darkMode ? "text-gray-500" : "text-[#7A4E55]"
          }`}
        >
          Built with React & Tailwind CSS
          <FaHeart className="text-[#B66E79]" />
        </p>

      </div>
    </footer>
  );
}

export default Footer;








