import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const TABS = [
  { label: "About", value: "about" },
  { label: "Projects", value: "projects" },
  { label: "Contact", value: "contact" },
];

const Navbar = ({ activeTab, onTabChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = (value) => {
    onTabChange(value);
    setMenuOpen(false); // close menu on selection
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white-500 backdrop-blur-md border-b border-zinc-700">
      {/* Mobile Header */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <h1 className="text-white text-lg font-semibold">rachit</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X size={20} /> : <Menu size={18} />}
        </button>
      </div>

<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center md:hidden z-40"
    >
      {/* ❌ Close Icon */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white"
      >
        <X size={20} />
      </button>

      {/* Navigation Links as UL */}
      <ul className="list-none flex flex-col gap-10 items-center">
        {TABS.map(({ label, value }) => (
          <motion.li
            key={value}
            onClick={() => handleTabClick(value)}
            className={`text-white text-2xl font-semibold cursor-pointer capitalize ${
              activeTab === value
                ? "text-blue-400 underline"
                : "hover:text-blue-300"
            }`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>



      {/* Desktop Menu */}
      <div className="hidden md:block overflow-x-auto">
        <ul className="flex justify-center gap-6 px-6 py-4 text-white font-medium whitespace-nowrap">
          {TABS.map(({ label, value }) => (
            <motion.li
              key={value}
              onClick={() => handleTabClick(value)}
              className={`cursor-pointer capitalize ${
                activeTab === value
                  ? "text-blue-400 underline"
                  : "hover:text-blue-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
