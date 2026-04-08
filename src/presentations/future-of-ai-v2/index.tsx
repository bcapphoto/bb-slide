/**
 * "The Future of AI" Presentation
 *
 * Original presentation migrated into the multi-presentation system.
 */

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
  IconUpdate,
  IconOrgChart,
  IconAgent,
  IconTarget,
} from "@/components/SectionIcons";
import GrowthChart from "@/components/GrowthChart";
import ArticleSection from "./ArticleSection";
import PresenterNotesSection from "./PresenterNotesSection";

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
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <p className="font-serif text-xl md:text-2xl italic text-light-muted mb-14">The 3 biggest ways I believe AI will impact our business and our industry.</p>
      <div className="space-y-10 text-left">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconFastForward size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">AI is compressing time across <span className="highlight-green">everything.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconStacks size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">AI is taking over the <span className="highlight-green">"doing."</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconIdentity size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">AI will restructure the employer-employee <span className="highlight-green">relationship.</span></h3>
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
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">What's Changing</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-light">Expectation</span><span className="highlight-green">Shifts</span>
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
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-10">Industry Leaders</p>
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
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Industry Reality</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      Order-Taking<span className="highlight-green">Dies.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
      <div>
        <h3 className="font-display text-lg font-extrabold uppercase mb-4">The shift</h3>
        <p className="text-light-secondary text-base leading-relaxed mb-4">
          Software will get better. AI-empowered systems will draft proposals, generate pricing comparisons, and source products instantly.
        </p>
        <p className="text-light-secondary text-base leading-relaxed mb-4">
          More people will use more tools to do the work we do now. If we continue to be just order-takers, we'll be beaten out by alternatives that make it easier and quicker.
        </p>
      </div>
      <div>
        <h3 className="font-display text-lg font-extrabold uppercase mb-4">The precedent</h3>
        <p className="text-light-secondary text-base leading-relaxed mb-4">
          Industries like travel and retail eliminated transactional middlemen when search became automated.
        </p>
        <p className="text-light text-base leading-relaxed font-medium">
          This will happen to us, too.
        </p>
      </div>
    </div>
    <p className="mt-10 border-t border-light pt-6">
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
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Workforce Data</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-light">The</span><span className="highlight-green">Numbers</span>
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
      <p className="font-serif text-3xl md:text-4xl lg:text-5xl italic leading-snug max-w-5xl mx-auto text-light">
        That doesn't mean merch and swag <span className="text-brand-green font-bold">go away.</span>
      </p>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-light-muted mt-10 font-bold">
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
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-8 md:h-10 mb-14 mx-auto invert" />
      <div className="space-y-10 text-left max-w-2xl mx-auto">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconFastForward size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-light-muted text-sm font-light">AI is compressing time across everything.</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-light">Instant is the new <span className="highlight-green">standard.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconStacks size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-light-muted text-sm font-light">AI is taking over the "doing."</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-light">Death of transactional <span className="highlight-green">sales.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconIdentity size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <div>
            <p className="text-light-muted text-sm font-light">AI will restructure the employer-employee relationship.</p>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-light">Identity-driven community <span className="highlight-green">merch.</span></h3>
          </div>
        </div>
      </div>
      <div className="border-t border-light mt-12 pt-8 text-center">
        <p className="font-serif text-xl md:text-2xl italic text-light-secondary mb-2">The shift isn't coming.</p>
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

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full px-8 text-center">
      <p className="font-serif text-xl italic text-light-muted mb-10">The 3 biggest ways I believe AI will impact our business and our industry.</p>
      <div className="space-y-6 text-left">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconFastForward size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-light">AI is compressing time across <span className="highlight-green">everything.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconStacks size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-light">AI is taking over the <span className="highlight-green">"doing."</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconIdentity size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-light">AI will restructure the employer-employee <span className="highlight-green">relationship.</span></h3>
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

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">What's Changing</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8 break-words">
        <span className="text-light">Expectation</span><br className="md:hidden" /><span className="highlight-green">Shifts</span>
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

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8 cross-grid-light">
    <div className="w-full max-w-6xl relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-10">Industry Leaders</p>
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

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Industry Reality</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8 break-words">
        Order-Taking<br className="md:hidden" /><span className="highlight-green">Dies.</span>
      </h2>
      <div className="space-y-4">
        <p className="text-light-secondary text-sm leading-relaxed">
          Software will get better. AI-empowered systems will draft proposals, generate pricing comparisons, and source products instantly.
        </p>
        <p className="text-light-secondary text-sm leading-relaxed">
          More people will use more tools to do the work we do now. If we continue to be just order-takers, we'll be beaten out by alternatives that make it easier and quicker.
        </p>
        <p className="text-light-secondary text-sm leading-relaxed">
          Industries like travel and retail eliminated transactional middlemen when search became automated. <span className="text-light font-medium">This will happen to us, too.</span>
        </p>
      </div>
      <p className="mt-6 border-t border-light pt-4">
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

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Workforce Data</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">
        <span className="text-light">The</span><span className="highlight-green">Numbers</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <NumberedItem num="80%" title="Believe AI will impact their daily work" desc="Workers surveyed about AI's effect on their tasks." />
        <NumberedItem num="50%" title="Worry their job could be automated" desc="Workers who already use AI at work." />
        <NumberedItem num="76K+" title="Jobs eliminated in 2025" desc="Data entry, telemarketing, and admin support roles." />
      </div>
    </div>
  </div>,

  <PromptSlide question="If our clients reduced headcount by 20%, what happens to our revenue?" />,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8 diagonal-lines-light">
    <div className="relative z-10 text-center">
      <p className="font-serif text-2xl italic leading-snug max-w-5xl mx-auto text-light">
        That doesn't mean merch and swag <span className="text-brand-green font-bold">go away.</span>
      </p>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-light-muted mt-10 font-bold">
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
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full px-8 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-7 mb-10 mx-auto invert" />
      <div className="space-y-6 text-left">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconFastForward size={28} className="text-brand-green" />
          </div>
          <div>
            <p className="text-light-muted text-xs font-light">AI is compressing time across everything.</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-light">Instant is the new <span className="highlight-green">standard.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconStacks size={28} className="text-brand-green" />
          </div>
          <div>
            <p className="text-light-muted text-xs font-light">AI is taking over the "doing."</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-light">Death of transactional <span className="highlight-green">sales.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconIdentity size={28} className="text-brand-green" />
          </div>
          <div>
            <p className="text-light-muted text-xs font-light">AI will restructure the employer-employee relationship.</p>
            <h3 className="font-title text-lg uppercase tracking-tight leading-tight mt-1 text-light">Identity-driven community <span className="highlight-green">merch.</span></h3>
          </div>
        </div>
      </div>
      <div className="border-t border-light mt-8 pt-6 text-center">
        <p className="font-serif text-lg italic text-light-secondary mb-2">The shift isn't coming.</p>
        <h2 className="font-title text-3xl uppercase tracking-tight">
          It's <span className="highlight-green inline-block">here.</span>
        </h2>
      </div>
    </div>
  </div>,
];

