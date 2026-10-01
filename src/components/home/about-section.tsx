import { CalendarHeart, MapPin, Truck } from "lucide-react";
import { BUSINESS } from "@/lib/seo";

const FACTS = [
  {
    icon: CalendarHeart,
    title: "Para todo tipo de evento",
    desc: "Cumpleaños infantiles, fiestas de 15, eventos de empresa y kermeses escolares.",
  },
  {
    icon: MapPin,
    title: "Base en Zona Oeste",
    desc: "Morón, Castelar, Haedo, Ituzaingó, Ramos Mejía y alrededores. También CABA y resto del GBA.",
  },
  {
    icon: Truck,
    title: "Todo incluido",
    desc: "Llevamos, armamos y retiramos con vehículo propio. Alquiler por 6 horas, ampliable.",
  },
];

/**
 * Bloque "de entidad": define la marca en texto plano con la misma frase que el JSON-LD y
 * llms.txt. Es lo que leen los buscadores con IA (ChatGPT, Gemini, Perplexity, Claude) para
 * responder "¿qué es Diversión Oeste?", así que conviene que sea explícito y no solo visual.
 */
export function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
        <div>
          <span className="mb-3.5 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold tracking-wide text-secondary-deep uppercase">
            Quiénes somos
          </span>
          <h2 id="about-heading" className="mb-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Alquiler de juegos para fiestas en Zona Oeste
          </h2>
          <p className="max-w-xl text-[17px] leading-relaxed text-muted-foreground">{BUSINESS.summary}</p>
        </div>
        <ul className="grid gap-4">
          {FACTS.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="flex gap-4 rounded-3xl border border-foreground/[0.06] bg-card p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary-deep">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
