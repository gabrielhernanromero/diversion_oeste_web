import { games, type Game } from "@/lib/games";
import { faqs } from "@/lib/faqs";
import { LOCALITIES } from "@/components/coverage/coverage-marquee";

// Fallback al dominio real (no a localhost): si la variable falta en Vercel, las canónicas,
// el sitemap y el JSON-LD siguen apuntando a producción en vez de romper el SEO en silencio.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.diversionoeste.com").replace(/\/$/, "");

export const BUSINESS = {
  name: "Diversión Oeste",
  legalName: "Diversión Oeste",
  domain: "diversionoeste.com",
  instagram: "https://www.instagram.com/diversionoesteoficial",
  // Frase "de entidad": la misma definición en meta description, JSON-LD, llms.txt y el texto
  // del Home, para que buscadores y modelos de IA describan la marca de forma consistente.
  summary:
    "Diversión Oeste es una empresa de alquiler de juegos para fiestas y eventos con base en la zona oeste del Gran Buenos Aires (Argentina). Alquila metegol, pool, beer pong, yenga gigante, penta tejo y castillo inflable para cumpleaños, fiestas de 15, eventos de empresa y kermeses escolares, con entrega, armado y retiro incluidos.",
  region: "Zona Oeste del Gran Buenos Aires",
};

export function absoluteUrl(path = ""): string {
  return `${SITE_URL}${path}`;
}

function telephone(): string | undefined {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  return number ? `+${number}` : undefined;
}

export function organizationJsonLd() {
  const phone = telephone();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "EntertainmentBusiness"],
        "@id": absoluteUrl("/#business"),
        name: BUSINESS.name,
        alternateName: ["Diversion Oeste", "diversionoeste.com"],
        url: absoluteUrl("/"),
        logo: absoluteUrl("/logo-icon.svg"),
        image: absoluteUrl("/hero-fiesta.jpg"),
        description: BUSINESS.summary,
        ...(phone && { telephone: phone }),
        sameAs: [BUSINESS.instagram],
        address: {
          "@type": "PostalAddress",
          addressRegion: "Provincia de Buenos Aires",
          addressCountry: "AR",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Zona Oeste del Gran Buenos Aires" },
          { "@type": "AdministrativeArea", name: "Gran Buenos Aires" },
          { "@type": "City", name: "Ciudad Autónoma de Buenos Aires" },
          ...LOCALITIES.map((name) => ({ "@type": "City", name })),
        ],
        knowsAbout: [
          "Alquiler de juegos para fiestas",
          "Alquiler de castillo inflable",
          "Alquiler de metegol",
          "Alquiler de mesa de pool",
          "Juegos para cumpleaños infantiles",
          "Juegos para fiestas de 15",
          "Juegos para eventos de empresa",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Juegos en alquiler",
          itemListElement: games.map((game) => ({
            "@type": "Offer",
            itemOffered: { "@id": absoluteUrl(`/juegos/${game.slug}#service`) },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: absoluteUrl("/"),
        name: BUSINESS.name,
        inLanguage: "es-AR",
        publisher: { "@id": absoluteUrl("/#business") },
      },
    ],
  };
}

export function gameJsonLd(game: Game) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": absoluteUrl(`/juegos/${game.slug}#service`),
        name: `Alquiler de ${game.name}`,
        serviceType: "Alquiler de juegos para fiestas y eventos",
        description: `${game.desc} Medidas: ${game.measurements}. Alquiler por 6 horas con entrega, armado y retiro.`,
        image: absoluteUrl(game.image),
        url: absoluteUrl(`/juegos/${game.slug}`),
        provider: { "@id": absoluteUrl("/#business") },
        areaServed: BUSINESS.region,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Juegos", item: absoluteUrl("/juegos") },
          { "@type": "ListItem", position: 3, name: game.name, item: absoluteUrl(`/juegos/${game.slug}`) },
        ],
      },
    ],
  };
}

export function catalogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Juegos en alquiler — Diversión Oeste",
    itemListElement: games.map((game, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: game.name,
      url: absoluteUrl(`/juegos/${game.slug}`),
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
