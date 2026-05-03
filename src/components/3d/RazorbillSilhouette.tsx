import styles from "./RazorbillSilhouette.module.css";

export function RazorbillSilhouette({ size = 400 }: { size?: number }) {
  return (
    <div className={styles.wrap}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
        aria-hidden="true"
      >
        {/* Body */}
        <ellipse cx="100" cy="110" rx="55" ry="65" fill="#0a0c10" />
        {/* Head */}
        <circle cx="100" cy="60" r="30" fill="#0a0c10" />
        {/* Left wing hint */}
        <ellipse cx="55" cy="115" rx="20" ry="40" fill="#0a0c10" transform="rotate(-15 55 115)" />
        {/* Right wing hint */}
        <ellipse cx="145" cy="115" rx="20" ry="40" fill="#0a0c10" transform="rotate(15 145 115)" />
        {/* Bill — sharp triangle, razor-red accent */}
        <polygon points="100,88 112,95 88,95" fill="#FF2E3A" />
        {/* Bill stripe */}
        <line x1="88" y1="91" x2="112" y2="91" stroke="#9cc2d9" strokeWidth="1" opacity="0.6" />
        {/* Left eye — slit */}
        <ellipse cx="90" cy="55" rx="4" ry="1.5" fill="#9cc2d9" opacity="0.8" />
        {/* Right eye — slit */}
        <ellipse cx="110" cy="55" rx="4" ry="1.5" fill="#9cc2d9" opacity="0.8" />
        {/* Eye glint */}
        <circle cx="91" cy="54.5" r="0.8" fill="#e6eef5" opacity="0.9" />
        <circle cx="111" cy="54.5" r="0.8" fill="#e6eef5" opacity="0.9" />
        {/* Razor edge line on bill */}
        <line x1="100" y1="88" x2="100" y2="95" stroke="#FF2E3A" strokeWidth="0.5" opacity="0.5" />
      </svg>
      <p className={styles.label}>Razorbill silhouette — DropShock mark</p>
    </div>
  );
}
