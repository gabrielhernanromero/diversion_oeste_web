// TODO por cliente: reemplazar por el número real de WhatsApp Business antes de lanzar (negocio nuevo, todavía sin número).
const DEFAULT_WHATSAPP_NUMBER = "5491100000000";

function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
}

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(message)}`;
}

export type ContactWhatsAppData = {
  name: string;
  phone: string;
  zone: string;
  eventDate?: string;
  games: string[];
  message?: string;
};

export function buildContactWhatsAppMessage(data: ContactWhatsAppData): string {
  const lines = [
    `Hola! Soy ${data.name}.`,
    `Teléfono: ${data.phone}`,
    `Zona: ${data.zone}`,
    data.eventDate ? `Fecha del evento: ${data.eventDate}` : null,
    data.games.length ? `Juegos de interés: ${data.games.join(", ")}` : null,
    data.message ? `Mensaje: ${data.message}` : null,
  ].filter((line): line is string => line !== null);
  return lines.join("\n");
}
