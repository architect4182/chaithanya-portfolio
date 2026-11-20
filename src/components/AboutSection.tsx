"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <>
      <motion.section
        id="about"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="section-container"
        style={{ transform: "translateZ(0)" }}
      >
        <div className="about-header">
          <span style={{ color: "var(--accent-primary)", fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>About Me</span>
          <h2 className="section-title" style={{ marginBottom: "3rem", marginTop: "0.5rem" }}>The person behind the code</h2>
        </div>

        <div style={{ display: "flex", gap: "3rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 300px", minWidth: 0, display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--text-muted)", fontSize: "1.1rem" }}>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{ fontSize: "1.25rem", color: "var(--text-white)", fontWeight: 500 }}
            >
              Hello! <span className="waving-hand">👋</span>
              <br />
              I&apos;m Chaithanya Pedhagali — a Full Stack Developer and Data Analyst with 4+ years of experience building business intelligence solutions and enterprise applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              I specialize in transforming complex datasets into meaningful insights using <strong style={{ color: "var(--accent-primary)", fontWeight: 600 }}>Power BI, SQL, and Python</strong>, while leveraging <strong style={{ color: "var(--accent-primary)", fontWeight: 600 }}>Java, Spring Boot, and React</strong> to develop scalable software solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              My experience bridges analytics and software engineering, allowing me to approach problems strategically and create impactful digital experiences that deliver measurable business value. I enjoy collaborating with cross-functional teams to translate business requirements into intuitive, data-driven solutions that improve efficiency and support informed decision-making. I&apos;m passionate about continuous learning, solving complex challenges, and building products that create long-term value for both users and organizations.
            </motion.p>
          </div>

          <div style={{ width: "1px", backgroundColor: "rgba(255, 50, 75, 0.2)", flexShrink: 0, display: "block", alignSelf: "stretch" }} className="about-divider"></div>

          {/* Code Terminal Manifest Window */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            whileHover={{ y: -4 }}
            style={{
              flex: "1 1 300px",
              minWidth: 0,
              maxWidth: "540px",
              width: "100%",
              backgroundColor: "rgba(18, 5, 10, 0.72)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 60, 90, 0.18)",
              borderRadius: "20px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
              overflow: "hidden",
              fontFamily: "var(--font-geist-mono), monospace",
            }}
          >
            {/* Window Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.85rem 1.25rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ff5f56", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ffbd2e", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#27c93f", display: "inline-block" }} />
                <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.78rem", fontWeight: 500, marginLeft: "0.75rem" }}>
                  chaithanya.config.ts
                </span>
              </div>
              <span style={{ color: "#f43f5e", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em" }}>
                ACTIVE SESSION
              </span>
            </div>

            {/* Window Body */}
            <div style={{ padding: "1.4rem 1.4rem 1.2rem 1.4rem" }}>
              <div style={{ fontSize: "clamp(0.76rem, 1.6vw, 0.85rem)", lineHeight: "1.75" }}>
                <div style={{ color: "#71717a", marginBottom: "0.6rem" }}>
                  // Engineering Blueprint Manifest
                </div>
                <div>
                  <span style={{ color: "#f43f5e", fontWeight: 600 }}>export const</span>{" "}
                  <span style={{ color: "#fbbf24", fontWeight: 600 }}>architect</span>{" "}
                  <span style={{ color: "#f43f5e" }}>=</span> {"{"}
                </div>
                <div style={{ paddingLeft: "1.25rem" }}>
                  <div>
                    <span style={{ color: "#38bdf8" }}>role</span>:{" "}
                    <span style={{ color: "rgba(255, 255, 255, 0.88)" }}>&quot;Full Stack &amp; Data Analyst&quot;</span>,
                  </div>
                  <div>
                    <span style={{ color: "#38bdf8" }}>coreFocus</span>: [
                    <span style={{ color: "rgba(255, 255, 255, 0.88)" }}>&quot;Resilient Microservices&quot;</span>,{" "}
                    <span style={{ color: "rgba(255, 255, 255, 0.88)" }}>&quot;BI Insights&quot;</span>],
                  </div>
                  <div>
                    <span style={{ color: "#38bdf8" }}>speedBenchmark</span>:{" "}
                    <span style={{ color: "#fbbf24" }}>&quot;30% Latency Reduction&quot;</span>,
                  </div>
                  <div>
                    <span style={{ color: "#38bdf8" }}>databaseEngines</span>: [
                    <span style={{ color: "rgba(255, 255, 255, 0.88)" }}>&quot;Oracle&quot;</span>,{" "}
                    <span style={{ color: "rgba(255, 255, 255, 0.88)" }}>&quot;MSSQL&quot;</span>,{" "}
                    <span style={{ color: "rgba(255, 255, 255, 0.88)" }}>&quot;Postgres&quot;</span>],
                  </div>
                  <div>
                    <span style={{ color: "#38bdf8" }}>status</span>:{" "}
                    <span style={{ color: "rgba(255, 255, 255, 0.88)" }}>&quot;Ready for high-impact roles&quot;</span>,
                  </div>
                  <div>
                    <span style={{ color: "#38bdf8" }}>execute</span>: () <span style={{ color: "#f43f5e" }}>=&gt;</span>{" "}
                    <span style={{ color: "#f43f5e" }}>buildHighPerformanceValue</span>()
                  </div>
                </div>
                <div>{"};"}</div>
              </div>

              {/* Terminal Build Status Line */}
              <div
                style={{
                  marginTop: "1.3rem",
                  marginBottom: "1.1rem",
                  padding: "0.55rem 0.85rem",
                  borderRadius: "8px",
                  backgroundColor: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.18)",
                  color: "#34d399",
                  fontSize: "0.78rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span>&gt;_</span>
                <span>Build succeeded: 0 errors, 100% test coverage</span>
              </div>

              {/* Window Footer */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  paddingTop: "0.75rem",
                  fontSize: "0.72rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                      boxShadow: "0 0 8px rgba(16, 185, 129, 0.8)",
                      display: "inline-block",
                    }}
                  />
                  <span style={{ color: "rgba(255, 255, 255, 0.55)" }}>JVM 17 &amp; Node v20</span>
                </div>
                <span style={{ color: "#f43f5e", fontWeight: 600, letterSpacing: "0.04em" }}>
                  100% CI/CD Passing
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255, 50, 75, 0.3), transparent)", margin: "0 0 6rem 0" }} />
    </>
  );
}
