import type { Metadata } from "next";
import { PageHeroBand } from "@/components/hero/page-hero-band";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { WhatsAppCtaBand } from "@/components/cta/whatsapp-cta-band";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Todo lo que necesitás saber antes de reservar un juego: reservas, seña, duración del alquiler, política de lluvia e instalación del castillo inflable.",
};

export default function PreguntasFrecuentesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHeroBand title="Preguntas frecuentes" subtitle="Todo lo que necesitás saber antes de reservar tu juego." />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-3.5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-wide text-primary-deep uppercase">
            Ayuda
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[42px]">
            Preguntas frecuentes
          </h2>
        </div>
        <FaqAccordion faqs={faqs} />
      </section>
      <WhatsAppCtaBand heading="¿Todavía tenés dudas?" buttonLabel="Consultanos por WhatsApp" />
    </main>
  );
}
