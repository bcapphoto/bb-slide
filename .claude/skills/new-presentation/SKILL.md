---
name: new-presentation
description: Scaffold a new slide presentation from content, an article, or a topic brief. Creates the full presentation module with slides, article, PDF, and routing. Use when the user wants to create a new presentation, slide deck, or topic.
tools: Read, Write, Edit, Glob, Grep, Bash, Agent
---

# New Presentation Scaffolder

Create a complete new presentation in this project. Each presentation gets its own route, its own slides, its own article, and its own PDF — all powered by the shared slide primitives and theme system.

## Workflow

### 1. Gather Input

The user will provide one or more of:
- A topic or title
- A rough outline or bullet points
- A full article or draft
- Key themes / sections they want to cover
- Images or assets

If they haven't provided enough to build a full presentation, ask clarifying questions:
- What's the core message or thesis?
- Who's the audience?
- How many main sections/themes? (3 is the default, matching the existing pattern)
- Any specific discussion prompts for the audience?
- Should it use the default theme ("brand-blvd") or a different one?

### 2. Write the Article First

Before building slides, collaborate with the user to write a comprehensive article. This is the foundational content that slides are derived from. See the `/write-article` skill for the article-writing workflow.

If the user has already provided a finished article, skip to step 3.

### 3. Create the Presentation Module

Once the article is finalized, scaffold the presentation:

#### Directory Structure
```
src/presentations/<slug>/
├── index.tsx          # PresentationConfig with all slides
├── ArticleSection.tsx # The full article as a scrollable web page
└── ArticlePDF.tsx     # PDF version of the article
```

#### Reference Files

Always read these files to understand the patterns:

- **Slide primitives**: `src/components/slides/index.tsx` — all reusable slide building blocks
- **Presentation type**: `src/presentations/presentation.types.ts` — the PresentationConfig interface
- **Example presentation**: `src/presentations/future-of-ai/index.tsx` — the reference implementation
- **Theme system**: `src/themes/brand-blvd.ts` — default theme values
- **Section icons**: `src/components/SectionIcons.tsx` — available icons (or create new ones)

#### Slide Architecture Rules

1. **Each section needs both desktop and mobile slide arrays**. Desktop slides use larger typography and multi-column grids. Mobile uses single-column, slightly smaller text.

2. **Section pattern** (follow this for each thematic section):
   - `SectionOpener` — icon + superTitle + big headline
   - 1-2 content slides (SerifStatement, data/stats, quotes, grids)
   - 1 `PromptSlide` — interactive discussion question
   - 1 summary/takeaway slide (BigText with highlight-green pill)

3. **Available slide primitives** (from `@/components/slides`):
   - `Slide` — centered content wrapper
   - `BigText` — massive uppercase headline
   - `SerifStatement` — italic serif paragraph
   - `SectionOpener` — section title slide with icon and dot-grid
   - `GridCard` — accent-bar card with superTitle/title/body
   - `NumberedItem` — stat with large number + description
   - `WhiteSlide` — white background container
   - `BgImage` — full-bleed background image
   - `MobileSection` — mobile snap-scroll wrapper
   - `PromptSlide` — discussion question with big "?" backdrop
   - `QuoteCard` — attributed quote with green border

4. **Background patterns**: Use `dot-grid`, `dot-grid-bold`, `diagonal-lines`, `cross-grid`, `glow-br` on dark slides. Use `dot-grid-light`, `cross-grid-light`, `diagonal-lines-light` on white slides. Vary them across sections for visual rhythm.

5. **Text color rules for dark vs white backgrounds** (critical — getting this wrong makes text invisible):
   - **Dark-background slides** (`dot-grid`, `dot-grid-bold`, `diagonal-lines`, `cross-grid`, `glow-br`): Use `text-foreground` for headings/emphasis and `text-muted-foreground` for body text. NEVER use `text-gray-*` classes — they are dark colors on a dark background and become unreadable.
   - **White-background slides** (`WhiteSlide`, `bg-white`, or `*-light` pattern variants): Use Tailwind gray classes (`text-gray-900`, `text-gray-600`, `text-gray-500`) as normal.
   - The slide primitives (`Slide`, `SerifStatement`, `BigText`, `SectionOpener`, `GridCard`, etc.) handle their own text colors via CSS variables. Only custom `<div>`/`<p>` elements need manual color attention.
   - When creating custom content on dark slides with `<GridCard>`, `<NumberedItem>`, or other primitives — those are fine, they use theme variables internally.

