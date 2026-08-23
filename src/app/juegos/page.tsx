import type { Metadata } from "next";
import { PageHeroBand } from "@/components/hero/page-hero-band";
import { GamesCatalog } from "@/components/games/games-catalog";
import { WhatsAppCtaBand } from "@/components/cta/whatsapp-cta-band";

export const metadata: Metadata = {
  title: "Catálogo de juegos",
  description:
    "Seis juegos para alquilar en tu fiesta o evento en zona oeste del GBA: metegol, beer pong, pool, yenga gigante, castillo inflable y penta tejo.",
};

export default function CatalogoPage() {
  return (
    <main className="flex-1">
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
