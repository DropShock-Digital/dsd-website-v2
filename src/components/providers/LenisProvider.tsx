"use client"

import { useEffect, useRef } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    let lenis: unknown = null;

    const init = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({
          lerp: 0.07,
          wheelMultiplier: 1.2,
          smoothWheel: true,
        });

        lenisRef.current = lenis;

        const raf = (time: number) => {
          (lenis as { raf: (t: number) => void }).raf(time);
          requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
      } catch (e) {
        // Lenis failed — page still works without it
      }
    };

    init();

    return () => {
      if (lenisRef.current) {
        (lenisRef.current as { destroy: () => void }).destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
