"use client";

import FloatingDock from "../components/FloatingDock";
import HeroSection from "../components/HeroSection";
import TechnologiesSection from "../components/TechnologiesSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <FloatingDock />
      <HeroSection />
      <TechnologiesSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
