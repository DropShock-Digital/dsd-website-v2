"use client"
import Link from "next/link";
import styles from "./error.module.css";

export default function ErrorPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <p className={styles.code}>500</p>
        <h1 className={`text-h1 ${styles.headline}`}>Something broke.</h1>
        <p className="text-body" style={{ color: "var(--white-48)", marginBottom: "2rem" }}>
          We&apos;ve been notified. Try refreshing, or reach out directly.
        </p>
        <div className={styles.ctas}>
          <Link href="/" className="btn-primary">Back to home →</Link>
          <Link href="/signal" className="btn-secondary">Contact us →</Link>
        </div>
      </div>
    </div>
  );
}
