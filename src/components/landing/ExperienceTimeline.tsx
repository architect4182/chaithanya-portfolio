"use client";

import { motion } from "framer-motion";
import { baseEase } from "@/lib/motion";

export default function ExperienceTimeline() {
  const experience = [
    {
      period: "2022 — Present",
      role: "Information Technology Analyst",
      company: "NTT DATA",
      client: "Client: The Hanover Insurance Group",
      highlights: [
        "Architected scalable enterprise web applications and backend service interfaces supporting insurance workflows.",
        "Engineered business intelligence dashboards and automated data pipelines using SQL and Python.",
        "Collaborated with cross-functional product teams to modernize legacy services into responsive modular frontends.",
      ],
      tech: ["Java", "Spring Boot", "React", "TypeScript", "SQL", "Next.js"],
    },
    {
      period: "2020 — 2022",
      role: "Software Engineering & Data Analysis",
      company: "Enterprise Projects",
      client: "Core Systems Development",
      highlights: [
        "Implemented full-stack features and API endpoints adhering to enterprise security standards.",
        "Authored database migration scripts and optimized long-running reporting queries.",
        "Maintained CI/CD pipelines ensuring high deployment reliability and automated test coverage.",
      ],
      tech: ["Python", "SQL", "JavaScript", "REST APIs", "Power BI"],
    },
  ];

  return (
    <section id="experience" className="w-full py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12 pb-6 border-b border-[var(--border-color)]">
          <span className="caption-3 uppercase tracking-wider text-[var(--text-muted)] block mb-2 font-mono-numbers">
            Track Record
          </span>
          <h2 className="heading-3 text-[var(--text-primary)]">
            Professional Enterprise Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.role + index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: baseEase }}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8 hover:border-[var(--border-strong)] transition-all duration-300 shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <div>
                  <h3 className="heading-5 text-[var(--text-primary)]">
                    {item.role}
                  </h3>
                  <p className="title-3 text-[var(--text-secondary)]">
                    {item.company} <span className="caption-2 text-[var(--text-muted)]">({item.client})</span>
                  </p>
                </div>
                <span className="caption-4 font-mono-numbers px-3 py-1 rounded-full bg-[var(--bg-card-subtle)] text-[var(--text-muted)] border border-[var(--border-color)] self-start md:self-auto">
                  {item.period}
                </span>
              </div>

              <ul className="space-y-2 mb-6 list-none">
                {item.highlights.map((point, pIndex) => (
                  <li key={pIndex} className="body-5 text-[var(--text-secondary)] flex items-start gap-2.5">
                    <span className="text-[var(--text-muted)] mt-2 w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-color)]">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="caption-5 font-mono-numbers px-2.5 py-1 rounded-md bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
