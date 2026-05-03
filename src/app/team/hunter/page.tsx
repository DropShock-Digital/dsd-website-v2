import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hunter Jones — DropShock Digital",
  description: "Lead Video Editor and Motion Designer at DropShock Digital. +600 videos edited.",
};

export default function HunterPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="text-meta" style={{ color: "var(--ice-razor)", marginBottom: "1rem" }}>Lead Video Editor · Motion Designer</p>
          <h1 className={`text-display ${styles.heroHeadline}`}>Hunter<br />Jones.</h1>
          <p className={`text-body-lg ${styles.heroSub}`}>
            +600 videos edited. Brand films, music videos, event coverage.
            Understands the space between what's shot and what moves someone.
          </p>
          <Link href="/work" className="btn-secondary">See the work →</Link>
        </div>
      </section>

      <section className={styles.bio}>
        <div className={styles.bioInner}>
          <div className={styles.bioText}>
            <h2 className={`text-h2 ${styles.bioHeadline}`}>The editor's eye.</h2>
            <p className="text-body" style={{ marginBottom: "1.5rem", color: "var(--white-48)" }}>
              Hunter has been cutting since before he had a name for it. Starting on YouTube at 13,
              now professionally for over a decade. The craft is instinct — rhythm, color, sound, story.
            </p>
            <p className="text-body" style={{ color: "var(--white-48)" }}>
              He leads all video post-production at DropShock. Brand films, music videos, event coverage,
              short-form content. He edits in DaVinci Resolve, works in the color suite daily,
              and has a reference library that would take most people a lifetime to build.
            </p>
          </div>
          <div className={styles.bioStats}>
            {[
              { num: "600+", label: "Videos edited" },
              { num: "Resolve", label: "Primary NLE" },
              { num: "DaVinci", label: "Color Suite daily" },
              { num: "Sound", label: "Mix + master included" },
            ].map((s) => (
              <div key={s.label} className={`ice-slab ${styles.statCard}`}>
                <p className={styles.statNum}>{s.num}</p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={`text-h1 ${styles.ctaHeadline}`}>Need something cut?</h2>
          <p className="text-body-lg" style={{ color: "var(--white-48)", marginBottom: "2rem" }}>
            Send the footage. We'll turn it into something that actually moves.
          </p>
          <Link href="/signal" className="btn-primary">Brief a project →</Link>
        </div>
      </section>
    </div>
  );
}
