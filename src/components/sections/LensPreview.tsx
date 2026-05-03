import Link from "next/link";
import styles from "./LensPreview.module.css";

const lenses = [
  {
    id: "photo",
    label: "Photo",
    tagline: "Ultra Digital Photography",
    desc: "Highest-end full-frame hardware. AI-augmented retouching. Filmic finish. Instant delivery while the event is still happening.",
    href: "/photography",
    cta: "See the lens →",
    stat: "+150 galleries",
  },
  {
    id: "video",
    label: "Video",
    tagline: "Cinematic production.",
    desc: "+600 videos shipped. Brand films, music, interviews, events, product. 4K 60fps, 10-bit, dual-card recording.",
    href: "/videography",
    cta: "See the reel →",
    stat: "+600 videos",
  },
  {
    id: "it-ai",
    label: "IT / AI",
    tagline: "Infrastructure and intelligence.",
    desc: "Networks, websites, custom AI agents — built and run by the same team. Fewer vendors. Less coordination. Solutions that work together.",
    href: "/it-ai",
    cta: "See the lens →",
    stat: "One team, full context.",
  },
];

export function LensPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={`text-meta ${styles.eyebrow}`}>Three Lenses</p>
        <div className={styles.grid}>
          {lenses.map((lens) => (
            <div key={lens.id} className={`ice-slab ${styles.lensCard}`}>
              <p className={`text-meta ${styles.lensLabel}`}>{lens.label}</p>
              <h2 className={`text-h2 ${styles.lensHeadline}`}>{lens.tagline}</h2>
              <p className={`text-body ${styles.lensDesc}`}>{lens.desc}</p>
              <p className={styles.stat}>{lens.stat}</p>
              <Link href={lens.href} className={styles.lensCta}>
                {lens.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
