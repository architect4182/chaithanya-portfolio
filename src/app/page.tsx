"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import PremiumButton from "../components/PremiumButton";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import FloatingDock from "../components/FloatingDock";

export default function Home() {
  const headlineWords = "FullStack Developer".split(" ");

  const displayedProjects = [
    {
      title: "Apple Travel OS",
      category: "Next-Gen Travel Operating System",
      image: "/apple-travel.jpg",
      link: "https://apple-travel-os.vercel.app",
      github: "https://github.com/architect4182/apple-travel-os",
      techStack: "Next.js • TypeScript • Framer Motion"
    },
    {
      title: "Moments OS",
      category: "Premium Memory & Journal Platform",
      image: "/moments.jpg",
      link: "https://moments-os.vercel.app",
      github: "https://github.com/architect4182/moments-os",
      techStack: "Next.js • TypeScript • Cloudinary • AI Journal"
    }
  ];

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariant: Variants = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>

      <FloatingDock />
      <div className="hero-wrapper">
        <div className="hero-image-bg" style={{ backgroundImage: "url('/profile-hero.jpg')" }}></div>
        <div className="hero-content-layer">
          <Navbar />

          <main className="hero-content">
            <div className="hero-main-row">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="headline-container"
              >
                <motion.p variants={textVariant} className="greeting">
                  Hey, I'm a
                </motion.p>
                <h1 className="headline" style={{ position: "relative", zIndex: 10 }}>
                  {headlineWords.map((word, i) => (
                    <motion.span
                      key={i}
                      variants={textVariant}
                      style={{ display: "block" } as any}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="supporting-container"
              >
                <h2 className="sub-headline">
                  Great code should
                  <br />
                  feel effortless.
                </h2>
                <p className="description">
                  Results-driven developer with 4 years of hands-on experience in building enterprise-grade web applications.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="services-container"
            >
              {[
                { num: "#01", title: "Java & Spring Boot" },
                { num: "#02", title: "Angular, React & Next.js" },
                { num: "#03", title: "Microservices Architecture" },
                { num: "#04", title: "DevOps & CI/CD" },
              ].map((service, index) => (
                <motion.div key={index} variants={textVariant} className="service-item">
                  <span className="service-number">{service.num}</span>
                  <p className="service-title">{service.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </main>
        </div>
      </div>

      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="trusted-brands"
      >
        <div className="trusted-container">
          <div className="trusted-label">
            <p>Core Technologies</p>
            <p>I Work With</p>
          </div>
          <div className="brands-list">
            <span className="brand-item">Java</span>
            <span className="brand-item">Spring Boot</span>
            <span className="brand-item">Angular</span>
            <span className="brand-item">SQL</span>
            <span className="brand-item">React</span>
            <span className="brand-item">Next.js</span>
          </div>
        </div>
      </motion.section>

      {/* About Me Section */}
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

      {/* Experience Section */}
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

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-container"
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", gap: "1rem" }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Selected Projects</h2>
          <Link href="/projects" style={{ textDecoration: "none", color: "var(--accent-orange)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", whiteSpace: "nowrap" }}>
            View All <span style={{ transition: "transform 0.2s" }} className="hover-arrow">→</span>
          </Link>
        </div>
        <div className="projects-grid">
          <AnimatePresence>
            {displayedProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className="project-wrapper"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  className="project-card"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%), url(${project.image})`,
                    textDecoration: "none",
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end"
                  }}
                >
                  <div className="project-links desktop-links-only">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.5rem 1.5rem", whiteSpace: "nowrap" }}>
                      Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.5rem 1.5rem", background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", whiteSpace: "nowrap" }}>
                      GitHub
                    </a>
                  </div>


                  <div className="project-info">
                    <h3 style={{ color: "var(--text-white)" }}>{project.title}</h3>
                    <p>{project.category}</p>
                    {project.techStack && (
                      <p className="project-tech">{project.techStack}</p>
                    )}
                  </div>
                </div>

                <div className="project-links-mobile">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.5rem 1.5rem", whiteSpace: "nowrap" }}>
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.5rem 1.5rem", background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", whiteSpace: "nowrap" }}>
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="contact-section section-container"
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 className="headline" style={{ fontSize: "4rem", marginBottom: "2rem" }}>Let's work together.</h2>
            <p className="description" style={{ marginBottom: "3rem", maxWidth: "600px" }}>
              I'm currently available for new projects and collaborations. If you have an idea, feel free to reach out.
            </p>
            <PremiumButton href="mailto:chaithanya.pr41@gmail.com" ariaLabel="Email chaithanya.pr41@gmail.com">
              chaithanya.pr41@gmail.com
            </PremiumButton>

            <motion.div
              style={{ marginTop: "1rem", display: "flex", flexDirection: "column" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Using negative margins to pull the image closer and ignore its internal blank space */}
              <div style={{ marginLeft: "-30px", marginTop: "-20px", marginBottom: "-50px" }}>
                <img
                  src="/paper-plane.png"
                  alt="Paper Plane Icon"
                  style={{ width: "300px", height: "auto", objectFit: "contain", pointerEvents: "none" }}
                />
              </div>

              <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <p style={{ fontSize: "1.1rem", color: "var(--text-white)", opacity: 0.9, margin: 0 }}>
                  Thanks for visiting my portfolio. I look forward to connecting.
                </p>
                <motion.div
                  style={{ height: "2px", backgroundColor: "var(--accent-orange)", width: "65px" }}
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            style={{ flex: "1.5 1 600px", display: "flex", justifyContent: "center" }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="/contact-hero.jpg"
              alt="Developer working at desk"
              style={{
                width: "100%",
                maxWidth: "1000px",
                height: "auto",
                objectFit: "contain",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                WebkitMaskComposite: "source-in",
                maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                maskComposite: "intersect"
              }}
            />
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
