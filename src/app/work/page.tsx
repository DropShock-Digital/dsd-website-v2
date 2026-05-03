import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work — DropShock Digital",
  description: "Photo, video, and build work by DropShock Digital. Brand films, galleries, web builds, AI systems.",
};

const workItems = [
  {
    slug: "brand-film-01",
    category: "Video",
    title: "Brand Film — Vans Warped Tour Throwback",
    desc: "Full production for a 15-year anniversary retrospective. Shot across 3 days, edited in 10 days.",
    year: "2024",
    tags: ["Brand Film", "Documentary"],
  },
  {
    slug: "portrait-series-01",
    category: "Photography",
    title: "Portrait Series — Musicians",
    desc: "30 portraits, Instant + Ultra Digital Photography. Delivered same-day.",
    year: "2024",
    tags: ["Portrait", "Ultra Digital"],
  },
  {
    slug: "web-build-01",
    category: "IT / AI",
    title: "E-Commerce Build — dropshockprints.com",
    desc: "Full SmugMug-powered print shop with automated fulfillment. Built in 3 sprints.",
    year: "2024",
    tags: ["Web Build", "E-Commerce"],
  },
  {
    slug: "event-01",
    category: "Video",
    title: "Event Coverage — Private Gala",
    desc: "Multi-camera event coverage, 4K 60fps, same-night highlight reel delivered.",
    year: "2024",
    tags: ["Event", "Multi-Cam"],
  },
];

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "1rem" }}>Selected Work</p>
          <h1 className={`text-display ${styles.heroHeadline}`}>What we've built.</h1>
          <p className={`text-body-lg ${styles.heroSub}`}>
            Photo, video, and digital builds. Case studies arriving at launch.
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        <div className={styles.gridInner}>
          {workItems.map((item) => (
            <Link key={item.slug} href={`/work/${item.slug}`} className={`ice-slab ${styles.workCard}`}>
              <div className={styles.workCardInner}>
                <div className={styles.workMeta}>
                  <span className={styles.workCategory}>{item.category}</span>
                  <span className={styles.workYear}>{item.year}</span>
                </div>
                <h2 className={styles.workTitle}>{item.title}</h2>
                <p className="text-body" style={{ color: "var(--white-48)", fontSize: "0.875rem" }}>{item.desc}</p>
                <div className={styles.workTags}>
                  {item.tags.map((t) => (
                    <span key={t} className={styles.workTag}>{t}</span>
                  ))}
                </div>
              </div>
              <span className={styles.workArrow}>→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
