---
name: publish-article
description: Publish changes from a presentation's article.md. Diffs against the last-published snapshot, walks through each change, and asks per-section whether to propagate updates to slides (index.tsx) and the PDF (ArticlePDF.tsx). Use when the user has edited article.md and wants to sync the rest of the presentation.
tools: Read, Write, Edit, Bash, Glob, Grep, AskUserQuestion
---

# Publish Article

The user edits `src/presentations/<slug>/article.md` directly. The article component (`ArticleSection.tsx`) reads the MD at runtime, so the article page updates automatically in dev. This skill handles the *other* two consumers of the same content: the slide deck and the PDF export.

## When to use

Invoked explicitly by the user (`/publish-article <slug>` or similar) after they've edited `article.md`. Do NOT invoke automatically.

## Inputs

- Presentation slug. If not provided, ask. List available slugs with `ls src/presentations/`.

## Workflow

### 1. Diff the article

Read both files:
- `src/presentations/<slug>/article.md` (current)
- `src/presentations/<slug>/article.snapshot.md` (last published)

If snapshot doesn't exist, treat the whole article as new — copy current to snapshot and tell the user "first-time publish, snapshot created, nothing to sync."

Use `diff -u article.snapshot.md article.md` via Bash to get a unified diff. If empty, tell the user "no changes since last publish" and stop.

### 2. Group changes by section

Parse both MD files. Split by `##` headings (top-level sections). For each section that changed, note:
- Heading text
- Which subsections (`###`) changed
- A short summary of what changed (prose tweak vs structural vs new subsection etc.)

Also track changes to frontmatter (title, subtitle, section order/icons).

### 3. Walk through changes

For each changed section, show the diff for that section and ask the user (via `AskUserQuestion`) what to sync:

- **Slides** — update matching slide text in `index.tsx`?
- **PDF** — update matching prose in `ArticlePDF.tsx`?
- **Skip** — article-only change, no sync needed

Options to offer per section: `slides + pdf`, `pdf only`, `slides only`, `skip`, `show more context`.

For trivial changes (single sentence tweak, typo fix, word rename), default-suggest `skip` but still ask — the user decides.

For bigger changes (new paragraphs, new subsections, reworded headings), default-suggest `slides + pdf`.

### 4. Apply approved changes

**For slides (`index.tsx`):**
- Read `index.tsx`.
- Find slides whose `title`/`body`/`quote` text matches the old MD prose. Propose specific edits via the `Edit` tool, one at a time, showing before/after. Do NOT change slide layout, component type, or visual props — only text fields.
- If no matching slide text is found, tell the user and ask whether to skip or hand-edit.

**For PDF (`ArticlePDF.tsx`):**
- Find the matching `<Text>` blocks and propose edits.
- PDF structure mirrors the article — H2/H3/paragraphs/bullets should map 1:1 by order.

### 5. Commit snapshot

After all approved edits are applied, copy `article.md` → `article.snapshot.md` so the next diff is clean. Confirm with the user before overwriting the snapshot.

### 6. Verify

- Run `npx tsc --noEmit` to catch type errors.
- If dev server is running, remind the user to reload `/{slug}/article` and spot-check.
- For slide/PDF changes, suggest the user review the affected slides in browser + regenerate the PDF once.

## Guardrails

- NEVER auto-apply changes. Always show the edit and confirm.
- NEVER touch slide layout / visual props / component imports. Only text content.
- NEVER edit the MD file — that's the user's source of truth.
- If the user says "skip" for a section, move on without nagging.
- The snapshot is only updated at the very end, after all approvals. A mid-flight abort must leave the snapshot untouched so the user can re-run.

## Files involved per presentation

```
src/presentations/<slug>/
  article.md              ← user edits this
  article.snapshot.md     ← this skill updates this at end
  index.tsx               ← this skill proposes edits here
  ArticleSection.tsx      ← generic; do not touch
  ArticlePDF.tsx          ← this skill proposes edits here
```

## Notes on the MD format

- Frontmatter fields used by the renderer: `title`, `subtitle`, `pdfFilename`, `sections[]` (each with `heading` + `icon`). Icon names map to SVGs in `SectionIcons.tsx`: `stacks`, `identity`, `org-chart`, `agent`, `target`, `fast-forward`, `rocket`.
- `##` headings are section openers (with icon from frontmatter).
- `###` headings are subsection eyebrows.
- `- ` bullets render as bordered BB-green lists (the dominant style).
- `* ` bullets render as standard disc lists (use for stat lists).
- Blockquotes whose last paragraph starts with `— ` or `- ` treat that paragraph as the citation.
- `---` on its own line renders as a closing divider.
