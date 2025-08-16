import { FaRegEye, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";



const projects = [
  {
    title: "blogappryt",
    description:
      "Built a modern blog platform using Appwrite, supporting login/signup, secure authentication, image uploads, and full CRUD functionality for posts.",
    links: {
      repo: "https://github.com/rachitk29/blogappryt",
      demo: "https://blogappryt.vercel.app",
    },
  },
  {
    title: "karmly",
    description:
      "Designed a responsive task management app using React, TailwindCSS and Clerk. Features include task creation, completion with animations, confetti fx, minimal UI.",
    links: {
      repo: "https://github.com/rachitk29/fullStackToDo",
      demo: "https://karmly.vercel.app",
    },
  },
  {
    title: "ShopDeal",
    description:
      "Crafting a responsive React weather app using the OpenWeather API to display live temperature, humidity, and forecasts with an intuitive UI.(Work in progress)",
    links: {
      repo: "https://github.com/rachitkatariya/shopdeal",
      demo: "https://shopdeal.vercel.app",
    },
  },
];

const Projects = () => (
  <>

    <div className="mt-4 sm:mt-8 w-full font-sans">
      <h2 className="text-xl font-semibold mb-6 text-center">Projects</h2>
    </div>
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="grid grid-cols-1 sm:grid-cols-2 gap-16 max-w-3xl mx-auto px-4 sm:px-2 
             bg-light-mode-bg dark:bg-dark-mode-bg min-h-auto mb-20 mt-2 font-sans 
             cursor-pointer select-none sm:mb-18"
    >

      {projects.map((p, i) => (
        <div
          key={i}
          className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-md transition-all duration-300 flex flex-col justify-between h-48 max-w-sm w-full mx-auto"
        >
          {/* Card Content */}
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold text-white capitalize">{p.title}</h3>
            <p className="text-sm leading-relaxed text-white mt-2 mb-6 cursor-pointer relative z-10">
              {p.description}
            </p>
          </div>

          {/* Buttons Row - bottom left */}
          <div className="absolute bottom-2 left-4 flex gap-3">
            {p.links.repo && (
              <a
                href={p.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-200
                 hover:scale-110 transform"
              >
                <FaGithub size={18} />
              </a>
            )}
            {p.links.demo && (
              <a
                href={p.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-200
                 hover:scale-110 transform"
              >
                <FiExternalLink size={18} />
              </a>
            )}
          </div>

        </div>
      ))}
    </div>
  </>
);

export default Projects;
