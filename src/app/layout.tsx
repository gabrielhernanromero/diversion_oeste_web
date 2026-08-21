import type { Metadata } from "next";
import { Baloo_2, Work_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatButton } from "@/components/layout/whatsapp-float-button";
import { GoogleAnalytics } from "@/components/layout/google-analytics";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const heading = Baloo_2({
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const body = Work_Sans({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Diversión Oeste — Alquiler de juegos para fiestas y eventos",
    template: "%s — Diversión Oeste",
  },
  description:
    "Alquiler de juegos para cumpleaños, fiestas de 15, eventos de empresa y kermeses escolares en zona oeste del GBA. Consultá disponibilidad y precio por WhatsApp.",
  openGraph: {
    title: "Diversión Oeste — Alquiler de juegos para fiestas y eventos",
    description:
      "Alquiler de juegos para cumpleaños, fiestas de 15, eventos de empresa y kermeses escolares en zona oeste del GBA.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${heading.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
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
