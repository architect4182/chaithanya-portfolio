"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingDock from "@/components/FloatingDock";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const allProjects = [
    {
      title: "Apple Travel OS",
      category: "Next-Gen Travel Operating System",
      filterCategories: ["UI/UX"],
      image: "/images/projects/apple-travel.jpg",
      link: "https://apple-travel-os.vercel.app",
      github: "https://github.com/architect4182/apple-travel-os",
      techStack: "Next.js • TypeScript • Framer Motion"
    },
    {
      title: "Moments OS",
      category: "Premium Memory & Journal Platform",
      filterCategories: ["UI/UX"],
      image: "/images/projects/moments.jpg",
      link: "https://moments-os.vercel.app",
      github: "https://github.com/architect4182/moments-os",
      techStack: "React • Cloudinary • AI Journal"
    },
    {
      title: "Figr",
      category: "An E-commerce for 3D figures",
      filterCategories: ["UI/UX", "Motion Design", "Products"],
      image: "/images/projects/figr.jpg",
      link: "https://figr-alpha.vercel.app",
      github: "https://github.com/architect4182/figr",
      techStack: "TypeScript • React • Motion Design"
    },
    {
      title: "Aegis Protocol",
      category: "Interactive Sci-Fi Story Website",
      filterCategories: ["UI/UX"],
      image: "/images/projects/aegis-protocol.jpg",
      link: "https://aegis-protocol-omega.vercel.app",
      github: "https://github.com/architect4182/aegis-protocol",
      techStack: "JavaScript"
    },
    {
      title: "Velora",
      category: "Premium E-Commerce Chocolate",
      filterCategories: ["UI/UX", "Motion Design", "Products"],
      image: "/images/projects/velora.jpg",
      link: "https://velora-beryl-gamma.vercel.app",
      github: "https://github.com/architect4182/velora",
      techStack: "React • TypeScript • Tailwind CSS • Vite"
    },
    {
      title: "AtmosVerse",
      category: "Cinematic Entertainment Platform",
      filterCategories: ["UI/UX", "API Keys"],
      image: "/images/projects/atmos.jpg",
      link: "https://atmos-verse.vercel.app",
      github: "https://github.com/architect4182/atmos-verse",
      techStack: "React • Context API • Framer Motion"
    },
    {
      title: "GlassBeat",
      category: "Glassmorphism Music Player",
      filterCategories: ["UI/UX", "API Keys"],
      image: "/images/projects/glassbeat.jpg",
      link: "https://glass-beat.vercel.app",
      github: "https://github.com/architect4182/glassbeat",
      techStack: "React • CSS • Web Audio API"
    }
  ];

  const filteredProjects = filter === "All"
    ? allProjects
    : allProjects.filter(p => p.filterCategories.includes(filter));

  const filters = ["All", "Data Analytics", "UI/UX", "Motion Design", "Products", "API Keys"];

  return (
    <>
      <FloatingDock />
      <div style={{ padding: "2rem 5% 0 5%" }}>
        <Navbar />
      </div>

      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-container"
        style={{ minHeight: "60vh", paddingTop: "2rem" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <h1 style={{ fontSize: "5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Projects</h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1.2rem", maxWidth: "450px", lineHeight: "1.6" }}>
              Building products that combine engineering,<br />design and analytics.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flex: "1 1 300px", display: "flex", justifyContent: "flex-end" }}
          >
            <img src="/projects.png" alt="Projects Graphic" style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              objectFit: "contain",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
              WebkitMaskComposite: "source-in",
              maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
            }} />
          </motion.div>
        </div>

        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "3rem", width: "100%" }}></div>

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
                    position: "relative",
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
      <Footer />
    </>
  );
}
