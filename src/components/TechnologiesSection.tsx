"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot, SiAngular, SiReact, SiNextdotjs } from "react-icons/si";
import { BsDatabaseFill } from "react-icons/bs";

export default function TechnologiesSection() {
  const technologies = [
    {
      name: "Java",
      icon: <FaJava size={28} color="#EA2D2E" />,
      glow: "rgba(234, 45, 46, 0.45)",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot size={26} color="#6DB33F" />,
      glow: "rgba(109, 179, 63, 0.45)",
    },
    {
      name: "Angular",
      icon: <SiAngular size={26} color="#DD0031" />,
      glow: "rgba(221, 0, 49, 0.45)",
    },
    {
      name: "SQL",
      icon: <BsDatabaseFill size={23} color="#00758F" />,
      glow: "rgba(0, 117, 143, 0.45)",
    },
    {
      name: "React",
      icon: <SiReact size={26} color="#61DAFB" />,
      glow: "rgba(97, 218, 251, 0.45)",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={26} color="#FFFFFF" />,
      glow: "rgba(255, 255, 255, 0.45)",
    },
  ];

  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="trusted-brands"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="trusted-container">
        <div className="trusted-label">
          <p>Core Technologies</p>
          <p>I Work With</p>
        </div>
        <div className="brands-list">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="brand-item"
              style={{
                "--brand-glow": tech.glow,
              } as React.CSSProperties}
            >
              <span className="brand-icon">{tech.icon}</span>
              <span className="brand-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

