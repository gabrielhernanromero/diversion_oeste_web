import { WhatsAppFormDialog } from "@/components/contact/whatsapp-form-dialog";
import { WhatsAppIcon } from "@/components/whatsapp/whatsapp-icon";

export function WhatsAppFloatButton() {
  return (
    <WhatsAppFormDialog
      trigger={
        <button
          type="button"
          aria-label="Escribinos por WhatsApp"
          className="fixed right-4 bottom-4 z-40 flex size-13 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-[0_6px_20px_rgba(34,184,176,0.4)] motion-safe:animate-[wa-pulse_3.2s_ease-in-out_infinite] sm:right-5 sm:bottom-5 sm:size-15"
        >
          <WhatsAppIcon className="size-7" />
        </button>
      }
    />
  );
}
