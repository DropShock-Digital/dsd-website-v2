import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — DropShock Digital",
  description:
    "Founded 2024. Hesperia, California. Three operators, one mission: building content systems for serious operators.",
};

const values = [
  { title: "Patience", desc: "We listen first. Every engagement starts with a conversation, not a proposal." },
  { title: "Dive", desc: "We go deep. Discovery, audit, spec. We don't build until we understand the problem." },
  { title: "Strike", desc: "We execute. Tight sprints, weekly deliverables, no extended silence." },
  { title: "Surface", desc: "We ship. We measure what actually moved. We don't disappear after launch." },
];

const story = [
  "DropShock Digital launched in 2024 from Hesperia, California.",
  "The name comes from the razorbill — a bird that flies underwater. Fast, precise, built for the merge between two worlds.",
  "We build content systems for serious operators. Photo, video, IT, AI. One team. Full context.",
  "We're fully insured, operating as a registered LLC, and we take on four new engagements per quarter.",
  "Steven leads every photography session and every kickoff call. No handoffs to junior shooters.",
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "1rem" }}>About</p>
          <h1 className={`text-display ${styles.heroHeadline}`}>Built to last.</h1>
          <p className={`text-body-lg ${styles.heroSub}`}>
            Founded 2024 · Hesperia, California · LLC · Fully insured.
            Three operators who got tired of watching good work get diluted by too many hands.
          </p>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.storyInner}>
          <div className={styles.storyText}>
            <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "1.5rem" }}>The story</p>
            {story.map((para) => (
              <p key={para} className="text-body" style={{ color: "var(--white-48)", marginBottom: "1rem" }}>{para}</p>
            ))}
          </div>
          <div className={styles.storyValues}>
            <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "1.5rem" }}>How we work</p>
            {values.map((v) => (
              <div key={v.title} className={`ice-slab ${styles.valueCard}`}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className="text-body" style={{ color: "var(--white-48)", fontSize: "0.875rem" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={`text-h1 ${styles.ctaHeadline}`}>Let's work together.</h2>
          <p className="text-body-lg" style={{ color: "var(--white-48)", marginBottom: "2rem" }}>
            Four new engagements per quarter. Two slots open right now.
          </p>
          <Link href="/signal" className="btn-primary">Book a 15-min call →</Link>
        </div>
      </section>
    </div>
  );
}
