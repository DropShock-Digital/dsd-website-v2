"use client"

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import Link from "next/link";
import styles from "./HeroSection.module.css";

/* ─── Black Ice Crystal Geometry ─── */

function BlackIceCrystal({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  const shard1Ref = useRef<THREE.Mesh>(null);
  const shard2Ref = useRef<THREE.Mesh>(null);
  const shard3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Gentle idle rotation
    groupRef.current.rotation.y = t * 0.08;
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.05;

    // Mouse parallax
    if (mouse.current) {
      groupRef.current.rotation.y += mouse.current.x * 0.003;
      groupRef.current.rotation.x += mouse.current.y * 0.002;
    }

    // Subtle float
    if (shard1Ref.current) {
      shard1Ref.current.rotation.z = Math.sin(t * 0.3) * 0.04;
      shard1Ref.current.position.y = Math.sin(t * 0.4) * 0.08;
    }
    if (shard2Ref.current) {
      shard2Ref.current.rotation.y = t * 0.12;
      shard2Ref.current.position.y = Math.cos(t * 0.35) * 0.06;
    }
    if (shard3Ref.current) {
      shard3Ref.current.rotation.x = Math.sin(t * 0.25) * 0.03;
      shard3Ref.current.position.y = Math.sin(t * 0.5 + 1) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main crystal shard */}
      <mesh ref={shard1Ref} position={[0, 0, 0]}>
        <octahedronGeometry args={[1.6, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={256}
          transmission={0.95}
          roughness={0.04}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.2}
          distortion={0.05}
          distortionScale={0.2}
          temporalDistortion={0.02}
          color="#0a1628"
          attenuationColor="#0044ff"
          attenuationDistance={0.5}
        />
      </mesh>

      {/* Secondary shard - offset */}
      <mesh ref={shard2Ref} position={[2.2, 0.4, -0.5]} rotation={[0.3, 0.5, 0.2]}>
        <octahedronGeometry args={[0.7, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          resolution={128}
          transmission={0.9}
          roughness={0.08}
          thickness={0.3}
          ior={1.4}
          chromaticAberration={0.04}
          color="#061020"
          attenuationColor="#002299"
          attenuationDistance={0.4}
        />
      </mesh>

      {/* Third shard */}
      <mesh ref={shard3Ref} position={[-1.8, -0.3, 0.3]} rotation={[-0.2, -0.3, 0.4]}>
        <octahedronGeometry args={[0.5, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          resolution={128}
          transmission={0.92}
          roughness={0.06}
          thickness={0.25}
          ior={1.5}
          chromaticAberration={0.05}
          color="#081428"
          attenuationColor="#0033cc"
          attenuationDistance={0.4}
        />
      </mesh>
    </group>
  );
}

/* ─── Particle Field ─── */

function ParticleField() {
  const count = 180;
  const pointsRef = useRef<THREE.Points>(null);

  const { positions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 4;
    }
    return { positions: pos };
  }, []);

  useEffect(() => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  }, [positions]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
    pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.007) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.04}
        color="#00c8ff"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ─── Grid Floor ─── */

function GridFloor() {
  return (
    <group position={[0, -3.5, 0]} rotation={[-Math.PI / 2.8, 0, 0]}>
      <gridHelper
        args={[30, 40, "#0a2a4a", "#0a2a4a"]}
      />
    </group>
  );
}

/* ─── Glow Ring ─── */

function GlowRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.15;
    const s = 1 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.04;
    ringRef.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={ringRef} position={[0, 0, -0.5]}>
      <torusGeometry args={[3.5, 0.012, 8, 120]} />
      <meshBasicMaterial color="#00c8ff" transparent opacity={0.25} />
    </mesh>
  );
}

/* ─── Main Hero Scene ─── */

export function HeroSection() {
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseRef.current = {
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: -(e.clientY / window.innerHeight - 0.5) * 2,
    };
  };

  return (
    <section className={styles.hero} onMouseMove={handleMouseMove} aria-label="Hero">
      {/* 3D Canvas */}
      <div className={styles.canvasWrap} aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.1} />
          <pointLight position={[5, 5, 5]} intensity={0.4} color="#00c8ff" />
          <pointLight position={[-5, -3, 3]} intensity={0.3} color="#ff2e3a" />
          <pointLight position={[0, 8, -2]} intensity={0.2} color="#4a7fa8" />
          <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.3}>
            <BlackIceCrystal mouse={mouseRef} />
          </Float>
          <ParticleField />
          <GlowRing />
          <GridFloor />
        </Canvas>
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={`text-meta ${styles.heroMeta}`}>
            <span className={styles.metaDot} aria-hidden="true" />
            Precision content systems
          </p>
          <h1 className={`text-display ${styles.heroHeadline}`}>
            Cut from
            <br />
            <span className={styles.heroAccent}>black ice.</span>
          </h1>
          <p className={`text-body-lg ${styles.heroSub}`}>
            Photo. Video. IT & AI.
            <br />
            For operators who ship.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/signal" className="btn-primary">
              Launch a flare →
            </Link>
            <Link href="/work" className="btn-secondary">
              See the work
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className={styles.heroStats} aria-label="Key statistics">
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>15+</span>
            <span className={styles.heroStatLabel}>Years shooting</span>
          </div>
          <div className={styles.heroStatDivider} aria-hidden="true" />
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>600+</span>
            <span className={styles.heroStatLabel}>Videos produced</span>
          </div>
          <div className={styles.heroStatDivider} aria-hidden="true" />
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>$30k+</span>
            <span className={styles.heroStatLabel}>Saved on average</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>

      {/* Bottom gradient fade */}
      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}
