import { cn } from "@/lib/utils";
import { WhatsAppFormDialog } from "@/components/contact/whatsapp-form-dialog";
import { CoverageMarquee, LOCALITIES } from "./coverage-marquee";

type CoverageSectionProps = {
  layout?: "wide" | "narrow";
  className?: string;
};

export function CoverageSection({ layout = "wide", className }: CoverageSectionProps) {
  return (
    <div className={cn("grid gap-8", layout === "wide" && "items-center lg:grid-cols-2 lg:gap-10", className)}>
      <div>
        <span className="mb-4 inline-block rounded-full bg-brand-yellow/20 px-4 py-1.5 text-xs font-bold tracking-wide text-[#8a6600] uppercase">
          Cobertura
        </span>
        <h2 className="mb-3.5 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[32px]">
          ¿Dónde llegamos?
        </h2>
        <p className="mb-4.5 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
          Somos de zona oeste y ahí tenemos la mayoría de nuestros eventos, pero llegamos a toda Capital Federal y el
          Gran Buenos Aires. Armamos y desarmamos con vehículo propio — el costo del traslado se cotiza según la
          distancia real a tu evento.
        </p>
        <WhatsAppFormDialog
          trigger={
            <button type="button" className="font-bold text-primary-deep hover:underline">
              Consultá si llegamos a tu zona →
            </button>
          }
        />
      </div>
      <div className="min-w-0">
        <ul className="sr-only">
          {LOCALITIES.map((locality) => (
            <li key={locality}>{locality}</li>
          ))}
        </ul>
        <CoverageMarquee />
        <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
          Estas son algunas de las localidades donde ya trabajamos habitualmente. Si sos de otra zona de Capital o del
          Gran Buenos Aires, escribinos igual — coordinamos el traslado y te cotizamos sin compromiso.
        </p>
      </div>
    </div>
  );
}
