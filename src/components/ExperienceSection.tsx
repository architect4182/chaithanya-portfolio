"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
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
                    <>Optimized Oracle and Microsoft SQL Server database queries, improving data retrieval performance by <strong style={{ color: "var(--accent-orange)" }}>20%</strong> and enhancing overall application efficiency.</>,
                    <>Built responsive Angular applications using TypeScript, HTML5, CSS3, and reusable component architecture, improving frontend development efficiency by <strong style={{ color: "var(--accent-orange)" }}>25%</strong>.</>,
                    <>Implemented lazy loading, route optimization, and performance enhancements, reducing application load times by <strong style={{ color: "var(--accent-orange)" }}>30%</strong>.</>,
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
          </div>

          {/* Right Column: Stats Sidebar */}
          <div className="experience-sidebar">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="stat-card"
            >
              <span className="stat-number">4+</span>
              <span className="stat-label">Years of Experience</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="stat-card"
            >
              <span className="stat-number">15+</span>
              <span className="stat-label">REST APIs Developed</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="stat-card"
            >
              <span className="stat-number">30%</span>
              <span className="stat-label">Performance Improvement</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="stat-card"
            >
              <span className="stat-number">20%</span>
              <span className="stat-label">Faster DB Queries</span>
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
          </div>
        </div>
      </motion.section>
  );
}
