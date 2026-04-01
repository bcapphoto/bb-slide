/**
 * "IC Recruitment — Why Bring Your Book to Brand Blvd" Presentation
 *
 * Leave-behind for independent consultant recruitment conversations.
 */

import {
  Slide,
  BigText,
  SerifStatement,
  SectionOpener,
  GridCard,
  NumberedItem,
  WhiteSlide,
  PromptSlide,
  QuoteCard,
} from "@/components/slides";
import {
  IconHome,
  IconRocket,
  IconLightbulb,
  IconChart,
  IconTeam,
  IconClosing,
  IconArticle,
} from "@/components/SectionIcons";
import ArticleSection from "./ArticleSection";
import { MMMShowcaseDesktop, MMMShowcaseMobile, MMMProductGalleryDesktop, MMMProductGalleryMobile } from "./MagicMerchUI";
import { VideoSlide, VideoSlideDark } from "./VideoPlaceholder";

import bbLogoHorizontal from "@/assets/bb-logo-horizontal-white.svg";
import bbMonogram from "@/assets/bb-monogram-white.svg";

import type { PresentationConfig } from "@/presentations/presentation.types";

/* ═══════════════════════════════════════════════
   SECTION: TITLE
   ═══════════════════════════════════════════════ */

const titleDesktop = [
  // Cover
  <div className="relative w-full h-full flex items-center justify-center dot-grid-bold glow-br overflow-hidden">
    <div className="absolute right-0 bottom-0 font-display text-[24rem] font-black text-foreground/[0.03] leading-none select-none pointer-events-none tracking-tight">
      IC
    </div>
    <div className="relative z-10 px-8 md:px-20 lg:px-32 text-left max-w-5xl">
      <div className="flex items-center gap-4 mb-12">
        <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-10 md:h-14" />
      </div>
      <h1 className="font-title text-5xl md:text-7xl lg:text-8xl uppercase leading-[1.05] tracking-tight">
        Life is better<br />on the <span className="highlight-green">Blvd.</span>
      </h1>
      <p className="font-serif text-xl md:text-2xl italic text-muted-foreground mt-8 max-w-2xl">
        Why bring your book to Brand Blvd.
      </p>
    </div>
  </div>,

  // Welcome video from Jill
  <VideoSlide
    from="Jill Pascuzzi"
    role="VP of Sales, USA — Brand Blvd"
    title={<>A personal <span className="highlight-green">welcome.</span></>}
    subtitle="From Jill"
    initials="JP"
  />,

  // The hook
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        Your book is yours. You built it.<br />
        But the system behind you? <span className="text-primary font-bold">It's probably not keeping up.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">
        You don't need more motivation. You need better infrastructure.
      </p>
    </Slide>
  </div>,

  // Overview of 4 themes
  <div className="relative w-full h-full flex items-center justify-center bg-white text-gray-900 dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <p className="font-serif text-xl md:text-2xl italic text-gray-500 mb-14">Here's what changes when you plug in.</p>
      <div className="space-y-10 text-left">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconRocket size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-gray-900">Walk into every meeting with an <span className="highlight-green">unfair advantage.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconLightbulb size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-gray-900">Stop selling products. Start selling <span className="highlight-green">ideas.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconChart size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-gray-900">Build your book <span className="highlight-green">bigger.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconTeam size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-gray-900">A full team <span className="highlight-green">behind you.</span></h3>
        </div>
      </div>
    </div>
  </div>,
];

/* ═══════════════════════════════════════════════
   SECTION: UNFAIR ADVANTAGE
   ═══════════════════════════════════════════════ */

