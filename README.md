# Nexa Innovate

Modern landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + Typography
- **UI Components**: Custom components with Headless UI patterns
- **Authentication**: NextAuth.js v4 (Credentials + Google OAuth)
- **Database**: PostgreSQL + Prisma ORM
- **CMS**: Sanity v3 (headless)
- **Testing**: Vitest (unit) + Playwright (e2e)
- **Validation**: Zod schemas
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel (optimized)

## 📋 Prerequisites

- **Node.js**: >= 20.0.0 (recommended: use `.nvmrc`)
- **Package Manager**: pnpm >= 8.0.0 (recommended) or npm
- **Database**: PostgreSQL (local or cloud)
- **Git**: For version control

## 🛠️ Development Setup

### 1. Environment Setup

```bash
# Clone and navigate to project
git clone <repository-url>
cd nexainnovate-landing

# Use correct Node version (if using nvm)
nvm use

# Install dependencies (recommended: pnpm)
pnpm install
# or
npm install
```

### 2. Environment Configuration

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your actual values:
# - DATABASE_URL: PostgreSQL connection string
# - NEXTAUTH_SECRET: Generate with `openssl rand -base64 32`
# - NEXTAUTH_URL: Your app URL (http://localhost:3001 for dev)
# - SANITY_*: Sanity project credentials (optional)
```

### 3. Database Setup

```bash
# Generate Prisma client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# Seed database with initial data
npm run prisma:seed
```

This creates an admin user: `admin@nexa.dev` / `admin123`

### 4. Start Development Server

```bash
# Start Next.js development server
npm run dev
# or
pnpm dev

# Server will start at http://localhost:3001
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run e2e

# Run tests in UI mode
npm run test:ui
```

## 🚢 Production Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Connect repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push to main

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── (app)/             # Private app routes
│   ├── (auth)/            # Authentication pages
│   ├── (marketing)/       # Public marketing pages
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── layout/           # Layout components
│   ├── marketing/        # Marketing-specific components
│   ├── ui/               # Generic UI components
│   └── utils/            # Utility components
├── lib/                   # Utility libraries
│   ├── services/         # Business logic
│   └── validations/      # Zod schemas
├── prisma/               # Database schema and migrations
├── sanity/               # Sanity CMS configuration
├── styles/               # Global styles
└── tests/                # Test files
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run test             # Run unit tests
npm run test:ui          # Run tests with UI
npm run e2e              # Run end-to-end tests

# Database
npm run prisma:generate  # Generate Prisma client
npm run prisma:migrate   # Run database migrations
npm run prisma:seed      # Seed database with initial data

# Code Quality
npx prettier --write .   # Format code
npx eslint . --fix       # Fix linting issues
```

## 🌟 Key Features

- **🎨 Modern UI**: Dark theme with green accents, responsive design
- **🔐 Authentication**: Secure login/register with NextAuth.js
- **📧 Contact Form**: Server actions with validation and email integration ready
- **📝 Blog System**: Powered by Sanity CMS with rich content
- **💼 Services Pages**: Dynamic service showcases
- **📊 Admin Dashboard**: Content management interface
- **🧪 Testing**: Comprehensive unit and e2e test coverage
- **📱 Mobile-First**: Fully responsive across all devices
- **⚡ Performance**: Optimized for Core Web Vitals
- **🔍 SEO**: Metadata, sitemap, and robots.txt included

## 🎯 Quality Standards

This project follows enterprise-level development standards:

- **Code Quality**: ESLint + Prettier + TypeScript strict mode
- **Git Workflow**: Conventional commits, automated workflows
- **Testing**: Unit tests (Vitest) + E2E tests (Playwright)
- **Performance**: Core Web Vitals optimization
- **Security**: Environment variable validation, input sanitization
- **Accessibility**: WCAG 2.1 compliance
- **Browser Support**: Modern browsers with graceful degradation

## 🔗 Links

- **Development**: http://localhost:3001
- **Documentation**: [Next.js Docs](https://nextjs.org/docs)
- **Deployment**: [Vercel Platform](https://vercel.com)

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ by the Nexa Innovate team**
```
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

