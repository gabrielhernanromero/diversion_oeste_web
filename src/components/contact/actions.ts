"use server";

import { z } from "zod";
import { resend } from "@/lib/resend";
import { buildWhatsAppLink, buildContactWhatsAppMessage } from "@/lib/whatsapp";

const contactSchema = z.object({
  name: z.string().min(2, "Nombre muy corto"),
  phone: z.string().min(6, "Teléfono inválido"),
  eventDate: z.string().optional(),
  zone: z.string().min(2, "Contanos tu zona o localidad"),
  message: z.string().optional(),
  games: z.array(z.string()),
  // Honeypot: campo oculto que un humano nunca completa. Si viene con valor, es un bot.
  website: z.string().max(0).optional(),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
  whatsappLink?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    eventDate: formData.get("eventDate") || undefined,
    zone: formData.get("zone"),
    message: formData.get("message") || undefined,
    games: formData.getAll("games"),
    website: formData.get("website"),
  });

  if (!parsed.success) {
    // El honeypot disparado también cae acá (website con contenido) — no delatamos al bot.
    return { success: false, error: parsed.error.issues[0]?.message ?? "Datos inválidos" };
  }

  const { name, phone, eventDate, zone, message, games } = parsed.data;

  // El aviso por mail es un canal secundario para el dueño del negocio — si falla o no está
  // configurado, no le bloqueamos al cliente el camino a WhatsApp (el canal principal).
  const notifyTo = process.env.CONTACT_NOTIFICATION_EMAIL;
  if (notifyTo) {
    const bodyLines = [
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Zona: ${zone}`,
      eventDate ? `Fecha del evento: ${eventDate}` : null,
      games.length ? `Juegos de interés: ${games.join(", ")}` : null,
      "",
      message || "(sin mensaje adicional)",
    ].filter((line) => line !== null);

    try {
      await resend.emails.send({
        from: "Formulario de contacto <onboarding@resend.dev>", // TODO: reemplazar por dominio verificado del cliente
        to: notifyTo,
        subject: `Nuevo mensaje de contacto — ${name}`,
        text: bodyLines.join("\n"),
      });
    } catch {
      // Silencioso a propósito: el cliente igual tiene que poder llegar a WhatsApp.
    }
  }

  const whatsappLink = buildWhatsAppLink(
    buildContactWhatsAppMessage({ name, phone, zone, eventDate, games, message }),
  );

  return { success: true, whatsappLink };
}
