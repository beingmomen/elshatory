# beingmomen.com — Copilot Instructions

Portfolio site for Abdelmomen Elshatory. Nuxt 4 + Nuxt UI 4, Arabic RTL, backend-driven data.

See [CLAUDE.md](../CLAUDE.md) for full architecture reference and [README.md](../README.md) for setup.

## Build & Test Commands

```bash
pnpm dev        # Dev server (port 3000)
pnpm build      # Production build
pnpm lint       # ESLint check
pnpm lint:fix   # ESLint auto-fix
pnpm typecheck  # Type checking
```

## Architecture

**Data flow**: Pages → `useAPI()` / `useApiRequest()` → `$api` plugin → Backend API

| Composable | Use For |
|---|---|
| `useAPI(path, opts)` | Declarative SSR-friendly fetching (wraps `useFetch`). Errors auto-toast. |
| `useApiRequest()` | Imperative mutations (forms, POST/DELETE). Call `.post()`, `.delete()`. |
| `$fetch('/api/...')` | Direct server route calls (CRUD pages) |

**Content-managed data** (agents, commands, skills, mcp): stored as markdown in `content/{collection}/{slug}.md`, queried with Nuxt Content's `queryCollection()`.

**CRUD operations** only work in dev — `ensureDevOnly()` blocks them in production.

## Key Conventions

### Data Fetching (SSR-safe)
```javascript
const { data } = await useAPI('/endpoint', {
  key: 'unique-cache-key',
  default: () => [],
  transform: response => response.data || []
})
```

### Cloudinary Image URLs
Always remap images in transform — if not starting with `http`, prepend `cloudinary.cloudinaryUrl`:
```javascript
const { cloudinary } = useRuntimeConfig().public
image: item.image?.startsWith('http') ? item.image : `${cloudinary.cloudinaryUrl}${item.image}`
```

### Content CRUD (Agents / Skills / Commands / MCP)
```javascript
// Read list
const { data } = await useAsyncData('key', () =>
  queryCollection('agents').order('created_at', 'DESC').all()
)
// Delete
await $fetch('/api/agents', { method: 'DELETE', body: { slug } })
await refreshNuxtData('key')
```

## RTL Rules

- **Always** use `text-right` for text alignment (not `text-left`)
- "Forward" arrows use `i-lucide-arrow-left` (RTL reversal)
- Icons: `i-lucide-name` format (not `lucide:name`)
- Semantic colors only: `error`, `success`, `warning`, `info` (not `red`, `green`)

## Route Caching Strategy

| Pattern | Rule |
|---|---|
| `/`, `/about`, `/projects`, `/sdlc*`, `/adr*` | Prerendered at build |
| `/blog`, `/api/blog` | SWR 600s |
| `/blog/**`, `/contact`, `/testimonial`, CRUD pages | SSR (dynamic) |

## Critical Files

| File | Purpose |
|---|---|
| `app/app.config.ts` | Global data (picture, email, meetingLink), UI theme config, footer links |
| `nuxt.config.ts` | Modules, runtimeConfig, routeRules |
| `app/app.vue` | Sets `dir="rtl"` + `lang="ar"`, wraps `<UApp :locale="ar">` |
| `app/assets/css/main.css` | Tailwind v4 theme, `.text-gradient` utility |
| `server/utils/markdown.ts` | `createMarkdownFile()`, `deleteMarkdownFile()`, `slugify()`, `ensureDevOnly()` |
| `app/utils/links.ts` | Nav and social link data |
