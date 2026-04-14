/**
 * "Brand BB and AI - v2" Presentation
 *
 * Team-facing kickoff for the AI Lab pilot.
 * Reframed around Karpathy's 98/2 observation - invitation, not ultimatum.
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

/* ─── 98/2 donut chart ─── */
const NinetyEightTwoChart = ({ size = 340 }: { size?: number }) => {
  const r = 80;
  const c = 2 * Math.PI * r;
  const twoPct = c * 0.02;
  return (
    <div className="flex flex-col items-center justify-center">
      <svg width={size} height={size} viewBox="0 0 200 200" className="drop-shadow-sm">
        <circle cx="100" cy="100" r={r} fill="none" stroke="hsl(var(--muted-foreground) / 0.25)" strokeWidth="28" />
        <circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="28"
          strokeDasharray={`${twoPct} ${c - twoPct}`}
          strokeDashoffset={c * 0.25}
          transform="rotate(-90 100 100)"
          strokeLinecap="butt"
        />
        <text x="100" y="96" textAnchor="middle" className="fill-foreground font-display font-black" style={{ fontSize: 34 }}>98%</text>
        <text x="100" y="118" textAnchor="middle" className="fill-muted-foreground font-display uppercase tracking-[0.2em]" style={{ fontSize: 8, fontWeight: 700 }}>moved on</text>
      </svg>
      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: "hsl(var(--muted-foreground) / 0.25)" }} />
          <span className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">98% moved on</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm bg-primary" />
          <span className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">2% watching</span>
        </div>
      </div>
    </div>
  );
};

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
        Don't<br /><span className="highlight-green">miss</span> this.
      </h1>
      <p className="font-serif text-xl md:text-2xl italic text-muted-foreground mt-8 max-w-2xl">
        Why I started the AI Lab, and why I want as many of you in it as possible.
      </p>
    </div>
  </div>,

  // Karpathy framing - the organizing idea
  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">
      <div className="text-left">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-8">Andrej Karpathy - April 9, 2026</p>
        <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
          There are <span className="text-primary">2 groups</span> of people right now.
          The <span className="text-primary font-bold">98%</span> who tried ChatGPT once and moved on.
          And the <span className="text-primary font-bold">2%</span> watching it do things that would have been science fiction 2 years ago.
        </p>
        <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-8 max-w-2xl">
          Both groups are looking at the same technology. They're coming away with completely different realities.
        </p>
      </div>
      <NinetyEightTwoChart />
    </div>
  </div>,

  // Why I'm sharing this
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        I've been spending a lot of time in the <span className="text-primary font-bold">2%</span>.
        Not because I'm an expert. Because I've been paying close attention - reading, building, experimenting.
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        And I want to bring as many of you over as I can.
      </p>
    </Slide>
  </div>,

  // Discussion
  <PromptSlide question="Where do you think you sit right now - closer to the 98 or the 2?" />,

  // Overview - 6 shifts
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <p className="font-serif text-xl md:text-2xl italic text-light-muted mb-14">6 things the 2% are watching - and what I think they mean for us.</p>
      <div className="space-y-8 text-left">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconFastForward size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">Expectations have <span className="highlight-green">shifted.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconStacks size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">AI is taking over the <span className="highlight-green">"doing."</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconOrgChart size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">The org chart is <span className="highlight-green">dissolving.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconAgent size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">Agents are doing the <span className="highlight-green">work.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconIdentity size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">The workforce is <span className="highlight-green">shifting.</span></h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconTarget size={40} className="text-brand-green md:w-12 md:h-12" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">The buyer isn't a <span className="highlight-green">person</span> anymore.</h3>
        </div>
      </div>
    </div>
  </div>,
];

const expectationsDesktop = [
  <SectionOpener icon={IconFastForward} number="01" superTitle="Don't miss this." title={<>Expectations have<br /><span className="highlight-green">shifted.</span></>} monogramSrc={bbMonogram} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <BgImage src={abstractSpeed} opacity="opacity-[0.04]" />
    <Slide className="relative z-10">
      <SerifStatement>
        AI is training people to expect <span className="text-primary">immediate</span>.
        Not faster. <span className="text-primary font-bold">Immediate.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">37% of consumers go to AI first instead of Google. Nearly 50% of searches include AI summaries.</p>
    </Slide>
  </div>,

  <Slide><GrowthChart /></Slide>,

  // The "good enough is good enough" beat
  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        <span className="text-primary">"Good enough, right now"</span> beats <span className="text-primary font-bold">"perfect, later."</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        A background cut that used to take 30 minutes in Photoshop now takes 5 seconds in Canva. Is it pixel-perfect? Maybe not. But it's done. And that's the new floor.
      </p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        The 2% have already been re-trained by these tools. They expect <span className="text-primary">instant</span>. They explore more, compare more, iterate more - <span className="text-primary font-bold">before they ever pick up the phone.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">Exploration is free now. Behaviour changes when exploration is free.</p>
    </Slide>
  </div>,

  // Gap framing
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-serif text-lg md:text-xl lg:text-2xl italic text-muted-foreground mb-8">A gap is opening up in the industry.</p>
        <div className="border-l-4 border-primary/40 pl-6 mb-10 space-y-4">
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed">What clients are <span className="text-foreground font-medium">starting to expect</span></p>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed">vs. what most agencies are <span className="text-foreground font-medium">set up to deliver.</span></p>
        </div>
        <div className="border-t border-muted-foreground/20 pt-6">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary font-bold mb-3">The Opening</p>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed">
            That gap is where both the risk <span className="text-primary font-bold">and the opportunity</span> live - and we get to choose which side we're on.
          </p>
        </div>
      </div>
    </Slide>
  </div>,

  <PromptSlide question="What's something you've seen a client expect lately that they wouldn't have asked for a year ago?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">01</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #1</div>
      <BigText>Good enough,<br />right <span className="highlight-green">now.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        The floor moved. Velocity beats precision at the front of the process. The agencies that close the gap between what clients expect and what they get are the ones that get pulled forward.
      </p>
    </Slide>
  </div>,
];

