import Link from "next/link";
import { games } from "@/lib/games";
import { WhatsAppCtaButton } from "@/components/whatsapp/whatsapp-cta-button";
import { WhatsAppCtaBand } from "@/components/cta/whatsapp-cta-band";
import { GamesGrid } from "@/components/games/games-grid";
import { HowItWorks } from "@/components/home/how-it-works";
import { CoverageSection } from "@/components/coverage/coverage-section";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative flex min-h-[min(88vh,760px)] items-center overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow via-primary to-foreground" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
        <div className="relative z-10 mx-auto max-w-2xl px-4 py-12 text-center sm:px-6">
          <span className="mb-4.5 inline-block rounded-full bg-brand-yellow px-4 py-1.5 text-sm font-bold text-foreground">
            Zona Oeste · GBA
          </span>
          <h1 className="mb-4 font-heading text-4xl leading-[1.05] font-extrabold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-[56px]">
            Momentos inolvidables
            <br />
            para toda la familia
          </h1>
          <p className="mx-auto mb-7 max-w-lg text-lg font-medium text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] sm:text-xl">
            Alquiler de juegos para cumpleaños, fiestas de 15, eventos de empresa y kermeses escolares. Consultá
            disponibilidad y precio por WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <WhatsAppCtaButton>Consultar por WhatsApp</WhatsAppCtaButton>
            <Link
              href="/juegos"
              className="rounded-2xl bg-white px-6 py-3 text-base font-bold text-foreground transition-transform hover:scale-[1.03] active:scale-95"
            >
              Ver juegos
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
        <div className="mb-10 text-center sm:mb-14">
          <span className="mb-3.5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-wide text-primary uppercase">
            Catálogo
          </span>
          <h2 className="mb-2.5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[42px]">
            Nuestros juegos
          </h2>
          <p className="text-[17px] text-muted-foreground">
            Seis opciones para animar cualquier evento, con o sin lluvia. Todos los precios son a consultar.
          </p>
        </div>
        <GamesGrid games={games} variant="preview" />
      </section>

      <HowItWorks />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
        <CoverageSection layout="wide" />
      </section>

      <WhatsAppCtaBand
        heading="¿Listo para el próximo festejo?"
        subtext="Contanos la fecha y te respondemos con disponibilidad y precio."
      />
    </main>
  );
}
