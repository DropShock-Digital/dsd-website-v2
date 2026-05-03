"use client";

import { useState } from "react";
import styles from "./page.module.css";

const SEGMENTS = [
  { value: "teams", label: "For Teams", desc: "You have a brand, a team, or a product and you need content that reflects that." },
  { value: "creators", label: "For Creators", desc: "You make things. Music, art, content. You need documentation or promotion." },
  { value: "it-ai", label: "IT / AI Project", desc: "You have a build in mind — website, agent, automation, infrastructure." },
  { value: "other", label: "Something else", desc: "If it doesn't fit the above, describe it. We'll figure it out." },
];

export default function SignalPage() {
  const [segment, setSegment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire to Resend or Formspree in production
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.successWrap}>
          <div className={styles.successIcon}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <polygon points="24,4 44,42 4,42" fill="#FF2E3A" />
            </svg>
          </div>
          <h1 className={`text-h1 ${styles.successHeadline}`}>Flare sent.</h1>
          <p className="text-body" style={{ color: "var(--white-48)" }}>
            Steven reviews every signal personally. You&apos;ll hear back within 24 hours.
          </p>
          <p className={styles.successPhone}>760-669-6102</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="text-meta" style={{ color: "var(--ice-razor)", marginBottom: "1rem" }}>
            Launch a flare →
          </p>
          <h1 className={`text-display ${styles.heroHeadline}`}>Let&apos;s talk.</h1>
          <p className={`text-body-lg ${styles.heroSub}`}>
            15 minutes. No pitch. No deck. You leave with a one-page action plan.
          </p>
          <p className={styles.phone}>760-669-6102</p>
        </div>
      </section>

      <section className={styles.form}>
        <div className={styles.formInner}>
          <form onSubmit={handleSubmit} className={styles.formGrid} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name *</label>
              <input
                id="name"
                type="text"
                required
                className={styles.input}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email *</label>
              <input
                id="email"
                type="email"
                required
                className={styles.input}
                placeholder="you@domain.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>Company / Project</label>
              <input
                id="company"
                type="text"
                className={styles.input}
                placeholder="Who are you building?"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>

            <div className={styles.formGroupFull}>
              <label htmlFor="message" className={styles.label}>What are you trying to do? *</label>
              <textarea
                id="message"
                required
                rows={5}
                className={styles.textarea}
                placeholder="Describe what you're working on, the problem you're trying to solve, or just tell us what you need."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <div className={styles.formGroupFull}>
              <p className={styles.label}>What kind of engagement?</p>
              <div className={styles.segmentGrid}>
                {SEGMENTS.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    className={`${styles.segmentBtn} ${segment === s.value ? styles.segmentActive : ""}`}
                    onClick={() => setSegment(s.value)}
                  >
                    <span className={styles.segmentLabel}>{s.label}</span>
                    <span className={styles.segmentDesc}>{s.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.formGroupFull}>
              <button type="submit" className="btn-primary" disabled={loading} style={{ width: "100%", justifyContent: "center" }}>
                {loading ? "Sending…" : "Launch a flare →"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
