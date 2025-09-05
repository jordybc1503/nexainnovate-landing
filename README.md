# Nexa Innovate

Next.js 14 + TypeScript + Tailwind + Auth.js + Prisma (PostgreSQL) + Sanity v3.

## Stack
- Next.js 14 (App Router), TypeScript strict, RSC por defecto
- TailwindCSS + typography, `next/font` (Poppins/Inter)
- Auth.js (NextAuth v4), Credentials + Google
- PostgreSQL (Neon/Supabase) + Prisma
- Sanity v3 (preview + revalidate por tag `blog`)
- Validación Zod, Vitest (unit) + Playwright (e2e)
- Vercel Analytics

## Setup
1. Copia `.env.example` a `.env` y completa variables.
2. Instala dependencias: `pnpm i` o `npm i`.
3. Genera Prisma: `npm run prisma:generate`.
4. Crea/migra DB: `npm run prisma:migrate`.
5. Seed admin: `npm run prisma:seed` (crea `admin@nexa.dev` / `admin123`).
6. Sanity: crea proyecto, configura `SANITY_*` y dataset, publica schemas.
7. Dev: `npm run dev`.

## Deploy Vercel
- Variables de entorno: todas las de `.env.example`.
- Permite `cdn.sanity.io` en `next.config.mjs`.

## Scripts
- `dev`, `build`, `start`, `lint`, `test`, `e2e`, `prisma:*`

## Arquitectura
```
app/
  (marketing)/{page,servicios,servicios/[slug],sobre-nosotros,blog,blog/[slug]}
  (auth)/{login,register}
  (app)/cotizar/{page,actions}.ts
  (app)/dashboard/page.tsx
  admin/page.tsx
  api/{revalidate,health,register}
components/{ui,marketing,layout}
lib/{auth,db,cms,services/quotes,validations/quote}
middleware.ts
prisma/schema.prisma
sanity/{schemas}
```

## Blog (Sanity)
- Webhook → `POST /api/revalidate` revalida tag `blog`.
- Páginas `blog` exportan: `revalidate=3600`, `tags=['blog']`.

## Rutas protegidas
- Middleware protege `/cotizar`, `/dashboard`, `/admin` (admin requiere role=ADMIN).

## Pruebas
- Unit: `tests/unit/quotes.test.ts`
- E2E: `tests/e2e/quote.spec.ts` (requiere app corriendo y DB seed).

## Notas
- UI minimal fiel al look & feel: oscuro, acentos verdes, rounded-2xl, pill buttons.
- Client Components sólo donde hay estado (navbar dropdown, forms, wizard).

