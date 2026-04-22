/**
 * "IC Recruitment — Life is Better on the Blvd." Presentation
 *
 * Recruitment leave-behind for independent consultants considering
 * bringing their book of business to Brand Blvd.
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
import PresenterNotesSection from "./PresenterNotesSection";
import { MMMProductGalleryDesktop, MMMProductGalleryMobile, MMMProductGallery2Desktop, MMMProductGallery2Mobile } from "./MagicMerchUI";
import { TeamCreativeGalleryDesktop, TeamCreativeGalleryMobile } from "./TeamCreativeUI";
import { YouTubeSlide, YouTubeSlideDark } from "./VideoPlaceholder";

import bbLogoHorizontal from "@/assets/bb-logo-horizontal-white.svg";
import bbMonogram from "@/assets/bb-monogram-white.svg";

import type { PresentationConfig } from "@/presentations/presentation.types";

/* ═══════════════════════════════════════════════
   SECTION: TITLE
   ═══════════════════════════════════════════════ */

const titleDesktop = [
  // 1. Cover
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
        We'd love to have you join us at Brand Blvd.
      </p>
    </div>
  </div>,

  // 2. Welcome video from Jill
  <YouTubeSlide
    videoId="uVcO62NywHY"
    from="Jill Pascuzzi"
    role="VP of Sales, USA — Brand Blvd"
    title={<>A personal <span className="highlight-green">welcome.</span></>}
    subtitle="From Jill"
  />,

  // 3. The hook
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <SerifStatement>
        You've already built a great book of business. You've got the clients and the relationships. You know promo.<br /><br />
        But the system behind you? <span className="text-primary font-bold">It's probably not keeping up.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-light-muted mt-10 font-bold">
        You need a better system. You need a better team.
      </p>
    </Slide>
  </div>,

  // 4. Overview of 4 themes
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <p className="font-serif text-xl md:text-2xl italic text-light-muted mb-14">Here's what changes when you plug in.</p>
      <div className="space-y-10 text-left">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconRocket size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">Walk into every meeting with an <span className="highlight-green">unfair advantage.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconLightbulb size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">Stop selling products. Start selling <span className="highlight-green">ideas.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconChart size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">Build your book <span className="highlight-green">bigger.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconTeam size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">A full team <span className="highlight-green">behind you.</span></h3>
        </div>
      </div>
    </div>
  </div>,
];

/* ═══════════════════════════════════════════════
   SECTION: UNFAIR ADVANTAGE
   ═══════════════════════════════════════════════ */

