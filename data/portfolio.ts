import type { StaticImageData } from "next/image";
import iteteroImage from "@/assets/IteteroApp.png";
import atlasImage from "@/assets/Atlas-Project.png";
import type { TechKey } from "@/components/portfolio/tech-icons";

// Portfolio content per team member, keyed by the slug in data/team.ts.
// Everything marked PLACEHOLDER is to be replaced with real CV / project info.

export type Skill = { icon: TechKey };
export type SkillGroup = { group: string; skills: Skill[] };

export type Commit = {
  hash: string;
  period: string;
  title: string;
  org: string;
  place: string;
  points: string[];
  tags: string[];
};

export type PortfolioProject = {
  name: string;
  summary: string;
  stack: string[];
  year: string;
  image?: StaticImageData;
  links?: { label: string; href: string }[];
};

export type Portfolio = {
  slug: string;
  name: string;
  handle: string;
  role: string;
  location: string;
  emails: string[];
  tagline: string;
  /** Short lines shown in the "brain" intro as thoughts. */
  thoughts: string[];
  about: string[];
  languages: string[];
  education: string;
  learning: string[];
  skills: SkillGroup[];
  experience: Commit[];
  projects: PortfolioProject[];
  links: { label: string; href: string }[];
};

export const portfolios: Portfolio[] = [
  {
    slug: "aldrick-kalisa",
    name: "Aldrick KALISA",
    handle: "aldrick",
    role: "Developer & Founder, Limitify",
    location: "Rwanda",
    tagline: "Full stack developer building scalable web and mobile products.",
    thoughts: [
      "why does this work?",
      "what if it didn't need to?",
      "ship it, then make it better",
      "cache it. then cache the cache.",
      "one more refactor…",
    ],
    about: [
      "Founder of Limitify, the software agency where I work as a developer today, building web and mobile products for clients.",
      "With 3+ years of experience, I build scalable web and mobile applications across the stack with TypeScript, NestJS, React and AWS.",
      "I've shipped real products, including Itetero, the UNICEF Rwanda parenting platform launched by the Ministry of Gender and Family Promotion, taken from concept to production in 3 months.",
      "Now studying Software Engineering and heading toward Machine Learning, to build intelligent, data-driven solutions for social impact.",
    ],
    languages: ["English", "French", "Kinyarwanda"],
    education: "BSc (Hons) Software Engineering, African Leadership University",
    learning: ["Software Engineering", "Machine Learning"],
    skills: [
      {
        group: "languages & frontend",
        skills: [
          { icon: "typescript" },
          { icon: "python" },
          { icon: "react" },
          { icon: "nextjs" },
          { icon: "tailwind" },
        ],
      },
      {
        group: "backend & data",
        skills: [
          { icon: "nodejs" },
          { icon: "nestjs" },
          { icon: "postgresql" },
          { icon: "mysql" },
          { icon: "mongodb" },
          { icon: "redis" },
        ],
      },
      {
        group: "cloud & devops",
        skills: [
          { icon: "aws" },
          { icon: "linux" },
          { icon: "docker" },
          { icon: "git" },
        ],
      },
    ],
    experience: [
      {
        hash: "f09a1c2",
        period: "Now",
        title: "Founder & Developer",
        org: "Limitify",
        place: "Kigali, Rwanda",
        points: [
          "Founded Limitify, a software agency building high-quality web applications and digital products for clients.",
          "Work as a developer on the products we ship, including Atlas, a school management platform, and the Itetero mobile app built with Improved Hub.",
        ],
        tags: ["Software agency", "Full stack", "Product"],
      },
      {
        hash: "e41b7a0",
        period: "Apr 2025 — now",
        title: "Full Stack Developer",
        org: "Improved Hub",
        place: "Kigali, Rwanda",
        points: [
          "Built and deployed the full backend for Itetero, a UNICEF Rwanda platform launched in September 2025 that gives Rwandan families parenting and child development resources.",
          "Built the admin dashboard and REST API with React, Node.js, MySQL and Redis; Redis caching improved performance and response times.",
          "Led DevOps end to end: AWS provisioning, CI/CD pipelines and automated production deploys.",
          "Took the platform from concept to launch in 3 months.",
        ],
        tags: ["Node.js", "React", "MySQL", "Redis", "AWS", "CI/CD"],
      },
      {
        hash: "9c02d5f",
        period: "Aug — Nov 2025",
        title: "Mobile Developer (Freelance)",
        org: "Thalia",
        place: "France",
        points: [
          "Designed and built Thalia solo: an AI tour guide app that finds nearby cultural sites and explains them through a chatbot.",
          "React Native app using the OpenAI API and Wikidata, with real-time geolocation for nearby points of interest.",
          "Multilingual voice chat with OpenAI Whisper speech-to-text and automatic language detection.",
          "Delivered in 1 month; now in TestFlight beta.",
        ],
        tags: ["React Native", "OpenAI", "Whisper", "Wikidata"],
      },
      {
        hash: "5d8e3b1",
        period: "Sep 2025",
        title: "5G Communication & Software Engineering",
        org: "Rwanda delegation",
        place: "Wuhan, China",
        points: [
          "Selected for an official Rwanda delegation on a 5G and software development training programme.",
          "Technical site visits to FiberHome and Huawei, with industry experts on network architecture and telecom software.",
        ],
        tags: ["5G", "Networks"],
      },
      {
        hash: "b73f9c4",
        period: "Jan 2024 — Mar 2025",
        title: "Junior Software Developer",
        org: "Improved Hub",
        place: "Kigali, Rwanda",
        points: [
          "Started part-time on the frontend, then grew into backend work toward a full stack role.",
          "Contributed to client projects and internal products across the whole development lifecycle.",
        ],
        tags: ["React", "APIs", "Databases"],
      },
      {
        hash: "2a6c8d9",
        period: "Mar 2025 — now",
        title: "BSc (Hons) Software Engineering",
        org: "African Leadership University",
        place: "Kigali, Rwanda",
        points: [
          "Full stack development, algorithms, data structures and software architecture, with a planned specialisation in Machine Learning and AI.",
        ],
        tags: ["Algorithms", "ML / AI"],
      },
    ],
    projects: [
      {
        name: "itetero",
        year: "2025",
        summary:
          "UNICEF Rwanda's parenting and child development platform, launched by the Ministry of Gender and Family Promotion. I built the backend, admin dashboard and AWS infrastructure.",
        stack: ["Node.js", "React", "MySQL", "Redis", "AWS"],
        image: iteteroImage,
        links: [
          {
            label: "Android",
            href: "https://play.google.com/store/apps/details?id=com.dany.itetero&hl=en&pli=1",
          },
          { label: "iOS", href: "https://apps.apple.com/us/app/itetero/id6748688317" },
        ],
      },
      {
        name: "atlas",
        year: "2026",
        summary:
          "A school management platform connecting schools, teachers, students and families through one connected experience.",
        stack: ["TypeScript", "Web"],
        image: atlasImage,
        links: [{ label: "Visit", href: "https://atlas.limitify.rw" }],
      },
      {
        name: "thalia",
        year: "2025",
        summary:
          "AI-powered tour guide app: discover nearby cultural sites and talk to a multilingual chatbot that explains them in your own language.",
        stack: ["React Native", "OpenAI", "Whisper", "Wikidata"],
        links: [{ label: "Source", href: "https://github.com/limitify-dev/Thalia" }],
      },
      {
        name: "limitify-movies",
        year: "2024",
        summary:
          "A movies web app built while growing from frontend into full stack work.",
        stack: ["React"],
        links: [{ label: "Visit", href: "https://www.limitifymovies.surge.sh" }],
      },
    ],
    emails: ["aldrick@limitify.rw", "aldrick175@gmail.com"],
    links: [
      {
        label: "linkedin",
        href: "https://www.linkedin.com/in/aldrick-kalisa-mpano-273a43397",
      },
      { label: "contact", href: "/contact" },
    ],
  },
];

export function getPortfolio(slug: string) {
  return portfolios.find((p) => p.slug === slug);
}
