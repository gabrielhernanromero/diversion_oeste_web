"use client";

import { lazy, Suspense, useRef, useState, type ReactNode } from "react";
import { Slot } from "radix-ui";
import { trackEvent } from "@/lib/analytics";

// El popup (Radix Dialog + formulario) pesa bastante y la mayoría de las visitas nunca lo
// abre: se descarga recién cuando el usuario apunta o toca un botón de WhatsApp, en vez de
// sumarse al JavaScript inicial de cada página.
const loadModal = () => import("./whatsapp-form-modal");
const WhatsAppFormModal = lazy(() => loadModal().then((m) => ({ default: m.WhatsAppFormModal })));

type WhatsAppFormDialogProps = {
  trigger: ReactNode;
  defaultGames?: string[];
  defaultMessage?: string;
};

export function WhatsAppFormDialog({ trigger, defaultGames, defaultMessage }: WhatsAppFormDialogProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);

  return (
    <>
      <Slot.Root
        ref={triggerRef}
        aria-haspopup="dialog"
        aria-expanded={open}
        onPointerEnter={loadModal}
        onFocus={loadModal}
        onTouchStart={loadModal}
        onClick={() => {
          setMounted(true);
          setOpen(true);
          trackEvent("whatsapp_form_open", { games: defaultGames?.join(", ") });
        }}
      >
        {trigger}
      </Slot.Root>
      {mounted && (
        <Suspense fallback={null}>
          <WhatsAppFormModal
            open={open}
            onOpenChange={setOpen}
            // Sin DialogTrigger, Radix no sabe a dónde devolver el foco al cerrar.
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              triggerRef.current?.focus();
            }}
            defaultGames={defaultGames}
            defaultMessage={defaultMessage}
          />
        </Suspense>
      )}
    </>
  );
}
