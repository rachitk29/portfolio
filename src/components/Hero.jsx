import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import backgroundImage from "../assets/gradient.gif";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';


const Hero = () => {
  return (
    <motion.section
      id="home"
      className="pt-28 pb-5 px-6 flex flex-col items-center justify-center text-center bg-black text-white min-h-screen font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* <div className="border border-white/30 hover:border-white transition-all rounded-lg p-4 w-64 h-auto flex justify-center items-center overflow-hidden mb-4 cursor-pointer">
        <div className="flex flex-wrap justify-center items-center gap-7">
          <a href="https://github.com/rachitkatariya" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-[#bdbdbd] hover:text-red-400 hover:scale-110 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/rachitkatariya/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-[#bdbdbd] hover:text-blue-400 hover:scale-110 transition-all" />
          </a>
          <a href="https://x.com/rachitkdev" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-[#bdbdbd] hover:text-blue-400 hover:scale-110 transition-all" />
          </a>
          <a href="https://rachitkatariya.medium.com/" target="_blank" rel="noopener noreferrer">
            <FaMedium className="text-2xl text-[#bdbdbd] hover:text-blue-400 hover:scale-110 transition-all" />
          </a>
        </div>
      </div> */}

      <div className="border border-white/30 hover:border-white transition-all rounded-lg p-4 w-64 h-auto flex justify-center items-center overflow-hidden mb-16">
  <div className="flex flex-wrap justify-center items-center gap-7">
    <a href="https://github.com/rachitkatariya" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-2xl text-[#bdbdbd] hover:text-red-400 transition-transform hover:animate-pop-wiggle" />
    </a>
    <a href="https://www.linkedin.com/in/rachitkatariya/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-2xl text-[#bdbdbd] hover:text-blue-400 transition-transform hover:animate-pop-wiggle" />
    </a>
    <a href="https://x.com/rachitkdev" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-2xl text-[#bdbdbd] hover:text-blue-400 transition-transform hover:animate-pop-wiggle" />
    </a>
    <a href="https://rachitkatariya.medium.com/" target="_blank" rel="noopener noreferrer">
      <FaMedium className="text-2xl text-[#bdbdbd] hover:text-blue-400 transition-transform hover:animate-pop-wiggle" />
    </a>
  </div>
</div>

      

      

      <div className="w-full max-w-4xl mx-auto px-4">
        <motion.div
          className="flex flex-col items-center gap-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-bold leading-snug bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              hey folks
            </h1>
            <img
              src={profileImg}
              alt="Rachit"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-blue-500 shadow-md"
            />
          </div>

          {
            <motion.div
              className="mt-4 mb-16 px-10 py-10 w-full sm:w-[600px] h-[200px] 
           bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#0a0e14]
             shadow-2xl rounded-2xl 
             text-white text-xl sm:text-2xl font-semibold 
             flex items-center justify-center text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <img
                  src="https://media1.giphy.com/media/jTMw980OBX5YEAulPm/200w.webp?cid=ecf05e47j9zw1kwjhpjfz4gl5081x8mumvwrmjlzomk0e7na&ep=v1_stickers_search&rid=200w.webp&ct=s"
                  alt="Animated"
                  width="100"
                  className="mb-2"
                />
              </div>
            </motion.div>
          }
        </motion.div>
        <motion.p
          className="text-base sm:text-lg leading-relaxed text-white px-2 sm:px-0 mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          dangerouslySetInnerHTML={{
            __html: `Passionate programmer focused on MERN stack development and improving DSA skills.
            <br>Tech enthusiast constantly exploring new tools, trends, and technologies in software development.`,
          }}
        />

        <motion.div
          className="mt-20 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-6 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-300">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "MongoDB",
              "C++",
              "Java",
              "Git & GitHub",
              "Figma",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-[#1f1f1f] px-4 py-2 rounded-lg text-center shadow-md border border-gray-700 hover:bg-[#2a2a2a] transition"
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
          <div className="relative border-l-2 border-grey-800 pl-10 ml-4">
            <div className="mb-14 relative">
              <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-black"></div>
              <div className="ml-4 text-left">
                <h3 className="text-lg font-bold">12th (2022)</h3>
                <p className="text-sm text-gray-300">MPSIC Hardoi</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-black"></div>
              <div className="ml-4 text-left">
                <h3 className="text-lg font-bold">BCA (2022-25)</h3>
                <p className="text-sm text-gray-300">CCS University Meerut</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-xl font-semibold mb-10 text-center">Works</h2>
          <div className="space-y-8 max-w-3xl mx-auto text-left text-gray-300">
            {/* GeeksforGeeks */}
            <div>
              <h3 className="text-lg font-bold text-white"></h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">

                <p className="text-sm font-semibold mb-4 text-center">will update soon ⏳ </p>
                {/* <li>
                  Authored multiple articles on Data Structures, Algorithms, and
                  Web Development topics.
                </li> */}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
