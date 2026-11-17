"use client";

import HeaderNav from "@/components/landing/HeaderNav";
import HeroSection from "@/components/landing/HeroSection";
import TaglineReveal from "@/components/landing/TaglineReveal";
import SelectedWork from "@/components/landing/SelectedWork";
import CapabilitiesSection from "@/components/landing/CapabilitiesSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ExperienceTimeline from "@/components/landing/ExperienceTimeline";
import RecruiterFAQ from "@/components/landing/RecruiterFAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Chaithanya Pedhagali",
        "jobTitle": "Full Stack Software Engineer",
        "description": "Full stack engineer with 4 years building scalable enterprise web applications, high craft React systems, and data pipelines.",
        "sameAs": [
          "https://github.com/architect4182",
          "https://linkedin.com/in/chaithanya-pedhagali"
        ],
        "knowsAbout": [
          "React",
          "Next.js",
          "TypeScript",
          "Java",
          "Spring Boot",
          "Tailwind CSS",
          "SQL",
          "Data Analytics"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What roles are you actively considering?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Senior Frontend Engineer, Full Stack Software Engineer, and Design Technologist roles."
            }
          },
          {
            "@type": "Question",
            "name": "What is your availability and current notice period?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Available with standard professional notice for full-time remote or hybrid positions."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderNav />
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <TaglineReveal />
        <SelectedWork />
        <CapabilitiesSection />
        <ProcessSection />
        <ExperienceTimeline />
        <RecruiterFAQ />
        <FinalCTA />
      </main>
      <LandingFooter />
    </>
  );
}
