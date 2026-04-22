/**
 * DesktopActionBar — Sticky CTA bar pinned to the top-right on desktop.
 *
 * Mirrors `MobileActionBar` but tuned for the desktop chrome: small pill
 * buttons in the top-right corner, sized to sit comfortably above the
 * progress bar and to the left of the vertical section nav sidebar.
 *
 * Reusable across presentations via `PresentationConfig.desktopActions`.
 */

import type { PresentationAction } from "@/presentations/presentation.types";

interface Props {
  actions: PresentationAction[];
  onNavigate: (target: NonNullable<PresentationAction["to"]>) => void;
  /** ID of the currently visible section (or "article") — used by hideWhenActive */
  activeSectionId?: string;
  /** Slide index within the active section */
  activeSlideIdx?: number;
  totalSlidesInActiveSection?: number;
  /** Background luminance hint so the bar reads on light slides too */
  isLightBg?: boolean;
}

export default function DesktopActionBar({
  actions,
  onNavigate,
  activeSectionId,
  activeSlideIdx,
  totalSlidesInActiveSection,
  isLightBg,
}: Props) {
  if (!actions || actions.length === 0) return null;

  const isActiveTarget = (action: PresentationAction): boolean => {
    if (!action.to || !activeSectionId) return false;
    if (action.to.section !== activeSectionId) return false;
    if (action.to.slide === undefined) return activeSlideIdx === 0;
    if (action.to.slide === "last") {
      const total = totalSlidesInActiveSection ?? 0;
      return total > 0 && activeSlideIdx === total - 1;
    }
    return activeSlideIdx === action.to.slide - 1;
  };

  const visible = actions.filter(
    (a) => !(a.hideWhenActive && isActiveTarget(a))
  );
  if (visible.length === 0) return null;

  const handleClick = (action: PresentationAction) => {
    if (action.onClick) {
      action.onClick();
      return;
    }
    if (action.href) {
      if (action.href.startsWith("http")) {
        window.open(action.href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = action.href;
      }
      return;
    }
    if (action.to) onNavigate(action.to);
  };

  // Sits in the top-right corner: away from the centered right sidebar nav
  // and clear of the 2px progress bar.
  return (
    <div className="fixed top-4 right-16 z-[65] flex items-center gap-2">
      {visible.map((action, i) => {
        const Icon = action.icon;
        const variant = action.variant ?? "primary";
        const base =
          "inline-flex items-center gap-2 h-9 px-4 rounded-full font-display text-[10px] font-bold uppercase tracking-[0.22em] transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 backdrop-blur-md";
        const styles =
          variant === "primary"
            ? "bg-primary text-primary-foreground shadow-[0_4px_18px_-6px_hsl(var(--primary)/0.55)] hover:shadow-[0_6px_22px_-6px_hsl(var(--primary)/0.7)] hover:-translate-y-px"
            : isLightBg
              ? "bg-[hsl(var(--light-surface)/0.7)] text-[hsl(var(--light-text))] border border-[hsl(var(--light-text)/0.18)] hover:bg-[hsl(var(--light-surface)/0.9)]"
              : "bg-card/60 text-foreground border border-border/50 hover:bg-card/80";
        return (
          <button
            key={`${action.label}-${i}`}
            onClick={() => handleClick(action)}
            className={`${base} ${styles}`}
            aria-label={action.label}
          >
            {Icon && <Icon size={14} className="shrink-0" />}
            <span>{action.label}</span>
          </button>
        );
      })}
    </div>
  );
}
