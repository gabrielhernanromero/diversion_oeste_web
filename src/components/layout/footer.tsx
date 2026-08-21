import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/juegos", label: "Catálogo" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-foreground px-4 pt-13 pb-8 text-background sm:px-6 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <Image src="/logo-icon.svg" alt="Diversión Oeste" width={36} height={36} className="size-9" />
          <span className="font-heading text-lg font-bold">
            <span className="text-secondary">Diversión</span> <span className="text-primary">Oeste</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-5">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-background/70 hover:text-background">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="max-w-md text-sm text-background/55">
          Alquiler de juegos para fiestas y eventos en zona oeste del GBA.
        </p>
        <div className="h-px bg-background/10" />
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-xs text-background/40">© 2026 Diversión Oeste. Todos los derechos reservados.</p>
          <Link href="/politica-de-privacidad" className="text-xs text-background/40 hover:text-background/70">
            Política de privacidad
          </Link>
          <Link href="/terminos-y-condiciones" className="text-xs text-background/40 hover:text-background/70">
            Términos y condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}