const advantageDesktop = [
  <SectionOpener icon={IconRocket} number="01" superTitle="Why Brand Blvd" title={<>Walk into every meeting<br />with an <span className="highlight-green">unfair advantage.</span></>} monogramSrc={bbMonogram} />,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        Most reps show up with a PDF and a pitch.<br />
        Here's what you show up with at <span className="text-primary font-bold">Brand Blvd.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-8">Your Toolkit</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        <GridCard superTitle="AI-Powered" title="Custom mockups in seconds." body="AI-generated, branded to your client, built before the meeting starts." />
        <GridCard superTitle="Client-Ready" title="Pitch decks, done." body="Fully designed, client-ready presentations done before you finish your coffee." />
        <GridCard superTitle="Live Demos" title="Demo stores on the spot." body="Live, clickable company stores your prospect can browse right in the meeting." />
        <GridCard superTitle="Creative" title="Ideas → polished presentations." body="Concepts turned into polished presentations, not napkin sketches." />
      </div>
    </div>
  </div>,

  // Bryan intro to Magic Merch Maker
  <VideoSlideDark
    from="Bryan Caporicci"
    role="Founder & CEO — Brand Blvd"
    title={<>Meet Magic Merch <span className="highlight-green">Maker.</span></>}
    subtitle="Product Demo"
    initials="BC"
  />,

  <div className="relative w-full h-full flex items-center justify-center bg-white text-gray-900 overflow-hidden">
    <MMMShowcaseDesktop />
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-white text-gray-900 overflow-hidden">
    <MMMProductGalleryDesktop />
  </div>,

  <WhiteSlide>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-4">Before</p>
        <p className="text-gray-600 text-lg leading-relaxed">
          You spend half your week building proposals and chasing mockups.
        </p>
      </div>
      <div>
        <p className="font-display text-sm uppercase tracking-[0.35em] text-brand-green font-bold mb-4">After</p>
        <p className="text-gray-900 text-lg leading-relaxed font-medium">
          You spend it <span className="font-bold">closing</span>. The tools do the rest.
        </p>
      </div>
    </div>
  </WhiteSlide>,

  <PromptSlide question="How much time do you spend each week on things that aren't actually selling?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">01</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">The Advantage</div>
      <BigText>You sell.<br />We <span className="highlight-green">arm you.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        Magic Merch Maker — AI-powered mockups, pitch decks, demo stores, and creative — all built for you, so you can focus on closing.
      </p>
    </Slide>
  </div>,
];

/* ═══════════════════════════════════════════════
   SECTION: SELL IDEAS
   ═══════════════════════════════════════════════ */

const ideasDesktop = [
  <SectionOpener icon={IconLightbulb} number="02" superTitle="Why Brand Blvd" title={<>Stop selling products.<br />Start selling <span className="highlight-green">ideas.</span></>} monogramSrc={bbMonogram} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        At most distributors, the conversation starts and ends with a <span className="text-primary">product catalog</span>.
        At Brand Blvd, it starts with an idea that makes your client's brand <span className="text-primary font-bold">unforgettable</span>.
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">What Sets You Apart</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <GridCard superTitle="Creative" title="In-house creative team." body="Full design capabilities for the big pitches that win new business." />
        <GridCard superTitle="Execution" title="Production under one roof." body="Magic Merch Maker + full production and execution — you pitch bigger because you can deliver bigger." />
        <GridCard superTitle="Reach" title="Canada + U.S. seamless." body="North American reach with zero friction for your clients." />
      </div>
    </div>
  </div>,

  <WhiteSlide>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-4">Before</p>
        <p className="text-gray-600 text-lg leading-relaxed">
          You're a product rep in a commodity conversation.
        </p>
      </div>
      <div>
        <p className="font-display text-sm uppercase tracking-[0.35em] text-brand-green font-bold mb-4">After</p>
        <p className="text-gray-900 text-lg leading-relaxed font-medium">
          You're a <span className="font-bold">creative partner</span> your clients can't replace.
        </p>
      </div>
    </div>
  </WhiteSlide>,

  <PromptSlide question="When's the last time a client came to you for an idea — not just a reorder?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">02</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">The Shift</div>
      <BigText>Creative partner,<br />not <span className="highlight-green">catalog rep.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        In-house creative, full production, and seamless Canada + U.S. execution. You pitch bigger because you can deliver bigger.
      </p>
    </Slide>
  </div>,
];

