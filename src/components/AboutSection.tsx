"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <>
      <motion.section
        id="about"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-container"
      >
        <div className="about-header">
          <span style={{ color: "var(--accent-orange)", fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>About Me</span>
          <h2 className="section-title" style={{ marginBottom: "3rem", marginTop: "0.5rem" }}>The person behind the code</h2>
        </div>

        <div style={{ display: "flex", gap: "3rem", alignItems: "stretch", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--text-muted)", fontSize: "1.1rem" }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: "1.25rem", color: "var(--text-white)", fontWeight: 500 }}
            >
              Hello! <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
                style={{ display: "inline-block", transformOrigin: "70% 70%" }}
              >
                👋
              </motion.span>
              <br />
              I'm Chaithanya Pedhagali — a Full Stack Developer and Data Analyst with 4+ years of experience building business intelligence solutions and enterprise applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I specialize in transforming complex datasets into meaningful insights using <strong style={{ color: "var(--text-white)", fontWeight: 600 }}>Power BI, SQL, and Python</strong>, while leveraging <strong style={{ color: "var(--text-white)", fontWeight: 600 }}>Java, Spring Boot, and React</strong> to develop scalable software solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              My experience bridges analytics and software engineering, allowing me to approach problems strategically and create impactful digital experiences that deliver measurable business value. I enjoy collaborating with cross-functional teams to translate business requirements into intuitive, data-driven solutions that improve efficiency and support informed decision-making. I'm passionate about continuous learning, solving complex challenges, and building products that create long-term value for both users and organizations.
            </motion.p>
          </div>

          <div style={{ width: "1px", backgroundColor: "rgba(255,255,255,0.1)", flexShrink: 0, display: "block" }} className="about-divider"></div>

          <div className="about-cards-container" style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                title: "Business Intelligence",
                desc: "Transforming raw data into actionable insights through dashboards and data visualization.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-orange)" }}><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              },
              {
                title: "Software Development",
                desc: "Building modern web applications and enterprise systems using proven engineering practices.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-orange)" }}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              },
              {
                title: "Data-Driven Solutions",
                desc: "Combining analytics and engineering to solve business problems and improve decision-making.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-orange)" }}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileHover="hover"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { delay: 0.3 + i * 0.1 } },
                  hover: { y: -6, borderColor: "rgba(255,255,255,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)", backgroundColor: "rgba(255,255,255,0.05)" }
                }}
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  padding: "1.8rem",
                  borderRadius: "16px",
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer"
                }}
              >
                <motion.div
                  variants={{ hover: { scale: 1.1, rotate: 5 } }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ marginTop: "0.1rem" }}
                >
                  {card.icon}
                </motion.div>
                <div>
                  <h3 style={{ color: "var(--text-white)", fontSize: "1.15rem", marginBottom: "0.4rem", fontWeight: 600 }}>{card.title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>{card.desc}</p>
                </div>
                <motion.div
                  variants={{ initial: { width: "0%" }, hover: { width: "100%" } }}
                  style={{ position: "absolute", bottom: 0, left: 0, height: "2px", backgroundColor: "var(--accent-orange)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)", margin: "0 0 6rem 0" }} />
    </>
  );
}
