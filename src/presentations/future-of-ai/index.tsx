/**
 * "The Future of AI" Presentation
 *
 * Original presentation migrated into the multi-presentation system.
 */

import { ChevronsRight, Quote } from "lucide-react";
import {
  Slide,
  BigText,
  SerifStatement,
  SectionOpener,
  GridCard,
  NumberedItem,
  WhiteSlide,
  BgImage,
  PromptSlide,
  QuoteCard,
} from "@/components/slides";
import {
  IconHome,
  IconFastForward,
  IconStacks,
  IconIdentity,
  IconClosing,
  IconArticle,
} from "@/components/SectionIcons";
import GrowthChart from "@/components/GrowthChart";
import ArticleSection from "./ArticleSection";

import abstractSpeed from "@/assets/abstract-speed.jpg";
import abstractStack from "@/assets/abstract-stack.jpg";
import abstractIdentity from "@/assets/abstract-identity.jpg";
import bbLogoHorizontal from "@/assets/bb-logo-horizontal-white.svg";
import bbMonogram from "@/assets/bb-monogram-white.svg";

import type { PresentationConfig } from "@/presentations/presentation.types";

/* ─── Desktop slide content ─── */

const titleDesktop = [
  // Cover
  <div className="relative w-full h-full flex items-center justify-center dot-grid-bold glow-br overflow-hidden">
    <div className="absolute right-0 bottom-0 font-display text-[30rem] font-black text-foreground/[0.03] leading-none select-none pointer-events-none">
      AI
    </div>
    <div className="relative z-10 px-8 md:px-20 lg:px-32 text-left max-w-5xl">
      <div className="flex items-center gap-4 mb-12">
        <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-10 md:h-14" />
      </div>
      <h1 className="font-title text-6xl md:text-8xl lg:text-9xl uppercase leading-[1.05] tracking-tight">
        The Future<br />of <span className="highlight-green">AI.</span>
      </h1>
      <p className="font-serif text-xl md:text-2xl italic text-muted-foreground mt-8 max-w-2xl">
        AI is reshaping expectations, value, and identity - and what it means for us at Brand Blvd.
      </p>
    </div>
  </div>,

  // Discussion
  <PromptSlide question="What is 1 way AI has changed how you act or make decisions?" />,

  // Overview
  <div className="relative w-full h-full flex items-center justify-center bg-white text-gray-900 dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <p className="font-serif text-xl md:text-2xl italic text-gray-500 mb-14">The 3 biggest ways I believe AI will impact our business and our industry.</p>
      <div className="space-y-10 text-left">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconFastForward size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-gray-900">AI is compressing time across <span className="highlight-green">everything.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconStacks size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-gray-900">AI is taking over the <span className="highlight-green">"doing."</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconIdentity size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-gray-900">AI will restructure the employer-employee <span className="highlight-green">relationship.</span></h3>
        </div>
      </div>
    </div>
  </div>,
];

