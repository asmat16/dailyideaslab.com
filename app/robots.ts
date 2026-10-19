import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://dailyideaslab.com/sitemap.xml",
    host: "https://dailyideaslab.com",
  };
}
