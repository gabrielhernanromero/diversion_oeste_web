import type { Metadata, Viewport } from "next";
import { Baloo_2, Work_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatButton } from "@/components/layout/whatsapp-float-button";
import { GoogleAnalytics } from "@/components/layout/google-analytics";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/seo/json-ld";
import { BUSINESS, SITE_URL, organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const heading = Baloo_2({
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const body = Work_Sans({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const DESCRIPTION =
  "Alquiler de juegos para fiestas en Zona Oeste (GBA): castillo inflable, metegol, pool, beer pong, yenga gigante y tejo. Cumpleaños, fiestas de 15, empresas y kermeses. Entrega y armado incluidos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Alquiler de juegos para fiestas en Zona Oeste | Diversión Oeste",
    template: "%s | Diversión Oeste",
  },
  description: DESCRIPTION,
  applicationName: BUSINESS.name,
  keywords: [
    "alquiler de juegos para fiestas",
    "alquiler de juegos zona oeste",
    "alquiler de castillo inflable zona oeste",
    "alquiler de metegol",
    "alquiler de pool",
    "alquiler de beer pong",
    "yenga gigante alquiler",
    "juegos para cumpleaños",
    "juegos para fiestas de 15",
    "juegos para eventos de empresa",
    "Morón",
    "Castelar",
    "Ituzaingó",
    "Haedo",
    "Ramos Mejía",
  ],
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "Diversión Oeste — Alquiler de juegos para fiestas y eventos",
    description: DESCRIPTION,
    siteName: BUSINESS.name,
    url: "/",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diversión Oeste — Alquiler de juegos para fiestas y eventos",
    description: DESCRIPTION,
  },
  // Solo hace falta si Search Console se verifica por meta tag en vez de por DNS.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#F2662D",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${heading.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationJsonLd()} />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatButton />
        <CookieConsent />
        <GoogleAnalytics />
        <Toaster />
      </body>
    </html>
  );
}