/* ─── Update: 30 Days Later ─── */

const updateIntroDesktop = [
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light overflow-hidden">
    <div className="absolute right-0 bottom-0 font-display text-[20rem] font-black text-foreground/[0.02] leading-none select-none pointer-events-none">
      +30
    </div>
    <div className="relative z-10 px-8 md:px-20 lg:px-32 text-left max-w-5xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
          <IconUpdate size={28} className="text-brand-green" />
        </div>
        <p className="font-display text-sm uppercase tracking-[0.3em] text-light-muted font-bold">Addendum</p>
      </div>
      <h1 className="font-title text-5xl md:text-7xl lg:text-8xl uppercase leading-[1.05] tracking-tight text-light">
        30 Days<br /><span className="highlight-green">Later.</span>
      </h1>
      <p className="font-serif text-xl md:text-2xl italic text-light-muted mt-8 max-w-2xl">
        I thought this article would hold up for a while. It didn't. Not because I was wrong - but because new signals emerged faster than I expected.
      </p>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <p className="font-serif text-xl md:text-2xl italic text-muted-foreground mb-14">3 things have shifted my thinking since.</p>
      <div className="space-y-10 text-left">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconOrgChart size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-foreground">The org chart is <span className="highlight-green">dissolving.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconAgent size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-foreground">Agents are doing the <span className="highlight-green">work.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconTarget size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-foreground">Machines are becoming the <span className="highlight-green">buyers.</span></h3>
        </div>
      </div>
    </div>
  </div>,
];

