import { cn } from "@/lib/utils";

const STEPS = [
  {
    n: "1",
    title: "Elegís los juegos",
    desc: "Mirá el catálogo y elegí lo que va con tu evento.",
    color: "bg-brand-yellow",
  },
  {
    n: "2",
    title: "Consultás por WhatsApp",
    desc: "Contanos la fecha, zona y juegos para cotizarte.",
    color: "bg-secondary",
  },
  {
    n: "3",
    title: "Confirmás con seña",
    desc: "Reservá tu fecha con el 50% de seña.",
    color: "bg-primary",
  },
  {
    n: "4",
    title: "Armamos y desarmamos",
    desc: "Llegamos con vehículo propio, todo incluido.",
    color: "bg-brand-yellow",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-foreground px-4 py-16 text-background sm:px-6 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-14">
          <span className="mb-3.5 inline-block rounded-full bg-background/10 px-4 py-1.5 text-xs font-bold tracking-wide text-brand-yellow uppercase">
            Proceso
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[42px]">
            Cómo funciona
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7">
          {STEPS.map((step) => (
            <div key={step.n} className="text-center">
              <div
                className={cn(
                  "mx-auto mb-4.5 flex size-15 items-center justify-center rounded-full font-heading text-2xl font-extrabold text-foreground ring-6 ring-background/[0.06]",
                  step.color
                )}
              >
                {step.n}
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold">{step.title}</h3>
              <p className="text-sm text-background/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
