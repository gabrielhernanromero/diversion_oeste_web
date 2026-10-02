export type GameCategory = "Interior" | "Exterior";

export type EventType = "cumpleanos-infantiles" | "fiestas-de-15" | "eventos-de-empresa" | "kermeses-escolares" | "reuniones-familiares";

export const EVENT_TYPES: Record<EventType, { label: string; intro: string }> = {
  "cumpleanos-infantiles": {
    label: "Cumpleaños infantiles",
    intro:
      "El castillo inflable es el protagonista de los cumpleaños infantiles, y se puede combinar con juegos de mesa para que los grandes también tengan su espacio.",
  },
  "fiestas-de-15": {
    label: "Fiestas de 15",
    intro:
      "En las fiestas de 15 funcionan los juegos que arman ronda entre amigos: beer pong, metegol y pool mantienen a todos entretenidos entre baile y baile.",
  },
  "eventos-de-empresa": {
    label: "Eventos de empresa",
    intro:
      "Para after offices, fiestas de fin de año y jornadas de integración, los juegos de mesa rompen el hielo y no necesitan animador.",
  },
  "kermeses-escolares": {
    label: "Kermeses escolares",
    intro:
      "En kermeses y eventos escolares conviene combinar un juego de exterior para los chicos con juegos de mesa que se puedan usar por turnos.",
  },
  "reuniones-familiares": {
    label: "Reuniones familiares",
    intro:
      "Para asados, aniversarios y reuniones en casa, los clásicos de siempre juntan a chicos y grandes en la misma mesa.",
  },
};

export type Game = {
  slug: string;
  name: string;
  category: GameCategory;
  desc: string;
  measurements: string;
  image: string;
  precio: number;
  idealFor: EventType[];
};

export const games: Game[] = [
  {
    slug: "metegol-estadio",
    name: "Metegol Estadio",
    category: "Interior",
    desc: "Clásico infaltable para picar entre amigos y familia.",
    measurements: "1,40 x 1,02 x 0,82 m (tamaño profesional)",
    image: "/games/metegol-estadio.jpg",
    precio: 80,
    idealFor: ["cumpleanos-infantiles", "fiestas-de-15", "eventos-de-empresa", "kermeses-escolares", "reuniones-familiares"],
  },
  {
    slug: "beer-pong",
    name: "Beer Pong",
    category: "Interior",
    desc: "Ideal para fiestas de 15 y eventos de mayores.",
    measurements: "0,60 x 1,83 m",
    image: "/games/beer-pong.jpg",
    precio: 60,
    idealFor: ["fiestas-de-15", "eventos-de-empresa"],
  },
  {
    slug: "pool",
    name: "Pool",
    category: "Interior",
    desc: "Mesa de pool para animar cualquier salón o patio.",
    measurements: "1,85 x 1,15 m — paño y bolas importadas",
    image: "/games/pool.jpg",
    precio: 80,
    idealFor: ["fiestas-de-15", "eventos-de-empresa", "reuniones-familiares"],
  },
  {
    slug: "yenga-gigante",
    name: "Yenga Gigante",
    category: "Interior",
    desc: "El juego de torres a tamaño real, tensión asegurada.",
    measurements: "67 cm",
    image: "/games/yenga-gigante.jpg",
    precio: 30,
    idealFor: ["cumpleanos-infantiles", "eventos-de-empresa", "kermeses-escolares", "reuniones-familiares"],
  },
  {
    slug: "castillo-inflable",
    name: "Castillo Inflable",
    category: "Exterior",
    desc: "El infaltable de toda fiesta, con nene saltando de alegría incluido.",
    measurements: "3 x 3 m",
    image: "/games/castillo-inflable.jpg",
    precio: 90,
    idealFor: ["cumpleanos-infantiles", "kermeses-escolares"],
  },
  {
    slug: "penta-tejo",
    name: "Penta Tejo",
    category: "Interior",
    desc: "El clásico asado y previa, ahora en versión evento.",
    measurements: "1,60 m de diámetro",
    image: "/games/penta-tejo.jpg",
    precio: 80,
    idealFor: ["eventos-de-empresa", "kermeses-escolares", "reuniones-familiares"],
  },
];

export function getGamesForEvent(event: EventType): Game[] {
  return games.filter((game) => game.idealFor.includes(event));
}

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}