const advantageDesktop = [
  // 1. Section opener
  <SectionOpener icon={IconRocket} number="01" superTitle="Why Brand Blvd" title={<>Walk into every meeting<br />with an <span className="highlight-green">unfair advantage.</span></>} monogramSrc={bbMonogram} />,

  // 2. Serif statement
  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        Most reps show up with a PDF and a pitch.<br />
        <span className="text-primary font-bold">Not our people.</span>
      </SerifStatement>
    </Slide>
  </div>,

  // 3. 4-card grid of the toolkit
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-8">Your Toolkit</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        <GridCard superTitle="AI-Powered" title="Custom mockups in seconds." body="AI-generated, branded to your client, built before the meeting starts." />
        <GridCard superTitle="Client-Ready" title="Pitch decks, done." body="Fully designed, client-ready presentations done before your morning coffee." />
        <GridCard superTitle="Live Demos" title="Demo stores on the spot." body="Live, clickable company stores your prospect can browse right in the meeting." />
        <GridCard superTitle="Creative" title="Ideas turned into polished presentations." body="Creative concepts turned into client-ready decks, not napkin sketches." />
      </div>
    </div>
  </div>,

  // 4. Bryan video - "See the magic in action"
  <YouTubeSlideDark
    videoId="bWD9rLAIinI"
    from="Bryan Caporicci"
    role="VP of Growth and Innovation — Brand Blvd"
    title={<>See the magic <span className="highlight-green">in action.</span></>}
    subtitle="Product Demo"
  />,

  // 5. Magic Merch Maker product gallery
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light overflow-hidden">
    <MMMProductGalleryDesktop />
  </div>,

  // 6. Magic Merch Maker product gallery (second set)
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light overflow-hidden">
    <MMMProductGallery2Desktop />
  </div>,

  // 7. Before / After
  <WhiteSlide>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-4">Before</p>
        <p className="text-gray-600 text-lg leading-relaxed">
          You spend half your week building mockups and chasing approvals.
        </p>
      </div>
      <div>
        <p className="font-display text-sm uppercase tracking-[0.35em] text-brand-green font-bold mb-4">After</p>
        <p className="text-gray-900 text-lg leading-relaxed font-medium">
          You spend it <span className="font-bold">closing</span>. Magic Merch Maker does the rest.
        </p>
      </div>
    </div>
  </WhiteSlide>,

  // 8. Prompt slide
  <PromptSlide label="Ask yourself" question="How much time do you spend each week on things that aren't actually selling?" />,

  // 9. Dark BigText payoff
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
  // 1. Section opener
  <SectionOpener icon={IconLightbulb} number="02" superTitle="Why Brand Blvd" title={<>Stop selling products.<br />Start selling <span className="highlight-green">ideas.</span></>} monogramSrc={bbMonogram} />,

  // 2. Serif statement
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <SerifStatement>
        At most distributors, the conversation starts and ends with a <span className="text-primary">product catalog</span>.<br /><br />
        At Brand Blvd, it starts with an idea that makes your client's brand <span className="text-primary font-bold">unforgettable</span>.
      </SerifStatement>
    </Slide>
  </div>,

  // 3. 3-card grid
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-10">What Sets You Apart</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <GridCard superTitle="Creative" title="In-house creative team." body="Full design capabilities for the big pitches that win new business." />
        <GridCard superTitle="Execution" title="Production under one roof." body="Magic Merch Maker handles research and ideation; our creative team brings it to life." />
        <GridCard superTitle="Reach" title="Canada + U.S. seamless." body="North American logistics and execution with zero friction for your clients." />
      </div>
    </div>
  </div>,

  // 4. Before / After
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

  // 5. Prompt slide
  <PromptSlide label="Ask yourself" question="When's the last time a client came to you for an idea - not just a reorder?" />,

  // 6. Dark BigText payoff
  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">02</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">The Shift</div>
      <BigText>Creative partner,<br />not <span className="highlight-green">catalog rep.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        In-house creative, full production, and seamless Canada + U.S. execution.<br /><br />
        You pitch bigger because you can deliver bigger.
      </p>
    </Slide>
  </div>,
];

/* ═══════════════════════════════════════════════
   SECTION: BUILD BIGGER
   ═══════════════════════════════════════════════ */

const buildDesktop = [
  // 1. Section opener
  <SectionOpener icon={IconChart} number="03" superTitle="Why Brand Blvd" title={<>Build your book<br /><span className="highlight-green">bigger.</span></>} monogramSrc={bbMonogram} />,

  // 2. White slide with 3 numbered items
  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Your Business Tools</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-gray-900">Run it like a </span><span className="highlight-green">business.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      <NumberedItem num="1" title="Best-in-class CRM" desc="Sales tools to manage your pipeline like the real business it is." />
      <NumberedItem num="2" title="Preferred supplier pricing" desc="Protect your margin on every single quote." />
      <NumberedItem num="3" title="Sales collateral & enablement" desc="Every touchpoint sharper, every conversation stronger." />
      <NumberedItem num="4" title="Finance & POs handled" desc="We manage the back-end, so you can stay in front of clients." />
    </div>
  </WhiteSlide>,

  // 3. Serif statement
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        You don't need more <span className="text-primary">motivation</span>.<br /><br />
        You need better <span className="text-primary font-bold">infrastructure</span>.
      </SerifStatement>
    </Slide>
  </div>,

  // 4. Prompt slide
  <PromptSlide label="Ask yourself" question="What part of your current setup slows you down the most?" />,

  // 5. Dark BigText payoff
  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">03</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">The Upgrade</div>
      <BigText>Better tools.<br />Bigger <span className="highlight-green">book.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        CRM, preferred pricing, and sales enablement — a system that actually helps you grow, not just survive.
      </p>
    </Slide>
  </div>,
];

