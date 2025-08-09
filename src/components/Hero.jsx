// src/components/Hero.jsx
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-auto mb-20 flex flex-col justify-start items-center pt-24 text-white font-sans bg-transparent"
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
          hey, I’m
          <span className="text-blue-400 font-medium"> rachit katariya </span>
          a programmer passionate about learning and building projects with the MERN stack. I continuously improve my problem-solving skills through DSA and stay updated on the latest tech trends.
        </p>
        <p className="text-sm leading-relaxed text-white mt-2 mb-6 cursor-pointer relative z-10">
          Beyond my love for cricket, I find joy in capturing fleeting moments through the lens of my camera and crafting poetry that reflects my inner thoughts and emotions. These creative pursuits help me explore and communicate my unique worldview, offering a meaningful way to connect with both myself and the world around me.
        </p>

        {/* Tech Stack */}
        <div className="mt-4 sm:mt-8 w-full">
          <h2 className="text-xl font-semibold mb-6 text-center">Tech Stack</h2>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
