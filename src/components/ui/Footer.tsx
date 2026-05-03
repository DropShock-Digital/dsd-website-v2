import Link from "next/link";
import styles from "./Footer.module.css";

const FOOTER_LINKS = {
  Services: [
    { href: "/photography", label: "Photography" },
    { href: "/videography", label: "Videography" },
    { href: "/it-ai", label: "IT & AI" },
  ],
  Company: [
    { href: "/work", label: "Work" },
    { href: "/team", label: "Team" },
    { href: "/journal", label: "Journal" },
  ],
  Legal: [
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/accessibility", label: "Accessibility" },
  ],
};

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Top */}
        <div className={styles.footerTop}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <polygon points="16,2 30,28 2,28" fill="var(--razor)" />
                <polygon points="16,8 24,24 8,24" fill="none" stroke="var(--bi-cyan)" strokeWidth="1" opacity="0.5" />
              </svg>
              <span>DropShock Digital</span>
            </Link>
            <p className={styles.footerTagline}>
              Precision content systems for serious operators.
            </p>
            <div className={styles.footerContact}>
              <a href="tel:760-669-6102" className={styles.footerPhone}>760-669-6102</a>
              <span className={styles.footerDot} aria-hidden="true" />
              <a href="/signal" className={styles.footerSignal}>Launch a flare →</a>
            </div>
          </div>

          {/* Nav columns */}
          <nav className={styles.footerNav} aria-label="Footer navigation">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group} className={styles.footerCol}>
                <p className={styles.footerColHead}>{group}</p>
                <ul role="list">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <hr className="ice-divider" />

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} DropShock Digital. All rights reserved.
          </p>
          <p className={styles.footerCredit}>
            Cut from black ice.
          </p>
        </div>
      </div>
    </footer>
  );
}