/* ═══════════════════════════════════════════════
   SECTION: FULL TEAM
   ═══════════════════════════════════════════════ */

const teamDesktop = [
  // 1. Section opener
  <SectionOpener icon={IconTeam} number="04" superTitle="Why Brand Blvd" title={<>A full team<br /><span className="highlight-green">behind you.</span></>} monogramSrc={bbMonogram} />,

  // 2. Serif statement
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <SerifStatement>
        You sell. <span className="text-primary font-bold">We handle everything else.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-light-muted mt-10 font-bold">Not a phone tree. A real team.</p>
    </Slide>
  </div>,

  // 3. 3-card grid
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-10">Your Team</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <GridCard superTitle="Creative" title="Design team." body="In-house creatives for the big pitches that win new business." />
        <GridCard superTitle="Operations" title="Customer service." body="Production, order management, invoicing and payments, and fulfillment — all handled." />
        <GridCard superTitle="Growth" title="Sales development." body="Help sourcing contacts and prospects when you want to grow." />
      </div>
    </div>
  </div>,

  // 4. Team Creative gallery — real creative work from the in-house design team
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light overflow-hidden">
    <TeamCreativeGalleryDesktop />
  </div>,

  // 5. White slide with 2 numbered items
  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Plus</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-gray-900">Show up </span><span className="highlight-green">ready.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
      <NumberedItem num="$" title="Self-promo budget" desc="Show up with branded materials that make an impression." />
      <NumberedItem num="◆" title="Sample budget" desc="Put product in your prospects' hands from day one." />
    </div>
  </WhiteSlide>,

  // 6. Prompt slide
  <PromptSlide label="Ask yourself" question="What would you do differently if you had a full team backing every deal?" />,

  // 7. Dark BigText payoff
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
  // 1. Recap summary on light bg
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-8 md:h-10 mb-14 mx-auto invert" />
      <div className="space-y-10 text-left max-w-2xl mx-auto">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconRocket size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-light-muted text-sm font-light">Walk into every meeting armed.</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-light">Unfair <span className="highlight-green">advantage.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconLightbulb size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-light-muted text-sm font-light">Stop selling products.</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-light">Creative <span className="highlight-green">partner.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconChart size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-light-muted text-sm font-light">Better tools, better margins.</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-light">Build <span className="highlight-green">bigger.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconTeam size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-light-muted text-sm font-light">You sell. We handle the rest.</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-light">Full <span className="highlight-green">team.</span></h3>
          </div>
        </div>
      </div>
      <div className="border-light mt-12 pt-8 text-center border-t">
        <p className="font-serif text-xl md:text-2xl italic text-light-secondary mb-2">Let's not overthink it.</p>
        <h2 className="font-title text-4xl md:text-6xl uppercase tracking-tight text-light">
          Life is better on the <span className="highlight-green inline-block">Blvd.</span>
        </h2>
      </div>
    </div>
  </div>,

  // 2. Jill's personal CTA - dark bg
  <div className="relative w-full h-full flex items-center justify-center dot-grid-bold glow-br overflow-hidden">
    <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-20 lg:px-32">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-primary font-bold mb-6">From Jill</p>
      <h2 className="font-title text-4xl md:text-6xl lg:text-7xl uppercase leading-[1.05] tracking-tight mb-8">
        Like what you see?<br />Let's not <span className="highlight-green">overthink it.</span>
      </h2>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mb-10 max-w-3xl leading-relaxed">
        If you're even a little curious, we should talk. I'd genuinely love to meet you - pick your move.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left">
        <div className="flex items-start gap-4">
          <span className="font-display text-primary font-bold text-sm uppercase tracking-wider w-24 shrink-0 mt-1">LinkedIn</span>
          <a href="https://www.linkedin.com/in/jillpascuzzi/" className="text-foreground font-medium hover:text-primary transition-colors">linkedin.com/in/jillpascuzzi</a>
        </div>
        <div className="flex items-start gap-4">
          <span className="font-display text-primary font-bold text-sm uppercase tracking-wider w-24 shrink-0 mt-1">Call</span>
          <span className="text-foreground font-medium">905-988-6910</span>
        </div>
        <div className="flex items-start gap-4">
          <span className="font-display text-primary font-bold text-sm uppercase tracking-wider w-24 shrink-0 mt-1">Text</span>
          <span className="text-foreground font-medium">905-988-6910</span>
        </div>
        <div className="flex items-start gap-4">
          <span className="font-display text-primary font-bold text-sm uppercase tracking-wider w-24 shrink-0 mt-1">Email</span>
          <a href="mailto:jpascuzzi@brandblvd.com" className="text-foreground font-medium hover:text-primary transition-colors">jpascuzzi@brandblvd.com</a>
        </div>
        <div className="flex items-start gap-4 md:col-span-2">
          <span className="font-display text-primary font-bold text-sm uppercase tracking-wider w-24 shrink-0 mt-1">Book</span>
          <a href="https://meetings.hubspot.com/jill-pascuzzi/lets-talk" className="text-foreground font-medium hover:text-primary transition-colors">meetings.hubspot.com/jill-pascuzzi/lets-talk</a>
        </div>
      </div>
      <p className="font-serif text-base md:text-lg italic text-muted-foreground mt-10 max-w-3xl leading-relaxed">
        If you've read this far, I'm guessing you're ready for something different.
      </p>
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
        We'd love to have you join us at Brand Blvd.
      </p>
    </div>
  </div>,

  <YouTubeSlide
    videoId="uVcO62NywHY"
    from="Jill Pascuzzi"
    role="VP of Sales, USA — Brand Blvd"
    title={<>A personal <span className="highlight-green">welcome.</span></>}
    subtitle="From Jill"
  />,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <SerifStatement>
        You built the book.<br /><br />
        But the system behind you? <span className="text-primary font-bold">It's probably not keeping up.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full px-8 text-center">
      <p className="font-serif text-xl italic text-light-muted mb-10">Here's what changes when you plug in.</p>
      <div className="space-y-6 text-left">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconRocket size={28} className="text-brand-green" /></div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-light">An <span className="highlight-green">unfair advantage.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconLightbulb size={28} className="text-brand-green" /></div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-light">Start selling <span className="highlight-green">ideas.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconChart size={28} className="text-brand-green" /></div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-light">Build your book <span className="highlight-green">bigger.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconTeam size={28} className="text-brand-green" /></div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-light">A full team <span className="highlight-green">behind you.</span></h3>
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
        Most reps show up with a PDF and a pitch. <span className="text-primary font-bold">Not our people.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light">
    <div className="relative z-10 w-full max-w-6xl px-8">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-8">Your Toolkit</p>
      <div className="grid grid-cols-1 gap-y-8">
        <GridCard superTitle="AI-Powered" title="Custom mockups in seconds." body="AI-generated, branded to your client." />
        <GridCard superTitle="Client-Ready" title="Pitch decks, done." body="Fully designed, done before your morning coffee." />
        <GridCard superTitle="Live Demos" title="Demo stores on the spot." body="Clickable company stores your prospect can browse." />
        <GridCard superTitle="Creative" title="Polished presentations." body="Ideas turned into client-ready decks, not napkin sketches." />
      </div>
    </div>
  </div>,

  <YouTubeSlideDark
    videoId="bWD9rLAIinI"
    from="Bryan Caporicci"
    role="VP of Growth and Innovation — Brand Blvd"
    title={<>See the magic <span className="highlight-green">in action.</span></>}
    subtitle="Product Demo"
  />,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center overflow-hidden">
    <MMMProductGalleryMobile />
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center overflow-hidden">
    <MMMProductGallery2Mobile />
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <div className="space-y-8">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-4">Before</p>
          <p className="text-gray-600 text-base leading-relaxed">Half your week building mockups and chasing approvals.</p>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-[0.35em] text-brand-green font-bold mb-4">After</p>
          <p className="text-gray-900 text-base leading-relaxed font-medium">You spend it <span className="font-bold">closing</span>. Magic Merch Maker does the rest.</p>
        </div>
      </div>
    </div>
  </div>,

  <PromptSlide label="Ask yourself" question="How much time do you spend each week on things that aren't actually selling?" />,

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

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <SerifStatement>
        At Brand Blvd, the conversation starts with an idea that makes your client's brand <span className="text-primary font-bold">unforgettable</span>.
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light">
    <div className="relative z-10 w-full max-w-6xl px-8">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-10">What Sets You Apart</p>
      <div className="grid grid-cols-1 gap-8">
        <GridCard superTitle="Creative" title="In-house creative team." body="Full design for the big pitches that win new business." />
        <GridCard superTitle="Execution" title="Production under one roof." body="Pitch bigger because you can deliver bigger." />
        <GridCard superTitle="Reach" title="Canada + U.S. seamless." body="North American reach with zero friction." />
      </div>
    </div>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
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

  <PromptSlide label="Ask yourself" question="When's the last time a client came to you for an idea - not just a reorder?" />,

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

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Your Business Tools</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">
        <span className="text-gray-900">Run it like a </span><span className="highlight-green">business.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <NumberedItem num="1" title="Best-in-class CRM" desc="Manage your pipeline like the real business it is." />
        <NumberedItem num="2" title="Preferred supplier pricing" desc="Protect your margin on every quote." />
        <NumberedItem num="3" title="Sales collateral & enablement" desc="Every touchpoint sharper." />
        <NumberedItem num="4" title="Finance & POs handled" desc="We manage the back-end, so you can stay in front of clients." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        You don't need more <span className="text-primary">motivation</span>.<br /><br />
        You need better <span className="text-primary font-bold">infrastructure</span>.
      </SerifStatement>
    </Slide>
  </div>,

  <PromptSlide label="Ask yourself" question="What part of your current setup slows you down the most?" />,

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

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <SerifStatement>
        You sell. <span className="text-primary font-bold">We handle everything else.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-light-muted mt-8 font-bold">Not a phone tree. A real team.</p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light">
    <div className="relative z-10 w-full max-w-6xl px-8">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-10">Your Team</p>
      <div className="grid grid-cols-1 gap-8">
        <GridCard superTitle="Creative" title="Design team." body="In-house creatives for the big pitches." />
        <GridCard superTitle="Operations" title="Customer service." body="Production, order management, invoicing and payments, and fulfillment — handled." />
        <GridCard superTitle="Growth" title="Sales development." body="Help sourcing contacts and prospects." />
      </div>
    </div>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center overflow-hidden">
    <TeamCreativeGalleryMobile />
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Plus</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">
        <span className="text-gray-900">Show up </span><span className="highlight-green">ready.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <NumberedItem num="$" title="Self-promo budget" desc="Branded materials that make an impression." />
        <NumberedItem num="◆" title="Sample budget" desc="Product in your prospects' hands from day one." />
      </div>
    </div>
  </div>,

  <PromptSlide label="Ask yourself" question="What would you do differently if you had a full team backing every deal?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">04</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">The Difference</div>
      <BigText>You sell.<br />We handle <span className="highlight-green">everything else.</span></BigText>
    </Slide>
  </div>,
];

