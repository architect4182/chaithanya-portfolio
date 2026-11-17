"use client";

import { motion } from "framer-motion";
import { baseEase } from "@/lib/motion";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 max-w-6xl mx-auto flex flex-col items-center text-center">
      {/* Recruiter Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: baseEase }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="caption-1 text-[var(--text-secondary)]">
          Available for Senior Frontend and Full Stack Roles
        </span>
      </motion.div>

      {/* Hero Heading (B5: Left-to-right gradient, max width 680px, meaningful line breaks) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: baseEase }}
        className="max-w-[680px] mx-auto mb-6"
      >
        <h1 className="heading-1 hero-gradient-text tracking-tight">
          Enterprise engineering with frontend precision.
        </h1>
      </motion.div>

      {/* Subheading (B5: max width 680px, outcome plus clarification) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: baseEase }}
        className="max-w-[680px] mx-auto mb-8"
      >
        <p className="title-2 text-[var(--text-secondary)]">
          Full stack engineer and analyst with 4 years building scalable web architectures and data systems for enterprise teams.
        </p>
      </motion.div>

      {/* Action Buttons (One primary CTA, secondary GitHub inspect) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: baseEase }}
        className="flex flex-wrap items-center justify-center gap-3 mb-10"
      >
        <a
          href="#contact"
          className="button-md"
          style={{
            backgroundColor: "var(--accent-button-bg)",
            color: "var(--accent-button-text)",
          }}
        >
          Schedule an interview
        </a>
        <a
          href="https://github.com/architect4182"
          target="_blank"
          rel="noopener noreferrer"
          className="button-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--border-strong)]"
        >
          Inspect code on GitHub
        </a>
      </motion.div>

      {/* Proof Signal (A2 #4: Logo strip, stat, or short credential) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: baseEase }}
        className="flex items-center gap-2 text-xs text-[var(--text-muted)] border-t border-[var(--border-color)] pt-6 max-w-[680px] w-full justify-center"
      >
        <span className="font-medium text-[var(--text-secondary)]">Verified track record:</span>
        <span>NTT DATA (The Hanover Insurance Group) • 4+ Years Experience</span>
      </motion.div>
    </section>
  );
}
