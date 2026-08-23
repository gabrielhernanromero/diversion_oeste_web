"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Game } from "@/lib/games";
import { getDescuentoPorCantidad, calcularPrecioFinal } from "@/lib/combo";
import { WhatsAppCtaButton } from "@/components/whatsapp/whatsapp-cta-button";

type ComboBuilderProps = {
  games: Game[];
};

export function ComboBuilder({ games }: ComboBuilderProps) {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(slug: string) {
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  const selectedGames = useMemo(() => games.filter((game) => selected.includes(game.slug)), [games, selected]);
  const cantidad = selectedGames.length;
  const precioLista = selectedGames.reduce((sum, game) => sum + game.precio, 0);
  const descuento = getDescuentoPorCantidad(cantidad);
  const precioFinal = calcularPrecioFinal(precioLista, descuento);

  const comboMessage =
    cantidad > 0
      ? `Combo armado: ${selectedGames.map((game) => game.name).join(" + ")} — Precio: $${precioFinal}${
          descuento > 0 ? ` (con ${descuento}% de descuento)` : ""
        }.`
      : undefined;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
      <div>
        <h2 className="sr-only">Elegí tus juegos</h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {games.map((game) => {
            const active = selected.includes(game.slug);
            return (
              <button
                key={game.slug}
                type="button"
                aria-pressed={active}
                onClick={() => toggle(game.slug)}
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-xl border-2 text-left transition-colors duration-200",
                  active ? "border-secondary" : "border-transparent hover:border-secondary/30"
                )}
              >
                {active && (
                  <span className="absolute top-2 right-2 z-10 flex size-5 items-center justify-center rounded-full bg-background text-secondary">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                )}
                <div className="relative aspect-[4/3] w-full bg-background">
                  <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    sizes="(min-width: 1024px) 240px, 45vw"
                    className="object-contain p-3"
                  />
                </div>
                <div className={cn("flex flex-col gap-0.5 px-3.5 py-3", active ? "bg-secondary text-secondary-foreground" : "bg-muted text-foreground")}>
                  <span className="font-heading text-base font-bold">{game.name}</span>
                  <span className={cn("text-sm font-semibold", active ? "text-secondary-foreground" : "text-muted-foreground")}>
                    ${game.precio} <span className="text-xs font-normal opacity-75">/ 6 hs</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-3xl bg-foreground p-6 text-background lg:sticky lg:top-28">
        {cantidad === 0 ? (
          <p className="text-base font-medium text-background/80">Elegí al menos un juego para ver tu precio.</p>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2 text-sm text-background/70">
              <span>
                {cantidad} {cantidad === 1 ? "juego elegido" : "juegos elegidos"}
              </span>
              {descuento > 0 && (
                <span className="rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-foreground">
                  {descuento}% OFF
                </span>
              )}
            </div>
            <div>
              {descuento > 0 && <p className="text-sm text-background/50 line-through">${precioLista}</p>}
              <p className="font-heading text-4xl font-extrabold text-primary">
                ${precioFinal} <span className="text-base font-semibold text-background/60">/ 6 hs</span>
              </p>
            </div>
            <WhatsAppCtaButton
              variant="default"
              defaultGames={selectedGames.map((game) => game.name)}
              defaultMessage={comboMessage}
              className="w-full justify-center"
            >
              Consultar este combo por WhatsApp
            </WhatsAppCtaButton>
          </div>
        )}
      </div>
    </div>
  );
}
