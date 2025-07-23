// src/components/StarCanvas.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import FallingStars from "./FallingStars";

const StarCanvas = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
        <FallingStars />
      </Canvas>
    </div>
  );
};

export default StarCanvas;
