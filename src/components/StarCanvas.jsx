// src/components/StarCanvas.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import FallingStars from "./FallingStars";

const StarCanvas = () => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 100], fov: 75 }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <FallingStars />
      </Canvas>
    </div>
  );
};

export default StarCanvas;
