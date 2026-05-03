"use client";

import { useRef } from "react";
import Link from "next/link";
import { SegmentToggle } from "@/components/ui/SegmentToggle";
import { RazorbillSilhouette } from "@/components/3d/RazorbillSilhouette";
import styles from "./HeroSection.module.css";

const segments = [
  { value: "teams", label: "For Teams" },
  { value: "creators", label: "For Creators" },
];

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.fog} />
      </div>

      <div className={styles.content}>
        {/* Eyebrow */}
        <p className={`text-meta ${styles.eyebrow}`}>
          DropShock Digital · Content Systems
        </p>

        {/* Headline */}
        <h1 className={`text-display ${styles.headline}`}>
          Cut from
          <br />
          <span className={styles.accent}>black ice.</span>
        </h1>

        {/* Sub */}
        <p className={`text-body-lg ${styles.sub}`}>
          We design and engineer the content systems that scale serious operators — across photo, video, code, and AI.
        </p>

        {/* Segment toggle */}
        <div className={styles.toggle}>
          <SegmentToggle
            options={segments}
            storageKey="dsd-audience"
          />
        </div>

        {/* CTA */}
        <div className={styles.ctas}>
          <Link href="/signal" className="btn-primary">
            Book a 15-min call →
          </Link>
          <Link href="/work" className="btn-secondary">
            See the work →
          </Link>
        </div>

        {/* Microline */}
        <p className={`text-48 ${styles.microline}`}>
          No prep. No slides. You leave with a one-page action plan.
        </p>
      </div>

      {/* Razorbill */}
      <div className={styles.razorbillWrap} aria-hidden="true">
        <RazorbillSilhouette />
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className="text-meta">Drag camera</span>
      </div>
    </section>
  );
}
