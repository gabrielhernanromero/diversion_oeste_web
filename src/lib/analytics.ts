type GtagWindow = Window & { gtag?: (command: "event", name: string, params?: Record<string, unknown>) => void };

/**
 * Evento de GA4. Si GA no cargó (sin consentimiento o sin NEXT_PUBLIC_GA_ID) no hace nada.
 * `generate_lead` es el evento recomendado por Google para marcarlo como conversión.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  (window as GtagWindow).gtag?.("event", name, params);
}
