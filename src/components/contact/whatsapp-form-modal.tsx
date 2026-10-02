"use client";

import { useState, type FormEvent } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ContactFormFields } from "./contact-form-fields";
import { submitContactForm, type ContactFormState } from "./actions";
import { trackEvent } from "@/lib/analytics";

const initialState: ContactFormState = { success: false };

export type WhatsAppFormModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCloseAutoFocus?: (event: Event) => void;
  defaultGames?: string[];
  defaultMessage?: string;
};

/** Contenido del popup de WhatsApp. Se carga bajo demanda desde whatsapp-form-dialog.tsx. */
export function WhatsAppFormModal({
  open,
  onOpenChange,
  onCloseAutoFocus,
  defaultGames,
  defaultMessage,
}: WhatsAppFormModalProps) {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // Abrimos la pestaña ya, de forma sincrónica dentro del gesto de click, para que los
    // bloqueadores de pop-ups no la corten cuando recién más tarde (tras el await) sepamos
    // el link real de WhatsApp.
    const whatsappTab = window.open("about:blank", "_blank");

    setPending(true);
    const result = await submitContactForm(initialState, new FormData(form));
    setPending(false);
    setState(result);

    if (result.success && result.whatsappLink) {
      trackEvent("generate_lead", { method: "whatsapp_popup", games: defaultGames?.join(", ") });
      if (whatsappTab) {
        whatsappTab.location.href = result.whatsappLink;
      } else {
        window.location.href = result.whatsappLink;
      }
      onOpenChange(false);
    } else {
      whatsappTab?.close();
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) setState(initialState);
      }}
    >
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-md" onCloseAutoFocus={onCloseAutoFocus}>
        <DialogTitle className="font-heading text-xl font-bold">Contanos tu evento</DialogTitle>
        <DialogDescription>
          Completá tus datos y te llevamos a WhatsApp con la consulta ya armada.
        </DialogDescription>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-1">
          <ContactFormFields defaultGames={defaultGames} defaultMessage={defaultMessage} idPrefix="modal" />
          {state.error && <p className="text-sm text-destructive">{state.error}</p>}
          <Button type="submit" disabled={pending} className="h-auto rounded-2xl py-3.5 text-base font-bold">
            {pending ? "Enviando…" : "Continuar a WhatsApp"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
