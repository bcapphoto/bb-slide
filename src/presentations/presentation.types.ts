/**
 * Presentation Type Definitions
 *
 * Each presentation exports a config object conforming to this interface.
 * The Presentation engine reads this config to render the full experience.
 */

import React from "react";

export interface PresentationSection {
  /** URL-friendly slug for this section (e.g. "instant", "human-value") */
  id: string;
  /** Display label shown in the nav sidebar */
  label: string;
  /** Icon component for nav sidebar and section openers */
  icon: React.ComponentType<{ size?: number; className?: string }>;
  /** Desktop slides (each child of <Section>) */
  desktopSlides: React.ReactNode[];
  /** Mobile slides (wrapped in MobileSection) — if omitted, desktopSlides are used */
  mobileSlides?: React.ReactNode[];
  /** Background variant — controls sidebar nav contrast. Defaults to "dark". */
  variant?: "light" | "dark";
}

/**
 * A single CTA used by the mobile bottom bar and/or the desktop top-right bar.
 *
 * Provide exactly one of `to`, `href`, or `onClick` to define what the
 * button does when tapped. Variants:
 * - "primary"   — filled with the theme primary color (default)
 * - "secondary" — outlined / muted (use for "alt" actions)
 */
export interface PresentationAction {
  /** Button label */
  label: string;
  /** Visual style. Defaults to "primary". */
  variant?: "primary" | "secondary";
  /** Optional leading icon */
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  /** Navigate to a section in this presentation. `slide` is 1-indexed; use "last" for the final slide. */
  to?: { section: string; slide?: number | "last" };
  /** External URL, mailto:, tel:, etc. */
  href?: string;
  /** Custom click handler (takes precedence over `to`/`href`) */
  onClick?: () => void;
  /** Hide this action when the user is already on the destination */
  hideWhenActive?: boolean;
}

export interface PresentationConfig {
  /** URL slug for this presentation (e.g. "future-of-ai") — used in routing */
  slug: string;
  /** Document title (shown in browser tab) */
  title: string;
  /** Meta description for SEO */
  description: string;
  /** Open Graph image URL (optional) */
  ogImage?: string;
  /** Theme ID from src/themes/ (defaults to "brand-blvd" if omitted) */
  themeId?: string;

  /** All sections in order */
  sections: PresentationSection[];

  /** Optional article section (rendered as the final scrollable section) */
  articleComponent?: React.ComponentType;

  /** Optional presenter notes (standalone page at /:slug/presenter-notes) */
  presenterNotesComponent?: React.ComponentType;

  /** Optional home icon override */
  homeIcon?: React.ComponentType<{ size?: number; className?: string }>;
  /** Optional article icon override */
  articleIcon?: React.ComponentType<{ size?: number; className?: string }>;

  /** Optional mobile-only bottom action bar (1–3 CTAs recommended). */
  mobileActions?: PresentationAction[];

  /** Optional desktop-only top-right sticky action bar (1–2 CTAs recommended). */
  desktopActions?: PresentationAction[];
}

/** @deprecated Use `PresentationAction` instead. */
export type MobileAction = PresentationAction;
