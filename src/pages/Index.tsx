import { ChevronsRight, FastForward, Quote } from "lucide-react";
import Section from "@/components/Section";
import GrowthChart from "@/components/GrowthChart";
import abstractSpeed from "@/assets/abstract-speed.jpg";
import abstractStack from "@/assets/abstract-stack.jpg";
import abstractIdentity from "@/assets/abstract-identity.jpg";

/* ─── Reusable slide layouts ─── */

const Slide = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center ${className}`}>
    {children}
  </div>
);

const BigText = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">{children}</h1>
);

const SubText = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">{children}</p>
);

const ShiftLabel = ({ number, text }: { number: string; text: string }) => (
  <div className="space-y-6">
    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm tracking-widest uppercase">
      Shift #{number}
    </div>
    <BigText>{text}</BigText>
  </div>
);

const QuoteSlide = ({ quote, author, role }: { quote: string; author: string; role: string }) => (
  <Slide>
    <Quote className="w-8 h-8 text-primary/40 mb-6" />
    <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed max-w-3xl text-foreground/90">
      "{quote}"
    </blockquote>
    <p className="mt-8 text-sm text-muted-foreground tracking-wide">
      <span className="text-foreground font-medium">{author}</span> — {role}
    </p>
  </Slide>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center gap-2 p-6">
    <span className="text-4xl md:text-5xl font-bold text-primary">{value}</span>
    <span className="text-sm text-muted-foreground font-light tracking-wide">{label}</span>
  </div>
);

const BgImage = ({ src, opacity = "opacity-20" }: { src: string; opacity?: string }) => (
  <img
    src={src}
    alt=""
    className={`absolute inset-0 w-full h-full object-cover ${opacity} pointer-events-none select-none`}
  />
);

/* ─── Main presentation ─── */

const Index = () => {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide grain">
      {/* ═══════════════════════════════════════════
          SECTION 1: INSTANT IS THE NEW STANDARD
      ═══════════════════════════════════════════ */}
      <Section id="section-1">
        {/* 1.1 - Title */}
        <div className="relative w-full h-full flex items-center justify-center">
          <BgImage src={abstractSpeed} opacity="opacity-15" />
          <Slide className="relative z-10">
            <FastForward className="w-12 h-12 text-primary mb-8" strokeWidth={1.5} />
            <BigText>
              Instant is the<br />
              <span className="text-primary">new standard.</span>
            </BigText>
          </Slide>
        </div>

        {/* 1.2 - Compression */}
        <Slide>
          <SubText>
            AI is compressing time across everything.
          </SubText>
        </Slide>

        {/* 1.3 - Reality */}
        <Slide>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            AI tools have moved from <span className="text-foreground font-medium">novelty and nerdy</span> to{" "}
            <span className="text-foreground font-medium">household names</span>. They're training people to expect
            immediate results. Not faster.{" "}
            <span className="text-primary font-semibold">Immediate.</span>
          </p>
        </Slide>

        {/* 1.4 - Growth Chart */}
        <Slide>
          <GrowthChart />
        </Slide>

        {/* 1.5 - Stats */}
        <Slide>
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-10">Time to 100M Users</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <StatCard value="~4.5y" label="Facebook" />
            <StatCard value="~2.5y" label="Instagram" />
            <StatCard value="~9mo" label="TikTok" />
            <StatCard value="~2mo" label="ChatGPT" />
          </div>
        </Slide>

        {/* 1.6 - Investment data */}
        <Slide>
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-10">The Money Follows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl">
            {[
              { name: "OpenAI", stat: "$100B round · $850B valuation", note: "Largest single funding round in tech history" },
              { name: "Nvidia", stat: "$3T+ market cap", note: "Stock grew 200%+ in a single year on AI chip demand" },
              { name: "Lovable", stat: "$330M raised · 1 year old", note: "One of the largest early-stage AI-native rounds" },
              { name: "Anthropic", stat: "$30B at $380B valuation", note: "Revenue growing 10x annually, less than 3 years old" },
            ].map((item) => (
              <div key={item.name} className="p-5 rounded-xl bg-secondary/50 border border-border/50">
                <p className="text-primary font-semibold text-lg">{item.name}</p>
                <p className="text-foreground font-medium mt-1">{item.stat}</p>
                <p className="text-muted-foreground text-sm mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </Slide>

        {/* 1.7 - Examples */}
        <Slide>
          <div className="space-y-8 text-left max-w-2xl">
            {[
              { icon: "⚡", title: "Patience is collapsing", desc: "ChatGPT can help you compare car models immediately." },
              { icon: "✓", title: '"Good enough" is now immediate', desc: "Fast is better than perfect — i.e. NotebookLM." },
              { icon: "→", title: "Exploration cost is nearing 0", desc: '"Generate 3 themes for a campaign."' },
              { icon: "↑", title: "Self-sufficiency is increasing", desc: "AI can help people do everything now." },
            ].map((ex) => (
              <div key={ex.title} className="flex gap-4 items-start">
                <span className="text-2xl mt-0.5">{ex.icon}</span>
                <div>
                  <p className="text-foreground font-medium">{ex.title}</p>
                  <p className="text-muted-foreground text-sm">{ex.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Slide>

        {/* 1.8 - Rewiring */}
        <Slide>
          <BigText>
            AI is not just improving productivity.<br />
            <span className="text-primary">It's rewiring expectation.</span>
          </BigText>
        </Slide>

        {/* 1.9 - Analog world */}
        <Slide>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            If quotes take 48 hours. Proofs take 3 days. Reorders require email chains.{" "}
            <span className="text-foreground font-medium">That feels analog in a digital world.</span>{" "}
            Buyers will expect real-time pricing, proofs, and ordering;{" "}
            <span className="text-primary">delays will feel broken.</span>
          </p>
        </Slide>

        {/* 1.10 - Shift #1 */}
        <Slide>
          <ShiftLabel number="1" text="Instant is the new standard." />
          <p className="mt-8 text-muted-foreground font-light max-w-2xl leading-relaxed">
            Automate reorders, quoting, proofs, and standard workflows. We don't need to replace people — we need to remove unnecessary delay.
          </p>
        </Slide>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 2: HUMAN VALUE SHIFTS UP THE STACK
      ═══════════════════════════════════════════ */}
      <Section id="section-2">
        {/* 2.1 - Title */}
        <div className="relative w-full h-full flex items-center justify-center">
          <BgImage src={abstractStack} opacity="opacity-20" />
          <Slide className="relative z-10">
            <div className="flex gap-3 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border/50"
                  style={{
                    width: 40,
                    height: 12 + i * 10,
                    background: i === 4 ? "hsl(var(--primary))" : "hsl(var(--secondary))",
                  }}
                />
              ))}
            </div>
            <BigText>
              The "human value"<br />
              <span className="text-primary">shifts up the stack.</span>
            </BigText>
          </Slide>
        </div>

        {/* 2.2 - Taking over */}
        <Slide>
          <SubText>AI is taking over the "doing."</SubText>
        </Slide>

        {/* 2.3 - Reality */}
        <Slide>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            AI tools can do rule-based, repetitive, information-heavy tasks{" "}
            <span className="text-foreground font-medium">faster, cheaper, and at scale</span>. Transactional jobs are the most exposed.
            Even knowledge work is starting to get replaced.
          </p>
        </Slide>

        {/* 2.4 - Role shift */}
        <Slide>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl text-foreground/90">
            Our role as humans shifts up the stack. When things get done at a velocity like never before, we add value by knowing{" "}
            <span className="text-primary font-semibold">"what" to do</span>, not in "doing" it.
          </p>
        </Slide>

        {/* 2.5 - Quote: Nadella */}
        <QuoteSlide
          quote="The future of work is not about AI replacing people. It's about people who use AI replacing people who don't."
          author="Satya Nadella"
          role="CEO, Microsoft"
        />

        {/* 2.6 - Quote: Benioff */}
        <QuoteSlide
          quote="The real value of AI is helping salespeople spend more time with customers and less time doing administrative work."
          author="Marc Benioff"
          role="CEO, Salesforce"
        />

        {/* 2.7 - Quote: Amodei */}
        <QuoteSlide
          quote="We'll be there in 3-6 months, where AI is writing 90% of the code — and in 12 months, AI writes all of it essentially."
          author="Dario Amodei"
          role="CEO, Anthropic"
        />

        {/* 2.8 - Industry disruption */}
        <Slide>
          <div className="space-y-6 text-left max-w-2xl">
            <p className="text-foreground font-medium text-lg">Order-taking will be commoditized — or self-serve.</p>
            <p className="text-muted-foreground font-light">
              AI-empowered systems will draft proposals, generate pricing comparisons, and source products instantly.
            </p>
            <p className="text-muted-foreground font-light">
              Industries like travel and retail already eliminated transactional middlemen when search became automated.
            </p>
            <p className="text-primary font-medium">
              If we are just order-takers, we'll be beaten out by alternatives that make it easier and quicker.
            </p>
          </div>
        </Slide>

        {/* 2.9 - Shift #2 */}
        <Slide>
          <ShiftLabel number="2" text="Death of transactional sales." />
          <p className="mt-8 text-muted-foreground font-light max-w-2xl leading-relaxed">
            Evolve from "order takers" to collaborators and advisors. We win on framing, interpretation, judgement, context, and strategy — not on sending catalogues.
          </p>
        </Slide>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 3: IDENTITY > EMPLOYMENT
      ═══════════════════════════════════════════ */}
      <Section id="section-3">
        {/* 3.1 - Title */}
        <div className="relative w-full h-full flex items-center justify-center">
          <BgImage src={abstractIdentity} opacity="opacity-25" />
          <Slide className="relative z-10">
            {/* Two circles visual */}
            <div className="flex items-center gap-10 mb-10">
              <div className="w-28 h-28 rounded-full border-2 border-primary/60" />
              <div className="w-16 h-16 rounded-full border-2 border-accent/60" />
            </div>
            <BigText>
              Identity &gt;<br />
              <span className="text-primary">Employment.</span>
            </BigText>
          </Slide>
        </div>

        {/* 3.2 - Restructure */}
        <Slide>
          <SubText>AI will restructure the relationship between employers and employees.</SubText>
        </Slide>

        {/* 3.3 - Stats */}
        <Slide>
          <div className="space-y-10">
            {[
              { stat: "80%", desc: "of workers believe AI will impact their daily work tasks" },
              { stat: "50%", desc: "of workers who use AI worry their job could be automated" },
              { stat: "76,440", desc: "jobs eliminated in 2025 in data entry, telemarketing, admin" },
            ].map((item) => (
              <div key={item.stat} className="flex items-baseline gap-4">
                <span className="text-4xl md:text-5xl font-bold text-primary">{item.stat}</span>
                <span className="text-muted-foreground font-light text-left">{item.desc}</span>
              </div>
            ))}
          </div>
        </Slide>

        {/* 3.4 - But merch doesn't go away */}
        <Slide>
          <BigText>
            That doesn't mean<br />
            merch and swag<br />
            <span className="text-accent">go away.</span>
          </BigText>
        </Slide>

        {/* 3.5 - Belonging shift */}
        <Slide>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl text-foreground/90">
            As AI reshapes work, <span className="text-foreground font-medium">belonging will shift</span> from employer identity to{" "}
            <span className="text-primary font-semibold">community identity.</span>
          </p>
        </Slide>

        {/* 3.6 - Shift #3 */}
        <Slide>
          <ShiftLabel number="3" text="Identity-driven community merch." />
          <div className="mt-8 space-y-4 text-muted-foreground font-light max-w-2xl text-left">
            <p>Internal merch must become more <span className="text-foreground font-medium">intentional</span>. External merch must become more <span className="text-foreground font-medium">tribal</span>.</p>
            <p>We can help companies build tribes — customers, advocates, insiders, power users, culture ambassadors.</p>
            <p className="text-primary font-medium">Merch becomes badge signalling, not office swag. Move from "gifting employees" to "manufacturing belonging."</p>
          </div>
        </Slide>

        {/* 3.7 - Closing */}
        <Slide>
          <div className="space-y-6">
            <ChevronsRight className="w-10 h-10 text-primary mx-auto" strokeWidth={1.5} />
            <p className="text-2xl md:text-3xl font-light text-muted-foreground">
              The future is already here.
            </p>
            <BigText>
              <span className="text-primary">Move with it.</span>
            </BigText>
          </div>
        </Slide>
      </Section>

      {/* Vertical section indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        {[1, 2, 3].map((i) => (
          <a
            key={i}
            href={`#section-${i}`}
            className="w-1 h-8 rounded-full bg-muted-foreground/20 hover:bg-primary/50 transition-colors"
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
