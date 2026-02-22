# Migration Analysis: Nuxt 3 + Nuxt UI 3 → Nuxt 4 + Nuxt UI 4

## Overview

| | Old Client | New Client |
|---|---|---|
| **Framework** | Nuxt 3 | Nuxt 4.3.1 |
| **UI Library** | Nuxt UI 3 | Nuxt UI 4 |
| **CSS** | Tailwind CSS v3 | Tailwind CSS v4 |
| **Data Source** | Backend API | Backend API (same) |
| **Content** | N/A | N/A (removed @nuxt/content) |
| **Language** | Arabic RTL | Arabic RTL |
| **Base** | Custom build | nuxt-ui-templates/portfolio |

---

## Pages Comparison

| Page | Old Client | Template | Final | Action |
|------|-----------|----------|-------|--------|
| `/` | Hero+Skills+Services+Testimonials+Projects+Clients | Hero+About+Work+Blog+Testimonials+FAQ | All 10 sections merged | **Merged** |
| `/blog` | Cards grid + Newsletter + Header | Animated blog posts | API cards + newsletter + animations | **Modified** |
| `/blog/[slug]` | Sidebar+SEO+TOC+Views | Basic content renderer | Full features from old | **Enhanced** |
| `/about` | — | Polaroid gallery + avatar | Arabic content + polaroids | **From template (Arabic)** |
| `/projects` | Placeholder only | Animated project cards | useProjects() + badges | **Modified** |
| `/speaking` | — | Timeline | — | **Removed** |
| `/contact` | Form + Joi validation | — | Copied from old | **From old** |
| `/testimonial` | Form + Cloudinary upload | — | Copied from old | **From old** |
| `/sdlc` | 7 English components | — | Copied from old | **From old** |
| `/sdlc-ar` | 7 Arabic components | — | Copied from old | **From old** |

---

## Landing Page Sections

| Section | Old Client | Template | Final | Source |
|---------|-----------|----------|-------|--------|
| Hero (typed text + CTA) | Yes | Marquee images | Old hero with typed text | **From old** |
| Skills Marquee | Yes | — | Skills slider animation | **From old** |
| About | — | Yes (Content) | Inline Arabic data | **From template** |
| Services | Yes | — | Service cards from API | **From old** |
| Work Experience | — | Yes (Content) | useExperiences() composable | **From template** |
| Testimonials Marquee | Yes | Yes (Content) | Review cards from API | **From old** |
| Projects Landing | Yes | — | Project cards from API | **From old** |
| Clients Carousel | Yes | — | Client logos carousel | **From old** |
| Blog Preview | — | Yes (Content) | Latest 3 blogs from API | **From template** |
| FAQ | — | Yes (Content) | Inline Arabic FAQ data | **From template** |

---

## Components Inventory

### Landing Components

| Component | Source | Notes |
|-----------|--------|-------|
| `landing/HeroSection/index.vue` | Old | Main hero wrapper |
| `landing/HeroSection/HeroTitle.vue` | Old | Animated title |
| `landing/HeroSection/HeroTypedText.vue` | Old | Typed text effect |
| `landing/HeroSection/HeroDescription.vue` | Old | Hero description |
| `landing/HeroSection/HeroSocialMedia.vue` | Old | Social media links |
| `landing/HeroSection/HeroCallToAction.vue` | Old | CTA buttons |
| `landing/HeroSection/HeroImageDesktop.vue` | Old | Desktop hero image |
| `landing/HeroSection/HeroImageMobile.vue` | Old | Mobile hero image |
| `landing/SkillsSection.vue` | Old | Skills marquee slider |
| `landing/About.vue` | Template | Modified: inline Arabic data |
| `landing/ServicesSection.vue` | Old | Service cards grid |
| `landing/WorkExperience.vue` | Template | Modified: useExperiences() |
| `landing/TestimonialsSection.vue` | Old | Review card marquee |
| `landing/ProjectsSection.vue` | Old | Project cards with carousel |
| `landing/ClientsSection.vue` | Old | Client logos carousel |
| `landing/Blog.vue` | Template | Modified: useBlog() API |
| `landing/FAQ.vue` | Template | Modified: inline Arabic FAQ |

### Animation Components

| Component | Source | Notes |
|-----------|--------|-------|
| `animations/Marquee.vue` | Old | Infinite scroll marquee |
| `animations/ReviewCard.vue` | Old | Testimonial review card |
| `animations/LinkPreview.vue` | Old | Link preview tooltip |

### Blog Components

| Component | Source | Notes |
|-----------|--------|-------|
| `blog/CardContent.vue` | Old | Blog card with image |
| `blog/HeaderContent.vue` | Old | Blog page header |
| `blog/NewsletterContent.vue` | Old | Newsletter subscription |
| `blog/BlogSidebar.vue` | Old | Blog post sidebar |
| `blog/BlogSidebarLinks.vue` | Old | Sidebar navigation links |
| `blog/BlogSidebarSocial.vue` | Old | Social share buttons |
| `blog/BlogSidebarTableOfContents.vue` | Old | Table of contents |

### Common Components

