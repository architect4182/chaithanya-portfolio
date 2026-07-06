"use client";

import { motion } from "framer-motion";

export default function TechnologiesSection() {
  return (
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
  );
}
