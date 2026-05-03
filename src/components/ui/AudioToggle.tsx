"use client"

import { useState } from "react";
import styles from "./AudioToggle.module.css";

export function AudioToggle() {
  const [on, setOn] = useState(false);

  return (
    <button
      className={styles.toggle}
      onClick={() => setOn(!on)}
      aria-label={on ? "Mute audio" : "Enable audio"}
      aria-pressed={on}
      title={on ? "Ice on — click to mute" : "Sound off — click to surface audio"}
    >
      {on ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
      <span className={styles.label}>{on ? "Ice on" : "Sound off"}</span>
    </button>
  );
}
