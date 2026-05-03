"use client"

import { useRef } from "react";
import Link from "next/link";
import styles from "./LensPreview.module.css";

const SERVICES = [
  {
    id: "photo",
    num: "01",
    label: "Lens 01",
    title: "Ultra Digital\nPhotography",
    desc: "Full-frame capture. Instant delivery while the event is still live. Hand-selected frames upgraded to gallery-grade with AI-augmented finishing.",
    stats: [
      { val: "$125", label: "per hour" },
      { val: "45+ MP", label: "full-frame" },
      { val: "Instant", label: "delivery" },
    ],
    cta: "See the photography →",
    href: "/photography",
    accentColor: "var(--bi-cyan)",
    bgGradient: "radial-gradient(ellipse 60% 50% at 50% 120%, rgba(0,200,255,0.08) 0%, transparent 70%)",
    borderColor: "rgba(0, 200, 255, 0.20)",
    chipText: "Photography",
  },
  {
    id: "video",
    num: "02",
    label: "Lens 02",
    title: "Cinematic\nVideo Production",
    desc: "+600 videos shipped. Brand films, music videos, interviews, events, product. 4K 60fps 10-bit. One team. Full context. Zero vendor sprawl.",
    stats: [
      { val: "600+", label: "videos" },
      { val: "4K 60fps", label: "10-bit" },
      { val: "1 team", label: "full context" },
    ],
    cta: "See the reel →",
    href: "/videography",
    accentColor: "var(--bi-frost)",
    bgGradient: "radial-gradient(ellipse 60% 50% at 50% 120%, rgba(74,127,168,0.08) 0%, transparent 70%)",
    borderColor: "rgba(74, 127, 168, 0.20)",
    chipText: "Videography",
  },
  {
    id: "itai",
    num: "03",
    label: "Lens 03",
    title: "IT & AI\nInfrastructure",
    desc: "Networks, websites, custom LLM agents. Built and run by the same team. $10k–$150k engagements. Fewer vendors. Less coordination.",
    stats: [
      { val: "$10k–$150k", label: "engagements" },
      { val: "LLM agents", label: "custom build" },
      { val: "VPS / VPN", label: "networks" },
    ],
    cta: "Scope a project →",
    href: "/it-ai",
    accentColor: "var(--razor)",
    bgGradient: "radial-gradient(ellipse 60% 50% at 50% 120%, rgba(255,46,58,0.08) 0%, transparent 70%)",
    borderColor: "rgba(255, 46, 58, 0.20)",
    chipText: "IT & AI",
  },
];

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className={styles.card}
      style={{
        "--accent": service.accentColor,
        "--border": service.borderColor,
        "--bg": service.bgGradient,
      } as React.CSSProperties}
    >
      {/* Background gradient */}
      <div className={styles.cardBg} aria-hidden="true" />

      {/* Top */}
      <div className={styles.cardTop}>
        <span className={styles.cardChip} style={{ color: service.accentColor, borderColor: service.borderColor }}>
          {service.chipText}
        </span>
        <span className={styles.cardNum}>{service.num}</span>
      </div>

      {/* Title */}
      <div className={styles.cardTitle}>
        <p className={`text-meta ${styles.cardLabel}`} style={{ color: service.accentColor }}>{service.label}</p>
        <h2 className={`text-h2 ${styles.cardHeadline}`}>
          {service.title.split("\n").map((line, i) => (
            <span key={i} className={styles.cardLineWrap}>
              {line}
              {i < service.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>
      </div>

      {/* Desc */}
      <p className={`text-body ${styles.cardDesc}`}>{service.desc}</p>

      {/* Stats */}
      <div className={styles.cardStats}>
        {service.stats.map((s) => (
          <div key={s.label} className={styles.cardStat}>
            <span className={styles.cardStatVal} style={{ color: service.accentColor }}>{s.val}</span>
            <span className={styles.cardStatLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link href={service.href} className={styles.cardCta} style={{ color: service.accentColor, borderColor: service.borderColor }}>
        {service.cta}
      </Link>

      {/* Hover glow */}
      <div className={styles.cardGlow} aria-hidden="true" />
    </div>
  );
}

export function LensPreview() {
  return (
    <section className={styles.section} aria-label="Services">
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <p className="text-meta">What we do</p>
          <h2 className={`text-h1 ${styles.sectionTitle}`}>
            Three lenses.
            <br />
            One team.
          </h2>
          <p className={`text-body-lg ${styles.sectionSub}`}>
            Photography, video production, and technical infrastructure — built separately,
            <br className={styles.brDesktop} /> run by the same crew. Fewer vendors. Less friction.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
