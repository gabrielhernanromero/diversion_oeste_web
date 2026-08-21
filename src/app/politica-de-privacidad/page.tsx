import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo Diversión Oeste recolecta, usa y protege tus datos al usar este sitio.",
};

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="flex-1 px-4 pt-28 pb-20 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 font-heading text-3xl font-extrabold sm:text-4xl">Política de privacidad</h1>
        <p className="mb-10 text-sm text-muted-foreground">Última actualización: agosto de 2026.</p>

        <div className="flex flex-col gap-8 text-[15px] leading-relaxed text-foreground/85">
          <section>
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">Quiénes somos</h2>
            <p>
              Este sitio (diversionoeste.com.ar) es operado por Diversión Oeste, emprendimiento de alquiler de juegos
              para fiestas y eventos en zona oeste del Gran Buenos Aires. Para cualquier consulta sobre tus datos,
              podés escribirnos por WhatsApp o a través del{" "}
              <a href="/contacto" className="font-bold text-primary-deep hover:underline">
                formulario de contacto
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">Qué datos recolectamos</h2>
            <p className="mb-2">Cuando completás el formulario de contacto del sitio, recolectamos:</p>
            <ul className="mb-2 list-disc pl-5">
              <li>Nombre y teléfono</li>
              <li>Zona o localidad del evento</li>
              <li>Fecha del evento y juegos de interés (si los indicás)</li>
              <li>Cualquier mensaje adicional que nos escribas</li>
            </ul>
            <p>
              Además, usamos Google Analytics para entender cómo se usa el sitio (páginas visitadas, dispositivo,
              origen del tráfico) mediante cookies, solo si aceptás el banner de cookies que aparece al ingresar.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">Para qué usamos tus datos</h2>
            <p>
              Usamos los datos del formulario únicamente para responder tu consulta y coordinar la disponibilidad y
              precio de los juegos por WhatsApp o email. No los usamos para enviarte publicidad ni los cedemos a
              terceros con fines comerciales.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">Con quién se comparten</h2>
            <p className="mb-2">Tus datos pasan por estos proveedores, únicamente para que el sitio funcione:</p>
            <ul className="list-disc pl-5">
              <li>Resend, para enviarnos por email el aviso de tu consulta</li>
              <li>Google Analytics, para las estadísticas de uso del sitio (si aceptaste cookies)</li>
              <li>WhatsApp, al redirigirte para continuar la conversación con nosotros</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">Tus derechos</h2>
            <p>
              Podés pedirnos en cualquier momento que te contemos qué datos tenemos tuyos, que los corrijamos o que
              los eliminemos — escribinos por WhatsApp o por el formulario de contacto y lo resolvemos.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">Cambios a esta política</h2>
            <p>
              Podemos actualizar esta política si cambia algo en cómo usamos tus datos. La fecha de la última
              actualización siempre va a estar arriba de esta página.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
