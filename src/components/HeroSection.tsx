"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";

export default function HeroSection() {

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariant: Variants = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-content-layer">
        <Navbar />

        <main className="hero-content">
          <div className="hero-main-row">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="headline-container"
            >
              <motion.p variants={textVariant} className="greeting">
                Hey, I'm a
              </motion.p>
              <h1 className="headline" style={{ position: "relative", zIndex: 10 }}>
                <CustomMorph />
              </h1>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="supporting-container"
            >
              <EngineersLogBadge />
            </motion.div>
          </div>


          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="services-container"
          >
            {[
              { num: "#01", title: "Java & Spring Boot" },
              { num: "#02", title: "Angular, React & Next.js" },
              { num: "#03", title: "Microservices Architecture" },
              { num: "#04", title: "DevOps & CI/CD" },
            ].map((service, index) => (
              <motion.div key={index} variants={textVariant} className="service-item">
                <span className="service-number">{service.num}</span>
                <p className="service-title">{service.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export function CustomMorph() {
  return (
    <MorphText
      words={["FullStack Developer", "UI/UX Designer", "Data Analyst"]}
      interval={2800}
      subtext="Crafting Seamless Digital Experiences."
      fontSize="var(--hero-morph-size, clamp(2.2rem, 4.2vw, 4.6rem))"
    />
  );
}

export interface MorphTextProps {
  words?: string[];
  interval?: number;
  subtext?: string;
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  textClassName?: string;
  subtextClassName?: string;
}

export function MorphText({
  words = ["DESIGN", "DEVELOP"],
  interval = 2800,
  subtext,
  fontSize = "clamp(3rem, 15vw, 10rem)",
  fontFamily = '"Space Grotesk", sans-serif',
  className,
  textClassName,
  subtextClassName,
}: MorphTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className={cn("morph-text-root", className)}>
      <div
        className={cn("morph-text-container", textClassName)}
        style={{
          fontSize,
          fontWeight: 700,
          fontFamily,
          minHeight: "1.2em",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: 28, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -28, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      {subtext && (
        <p
          className={cn("morph-subtext", subtextClassName)}
          style={{
            fontSize: "1.2rem",
            opacity: 0,
            animation: "morph-fade-up 0.8s ease-out 0.4s forwards",
            fontFamily,
          }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}

export function EngineersLogBadge() {
  return (
    <motion.div
      className="engineers-log-badge"
      whileHover={{ y: -4, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        position: "relative",
        backgroundColor: "rgba(18, 18, 22, 0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "14px",
        padding: "1.75rem 1.6rem 1.3rem 1.6rem",
        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        width: "100%",
        transform: "rotate(0.5deg)",
      }}
    >
      {/* Brown Tape on top center */}
      <div
        style={{
          position: "absolute",
          top: "-11px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(72px, 20vw, 90px)",
          height: "22px",
          background: "linear-gradient(180deg, rgba(145, 100, 65, 0.72) 0%, rgba(105, 70, 42, 0.65) 100%)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(180, 130, 90, 0.35)",
          borderRadius: "2px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.35)",
          zIndex: 5,
        }}
      />

      {/* Header: // ENGINEER'S LOG and vol. 2025 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-geist-mono), monospace",
        }}
      >
        <span
          style={{
            color: "#f59e0b",
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
          }}
        >
          {"// ENGINEER'S LOG"}
        </span>
        <span
          style={{
            color: "#71717a",
            fontSize: "0.74rem",
            letterSpacing: "0.04em",
          }}
        >
          vol. 2025
        </span>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          margin: "0.75rem 0 1.25rem 0",
        }}
      />

      {/* Script Quote */}
      <p
        style={{
          fontFamily: "'Caveat', cursive, sans-serif",
          fontSize: "clamp(1.15rem, 4vw, 1.38rem)",
          lineHeight: "1.42",
          color: "#f4f4f5",
          letterSpacing: "0.02em",
          marginBottom: "1.5rem",
          fontWeight: 500,
        }}
      >
        &ldquo;My standard is simple: when thousands of enterprise workers log in on Monday morning, everything must feel like warm butter.&rdquo;
      </p>

      {/* Details Table */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.7rem",
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "0.78rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
          <span style={{ color: "#71717a", flexShrink: 0 }}>Main Weapons:</span>
          <span style={{ color: "#e4e4e7", textAlign: "right" }}>Java 11/17, Spring, Angular, React</span>
        </div>

        <div style={{ height: "1px", borderBottom: "1px dashed rgba(255, 255, 255, 0.07)" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
          <span style={{ color: "#71717a", flexShrink: 0 }}>Enterprise Client:</span>
          <span style={{ color: "#e4e4e7", textAlign: "right", lineHeight: "1.3" }}>
            Hanover Insurance (via NTT DATA)
          </span>
        </div>

        <div style={{ height: "1px", borderBottom: "1px dashed rgba(255, 255, 255, 0.07)" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <span style={{ color: "#71717a", flexShrink: 0 }}>Verified Badges:</span>
          <a
            href="https://skillsoft.digitalbadges.skillsoft.com/profile/chaithanyapedhagali653656/wallet"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#f87171",
              fontWeight: 600,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            200+ Credentials
          </a>
        </div>
      </div>

      {/* Bottom Divider */}
      <div
        style={{
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          margin: "1.2rem 0 0.85rem 0",
        }}
      />

      {/* Footer: Crafted with caffeine & curiosity ☕ */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-geist-mono), monospace",
        }}
      >
        <span style={{ color: "#71717a", fontSize: "0.72rem", letterSpacing: "0.02em" }}>
          Crafted with caffeine &amp; curiosity
        </span>
        <span style={{ fontSize: "0.95rem" }} role="img" aria-label="coffee">
          ☕
        </span>
      </div>
    </motion.div>
  );
}