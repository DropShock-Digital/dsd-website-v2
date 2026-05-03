import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <p className={styles.code}>404</p>
        <h1 className={`text-h1 ${styles.headline}`}>This page doesn&apos;t exist.</h1>
        <p className="text-body" style={{ color: "var(--white-48)", marginBottom: "2rem" }}>
          You drifted into open water. Let&apos;s get you back on course.
        </p>
        <div className={styles.ctas}>
          <Link href="/" className="btn-primary">Back to home →</Link>
          <Link href="/signal" className="btn-secondary">Launch a flare →</Link>
        </div>
      </div>
    </div>
  );
}