const orgChartDesktop = [
  <SectionOpener icon={IconOrgChart} number="04" superTitle="Update: 30 Days Later" title={<>The org chart is<br /><span className="highlight-green">dissolving.</span></>} monogramSrc={bbMonogram} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        For 2,000 years, a leader could manage <span className="text-primary">3 to 8 people</span>.
        That number hasn't changed since the Roman military.
        It's why we have <span className="text-primary font-bold">hierarchies.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">AI doesn't need layers to coordinate.</p>
    </Slide>
  </div>,

  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Case Study: Block (Square + Cash App)</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-light">3 Roles.</span><br />Not 10 <span className="highlight-green">Layers.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">
      <GridCard superTitle="ICs" title="Individual Contributors." body="Use the AI model for context instead of waiting for management approval." />
      <GridCard superTitle="DRIs" title="Directly Responsible." body="Own a specific problem for 90 days with cross-team authority." />
      <GridCard superTitle="Player-Coaches" title="Build + Develop." body="Build things and develop people at the same time." />
    </div>
    <p className="mt-10 text-light-muted text-sm italic">Source: Sequoia Capital — "From Hierarchy to Intelligence"</p>
  </WhiteSlide>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">Two Opposing Forces</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        <div>
          <h3 className="font-display text-lg font-extrabold uppercase mb-4">Inside Our Walls</h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            "Growing the team" starts to look less like adding headcount and more like increasing <span className="text-foreground font-medium">leverage per person</span>.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            The question shifts from "who do we hire next?" to "how do we make every person <span className="text-foreground font-medium">3× more effective</span>?"
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-extrabold uppercase mb-4">Outside Our Walls</h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            The companies we sell to are going to look different. <span className="text-foreground font-medium">Flatter orgs. Fewer decision-makers.</span>
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            The org chart your SDR mapped last year might not exist next year.
          </p>
        </div>
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        If management layers compress, the people who remain become <span className="text-primary font-bold">more important</span>, not less.
        They hold more authority. They care more about culture and belonging.
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">That's a very good thing for a company that manufactures belonging.</p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">04</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #4</div>
      <BigText>Leverage per<br />person, not <span className="highlight-green">headcount.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        Management becomes coaching. The "doing" part of management is what AI absorbs first. The thinking part - judgment, coaching, strategy - stays human.
      </p>
    </Slide>
  </div>,
];

