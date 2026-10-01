import type { Metadata } from "next";
import { PageHeroBand } from "@/components/hero/page-hero-band";
import { GamesCatalog } from "@/components/games/games-catalog";
import { WhatsAppCtaBand } from "@/components/cta/whatsapp-cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { catalogJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Juegos para alquilar: inflable, metegol, pool y más",
  description:
    "Catálogo de juegos para alquilar en tu fiesta o evento en Zona Oeste del GBA: castillo inflable, metegol, pool, beer pong, yenga gigante y penta tejo. Precios por 6 horas.",
  alternates: { canonical: "/juegos" },
};

export default function CatalogoPage() {
  return (
    <main className="flex-1">
      <JsonLd data={catalogJsonLd()} />
      <PageHeroBand
        title="Nuestros juegos"
        subtitle="Seis opciones para animar cualquier evento, con o sin lluvia. Precios de referencia por 6 horas de alquiler."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-12">
        <GamesCatalog />
      </section>
      <WhatsAppCtaBand heading="¿No sabés cuál elegir?" buttonLabel="Consultanos por WhatsApp, te ayudamos a decidir" />
    </main>
  );
}
