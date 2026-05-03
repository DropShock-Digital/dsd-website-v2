"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const navLinks = [
  { href: "/photography", label: "Photo" },
  { href: "/videography", label: "Video" },
  { href: "/it-ai", label: "IT / AI" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/" className={styles.logo} aria-label="DropShock Digital home">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <polygon points="14,1 27,26 1,26" fill="#FF2E3A" />
          </svg>
          <span className={styles.logoText}>DropShock</span>
        </Link>

        {/* Desktop nav */}
        <ul className={styles.navList} role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <Link href="/signal" className="btn-primary" style={{ fontSize: "0.7rem", padding: "0.5rem 1rem" }}>
            Book a call
          </Link>
          {/* Mobile menu toggle */}
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {menuOpen ? (
                <>
                  <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="1.5" />
                </>
              ) : (
                <>
                  <line x1="2" y1="5" x2="18" y2="5" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="2" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.5" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-label="Mobile navigation">
          <ul role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/signal" className="btn-primary" style={{ marginTop: "1rem" }}>
                Book a call
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
