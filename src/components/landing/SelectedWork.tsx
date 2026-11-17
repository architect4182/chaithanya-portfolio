"use client";

import { motion } from "framer-motion";
import ProjectVideo from "../ProjectVideo";
import { baseEase } from "@/lib/motion";

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  video?: string;
  image?: string;
  link: string;
  github: string;
  techStack: string[];
  metrics: string;
}

const projects: ProjectItem[] = [
  {
    title: "Apple Universe",
    category: "Operating System Simulation",
    description:
      "A desktop-class operating system simulation in the browser featuring window management, dock physics, and fluid app launch orchestration.",
    video: "https://res.cloudinary.com/difofj393/video/upload/apple-universe_qs2fza.mp4",
    image: "/projects/apple-universe.png",
    link: "https://chay-apple-universe.vercel.app",
    github: "https://github.com/architect4182/apple-universe",
    techStack: ["React 19", "TypeScript", "Framer Motion", "Tailwind CSS"],
    metrics: "60 FPS rendering • 0ms layout shift",
  },
  {
    title: "Bowlz",
    category: "Culinary E-Commerce Platform",
    description:
      "High-conversion e-commerce storefront with instantaneous cart transitions, dynamic calorie calculations, and gesture navigation.",
    video: "https://res.cloudinary.com/difofj393/video/upload/bowlz_h2y1dj.mp4",
    image: "/projects/bowlz.jpg",
    link: "https://bowlz.vercel.app",
    github: "https://github.com/architect4182/bowlz",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    metrics: "100 Lighthouse performance • Sub-second TTFB",
  },
  {
    title: "Figr",
    category: "3D Collectibles Storefront",
    description:
      "Modern design engineering showcase featuring interactive product views, custom cursor physics, and responsive catalog filtering.",
    video: "https://res.cloudinary.com/difofj393/video/upload/figr_ukkxjp.mp4",
    image: "/projects/figr.jpg",
    link: "https://figr-alpha.vercel.app",
    github: "https://github.com/architect4182/figr",
    techStack: ["React", "TypeScript", "Framer Motion", "Lenis"],
    metrics: "Production deployed • Zero external component libraries",
  },
  {
    title: "Apple Travel OS",
    category: "Spatial Travel Planner",
    description:
      "Spatial interface concept exploring fluid flight route scheduling, modular itinerary cards, and micro-interactions.",
    image: "/projects/apple-travel.jpg",
    link: "https://apple-travel-os.vercel.app",
    github: "https://github.com/architect4182/apple-travel-os",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Lucide"],
    metrics: "Fully accessible • Responsive touch controls",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[var(--border-color)]">
        <div>
          <span className="caption-3 uppercase tracking-wider text-[var(--text-muted)] block mb-2">
            Selected Work
          </span>
          <h2 className="heading-3 text-[var(--text-primary)]">
            Flagship Engineering Projects
          </h2>
        </div>
        <p className="body-4 text-[var(--text-secondary)] max-w-md">
          Live production deployments paired with open-source repositories to inspect code quality, architecture patterns, and component design.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: baseEase }}
            /* B3 Nested radius: outer card rounded-2xl (16px), gap/padding 12px -> inner rounded-lg (8px) */
            className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3 flex flex-col justify-between group hover:border-[var(--border-strong)] transition-colors duration-300"
          >
            {/* Visual Media Container */}
            <div className="relative rounded-lg overflow-hidden bg-[var(--bg-card-subtle)] border border-[var(--border-color)] aspect-video mb-4">
              {project.video ? (
                <ProjectVideo src={project.video} poster={project.image} />
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              ) : null}
            </div>

            {/* Content Container */}
            <div className="px-2 pb-2 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="caption-4 text-[var(--text-muted)] font-mono-numbers">
                    {project.category}
                  </span>
                  <span className="caption-4 px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--border-color)]">
                    {project.metrics}
                  </span>
                </div>

                <h3 className="heading-5 text-[var(--text-primary)] mb-2">
                  {project.title}
                </h3>

                <p className="body-5 text-[var(--text-secondary)] mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="caption-5 px-2 py-1 rounded bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)] font-mono-numbers"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 pt-3 border-t border-[var(--border-color)]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sm"
                  style={{
                    backgroundColor: "var(--accent-button-bg)",
                    color: "var(--accent-button-text)",
                  }}
                >
                  Live demo
                  <span className="ml-1">↗</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sm border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-strong)]"
                >
                  Inspect code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
