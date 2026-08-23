"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { games } from "@/lib/games";
import { getDescuentoPorCantidad, calcularPrecioFinal } from "@/lib/combo";

type ContactFormFieldsProps = {
  defaultGames?: string[];
  defaultMessage?: string;
  idPrefix?: string;
};

export function ContactFormFields({ defaultGames = [], defaultMessage, idPrefix }: ContactFormFieldsProps) {
  const fieldId = (name: string) => (idPrefix ? `${idPrefix}-${name}` : name);
  const [checkedNames, setCheckedNames] = useState<string[]>(defaultGames);

  function toggleGame(name: string) {
    setCheckedNames((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]));
  }

  const selectedGames = games.filter((game) => checkedNames.includes(game.name));
  const cantidad = selectedGames.length;
  const precioLista = selectedGames.reduce((sum, game) => sum + game.precio, 0);
  const descuento = getDescuentoPorCantidad(cantidad);
  const precioFinal = calcularPrecioFinal(precioLista, descuento);

  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor={fieldId("name")}>Nombre</Label>
        <Input id={fieldId("name")} name="name" placeholder="Tu nombre" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={fieldId("phone")}>Teléfono</Label>
        <Input id={fieldId("phone")} name="phone" type="tel" placeholder="11 xxxx-xxxx" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={fieldId("eventDate")}>Fecha del evento</Label>
        <Input id={fieldId("eventDate")} name="eventDate" type="date" />
      </div>
      <div className="grid gap-2">
        <Label>Juegos de interés</Label>
        <div className="grid grid-cols-2 gap-2">
          {games.map((game) => (
            <label key={game.slug} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="games"
                value={game.name}
                checked={checkedNames.includes(game.name)}
                onChange={() => toggleGame(game.name)}
                className="size-4 accent-secondary"
              />
              {game.name}
            </label>
          ))}
        </div>
        {cantidad > 0 && (
          <div className="mt-1 rounded-2xl bg-foreground p-3.5 text-background">
            <div className="flex items-center justify-between gap-2 text-xs text-background/70">
              <span>
                {cantidad} {cantidad === 1 ? "juego elegido" : "juegos elegidos"}
              </span>
              {descuento > 0 && (
                <span className="rounded-full bg-brand-yellow px-2.5 py-1 text-[11px] font-bold text-foreground">
                  {descuento}% OFF
                </span>
              )}
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              {descuento > 0 && <span className="text-sm text-background/50 line-through">${precioLista}</span>}
              <span className="font-heading text-2xl font-extrabold text-primary">${precioFinal}</span>
              <span className="text-xs font-medium text-background/60">/ 6 hs</span>
            </div>
          </div>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor={fieldId("zone")}>Zona / localidad</Label>
        <Input id={fieldId("zone")} name="zone" placeholder="Ej: Morón" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={fieldId("message")}>Mensaje adicional</Label>
        <Textarea
          id={fieldId("message")}
          name="message"
          rows={4}
          placeholder="Contanos más sobre tu evento (opcional)"
          defaultValue={defaultMessage}
        />
      </div>
      {/* Honeypot anti-spam: oculto por CSS, no por type=hidden, para que los bots simples lo completen igual */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor={fieldId("website")}>No completar este campo</Label>
        <Input id={fieldId("website")} name="website" tabIndex={-1} autoComplete="off" />
      </div>
    </>
  );
}
