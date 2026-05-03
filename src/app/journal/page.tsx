import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Journal — DropShock Digital",
  description: "Notes on craft, systems, and building things that last.",
};

export default function JournalPage() {
  const posts = [
    { slug: "why-instant-delivery", title: "Why we deliver photos while the event is still happening", date: "Jan 2025", read: "4 min" },
    { slug: "one-team", title: "The case for one team with full context", date: "Dec 2024", read: "6 min" },
    { slug: "razorbill", title: "The razorbill and what it means for our brand", date: "Nov 2024", read: "3 min" },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "1rem" }}>Journal</p>
          <h1 className={`text-display ${styles.heroHeadline}`}>Notes on craft.</h1>
          <p className="text-body-lg" style={{ color: "var(--white-48)" }}>On building, shooting, and running a studio that doesn&apos;t waste anyone&apos;s time.</p>
        </div>
      </section>
      <section className={styles.posts}>
        <div className={styles.postsInner}>
          {posts.map((p) => (
            <div key={p.slug} className={`ice-slab ${styles.postCard}`}>
              <div className={styles.postMeta}>
                <span className={styles.postDate}>{p.date}</span>
                <span className={styles.postRead}>{p.read}</span>
              </div>
              <h2 className={styles.postTitle}>{p.title}</h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
