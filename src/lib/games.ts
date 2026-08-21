export type GameCategory = "Interior" | "Exterior";

export type Game = {
  slug: string;
  name: string;
  category: GameCategory;
  desc: string;
};

export const games: Game[] = [
  {
    slug: "metegol-estadio",
    name: "Metegol Estadio",
    category: "Interior",
    desc: "Clásico infaltable para picar entre amigos y familia.",
  },
  {
    slug: "beer-pong",
    name: "Beer Pong",
    category: "Interior",
    desc: "Ideal para fiestas de 15 y eventos de mayores.",
  },
  {
    slug: "pool",
    name: "Pool",
    category: "Interior",
    desc: "Mesa de pool para animar cualquier salón o patio.",
  },
  {
    slug: "yenga-gigante",
    name: "Yenga Gigante",
    category: "Interior",
    desc: "El juego de torres a tamaño real, tensión asegurada.",
  },
  {
    slug: "castillo-inflable",
    name: "Castillo Inflable",
    category: "Exterior",
    desc: "El infaltable de toda fiesta, con nene saltando de alegría incluido.",
  },
  {
    slug: "penta-tejo",
    name: "Penta Tejo",
    category: "Interior",
    desc: "El clásico asado y previa, ahora en versión evento.",
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}
