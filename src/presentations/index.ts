/**
 * Presentation Registry
 *
 * Add new presentations here after creating them.
 * Each presentation gets its own URL route: /<slug>/<section>/<slide>
 */

import type { PresentationConfig } from "./presentation.types";

// Lazy-load presentations for code splitting
const presentationLoaders: Record<string, () => Promise<{ default: PresentationConfig }>> = {
  "future-of-ai": () => import("./future-of-ai"),
  "future-of-ai-v2": () => import("./future-of-ai-v2"),
  "future-of-ai-v3": () => import("./future-of-ai-v3"),
  "ic-recruitment": () => import("./ic-recruitment"),
};

/** Default presentation slug (shown at /) */
export const defaultSlug = "future-of-ai";

export function getPresentationSlugs(): string[] {
  return Object.keys(presentationLoaders);
}

export async function loadPresentation(slug: string): Promise<PresentationConfig | null> {
  const loader = presentationLoaders[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
