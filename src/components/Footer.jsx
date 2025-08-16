import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-[#bdbdbd] text-center font-sans py-6 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-center">connect with me</h2>


      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-6 text-xl">
        <a
          href="https://github.com/rachitk29"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-[#bdbdbd] hover:text-red-400 transition-colors relative z-10"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/rachitk29"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[#bdbdbd] hover:text-blue-400 transition-colors relative z-10"
        >
          <FaLinkedin />
        </a>

          <a
          href="https://leetcode.com/rachitk29"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-[#bdbdbd] hover:text-red-400 transition-colors relative z-10"
        >
          <SiLeetcode />
        </a>

        <a
          href="https://x.com/rachitk29"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-[#bdbdbd] hover:text-blue-400 transition-colors relative z-10"
        >
          <FaTwitter />
        </a>

        <a
          href="mailto:rachitkatariya1@gmail.com"
          aria-label="Email"
          className="text-[#bdbdbd] hover:text-red-400 transition-colors relative z-10"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>

      </div>

      {/* Text Section */}
      <p className="text-sm">&copy; 2025 All rights reserved</p>
      <p className="text-sm pt-2">
        Made with <span className="text-red-500">❤️</span> by{' '}
        <span className="text-blue-400 font-medium">Rachit </span>
      </p>
    </footer>
  );
};

export default Footer;
