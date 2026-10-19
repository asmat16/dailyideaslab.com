import type { MetadataRoute } from "next";
import { ideas } from "@/lib/ideas";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-19T00:00:00Z");

  return [
    { url: "https://dailyideaslab.com", lastModified },
    { url: "https://dailyideaslab.com/ideas", lastModified },
    { url: "https://dailyideaslab.com/about", lastModified },
    ...ideas.map((idea) => ({
      url: `https://dailyideaslab.com/ideas/${idea.slug}`,
      lastModified: new Date(`${idea.date}T00:00:00Z`),
    })),
  ];
}