const instantDesktop = [
  <SectionOpener icon={IconFastForward} number="01" superTitle="The Future of AI" title={<>AI is compressing time<br />across <span className="highlight-green">everything.</span></>} monogramSrc={bbMonogram} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <BgImage src={abstractSpeed} opacity="opacity-[0.04]" />
    <Slide className="relative z-10">
      <SerifStatement>
        AI tools have moved from novelty to <span className="text-primary">household names</span>.
        They're training people to expect immediate results.
        Not faster. <span className="text-primary font-bold">Immediate.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <Slide><GrowthChart /></Slide>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-8">Investment Signals</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        <GridCard superTitle="OpenAI" title="$100B Round · $850B Valuation." body="Largest single funding round in technology history." />
        <GridCard superTitle="Nvidia" title="$3T+ Market Cap." body="Stock grew 200%+ in a single year on AI chip demand. One of the most valuable companies in the world." />
        <GridCard superTitle="Lovable" title="$330M Raised · 1 Year Old." body="One of the largest early-stage rounds for an AI-native dev platform." />
        <GridCard superTitle="Anthropic" title="$30B at $380B Valuation." body="Revenue growing 10x annually, less than 3 years old." />
      </div>
    </div>
  </div>,

  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">What's Changing</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-gray-900">Expectation</span><span className="highlight-green">Shifts</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
      <NumberedItem num="1" title="Patience is collapsing" desc="ChatGPT can help you compare car models immediately." />
      <NumberedItem num="2" title={'"Good enough" is immediate'} desc="Fast is better than perfect - i.e. NotebookLM." />
      <NumberedItem num="3" title="Exploration cost is nearing 0" desc='"Generate 3 themes for a campaign."' />
      <NumberedItem num="4" title="Self-sufficiency is increasing" desc="AI can help people do everything now." />
    </div>
  </WhiteSlide>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        AI is not just improving productivity. <span className="text-primary font-bold">It's rewiring expectation.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">The speed of AI is setting the speed of everything.</p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-serif text-lg md:text-xl lg:text-2xl italic text-muted-foreground mb-8">If we operate with...</p>
        <div className="border-l-4 border-primary/40 pl-6 mb-10 space-y-4">
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed"><span className="text-foreground font-medium">48-hour</span> quote turnarounds</p>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed"><span className="text-foreground font-medium">3-day</span> proof cycles</p>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed">Reorders buried in <span className="text-foreground font-medium">email chains</span></p>
        </div>
        <p className="font-serif text-lg md:text-xl lg:text-2xl italic text-foreground mb-8">
          ...we'll feel analog in a digital world.
        </p>
        <div className="border-t border-muted-foreground/20 pt-6">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary font-bold mb-3">Reality Check</p>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed">
            Buyers will expect real-time pricing, proofs, and ordering - <span className="text-primary font-bold">delays will feel broken.</span>
          </p>
        </div>
      </div>
    </Slide>
  </div>,

  <PromptSlide question="If you were our client, what part of our process would frustrate you?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">01</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #1</div>
      <BigText>Instant is the<br />new <span className="highlight-green">standard.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        Automate reorders, quoting, proofs, and standard workflows. Remove unnecessary delay. Operational excellence buys us the right to be strategic where it matters.
      </p>
    </Slide>
  </div>,
];

const humanValueDesktop = [
  <SectionOpener icon={IconStacks} number="02" superTitle="The Future of AI" title={<>AI is taking over<br />the <span className="highlight-green">"doing."</span></>} monogramSrc={bbMonogram} />,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <BgImage src={abstractStack} opacity="opacity-[0.05]" />
    <Slide className="relative z-10">
      <SerifStatement>
        AI can do rule-based, repetitive, information-heavy tasks <span className="text-primary">faster, cheaper, and at scale</span>.
        Our role shifts to knowing <span className="text-primary font-bold">"what" to do</span>, not in "doing" it.
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">The human role shifts up the stack.</p>
    </Slide>
  </div>,

  <WhiteSlide className="cross-grid-light">
    <div className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-10">Industry Leaders</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { quote: "The future of work is not about AI replacing people. It's about people who use AI replacing people who don't.", author: "Satya Nadella", role: "CEO, Microsoft" },
          { quote: "The real value of AI is helping salespeople spend more time with customers and less time doing administrative work.", author: "Marc Benioff", role: "CEO, Salesforce" },
          { quote: "We'll be there in 3-6 months, where AI is writing 90% of the code - and in 12 months, AI writes all of it.", author: "Dario Amodei", role: "CEO, Anthropic" },
        ].map((q) => (
          <QuoteCard key={q.author} {...q} />
        ))}
      </div>
    </div>
  </WhiteSlide>,

  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Industry Reality</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      Order-Taking<span className="highlight-green">Dies.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
      <div>
        <h3 className="font-display text-lg font-extrabold uppercase mb-4">The shift</h3>
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          Software will get better. AI-empowered systems will draft proposals, generate pricing comparisons, and source products instantly.
        </p>
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          More people will use more tools to do the work we do now. If we continue to be just order-takers, we'll be beaten out by alternatives that make it easier and quicker.
        </p>
      </div>
      <div>
        <h3 className="font-display text-lg font-extrabold uppercase mb-4">The precedent</h3>
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          Industries like travel and retail eliminated transactional middlemen when search became automated.
        </p>
        <p className="text-gray-800 text-base leading-relaxed font-medium">
          This will happen to us, too.
        </p>
      </div>
    </div>
    <p className="mt-10 border-t border-gray-200 pt-6">
      <span className="text-brand-green font-display font-bold uppercase text-sm">Conclusion:</span>{" "}
      <span className="font-bold text-base">Evolve from "order takers" to collaborators and advisors.</span>
    </p>
  </WhiteSlide>,

  <PromptSlide question="If AI handled 50% of admin tomorrow, would our reps know what to do with the extra time?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">02</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #2</div>
      <BigText>Death of<br />transactional <span className="highlight-green">sales.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        We win on framing, interpretation, judgement, context, and strategy - not on sending catalogues.
      </p>
    </Slide>
  </div>,
];

