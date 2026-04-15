---
name: review-presentation
description: Review an existing presentation for visual bugs, text readability issues, theme compliance, and content quality. Use when a presentation has been created or updated and needs a quality check before sharing.
tools: Read, Glob, Grep, Bash, Agent
---

# Presentation Reviewer

Audit a presentation for common issues that break the visual experience. This catches problems before the user has to find them on screen.

## When to Use

- After creating a new presentation (`/new-presentation`)
- After adding sections (`/add-section`)
- When the user asks to review or QA a presentation
- Proactively after any significant presentation changes

## Review Checklist

### 1. Text Color Compliance (Critical)

This is the #1 source of visual bugs. Scan all slide arrays for:

**Dark-background violations:**
- Search for `text-gray-` classes used alongside dark background patterns (`dot-grid`, `dot-grid-bold`, `diagonal-lines`, `cross-grid`, `glow-br`)
- These make text invisible on dark backgrounds
- Fix: Replace with `text-foreground` (headings) or `text-muted-foreground` (body)

**What to check:**
```bash
# Find potential violations in presentation files
grep -n "text-gray-" src/presentations/<slug>/index.tsx
```

Then cross-reference each match with its parent slide's background pattern. If the slide uses a dark pattern, it's a bug.

**Safe patterns (no review needed):**
- Slide primitives (`Slide`, `BigText`, `SerifStatement`, `SectionOpener`, `GridCard`, `NumberedItem`, `PromptSlide`, `QuoteCard`) handle their own colors
- `WhiteSlide` and `*-light` pattern variants can use `text-gray-*`

### 2. Desktop + Mobile Parity

For every section in the `PresentationConfig`:
- Verify both `desktopSlides` and `mobileSlides` arrays exist
- Verify they have roughly comparable content (mobile might have fewer slides but shouldn't skip entire topics)
- Check that mobile slides use appropriate sizing (smaller text variants)

### 3. Section Structure

Each section should follow the established pattern:
- Opens with `SectionOpener` (has icon, superTitle, headline)
- Has 2-5 content slides
- Includes at least one `PromptSlide` for discussion
- Ends with a takeaway slide (`BigText` with `highlight-green`)

Flag sections that are missing any of these elements.

### 4. Highlight Green Usage

- Every major headline should use `<span className="highlight-green">` on the key term
- Check that it's not overused (1 per headline, not multiple per slide)

### 5. Background Pattern Variety

Check that sections use different background patterns. If 3+ consecutive sections use the same pattern, suggest alternatives:
- Dark options: `dot-grid`, `dot-grid-bold`, `diagonal-lines`, `cross-grid`, `glow-br`
- Light options: `dot-grid-light`, `cross-grid-light`, `diagonal-lines-light`

### 5a. Dark/Light Balance (~50/50)

Count dark vs light slides in each array (desktop AND mobile). The whole deck should sit roughly 50/50 — anything outside ~40-60% in either direction is a finding. All-dark decks feel monotonous; light slides give pull quotes, stats, case studies, and "why this matters" moments room to breathe.

- **Dark-background slides** (count as dark): any slide using `dot-grid`, `dot-grid-bold`, `diagonal-lines`, `cross-grid`, `glow-br` as its outer pattern, plus bare `<Slide>` containers and `SectionOpener` (uses dark `dot-grid`), `PromptSlide` (dark default).
- **Light-background slides** (count as light): `WhiteSlide`, any slide with `bg-light-surface` or `*-light` pattern variants on the outer container.

If the ratio is off, flag it as an Issue and recommend 2-4 candidate flips — typically back-to-back serif-statement slides, case-study / pull-quote / "why this matters" slides, or frame-shifting moments. When recommending a flip, note that BOTH the background pattern AND all child text color classes must change per the Text Color Rules in `/Users/bcap/Development/bb-slide/CLAUDE.md` (`text-muted-foreground` → `text-light-muted`, `text-foreground` → `text-light`, etc.).

Also check desktop/mobile tonal parity: the same narrative beat should land on the same tone in both arrays.

### 6. TypeScript Compilation

```bash
npx tsc --noEmit
```

Must pass clean. No type errors.

### 7. Article & PDF Sync

- Verify `ArticleSection.tsx` covers all the same topics as the slides
- Verify `ArticlePDF.tsx` covers the same content as `ArticleSection.tsx`
- Check that section icons match between slides and article

### 8. Icon Imports

- All icons used in `PresentationConfig` sections are imported
- All icons used in `ArticleSection.tsx` are imported
- No unused icon imports

### 9. Registration

- Presentation slug exists in `src/presentations/index.ts`
- Route is accessible

## Output Format

Present findings as:

```markdown
## Presentation Review: [slug]

### ✅ Passing
- [What's good]

### ⚠️ Warnings
- [Non-critical issues]

### ❌ Issues Found
- [Critical issues that need fixing]
  - File: `path/to/file.tsx`, line ~XX
  - Problem: [description]
  - Fix: [what to change]
```

## Auto-Fix

If the user asks to fix issues (or if running as part of another skill's pipeline), apply fixes directly:
- Text color violations → swap classes
- Missing highlight-green → add to key term
- TypeScript errors → fix type issues

Always re-run `npx tsc --noEmit` after fixes to confirm resolution.

## Contrast Audit

After the static review is complete, run `/contrast-audit <slug>` to check computed contrast ratios in the browser. This catches issues that class-name scanning misses — like theme-aware classes that still produce poor contrast on certain backgrounds. Include the contrast audit results in your review output.
