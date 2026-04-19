/**
 * Video slides for personalized video messages.
 *
 * - `VideoSlide` / `VideoSlideDark`: stylized placeholders (used before a video is recorded).
 * - `YouTubeSlide` / `YouTubeSlideDark`: real YouTube videos that show a thumbnail preview
 *   on the slide and open in a fullscreen lightbox on click. The lightbox auto-closes
 *   when the slide leaves the viewport (e.g., user clicks Next), which unmounts the
 *   iframe and stops playback.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/* ───────────────────────── Placeholder slides ───────────────────────── */

export const VideoSlide = ({
  from,
  role,
  title,
  subtitle,
  initials,
}: {
  from: string;
  role: string;
  title: React.ReactNode;
  subtitle: string;
  initials: string;
}) => (
  <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden">
    <div className="absolute inset-0 dot-grid-light opacity-50" />

    <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-8">
      <div className="relative w-full max-w-lg aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl mb-10 group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-brand-green/20 border-2 border-brand-green/40 flex items-center justify-center mb-2">
              <span className="text-brand-green font-display text-2xl font-bold">{initials}</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
          <p className="text-white/90 text-sm font-medium">{from}</p>
          <p className="text-white/50 text-xs">{role}</p>
        </div>

        <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm rounded-md px-2.5 py-1 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white/70 text-[10px] font-medium uppercase tracking-wider">Video</span>
        </div>
      </div>

      <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-400 font-bold mb-3">{subtitle}</p>
      <h2 className="font-title text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.95] tracking-tight text-gray-900">
        {title}
      </h2>
    </div>
  </div>
);

export const VideoSlideDark = ({
  from,
  role,
  title,
  subtitle,
  initials,
}: {
  from: string;
  role: string;
  title: React.ReactNode;
  subtitle: string;
  initials: string;
}) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden diagonal-lines">
    <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-8">
      <div className="relative w-full max-w-lg aspect-video bg-black/40 rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center">
              <span className="text-primary font-display text-2xl font-bold">{initials}</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-primary-foreground ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-4">
          <p className="text-white/90 text-sm font-medium">{from}</p>
          <p className="text-white/50 text-xs">{role}</p>
        </div>

        <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm rounded-md px-2.5 py-1 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white/70 text-[10px] font-medium uppercase tracking-wider">Video</span>
        </div>
      </div>

      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground font-bold mb-3">{subtitle}</p>
      <h2 className="font-title text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.95] tracking-tight">
        {title}
      </h2>
    </div>
  </div>
);

/* ───────────────────────── YouTube + Lightbox ───────────────────────── */

const youTubeMaxResThumbnail = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
const youTubeFallbackThumbnail = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const buildEmbedUrl = (videoId: string, autoplay: boolean) => {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    ...(autoplay ? { autoplay: "1" } : {}),
  });
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
};

const PlayBadge = ({ size = "lg" }: { size?: "md" | "lg" }) => {
  const dims = size === "lg" ? "w-20 h-20 md:w-24 md:h-24" : "w-14 h-14";
  const icon = size === "lg" ? "w-8 h-8 md:w-9 md:h-9" : "w-6 h-6";
  return (
    <div
      className={`${dims} rounded-full bg-brand-green flex items-center justify-center shadow-2xl ring-4 ring-white/20 group-hover:scale-110 group-hover:ring-white/30 transition-transform duration-200`}
    >
      <svg className={`${icon} text-white ml-1`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
};

const VideoLightbox = ({
  videoId,
  title,
  onClose,
}: {
  videoId: string;
  title: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close video"
        className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div
        className="relative w-full max-w-[1400px] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="absolute inset-0 w-full h-full"
          src={buildEmbedUrl(videoId, true)}
          title={title}
          loading="eager"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>,
    document.body,
  );
};

type YouTubeSlideProps = {
  videoId: string;
  from: string;
  role: string;
  title: React.ReactNode;
  subtitle: string;
};

const useAutoCloseWhenOffscreen = (
  ref: React.RefObject<HTMLElement>,
  isOpen: boolean,
  close: () => void,
) => {
  useEffect(() => {
    if (!isOpen) return;
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio < 0.5) {
            close();
            break;
          }
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [isOpen, ref, close]);
};

const YouTubeThumbnail = ({ videoId, alt }: { videoId: string; alt: string }) => {
  const [src, setSrc] = useState(() => youTubeMaxResThumbnail(videoId));
  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
      onError={() => {
        if (src !== youTubeFallbackThumbnail(videoId)) {
          setSrc(youTubeFallbackThumbnail(videoId));
        }
      }}
    />
  );
};

export const YouTubeSlide = ({ videoId, from, role, title, subtitle }: YouTubeSlideProps) => {
  const [open, setOpen] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useAutoCloseWhenOffscreen(slideRef, open, close);

  return (
    <div ref={slideRef} className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 dot-grid-light opacity-50" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-8">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Play video: ${from} — ${subtitle}`}
          className="group relative w-full max-w-2xl aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl mb-8 ring-1 ring-black/10 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/40"
        >
          <YouTubeThumbnail videoId={videoId} alt={`${from} — ${subtitle}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 group-hover:from-black/20 group-hover:to-black/50 transition-colors" />

          <div className="absolute inset-0 flex items-center justify-center">
            <PlayBadge />
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4 text-left">
            <p className="text-white/95 text-sm font-medium">{from}</p>
            <p className="text-white/60 text-xs">{role}</p>
          </div>

          <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-sm rounded-md px-2.5 py-1 flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-white/80 text-[10px] font-medium uppercase tracking-wider">Watch</span>
          </div>
        </button>

        <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-400 font-bold mb-3">{subtitle}</p>
        <h2 className="font-title text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.95] tracking-tight text-gray-900">
          {title}
        </h2>
      </div>

      {open && <VideoLightbox videoId={videoId} title={`${from} — ${subtitle}`} onClose={close} />}
    </div>
  );
};

export const YouTubeSlideDark = ({ videoId, from, role, title, subtitle }: YouTubeSlideProps) => {
  const [open, setOpen] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useAutoCloseWhenOffscreen(slideRef, open, close);

  return (
    <div ref={slideRef} className="relative w-full h-full flex items-center justify-center overflow-hidden diagonal-lines">
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-8">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Play video: ${from} — ${subtitle}`}
          className="group relative w-full max-w-2xl aspect-video bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-8 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
        >
          <YouTubeThumbnail videoId={videoId} alt={`${from} — ${subtitle}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50 group-hover:from-black/20 group-hover:to-black/60 transition-colors" />

          <div className="absolute inset-0 flex items-center justify-center">
            <PlayBadge />
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4 text-left">
            <p className="text-white/95 text-sm font-medium">{from}</p>
            <p className="text-white/60 text-xs">{role}</p>
          </div>

          <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-sm rounded-md px-2.5 py-1 flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-white/80 text-[10px] font-medium uppercase tracking-wider">Watch</span>
          </div>
        </button>

        <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground font-bold mb-3">{subtitle}</p>
        <h2 className="font-title text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.95] tracking-tight">
          {title}
        </h2>
      </div>

      {open && <VideoLightbox videoId={videoId} title={`${from} — ${subtitle}`} onClose={close} />}
    </div>
  );
};
