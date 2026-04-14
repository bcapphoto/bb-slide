import type { Theme } from "./theme.types";

/**
 * Brand Blvd — Default Style Guide
 *
 * Dark teal background with bright green accents.
 * Typography: Inter (body/titles), Barlow Condensed (display), DM Serif Display (serif).
 *
 * To create a new style guide:
 *   1. Duplicate this file
 *   2. Change the `id` and `name`
 *   3. Adjust any values
 *   4. Register it in src/themes/index.ts
 */

const brandBlvd: Theme = {
  id: "brand-blvd",
  name: "Brand Blvd",
  description: "Dark teal with bright green accents — the core Brand Blvd identity",

  colors: {
    // ─── Primary accent ───
    primary: "82 72% 52%",             // Bright green
    primaryForeground: "186 45% 11%",  // Dark teal (text on green)

    // ─── Backgrounds ───
    background: "186 45% 11%",         // Dark teal
    foreground: "0 0% 98%",            // Near white

    card: "186 40% 14%",
    cardForeground: "0 0% 98%",

    popover: "186 40% 14%",
    popoverForeground: "0 0% 98%",

    secondary: "186 35% 16%",
    secondaryForeground: "0 0% 98%",

    muted: "186 30% 18%",
    mutedForeground: "186 15% 55%",

    // ─── Borders & inputs ───
    border: "186 25% 20%",
    input: "186 25% 20%",
    ring: "82 72% 52%",

    // ─── Brand utility color ───
    brand: "82 72% 42%",

    // ─── Destructive ───
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "0 0% 98%",

    // ─── Light surfaces (white slides) ───
    lightSurface: "0 0% 100%",              // white
    lightText: "222.2 47.4% 11.2%",         // gray-900
    lightTextSecondary: "215.4 16.3% 46.9%", // gray-600
    lightTextMuted: "220 8.9% 46.1%",       // gray-500
    lightBorder: "220 13% 91%",             // gray-200
  },

  typography: {
    body: "'Inter', system-ui, sans-serif",
    display: "'Barlow Condensed', sans-serif",
    serif: "'DM Serif Display', serif",
    title: "'Inter', sans-serif",

    bodyWeight: 300,
    titleWeight: 900,

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Barlow+Condensed:wght@400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&display=swap",

    pdfFonts: {
      serif: "/fonts/DMSerifDisplay-Regular.ttf",
      body: "/fonts/Inter-Variable.ttf",
      display: "/fonts/BarlowCondensed-SemiBold.ttf",
    },
  },

  patterns: {
    dotGrid: {
      size: 28,
      dotSize: 1,
      opacity: 0.4,
      color: "186 30% 25%",
    },
    dotGridBold: {
      size: 36,
      dotSize: 3,
      opacity: 0.5,
      color: "186 25% 22%",
    },
    dotGridLight: {
      size: 32,
      dotSize: 1.5,
      opacity: 0.5,
      color: "0 0% 80%",
    },
    diagonalLines: {
      spacing: 20,
      lineWidth: 1,
      opacity: 0.3,
      color: "186 30% 16%",
    },
    diagonalLinesLight: {
      spacing: 20,
      lineWidth: 1,
      opacity: 0.5,
      color: "0 0% 92%",
    },
    crossGrid: {
      size: 48,
      lineWidth: 1,
      opacity: 0.25,
      color: "186 30% 16%",
    },
    crossGridLight: {
      size: 48,
      lineWidth: 1,
      opacity: 0.6,
      color: "0 0% 90%",
    },
    glow: {
      position: "85% 75%",
      color: "186 35% 16%",
      opacity: 0,
    },
    grainOpacity: 0.02,
  },

  spacing: {
    radius: "0.5rem",
    highlightPadding: "0.1em 0.25em",
    accentBarWidth: "4px",
  },

  animations: {
    fadeUp: { duration: "0.8s", easing: "ease-out" },
    fadeIn: { duration: "0.6s", easing: "ease-out" },
    slideIn: { duration: "0.6s", easing: "ease-out" },
    countUp: { duration: "0.5s", easing: "ease-out" },
  },

  pdf: {
    accentColor: "#00C853",
    pagePadding: { top: 60, bottom: 60, horizontal: 72 },
    baseFontSize: 11,
    lineHeight: 1.8,
  },
};

export default brandBlvd;
