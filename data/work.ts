import type { StaticImageData } from "next/image";
import atlasProjectImage from "@/assets/Atlas-Project.png";
import iteteroAppImage from "@/assets/IteteroApp.png";

export type WorkLinks = {
  website: string | null;
  android: string | null;
  ios: string | null;
};

type WorkBase = {
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  year: string | null;
  image: StaticImageData | string;
  featured: boolean;
  type: "app" | "website";
  links: WorkLinks;
};

export type WorkProject = WorkBase;

export const work: WorkProject[] = [
  {
    slug: "itetero-app",
    title: "Itetero App",
    client: "Improved Hub",
    category: "Mobile Application",
    description:
      "Limitify collaborated with Improved Hub to build the mobile app, contributing to both frontend and backend work alongside the existing Improved Hub engineering team.",
    type: "app",
    year: "2025",
    image: iteteroAppImage,
    featured: true,
    links: {
      website: null,
      android: "https://play.google.com/store/apps/details?id=com.dany.itetero&hl=en&pli=1",
      ios: "https://apps.apple.com/us/app/itetero/id6748688317",
    },
  },
  {
    slug: "atlas",
    title: "Atlas",
    client: "Limitify",
    category: "School Management Platform",
    description:
      "A school management platform connecting schools, teachers, students, and families through one connected experience.",
    type: "app",
    year: "2026",
    image: atlasProjectImage,
    featured: false,
    links: {
      website: "https://atlas.limitify.rw",
      android: null,
      ios: null,
    },
  },
];
