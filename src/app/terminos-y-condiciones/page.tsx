import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Condiciones de uso del sitio web de Diversión Oeste.",
};

export default function TerminosYCondicionesPage() {
  return (
    <main className="flex-1 px-4 pt-28 pb-20 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 font-heading text-3xl font-extrabold sm:text-4xl">Términos y condiciones</h1>
        <p className="mb-10 text-sm text-muted-foreground">Última actualización: agosto de 2026.</p>

        <div className="flex flex-col gap-8 text-[15px] leading-relaxed text-foreground/85">
          <section>
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">Sobre este sitio</h2>
            <p>
              Este sitio (diversionoeste.com.ar) es un canal informativo de Diversión Oeste para mostrar el catálogo
              de juegos y facilitar el contacto — no es una tienda online. Ningún precio se cobra ni se confirma acá:
              todo se cotiza y coordina directamente por WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">Precios y disponibilidad</h2>
            <p>
              Los precios son siempre “a consultar” y pueden variar según fecha, zona y duración del evento. La
              disponibilidad de cada juego se confirma recién al coordinar por WhatsApp — que un juego aparezca en el
              catálogo no garantiza que esté libre para una fecha puntual.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">Condiciones de alquiler</h2>
            <p>
              La seña, duración del alquiler, política ante lluvia y demás condiciones comerciales del servicio están
              detalladas en nuestras{" "}
              <a href="/preguntas-frecuentes" className="font-bold text-primary-deep hover:underline">
                preguntas frecuentes
              </a>
              , y se confirman puntualmente al coordinar cada reserva por WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">Uso del sitio</h2>
            <p>
              El contenido de este sitio (textos, logo, diseño) es de Diversión Oeste. Podés navegarlo y compartirlo
              libremente, pero no reproducirlo con fines comerciales sin permiso.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">Enlaces a WhatsApp</h2>
            <p>
              Los botones de contacto te llevan a WhatsApp, un servicio de terceros que no operamos nosotros — el uso
              de WhatsApp se rige por sus propios términos.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">Cambios</h2>
            <p>Podemos actualizar estos términos en cualquier momento. Los cambios se reflejan en esta misma página.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
