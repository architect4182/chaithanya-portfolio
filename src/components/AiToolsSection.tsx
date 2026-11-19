"use client";

import { motion } from "framer-motion";
import { AiFillOpenAI } from "react-icons/ai";

const FigmaIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
  </svg>
);

const GrokIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
    <path
      d="M13.2371 21.0407L24.3186 12.8506C24.8619 12.4491 25.6384 12.6057 25.8973 13.2294C27.2597 16.5185 26.651 20.4712 23.9403 23.1851C21.2297 25.8989 17.4581 26.4941 14.0108 25.1386L10.2449 26.8843C15.6463 30.5806 22.2053 29.6665 26.304 25.5601C29.5551 22.3051 30.562 17.8683 29.6205 13.8673L29.629 13.8758C28.2637 7.99809 29.9647 5.64871 33.449 0.844576C33.5314 0.730667 33.6139 0.616757 33.6964 0.5L29.1113 5.09055V5.07631L13.2343 21.0436"
      fill="currentColor"
    />
    <path
      d="M10.9503 23.0313C7.07343 19.3235 7.74185 13.5853 11.0498 10.2763C13.4959 7.82722 17.5036 6.82767 21.0021 8.2971L24.7595 6.55998C24.0826 6.07017 23.215 5.54334 22.2195 5.17313C17.7198 3.31926 12.3326 4.24192 8.67479 7.90126C5.15635 11.4239 4.0499 16.8403 5.94992 21.4622C7.36924 24.9165 5.04257 27.3598 2.69884 29.826C1.86829 30.7002 1.0349 31.5745 0.36364 32.5L10.9474 23.0341"
      fill="currentColor"
    />
  </svg>
);

export default function AiToolsSection() {
  const tools: Array<{
    name: string;
    desc: string;
    domain?: string;
    slug?: string;
    color?: string;
    customImg?: string;
    invert?: boolean;
    icon?: React.ReactNode;
  }> = [
      { name: "ChatGPT", desc: "Conversational AI & Problem Solving", icon: <AiFillOpenAI size={24} color="#10A37F" /> },
      { name: "Claude", desc: "Advanced Reasoning & Coding", slug: "claude", color: "D97757" },
      { name: "Google Gemini", desc: "Multimodal AI Integration", domain: "gemini.google.com" },
      { name: "GitHub Copilot", desc: "AI Pair Programmer", slug: "githubcopilot", color: "white" },
      { name: "Grok", desc: "Real-time AI Intelligence", icon: <GrokIcon size={24} /> },
      { name: "Codex", desc: "Code Generation Engine", icon: <AiFillOpenAI size={24} color="#FFFFFF" /> },
      { name: "Antigravity", desc: "Agentic AI Workflow", domain: "antigravity.google" },
      { name: "Figma", desc: "Collaborative Interface Design", icon: <FigmaIcon size={24} /> },
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
                  src={`https://cdn.simpleicons.org/${tool.slug}${tool.color ? `/${tool.color}` : ""}`}
                  alt={`${tool.name} logo`}
                  width={24}
                  height={24}
                  loading="lazy"
                  style={{ display: "block" }}
                />
              ) : tool.domain ? (
                <img
                  src={`https://api.companyenrich.com/logo/${tool.domain}`}
                  alt={`${tool.name} logo`}
                  width={24}
                  height={24}
                  loading="lazy"
                  style={{ display: "block", objectFit: "contain" }}
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
