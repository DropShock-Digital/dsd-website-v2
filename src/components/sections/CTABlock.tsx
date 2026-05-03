"use client"

import Link from "next/link";
import styles from "./CTABlock.module.css";

export function CTABlock() {
  return (
    <section className={styles.section} aria-label="Call to action">
      <div className={styles.sectionInner}>
        <div className={`razor-slab ${styles.ctaBlock}`}>
          {/* Background accent */}
          <div className={styles.ctaBgAccent} aria-hidden="true" />
          <div className={styles.ctaGridBg} aria-hidden="true" />

          {/* Content */}
          <div className={styles.ctaContent}>
            <p className="text-meta" style={{ color: "var(--razor)", marginBottom: "1.5rem" }}>
              Ready to launch?
            </p>
            <h2 className={`text-h1 ${styles.ctaHeadline}`}>
              One conversation.
              <br />
              One action plan.
            </h2>
            <p className={`text-body-lg ${styles.ctaSub}`}>
              15 minutes. No deck. No pitch. Steven reviews every signal personally.
              <br className={styles.brDesktop} />
              You leave knowing what the next step is.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/signal" className="btn-primary">
                Launch a flare →
              </Link>
              <a href="tel:760-669-6102" className={styles.ctaPhone}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 3h3l1.5 3-2 1.2a9 9 0 003.5 3.5l1.2-2L13 9.5V13a1 1 0 01-1 1C5 14 2 11 2 6a1 1 0 011-1H3z" strokeLinejoin="round" />
                </svg>
                760-669-6102
              </a>
            </div>
          </div>

          {/* Razorbill mascot */}
          <div className={styles.ctaMascot} aria-hidden="true">
            <svg width="140" height="160" viewBox="0 0 140 160" fill="none">
              {/* Body — razorbill silhouette in black ice */}
              <path
                d="M70 10 L130 100 L105 108 L115 130 L85 120 L70 155 L55 120 L25 130 L35 108 L10 100 Z"
                fill="rgba(0,200,255,0.04)"
                stroke="rgba(0,200,255,0.12)"
                strokeWidth="1"
              />
              {/* Upper body */}
              <path
                d="M70 10 L105 65 L90 72 L95 90 L70 82 L45 90 L50 72 L35 65 Z"
                fill="rgba(0,200,255,0.06)"
                stroke="rgba(0,200,255,0.20)"
                strokeWidth="1"
              />
              {/* Bill — the signature triangle */}
              <polygon
                points="70,10 50,55 70,70 90,55"
                fill="var(--razor)"
                opacity="0.85"
              />
              <polygon
                points="70,10 50,55 70,70 90,55"
                fill="none"
                stroke="rgba(255,46,58,0.4)"
                strokeWidth="0.5"
              />
              {/* Ice highlights */}
              <line x1="60" y1="20" x2="55" y2="50" stroke="rgba(0,200,255,0.2)" strokeWidth="0.5" />
              <line x1="80" y1="20" x2="85" y2="50" stroke="rgba(0,200,255,0.2)" strokeWidth="0.5" />
              {/* Glow under */}
              <ellipse cx="70" cy="148" rx="30" ry="6" fill="rgba(0,200,255,0.04)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
