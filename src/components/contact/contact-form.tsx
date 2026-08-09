"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = { success: false };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return <p className="text-sm font-medium">¡Gracias! Te vamos a responder a la brevedad.</p>;
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" name="name" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea id="message" name="message" rows={4} required />
      </div>
      {/* Honeypot anti-spam: oculto por CSS, no por type=hidden, para que los bots simples lo completen igual */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">No completar este campo</Label>
        <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {state.error && <p className="text-sm text-destructive">{state.error}</p>}
      <Button type="submit" disabled={pending}>
        {pending ? "Enviando…" : "Enviar mensaje"}
      </Button>
    </form>
  );
}
