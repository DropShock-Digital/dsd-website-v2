"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TrustCounters.module.css";

const counters = [
  { value: 15, suffix: "+", label: "years of professional photography craft" },
  { value: 150, suffix: "+", label: "galleries shipped on the public archive" },
  { value: 600, suffix: "+", label: "videos produced across our channels" },
  { value: 30, prefix: "$", suffix: "k+", label: "invested in production and IT hardware" },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function CounterItem({
  value,
  suffix,
  prefix,
  label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 1800, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.counter}>
      <p className={styles.number}>
        {prefix}{count}{suffix}
      </p>
      <p className={styles.label}>{label}</p>
    </div>
  );
}

export function TrustCounters() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={`text-meta ${styles.eyebrow}`}>The Receipts</p>
        <div className={styles.grid}>
          {counters.map((c) => (
            <CounterItem key={c.label} {...c} />
          ))}
        </div>
        <p className={styles.footer}>
          Founded 2024 as DropShock Digital LLC · Fully insured · Operating from Hesperia, California — serving Southern California in-person and remote nationwide.
        </p>
      </div>
    </section>
  );
}
