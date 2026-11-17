"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingDock from "@/components/FloatingDock";
import ProjectVideo from "@/components/ProjectVideo";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { allProjects } from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? allProjects
    : allProjects.filter(p => p.filterCategories.includes(filter));

  const filters = ["All", "Data Analytics", "UI/UX", "Motion Design", "Products", "API Keys"];

  return (
    <>
      <FloatingDock />
      <div style={{ padding: "1rem 5% 0 5%" }}>
        <Navbar />
      </div>

      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-container"
        style={{ minHeight: "60vh", paddingTop: "0rem" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <h1 style={{ fontSize: "5rem", fontWeight: 700, marginBottom: "1.5rem", background: "linear-gradient(180deg, #ffffff 40%, #ffa8b8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1.2rem", maxWidth: "450px", lineHeight: "1.6" }}>
              Building products that combine engineering,<br />design and analytics.
            </p>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(255, 50, 75, 0.2)", marginBottom: "3rem", width: "100%" }}></div>

        <div className="filter-nav">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className="project-wrapper"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  transform: "translateZ(0)",
                }}
              >
                <div
                  className="project-card"
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    transform: "translateZ(0)",
                    contain: "paint",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />

                  {project.video && (
                    <ProjectVideo
                      src={project.video}
                      poster={project.image}
                    />
                  )}
                  <div className="project-links desktop-links-only">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.5rem 1.5rem", whiteSpace: "nowrap" }}>
                      Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.5rem 1.5rem", background: "rgba(255, 45, 70, 0.15)", color: "#fff", border: "1px solid rgba(255, 50, 75, 0.35)", whiteSpace: "nowrap" }}>
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="project-info" style={{ marginTop: "1.25rem" }}>
                  <h3 style={{ color: "var(--text-white)", fontSize: "1.5rem", fontWeight: 700, margin: 0, marginBottom: "0.25rem" }}>{project.title}</h3>
                  <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "1rem" }}>{project.category}</p>
                  {project.techStack && (
                    <p style={{ color: "var(--accent-primary)", fontSize: "0.85rem", fontWeight: 500, margin: 0, marginTop: "0.5rem" }}>{project.techStack}</p>
                  )}
                </div>

                <div className="project-links-mobile" style={{ marginTop: "1rem" }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.5rem 1.5rem", whiteSpace: "nowrap" }}>
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.5rem 1.5rem", background: "rgba(255, 45, 70, 0.15)", color: "#fff", border: "1px solid rgba(255, 50, 75, 0.35)", whiteSpace: "nowrap" }}>
                    GitHub
                  </a>
                </div>

                <div className="mobile-project-divider" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
