import { useState } from "react";
import { usePresentationConfig } from "@/presentations/PresentationContext";
import bbLogoHorizontal from "@/assets/bb-logo-horizontal-white.svg";
import { Download } from "lucide-react";

const SectionDivider = ({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}) => (
  <div className="flex items-center gap-6 my-20 md:my-28">
    <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-brand-green/10 flex items-center justify-center">
      <Icon size={36} className="text-brand-green" />
    </div>
    <div className="flex-1">
      <div className="h-px bg-gray-200" />
    </div>
    <p className="font-display text-xs uppercase tracking-[0.3em] text-gray-400 font-bold flex-shrink-0">
      {label}
    </p>
  </div>
);

const SlideThumbnail = ({ children }: { children: React.ReactNode }) => (
  <div
    className="w-full overflow-hidden rounded-lg border border-gray-200 mb-3 pointer-events-none select-none bg-background"
    style={{ aspectRatio: "16/9", position: "relative" }}
  >
    <div
      className="grain absolute inset-0 text-foreground"
      style={{
        width: "1280px",
        height: "720px",
        transform: "scale(0.494)",
        transformOrigin: "top left",
      }}
    >
      {children}
    </div>
  </div>
);

const notes: Record<string, string[][]> = {
  title: [
    // Slide 0: Cover
    [
      "Brand Blvd recruitment leave-behind — the tagline 'Life is better on the Blvd' means their day-to-day gets easier, not just their commission structure.",
    ],
    // Slide 1: Welcome video from Jill
    [
      "Personal welcome video from Jill Pascuzzi, VP of Sales, USA.",
      "Jill is the person they'll work with day-to-day on the U.S. side.",
    ],
    // Slide 2: The hook
    [
      "Core tension: their book is theirs, but the system behind them isn't keeping up.",
      "They're waiting on mockups, chasing approvals, spending hours on stuff that isn't selling.",
      "Key line: 'You don't need more motivation. You need better infrastructure.'",
    ],
    // Slide 3: Overview of 4 themes
    [
      "Roadmap for the conversation — four pillars: Unfair Advantage, Sell Ideas, Build Bigger, Full Team.",
      "Each pillar represents a shift from the industry standard to the Brand Blvd way.",
    ],
  ],

  advantage: [
    // Slide 0: Section opener
    [
      "This section covers the tools and tech that set Brand Blvd reps apart from every competitor.",
    ],
    // Slide 1: Statement — PDF and a pitch
    [
      "Industry standard: show up with a catalog and a price list. At Brand Blvd, you show up with custom, client-specific assets ready to go.",
    ],
    // Slide 2: Four-card toolkit grid
    [
      "Custom mockups: AI-generated, branded to the client, built in seconds.",
      "Pitch decks: fully designed and client-ready before you finish your coffee.",
      "Demo stores: live, clickable company stores the prospect can browse on the spot.",
      "Creative concepts: ideas turned into polished presentations, not napkin sketches.",
    ],
    // Slide 3: Bryan video — Magic Merch Maker
    [
      "Bryan Caporicci introduces Magic Merch Maker — the proprietary all-in-one AI platform built in-house. No other distributor has it.",
    ],
    // Slide 4: MMM Showcase — platform UI
    [
      "Single end-to-end pipeline: research a prospect, generate ideas, build mockups, assemble a pitch, launch a store.",
      "Does company research automatically, generates product ideas tailored to the client's brand, creates AI mockups in seconds.",
    ],
    // Slide 5: MMM Product Gallery
    [
      "Real examples of AI-generated mockups — high quality and brand-accurate, generated in seconds, not hours of back-and-forth with a designer.",
    ],
    // Slide 6: Before/After
    [
      "Before: half your week building proposals and chasing mockups. After: you spend it closing.",
      "Magic Merch Maker handles the rest.",
    ],
    // Slide 7: Discussion prompt
    [
      "Discussion: 'How much time do you spend each week on things that aren't actually selling?'",
    ],
    // Slide 8: Section summary — You sell. We arm you.
    [
      "AI-powered mockups, pitch decks, demo stores, and creative — all built for you so you can focus on closing.",
    ],
  ],

  ideas: [
    // Slide 0: Section opener
    [
      "The biggest mindset shift: stop selling products from a catalog, start selling ideas that make clients' brands unforgettable.",
    ],
    // Slide 1: Statement — product catalog vs. idea
    [
      "At most distributors, the conversation starts and ends with a product catalog. At Brand Blvd, it starts with an idea.",
      "Positions reps as creative partners, not order-takers.",
    ],
    // Slide 2: Three-card grid — creative, production, reach
    [
      "In-house creative team for the big pitches that win new business — not freelancers.",
      "Full production under one roof: Magic Merch Maker handles research and ideation, the creative team brings it to life.",
      "Seamless Canada + U.S. execution — North American reach with zero friction.",
    ],
    // Slide 3: Before/After
    [
      "Before: a product rep in a commodity conversation. After: a creative partner your clients can't replace.",
      "When you're the ideas person, you don't compete on price — you compete on value.",
    ],
    // Slide 4: Discussion prompt
    [
      "Discussion: 'When's the last time a client came to you for an idea — not just a reorder?'",
    ],
    // Slide 5: Section summary — Creative partner, not catalog rep
    [
      "The shift: catalog rep to creative partner. In-house creative, full production, and Canada + U.S. reach.",
      "You pitch bigger because you can deliver bigger.",
    ],
  ],

  build: [
    // Slide 0: Section opener
    [
      "This section is about the business infrastructure — the systems that help run your book like a real business.",
    ],
    // Slide 1: Numbered list — CRM, pricing, enablement
    [
      "Best-in-class CRM and sales tools to manage pipeline like a real business, not a spreadsheet.",
      "Preferred supplier pricing protects margin on every single quote — directly impacts take-home.",
      "Sales collateral and enablement makes every touchpoint sharper and more professional.",
    ],
    // Slide 2: Statement — motivation vs. infrastructure
    [
      "Callback to the opening hook: 'You don't need more motivation. You need better infrastructure.'",
      "They're already motivated — they need a system that matches their ambition.",
    ],
    // Slide 3: Discussion prompt
    [
      "Discussion: 'What part of your current setup slows you down the most?'",
    ],
    // Slide 4: Section summary — Better tools. Bigger book.
    [
      "CRM, preferred pricing, sales enablement, and a growth system that helps you grow — not just survive.",
    ],
  ],

  team: [
    // Slide 0: Section opener
    [
      "The people section — the human infrastructure behind the tech. Not a phone tree, a full team.",
    ],
    // Slide 1: Statement — You sell. We handle everything else.
    [
      "Their only job is to sell. Everything else — design, production, order management, fulfillment — is handled by real people who know their accounts.",
    ],
    // Slide 2: Three-card grid — design, CS, sales dev
    [
      "Design team: in-house creatives for the big pitches — real designers, not outsourced.",
      "Customer service: production, order management, fulfillment — the rep never chases an order.",
      "Sales development: proactive help sourcing contacts and prospects when they want to grow.",
    ],
    // Slide 3: Creative work gallery — real decks from the in-house team
    [
      "Proof slide: real creative work from the in-house team — this is what 'design team' actually means.",
      "The 'View the full deck' button opens a lightbox with all 30 pages of a real client deck (Redhead Brands apparel concepts).",
      "Use this moment to stop talking and let the work speak — scroll a few pages live if the conversation is going well.",
    ],
    // Slide 4: Show up ready — budgets
    [
      "Self-promo budget: branded materials — business cards, leave-behinds, branded merch — that make a professional impression.",
      "Sample budget: put product in a prospect's hands from day one. Nothing closes like a physical sample.",
    ],
    // Slide 5: Discussion prompt
    [
      "Discussion: 'What would you do differently if you had a full team backing every deal?'",
    ],
    // Slide 6: Section summary — You sell. We handle everything else.
    [
      "Design, customer service, sales development, budgets, and infrastructure — all behind every deal.",
    ],
  ],

  closing: [
    // Slide 0: Summary with all four pillars
    [
      "Unfair advantage: walk into every meeting armed with AI-powered tools no one else has.",
      "Creative partner: compete on ideas and execution, not price.",
      "Build bigger: CRM, preferred pricing, and enablement that helps you grow.",
      "Full team: design, operations, sales dev, and budgets — all behind you.",
    ],
  ],
};

