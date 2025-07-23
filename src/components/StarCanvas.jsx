import React from "react";
import { Canvas } from "@react-three/fiber";
import FallingStars from "./FallingStars";

const StarCanvas = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 100], fov: 75 }}
        style={{ width: "100%", height: "100%" }}
      >
        <FallingStars />
      </Canvas>
    </div>
  );
};

export default StarCanvas;
