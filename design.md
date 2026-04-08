# Brand Blvd - Visual Design System

This file is the authoritative reference for how Brand Blvd *looks*. Colours, typography, logo usage, spacing, patterns, photography, layout treatments - everything visual lives here.

**Scope:** This file covers visual execution only. For how Brand Blvd *writes and speaks* (tone, voice, copy rules, sentence construction), use the `bb-voice` skill. For writing new Brand Blvd copy from scratch, use the `bb-copywriting` skill. Those are separate systems. This file does not govern language - it governs pixels.

**When to use this file:** Any time you're creating visual output for Brand Blvd - HTML, slides, dashboards, social graphics, presentations, documents, websites, or anything with a visual surface. Load the `bb-design` skill, which reads this file and applies it.

Source: Brand Blvd Brand Styleguide (Figma). Last extracted April 7, 2026.

---

## 2. Colour Palette

### 2.1 Primary Palette

The primary palette is the foundation of all Brand Blvd visual communication.

| Name | Role | HEX | RGB | CMYK |
|------|------|-----|-----|------|
| Canvas | Background / neutral base | #F8F6F0 | 248, 246, 240 | 0, 0, 3, 3 |
| Signal | Accent / highlight / energy | #C7F265 | 199, 242, 101 | 25, 0, 72, 0 |
| Imprint | Primary text / dark anchor | #212529 | 33, 37, 41 | 0, 0, 0, 90 |

