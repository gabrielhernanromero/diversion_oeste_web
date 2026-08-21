import { WhatsAppCtaButton } from "@/components/whatsapp/whatsapp-cta-button";

type WhatsAppCtaBandProps = {
  heading: string;
  subtext?: string;
  buttonLabel?: string;
};

export function WhatsAppCtaBand({ heading, subtext, buttonLabel = "Escribinos por WhatsApp" }: WhatsAppCtaBandProps) {
  return (
    <section className="bg-gradient-to-br from-primary to-brand-yellow px-4 py-16 text-center sm:px-6 sm:py-24">
      <h2 className="mx-auto mb-3.5 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
        {heading}
      </h2>
      {subtext && <p className="mx-auto mb-7 max-w-xl text-lg text-foreground/80">{subtext}</p>}
      <WhatsAppCtaButton variant="default" className="bg-foreground text-background hover:bg-foreground/90">
        {buttonLabel}
      </WhatsAppCtaButton>
    </section>
  );
}