const agentsDesktop = [
  <SectionOpener icon={IconAgent} number="05" superTitle="Update: 30 Days Later" title={<>Agents are doing<br />the <span className="highlight-green">work.</span></>} monogramSrc={bbMonogram} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        A month ago, AI was a <span className="text-primary">tool</span>. You prompt it. It responds. You review.
        What's changed is the speed at which the biggest players are converging on the same conclusion:
        <span className="text-primary font-bold"> agents should do the work, not just assist with it.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">The Convergence</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-light">3 Signals.</span><br />Same <span className="highlight-green">Direction.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">
      <GridCard superTitle="Claude Code" title="$2.5B annual revenue." body="74 releases in 52 days. 4% of all GitHub commits. That number doubled in a single month." />
      <GridCard superTitle="OpenClaw" title="250K GitHub stars in 60 days." body="Surpassed React's 10-year record. 3.2M monthly active users. 925% traffic growth in one month." />
      <GridCard superTitle="Cursor" title="$2B+ annual revenue." body="Describe what you want in plain English. It writes, tests, and demos. Revenue doubled in 3 months." />
    </div>
  </WhiteSlide>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">Beyond Code</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        <div>
          <h3 className="font-display text-lg font-extrabold uppercase mb-4">The First Domino</h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            Coding is the most visible example because it's the easiest to agentify. But it's just the first domino.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <span className="text-foreground font-medium">$200B+</span> in agentic AI spending projected for 2026. Marketing is next.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-extrabold uppercase mb-4">The Wild Stuff</h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            Dario Amodei gives a <span className="text-foreground font-medium">70-80% probability</span> that 2026 sees the first billion-dollar company run by a single person.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            A dev built an AI agent that generated <span className="text-foreground font-medium">$100K+ in autonomous revenue</span>.
          </p>
        </div>
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid-bold">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-8">The Zero-Employee Company</p>
      <SerifStatement>
        What if you didn't need <span className="text-primary">employees</span> at all?
      </SerifStatement>
      <p className="text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed text-lg md:text-xl mt-8">
        Dario Amodei gives a <span className="text-foreground font-medium">70-80% probability</span> that 2026 sees the first billion-dollar company run by a single person. It might already be happening.
      </p>
    </Slide>
  </div>,

  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Case Study</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-light">$20K to</span><br /><span className="highlight-green">$1.8 Billion.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">
      <GridCard superTitle="The Founders" title="2 people. That's it." body="Matthew Gallagher and his brother built a telehealth company using AI agents for nearly everything — operations, support, marketing, fulfillment." />
      <GridCard superTitle="The Investment" title="$20,000 to start." body="No VC. No team of 50. Just a small bet, AI tools, and a relentless focus on delivering outcomes to patients." />
      <GridCard superTitle="The Result" title="$1.8B projected in 2026." body="$401 million in sales in 2025. On track to nearly 5x this year. The most compelling proof that the zero-employee model works." />
    </div>
  </WhiteSlide>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        This isn't a tech story.<br />It's a <span className="text-primary font-bold">leverage</span> story.
      </SerifStatement>
      <p className="text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed text-lg md:text-xl mt-8">
        Two people. No employees. AI handling operations, support, and scale. The question isn't whether this is possible. It's whether your competitors figure it out before you do.
      </p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-8">Sequoia Capital</p>
      <SerifStatement>
        The next trillion-dollar company won't sell <span className="text-primary">tools</span>.
        It will sell <span className="text-primary font-bold">outcomes.</span>
      </SerifStatement>
      <p className="text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed text-lg md:text-xl mt-8">
        For every dollar companies spend on software, they spend 6 dollars on services. The opportunity isn't in building better tools. It's in delivering better outcomes.
      </p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-serif text-lg md:text-xl lg:text-2xl italic text-muted-foreground mb-8">Think about that in the context of what we do.</p>
        <div className="border-l-4 border-primary/40 pl-6 mb-10 space-y-4">
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">We don't sell <span className="text-foreground font-medium">t-shirts</span>.</p>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">We sell the <span className="text-foreground font-medium">experience</span> around the t-shirt.</p>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">The <span className="text-foreground font-medium">brand moment</span>. The <span className="text-foreground font-medium">culture artifact</span>. The <span className="text-foreground font-medium">belonging signal</span>.</p>
        </div>
        <div className="border-t border-muted-foreground/20 pt-6">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary font-bold mb-3">The More AI Commoditizes Logistics</p>
          <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            The more the value shifts to what we're actually good at: <span className="text-primary font-bold">designing the moment.</span>
          </p>
        </div>
      </div>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">05</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #5</div>
      <BigText>Sell outcomes,<br />not <span className="highlight-green">tools.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        The companies that win aren't the ones with the best software. They're the ones that deliver outcomes people trust.
      </p>
    </Slide>
  </div>,
];

