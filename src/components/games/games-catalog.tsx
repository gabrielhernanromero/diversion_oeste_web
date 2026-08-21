"use client";

import { useState } from "react";
import { games as allGames, type GameCategory } from "@/lib/games";
import { GamesGrid } from "./games-grid";
import { cn } from "@/lib/utils";

const FILTERS: { key: "todos" | GameCategory; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "Interior", label: "Interior" },
  { key: "Exterior", label: "Exterior" },
];

export function GamesCatalog() {
  const [category, setCategory] = useState<"todos" | GameCategory>("todos");
  const visibleGames = category === "todos" ? allGames : allGames.filter((game) => game.category === category);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap justify-center gap-2.5">
        {FILTERS.map((filter) => {
          const active = category === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setCategory(filter.key)}
              className={cn(
                "rounded-full border-2 px-5 py-2.5 text-sm font-bold transition-colors",
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/15 bg-background text-foreground hover:border-foreground/30"
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
      <GamesGrid games={visibleGames} variant="catalog" />
    </div>
  );
}
