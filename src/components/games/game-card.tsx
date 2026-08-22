"use client";

import Link from "next/link";
import { Sun } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GameThumb } from "./game-thumb";
import { WhatsAppCtaButton } from "@/components/whatsapp/whatsapp-cta-button";
import type { Game } from "@/lib/games";

type GameCardProps = {
  game: Game;
  index: number;
  variant?: "preview" | "catalog";
};

export function GameCard({ game, index, variant = "preview" }: GameCardProps) {
  return (
    <Card className="relative h-full gap-0 overflow-hidden rounded-3xl py-0 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-foreground/10">
      {/* Link "estirado": cubre toda la card por debajo del botón de WhatsApp (z-20) en vez de
          envolverlo, para no anidar un <button> dentro de un <a> (HTML inválido y poco confiable
          para bloquear la navegación al abrir el popup). */}
      <Link href={`/juegos/${game.slug}`} className="absolute inset-0 z-10" aria-label={`Ver ${game.name}`} />
      <GameThumb name={game.name} image={game.image} index={index} />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex min-h-14 items-center justify-between gap-2">
          <h3 className="font-heading text-lg font-bold">{game.name}</h3>
          {/* La categoría solo se marca para "Exterior" — es la excepción (1 de 6 juegos), así
              que resaltarla dice más que repetir "Interior" en el resto de las cards. */}
          {variant === "catalog" && game.category === "Exterior" && (
            <Badge className="shrink-0 gap-1 bg-brand-yellow/20 text-[11px] tracking-wide text-[#8a6600] uppercase">
              <Sun className="size-3" />
              Exterior
            </Badge>
          )}
        </div>
        <p className="flex-1 text-sm text-muted-foreground">{game.desc}</p>

        {variant === "preview" ? (
          <span className="mt-1 text-sm font-bold text-primary-deep">Consultar disponibilidad →</span>
        ) : (
          <WhatsAppCtaButton
            defaultGames={[game.name]}
            className="relative z-20 mt-1 w-full justify-center gap-1.5 rounded-xl px-4 py-3 text-sm"
          >
            Consultar disponibilidad
          </WhatsAppCtaButton>
        )}
      </div>
    </Card>
  );
}
