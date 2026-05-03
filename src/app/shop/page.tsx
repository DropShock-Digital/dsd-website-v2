import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Shop — dropshockprints.com",
  description: "Prints and digital products from DropShock Digital. Photography prints, digital downloads, and more.",
};

const prints = [
  { id: "print-01", title: "Desert Silence", size: "16×20 Print", price: "$85", cat: "Photography" },
  { id: "print-02", title: "Razorbill Study", size: "11×14 Print", price: "$55", cat: "Photography" },
  { id: "print-03", title: "Ice Formation No. 3", size: "24×36 Print", price: "$140", cat: "Photography" },
];

export default function ShopPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "1rem" }}>dropshockprints.com</p>
          <h1 className={`text-display ${styles.heroHeadline}`}>Prints.</h1>
          <p className="text-body-lg" style={{ color: "var(--white-48)", marginBottom: "2rem" }}>
            Gallery-grade prints, shipped direct. Photography prints and digital products.
          </p>
          <a href="https://dropshockprints.com" className="btn-primary" target="_blank" rel="noopener noreferrer">
            Shop at dropshockprints.com →
          </a>
        </div>
      </section>

      <section className={styles.prints}>
        <div className={styles.printsInner}>
          <p className="text-meta" style={{ color: "var(--ice-rim)", marginBottom: "2rem" }}>Selected Prints</p>
          <div className={styles.printGrid}>
            {prints.map((p) => (
              <div key={p.id} className={`ice-slab ${styles.printCard}`}>
                <div className={styles.printPlaceholder}>
                  <span className={styles.printPlaceholderText}>{p.title}</span>
                </div>
                <div className={styles.printInfo}>
                  <p className={styles.printCat}>{p.cat}</p>
                  <h3 className={styles.printTitle}>{p.title}</h3>
                  <p className={styles.printSize}>{p.size}</p>
                  <p className={styles.printPrice}>{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
