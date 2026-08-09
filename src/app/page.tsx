// Home del template base. Reemplazar por las secciones reales del cliente
// (hero, servicios, pricing, contacto) usando src/components/<sección>/.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">Template base — Lupa Servicios Digitales</h1>
      <p className="max-w-md text-muted-foreground">
        Arrancá el desarrollo reemplazando esta home por las secciones del cliente. Ver CLAUDE.md y la skill
        nuevo-cliente-lupa para el flujo completo.
      </p>
    </main>
  );
}
