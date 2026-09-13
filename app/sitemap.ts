// ============================================================================
// Archivo: app/sitemap.ts
// Entorno: Next.js Metadata Route
// Dependencias: next, lib/constants, lib/env
// ============================================================================

import type { MetadataRoute } from "next";
import { agentPages } from "@/lib/constants";
import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: env.NEXT_PUBLIC_SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...agentPages.map((page) => ({
      url: `${env.NEXT_PUBLIC_SITE_URL}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
