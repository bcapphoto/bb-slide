/**
 * "Brand BB and AI" Presentation
 *
 * Team-facing kickoff for the AI Lab pilot.
 * Reframed around the 3-group AI usage split - invitation, not ultimatum.
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
  IconRocket,
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

/* ─── 3-group AI usage distribution (60-70% / 20-30% / <5%) ─── */
const ThreeGroupChart = ({ compact = false }: { compact?: boolean }) => {
  // Representative mid-points: 65 / 30 / 5 = 100
  const groups = [
    { pct: "60-70%", label: "Surface", desc: "A smarter Google.", val: 65, tone: "muted" },
    { pct: "20-30%", label: "Productivity", desc: "Drafting, summarizing.", val: 30, tone: "secondary" },
    { pct: "<5%", label: "Real leverage", desc: "Building agents & skills.", val: 5, tone: "primary" },
  ];

  // Build pie slices starting at 12 o'clock, going clockwise
  const cx = 100;
  const cy = 100;
  const r = 90;
  let cumulative = 0;
  const slices = groups.map((g) => {
    const startAngle = (cumulative / 100) * 360;
    cumulative += g.val;
    const endAngle = (cumulative / 100) * 360;
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    const toRad = (deg: number) => ((deg - 90) * Math.PI) / 180;
    const x1 = cx + r * Math.cos(toRad(startAngle));
    const y1 = cy + r * Math.sin(toRad(startAngle));
    const x2 = cx + r * Math.cos(toRad(endAngle));
    const y2 = cy + r * Math.sin(toRad(endAngle));
    const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    // Label positioning at midpoint of arc
    const midAngle = (startAngle + endAngle) / 2;
    const labelR = g.tone === "primary" ? r + 14 : r * 0.6;
    const lx = cx + labelR * Math.cos(toRad(midAngle));
    const ly = cy + labelR * Math.sin(toRad(midAngle));
    return { ...g, d, lx, ly };
  });

  // Uses currentColor so the chart reads on both dark and light backgrounds
  // (parent sets text-foreground on dark slides or text-light on light slides)
  const size = compact ? "max-w-sm" : "max-w-md";
  return (
    <div className={`w-full ${size} mx-auto flex flex-col items-center gap-6`}>
      <svg viewBox="0 0 220 220" className="w-full">
        {slices.map((s) => (
          <path
            key={s.label}
            d={s.d}
            className={s.tone === "primary" ? "fill-primary" : ""}
            style={
              s.tone === "primary"
                ? undefined
                : { fill: "currentColor", opacity: s.tone === "secondary" ? 0.4 : 0.15 }
            }
            stroke="currentColor"
            strokeOpacity={0.25}
            strokeWidth={1}
          />
        ))}
        {/* Pull-out line for the <5% slice */}
        <line
          x1={110}
          y1={38}
          x2={145}
          y2={18}
          stroke="currentColor"
          strokeOpacity={0.5}
          strokeWidth={1}
        />
      </svg>

      <div className="w-full space-y-2">
        {groups.map((g) => (
          <div key={g.label} className="flex items-baseline justify-between gap-4 text-left">
            <div className="flex items-baseline gap-3 min-w-0">
              <span
                className="inline-block w-3 h-3 rounded-sm shrink-0 translate-y-0.5"
                style={
                  g.tone === "primary"
                    ? { backgroundColor: "hsl(var(--primary))" }
                    : { backgroundColor: "currentColor", opacity: g.tone === "secondary" ? 0.4 : 0.15 }
                }
              />
              <span
                className={`font-title ${compact ? "text-xl" : "text-2xl"} tracking-tight ${
                  g.tone === "primary" ? "text-primary" : ""
                }`}
              >
                {g.pct}
              </span>
              <span className="font-display text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold opacity-60">
                {g.label}
              </span>
            </div>
            <span className="text-[11px] md:text-xs font-light opacity-60 text-right shrink-0">{g.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Trillion-dollar market signals: 4 stat cards ─── */
const TrillionSignals = () => {
  const items = [
    { big: "27x", label: "ChatGPT to 100M users", sub: "Faster than Facebook." },
    { big: "$850B", label: "OpenAI valuation", sub: "On a $100B raise." },
    { big: "$3T+", label: "Nvidia market cap", sub: "The pick-and-shovel layer." },
    { big: "10x/yr", label: "Anthropic growth", sub: "3 years old." },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl mx-auto">
      {items.map((i) => (
        <div
          key={i.label}
          className="text-left border-l-2 border-primary/60 pl-4 py-2"
        >
          <p className="font-title text-3xl md:text-5xl tracking-tight leading-none text-primary">{i.big}</p>
          <p className="font-display text-xs md:text-sm uppercase tracking-[0.2em] text-foreground font-bold mt-3">
            {i.label}
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-light leading-snug mt-1">{i.sub}</p>
        </div>
      ))}
    </div>
  );
};

/* ─── Span-of-control org diagram ─── */
const SpanOfControlDiagram = () => {
  const primary = "hsl(var(--primary))";
  const muted = "hsl(var(--muted-foreground) / 0.35)";
  const line = "hsl(var(--muted-foreground) / 0.25)";
  return (
    <div className="grid grid-cols-2 gap-8 md:gap-12 w-full max-w-xl">
      <div className="flex flex-col items-center">
        <p className="font-display text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-4">Traditional</p>
        <svg viewBox="0 0 200 140" className="w-full">
          <line x1="100" y1="20" x2="50" y2="60" stroke={line} strokeWidth="1" />
          <line x1="100" y1="20" x2="150" y2="60" stroke={line} strokeWidth="1" />
          {[30, 60, 90, 110, 140, 170].map((x) => (
            <line key={x} x1={x < 100 ? 50 : 150} y1="60" x2={x} y2="110" stroke={line} strokeWidth="1" />
          ))}
          <circle cx="100" cy="20" r="6" fill={primary} />
          <circle cx="50" cy="60" r="5" fill={muted} />
          <circle cx="150" cy="60" r="5" fill={muted} />
          {[30, 60, 90, 110, 140, 170].map((x) => (
            <circle key={x} cx={x} cy="110" r="3" fill={muted} />
          ))}
        </svg>
        <p className="font-display text-xs text-muted-foreground mt-3 text-center">Layers to coordinate</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-display text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">With AI</p>
        <svg viewBox="0 0 200 140" className="w-full">
          {[20, 45, 70, 95, 120, 145, 170].map((x) => (
            <line key={x} x1="100" y1="30" x2={x} y2="100" stroke={line} strokeWidth="1" />
          ))}
          <circle cx="100" cy="30" r="6" fill={primary} />
          {[20, 45, 70, 95, 120, 145, 170].map((x) => (
            <circle key={x} cx={x} cy="100" r="3" fill={muted} />
          ))}
        </svg>
        <p className="font-display text-xs text-muted-foreground mt-3 text-center">Context replaces layers</p>
      </div>
    </div>
  );
};

/* ─── Telehealth hockey-stick: $20K → $401M → $1.8B ─── */
const TelehealthScaleChart = () => {
  const W = 600;
  const H = 280;
  const pad = { l: 50, r: 50, t: 50, b: 55 };
  const pts = [
    { label: "$20K", sub: "Start", v: 0.00002 },
    { label: "$401M", sub: "2025 sales", v: 0.401 },
    { label: "$1.8B", sub: "2026 est.", v: 1.8 },
  ];
  const maxV = 1.8;
  const xFor = (i: number) => pad.l + (i / (pts.length - 1)) * (W - pad.l - pad.r);
  const yFor = (v: number) => H - pad.b - (v / maxV) * (H - pad.t - pad.b);
  const coords = pts.map((p, i) => ({ ...p, x: xFor(i), y: yFor(p.v) }));
  const path = coords.reduce((d, p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `${d} L ${p.x} ${p.y}`), "");
  const areaPath = `${path} L ${coords[coords.length - 1].x} ${H - pad.b} L ${coords[0].x} ${H - pad.b} Z`;
  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
        <line x1={pad.l} y1={H - pad.b} x2={W - pad.r} y2={H - pad.b} stroke="hsl(var(--light) / 0.25)" strokeWidth="1.5" />
        <path d={areaPath} fill="hsl(var(--brand) / 0.15)" />
        <path d={path} fill="none" stroke="hsl(var(--brand))" strokeWidth="4" strokeLinecap="round" />
        {coords.map((p, i) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r={i === coords.length - 1 ? 8 : 5} fill="hsl(var(--brand))" stroke="hsl(var(--light-surface))" strokeWidth="3" />
            <text
              x={p.x}
              y={p.y - 18}
              textAnchor={i === coords.length - 1 ? "end" : i === 0 ? "start" : "middle"}
              className="fill-light font-title"
              style={{ fontSize: i === coords.length - 1 ? 30 : 20, fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              {p.label}
            </text>
            <text
              x={p.x}
              y={H - pad.b + 22}
              textAnchor="middle"
              className="fill-light-muted font-display"
              style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              {p.sub.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

/* ─── B2B buying projection: 45% today → 90% by 2028 ($15T) ─── */
const B2BProjection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-2 gap-6 md:gap-10">
      <div className="text-left">
        <p className="font-display text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground font-bold mb-3">Today</p>
        <p className="font-title text-6xl md:text-8xl tracking-tight leading-none text-foreground">45%</p>
        <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
          of B2B buyers already use AI as their primary research method for new suppliers.
        </p>
        <div className="mt-6 h-3 w-full rounded-sm bg-muted-foreground/10 overflow-hidden">
          <div className="h-full rounded-sm bg-muted-foreground/50" style={{ width: "45%" }} />
        </div>
      </div>
      <div className="text-left border-l-2 border-primary pl-6">
        <p className="font-display text-xs md:text-sm uppercase tracking-[0.25em] text-primary font-bold mb-3">By 2028</p>
        <p className="font-title text-6xl md:text-8xl tracking-tight leading-none text-primary">90%</p>
        <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
          of B2B purchases mediated by AI agents. <span className="text-foreground font-medium">$15 trillion</span> flowing through machines.
        </p>
        <div className="mt-6 h-3 w-full rounded-sm bg-muted-foreground/10 overflow-hidden">
          <div className="h-full rounded-sm bg-primary" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
};

/* ─── Intelligence vs Judgment - Sequoia framing ─── */
const IntelligenceVsJudgment = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl mx-auto text-left">
      <div className="border border-light/20 rounded-sm p-6 md:p-8 bg-light/[0.02]">
        <p className="font-display text-xs uppercase tracking-[0.25em] text-light-muted font-bold mb-3">Intelligence</p>
        <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mb-4 text-light">
          Rule-based.
        </h3>
        <p className="text-light-secondary text-sm md:text-base leading-relaxed">
          Coding, testing, drafting, matching. Clear inputs, clear outputs. <span className="text-light font-medium">AI crossed this line.</span>
        </p>
      </div>
      <div className="border-2 border-brand-green rounded-sm p-6 md:p-8 bg-brand-green/[0.06]">
        <p className="font-display text-xs uppercase tracking-[0.25em] text-brand-green font-black mb-3">Judgment</p>
        <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mb-4 text-light">
          Experience-driven.
        </h3>
        <p className="text-light-secondary text-sm md:text-base leading-relaxed">
          What to build. When to ship. What to push back on. Needs <span className="text-light font-medium">context, intuition, accountability.</span>
        </p>
      </div>
    </div>
  );
};

/* ─── AI Lab pilot timeline: 12 weeks, weekly sessions + monthly builds ─── */
const PilotTimeline = () => {
  const weeks = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-3 gap-4 mb-3">
        {["Month 1", "Month 2", "Month 3"].map((m) => (
          <div key={m} className="text-center">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-light-muted font-bold">{m}</p>
          </div>
        ))}
      </div>
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-light/20" />
        <div className="relative grid grid-cols-12 gap-2 items-center py-6">
          {weeks.map((w) => {
            const isBuild = w % 4 === 0;
            return (
              <div key={w} className="flex flex-col items-center">
                {isBuild ? (
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-brand-green flex items-center justify-center shadow-sm">
                    <span className="font-display text-[9px] md:text-[10px] uppercase tracking-wide font-black text-light">½ day</span>
                  </div>
                ) : (
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-light/50 border-2 border-light/30" />
                )}
                <span className="font-display text-[10px] uppercase tracking-wider text-light-muted mt-2">W{w}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap gap-6 md:gap-8 justify-center mt-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-light/50 border-2 border-light/30" />
          <span className="font-display text-xs uppercase tracking-[0.2em] text-light-secondary font-bold">90 min / week - live session</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-sm bg-brand-green" />
          <span className="font-display text-xs uppercase tracking-[0.2em] text-light-secondary font-bold">½ day / month - deeper build</span>
        </div>
      </div>
    </div>
  );
};

/* ─── 5 shifts overview list (shared between title + closing) ─── */
const FIVE_SHIFTS = [
  { Icon: IconFastForward, num: "01", topic: "Expectations have shifted.", title: <>Expectations have <span className="highlight-green">shifted.</span></> },
  { Icon: IconStacks, num: "02", topic: "AI is doing the work.", title: <>AI is doing the <span className="highlight-green">work.</span></> },
  { Icon: IconOrgChart, num: "03", topic: "The org chart is shifting.", title: <>The org chart is <span className="highlight-green">shifting.</span></> },
  { Icon: IconIdentity, num: "04", topic: "The workforce is shifting.", title: <>The workforce is <span className="highlight-green">shifting.</span></> },
  { Icon: IconTarget, num: "05", topic: "The buyer may not be a person anymore.", title: <>The buyer may not be a <span className="highlight-green">person</span> anymore.</> },
];

/* ──────────────────────────────────────────────────────── */
/* DESKTOP SLIDES                                           */
/* ──────────────────────────────────────────────────────── */

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

  // AI doesn't mean the same thing
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        AI doesn't mean the same thing for <span className="text-primary">all people.</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        Most people use AI like Google. They search. They summarize. They rewrite. That barely scratches the surface.
      </p>
    </Slide>
  </div>,

  // 3-group distribution chart
  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">A gap is forming in AI usage</p>
      <h2 className="font-title text-4xl md:text-6xl uppercase leading-[1] tracking-tight mb-10">
        It splits into <span className="highlight-green">3 groups.</span>
      </h2>
      <ThreeGroupChart />
    </div>
  </div>,

  // Talking past each other
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        3 groups. Same technology. <span className="text-primary font-bold">Completely different realities.</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        The first thinks it's a novelty that hallucinates. The third is stunned every week by what just became possible. And they're all talking past each other.
      </p>
    </Slide>
  </div>,

  // Bryan - time in the third group
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        I spend most of my time in that <span className="text-primary font-bold">third group.</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-light-muted mt-10 max-w-3xl mx-auto">
        Not because I'm an expert. Not because I'm special. Because I've been paying attention - reading, building, experimenting, watching from the front lines.
      </p>
    </Slide>
  </div>,

  // Trillion-dollar signals
  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">AI is moving faster than almost anyone is ready for</p>
      <h2 className="font-title text-4xl md:text-6xl uppercase leading-[1] tracking-tight mb-10">
        Trillion-dollar <span className="highlight-green">bets.</span>
      </h2>
      <TrillionSignals />
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl">
        Markets don't place trillion-dollar bets on trends. They place them on transformations. This isn't a wave. <span className="text-primary font-bold">It's the tide.</span>
      </p>
    </div>
  </div>,

  // Teach everyone to fish
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <SerifStatement>
        I don't want to be the only one who sees where things are going.
        I want to <span className="text-primary font-bold">teach everyone to fish</span> instead of just giving out fish.
      </SerifStatement>
    </Slide>
  </div>,

  // Discussion
  <PromptSlide question="Which group do you feel closest to right now - surface, productivity, or real leverage?" />,

  // Overview - 5 shifts
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <p className="font-serif text-xl md:text-2xl italic text-light-muted mb-14">The 5 shifts AI has brought - and what I think they mean for us.</p>
      <div className="space-y-8 text-left">
        {FIVE_SHIFTS.map(({ Icon, num, title }) => (
          <div key={num} className="flex items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm bg-brand-green/10 flex items-center justify-center">
              <Icon size={40} className="text-brand-green md:w-12 md:h-12" />
            </div>
            <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight text-light">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>,
];

/* ─── 1. Expectations have shifted ─── */
const expectationsDesktop = [
  <SectionOpener icon={IconFastForward} number="01" superTitle="Don't miss this." title={<>Expectations have<br /><span className="highlight-green">shifted.</span></>} monogramSrc={bbMonogram} />,

  // Floor of good enough moved
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <BgImage src={abstractSpeed} opacity="opacity-[0.04]" />
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">The floor of "good enough" just moved</p>
      <SerifStatement>
        AI is training people to expect <span className="text-primary">immediate</span>.
        Not faster. <span className="text-primary font-bold">Immediate.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-light-muted mt-10 font-bold">37% of consumers go to AI first instead of Google. Nearly half of Google searches include AI summaries.</p>
    </Slide>
  </div>,

  // ChatGPT speed of adoption
  <Slide><GrowthChart /></Slide>,

  // Gatekeepers eliminated
  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        We used to tolerate friction because information had <span className="text-primary">gatekeepers.</span>
        AI <span className="text-primary font-bold">eliminated</span> the gatekeepers.
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        Once that becomes normal in one domain, it becomes expected in all of them - including ours.
      </p>
    </Slide>
  </div>,

  // Good enough right now beats perfect later
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">"Good enough, right now" beats "perfect, later"</p>
      <SerifStatement>
        20-30 minutes of Photoshop lasso work. <span className="text-primary">5 seconds</span> in Canva.
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-light-muted mt-10 max-w-3xl mx-auto">
        AI is collapsing the time between "I need this" and "here it is." A 48-hour quote turnaround in a world of 3-second options doesn't feel slow. <span className="text-light font-medium">It feels broken.</span>
      </p>
    </Slide>
  </div>,

  // Exploration is free
  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">Exploration is free</p>
      <SerifStatement>
        3 campaign directions. 5 taglines. Multiple design explorations.
        Used to mean meetings and agency fees. Now? <span className="text-primary font-bold">Seconds.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">When exploration is free, behaviour changes. People test more. Compare more. Iterate more.</p>
    </Slide>
  </div>,

  // The gap / why this matters
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Why this matters to us</p>
        <div className="border-l-4 border-primary/40 pl-6 mb-10 space-y-4">
          <p className="text-xl md:text-2xl lg:text-3xl text-light-secondary font-light leading-relaxed">What clients <span className="text-light font-medium">are starting to expect</span></p>
          <p className="text-xl md:text-2xl lg:text-3xl text-light-secondary font-light leading-relaxed">vs. what most distributors and agencies are <span className="text-light font-medium">set up to deliver.</span></p>
        </div>
        <div className="border-t border-light pt-6">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary font-bold mb-3">The Opening</p>
          <p className="text-base md:text-lg lg:text-xl text-light-secondary font-light leading-relaxed">
            That gap is where both the risk <span className="text-primary font-bold">and the opportunity</span> live - and we get to choose which side of it we're on.
          </p>
        </div>
      </div>
    </Slide>
  </div>,

  <PromptSlide question="What's something you've seen a client expect lately that they wouldn't have asked for a year ago?" />,
];

/* ─── 2. AI is doing the work ─── */
const aiDoingDesktop = [
  <SectionOpener icon={IconStacks} number="02" superTitle="Don't miss this." title={<>AI is doing<br />the <span className="highlight-green">work.</span></>} monogramSrc={bbMonogram} />,

  // Inside shift
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        If expectations are the <span className="text-primary">outside</span> pressure,
        this is the <span className="text-primary font-bold">inside</span> shift.
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        AI isn't just answering questions anymore. It's doing the work that used to fill our days.
      </p>
    </Slide>
  </div>,

  // Execution gets cheap, judgment gets scarce
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <BgImage src={abstractStack} opacity="opacity-[0.05]" />
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Execution gets cheap. Judgment gets scarce.</p>
      <SerifStatement>
        GPT-4 scored in the <span className="text-primary">90th percentile</span> of the Bar Exam.
        AI hit <span className="text-primary font-bold">gold-medal</span> level on the 2025 International Math Olympiad.
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-light-muted mt-10 max-w-3xl mx-auto">
        The point isn't that AI is smarter than us. It's that execution has become dramatically cheaper.
      </p>
    </Slide>
  </div>,

  // What we do vs AI
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        AI can generate <span className="text-primary">10 campaign ideas</span> in seconds.
        It doesn't know which one fits the brand, the culture, or what will <span className="text-primary font-bold">actually move people.</span>
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-10 font-bold">That's where we live. Framing the problem. Defining success. Owning the outcome.</p>
    </Slide>
  </div>,

  // Taste and judgment more important
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        When you can "do" something quicker than ever, you can also <span className="text-primary">"do" the wrong thing</span> quicker than ever.
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-light-muted mt-10 max-w-3xl mx-auto">
        Taste and judgement are more important than ever. Our role shifts <span className="text-primary font-bold">up the stack.</span>
      </p>
    </Slide>
  </div>,

  // From assistant to operator
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">From assistant to operator</p>
      <SerifStatement>
        Last year, AI was a <span className="text-primary">tool.</span> You prompt it. It responds.
        Now, it <span className="text-primary font-bold">performs the task.</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        Writes the document. Sends the email. Builds the report. Places the order. And increasingly, without direction from a human.
      </p>
    </Slide>
  </div>,

  // $20K to $1.8B case study
  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Case Study</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-10">
      <span className="text-light">$20K to</span><br /><span className="highlight-green">$1.8 Billion.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-x-12 gap-y-8 items-center">
      <div className="space-y-5">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.25em] text-light-muted font-bold mb-1">The Founders</p>
          <p className="text-light text-lg md:text-xl font-medium">2 people. That's it.</p>
          <p className="text-light-secondary text-sm leading-relaxed">Matthew Gallagher launched a telehealth company with $20K. AI agents handle operations, support, marketing, fulfillment. They don't assist. They run the business.</p>
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-[0.25em] text-light-muted font-bold mb-1">2025</p>
          <p className="text-light text-lg md:text-xl font-medium">$401M in sales. He just hired his brother.</p>
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-[0.25em] text-light-muted font-bold mb-1">2026</p>
          <p className="text-light text-lg md:text-xl font-medium">On track for $1.8B. No employees.</p>
        </div>
      </div>
      <TelehealthScaleChart />
    </div>
  </WhiteSlide>,

  // The real question - not can BB run with 2 people
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        The question isn't <span className="text-primary">"will we run Brand Blvd with 2 people?"</span>
      </SerifStatement>
      <p className="font-serif text-2xl md:text-3xl italic text-foreground mt-10 max-w-4xl mx-auto">
        It's <span className="text-primary font-bold">"who figures out how to use these tools first, and points them at the right problems?"</span>
      </p>
    </Slide>
  </div>,

  // What the people building this are saying
  <WhiteSlide className="cross-grid-light">
    <div className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-10">What the people building this are saying</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { quote: "The future of work is not about AI replacing people. It's about people who use AI replacing people who don't.", author: "Satya Nadella", role: "CEO, Microsoft" },
          { quote: "The real value of AI is helping salespeople spend more time with customers and less time doing administrative work.", author: "Marc Benioff", role: "CEO, Salesforce" },
          { quote: "We'll be there in 3 to 6 months, where AI is writing 90% of the code - and in 12 months, AI writes all of it.", author: "Dario Amodei", role: "CEO, Anthropic" },
        ].map((q) => (
          <QuoteCard key={q.author} {...q} />
        ))}
      </div>
    </div>
  </WhiteSlide>,

  // Displacement reframe
  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        Displacement happens to the people who don't <span className="text-primary">adapt.</span>
        Who don't shift their value <span className="text-primary font-bold">up the stack.</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        I don't say that to scare anyone. I share it because it's why we're not waiting. Instead of "figure it out," we're saying "we want to help."
      </p>
    </Slide>
  </div>,

  // Sequoia: Services - the new software + Intelligence vs Judgment
  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Sequoia Capital - "Services: The New Software"</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-light">Sell</span> <span className="highlight-green">outcomes.</span>
    </h2>
    <IntelligenceVsJudgment />
    <p className="mt-10 text-light-secondary text-sm md:text-base leading-relaxed max-w-3xl">
      For every $1 companies spend on software, they spend $6 on services. The opportunity isn't in better tools. <span className="text-light font-medium">It's in better outcomes.</span>
    </p>
  </WhiteSlide>,

  // Why this matters to us - pulled up
  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Why this matters to us</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      Pulled<span className="highlight-green">Up.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
      <div>
        <h3 className="font-display text-lg font-extrabold uppercase mb-4">What's getting automated</h3>
        <p className="text-light-secondary text-base leading-relaxed">
          Drafting proposals. Generating pricing comparisons. Sourcing products. The transactional middle is being absorbed - like it was in travel and retail.
        </p>
      </div>
      <div>
        <h3 className="font-display text-lg font-extrabold uppercase mb-4">Where we get to live</h3>
        <p className="text-light-secondary text-base leading-relaxed mb-4">
          If AI drafts the proposal, we make sure it solves the right problem. If AI generates comparisons, we make sure the strategy holds. If AI sources the merch, we design the moment around it.
        </p>
        <p className="text-light text-base leading-relaxed font-medium">
          Taste and judgement. It's what we've always done. AI just makes the case for it louder.
        </p>
      </div>
    </div>
  </WhiteSlide>,

  <PromptSlide question="If AI handled half your admin tomorrow, what would you do with the time?" />,
];

/* ─── 3. The org chart is shifting ─── */
const orgChartDesktop = [
  <SectionOpener icon={IconOrgChart} number="03" superTitle="Don't miss this." title={<>The org chart is<br /><span className="highlight-green">shifting.</span></>} monogramSrc={bbMonogram} />,

  // 2000 year old constraint
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-center">
      <div className="text-left">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">A 2,000-year-old constraint just broke</p>
        <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
          A leader can effectively manage <span className="text-primary">3 to 8 people.</span>
          That number hasn't changed since the <span className="text-primary font-bold">Roman military.</span>
        </p>
        <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-8 font-bold">It's why we have hierarchies. It's why middle management exists.</p>
      </div>
      <SpanOfControlDiagram />
    </div>
  </div>,

  // AI doesn't need layers
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        AI doesn't need <span className="text-primary">layers</span> to coordinate.
        No weekly pipeline review. No 3 days of spreadsheets.
      </SerifStatement>
    </Slide>
  </div>,

  // Block case study - Company World Model
  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Sequoia - "From Hierarchy to Intelligence"</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-10">
      <span className="text-light">Block's</span><br />Company World <span className="highlight-green">Model.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-start">
      <p className="text-light-secondary text-base md:text-lg leading-relaxed">
        Block (the company behind Cash App and Square) built an AI system that keeps a <span className="text-light font-medium">live, up-to-the-minute picture</span> of everything happening inside the business. Sales, operations, product, support - all in one place, always current.
      </p>
      <div className="border-l-2 border-brand-green pl-6">
        <p className="font-display text-xs uppercase tracking-[0.25em] text-brand-green font-black mb-2">The Result</p>
        <p className="text-light text-lg md:text-xl font-medium leading-snug">
          A handful of senior roles making decisions, with AI handling the bulk of what middle management used to do.
        </p>
      </div>
    </div>
  </WhiteSlide>,

  // Doing vs thinking
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        The <span className="text-primary">"doing"</span> part of management - gathering data, building reports, spotting trends -
        that's the stuff AI <span className="text-primary font-bold">absorbs first.</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        The thinking part - judgment, coaching, strategy - stays human.
      </p>
    </Slide>
  </div>,

  // Why this matters to us - 2 reasons
  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">Why this matters to us</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        <div>
          <h3 className="font-display text-lg font-extrabold uppercase mb-4">Inside our walls</h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            "Growing the team" starts to look less like adding headcount and more like increasing <span className="text-foreground font-medium">leverage per person</span>.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            From "who do we hire next?" to "how do we make every person here <span className="text-foreground font-medium">3x more effective</span>?"
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-extrabold uppercase mb-4">Outside our walls</h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            The companies we sell to are going to look different. <span className="text-foreground font-medium">Flatter orgs. Fewer decision-makers.</span>
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            The org chart we mapped last year might not exist next year.
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Good news - leverage
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        If management layers compress, the people who remain become <span className="text-primary font-bold">more important</span>, not less.
        Higher leverage. More authority. Closer to the work.
      </SerifStatement>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-light-muted mt-10 font-bold">A good thing for a company built on relationships and creative thinking.</p>
    </Slide>
  </div>,
];

/* ─── 4. The workforce is shifting ─── */
const workforceDesktop = [
  <SectionOpener icon={IconIdentity} number="04" superTitle="Don't miss this." title={<>The workforce is<br /><span className="highlight-green">shifting.</span></>} monogramSrc={bbMonogram} />,

  // Anxiety numbers
  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Why there's so much anxiety right now</p>
    <h2 className="font-title text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
      <span className="text-light">What most people</span> <span className="highlight-green">hear.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">
      <NumberedItem num="80%" title="Believe AI will impact their work" desc="Workers surveyed about AI's effect on their daily tasks." />
      <NumberedItem num="50%" title="Worry their job could be automated" desc="Workers who already use AI at work." />
      <NumberedItem num="76K+" title="Jobs eliminated in 2025" desc="Data entry, telemarketing, admin support roles." />
    </div>
    <p className="mt-10 text-light-secondary text-base leading-relaxed max-w-3xl">
      These aren't fake numbers. They're real, and they're exactly why so many people feel uneasy about AI right now. <span className="text-light font-medium">But it's not the story we need to be living in.</span>
    </p>
  </WhiteSlide>,

  // BB's version
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <BgImage src={abstractIdentity} opacity="opacity-[0.05]" />
    <Slide className="relative z-10">
      <SerifStatement>
        At Brand Blvd, we're not trying to do more with <span className="text-primary">fewer</span> people.
        We're trying to make every person <span className="text-primary font-bold">more powerful, more effective, more valuable.</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        AI isn't here to replace you. It's here to make you better at what you already do well.
      </p>
    </Slide>
  </div>,

  // A lot of companies aren't like us
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        A lot of companies <span className="text-primary">aren't like us.</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-light-muted mt-10 max-w-3xl mx-auto">
        And that's important to understand - because it directly affects our business.
      </p>
    </Slide>
  </div>,

  // Employer/employee relationship shifts
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">The logic</p>
        <div className="border-l-4 border-primary/40 pl-6 mb-8 space-y-4">
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">Fewer full-time employees at a lot of companies.</p>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">More contractors, freelancers, fractional roles, AI agents.</p>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">Total headcount our clients pay for <span className="text-foreground font-medium">goes down.</span></p>
        </div>
        <div className="border-t border-muted-foreground/20 pt-6">
          <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            A big chunk of our industry's revenue is tied to employee gifting, onboarding kits, milestone swag. <span className="text-foreground font-medium">A merch strategy built on "how many people do you employ?" becomes a shrinking target.</span>
          </p>
        </div>
      </div>
    </Slide>
  </div>,

  // Belonging relocates
  <WhiteSlide className="diagonal-lines-light">
    <div className="relative z-10 text-center">
      <p className="font-serif text-3xl md:text-4xl lg:text-5xl italic leading-snug max-w-5xl mx-auto text-light">
        The need for belonging doesn't go away.
        It <span className="text-brand-green font-bold">relocates.</span>
      </p>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-light-muted mt-10 font-bold">
        When people's relationship with their employer weakens, they anchor to the other things that give them identity.
      </p>
    </div>
  </WhiteSlide>,

  // Where belonging goes
  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-10">Where belonging relocates</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
        <GridCard superTitle="Community" title="Shared purpose." body="People gather around the ideas they care about." />
        <GridCard superTitle="Values" title="What you stand for." body="Beliefs and causes become anchors." />
        <GridCard superTitle="Tribe" title="Who you're with." body="Insiders, advocates, ambassadors." />
        <GridCard superTitle="Events" title="What you show up for." body="Moments and experiences that bring people together." />
      </div>
    </div>
  </div>,

  // Growth lever
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        Tie our growth to <span className="text-primary">payroll size</span>, and we're tied to a shrinking lever.
        Tie it to <span className="text-primary font-bold">identity and belonging</span>, and we're tied to something expanding.
      </SerifStatement>
    </Slide>
  </div>,

  <PromptSlide question="What part of your daily work would you most want AI to take off your plate?" />,
];

/* ─── 5. The buyer isn't a person anymore ─── */
const buyersDesktop = [
  <SectionOpener icon={IconTarget} number="05" superTitle="Don't miss this." title={<>The buyer may not be<br />a <span className="highlight-green">person</span> anymore.</>} monogramSrc={bbMonogram} />,

  // Biggest mind-bender
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">The question not enough people are asking</p>
      <SerifStatement>
        If AI is making the decisions and doing the work...
        <br /><span className="text-primary font-bold">who are we actually selling to?</span>
      </SerifStatement>
    </Slide>
  </div>,

  // B2B Projection visual
  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">Agentic procurement projection</p>
      <h2 className="font-title text-4xl md:text-6xl uppercase leading-[1] tracking-tight mb-10">
        45% today. <span className="highlight-green">90% by 2028.</span>
      </h2>
      <B2BProjection />
    </div>
  </div>,

  // Two-thirds already rely on AI
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        <span className="text-primary font-bold">Two-thirds</span> of B2B buyers already use AI agents for vendor research -
        as much as, or more than, <span className="text-primary">Google.</span>
      </SerifStatement>
    </Slide>
  </div>,

  // Procurement manager of tomorrow
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
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

  // Two lanes
  <WhiteSlide className="dot-grid-light">
    <div className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-10">Two lanes - both worth building</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        <div>
          <div className="w-16 h-16 rounded-sm bg-brand-green/10 flex items-center justify-center mb-6">
            <IconIdentity size={36} className="text-brand-green" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mb-4">Lane 1: <span className="highlight-green">Human</span> Buyer</h3>
          <p className="text-light-secondary text-base leading-relaxed">
            Relationships, trust, and personal service still win. The sales call matters. Showing up and reading the room is the differentiator. We double down on the human stuff.
          </p>
        </div>
        <div>
          <div className="w-16 h-16 rounded-sm bg-brand-green/10 flex items-center justify-center mb-6">
            <IconTarget size={36} className="text-brand-green" />
          </div>
          <h3 className="font-title text-2xl md:text-3xl uppercase tracking-tight leading-tight mb-4">Lane 2: <span className="highlight-green">Agent</span> Buyer</h3>
          <p className="text-light-secondary text-base leading-relaxed">
            Can AI actually find us? Does it understand what we do and who we do it well for? Are we in the sources, directories, and feeds agents pull from?
          </p>
        </div>
      </div>
      <p className="mt-10 font-serif text-lg italic text-light-muted text-center">
        Not replacing the human sales process. A second, parallel track.
      </p>
    </div>
  </WhiteSlide>,

  // What AI can't evaluate
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">What an AI procurement agent can't evaluate</p>
      <div className="text-left max-w-3xl mx-auto space-y-5">
        <p className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug">
          Does this company <span className="text-primary">actually understand my brand?</span>
        </p>
        <p className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug">
          Will they <span className="text-primary">push back</span> when my idea is off?
        </p>
        <p className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug">
          Will they design a merch experience that makes our people <span className="text-primary font-bold">feel something?</span>
        </p>
      </div>
      <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mt-12 font-bold">That's judgment. That's taste. That's exactly where we live.</p>
    </Slide>
  </div>,

  // Commoditized layer gets disrupted
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        The distributors competing purely on <span className="text-primary">speed and price</span> feel this first.
        An AI agent can reorder from a catalogue <span className="text-primary font-bold">without a sales rep.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <PromptSlide question="If an AI agent had to describe Brand Blvd in 2 sentences, what would we want it to say?" />,
];

/* ─── 6. So what is the AI Lab? ─── */
const aiLabDesktop = [
  // "So where does that leave us" transition
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">So where does that leave us?</p>
      <SerifStatement>
        The companies that will win aren't the ones who predict the future.
        They're the ones who build the <span className="text-primary font-bold">muscle to adapt.</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        Willing to say "we don't know what we don't know" - but hungry to learn it.
      </p>
    </Slide>
  </div>,

  <SectionOpener icon={IconRocket} number="06" superTitle="So what is it?" title={<>The <span className="highlight-green">AI Lab.</span></>} monogramSrc={bbMonogram} />,

  // What it is - small pilot, 3 months
  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <Slide className="relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-8">We're launching the AI Lab</p>
      <BigText>A small pilot.<br />Real work. <span className="highlight-green">3 months.</span></BigText>
      <p className="mt-10 text-muted-foreground font-light max-w-3xl leading-relaxed text-lg md:text-xl">
        Leadership plus a couple of other Brandies. Learning how to actually use AI as a working tool. Not theory. Not tutorials. Building real things for your real job.
      </p>
    </Slide>
  </div>,

  // Bigger initiative - less than 5% group
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        The start of a much bigger initiative - aimed at moving our team from <span className="text-primary">surface-level AI</span> into <span className="text-primary font-bold">real leverage.</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-light-muted mt-10 max-w-3xl mx-auto">
        That top group - the less than 5% building, automating, and doing things that feel like science fiction? That's where we're going. Together.
      </p>
    </Slide>
  </div>,

  // I don't have this all figured out
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        I don't have the whole AI Lab <span className="text-primary">figured out.</span> Nobody does.
        The tools are moving too fast for anyone to have a <span className="text-primary font-bold">perfect playbook.</span>
      </SerifStatement>
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground mt-10 max-w-3xl mx-auto">
        So we're going to learn together as we go. A lot will depend on who's in the room. That's kind of the point.
      </p>
    </Slide>
  </div>,

  // Curriculum
  <WhiteSlide>
    <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-4">What we'll be working on</p>
    <h2 className="font-title text-4xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-10">
      <span className="text-light">The</span><span className="highlight-green">Curriculum.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 items-start">
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-brand-green font-black">Track 1</span>
          <span className="h-px flex-1 bg-light/20" />
          <span className="font-display text-xs uppercase tracking-[0.25em] text-light-muted font-bold">Foundations</span>
        </div>
        <div className="space-y-4">
          {[
            { n: "01", t: "What a skill is", d: "How it helps AI do a job the way you'd do it." },
            { n: "02", t: "What an agent is", d: "How it's different from just chatting with ChatGPT." },
            { n: "03", t: "Build them yourself", d: "Not watching someone else do it - doing it." },
            { n: "04", t: "Spot your own workflows", d: "Which pieces of your day are good candidates for AI." },
          ].map((i) => (
            <div key={i.n} className="flex gap-4 items-start">
              <span className="font-title text-xl md:text-2xl text-brand-green font-black leading-none pt-1 w-10 shrink-0">{i.n}</span>
              <div>
                <p className="font-display text-base md:text-lg font-extrabold text-light leading-tight">{i.t}</p>
                <p className="text-light-secondary text-sm leading-snug mt-1">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-brand-green font-black">Track 2</span>
          <span className="h-px flex-1 bg-light/20" />
          <span className="font-display text-xs uppercase tracking-[0.25em] text-light-muted font-bold">Applied</span>
        </div>
        <div className="space-y-4">
          {[
            { n: "05", t: "Use the tools that exist now", d: "Not the ones coming someday - the ones shipping right now." },
            { n: "06", t: "Run things on autopilot", d: "Set systems up so they keep working without you." },
            { n: "07", t: "Schedule tasks", d: "Work runs automatically." },
            { n: "08", t: "Connect your tools", d: "Your systems learn to talk to each other." },
          ].map((i) => (
            <div key={i.n} className="flex gap-4 items-start">
              <span className="font-title text-xl md:text-2xl text-brand-green font-black leading-none pt-1 w-10 shrink-0">{i.n}</span>
              <div>
                <p className="font-display text-base md:text-lg font-extrabold text-light leading-tight">{i.t}</p>
                <p className="text-light-secondary text-sm leading-snug mt-1">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </WhiteSlide>,

  // No CS degree
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <SerifStatement>
        None of this requires a <span className="text-primary">computer science degree.</span>
        It requires <span className="text-primary font-bold">curiosity</span>, willingness to try things, and time to practice.
      </SerifStatement>
    </Slide>
  </div>,

  // Time commitment timeline
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-4 text-center">The time commitment</p>
      <h2 className="font-title text-4xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-10 text-center">
        <span className="text-light">That's</span><span className="highlight-green">it.</span>
      </h2>
      <PilotTimeline />
      <p className="text-center text-light-secondary text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-10">
        90 minutes per week. A half day per month. Plus homework in between. Real work. Real skills. Real things you'll use every day after.
      </p>
    </div>
  </div>,
];

/* ─── Closing ─── */
const closingDesktop = [
  // Recap of 5 shifts
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-8 md:h-10 mb-14 mx-auto invert" />
      <p className="font-serif text-xl md:text-2xl italic text-light-muted mb-10">5 shifts. One invitation.</p>
      <div className="space-y-6 text-left max-w-2xl mx-auto">
        {FIVE_SHIFTS.map(({ Icon, num, topic, title }) => (
          <div key={num} className="flex items-center gap-5">
            <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-sm bg-brand-green/10 flex items-center justify-center">
              <Icon size={32} className="text-brand-green md:w-10 md:h-10" />
            </div>
            <div>
              <p className="text-light-muted text-xs font-light">{num} - {topic}</p>
              <h3 className="font-title text-xl md:text-2xl uppercase tracking-tight leading-tight mt-1 text-light">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>,

  // Soft close - invitation
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-serif text-2xl md:text-3xl italic text-light leading-snug mb-8">
          If any of this gets you excited - or even just curious - that's enough.
        </p>
        <div className="border-l-4 border-primary/40 pl-6 mb-8 space-y-4">
          <p className="text-lg md:text-xl text-light-secondary font-light leading-relaxed">
            You don't need to be an AI expert. You just need to <span className="text-light font-medium">want to learn.</span>
          </p>
          <p className="text-lg md:text-xl text-light-secondary font-light leading-relaxed">
            We see this growing into something bigger - <span className="text-light font-medium">more cohorts, more people, more ways to bring everyone along.</span>
          </p>
        </div>
        <p className="font-serif text-xl md:text-2xl italic text-light-muted">This is just the beginning.</p>
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

/* ──────────────────────────────────────────────────────── */
/* MOBILE SLIDES                                            */
/* ──────────────────────────────────────────────────────── */

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

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        AI doesn't mean the same thing for <span className="text-primary">all people.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <div className="relative z-10 w-full px-6">
      <p className="font-display text-xs uppercase tracking-[0.35em] text-light-muted font-bold mb-4">A gap is forming</p>
      <h2 className="font-title text-3xl uppercase leading-[1] tracking-tight mb-6">
        It splits into <span className="highlight-green">3 groups.</span>
      </h2>
      <ThreeGroupChart compact />
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        Same technology. <span className="text-primary font-bold">Different realities.</span> Talking past each other.
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        I spend most of my time in the <span className="text-primary font-bold">third group.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full px-6">
      <p className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground font-bold mb-4">Trillion-dollar bets</p>
      <TrillionSignals />
      <p className="font-serif text-base italic text-muted-foreground mt-6">
        This isn't a wave. <span className="text-primary font-bold">It's the tide.</span>
      </p>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <SerifStatement>
        Teach everyone to <span className="text-primary font-bold">fish</span>, not just give out fish.
      </SerifStatement>
    </Slide>
  </div>,

  <PromptSlide question="Which group do you feel closest to right now - surface, productivity, or real leverage?" />,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full px-8 text-center">
      <p className="font-serif text-lg italic text-light-muted mb-8">The 5 shifts AI has brought.</p>
      <div className="space-y-5 text-left">
        {FIVE_SHIFTS.map(({ Icon, num, title }) => (
          <div key={num} className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
              <Icon size={28} className="text-brand-green" />
            </div>
            <h3 className="font-title text-base uppercase tracking-tight leading-tight text-light">{title}</h3>
          </div>
        ))}
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
        AI is training people to expect <span className="text-primary">immediate.</span> Not faster. <span className="text-primary font-bold">Immediate.</span>
      </SerifStatement>
      <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground mt-8 font-bold">37% go to AI first instead of Google.</p>
    </Slide>
  </div>,

  <Slide><GrowthChart /></Slide>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        AI <span className="text-primary font-bold">eliminated</span> the gatekeepers.
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        <span className="text-primary">"Good enough, right now"</span> beats <span className="text-primary font-bold">"perfect, later."</span>
      </SerifStatement>
      <p className="font-serif text-base italic text-muted-foreground mt-6 max-w-3xl mx-auto">
        A 48-hour quote in a world of 3-second options doesn't feel slow. It feels broken.
      </p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        Exploration is <span className="text-primary font-bold">free</span> now. Behaviour changes.
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground font-bold mb-5">Why this matters to us</p>
        <div className="border-l-4 border-primary/40 pl-5 mb-6 space-y-3">
          <p className="text-lg text-muted-foreground font-light leading-relaxed">What clients <span className="text-foreground font-medium">expect</span></p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">vs. what agencies <span className="text-foreground font-medium">deliver.</span></p>
        </div>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">
          Risk and opportunity both live in that gap. <span className="text-primary font-bold">We get to choose.</span>
        </p>
      </div>
    </Slide>
  </div>,

  <PromptSlide question="What's something you've seen a client expect lately that they wouldn't have asked for a year ago?" />,
];

const aiDoingMobile = [
  <SectionOpener icon={IconStacks} number="02" superTitle="Don't miss this." title={<>AI is doing<br />the <span className="highlight-green">work.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        If expectations are <span className="text-primary">outside</span> pressure, this is the <span className="text-primary font-bold">inside</span> shift.
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <BgImage src={abstractStack} opacity="opacity-[0.05]" />
    <Slide className="relative z-10">
      <SerifStatement>
        Execution gets <span className="text-primary">cheap.</span> Judgment gets <span className="text-primary font-bold">scarce.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        AI can generate 10 ideas in seconds. It doesn't know which one <span className="text-primary font-bold">fits your brand.</span>
      </SerifStatement>
      <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground mt-8 font-bold">Taste and judgement are more important than ever.</p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center cross-grid">
    <Slide className="relative z-10">
      <SerifStatement>
        Last year AI was a tool. Now it's an <span className="text-primary font-bold">operator.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Case Study</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">
        <span className="text-light">$20K to</span><br /><span className="highlight-green">$1.8 Billion.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-5">
        <GridCard superTitle="The Founders" title="2 people." body="Matthew Gallagher built a telehealth company run on AI agents." />
        <GridCard superTitle="2025" title="$401M in sales." body="Then he hired his brother." />
        <GridCard superTitle="2026" title="On track for $1.8B." body="No employees. Just AI and outcomes." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        Who figures out these tools first, and points them at the <span className="text-primary font-bold">right problems?</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8 cross-grid-light">
    <div className="w-full max-w-6xl relative z-10">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-8">What people building this are saying</p>
      <div className="grid grid-cols-1 gap-8">
        {[
          { quote: "The future of work is not about AI replacing people. It's about people who use AI replacing people who don't.", author: "Satya Nadella", role: "CEO, Microsoft" },
          { quote: "The real value of AI is helping salespeople spend more time with customers and less time doing administrative work.", author: "Marc Benioff", role: "CEO, Salesforce" },
          { quote: "We'll be there in 3 to 6 months, where AI is writing 90% of the code - and in 12 months, AI writes all of it.", author: "Dario Amodei", role: "CEO, Anthropic" },
        ].map((q) => (
          <QuoteCard key={q.author} {...q} />
        ))}
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        Displacement happens to those who don't <span className="text-primary font-bold">adapt.</span>
      </SerifStatement>
      <p className="font-serif text-base italic text-light-muted mt-6">
        That's why we're not waiting. We're saying "we want to help."
      </p>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Sequoia - Services: The New Software</p>
      <h2 className="font-title text-3xl uppercase leading-[0.9] tracking-tight mb-6">
        Sell <span className="highlight-green">outcomes.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <GridCard superTitle="Intelligence" title="Rule-based." body="Coding, drafting, matching. AI crossed this line." />
        <GridCard superTitle="Judgment" title="Experience-driven." body="What to build. When to ship. What to push back on." />
      </div>
      <p className="mt-6 text-light-secondary text-sm leading-relaxed">
        $1 on software. $6 on services. The opportunity is in <span className="text-light font-medium">better outcomes.</span>
      </p>
    </div>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-6">
        Pulled <span className="highlight-green">up.</span>
      </h2>
      <p className="text-light-secondary text-sm leading-relaxed mb-4">
        The transactional middle gets absorbed - like travel and retail.
      </p>
      <p className="text-light text-sm leading-relaxed font-medium">
        Taste and judgement. It's what we've always done. AI just makes the case for it louder.
      </p>
    </div>
  </div>,

  <PromptSlide question="If AI handled half your admin tomorrow, what would you do with the time?" />,
];

const orgChartMobile = [
  <SectionOpener icon={IconOrgChart} number="03" superTitle="Don't miss this." title={<>The org chart is<br /><span className="highlight-green">shifting.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        A leader manages <span className="text-primary">3 to 8 people.</span> Hasn't changed since the <span className="text-primary font-bold">Roman military.</span>
      </SerifStatement>
      <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground mt-8 font-bold">AI doesn't need layers to coordinate.</p>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Block's Company World Model</p>
      <h2 className="font-title text-3xl uppercase leading-[0.9] tracking-tight mb-6">
        A live picture. <span className="highlight-green">Always current.</span>
      </h2>
      <p className="text-light-secondary text-sm leading-relaxed mb-4">
        Sales, ops, product, support - in one place. A handful of senior roles making decisions. AI handles what middle management used to do.
      </p>
      <p className="text-light text-sm font-medium leading-relaxed">
        The "doing" part of management - that's what AI absorbs first.
      </p>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        The thinking part - <span className="text-primary font-bold">judgment, coaching, strategy</span> - stays human.
      </SerifStatement>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-5">Why this matters to us</p>
      <div className="grid grid-cols-1 gap-y-6">
        <GridCard superTitle="Inside our walls" title="Leverage per person." body="From 'who do we hire next?' to 'how do we make everyone 3x more effective?'" />
        <GridCard superTitle="Outside our walls" title="Flatter clients." body="Fewer decision-makers. The org chart might not exist next year." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        The people who remain become <span className="text-primary font-bold">more important</span>, not less.
      </SerifStatement>
    </Slide>
  </div>,
];

const workforceMobile = [
  <SectionOpener icon={IconIdentity} number="04" superTitle="Don't miss this." title={<>The workforce is<br /><span className="highlight-green">shifting.</span></>} />,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Why there's so much anxiety</p>
      <h2 className="font-title text-4xl uppercase leading-[0.9] tracking-tight mb-8">
        <span className="text-light">What most people</span><br /><span className="highlight-green">hear.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-6">
        <NumberedItem num="80%" title="Believe AI will impact their work" desc="Workers surveyed about AI's effect." />
        <NumberedItem num="50%" title="Worry their job could be automated" desc="Workers who already use AI at work." />
        <NumberedItem num="76K+" title="Jobs eliminated in 2025" desc="Data entry, telemarketing, admin support." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <BgImage src={abstractIdentity} opacity="opacity-[0.05]" />
    <Slide className="relative z-10">
      <SerifStatement>
        We're not doing more with <span className="text-primary">fewer.</span> We're making every person <span className="text-primary font-bold">more powerful.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        A lot of companies <span className="text-primary">aren't like us.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground font-bold mb-5">The logic</p>
        <div className="border-l-4 border-primary/40 pl-5 space-y-3">
          <p className="text-base text-muted-foreground font-light leading-relaxed">Fewer full-time employees.</p>
          <p className="text-base text-muted-foreground font-light leading-relaxed">More contractors, fractional roles, AI agents.</p>
          <p className="text-base text-muted-foreground font-light leading-relaxed">Headcount our clients pay for <span className="text-foreground font-medium">goes down.</span></p>
        </div>
        <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
          A merch strategy built on "how many do you employ?" becomes a shrinking target.
        </p>
      </div>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8 diagonal-lines-light">
    <div className="relative z-10 text-center">
      <p className="font-serif text-2xl italic leading-snug text-light">
        Belonging doesn't go away. It <span className="text-brand-green font-bold">relocates.</span>
      </p>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center dot-grid">
    <div className="relative z-10 w-full max-w-6xl px-8">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">Where belonging relocates</p>
      <div className="grid grid-cols-1 gap-6">
        <GridCard superTitle="Community" title="Shared purpose." body="People gather around the ideas they care about." />
        <GridCard superTitle="Tribe" title="Who you're with." body="Insiders, advocates, ambassadors." />
        <GridCard superTitle="Events" title="What you show up for." body="Moments and experiences." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        Payroll size is a <span className="text-primary">shrinking</span> lever.
        Identity and belonging is <span className="text-primary font-bold">expanding.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <PromptSlide question="What part of your daily work would you most want AI to take off your plate?" />,
];

const buyersMobile = [
  <SectionOpener icon={IconTarget} number="05" superTitle="Don't miss this." title={<>The buyer may not be<br />a <span className="highlight-green">person</span> anymore.</>} />,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        If AI is making the decisions... <span className="text-primary font-bold">who are we selling to?</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-6 dot-grid-light">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Agentic procurement</p>
      <h2 className="font-title text-3xl uppercase leading-[0.9] tracking-tight mb-6">
        45% → <span className="highlight-green">90%.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-5">
        <NumberedItem num="45%" title="Today" desc="B2B buyers using AI as primary research." />
        <NumberedItem num="⅔" title="Already trust AI agents" desc="As much as - or more than - Google." />
        <NumberedItem num="90%" title="By 2028" desc="$15T of B2B mediated by agents." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-serif text-base italic text-muted-foreground mb-6">The procurement manager of tomorrow:</p>
        <div className="border-l-4 border-primary/40 pl-5 mb-5">
          <p className="text-base text-foreground font-light leading-relaxed italic">
            "500 branded polos. $25K. Find 3 vendors with fast turnaround, good reviews, sustainability options."
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The agent does it. The human <span className="text-foreground font-medium">doesn't take a sales call.</span>
        </p>
      </div>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8 dot-grid-light">
    <div className="relative z-10 w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-8">Two lanes</p>
      <div className="space-y-8">
        <div>
          <h3 className="font-title text-xl uppercase tracking-tight leading-tight mb-3">Lane 1: <span className="highlight-green">Human</span> Buyer</h3>
          <p className="text-light-secondary text-sm leading-relaxed">
            Relationships, trust, personal service. Double down on the human stuff.
          </p>
        </div>
        <div>
          <h3 className="font-title text-xl uppercase tracking-tight leading-tight mb-3">Lane 2: <span className="highlight-green">Agent</span> Buyer</h3>
          <p className="text-light-secondary text-sm leading-relaxed">
            Can AI find us? Understand what we do? Are we in the right directories and feeds?
          </p>
        </div>
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        AI can't evaluate: does this company <span className="text-primary">understand my brand?</span> Will they make people <span className="text-primary font-bold">feel something?</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        Distributors competing on <span className="text-primary">speed and price</span> feel this <span className="text-primary font-bold">first.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <PromptSlide question="If an AI agent had to describe Brand Blvd in 2 sentences, what would we want it to say?" />,
];

const aiLabMobile = [
  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <p className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground font-bold mb-4">So where does that leave us?</p>
      <SerifStatement>
        Build the <span className="text-primary font-bold">muscle to adapt.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <SectionOpener icon={IconRocket} number="06" superTitle="So what is it?" title={<>The <span className="highlight-green">AI Lab.</span></>} />,

  <div className="relative w-full h-full flex items-center justify-center dot-grid overflow-hidden">
    <Slide className="relative z-10">
      <p className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground font-bold mb-6">We're launching the AI Lab</p>
      <BigText>A small pilot.<br />Real work. <span className="highlight-green">3 months.</span></BigText>
      <p className="mt-6 text-muted-foreground font-light leading-relaxed text-base">
        Leadership plus a couple of other Brandies. Building real things for your real job.
      </p>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light cross-grid-light">
    <Slide className="relative z-10">
      <SerifStatement>
        From surface-level AI into <span className="text-primary font-bold">real leverage.</span>
      </SerifStatement>
    </Slide>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center diagonal-lines">
    <Slide className="relative z-10">
      <SerifStatement>
        I don't have it all <span className="text-primary">figured out.</span> Nobody does. We learn together.
      </SerifStatement>
    </Slide>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Foundations</p>
      <h2 className="font-title text-3xl uppercase leading-[0.9] tracking-tight mb-6">
        <span className="text-light">The</span><span className="highlight-green">Work.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-5">
        <NumberedItem num="01" title="What a skill is" desc="Helping AI do a job the way you'd do it." />
        <NumberedItem num="02" title="What an agent is" desc="Different from chatting with ChatGPT." />
        <NumberedItem num="03" title="Build them yourself" desc="Doing, not watching." />
        <NumberedItem num="04" title="Spot your workflows" desc="Good candidates for AI." />
      </div>
    </div>
  </div>,

  <div className="w-full h-full bg-light-surface text-light flex items-center justify-center px-8">
    <div className="w-full max-w-6xl">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-light-muted font-bold mb-6">Applied</p>
      <h2 className="font-title text-3xl uppercase leading-[0.9] tracking-tight mb-6">
        <span className="text-light">More</span><span className="highlight-green">Skills.</span>
      </h2>
      <div className="grid grid-cols-1 gap-y-5">
        <NumberedItem num="05" title="Use tools that exist now" desc="Not someday - today." />
        <NumberedItem num="06" title="Run on autopilot" desc="Systems that keep working without you." />
        <NumberedItem num="07" title="Schedule tasks" desc="Work runs automatically." />
        <NumberedItem num="08" title="Connect your tools" desc="Systems that talk to each other." />
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <SerifStatement>
        No <span className="text-primary">CS degree</span> required. Just <span className="text-primary font-bold">curiosity.</span>
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
        <NumberedItem num="90m" title="Per week" desc="Live working session." />
        <NumberedItem num="½ day" title="Per month" desc="Deeper build." />
        <NumberedItem num="+" title="Homework" desc="Building on your own between sessions." />
      </div>
    </div>
  </div>,
];

const closingMobile = [
  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light dot-grid-light overflow-hidden">
    <div className="relative z-10 w-full px-8 text-center">
      <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-7 mb-8 mx-auto invert" />
      <p className="font-serif text-base italic text-light-muted mb-8">5 shifts. One invitation.</p>
      <div className="space-y-4 text-left">
        {FIVE_SHIFTS.map(({ Icon, num, topic }) => (
          <div key={num} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-brand-green/10 flex items-center justify-center">
              <Icon size={22} className="text-brand-green" />
            </div>
            <p className="font-title text-sm uppercase tracking-tight leading-tight text-light">{num} - {topic}</p>
          </div>
        ))}
      </div>
    </div>
  </div>,

  <div className="relative w-full h-full flex items-center justify-center bg-light-surface text-light diagonal-lines-light">
    <Slide className="relative z-10">
      <div className="text-left max-w-3xl">
        <p className="font-serif text-xl italic text-light leading-snug mb-6">
          If any of this gets you excited - or even just curious - that's enough.
        </p>
        <p className="text-base text-light-secondary font-light leading-relaxed mb-4">
          You don't need to be an AI expert. Just <span className="text-light font-medium">want to learn.</span>
        </p>
        <p className="font-serif text-lg italic text-light-muted">This is just the beginning.</p>
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
  slug: "bb-and-ai",
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
      id: "ai-doing",
      label: "The Work",
      icon: IconStacks,
      desktopSlides: aiDoingDesktop,
      mobileSlides: aiDoingMobile,
    },
    {
      id: "org-chart",
      label: "Org Chart",
      icon: IconOrgChart,
      desktopSlides: orgChartDesktop,
      mobileSlides: orgChartMobile,
    },
    {
      id: "workforce",
      label: "Workforce",
      icon: IconIdentity,
      desktopSlides: workforceDesktop,
      mobileSlides: workforceMobile,
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
      icon: IconRocket,
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
