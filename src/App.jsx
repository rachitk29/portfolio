import React from "react";
import Hero from "./components/Hero";
import Social from "./components/Social";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Phoryte from "./components/Phoryte"; // 👈 import kiya
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-mono bg-#0a0a0a text-white scroll-smooth min-h-screen relative"
      >
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Social />
                <Skills />
                <Projects />
                <Blogs />
                <Footer />
              </>
            }
          />

          {/* Photos Page */}
          <Route path="/photos" element={<Phoryte />} />
        </Routes>
      </motion.div>
    </Router>
  );
}

export default App;
