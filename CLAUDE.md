# LUPA Servicios Digitales — Contexto del proyecto

## Qué es esto
Repositorio base/template para las webs que Lupa Servicios Digitales entrega a clientes B2B técnicos e industriales (mantenimiento, seguridad, service técnico, instalaciones). Se clona y adapta por cliente — no reescribir de cero cada vez.

## Stack técnico
- Next.js (App Router) + TypeScript estricto — usar siempre la última versión estable al arrancar un cliente nuevo, no fijarse a una versión vieja por inercia
- Tailwind CSS + shadcn/ui (componentes copiados al proyecto, no dependencia cerrada)
- Supabase (PostgreSQL + Storage) para blog, mensajes de contacto, usuarios del panel
- NextAuth v5 para el panel de administración
- TipTap como editor WYSIWYG del blog
- Framer Motion para animaciones — usar con moderación y lazy load; en sitios que son básicamente landing pages no debería inflar el bundle inicial
- Google Analytics 4 configurado desde el inicio, con banner de consentimiento de cookies (ver sección Legal)
- Resend para notificaciones de formulario de contacto
- Hosting: Vercel
- Dominios: siempre a nombre del cliente (NIC Argentina para .com.ar, Hostinger para internacionales)
- Monitoreo (solo clientes con mantenimiento activo): BetterStack para uptime y para logs/errores de producción vía log drain de Vercel — evita sumar un vendor nuevo (Sentry no funcionó bien en pruebas anteriores) y consolida todo el monitoreo en una sola cuenta

## Convenciones de código
- TypeScript estricto, sin `any` salvo justificación explícita
- Componentes en `src/components/`, organizados por sección (hero, pricing, blog, admin)
- Nunca hardcodear secrets — todo en `.env.local`, y confirmar que `.env.local` esté en `.gitignore` desde el primer commit
- Paleta y tipografía se definen por cliente, nunca reusar la de otro cliente ni la de CentralBase (navy #0F3D66 / terracota #D9834F ya están tomadas por esa marca)

## Diseño
- Evitar los looks genéricos de IA (crema+terracota, negro+verde ácido, estilo periódico) — cada sitio parte de la identidad del cliente, no de un default
- Componentes de 21st.dev: revisar el código antes de aceptarlo, calidad variable por ser comunitario
- Accesibilidad WCAG básica siempre: contraste suficiente, alt en imágenes, navegación por teclado, foco visible

## MCP conectados — reglas de uso
- **Supabase MCP**: modo solo lectura en producción, siempre escopeado a un `project_ref` puntual. Nunca escritura contra la base real de un cliente activo, solo contra desarrollo.
- **Vercel MCP**: deploy y gestión de dominios/variables de entorno
- **GitHub MCP**: repos, PRs, issues
- Gestión de proyectos: todavía sin herramienta de Kanban conectada. Evaluar Linear o GitHub Projects cuando haga falta — evitar Jira por el peso de setup para un equipo chico

## Plugins de Claude Code — instalar al arrancar el proyecto
Plugins oficiales de Anthropic, gratis, se instalan una sola vez por proyecto:
- **security-guidance**: revisa el código en busca de vulnerabilidades (secrets hardcodeados, injection, deserialización insegura) mientras se escribe, y las corrige en la misma sesión. Requiere repo de Git para la revisión profunda.
  ```
  /plugin install security-guidance@claude-plugins-official
  /reload-plugins
  ```
- **code-review**: revisa bugs, casos borde y estilo antes de mergear un PR.
  ```
  /plugin install code-review@claude-plugins-official
  ```
- Ninguno de los dos es garantía absoluta — son una capa de asistencia, no reemplazan revisión humana en casos críticos.

## Evolución del template
El template base sigue mejorando después de que un cliente ya fue entregado. Cada repo de cliente clonado de acá mantiene un remote `template` (sin permiso de push) apagado a este repo — no hay sync automático, pero sí una forma concreta de traer un fix puntual sin copiar y pegar a mano:

```
git fetch template
git log HEAD..template/master --oneline   # ver qué hay nuevo en el template
git cherry-pick <commit>                   # traer solo el fix puntual
```

Fixes de seguridad o bugs importantes se backportean así solo a clientes con plan de mantenimiento activo; el resto queda como quedó entregado salvo pedido explícito (y facturable) del cliente. Ver `.claude/skills/nuevo-cliente-lupa/SKILL.md` paso 3 para cómo se deja armado el remote al clonar.

## Titularidad — no negociable
- Dominio: siempre a nombre del cliente, sin excepción
- Hosting/base de datos: a nombre del cliente si NO tiene plan de mantenimiento contratado; en cuenta de Lupa si SÍ lo tiene

## Flujo de trabajo
Para armar un sitio de cliente nuevo, usar la skill `/nuevo-cliente-lupa` — contiene el proceso completo paso a paso y el checklist de calidad.
