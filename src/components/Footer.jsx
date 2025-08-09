import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-[#bdbdbd] py-2 px-2 text-center font-sans mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

        <h2 className="text-xl font-semibold mb-4 text-center sm:w-lg">connect with me</h2>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
        <a href="https://github.com/rachitkatariya" target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer text-2xl text-[#bdbdbd] hover:text-red-400 hover:scale-110 transition-all" />
        </a>
        <a href="https://www.linkedin.com/in/rachitkatariya/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="cursor-pointer text-2xl text-[#bdbdbd] hover:text-blue-400 hover:scale-110 transition-all" />
        </a>
        <a href="https://x.com/rachitkdev" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="cursor-pointer text-2xl text-[#bdbdbd] hover:text-blue-400 hover:scale-110 transition-all" />
        </a>
        <a href="https://rachitkatariya.medium.com/" target="_blank" rel="noopener noreferrer">
          <FaMedium className="cursor-pointer text-2xl text-[#bdbdbd] hover:text-blue-400 hover:scale-110 transition-all" />
        </a>
        <a href="mailto:rachitkatariya1@gmail.com">
          <FaEnvelope className="cursor-pointer text-2xl text-[#bdbdbd] hover:text-green-400 hover:scale-110 transition-all" />
        </a>
      </div>

      {/* Text Section */}
      <p className="text-sm text-[#bdbdbd]">&copy; 2025 All rights reserved</p>
      <p className="text-sm text-[#bdbdbd] pt-2">
        Made with ❤️ by <span className="text-blue-400 font-medium">Rachit Katariya</span>
      </p>
    </motion.footer>
  );
};

export default Footer;
