import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Ruler } from "lucide-react";
import { games, getGameBySlug } from "@/lib/games";
import { GameThumb } from "@/components/games/game-thumb";
import { WhatsAppCtaButton } from "@/components/whatsapp/whatsapp-cta-button";

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
  return {
    title: game.name,
    description: `${game.desc} Medidas: ${game.measurements}. Alquiler de ${game.name} para fiestas y eventos en zona oeste del GBA — consultá disponibilidad y precio por WhatsApp.`,
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

  return (
    <main className="flex-1 px-4 pt-28 pb-20 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/juegos"
          className="mb-7 inline-flex items-center gap-1.5 text-sm font-bold text-foreground hover:text-primary-deep"
        >
          ← Volver al catálogo
        </Link>
        <div className="grid gap-7">
          <div className="mx-auto w-full max-w-lg overflow-hidden rounded-3xl">
            <GameThumb name={game.name} index={games.findIndex((g) => g.slug === game.slug)} aspect="video" />
          </div>
          <div>
            <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-bold tracking-wide text-secondary-deep uppercase">
              {game.category}
            </span>
            <h1 className="mb-3.5 font-heading text-3xl font-extrabold sm:text-4xl lg:text-[42px]">{game.name}</h1>
            <p className="mb-4 max-w-xl text-[17px] leading-relaxed text-muted-foreground">{game.desc}</p>
            <p className="mb-6 flex items-center gap-1.5 text-sm font-medium text-foreground/70">
              <Ruler className="size-4" />
              Medidas: {game.measurements}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-brand-yellow px-4.5 py-2 text-sm font-bold text-foreground">
                Consultar precio
              </span>
              <WhatsAppCtaButton defaultGames={[game.name]}>Consultar disponibilidad</WhatsAppCtaButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
