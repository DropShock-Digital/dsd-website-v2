import Link from "next/link";
import styles from "./ProcessTeaser.module.css";

const steps = [
  { num: "01", name: "Patience", desc: "We listen first. A 15-minute call. No deck pitches. No pressure." },
  { num: "02", name: "Dive", desc: "Discovery, audit, spec. You get a fixed-scope, fixed-price proposal in 72 hours." },
  { num: "03", name: "Strike", desc: "We build in tight sprints. You see real progress every week." },
  { num: "04", name: "Surface", desc: "We ship. We hand off. We measure what actually moved." },
];

export function ProcessTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={`text-meta ${styles.eyebrow}`}>How We Work</p>
        <h2 className={`text-h1 ${styles.headline}`}>
          Patience. Dive. Strike. Surface.
        </h2>
        <p className={`text-body-lg ${styles.sub}`}>
          Four steps, no decks. We build engagements the same way a razorbill hunts.
        </p>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <span className={styles.stepNum}>{step.num}</span>
              <h3 className={styles.stepName}>{step.name}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
        <Link href="/about" className="btn-secondary" style={{ marginTop: "2rem" }}>
          See the full process →
        </Link>
      </div>
    </section>
  );
}
