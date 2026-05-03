"use client"

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import styles from "./RazorbillSilhouette.module.css";

function RazorbillMesh() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.15;
    groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {/* Main body */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#0a1628"
          metalness={0.3}
          roughness={0.2}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Ice glow overlay */}
      <mesh position={[0, 0, 0.05]}>
        <octahedronGeometry args={[1.02, 0]} />
        <meshBasicMaterial
          color="#00c8ff"
          transparent
          opacity={0.08}
          wireframe
        />
      </mesh>

      {/* Razor bill triangle */}
      <mesh position={[0, -0.8, 0]} rotation={[0, 0, Math.PI]}>
        <coneGeometry args={[0.35, 1.0, 4]} />
        <meshStandardMaterial
          color="#ff2e3a"
          emissive="#ff2e3a"
          emissiveIntensity={0.4}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

function ParticleOrbit() {
  const ref = useRef<THREE.Points>(null);
  const count = 40;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 1.8 + Math.random() * 0.5;
      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.8;
      arr[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return arr;
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const geo = ref.current.geometry;
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  }, [positions]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry />
      <pointsMaterial
        size={0.025}
        color="#00c8ff"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

interface RazorbillSilhouetteProps {
  className?: string;
  style?: React.CSSProperties;
}

export function RazorbillSilhouette({ className, style }: RazorbillSilhouetteProps) {
  return (
    <div className={`${styles.wrap} ${className || ""}`} style={style} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[3, 3, 3]} intensity={0.6} color="#00c8ff" />
        <pointLight position={[-3, -2, 2]} intensity={0.3} color="#ff2e3a" />
        <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.2}>
          <RazorbillMesh />
        </Float>
        <ParticleOrbit />
      </Canvas>
    </div>
  );
}
