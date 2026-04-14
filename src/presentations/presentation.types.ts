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
}
