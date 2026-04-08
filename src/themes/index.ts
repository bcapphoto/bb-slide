import type { Theme } from "./theme.types";
import brandBlvd from "./brand-blvd";
import brandBlvdV2 from "./brand-blvd-v2";

/**
 * Theme Registry
 *
 * Add new themes here after creating them.
 * Each presentation references a theme by its `id`.
 */

const themes: Record<string, Theme> = {
  "brand-blvd": brandBlvd,
  "brand-blvd-v2": brandBlvdV2,
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

export { brandBlvd, brandBlvdV2 };
export type { Theme };
