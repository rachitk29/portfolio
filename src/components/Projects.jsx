// src/components/Projects.jsx
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Container from "./Container"; 

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
      "Designed a responsive task management app using React, TailwindCSS and Clerk. Features include task creation, completion with animations, confetti fx.",
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
  <Container>
    {/* Top border with heading */}
    <p className="text-sm font-figtree font-medium text-gray-400 mb-4 uppercase tracking-wider border-t border-[#27272a] pt-2">
      Projects
    </p>

    {/* Project cards */}
    <div className="space-y-6 mb-8">
      {projects.map((p, i) => (
        <div
          key={i}
          className="relative rounded-xl overflow-hidden border border-white/10 bg-0a0a0a backdrop-blur-md shadow-md transition-all duration-300 flex flex-col justify-between p-6 w-full hover:border-white"
        >
          {/* Card Content */}
          <div className="space-y-2">
            <h3 className="text-sm font-sm text-gray-400 capitalize">{p.title}</h3>
            <p className="text-sm leading-relaxed text-gray-400 mt-2 mb-6 cursor-pointer relative z-10">
              {p.description}
            </p>
          </div>

          {/* Buttons Row */}
          <div className="flex gap-3 mt-3">
            {p.links.repo && (
              <a
                href={p.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <FaGithub size={18} />
              </a>
            )}
            {p.links.demo && (
              <a
                href={p.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <FiExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </Container>
);

export default Projects;
