import type { Metadata } from "next";
import { PageHeroBand } from "@/components/hero/page-hero-band";
import { ComboBuilder } from "@/components/combo/combo-builder";
import { games } from "@/lib/games";

export const metadata: Metadata = {
  title: "Armá tu combo de juegos con hasta 30% off",
  description:
    "Elegí los juegos que quieras para tu fiesta o evento y mirá el precio final con descuento al instante, sin esperar respuesta.",
  alternates: { canonical: "/armar-combo" },
};

export default function ArmarComboPage() {
  return (
    <main className="flex-1">
      <PageHeroBand
        title="Armá tu combo"
        subtitle="Elegí los juegos que quieras y mirá el precio con descuento, en vivo."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-12">
        <ComboBuilder games={games} />
      </section>
    </main>
  );
}
