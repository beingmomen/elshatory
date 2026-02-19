# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Build for production
pnpm generate     # Static site generation
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
pnpm lint:fix     # Auto-fix linting issues
pnpm postinstall  # Nuxt prepare (runs after install)
```

## Architecture

**Nuxt 3 + Vue 3 + TypeScript** personal portfolio/professional website for a MEVN Stack developer. Primary locale is Arabic (`lang="ar"`, `dir="rtl"`).

### Data Flow

```
Page/Component → Composable (useLanding, useBlog, etc.)
  → useApiRequest (error handling + toast)
    → useAPI (SSR-friendly $fetch wrapper)
      → External REST API (BASE_URL env) or Nuxt server routes (/server/api/)
```

- State is managed **only via composables** — no Pinia/Vuex
- `useApiRequest()` handles all HTTP calls with centralized error handling and toast notifications
- `useAPI()` wraps `useFetch`/`$fetch` for SSR compatibility
- Nuxt auto-imports components and composables — no manual imports needed

### Key Composables

| Composable | Purpose |
|---|---|
| `useApiRequest` | Base HTTP wrapper with error/loading/toast |
| `useAPI` | SSR-safe $fetch plugin wrapper |
| `useLanding` | Home page data |
| `useBlog` | Blog list + RSS generation |
| `useErrorHandler` | Global error handling |

### Component Organization

- `Landing/` — Hero, Skills, Services, Testimonials, Projects, Clients sections
- `Blog/` — Blog list and post components
- `Animations/` — Marquee, LinkPreview, ReviewCard
- `Layout/` — Navbar, Footer
- `Common/` — Reusable components (SocialLinks, etc.)
- `Form/` — Form components
- `Utils/` — Utility components

### Styling

- **Tailwind CSS v4** + **Nuxt UI v3** for design system
- Primary color: "picton" blue (`#0ea5ea → #0bd1d1`)
- Neutral: slate
- Dark-first theme with CSS variables in `app/assets/css/main.css`
- Custom utilities: `.text-gradient`, `.bg-gradient-primary`
- Use `clsx` for conditional class names

### Key Config Files

- `nuxt.config.ts` — Modules, SEO schema, image/Cloudinary config, Tailwind theme
- `app.config.ts` — Nuxt UI color tokens
- `app.vue` — Root with `lang="ar"` / `dir="rtl"` on `<html>`
- `ecosystem.config.cjs` — PM2 production deployment config

### Environment Variables

```
BASE_URL                    # Backend REST API base URL
SITE_URL                    # Frontend canonical URL (for SEO)
PORT                        # Server port
CLOUDINARY_CLOUD_NAME       # Cloudinary image hosting
CLOUDINARY_UPLOAD_PRESET
CLOUDINARY_API_KEY
LOGO                        # Site logo URL
```

### Server Routes

`/server/api/blog.get.js` — Fetches blogs from backend and generates `/public/rss.xml`

### Images

All images use Cloudinary via `@nuxt/image`. Use the `<NuxtImg>` component with Cloudinary provider. Supported formats: WebP, AVIF (quality: 85%).

### Performance Notes

- `nuxt-booster` handles lazy-loading and critical CSS injection
- `nuxt-delay-hydration` defers hydration to improve TTI
- `@nuxtjs/fontaine` prevents FOUT for the Tajawal Arabic font
