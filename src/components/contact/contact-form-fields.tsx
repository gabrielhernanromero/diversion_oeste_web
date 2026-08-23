import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { games } from "@/lib/games";

type ContactFormFieldsProps = {
  defaultGames?: string[];
  defaultMessage?: string;
  idPrefix?: string;
};

export function ContactFormFields({ defaultGames = [], defaultMessage, idPrefix }: ContactFormFieldsProps) {
  const fieldId = (name: string) => (idPrefix ? `${idPrefix}-${name}` : name);

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
                defaultChecked={defaultGames.includes(game.name)}
                className="size-4 accent-secondary"
              />
              {game.name}
            </label>
          ))}
        </div>
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
