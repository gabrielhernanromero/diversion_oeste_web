import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/layout/google-analytics";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO por cliente: título, descripción, metadataBase (dominio real) y OG image propia.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Nombre del cliente — Lupa Servicios Digitales",
  description: "Descripción a completar por cliente.",
  openGraph: {
    title: "Nombre del cliente",
    description: "Descripción a completar por cliente.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
        <GoogleAnalytics />
        <Toaster />
      </body>
    </html>
  );
}
