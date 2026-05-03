"use client"

import { useEffect, useRef, useState } from "react";
import styles from "./TrustCounters.module.css";

const COUNTERS = [
  { end: 15, suffix: "+", label: "Years shooting professionally" },
  { end: 150, suffix: "+", label: "Photo galleries delivered" },
  { end: 600, suffix: "+", label: "Videos produced" },
  { end: 30000, prefix: "$", suffix: "+", label: "Avg saved per engagement", display: "$30k+" },
];

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration, start]);

  return count;
}

function GlitchNumber({ children }: { children: string }) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const tick = () => {
      if (Math.random() > 0.75) {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 60 + Math.random() * 100);
      }
      setTimeout(tick, 2500 + Math.random() * 2000);
    };
    const id = setTimeout(tick, 1500);
    return () => clearTimeout(id);
  }, []);

  return (
    <span className={`${styles.counterNum} ${glitching ? styles.glitching : ""}`} aria-hidden={glitching}>
      {children}
    </span>
  );
}

function CounterCard({ end, suffix = "", prefix = "", label, display, start }: {
  end: number; suffix?: string; prefix?: string; label: string; display?: string; start: boolean;
}) {
  const count = useCountUp(end, 2200, start);
  const displayValue = display || `${prefix}${count}${suffix}`;

  return (
    <div className={`ice-slab ${styles.counterCard}`}>
      <p className={styles.counterValue}>
        <GlitchNumber>{displayValue}</GlitchNumber>
      </p>
      <p className={styles.counterLabel}>{label}</p>
    </div>
  );
}

export function TrustCounters() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.counters} aria-label="Trust indicators">
      <div className={styles.countersInner}>
        <div className={styles.countersGrid}>
          {COUNTERS.map((c) => (
            <CounterCard key={c.label} {...c} start={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
