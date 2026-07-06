"use client";

import { motion } from "framer-motion";
import PremiumButton from "./PremiumButton";

export default function ContactSection() {
  return (
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
  );
}
