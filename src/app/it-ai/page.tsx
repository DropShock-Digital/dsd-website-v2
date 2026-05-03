import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "IT & AI — DropShock Digital",
  description: "Networks, websites, custom LLM agents. Built and run by the same team. $10k–$150k engagements.",
};

const OFFERINGS = [
  {
    title: "Networks & Infrastructure",
    desc: "VPS, VPNs, LAN, remote access, backup systems, hardware procurement. The backbone everything else runs on.",
    tags: ["VPS / bare metal", "Tailscale VPN", "Backup & DR", "Procurement"],
    accent: "var(--bi-cyan)",
  },
  {
    title: "Websites & Web Apps",
    desc: "Custom builds, CMS integrations, e-commerce, landing pages, dashboards. Built to last, designed to convert.",
    tags: ["Next.js / React", "Sanity CMS", "E-commerce", "Analytics"],
    accent: "var(--bi-frost)",
  },
  {
    title: "AI Agents & Automation",
    desc: "Custom LLM agents, workflow automation, CRM integrations, scheduled tasks, Telegram bots, data pipelines.",
    tags: ["LLM agents", "Composio", "CRM sync", "Cron & webhooks"],
    accent: "var(--razor)",
  },
  {
    title: "Brand & Content Systems",
    desc: "Photography workflows, video asset management, DAM systems, delivery pipelines. The infrastructure behind the content.",
    tags: ["Asset management", "Delivery pipelines", "Cloud storage", "CDN"],
    accent: "var(--bi-frost)",
  },
];

export default function ITAIPage() {
  return (
    <div className={styles.page}>
      {/* Hero — terminal aesthetic */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          {/* Terminal */}
          <div className={styles.terminalWrap}>
            <div className={styles.terminalHeader} aria-hidden="true">
              <span className={styles.terminalDotR} />
              <span className={styles.terminalDotY} />
              <span className={styles.terminalDotG} />
              <span className={styles.terminalTitle}>dropshock@nexus:~/it-ai</span>
            </div>
            <div className={`terminal ${styles.terminal}`}>
              <div className="terminal-line">
                <span className="terminal-prompt">❯</span>
                <span>whoami</span>
              </div>
              <div className="terminal-line" style={{ color: "var(--bi-cyan)" }}>
                <span>DropShock Digital — IT & AI Division</span>
              </div>
              <div className="terminal-line" style={{ marginTop: "0.75rem" }}>
                <span className="terminal-prompt">❯</span>
                <span>cat services.txt</span>
              </div>
              <div className="terminal-line" style={{ color: "var(--white-48)" }}>
                <span>Networks · Websites · AI Agents · Content Systems</span>
              </div>
              <div className="terminal-line" style={{ marginTop: "0.75rem" }}>
                <span className="terminal-prompt">❯</span>
                <span>ls engagements/</span>
              </div>
              <div className="terminal-line" style={{ color: "var(--white-48)" }}>
                <span>$10k–$150k/ &nbsp; avg: $30k+ saved vs. enterprise</span>
              </div>
              <div className="terminal-line" style={{ marginTop: "0.75rem" }}>
                <span className="terminal-prompt">❯</span>
                <span className="terminal-cursor" />
              </div>
            </div>
          </div>

          {/* Hero text */}
          <div className={styles.heroText}>
            <p className="text-meta" style={{ marginBottom: "1.5rem" }}>
              <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--razor)", boxShadow: "0 0 8px var(--razor)", marginRight: 8, verticalAlign: "middle" }} />
              Lens 03 · IT & AI Infrastructure
            </p>
            <h1 className={`text-display ${styles.heroHeadline}`}>
              Intelligence
              <br />
              <span className={styles.heroAccent}>and backbone.</span>
            </h1>
            <p className={`text-body-lg ${styles.heroSub}`}>
              Networks, websites, custom AI agents — built and run by the same team.
              Fewer vendors. Less coordination. Everything works together.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/signal" className="btn-primary">Scope a project →</Link>
              <Link href="/work" className="btn-secondary">See past builds →</Link>
            </div>
            <p className={styles.heroRange}>$10k – $150k engagements</p>
          </div>
        </div>
      </section>

      <hr className="razor-divider" />

      {/* Offerings */}
      <section className={styles.offerSection}>
        <div className={styles.offerInner}>
          <p className="text-meta" style={{ marginBottom: "2rem" }}>What we build and run</p>
          <div className={styles.offerGrid}>
            {OFFERINGS.map((o) => (
              <div key={o.title} className={`ice-slab ${styles.offerCard}`}
                style={{ "--accent": o.accent } as React.CSSProperties}>
                <div className={styles.offerTop}>
                  <h2 className={`text-h3 ${styles.offerTitle}`} style={{ color: o.accent }}>{o.title}</h2>
                </div>
                <p className="text-body" style={{ fontSize: "0.9rem", flex: 1 }}>{o.desc}</p>
                <div className={styles.tagList}>
                  {o.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ice-divider" />

      {/* Pricing block */}
      <section className={styles.pricingSection}>
        <div className={styles.pricingInner}>
          <div className={`razor-slab ${styles.pricingBlock}`}>
            <div className={styles.pricingTop}>
              <p className="text-meta" style={{ color: "var(--razor)" }}>Engagement Range</p>
              <p className={styles.pricingRange}>$10k – $150k</p>
            </div>
            <p className="text-body" style={{ color: "var(--white-48)", marginBottom: "1.5rem" }}>
              IT and AI engagements vary based on scope, complexity, and timeline.
              Most first projects land in the $25k–$75k range.
            </p>
            <ul className={styles.pricingList}>
              {[
                "Fixed-scope proposals — you know what you're buying before we start",
                "Weekly progress updates — real deliverables, not status reports",
                "Source code delivered at completion — no lock-in",
                "30-day post-launch support included",
                "Can operate as sub to your existing agency or as lead",
              ].map((item) => (
                <li key={item} className={styles.pricingItem}>
                  <span style={{ color: "var(--razor)" }}>✓</span>
                  <span className="text-body" style={{ fontSize: "0.9rem" }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/signal" className="btn-primary" style={{ marginTop: "1.5rem", alignSelf: "flex-start" }}>
              Get a proposal →
            </Link>
          </div>
        </div>
      </section>

      <hr className="ice-divider" />

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalInner}>
          <h2 className={`text-h1 ${styles.finalHeadline}`}>Stop coordinating vendors.</h2>
          <p className="text-body-lg" style={{ color: "var(--white-48)", marginBottom: "2.5rem", maxWidth: 480 }}>
            One team. Full context. Everything built to work together.
          </p>
          <Link href="/signal" className="btn-primary">Start a conversation →</Link>
        </div>
      </section>
    </div>
  );
}
