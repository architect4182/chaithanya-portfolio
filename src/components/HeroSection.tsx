"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "./Navbar";

export default function HeroSection() {
  const headlineWords = "FullStack Developer".split(" ");
  
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
                  {headlineWords.map((word, i) => (
                    <motion.span
                      key={i}
                      variants={textVariant}
                      style={{ display: "block" } as any}
                    >
                      {word}
                    </motion.span>
                  ))}
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
