import { ChevronDownIcon } from "lucide-react";
import type { Faq } from "@/lib/faqs";

type FaqAccordionProps = {
  faqs: Faq[];
  /** Agrupa los <details> para que abrir uno cierre el resto (atributo `name` nativo). */
  group?: string;
};

/**
 * Acordeón con <details> nativo en vez de Radix: las respuestas quedan en el HTML aunque
 * estén cerradas (Radix las desmontaba, así que Google y los buscadores con IA no las veían),
 * funciona sin JavaScript y es accesible por teclado de fábrica.
 */
export function FaqAccordion({ faqs, group = "faq" }: FaqAccordionProps) {
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          name={group}
          className="group overflow-hidden rounded-2xl border border-foreground/[0.06] bg-background px-5 open:bg-secondary/10"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md py-4.5 font-heading text-base font-bold outline-none focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
            {faq.question}
            <ChevronDownIcon
              aria-hidden="true"
              className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="pb-4.5 text-[15px] leading-relaxed text-muted-foreground">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
