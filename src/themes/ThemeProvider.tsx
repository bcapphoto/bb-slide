import { createContext, useContext, useEffect, useMemo } from "react";
import type { Theme } from "./theme.types";
import { getTheme, defaultThemeId } from "./index";

const ThemeContext = createContext<Theme | null>(null);

export function useTheme(): Theme {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("useTheme must be used within a ThemeProvider");
  return theme;
}

/**
 * Generates a <style> block that sets CSS custom properties and pattern classes
 * from the theme. This replaces hardcoded values in index.css.
 */
function generateThemeCSS(theme: Theme): string {
  const { colors, typography, patterns, spacing, animations } = theme;

  return `
/* ─── Theme: ${theme.name} ─── */

:root {
  --background: ${colors.background};
  --foreground: ${colors.foreground};
  --card: ${colors.card};
  --card-foreground: ${colors.cardForeground};
  --popover: ${colors.popover};
  --popover-foreground: ${colors.popoverForeground};
  --primary: ${colors.primary};
  --primary-foreground: ${colors.primaryForeground};
  --secondary: ${colors.secondary};
  --secondary-foreground: ${colors.secondaryForeground};
  --muted: ${colors.muted};
  --muted-foreground: ${colors.mutedForeground};
  --accent: ${colors.primary};
  --accent-foreground: ${colors.primaryForeground};
  --destructive: ${colors.destructive};
  --destructive-foreground: ${colors.destructiveForeground};
  --border: ${colors.border};
  --input: ${colors.input};
  --ring: ${colors.ring};
  --radius: ${spacing.radius};

  --sidebar-background: ${colors.card};
  --sidebar-foreground: ${colors.foreground};
  --sidebar-primary: ${colors.primary};
  --sidebar-primary-foreground: ${colors.primaryForeground};
  --sidebar-accent: ${colors.muted};
  --sidebar-accent-foreground: ${colors.foreground};
  --sidebar-border: ${colors.border};
  --sidebar-ring: ${colors.ring};

  /* Theme typography */
  --font-body: ${typography.body};
  --font-display: ${typography.display};
  --font-serif: ${typography.serif};
  --font-title: ${typography.title};
  --font-body-weight: ${typography.bodyWeight};
  --font-title-weight: ${typography.titleWeight};

  /* Theme brand color */
  --brand: ${colors.brand};

  /* Theme PDF */
  --pdf-accent: ${theme.pdf.accentColor};

  /* Light surface colors (for white/canvas slides) */
  --light-surface: ${colors.lightSurface ?? '0 0% 100%'};
  --light-text: ${colors.lightText ?? '222.2 47.4% 11.2%'};
  --light-text-secondary: ${colors.lightTextSecondary ?? '215.4 16.3% 46.9%'};
  --light-text-muted: ${colors.lightTextMuted ?? '220 8.9% 46.1%'};
  --light-border: ${colors.lightBorder ?? '220 13% 91%'};
}

body {
  font-family: var(--font-body);
  font-weight: var(--font-body-weight);
}

.font-display { font-family: var(--font-display); }
.font-serif { font-family: var(--font-serif); }
.font-title { font-family: var(--font-title); font-weight: var(--font-title-weight); }

/* ─── Title casing ─── */
/* All titles render in their authored case (sentence case) instead of all caps. */
/* Overrides any Tailwind \`uppercase\` class still present on title elements so */
/* the rule can be flipped in one place if the brand voice ever changes. */
.font-title { text-transform: none !important; }

/* ─── Dot grid (dark) ─── */
.dot-grid::before {
  background-image: radial-gradient(circle, hsl(${patterns.dotGrid.color}) ${patterns.dotGrid.dotSize}px, transparent ${patterns.dotGrid.dotSize}px);
  background-size: ${patterns.dotGrid.size}px ${patterns.dotGrid.size}px;
  opacity: ${patterns.dotGrid.opacity};
}

/* ─── Dot grid bold (dark) ─── */
.dot-grid-bold::before {
  background-image: radial-gradient(circle, hsl(${patterns.dotGridBold.color}) ${patterns.dotGridBold.dotSize}px, transparent ${patterns.dotGridBold.dotSize}px);
  background-size: ${patterns.dotGridBold.size}px ${patterns.dotGridBold.size}px;
  opacity: ${patterns.dotGridBold.opacity};
}

/* ─── Dot grid (light) ─── */
.dot-grid-light::before {
  background-image: radial-gradient(circle, hsl(${patterns.dotGridLight.color}) ${patterns.dotGridLight.dotSize}px, transparent ${patterns.dotGridLight.dotSize}px);
  background-size: ${patterns.dotGridLight.size}px ${patterns.dotGridLight.size}px;
  opacity: ${patterns.dotGridLight.opacity};
}

/* ─── Diagonal lines (dark) ─── */
.diagonal-lines::before {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent ${patterns.diagonalLines.spacing}px,
    hsl(${patterns.diagonalLines.color}) ${patterns.diagonalLines.spacing}px,
    hsl(${patterns.diagonalLines.color}) ${patterns.diagonalLines.spacing + patterns.diagonalLines.lineWidth}px
  );
  opacity: ${patterns.diagonalLines.opacity};
}

/* ─── Diagonal lines (light) ─── */
.diagonal-lines-light::before {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent ${patterns.diagonalLinesLight.spacing}px,
    hsl(${patterns.diagonalLinesLight.color}) ${patterns.diagonalLinesLight.spacing}px,
    hsl(${patterns.diagonalLinesLight.color}) ${patterns.diagonalLinesLight.spacing + patterns.diagonalLinesLight.lineWidth}px
  );
  opacity: ${patterns.diagonalLinesLight.opacity};
}

/* ─── Cross grid (dark) ─── */
.cross-grid::before {
  background-image:
    linear-gradient(hsl(${patterns.crossGrid.color}) ${patterns.crossGrid.lineWidth}px, transparent ${patterns.crossGrid.lineWidth}px),
    linear-gradient(90deg, hsl(${patterns.crossGrid.color}) ${patterns.crossGrid.lineWidth}px, transparent ${patterns.crossGrid.lineWidth}px);
  background-size: ${patterns.crossGrid.size}px ${patterns.crossGrid.size}px;
  opacity: ${patterns.crossGrid.opacity};
}

/* ─── Cross grid (light) ─── */
.cross-grid-light::before {
  background-image:
    linear-gradient(hsl(${patterns.crossGridLight.color}) ${patterns.crossGridLight.lineWidth}px, transparent ${patterns.crossGridLight.lineWidth}px),
    linear-gradient(90deg, hsl(${patterns.crossGridLight.color}) ${patterns.crossGridLight.lineWidth}px, transparent ${patterns.crossGridLight.lineWidth}px);
  background-size: ${patterns.crossGridLight.size}px ${patterns.crossGridLight.size}px;
  opacity: ${patterns.crossGridLight.opacity};
}

/* ─── Radial glow ─── */
.glow-br::before {
  background: radial-gradient(ellipse at ${patterns.glow.position}, hsl(${patterns.glow.color}) 0%, transparent 60%);
  opacity: ${patterns.glow.opacity};
}

/* ─── Highlight pill ─── */
.highlight-green {
  background-color: hsl(${colors.primary});
  color: hsl(${colors.primaryForeground});
  padding: ${spacing.highlightPadding};
  border-radius: ${spacing.highlightRadius ?? '0.2em'};
  display: inline;
  line-height: 1.35;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

/* ─── Accent bar ─── */
.accent-bar {
  border-left: ${spacing.accentBarWidth} solid hsl(${colors.primary});
  padding-left: 1rem;
}

/* ─── Grain overlay ─── */
.grain::after {
  opacity: ${patterns.grainOpacity};
}

/* ─── Light surface utilities (theme-aware replacements for bg-white / text-gray-*) ─── */
.bg-light-surface { background-color: hsl(var(--light-surface)); }
.text-light { color: hsl(var(--light-text)); }
.text-light-secondary { color: hsl(var(--light-text-secondary)); }
.text-light-muted { color: hsl(var(--light-text-muted)); }
.border-light { border-color: hsl(var(--light-border)); }

/* ─── Signal green text on light backgrounds → highlight pill ─── */
/* On dark slides text-primary = Signal text (high contrast). On Canvas slides, */
/* Signal as raw text color is illegible — apply the highlight pill treatment instead. */
.bg-light-surface .text-primary {
  background-color: hsl(${colors.primary});
  color: hsl(${colors.primaryForeground});
  padding: ${spacing.highlightPadding};
  border-radius: ${spacing.highlightRadius ?? '0.2em'};
  display: inline;
  line-height: 1.35;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
.bg-light-surface .text-primary\\/80 {
  background-color: hsl(${colors.primary} / 0.8);
  color: hsl(${colors.primaryForeground});
  padding: ${spacing.highlightPadding};
  border-radius: ${spacing.highlightRadius ?? '0.2em'};
  display: inline;
  line-height: 1.35;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

/* ─── Animations ─── */
@keyframes fade-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes slide-in {
  0% { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes count-up {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
`;
}

export function ThemeProvider({
  themeId = defaultThemeId,
  children,
}: {
  themeId?: string;
  children: React.ReactNode;
}) {
  const theme = useMemo(() => getTheme(themeId), [themeId]);
  const css = useMemo(() => generateThemeCSS(theme), [theme]);

  // Load Google Fonts for this theme
  useEffect(() => {
    const id = `theme-fonts-${theme.id}`;
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = theme.typography.googleFontsUrl;
      document.head.appendChild(link);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {children}
    </ThemeContext.Provider>
  );
}
