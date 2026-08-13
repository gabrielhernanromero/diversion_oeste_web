---
name: nuevo-cliente-lupa
description: Flujo completo para armar y entregar una web de cliente de Lupa Servicios Digitales, desde el cobro de la seña hasta la entrega y garantía. Usar al arrancar un proyecto nuevo de cliente, o cuando se pregunte por el proceso o checklist de entrega.
argument-hint: [nombre-cliente] [plan: basico|profesional|full]
---

# Nuevo cliente — Lupa Servicios Digitales

Proceso completo para entregar una web 100% profesional para: $ARGUMENTS

## Configuración inicial (una sola vez, no por cliente)

Antes de usar esta skill por primera vez, correr `/run-skill-generator` en el template base de Lupa. Levanta el proyecto en limpio, registra qué comandos y variables de entorno hacen falta (Supabase, etc.), y lo graba como skill propia (`.claude/skills/run-lupa/`). De ahí en adelante `/run` y `/verify` siguen esa receta en vez de adivinarla, y cualquier cliente nuevo clonado del template la hereda automáticamente. Si el proceso de build o levantamiento cambia más adelante, correrlo de nuevo.

## Planes de referencia

Posicionamiento: no se vende "una página web", se vende el sistema que convierte a una empresa invisible en Google en una que sus clientes potenciales encuentran, confían y contactan.

### Básico — $220.000 · 7-10 días hábiles
Incluye: diseño a medida 100% responsive (no plantilla), dominio propio a nombre del cliente (1er año incluido), hosting 1er año sobre Vercel, botón/formulario de contacto a WhatsApp, SSL desde el día uno, secciones estándar (Inicio, Servicios, Nosotros, Contacto).
No incluye: blog, SEO técnico, Google Analytics, panel de administración (cambios de texto/imagen los hace Lupa, no autogestionable), redes sociales.
Para quién: negocios sin presencia digital o con algo muy viejo. Punto de entrada, no la solución completa de captación por Google.

### Profesional — $380.000 · 12-15 días hábiles
Todo lo de Básico, más: blog con panel propio de carga (cliente o Priscila publican sin tocar código), SEO técnico on-page (metadatos por página, sitemap.xml, robots.txt, schema.org), GA4 con eventos de seguimiento (clicks en WhatsApp, envíos de formulario).
No incluye: panel de administración del resto del sitio (solo blog, no home/textos/imágenes generales), redacción del contenido inicial del blog (la aporta el cliente o Priscila), redes sociales.
Para quién: quiere que el sitio atraiga gente por Google activamente, no solo existir.

### Full — $550.000 · 15-20 días hábiles
Todo lo de Profesional, más: panel de administración completo (home, contacto, testimonios/casos destacados, imágenes generales, sin pedírselo a Lupa), bandeja de mensajes de contacto organizados en el panel (marcables como atendidos), 3 piezas de contenido inicial armadas por Priscila (texto + fotos que aporta el cliente: 1 testimonial con nombre/cargo/foto, 1 pieza "detrás de escena", 1 caso de éxito), soporte prioritario 1er mes.
No incluye (aclarar siempre en la venta): producción/edición de video (las 3 piezas son texto + fotos, video se cotiza aparte), gestión activa de redes sociales, publicidad paga.
Para quién: quiere autonomía total del sitio sin depender de Lupa día a día, y arrancar con contenido de peso desde la entrega.

### Fuera de los 3 planes — capas separadas, precio propio
- **Mantenimiento mensual**: $25.000/mes solo mantenimiento (actualizaciones, backups, soporte técnico continuo), o $60.000/mes con 2 entradas de blog redactadas y publicadas por Lupa.
- **Plan Integral de Redes** (precio a definir): gestión activa de Instagram, Facebook, LinkedIn, edición de video y Google Business Profile — el combo que Priscila ya opera para Iron Tower como caso de referencia.
- Publicidad paga (Google/Meta Ads) queda para más adelante, cuando haya casos propios de contenido/redes que la respalden.

Confirmar el plan contratado antes de empezar — determina qué secciones de este checklist aplican. Fuente: `Planes_Lupa.pdf`.

## Flujo de trabajo (10 pasos)

