export type GameCategory = "Interior" | "Exterior";

export type Game = {
  slug: string;
  name: string;
  category: GameCategory;
  desc: string;
  measurements: string;
  image: string;
};

export const games: Game[] = [
  {
    slug: "metegol-estadio",
    name: "Metegol Estadio",
    category: "Interior",
    desc: "Clásico infaltable para picar entre amigos y familia.",
    measurements: "1,40 x 1,02 x 0,82 m (tamaño profesional)",
    image: "/games/metegol-estadio.jpg",
  },
  {
    slug: "beer-pong",
    name: "Beer Pong",
    category: "Interior",
    desc: "Ideal para fiestas de 15 y eventos de mayores.",
    measurements: "0,60 x 1,83 m",
    image: "/games/beer-pong.jpg",
  },
  {
    slug: "pool",
    name: "Pool",
    category: "Interior",
    desc: "Mesa de pool para animar cualquier salón o patio.",
    measurements: "1,85 x 1,15 m — paño y bolas importadas",
    image: "/games/pool.jpg",
  },
  {
    slug: "yenga-gigante",
    name: "Yenga Gigante",
    category: "Interior",
    desc: "El juego de torres a tamaño real, tensión asegurada.",
    measurements: "67 cm",
    image: "/games/yenga-gigante.jpg",
  },
  {
    slug: "castillo-inflable",
    name: "Castillo Inflable",
    category: "Exterior",
    desc: "El infaltable de toda fiesta, con nene saltando de alegría incluido.",
    measurements: "3 x 3 m",
    image: "/games/castillo-inflable.jpg",
  },
  {
    slug: "penta-tejo",
    name: "Penta Tejo",
    category: "Interior",
    desc: "El clásico asado y previa, ahora en versión evento.",
    measurements: "1,60 m de diámetro",
    image: "/games/penta-tejo.jpg",
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}
