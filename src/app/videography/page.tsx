import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Videography — DropShock Digital",
  description: "600+ videos produced. Brand films, music videos, interviews, events. 4K 60fps 10-bit. One team, full context.",
};

export default function VideographyPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className="text-meta" style={{ marginBottom: "1.5rem" }}>
              <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--bi-frost)", boxShadow: "0 0 8px var(--bi-frost)", marginRight: 8, verticalAlign: "middle" }} />
              Lens 02 · Cinematic Video Production
            </p>
            <h1 className={`text-display ${styles.heroHeadline}`}>
              Moving pictures.
              <br />
              <span className={styles.heroAccent}>Full commitment.</span>
            </h1>
            <p className={`text-body-lg ${styles.heroSub}`}>
              +600 videos shipped. Brand films, music videos, interviews, events, product.
              Shot and edited by people who understand both craft and deadline.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/signal" className="btn-primary">Brief your project →</Link>
              <Link href="/work" className="btn-secondary">See the reel →</Link>
            </div>
          </div>

          {/* Stats */}
          <div className={styles.heroStats}>
            {[
              { num: "600+", label: "Videos Produced" },
              { num: "4K 60fps", label: "10-bit dual-card" },
              { num: "1 team", label: "Full context" },
            ].map((s) => (
              <div key={s.label} className={`ice-slab ${styles.statCard}`}>
                <p className={styles.statNum}>{s.num}</p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ice-divider" />

      {/* Genres */}
      <section className={styles.genresSection}>
        <div className={styles.genresInner}>
          <p className="text-meta" style={{ marginBottom: "2rem" }}>What we produce</p>
          <div className={styles.genreGrid}>
            {[
              { title: "Brand Films", desc: "Your story, your brand, your people — in a package that actually represents you.", icon: "▶" },
              { title: "Music Videos", desc: "Performances, narratives, lyric videos, tour docs. Shot with an editor's eye.", icon: "♪" },
              { title: "Interviews & Podcasts", desc: "Talking-head setups, controlled environments, remote capture, full post-production.", icon: "◉" },
              { title: "Event Coverage", desc: "Conferences, launches, galas, concerts — full multi-camera when needed.", icon: "◈" },
              { title: "Product Films", desc: "E-commerce, social cutdowns, 360° spins, UGC adaptation.", icon: "◎" },
              { title: "Short-Form Content", desc: "TikTok, Reels, Shorts — optimized for each platform's technical spec.", icon: "▷" },
            ].map((g) => (
              <div key={g.title} className={`ice-slab ${styles.genreCard}`}>
                <span className={styles.genreIcon} aria-hidden="true">{g.icon}</span>
                <h3 className={styles.genreTitle}>{g.title}</h3>
                <p className="text-body" style={{ color: "var(--white-36)", fontSize: "0.875rem" }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ice-divider" />

      {/* Process */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <p className="text-meta" style={{ marginBottom: "2rem" }}>How it works</p>
          <div className={styles.processSteps}>
            {[
              { num: "01", title: "Brief", desc: "A 15-minute call. We define scope, timeline, deliverables, and budget." },
              { num: "02", title: "Pre-Production", desc: "Shot list, storyboard, location scouting, gear prep, schedule." },
              { num: "03", title: "Production", desc: "We shoot. Audio captured separately, dual-card backup, monitored in real time." },
              { num: "04", title: "Post-Production", desc: "Editor begins rough cut while data is ingested. Revisions, color grade, sound mix." },
              { num: "05", title: "Delivery", desc: "Final files in your required formats. Long-term storage included." },
            ].map((s, i) => (
              <div key={s.num} className={styles.processStepWrap}>
                {i > 0 && <div className={styles.processConnector} aria-hidden="true" />}
                <div className={`ice-slab ${styles.processStep}`}>
                  <span className={styles.processNum}>{s.num}</span>
                  <h3 className={styles.processTitle}>{s.title}</h3>
                  <p className="text-body" style={{ color: "var(--white-48)", fontSize: "0.875rem" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ice-divider" />

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalInner}>
          <h2 className={`text-h1 ${styles.finalHeadline}`}>Ready to roll?</h2>
          <p className="text-body-lg" style={{ color: "var(--white-48)", marginBottom: "2.5rem", maxWidth: 440 }}>
            Tell us what you&apos;re making. We&apos;ll scope it properly.
          </p>
          <Link href="/signal" className="btn-primary">Brief your project →</Link>
        </div>
      </section>
    </div>
  );
}