const PresenterNotesSection = () => {
  const config = usePresentationConfig();
  const [showPdf, setShowPdf] = useState(false);

  const handleDownload = async () => {
    setShowPdf(true);
    const { pdf } = await import("@react-pdf/renderer");
    const { default: PresenterNotesPDF } = await import("./PresenterNotesPDF");
    const blob = await pdf(<PresenterNotesPDF />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Life-Is-Better-On-The-Blvd-Presenter-Notes.pdf";
    a.click();
    URL.revokeObjectURL(url);
    setShowPdf(false);
  };

  if (!config)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading...
      </div>
    );

  return (
    <article className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-[680px] mx-auto px-6 md:px-8 py-20 md:py-32">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <div className="flex items-center justify-between mb-10">
            <img
              src={bbLogoHorizontal}
              alt="BrandBlvd"
              className="h-6 invert opacity-40"
            />
            <button
              onClick={handleDownload}
              disabled={showPdf}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-900 border border-gray-200 rounded-md hover:border-gray-400 transition-colors disabled:opacity-50"
            >
              <Download size={16} />
              {showPdf ? "Generating..." : "Download PDF"}
            </button>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-gray-900 mb-6">
            Presenter notes
          </h1>
          <p className="font-serif text-xl md:text-2xl italic text-gray-500 mb-6">
            Life is better on the Blvd
          </p>
          <div className="w-16 h-1 bg-brand-green" />
        </header>

        {/* Sections and slides */}
        {config.sections.map((section) => (
          <div key={section.id}>
            <SectionDivider icon={section.icon} label={section.label} />
            {section.desktopSlides.map((slide, i) => (
              <div key={i} className="mb-8">
                <SlideThumbnail>{slide}</SlideThumbnail>
                {notes[section.id]?.[i] && (
                  <ul className="space-y-1 mt-2">
                    {notes[section.id][i].map((point, j) => (
                      <li
                        key={j}
                        className="text-[15px] text-gray-700 leading-snug flex gap-2"
                      >
                        <span className="text-brand-green mt-0.5 flex-shrink-0 text-xs">
                          ●
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </article>
  );
};

export default PresenterNotesSection;