/* ═══════════════════════════════════════════════
   SECTION: BUILD BIGGER
   ═══════════════════════════════════════════════ */

const buildDesktop = [
  <SectionOpener icon={IconChart} number="03" superTitle="Why Brand Blvd" title={<>Build your book<br /><span className="highlight-green">bigger.</span></>} monogramSrc={bbMonogram} />,

  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Your Business Tools</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-gray-900">Run it like a</span><span className="highlight-green">business.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
      <NumberedItem num="1" title="Best-in-class CRM" desc="Sales tools to manage your pipeline like the real business it is." />
      <NumberedItem num="2" title="Preferred supplier pricing" desc="Protect your margin on every single quote." />
      <NumberedItem num="3" title="Sales collateral & enablement" desc="Every touchpoint sharper, every conversation stronger." />
      <NumberedItem num="4" title="You run your book like a business" desc="We make your business better." />
    </div>
  </WhiteSlide>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        You don't need more <span className="text-primary">motivation</span>.<br />
        You need better <span className="text-primary font-bold">infrastructure</span>.
      </SerifStatement>
    </Slide>
  </div>,

  <PromptSlide question="What part of your current setup slows you down the most?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">03</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">The Upgrade</div>
      <BigText>Better tools.<br />Bigger <span className="highlight-green">book.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        CRM, preferred pricing, sales enablement, and a system that actually helps you grow — not just survive.
      </p>
    </Slide>
  </div>,
];

/* ═══════════════════════════════════════════════
   SECTION: FULL TEAM
   ═══════════════════════════════════════════════ */

const teamDesktop = [
  <SectionOpener icon={IconTeam} number="04" superTitle="Why Brand Blvd" title={<>A full team<br /><span className="highlight-green">behind you.</span></>} monogramSrc={bbMonogram} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        You sell. <span className="text-primary font-bold">We handle everything else.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">Not a phone tree. A full team.</p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">Your Team</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <GridCard superTitle="Creative" title="Design team." body="In-house creatives for the big pitches that win new business." />
        <GridCard superTitle="Operations" title="Customer service." body="Production, order management, fulfillment — all handled." />
        <GridCard superTitle="Growth" title="Sales development." body="Help sourcing contacts and prospects when you want to grow." />
      </div>
    </div>
  </div>,

  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Plus</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-gray-900">Show up</span><span className="highlight-green">ready.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
      <NumberedItem num="$" title="Self-promo budget" desc="Show up with branded materials that make an impression." />
      <NumberedItem num="📦" title="Sample budget" desc="Put product in your prospects' hands from day one." />
    </div>
  </WhiteSlide>,

  <PromptSlide question="What would you do differently if you had a full team backing every deal?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">04</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">The Difference</div>
      <BigText>You sell.<br />We handle <span className="highlight-green">everything else.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        Design, customer service, sales development, budgets, and infrastructure — all behind you.
      </p>
    </Slide>
  </div>,
];

/* ═══════════════════════════════════════════════
   SECTION: CLOSING
   ═══════════════════════════════════════════════ */

const closingDesktop = [
  <div className="relative w-full h-full flex items-center justify-center bg-white text-gray-900 dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-8 md:h-10 mb-14 mx-auto invert" />
      <div className="space-y-10 text-left max-w-2xl mx-auto">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconRocket size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-light">Walk into every meeting armed.</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-gray-900">Unfair <span className="highlight-green">advantage.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconLightbulb size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-light">Stop selling products.</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-gray-900">Creative <span className="highlight-green">partner.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconChart size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-light">Better tools, better margins.</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-gray-900">Build <span className="highlight-green">bigger.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconTeam size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-light">You sell. We handle the rest.</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-gray-900">Full <span className="highlight-green">team.</span></h3>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-12 pt-8 text-center">
        <p className="font-serif text-xl md:text-2xl italic text-gray-600 mb-2">Let's keep the conversation going.</p>
        <h2 className="font-title text-4xl md:text-6xl uppercase tracking-tight">
          Life is better on the <span className="highlight-green inline-block">Blvd.</span>
        </h2>
      </div>
    </div>
  </div>,
];

