---
name: refresh-og-image
description: Regenerate the Open Graph (social share) image for a presentation after the first slide changes. Use automatically whenever a presentation's title slide, theme, or slug is updated so the OG preview at `/og/<slug>.png` stays in sync with what users will see when the link is shared.
tools: Bash, Read, Glob
---

# Refresh OG Image

Keep the Open Graph preview image in sync with the first slide of each presentation. OG images are served from `public/og/<slug>.png` by the Netlify edge function at `netlify/edge-functions/og-meta.ts`.

## When to Use

Trigger this skill automatically after any of the following:

- A new presentation is added to `src/presentations/index.ts`
- A presentation's slug changes, is renamed, or replaces another
- The first slide (section `title`, slide 1) of any presentation is modified — copy, layout, theme, fonts, background
- The theme referenced by a presentation is edited in a way that affects the title slide
- A deck is swapped in place (e.g. v2 replaces v1 at the same route)

If the user updates any slide deck, proactively ask: "Do you want me to refresh the OG image?" — unless they explicitly asked for it, in which case just run the skill.

## Steps

1. **Confirm dev server is running on port 8080.** The generator screenshots live URLs. If nothing is running, start it:
   ```bash
   npm run dev
   ```
   (or use `preview_start` in this environment — the generator needs port 8080)

2. **Run the generator:**
   ```bash
   npm run generate:og
   ```
   This screenshots the first slide of every registered presentation at 1200×630 and writes `public/og/<slug>.png`.

3. **Verify output:** Check that `public/og/<slug>.png` exists and the modification time is recent. Optionally open it to confirm the image shows the correct title slide.

4. **Commit the result:** The PNGs are committed to the repo so Netlify serves them on deploy. Stage `public/og/` along with the code change that triggered the refresh.

## Notes

- The generator discovers slugs by parsing `src/presentations/index.ts` — no manual slug list to maintain.
- URLs used: `http://localhost:8080/<slug>/title/1?og`. The `?og` query param can be used by components to hide UI chrome in the screenshot.
- If a presentation is removed, delete the stale `public/og/<old-slug>.png` manually.
- The edge function (`netlify/edge-functions/og-meta.ts`) injects `<meta property="og:image">` pointing at `/og/<slug>.png` for every presentation URL — no code change needed per deck.