const identityDesktop = [
  <SectionOpener icon={IconIdentity} number="03" superTitle="The Future of AI" title={<>AI will restructure<br />the employer-employee <span className="highlight-green">relationship.</span></>} monogramSrc={bbMonogram} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <BgImage src={abstractIdentity} opacity="opacity-[0.05]" />
    <Slide className="relative z-10">
      <SerifStatement>
        AI will change workforce structures, whether through efficiency gains, consolidation or augmentation.
        The workforce <span className="text-primary font-bold">will</span> shift. It's not a question of "if" but one of <span className="text-primary">"when."</span>
      </SerifStatement>
    </Slide>
  </div>,

  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Workforce Data</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-gray-900">The</span><span className="highlight-green">Numbers</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">
      <NumberedItem num="80%" title="Believe AI will impact their daily work" desc="Workers surveyed about AI's effect on their tasks." />
      <NumberedItem num="50%" title="Worry their job could be automated" desc="Workers who already use AI at work." />
      <NumberedItem num="76K+" title="Jobs eliminated in 2025" desc="Data entry, telemarketing, and admin support roles." />
    </div>
  </WhiteSlide>,

  <PromptSlide question="If our clients reduced headcount by 20%, what happens to our revenue?" />,

  <WhiteSlide className="diagonal-lines-light">
    <div className="relative z-10 text-center">
      <p className="font-serif text-3xl md:text-4xl lg:text-5xl italic leading-snug max-w-5xl mx-auto text-gray-800">
        That doesn't mean merch and swag <span className="text-brand-green font-bold">go away.</span>
      </p>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mt-10 font-bold">
        As AI reshapes work, belonging shifts from employer identity to community identity.
      </p>
    </div>
  </WhiteSlide>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">The Opportunity</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <GridCard superTitle="Internal" title="More intentional." body="Merch must reflect culture and values, not just fill closets." />
        <GridCard superTitle="External" title="More tribal." body="Build tribes - customers, advocates, insiders, power users, culture ambassadors." />
        <GridCard superTitle="Identity" title="Badge signalling." body="Move from 'gifting employees' to 'manufacturing belonging.'" />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">03</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #3</div>
      <BigText>Identity-driven<br />community <span className="highlight-green">merch.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        Merch becomes badge signalling, not office swag. Move from "gifting employees" to "manufacturing belonging."
      </p>
    </Slide>
  </div>,
];

const closingDesktop = [
  <div className="relative w-full h-full flex items-center justify-center bg-white text-gray-900 dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-8 md:h-10 mb-14 mx-auto invert" />
      <div className="space-y-10 text-left max-w-2xl mx-auto">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconFastForward size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-light">AI is compressing time across everything.</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-gray-900">Instant is the new <span className="highlight-green">standard.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconStacks size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-light">AI is taking over the "doing."</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-gray-900">Death of transactional <span className="highlight-green">sales.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconIdentity size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-light">AI will restructure the employer-employee relationship.</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-gray-900">Identity-driven community <span className="highlight-green">merch.</span></h3>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-12 pt-8 text-center">
        <p className="font-serif text-xl md:text-2xl italic text-gray-600 mb-2">The shift isn't coming.</p>
        <h2 className="font-title text-4xl md:text-6xl uppercase tracking-tight">
          It's <span className="highlight-green inline-block">here.</span>
        </h2>
      </div>
    </div>
  </div>,
];

