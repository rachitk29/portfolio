// src/components/StarCanvas.jsx
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import FallingStars from "./FallingStars";

const StarCanvas = () => {
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowStars(true), 0); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 100], fov: 75 }}
        style={{ width: "100%", height: "100%" }}
      >
        {showStars && <FallingStars />} 
      </Canvas>
    </div>
  );
};

export default StarCanvas;
