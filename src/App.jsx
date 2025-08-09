import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import StarCanvas from "./components/StarCanvas";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-mono bg-black text-white scroll-smooth min-h-screen relative"
    >
      <StarCanvas />
      <Hero />
      <Projects />
      <Footer/>
    </motion.div>
  );
}

export default App;
