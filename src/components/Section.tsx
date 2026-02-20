import React, { useRef, useEffect, useState, useCallback } from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  onSlideChange?: (slideIndex: number) => void;
  initialSlide?: number;
}

const Section: React.FC<SectionProps> = ({ children, id, onSlideChange, initialSlide = 0 }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(initialSlide);
  const slideCount = React.Children.count(children);
  const didInitScroll = useRef(false);

  // Scroll to initial slide on mount
  useEffect(() => {
    if (initialSlide > 0 && scrollRef.current && !didInitScroll.current) {
      didInitScroll.current = true;
      scrollRef.current.scrollTo({ left: initialSlide * scrollRef.current.clientWidth, behavior: "instant" as ScrollBehavior });
    }
  }, [initialSlide]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveSlide(index);
    onSlideChange?.(index);
  }, [onSlideChange]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section id={id} className="relative h-screen snap-start flex-shrink-0">
      <div
        ref={scrollRef}
        className="h-full overflow-x-auto snap-x snap-mandatory flex scrollbar-hide"
        data-slide-scroller
      >
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            className="min-w-[100vw] w-[100vw] h-full flex-shrink-0 snap-start flex items-center justify-center"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dot indicators only */}
      {slideCount > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {Array.from({ length: slideCount }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeSlide
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/20 w-1.5"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Section;
