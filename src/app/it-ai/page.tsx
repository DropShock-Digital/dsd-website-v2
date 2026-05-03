import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "IT & AI — Infrastructure and Intelligence",
  description:
    "Networks, websites, custom AI agents — built and run by the same team. Fewer vendors. Less coordination. $10k–$150k engagements.",
};

export default function ITAIPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "1rem" }}>
            Lens 03 · IT &amp; AI Infrastructure
          </p>
          <h1 className={`text-display ${styles.heroHeadline}`}>
            Intelligence
            <br />
            and backbone.
          </h1>
          <p className={`text-body-lg ${styles.heroSub}`}>
            Networks, websites, custom AI agents — built and run by the same team.
            Fewer vendors. Less coordination. Solutions that work together.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/signal" className="btn-primary">Scope a project →</Link>
            <Link href="/work" className="btn-secondary">See past builds →</Link>
          </div>
          <p className={styles.heroRange}>$10k – $150k engagements</p>
        </div>
      </section>

      <section className={styles.offerings}>
        <div className={styles.offeringsInner}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "2rem" }}>What We Build and Run</p>
          <div className={styles.offeringGrid}>
            {[
              {
                title: "Networks & Infrastructure",
                desc: "VPS, VPNs, LAN, remote access, backup systems, hardware procurement. The backbone that everything else runs on.",
                tags: ["VPS / bare metal", "Tailscale VPN", "Backup & DR", "Procurement"],
              },
              {
                title: "Websites & Web Apps",
                desc: "Custom builds, CMS integrations, e-commerce, landing pages, dashboards. Built to last, designed to convert.",
                tags: ["Next.js / React", "Sanity CMS", "E-commerce", "Analytics"],
              },
              {
                title: "AI Agents & Automation",
                desc: "Custom LLM agents, workflow automation, CRM integrations, scheduled tasks, Telegram bots, data pipelines.",
                tags: ["LLM agents", "Composio", "CRM sync", "Cron & webhooks"],
              },
              {
                title: "Brand & Content Systems",
                desc: "Photography workflows, video asset management, DAM systems, delivery pipelines. The infrastructure behind the content.",
                tags: ["Asset management", "Delivery pipelines", "Cloud storage", "CDN"],
              },
            ].map((o) => (
              <div key={o.title} className={`ice-slab ${styles.offeringCard}`}>
                <h3 className={styles.offeringTitle}>{o.title}</h3>
                <p className="text-body" style={{ color: "var(--white-48)", marginBottom: "1rem", fontSize: "0.9rem" }}>{o.desc}</p>
                <div className={styles.tagList}>
                  {o.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pricing}>
        <div className={styles.pricingInner}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "2rem" }}>Engagement Range</p>
          <div className={`ice-slab ${styles.priceBlock}`}>
            <p className={styles.priceRange}>$10k – $150k</p>
            <p className="text-body" style={{ color: "var(--white-48)", marginBottom: "1.5rem" }}>
              IT and AI engagements vary based on scope, complexity, and timeline.
              Most engagements land in the $25k–$75k range for a first project.
            </p>
            <ul className={styles.priceList}>
              {[
                "Fixed-scope proposals — you know what you're buying before we start",
                "Weekly progress updates — real deliverables, not status reports",
                "Source code delivered at completion — no lock-in",
                "30-day post-launch support included",
                "Can operate as sub to your existing agency or as lead",
              ].map((item) => (
                <li key={item} className={styles.priceItem}>
                  <span style={{ color: "var(--ice-rim)" }}>✓</span>
                  <span className="text-body" style={{ fontSize: "0.9rem" }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/signal" className="btn-primary" style={{ marginTop: "1.5rem" }}>Get a proposal →</Link>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={`text-h1 ${styles.ctaHeadline}`}>Stop coordinating vendors.</h2>
          <p className="text-body-lg" style={{ color: "var(--white-48)", marginBottom: "2rem" }}>
            One team. Full context. Everything built to work together.
          </p>
          <Link href="/signal" className="btn-primary">Start a conversation →</Link>
        </div>
      </section>
    </div>
  );
}
