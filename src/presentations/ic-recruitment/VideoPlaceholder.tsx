/**
 * Video placeholder slides for personalized video messages.
 * These will be replaced with actual embedded videos once recorded.
 */

const PlayIcon = () => (
  <svg className="w-16 h-16 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

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
    {/* Subtle background pattern */}
    <div className="absolute inset-0 dot-grid-light opacity-50" />

    <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-8">
      {/* Video frame mockup */}
      <div className="relative w-full max-w-lg aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl mb-10 group cursor-pointer">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />

        {/* Avatar circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-brand-green/20 border-2 border-brand-green/40 flex items-center justify-center mb-2">
              <span className="text-brand-green font-display text-2xl font-bold">{initials}</span>
            </div>
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
          <p className="text-white/90 text-sm font-medium">{from}</p>
          <p className="text-white/50 text-xs">{role}</p>
        </div>

        {/* Video placeholder badge */}
        <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm rounded-md px-2.5 py-1 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white/70 text-[10px] font-medium uppercase tracking-wider">Video</span>
        </div>
      </div>

      {/* Text below */}
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
      {/* Video frame mockup */}
      <div className="relative w-full max-w-lg aspect-video bg-black/40 rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-10">
        {/* Avatar circle */}
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

        {/* Bottom label */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-4">
          <p className="text-white/90 text-sm font-medium">{from}</p>
          <p className="text-white/50 text-xs">{role}</p>
        </div>

        {/* Video badge */}
        <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm rounded-md px-2.5 py-1 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white/70 text-[10px] font-medium uppercase tracking-wider">Video</span>
        </div>
      </div>

      {/* Text below */}
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground font-bold mb-3">{subtitle}</p>
      <h2 className="font-title text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.95] tracking-tight">
        {title}
      </h2>
    </div>
  </div>
);
