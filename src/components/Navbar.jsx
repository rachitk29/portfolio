import React, { useState } from "react";
import { motion } from "framer-motion";
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
    setMenuOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white-500 backdrop-blur-md border-b border-zinc-700">
      {/* Mobile Header */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <h1 className="text-white text-lg font-semibold">rachit</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 px-4 pb-4 md:hidden">
          {TABS.map(({ label, value }) => (
            <motion.li
              key={value}
              onClick={() => handleTabClick(value)}
              className={`text-white cursor-pointer capitalize ${
                activeTab === value
                  ? "text-blue-400 underline"
                  : "hover:text-blue-300"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {label}
            </motion.li>
          ))}
        </ul>
      )}

      {/* Desktop Scrollable Menu */}
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




