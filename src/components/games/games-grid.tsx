import type { Game } from "@/lib/games";
import { GameCard } from "./game-card";

type GamesGridProps = {
  games: Game[];
  variant?: "preview" | "catalog";
};

export function GamesGrid({ games, variant = "preview" }: GamesGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
      {games.map((game, index) => (
        <GameCard key={game.slug} game={game} index={index} variant={variant} />
      ))}
    </div>
  );
}