const closingMobile = [
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full px-8 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-7 mb-10 mx-auto invert" />
      <div className="space-y-6 text-left">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconRocket size={28} className="text-brand-green" /></div>
          <div>
            <p className="text-light-muted text-xs font-light">Walk into every meeting armed.</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-light">Unfair <span className="highlight-green">advantage.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconLightbulb size={28} className="text-brand-green" /></div>
          <div>
            <p className="text-light-muted text-xs font-light">Stop selling products.</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-light">Creative <span className="highlight-green">partner.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconChart size={28} className="text-brand-green" /></div>
          <div>
            <p className="text-light-muted text-xs font-light">Better tools, better margins.</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-light">Build <span className="highlight-green">bigger.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center"><IconTeam size={28} className="text-brand-green" /></div>
          <div>
            <p className="text-light-muted text-xs font-light">You sell. We handle the rest.</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-light">Full <span className="highlight-green">team.</span></h3>
          </div>
        </div>
      </div>
      <div className="border-light mt-8 pt-6 text-center border-t">
        <p className="font-serif text-lg italic text-light-secondary mb-2">Let's not overthink it.</p>
        <h2 className="font-title text-3xl uppercase tracking-tight text-light">
          Life is better on the <span className="highlight-green inline-block">Blvd.</span>
        </h2>
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid-bold glow-br overflow-hidden">
    <div className="relative z-10 w-full px-8">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-primary font-bold mb-4">From Jill</p>
      <h2 className="font-title text-3xl uppercase leading-[1.05] tracking-tight mb-6">
        Like what you see?<br />Let's not <span className="highlight-green">overthink it.</span>
      </h2>
      <p className="font-serif text-base italic text-muted-foreground mb-6 leading-relaxed">
        Pick your move - I'd genuinely love to meet you.
      </p>
      <div className="space-y-3 text-left">
        <div className="flex items-start gap-3">
          <span className="font-display text-primary font-bold text-xs uppercase tracking-wider w-16 shrink-0 mt-0.5">LinkedIn</span>
          <a href="https://www.linkedin.com/in/jillpascuzzi/" className="text-foreground text-sm font-medium">jillpascuzzi</a>
        </div>
        <div className="flex items-start gap-3">
          <span className="font-display text-primary font-bold text-xs uppercase tracking-wider w-16 shrink-0 mt-0.5">Call/Text</span>
          <span className="text-foreground text-sm font-medium">905-988-6910</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="font-display text-primary font-bold text-xs uppercase tracking-wider w-16 shrink-0 mt-0.5">Email</span>
          <a href="mailto:jpascuzzi@brandblvd.com" className="text-foreground text-sm font-medium break-all">jpascuzzi@brandblvd.com</a>
        </div>
        <div className="flex items-start gap-3">
          <span className="font-display text-primary font-bold text-xs uppercase tracking-wider w-16 shrink-0 mt-0.5">Book</span>
          <a href="https://meetings.hubspot.com/jill-pascuzzi/lets-talk" className="text-foreground text-sm font-medium">meetings.hubspot.com/jill-pascuzzi</a>
        </div>
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
  presenterNotesComponent: PresenterNotesSection,

  mobileActions: [
    {
      label: "Read article",
      variant: "secondary",
      icon: IconArticle,
      to: { section: "article" },
      hideWhenActive: true,
    },
    {
      label: "Contact",
      variant: "primary",
      icon: IconClosing,
      to: { section: "closing", slide: "last" },
      hideWhenActive: true,
    },
  ],

  desktopActions: [
    {
      label: "Contact",
      variant: "primary",
      icon: IconClosing,
      to: { section: "closing", slide: "last" },
      hideWhenActive: true,
    },
  ],
};

export default icRecruitment;
