"use client";

import { motion } from "framer-motion";
import { AiFillOpenAI } from "react-icons/ai";

const FigmaIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
  </svg>
);

const GrokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
    <path
      d="M13.2371 21.0407L24.3186 12.8506C24.8619 12.4491 25.6384 12.6057 25.8973 13.2294C27.2597 16.5185 26.651 20.4712 23.9403 23.1851C21.2297 25.8989 17.4581 26.4941 14.0108 25.1386L10.2449 26.8843C15.6463 30.5806 22.2053 29.6665 26.304 25.5601C29.5551 22.3051 30.562 17.8683 29.6205 13.8673L29.629 13.8758C28.2637 7.99809 29.9647 5.64871 33.449 0.844576C33.5314 0.730667 33.6139 0.616757 33.6964 0.5L29.1113 5.09055V5.07631L13.2343 21.0436"
      fill="currentColor"
    />
    <path
      d="M10.9503 23.0313C7.07343 19.3235 7.74185 13.5853 11.0498 10.2763C13.4959 7.82722 17.5036 6.82767 21.0021 8.2971L24.7595 6.55998C24.0826 6.07017 23.215 5.54334 22.2195 5.17313C17.7198 3.31926 12.3326 4.24192 8.67479 7.90126C5.15635 11.4239 4.0499 16.8403 5.94992 21.4622C7.36924 24.9165 5.04257 27.3598 2.69884 29.826C1.86829 30.7002 1.0349 31.5745 0.36364 32.5L10.9474 23.0341"
      fill="currentColor"
    />
  </svg>
);

