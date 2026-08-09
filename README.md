# Template base — Lupa Servicios Digitales

Repositorio base para las webs de cliente de Lupa. Se clona y adapta por cliente — no se reescribe de cero cada vez. Ver [`CLAUDE.md`](./CLAUDE.md) para el contexto completo del proyecto y `.claude/skills/nuevo-cliente-lupa/` para el flujo de entrega paso a paso.

## Stack

Next.js (App Router) + TypeScript + Tailwind + shadcn/ui + Supabase + NextAuth v5 + TipTap + Framer Motion + Resend. Detalle completo en `CLAUDE.md`.

## Empezar

```bash
pnpm install
cp .env.local.example .env.local   # completar con las credenciales del cliente
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Scripts

- `pnpm dev` — desarrollo local
- `pnpm build` — build de producción
- `pnpm lint` — ESLint

## Estructura

```
src/
  app/            rutas (App Router)
  components/
    hero/         sección hero
    pricing/      planes/precios
    blog/         listado y post de blog
    admin/        panel de administración
    contact/      formulario de contacto + server action
    layout/       header, footer, GA4, cookie consent
    legal/        política de privacidad, términos
    ui/           componentes shadcn/ui
  lib/
    supabase/     clientes browser/server
    auth/         config de NextAuth v5
```