**Usage rules:**
- Canvas is the default background. Use it generously - it gives the brand its warmth and openness.
- Signal is the accent colour. It draws attention and creates energy. Use it for highlights, CTAs, and key words - never as a background fill for large areas.
- Imprint is the primary text colour and dark anchor. It replaces pure black (#000000) in almost all contexts.

### 2.2 Signal Colour Ramp (Tints)

10-step ramp from lightest to darkest. Use for backgrounds, hover states, and layered UI.

| Step | HEX |
|------|-----|
| Signal 50 | #F5FDE6 |
| Signal 100 | #EAFBCC |
| Signal 200 | #DAF7A3 |
| Signal 300 | #C7F265 |
| Signal 400 | #A8D94E |
| Signal 500 | #8BBF3A |
| Signal 600 | #6FA628 |
| Signal 700 | #558C19 |
| Signal 800 | #3D730E |
| Signal 900 | #295907 |

### 2.3 Canvas Colour Ramp (Tints)

10-step ramp from lightest to darkest.

| Step | HEX |
|------|-----|
| Canvas 50 | #FDFCFA |
| Canvas 100 | #FAF9F5 |
| Canvas 200 | #F8F6F0 |
| Canvas 300 | #F0EDE4 |
| Canvas 400 | #E5E1D5 |
| Canvas 500 | #D5D0C2 |
| Canvas 600 | #B8B3A5 |
| Canvas 700 | #9A9588 |
| Canvas 800 | #7D786C |
| Canvas 900 | #615D53 |

### 2.4 Support Palette

The support palette is still being finalized by the marketing team. Placeholder values are currently in the Figma file. This section will be updated once the team confirms the extended colour set.

**Note:** When support colours are needed before finalization, pull from the Signal and Canvas ramps above, or use Imprint-based greys.

---

## 3. Typography

### 3.1 Typeface System

Brand Blvd uses a three-typeface system:

| Typeface | Role | Weight Range | Usage |
|----------|------|-------------|-------|
| Neue Haas Grotesk Display Pro | Headings, display text, hero copy | Thin to Black (100-900) | All headings (h1-h6), display sizes (D1-D4), taglines, hero text |
| Neue Haas Grotesk Text Pro | Body copy, UI text, captions | Regular to Bold (400-700) | Paragraphs, labels, descriptions, navigation, form elements |
| Editors Note | Accent serif, editorial emphasis | Thin Italic to Bold Italic | Pull quotes, editorial accents, special callouts - used sparingly |

**Important:** Neue Haas Grotesk Display Pro and Text Pro are distinct cuts of the same family. Display is for large sizes (headings, heroes). Text is for small sizes (body, UI). Do not swap them.

### 3.2 Type Scale

All sizes defined in px with corresponding em values (base 16px). Line heights and letter spacing are specified for each level.

#### Display Sizes

| Level | Size (px) | Size (em) | Line Height | Letter Spacing | Weight | Typeface |
|-------|-----------|-----------|-------------|----------------|--------|----------|
| D1 | 80px | 5em | 88px / 1.1 | -2% | Bold (700) | Display Pro |
| D2 | 64px | 4em | 70px / 1.1 | -2% | Bold (700) | Display Pro |
| D3 | 56px | 3.5em | 62px / 1.1 | -1.5% | Bold (700) | Display Pro |
| D4 | 48px | 3em | 53px / 1.1 | -1.5% | Bold (700) | Display Pro |

#### Heading Sizes

| Level | Size (px) | Size (em) | Line Height | Letter Spacing | Weight | Typeface |
|-------|-----------|-----------|-------------|----------------|--------|----------|
| h1 | 40px | 2.5em | 48px / 1.2 | -1.5% | Bold (700) | Display Pro |
| h2 | 32px | 2em | 38px / 1.2 | -1% | Bold (700) | Display Pro |
| h3 | 28px | 1.75em | 34px / 1.2 | -0.5% | Bold (700) | Display Pro |
| h4 | 24px | 1.5em | 29px / 1.2 | -0.5% | Medium (500) | Display Pro |
| h5 | 20px | 1.25em | 24px / 1.2 | 0% | Medium (500) | Display Pro |
| h6 | 18px | 1.125em | 22px / 1.2 | 0% | Medium (500) | Display Pro |

#### Body and UI Sizes

| Level | Size (px) | Line Height | Weight | Typeface |
|-------|-----------|-------------|--------|----------|
| Body Large | 18px | 28px / 1.55 | Regular (400) | Text Pro |
| Body | 16px | 26px / 1.6 | Regular (400) | Text Pro |
| Body Small | 14px | 22px / 1.55 | Regular (400) | Text Pro |
| Caption | 12px | 18px / 1.5 | Regular (400) | Text Pro |
| Overline | 12px | 16px / 1.33 | Medium (500), uppercase | Text Pro |

### 3.3 Typography Rules

- Headings always use Neue Haas Grotesk Display Pro
- Body text always uses Neue Haas Grotesk Text Pro
- Editors Note (serif) is reserved for accent moments - pull quotes, editorial callouts, stylized intros. Use sparingly.
- Negative letter-spacing increases as type gets larger (display sizes use -2%, body uses 0%)
- Line height tightens at larger sizes (1.1 for display, 1.2 for headings, 1.5-1.6 for body)
- Never use pure black (#000000) for text. Use Imprint (#212529).

---

## 4. Logo System

### 4.1 Logo Formats

Brand Blvd has 3 logo formats:

| Format | Name | Description | Use Case |
|--------|------|-------------|----------|
| Primary | BRAND BLVD (horizontal) | Full wordmark, horizontal layout | Default for most applications - documents, website headers, presentations |
| Stacked | BRAND BLVD (stacked) | Full wordmark, stacked vertically | When horizontal space is limited - square placements, social bios |
| Symbol | BB monogram | Interlocking BB letterform | Small placements, favicons, app icons, watermarks, pattern elements |

### 4.2 Logo Colour Treatments

Each logo format has 8 approved colour treatments:

| Treatment | Description | Background | Logo Colour |
|-----------|-------------|------------|-------------|
| colour / white | Signal + Imprint logo on white | White | Signal green B + Imprint black B |
| reverse / imprint | White + Signal logo on Imprint | Imprint (#212529) | White B + Signal green B |
| imprint / white | All Imprint logo on white | White | Full Imprint (#212529) |
| white / imprint | All white logo on Imprint | Imprint (#212529) | Full white |
| white / signal | White logo on Signal | Signal (#C7F265) | Full white |
| imprint / canvas | Imprint logo on Canvas | Canvas (#F8F6F0) | Full Imprint (#212529) |
| colour on white | Signal + Imprint on white | White | Signal green B + Imprint black B |
| Greyscale | Grey treatment on grey background | Medium grey | Light grey |

**Default treatment:** colour / white (Signal + Imprint on white) is the primary treatment for most uses.

### 4.3 Logo Safezone

The safezone is defined by the width of the "B" character in the logo. This unit of space must be maintained on all sides of the logo - no other elements, text, or edges may intrude into this zone.

**Primary logo:**
- Minimum size (print): 25mm width
- Minimum size (digital): 90px width

**Stacked logo:**
- Minimum size (print): 20mm height
- Minimum size (digital): 60px height

**Symbol (BB monogram):**
- Minimum size (print): 15mm height
- Minimum size (digital): 45px height

### 4.4 Improper Logo Usage

These 9 rules apply to ALL logo formats (Primary, Stacked, and Symbol):

1. **Avoid horizontal skewing** - Do not stretch or compress horizontally
2. **Avoid vertical skewing** - Do not stretch or compress vertically
3. **Avoid rotating** - Logo must always appear level/upright
4. **Avoid rearranging** - Do not separate or reposition logo elements
5. **Avoid changing brand colours** - Do not apply off-brand colours (no pink, red, teal, etc.)
6. **Avoid using strokes** - Do not outline the logo; it is always filled
7. **Avoid boxing in** - Do not place the logo inside a box, border, or container
8. **Avoid reversing colours** - Do not swap which elements get which colour outside of approved treatments
9. **Avoid extra elements** - Do not add underlines, shadows, gradients, or decorative elements to the logo

---

## 5. Tagline (Visual Treatment)

**"Make your moment."**

**Typographic treatment:**
- Typeface: Neue Haas Grotesk Display Pro, Bold (700)
- Size: D1 or D2 display scale (64-80px)
- Colour: Imprint (#212529) on light backgrounds, white on dark backgrounds
- The period is part of the tagline - always include it
- Can appear as a standalone display element or as a watermark ("MAKE YOUR MOMENT" in large, light-opacity type as a background element)

For the meaning and strategic rationale behind the tagline, see the `bb-voice` skill.

---

## 6. Graphic Elements

### 6.1 Signal Highlights

A key Brand Blvd graphic device is the **Signal highlight** - a rectangle of Signal green (#C7F265) placed behind a key word in a headline or statement to draw emphasis.

**Rules:**
- The highlight is always Signal (#C7F265)
- It sits behind one key word in a headline, not multiple words
- The word over the highlight stays in Imprint (#212529) - it doesn't change colour
- The highlight extends slightly beyond the word boundaries on left and right for a natural look
- Use on headlines and display text only, not on body copy

**Examples from the styleguide:**
- "North America's **premier** branded **merch** company." (premier and merch highlighted)
- "Meet the **people** who make you look good." (people highlighted)
- "Embroidered in **excellence**." (excellence highlighted)
- "City **connection**." (connection highlighted)

### 6.2 BB Monogram Patterns

The BB symbol is used as a repeating pattern for backgrounds and textures.

**Pattern types:**

1. **BB Logo Pattern** - Repeating BB monogram in a grid layout
   - Canvas variant: Light BB symbols on white/Canvas background
   - Imprint variant: Subtle BB symbols on dark/Imprint background
   - Signal variant: BB symbols on Signal green background
   - Teal variant: BB symbols on dark teal background

2. **Halftone Dot Pattern** - A dot-based pattern using varying sizes
   - Teal/dark variant: Dark background with tonal dot grid
   - Signal variant: Green-toned dot pattern
   - Mixed teal/signal variant: Gradient between teal and signal

**Usage:** Patterns are used as subtle background textures in social media posts, packaging, presentation slides, and web layouts. They add brand texture without competing with content.

### 6.3 Frosted Panel

A frosted/blurred overlay panel placed over photography or imagery to create a content area.

**Rules:**
- Semi-transparent blur effect over the underlying image
- Content (headlines, body copy, BRANDBLVD wordmark) sits on top
- Creates visual layering and depth
- Used in social media posts, web layouts, and marketing materials

---

## 7. Photography

### 7.1 Photography Style - HQ/Office

Showroom and office photography should feel lived-in, dynamic, and warm. Not staged catalog shots. Features include the showroom space, team interactions, product displays, colour swatches, and the retail environment.

### 7.2 Staff Photography

**Directive:** Think editorial portrait for a creative agency: cinematic, confident, human. Not corporate headshot. Not social media selfie. The space between.

**The Look:**

| Element | Specification |
|---------|---------------|
| Background | Deep charcoal or near-black seamless. No pure #000 - you want depth, not a void. |
| Mood | Dramatic but approachable. Cinematic editorial, not corporate headshot. |
| Expression | Calm confidence. Slight smile encouraged - genuine, not posed. No teeth required. |
| Pose | Relaxed authority. Arms crossed, hands clasped, or natural at sides. Avoid stiff or "photo ready" poses. |
| Framing | Upper body / three-quarter crop. Head to approximately lower ribcage. Consistent across all subjects. |
| Clothing | Dark, solid tones preferred (black, charcoal). Avoid patterns or bright colours. Let the face be the subject. |
| Retouching | Natural skin tones. Light cleanup only - blemishes, stray hairs. Do not over-smooth or over-whiten. Real looks real. |

### 7.3 Lighting Setup

**Three-point lighting system:**

| Light | Position | Purpose |
|-------|----------|---------|
| Key light | Front, 30-45 degrees off-axis, slightly elevated. Large elevated softbox. | Primary illumination that shapes the face |
| Fill | Opposite side, subtle. Reflector or soft fill, low power opposite key. | Lifts the shadow side without flattening |
| Rim light | Behind subject, aimed back toward camera. Between subject and backdrop. | Creates edge separation from background, essential for dark clothing on dark background |

**Technical setup:**
- Backdrop: Deep charcoal seamless, 1.5-2m behind subject
- Camera position: Directly in front of subject

### 7.4 Photography Do's

- Allow personality in the expression. Warmth, wit, confidence are on-brand.
- Review on a larger screen to catch subtle lighting inconsistencies early.
- Take multiple frames. The best photo is almost never the first one.
- Keep lighting consistent across all subjects so team pages feel cohesive.
- Allow natural texture in hair and clothing - it reads authentic and editorial.
- Shoot in RAW and colour-grade consistently across the full team set.
- Communicate the vibe to subjects before the session.

### 7.5 Photography Don'ts

- Use a white or coloured background - it reads corporate, not creative.
- Over-retouch. Smoothing out personality defeats the purpose.
- Shoot wide open (f/1.4-1.8) to the point of unpredictable focus. f/2.8-4 gives you depth without soft eyes.
- Use on-camera flash or flat ring lighting, it kills the dimensional quality.
- Let subjects wear logos, patterns, colours, or casual weekend clothes.
- Mix lighting setups mid-session without reshooting adjustments.
- Rush. Give subjects 5 minutes to settle in.
- Don't skip the rim light, especially because of the dark clothing. Without separation, dark-on-dark collapses and the cinematic quality is lost.

---

## 8. Applications

### 8.1 Social Media Avatars

Social media profile images use the BB Symbol or BB Stacked logo, placed within a 36-field application grid for consistent centering.

**Approved avatar variants:**

| Variant | Logo | Background |
|---------|------|------------|
| BB Symbol Reverse | BB Symbol (white + signal) | Imprint (#212529) |
| BB Symbol Primary | BB Symbol (imprint) | White |
| BB Symbol White | BB Symbol (signal + imprint) | Signal (#C7F265) |
| BB Stacked Reverse | BRAND BLVD stacked (white) | Imprint (#212529) |
| BB Stacked Primary | BRAND BLVD stacked (imprint) | White |
| BB Stacked White | BRAND BLVD stacked (signal) | Signal (#C7F265) |

**Default avatar:** BB Stacked Reverse (white logo on Imprint dark background) for primary social accounts.

### 8.2 Social Profile Bio Style

- Name format: "Brand Blvd | Creative Merch Agency"
- Category: Designer
- Bio voice: Short, punchy, confident

### 8.3 Social Post Templates

Social posts use a combination of:
- Signal highlight on key words in headlines
- BB monogram pattern or halftone dot pattern as background texture
- BRANDBLVD wordmark (all caps, Display Pro) in bottom-left or bottom-right
- Large display type for headlines
- Photography with frosted panel overlays when using imagery

### 8.4 Packaging

Packaging uses the Canvas/white background with the BB monogram halftone pattern as a subtle texture. Features the Signal highlight on key words, the BRANDBLVD wordmark, numbering in display type, and QR codes where applicable.

### 8.5 Retail

**Retail Mark:** "brandblvd" as a single lowercase wordmark in Neue Haas Grotesk Display Pro, Black weight. This is distinct from the formal BRAND BLVD logo and is used specifically for retail/physical environments and branded merchandise.

---

## 9. Web

Web design follows the same visual system as print and social, with these key conventions:

- Hero sections use display type (D1/D2) with Editors Note serif for accent lines
- CTAs come in pairs: primary (filled, Imprint background with white text + icon) and secondary (outlined)
- "MAKE YOUR MOMENT" appears as a large, light watermark text in background of hero sections
- Photography uses the scattered/rotated card layout for dynamic energy
- The Signal highlight treatment carries into web headlines

---

## 10. Stationery

Stationery items (business cards, letterhead, stickers) use the core brand elements:
- Stickers feature the BRAND BLVD stacked logo in Signal + Imprint on white
- Business cards and letterhead follow the standard colour treatments
- The BB monogram pattern can be used as an interior or backing pattern

---

## 11. Digital Implementation Quick Reference

For any tool building digital visuals, here are the essential values:

### Colours (copy-paste ready)
```
--bb-canvas: #F8F6F0;
--bb-signal: #C7F265;
--bb-imprint: #212529;
--bb-signal-50: #F5FDE6;
--bb-signal-100: #EAFBCC;
--bb-signal-200: #DAF7A3;
--bb-signal-300: #C7F265;
--bb-signal-400: #A8D94E;
--bb-signal-500: #8BBF3A;
--bb-signal-600: #6FA628;
--bb-signal-700: #558C19;
--bb-signal-800: #3D730E;
--bb-signal-900: #295907;
--bb-canvas-50: #FDFCFA;
--bb-canvas-100: #FAF9F5;
--bb-canvas-200: #F8F6F0;
--bb-canvas-300: #F0EDE4;
--bb-canvas-400: #E5E1D5;
--bb-canvas-500: #D5D0C2;
--bb-canvas-600: #B8B3A5;
--bb-canvas-700: #9A9588;
--bb-canvas-800: #7D786C;
--bb-canvas-900: #615D53;
```

### Font Stack
```
--bb-font-display: 'Neue Haas Grotesk Display Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
--bb-font-text: 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
--bb-font-serif: 'Editors Note', Georgia, 'Times New Roman', serif;
```

### Key Measurements
- Base font size: 16px
- Body line height: 1.6
- Heading line height: 1.2
- Display line height: 1.1
- Display letter spacing: -2%
- Heading letter spacing: -0.5% to -1.5%
- Logo minimum width (primary): 90px digital / 25mm print
- Logo minimum height (stacked): 60px digital / 20mm print
- Logo minimum height (symbol): 45px digital / 15mm print

### Background Default
- Default page background: Canvas (#F8F6F0), not white (#FFFFFF)
- Default text colour: Imprint (#212529), not black (#000000)
- Accent/highlight colour: Signal (#C7F265)

---

## Notes

- The Support Palette (extended colours beyond the primary 3) is still being finalized by the marketing team. This file will be updated once confirmed.
- Several description areas in the Figma file still contain Lorem ipsum placeholder text. The structural and specification data captured here is accurate.
- This file covers visual specs only. Voice, tone, and copy rules live in the `bb-voice` skill. These are separate systems with a clear boundary: design.md governs how things look, bb-voice governs how things read.
