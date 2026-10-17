"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";

export default function HeroSection() {

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariant: Variants = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-content-layer">
        <Navbar />

        <main className="hero-content">
          <div className="hero-main-row">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="headline-container"
            >
              <motion.p variants={textVariant} className="greeting">
                Hey, I'm a
              </motion.p>
              <h1 className="headline" style={{ position: "relative", zIndex: 10 }}>
                <CustomMorph />
              </h1>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="supporting-container"
            >
              <h2 className="sub-headline">
                Great code should
                <br />
                feel effortless.
              </h2>
              <p className="description">
                Results-driven developer with 4 years of hands-on experience in building enterprise-grade web applications.
              </p>
            </motion.div>
          </div>


          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="services-container"
          >
            {[
              { num: "#01", title: "Java & Spring Boot" },
              { num: "#02", title: "Angular, React & Next.js" },
              { num: "#03", title: "Microservices Architecture" },
              { num: "#04", title: "DevOps & CI/CD" },
            ].map((service, index) => (
              <motion.div key={index} variants={textVariant} className="service-item">
                <span className="service-number">{service.num}</span>
                <p className="service-title">{service.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export function CustomMorph() {
  return (
    <MorphText
      words={["FullStack Developer", "UI/UX Designer", "Data Analyst"]}
      interval={2800}
      subtext="Crafting Seamless Digital Experiences."
      fontSize="clamp(2rem, 10vw, 8rem)"
    />
  );
}

export interface MorphTextProps {
  words?: string[];
  interval?: number;
  subtext?: string;
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  textClassName?: string;
  subtextClassName?: string;
}

export function MorphText({
  words = ["DESIGN", "DEVELOP"],
  interval = 2800,
  subtext,
  fontSize = "clamp(3rem, 15vw, 10rem)",
  fontFamily = '"Space Grotesk", sans-serif',
  className,
  textClassName,
  subtextClassName,
}: MorphTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className={cn("morph-text-root", className)}>
      <div
        className={cn("morph-text-container", textClassName)}
        style={{
          fontSize,
          fontWeight: 700,
          fontFamily,
          minHeight: "1.2em",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: 28, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -28, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      {subtext && (
        <p
          className={cn("morph-subtext", subtextClassName)}
          style={{
            fontSize: "1.2rem",
            opacity: 0,
            animation: "morph-fade-up 0.8s ease-out 0.4s forwards",
            fontFamily,
          }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}