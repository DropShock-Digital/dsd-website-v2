import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy — DropShock Digital",
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.headline}>DropShock Digital — Privacy Policy</h1>
        <div className={styles.body}>
          <p className="text-body" style={{ color: "var(--white-48)" }}>Last updated: January 2025</p>
          <h2 className={styles.h2}>1. Information We Collect</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>We collect information you provide directly: name, email, company, and message when you submit our contact form. We do not sell or share this information with third parties.</p>
          <h2 className={styles.h2}>2. How We Use Information</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>Information collected via our contact form is used solely to respond to your inquiry and, with your consent, to communicate about our services.</p>
          <h2 className={styles.h2}>3. Cookies</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>This website uses minimal cookies for functionality (audio preference, audience segment selection). We do not use tracking or advertising cookies.</p>
          <h2 className={styles.h2}>4. Data Retention</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>Contact form submissions are retained for up to 24 months. You may request deletion at any time by contacting us directly.</p>
          <h2 className={styles.h2}>5. Contact</h2>
          <p className="text-body" style={{ color: "var(--white-48)" }}>DropShock Digital LLC &middot; Hesperia, California &middot; 760-669-6102</p>
        </div>
      </section>
    </div>
  );
}
