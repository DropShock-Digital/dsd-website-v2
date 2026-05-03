import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = [
  { href: "/photography", label: "Photo" },
  { href: "/videography", label: "Video" },
  { href: "/it-ai", label: "IT / AI" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/journal", label: "Journal" },
  { href: "/signal", label: "Contact" },
];

const legalLinks = [
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/accessibility", label: "Accessibility" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <polygon points="14,1 27,26 1,26" fill="#FF2E3A" />
            </svg>
            <div>
              <p className={styles.brandName}>DropShock Digital</p>
              <p className={styles.brandTagline}>Cut from black ice.</p>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className={styles.footerLinks} role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.cta}>
            <p className="text-body-lg" style={{ color: "var(--white-48)", marginBottom: "1rem" }}>
              Ready to talk?
            </p>
            <Link href="/signal" className="btn-primary">
              Launch a flare →
            </Link>
            <p className={styles.phone}>760-669-6102</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} DropShock Digital LLC · Hesperia, California
          </p>
          <ul className={styles.legalLinks} role="list">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.legalLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