const humanValueDesktop = [
  <SectionOpener icon={IconStacks} number="02" superTitle="Don't miss this." title={<>AI is taking over<br />the <span className="highlight-green">"doing."</span></>} monogramSrc={bbMonogram} />,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <BgImage src={abstractStack} opacity="opacity-[0.05]" />
    <Slide className="relative z-10">
      <SerifStatement>
        AI handles rule-based, repetitive, information-heavy tasks <span className="text-primary">faster, cheaper, and at scale</span>.
        Our role moves up the stack - to knowing <span className="text-primary font-bold">what</span> to do, not "doing" it.
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">Execution gets cheap. Judgment gets scarce.</p>
    </Slide>
  </div>,

  <WhiteSlide className="cross-grid-light">
    <div className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-10">What the people building this are saying</p>
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

  // Reframed Nadella moment - this is WHY the AI Lab exists
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        That Nadella quote is exactly why I'm <span className="text-primary font-bold">not waiting.</span>
        It's why we're building the <span className="text-primary">AI Lab.</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        Instead of telling everyone "this is on you," I want to say: this is why I want to help.
      </p>
    </Slide>
  </div>,

  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">The Pattern</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      Pulled<span className="highlight-green">Up.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
      <div>
        <h3 className="font-display text-lg font-extrabold uppercase mb-4">What's getting automated</h3>
        <p className="text-light-secondary text-base leading-relaxed mb-4">
          Drafting proposals. Generating pricing comparisons. Sourcing products. The transactional middle is being absorbed - in our industry just like it was in travel and retail.
        </p>
      </div>
      <div>
        <h3 className="font-display text-lg font-extrabold uppercase mb-4">Where we get to live</h3>
        <p className="text-light-secondary text-base leading-relaxed mb-4">
          Making sure the proposal solves the right problem. Making sure the strategy holds. Designing the moment around the merch.
        </p>
        <p className="text-light text-base leading-relaxed font-medium">
          We get pulled up the value chain. That's a good thing if we're ready for it.
        </p>
      </div>
    </div>
  </WhiteSlide>,

  <PromptSlide question="If AI handled half your admin tomorrow, what would you do with the time?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">02</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #2</div>
      <BigText>We get pulled<br />up the <span className="highlight-green">stack.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        Less doing, more deciding. Framing the problem. Defining success. Owning the outcome. That's what AI can't replace.
      </p>
    </Slide>
  </div>,
];

const orgChartDesktop = [
  <SectionOpener icon={IconOrgChart} number="03" superTitle="Don't miss this." title={<>The org chart is<br /><span className="highlight-green">dissolving.</span></>} monogramSrc={bbMonogram} />,

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
    <p className="mt-10 text-light-muted text-sm italic">Source: Sequoia Capital - "From Hierarchy to Intelligence"</p>
  </WhiteSlide>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">Two Forces, Pulling in Opposite Directions</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        <div>
          <h3 className="font-display text-lg font-extrabold uppercase mb-4">Inside Our Walls</h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            "Growing the team" starts to look less like adding headcount and more like increasing <span className="text-foreground font-medium">leverage per person</span>.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            From "who do we hire next?" to "how do we make every person here <span className="text-foreground font-medium">3x more effective</span>?"
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
        More authority. Closer to the work. Closer to the culture.
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">A very good thing for a company that manufactures belonging.</p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">03</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #3</div>
      <BigText>Leverage per<br />person, not <span className="highlight-green">headcount.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        Management becomes coaching. The "doing" part of management gets absorbed. The thinking part - judgment, coaching, strategy - stays human.
      </p>
    </Slide>
  </div>,
];

