export interface Project {
  title: string;
  category: string;
  filterCategories: string[];
  video?: string;
  image: string;
  link: string;
  github: string;
  techStack?: string;
  featured?: boolean;
}

export const allProjects: Project[] = [
  {
    title: "Apple Universe",
    category: "Next-Gen Apple Universe OS",
    filterCategories: ["UI/UX", "Products", "Motion Design"],
    video: "https://res.cloudinary.com/difofj393/video/upload/apple-universe_qs2fza.mp4",
    image: "/projects/apple-universe.png",
    link: "https://apple-universe-beryl.vercel.app/",
    github: "https://github.com/architect4182/apple-universe",
    techStack: "React • TypeScript • UI/UX • Motion Design",
    featured: true
  },
  {
    title: "Bowlz",
    category: "An E-commerce for Smoothie Bowls",
    filterCategories: ["Products", "UI/UX", "Motion Design"],
    video: "https://res.cloudinary.com/difofj393/video/upload/bowlz_h2y1dj.mp4",
    image: "/projects/bowlz.jpg",
    link: "https://bowlz.vercel.app",
    github: "https://github.com/architect4182/bowlz",
    techStack: "Next.js • TypeScript • Motion Design",
    featured: true
  },
  {
    title: "Figr",
    category: "An E-commerce for 3D figures",
    filterCategories: ["UI/UX", "Motion Design", "Products"],
    video: "https://res.cloudinary.com/difofj393/video/upload/figr_ukkxjp.mp4",
    image: "/projects/figr.jpg",
    link: "https://figr-rho.vercel.app/",
    github: "https://github.com/architect4182/figr",
    techStack: "TypeScript • React • Motion Design",
    featured: false
  },
  {
    title: "Apple Travel OS",
    category: "Next-Gen Travel Operating System",
    filterCategories: ["UI/UX"],
    image: "/projects/apple-travel.jpg",
    link: "https://apple-travel-os.vercel.app",
    github: "https://github.com/architect4182/apple-travel-os",
    techStack: "Next.js • TypeScript • Framer Motion",
    featured: false
  },
  {
    title: "Velora",
    category: "Premium E-Commerce Chocolate",
    filterCategories: ["UI/UX", "Motion Design", "Products"],
    video: "https://res.cloudinary.com/difofj393/video/upload/velora_hiathz.mp4",
    image: "/projects/velora.jpg",
    link: "https://velora-beryl-gamma.vercel.app",
    github: "https://github.com/architect4182/velora",
    techStack: "React • TypeScript • Tailwind CSS • Vite",
    featured: false
  },
  {
    title: "Moments OS",
    category: "Premium Memory & Journal Platform",
    filterCategories: ["UI/UX", "Products"],
    image: "/projects/moments.jpg",
    link: "https://moments-os.vercel.app",
    github: "https://github.com/architect4182/moments-os",
    techStack: "React • Cloudinary • AI Journal",
    featured: false
  },
  {
    title: "Lumora",
    category: "Cinematic Hero Interface",
    filterCategories: ["UI/UX", "Motion Design"],
    video: "https://res.cloudinary.com/difofj393/video/upload/lumora_lojofc.mp4",
    image: "/projects/lumora.jpg",
    link: "https://lumora-sage.vercel.app",
    github: "https://github.com/architect4182/lumora",
    techStack: "Next.js • TypeScript • Framer Motion",
    featured: false
  },
  {
    title: "Vanguard",
    category: "Modern Web Application & Operations Platform",
    filterCategories: ["UI/UX", "Motion Design", "Data Analytics"],
    video: "https://res.cloudinary.com/difofj393/video/upload/vanguard_ri94cc.mp4",
    image: "/projects/vanguard.png",
    link: "https://vanguard-kappa-three.vercel.app/",
    github: "https://github.com/architect4182/vanguard",
    techStack: "Next.js • TypeScript",
    featured: false
  },
  {
    title: "MaisonVell",
    category: "Luxury Fashion & 3D Interactive Runway",
    filterCategories: ["UI/UX", "Motion Design", "Products"],
    image: "/projects/maison-vell.svg",
    link: "https://maison-vell-seven.vercel.app",
    github: "https://github.com/architect4182/MaisonVell",
    techStack: "Next.js • TypeScript • 3D Experience • Tailwind CSS",
    featured: false
  },
  {
    title: "MythAtlas",
    category: "Archival 3D Creature Field Guide",
    filterCategories: ["Motion Design", "UI/UX"],
    image: "/projects/myth-atlas.svg",
    link: "https://myth-atlas-chi.vercel.app/",
    github: "https://github.com/architect4182/MythAtlas",
    techStack: "Three.js • HTML5 • WebGL Kinematics",
    featured: false
  },
  {
    title: "MyWealth",
    category: "Real-Time Wealth & Investment Portfolio Dashboard",
    filterCategories: ["RealTime"],
    image: "/projects/mywealth.png",
    link: "https://my-wealth-phi.vercel.app",
    github: "https://github.com/architect4182/MyWealth",
    techStack: "Next.js • TypeScript • Supabase • Analytics",
    featured: false
  },
  {
    title: "Planets",
    category: "Interactive Celestial & Solar System Explorer",
    filterCategories: ["Motion Design", "UI/UX"],
    image: "/projects/planets.svg",
    link: "https://planets-two-dun.vercel.app/",
    github: "https://github.com/architect4182/Planets",
    techStack: "JavaScript • HTML5 • Data Visualizations",
    featured: false
  },
  {
    title: "POP:ZERO",
    category: "Interactive 3D Soda Experience",
    filterCategories: ["Motion Design", "UI/UX"],
    image: "/projects/popzero.jpg",
    link: "https://popzero.vercel.app",
    github: "https://github.com/architect4182/popZERO",
    techStack: "GSAP • Three.js • WebGL • HTML5",
    featured: false
  },
  {
    title: "snapiq",
    category: "Creator Marketplace for Short-Form Video",
    filterCategories: ["Products", "UI/UX"],
    image: "/projects/snapiq.svg",
    link: "https://snapiq-five.vercel.app",
    github: "https://github.com/architect4182/snapiq",
    techStack: "Next.js 16 • TypeScript • Marketplace",
    featured: false
  },
  {
    title: "SynapseRoof",
    category: "Architectural Solar Energy Brand Platform",
    filterCategories: ["UI/UX", "Products"],
    image: "/projects/synapse-roof.svg",
    link: "https://synapse-roof.vercel.app",
    github: "https://github.com/architect4182/SynapseRoof",
    techStack: "Next.js • TypeScript • Tailwind CSS",
    featured: false
  },
  {
    title: "TanaCamps",
    category: "Wilderness & Campsite Discovery Platform",
    filterCategories: ["UI/UX", "Products"],
    image: "/projects/tanacamps.jpg",
    link: "https://tana-camps.vercel.app",
    github: "https://github.com/architect4182/TanaCamps",
    techStack: "Next.js • JavaScript • Travel UX",
    featured: false
  },
  {
    title: "The HIVE",
    category: "Scroll-Driven 3D Kinematics Experience",
    filterCategories: ["Motion Design", "UI/UX"],
    image: "/projects/the-hive.png",
    link: "https://the-hive-kohl.vercel.app",
    github: "https://github.com/architect4182/theHIVE",
    techStack: "Three.js • WebGL • Kinematics • CSS3",
    featured: false
  }
];

export const displayedProjects: Project[] = allProjects.filter(p => p.featured);
