import { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronsRight, Quote } from "lucide-react";
import { SECTION_ICONS, SECTION_LABELS, IconHome, IconFastForward, IconStacks, IconIdentity, IconClosing } from "@/components/SectionIcons";
import Section from "@/components/Section";
import CursorNav from "@/components/CursorNav";
import GrowthChart from "@/components/GrowthChart";
import { useIsMobile } from "@/hooks/use-mobile";
import abstractSpeed from "@/assets/abstract-speed.jpg";
import abstractStack from "@/assets/abstract-stack.jpg";
import abstractIdentity from "@/assets/abstract-identity.jpg";
import bbLogoHorizontal from "@/assets/bb-logo-horizontal-white.svg";
import bbMonogram from "@/assets/bb-monogram-white.svg";

const SECTION_NAMES = ["title", "instant", "human-value", "identity", "closing"] as const;

/* ─── Reusable slide layouts ─── */

const Slide = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center px-8 md:px-20 lg:px-32 ${className}`}>
    {children}
  </div>
);

const BigText = ({ children }: { children: React.ReactNode }) => (
  <h1 className="font-title text-4xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[1.05] break-words">{children}</h1>
);

const SerifStatement = ({ children }: { children: React.ReactNode }) => (
  <p className="font-serif text-2xl md:text-4xl lg:text-5xl italic leading-snug max-w-5xl">{children}</p>
);

const SectionOpener = ({ superTitle, title, icon: Icon }: { number?: string; superTitle: string; title: React.ReactNode; icon?: React.ComponentType<{ size?: number; className?: string }> }) => (
  <div className="relative w-full h-full flex items-center dot-grid overflow-hidden">
    {Icon && (
      <div className="absolute right-[-2rem] md:right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.04]">
        <Icon size={500} className="text-foreground w-[280px] h-[280px] md:w-[500px] md:h-[500px]" />
      </div>
    )}
    <img src={bbMonogram} alt="BB" className="absolute bottom-8 left-8 md:left-20 lg:left-32 h-8 md:h-10 opacity-40 z-10" />
    <div className="relative z-10 px-8 md:px-20 lg:px-32 text-left max-w-5xl">
      {Icon && (
        <div className="mb-6">
          <Icon size={28} className="text-primary" />
        </div>
      )}
      <p className="font-display text-sm md:text-base uppercase tracking-[0.35em] text-muted-foreground font-bold mb-8">{superTitle}</p>
      <h1 className="font-title text-4xl md:text-7xl lg:text-8xl uppercase leading-[1.15] tracking-tight break-words">{title}</h1>
    </div>
  </div>
);

const GridCard = ({ superTitle, title, body }: { superTitle: string; title: string; body: string }) => (
  <div className="text-left accent-bar">
    <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">{superTitle}</p>
    <h3 className="font-display text-xl md:text-2xl font-extrabold uppercase leading-tight mb-3">{title}</h3>
    <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">{body}</p>
  </div>
);

const NumberedItem = ({ num, title, desc }: { num: string; title: string; desc: string }) => (
  <div className="flex gap-3 md:gap-4 items-start text-left">
    <span className="font-display text-4xl md:text-6xl font-black text-primary/80 leading-none shrink-0">{num}</span>
    <div>
      <h3 className="font-display text-lg md:text-xl font-extrabold uppercase leading-tight">{title}</h3>
      <p className="text-sm md:text-base font-light leading-relaxed mt-1 opacity-70">{desc}</p>
    </div>
  </div>
);

const WhiteSlide = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full h-full bg-white text-gray-900 flex items-center justify-center px-8 md:px-20 lg:px-32 ${className}`}>
    <div className="w-full max-w-6xl">{children}</div>
  </div>
);

const BgImage = ({ src, opacity = "opacity-20" }: { src: string; opacity?: string }) => (
  <img src={src} alt="" className={`absolute inset-0 w-full h-full object-cover ${opacity} pointer-events-none select-none`} />
);

/* ─── Mobile snap section wrapper ─── */
const MobileSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`h-screen w-full snap-start flex-shrink-0 flex items-center justify-center overflow-hidden ${className}`}>
    {children}
  </section>
);

/* ─── Main presentation ─── */

const TOTAL_SECTIONS = 5;

