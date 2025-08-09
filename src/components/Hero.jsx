// src/components/Hero.jsx
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-start items-center pt-24 text-white font-sans bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onCopy={(e) => {
        e.preventDefault();
        alert("Copying is disabled on this section.");
      }}
      onContextMenu={(e) => e.preventDefault()}
    >

      {/* Avatar centered */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative w-28 h-28 rounded-full border-2 border-gray-400 shadow-md overflow-hidden select-none cursor-pointer">
          <img
            src={profileImg}
            alt="Rachit"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Link Below Image */}
        <a
          href="https://twitter.com/rachitk29"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm font-bold mt-3 cursor-pointer relative z-10"
        >
          @rachitk29
        </a>

      </div>

      {/* Content aligned from start */}
      <div className="flex flex-col items-start max-w-2xl px-4 text-left">
        {/* About Text */}
        <p className="text-sm leading-relaxed text-white mt-2 mb-6 cursor-pointer relative z-10">
          hey i'm
          <span className="text-blue-400 font-medium"> rachit katariya </span>
          who loves tech and buildings stuffs, also i play cricket sometime i click photos and writing poems to justify me perspective towards life.
        </p>
        <p className="text-sm leading-relaxed text-white mt-2 mb-6 cursor-pointer relative z-10">
          I am a programmer and constantly want to learn new skills. Building stuffs in MERN Stack. Enhancing my problem solving skills in DSA. I am a tech geek and always keep exploring different things related to Technology and Software.
        </p>



        {/* Tech Stack */}
        <motion.div
          className="mt-6 sm:mt-10 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >

          <h2 className="text-xl font-semibold mb-4  text-center">Tech Stack</h2>
          <div className="flex flex-wrap gap-2 text-xs text-gray-300 cursor-pointer">
            {[
              "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
              "Node.js", "Express", "MongoDB", "C++", "Java",
              "Git & GitHub", "Figma",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-black/30 px-3 py-1 rounded-md border border-gray-700 
                 hover:bg-black/50 hover:border-blue-400 
                 transition duration-200 ease-in-out"
              >
                {tech}
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