const buyersDesktop = [
  <SectionOpener icon={IconTarget} number="06" superTitle="Update: 30 Days Later" title={<>When machines are<br />the <span className="highlight-green">buyers.</span></>} monogramSrc={bbMonogram} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        Everything above leads to a question I don't think enough people in our industry are asking:
        <br /><br />
        If AI is making the decisions... <span className="text-primary font-bold">who are we selling to?</span>
      </SerifStatement>
    </Slide>
  </div>,

  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Agentic Procurement</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-light">The</span><span className="highlight-green">Numbers</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">
      <NumberedItem num="45%" title="Use AI as primary research" desc="B2B buyers already using AI to identify new suppliers." />
      <NumberedItem num="⅔" title="Trust AI agents for vendor research" desc="Rely on agents as much as — or more than — Google." />
      <NumberedItem num="90%" title="Of B2B purchases by 2028" desc="$15 trillion in spending mediated by AI agents." />
    </div>
  </WhiteSlide>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-serif text-lg md:text-xl italic text-muted-foreground mb-8">The procurement manager of tomorrow:</p>
        <div className="border-l-4 border-primary/40 pl-6 mb-8">
          <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed italic">
            "I need 500 branded polos for a company retreat in August. Budget is $25K. Find me 3 vendors with fast turnaround, good reviews, and sustainability options."
          </p>
        </div>
        <p className="text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
          The agent researches. Compares. Shortlists. Maybe it even places the order. The human doesn't visit a website. Doesn't read an email. <span className="text-foreground font-medium">Doesn't take a sales call.</span>
        </p>
      </div>
    </Slide>
  </div>,

  <WhiteSlide className="dot-grid-light">
    <div className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-10">Two Lanes</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        <div>
          <div className="w-16 h-16 rounded-sm bg-brand-green/10 flex items-center justify-center mb-6">
            <IconIdentity size={36} className="text-brand-green" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mb-4">Lane 1: <span className="highlight-green">Human</span> Buyer</h3>
          <p className="text-light-secondary text-base leading-relaxed">
            Relationships, trust, and personal service still win. The SDR call matters. Showing up and reading the room is the differentiator. We double down on the human stuff.
          </p>
        </div>
        <div>
          <div className="w-16 h-16 rounded-sm bg-brand-green/10 flex items-center justify-center mb-6">
            <IconAgent size={36} className="text-brand-green" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mb-4">Lane 2: <span className="highlight-green">Agent</span> Buyer</h3>
          <p className="text-light-secondary text-base leading-relaxed">
            Are we structured data an AI can parse? Are our case studies machine-readable? Are we in the right databases and data feeds? It's a completely different muscle.
          </p>
        </div>
      </div>
    </div>
  </WhiteSlide>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        An AI agent can't evaluate: does this company <span className="text-primary">understand my brand</span>?
        Will they push back when my idea is off?
        Will they design an experience that makes our people <span className="text-primary font-bold">feel something</span>?
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">The agent can shortlist vendors. But it can't feel the culture of a brand.</p>
    </Slide>
  </div>,

  <PromptSlide question="How would an AI procurement agent describe Brand Blvd? Would it even find us?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">06</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #6</div>
      <BigText>We sell what<br />machines can't <span className="highlight-green">evaluate.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        Transactional vendors get eaten alive by agentic procurement. But companies that sell belonging? That's where the human picks up the phone.
      </p>
    </Slide>
  </div>,
];

const updateClosingDesktop = [
  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        I wrote the original article to make a point about speed.
        Then I had to update it <span className="text-primary">30 days later</span> because the world changed faster than I realized.
        <br /><br />
        <span className="text-primary font-bold">That's the meta-lesson.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-8 md:h-10 mb-14 mx-auto invert" />
      <p className="font-serif text-xl md:text-2xl italic text-light-muted mb-10">The companies that win are the ones that build the muscle to adapt continuously.</p>
      <div className="border-t border-light pt-8 text-center">
        <p className="font-serif text-xl md:text-2xl italic text-light-secondary mb-2">Paying attention is half the battle.</p>
        <h2 className="font-title text-4xl md:text-6xl uppercase tracking-tight">
          The other half is <span className="highlight-green">doing</span> something about it.
        </h2>
      </div>
    </div>
  </div>,
];

/* ─── Update: Mobile slides ─── */

const updateIntroMobile = [
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light overflow-hidden">
    <div className="absolute right-0 bottom-0 font-display text-[12rem] font-black text-foreground/[0.02] leading-none select-none pointer-events-none">
      +30
    </div>
    <div className="relative z-10 px-8 text-left max-w-5xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-sm bg-brand-green/10 flex items-center justify-center">
          <IconUpdate size={24} className="text-brand-green" />
        </div>
        <p className="font-display text-sm uppercase tracking-[0.3em] text-light-muted font-bold">Addendum</p>
      </div>
      <h1 className="font-title text-4xl uppercase leading-[1.05] tracking-tight text-light">
        30 Days<br /><span className="highlight-green">Later.</span>
      </h1>
      <p className="font-serif text-lg italic text-light-muted mt-6 max-w-2xl">
        I thought this article would hold up for a while. It didn't. Not because I was wrong - but because new signals emerged faster than I expected.
      </p>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full px-8 text-center">
      <p className="font-serif text-lg italic text-muted-foreground mb-10">3 things have shifted my thinking since.</p>
      <div className="space-y-6 text-left">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconOrgChart size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-foreground">The org chart is <span className="highlight-green">dissolving.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconAgent size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-foreground">Agents are doing the <span className="highlight-green">work.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconTarget size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-lg uppercase tracking-tight leading-tight text-foreground">Machines are becoming the <span className="highlight-green">buyers.</span></h3>
        </div>
      </div>
    </div>
  </div>,
];

