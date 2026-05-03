import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The Team",
  description: "DropShock Digital is Steven Seagondollar, Hunter Jones, and Marcelo Goncalves. Three operators, one mission.",
};

const team = [
  {
    slug: "steven",
    name: "Steven Seagondollar",
    role: "Founder · Head of Agentic Systems & AI Engineering",
    bio: "15 years behind the lens. DropShock founder. Runs every shoot personally. Building the content systems that run in the background of everything we do.",
    tags: ["Photography", "AI Agents", "Systems", "Strategy"],
    cta: "Book with Steven →",
    accent: "var(--sea-bio)",
  },
  {
    slug: "hunter",
    name: "Hunter Jones",
    role: "Lead Video Editor · Motion Designer",
    bio: "+600 videos edited. Brand films, music videos, event coverage. Understands the space between what's shot and what moves someone.",
    tags: ["Editing", "Motion", "Color Grade", "Sound"],
    cta: "See the reel →",
    accent: "var(--ice-razor)",
  },
  {
    slug: "marcelo",
    name: "Marcelo Goncalves",
    role: "Lead Developer · Systems Architect",
    bio: "Web infrastructure, custom tooling, AI agent deployments, VPS systems. The builder behind everything that runs on a server.",
    tags: ["Next.js", "AI Agents", "Infrastructure", "DevOps"],
    cta: "View builds →",
    accent: "var(--ice-rim)",
  },
];

export default function TeamPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "1rem" }}>The Operators</p>
          <h1 className={`text-display ${styles.heroHeadline}`}>Three people.</h1>
          <p className={`text-body-lg ${styles.heroSub}`}>
            DropShock Digital is Steven, Hunter, and Marcelo. Three operators. One mission.
            No layers of account managers. You work with the people who do the work.
          </p>
        </div>
      </section>

      <section className={styles.teamGrid}>
        <div className={styles.teamInner}>
          {team.map((member) => (
            <div key={member.slug} className={`ice-slab ${styles.memberCard}`}>
              <div className={styles.memberAvatar} style={{ borderColor: member.accent }}>
                <span className={styles.memberInitials} style={{ color: member.accent }}>
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div className={styles.memberInfo}>
                <p className="text-meta" style={{ color: member.accent, marginBottom: "0.5rem" }}>{member.role}</p>
                <h2 className={styles.memberName}>{member.name}</h2>
                <p className="text-body" style={{ color: "var(--white-48)", marginBottom: "1rem", fontSize: "0.9rem" }}>{member.bio}</p>
                <div className={styles.memberTags}>
                  {member.tags.map((t) => (
                    <span key={t} className={styles.memberTag}>{t}</span>
                  ))}
                </div>
                <Link href={`/team/${member.slug}`} className="btn-secondary" style={{ marginTop: "1.5rem" }}>
                  {member.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
