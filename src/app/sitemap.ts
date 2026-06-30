import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://airforceteam.com";
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    // Core pages
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/flight-club`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Residential
    { url: `${baseUrl}/residential`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/residential/hvac`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/residential/plumbing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/residential/electrical`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/residential/roofing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/residential/indoor-air-quality`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/residential/ductwork`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Commercial
    { url: `${baseUrl}/commercial`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    // End Markets
    { url: `${baseUrl}/commercial/affordable-housing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/multifamily`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/new-build-homes`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/new-build-apartments`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/retail-buildouts`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/office-buildings`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/warehouses`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/hospitals`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/data-centers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Commercial Services
    { url: `${baseUrl}/commercial/mechanical-systems`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/rtus-split-systems`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/ductwork-buildout`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/ductwork-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/value-engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/electrical`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/plumbing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial/roofing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // New pages
    { url: `${baseUrl}/residential/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/residential/duct-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/residential/biennial-service`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/photos`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },

    // Blog
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...BLOG_POSTS.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return pages;
}