/* ─── Mobile overrides (only where mobile layout differs from desktop) ─── */

const titleMobile = [
  // Cover — slightly different sizing for mobile
  <div className="relative w-full h-full flex items-center justify-center dot-grid-bold glow-br overflow-hidden">
    <div className="absolute right-0 bottom-0 font-display text-[30rem] font-black text-foreground/[0.03] leading-none select-none pointer-events-none">
      AI
    </div>
    <div className="relative z-10 px-8 text-left max-w-5xl">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-10 mb-12" />
      <h1 className="font-title text-5xl uppercase leading-[1.05] tracking-tight">
        The Future<br />of <span className="highlight-green">AI.</span>
      </h1>
      <p className="font-serif text-xl italic text-muted-foreground mt-8 max-w-2xl">
        How AI is reshaping expectations, value, and identity - and what it means for us at Brand Blvd.
      </p>
    </div>
  </div>,

  <PromptSlide question="What is 1 way AI has changed how you act or make decisions?" />,

  <div className="relative w-full h-full flex items-center justify-center bg-white text-gray-900 dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full px-8 text-center">
      <p className="font-serif text-xl italic text-gray-500 mb-10">The 3 biggest ways I believe AI will impact our business and our industry.</p>
      <div className="space-y-6 text-left">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconFastForward size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-gray-900">AI is compressing time across <span className="highlight-green">everything.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconStacks size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-gray-900">AI is taking over the <span className="highlight-green">"doing."</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconIdentity size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-gray-900">AI will restructure the employer-employee <span className="highlight-green">relationship.</span></h3>
        </div>
      </div>
    </div>
  </div>,
];

