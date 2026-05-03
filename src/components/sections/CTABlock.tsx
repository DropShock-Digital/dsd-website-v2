import Link from "next/link";
import styles from "./CTABlock.module.css";

export function CTABlock() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={`text-h1 ${styles.headline}`}>Ready to talk?</h2>
        <p className={styles.sub}>
          Engagements typically run $5k–$150k. We take on four new ones per quarter.
          Two slots open right now.
        </p>
        <div className={styles.ctas}>
          <Link href="/signal" className="btn-primary">
            Book a 15-min call →
          </Link>
        </div>
        <p className={styles.microline}>Steven is on every kickoff call.</p>
      </div>
    </section>
  );
}