6. **Highlight green**: Use `<span className="highlight-green">word</span>` for the key term in each headline.

7. **Closing section**: Always create a summary slide that recaps all main themes with their icons and takeaway lines.

#### Article Section Rules

- White background, max-width 680px, readable long-form
- Section dividers using the section icons
- Include a "Download PDF" button that lazy-loads the ArticlePDF
- Follow the same structure as `src/presentations/future-of-ai/ArticleSection.tsx`

#### PDF Rules

- Use `@react-pdf/renderer` with the same font registration pattern
- Read the theme's PDF accent color from the theme config
- Follow the same structure as `src/presentations/future-of-ai/ArticlePDF.tsx`

### 4. Register the Presentation

After creating the module, update `src/presentations/index.ts` to add the new presentation to the `presentationLoaders` registry:

```typescript
"<slug>": () => import("./<slug>"),
```

Then register the slug for social sharing in `netlify/edge-functions/og-meta.ts` so Facebook/LinkedIn/Twitter scrapers get the right `og:image`, title, and description. Add an entry to the `presentations` dict:

```typescript
"<slug>": {
  title: "<Presentation title> - Brand Blvd",
  description: "<One-line description matching the article's lede>",
},
```

The OG image itself is generated separately via `/refresh-og-image` and lives at `public/og/<slug>.png` - the edge function just points at it. Without this registration, scrapers fall through to the bare `index.html` and show no preview image.

### 5. Generate Presenter Notes

After the article and slides are built, generate the presenter notes. Use `/generate-presenter-notes` or follow its workflow to create:
- `src/presentations/<slug>/PresenterNotesSection.tsx` — slide-by-slide web page
- `src/presentations/<slug>/PresenterNotesPDF.tsx` — downloadable PDF version

Wire the component into the config:
```typescript
import PresenterNotesSection from "./PresenterNotesSection";

// In the PresentationConfig:
presenterNotesComponent: PresenterNotesSection,
```

The presenter notes are available at `/<slug>/presenter-notes`.

### 6. Create Custom Icons (if needed)

If the presentation's themes don't match existing icons, create new SVG icon components in `src/components/SectionIcons.tsx` following the same pattern (24x24 viewBox, stroke-based, currentColor).

### 7. Verify

Run `npx tsc --noEmit` and `npm run build` to verify everything compiles.

## Voice & Tone

Bryan's full voice reference is in the `/write-article` skill. Key points for slide content:
- Clear, direct, warm, practical — a builder-teacher, not a marketer writing copy
- Short punchy sentences mixed with longer explanatory ones. Partial sentences for punch.
- Speaks from conviction, not hedging. Bold claims backed up.
- Uses "we" when talking about the team/company
- Concrete over abstract — specific numbers (always numerals), named companies, real examples
- Active voice. Strategic lens — connects "what" to "so what."
- Coins terms naturally: "process debt," "ZOG" — names once, doesn't over-explain
- Sentence case always. Double hyphens ( -- ) for asides, never em dashes.
- No corporate buzzwords, no passive voice, no PR tone, no emojis in content
- Ends sections with clear, actionable takeaways

## Post-Creation

After the presentation is built and compiles cleanly, run `/contrast-audit <slug>` to verify all text is readable. Fix any contrast failures before presenting the results to the user.

## Output

When done, tell the user:
1. The URL path for their new presentation (e.g., `/new-slug`)
2. Quick summary of sections created
3. Presenter notes URL: `/<slug>/presenter-notes`
4. Contrast audit results (pass/fail summary)
5. Remind them to add any custom images to `src/assets/` if they want background images
