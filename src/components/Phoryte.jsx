import React, { useState } from "react";
import { motion } from "framer-motion";
import treeImg from "../assets/phoryte/treesSunset.jpg";
import skyColor from "../assets/phoryte/skyColor.jpg";

const data = [
  {
    image: treeImg,
    title: "Sunset at the Lake",
    description: `The sun dips behind the tranquil lake,
casting hues of orange and gold.
This moment of silence reminds us of the peace we often overlook.
A photo from my calmest evening walk.`,
  },
  {
    image: skyColor,
    title: "Colours of Sky",
    description: `When the sky changes its colors, everyone feels relaxed and soothed... 
but when people change, they face criticism. Yet, according to nature, change is constant,
and everyone must change in life like the sky.
However, change yourself according to time and situations,
and never forget the close ones who helped you in your lowest phase when no one believed in you.
So, change like the sky, but whenever you transform,
don’t forget to remain kind and gentle towards others...🌻💌`,
  },
];

const PhotographyPoems = () => {
  const [expanded, setExpanded] = useState(Array(data.length).fill(false));

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <motion.section
      id="photography-poems"
      className="pt-14 pb-28 px-6 bg-light-mode-bg dark:bg-dark-mode-bg min-h-screen font-sans"
      initial="hidden"
      whileInView="visible"
          viewport={{ once: true }}
          onCopy={(e) => {
      e.preventDefault();
      alert("Copying is disabled on this section.");
    }}
    onContextMenu={(e) => e.preventDefault()}
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-white dark:text-white select-none">
        some stories in
      </h2>

      <div className="flex flex-col gap-12 max-w-2xl mx-auto cursor-pointer select-none">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-md hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.2)] transition-all duration-200 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            {/* Image inside div with rounded corners */}
            <div className="w-full h-60 sm:h-72 overflow-hidden p-2">
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-3 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-white capitalize">
                {item.title}
              </h3>

              <p
                className={`text-sm text-gray-300 leading-relaxed whitespace-pre-line transition-all duration-300 ${
                  expanded[i] ? "" : "line-clamp-2"
                }`}
              >
                {item.description}
              </p>

              <button
                onClick={() => toggleExpand(i)}
                className="self-start text-xs sm:text-sm mt-2 text-white border border-white/20 rounded-full px-3 py-1.5 hover:border-white hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.25)]"
              >
                {expanded[i] ? "Show Less" : "Read More"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PhotographyPoems;
