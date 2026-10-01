import type { Metadata } from "next";
import { PageHeroBand } from "@/components/hero/page-hero-band";
import { ContactForm } from "@/components/contact/contact-form";
import { CoverageSection } from "@/components/coverage/coverage-section";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Pedí presupuesto para alquilar juegos en tu fiesta o evento en Zona Oeste, CABA o GBA. Contanos la fecha y te respondemos con disponibilidad y precio por WhatsApp.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <main className="flex-1">
      <PageHeroBand title="Contactanos" subtitle="Contanos tu evento y te respondemos con disponibilidad y precio." />
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <ContactForm />
          <CoverageSection layout="narrow" />
        </div>
      </section>
    </main>
  );
}
