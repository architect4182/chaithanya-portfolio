"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { baseEase } from "@/lib/motion";

export default function FinalCTA() {
  const [copied, setCopied] = useState(false);
  const email = "pedhagalichaithanya@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="w-full py-24 px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: baseEase }}
        className="max-w-4xl mx-auto rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 sm:p-14 md:p-16 shadow-xl"
      >
        <span className="caption-3 uppercase tracking-wider text-[var(--text-muted)] block mb-3 font-mono-numbers">
          Get in Touch
        </span>

        <h2 className="heading-2 text-[var(--text-primary)] mb-4">
          Ready to scale your engineering team?
        </h2>

        <p className="title-2 text-[var(--text-secondary)] max-w-xl mx-auto mb-10 leading-relaxed">
          Available for senior full stack and frontend engineering opportunities. Let us connect to discuss how I can contribute to your roadmap.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          {/* Direct Email Action */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="button-md shadow-sm"
            style={{
              backgroundColor: "var(--accent-button-bg)",
              color: "var(--accent-button-text)",
            }}
          >
            {copied ? "Email copied to clipboard" : "Copy email address"}
          </button>

          {/* Mailto link */}
          <a
            href={`mailto:${email}?subject=Engineering%20Opportunity`}
            className="button-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--border-strong)]"
          >
            Send direct email
          </a>

          {/* Resume link */}
          <a
            href="/Chaithanya_Pedhagali_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--border-strong)]"
          >
            Download resume
          </a>
        </div>

        {/* Risk Reversals */}
        <div className="flex flex-wrap items-center justify-center gap-6 caption-4 text-[var(--text-muted)] border-t border-[var(--border-color)] pt-6">
          <span>✓ Standard 2-week notice period</span>
          <span>✓ Full-time remote or hybrid</span>
          <span>✓ Verified enterprise credentials</span>
        </div>
      </motion.div>
    </section>
  );
}
