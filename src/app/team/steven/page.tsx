import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Steven Seagondollar — DropShock Digital",
  description: "Founder of DropShock Digital. 15 years of professional photography. Building content systems for serious operators.",
};

export default function StevenPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="text-meta" style={{ color: "var(--sea-bio)", marginBottom: "1rem" }}>Founder · Head of Agentic Systems &amp; AI Engineering</p>
          <h1 className={`text-display ${styles.heroHeadline}`}>Steven<br />Seagondollar.</h1>
          <p className={`text-body-lg ${styles.heroSub}`}>
            15 years behind the lens. DropShock founder. Runs every shoot personally.
            Building the content systems that run in the background of everything we do.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/signal" className="btn-primary">Book a session →</Link>
            <Link href="/photography" className="btn-secondary">See the photography →</Link>
          </div>
        </div>
      </section>

      <section className={styles.bio}>
        <div className={styles.bioInner}>
          <div className={styles.bioText}>
            <h2 className={`text-h2 ${styles.bioHeadline}`}>The long version.</h2>
            <p className="text-body" style={{ marginBottom: "1.5rem", color: "var(--white-48)" }}>
              Steven started shooting professionally in 2008. Portraits, events, concerts, commercial.
              Always with a full-frame camera and a commitment to not wasting anyone's time.
            </p>
            <p className="text-body" style={{ marginBottom: "1.5rem", color: "var(--white-48)" }}>
              DropShock Digital launched as a way to bring that same approach to the full stack of
              content production — photo, video, and the technical infrastructure that ties it all together.
            </p>
            <p className="text-body" style={{ color: "var(--white-48)" }}>
              He shoots every photography session personally. He is on every kickoff call for every project.
              If you're working with DropShock, you're working with Steven.
            </p>
          </div>
          <div className={styles.bioStats}>
            {[
              { num: "15+", label: "Years shooting professionally" },
              { num: "150+", label: "Photo galleries delivered" },
              { num: "Every session", label: "Steven shoots personally" },
              { num: "Every kickoff", label: "Steven joins every call" },
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
          <h2 className={`text-h1 ${styles.ctaHeadline}`}>Work with Steven.</h2>
          <p className="text-body-lg" style={{ color: "var(--white-48)", marginBottom: "2rem" }}>
            Every DropShock engagement starts with a 15-minute call. No deck. No pitch. Just a conversation.
          </p>
          <Link href="/signal" className="btn-primary">Book a call →</Link>
        </div>
      </section>
    </div>
  );
}
