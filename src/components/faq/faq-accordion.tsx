"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import type { Faq } from "@/lib/faqs";

type FaqAccordionProps = {
  faqs: Faq[];
};

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className="gap-3">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={faq.question}
          value={`faq-${index}`}
          className="not-last:border-b-0 overflow-hidden rounded-2xl border border-foreground/[0.06] bg-background px-5 data-[state=open]:bg-secondary/10"
        >
          <AccordionTrigger className="py-4.5 font-heading text-base font-bold hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
