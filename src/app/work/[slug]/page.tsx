import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

const workData: Record<string, {
  title: string;
  category: string;
  year: string;
  client: string;
  desc: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
}> = {
  "brand-film-01": {
    title: "Brand Film — Vans Warped Tour Throwback",
    category: "Video",
    year: "2024",
    client: "Confidential",
    desc: "A 15-year anniversary retrospective film for a music brand. Shot across 3 days, edited in 10 days.",
    challenge: "Archived footage from 2009 needed to match modern 4K 60fps capture without looking like a separate era.",
    solution: "Color-matched archival footage in DaVinci, rebuilt audio from original stems, new talking-head interviews cut to match rhythm.",
    result: "Delivered 2 days early. Client called it the best thing they'd ever produced.",
    tags: ["Brand Film", "DaVinci Resolve", "Multi-Cam", "Archival"],
  },
  "portrait-series-01": {
    title: "Portrait Series — Musicians",
    category: "Photography",
    year: "2024",
    client: "Confidential",
    desc: "30-portrait series for musicians. Instant Digital Photography with Ultra Digital upgrade on select frames.",
    challenge: "Low-light concert venue, fast turnover, 30 subjects who had never been shot professionally.",
    solution: "Prime 85mm f/1.4, ISO 3200 managed with Ultra Digital denoise, same-day Instant delivery, 8 frames upgraded to Ultra.",
    result: "100% satisfaction rate. All subjects received galleries same-day.",
    tags: ["Portrait", "Ultra Digital", "Concert", "Instant Delivery"],
  },
  "web-build-01": {
    title: "E-Commerce Build — dropshockprints.com",
    category: "IT / AI",
    year: "2024",
    client: "Internal",
    desc: "SmugMug-powered print shop with automated order processing, Stripe checkout, and custom theming.",
    challenge: "Needed to launch print sales without managing physical inventory or fulfillment manually.",
    solution: "SmugMug storefront with print fulfillment, Stripe Connect for payments, custom CSS theming to match brand.",
    result: "Live and taking orders within 3 sprints. Zero manual fulfillment required.",
    tags: ["SmugMug", "Stripe", "E-Commerce", "Automation"],
  },
  "event-01": {
    title: "Event Coverage — Private Gala",
    category: "Video",
    year: "2024",
    client: "Confidential",
    desc: "Multi-camera event coverage for a private fundraiser. 4K 60fps, same-night highlight reel.",
    challenge: "VIP presence meant minimal disruption to the event. No second chances on key moments.",
    solution: "3-camera setup, audio captured separately, editor on standby for rough cut during event.",
    result: "Highlight reel delivered to client before midnight. Full gallery delivered next morning.",
    tags: ["Event", "Multi-Cam", "4K 60fps", "Same-Day"],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = workData[slug];
  if (!item) return { title: "Work — Not Found" };
  return { title: item.title, description: item.desc };
}

export default async function WorkSlugPage({ params }: Props) {
  const { slug } = await params;
  const item = workData[slug] || workData["brand-film-01"];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroMeta}>
            <span className="text-meta" style={{ color: "var(--ice-rim)" }}>{item.category}</span>
            <span className="text-meta" style={{ color: "var(--white-24)" }}>{item.year}</span>
          </div>
          <h1 className={`text-h1 ${styles.heroHeadline}`}>{item.title}</h1>
          <p className={`text-body-lg ${styles.heroSub}`}>{item.desc}</p>
        </div>
      </section>

      <section className={styles.caseStudy}>
        <div className={styles.csInner}>
          <div className={`ice-slab ${styles.csBlock}`}>
            <p className="text-meta" style={{ color: "var(--ice-razor)", marginBottom: "0.75rem" }}>The Challenge</p>
            <p className="text-body" style={{ color: "var(--white-48)" }}>{item.challenge}</p>
          </div>
          <div className={`ice-slab ${styles.csBlock}`}>
            <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "0.75rem" }}>The Solution</p>
            <p className="text-body" style={{ color: "var(--white-48)" }}>{item.solution}</p>
          </div>
          <div className={`ice-slab ${styles.csBlock}`}>
            <p className="text-meta" style={{ color: "var(--sea-bio)", marginBottom: "0.75rem" }}>The Result</p>
            <p className="text-body" style={{ color: "var(--white-48)" }}>{item.result}</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={`text-h2 ${styles.ctaHeadline}`}>Ready to build something?</h2>
          <Link href="/signal" className="btn-primary">Start a conversation →</Link>
        </div>
      </section>
    </div>
  );
}
