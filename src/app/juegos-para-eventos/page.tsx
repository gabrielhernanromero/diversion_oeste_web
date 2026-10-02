import type { Metadata } from "next";
import Link from "next/link";
import { PageHeroBand } from "@/components/hero/page-hero-band";
import { GamesGrid } from "@/components/games/games-grid";
import { WhatsAppCtaBand } from "@/components/cta/whatsapp-cta-band";
import { EVENT_TYPES, getGamesForEvent, type EventType } from "@/lib/games";

export const metadata: Metadata = {
  title: "Qué juegos alquilar según tu evento",
  description:
    "Guía para elegir juegos para cumpleaños infantiles, fiestas de 15, eventos de empresa, kermeses escolares y reuniones familiares en Zona Oeste del GBA.",
  alternates: { canonical: "/juegos-para-eventos" },
};

const EVENTS = Object.keys(EVENT_TYPES) as EventType[];

export default function JuegosParaEventosPage() {
  return (
    <main className="flex-1">
      <PageHeroBand
        title="Qué juegos alquilar según tu evento"
        subtitle="Una guía rápida para elegir los juegos que mejor funcionan en cada tipo de fiesta."
      />

      <nav aria-label="Tipos de evento" className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-12">
        <ul className="flex flex-wrap justify-center gap-2.5">
          {EVENTS.map((event) => (
            <li key={event}>
              <a
                href={`#${event}`}
                className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary-deep transition-colors hover:bg-primary/20"
              >
                {EVENT_TYPES[event].label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {EVENTS.map((event) => (
        <section
          key={event}
          id={event}
          aria-labelledby={`${event}-heading`}
          className="mx-auto max-w-6xl scroll-mt-28 px-4 py-12 sm:px-6 sm:py-16 lg:px-12"
        >
          <h2
            id={`${event}-heading`}
            className="mb-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Juegos para {EVENT_TYPES[event].label.toLowerCase()}
          </h2>
          <p className="mb-8 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">{EVENT_TYPES[event].intro}</p>
          <GamesGrid games={getGamesForEvent(event)} variant="preview" />
        </section>
      ))}

      <section className="mx-auto max-w-3xl px-4 pb-16 text-center sm:px-6">
        <h2 className="mb-3 font-heading text-2xl font-extrabold">¿Vas a alquilar más de un juego?</h2>
        <p className="mb-5 text-muted-foreground">
          El descuento crece con la cantidad: 12% con 2 juegos y hasta 30% llevando los 6.
        </p>
        <Link
          href="/armar-combo"
          className="inline-block rounded-2xl bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Armá tu combo →
        </Link>
      </section>

      <WhatsAppCtaBand heading="¿No sabés cuál elegir?" buttonLabel="Contanos tu evento por WhatsApp" />
    </main>
  );
}