const Index = () => {
  const { section: paramSection, slide: paramSlide } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState(() => {
    const idx = SECTION_NAMES.indexOf(paramSection as any);
    return idx >= 0 ? idx : 0;
  });
  const initialSlideRef = useRef(paramSlide ? parseInt(paramSlide, 10) - 1 : 0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<Record<number, number>>({});
  const [activeSlide, setActiveSlide] = useState(0);
  const slideTotals: Record<number, number> = { 0: 1, 1: 8, 2: 5, 3: 6, 4: 1 };
  const isScrolling = useRef(false);

  const updateUrl = useCallback((sectionIdx: number, slideIdx: number) => {
    const name = SECTION_NAMES[sectionIdx] || "title";
    const path = slideIdx > 0 ? `/${name}/${slideIdx + 1}` : `/${name}`;
    navigate(path, { replace: true });
  }, [navigate]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = () => {
      const index = Math.round(el.scrollTop / el.clientHeight);
      setActiveSection(index);
      if (!isMobile) {
        setActiveSlide(slidesRef.current[index] || 0);
        updateUrl(index, slidesRef.current[index] || 0);
      }
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, [updateUrl, isMobile]);

  useEffect(() => {
    const idx = SECTION_NAMES.indexOf(paramSection as any);
    if (idx > 0) {
      const el = document.getElementById(`section-${SECTION_NAMES[idx]}`);
      el?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSlideChange = useCallback((sectionIdx: number) => (slideIdx: number) => {
    slidesRef.current[sectionIdx] = slideIdx;
    setActiveSlide(slideIdx);
    updateUrl(sectionIdx, slideIdx);
  }, [updateUrl]);

  const goToSection = (index: number, resetSlide = true) => {
    const clamped = Math.max(0, Math.min(index, TOTAL_SECTIONS - 1));
    const el = document.getElementById(`section-${SECTION_NAMES[clamped]}`);
    if (resetSlide) {
      // Reset horizontal scroll INSTANTLY before the vertical scroll happens
      const scroller = el?.querySelector("[data-slide-scroller]") as HTMLElement | null;
      if (scroller) scroller.scrollTo({ left: 0, behavior: "instant" as ScrollBehavior });
    }
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigate = useCallback((dir: "left" | "right" | "up" | "down") => {
    if (dir === "up" || dir === "down") return;

    // Read active section directly from DOM to avoid stale state
    const container = containerRef.current;
    if (!container) return;
    const currentSectionIdx = Math.round(container.scrollTop / container.clientHeight);

    const section = document.getElementById(`section-${SECTION_NAMES[currentSectionIdx]}`);
    const scroller = section?.querySelector("[data-slide-scroller]") as HTMLElement | null;
    const currentSlide = scroller ? Math.round(scroller.scrollLeft / scroller.clientWidth) : 0;
    const totalSlides = slideTotals[currentSectionIdx] || 1;

    if (dir === "right") {
      if (currentSlide < totalSlides - 1 && scroller) {
        scroller.scrollTo({ left: (currentSlide + 1) * scroller.clientWidth, behavior: "smooth" });
      } else if (currentSectionIdx < TOTAL_SECTIONS - 1) {
        goToSection(currentSectionIdx + 1, true);
      }
    } else {
      if (currentSlide > 0 && scroller) {
        scroller.scrollTo({ left: (currentSlide - 1) * scroller.clientWidth, behavior: "smooth" });
      } else if (currentSectionIdx > 0) {
        // Pre-scroll the previous section to its last slide INSTANTLY before navigating
        const prevSection = document.getElementById(`section-${SECTION_NAMES[currentSectionIdx - 1]}`);
        const prevScroller = prevSection?.querySelector("[data-slide-scroller]") as HTMLElement | null;
        if (prevScroller) {
          const prevTotal = slideTotals[currentSectionIdx - 1] || 1;
          prevScroller.scrollTo({ left: (prevTotal - 1) * prevScroller.clientWidth, behavior: "instant" as ScrollBehavior });
        }
        prevSection?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  /* ─── All slide content as flat array for mobile ─── */
  const allSlides = [
    // TITLE
    <section key="title" id="section-title" className="relative h-screen snap-start flex-shrink-0 flex items-center justify-center dot-grid-bold glow-br overflow-hidden">
      <div className="absolute right-0 bottom-0 font-display text-[30rem] font-black text-foreground/[0.03] leading-none select-none pointer-events-none">
        AI
      </div>
      <div className="relative z-10 px-8 md:px-20 lg:px-32 text-left max-w-5xl">
        <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-10 md:h-14 mb-12" />
        <h1 className="font-title text-5xl md:text-8xl lg:text-9xl uppercase leading-[1.05] tracking-tight">
          The Future<br />of <span className="highlight-green">AI.</span>
        </h1>
        <p className="font-serif text-xl md:text-2xl italic text-muted-foreground mt-8 max-w-2xl">
          How artificial intelligence is reshaping expectations, value, and identity - and what it means for us.
        </p>
      </div>
    </section>,

    // SECTION 1 slides
    <MobileSection key="1-1">
      <SectionOpener icon={IconFastForward} number="01" superTitle="The Future of AI" title={<>AI is compressing time<br />across <span className="highlight-green">everything.</span></>} />
    </MobileSection>,

    <MobileSection key="1-2" className="relative diagonal-lines">
      <BgImage src={abstractSpeed} opacity="opacity-[0.04]" />
      <Slide className="relative z-10">
        <SerifStatement>
          AI tools have moved from novelty to <span className="text-primary">household names</span>.
          They're training people to expect immediate results.
          Not faster. <span className="text-primary font-bold">Immediate.</span>
        </SerifStatement>
      </Slide>
    </MobileSection>,

    <MobileSection key="1-3">
      <Slide><GrowthChart /></Slide>
    </MobileSection>,


    <MobileSection key="1-5" className="relative dot-grid">
      <div className="relative z-10 w-full max-w-6xl px-8">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-8">Investment Signals</p>
        <div className="grid grid-cols-1 gap-y-8">
          <GridCard superTitle="OpenAI" title="$100B Round · $850B Valuation." body="Largest single funding round in technology history." />
          <GridCard superTitle="Nvidia" title="$3T+ Market Cap." body="Stock grew 200%+ in a single year on AI chip demand." />
          <GridCard superTitle="Lovable" title="$330M Raised · 1 Year Old." body="One of the largest early-stage rounds for an AI-native dev platform." />
          <GridCard superTitle="Anthropic" title="$30B at $380B Valuation." body="Revenue growing 10x annually, less than 3 years old." />
        </div>
      </div>
    </MobileSection>,

    <MobileSection key="1-6" className="bg-white text-gray-900">
      <div className="w-full max-w-6xl px-8">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">What's Changing</p>
        <h2 className="font-title text-4xl md:text-5xl uppercase leading-[0.9] tracking-tight mb-8 break-words">
          <span className="text-gray-900">Expectation</span><br className="md:hidden" /><span className="highlight-green">Shifts</span>
        </h2>
        <div className="grid grid-cols-1 gap-y-6">
          <NumberedItem num="1" title="Patience is collapsing" desc="ChatGPT can help you compare car models immediately." />
          <NumberedItem num="2" title={'"Good enough" is immediate'} desc="Fast is better than perfect - i.e. NotebookLM." />
          <NumberedItem num="3" title="Exploration cost is nearing 0" desc='"Generate 3 themes for a campaign."' />
          <NumberedItem num="4" title="Self-sufficiency is increasing" desc="AI can help people do everything now." />
        </div>
      </div>
    </MobileSection>,

    <MobileSection key="1-7" className="relative cross-grid">
      <Slide>
        <SerifStatement>
          AI is not just improving productivity. <span className="text-primary font-bold">It's rewiring expectation.</span>
        </SerifStatement>
        <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">The speed of AI is setting the speed of everything.</p>
      </Slide>
    </MobileSection>,

    <MobileSection key="1-8" className="relative diagonal-lines">
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
    </MobileSection>,

    <MobileSection key="1-9" className="relative dot-grid overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] md:text-[20rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">01</div>
      <Slide className="relative z-10">
        <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #1</div>
        <BigText>Instant is the<br />new <span className="highlight-green">standard.</span></BigText>
        <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
          Automate reorders, quoting, proofs, and standard workflows. Remove unnecessary delay.
        </p>
      </Slide>
    </MobileSection>,

    // SECTION 2 slides
    <MobileSection key="2-1">
      <SectionOpener icon={IconStacks} number="02" superTitle="The Future of AI" title={<>AI is taking over<br />the <span className="highlight-green">"doing."</span></>} />
    </MobileSection>,

    <MobileSection key="2-2" className="relative cross-grid">
      <BgImage src={abstractStack} opacity="opacity-[0.05]" />
      <Slide className="relative z-10">
        <SerifStatement>
          AI can do rule-based, repetitive, information-heavy tasks <span className="text-primary">faster, cheaper, and at scale</span>.
          Our role shifts to knowing <span className="text-primary font-bold">"what" to do</span>, not in "doing" it.
        </SerifStatement>
        <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">The human role shifts up the stack.</p>
      </Slide>
    </MobileSection>,

    <MobileSection key="2-3" className="bg-white text-gray-900 cross-grid-light">
      <div className="w-full max-w-6xl px-8 relative z-10">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-10">Industry Leaders</p>
        <div className="grid grid-cols-1 gap-8">
          {[
            { quote: "The future of work is not about AI replacing people. It's about people who use AI replacing people who don't.", author: "Satya Nadella", role: "CEO, Microsoft" },
            { quote: "The real value of AI is helping salespeople spend more time with customers and less time doing administrative work.", author: "Marc Benioff", role: "CEO, Salesforce" },
             { quote: "We'll be there in 3-6 months, where AI is writing 90% of the code - and in 12 months, AI writes all of it.", author: "Dario Amodei", role: "CEO, Anthropic" },
          ].map((q) => (
            <div key={q.author} className="text-left border-l-4 border-brand-green pl-4">
              <Quote className="w-5 h-5 text-brand-green mb-3" />
              <p className="font-serif text-lg italic leading-relaxed text-gray-700 mb-3">"{q.quote}"</p>
              <p className="text-sm text-gray-500">
                 <span className="text-brand-green font-bold">{q.author}</span> - {q.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MobileSection>,

    <MobileSection key="2-4" className="bg-white text-gray-900">
      <div className="w-full max-w-6xl px-8">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Industry Reality</p>
        <h2 className="font-title text-4xl md:text-5xl uppercase leading-[0.9] tracking-tight mb-8 break-words">
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
    </MobileSection>,

    <MobileSection key="2-5" className="relative dot-grid overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] md:text-[20rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">02</div>
      <Slide className="relative z-10">
        <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #2</div>
        <BigText>Death of<br />transactional <span className="highlight-green">sales.</span></BigText>
        <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
           We win on framing, interpretation, judgement, context, and strategy - not on sending catalogues.
        </p>
      </Slide>
    </MobileSection>,

    // SECTION 3 slides
    <MobileSection key="3-1">
      <SectionOpener icon={IconIdentity} number="03" superTitle="The Future of AI" title={<>AI will restructure<br />the employer-employee <span className="highlight-green">relationship.</span></>} />
    </MobileSection>,

    <MobileSection key="3-2" className="relative diagonal-lines">
      <BgImage src={abstractIdentity} opacity="opacity-[0.05]" />
      <Slide className="relative z-10">
        <SerifStatement>
          AI will change workforce structures, whether through efficiency gains, consolidation or augmentation.
          The workforce <span className="text-primary font-bold">will</span> shift. It's not a question of "if" but one of <span className="text-primary">"when."</span>
        </SerifStatement>
      </Slide>
    </MobileSection>,

    <MobileSection key="3-3" className="bg-white text-gray-900">
      <div className="w-full max-w-6xl px-8">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-6">Workforce Data</p>
        <h2 className="font-title text-4xl md:text-5xl uppercase leading-[0.9] tracking-tight mb-8">
          <span className="text-gray-900">The</span><span className="highlight-green">Numbers</span>
        </h2>
        <div className="grid grid-cols-1 gap-y-6">
          <NumberedItem num="80%" title="Believe AI will impact their daily work" desc="Workers surveyed about AI's effect on their tasks." />
          <NumberedItem num="50%" title="Worry their job could be automated" desc="Workers who already use AI at work." />
          <NumberedItem num="76K+" title="Jobs eliminated in 2025" desc="Data entry, telemarketing, and admin support roles." />
        </div>
      </div>
    </MobileSection>,

    <MobileSection key="3-4" className="bg-white text-gray-900 diagonal-lines-light">
      <div className="relative z-10 text-center px-8">
        <p className="font-serif text-2xl md:text-3xl italic leading-snug max-w-5xl mx-auto text-gray-800">
          That doesn't mean merch and swag <span className="text-brand-green font-bold">go away.</span>
        </p>
        <p className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mt-10 font-bold">
          As AI reshapes work, belonging shifts from employer identity to community identity.
        </p>
      </div>
    </MobileSection>,

    <MobileSection key="3-5" className="relative dot-grid">
      <div className="relative z-10 w-full max-w-6xl px-8">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">The Opportunity</p>
        <div className="grid grid-cols-1 gap-8">
          <GridCard superTitle="Internal" title="More intentional." body="Merch must reflect culture and values, not just fill closets." />
           <GridCard superTitle="External" title="More tribal." body="Build tribes - customers, advocates, insiders, power users, culture ambassadors." />
          <GridCard superTitle="Identity" title="Badge signalling." body="Move from 'gifting employees' to 'manufacturing belonging.'" />
        </div>
      </div>
    </MobileSection>,

    <MobileSection key="3-6" className="relative dot-grid overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[12rem] md:text-[20rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">03</div>
      <Slide className="relative z-10">
        <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #3</div>
        <BigText>Identity-driven<br />community <span className="highlight-green">merch.</span></BigText>
        <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg">
          Merch becomes badge signalling, not office swag. Move from "gifting employees" to "manufacturing belonging."
        </p>
      </Slide>
    </MobileSection>,

    // CLOSING section
    <MobileSection key="4-1" className="bg-white text-gray-900 dot-grid-light">
      <div className="relative z-10 w-full px-8 text-center">
        <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-7 mb-10 mx-auto invert" />
        <div className="space-y-8">
          <div>
            <IconFastForward size={28} className="text-brand-green mx-auto mb-2" />
            <p className="text-gray-500 text-xs font-light">AI is compressing time across everything.</p>
            <h3 className="font-title text-xl uppercase tracking-tight leading-tight mt-1 text-gray-900">Instant is the new <span className="highlight-green">standard.</span></h3>
          </div>
          <div>
            <IconStacks size={28} className="text-brand-green mx-auto mb-2" />
            <p className="text-gray-500 text-xs font-light">AI is taking over the "doing."</p>
            <h3 className="font-title text-xl uppercase tracking-tight leading-tight mt-1 text-gray-900">Death of transactional <span className="highlight-green">sales.</span></h3>
          </div>
          <div>
            <IconIdentity size={28} className="text-brand-green mx-auto mb-2" />
            <p className="text-gray-500 text-xs font-light">AI will restructure the employer-employee relationship.</p>
            <h3 className="font-title text-xl uppercase tracking-tight leading-tight mt-1 text-gray-900">Identity-driven community <span className="highlight-green">merch.</span></h3>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="font-serif text-lg italic text-gray-600 mb-2">The shift isn't coming.</p>
          <h2 className="font-title text-3xl uppercase tracking-tight">
            It's <span className="highlight-green inline-block">here.</span>
          </h2>
        </div>
      </div>
    </MobileSection>,
  ];

  return (
    <div ref={containerRef} className={`h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide grain ${isMobile ? '' : 'cursor-none'}`}>

      {isMobile ? (
        /* ─── MOBILE: simple vertical snap scroll ─── */
        <>{allSlides}</>
      ) : (
        /* ─── DESKTOP: original horizontal+vertical navigation ─── */
        <>

      {/* TITLE PAGE */}
      <section id="section-title" className="relative h-screen snap-start flex-shrink-0 flex items-center justify-center dot-grid-bold glow-br overflow-hidden">
        <div className="absolute right-0 bottom-0 font-display text-[30rem] font-black text-foreground/[0.03] leading-none select-none pointer-events-none">
          AI
        </div>
        <div className="relative z-10 px-8 md:px-20 lg:px-32 text-left max-w-5xl">
          <div className="flex items-center gap-4 mb-12">
            <IconHome size={28} className="text-primary" />
            <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-10 md:h-14" />
          </div>
          <h1 className="font-title text-6xl md:text-8xl lg:text-9xl uppercase leading-[1.05] tracking-tight">
            The Future<br />of <span className="highlight-green">AI.</span>
          </h1>
          <p className="font-serif text-xl md:text-2xl italic text-muted-foreground mt-8 max-w-2xl">
            How artificial intelligence is reshaping expectations, value, and identity - and what it means for us.
          </p>
        </div>
      </section>

      {/* SECTION 1: INSTANT IS THE NEW STANDARD */}
      <Section id="section-instant" onSlideChange={handleSlideChange(1)} initialSlide={activeSection === 1 ? initialSlideRef.current : 0}>
        <SectionOpener icon={IconFastForward} number="01" superTitle="The Future of AI" title={<>AI is compressing time<br />across <span className="highlight-green">everything.</span></>} />

        <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
          <BgImage src={abstractSpeed} opacity="opacity-[0.04]" />
          <Slide className="relative z-10">
            <SerifStatement>
              AI tools have moved from novelty to <span className="text-primary">household names</span>.
              They're training people to expect immediate results.
              Not faster. <span className="text-primary font-bold">Immediate.</span>
            </SerifStatement>
          </Slide>
        </div>

        <Slide><GrowthChart /></Slide>


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
        </div>

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
        </WhiteSlide>

        <div className="relative w-full h-full flex items-center justify-center cross-grid">
          <Slide>
            <SerifStatement>
              AI is not just improving productivity. <span className="text-primary font-bold">It's rewiring expectation.</span>
            </SerifStatement>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">The speed of AI is setting the speed of everything.</p>
          </Slide>
        </div>

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
        </div>

        <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">01</div>
          <Slide className="relative z-10">
            <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #1</div>
            <BigText>Instant is the<br />new <span className="highlight-green">standard.</span></BigText>
            <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
              Automate reorders, quoting, proofs, and standard workflows. Remove unnecessary delay. Operational excellence buys us the right to be strategic where it matters.
            </p>
          </Slide>
        </div>
      </Section>

      {/* SECTION 2: HUMAN VALUE SHIFTS UP THE STACK */}
      <Section id="section-human-value" onSlideChange={handleSlideChange(2)} initialSlide={activeSection === 2 ? initialSlideRef.current : 0}>
        <SectionOpener icon={IconStacks} number="02" superTitle="The Future of AI" title={<>AI is taking over<br />the <span className="highlight-green">"doing."</span></>} />

        <div className="relative w-full h-full flex items-center justify-center cross-grid">
          <BgImage src={abstractStack} opacity="opacity-[0.05]" />
           <Slide className="relative z-10">
             <SerifStatement>
               AI can do rule-based, repetitive, information-heavy tasks <span className="text-primary">faster, cheaper, and at scale</span>.
               Our role shifts to knowing <span className="text-primary font-bold">"what" to do</span>, not in "doing" it.
             </SerifStatement>
             <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">The human role shifts up the stack.</p>
           </Slide>
        </div>

        <WhiteSlide className="cross-grid-light">
          <div className="relative z-10">
            <p className="font-display text-sm uppercase tracking-[0.35em] text-gray-500 font-bold mb-10">Industry Leaders</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { quote: "The future of work is not about AI replacing people. It's about people who use AI replacing people who don't.", author: "Satya Nadella", role: "CEO, Microsoft" },
                { quote: "The real value of AI is helping salespeople spend more time with customers and less time doing administrative work.", author: "Marc Benioff", role: "CEO, Salesforce" },
                { quote: "We'll be there in 3-6 months, where AI is writing 90% of the code - and in 12 months, AI writes all of it.", author: "Dario Amodei", role: "CEO, Anthropic" },
              ].map((q) => (
                <div key={q.author} className="text-left border-l-4 border-brand-green pl-4">
                  <Quote className="w-6 h-6 text-brand-green mb-4" />
                  <p className="font-serif text-lg md:text-xl italic leading-relaxed text-gray-700 mb-4">"{q.quote}"</p>
                  <p className="text-sm text-gray-500">
                    <span className="text-brand-green font-bold">{q.author}</span> - {q.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </WhiteSlide>

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
        </WhiteSlide>

        <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">02</div>
          <Slide className="relative z-10">
            <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #2</div>
            <BigText>Death of<br />transactional <span className="highlight-green">sales.</span></BigText>
            <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
              We win on framing, interpretation, judgement, context, and strategy - not on sending catalogues.
            </p>
          </Slide>
        </div>
      </Section>

      {/* SECTION 3: IDENTITY > EMPLOYMENT */}
      <Section id="section-identity" onSlideChange={handleSlideChange(3)} initialSlide={activeSection === 3 ? initialSlideRef.current : 0}>
        <SectionOpener icon={IconIdentity} number="03" superTitle="The Future of AI" title={<>AI will restructure<br />the employer-employee <span className="highlight-green">relationship.</span></>} />

        <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
          <BgImage src={abstractIdentity} opacity="opacity-[0.05]" />
          <Slide className="relative z-10">
            <SerifStatement>
              AI will change workforce structures, whether through efficiency gains, consolidation or augmentation.
              The workforce <span className="text-primary font-bold">will</span> shift. It's not a question of "if" but one of <span className="text-primary">"when."</span>
            </SerifStatement>
          </Slide>
        </div>

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
        </WhiteSlide>

        <WhiteSlide className="diagonal-lines-light">
          <div className="relative z-10 text-center">
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl italic leading-snug max-w-5xl mx-auto text-gray-800">
              That doesn't mean merch and swag <span className="text-brand-green font-bold">go away.</span>
            </p>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mt-10 font-bold">
              As AI reshapes work, belonging shifts from employer identity to community identity.
            </p>
          </div>
        </WhiteSlide>

        <div className="relative w-full h-full flex items-center justify-center dot-grid">
          <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
            <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">The Opportunity</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <GridCard superTitle="Internal" title="More intentional." body="Merch must reflect culture and values, not just fill closets." />
              <GridCard superTitle="External" title="More tribal." body="Build tribes - customers, advocates, insiders, power users, culture ambassadors." />
              <GridCard superTitle="Identity" title="Badge signalling." body="Move from 'gifting employees' to 'manufacturing belonging.'" />
            </div>
          </div>
        </div>

        <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">03</div>
          <Slide className="relative z-10">
            <div className="inline-block px-5 py-2 rounded-sm bg-primary text-primary-foreground font-display text-base font-bold tracking-widest uppercase mb-6">Shift #3</div>
            <BigText>Identity-driven<br />community <span className="highlight-green">merch.</span></BigText>
            <p className="mt-8 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
              Merch becomes badge signalling, not office swag. Move from "gifting employees" to "manufacturing belonging."
            </p>
          </Slide>
        </div>

      </Section>

      {/* CLOSING SECTION */}
      <section id="section-closing" className="h-screen snap-start flex-shrink-0 bg-white text-gray-900 dot-grid-light flex items-center justify-center overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
          <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-8 md:h-10 mb-14 mx-auto invert" />
          <div className="space-y-12">
            <div>
              <IconFastForward size={36} className="text-brand-green mx-auto mb-3" />
              <p className="text-gray-500 text-sm md:text-base font-light">AI is compressing time across everything.</p>
              <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-gray-900">Instant is the new <span className="highlight-green">standard.</span></h3>
            </div>
            <div>
              <IconStacks size={36} className="text-brand-green mx-auto mb-3" />
              <p className="text-gray-500 text-sm md:text-base font-light">AI is taking over the "doing."</p>
              <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-gray-900">Death of transactional <span className="highlight-green">sales.</span></h3>
            </div>
            <div>
              <IconIdentity size={36} className="text-brand-green mx-auto mb-3" />
              <p className="text-gray-500 text-sm md:text-base font-light">AI will restructure the employer-employee relationship.</p>
              <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-1 text-gray-900">Identity-driven community <span className="highlight-green">merch.</span></h3>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="font-serif text-xl md:text-2xl italic text-gray-600 mb-2">The shift isn't coming.</p>
            <h2 className="font-title text-4xl md:text-6xl uppercase tracking-tight">
              It's <span className="highlight-green inline-block">here.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Vertical section nav */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col items-end gap-5 z-[60] cursor-default py-12 pr-6 pl-4">
        {SECTION_NAMES.map((name, i) => {
          const Icon = SECTION_ICONS[i];
          const isActive = i === activeSection;
          return (
            <button
              key={name}
              onClick={() => goToSection(i)}
              className={`flex items-center gap-2.5 group transition-all duration-300 cursor-none`}
              aria-label={`Go to ${SECTION_LABELS[i]}`}
            >
              <span
                className={`font-display text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive
                    ? "opacity-100 text-primary translate-x-0"
                    : "opacity-0 group-hover:opacity-60 translate-x-2 group-hover:translate-x-0 text-muted-foreground"
                }`}
              >
                {SECTION_LABELS[i]}
              </span>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-sm transition-all duration-300 ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground/30 hover:text-muted-foreground/60"
                }`}
              >
                <Icon size={16} />
              </div>
            </button>
          );
        })}
      </div>

      <CursorNav
        onNavigate={handleNavigate}
        canGo={{
          up: false,
          down: false,
          left: activeSlide > 0 || activeSection > 0,
          right: activeSlide < (slideTotals[activeSection] || 1) - 1 || activeSection < TOTAL_SECTIONS - 1,
        }}
      />
        </>
      )}
    </div>
  );
};

export default Index;
