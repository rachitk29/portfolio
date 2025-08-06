import { motion } from "framer-motion";
import { FaRegEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    title: "karmly",
    description:
      "Designed a responsive task management app using React, TailwindCSS, Clerk, and Framer Motion. Features include task creation, completion with animations, confetti effects, and a calm, minimal UI.",
    links: { repo: "https://github.com/rachitk29/fullStackToDo", demo: "https://karmly.vercel.app" },
  },
  {
    title: "ShopDeal",
    description:
      "Crafting a responsive React weather app using the OpenWeather API to display live temperature, humidity, and forecasts with an intuitive UI.(Work in progress)",
    links: { repo: "https://github.com/rachitkatariya/shopdeal", demo: "https://shopdeal.vercel.app" },
  },
  {
    title: "Weather Application",
    description:
      "Responsive React weather app that shows real-time temperature, humidity, and extended forecasts in a clean, user-friendly layout.",
    links: { repo: "https://github.com/rachitkatariya/weather-react-app", demo: "https://weather-react-app-blush.vercel.app/" },
  },
  {
    title: "ToDesktop",
    description:
      "Recreated a responsive ToDesktop UI using React and Tailwind CSS, featuring smooth custom animations and a polished, minimal interface.",
    links: { repo: "https://github.com/rachitkatariya/ToDesktop", demo: "https://todesktop-clone-app.netlify.app/" },
  },
];

const Projects = () => (
  <motion.section
    id="projects"
    className="pt-14 pb-28 px-6 bg-light-mode-bg dark:bg-dark-mode-bg min-h-screen font-sans cursor-pointer"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-md hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.2)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
        >

          {/* Card Content */}
          <div className="p-6 space-y-3">
            <h3 className="text-2xl font-semibold text-white capitalize">{p.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{p.description}</p>
          </div>

          {/* Buttons Row */}
          <div className="flex justify-between items-center px-6 pb-4 mt-2">
  {/* Code Button */}
  {p.links.repo && (
    <a
      href={p.links.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-white border border-white/20 rounded-full px-4 py-2 transition-all duration-300 ease-in-out hover:border-white hover:shadow-[0_0_0px_0px_rgba(255,255,255,0.25)]"
    >
      <FaGithub className="text-lg" />
      Code
    </a>
  )}

  {/* Live Demo Button */}
  {p.links.demo && (
    <a
      href={p.links.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-white border border-white/20 rounded-full px-4 py-2 transition-all duration-300 ease-in-out hover:border-white hover:shadow-[0_0_px_0px_rgba(255,255,255,0.25)]"
    >
      <FaRegEye className="text-lg" />
      Live Demo
    </a>
  )}
</div>

        </motion.div>


      ))}    </div>
  </motion.section>
);

export default Projects;