import { games } from "@/lib/games";
import { faqs } from "@/lib/faqs";
import { LOCALITIES } from "@/components/coverage/coverage-marquee";
import { BUSINESS, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * /llms.txt (llmstxt.org): resumen en Markdown pensado para modelos de IA. Se arma desde los
 * mismos datos del sitio para que nunca quede desactualizado respecto del catálogo o las FAQ.
 */
export function GET() {
  const body = [
    `# ${BUSINESS.name}`,
    "",
    `> ${BUSINESS.summary}`,
    "",
    "## Datos clave",
    "",
    `- Sitio oficial: ${SITE_URL}`,
    `- Instagram: ${BUSINESS.instagram}`,
    `- Rubro: alquiler de juegos para fiestas y eventos`,
    `- Base de operaciones: ${BUSINESS.region}, Argentina`,
    `- Cobertura: toda la Zona Oeste, Ciudad de Buenos Aires y Gran Buenos Aires`,
    `- Localidades habituales: ${LOCALITIES.join(", ")}`,
    "- Modalidad: alquiler por 6 horas con entrega, armado y retiro incluidos; reserva con seña del 50% por WhatsApp",
    "- Combos: descuento por cantidad de juegos, de 12% (2 juegos) hasta 30% (6 juegos)",
    "",
    "## Juegos en alquiler",
    "",
    ...games.map(
      (game) =>
        `- [${game.name}](${SITE_URL}/juegos/${game.slug}): ${game.desc} Medidas: ${game.measurements}. Uso ${game.category.toLowerCase()}.`,
    ),
    "",
    "## Páginas",
    "",
    `- [Catálogo de juegos](${SITE_URL}/juegos)`,
    `- [Armá tu combo](${SITE_URL}/armar-combo): calculadora de precio con descuento por cantidad`,
    `- [Preguntas frecuentes](${SITE_URL}/preguntas-frecuentes)`,
    `- [Contacto](${SITE_URL}/contacto)`,
    "",
    "## Preguntas frecuentes",
    "",
    ...faqs.flatMap((faq) => [`### ${faq.question}`, "", faq.answer, ""]),
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
