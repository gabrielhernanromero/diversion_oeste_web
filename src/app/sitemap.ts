import type { MetadataRoute } from "next";
import { games } from "@/lib/games";
import { SITE_URL } from "@/lib/seo";

const STATIC_ROUTES = ["", "/juegos", "/armar-combo", "/preguntas-frecuentes", "/contacto"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const gameEntries: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${SITE_URL}/juegos/${game.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [`${SITE_URL}${game.image}`],
  }));

  return [...staticEntries, ...gameEntries];
}
