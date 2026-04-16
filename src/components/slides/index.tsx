/**
 * Shared Slide Primitives
 *
 * These are the building blocks for all presentation slides.
 * They use CSS variables from the active theme, so they automatically
 * adapt to whichever style guide a presentation uses.
 */

import React from "react";

/* ─── Centered content wrapper ─── */
export const Slide = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center px-8 md:px-20 lg:px-32 ${className}`}>
    {children}
  </div>
);

/* ─── Big bold uppercase headline ─── */
export const BigText = ({ children }: { children: React.ReactNode }) => (
  <h1 className="font-title text-4xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[1.05] break-words">{children}</h1>
);

/* ─── Italic serif statement ─── */
export const SerifStatement = ({ children }: { children: React.ReactNode }) => (
  <p className="font-serif text-2xl md:text-4xl lg:text-5xl italic leading-snug max-w-5xl">{children}</p>
);

/* ─── Section opener: icon + super-title + big title ─── */
export const SectionOpener = ({
  superTitle,
  title,
  icon: Icon,
  monogramSrc,
}: {
  number?: string;
  superTitle: string;
  title: React.ReactNode;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  monogramSrc?: string;
}) => (
  <div className="relative w-full h-full flex items-center dot-grid overflow-hidden">
    {Icon && (
      <div className="absolute right-[-2rem] md:right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.04]">
        <Icon size={500} className="text-foreground w-[280px] h-[280px] md:w-[500px] md:h-[500px]" />
      </div>
    )}
    {monogramSrc && (
      <img src={monogramSrc} alt="" className="absolute bottom-8 left-8 md:left-20 lg:left-32 h-8 md:h-10 opacity-40 z-10" />
    )}
    <div className="relative z-10 px-8 md:px-20 lg:px-32 text-left max-w-5xl">
      {Icon && (
        <div className="mb-6">
          <Icon size={28} className="text-primary" />
        </div>
      )}
      <p className="font-display text-sm md:text-base uppercase tracking-[0.35em] text-muted-foreground font-bold mb-8">{superTitle}</p>
      <h1 className="font-title text-4xl md:text-7xl lg:text-8xl uppercase leading-[1.15] tracking-tight break-words">{title}</h1>
    </div>
  </div>
);

/* ─── Grid card with accent bar ─── */
export const GridCard = ({ superTitle, title, body }: { superTitle: string; title: string; body: string }) => (
  <div className="text-left accent-bar">
    <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">{superTitle}</p>
    <h3 className="font-display text-xl md:text-2xl font-extrabold uppercase leading-tight mb-3">{title}</h3>
    <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">{body}</p>
  </div>
);

/* ─── Numbered stat / item ─── */
export const NumberedItem = ({ num, title, desc }: { num: string; title: string; desc: string }) => (
  <div className="flex gap-3 md:gap-4 items-start text-left">
    <span className="font-display text-4xl md:text-6xl font-black text-primary/80 leading-none shrink-0">{num}</span>
    <div>
      <h3 className="font-display text-lg md:text-xl font-extrabold uppercase leading-tight">{title}</h3>
      <p className="text-sm md:text-base font-light leading-relaxed mt-1 opacity-70">{desc}</p>
    </div>
  </div>
);

/* ─── White/Canvas-background slide container (theme-aware) ─── */
export const WhiteSlide = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full h-full bg-light-surface text-light flex items-center justify-center px-8 md:px-20 lg:px-32 ${className}`}>
    <div className="w-full max-w-6xl">{children}</div>
  </div>
);

/* ─── Full-bleed background image ─── */
export const BgImage = ({ src, opacity = "opacity-20" }: { src: string; opacity?: string }) => (
  <img src={src} alt="" className={`absolute inset-0 w-full h-full object-cover ${opacity} pointer-events-none select-none`} />
);

/* ─── Mobile snap section wrapper ─── */
export const MobileSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`h-screen w-full snap-start flex-shrink-0 flex items-center justify-center overflow-hidden ${className}`}>
    {children}
  </section>
);

/* ─── Interactive prompt/discussion slide ─── */
export const PromptSlide = ({ question, label = "Discussion" }: { question: string; label?: string }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
      <span className="font-serif text-[20rem] md:text-[28rem] text-foreground/[0.03] leading-none">?</span>
    </div>
    <div className="relative z-10 px-8 md:px-20 lg:px-32 max-w-5xl text-center">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-primary font-bold mb-8">{label}</p>
      <p className="font-serif text-2xl md:text-4xl lg:text-5xl italic leading-snug">{question}</p>
    </div>
  </div>
);

/* ─── Quote card (for light-bg slides, theme-aware) ─── */
export const QuoteCard = ({ quote, author, role }: { quote: string; author: string; role: string }) => (
  <div className="text-left border-l-4 border-brand-green pl-4">
    <p className="font-serif text-lg md:text-xl italic leading-relaxed text-light-secondary mb-4">"{quote}"</p>
    <p className="text-sm text-light-muted">
      <span className="text-brand-green font-bold">{author}</span> - {role}
    </p>
  </div>
);
