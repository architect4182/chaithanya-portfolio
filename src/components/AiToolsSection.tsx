"use client";

import { motion } from "framer-motion";
import { FaRocket, FaCodeBranch } from "react-icons/fa6";
import { AiFillOpenAI } from "react-icons/ai";

export default function AiToolsSection() {
  const tools = [
    { name: "ChatGPT", desc: "Conversational AI & Problem Solving", icon: <AiFillOpenAI size={24} color="#10A37F" /> },
    { name: "Claude", desc: "Advanced Reasoning & Coding", slug: "claude", color: "D97757" },
    { name: "Google Gemini", desc: "Multimodal AI Integration", slug: "googlegemini", color: "8E75B2" },
    { name: "GitHub Copilot", desc: "AI Pair Programmer", slug: "githubcopilot", color: "white" },
    { name: "Grok", desc: "Real-time AI Intelligence", customImg: "/grok.png", invert: true },
    { name: "Codex", desc: "Code Generation Engine", icon: <AiFillOpenAI size={24} color="#FFFFFF" /> },
    { name: "Antigravity", desc: "Agentic AI Workflow", customImg: "/antigravity.png" },
    { name: "Framer", desc: "AI-Powered Web Design", slug: "framer", color: "white" },
  ];

  return (
    <motion.section
      id="ai-ecosystem"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="section-container"
      style={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
        position: "relative",
      }}
    >
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h2 className="section-title" style={{ marginBottom: "0.5rem", fontSize: "2.5rem" }}>
          AI Ecosystem
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: "700px", margin: "0 auto" }}>
          Leveraging artificial intelligence to accelerate development and build smarter solutions.
        </p>
      </div>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.5rem",
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ y: -2, scale: 1.02 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              cursor: "pointer",
              padding: "0.5rem 1rem",
              minWidth: "200px"
            }}
          >

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px" }}>
              {tool.slug ? (
                <img
                  src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
                  alt={`${tool.name} logo`}
                  width={24}
                  height={24}
                  style={{ display: "block" }}
                />
              ) : tool.customImg ? (
                <img
                  src={tool.customImg}
                  alt={`${tool.name} logo`}
                  width={24}
                  height={24}
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

            <h3 style={{
              color: "var(--text-white)",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.2px",
              margin: 0
            }}>
              {tool.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
