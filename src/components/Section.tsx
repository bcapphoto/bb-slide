import React, { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = React.Children.count(children);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveSlide(index);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const goTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(index, slideCount - 1));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id={id} className="relative h-screen snap-start flex-shrink-0">
      <div
        ref={scrollRef}
        className="h-full overflow-x-auto snap-x snap-mandatory flex scrollbar-hide"
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

      {/* Bottom: dots + left/right arrows */}
      {slideCount > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
          <button
            onClick={() => goTo(activeSlide - 1)}
            className={`transition-opacity ${activeSlide === 0 ? "opacity-0 pointer-events-none" : "opacity-30 hover:opacity-70"}`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" strokeWidth={1.5} />
          </button>
          <div className="flex gap-2">
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
          <button
            onClick={() => goTo(activeSlide + 1)}
            className={`transition-opacity ${activeSlide === slideCount - 1 ? "opacity-0 pointer-events-none" : "opacity-30 hover:opacity-70"}`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-foreground" strokeWidth={1.5} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Section;
