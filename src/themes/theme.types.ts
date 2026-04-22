/**
 * Theme / Style Guide Type Definitions
 *
 * Each theme file exports a full style guide that controls the visual identity
 * of every presentation that uses it. To create a new theme, duplicate an
 * existing theme file, adjust the values, and register it in the theme registry.
 */

export interface ThemeColors {
  /** Primary brand accent color (used for highlights, pills, accent bars, icons) */
  primary: string;
  /** Text color on top of primary backgrounds */
  primaryForeground: string;

  /** Main dark background */
  background: string;
  /** Main text color on dark backgrounds */
  foreground: string;

  /** Card / elevated surface background */
  card: string;
  cardForeground: string;

  /** Popover/overlay background */
  popover: string;
  popoverForeground: string;

  /** Secondary surface color */
  secondary: string;
  secondaryForeground: string;

  /** Muted / subdued surface */
  muted: string;
  /** Muted text (captions, subtitles) */
  mutedForeground: string;

  /** Border / input / ring colors */
  border: string;
  input: string;
  ring: string;

  /** Brand color for use in Tailwind utilities (e.g. bg-brand-green) */
  brand: string;

  /** Destructive / error color */
  destructive: string;
  destructiveForeground: string;

  /** Light surface background (for "white" slides). Falls back to white. */
  lightSurface?: string;
  /** Primary text on light surfaces. Falls back to gray-900. */
  lightText?: string;
  /** Secondary/body text on light surfaces. Falls back to gray-600. */
  lightTextSecondary?: string;
  /** Muted/caption text on light surfaces. Falls back to gray-500. */
  lightTextMuted?: string;
  /** Border color on light surfaces. Falls back to gray-200. */
  lightBorder?: string;
}

export interface ThemeTypography {
  /** Body font family (used for paragraphs, general text) */
  body: string;
  /** Display / condensed font family (used for labels, super-titles) */
  display: string;
  /** Serif font family (used for statements, article headings) */
  serif: string;
  /** Title font family (used for big bold headlines) */
  title: string;

  /** Default body font weight */
  bodyWeight: number;
  /** Title font weight */
  titleWeight: number;

  /** Google Fonts import URL */
  googleFontsUrl: string;

  /** Local font files for PDF generation */
  pdfFonts: {
    serif: string;
    body: string;
    display: string;
  };
}

export interface ThemePatterns {
  /** Small dot grid (dark bg) */
  dotGrid: { size: number; dotSize: number; opacity: number; color: string };
  /** Bold dot grid (dark bg) */
  dotGridBold: { size: number; dotSize: number; opacity: number; color: string };
  /** Dot grid on light/white backgrounds */
  dotGridLight: { size: number; dotSize: number; opacity: number; color: string };
  /** Diagonal lines (dark bg) */
  diagonalLines: { spacing: number; lineWidth: number; opacity: number; color: string };
  /** Diagonal lines (light bg) */
  diagonalLinesLight: { spacing: number; lineWidth: number; opacity: number; color: string };
  /** Cross grid (dark bg) */
  crossGrid: { size: number; lineWidth: number; opacity: number; color: string };
  /** Cross grid (light bg) */
  crossGridLight: { size: number; lineWidth: number; opacity: number; color: string };
  /** Radial glow position and opacity */
  glow: { position: string; color: string; opacity: number };
  /** Grain overlay opacity */
  grainOpacity: number;
}

export interface ThemeSpacing {
  /** Border radius base value */
  radius: string;
  /** Highlight pill padding */
  highlightPadding: string;
  /** Highlight pill corner radius. Defaults to "0.2em" if not set. */
  highlightRadius?: string;
  /** Accent bar width */
  accentBarWidth: string;
}

export interface ThemeAnimations {
  fadeUp: { duration: string; easing: string };
  fadeIn: { duration: string; easing: string };
  slideIn: { duration: string; easing: string };
  countUp: { duration: string; easing: string };
}

export interface ThemePdf {
  /** Primary accent color as hex for PDF renderer */
  accentColor: string;
  /** Page padding in points */
  pagePadding: { top: number; bottom: number; horizontal: number };
  /** Base font size in points */
  baseFontSize: number;
  /** Line height multiplier */
  lineHeight: number;
}

export interface Theme {
  /** Unique identifier for this theme */
  id: string;
  /** Human-readable name */
  name: string;
  /** Short description */
  description: string;

  colors: ThemeColors;
  typography: ThemeTypography;
  patterns: ThemePatterns;
  spacing: ThemeSpacing;
  animations: ThemeAnimations;
  pdf: ThemePdf;
}
