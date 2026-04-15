---
name: add-section
description: Add new slides and article content to an existing presentation. Use when the user wants to append, update, or extend an existing presentation with new sections — like an addendum, update, or additional topic.
tools: Read, Write, Edit, Glob, Grep, Bash, Agent
---

# Add Section to Existing Presentation

Append new content to an existing presentation without modifying the current slides. This handles the full pipeline: new slides (desktop + mobile), article update, and PDF update.

## When to Use

- User wants to add an "update" or "addendum" to an existing presentation
- User has new content to append to a presentation that's already built
- User wants to extend a presentation with additional sections

## Workflow

### 1. Understand the Existing Presentation

Read the current presentation files:
```
src/presentations/<slug>/index.tsx       # Current slides and sections
src/presentations/<slug>/ArticleSection.tsx  # Current article
src/presentations/<slug>/ArticlePDF.tsx      # Current PDF
```

Identify:
- How many sections currently exist
- The last section's ID and position
- What icons are already imported
- The naming pattern for slide arrays (e.g., `topicDesktop`, `topicMobile`)
- The theme being used

### 2. Gather New Content

The user will provide:
- An article, notes, or bullet points for the new section(s)
- Or a topic to research (use `/research` first)

### 3. Create New Icons (if needed)

If the new sections need custom icons, add them to `src/components/SectionIcons.tsx`:
- 24x24 viewBox, stroke-based, `currentColor`
- Follow the naming pattern: `Icon[Name]`

### 4. Build New Slides

For each new section, create both desktop and mobile slide arrays:

#### Desktop Array Pattern
```typescript
const newSectionDesktop: React.ReactNode[] = [
  <SectionOpener icon={IconName} superTitle="SECTION LABEL" pattern="dot-grid-bold">
    Big Headline with <span className="highlight-green">Key Term</span>
  </SectionOpener>,
  // 2-4 content slides
  <PromptSlide question="Discussion question here?" />,
  <BigText>Takeaway with <span className="highlight-green">emphasis</span></BigText>,
];
```

#### Mobile Array Pattern
Same content, adjusted for single-column layout with slightly smaller text.

#### Critical Rules

- **Text colors on dark backgrounds**: Use `text-foreground` and `text-muted-foreground`. NEVER use `text-gray-*` on dark-background slides (`dot-grid`, `dot-grid-bold`, `diagonal-lines`, `cross-grid`, `glow-br`).
- **Text colors on white backgrounds**: Use the theme-aware light utilities — `text-light`, `text-light-secondary`, `text-light-muted`, `border-light`, `bg-light-surface`. See the Text Color Rules in `/Users/bcap/Development/bb-slide/CLAUDE.md`.
- **Vary background patterns** across sections for visual rhythm.
- **~50/50 dark/light balance.** The whole presentation (existing + new sections combined) should sit around half dark, half light. Before finalizing, count dark vs light across both desktop and mobile arrays — if the new section tips the deck outside ~40-60%, flip 1-2 of your new slides to rebalance.
  - Light tends to suit: stat callouts, case studies, pull quotes, "why this matters" conclusions, curriculum/structured lists, frame-shifting moments.
  - Dark tends to suit: section openers, mood-setting serif statements, data-heavy charts, cinematic transitions.
  - When flipping dark → light: change `diagonal-lines` / `cross-grid` / `dot-grid` to `bg-light-surface text-light <pattern>-light`, swap `text-muted-foreground` → `text-light-muted`, `text-foreground` → `text-light`.
- **Each section needs both desktop and mobile arrays** — and the same beats should land on the same tone across both.

### 5. Add Sections to PresentationConfig

Append new sections to the `sections` array in the `PresentationConfig`:

```typescript
{
  id: "new-section",
  label: "Section Title",
  icon: IconName,
  desktopSlides: newSectionDesktop,
  mobileSlides: newSectionMobile,
},
```

**Important**: Add AFTER the existing sections. Don't modify existing sections.

### 6. Update the Article

In `ArticleSection.tsx`, add the new content:
- Insert an HR divider before the new content: `<div className="h-px bg-gray-300 mb-20 md:mb-28" />`
- Add section headers with `SectionDivider` components using the new icons
- Place new content BEFORE the footer section
- Follow the same HTML structure and Tailwind classes as existing content

### 7. Update the PDF

In `ArticlePDF.tsx`, add matching content:
- Use `@react-pdf/renderer` components (`Text`, `View`)
- Use the presentation's `Bullet` and `Divider` helper components
- Add between existing content and footer
- Match the article structure

### 8. Update Presenter Notes

After updating slides and article, update the presenter notes to stay in sync:
- `src/presentations/<slug>/PresenterNotesSection.tsx` — add slide blocks for the new sections
- `src/presentations/<slug>/PresenterNotesPDF.tsx` — add matching content to the PDF

Use `/generate-presenter-notes` or follow its workflow. If the presenter notes files don't exist yet, create them from scratch.

### 9. Verify

```bash
npx tsc --noEmit    # Type check
npm run build       # Full build
```

## Post-Addition

After the new sections compile cleanly, run `/contrast-audit <slug>` to verify all text is readable. Fix any contrast failures before presenting the results to the user.

## Output

When done, tell the user:
1. What sections were added and their URL paths
2. Summary of new slide count (desktop + mobile)
3. Confirmation that article, PDF, and presenter notes were updated
4. Contrast audit results (pass/fail summary)
5. Any icons that were created
