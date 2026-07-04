"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import PremiumButton from "./PremiumButton";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="navbar"
    >
      <div className="logo">Chaithanya.</div>
      <nav className="nav-links">
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link href="/#about">About</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/projects" className={pathname === "/projects" ? "active" : ""}>
          Projects
        </Link>
      </nav>
      <div className="nav-cta">
        <PremiumButton href="/#contact" ariaLabel="Get in touch">
          Get in touch
        </PremiumButton>
      </div>
    </motion.header>
  );
}
