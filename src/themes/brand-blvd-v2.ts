import type { Theme } from "./theme.types";

/**
 * Brand Blvd v2 — Design-System-Aligned Theme
 *
 * Built from the official Brand Blvd Figma styleguide (design.md).
 *
 * Palette: Canvas (#F8F6F0), Signal (#C7F265), Imprint (#212529)
 * Typography: Neue Haas Grotesk Display Pro / Text Pro, Editors Note
 *
 * Dark slides use Imprint background; light slides use Canvas.
 * Signal is the accent — highlights, CTAs, energy.
 */

const brandBlvdV2: Theme = {
  id: "brand-blvd-v2",
  name: "Brand Blvd v2",
  description: "Official Brand Blvd design system — Canvas, Signal, Imprint",

  colors: {
    // ─── Primary accent (Signal green) ───
    primary: "78 84% 67%",              // Signal #C7F265
    primaryForeground: "210 11% 15%",   // Imprint #212529 (text on Signal)

    // ─── Backgrounds (Imprint dark base for slides) ───
    background: "210 11% 15%",          // Imprint #212529
    foreground: "45 36% 96%",           // Canvas #F8F6F0

    card: "210 10% 18%",               // Slightly lighter than Imprint
    cardForeground: "45 36% 96%",

    popover: "210 10% 18%",
    popoverForeground: "45 36% 96%",

    secondary: "210 8% 22%",
    secondaryForeground: "45 36% 96%",

    muted: "210 6% 26%",
    mutedForeground: "40 8% 60%",       // Canvas-700ish for muted text

    // ─── Borders & inputs ───
    border: "210 8% 25%",
    input: "210 8% 25%",
    ring: "78 84% 67%",                 // Signal

    // ─── Brand utility color ───
    brand: "78 84% 57%",               // Signal-400 darker for utility

    // ─── Destructive ───
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "45 36% 96%",

    // ─── Light surfaces (Canvas slides) ───
    lightSurface: "45 36% 96%",              // Canvas #F8F6F0
    lightText: "210 11% 15%",                // Imprint #212529
    lightTextSecondary: "37 8% 46%",         // Canvas-800 #7D786C
    lightTextMuted: "36 6% 56%",             // Canvas-700 #9A9588
    lightBorder: "40 14% 86%",              // Canvas-400 #E5E1D5
  },

  typography: {
    // Neue Haas Grotesk isn't on Google Fonts — use Inter as the closest
    // available match with proper fallback chain from design.md
    body: "'Neue Haas Grotesk Text Pro', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    display: "'Neue Haas Grotesk Display Pro', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    serif: "'Editors Note', 'DM Serif Display', Georgia, 'Times New Roman', serif",
    title: "'Neue Haas Grotesk Display Pro', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",

    bodyWeight: 400,    // Text Pro Regular (design.md: body = 400)
    titleWeight: 700,   // Display Pro Bold (design.md: headings = 700)

    // Inter as web fallback until Neue Haas Grotesk is self-hosted
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=DM+Serif+Display:ital@0;1&display=swap",

    pdfFonts: {
      serif: "/fonts/DMSerifDisplay-Regular.ttf",
      body: "/fonts/Inter-Variable.ttf",
      display: "/fonts/Inter-Variable.ttf",
    },
  },

  patterns: {
    // BB monogram / halftone-inspired patterns
    // Dark variant: subtle on Imprint background
    dotGrid: {
      size: 28,
      dotSize: 1,
      opacity: 0.3,
      color: "210 8% 22%",
    },
    dotGridBold: {
      size: 36,
      dotSize: 3,
      opacity: 0.4,
      color: "210 8% 20%",
    },
    // Light variant: subtle on Canvas background
    dotGridLight: {
      size: 32,
      dotSize: 1.5,
      opacity: 0.35,
      color: "40 12% 82%",              // Canvas-600ish
    },
    diagonalLines: {
      spacing: 20,
      lineWidth: 1,
      opacity: 0.2,
      color: "210 8% 20%",
    },
    diagonalLinesLight: {
      spacing: 20,
      lineWidth: 1,
      opacity: 0.3,
      color: "40 12% 88%",
    },
    crossGrid: {
      size: 48,
      lineWidth: 1,
      opacity: 0.2,
      color: "210 8% 20%",
    },
    crossGridLight: {
      size: 48,
      lineWidth: 1,
      opacity: 0.4,
      color: "40 12% 85%",
    },
    glow: {
      position: "85% 75%",
      color: "78 40% 20%",
      opacity: 0,                       // Disabled — off-brand gradient removed
    },
    grainOpacity: 0.015,
  },

  spacing: {
    radius: "0.375rem",
    highlightPadding: "0.1em 0.3em",    // Slightly wider for Signal highlights
    accentBarWidth: "4px",
  },

  animations: {
    fadeUp: { duration: "0.8s", easing: "ease-out" },
    fadeIn: { duration: "0.6s", easing: "ease-out" },
    slideIn: { duration: "0.6s", easing: "ease-out" },
    countUp: { duration: "0.5s", easing: "ease-out" },
  },

  pdf: {
    accentColor: "#C7F265",             // Signal green (not the old #00C853)
    pagePadding: { top: 60, bottom: 60, horizontal: 72 },
    baseFontSize: 11,
    lineHeight: 1.8,
  },
};

export default brandBlvdV2;
