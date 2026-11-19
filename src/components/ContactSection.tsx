"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "chaithanya.pr41@gmail.com";

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <motion.section
      id="contact"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="contact-section section-container"
      style={{
        paddingTop: "4rem",
        paddingBottom: "5rem",
        position: "relative",
      }}
    >
      {/* Liquid Glass Card Container */}
      <div
        style={{
          position: "relative",
          maxWidth: "960px",
          margin: "0 auto",
          borderRadius: "32px",
          padding: "clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 3.5rem)",
          textAlign: "center",
          background: "linear-gradient(165deg, rgba(255, 255, 255, 0.05) 0%, rgba(22, 22, 26, 0.45) 35%, rgba(10, 10, 14, 0.72) 100%)",
          backdropFilter: "blur(32px) saturate(130%)",
          WebkitBackdropFilter: "blur(32px) saturate(130%)",
          border: "1px solid rgba(255, 255, 255, 0.09)",
          boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.8), inset 0 1px 1px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.4)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Top Pill Badge: READY FOR NEW CHALLENGES */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.45rem 1.35rem",
              borderRadius: "9999px",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2)",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.88)",
                fontFamily: "var(--font-geist-mono), monospace",
              }}
            >
              READY FOR NEW CHALLENGES
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "clamp(2.1rem, 4.8vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: "1.5rem",
              maxWidth: "840px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Let&rsquo;s build software that feels effortless for users and bulletproof under load.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.65,
              color: "rgba(255, 255, 255, 0.68)",
              maxWidth: "680px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "2.8rem",
              fontWeight: 400,
            }}
          >
            Whether you need a Senior Full Stack Engineer, a Spring Boot &amp; Microservices specialist, or a Data Analytics Architect &mdash; my inbox is open.
          </motion.p>

          {/* Direct Inbox CTA Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: "inline-block" }}
          >
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "0.55rem 0.65rem 0.55rem 1.5rem",
                borderRadius: "9999px",
                background: "rgba(22, 22, 26, 0.6)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 12px 28px -6px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.22)",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {/* Text Information */}
              <div style={{ textAlign: "left" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontFamily: "var(--font-geist-mono), monospace",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  DIRECT INBOX
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                    fontWeight: 600,
                    color: "#ffffff",
                    letterSpacing: "-0.01em",
                    fontFamily: "var(--font-geist-sans), sans-serif",
                  }}
                >
                  {email}
                </span>
              </div>

              {/* Circular Action Button */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: -45 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  boxShadow: "0 0 22px rgba(255, 65, 108, 0.75), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.div>
            </motion.a>

            {/* Quick Copy Action */}
            <div style={{ marginTop: "0.85rem" }}>
              <button
                onClick={handleCopy}
                style={{
                  background: "none",
                  border: "none",
                  color: copied ? "var(--accent-primary)" : "rgba(255, 255, 255, 0.45)",
                  fontSize: "0.78rem",
                  fontFamily: "var(--font-geist-mono), monospace",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "6px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = copied ? "var(--accent-primary)" : "rgba(255, 255, 255, 0.45)";
                }}
              >
                {copied ? (
                  <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copied to clipboard!
                  </>
                ) : (
                  <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    Click to copy address
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
