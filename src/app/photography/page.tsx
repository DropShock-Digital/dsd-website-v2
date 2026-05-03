import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Photography — DropShock Digital",
  description: "Instant Digital Photography. Full-frame capture, AI-augmented retouching, real-time delivery. $125/hr. Steven shoots personally.",
};

export default function PhotographyPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className="text-meta" style={{ marginBottom: "1.5rem" }}>
              <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--bi-cyan)", boxShadow: "0 0 8px var(--bi-cyan)", marginRight: 8, verticalAlign: "middle" }} />
              Lens 01 · Ultra Digital Photography
            </p>
            <h1 className={`text-display ${styles.heroHeadline}`}>
              Every frame,
              <br />
              <span className={styles.heroAccent}>fully realized.</span>
            </h1>
            <p className={`text-body-lg ${styles.heroSub}`}>
              Full-frame capture. Instant delivery while the event is still live.
              <br />Hand-selected frames upgraded to gallery-grade.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/signal" className="btn-primary">Book a session →</Link>
              <Link href="/work" className="btn-secondary">See the work →</Link>
            </div>
            <p className={styles.heroPrice}>
              <span className={styles.heroPriceAmt}>$125/hr</span>
              <span className={styles.heroPriceNote}>2-hour minimum · Instant delivery always included</span>
            </p>
          </div>

          {/* 3D crystal */}
          <div className={styles.heroCrystal} aria-hidden="true">
            <div className={styles.crystalPlaceholder}>
              <div className={styles.crystalGlow} />
              <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
                <polygon points="60,5 115,90 95,100 105,125 60,112 15,125 25,100 5,90" fill="rgba(0,200,255,0.04)" stroke="rgba(0,200,255,0.25)" strokeWidth="1" />
                <polygon points="60,5 90,55 75,63 80,80 60,73 40,80 45,63 30,55" fill="rgba(0,200,255,0.08)" stroke="rgba(0,200,255,0.35)" strokeWidth="1" />
                <polygon points="60,5 45,50 60,63 75,50" fill="var(--razor)" opacity="0.85" />
                <line x1="50" y1="15" x2="45" y2="48" stroke="rgba(0,200,255,0.3)" strokeWidth="0.75" />
                <line x1="70" y1="15" x2="75" y2="48" stroke="rgba(0,200,255,0.3)" strokeWidth="0.75" />
                <ellipse cx="60" cy="130" rx="30" ry="5" fill="rgba(0,200,255,0.04)" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <hr className="ice-divider" />

      {/* Two tiers */}
      <section className={styles.tiers}>
        <div className={styles.tiersInner}>
          <div className={styles.tierGrid}>
            {/* IDP */}
            <div className={`ice-slab ${styles.tierCard}`}>
              <div className={styles.tierTop}>
                <p className="text-meta" style={{ color: "var(--bi-cyan)" }}>Instant Digital Photography</p>
                <span className={`tag`}>Included always</span>
              </div>
              <h2 className={`text-h2 ${styles.tierHeadline}`}>
                Photos while
                <br />the event lives.
              </h2>
              <p className="text-body" style={{ marginBottom: "1.5rem" }}>
                Most photography makes you wait. Instant Digital Photography refuses to.
                Every frame is delivered to your device in real time — while the event
                is still happening. The handoff is the moment.
              </p>
              <ul className={styles.featureList}>
                {[
                  "Real-time delivery to your device",
                  "Full-frame capture — 45+ MP, prime glass",
                  "+4000px native resolution, every frame",
                  "Filmic baseline color grade, free",
                  "Full usage rights — personal & commercial",
                  "Cloud gallery — sharable, downloadable",
                  "Steven leads every session personally",
                ].map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <span className={styles.featureCheck} aria-hidden="true">✓</span>
                    <span className="text-body">{f}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.tierPrice}>$125/hr · 2-hour minimum</p>
              <Link href="/signal" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "1.5rem" }}>
                Book a session →
              </Link>
            </div>

            {/* UDP */}
            <div className={`razor-slab ${styles.tierCard}`}>
              <div className={styles.tierTop}>
                <p className="text-meta" style={{ color: "var(--razor)" }}>Ultra Digital Photography</p>
                <span className="tag tag-razor">Upgrade</span>
              </div>
              <h2 className={`text-h2 ${styles.tierHeadline}`}>
                Gallery-grade.
                <br />Every pixel.
              </h2>
              <p className="text-body" style={{ marginBottom: "1.5rem" }}>
                Hand-selected frames pushed through a finishing process that combines
                AI-augmented retouching, denoise and sharpen at the pixel level, color
                science tuned for skin and gradient survival, and a final filmic finish.
                Work that wasn&apos;t technically possible five years ago.
              </p>
              <ul className={styles.featureList}>
                {[
                  "AI-augmented denoise & sharpen",
                  "Resolution preservation at pixel level",
                  "Professional skin retouching",
                  "Filmic color science",
                  "Hand-selected by you — you pick the frames",
                  "$5/photo · +5 minimum",
                ].map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <span className={styles.featureCheckRazor} aria-hidden="true">✓</span>
                    <span className="text-body">{f}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.tierPrice}>$5/photo · +5 minimum · $25 to start</p>
              <Link href="/signal" className="btn-secondary" style={{ width: "100%", justifyContent: "center", marginTop: "1.5rem", borderColor: "rgba(255,46,58,0.4)", color: "var(--razor)" }}>
                Request the upgrade →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="ice-divider" />

      {/* What we shoot */}
      <section className={styles.whatSection}>
        <div className={styles.whatInner}>
          <p className="text-meta" style={{ marginBottom: "2rem" }}>What we shoot</p>
          <div className={styles.whatGrid}>
            {[
              { title: "Portraits & Headshots", desc: "Personal branding, professional, dating, social. Since 2008." },
              { title: "Events & Milestones", desc: "Weddings, quinceañeras, graduations, anniversaries." },
              { title: "Concerts & Live Music", desc: "Bands, festivals, performance, backstage." },
              { title: "Commercial & Product", desc: "Real estate, food, product, brand, interior/exterior." },
              { title: "Family & Generational", desc: "Multi-gen portraits, kids, pets, candid moments." },
              { title: "Automotive & Lifestyle", desc: "Cars, gear, lifestyle editorial." },
            ].map((item) => (
              <div key={item.title} className={`ice-slab ${styles.whatCard}`}>
                <h3 className={styles.whatTitle}>{item.title}</h3>
                <p className="text-body" style={{ color: "var(--white-36)", fontSize: "0.875rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ice-divider" />

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalInner}>
          <h2 className={`text-h1 ${styles.finalHeadline}`}>Book the next session.</h2>
          <p className="text-body-lg" style={{ color: "var(--white-48)", marginBottom: "2.5rem", maxWidth: 480 }}>
            $125/hr, 2-hour minimum, Instant Digital Photography always included.
            Ultra Digital Photography available on request.
          </p>
          <Link href="/signal" className="btn-primary">Book a session →</Link>
          <p style={{ marginTop: "1rem", fontFamily: "var(--font-mono)", fontSize: "var(--fs-meta)", color: "var(--white-24)" }}>
            760-669-6102 · Steven shoots every session personally.
          </p>
        </div>
      </section>
    </div>
  );
}
