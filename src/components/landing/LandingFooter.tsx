"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function LandingFooter() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-surface)] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identity & Status */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="caption-3 text-[var(--text-primary)] font-medium">
              Chaithanya Pedhagali
            </span>
            <span className="caption-5 text-[var(--text-muted)] font-mono-numbers">
              {timeString ? `(${timeString})` : ""}
            </span>
          </div>
          <p className="caption-2 text-[var(--text-muted)]">
            Full Stack Software Engineer & Design Technologist
          </p>
        </div>

        {/* External Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/architect4182"
            target="_blank"
            rel="noopener noreferrer"
            className="caption-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/chaithanya-pedhagali"
            target="_blank"
            rel="noopener noreferrer"
            className="caption-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pedhagalichaithanya@gmail.com"
            className="caption-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
          >
            pedhagalichaithanya@gmail.com
          </a>
        </div>

        {/* Legal & Ship Requirements */}
        <div className="flex items-center gap-4 caption-5 text-[var(--text-muted)]">
          <span>© {new Date().getFullYear()} All rights reserved</span>
          <span>•</span>
          <Link href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">
            Privacy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-[var(--text-primary)] transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
