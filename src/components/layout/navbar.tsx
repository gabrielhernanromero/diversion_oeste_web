"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppCtaButton } from "@/components/whatsapp/whatsapp-cta-button";

// El menú mobile es un Dialog de Radix: se descarga recién al tocar la hamburguesa.
const loadMobileMenu = () => import("./mobile-menu");
const MobileMenu = lazy(() => loadMobileMenu().then((m) => ({ default: m.MobileMenu })));

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/juegos", label: "Catálogo" },
  { href: "/armar-combo", label: "Armá tu combo" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      if (y < 80) {
        setVisible(true);
      } else if (y > lastScrollY.current + 4) {
        setVisible(false);
      } else if (y < lastScrollY.current - 4) {
        setVisible(true);
      }
      lastScrollY.current = y;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 px-3 pt-3.5 transition-transform duration-300 ease-out sm:px-6",
          visible ? "translate-y-0" : "-translate-y-[130%]"
        )}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border border-foreground/[0.06] bg-background/75 px-4 py-2.5 shadow-lg shadow-foreground/10 backdrop-blur-md sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo-icon.svg" alt="" width={40} height={40} className="size-9 sm:size-10" priority />
            <span className="whitespace-nowrap font-heading text-base font-bold sm:text-lg">
              <span className="text-secondary-deep">Diversión</span> <span className="text-primary-deep">Oeste</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  isActive(link.href) ? "text-primary-deep" : "text-foreground hover:text-primary-deep"
                )}
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppCtaButton className="rounded-xl px-5 py-2 text-sm">WhatsApp</WhatsAppCtaButton>
          </nav>

          <button
            type="button"
            onPointerEnter={loadMobileMenu}
            onTouchStart={loadMobileMenu}
            onFocus={loadMobileMenu}
            onClick={() => {
              setMenuMounted(true);
              setMenuOpen(true);
            }}
            aria-label="Abrir menú"
            className="flex size-10 items-center justify-center rounded-xl bg-foreground text-background transition-transform hover:scale-105 active:scale-95 md:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      {menuMounted && (
        <Suspense fallback={null}>
          <MobileMenu open={menuOpen} onOpenChange={setMenuOpen} links={NAV_LINKS} isActive={isActive} />
        </Suspense>
      )}
    </>
  );
}
