"use client";

import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { WhatsAppFormDialog } from "@/components/contact/whatsapp-form-dialog";
import { WhatsAppIcon } from "./whatsapp-icon";

type WhatsAppCtaButtonProps = {
  children: ReactNode;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  className?: string;
  defaultGames?: string[];
  defaultMessage?: string;
};

export function WhatsAppCtaButton({
  children,
  variant = "secondary",
  className,
  defaultGames,
  defaultMessage,
}: WhatsAppCtaButtonProps) {
  return (
    <WhatsAppFormDialog
      defaultGames={defaultGames}
      defaultMessage={defaultMessage}
      trigger={
        <Button
          variant={variant}
          className={cn(
            "h-auto max-w-full gap-2 rounded-2xl px-6 py-3 text-base font-bold whitespace-normal",
            className,
          )}
        >
          <WhatsAppIcon className="size-5" />
          {children}
        </Button>
      }
    />
  );
}
