"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { hasAnalyticsConsent } from "./cookie-consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/** Carga GA4 solo si hay consentimiento de cookies previo (ver cookie-consent.tsx). */
export function GoogleAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    // localStorage no existe en el render de servidor: se resuelve recién montado,
    // a propósito, para no desincronizar el HTML hidratado.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsented(hasAnalyticsConsent());
    const onConsent = () => setConsented(hasAnalyticsConsent());
    window.addEventListener("cookie-consent-updated", onConsent);
    return () => window.removeEventListener("cookie-consent-updated", onConsent);
  }, []);

  if (!GA_ID || !consented) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
