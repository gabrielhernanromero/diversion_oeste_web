import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, Ruler } from "lucide-react";
import { EVENT_TYPES, games, getGameBySlug } from "@/lib/games";
import { getFaqsForGame } from "@/lib/faqs";
import { GameThumb } from "@/components/games/game-thumb";
import { WhatsAppCtaButton } from "@/components/whatsapp/whatsapp-cta-button";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { GamesGrid } from "@/components/games/games-grid";
import { gameJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};
  const title = `Alquiler de ${game.name} en Zona Oeste`;
  const description = `Alquiler de ${game.name} para cumpleaños, fiestas y eventos en Zona Oeste del GBA. ${game.desc} Medidas: ${game.measurements}. Entrega y armado incluidos.`;
  const path = `/juegos/${game.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: [{ url: game.image, alt: game.name }] },
  };
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const idealFor = game.idealFor.map((event) => EVENT_TYPES[event].label);
  const gameFaqs = getFaqsForGame(game.slug);
  const otherGames = games.filter((g) => g.slug !== game.slug).slice(0, 3);
  const included = [
    "Entrega, armado y retiro con vehículo propio",
    "6 horas de alquiler, con opción de sumar horas",
    "Reserva con seña del 50%, el resto el día del evento",
    game.category === "Exterior"
      ? "Si llueve, se reprograma o se cambia por un juego de interior"
      : "Juego de interior: no depende del clima",
  ];

  return (
    <main className="flex-1 px-4 pt-28 pb-20 sm:px-6 sm:pt-32">
      <JsonLd data={gameJsonLd(game)} />
      <div className="mx-auto max-w-3xl">
        <Link
          href="/juegos"
          className="mb-7 inline-flex items-center gap-1.5 text-sm font-bold text-foreground hover:text-primary-deep"
        >
          ← Volver al catálogo
        </Link>
        <div className="grid gap-7">
          <div className="mx-auto w-full max-w-lg overflow-hidden rounded-3xl">
            <GameThumb
              name={game.name}
              image={game.image}
              index={games.findIndex((g) => g.slug === game.slug)}
              sizes="(min-width: 640px) 512px, 90vw"
              preload
            />
          </div>
          <div>
            <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-bold tracking-wide text-secondary-deep uppercase">
              {game.category}
            </span>
            <h1 className="mb-3.5 font-heading text-3xl font-extrabold sm:text-4xl lg:text-[42px]">
              {game.name}
              <span className="sr-only"> — alquiler en Zona Oeste</span>
            </h1>
            <p className="mb-4 max-w-xl text-[17px] leading-relaxed text-muted-foreground">{game.desc}</p>
            <p className="mb-6 flex items-center gap-1.5 text-sm font-medium text-foreground/70">
              <Ruler className="size-4" />
              Medidas: {game.measurements}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-brand-yellow px-4.5 py-2 text-sm font-bold text-foreground">
                ${game.precio} / 6 hs
              </span>
              <WhatsAppCtaButton defaultGames={[game.name]}>Consultar disponibilidad</WhatsAppCtaButton>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Precio de referencia por 6 horas de alquiler. ¿Necesitás extender el horario? Lo coordinamos por
              WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <section aria-labelledby="ideal-heading" className="rounded-3xl border border-foreground/[0.06] bg-card p-6">
            <h2 id="ideal-heading" className="mb-3 font-heading text-xl font-bold">
              Ideal para
            </h2>
            <ul className="flex flex-wrap gap-2">
              {idealFor.map((label) => (
                <li key={label} className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary-deep">
                  {label}
                </li>
              ))}
            </ul>
            <Link href="/juegos-para-eventos" className="mt-4 inline-block text-sm font-bold text-primary-deep hover:underline">
              Ver qué juegos elegir según tu evento →
            </Link>
          </section>
          <section aria-labelledby="included-heading" className="rounded-3xl border border-foreground/[0.06] bg-card p-6">
            <h2 id="included-heading" className="mb-3 font-heading text-xl font-bold">
              Qué incluye el alquiler
            </h2>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              {included.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-secondary-deep" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="faq-heading" className="mt-12">
          <h2 id="faq-heading" className="mb-5 font-heading text-2xl font-extrabold">
            Preguntas sobre el alquiler de {game.name}
          </h2>
          <FaqAccordion faqs={gameFaqs} group={`faq-${game.slug}`} />
        </section>
      </div>

      <section aria-labelledby="related-heading" className="mx-auto mt-16 max-w-6xl">
        <h2 id="related-heading" className="mb-6 text-center font-heading text-2xl font-extrabold sm:text-3xl">
          Combinalo con otros juegos
        </h2>
        <GamesGrid games={otherGames} variant="preview" />
        <p className="mt-6 text-center">
          <Link href="/armar-combo" className="font-bold text-primary-deep hover:underline">
            Armá tu combo y ahorrá hasta 30% →
          </Link>
        </p>
      </section>
    </main>
  );
}
