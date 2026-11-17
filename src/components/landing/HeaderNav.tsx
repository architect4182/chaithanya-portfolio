"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../design-system/ThemeProvider";
import { baseEase } from "@/lib/motion";

export default function HeaderNav() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Process", href: "#process" },
    { label: "Experience", href: "#experience" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 px-4 pointer-events-none flex justify-center w-full">
        <nav
          aria-label="Primary navigation"
          className="pointer-events-auto flex items-center justify-between gap-5 sm:gap-7 px-4 py-2 rounded-full border border-[var(--nav-border)] shadow-md backdrop-blur-md"
          style={{
            backgroundColor: "var(--nav-bg)",
            transition:
              "background-color 300ms cubic-bezier(0.22, 1, 0.36, 1), border-color 300ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[var(--text-primary)] hover:opacity-85 transition-opacity"
            style={{ textDecoration: "none" }}
          >
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{
                backgroundColor: "var(--text-primary)",
                color: "var(--bg-primary)",
              }}
            >
              C
            </span>
            <span className="hidden sm:inline font-medium">Chaithanya</span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions: Theme Toggle & Primary CTA */}
          <div className="flex items-center gap-2.5">
            {/* System / Dark / Light Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] bg-[var(--bg-card-subtle)] transition-colors duration-300 cursor-pointer"
            >
              {resolvedTheme === "dark" ? (
                /* Sun Icon */
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                /* Moon Icon */
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="button-sm"
              style={{
                backgroundColor: "var(--accent-button-bg)",
                color: "var(--accent-button-text)",
              }}
            >
              Get in touch
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-primary)] border border-[var(--border-color)] bg-[var(--bg-card-subtle)] cursor-pointer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-height Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: baseEase }}
            className="fixed inset-0 z-40 md:hidden flex flex-col justify-center px-8 backdrop-blur-xl"
            style={{ backgroundColor: "var(--bg-surface)" }}
          >
            <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.06,
                    ease: baseEase,
                  }}
                  className="heading-4 text-[var(--text-primary)]"
                  style={{ textDecoration: "none" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: navLinks.length * 0.06,
                  ease: baseEase,
                }}
                className="pt-6 border-t border-[var(--border-color)]"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="button-md w-full"
                  style={{
                    backgroundColor: "var(--accent-button-bg)",
                    color: "var(--accent-button-text)",
                  }}
                >
                  Schedule an interview
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