const agentsDesktop = [
  <SectionOpener icon={IconAgent} number="04" superTitle="Don't miss this." title={<>Agents are doing<br />the <span className="highlight-green">work.</span></>} monogramSrc={bbMonogram} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        Last year, AI was a <span className="text-primary">tool</span>. You prompt it. It responds. You review.
        The biggest players are converging on something different now:
        <span className="text-primary font-bold"> agents that do the work, not just help with it.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">From Assistant to Operator</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-light">3 Signals.</span><br />Same <span className="highlight-green">Direction.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">
      <GridCard superTitle="Claude Code" title="$2.5B annual revenue." body="74 releases in 52 days. 4% of all GitHub commits. That number doubled in a single month." />
      <GridCard superTitle="OpenClaw" title="250K GitHub stars in 60 days." body="Surpassed React's 10-year record. 3.2M monthly active users. 925% traffic growth in one month." />
      <GridCard superTitle="Cursor" title="$2B+ annual revenue." body="Describe what you want in plain English. It writes, tests, and demos. Revenue doubled in 3 months." />
    </div>
  </WhiteSlide>,

  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Case Study</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-light">$20K to</span><br /><span className="highlight-green">$1.8 Billion.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">
      <GridCard superTitle="The Founders" title="2 people. That's it." body="Matthew Gallagher and his brother built a telehealth company using AI agents for nearly everything - operations, support, marketing, fulfillment." />
      <GridCard superTitle="The Investment" title="$20,000 to start." body="No VC. No team of 50. Just a small bet, AI tools, and a focus on delivering outcomes to patients." />
      <GridCard superTitle="The Result" title="$1.8B projected in 2026." body="$401 million in 2025 sales. On track to nearly 5x this year." />
    </div>
  </WhiteSlide>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        This isn't a tech story.<br />It's a <span className="text-primary font-bold">leverage</span> story.
      </SerifStatement>
      <p className="text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed text-lg md:text-xl mt-8">
        The same AI tools available to a 2-person startup are available to everyone - including us.
      </p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-8">Sequoia Capital - "Services: The New Software"</p>
      <SerifStatement>
        The next trillion-dollar company won't sell <span className="text-primary">tools</span>.
        It will sell <span className="text-primary font-bold">outcomes.</span>
      </SerifStatement>
      <p className="text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed text-lg md:text-xl mt-8">
        For every $1 spent on software, companies spend $6 on services. The opportunity isn't in better tools. It's in better outcomes.
      </p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-serif text-lg md:text-xl lg:text-2xl italic text-muted-foreground mb-8">In our context...</p>
        <div className="border-l-4 border-primary/40 pl-6 mb-10 space-y-4">
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">We don't sell <span className="text-foreground font-medium">t-shirts</span>.</p>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">We sell the <span className="text-foreground font-medium">experience</span> around the t-shirt.</p>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">The <span className="text-foreground font-medium">brand moment.</span> The <span className="text-foreground font-medium">culture artifact.</span> The <span className="text-foreground font-medium">belonging signal.</span></p>
        </div>
        <div className="border-t border-muted-foreground/20 pt-6">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary font-bold mb-3">The More AI Commoditizes Logistics</p>
          <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            The more value shifts to what we're actually good at: <span className="text-primary font-bold">designing the moment.</span>
          </p>
        </div>
      </div>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">04</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #4</div>
      <BigText>Sell outcomes,<br />not <span className="highlight-green">tools.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        The companies that win deliver outcomes people trust. That's exactly what we already do.
      </p>
    </Slide>
  </div>,
];

const identityDesktop = [
  <SectionOpener icon={IconIdentity} number="05" superTitle="Don't miss this." title={<>The workforce is<br /><span className="highlight-green">shifting.</span></>} monogramSrc={bbMonogram} />,

  // Reframed numbers slide - context for anxiety, not a scare
  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Why there's so much anxiety right now</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-light">What most people</span><span className="highlight-green">hear.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">
      <NumberedItem num="80%" title="Believe AI will impact their work" desc="Workers surveyed about AI's effect on their tasks." />
      <NumberedItem num="50%" title="Worry their job could be automated" desc="Workers who already use AI at work." />
      <NumberedItem num="76K+" title="Jobs eliminated in 2025" desc="Data entry, telemarketing, admin support roles." />
    </div>
    <p className="mt-10 text-light-secondary text-base leading-relaxed max-w-3xl">
      These numbers are real. They're exactly why so many people feel uneasy about AI right now. <span className="text-light font-medium">But they're not the whole story.</span>
    </p>
  </WhiteSlide>,

  // Reframed - the BB version
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <BgImage src={abstractIdentity} opacity="opacity-[0.05]" />
    <Slide className="relative z-10">
      <SerifStatement>
        We're not trying to do more with <span className="text-primary">fewer</span> people.
        We're trying to make every person on this team <span className="text-primary font-bold">more powerful, more effective, more valuable.</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        AI isn't here to replace you. It's here to make you better at what you already do well.
      </p>
    </Slide>
  </div>,

  // Reframed "vulnerable position" - drop binary, keep upside
  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        The people who lean into this stuff get to <span className="text-primary font-bold">shape what comes next.</span>
        That's why we're making space for as many of you as possible to be part of this.
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">Nobody is a lost cause for being in the 98%. The whole point is to bring people across.</p>
    </Slide>
  </div>,

  <PromptSlide question="What part of your daily work would you most want AI to take off your plate?" />,

  <WhiteSlide className="diagonal-lines-light">
    <div className="relative z-10 text-center">
      <p className="font-serif text-3xl md:text-4xl lg:text-5xl italic leading-snug max-w-5xl mx-auto text-light">
        Merch and swag don't <span className="text-brand-green font-bold">go away.</span>
      </p>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-light-muted mt-10 font-bold">
        As work shifts, belonging moves from employer identity to community identity.
      </p>
    </div>
  </WhiteSlide>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">Where Belonging Relocates</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <GridCard superTitle="Internal" title="More intentional." body="Merch reflects culture and values, not just fills closets." />
        <GridCard superTitle="External" title="More tribal." body="Build tribes - customers, advocates, insiders, ambassadors." />
        <GridCard superTitle="Identity" title="Badge signalling." body="Move from 'gifting employees' to 'manufacturing belonging.'" />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">05</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #5</div>
      <BigText>Belonging is<br /><span className="highlight-green">expanding.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        Tie our growth to payroll size and we're tied to a shrinking lever. Tie it to identity and belonging and we're tied to something expanding.
      </p>
    </Slide>
  </div>,
];

