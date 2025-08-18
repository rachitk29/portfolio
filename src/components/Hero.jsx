// src/components/Hero.jsx
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-auto mb-2 flex flex-col justify-start items-center pt-20 text-gray-400 font-sans bg-transparent"
    >
      <div className="items-start flex flex-col text-center mb-6">
        {/* Clickable Profile Image */}
        <a
          href="https://github.com/rachitk29"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-20 h-20 rounded-full border-2 border-gray-800 shadow-md overflow-hidden select-none cursor-pointer"
        >
          <img
            src={profileImg}
            alt="Rachit"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </a>

        {/* Clickable Username */}
        <a
          href="https://twitter.com/rachitk29"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold mt-3 cursor-pointer relative z-10"
        >
          @rachitk29
        </a>
      </div>

      <div className="flex flex-col items-start max-w-2xl px-6 text-left">
        <p className="font-figtree text-sm leading-relaxed text-gray-400 mt-2 mb-3">
          I'm <span className="text-white">Rachit</span>, a 20yo developer living in Meerut, India.
          I love to code and make (<span className="text-white">break</span>) things.
        </p>

        <p className="text-sm text-gray-400 mb-3">
          I love both <span className="text-white">Development</span> & <span className="text-white">Design</span>.
          So yes, I can make things look good and actually work.
          When I'm <span className="text-white">not busy</span>, you'll usually find me watching movies & webshows, listening music, playing cricket, or just catching up on some much-needed sleep.
        </p>

        <p className="text-sm leading-relaxed text-gray-400 mb-6">
          Let's be real: I'm always chasing new things to learn, new problems to solve,
          and if I'm lucky maybe one day my parents will finally understand
          <span className="text-white"> what I actually do!</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
