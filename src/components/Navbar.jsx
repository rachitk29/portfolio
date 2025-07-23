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
    setMenuOpen(false); // Close menu on selection
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4">
      {/* ---------------------- Desktop Nav ---------------------- */}
      <div className="hidden md:flex justify-center pt-4">
        <div className="bg-[#1f1f1f] text-white rounded-full px-6 py-2 flex items-center gap-8 shadow-md">
          <ul className="flex items-center gap-6 text-sm">
            {TABS.map(({ label, value }) => (
              <li
                key={value}
                onClick={() => handleTabClick(value)}
                className={`cursor-pointer capitalize ${
                  activeTab === value
                    ? "text-blue-400 underline"
                    : "hover:text-blue-300"
                }`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------------------- Mobile Nav ---------------------- */}
      <div className="flex items-center justify-between px-2 py-3 md:hidden">
        <h1 className="text-white text-lg font-semibold">rachit</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X size={20} /> : <Menu size={18} />}
        </button>
      </div>

      {/* ---------------------- Mobile Menu ---------------------- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center md:hidden z-40"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={20} />
            </button>

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
    </nav>
  );
};

export default Navbar;
