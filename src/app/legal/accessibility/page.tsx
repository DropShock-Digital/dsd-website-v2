import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Accessibility — DropShock Digital",
};

export default function AccessibilityPage() {
  return (
    <div className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.headline}>DropShock Digital — Accessibility Policy</h1>
        <div className={styles.body}>
          <p className="text-body" style={{ color: "var(--white-48)" }}>Last updated: January 2025</p>
          <h2 className={styles.h2}>1. Our Commitment</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>DropShock Digital is committed to ensuring our website is accessible to all users, including those with disabilities. We strive to meet WCAG 2.1 AA standards.</p>
          <h2 className={styles.h2}>2. Accessibility Features</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>This website includes: semantic HTML structure, ARIA landmarks, keyboard navigation, skip-to-content links, sufficient color contrast ratios, and focus indicators.</p>
          <h2 className={styles.h2}>3. Known Limitations</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>Some interactive elements (3D canvas, custom cursor) are decorative or enhancement features. They degrade gracefully when unsupported and do not block core content access.</p>
          <h2 className={styles.h2}>4. Feedback</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>If you experience any accessibility barrier, please contact us at 760-669-6102. We take accessibility seriously and respond to all feedback.</p>
        </div>
      </section>
    </div>
  );
}
