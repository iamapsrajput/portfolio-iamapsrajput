import { MetadataRoute } from "next";
import { siteConfig } from "@/config/content";
import { personalProjects } from "@/config/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteConfig.domain}`;

  const routes = [
    "",
    "/projects",
    "/services",
    "/book",
    "/pay",
    "/contact",
    "/privacy",
    "/terms",
    "/refunds",
    "/disclaimer",
    "/security",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = personalProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