export default function ExperienceSection() {
  const aiTools: Array<{
    name: string;
    desc: string;
    domain?: string;
    slug?: string;
    color?: string;
    customImg?: string;
    invert?: boolean;
    icon?: React.ReactNode;
  }> = [
      { name: "ChatGPT", desc: "Conversational AI & Problem Solving", icon: <AiFillOpenAI size={18} color="#FFFFFF" /> },
      { name: "Claude", desc: "Advanced Reasoning & Coding", slug: "claude", color: "D97757" },
      { name: "Google Gemini", desc: "Multimodal AI Integration", domain: "gemini.google.com" },
      { name: "Copilot", desc: "AI Assistant & Pair Programmer", slug: "githubcopilot", color: "white" },
      { name: "Grok", desc: "Real-time AI Intelligence", icon: <GrokIcon size={18} /> },
      { name: "Codex", desc: "Code Generation Engine", icon: <AiFillOpenAI size={18} color="#10A37F" /> },
      { name: "Antigravity", desc: "Agentic AI Workflow", domain: "antigravity.google" },
      { name: "Figma", desc: "Collaborative Interface Design", icon: <FigmaIcon size={18} /> },
      { name: "Framer", desc: "AI-Powered Web Design", slug: "framer", color: "white" },
    ];

  return (
    <motion.section
      id="experience"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="section-container"
      style={{ transform: "translateZ(0)" }}
    >
      <h2 className="section-title">Experience & Education</h2>
      <div className="experience-layout">
        {/* Left Column: Timeline */}
        <div className="experience-timeline-container" style={{ transform: "translateZ(0)" }}>
          {/* Work Experience Section */}
          <div style={{ marginBottom: "3.5rem" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid rgba(255, 50, 75, 0.2)"
            }}>
              <span style={{
                width: "4px",
                height: "24px",
                borderRadius: "2px",
                backgroundColor: "var(--accent-primary)",
                boxShadow: "0 0 10px rgba(255, 45, 70, 0.8)",
                display: "inline-block",
                flexShrink: 0
              }} />
              <h3 style={{
                fontSize: "1.65rem",
                fontWeight: 700,
                background: "linear-gradient(90deg, #ffffff 10%, #ff8595 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: 0,
                letterSpacing: "-0.01em"
              }}>
                Work Experience
              </h3>
            </div>
            <div className="experience-list">
              {[
                {
                  role: "Information Technology Analyst",
                  company: "NTT DATA",
                  logo: "https://api.companyenrich.com/logo/nttdata.com",
                  logoHeight: "48px",
                  clientLogo: "https://api.companyenrich.com/logo/hanover.com",
                  clientName: "The Hanover Insurance Group",
                  year: "July 2022 - Present",
                  desc: [
                    <>Developed and maintained RESTful APIs and microservices using Java 11, Spring Boot, and Spring Security with role-based authentication and authorization (RBAC).</>,
                    <>Designed and implemented core insurance workflow modules, including policy creation, endorsements, renewals, cancellations, and claims processing, while integrating SOAP and REST services with external SOAP and REST APIs.</>,
                    <>Optimized Oracle and Microsoft SQL Server database queries, improving data retrieval performance by <strong style={{ color: "var(--accent-primary)" }}>20%</strong> and enhancing overall application efficiency.</>,
                    <>Built responsive Angular applications using TypeScript, HTML5, CSS3, and reusable component architecture, improving frontend development efficiency by <strong style={{ color: "var(--accent-primary)" }}>25%</strong>.</>,
                    <>Implemented lazy loading, route optimization, and performance enhancements, reducing application load times by <strong style={{ color: "var(--accent-primary)" }}>30%</strong>.</>,
                    <>Collaborated in Agile/Scrum teams, participating in sprint planning, code reviews, UAT, and CI/CD pipelines to deliver high-quality enterprise applications.</>
                  ]
                }
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  className="experience-item"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transform: "translateZ(0)" }}
                >
                  <div className="timeline-dot"></div>
                  <div className="date-badge">{exp.year}</div>
                  <div className="exp-header">
                    <h3>{exp.role}</h3>
                  </div>
                  <div className="exp-company" style={{ marginBottom: "1.2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem" }}>
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        style={{
                          height: exp.logoHeight || "48px",
                          width: exp.logoHeight || "48px",
                          objectFit: "contain",
                          borderRadius: "8px",
                          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.35)",
                          backgroundColor: "rgba(25, 4, 8, 0.6)"
                        }}
                      />
                      <span style={{ color: "var(--text-white)", fontSize: "1.15rem", fontWeight: 600 }}>
                        {exp.company}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginTop: "0.4rem" }}>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>
                        Client:
                      </span>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
                        <img
                          src={exp.clientLogo}
                          alt={exp.clientName}
                          style={{
                            height: "30px",
                            width: "30px",
                            borderRadius: "50%",
                            objectFit: "contain",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                            backgroundColor: "rgba(25, 4, 8, 0.6)",
                            flexShrink: 0
                          }}
                        />
                        <span style={{ color: "var(--text-white)", fontSize: "1.05rem", fontWeight: 600 }}>
                          {exp.clientName}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="exp-desc">
                    <ul>
                      {exp.desc.map((item, idx) => (
                        <li key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div style={{ marginTop: "3.5rem" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid rgba(255, 50, 75, 0.2)"
            }}>
              <span style={{
                width: "4px",
                height: "24px",
                borderRadius: "2px",
                backgroundColor: "var(--accent-primary)",
                boxShadow: "0 0 10px rgba(255, 45, 70, 0.8)",
                display: "inline-block",
                flexShrink: 0
              }} />
              <h3 style={{
                fontSize: "1.65rem",
                fontWeight: 700,
                background: "linear-gradient(90deg, #ffffff 10%, #ff8595 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: 0,
                letterSpacing: "-0.01em"
              }}>
                Education
              </h3>
            </div>
            <div className="experience-list">
              {[
                {
                  degree: "B.Tech – Computer Science & Engineering",
                  college: "Presidency University, Bangalore",
                  logo: "https://api.companyenrich.com/logo/presidencyuniversity.in",
                  logoHeight: "48px",
                  year: "2018 - 2022",
                  desc: [
                    <>Graduated in Computer Science with a focus on software engineering and development.</>,
                    <><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming, and Web Technologies.</>,
                    <><strong>Key Achievement:</strong> Developed a comprehensive Student Management System as a capstone project.</>
                  ]
                }
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  className="experience-item"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transform: "translateZ(0)" }}
                >
                  <div className="timeline-dot"></div>
                  <div className="date-badge">{edu.year}</div>
                  <div className="exp-header">
                    <h3>{edu.degree}</h3>
                  </div>
                  <div className="exp-company" style={{ marginBottom: "1.2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <img
                        src={edu.logo}
                        alt={edu.college}
                        style={{
                          height: edu.logoHeight || "48px",
                          width: edu.logoHeight || "48px",
                          objectFit: "contain",
                          borderRadius: "8px",
                          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.35)",
                          backgroundColor: "rgba(25, 4, 8, 0.6)"
                        }}
                      />
                      <span style={{ color: "var(--text-white)", fontSize: "1.15rem", fontWeight: 600 }}>
                        {edu.college}
                      </span>
                    </div>
                  </div>
                  <div className="exp-desc">
                    <ul>
                      {edu.desc.map((item, idx) => (
                        <li key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginTop: "4rem", transform: "translateZ(0)" }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.8rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid rgba(255, 50, 75, 0.2)"
            }}>
              <span style={{
                width: "4px",
                height: "24px",
                borderRadius: "2px",
                backgroundColor: "var(--accent-primary)",
                boxShadow: "0 0 10px rgba(255, 45, 70, 0.8)",
                display: "inline-block",
                flexShrink: 0
              }} />
              <h3 style={{
                fontSize: "1.65rem",
                fontWeight: 700,
                background: "linear-gradient(90deg, #ffffff 10%, #ff8595 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: 0,
                letterSpacing: "-0.01em"
              }}>
                Certifications & Continuous Learning
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  title: "Introduction to Artificial Intelligence (AI)",
                  issuer: "IBM (Coursera)",
                  date: "Aug 2020",
                  link: "https://coursera.org/verify/6KWARKMGZ8BT",
                  logo: "https://api.companyenrich.com/logo/ibm.com"
                },
                {
                  title: "Introduction to Python",
                  issuer: "DataCamp",
                  date: "Completed",
                  link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/6004d9aef8eeac2762313d46d643901664b33c06",
                  logo: "https://api.companyenrich.com/logo/datacamp.com"
                }
              ].map((cert, i) => {
                const CardContent = (
                  <>
                    <div style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(25, 4, 8, 0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-primary)",
                      flexShrink: 0,
                      overflow: "hidden",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)"
                    }}>
                      {cert.logo ? (
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          }}
                        />
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
                  backgroundColor: "rgba(25, 4, 8, 0.6)",
                  border: "1px solid rgba(255, 50, 75, 0.16)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                  cursor: "pointer",
                  textDecoration: "none",
                  flexWrap: "wrap" as const,
                  transform: "translateZ(0)",
                };

                return cert.link ? (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                    style={commonStyle as any}
                    whileHover={{ x: 5, backgroundColor: "rgba(38, 7, 13, 0.8)", borderColor: "rgba(255, 50, 75, 0.45)", boxShadow: "0 6px 20px rgba(255, 45, 70, 0.15)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {CardContent}
                  </motion.a>
                ) : (
                  <motion.div
                    key={i}
                    style={commonStyle as any}
                    whileHover={{ x: 5, backgroundColor: "rgba(38, 7, 13, 0.8)", borderColor: "rgba(255, 50, 75, 0.45)", boxShadow: "0 6px 20px rgba(255, 45, 70, 0.15)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
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
                style={{
                  backgroundColor: "rgba(25, 4, 8, 0.6)",
                  border: "1px solid rgba(255, 50, 75, 0.2)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  cursor: "pointer",
                  textDecoration: "none",
                  backgroundImage: "linear-gradient(to right, rgba(255, 45, 70, 0.08), rgba(255, 45, 70, 0))",
                  transform: "translateZ(0)",
                  transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease"
                }}
                whileHover={{ x: 5, backgroundColor: "rgba(38, 7, 13, 0.8)", borderColor: "var(--accent-primary)", boxShadow: "0 8px 30px rgba(255, 45, 70, 0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(25, 4, 8, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-primary)",
                  flexShrink: 0,
                  overflow: "hidden",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)"
                }}>
                  <img
                    src="https://api.companyenrich.com/logo/skillsoft.com"
                    alt="Skillsoft Wallet"
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
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
        <motion.div
          className="experience-sidebar"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ transform: "translateZ(0)" }}
        >
          <div
            className="stat-card"
            style={{ flexDirection: "row", alignItems: "center", gap: "1.5rem" }}
          >
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid rgba(255, 50, 75, 0.25)",
              backgroundColor: "rgba(255, 45, 70, 0.08)",
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
          </div>

          <div
            className="stat-card"
            style={{ flexDirection: "row", alignItems: "center", gap: "1.5rem" }}
          >
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid rgba(255, 50, 75, 0.25)",
              backgroundColor: "rgba(255, 45, 70, 0.08)",
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
          </div>

          <div
            className="stat-card"
            style={{ flexDirection: "row", alignItems: "center", gap: "1.5rem" }}
          >
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid rgba(255, 50, 75, 0.25)",
              backgroundColor: "rgba(255, 45, 70, 0.08)",
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
          </div>

          <div
            className="stat-card"
            style={{ flexDirection: "row", alignItems: "center", gap: "1.5rem" }}
          >
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid rgba(255, 50, 75, 0.25)",
              backgroundColor: "rgba(255, 45, 70, 0.08)",
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
          </div>

          <div className="stat-card">
            <span className="stat-label" style={{ marginBottom: "1rem", display: "block" }}>Core Technologies</span>
            <div className="tech-grid" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.6rem" }}>
              {["Java", "Spring Boot", "React", "Angular", "Python", "SQL", "Power BI", "AWS", "Git"].map((tech, index, arr) => (
                <span key={tech} style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
                  <span className="tech-tag">
                    {tech}
                  </span>
                  {index < arr.length - 1 && (
                    <span style={{ color: "var(--accent-primary)", fontWeight: 900, fontSize: "1.1rem", lineHeight: 1, userSelect: "none" }}>
                      •
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-label" style={{ marginBottom: "1rem", display: "block" }}>AI & Design Ecosystem</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
              {aiTools.map((tool) => (
                <div
                  key={tool.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "rgba(25, 4, 8, 0.6)",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "18px", height: "18px" }}>
                    {tool.slug ? (
                      <img
                        src={`https://cdn.simpleicons.org/${tool.slug}${tool.color ? `/${tool.color}` : ""}`}
                        alt={`${tool.name} logo`}
                        width={18}
                        height={18}
                        loading="lazy"
                        style={{ display: "block" }}
                      />
                    ) : tool.domain ? (
                      <img
                        src={`https://api.companyenrich.com/logo/${tool.domain}`}
                        alt={`${tool.name} logo`}
                        width={18}
                        height={18}
                        loading="lazy"
                        style={{ display: "block", objectFit: "contain" }}
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
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
