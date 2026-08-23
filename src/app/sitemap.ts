import type { MetadataRoute } from "next";
import { SITE_URL, NAV_ITEMS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...NAV_ITEMS.map((item) => ({
      url: `${SITE_URL}${item.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: item.href === "/contact" ? 0.9 : 0.8,
    })),
  ];
}
