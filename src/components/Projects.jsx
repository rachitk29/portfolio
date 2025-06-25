import { motion } from "framer-motion";

const projects = [
  {
    title: "ShopDeal",
    description:
      "Building a sleek, responsive React weather app using OpenWeather API to fetch and display real-time temperature, humidity, and forecasts with an intuitive UI.(work in progress :)",
    links: { repo:"https://github.com/rachitkatariya/shopdeal", demo:""  },
  },
  {
    title: "Weather Application",
    description:
      "Developed a responsive React weather application showing live temperature, humidity, and multi-day forecasts.",
    links: { repo:"https://github.com/rachitkatariya/weather-react-app", demo:"https://weather-react-app-blush.vercel.app/"  },
  },
  {
    title: "ToDesktop",
    description:
      "Created a responsive clone of ToDesktop using React and Tailwind CSS with custom animations and clean UI.",
    links: { repo:"https://github.com/rachitkatariya/ToDesktop", demo:"https://todesktop-clone-app.netlify.app/"  },
  },
];

const Projects = () => (
  <motion.section
    id="projects"
    className="pt-20 pb-28 px-6 bg-light-mode-bg dark:bg-dark-mode-bg min-h-screen"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-bold text-center mb-14">Projects</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          className="relative rounded-xl overflow-hidden border border-neutral-400/20 bg-[#111111] hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
        >
          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-neutral-300">{p.description}</p>
          </div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity"
            whileHover={{ opacity: 1 }}
          >
            {p.links.repo && (
              <a
                href={p.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-neutral-800 px-4 py-2 rounded-full mb-2 hover:bg-neutral-700"
              >
                GitHub
              </a>
            )}
            {p.links.demo && (
              <a
                href={p.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-r from-slate-600 px-4 py-2 rounded-full hover:from-blue-400"
              >
                Live Demo
              </a>
            )}
          </motion.div>
        </motion.div>
      ))}    </div>
  </motion.section>
);

export default Projects;
