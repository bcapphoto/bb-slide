/**
 * MobileActionBar — Native-looking, fixed bottom CTA bar for mobile.
 *
 * Renders 1–3 buttons fixed to the bottom of the screen with safe-area
 * padding and a frosted-card aesthetic. Each action can navigate to a
 * section/slide within the presentation, an external href, or run a
 * custom onClick handler.
 *
 * Reusable across presentations via `PresentationConfig.mobileActions`.
 */

import type { PresentationAction } from "@/presentations/presentation.types";

interface Props {
  actions: PresentationAction[];
  /** Called when an action with a `to` target is tapped */
  onNavigate: (target: NonNullable<PresentationAction["to"]>) => void;
  /** Used to hide actions whose target matches the current location */
  activeSectionId?: string;
  activeSlideIdx?: number;
  totalSlidesInActiveSection?: number;
}

export default function MobileActionBar({
  actions,
  onNavigate,
  activeSectionId,
  activeSlideIdx,
  totalSlidesInActiveSection,
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
      // Internal anchors stay in-app; everything else opens normally
      if (action.href.startsWith("http")) {
        window.open(action.href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = action.href;
      }
      return;
    }
    if (action.to) onNavigate(action.to);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[75] pointer-events-none"
      style={{
        // Solid fill behind the buttons. Anchors to the viewport bottom and */
        // wraps the safe-area inset so the iOS home-indicator strip / URL-bar */
        // gutter is always covered — no white gap can leak through. */
        backgroundColor: "hsl(var(--background))",
      }}
    >
      {/* Soft fade above the wrapper so the solid fill blends into the slide */}
      {/* content rather than ending in a hard edge. */}
      <div
        className="absolute inset-x-0 -top-24 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.6) 50%, transparent 100%)",
        }}
        aria-hidden
      />

      <div
        className="relative px-3 pt-3 pb-3 pointer-events-auto"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <div
          className="flex gap-2 rounded-2xl border border-border/40 bg-card/80 backdrop-blur-xl p-1.5 shadow-[0_8px_32px_-12px_hsl(var(--background)/0.6)]"
        >
          {visible.map((action, i) => {
            const Icon = action.icon;
            const variant = action.variant ?? "primary";
            const base =
              "flex-1 min-w-0 inline-flex items-center justify-center gap-2 h-12 rounded-xl font-display text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";
            const styles =
              variant === "primary"
                ? "bg-primary text-primary-foreground shadow-[0_2px_12px_-2px_hsl(var(--primary)/0.5)] active:shadow-none"
                : "bg-transparent text-foreground border border-border/60 hover:bg-muted/40";
            return (
              <button
                key={`${action.label}-${i}`}
                onClick={() => handleClick(action)}
                className={`${base} ${styles}`}
                aria-label={action.label}
              >
                {Icon && <Icon size={16} className="shrink-0" />}
                <span className="truncate">{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
