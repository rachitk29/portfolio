import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-[#bdbdbd] py-10 px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
        <a href="https://github.com/rachitkatariya" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl text-[#bdbdbd] hover:text-red-400 hover:scale-110 transition-all" />
        </a>
        <a href="https://www.linkedin.com/in/rachitkatariya/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-[#bdbdbd] hover:text-blue-400 hover:scale-110 transition-all" />
        </a>
        <a href="https://x.com/rachitkdev" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl text-[#bdbdbd] hover:text-blue-400 hover:scale-110 transition-all" />
        </a>
      </div>

      <p className="text-sm text-[#bdbdbd]">&copy; 2025 All rights reserved</p>
      <p className="text-sm text-[#bdbdbd] pt-2">Made with ❤️ by <span className="text-blue-400 font-medium">Rachit</span></p>
    </motion.footer>
  );
};

export default Footer;
