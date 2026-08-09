"use server";

import { z } from "zod";
import { resend } from "@/lib/resend";

const contactSchema = z.object({
  name: z.string().min(2, "Nombre muy corto"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensaje muy corto"),
  // Honeypot: campo oculto que un humano nunca completa. Si viene con valor, es un bot.
  website: z.string().max(0).optional(),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    website: formData.get("website"),
  });

  if (!parsed.success) {
    // El honeypot disparado también cae acá (website con contenido) — no delatamos al bot.
    return { success: false, error: parsed.error.issues[0]?.message ?? "Datos inválidos" };
  }

  const { name, email, message } = parsed.data;
  const notifyTo = process.env.CONTACT_NOTIFICATION_EMAIL;

  if (!notifyTo) {
    return { success: false, error: "Falta configurar CONTACT_NOTIFICATION_EMAIL" };
  }

  try {
    await resend.emails.send({
      from: "Formulario de contacto <onboarding@resend.dev>", // TODO: reemplazar por dominio verificado del cliente
      to: notifyTo,
      replyTo: email,
      subject: `Nuevo mensaje de contacto — ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return { success: true };
  } catch {
    return { success: false, error: "No se pudo enviar el mensaje, intentá de nuevo." };
  }
}
