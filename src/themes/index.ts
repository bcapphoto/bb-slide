import type { Theme } from "./theme.types";
import brandBlvd from "./brand-blvd";

/**
 * Theme Registry
 *
 * Add new themes here after creating them.
 * Each presentation references a theme by its `id`.
 */

const themes: Record<string, Theme> = {
  "brand-blvd": brandBlvd,
};

export const defaultThemeId = "brand-blvd";

export function getTheme(id: string): Theme {
  const theme = themes[id];
  if (!theme) {
    console.warn(`Theme "${id}" not found, falling back to "${defaultThemeId}"`);
    return themes[defaultThemeId];
  }
  return theme;
}

export function getAllThemes(): Theme[] {
  return Object.values(themes);
}

export { brandBlvd };
export type { Theme };
