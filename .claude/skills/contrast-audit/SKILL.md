---
name: contrast-audit
description: Run a WCAG contrast audit on presentation slides by checking computed text and background colors in the browser. Use this skill after creating a new presentation (/new-presentation), adding sections (/add-section), reviewing a presentation (/review-presentation), or whenever the user asks about text readability, contrast, accessibility, or color issues on slides. This skill requires preview tools (preview_start, preview_eval).
---

# Contrast Audit

Audit text contrast ratios on presentation slides by running them in the browser and checking what the user actually sees — not just what the code says.

Static code analysis (grep for class names) catches obvious mistakes like `text-gray-*` on dark backgrounds, but it misses theme-dependent contrast issues where a class like `text-foreground` or `text-muted-foreground` resolves to a color that's technically too close to the background. This skill catches those cases by measuring computed colors in the browser.

## When This Runs

- **Automatically** after `/new-presentation`, `/add-section`, or `/review-presentation` complete
- **On demand** when the user asks to check contrast, readability, or accessibility
- **Proactively** if you notice a presentation was just edited and want to verify

## Workflow

### 1. Identify the Presentation

Accept a slug as argument. If none provided, check which presentation was most recently edited:

```bash
ls -t src/presentations/*/index.tsx | head -1
```

### 2. Get Section and Slide Structure

Read the presentation's `index.tsx` to extract section IDs and count slides in each array. You need this to build the navigation URLs.

For each section in the config, note:
- `id` — used in the URL path
- `desktopSlides` array name — count elements to know how many slides

### 3. Start the Dev Server

Use `preview_start` with the "dev" configuration. If already running, it reuses the existing server.

### 4. Navigate and Audit Each Slide

For each slide at `/:slug/:section/:slideIndex` (1-indexed):

1. Navigate: `preview_eval` with `window.location.href = '/<slug>/<section>/<slideIndex>'`
2. Wait briefly for render: `preview_eval` with `await new Promise(r => setTimeout(r, 500))`
3. Run the contrast check script (below) via `preview_eval`

### 5. The Contrast Check Script

Run this as an IIFE via `preview_eval`. It returns an array of failing elements:

```javascript
(() => {
  function luminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  function parseColor(str) {
    const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!m) return null;
    return [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])];
  }

  function isTransparent(color) {
    return !color || color === 'transparent' || color === 'rgba(0, 0, 0, 0)';
  }

  function getEffectiveBg(el) {
    let current = el;
    while (current && current !== document.documentElement) {
      const bg = getComputedStyle(current).backgroundColor;
      if (!isTransparent(bg)) return bg;
      current = current.parentElement;
    }
    return 'rgb(255, 255, 255)';
  }

  function contrastRatio(fg, bg) {
    const l1 = luminance(...fg);
    const l2 = luminance(...bg);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  function isLargeText(el) {
    const style = getComputedStyle(el);
    const size = parseFloat(style.fontSize);
    const weight = parseInt(style.fontWeight) || (style.fontWeight === 'bold' ? 700 : 400);
    return size >= 24 || (size >= 18.66 && weight >= 700);
  }

  const selectors = 'h1, h2, h3, h4, h5, h6, p, span, a, li, td, th, label, strong, em, b, i';
  const elements = document.querySelectorAll(selectors);
  const failures = [];

  elements.forEach(el => {
    const style = getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return;

    const text = el.textContent?.trim();
    if (!text || text.length === 0) return;

    // Skip if this element only contains child elements that will be checked separately
    const directText = Array.from(el.childNodes)
      .filter(n => n.nodeType === Node.TEXT_NODE)
      .map(n => n.textContent.trim())
      .join('');
    if (!directText && el.children.length > 0) return;

    const fgColor = parseColor(style.color);
    const bgStr = getEffectiveBg(el);
    const bgColor = parseColor(bgStr);

    if (!fgColor || !bgColor) return;

    const ratio = contrastRatio(fgColor, bgColor);
    const large = isLargeText(el);
    const required = large ? 3 : 4.5;

    if (ratio < required) {
      failures.push({
        tag: el.tagName.toLowerCase(),
        text: text.substring(0, 50),
        fg: style.color,
        bg: bgStr,
        ratio: Math.round(ratio * 100) / 100,
        required,
        large,
        className: el.className?.substring?.(0, 80) || ''
      });
    }
  });

  return failures;
})()
```

### 6. Compile the Report

Collect results across all slides and output:

```markdown
## Contrast Audit: [slug]

### Summary
- **Slides checked:** X
- **Elements passing:** Y
- **Elements failing:** Z

### Failures

| Section | Slide | Tag | Text | FG | BG | Ratio | Required |
|---------|-------|-----|------|----|----|-------|----------|
| ...     | ...   | ... | ...  | .. | .. | ...   | ...      |

### Suggested Fixes
- For each failure, suggest a specific class change (e.g., `text-muted-foreground` → `text-foreground`)
- If the background is the problem, suggest a lighter/darker pattern variant
```

### 7. Auto-Fix When Possible

If failures are found and you can identify the source element in the code:
- Locate the element in `src/presentations/<slug>/index.tsx` by matching its text content and tag
- Suggest or apply the fix:
  - Low contrast on dark bg → use `text-foreground` (headings) or `text-muted-foreground` (body)
  - Low contrast on light bg → use `text-gray-900` (headings) or `text-gray-600` (body)
  - If `text-muted-foreground` still fails, escalate to `text-foreground`

After fixing, re-run the audit on the affected slides to confirm the fix worked.

## Important Notes

- This checks **computed colors**, not class names. A class can be "correct" (theme-aware) and still fail contrast on a specific theme.
- Background detection walks up the DOM tree. For slides with overlaid patterns (like `dot-grid` or `diagonal-lines`), the effective background is the deepest non-transparent ancestor.
- Some elements (like decorative watermark text with very low opacity) will naturally fail. Skip elements with opacity below 0.1 — they're decorative.
- The audit checks desktop slides. Mobile slides use the same theme variables, so color issues found on desktop apply to mobile too.
