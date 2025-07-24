// src/components/Hero.jsx
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import evilProfile from "../assets/evilProfile.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="pt-16 pb-5 px-6 flex flex-col items-center justify-center text-center text-white min-h-screen font-sans bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Avatar & Icons */}
      <div className="cursor-pointer border border-transparent transition-all rounded-lg p-4 w-64 h-auto flex flex-col items-center gap-6 mb-8 group">
        {/* Profile Section */}
        <div className="relative w-52 h-52 rounded-md border-2 border-blue-500 shadow-md overflow-hidden">
          <img
            src={profileImg}
            alt="Rachit"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src={evilProfile}
            alt="Evil Rachit"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center items-center gap-7">
          <a href="https://github.com/rachitkatariya" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-[#bdbdbd] hover:text-red-400 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/rachitkatariya/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-[#bdbdbd] hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a href="https://x.com/rachitkdev" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-[#bdbdbd] hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a href="https://rachitkatariya.medium.com/" target="_blank" rel="noopener noreferrer">
            <FaMedium className="text-2xl text-[#bdbdbd] hover:text-blue-400 transition-colors duration-300" />
          </a>
        </div>
      </div>

      {/* About Text */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <motion.p
          className="text-base sm:text-lg leading-relaxed text-white px-2 sm:px-0 mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          dangerouslySetInnerHTML={{
            __html: `Passionate programmer focused on MERN stack development and improving DSA skills.
            <br>Tech enthusiast constantly exploring new tools, trends, and technologies in software development.`,
          }}
        />

        {/* Tech Stack */}
        <motion.div
          className="mt-20 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-6 text-center">Tech Stack</h2>
          <div className=" cursor-pointer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-300">
            {[
              "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
              "Node.js", "Express", "MongoDB", "C++", "Java",
              "Git & GitHub", "Figma",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-black/30 px-4 py-2 rounded-lg text-center shadow-md border border-gray-700 hover:bg-black/50 transition hover:pop-wiggle"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-xl font-semibold mb-10 text-center">Education</h2>

          <div className="relative border-l-2 border-gray-600 pl-10 ml-4">
            <div className="mb-8 relative">
              <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-black"></div>
              <div className="ml-4 text-left">
                <h3 className="text-lg font-bold mb-1">BCA (2022 - 25)</h3>
                <p className="text-sm text-gray-300 mb-1">CCSU (Meerut University)</p>
                <p className="text-sm text-gray-300">Grades - 8.0</p>
              </div>
            </div>
            
            <div className="relative mb-8">
              <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-black"></div>
              <div className="ml-4 text-left">
                <h3 className="text-lg font-bold mb-1">12th (2020 - 22)</h3>
                <p className="text-sm text-gray-300 mb-1">MPSIC Hardoi</p>
                <p className="text-sm text-gray-300">Grades - 8.1</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-black"></div>
              <div className="ml-4 text-left">
                <h3 className="text-lg font-bold mb-1">10th (2018 - 20)</h3>
                <p className="text-sm text-gray-300 mb-1">SPMIC Meerut </p>
                <p className="text-sm text-gray-300">Grades - 8.2</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-sm font-semibold mb-4 text-center">work in progress !</h2>
          <div className="space-y-8 max-w-3xl mx-auto text-left text-gray-300">
            {/* <p className="text-sm font-semibold mb-4 text-center">will update soon ⏳</p> */}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
