"use client";

import { useId } from "react";
import { motion, Variants } from "framer-motion";
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
      <div className="hero-image-bg" style={{ backgroundImage: "url('/profile-hero.jpg')" }}></div>
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
      interval={2500}
      subtext="Crafting Seamless Digital Experiences."
      fontSize="clamp(2rem, 10vw, 8rem)"
    />
  )
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
  interval = 3000,
  subtext,
  fontSize = "clamp(3rem, 15vw, 10rem)",
  fontFamily = '"Space Grotesk", sans-serif',
  className,
  textClassName,
  subtextClassName,
}: MorphTextProps) {
  const uid = useId().replace(/:/g, "");
  const filterId = `morph-threshold-${uid}`;

  const totalDuration = (interval / 1000) * words.length;
  const wordDuration = interval / 1000;

  const wordStyles = words.map((_, i) => ({
    animationDelay: `${i * wordDuration}s`,
    animationDuration: `${totalDuration}s`,
  }));

  return (
    <div className={cn("morph-text-root", className)}>
      <svg
        aria-hidden="true"
        focusable="false"
        style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}
      >
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div
        className={cn("morph-text-container", textClassName)}
        style={{
          fontSize,
          fontWeight: 700,
          filter: `url(#${filterId})`,
          fontFamily,
        }}
      >
        <div
          className="morph-word-rotator"
          style={{ height: "1.2em", minWidth: "14ch" }}
        >
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="morph-word"
              style={{
                top: "50%",
                left: "0%",
                transform: "translate(0, -50%)",
                opacity: 0,
                whiteSpace: "nowrap",
                animationName: "morph-word-rotate",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationFillMode: "both",
                ...wordStyles[i],
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {subtext && (
        <p
          className={cn("morph-subtext", subtextClassName)}
          style={{
            fontSize: "1.2rem",
            opacity: 0,
            animation: "morph-fade-up 1s ease-out 1s forwards",
            fontFamily,
          }}
        >
          {subtext}
        </p>
      )}


    </div>
  );
}