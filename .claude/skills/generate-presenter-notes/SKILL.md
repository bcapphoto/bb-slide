---
name: generate-presenter-notes
description: Generate or update presenter notes for a presentation. Creates slide-by-slide talking points derived from the article and slides. Use when building a new presentation, after adding/modifying sections, or when the user wants to refresh presenter notes.
tools: Read, Write, Edit, Glob, Grep, Bash, Agent
---

# Generate Presenter Notes

Create or update the presenter notes for a presentation. Presenter notes are a slide-by-slide "cheat sheet" for whoever is presenting — point-form talking points, transition cues, and discussion prompts organized to match the slide deck exactly.

## When to Use

- After creating a new presentation (`/new-presentation`)
- After adding or modifying sections (`/add-section`)
- After updating the article or slides
- When the user explicitly asks to generate or refresh presenter notes
- Any time the slides or article have changed and the presenter notes are out of sync

## Workflow

### 1. Read the Source Material

Read all three source files:
```
src/presentations/<slug>/index.tsx          # Slides — the structure to match
src/presentations/<slug>/ArticleSection.tsx  # Article — the content to derive from
src/presentations/<slug>/ArticlePDF.tsx      # PDF — for cross-reference
```

Identify:
- Every section ID, label, and icon
- Every slide within each section (count them, understand what's on each)
- The article content that corresponds to each section
- Any PromptSlide discussion questions (include these verbatim)

### 2. Create/Update PresenterNotesSection.tsx

Located at `src/presentations/<slug>/PresenterNotesSection.tsx`

#### Layout
- White background, `max-w-[680px]` centered, same as ArticleSection
- Header with Brand Blvd logo and "Download PDF" button
- Title: "Presenter notes" with subtitle being the presentation title
- SectionDivider components (with matching icons) between major sections

#### Slide Block Pattern

For each slide in the deck, create a block:

```tsx
<div className="bg-gray-50 border-t-2 border-brand-green rounded-md p-6 mb-6">
  <p className="font-display text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">
    SECTION NAME · Slide N
  </p>
  <p className="text-sm italic text-gray-500 mb-3">
    [Brief description of the slide visual — e.g., "Section opener with speed icon"]
  </p>
  <ul className="space-y-2">
    <li className="text-base text-gray-700 leading-relaxed flex gap-2">
      <span className="text-brand-green mt-1.5 text-xs">●</span>
      <span>Talking point here</span>
    </li>
  </ul>
</div>
```

#### Talking Point Guidelines

- **3-6 points per slide** — enough to be useful, not so many it's overwhelming
- **Lead with the key claim** — what's the one thing to get across on this slide?
- **Include specific stats/numbers** — the presenter shouldn't have to memorize these
- **Note transitions** — "This sets up the next point about..." or "Pause here for reactions"
- **PromptSlides** — include the discussion question verbatim, plus 1-2 follow-up prompts
- **Section openers** — note the overarching theme being introduced
- **Summary/closing slides** — recap the key takeaways
- Don't read the slide verbatim — the notes should add context the slide doesn't show

#### PDF Download Handler

```tsx
const handleDownload = async () => {
  setShowPdf(true);
  const { pdf } = await import("@react-pdf/renderer");
  const { default: PresenterNotesPDF } = await import("./PresenterNotesPDF");
  const blob = await pdf(<PresenterNotesPDF />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "<Presentation-Title>-Presenter-Notes.pdf";
  a.click();
  URL.revokeObjectURL(url);
  setShowPdf(false);
};
```

### 3. Create/Update PresenterNotesPDF.tsx

Located at `src/presentations/<slug>/PresenterNotesPDF.tsx`

#### Structure
- Same font registration as ArticlePDF.tsx (DM Serif Display, Inter, Barlow Condensed)
- Title area: "PRESENTER NOTES" label, presentation title, green accent bar, "Brand Blvd · Confidential"
- Section headers using DM Serif Display
- Slide blocks with green top border, SLIDE N label, description, and bullet points
- `wrap={false}` on slide blocks to prevent mid-block page breaks

#### Additional Styles (beyond ArticlePDF base)

```tsx
slideBlock: {
  backgroundColor: "#F9FAFB",
  borderTopWidth: 2,
  borderTopColor: "#00C853",
  borderRadius: 4,
  padding: 16,
  marginBottom: 12,
},
slideLabel: {
  fontFamily: "Barlow Condensed",
  fontSize: 8,
  fontWeight: 600,
  letterSpacing: 2.5,
  textTransform: "uppercase",
  color: "#9CA3AF",
  marginBottom: 4,
},
slideDesc: {
  fontSize: 9,
  fontStyle: "italic",
  color: "#6B7280",
  marginBottom: 8,
},
bullet: {
  fontSize: 10,
  lineHeight: 1.7,
  color: "#374151",
  marginBottom: 4,
  paddingLeft: 12,
},
sectionHeader: {
  fontFamily: "DM Serif Display",
  fontSize: 18,
  color: "#111827",
  marginBottom: 14,
  marginTop: 24,
},
```

### 4. Wire Into Presentation Config

If creating for a new presentation, add to the config in `index.tsx`:

```tsx
import PresenterNotesSection from "./PresenterNotesSection";

// In the config object:
presenterNotesComponent: PresenterNotesSection,
```

### 5. Verify

```bash
npx tsc --noEmit    # Type check
npm run build       # Full build
```

## Keeping Notes in Sync

When updating an existing presentation:
1. Read the current PresenterNotesSection.tsx and PresenterNotesPDF.tsx
2. Compare against the current slides (index.tsx) — check for added/removed/reordered slides
3. Update only the changed sections — don't rewrite the entire file unless the structure changed significantly
4. Make sure slide numbering is correct after changes

## Output

When done, tell the user:
1. The presenter notes URL: `/<slug>/presenter-notes`
2. Number of slide blocks created/updated
3. Confirmation that PDF download works
4. Any sections that may need manual review (e.g., if article content was thin for a section)
