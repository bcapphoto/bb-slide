/**
 * Team Creative gallery — showcases the in-house creative team's work.
 *
 * - Gallery slides display a curated set of design images.
 * - A "View the full deck" button opens a lightbox that lets the viewer
 *   scroll through every page of the Redhead Brands apparel-design concepts
 *   deck (pre-rendered to JPGs in /public/images/design-work/pdf-pages).
 */

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const designBase = "/images/design-work";
const pdfPageBase = `${designBase}/pdf-pages`;
const PDF_PAGE_COUNT = 30;

const pdfPages: string[] = Array.from({ length: PDF_PAGE_COUNT }, (_, i) =>
  `${pdfPageBase}/page-${String(i + 1).padStart(2, "0")}.jpg`
);

const featured = {
  hero: `${designBase}/cc.png`,
  tiles: [
    `${designBase}/motts.png`,
    `${designBase}/rs.jpeg`,
    `${designBase}/bb-cc.jpeg`,
    `${designBase}/Conestoga.jpg`,
  ],
};

/* ─── Design Deck Lightbox ─── */
const DesignDeckLightbox = ({ onClose }: { onClose: () => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, PDF_PAGE_COUNT - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/75 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Design deck preview"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-full bg-gray-950 rounded-lg shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 md:px-6 py-3 border-b border-white/10 flex-shrink-0">
          <div>
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-brand-green font-bold">Creative Deck</p>
            <p className="text-white/60 text-xs mt-0.5">Page {index + 1} of {PDF_PAGE_COUNT}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Main page view */}
        <div className="flex-1 flex items-center justify-center relative overflow-hidden px-3 md:px-4 py-4 bg-black/40 min-h-0">
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            disabled={index === 0}
            className="absolute left-3 md:left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft size={22} />
          </button>

          <img
            src={pdfPages[index]}
            alt={`Design deck page ${index + 1}`}
            className="max-h-full max-w-full object-contain shadow-xl"
          />

          <button
            onClick={() => setIndex((i) => Math.min(i + 1, PDF_PAGE_COUNT - 1))}
            disabled={index === PDF_PAGE_COUNT - 1}
            className="absolute right-3 md:right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="border-t border-white/10 bg-black/50 px-3 md:px-5 py-2.5 overflow-x-auto flex-shrink-0">
          <div className="flex gap-1.5">
            {pdfPages.map((src, i) => (
              <button
                key={src}
                onClick={() => setIndex(i)}
                className={`flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
                  i === index ? "border-brand-green opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                }`}
                aria-label={`Go to page ${i + 1}`}
              >
                <img src={src} alt="" className="h-12 w-auto" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Lightbox Button ─── */
const LightboxButton = ({ onClick, className = "" }: { onClick: () => void; className?: string }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 bg-gray-900 hover:bg-brand-green hover:text-gray-900 text-white font-display text-sm uppercase tracking-wider font-bold px-6 py-3 rounded-sm transition-colors ${className}`}
  >
    View a full creative concept deck
    <span aria-hidden>→</span>
  </button>
);

/* ─── Desktop Gallery ─── */
export const TeamCreativeGalleryDesktop = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full max-w-6xl px-8 md:px-16">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-2">Our Creative Work</p>
        <h2 className="font-title text-4xl md:text-5xl uppercase leading-[0.9] tracking-tight mb-3">
          <span className="text-gray-900">Decks that </span><span className="highlight-green">close.</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-6 max-w-2xl">
          Real work from our in-house creative team — the kind of presentations that win the pitch, not just fill a folder.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-100">
            <img src={featured.hero} alt="Creative deck — hero page" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {featured.tiles.map((src, i) => (
              <div key={src} className="rounded-xl overflow-hidden shadow-md bg-gray-100">
                <img src={src} alt={`Creative deck sample ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-gray-500 text-xs md:text-sm italic">
            A peek at a real client deck — scroll through all 30 pages.
          </p>
          <LightboxButton onClick={() => setOpen(true)} />
        </div>
      </div>
      {open && <DesignDeckLightbox onClose={() => setOpen(false)} />}
    </>
  );
};

/* ─── Mobile Gallery ─── */
export const TeamCreativeGalleryMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full px-8">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-2">Our Creative Work</p>
        <h2 className="font-title text-3xl uppercase leading-[0.9] tracking-tight mb-3">
          <span className="text-gray-900">Decks that </span><span className="highlight-green">close.</span>
        </h2>
        <p className="text-gray-500 text-sm mb-5">
          Real work from our in-house creative team — presentations that win the pitch.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/3] bg-gray-100 mb-3">
          <img src={featured.hero} alt="Creative deck — hero page" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {featured.tiles.map((src, i) => (
            <div key={src} className="rounded-lg overflow-hidden shadow-md aspect-[4/3] bg-gray-100">
              <img src={src} alt={`Creative deck sample ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <LightboxButton onClick={() => setOpen(true)} className="w-full justify-center" />
      </div>
      {open && <DesignDeckLightbox onClose={() => setOpen(false)} />}
    </>
  );
};

/* ─── Inline Article Gallery (for ArticleSection) ─── */
export const TeamCreativeArticleGallery = () => {
  const [open, setOpen] = useState(false);
  const all = [featured.hero, ...featured.tiles];
  return (
    <>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {all.map((src, i) => (
          <div
            key={src}
            className={`rounded-lg overflow-hidden shadow-md bg-gray-100 aspect-[4/3] ${
              i === 0 ? "col-span-2" : ""
            }`}
          >
            <img src={src} alt={`Creative deck sample ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
      <LightboxButton onClick={() => setOpen(true)} className="w-full justify-center mb-8" />
      {open && <DesignDeckLightbox onClose={() => setOpen(false)} />}
    </>
  );
};

/* ─── Inline Article Grid (MMM 18-image gallery) ─── */
export const MMMArticleGallery = ({ images }: { images: string[] }) => (
  <div className="grid grid-cols-3 gap-2 mb-8">
    {images.map((src) => (
      <div key={src} className="rounded-md overflow-hidden shadow-sm aspect-square bg-gray-100">
        <img src={src} alt="AI-generated product mockup" className="w-full h-full object-cover" loading="lazy" />
      </div>
    ))}
  </div>
);
