import { motion } from "framer-motion";
import { FaRegEye, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "karmly",
    description:
      "Designed a responsive task management app using React, TailwindCSS, Clerk, and Framer Motion. Features include task creation, completion with animations, confetti effects, minimal UI.",
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
  {
    title: "ToDesktop",
    description:
      "Recreated a responsive ToDesktop UI using React and Tailwind CSS, featuring smooth custom animations and a polished, minimal interface.",
    links: {
      repo: "https://github.com/rachitkatariya/ToDesktop",
      demo: "https://todesktop-clone-app.netlify.app/",
    },
  },
];

const Projects = () => (
  <motion.section
  id="projects"
  onCopy={(e) => {
    e.preventDefault();
    alert("Copying is disabled on this section.");
  }}
  onContextMenu={(e) => e.preventDefault()}
  className="-mt-1 sm:-mt-2 pb-2 px-2 bg-light-mode-bg dark:bg-dark-mode-bg min-h-screen font-sans cursor-pointer select-none"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <h2 className="text-xl font-semibold mb-4 text-center sm:w-lg">Projects</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto px-2">
    {projects.map((p, i) => (
      <motion.div
  key={i}
  className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-md hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.2)] transition-all duration-300 flex flex-col justify-between max-w-sm w-full mx-auto"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 * i }}
>
  {/* Card Content */}
  <div className="p-4 space-y-2 pb-12">
    <h3 className="text-lg font-semibold text-white capitalize">{p.title}</h3>
    <p className="text-sm leading-relaxed text-white mt-2 cursor-pointer relative z-10">
      {p.description}
    </p>
  </div>

  {/* Buttons Row - bottom left */}
  <div className="absolute bottom-2 left-2 flex gap-2">
    {p.links.repo && (
      <a
        href={p.links.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sm text-white border border-white/20 rounded-full px-2 py-1 hover:border-white hover:shadow-[0_0_8px_1px_rgba(255,255,255,0.25)] transition"
      >
        <FaGithub />
      </a>
    )}
    {p.links.demo && (
      <a
        href={p.links.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-xs text-white border border-white/20 rounded-full px-2 py-1 hover:border-white hover:shadow-[0_0_8px_1px_rgba(255,255,255,0.25)] transition"
      >
        <FaRegEye />
      </a>
    )}
  </div>
</motion.div>

    ))}
  </div>
</motion.section>

);

export default Projects;
