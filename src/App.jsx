import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Social from "./components/Social";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills"
import Blogs from "./components/Blogs"
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-mono bg-#0a0a0a text-white scroll-smooth min-h-screen relative"
    >
      <Hero />
      <Social/>
      <Skills/>
      <Projects />
      <Blogs/>
      <Footer/>
    </motion.div>
  );
}

export default App;
