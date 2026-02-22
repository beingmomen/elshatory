# CLAUDE.md — Portfolio (new-client)

## Commands

```bash
pnpm dev          # Start development server (port 3000)
pnpm build        # Build for production
pnpm lint         # Run ESLint
pnpm lint:fix     # Run ESLint with auto-fix
```

## Architecture

- **Framework**: Nuxt 4.3.1 + Nuxt UI 4
- **CSS**: Tailwind CSS v4 + Nuxt UI theme system
- **Data**: Backend API (not Nuxt Content)
- **Language**: Arabic RTL (dir="rtl", lang="ar")
- **Font**: Tajawal (Arabic) + Space Grotesk (Latin)
- **Theme**: Primary = picton, Neutral = slate

## Data Flow

```
Pages → Composables → useApiRequest → $api plugin → Backend API
```

- `app/plugins/api.ts` — Creates `$api` helper with base URL from runtimeConfig
- `app/composables/useApiRequest.js` — Generic HTTP request wrapper with error handling
- `app/composables/useLanding.js` — Landing page data (hero, skills, services, etc.)
- `app/composables/useBlog.js` — Blog list + single blog
- `app/composables/useServices.js` — Services data
- `app/composables/useProjects.js` — Projects data (static)
- `app/composables/useExperiences.js` — Work experiences data (static)
- `app/composables/useFormatDate.js` — Date formatting utility
- `app/composables/useErrorHandler.js` — Toast-based error handling

## Component Organization

```
app/components/
├── landing/           # Landing page sections
│   ├── HeroSection/   # Hero with typed text (8 sub-components)
│   ├── SkillsSection  # Skills marquee slider
│   ├── About          # About section (inline data)
│   ├── ServicesSection # Services grid
│   ├── WorkExperience # Work timeline (useExperiences)
│   ├── TestimonialsSection # Review marquee
│   ├── ProjectsSection # Project carousel
│   ├── ClientsSection  # Client logos
│   ├── Blog           # Latest 3 blogs (API)
│   └── FAQ            # Accordion tabs (inline data)
├── blog/              # Blog page components
├── animations/        # Marquee, ReviewCard, LinkPreview
├── common/            # Social links
├── form/              # File upload components
├── sdlc/              # SDLC English components (7)
├── sdlc-ar/           # SDLC Arabic components (7)
├── AppHeader.vue      # Navigation header
├── AppFooter.vue      # Footer
├── ColorModeButton.vue # Dark/light toggle
└── PolaroidItem.vue   # Polaroid image card
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with 10 sections |
| `/blog` | Blog list with cards grid |
| `/blog/[slug]` | Single blog with sidebar + TOC |
| `/about` | About page with polaroid gallery |
| `/projects` | Projects grid |
| `/contact` | Contact form (Joi validation) |
| `/testimonial` | Testimonial form (Cloudinary upload) |
| `/sdlc` | SDLC English page |
| `/sdlc-ar` | SDLC Arabic page |

## Styling

- **Tailwind v4** with `@theme` for custom colors
- Custom picton color scale defined in `app/assets/css/main.css`
- `.text-gradient` and `.bg-gradient-primary` utility classes
- SDLC glassmorphism and aurora animation styles
- Skills slider with `@keyframes scroll`
- Typography styles in `app/assets/css/typography.css`

## RTL

- Arabic-first: `dir="rtl"`, `lang="ar"` on `<html>`
- UApp uses `import { ar } from '@nuxt/ui/locale'`
- Use `text-right` for text alignment
- Use `i-lucide-arrow-left` for "forward" arrows (RTL)

## Nuxt UI 4 Patterns

- Use semantic colors: `error`, `success`, `warning`, `info` (not `red`, `green`, etc.)
- Icon format: `i-lucide-name` (not `lucide:name`)
- UApp locale: `<UApp :locale="ar">`
- Toast via `useToast()` with semantic colors

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `BASE_URL` | Backend API base URL |
| `SITE_URL` | Public site URL |
| `PORT` | Server port |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_UPLOAD_PRESET` | Upload preset |
| `CLOUDINARY_API_KEY` | API key |
| `CLOUDINARY_URL` | Base URL |
| `LOGO` | Site logo URL |

## Server Routes

- `server/api/blog.get.js` — Proxy blog API
- `server/plugins/epipe-handler.ts` — EPIPE error handler
