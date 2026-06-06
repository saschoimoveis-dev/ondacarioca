import type { MetadataRoute } from "next";
import { imoveis } from "@/data/imoveis";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/lancamentos"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    ...imoveis.map((imovel) => ({
      url: absoluteUrl(imovel.seo.canonicalPath),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9
    }))
  ];
}