| Component | Source | Notes |
|-----------|--------|-------|
| `common/SocialLink.vue` | Old | Social media link item |
| `common/CommonSocialPart.vue` | Old | Social section wrapper |
| `common/CommonSocialPartLink.vue` | Old | Social part link item |

### Form Components

| Component | Source | Notes |
|-----------|--------|-------|
| `form/FileInput.vue` | Old | File upload input |
| `form/TheCLDFile.vue` | Old | Cloudinary file upload |

### SDLC Components (English)

| Component | Source | Notes |
|-----------|--------|-------|
| `sdlc/SdlcHero.vue` | Old | SDLC hero section |
| `sdlc/SdlcTimeline.vue` | Old | SDLC timeline |
| `sdlc/SdlcPhaseSection.vue` | Old | Phase section |
| `sdlc/SdlcTasks.vue` | Old | Task list |
| `sdlc/SdlcDecisions.vue` | Old | Decision tree |
| `sdlc/SdlcDiagrams.vue` | Old | Diagrams section |
| `sdlc/SdlcWorkflow.vue` | Old | Workflow visualization |

### SDLC Components (Arabic)

| Component | Source | Notes |
|-----------|--------|-------|
| `sdlc-ar/SdlcArHero.vue` | Old | Arabic SDLC hero |
| `sdlc-ar/SdlcArTimeline.vue` | Old | Arabic timeline |
| `sdlc-ar/SdlcArPhaseSection.vue` | Old | Arabic phase section |
| `sdlc-ar/SdlcArTasks.vue` | Old | Arabic task list |
| `sdlc-ar/SdlcArDecisions.vue` | Old | Arabic decision tree |
| `sdlc-ar/SdlcArDiagrams.vue` | Old | Arabic diagrams |
| `sdlc-ar/SdlcArWorkflow.vue` | Old | Arabic workflow |

### Template Components (Kept)

| Component | Notes |
|-----------|-------|
| `AppHeader.vue` | Template header with nav |
| `AppFooter.vue` | Template footer |
| `ColorModeButton.vue` | Dark/light toggle |
| `PolaroidItem.vue` | Polaroid image card |

---

## Composables

| Composable | Source | Description |
|-----------|--------|-------------|
| `useApiRequest.js` | Old | HTTP request wrapper with error handling |
| `useErrorHandler.js` | Old | Toast-based error handling (color: "error" for v4) |
| `useLanding.js` | Old | Landing page API data |
| `useBlog.js` | Old | Blog API (list + single) |
| `useAPI.ts` | Old | Base API composable |
| `useFormatDate.js` | Old | Date formatting utility |
| `useServices.js` | Old | Services data |
| `useProjects.js` | Old | Projects data |
| `useExperiences.js` | Old | Work experiences data |

---

## Nuxt UI 3 → 4 Changes Applied

| Pattern | Old (v3) | New (v4) | Files Affected |
|---------|---------|---------|----------------|
| Toast color | `color: "red"` | `color: "error"` | useErrorHandler.js |
| Icon naming | `lucide:plus` | `i-lucide-plus` | FAQ.vue |
| Content removal | `queryCollection()` | API composables | All pages |
| MDC component | `<MDC>` | Plain HTML/text | About.vue, FAQ.vue |
| Content search | `UContentSearch` | Removed | error.vue |
| Content surround | `UContentSurround` | Removed | blog/[slug].vue |
| OG Image | `defineOgImage()` | Removed (nuxt-og-image) | blog/[slug].vue |
| RTL alignment | `text-left` | `text-right` | All pages |

---

## Modules

| Module | Old | New | Notes |
|--------|-----|-----|-------|
| `@nuxt/ui` | v3 | v4 | Core UI library |
| `@nuxt/image` | Yes | Yes | Image optimization |
| `@vueuse/nuxt` | Yes | Yes | Vue utilities |
| `motion-v/nuxt` | — | Yes | From template |
| `@nuxt/eslint` | — | Yes | From template |
| `@nuxt/content` | — | **Removed** | Replaced with API |
| `nuxt-og-image` | — | **Removed** | Not needed |
| `@vueuse/motion/nuxt` | Yes | Yes | Motion animations |
| `@stefanobartoletti/nuxt-social-share` | Yes | Yes | Social sharing |
| `@nuxtjs/seo` | Yes | Yes | SEO toolkit |
| `@nuxtjs/fontaine` | Yes | Yes | Font optimization |
| `@nuxt/fonts` | Yes | Yes | Font management |

---

## Theme Configuration

| Setting | Value |
|---------|-------|
| Primary color | `picton` (custom scale) |
| Neutral color | `slate` |
| Font (Arabic) | Tajawal |
| Font (Latin) | Space Grotesk |
| Direction | RTL |
| Language | Arabic (ar) |

---

## Files Removed

- `content/` directory (all YAML content files)
- `content.config.ts`
- `app/pages/speaking.vue`
- `app/components/landing/Hero.vue` (template hero, replaced)
- `app/components/landing/Testimonials.vue` (template testimonials, replaced)

---

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `BASE_URL` | Backend API base URL |
| `SITE_URL` | Public site URL |
| `PORT` | Server port |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_UPLOAD_PRESET` | Cloudinary upload preset |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_URL` | Cloudinary base URL |
| `LOGO` | Site logo URL |