/* ═══════════════════════════════════════════════
   MOBILE OVERRIDES
   ═══════════════════════════════════════════════ */

const titleMobile = [
  <div className="relative w-full h-full flex items-center justify-center dot-grid-bold glow-br overflow-hidden">
    <div className="absolute right-0 bottom-0 font-display text-[20rem] font-black text-foreground/[0.03] leading-none select-none pointer-events-none tracking-tight">IC</div>
    <div className="relative z-10 px-8 text-left max-w-5xl">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-10 mb-12" />
      <h1 className="font-title text-5xl uppercase leading-[1.05] tracking-tight">
        Life is better<br />on the <span className="highlight-green">Blvd.</span>
      </h1>
      <p className="font-serif text-xl italic text-muted-foreground mt-8 max-w-2xl">
        Why bring your book to Brand Blvd.
      </p>
    </div>
  </div>,

  // Welcome video from Jill
  <VideoSlide
    from="Jill Pascuzzi"
    role="VP of Sales, USA — Brand Blvd"
    title={<>A personal <span className="highlight-green">welcome.</span></>}
    subtitle="From Jill"
    initials="JP"
  />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        Your book is yours. You built it.<br />
        But the system behind you? <span className="text-primary font-bold">It's probably not keeping up.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-white text-gray-900 dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full px-8 text-center">
      <p className="font-serif text-xl italic text-gray-500 mb-10">Here's what changes when you plug in.</p>
      <div className="space-y-6 text-left">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconRocket size={28} className="text-brand-green" /></div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-gray-900">An <span className="highlight-green">unfair advantage.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconLightbulb size={28} className="text-brand-green" /></div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-gray-900">Start selling <span className="highlight-green">ideas.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconChart size={28} className="text-brand-green" /></div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-gray-900">Build your book <span className="highlight-green">bigger.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconTeam size={28} className="text-brand-green" /></div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-gray-900">A full team <span className="highlight-green">behind you.</span></h3>
        </div>
      </div>
    </div>
  </div>,
];

