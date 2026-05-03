import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Terms — DropShock Digital",
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.headline}>DropShock Digital — Terms Policy</h1>
        <div className={styles.body}>
          <p className="text-body" style={{ color: "var(--white-48)" }}>Last updated: January 2025</p>
          <h2 className={styles.h2}>1. Acceptance of Terms</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>By accessing or using the DropShock Digital website and services, you agree to be bound by these terms.</p>
          <h2 className={styles.h2}>2. Services</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>DropShock Digital LLC provides photography, videography, and IT/AI services as described on this website. All engagements are subject to a separate written agreement.</p>
          <h2 className={styles.h2}>3. Payment</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>Payment terms are defined in individual project agreements. DropShock Digital reserves the right to pause work pending payment.</p>
          <h2 className={styles.h2}>4. Intellectual Property</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>Final deliverables transfer to the client upon receipt of full payment. DropShock Digital retains the right to display work in portfolios and marketing materials unless otherwise agreed.</p>
          <h2 className={styles.h2}>5. Contact</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>DropShock Digital LLC &middot; Hesperia, California &middot; 760-669-6102</p>
        </div>
      </section>
    </div>
  );
}
