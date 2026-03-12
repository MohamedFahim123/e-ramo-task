import type { MetadataRoute } from "next";
import { getLocalizedUrl } from "@/components/shared/config/site";
import { locales } from "@/components/shared/i18n/config";
import { getAppRoutes } from "@/components/shared/seo/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getAppRoutes();
  const now = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: getLocalizedUrl(locale, route),
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    })),
  );
}
