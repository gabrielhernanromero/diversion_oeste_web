"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { ContactFormFields } from "./contact-form-fields";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = { success: false };

export function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // Abrimos la pestaña ya, sincrónicamente dentro del click, para que el navegador no la
    // bloquee como pop-up cuando recién más tarde (tras el await) sepamos el link real.
    const whatsappTab = window.open("about:blank", "_blank");

    setPending(true);
    const result = await submitContactForm(initialState, new FormData(form));
    setPending(false);
    setState(result);

    if (result.success && result.whatsappLink) {
      if (whatsappTab) {
        whatsappTab.location.href = result.whatsappLink;
      } else {
        window.location.href = result.whatsappLink;
      }
    } else {
      whatsappTab?.close();
    }
  }

  if (state.success) {
    return (
      <div className="rounded-2xl border-[1.5px] border-secondary bg-secondary/10 p-8 text-center">
        <h2 className="mb-2 font-heading text-xl font-bold">¡Gracias!</h2>
        <p className="text-sm text-muted-foreground">
          Te abrimos WhatsApp con tu consulta cargada. Si no se abrió,{" "}
          <a
            href={state.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary-deep hover:underline"
          >
            escribinos por acá
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
      <ContactFormFields />
      {state.error && <p className="text-sm text-destructive">{state.error}</p>}
      <Button type="submit" disabled={pending} className="mt-1 h-auto rounded-2xl py-3.5 text-base font-bold">
        {pending ? "Enviando…" : "Enviar consulta"}
      </Button>
    </form>
  );
}
