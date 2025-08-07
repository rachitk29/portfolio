import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Phoryte from "./components/Phoryte";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import StarCanvas from "./components/StarCanvas";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [loading, setLoading] = useState(false);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setLoading(false);
    }, 400);
  };

  const renderSection = () => {
    switch (activeTab) {
      case "about":
        return <Hero />;
      case "projects":
        return <Projects />;
       case "phoryte":
        return <Phoryte />
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  useEffect(() => {
    document.title = "rachit";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-mono bg-black text-white scroll-smooth min-h-screen relative"
    >
      {/* 🌌 Galaxy Stars Effect */}
      <StarCanvas /> {/* 👈 insert here so it stays behind everything */}

      {/* Main Content */}
      <motion.div className="relative z-10">
        <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

        <div className="mt-6 px-4 min-h-[60vh]">
          {loading ? (
            <Spinner />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <Footer />
        <Analytics />
      </motion.div>
    </motion.div>
  );
}

export default App;