const orgChartMobile = [
  <SectionOpener icon={IconOrgChart} number="04" superTitle="Update: 30 Days Later" title={<>The org chart is<br /><span className="highlight-green">dissolving.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        For 2,000 years, a leader could manage <span className="text-primary">3 to 8 people</span>.
        That number hasn't changed since the Roman military.
        It's why we have <span className="text-primary font-bold">hierarchies.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">AI doesn't need layers to coordinate.</p>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Case Study: Block</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">
        <span className="text-light">3 Roles.</span><br />Not 10 <span className="highlight-green">Layers.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <GridCard superTitle="ICs" title="Individual Contributors." body="Use the AI model for context instead of waiting for management approval." />
        <GridCard superTitle="DRIs" title="Directly Responsible." body="Own a specific problem for 90 days with cross-team authority." />
        <GridCard superTitle="Player-Coaches" title="Build + Develop." body="Build things and develop people at the same time." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        If management layers compress, the people who remain become <span className="text-primary font-bold">more important</span>, not less.
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">That's a very good thing for a company that manufactures belonging.</p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">04</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #4</div>
      <BigText>Leverage per<br />person, not <span className="highlight-green">headcount.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
        Management becomes coaching. The thinking part - judgment, coaching, strategy - stays human.
      </p>
    </Slide>
  </div>,
];

const agentsMobile = [
  <SectionOpener icon={IconAgent} number="05" superTitle="Update: 30 Days Later" title={<>Agents are doing<br />the <span className="highlight-green">work.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        The biggest players are converging on the same conclusion:
        <span className="text-primary font-bold"> agents should do the work, not just assist with it.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">The Convergence</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">
        <span className="text-light">3 Signals.</span><br />Same <span className="highlight-green">Direction.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <GridCard superTitle="Claude Code" title="$2.5B annual revenue." body="4% of all GitHub commits. Doubled in a single month." />
        <GridCard superTitle="OpenClaw" title="250K GitHub stars in 60 days." body="3.2M monthly active users. 925% traffic growth." />
        <GridCard superTitle="Cursor" title="$2B+ annual revenue." body="Describe what you want. It writes, tests, and demos." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid-bold">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">The Zero-Employee Company</p>
      <SerifStatement>
        What if you didn't need <span className="text-primary">employees</span> at all?
      </SerifStatement>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Case Study</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">
        <span className="text-light">$20K to</span><br /><span className="highlight-green">$1.8 Billion.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <GridCard superTitle="The Founders" title="2 people. That's it." body="Matthew Gallagher and his brother built a telehealth company using AI agents for nearly everything." />
        <GridCard superTitle="The Investment" title="$20,000 to start." body="No VC. No team of 50. Just AI tools and a focus on delivering outcomes." />
        <GridCard superTitle="The Result" title="$1.8B projected in 2026." body="$401M in 2025 sales. On track to nearly 5x this year." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        This isn't a tech story. It's a <span className="text-primary font-bold">leverage</span> story.
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">Sequoia Capital</p>
      <SerifStatement>
        The next trillion-dollar company won't sell <span className="text-primary">tools</span>.
        It will sell <span className="text-primary font-bold">outcomes.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <div className="border-l-4 border-primary/40 pl-5 mb-6 space-y-3">
          <p className="text-lg text-muted-foreground font-light leading-relaxed">We don't sell <span className="text-foreground font-medium">t-shirts</span>.</p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">We sell the <span className="text-foreground font-medium">experience</span> around the t-shirt.</p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">The <span className="text-foreground font-medium">brand moment</span>. The <span className="text-foreground font-medium">belonging signal</span>.</p>
        </div>
        <div className="border-t border-muted-foreground/20 pt-5">
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            The more AI commoditizes logistics, the more value shifts to <span className="text-primary font-bold">designing the moment.</span>
          </p>
        </div>
      </div>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">05</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #5</div>
      <BigText>Sell outcomes,<br />not <span className="highlight-green">tools.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
        The companies that win deliver outcomes people trust.
      </p>
    </Slide>
  </div>,
];

const buyersMobile = [
  <SectionOpener icon={IconTarget} number="06" superTitle="Update: 30 Days Later" title={<>When machines are<br />the <span className="highlight-green">buyers.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        If AI is making the decisions... <span className="text-primary font-bold">who are we selling to?</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Agentic Procurement</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">
        <span className="text-light">The</span><span className="highlight-green">Numbers</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <NumberedItem num="45%" title="Use AI as primary research" desc="B2B buyers using AI to identify new suppliers." />
        <NumberedItem num="⅔" title="Trust AI agents for vendor research" desc="Rely on agents as much as — or more than — Google." />
        <NumberedItem num="90%" title="Of B2B purchases by 2028" desc="$15 trillion mediated by AI agents." />
      </div>
    </div>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8 dot-grid-light">
    <div className="relative z-10 w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-8">Two Lanes</p>
      <div className="space-y-8">
        <div>
          <h3 className="font-title text-xl uppercase tracking-tight leading-tight mb-3">Lane 1: <span className="highlight-green">Human</span> Buyer</h3>
          <p className="text-light-secondary text-sm leading-relaxed">
            Relationships, trust, and personal service still win. Double down on the human stuff.
          </p>
        </div>
        <div>
          <h3 className="font-title text-xl uppercase tracking-tight leading-tight mb-3">Lane 2: <span className="highlight-green">Agent</span> Buyer</h3>
          <p className="text-light-secondary text-sm leading-relaxed">
            Are we structured data an AI can parse? Are our case studies machine-readable? A completely different muscle.
          </p>
        </div>
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        An AI agent can't evaluate: does this company <span className="text-primary">understand my brand</span>?
        Will they design an experience that makes our people <span className="text-primary font-bold">feel something</span>?
      </SerifStatement>
    </Slide>
  </div>,

  <PromptSlide question="How would an AI procurement agent describe Brand Blvd? Would it even find us?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">06</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #6</div>
      <BigText>We sell what<br />machines can't <span className="highlight-green">evaluate.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
        Transactional vendors get eaten alive. Companies that sell belonging? That's where the human picks up the phone.
      </p>
    </Slide>
  </div>,
];

const updateClosingMobile = [
  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        I wrote the original article to make a point about speed.
        Then I had to update it <span className="text-primary">30 days later</span>.
        <span className="text-primary font-bold"> That's the meta-lesson.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full px-8 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-7 mb-10 mx-auto invert" />
      <p className="font-serif text-lg italic text-light-muted mb-8">The companies that win build the muscle to adapt continuously.</p>
      <div className="border-t border-light pt-6 text-center">
        <p className="font-serif text-lg italic text-light-secondary mb-2">Paying attention is half the battle.</p>
        <h2 className="font-title text-3xl uppercase tracking-tight">
          The other half is <span className="highlight-green">doing</span> something about it.
        </h2>
      </div>
    </div>
  </div>,
];

/* ─── Config ─── */

const futureOfAiV2: PresentationConfig = {
  slug: "future-of-ai-v2",
  title: "The Future of AI - Brand Blvd",
  description: "How artificial intelligence is reshaping expectations, value, and identity - and what it means for us.",
  themeId: "brand-blvd-v2",

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
    {
      id: "update-intro",
      label: "Update",
      icon: IconUpdate,
      desktopSlides: updateIntroDesktop,
      mobileSlides: updateIntroMobile,
    },
    {
      id: "org-charts",
      label: "Org Charts",
      icon: IconOrgChart,
      desktopSlides: orgChartDesktop,
      mobileSlides: orgChartMobile,
    },
    {
      id: "agents",
      label: "Agents",
      icon: IconAgent,
      desktopSlides: agentsDesktop,
      mobileSlides: agentsMobile,
    },
    {
      id: "buyers",
      label: "Buyers",
      icon: IconTarget,
      desktopSlides: buyersDesktop,
      mobileSlides: buyersMobile,
    },
    {
      id: "update-closing",
      label: "Update Summary",
      icon: IconClosing,
      desktopSlides: updateClosingDesktop,
      mobileSlides: updateClosingMobile,
    },
  ],

  articleComponent: ArticleSection,
  articleIcon: IconArticle,
  presenterNotesComponent: PresenterNotesSection,
};

export default futureOfAiV2;
