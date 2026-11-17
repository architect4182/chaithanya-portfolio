"use client";

import { useEffect, useRef, useState } from "react";

export default function TaglineReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const statement =
    "Great software bridges the gap between deep systems architecture and fluid interaction design. Every interface should feel instant, durable, and deliberate.";

  const words = statement.split(" ");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress as section passes from lower screen to upper third
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;
      const current = rect.top;

      const progress = Math.min(Math.max((start - current) / (start - end), 0), 1);
      setScrollProgress(progress);
    };

    const throttledScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      cancelAnimationFrame(animationFrameId);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-36 px-4 max-w-6xl mx-auto flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-[680px] mx-auto">
        <p className="caption-3 uppercase tracking-wider text-[var(--text-muted)] mb-6">
          The Engineering Philosophy
        </p>
        <h2 className="heading-3 leading-snug">
          {words.map((word, index) => {
            if (prefersReducedMotion) {
              return (
                <span key={index} className="text-[var(--text-primary)] mr-2 inline-block">
                  {word}
                </span>
              );
            }

            // Word activation threshold across scroll progress
            const wordThreshold = index / words.length;
            const isWordActive = scrollProgress >= wordThreshold;

            return (
              <span
                key={index}
                className="mr-2 inline-block"
                style={{
                  color: isWordActive ? "var(--text-primary)" : "var(--text-muted)",
                  opacity: isWordActive ? 1 : 0.28,
                  transition: "color 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {word}
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
