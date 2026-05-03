import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cinematic Video Production",
  description:
    "+600 videos shipped. Brand films, music videos, interviews, events, product. 4K 60fps, 10-bit, dual-card. One team. Full context.",
};

export default function VideographyPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "1rem" }}>
            Lens 02 · Cinematic Video Production
          </p>
          <h1 className={`text-display ${styles.heroHeadline}`}>
            Moving pictures.
            <br />
            Full commitment.
          </h1>
          <p className={`text-body-lg ${styles.heroSub}`}>
            +600 videos shipped. Brand films, music videos, interviews, events, product — shot and edited by people who understand both craft and deadline.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/signal" className="btn-primary">Brief your project →</Link>
            <Link href="/work" className="btn-secondary">See the reel →</Link>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {[
            { num: "600+", label: "Videos Produced" },
            { num: "4K 60fps", label: "10-bit dual-card recording" },
            { num: "Brand / Music / Event", label: "All genres covered" },
            { num: "1 team", label: "Full context, zero vendor sprawl" },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <p className={styles.statNum}>{s.num}</p>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.genres}>
        <div className={styles.genresInner}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "2rem" }}>What We Produce</p>
          <div className={styles.genreGrid}>
            {[
              { title: "Brand Films", desc: "Your story, your brand, your people — in a package that actually represents you." },
              { title: "Music Videos", desc: "Performances, narratives, lyric videos, tour docs. Shot with an editor's eye." },
              { title: "Interviews & Podcasts", desc: "Talking-head setups, controlled environments, remote capture, post-production polish." },
              { title: "Event Coverage", desc: "Conferences, launches, galas, concerts — full multi-camera when needed." },
              { title: "Product Films", desc: "E-commerce, social cutdowns, 360° spins, UGC adaptation." },
              { title: "Short-Form Content", desc: "TikTok, Reels, Shorts — optimized for each platform's technical spec." },
            ].map((g) => (
              <div key={g.title} className={`ice-slab ${styles.genreCard}`}>
                <h3 className={styles.genreTitle}>{g.title}</h3>
                <p className="text-body" style={{ color: "var(--white-48)", fontSize: "0.875rem" }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.processInner}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "2rem" }}>How It Works</p>
          <div className={styles.processSteps}>
            {[
              { num: "01", title: "Brief", desc: "A 15-minute call. We define scope, timeline, deliverables, and budget." },
              { num: "02", title: "Pre-Production", desc: "Shot list, storyboard, location scouting, gear prep, schedule." },
              { num: "03", title: "Production", desc: "We shoot. Audio captured separately, dual-card backup, monitored in real time." },
              { num: "04", title: "Post-Production", desc: "Editor begins rough cut while data is ingested. Revisions, color grade, sound mix." },
              { num: "05", title: "Delivery", desc: "Final files in your required formats. Long-term storage included." },
            ].map((s) => (
              <div key={s.num} className={styles.processStep}>
                <span className={styles.processNum}>{s.num}</span>
                <h3 className={styles.processTitle}>{s.title}</h3>
                <p className="text-body" style={{ color: "var(--white-48)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={`text-h1 ${styles.ctaHeadline}`}>Ready to roll?</h2>
          <p className="text-body-lg" style={{ color: "var(--white-48)", marginBottom: "2rem" }}>
            Tell us what you're making. We'll scope it properly.
          </p>
          <Link href="/signal" className="btn-primary">Brief your project →</Link>
        </div>
      </section>
    </div>
  );
}
