"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const NAV_LINKS = [
  { href: "/photography", label: "Photography" },
  { href: "/videography", label: "Videography" },
  { href: "/it-ai", label: "IT & AI" },
  { href: "/work", label: "Work" },
  { href: "/team", label: "Team" },
  { href: "/journal", label: "Journal" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveLink(pathname);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className={`${styles.nav} ${scrolled ? styles.navScrolled : ""} ${menuOpen ? styles.navOpen : ""}`}
      aria-label="Main navigation"
    >
      <div className={styles.navInner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="DropShock Digital — Home">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <polygon points="16,2 30,28 2,28" fill="var(--razor)" />
            <polygon points="16,8 24,24 8,24" fill="none" stroke="var(--bi-cyan)" strokeWidth="1" opacity="0.6" />
          </svg>
          <span className={styles.logoText}>DropShock</span>
        </Link>

        {/* Desktop Links */}
        <ul className={styles.desktopLinks} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname.startsWith(link.href) ? styles.navLinkActive : ""}`}
              >
                {link.label}
                {pathname.startsWith(link.href) && <span className={styles.navLinkIndicator} aria-hidden="true" />}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/signal" className={styles.navCta}>
          Launch a flare
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.lineTop : ""}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.lineMid : ""}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.lineBot : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileLinks} role="list">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              className={styles.mobileLinkItem}
              style={{ animationDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                className={`${styles.mobileLink} ${pathname.startsWith(link.href) ? styles.mobileLinkActive : ""}`}
              >
                <span className={styles.mobileLinkNum}>0{i + 1}</span>
                {link.label}
              </Link>
            </li>
          ))}
          <li
            className={styles.mobileLinkItem}
            style={{ animationDelay: menuOpen ? `${NAV_LINKS.length * 60}ms` : "0ms" }}
          >
            <Link href="/signal" className={styles.mobileCta}>
              Launch a flare →
            </Link>
          </li>
        </ul>

        {/* Mobile menu bg accent */}
        <div className={styles.mobileBgAccent} aria-hidden="true" />
      </div>
    </nav>
  );
}
