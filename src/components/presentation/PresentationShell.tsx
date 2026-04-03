/**
 * PresentationShell — The reusable presentation engine
 *
 * Handles: section navigation, horizontal slide scroll, mobile/desktop layout,
 * cursor navigation, URL routing, dot indicators, sidebar nav, keyboard nav,
 * progress bar, mobile section indicator.
 *
 * Each presentation provides a PresentationConfig; this component does the rest.
 */

import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Section from "@/components/Section";
import CursorNav from "@/components/CursorNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileSection } from "@/components/slides";
import type { PresentationConfig } from "@/presentations/presentation.types";
import { ThemeProvider } from "@/themes/ThemeProvider";

interface Props {
  config: PresentationConfig;
}

export default function PresentationShell({ config }: Props) {
  const { section: paramSection, slide: paramSlide } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const isOgMode = new URLSearchParams(window.location.search).has("og");

  // Build section name list from config
  const sectionNames = useMemo(() => {
    const names = config.sections.map((s) => s.id);
    if (config.articleComponent) names.push("article");
    return names;
  }, [config]);

  const TOTAL_SECTIONS = sectionNames.length;

  // Build slideTotals from config
  const slideTotals = useMemo(() => {
    const totals: Record<number, number> = {};
    config.sections.forEach((s, i) => {
      totals[i] = s.desktopSlides.length;
    });
    if (config.articleComponent) {
      totals[config.sections.length] = 1;
    }
    return totals;
  }, [config]);

  // Total slide count across all sections (for progress bar)
  const totalSlideCount = useMemo(() => {
    return Object.values(slideTotals).reduce((a, b) => a + b, 0);
  }, [slideTotals]);

  const [activeSection, setActiveSection] = useState(() => {
    const idx = sectionNames.indexOf(paramSection as string);
    return idx >= 0 ? idx : 0;
  });
  const initialSlideRef = useRef(paramSlide ? parseInt(paramSlide, 10) - 1 : 0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<Record<number, number>>({});
  const [activeSlide, setActiveSlide] = useState(0);
  const [showMobileIndicator, setShowMobileIndicator] = useState(false);
  const mobileIndicatorTimeout = useRef<ReturnType<typeof setTimeout>>();

  // Progress calculation
  const progress = useMemo(() => {
    let slidesBeforeCurrent = 0;
    for (let i = 0; i < activeSection; i++) {
      slidesBeforeCurrent += slideTotals[i] || 1;
    }
    slidesBeforeCurrent += activeSlide;
    return totalSlideCount > 1 ? slidesBeforeCurrent / (totalSlideCount - 1) : 0;
  }, [activeSection, activeSlide, slideTotals, totalSlideCount]);

  const updateUrl = useCallback(
    (sectionIdx: number, slideIdx: number) => {
      const name = sectionNames[sectionIdx] || sectionNames[0];
      const path = slideIdx > 0
        ? `/${config.slug}/${name}/${slideIdx + 1}`
        : `/${config.slug}/${name}`;
      navigate(path, { replace: true });
    },
    [navigate, config.slug, sectionNames]
  );

  // Mobile: vertical scroll handler (mobile still uses native scroll)
  useEffect(() => {
    if (!isMobile) return;
    const el = containerRef.current;
    if (!el) return;
    const handler = () => {
      const index = Math.round(el.scrollTop / el.clientHeight);
      setActiveSection(index);
      setShowMobileIndicator(true);
      if (mobileIndicatorTimeout.current) clearTimeout(mobileIndicatorTimeout.current);
      mobileIndicatorTimeout.current = setTimeout(() => setShowMobileIndicator(false), 1500);
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, [isMobile]);

  // Desktop: update URL when active section/slide changes programmatically
  useEffect(() => {
    if (isMobile || isOgMode) return;
    updateUrl(activeSection, activeSlide);
  }, [activeSection, activeSlide, isMobile, isOgMode, updateUrl]);

  // Deep-link on mount — set activeSection directly (no scroll needed on desktop)
  useEffect(() => {
    const idx = sectionNames.indexOf(paramSection as string);
    if (idx > 0) {
      setActiveSection(idx);
      // Mobile still needs scroll
      if (isMobile) {
        const el = document.getElementById(`section-${sectionNames[idx]}`);
        if (el) el.scrollIntoView({ behavior: "instant" as ScrollBehavior });
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Set document title
  useEffect(() => {
    document.title = config.title;
  }, [config.title]);

  const handleSlideChange = useCallback(
    (sectionIdx: number) => (slideIdx: number) => {
      slidesRef.current[sectionIdx] = slideIdx;
      setActiveSlide(slideIdx);
      updateUrl(sectionIdx, slideIdx);
    },
    [updateUrl]
  );

  const goToSection = useCallback((index: number, targetSlide: "first" | "last" = "first") => {
    const clamped = Math.max(0, Math.min(index, TOTAL_SECTIONS - 1));

    if (isMobile) {
      // Mobile: use native scroll
      const el = document.getElementById(`section-${sectionNames[clamped]}`);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(clamped);
      return;
    }

    // Desktop: programmatic section change via transform (no scroll)
    const targetSlideIdx = targetSlide === "last" ? (slideTotals[clamped] || 1) - 1 : 0;

    // Pre-set the slide position before transitioning so it's ready when section appears
    requestAnimationFrame(() => {
      const el = document.getElementById(`section-${sectionNames[clamped]}`);
      const scroller = el?.querySelector("[data-slide-scroller]") as HTMLElement | null;
      if (scroller) {
        scroller.style.scrollSnapType = "none";
        scroller.scrollLeft = targetSlideIdx * scroller.clientWidth;
        requestAnimationFrame(() => {
          if (scroller) scroller.style.scrollSnapType = "";
        });
      }
      if (el && el.classList.contains("overflow-y-auto")) {
        el.scrollTop = 0;
      }
    });

    slidesRef.current[clamped] = targetSlideIdx;
    setActiveSlide(targetSlideIdx);
    setActiveSection(clamped);
  }, [TOTAL_SECTIONS, sectionNames, slideTotals, isMobile]);

  const handleNavigate = useCallback(
    (dir: "left" | "right" | "up" | "down") => {
      if (dir === "up" || dir === "down") return;

      const section = document.getElementById(`section-${sectionNames[activeSection]}`);
      const scroller = section?.querySelector("[data-slide-scroller]") as HTMLElement | null;
      const currentSlide = scroller ? Math.round(scroller.scrollLeft / scroller.clientWidth) : 0;
      const totalSlides = slideTotals[activeSection] || 1;

      if (dir === "right") {
        if (currentSlide < totalSlides - 1 && scroller) {
          scroller.scrollTo({ left: (currentSlide + 1) * scroller.clientWidth, behavior: "smooth" });
        } else if (activeSection < TOTAL_SECTIONS - 1) {
          goToSection(activeSection + 1, "first");
        }
      } else {
        if (currentSlide > 0 && scroller) {
          scroller.scrollTo({ left: (currentSlide - 1) * scroller.clientWidth, behavior: "smooth" });
        } else if (activeSection > 0) {
          goToSection(activeSection - 1, "last");
        }
      }
    },
    [sectionNames, slideTotals, TOTAL_SECTIONS, goToSection, activeSection]
  );

  // Keyboard navigation
  useEffect(() => {
    if (isMobile || isOgMode) return;

    const handler = (e: KeyboardEvent) => {
      // Don't capture if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case "ArrowRight":
        case "l":
          e.preventDefault();
          handleNavigate("right");
          break;
        case "ArrowLeft":
        case "h":
          e.preventDefault();
          handleNavigate("left");
          break;
        case "ArrowDown":
        case "j":
          e.preventDefault();
          goToSection(activeSection + 1, "first");
          break;
        case "ArrowUp":
        case "k":
          e.preventDefault();
          goToSection(activeSection - 1, "last");
          break;
        case "Home":
          e.preventDefault();
          goToSection(0, "first");
          break;
        case "End":
          e.preventDefault();
          goToSection(TOTAL_SECTIONS - 1, "last");
          break;
        default: {
          // Number keys 1-9 jump to sections
          const num = parseInt(e.key, 10);
          if (num >= 1 && num <= TOTAL_SECTIONS) {
            e.preventDefault();
            goToSection(num - 1, "first");
          }
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isMobile, isOgMode, handleNavigate, goToSection, activeSection, TOTAL_SECTIONS]);

  // Build mobile flat slides array
  const allMobileSlides: React.ReactNode[] = [];
  config.sections.forEach((section) => {
    const slides = section.mobileSlides || section.desktopSlides;
    slides.forEach((slide, i) => {
      allMobileSlides.push(
        <MobileSection key={`${section.id}-${i}`}>{slide}</MobileSection>
      );
    });
  });

  const ArticleComponent = config.articleComponent;

  // Build icon list for nav (section icons + article icon)
  const navItems = config.sections.map((s) => ({
    id: s.id,
    label: s.label,
    icon: s.icon,
  }));
  if (config.articleComponent && config.articleIcon) {
    navItems.push({
      id: "article",
      label: "Article",
      icon: config.articleIcon,
    });
  }

  // Current section label for mobile indicator
  const currentSectionLabel = activeSection < config.sections.length
    ? config.sections[activeSection].label
    : "Article";

  // Compute which mobile slide maps to which section (for mobile progress)
  const mobileSectionForSlide = useMemo(() => {
    const map: number[] = [];
    config.sections.forEach((section, sectionIdx) => {
      const slides = section.mobileSlides || section.desktopSlides;
      slides.forEach(() => map.push(sectionIdx));
    });
    return map;
  }, [config]);

  // OG mode: render only the first slide, no nav, no scroll
  if (isOgMode) {
    const firstSlide = config.sections[0]?.desktopSlides[0];
    return (
      <ThemeProvider themeId={config.themeId}>
        <div className="w-[1200px] h-[630px] overflow-hidden grain">
          <div className="w-[1200px] h-[630px]">{firstSlide}</div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider themeId={config.themeId}>
      {/* Progress bar */}
      {!isMobile && (
        <div className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-muted/30">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}

      <div
        ref={containerRef}
        className={`h-screen scrollbar-hide grain ${
          isMobile
            ? "overflow-y-auto snap-y snap-mandatory"
            : "overflow-hidden"
        }`}
      >
        {isMobile ? (
          <>
            {allMobileSlides}
            {ArticleComponent && (
              <section id="section-article" className="snap-start flex-shrink-0 h-screen overflow-y-auto scrollbar-hide">
                <ArticleComponent />
              </section>
            )}
          </>
        ) : (
          <>
          <div
            className="transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ transform: `translateY(-${activeSection * 100}vh)` }}
          >
            {config.sections.map((section, sectionIdx) => (
              <Section
                key={section.id}
                id={`section-${section.id}`}
                onSlideChange={handleSlideChange(sectionIdx)}
                initialSlide={activeSection === sectionIdx ? initialSlideRef.current : 0}
              >
                {section.desktopSlides}
              </Section>
            ))}

            {ArticleComponent && (
              <section id="section-article" className="h-screen flex-shrink-0 overflow-y-auto scrollbar-hide">
                <ArticleComponent />
              </section>
            )}
          </div>

            {/* Vertical section nav sidebar */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col items-end z-[60] cursor-default py-10 pr-5 pl-4">
              {/* Connecting line */}
              <div className="absolute right-[21px] top-10 bottom-10 w-[1px] bg-muted-foreground/10" />
              {/* Progress fill on connecting line */}
              <div
                className="absolute right-[21px] top-10 w-[1px] bg-primary/40 transition-all duration-500 ease-out"
                style={{
                  height: TOTAL_SECTIONS > 1
                    ? `${(activeSection / (TOTAL_SECTIONS - 1)) * 100}%`
                    : "0%",
                  maxHeight: "calc(100% - 5rem)",
                }}
              />

              {navItems.map((item, i) => {
                const Icon = item.icon;
                const isActive = i === activeSection;
                const isPast = i < activeSection;
                return (
                  <button
                    key={item.id}
                    onClick={() => goToSection(i)}
                    className="flex items-center gap-2.5 group transition-all duration-300 relative py-2"
                    aria-label={`Go to ${item.label}`}
                  >
                    {/* Label */}
                    <span
                      className={`font-display text-[10px] uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "opacity-100 text-primary translate-x-0"
                          : "opacity-0 group-hover:opacity-60 translate-x-2 group-hover:translate-x-0 text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                    {/* Icon circle */}
                    <div
                      className={`relative flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
                        isActive
                          ? "text-primary-foreground bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.3)]"
                          : isPast
                            ? "text-primary/60 bg-primary/10"
                            : "text-muted-foreground/30 hover:text-muted-foreground/60 bg-transparent hover:bg-muted/30"
                      }`}
                    >
                      <Icon size={14} />
                    </div>
                  </button>
                );
              })}
            </div>

            <CursorNav
              onNavigate={handleNavigate}
              canGo={{
                up: false,
                down: false,
                left: activeSlide > 0 || activeSection > 0,
                right:
                  activeSlide < (slideTotals[activeSection] || 1) - 1 ||
                  activeSection < TOTAL_SECTIONS - 1,
              }}
            />
          </>
        )}
      </div>

      {/* Mobile: floating section indicator */}
      {isMobile && (
        <div
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-[70] transition-all duration-300 ${
            showMobileIndicator
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-card/90 backdrop-blur-md border border-border/50 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg">
            <span className="font-display text-[10px] uppercase tracking-[0.2em] text-primary">
              {currentSectionLabel}
            </span>
            <span className="text-muted-foreground/40 text-[10px]">
              {activeSection + 1}/{config.sections.length}
            </span>
          </div>
        </div>
      )}

      {/* Mobile: bottom progress dots */}
      {isMobile && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[70] flex gap-1.5">
          {config.sections.map((section, i) => (
            <div
              key={section.id}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeSection
                  ? "bg-primary w-6"
                  : i < activeSection
                    ? "bg-primary/30 w-1.5"
                    : "bg-muted-foreground/15 w-1.5"
              }`}
            />
          ))}
        </div>
      )}

      {/* Keyboard hint — shown briefly on first load (desktop only) */}
      {!isMobile && <KeyboardHint />}
    </ThemeProvider>
  );
}

/** Subtle keyboard shortcut hint that fades away */
function KeyboardHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 right-20 z-[60] transition-opacity duration-1000 ${
        visible ? "opacity-40" : "opacity-0"
      }`}
      style={{ animation: "fade-in 0.6s ease-out, fade-out-delayed 4s ease-out forwards" }}
    >
      <div className="flex items-center gap-3 text-muted-foreground text-[10px] font-display uppercase tracking-[0.15em]">
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-muted/50 text-muted-foreground/80 text-[9px]">&larr;</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-muted/50 text-muted-foreground/80 text-[9px]">&rarr;</kbd>
          slides
        </span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-muted/50 text-muted-foreground/80 text-[9px]">&uarr;</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-muted/50 text-muted-foreground/80 text-[9px]">&darr;</kbd>
          sections
        </span>
      </div>
    </div>
  );
}
