// src/components/FallingStars.jsx
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const FallingStars = () => {
  const ref = useRef();
  const starCount = 1000;

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(starCount * 3);
    const velocities = [];

    for (let i = 0; i < starCount; i++) {
      // Spread diagonally from top-left and top-right
      const fromLeft = Math.random() < 0.5;
      const x = fromLeft ? -400 + Math.random() * 400 : 400 - Math.random() * 400;
      const y = 400 + Math.random() * 300;
      const z = Math.random() * 400 - 200;

      positions.set([x, y, z], i * 3);

      velocities.push({
        x: fromLeft ? 1.2 + Math.random() * 0.3 : -1.2 - Math.random() * 0.3,
        y: -1.8 - Math.random() * 0.5
      });
    }

    return { positions, velocities };
  }, []);

  useFrame(() => {
    const pos = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      pos[i3] += velocities[i].x;
      pos[i3 + 1] += velocities[i].y;

      // Reset stars that fall below or go out of bounds
      if (pos[i3 + 1] < -400 || Math.abs(pos[i3]) > 700) {
        const fromLeft = Math.random() < 0.5;
        pos[i3] = fromLeft ? -400 + Math.random() * 400 : 400 - Math.random() * 400;
        pos[i3 + 1] = 400 + Math.random() * 300;
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
      <pointsMaterial color="#ffffff" size={1.4} sizeAttenuation />
    </points>
  );
};

export default FallingStars;
