"use client";

import { motion } from "framer-motion";
import { AiFillOpenAI } from "react-icons/ai";

export default function ExperienceSection() {
  const aiTools = [
    { name: "ChatGPT", desc: "Conversational AI & Problem Solving", icon: <AiFillOpenAI size={18} color="#FFFFFF" /> },
    { name: "Claude", desc: "Advanced Reasoning & Coding", slug: "claude", color: "D97757" },
    { name: "Google Gemini", desc: "Multimodal AI Integration", slug: "googlegemini", color: "8E75B2" },
    { name: "Copilot", desc: "AI Assistant & Pair Programmer", customImg: "/copilot.png" },
    { name: "Grok", desc: "Real-time AI Intelligence", customImg: "/grok.png", invert: true },
    { name: "Codex", desc: "Code Generation Engine", icon: <AiFillOpenAI size={18} color="#10A37F" /> },
    { name: "Antigravity", desc: "Agentic AI Workflow", customImg: "/antigravity.png" },
    { name: "Figma", desc: "Collaborative Interface Design", customImg: "/figma.png" },
    { name: "Framer", desc: "AI-Powered Web Design", slug: "framer", color: "white" },
  ];

  return (
    <motion.section
      id="experience"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="section-container"
    >
      <h2 className="section-title">Experience & Education</h2>
      <div className="experience-layout">
        {/* Left Column: Timeline */}
        <div className="experience-timeline-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              show: {
                transition: { staggerChildren: 0.3 }
              }
            }}
            className="experience-list"
          >
            {[
              {
                role: "Information Technology Analyst",
                company: "NTT DATA",
                client: "(Client: The Hanover Insurance Group)",
                logo: "/ntt-data.png",
                year: "July 2022 - Present",
                desc: [
                  <>Developed and maintained RESTful APIs and microservices using Java 11, Spring Boot, and Spring Security with role-based authentication and authorization (RBAC).</>,
                  <>Designed and implemented core insurance workflow modules, including policy creation, endorsements, renewals, cancellations, and claims processing, while integrating SOAP and REST services with external SOAP and REST APIs.</>,
                  <>Optimized Oracle and Microsoft SQL Server database queries, improving data retrieval performance by <strong style={{ color: "var(--accent-primary)" }}>20%</strong> and enhancing overall application efficiency.</>,
                  <>Built responsive Angular applications using TypeScript, HTML5, CSS3, and reusable component architecture, improving frontend development efficiency by <strong style={{ color: "var(--accent-primary)" }}>25%</strong>.</>,
                  <>Implemented lazy loading, route optimization, and performance enhancements, reducing application load times by <strong style={{ color: "var(--accent-primary)" }}>30%</strong>.</>,
                  <>Collaborated in Agile/Scrum teams, participating in sprint planning, code reviews, UAT, and CI/CD pipelines to deliver high-quality enterprise applications.</>
                ]
              },
              {
                role: "B.Tech – Computer Science & Engineering",
                company: "Presidency University, Bangalore",
                year: "2018 - 2022",
                desc: [
                  <>Graduated in Computer Science with a focus on software engineering and development.</>,
                  <><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming, and Web Technologies.</>,
                  <><strong>Key Achievement:</strong> Developed a comprehensive Student Management System as a capstone project.</>
                ]
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                className="experience-item"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                }}
              >
                <div className="timeline-dot"></div>
                <div className="date-badge">{exp.year}</div>
                <div className="exp-header">
                  <h3>{exp.role}</h3>
                </div>
                <p className="exp-company" style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                  {exp.logo ? (
                    <>
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        style={{ height: "18px", width: "auto", objectFit: "contain" }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'inline';
                        }}
                      />
                      <span style={{ display: 'none' }}>{exp.company}</span>
                    </>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                  {exp.client && <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem" }}>{exp.client}</span>}
                </p>
                <div className="exp-desc">
                  <ul>
                    {exp.desc.map((item, idx) => (
                      <motion.li
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          show: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } }
                        }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginTop: "4rem" }}
          >
            <h3 style={{ fontSize: "1.5rem", color: "var(--text-white)", marginBottom: "1.5rem", fontWeight: 600 }}>{"Certifications & Continuous Learning"}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  title: "Introduction to Artificial Intelligence (AI)",
                  issuer: "IBM (Coursera)",
                  date: "Aug 2020",
                  link: "https://coursera.org/verify/6KWARKMGZ8BT",
                  logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128"
                },
                {
                  title: "Introduction to Python",
                  issuer: "DataCamp",
                  date: "Completed",
                  link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/6004d9aef8eeac2762313d46d643901664b33c06",
                  logo: "https://www.google.com/s2/favicons?domain=datacamp.com&sz=128"
                }
              ].map((cert, i) => {
                const CardContent = (
                  <>
                    <div style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-primary)",
                      flexShrink: 0,
                      overflow: "hidden"
                    }}>
                      {cert.logo ? (
                        <img src={cert.logo} alt={cert.issuer} style={{ width: "32px", height: "32px", objectFit: "contain", borderRadius: "4px" }} />
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89L17 22l-5-3l-5 3l1.523-9.11"></path></svg>
                      )}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                      <h4 style={{ color: "var(--text-white)", fontSize: "1.1rem", margin: 0, fontWeight: 500 }}>{cert.title}</h4>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0 }}>{cert.issuer} &bull; {cert.date}</p>
                    </div>
                  </>
                );

                const commonStyle = {
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  textDecoration: "none",
                  flexWrap: "wrap" as const
                };

                return cert.link ? (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={commonStyle as any}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)", x: 5 }}
                  >
                    {CardContent}
                  </motion.a>
                ) : (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={commonStyle as any}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)", x: 5 }}
                  >
                    {CardContent}
                  </motion.div>
                );
              })}

              {/* Gateway Card for Skillsoft Wallet */}
              <motion.a
                href="https://skillsoft.digitalbadges.skillsoft.com/profile/chaithanyapedhagali653656/wallet"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  textDecoration: "none",
                  backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.02), rgba(255,255,255,0))"
                }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "var(--accent-primary)", x: 5 }}
              >
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-primary)",
                  flexShrink: 0,
                  overflow: "hidden"
                }}>
                  <img src="https://www.google.com/s2/favicons?domain=skillsoft.com&sz=128" alt="Skillsoft Wallet" style={{ width: "32px", height: "32px", objectFit: "contain", borderRadius: "4px" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", flex: "1 1 200px" }}>
                  <h4 style={{ color: "var(--text-white)", fontSize: "1.2rem", margin: 0, fontWeight: 600 }}>Verified Digital Badge Wallet</h4>
                  <p style={{ color: "var(--accent-primary)", fontSize: "1rem", margin: 0, fontWeight: 500 }}>200+ Verified Certifications</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>Skillsoft - Java &bull; GitHub &bull; AI &bull; Data Analytics &bull; Cloud</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", color: "var(--text-white)", fontSize: "0.95rem", fontWeight: 500 }}>
                  View Credential Collection &rarr;
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Stats Sidebar */}
        <div className="experience-sidebar">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="stat-card"
            style={{ flexDirection: "row", alignItems: "center", gap: "1.5rem" }}
          >
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.05)",
              backgroundColor: "rgba(255,255,255,0.02)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent-primary)",
              flexShrink: 0
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="stat-number">4+</span>
              <span className="stat-label" style={{ textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginTop: "0.2rem" }}>Years of Experience</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="stat-card"
            style={{ flexDirection: "row", alignItems: "center", gap: "1.5rem" }}
          >
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.05)",
              backgroundColor: "rgba(255,255,255,0.02)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent-primary)",
              flexShrink: 0
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="stat-number">15+</span>
              <span className="stat-label" style={{ textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginTop: "0.2rem" }}>REST APIs Developed</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="stat-card"
            style={{ flexDirection: "row", alignItems: "center", gap: "1.5rem" }}
          >
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.05)",
              backgroundColor: "rgba(255,255,255,0.02)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent-primary)",
              flexShrink: 0
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="stat-number">30%</span>
              <span className="stat-label" style={{ textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginTop: "0.2rem" }}>Performance Improvement</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="stat-card"
            style={{ flexDirection: "row", alignItems: "center", gap: "1.5rem" }}
          >
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.05)",
              backgroundColor: "rgba(255,255,255,0.02)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent-primary)",
              flexShrink: 0
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="stat-number">20%</span>
              <span className="stat-label" style={{ textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginTop: "0.2rem" }}>Faster DB Queries</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="stat-card"
          >
            <span className="stat-label" style={{ marginBottom: "0.5rem" }}>Core Technologies</span>
            <div className="tech-grid">
              {["Java", "Spring Boot", "React", "Angular", "Python", "SQL", "Power BI", "AWS", "Git"].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="tech-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.05) }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="stat-card"
          >
            <span className="stat-label" style={{ marginBottom: "1rem", display: "block" }}>AI & Design Ecosystem</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
              {aiTools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + (i * 0.05) }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "18px", height: "18px" }}>
                    {tool.slug ? (
                      <img
                        src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
                        alt={`${tool.name} logo`}
                        width={18}
                        height={18}
                        style={{ display: "block" }}
                      />
                    ) : tool.customImg ? (
                      <img
                        src={tool.customImg}
                        alt={`${tool.name} logo`}
                        width={18}
                        height={18}
                        style={{
                          display: "block",
                          objectFit: "contain",
                          filter: tool.invert ? "invert(1) brightness(100)" : "none"
                        }}
                      />
                    ) : (
                      tool.icon
                    )}
                  </div>
                  <span style={{ color: "var(--text-white)", fontSize: "0.85rem", fontWeight: 500 }}>
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
