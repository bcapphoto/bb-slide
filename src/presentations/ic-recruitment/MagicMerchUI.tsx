/**
 * Refined UI element recreations from Magic Merch Maker.
 * These are stylized representations of the actual MMM interface,
 * designed to look polished within presentation slides.
 */

/* ─── Mini Client Row ─── */
export const MiniClientRow = () => (
  <div className="space-y-2.5">
    {[
      { initials: "rM", name: "reMarkable", bg: "bg-gray-900", text: "text-white", badges: ["Products"] },
      { initials: "SW", name: "Southwest Airlines", bg: "bg-blue-600", text: "text-white", badges: ["Products", "CC Deck"] },
      { initials: "BB", name: "Brand Blvd", bg: "bg-brand-green", text: "text-white", badges: ["Products", "CC Deck"] },
      { initials: "CT", name: "Canadian Tire", bg: "bg-red-600", text: "text-white", badges: ["Products", "CC Deck", "Store"] },
    ].map((c) => (
      <div key={c.name} className="flex items-center gap-3 bg-white rounded-lg border border-gray-100 px-3.5 py-2.5 shadow-sm">
        <div className={`w-8 h-8 rounded-md ${c.bg} ${c.text} flex items-center justify-center text-[10px] font-bold flex-shrink-0`}>
          {c.initials}
        </div>
        <span className="text-gray-900 text-sm font-semibold flex-1 truncate">{c.name}</span>
        <div className="flex gap-1.5 flex-shrink-0">
          {c.badges.map((b) => (
            <span
              key={b}
              className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                b === "Products" ? "text-brand-green border-brand-green/30" :
                b === "CC Deck" ? "text-purple-600 border-purple-200" :
                "text-red-500 border-red-200"
              }`}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

/* ─── Mini Brand Research Panel ─── */
export const MiniBrandResearch = () => (
  <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
    <div className="px-4 py-3 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
          <span className="text-white text-[8px] font-bold">SW</span>
        </div>
        <span className="text-gray-900 text-sm font-semibold">Southwest Airlines</span>
      </div>
    </div>
    <div className="px-4 py-3 space-y-3">
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px]">
        <div>
          <span className="text-gray-400 uppercase tracking-wider text-[9px] font-bold">Industry</span>
          <p className="text-gray-700 font-medium">Transportation</p>
        </div>
        <div>
          <span className="text-gray-400 uppercase tracking-wider text-[9px] font-bold">Founded</span>
          <p className="text-gray-700 font-medium">1967</p>
        </div>
        <div>
          <span className="text-gray-400 uppercase tracking-wider text-[9px] font-bold">Team</span>
          <p className="text-gray-700 font-medium">72,242</p>
        </div>
        <div>
          <span className="text-gray-400 uppercase tracking-wider text-[9px] font-bold">HQ</span>
          <p className="text-gray-700 font-medium">Dallas, TX</p>
        </div>
      </div>
      <div>
        <span className="text-gray-400 uppercase tracking-wider text-[9px] font-bold">Brand Colors</span>
        <div className="flex gap-1.5 mt-1.5">
          {["#304CB2", "#FFCA4F", "#D51920", "#2B4DB4", "#354B9C"].map((c) => (
            <div key={c} className="w-7 h-7 rounded-md shadow-sm flex items-center justify-center" style={{ backgroundColor: c }}>
              <span className="text-white/90 text-[6px] font-mono font-bold">{c.slice(1, 4)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ─── Mini Product Card ─── */
export const MiniProductCard = () => (
  <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
    <div className="h-28 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center relative">
      <div className="text-center">
        <div className="w-12 h-16 mx-auto bg-gradient-to-b from-blue-400 via-red-400 to-yellow-400 rounded-md opacity-60" />
      </div>
      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 text-[9px] text-gray-500 font-medium flex items-center gap-1">
        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        Download
      </div>
    </div>
    <div className="px-4 py-3">
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 via-red-500 to-yellow-400" />
        <span className="text-[9px] text-gray-400 font-medium">Southwest Airlines</span>
      </div>
      <p className="text-gray-900 text-sm font-bold">Custom Socks</p>
      <p className="text-gray-500 text-[10px] leading-snug mt-1">Full-wrap designs with subtle branding to boost team spirit.</p>
      <button className="mt-2.5 bg-blue-50 text-blue-600 text-[9px] font-bold px-3 py-1.5 rounded-md flex items-center gap-1">
        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        Download Email Graphic
      </button>
    </div>
  </div>
);

/* ─── Mini CC Deck Card ─── */
export const MiniCCDeck = () => (
  <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
    <div className="flex gap-3 p-3">
      <div className="w-20 h-14 rounded-md bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 flex items-center justify-center flex-shrink-0">
        <div className="w-8 h-6 bg-amber-700/30 rounded-sm" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-gray-900 text-xs font-bold">Carhartt Line</p>
        <span className="inline-block text-[8px] font-bold text-purple-600 bg-purple-50 border border-purple-200 px-1.5 py-0.5 rounded-full mt-0.5">Campaign</span>
        <p className="text-gray-400 text-[9px] mt-1">4 products · 0 logos</p>
      </div>
      <div className="flex gap-1 items-start flex-shrink-0">
        <button className="text-[8px] text-gray-500 border border-gray-200 px-2 py-1 rounded-md font-medium">View & Edit</button>
        <button className="text-[8px] text-gray-500 border border-gray-200 px-2 py-1 rounded-md font-medium">Copy</button>
      </div>
    </div>
  </div>
);

/* ─── Mini Store Selector ─── */
export const MiniStoreSelector = () => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
    <div className="flex items-center justify-center py-3">
      <div className="bg-brand-green text-white text-[10px] font-bold px-4 py-2 rounded-lg flex items-center gap-1.5">
        <span className="text-sm">+</span> Add New Store
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
    <div className="px-4 pb-3 space-y-2">
      <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50">
        <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </div>
        <div>
          <p className="text-gray-900 text-xs font-bold">Demo Store</p>
          <p className="text-gray-500 text-[9px] leading-snug">Full-featured store with category navigation</p>
        </div>
      </div>
      <div className="border-t border-gray-100" />
      <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50">
        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
          <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
        </div>
        <div>
          <p className="text-gray-900 text-xs font-bold">Popup Shop</p>
          <p className="text-gray-500 text-[9px] leading-snug">Simplified storefront for quick catalogs</p>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Pipeline Flow (horizontal, for desktop slides) ─── */
export const MMMPipeline = () => (
  <div className="flex items-center gap-2 justify-center">
    {[
      { label: "Research", icon: "🔍" },
      { label: "Ideation", icon: "💡" },
      { label: "Mockups", icon: "🎨" },
      { label: "CC Deck", icon: "📋" },
      { label: "Store", icon: "🏪" },
    ].map((step, i) => (
      <div key={step.label} className="flex items-center gap-2">
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-lg">{step.icon}</div>
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">{step.label}</span>
        </div>
        {i < 4 && (
          <svg className="w-4 h-4 text-brand-green/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        )}
      </div>
    ))}
  </div>
);

/* ─── Full MMM Showcase (used in desktop slide) ─── */
export const MMMShowcaseDesktop = () => (
  <div className="w-full max-w-6xl px-8 md:px-16">
    <div className="flex items-center gap-2 mb-2">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold">Powered By</p>
    </div>
    <h2 className="font-title text-4xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-3">
      <span className="text-gray-900">Magic Merch</span><span className="highlight-green">Maker.</span>
    </h2>
    <p className="text-gray-500 text-sm md:text-base mb-8 max-w-2xl">
      Our all-in-one AI platform. Research a company, generate product ideas, create branded mockups, build a pitch deck, and launch a demo store — all before the meeting.
    </p>
    <div className="grid grid-cols-3 gap-5">
      <div className="space-y-4">
        <MiniBrandResearch />
        <MiniCCDeck />
      </div>
      <div className="space-y-4">
        <MiniClientRow />
      </div>
      <div className="space-y-4">
        <MiniProductCard />
        <MiniStoreSelector />
      </div>
    </div>
  </div>
);

/* ─── Product Gallery (real AI mockups from MMM) ─── */
const galleryBase = "/images/mmm-gallery";

const gallery1: string[] = [
  `${galleryBase}/lifestyle_1771623752575.jpg`,
  `${galleryBase}/lifestyle_1771864508176.jpg`,
  `${galleryBase}/lifestyle_1771949969169.jpg`,
  `${galleryBase}/lifestyle_1771970952692.jpg`,
  `${galleryBase}/lifestyle_1772116231422.jpg`,
  `${galleryBase}/lifestyle_1772289610212.jpg`,
  `${galleryBase}/lifestyle_1772553153837.jpg`,
  `${galleryBase}/lifestyle_1772553162379.jpg`,
  `${galleryBase}/lifestyle_1773685480355.jpg`,
];

const gallery2: string[] = [
  `${galleryBase}/lifestyle_1773929954800.jpg`,
  `${galleryBase}/lifestyle_1774026059126.jpg`,
  `${galleryBase}/lifestyle_1774275098208.jpg`,
  `${galleryBase}/lifestyle_1774446919145.jpg`,
  `${galleryBase}/lifestyle_1774458491605.jpg`,
  `${galleryBase}/lifestyle_1775489367391.jpg`,
  `${galleryBase}/lifestyle_1775845343465.jpg`,
  `${galleryBase}/lifestyle_1776268893751.jpg`,
  `${galleryBase}/lifestyle_1776337898138.jpg`,
];

const GalleryDesktop = ({ images }: { images: string[] }) => (
  <div className="w-full max-w-6xl px-8 md:px-16">
    <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-2">Real AI Mockups</p>
    <h2 className="font-title text-4xl md:text-5xl uppercase leading-[0.9] tracking-tight mb-3">
      <span className="text-gray-900">Built by Magic Merch</span><span className="highlight-green">Maker.</span>
    </h2>
    <p className="text-gray-500 text-sm mb-8 max-w-2xl">
      Every image below was AI-generated in seconds — branded to the client, ready to present.
    </p>
    <div className="grid grid-cols-3 gap-4">
      {images.map((src) => (
        <div key={src} className="relative rounded-xl overflow-hidden shadow-md aspect-square">
          <img src={src} alt="AI-generated product mockup" className="w-full h-full object-cover" loading="lazy" />
        </div>
      ))}
    </div>
  </div>
);

const GalleryMobile = ({ images }: { images: string[] }) => (
  <div className="w-full px-8">
    <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-2">Real AI Mockups</p>
    <h2 className="font-title text-3xl uppercase leading-[0.9] tracking-tight mb-3">
      <span className="text-gray-900">Built by Magic Merch</span><span className="highlight-green">Maker.</span>
    </h2>
    <p className="text-gray-500 text-sm mb-6">
      AI-generated in seconds — branded, client-ready.
    </p>
    <div className="grid grid-cols-3 gap-2">
      {images.map((src) => (
        <div key={src} className="relative rounded-md overflow-hidden shadow-sm aspect-square">
          <img src={src} alt="AI-generated product mockup" className="w-full h-full object-cover" loading="lazy" />
        </div>
      ))}
    </div>
  </div>
);

export const MMMProductGalleryDesktop = () => <GalleryDesktop images={gallery1} />;
export const MMMProductGalleryMobile = () => <GalleryMobile images={gallery1} />;
export const MMMProductGallery2Desktop = () => <GalleryDesktop images={gallery2} />;
export const MMMProductGallery2Mobile = () => <GalleryMobile images={gallery2} />;

/* ─── Full MMM Showcase (used in mobile slide) ─── */
export const MMMShowcaseMobile = () => (
  <div className="w-full px-8">
    <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-2">Powered By</p>
    <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-3">
      <span className="text-gray-900">Magic Merch</span><span className="highlight-green">Maker.</span>
    </h2>
    <p className="text-gray-500 text-sm mb-6">
      Our all-in-one AI platform — research, ideation, mockups, pitch decks, and demo stores.
    </p>
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <MiniBrandResearch />
        <MiniProductCard />
      </div>
      <MiniCCDeck />
      <MiniStoreSelector />
    </div>
  </div>
);
