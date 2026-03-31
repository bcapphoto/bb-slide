# BB-Slide — Multi-Presentation System

## What This Project Is

A web-based presentation system for Brand Blvd. Each presentation is a standalone slide deck with an accompanying long-form article and downloadable PDF. Presentations are mobile-responsive, on-brand, and shareable via URL.

## Tech Stack

- React 18 + TypeScript + Vite (port 8080)
- Tailwind CSS with CSS variables for theming
- shadcn/ui components (Radix primitives)
- @react-pdf/renderer for PDF generation
- Recharts for data visualization
- React Router DOM for routing

## Architecture

### Themes (Style Guides)
- `src/themes/` — Theme definitions with full design token control
- Each theme is a `.ts` file exporting colors, typography, patterns, spacing, animations, and PDF config
- `ThemeProvider` injects CSS variables dynamically — no hardcoded colors in components
- To create a new theme: duplicate `brand-blvd.ts`, change values, register in `src/themes/index.ts`
- Presentations reference a theme by ID

### Presentations
- `src/presentations/<slug>/` — Each presentation is a self-contained module
- `index.tsx` — `PresentationConfig` with all slide content (desktop + mobile arrays)
- `ArticleSection.tsx` — Long-form article component
- `ArticlePDF.tsx` — PDF version using @react-pdf/renderer
- Registry: `src/presentations/index.ts` — maps slugs to lazy-loaded modules

### Shared Components
- `src/components/slides/` — Reusable slide primitives (Slide, BigText, SerifStatement, SectionOpener, GridCard, NumberedItem, WhiteSlide, BgImage, MobileSection, PromptSlide, QuoteCard)
- `src/components/presentation/PresentationShell.tsx` — The engine (navigation, scroll, mobile/desktop layout, URL routing, sidebar nav)
- `src/components/Section.tsx` — Horizontal snap-scroll section wrapper
- `src/components/CursorNav.tsx` — Edge-based cursor navigation
- `src/components/SectionIcons.tsx` — Custom SVG icons

### Routing
- `/` → redirects to default presentation
- `/:slug` → presentation home
- `/:slug/:section` → specific section
- `/:slug/:section/:slide` → specific slide

## Skills

- `/new-presentation` — Scaffold a complete new presentation from content
- `/write-article` — Collaborate on writing the foundational article

## Key Conventions

- All visual styling flows through the theme system — never hardcode HSL values in components
- Use `hsl(var(--primary))` or Tailwind `text-primary` / `bg-primary` classes
- Use `highlight-green` class for the branded text pill highlight
- Each presentation needs both desktop and mobile slide arrays
- Desktop uses horizontal snap-scroll within sections; mobile uses flat vertical scroll
- Articles are the source of truth — slides are derived from article content
- PDF accent color comes from `theme.pdf.accentColor`

## Build & Verify

```bash
npm run dev          # Dev server on :8080
npm run build        # Production build
npx tsc --noEmit     # Type check
```
