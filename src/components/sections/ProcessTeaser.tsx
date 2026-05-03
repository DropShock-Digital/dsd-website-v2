"use client"

import { useRef } from "react";
import Link from "next/link";
import styles from "./ProcessTeaser.module.css";

const STEPS = [
  {
    num: "01",
    title: "Brief",
    desc: "A 15-minute call. No deck. You tell us what you're building — we figure out how to get it done.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 10h14M10 3l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Scope",
    desc: "We deliver a fixed-scope proposal. You know exactly what you're buying, when it ships, and what it looks like when it's done.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="14" height="14" rx="2" />
        <path d="M7 10h6M7 7h3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Build",
    desc: "We execute. Weekly progress — real deliverables, not status reports. You can check in anytime, but you won't need to.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 3v14M3 10h14" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Ship",
    desc: "Final delivery. Source code, assets, documentation. You own it. No lock-in. 30-day support included.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12l3 3 7-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ProcessTeaser() {
  return (
    <section className={styles.section} aria-label="Process">
      <div className={styles.sectionInner}>
        {/* Header */}
        <div className={styles.header}>
          <p className="text-meta">How we work</p>
          <h2 className={`text-h1 ${styles.title}`}>
            No process theater.
            <br />
            Just results.
          </h2>
        </div>

        {/* Steps */}
        <div className={styles.stepsGrid}>
          {STEPS.map((step, i) => (
            <div key={step.num} className={styles.stepItem}>
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <svg width="100%" height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
                    <line
                      x1="0" y1="1" x2="100" y2="1"
                      stroke="rgba(0,200,255,0.15)"
                      strokeWidth="1"
                      strokeDasharray="4 3"
                    />
                  </svg>
                </div>
              )}

              <div className={`ice-slab ${styles.stepCard}`}>
                <div className={styles.stepTop}>
                  <span className={styles.stepIcon}>{step.icon}</span>
                  <span className={styles.stepNum}>{step.num}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={`text-body ${styles.stepDesc}`}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className={styles.bottomNote}>
          Most engagements land in the $25k–$75k range. Fixed scope. No surprises.
        </p>
      </div>
    </section>
  );
}
