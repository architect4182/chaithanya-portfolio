"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { baseEase } from "@/lib/motion";

export default function RecruiterFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What roles are you actively considering?",
      a: "Senior Frontend Engineer, Full Stack Software Engineer, and Design Technologist roles. I excel in teams prioritizing polished interaction design, reliable component architectures, and robust backend integrations in React, Next.js, TypeScript, and Java.",
    },
    {
      q: "What is your availability and current notice period?",
      a: "Available with standard professional notice. Open to full-time remote roles globally as well as hybrid or on-site arrangements in agreed metropolitan locations.",
    },
    {
      q: "How do you balance frontend UI polish with enterprise backend rigor?",
      a: "With 4 years at NTT DATA on client accounts like The Hanover Insurance Group, my daily work involves Java Spring Boot microservices, complex relational data schemas, and modern web clients. I ensure that beautiful frontend components are backed by strict typed data contracts.",
    },
    {
      q: "Are the showcase projects open source and verifiable?",
      a: "Yes. Every featured application has both an active public Vercel production deployment and an open repository on GitHub. You can inspect commit history, test suites, and component architectures directly.",
    },
    {
      q: "How do you ensure web performance and accessibility compliance?",
      a: "I measure performance against Core Web Vitals targets: maintaining sub-second First Contentful Paint, zero layout shifts, and 60fps rendering. All components adhere to WCAG 2.1 AA keyboard navigation and ARIA landmarks.",
    },
    {
      q: "How do you collaborate in cross-functional engineering teams?",
      a: "I prefer atomic, well-documented pull requests, explicit schema definitions, and proactive pair reviews. I work closely with product managers, QA engineers, and design teams to prevent costly rework before code merges.",
    },
    {
      q: "What is your preferred technology stack?",
      a: "Frontend: React 19, Next.js, TypeScript, Tailwind CSS, Framer Motion. Backend: Java, Spring Boot, Node.js, REST APIs, GraphQL. Data & Tools: PostgreSQL, SQL, Python, Git, Docker, CI/CD automation.",
    },
    {
      q: "Where can I download your official resume or schedule a call?",
      a: "You can download my verified resume directly via the CTA block below or schedule an introductory conversation on my calendar.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="mb-12 pb-6 border-b border-[var(--border-color)]">
        <span className="caption-3 uppercase tracking-wider text-[var(--text-muted)] block mb-2">
          Recruiter FAQ
        </span>
        <h2 className="heading-3 text-[var(--text-primary)]">
          Frequently Addressed Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden transition-colors duration-300 hover:border-[var(--border-strong)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer gap-4"
                aria-expanded={isOpen}
              >
                <span className="title-2 text-[var(--text-primary)]">
                  {item.q}
                </span>
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center border border-[var(--border-color)] text-[var(--text-muted)] text-sm flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: baseEase }}
                  >
                    <div className="px-6 pb-6 pt-1 text-[var(--text-secondary)] body-4 border-t border-[var(--border-color)]">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
