"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ContactFormFields } from "./contact-form-fields";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = { success: false };

type WhatsAppFormDialogProps = {
  trigger: ReactNode;
  defaultGames?: string[];
};

export function WhatsAppFormDialog({ trigger, defaultGames }: WhatsAppFormDialogProps) {
  const [open, setOpen] = useState(false);
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
      if (whatsappTab) {
        whatsappTab.location.href = result.whatsappLink;
      } else {
        window.location.href = result.whatsappLink;
      }
      setOpen(false);
    } else {
      whatsappTab?.close();
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) setState(initialState);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-md">
        <DialogTitle className="font-heading text-xl font-bold">Contanos tu evento</DialogTitle>
        <DialogDescription>
          Completá tus datos y te llevamos a WhatsApp con la consulta ya armada.
        </DialogDescription>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-1">
          <ContactFormFields defaultGames={defaultGames} idPrefix="modal" />
          {state.error && <p className="text-sm text-destructive">{state.error}</p>}
          <Button type="submit" disabled={pending} className="h-auto rounded-2xl py-3.5 text-base font-bold">
            {pending ? "Enviando…" : "Continuar a WhatsApp"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