const instantMobile = [
  <SectionOpener icon={IconFastForward} number="01" superTitle="The Future of AI" title={<>AI is compressing time<br />across <span className="highlight-green">everything.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <BgImage src={abstractSpeed} opacity="opacity-[0.04]" />
    <Slide className="relative z-10">
      <SerifStatement>
        AI tools have moved from novelty to <span className="text-primary">household names</span>.
        They're training people to expect immediate results.
        Not faster. <span className="text-primary font-bold">Immediate.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <Slide><GrowthChart /></Slide>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-8">Investment Signals</p>
      <div className="grid grid-cols-1 gap-y-8">
        <GridCard superTitle="OpenAI" title="$100B Round · $850B Valuation." body="Largest single funding round in technology history." />
        <GridCard superTitle="Nvidia" title="$3T+ Market Cap." body="Stock grew 200%+ in a single year on AI chip demand." />
        <GridCard superTitle="Lovable" title="$330M Raised · 1 Year Old." body="One of the largest early-stage rounds for an AI-native dev platform." />
        <GridCard superTitle="Anthropic" title="$30B at $380B Valuation." body="Revenue growing 10x annually, less than 3 years old." />
      </div>
    </div>
  </div>,

  <div className="w-full h-full bg-white text-gray-900 flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">What's Changing</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8 break-words">
        <span className="text-gray-900">Expectation</span><br className="md:hidden" /><span className="highlight-green">Shifts</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <NumberedItem num="1" title="Patience is collapsing" desc="ChatGPT can help you compare car models immediately." />
        <NumberedItem num="2" title={'"Good enough" is immediate'} desc="Fast is better than perfect - i.e. NotebookLM." />
        <NumberedItem num="3" title="Exploration cost is nearing 0" desc='"Generate 3 themes for a campaign."' />
        <NumberedItem num="4" title="Self-sufficiency is increasing" desc="AI can help people do everything now." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        AI is not just improving productivity. <span className="text-primary font-bold">It's rewiring expectation.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">The speed of AI is setting the speed of everything.</p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-serif text-base italic text-muted-foreground mb-6">If we operate with...</p>
        <div className="border-l-4 border-primary/40 pl-5 mb-8 space-y-3">
          <p className="text-lg text-muted-foreground font-light leading-relaxed"><span className="text-foreground font-medium">48-hour</span> quote turnarounds</p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed"><span className="text-foreground font-medium">3-day</span> proof cycles</p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">Reorders buried in <span className="text-foreground font-medium">email chains</span></p>
        </div>
        <p className="font-serif text-base italic text-foreground mb-6">
          ...we'll feel analog in a digital world.
        </p>
        <div className="border-t border-muted-foreground/20 pt-5">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary font-bold mb-2">Reality Check</p>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Buyers will expect real-time pricing, proofs, and ordering - <span className="text-primary font-bold">delays will feel broken.</span>
          </p>
        </div>
      </div>
    </Slide>
  </div>,

  <PromptSlide question="If you were our client, what part of our process would frustrate you?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">01</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #1</div>
      <BigText>Instant is the<br />new <span className="highlight-green">standard.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
        Automate reorders, quoting, proofs, and standard workflows. Remove unnecessary delay.
      </p>
    </Slide>
  </div>,
];

const humanValueMobile = [
  <SectionOpener icon={IconStacks} number="02" superTitle="The Future of AI" title={<>AI is taking over<br />the <span className="highlight-green">"doing."</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <BgImage src={abstractStack} opacity="opacity-[0.05]" />
    <Slide className="relative z-10">
      <SerifStatement>
        AI can do rule-based, repetitive, information-heavy tasks <span className="text-primary">faster, cheaper, and at scale</span>.
        Our role shifts to knowing <span className="text-primary font-bold">"what" to do</span>, not in "doing" it.
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">The human role shifts up the stack.</p>
    </Slide>
  </div>,

  <div className="w-full h-full bg-white text-gray-900 flex items-center justify-center px-8 cross-grid-light">
    <div className="w-full max-w-6xl relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-10">Industry Leaders</p>
      <div className="grid grid-cols-1 gap-8">
        {[
          { quote: "The future of work is not about AI replacing people. It's about people who use AI replacing people who don't.", author: "Satya Nadella", role: "CEO, Microsoft" },
          { quote: "The real value of AI is helping salespeople spend more time with customers and less time doing administrative work.", author: "Marc Benioff", role: "CEO, Salesforce" },
          { quote: "We'll be there in 3-6 months, where AI is writing 90% of the code - and in 12 months, AI writes all of it.", author: "Dario Amodei", role: "CEO, Anthropic" },
        ].map((q) => (
          <QuoteCard key={q.author} {...q} />
        ))}
      </div>
    </div>
  </div>,

  <div className="w-full h-full bg-white text-gray-900 flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Industry Reality</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8 break-words">
        Order-Taking<br className="md:hidden" /><span className="highlight-green">Dies.</span>
      </h2>
      <div className="space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed">
          Software will get better. AI-empowered systems will draft proposals, generate pricing comparisons, and source products instantly.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          More people will use more tools to do the work we do now. If we continue to be just order-takers, we'll be beaten out by alternatives that make it easier and quicker.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Industries like travel and retail eliminated transactional middlemen when search became automated. <span className="text-gray-800 font-medium">This will happen to us, too.</span>
        </p>
      </div>
      <p className="mt-6 border-t border-gray-200 pt-4">
        <span className="text-brand-green font-display font-bold uppercase text-sm">Conclusion:</span>{" "}
        <span className="font-bold text-sm">Evolve from "order takers" to collaborators and advisors.</span>
      </p>
    </div>
  </div>,

  <PromptSlide question="If AI handled 50% of admin tomorrow, would our reps know what to do with the extra time?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">02</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #2</div>
      <BigText>Death of<br />transactional <span className="highlight-green">sales.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
        We win on framing, interpretation, judgement, context, and strategy - not on sending catalogues.
      </p>
    </Slide>
  </div>,
];

const identityMobile = [
  <SectionOpener icon={IconIdentity} number="03" superTitle="The Future of AI" title={<>AI will restructure<br />the employer-employee <span className="highlight-green">relationship.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <BgImage src={abstractIdentity} opacity="opacity-[0.05]" />
    <Slide className="relative z-10">
      <SerifStatement>
        AI will change workforce structures, whether through efficiency gains, consolidation or augmentation.
        The workforce <span className="text-primary font-bold">will</span> shift. It's not a question of "if" but one of <span className="text-primary">"when."</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="w-full h-full bg-white text-gray-900 flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Workforce Data</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">
        <span className="text-gray-900">The</span><span className="highlight-green">Numbers</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <NumberedItem num="80%" title="Believe AI will impact their daily work" desc="Workers surveyed about AI's effect on their tasks." />
        <NumberedItem num="50%" title="Worry their job could be automated" desc="Workers who already use AI at work." />
        <NumberedItem num="76K+" title="Jobs eliminated in 2025" desc="Data entry, telemarketing, and admin support roles." />
      </div>
    </div>
  </div>,

  <PromptSlide question="If our clients reduced headcount by 20%, what happens to our revenue?" />,

  <div className="w-full h-full bg-white text-gray-900 flex items-center justify-center px-8 diagonal-lines-light">
    <div className="relative z-10 text-center">
      <p className="font-serif text-2xl italic leading-snug max-w-5xl mx-auto text-gray-800">
        That doesn't mean merch and swag <span className="text-brand-green font-bold">go away.</span>
      </p>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mt-10 font-bold">
        As AI reshapes work, belonging shifts from employer identity to community identity.
      </p>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">The Opportunity</p>
      <div className="grid grid-cols-1 gap-8">
        <GridCard superTitle="Internal" title="More intentional." body="Merch must reflect culture and values, not just fill closets." />
        <GridCard superTitle="External" title="More tribal." body="Build tribes - customers, advocates, insiders, power users, culture ambassadors." />
        <GridCard superTitle="Identity" title="Badge signalling." body="Move from 'gifting employees' to 'manufacturing belonging.'" />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">03</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #3</div>
      <BigText>Identity-driven<br />community <span className="highlight-green">merch.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
        Merch becomes badge signalling, not office swag. Move from "gifting employees" to "manufacturing belonging."
      </p>
    </Slide>
  </div>,
];

const closingMobile = [
  <div className="relative w-full h-full flex items-center justify-center bg-white text-gray-900 dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full px-8 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-7 mb-10 mx-auto invert" />
      <div className="space-y-6 text-left">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconFastForward size={28} className="text-brand-green" />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-light">AI is compressing time across everything.</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-gray-900">Instant is the new <span className="highlight-green">standard.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconStacks size={28} className="text-brand-green" />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-light">AI is taking over the "doing."</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-gray-900">Death of transactional <span className="highlight-green">sales.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconIdentity size={28} className="text-brand-green" />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-light">AI will restructure the employer-employee relationship.</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-gray-900">Identity-driven community <span className="highlight-green">merch.</span></h3>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-6 text-center">
        <p className="font-serif text-lg italic text-gray-600 mb-2">The shift isn't coming.</p>
        <h2 className="font-title text-3xl uppercase tracking-tight">
          It's <span className="highlight-green inline-block">here.</span>
        </h2>
      </div>
    </div>
  </div>,
];

/* ─── Config ─── */

const futureOfAi: PresentationConfig = {
  slug: "future-of-ai",
  title: "The Future of AI - Brand Blvd",
  description: "How artificial intelligence is reshaping expectations, value, and identity - and what it means for us.",
  ogImage: "https://storage.googleapis.com/gpt-engineer-file-uploads/i9RYoO5s7dMy9YqF7p9BG90zLjQ2/social-images/social-1771640938712-Screen_Shot_2026-02-20_at_9.25.39_PM.webp",
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
      id: "instant",
      label: "Instant",
      icon: IconFastForward,
      desktopSlides: instantDesktop,
      mobileSlides: instantMobile,
    },
    {
      id: "human-value",
      label: "Human Value",
      icon: IconStacks,
      desktopSlides: humanValueDesktop,
      mobileSlides: humanValueMobile,
    },
    {
      id: "identity",
      label: "Identity",
      icon: IconIdentity,
      desktopSlides: identityDesktop,
      mobileSlides: identityMobile,
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

export default futureOfAi;
