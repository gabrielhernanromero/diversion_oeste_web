"use client";

import Link from "next/link";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { WhatsAppCtaButton } from "@/components/whatsapp/whatsapp-cta-button";
import { cn } from "@/lib/utils";

type NavLink = { href: string; label: string };

type MobileMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  links: NavLink[];
  isActive: (href: string) => boolean;
};

export function MobileMenu({ open, onOpenChange, links, isActive }: MobileMenuProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="inset-0 flex h-full max-w-none translate-x-0 translate-y-0 flex-col justify-between rounded-none bg-foreground p-0 text-background ring-0 sm:max-w-none [&_[data-slot=dialog-close]]:text-background [&_[data-slot=dialog-close]:hover]:bg-background/10"
      >
        <DialogTitle className="sr-only">Menú de navegación</DialogTitle>
        <nav className="flex flex-1 flex-col gap-1 px-8 pt-20">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => onOpenChange(false)}
              className={cn(
                "border-b border-background/10 py-3 font-heading text-2xl font-semibold transition-colors",
                isActive(link.href) ? "text-brand-yellow" : "text-background hover:text-brand-yellow"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-8">
          <WhatsAppCtaButton className="w-full justify-center">Escribinos por WhatsApp</WhatsAppCtaButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}
