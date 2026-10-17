"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Full Stack",
      description: "Engineering end-to-end applications with Java, Spring Boot, React, Next.js, and TypeScript.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      title: "API & Microservices",
      description: "Architecting scalable REST & SOAP services with Spring Security, JWT, and RBAC authorization.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    },
    {
      title: "Data Analytics",
      description: "Building interactive Power BI dashboards, advanced SQL queries, and Python data pipelines.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    },
    {
      title: "Database Opt",
      description: "Optimizing Oracle & SQL Server queries, index tuning, and accelerating data retrieval.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      )
    },
    {
      title: "App Dev",
      description: "Crafting modular Angular & React applications with lazy loading and high-performance routing.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      description: "Designing interactive Figma prototypes, accessible design systems, and fluid Framer animations.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      )
    }
  ];

  return (
    <motion.section
      id="services"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="section-container"
      style={{ transform: "translateZ(0)" }}
    >
      <div style={{ marginBottom: "3rem" }}>
        <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>What I Do</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px" }}>
          Leveraging my expertise in software engineering, data analytics, and design to deliver end-to-end digital solutions that drive business success and create engaging user experiences.
        </p>
      </div>

      <div className="services-grid" style={{ transform: "translateZ(0)" }}>
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.06 * i, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: "rgba(25, 4, 8, 0.7)",
              border: "1px solid rgba(255, 50, 75, 0.16)",
              borderRadius: "12px",
              padding: "1.75rem 1.15rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              height: "100%",
              transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease",
              cursor: "pointer",
              transform: "translateZ(0)",
            }}
            whileHover={{
              y: -5,
              backgroundColor: "rgba(38, 7, 13, 0.9)",
              borderColor: "rgba(255, 50, 75, 0.45)",
              boxShadow: "0 8px 30px rgba(255, 40, 70, 0.2)",
            }}
          >
            <div style={{ color: "var(--accent-primary)", display: "flex", alignItems: "flex-start", opacity: 0.9 }}>
              {service.icon}
            </div>
            <div style={{ marginTop: "0.25rem" }}>
              <h3 style={{ 
                color: "var(--text-white)", 
                fontSize: "1rem", 
                fontWeight: 800, 
                textTransform: "uppercase", 
                letterSpacing: "0.4px", 
                marginBottom: "0.6rem",
                lineHeight: 1.25
              }}>
                {service.title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.45 }}>
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
