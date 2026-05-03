import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Ultra Digital Photography",
  description:
    "Instant + Ultra Digital Photography by DropShock Digital. Full-frame capture, AI-augmented retouching, filmic finish, real-time delivery. $125/hr, 2-hr minimum.",
};

export default function PhotographyPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "1rem" }}>
            Lens 01 · Ultra Digital Photography
          </p>
          <h1 className={`text-display ${styles.heroHeadline}`}>
            Photography,
            <br />
            fully realized.
          </h1>
          <p className={`text-body-lg ${styles.heroSub}`}>
            Every session is{" "}
            <strong style={{ color: "var(--white-100)" }}>Instant Digital Photography</strong>.
            Any frame can become{" "}
            <strong style={{ color: "var(--ice-razor)" }}>Ultra Digital Photography</strong>.
            We named both categories — and we ship them every weekend.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/signal" className="btn-primary">
              Book a session →
            </Link>
            <Link href="/work" className="btn-secondary">
              See the work →
            </Link>
          </div>
          <p className={styles.pricingNote}>
            $125/hr · 2-hour minimum · Instant delivery always included.
          </p>
        </div>
      </section>

      {/* Definition blocks */}
      <section className={styles.definitions}>
        <div className={styles.defInner}>
          {/* IDP */}
          <div className={`ice-slab ${styles.defCard}`}>
            <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "1rem" }}>
              Instant Digital Photography
            </p>
            <h2 className={`text-h2 ${styles.defHeadline}`}>
              Photos arrive while
              <br />
              the event is still alive.
            </h2>
            <p className="text-body" style={{ marginBottom: "1.5rem" }}>
              Most photography asks you to wait. The shoot ends, and then the work begins —
              days or weeks before you see anything.
            </p>
            <p className="text-body" style={{ marginBottom: "1.5rem" }}>
              Instant Digital Photography refuses the wait. Every frame we capture is
              delivered to your phone in real time, while the event is still happening.
              The handoff is the moment, not an afterthought.
            </p>
            <p className="text-body">
              It's full-frame. It's professional. And it arrives instantly.
            </p>
            <div className={styles.pillars}>
              {[
                "Real-time delivery — photos hit your device live",
                "Full-frame capture — highest-end sensor, prime glass",
                "+4000px native — every frame, full quality",
                "Always included — never an upcharge",
              ].map((p) => (
                <div key={p} className={styles.pillar}>
                  <span className={styles.check}>✓</span>
                  <span className="text-body">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UDP */}
          <div className={`ice-slab ${styles.defCard}`}>
            <p className="text-meta" style={{ color: "var(--ice-razor)", marginBottom: "1rem" }}>
              Ultra Digital Photography · Upgrade
            </p>
            <h2 className={`text-h2 ${styles.defHeadline}`}>
              Pushing every part
              <br />
              of the chain.
            </h2>
            <p className="text-body" style={{ marginBottom: "1.5rem" }}>
              Most photography stops at "good enough." Ultra Digital Photography pushes
              the ceiling.
            </p>
            <p className="text-body" style={{ marginBottom: "1.5rem" }}>
              Hand-selected frames are taken into a finishing process that combines
              AI-augmented retouching, resolution preservation, denoise and sharpen at
              the pixel level, color science tuned for skin and gradient survival, and a
              final filmic finish. The result is work that wasn't technically possible
              five years ago.
            </p>
            <p className="text-body">
              It's photography, fully realized.
            </p>
            <div className={styles.pillars}>
              {[
                "AI-augmented finishing — denoise, sharpen, resolution preservation, skin retouch",
                "Filmic color science — warm tones survive, accurate where it counts",
                "Hand-selected — you pick which frames level up",
                "$5/photo · +5 photo minimum — the upgrade tier",
              ].map((p) => (
                <div key={p} className={styles.pillar}>
                  <span className={styles.checkRazor}>✓</span>
                  <span className="text-body">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tagline divider */}
      <section className={styles.tagline}>
        <p className={styles.taglineLine}>Every session is Instant Digital Photography.</p>
        <div className={styles.taglineDivider} />
        <p className={styles.taglineLine}>Any frame can become Ultra Digital Photography.</p>
      </section>

      {/* Pricing */}
      <section className={styles.pricing}>
        <div className={styles.pricingInner}>
          <div className={`ice-slab ${styles.priceCard}`}>
            <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "0.75rem" }}>
              Instant Digital Photography
            </p>
            <p className={styles.priceAmount}>$125/hr</p>
            <p className="text-48" style={{ fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              2-hour minimum · $250 to start
            </p>
            <ul className={styles.priceIncludes}>
              {[
                "Highest-end full-frame capture — 45+ MP, fast prime glass, dual-card backup",
                "+4000px deliverables — every frame, native, full quality",
                "Instant delivery — photos in your hand while the event is still live",
                "Color-graded baseline edit — every delivered photo gets a filmic finish, free",
                "Full usage rights — personal and commercial, no expiration",
                "Cloud gallery — sharable, downloadable, indexed by face",
                "+15 years of craft — portraits, events, concerts, automotive, commercial",
                "A real human shooter — Steven leads every session",
              ].map((item) => (
                <li key={item} className={styles.priceItem}>
                  <span className={styles.check}>✓</span>
                  <span className="text-body" style={{ fontSize: "0.875rem" }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/signal" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "1.5rem" }}>
              Book a session →
            </Link>
          </div>

          <div className={`ice-slab ${styles.priceCard}`}>
            <p className="text-meta" style={{ color: "var(--ice-razor)", marginBottom: "0.75rem" }}>
              Ultra Digital Photography · Upgrade
            </p>
            <p className={styles.priceAmount}>$5/photo</p>
            <p className="text-48" style={{ fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              +5 photo minimum · $25 to start
            </p>
            <p className="text-body" style={{ marginBottom: "1.5rem" }}>
              Hand-selected frames upgraded to gallery-grade with AI-augmented denoising,
              sharpening, resolution preservation, professional retouching, and a filmic finish.
            </p>
            <p className="text-body">
              Add anytime. Request during booking, after the session, or months later —
              your photos stay in our system.
            </p>
            <Link href="/signal" className="btn-secondary" style={{ width: "100%", justifyContent: "center", marginTop: "1.5rem" }}>
              Request the upgrade →
            </Link>
          </div>
        </div>
      </section>

      {/* How a session runs */}
      <section className={styles.howSection}>
        <div className={styles.howInner}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "2rem" }}>
            How a Session Runs
          </p>
          <div className={styles.howSteps}>
            {[
              { num: "01", title: "Brief", desc: "A 10-minute call. We confirm the timeline, the must-have shots, the location, and any details. You don't need a plan. We bring one." },
              { num: "02", title: "Arrival", desc: "We arrive early. Light is checked. Gear is set. Backups are mounted." },
              { num: "03", title: "Capture", desc: "We shoot. As we shoot, photos are delivered to your phone. By the time the event is over, your gallery is full." },
              { num: "04", title: "Wrap", desc: "We confirm the gallery, the file count, the access link." },
              { num: "05", title: "Optional Upgrade", desc: "You select your favorites. We turn them into gallery-grade Ultra Digital Photography deliverables. 5-photo minimum, $5 each, no rush fees." },
            ].map((step) => (
              <div key={step.num} className={styles.howStep}>
                <span className={styles.howNum}>{step.num}</span>
                <h3 className={styles.howTitle}>{step.title}</h3>
                <p className="text-body" style={{ color: "var(--white-48)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we shoot */}
      <section className={styles.whatWeShoot}>
        <div className={styles.whatInner}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "2rem" }}>
            What We Shoot
          </p>
          <div className={styles.whatGrid}>
            {[
              { title: "Portraits & Headshots", desc: "Personal branding, professional, dating, social. Since 2008." },
              { title: "Events & Celebrations", desc: "Weddings, quinceañeras, graduations, milestones, fundraisers." },
              { title: "Concerts & Live Music", desc: "Bands, festivals, performance, behind-the-scenes." },
              { title: "Commercial & Product", desc: "Real estate, food, product, brand, interior/exterior." },
              { title: "Family & Generational", desc: "Multi-generational portraits, kids, pets, candid." },
              { title: "Automotive & Lifestyle", desc: "Cars, gear, lifestyle editorial." },
            ].map((item) => (
              <div key={item.title} className={`ice-slab ${styles.whatCard}`}>
                <h3 className={styles.whatTitle}>{item.title}</h3>
                <p className="text-body" style={{ color: "var(--white-48)", fontSize: "0.875rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className={styles.whatCredit}>
            Shot by Steven and credited collaborators including Hunter Jones.
          </p>
        </div>
      </section>

      {/* Differentiator */}
      <section className={styles.diffSection}>
        <div className={styles.diffInner}>
          <h2 className={`text-h2 ${styles.diffHeadline}`}>Why people choose us.</h2>
          <div className={styles.diffGrid}>
            {[
              {
                title: "No more waiting.",
                desc: "Photos arrive while the event is still alive. No \"you'll get the gallery next week\" anxiety. The handoff is the moment.",
              },
              {
                title: "No bad client experiences.",
                desc: "Every session, every delivery, every retouch is treated as a non-negotiable promise. We don't rebook clients we let down.",
              },
              {
                title: "No vendor sprawl.",
                desc: "The same team that shoots your event can also produce the highlight video, build your gallery page, and connect it to your CRM. One team. Full context.",
              },
            ].map((d) => (
              <div key={d.title} className={styles.diffCard}>
                <h3 className={styles.diffTitle}>{d.title}</h3>
                <p className="text-body" style={{ color: "var(--white-48)" }}>{d.desc}</p>
              </div>
            ))}
          </div>
          <p className={styles.diffTrust}>
            We don&apos;t repeat clients we&apos;ve let down. We don&apos;t let them down.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalInner}>
          <h2 className={`text-h1 ${styles.finalHeadline}`}>Book the next session.</h2>
          <p className="text-body-lg" style={{ color: "var(--white-48)", marginBottom: "2rem" }}>
            $125/hr, 2-hour minimum, Instant Digital Photography always included.
            Ultra Digital Photography available on request.
          </p>
          <Link href="/signal" className="btn-primary">
            Book a session →
          </Link>
          <p className={styles.finalNote}>760-669-6102 · Steven shoots every session personally.</p>
        </div>
      </section>
    </div>
  );
}
