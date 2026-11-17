"use client";

import { motion } from "framer-motion";
import { baseEase } from "@/lib/motion";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      title: "Full-Stack Architecture with Interface Craft",
      description:
        "Bridges robust Java Spring Boot and Node.js microservices with 60fps React and Next.js client systems. No disconnect between backend data integrity and frontend responsiveness.",
      points: [
        "REST and GraphQL API design with typed OpenAPI contracts",
        "React Server Components and partial hydration strategies",
        "State machine management with zero unnecessary re-renders",
      ],
    },
    {
      title: "Data-Informed Software Systems",
      description:
        "Deep foundation in SQL, Python, and business intelligence pipelines. Translates ambiguous enterprise metrics into clean schemas, efficient queries, and intuitive dashboards.",
      points: [
        "Complex SQL aggregations and stored procedure tuning",
        "Python analytics scripts and automated ingestion ETLs",
        "Interactive reporting models built for non-technical stakeholders",
      ],
    },
    {
      title: "Production Velocity Without Architecture Debt",
      description:
        "Relentless emphasis on strict TypeScript types, automated regression testing, and modular component isolation so teams ship rapidly with high confidence.",
      points: [
        "Automated CI/CD pipelines with lint, build, and test gates",
        "Unit testing with Vitest and integration verification with Playwright",
        "Strict semantic versioning and changelog governance",
      ],
    },
    {
      title: "Design Engineering and Accessibility",
      description:
        "Transforms complex design tokens into accessible component architectures. Motion follows weighted deceleration curves rather than mechanical linear transitions.",
      points: [
        "WCAG 2.1 AA accessibility compliance and keyboard navigation",
        "Custom design tokens mapped to Tailwind CSS scales",
        "Hardware-accelerated transforms respecting reduced-motion settings",
      ],
    },
  ];

  return (
    <section id="capabilities" className="w-full py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12 pb-6 border-b border-[var(--border-color)]">
          <span className="caption-3 uppercase tracking-wider text-[var(--text-muted)] block mb-2 font-mono-numbers">
            Engineering Value
          </span>
          <h2 className="heading-3 text-[var(--text-primary)]">
            Core Capabilities Brought to Engineering Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: baseEase }}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all duration-300 shadow-md"
            >
              <div>
                <span className="caption-4 font-mono-numbers text-[var(--text-muted)] mb-3 block">
                  0{index + 1}
                </span>
                <h3 className="heading-5 text-[var(--text-primary)] mb-3">
                  {item.title}
                </h3>
                <p className="body-4 text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <ul className="space-y-2 pt-4 border-t border-[var(--border-color)] list-none">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="caption-2 text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 select-none font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