const buyersDesktop = [
  <SectionOpener icon={IconTarget} number="06" superTitle="Don't miss this." title={<>The buyer isn't<br />a <span className="highlight-green">person</span> anymore.</>} monogramSrc={bbMonogram} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        Everything above leads to a question I don't think enough people in our industry are sitting with:
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
      <NumberedItem num="⅔" title="Trust AI agents for vendor research" desc="Rely on agents as much as - or more than - Google." />
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
          The agent researches. Compares. Shortlists. Maybe even places the order. The human doesn't visit a website. Doesn't read an email. <span className="text-foreground font-medium">Doesn't take a sales call.</span>
        </p>
      </div>
    </Slide>
  </div>,

  <WhiteSlide className="dot-grid-light">
    <div className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-10">Two Lanes - Both Worth Building</p>
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
            Are we structured data an AI can parse? Are our case studies machine-readable? Are we in the right databases and feeds? A completely different muscle.
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
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">The agent can shortlist vendors. It can't feel the culture of a brand.</p>
    </Slide>
  </div>,

  <PromptSlide question="If an AI agent had to describe Brand Blvd in 2 sentences, what would we want it to say?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">06</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #6</div>
      <BigText>We sell what<br />machines can't <span className="highlight-green">evaluate.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        Transactional vendors get eaten by agentic procurement. Companies that sell belonging? That's where the human picks up the phone.
      </p>
    </Slide>
  </div>,
];

const aiLabDesktop = [
  // Section opener
  <SectionOpener icon={IconAgent} number="07" superTitle="The AI Lab" title={<>What we're<br /><span className="highlight-green">building.</span></>} monogramSrc={bbMonogram} />,

  // Hammer - simple version
  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-8">So what is the AI Lab?</p>
      <BigText>A small pilot.<br />Real work. <span className="highlight-green">3 months.</span></BigText>
      <p className="mt-10 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        Leadership plus 3 to 5 team members. Learning to actually use AI as a working tool. Not theory. Not tutorials. Building real things for your real job.
      </p>
    </Slide>
  </div>,

  // Honest-part - SerifStatement
  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        I don't have this all <span className="text-primary">figured out.</span> Nobody does.
        The tools are moving too fast for anyone to have a perfect playbook.
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        So we're going to learn together as we go. That's kind of the point.
      </p>
    </Slide>
  </div>,

  // What we'll be working on - 8 bullets split across 2 slides (part 1)
  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">What we'll be working on</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-light">The</span><span className="highlight-green">Work</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
      <NumberedItem num="01" title="Spot the workflows" desc="Which pieces of your day-to-day are good candidates to hand over to AI." />
      <NumberedItem num="02" title="What a skill is" desc="How it helps AI do a job the way you'd do it." />
      <NumberedItem num="03" title="What an agent is" desc="How it's different from just chatting with ChatGPT." />
      <NumberedItem num="04" title="Build these things yourself" desc="Not watching someone else do it - doing it." />
    </div>
  </WhiteSlide>,

  // What we'll be working on - part 2
  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">What we'll be working on</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-light">Real</span><span className="highlight-green">Skills</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
      <NumberedItem num="05" title="Use the tools that exist" desc="Not the ones coming someday - the ones that exist right now." />
      <NumberedItem num="06" title="Run things on autopilot" desc="Set systems up so they keep working without you." />
      <NumberedItem num="07" title="Schedule tasks" desc="Work happens while you sleep." />
      <NumberedItem num="08" title="Connect your tools" desc="Your systems learn to talk to each other." />
    </div>
  </WhiteSlide>,

  // No CS degree required
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        None of that requires a <span className="text-primary">computer science degree.</span>
        It requires <span className="text-primary font-bold">curiosity</span>, willingness to try things, and time to practice.
      </SerifStatement>
    </Slide>
  </div>,

  // Time commitment - 3 cards
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">The time commitment</p>
      <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
        <span className="text-light">That's</span><span className="highlight-green">it.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
        <NumberedItem num="90m" title="Per week" desc="A live working session together." />
        <NumberedItem num="½ day" title="Per month" desc="A deeper build - ship something real." />
        <NumberedItem num="+" title="Homework" desc="Building on your own between sessions." />
      </div>
    </div>
  </div>,

  // Impact statement - SerifStatement
  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        Tasks that used to eat <span className="text-primary">hours</span> will take <span className="text-primary font-bold">minutes.</span>
        Things you used to put off will get done automatically.
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        More of the work you love. Less of what drains you.
      </p>
    </Slide>
  </div>,

  // This is the beginning - transition
  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">07</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">The AI Lab</div>
      <BigText>This isn't a one-<br />and-done. <span className="highlight-green">It's the beginning.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        The people in this first cohort become the teachers for everyone else. This is something we want the whole team to be part of over time.
      </p>
    </Slide>
  </div>,
];

const closingDesktop = [
  // Recap of 6 shifts
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-8 md:h-10 mb-14 mx-auto invert" />
      <p className="font-serif text-xl md:text-2xl italic text-light-muted mb-10">6 things the 2% are watching. One invitation.</p>
      <div className="space-y-6 text-left max-w-2xl mx-auto">
        <div className="flex items-center gap-5">
          <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconFastForward size={32} className="text-brand-green md:w-10 md:h-10" />
          </div>
          <div>
            <p className="text-light-muted text-xs font-light">01 - Expectations have shifted.</p>
            <h3 className="font-title text-xl md:text-2xl uppercase tracking-tight leading-tight mt-1 text-light">Good enough, right <span className="highlight-green">now.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconStacks size={32} className="text-brand-green md:w-10 md:h-10" />
          </div>
          <div>
            <p className="text-light-muted text-xs font-light">02 - AI is taking over the "doing."</p>
            <h3 className="font-title text-xl md:text-2xl uppercase tracking-tight leading-tight mt-1 text-light">We get pulled up the <span className="highlight-green">stack.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconOrgChart size={32} className="text-brand-green md:w-10 md:h-10" />
          </div>
          <div>
            <p className="text-light-muted text-xs font-light">03 - The org chart is dissolving.</p>
            <h3 className="font-title text-xl md:text-2xl uppercase tracking-tight leading-tight mt-1 text-light">Leverage per person, not <span className="highlight-green">headcount.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconAgent size={32} className="text-brand-green md:w-10 md:h-10" />
          </div>
          <div>
            <p className="text-light-muted text-xs font-light">04 - Agents are doing the work.</p>
            <h3 className="font-title text-xl md:text-2xl uppercase tracking-tight leading-tight mt-1 text-light">Sell outcomes, not <span className="highlight-green">tools.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconIdentity size={32} className="text-brand-green md:w-10 md:h-10" />
          </div>
          <div>
            <p className="text-light-muted text-xs font-light">05 - The workforce is shifting.</p>
            <h3 className="font-title text-xl md:text-2xl uppercase tracking-tight leading-tight mt-1 text-light">Belonging is <span className="highlight-green">expanding.</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconTarget size={32} className="text-brand-green md:w-10 md:h-10" />
          </div>
          <div>
            <p className="text-light-muted text-xs font-light">06 - The buyer isn't a person anymore.</p>
            <h3 className="font-title text-xl md:text-2xl uppercase tracking-tight leading-tight mt-1 text-light">We sell what machines can't <span className="highlight-green">evaluate.</span></h3>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Build the muscle
  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        The companies that win in this aren't the ones who <span className="text-primary">predict the future</span> correctly.
        They're the ones who build the <span className="text-primary font-bold">muscle to adapt continuously.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">That's what the AI Lab is for.</p>
    </Slide>
  </div>,

  // Soft close - the invitation
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug mb-8">
          If any of this gets you excited - or even just curious - that's enough.
        </p>
        <div className="border-l-4 border-primary/40 pl-6 mb-8 space-y-4">
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            You don't need to be an AI expert. You just need to <span className="text-foreground font-medium">want to learn.</span>
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            And if this round isn't the right timing, that's OK too. We see this growing into something bigger - more cohorts, more people, <span className="text-foreground font-medium">more ways to bring everyone along.</span>
          </p>
        </div>
        <p className="font-serif text-xl md:text-2xl italic text-muted-foreground">This is just the beginning.</p>
      </div>
    </Slide>
  </div>,

  // Final
  <div className="relative w-full h-full flex items-center justify-center dot-grid-bold glow-br overflow-hidden">
    <Slide className="relative z-10 text-center">
      <BigText>Let's go build<br />some <span className="highlight-green">cool things.</span></BigText>
      <p className="font-serif text-xl md:text-2xl italic text-muted-foreground mt-10 max-w-2xl mx-auto">
        Apply for the AI Lab. We'd love to have you.
      </p>
    </Slide>
  </div>,
];

/* ─── Mobile overrides ─── */

const titleMobile = [
  <div className="relative w-full h-full flex items-center justify-center dot-grid-bold glow-br overflow-hidden">
    <div className="absolute right-0 bottom-0 font-display text-[30rem] font-black text-foreground/[0.03] leading-none select-none pointer-events-none">
      AI
    </div>
    <div className="relative z-10 px-8 text-left max-w-5xl">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-10 mb-12" />
      <h1 className="font-title text-5xl uppercase leading-[1.05] tracking-tight">
        Don't<br /><span className="highlight-green">miss</span> this.
      </h1>
      <p className="font-serif text-lg italic text-muted-foreground mt-8 max-w-2xl">
        Why I started the AI Lab, and why I want as many of you in it as possible.
      </p>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <div className="relative z-10 px-8 w-full">
      <p className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">Andrej Karpathy - April 9, 2026</p>
      <p className="font-serif text-2xl leading-[1.2] tracking-tight">
        2 groups right now. The <span className="text-primary font-bold">98%</span> who tried ChatGPT and moved on. The <span className="text-primary font-bold">2%</span> watching it do things that would have been science fiction 2 years ago.
      </p>
      <div className="mt-8 flex justify-center">
        <NinetyEightTwoChart size={220} />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        I've been spending a lot of time in the <span className="text-primary font-bold">2%</span>. And I want to bring as many of you over as I can.
      </SerifStatement>
    </Slide>
  </div>,

  <PromptSlide question="Where do you think you sit right now - closer to the 98 or the 2?" />,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full px-8 text-center">
      <p className="font-serif text-lg italic text-light-muted mb-10">6 things the 2% are watching - and what I think they mean for us.</p>
      <div className="space-y-5 text-left">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconFastForward size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-base uppercase tracking-tight leading-tight text-light">Expectations have <span className="highlight-green">shifted.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconStacks size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-base uppercase tracking-tight leading-tight text-light">AI is taking over the <span className="highlight-green">"doing."</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconOrgChart size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-base uppercase tracking-tight leading-tight text-light">The org chart is <span className="highlight-green">dissolving.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconAgent size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-base uppercase tracking-tight leading-tight text-light">Agents are doing the <span className="highlight-green">work.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconIdentity size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-base uppercase tracking-tight leading-tight text-light">The workforce is <span className="highlight-green">shifting.</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconTarget size={28} className="text-brand-green" />
          </div>
          <h3 className="font-title text-base uppercase tracking-tight leading-tight text-light">The buyer isn't a <span className="highlight-green">person</span> anymore.</h3>
        </div>
      </div>
    </div>
  </div>,
];

const expectationsMobile = [
  <SectionOpener icon={IconFastForward} number="01" superTitle="Don't miss this." title={<>Expectations have<br /><span className="highlight-green">shifted.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <BgImage src={abstractSpeed} opacity="opacity-[0.04]" />
    <Slide className="relative z-10">
      <SerifStatement>
        AI is training people to expect <span className="text-primary">immediate</span>. Not faster. <span className="text-primary font-bold">Immediate.</span>
      </SerifStatement>
      <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground mt-8 font-bold">37% of consumers go to AI first instead of Google.</p>
    </Slide>
  </div>,

  <Slide><GrowthChart /></Slide>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        <span className="text-primary">"Good enough, right now"</span> beats <span className="text-primary font-bold">"perfect, later."</span>
      </SerifStatement>
      <p className="font-serif text-base italic text-muted-foreground mt-8 max-w-3xl mx-auto">
        A background cut that took 30 minutes in Photoshop now takes 5 seconds in Canva. That's the new floor.
      </p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        The 2% have been re-trained. They explore more, compare more, iterate more - <span className="text-primary font-bold">before they ever pick up the phone.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-serif text-base italic text-muted-foreground mb-6">A gap is opening up in the industry.</p>
        <div className="border-l-4 border-primary/40 pl-5 mb-8 space-y-3">
          <p className="text-lg text-muted-foreground font-light leading-relaxed">What clients <span className="text-foreground font-medium">are starting to expect</span></p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">vs. what most agencies <span className="text-foreground font-medium">deliver.</span></p>
        </div>
        <div className="border-t border-muted-foreground/20 pt-5">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary font-bold mb-2">The Opening</p>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Both the <span className="text-primary font-bold">risk and the opportunity</span> live here.
          </p>
        </div>
      </div>
    </Slide>
  </div>,

  <PromptSlide question="What's something you've seen a client expect lately that they wouldn't have asked for a year ago?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">01</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #1</div>
      <BigText>Good enough,<br />right <span className="highlight-green">now.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
        The floor moved. Velocity beats precision at the front of the process.
      </p>
    </Slide>
  </div>,
];

const humanValueMobile = [
  <SectionOpener icon={IconStacks} number="02" superTitle="Don't miss this." title={<>AI is taking over<br />the <span className="highlight-green">"doing."</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <BgImage src={abstractStack} opacity="opacity-[0.05]" />
    <Slide className="relative z-10">
      <SerifStatement>
        AI handles the rule-based, information-heavy stuff <span className="text-primary">faster, cheaper, at scale</span>. Our role moves to knowing <span className="text-primary font-bold">what</span> to do.
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">Execution gets cheap. Judgment gets scarce.</p>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8 cross-grid-light">
    <div className="w-full max-w-6xl relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-10">What people building this are saying</p>
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

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        That Nadella quote is exactly why I'm <span className="text-primary font-bold">not waiting.</span> It's why we're building the <span className="text-primary">AI Lab.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">The Pattern</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8 break-words">
        Pulled<br className="md:hidden" /><span className="highlight-green">Up.</span>
      </h2>
      <div className="space-y-4">
        <p className="text-light-secondary text-sm leading-relaxed">
          Drafting proposals, generating pricing, sourcing - the transactional middle is being absorbed.
        </p>
        <p className="text-light-secondary text-sm leading-relaxed">
          We get to live closer to the value: making sure the proposal solves the right problem. Designing the moment around the merch.
        </p>
        <p className="text-light text-sm leading-relaxed font-medium">
          Pulled up the value chain. That's a good thing if we're ready for it.
        </p>
      </div>
    </div>
  </div>,

  <PromptSlide question="If AI handled half your admin tomorrow, what would you do with the time?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">02</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #2</div>
      <BigText>We get pulled<br />up the <span className="highlight-green">stack.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
        Less doing, more deciding. That's what AI can't replace.
      </p>
    </Slide>
  </div>,
];

const orgChartMobile = [
  <SectionOpener icon={IconOrgChart} number="03" superTitle="Don't miss this." title={<>The org chart is<br /><span className="highlight-green">dissolving.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        For 2,000 years, a leader could manage <span className="text-primary">3 to 8 people</span>. That number hasn't changed since the Roman military.
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
        <GridCard superTitle="DRIs" title="Directly Responsible." body="Own a problem for 90 days with cross-team authority." />
        <GridCard superTitle="Player-Coaches" title="Build + Develop." body="Build things and develop people at the same time." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        If management layers compress, the people who remain become <span className="text-primary font-bold">more important</span>, not less.
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">A very good thing for a company that manufactures belonging.</p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">03</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #3</div>
      <BigText>Leverage per<br />person, not <span className="highlight-green">headcount.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
        Management becomes coaching. Judgment, coaching, strategy stay human.
      </p>
    </Slide>
  </div>,
];

const agentsMobile = [
  <SectionOpener icon={IconAgent} number="04" superTitle="Don't miss this." title={<>Agents are doing<br />the <span className="highlight-green">work.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        The biggest players are converging:
        <span className="text-primary font-bold"> agents that do the work, not just help with it.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">From Assistant to Operator</p>
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

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Case Study</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">
        <span className="text-light">$20K to</span><br /><span className="highlight-green">$1.8 Billion.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <GridCard superTitle="The Founders" title="2 people. That's it." body="Matthew Gallagher and his brother built a telehealth company using AI agents for nearly everything." />
        <GridCard superTitle="The Investment" title="$20,000 to start." body="No VC. No team of 50. Just AI tools and a focus on outcomes." />
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
      <p className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">Sequoia Capital</p>
      <SerifStatement>
        The next trillion-dollar company won't sell <span className="text-primary">tools</span>. It will sell <span className="text-primary font-bold">outcomes.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <div className="border-l-4 border-primary/40 pl-5 mb-6 space-y-3">
          <p className="text-lg text-muted-foreground font-light leading-relaxed">We don't sell <span className="text-foreground font-medium">t-shirts</span>.</p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">We sell the <span className="text-foreground font-medium">experience</span> around the t-shirt.</p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">The <span className="text-foreground font-medium">brand moment.</span> The <span className="text-foreground font-medium">belonging signal.</span></p>
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
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">04</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #4</div>
      <BigText>Sell outcomes,<br />not <span className="highlight-green">tools.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
        That's exactly what we already do.
      </p>
    </Slide>
  </div>,
];

const identityMobile = [
  <SectionOpener icon={IconIdentity} number="05" superTitle="Don't miss this." title={<>The workforce is<br /><span className="highlight-green">shifting.</span></>} />,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Why there's so much anxiety right now</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">
        <span className="text-light">What most people</span><br /><span className="highlight-green">hear.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <NumberedItem num="80%" title="Believe AI will impact their work" desc="Workers surveyed about AI's effect on their tasks." />
        <NumberedItem num="50%" title="Worry their job could be automated" desc="Workers who already use AI at work." />
        <NumberedItem num="76K+" title="Jobs eliminated in 2025" desc="Data entry, telemarketing, admin support roles." />
      </div>
      <p className="mt-6 text-light-secondary text-sm leading-relaxed">
        These numbers are real. But <span className="text-light font-medium">they're not the whole story.</span>
      </p>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <BgImage src={abstractIdentity} opacity="opacity-[0.05]" />
    <Slide className="relative z-10">
      <SerifStatement>
        We're not trying to do more with <span className="text-primary">fewer</span> people. We're trying to make every person on this team <span className="text-primary font-bold">more powerful.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        The people who lean into this stuff get to <span className="text-primary font-bold">shape what comes next.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">Nobody is a lost cause for being in the 98%.</p>
    </Slide>
  </div>,

  <PromptSlide question="What part of your daily work would you most want AI to take off your plate?" />,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8 diagonal-lines-light">
    <div className="relative z-10 text-center">
      <p className="font-serif text-2xl italic leading-snug max-w-5xl mx-auto text-light">
        Merch and swag don't <span className="text-brand-green font-bold">go away.</span>
      </p>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-light-muted mt-10 font-bold">
        Belonging moves from employer identity to community identity.
      </p>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">Where Belonging Relocates</p>
      <div className="grid grid-cols-1 gap-8">
        <GridCard superTitle="Internal" title="More intentional." body="Merch reflects culture and values, not just fills closets." />
        <GridCard superTitle="External" title="More tribal." body="Build tribes - customers, advocates, insiders, ambassadors." />
        <GridCard superTitle="Identity" title="Badge signalling." body="Move from 'gifting employees' to 'manufacturing belonging.'" />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">05</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #5</div>
      <BigText>Belonging is<br /><span className="highlight-green">expanding.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
        Tied to identity and belonging, we're tied to something expanding.
      </p>
    </Slide>
  </div>,
];

const buyersMobile = [
  <SectionOpener icon={IconTarget} number="06" superTitle="Don't miss this." title={<>The buyer isn't<br />a <span className="highlight-green">person</span> anymore.</>} />,

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
        <NumberedItem num="⅔" title="Trust AI agents for vendor research" desc="Rely on agents as much as - or more than - Google." />
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
            Relationships, trust, personal service still win. Double down on the human stuff.
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
        An AI agent can't evaluate: does this company <span className="text-primary">understand my brand</span>? Will they design an experience that makes our people <span className="text-primary font-bold">feel something</span>?
      </SerifStatement>
    </Slide>
  </div>,

  <PromptSlide question="If an AI agent had to describe Brand Blvd in 2 sentences, what would we want it to say?" />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">06</div>
    <Slide className="relative z-10">
      <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #6</div>
      <BigText>We sell what<br />machines can't <span className="highlight-green">evaluate.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
        That's where the human picks up the phone.
      </p>
    </Slide>
  </div>,
];

const aiLabMobile = [
  <SectionOpener icon={IconAgent} number="07" superTitle="The AI Lab" title={<>What we're<br /><span className="highlight-green">building.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">So what is the AI Lab?</p>
      <BigText>A small pilot.<br />Real work. <span className="highlight-green">3 months.</span></BigText>
      <p className="mt-8 text-muted-foreground font-light leading-relaxed text-base">
        Leadership plus 3 to 5 team members. Learning to actually use AI as a working tool.
      </p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        I don't have this all <span className="text-primary">figured out.</span> Nobody does. We're going to learn together.
      </SerifStatement>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">What we'll be working on</p>
      <h2 className="font-title text-3xl uppercase leading-[0.9] tracking-tight mb-6">
        <span className="text-light">The</span><span className="highlight-green">Work</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-5">
        <NumberedItem num="01" title="Spot the workflows" desc="Pieces of your day that are good candidates for AI." />
        <NumberedItem num="02" title="What a skill is" desc="Helping AI do a job the way you'd do it." />
        <NumberedItem num="03" title="What an agent is" desc="Different from just chatting with ChatGPT." />
        <NumberedItem num="04" title="Build these things" desc="Not watching - doing." />
      </div>
    </div>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Real skills</p>
      <h2 className="font-title text-3xl uppercase leading-[0.9] tracking-tight mb-6">
        <span className="text-light">More</span><span className="highlight-green">Skills</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-5">
        <NumberedItem num="05" title="Use tools that exist now" desc="Not someday - today." />
        <NumberedItem num="06" title="Run on autopilot" desc="Systems that keep working without you." />
        <NumberedItem num="07" title="Schedule tasks" desc="Work happens while you sleep." />
        <NumberedItem num="08" title="Connect your tools" desc="Systems that talk to each other." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        No <span className="text-primary">CS degree</span> required. Just <span className="text-primary font-bold">curiosity</span> and time to practice.
      </SerifStatement>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8 dot-grid-light">
    <div className="relative z-10 w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">The time commitment</p>
      <h2 className="font-title text-3xl uppercase leading-[0.9] tracking-tight mb-6">
        <span className="text-light">That's</span><span className="highlight-green">it.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <NumberedItem num="90m" title="Per week" desc="Live working session together." />
        <NumberedItem num="½ day" title="Per month" desc="Deeper build - ship something real." />
        <NumberedItem num="+" title="Homework" desc="Building on your own between sessions." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        Hours become <span className="text-primary font-bold">minutes.</span> The tedious gets done automatically.
      </SerifStatement>
      <p className="font-serif text-base italic text-muted-foreground mt-8 max-w-3xl mx-auto">
        More of the work you love. Less of what drains you.
      </p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <Slide className="relative z-10">
      <div className="inline-block px-4 py-2 rounded-sm bg-primary text-primary-foreground font-display text-sm font-bold tracking-widest uppercase mb-5">The AI Lab</div>
      <BigText>It's the <span className="highlight-green">beginning.</span></BigText>
      <p className="mt-6 text-muted-foreground font-light leading-relaxed text-base">
        The first cohort becomes the teachers for everyone else.
      </p>
    </Slide>
  </div>,
];

const closingMobile = [
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full px-8 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-7 mb-10 mx-auto invert" />
      <p className="font-serif text-base italic text-light-muted mb-8">6 things the 2% are watching. One invitation.</p>
      <div className="space-y-4 text-left">
        {[
          { Icon: IconFastForward, num: "01", topic: "Expectations have shifted.", title: "Good enough, right now." },
          { Icon: IconStacks, num: "02", topic: "AI is taking over the doing.", title: "Pulled up the stack." },
          { Icon: IconOrgChart, num: "03", topic: "The org chart is dissolving.", title: "Leverage per person." },
          { Icon: IconAgent, num: "04", topic: "Agents are doing the work.", title: "Sell outcomes." },
          { Icon: IconIdentity, num: "05", topic: "The workforce is shifting.", title: "Belonging is expanding." },
          { Icon: IconTarget, num: "06", topic: "The buyer isn't a person anymore.", title: "What machines can't evaluate." },
        ].map(({ Icon, num, topic, title }) => (
          <div key={num} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-brand-green/10 flex items-center justify-center">
              <Icon size={22} className="text-brand-green" />
            </div>
            <div>
              <p className="text-light-muted text-[10px] font-light">{num} - {topic}</p>
              <h3 className="font-title text-sm uppercase tracking-tight leading-tight mt-0.5 text-light">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        The companies that win build the <span className="text-primary font-bold">muscle to adapt continuously.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">That's what the AI Lab is for.</p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-serif text-xl italic text-foreground leading-snug mb-6">
          If any of this gets you excited - or even just curious - that's enough.
        </p>
        <div className="border-l-4 border-primary/40 pl-5 mb-6 space-y-3">
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            You don't need to be an AI expert. You just need to <span className="text-foreground font-medium">want to learn.</span>
          </p>
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            And if this round isn't right, that's OK too - more cohorts are coming.
          </p>
        </div>
        <p className="font-serif text-lg italic text-muted-foreground">This is just the beginning.</p>
      </div>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid-bold glow-br overflow-hidden">
    <Slide className="relative z-10 text-center">
      <BigText>Let's go build<br />some <span className="highlight-green">cool things.</span></BigText>
      <p className="font-serif text-lg italic text-muted-foreground mt-8 max-w-2xl mx-auto">
        Apply for the AI Lab. We'd love to have you.
      </p>
    </Slide>
  </div>,
];

/* ─── Config ─── */

const bbAndAi: PresentationConfig = {
  slug: "bb-and-ai-v2",
  title: "Don't miss this. - Brand Blvd AI Lab",
  description: "Why I started the AI Lab, and why I want as many of you in it as possible.",
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
      id: "expectations",
      label: "Expectations",
      icon: IconFastForward,
      desktopSlides: expectationsDesktop,
      mobileSlides: expectationsMobile,
    },
    {
      id: "human-value",
      label: "The Doing",
      icon: IconStacks,
      desktopSlides: humanValueDesktop,
      mobileSlides: humanValueMobile,
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
      id: "identity",
      label: "Workforce",
      icon: IconIdentity,
      desktopSlides: identityDesktop,
      mobileSlides: identityMobile,
    },
    {
      id: "buyers",
      label: "Buyers",
      icon: IconTarget,
      desktopSlides: buyersDesktop,
      mobileSlides: buyersMobile,
    },
    {
      id: "ai-lab",
      label: "The AI Lab",
      icon: IconAgent,
      desktopSlides: aiLabDesktop,
      mobileSlides: aiLabMobile,
    },
    {
      id: "closing",
      label: "Invitation",
      icon: IconClosing,
      desktopSlides: closingDesktop,
      mobileSlides: closingMobile,
    },
  ],

  articleComponent: ArticleSection,
  articleIcon: IconArticle,
  presenterNotesComponent: PresenterNotesSection,
};

export default bbAndAi;
