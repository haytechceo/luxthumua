import type { MetadataRoute } from "next"
import { detailServices } from "@/data/services"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luxthumua.com"

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/thu-mua-dien-thoai`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/thu-mua-laptop`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lien-he`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Dynamic service pages
  const servicePages = detailServices.map((service) => ({
    url: `${baseUrl}/dich-vu/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...servicePages]
}
