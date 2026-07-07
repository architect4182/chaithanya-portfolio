"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ProjectsSection() {
  const displayedProjects = [
    {
      title: "Apple Travel OS",
      category: "Next-Gen Travel Operating System",
      image: "/projects/apple-travel.jpg",
      link: "https://apple-travel-os.vercel.app",
      github: "https://github.com/architect4182/apple-travel-os",
      techStack: "Next.js • TypeScript • Framer Motion"
    },
    {
      title: "Moments OS",
      category: "Premium Memory & Journal Platform",
      image: "/projects/moments.jpg",
      link: "https://moments-os.vercel.app",
      github: "https://github.com/architect4182/moments-os",
      techStack: "Next.js • TypeScript • Cloudinary • AI Journal"
    }
  ];

  return (
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
  );
}
