/**
 * PresentationShell — The reusable presentation engine
 *
 * Handles: section navigation, horizontal slide scroll, mobile/desktop layout,
 * cursor navigation, URL routing, dot indicators, sidebar nav.
 *
 * Each presentation provides a PresentationConfig; this component does the rest.
 */

import { useEffect, useState, useCallback, useRef } from "react";
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
  const sectionNames = config.sections.map((s) => s.id);
  // Add "article" if present
  if (config.articleComponent) sectionNames.push("article");

  const TOTAL_SECTIONS = sectionNames.length;

  // Build slideTotals from config
  const slideTotals: Record<number, number> = {};
  config.sections.forEach((s, i) => {
    slideTotals[i] = s.desktopSlides.length;
  });
  if (config.articleComponent) {
    slideTotals[config.sections.length] = 1;
  }

  const [activeSection, setActiveSection] = useState(() => {
    const idx = sectionNames.indexOf(paramSection as string);
    return idx >= 0 ? idx : 0;
  });
  const initialSlideRef = useRef(paramSlide ? parseInt(paramSlide, 10) - 1 : 0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<Record<number, number>>({});
  const [activeSlide, setActiveSlide] = useState(0);

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

  // Vertical scroll handler
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = () => {
      const index = Math.round(el.scrollTop / el.clientHeight);
      setActiveSection(index);
      if (!isMobile) {
        setActiveSlide(slidesRef.current[index] || 0);
        updateUrl(index, slidesRef.current[index] || 0);
      }
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, [updateUrl, isMobile]);

  // Deep-link scroll on mount
  useEffect(() => {
    const idx = sectionNames.indexOf(paramSection as string);
    if (idx > 0) {
      const el = document.getElementById(`section-${sectionNames[idx]}`);
      if (el) {
        if (el.classList.contains("overflow-y-auto")) el.scrollTop = 0;
        el.scrollIntoView({ behavior: "instant" as ScrollBehavior });
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

  const goToSection = (index: number, targetSlide: "first" | "last" = "first") => {
    const clamped = Math.max(0, Math.min(index, TOTAL_SECTIONS - 1));
    const el = document.getElementById(`section-${sectionNames[clamped]}`);
    const scroller = el?.querySelector("[data-slide-scroller]") as HTMLElement | null;

    if (scroller) {
      const total = slideTotals[clamped] || 1;
      const slideIdx = targetSlide === "last" ? total - 1 : 0;
      scroller.style.scrollSnapType = "none";
      scroller.scrollLeft = slideIdx * scroller.clientWidth;
      slidesRef.current[clamped] = slideIdx;
      requestAnimationFrame(() => {
        if (scroller) scroller.style.scrollSnapType = "";
      });
    }
    if (el && el.classList.contains("overflow-y-auto")) {
      el.scrollTop = 0;
    }
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigate = useCallback(
    (dir: "left" | "right" | "up" | "down") => {
      if (dir === "up" || dir === "down") return;

      const container = containerRef.current;
      if (!container) return;
      const currentSectionIdx = Math.round(container.scrollTop / container.clientHeight);

      const section = document.getElementById(`section-${sectionNames[currentSectionIdx]}`);
      const scroller = section?.querySelector("[data-slide-scroller]") as HTMLElement | null;
      const currentSlide = scroller ? Math.round(scroller.scrollLeft / scroller.clientWidth) : 0;
      const totalSlides = slideTotals[currentSectionIdx] || 1;

      if (dir === "right") {
        if (currentSlide < totalSlides - 1 && scroller) {
          scroller.scrollTo({ left: (currentSlide + 1) * scroller.clientWidth, behavior: "smooth" });
        } else if (currentSectionIdx < TOTAL_SECTIONS - 1) {
          goToSection(currentSectionIdx + 1, "first");
        }
      } else {
        if (currentSlide > 0 && scroller) {
          scroller.scrollTo({ left: (currentSlide - 1) * scroller.clientWidth, behavior: "smooth" });
        } else if (currentSectionIdx > 0) {
          goToSection(currentSectionIdx - 1, "last");
        }
      }
    },
    [sectionNames, slideTotals, TOTAL_SECTIONS]
  );

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

  // Build icon list for nav (home icon + section icons + article icon)
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

  return (
    <ThemeProvider themeId={config.themeId}>
      <div
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide grain"
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
              <section id="section-article" className="h-screen snap-start flex-shrink-0 overflow-y-auto scrollbar-hide">
                <ArticleComponent />
              </section>
            )}

            {/* Vertical section nav sidebar */}
            {!isOgMode && (
              <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col items-end gap-5 z-[60] cursor-default py-12 pr-6 pl-4">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  const isActive = i === activeSection;
                  return (
                    <button
                      key={item.id}
                      onClick={() => goToSection(i)}
                      className="flex items-center gap-2.5 group transition-all duration-300"
                      aria-label={`Go to ${item.label}`}
                    >
                      <span
                        className={`font-display text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                          isActive
                            ? "opacity-100 text-primary translate-x-0"
                            : "opacity-0 group-hover:opacity-60 translate-x-2 group-hover:translate-x-0 text-muted-foreground"
                        }`}
                      >
                        {item.label}
                      </span>
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-sm transition-all duration-300 ${
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground/30 hover:text-muted-foreground/60"
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {!isOgMode && (
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
            )}
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
