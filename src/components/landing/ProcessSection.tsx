"use client";

import { motion } from "framer-motion";
import { baseEase } from "@/lib/motion";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Architecture and Data Contracts",
      summary:
        "Every feature begins with state boundaries, API contracts, and schema validation. By pinning types early, regression risks are minimized before writing UI code.",
      details: "TypeScript interfaces • OpenAPI specs • Edge-case boundary models",
    },
    {
      num: "02",
      title: "Iterative Build and Component Isolation",
      summary:
        "Building modular components in isolation. Each component has strict prop types, predictable state containers, and verified keyboard accessibility.",
      details: "React 19 primitives • Modular styling • Unit test validation",
    },
    {
      num: "03",
      title: "Audit, Optimization, and Deployment",
      summary:
        "Rigorous performance profiling before shipping. Tracking Web Vitals, minimizing bundle size, and ensuring smooth 60fps animations across viewport sizes.",
      details: "Lighthouse 95+ benchmarks • Sub-second TTFB • Automated CI/CD releases",
    },
  ];

  return (
    <section id="process" className="w-full py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12 pb-6 border-b border-[var(--border-color)]">
          <span className="caption-3 uppercase tracking-wider text-[var(--text-muted)] block mb-2 font-mono-numbers">
            Execution Framework
          </span>
          <h2 className="heading-3 text-[var(--text-primary)]">
            How I Approach Software Delivery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: baseEase }}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all duration-300 shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[var(--bg-card-subtle)] border border-[var(--border-color)] flex items-center justify-center font-mono-numbers caption-3 text-[var(--text-primary)] mb-6">
                  {step.num}
                </div>
                <h3 className="heading-5 text-[var(--text-primary)] mb-3">
                  {step.title}
                </h3>
                <p className="body-5 text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {step.summary}
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--border-color)]">
                <span className="caption-5 font-mono-numbers text-[var(--text-muted)]">
                  {step.details}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
