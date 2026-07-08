"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ProjectsSection() {
  const displayedProjects = [
    {
      title: "Bowlz",
      category: "An E-commerce for smoothies",
      video: "https://res.cloudinary.com/difofj393/video/upload/bowlz_h2y1dj.mp4",
      image: "/projects/bowlz.jpg",
      link: "https://github.com/architect4182/bowlz",
      github: "https://github.com/architect4182/bowlz",
      techStack: "Next.js • TypeScript"
    },
    {
      title: "Figr",
      category: "An E-commerce for 3D figures",
      filterCategories: ["UI/UX", "Motion Design", "Products"],
      video: "https://res.cloudinary.com/difofj393/video/upload/figr_ukkxjp.mp4",
      image: "/projects/figr.jpg",
      link: "https://figr-alpha.vercel.app",
      github: "https://github.com/architect4182/figr",
      techStack: "TypeScript • React • Motion Design"
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
                  textDecoration: "none",
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end"
                }}
              >
                {/* @ts-ignore */}
                {!project.video && (
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
                )}
                {/* @ts-ignore */}
                {project.video && (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onEnded={(e) => {
                      const target = e.target as HTMLVideoElement;
                      target.play();
                    }}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
                  >
                    {/* @ts-ignore */}
                    <source src={project.video} type="video/mp4" />
                  </video>
                )}
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)", zIndex: 1, pointerEvents: "none" }} />
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