const advantageMobile = [
  <SectionOpener icon={IconRocket} number="01" superTitle="Why Brand Blvd" title={<>An <span className="highlight-green">unfair advantage.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        Most reps show up with a PDF and a pitch.<br />Here's what <span className="text-primary font-bold">you</span> show up with.
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-8">Your Toolkit</p>
      <div className="grid grid-cols-1 gap-y-8">
        <GridCard superTitle="AI-Powered" title="Custom mockups in seconds." body="AI-generated, branded to your client." />
        <GridCard superTitle="Client-Ready" title="Pitch decks, done." body="Fully designed, done before you finish your coffee." />
        <GridCard superTitle="Live Demos" title="Demo stores on the spot." body="Clickable company stores your prospect can browse." />
        <GridCard superTitle="Creative" title="Ideas → presentations." body="Polished presentations, not napkin sketches." />
      </div>
    </div>
  </div>,

  // Bryan intro to Magic Merch Maker
  <VideoSlideDark
    from="Bryan Caporicci"
    role="Founder & CEO — Brand Blvd"
    title={<>Meet Magic Merch <span className="highlight-green">Maker.</span></>}
    subtitle="Product Demo"
    initials="BC"
  />,

  <div className="w-full h-full bg-white text-gray-900 flex items-center justify-center overflow-hidden">
    <MMMShowcaseMobile />
  </div>,

  <div className="w-full h-full bg-white text-gray-900 flex items-center justify-center overflow-hidden">
    <MMMProductGalleryMobile />
  </div>,

  <div className="w-full h-full bg-white text-gray-900 flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <div className="space-y-8">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-4">Before</p>
          <p className="text-gray-600 text-base leading-relaxed">Half your week building proposals and chasing mockups.</p>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-[0.35em] text-brand-green font-bold mb-4">After</p>
          <p className="text-gray-900 text-base leading-relaxed font-medium">You spend it <span className="font-bold">closing</span>. The tools do the rest.</p>
        </div>
      </div>
    </div>
  </div>,

  <PromptSlide question="How much time do you spend each week on things that aren't actually selling?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">01</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">The Advantage</div>
      <BigText>You sell.<br />We <span className="highlight-green">arm you.</span></BigText>
    </Slide>
  </div>,
];

const ideasMobile = [
  <SectionOpener icon={IconLightbulb} number="02" superTitle="Why Brand Blvd" title={<>Start selling <span className="highlight-green">ideas.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        At Brand Blvd, the conversation starts with an idea that makes your client's brand <span className="text-primary font-bold">unforgettable</span>.
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">What Sets You Apart</p>
      <div className="grid grid-cols-1 gap-8">
        <GridCard superTitle="Creative" title="In-house creative team." body="Full design for the big pitches that win new business." />
        <GridCard superTitle="Execution" title="Production under one roof." body="Pitch bigger because you can deliver bigger." />
        <GridCard superTitle="Reach" title="Canada + U.S. seamless." body="North American reach with zero friction." />
      </div>
    </div>
  </div>,

  <div className="w-full h-full bg-white text-gray-900 flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <div className="space-y-8">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-4">Before</p>
          <p className="text-gray-600 text-base">A product rep in a commodity conversation.</p>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-[0.35em] text-brand-green font-bold mb-4">After</p>
          <p className="text-gray-900 text-base font-medium">A <span className="font-bold">creative partner</span> your clients can't replace.</p>
        </div>
      </div>
    </div>
  </div>,

  <PromptSlide question="When's the last time a client came to you for an idea — not just a reorder?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">02</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">The Shift</div>
      <BigText>Creative partner,<br />not <span className="highlight-green">catalog rep.</span></BigText>
    </Slide>
  </div>,
];

const buildMobile = [
  <SectionOpener icon={IconChart} number="03" superTitle="Why Brand Blvd" title={<>Build your book<br /><span className="highlight-green">bigger.</span></>} />,

  <div className="w-full h-full bg-white text-gray-900 flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Your Business Tools</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">
        <span className="text-gray-900">Run it like a</span><span className="highlight-green">business.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <NumberedItem num="1" title="Best-in-class CRM" desc="Manage your pipeline like the real business it is." />
        <NumberedItem num="2" title="Preferred supplier pricing" desc="Protect your margin on every quote." />
        <NumberedItem num="3" title="Sales collateral & enablement" desc="Every touchpoint sharper." />
        <NumberedItem num="4" title="You run your book like a business" desc="We make your business better." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        You don't need more <span className="text-primary">motivation</span>.<br />
        You need better <span className="text-primary font-bold">infrastructure</span>.
      </SerifStatement>
    </Slide>
  </div>,

  <PromptSlide question="What part of your current setup slows you down the most?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">03</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">The Upgrade</div>
      <BigText>Better tools.<br />Bigger <span className="highlight-green">book.</span></BigText>
    </Slide>
  </div>,
];

const teamMobile = [
  <SectionOpener icon={IconTeam} number="04" superTitle="Why Brand Blvd" title={<>A full team<br /><span className="highlight-green">behind you.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        You sell. <span className="text-primary font-bold">We handle everything else.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">Your Team</p>
      <div className="grid grid-cols-1 gap-8">
        <GridCard superTitle="Creative" title="Design team." body="In-house creatives for the big pitches." />
        <GridCard superTitle="Operations" title="Customer service." body="Production, order management, fulfillment — handled." />
        <GridCard superTitle="Growth" title="Sales development." body="Help sourcing contacts and prospects." />
      </div>
    </div>
  </div>,

  <div className="w-full h-full bg-white text-gray-900 flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Plus</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">Show up<span className="highlight-green">ready.</span></h2>
      <div className="grid grid-cols-1 gap-y-6">
        <NumberedItem num="$" title="Self-promo budget" desc="Branded materials that make an impression." />
        <NumberedItem num="📦" title="Sample budget" desc="Product in your prospects' hands from day one." />
      </div>
    </div>
  </div>,

  <PromptSlide question="What would you do differently if you had a full team backing every deal?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">04</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">The Difference</div>
      <BigText>You sell.<br />We handle <span className="highlight-green">everything else.</span></BigText>
    </Slide>
  </div>,
];

const closingMobile = [
  <div className="relative w-full h-full flex items-center justify-center bg-white text-gray-900 dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full px-8 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-7 mb-10 mx-auto invert" />
      <div className="space-y-6 text-left">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconRocket size={28} className="text-brand-green" /></div>
          <div>
            <p className="text-gray-500 text-xs font-light">Walk into every meeting armed.</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-gray-900">Unfair <span className="highlight-green">advantage.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconLightbulb size={28} className="text-brand-green" /></div>
          <div>
            <p className="text-gray-500 text-xs font-light">Stop selling products.</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-gray-900">Creative <span className="highlight-green">partner.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconChart size={28} className="text-brand-green" /></div>
          <div>
            <p className="text-gray-500 text-xs font-light">Better tools, better margins.</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-gray-900">Build <span className="highlight-green">bigger.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconTeam size={28} className="text-brand-green" /></div>
          <div>
            <p className="text-gray-500 text-xs font-light">You sell. We handle the rest.</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-gray-900">Full <span className="highlight-green">team.</span></h3>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-6 text-center">
        <p className="font-serif text-lg italic text-gray-600 mb-2">Let's keep the conversation going.</p>
        <h2 className="font-title text-3xl uppercase tracking-tight">
          Life is better on the <span className="highlight-green inline-block">Blvd.</span>
        </h2>
      </div>
    </div>
  </div>,
];

/* ═══════════════════════════════════════════════
   CONFIG
   ═══════════════════════════════════════════════ */

const icRecruitment: PresentationConfig = {
  slug: "ic-recruitment",
  title: "Life is Better on the Blvd — Brand Blvd",
  description: "Why bring your book to Brand Blvd. AI-powered tools, in-house creative, and a full team behind you.",
  themeId: "brand-blvd",

  sections: [
    {
      id: "title",
      label: "Home",
      icon: IconHome,
      desktopSlides: titleDesktop,
      mobileSlides: titleMobile,
    },
    {
      id: "advantage",
      label: "Advantage",
      icon: IconRocket,
      desktopSlides: advantageDesktop,
      mobileSlides: advantageMobile,
    },
    {
      id: "ideas",
      label: "Ideas",
      icon: IconLightbulb,
      desktopSlides: ideasDesktop,
      mobileSlides: ideasMobile,
    },
    {
      id: "build",
      label: "Build",
      icon: IconChart,
      desktopSlides: buildDesktop,
      mobileSlides: buildMobile,
    },
    {
      id: "team",
      label: "Team",
      icon: IconTeam,
      desktopSlides: teamDesktop,
      mobileSlides: teamMobile,
    },
    {
      id: "closing",
      label: "Summary",
      icon: IconClosing,
      desktopSlides: closingDesktop,
      mobileSlides: closingMobile,
    },
  ],

  articleComponent: ArticleSection,
  articleIcon: IconArticle,
};

export default icRecruitment;
