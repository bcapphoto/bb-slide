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
- `PresenterNotesSection.tsx` — Slide-by-slide presenter cheat sheet
- `PresenterNotesPDF.tsx` — PDF version of presenter notes
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
- `/:slug/article` → full article page
- `/:slug/presenter-notes` → presenter cheat sheet (not linked in nav, URL-only access)

## Skills

- `/research` — Enrich content with stats, quotes, case studies, and data
- `/write-article` — Collaborate on writing the foundational article
- `/new-presentation` — Scaffold a complete new presentation from content
- `/add-section` — Append new sections to an existing presentation
- `/generate-presenter-notes` — Generate or update slide-by-slide presenter notes
- `/review-presentation` — QA audit for visual bugs, text readability, theme compliance

## Voice & Copywriting

This project produces content in two distinct voices — always clarify which one before writing:

- **Brand Blvd voice** — For anything published as the company (slide copy, presentation articles, marketing content). Use `/bb-voice` for tone guidance and `/bb-copywriting` for drafting or rewriting. These skills are installed globally and define BB's brand voice.
- **Bryan's voice** — For anything written as Bryan personally (thought leadership, personal articles, LinkedIn posts). Reference Bryan's writing style in memory instead.

**Rule:** When asked to write an article, slide copy, or any prose content, ask first: *"Is this written in Bryan's voice or Brand Blvd's voice?"* — then use the appropriate skill/style.

## Design System

Brand Blvd has an authoritative visual design system documented in `design.md` at the project root. This file defines the canonical colours, typography, logo usage, graphic elements, photography direction, and digital implementation specs. It was extracted from the official Brand Blvd Figma styleguide.

### How to use it

- **Always run `/bb-design` when creating or modifying themes, slides, or any visual output** for Brand Blvd presentations. The skill reads `design.md` and enforces compliance.
- **All new themes must align with `design.md`** — use the official colour palette (Canvas, Signal, Imprint), typography system (Neue Haas Grotesk Display Pro, Text Pro, Editors Note), and graphic treatments (Signal highlights, BB monogram patterns, frosted panels).
- **The `brand-blvd-v2` theme** is the design-system-aligned theme. Use it for all new presentations. The original `brand-blvd` theme is legacy.
- **When creating slides:** follow the Signal highlight rules (one key word per headline, Signal green behind it, Imprint text on top). Use BB monogram or halftone dot patterns for background textures. Use display type scale from the design system.
- **When reviewing or auditing presentations:** run `/bb-design` to check visual compliance against the design system.

### Key design tokens (quick reference)

| Token | Value | Usage |
|-------|-------|-------|
| Canvas | `#F8F6F0` | Default light background — warm, not white |
| Signal | `#C7F265` | Accent / highlight / CTA energy |
| Imprint | `#212529` | Primary text and dark backgrounds |
| Display font | Neue Haas Grotesk Display Pro | Headings, heroes, display sizes |
| Text font | Neue Haas Grotesk Text Pro | Body copy, UI, captions |
| Serif font | Editors Note | Pull quotes, editorial accents — sparingly |

### Three-skill system for Brand Blvd content

| Skill | Governs | When to use |
|-------|---------|-------------|
| `/bb-design` | Pixels — colours, type, layout, patterns | Creating/modifying themes, slides, visual components |
| `/bb-voice` | Tone — how BB speaks and sounds | Checking tone, reviewing copy for brand fit |
| `/bb-copywriting` | Words — writing and rewriting copy | Drafting or rewriting any Brand Blvd prose |

## Key Conventions

- All visual styling flows through the theme system — never hardcode HSL values in components
- Use `hsl(var(--primary))` or Tailwind `text-primary` / `bg-primary` classes
- Use `highlight-green` class for the branded text pill highlight
- Each presentation needs both desktop and mobile slide arrays
- Desktop uses horizontal snap-scroll within sections; mobile uses flat vertical scroll
- Articles are the source of truth — slides are derived from article content
- Presenter notes must stay in sync with slides and article — update them whenever slides or article change
- PDF accent color comes from `theme.pdf.accentColor`
- **Aim for roughly 50/50 dark/light slide balance** in every deck (both desktop and mobile arrays) — all-dark decks feel monotonous; light slides give stats, pull quotes, case studies, and "why this matters" moments room to breathe. Count tones after drafting and rebalance before shipping.

### Text Color Rules (Critical)
- **Dark-background slides** (`dot-grid`, `dot-grid-bold`, `diagonal-lines`, `cross-grid`, `glow-br`) — use theme-aware classes: `text-foreground`, `text-muted-foreground`, `text-primary`
- **Light-background slides** (`WhiteSlide`, `bg-light-surface`, `dot-grid-light`, `cross-grid-light`, `diagonal-lines-light`) — use theme-aware light utilities: `text-light`, `text-light-secondary`, `text-light-muted`, `border-light`, `bg-light-surface`
- **Never use `text-gray-*` on dark backgrounds** — they become invisible. Use `text-foreground` (for emphasis) and `text-muted-foreground` (for body text) instead
- **Prefer theme-aware light utilities over hardcoded grays** — `text-light` instead of `text-gray-900`, `text-light-muted` instead of `text-gray-500`, `bg-light-surface` instead of `bg-white`. These adapt to the active theme (white for `brand-blvd`, Canvas for `brand-blvd-v2`).
- The `<Slide>`, `<SerifStatement>`, `<BigText>` primitives handle their own colors correctly via theme variables — only manual `<div>`/`<p>` elements need attention

## Build & Verify

```bash
npm run dev          # Dev server on :8080
npm run build        # Production build
npx tsc --noEmit     # Type check
```
