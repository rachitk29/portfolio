// src/components/FallingStars.jsx
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const FallingStars = () => {
  const ref = useRef();

  const count = 1000;

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = [];

    for (let i = 0; i < count; i++) {
      const fromLeft = Math.random() < 0.5;
      const x = fromLeft ? -300 + Math.random() * 200 : 300 - Math.random() * 200;
      const y = 200 + Math.random() * 200;
      const z = Math.random() * 400 - 200;

      positions.set([x, y, z], i * 3);

      // Move diagonally toward center-bottom
      speeds.push({
        x: fromLeft ? 0.4 + Math.random() * 0.2 : -0.4 - Math.random() * 0.2,
        y: -0.7 - Math.random() * 0.3,
      });
    }

    return { positions, speeds };
  }, []);

  useFrame(() => {
    const pos = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;

      pos[idx] += speeds[i].x;     // x
      pos[idx + 1] += speeds[i].y; // y

      // Reset if out of screen (below -300 or too far side)
      if (pos[idx + 1] < -300 || Math.abs(pos[idx]) > 400) {
        const fromLeft = Math.random() < 0.5;
        pos[idx] = fromLeft ? -300 + Math.random() * 200 : 300 - Math.random() * 200;
        pos[idx + 1] = 200 + Math.random() * 200;
      }
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={1.2} sizeAttenuation />
    </points>
  );
};

export default FallingStars;
