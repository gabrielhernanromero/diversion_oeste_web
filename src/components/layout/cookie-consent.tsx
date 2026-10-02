"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie-consent";

export function hasAnalyticsConsent() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEY) === "accepted";
}

function setConsent(value: "accepted" | "rejected") {
  localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new Event("cookie-consent-updated"));
}

/**
 * Banner básico de consentimiento de cookies. GA4 (google-analytics.tsx) no
 * carga hasta que el usuario acepta. Ajustar el texto legal por cliente.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // localStorage no existe en el render de servidor: se resuelve recién montado,
    // a propósito, para no desincronizar el HTML hidratado.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col gap-3 border-t bg-background p-4 shadow-lg sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-muted-foreground">
        Usamos cookies para analizar el uso del sitio (Google Analytics). Podés aceptar o rechazar.{" "}
        <a href="/politica-de-privacidad" className="underline">
          Más información sobre privacidad
        </a>
        .
      </p>
      <div className="flex shrink-0 gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setConsent("rejected");
            setVisible(false);
          }}
        >
          Rechazar
        </Button>
        <Button
          size="sm"
          onClick={() => {
            setConsent("accepted");
            setVisible(false);
          }}
        >
          Aceptar
        </Button>
      </div>
    </div>
  );
}
