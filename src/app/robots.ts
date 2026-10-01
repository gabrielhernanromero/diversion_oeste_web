import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Crawlers de buscadores con IA, permitidos de forma explícita: que la marca aparezca bien
// descripta en ChatGPT, Gemini, Claude y Perplexity depende de que puedan leer el sitio.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Google-Extended",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api/"] },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: ["/admin", "/api/"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
