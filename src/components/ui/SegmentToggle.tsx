"use client";

import { useState, useEffect } from "react";
import styles from "./SegmentToggle.module.css";

interface SegmentOption {
  value: string;
  label: string;
}

interface SegmentToggleProps {
  options: SegmentOption[];
  storageKey?: string;
  onChange?: (value: string) => void;
}

export function SegmentToggle({ options, storageKey, onChange }: SegmentToggleProps) {
  const [active, setActive] = useState(options[0].value);

  useEffect(() => {
    if (storageKey) {
      const stored = localStorage.getItem(storageKey);
      if (stored && options.find((o) => o.value === stored)) {
        setActive(stored);
      }
    }
  }, [storageKey, options]);

  const select = (value: string) => {
    setActive(value);
    if (storageKey) localStorage.setItem(storageKey, value);
    onChange?.(value);
  };

  return (
    <div className={styles.toggle} role="group" aria-label="Audience toggle">
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`${styles.option} ${active === opt.value ? styles.active : ""}`}
          onClick={() => select(opt.value)}
          aria-pressed={active === opt.value}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