1. **Cobro de la seña** — 50% antes de empezar. No arrancar sin esto confirmado.
2. **Kickoff / relevamiento** — reunión corta: contenido, referencias visuales, datos de contacto. Pedir que el cliente mande el contenido real cuanto antes; el plazo de entrega corre desde que llega completo, no desde la firma.
3. **Alta de infraestructura**:
   - Dominio a nombre del cliente (NIC Argentina para `.com.ar`, Hostinger para internacional)
   - Proyecto Vercel y Supabase: a nombre del cliente si NO tiene mantenimiento contratado, en cuenta de Lupa si SÍ lo tiene
   - Clonar el template SIN borrar `.git`: renombrar `origin` a `template` (deshabilitarle el push), y agregar el repo nuevo del cliente como `origin`. Esto deja el historial conectado para poder traer fixes del template más adelante con `git fetch template` + `git cherry-pick`, en vez de copiar y pegar a mano
     ```
     git clone <url-template> nombre-cliente-web
     cd nombre-cliente-web
     git remote rename origin template
     git remote set-url --push template no-push
     git remote add origin <url-repo-nuevo-del-cliente>
     ```
4. **Diseño / boceto inicial** — validar la home con el cliente antes de construir el resto del sitio. No avanzar con todas las secciones sobre una dirección visual todavía no aprobada.
5. **Desarrollo** — usar el template base, adaptar paleta y tipografía a la identidad propia del cliente (nunca genérica ni reciclada de otro cliente).
6. **Contenido real + SEO técnico** — cargar el contenido que mandó el cliente (nunca lorem ipsum). Configurar en esta etapa, no después:
   - Metadatos, `sitemap.xml`, `robots.txt`, schema.org
   - Google Analytics 4 + banner de consentimiento de cookies
   - Alta del sitio en Google Search Console y envío del sitemap
   - Si reemplaza un sitio existente: mapear redirects 301 de URLs viejas a nuevas para no perder el posicionamiento que ya tenía
7. **QA propio antes de mostrar** — correr `/verify` para confirmar que el sitio funciona de verdad (no solo que compila). Además, revisar a mano en celular y PC: formulario de contacto, botón de WhatsApp, velocidad de carga, imágenes o textos rotos, y correr Lighthouse (mínimo 90 en Performance y Accesibilidad en la home).
8. **Entrega y ronda de revisiones** — la cantidad de rondas incluidas depende del plan contratado, no son ilimitadas.
9. **Capacitación + cobro del saldo** — mostrar cómo usar el panel de administración, cobrar el 50% restante antes o al momento de la entrega.
10. **Garantía y mantenimiento** — 15 días de correcciones menores post-entrega. Si contrató el plan de mantenimiento mensual, activar monitoreo con BetterStack: uptime + log drain de Vercel para errores de producción. Revisión mensual del cliente en mantenimiento: actualizaciones de dependencias, backups de Supabase, y lectura de logs de errores.

## Checklist de sitio profesional (verificar antes del paso 8)

**Visibles al toque**
- [ ] Meta tags de Open Graph (vista previa correcta al compartir el link por WhatsApp o redes)
- [ ] Favicon propio (no el genérico de Next.js/Vercel)
- [ ] Página 404 personalizada con la marca del cliente
- [ ] Estados de carga (skeleton/spinner), nunca pantallas en blanco

**Accesibilidad**
- [ ] Contraste de texto suficiente
- [ ] `alt` en todas las imágenes
- [ ] Navegación por teclado y foco visible en botones/links

**Formulario de contacto**
- [ ] Notificación automática por mail vía Resend al llegar un mensaje nuevo
- [ ] Campo honeypot como protección anti-spam

**Seguridad**
- [ ] `.env.local` en `.gitignore` desde el primer commit, ningún token hardcodeado en el código
- [ ] Credenciales del panel nunca enviadas en texto plano por WhatsApp — usar contraseña inicial con cambio forzado en el primer login, o un gestor de contraseñas

**Legal**
- [ ] Política de privacidad y términos de uso básicos, adaptados al cliente (no genéricos sin tocar)
- [ ] Banner de consentimiento de cookies (GA4 está activo desde el paso 6, no puede faltar)

**Control de versiones**
- [ ] Repositorio propio del proyecto en GitHub, con commits ordenados

## No negociable

- El dominio SIEMPRE queda a nombre del cliente, sin excepción, incluso cuando Lupa gestiona el hosting.
- Nunca prometer resultados de SEO como garantía ("vas a estar primero en Google") — solo comprometer la implementación correcta de buenas prácticas.
