import { useState } from "react";
import { usePresentationConfig } from "@/presentations/PresentationContext";
import bbLogoHorizontal from "@/assets/bb-logo-horizontal-white.svg";
import { Download } from "lucide-react";

const SectionDivider = ({ icon: Icon, label }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string }) => (
  <div className="flex items-center gap-6 my-20 md:my-28">
    <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-brand-green/10 flex items-center justify-center">
      <Icon size={36} className="text-brand-green" />
    </div>
    <div className="flex-1">
      <div className="h-px bg-gray-200" />
    </div>
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
        transform: "scale(var(--thumb-scale, 0.494))",
        transformOrigin: "top left",
      }}
    >
      {children}
    </div>
  </div>
);

/* ─── Notes: short coles-notes bullets per section/slide ─── */

const notes: Record<string, string[][]> = {
  title: [
    // Slide 0 - Cover
    ["Three shifts: compressing time, automating execution, restructuring the employer-employee relationship"],
    // Slide 1 - Discussion prompt
    ["Discussion: What is 1 way AI has changed how you act or make decisions?"],
    // Slide 2 - Three themes overview
    ["Shift 1: AI is compressing time across everything", "Shift 2: AI is taking over the 'doing'", "Shift 3: AI will restructure the employer-employee relationship"],
  ],
  instant: [
    // Slide 0 - Section opener
    ["AI isn't just faster — it's resetting what 'fast' means to instant"],
    // Slide 1 - Serif statement
    ["AI tools have moved from novelty to household names", "People are being trained to expect immediate results — not faster, immediate"],
    // Slide 2 - Growth chart (Time to 100M users)
    ["ChatGPT reached 100M users in 2 months — 27x faster than Facebook (~4.5 years)", "TikTok took ~9 months, Instagram ~2.5 years — AI adoption is in a different category"],
    // Slide 3 - Investment signals grid
    ["OpenAI: $100B round at $850B valuation — largest single funding round in tech history", "Nvidia: $3T+ market cap, stock grew 200%+ in a single year on AI chip demand", "Lovable: $330M raised at just 1 year old — massive early-stage AI round", "Anthropic: $30B raised at $380B valuation, revenue growing 10x annually"],
    // Slide 4 - Expectation Shifts (4 numbered items)
    ["4 expectation shifts happening right now:", "1. Patience is collapsing — ChatGPT lets you compare car models instantly", "2. 'Good enough' is immediate — fast beats perfect (e.g., NotebookLM)", "3. Exploration cost is nearing zero — 'Generate 3 themes for a campaign'", "4. Self-sufficiency is increasing — AI enables people to do everything themselves"],
    // Slide 5 - Serif "rewiring expectation"
    ["AI is not just improving productivity — it's rewiring expectation entirely", "The speed of AI is setting the speed of everything"],
    // Slide 6 - "If we operate with..."
    ["If we operate with 48-hour quote turnarounds, 3-day proof cycles, and reorders buried in email chains — we'll feel analog in a digital world", "Reality check: buyers will expect real-time pricing, proofs, and ordering — delays will feel broken"],
    // Slide 7 - Prompt
    ["Discussion: If you were our client, what part of our process would frustrate you?"],
    // Slide 8 - Shift #1 summary
    ["Shift #1: Instant is the new standard", "Action: automate reorders, quoting, proofs, and standard workflows — remove unnecessary delay", "Operational excellence buys us the right to be strategic where it matters"],
  ],
  "human-value": [
    // Slide 0 - Section opener
    ["AI is taking over the 'doing' — execution, research, drafting, sourcing are all being automated"],
    // Slide 1 - Serif statement
    ["AI handles rule-based, repetitive, information-heavy tasks faster, cheaper, and at scale", "Our role shifts to knowing 'what' to do, not 'doing' it — the human role moves up the stack"],
    // Slide 2 - Industry leaders quotes
    ["Nadella: 'People who use AI replacing people who don't' — adoption is the differentiator", "Benioff: AI's real value is helping salespeople spend more time with customers, less on admin", "Amodei: AI writing 90% of code in 3-6 months, all of it in 12 months"],
    // Slide 3 - Order-Taking Dies
    ["The Shift: AI systems will draft proposals, generate pricing, and source products instantly — if we're just order-takers, we get beaten", "The Precedent: travel and retail eliminated transactional middlemen when search was automated", "Conclusion: evolve from 'order takers' to collaborators and advisors"],
    // Slide 4 - Prompt
    ["Discussion: If AI handled 50% of admin tomorrow, would our reps know what to do with the extra time?"],
    // Slide 5 - Shift #2 summary
    ["Shift #2: Death of transactional sales", "We win on framing, interpretation, judgment, context, and strategy — not on sending catalogues"],
  ],
  identity: [
    // Slide 0 - Section opener
    ["AI will restructure the employer-employee relationship — workforce structures will change"],
    // Slide 1 - Serif statement
    ["AI will change workforce structures — through efficiency gains, consolidation, or augmentation", "The workforce will shift — it's not 'if' but 'when'"],
    // Slide 2 - The Numbers
    ["80% of workers believe AI will impact their daily work", "50% worry their job could be automated", "76K+ jobs already eliminated in 2025 — data entry, telemarketing, admin support roles"],
    // Slide 3 - Prompt
    ["Discussion: If our clients reduced headcount by 20%, what happens to our revenue?"],
    // Slide 4 - Merch doesn't go away
    ["That doesn't mean merch and swag go away — the need evolves", "As AI reshapes work, belonging shifts from employer identity to community identity"],
    // Slide 5 - The Opportunity (3 grid cards)
    ["Three opportunity areas for merch in the AI era:", "Internal: more intentional — reflect culture and values, not just fill closets", "External: more tribal — build tribes of customers, advocates, insiders, culture ambassadors", "Identity: badge signalling — move from 'gifting employees' to 'manufacturing belonging'"],
    // Slide 6 - Shift #3 summary
    ["Shift #3: Identity-driven community merch", "Merch becomes badge signalling, not office swag — move from 'gifting employees' to 'manufacturing belonging'"],
  ],
  closing: [
    // Slide 0 - Recap of all 3 shifts
    ["Recap of 3 shifts: (1) Instant is the new standard, (2) Death of transactional sales, (3) Identity-driven community merch", "The shift isn't coming — it's here"],
  ],
  "update-intro": [
    // Slide 0 - 30 Days Later
    ["30 days later — the article didn't hold up, not because it was wrong, but because new signals emerged faster than expected"],
    // Slide 1 - 3 new themes
    ["Shift 4: The org chart is dissolving", "Shift 5: Agents are doing the work", "Shift 6: Machines are becoming the buyers"],
  ],
  "org-charts": [
    // Slide 0 - Section opener
    ["The org chart is dissolving — AI reduces the need for coordination roles and management layers"],
    // Slide 1 - Serif (Roman military)
    ["For 2,000 years, span of control has been 3-8 people — that's why hierarchies exist (since the Roman military)", "AI doesn't need layers to coordinate — it breaks the fundamental constraint behind management structures"],
    // Slide 2 - Block case study (3 roles)
    ["Case Study: Block (Square + Cash App) — 3 roles instead of 10 management layers", "ICs: use the AI model for context instead of waiting for management approval", "DRIs: own a specific problem for 90 days with cross-team authority", "Player-Coaches: build things and develop people at the same time", "Source: Sequoia Capital — 'From Hierarchy to Intelligence'"],
    // Slide 3 - Two Opposing Forces
    ["Inside our walls: 'growing the team' means increasing leverage per person — make every person 3x more effective", "Outside our walls: our clients will have flatter orgs, fewer decision-makers — the org chart your SDR mapped last year might not exist next year"],
    // Slide 4 - Serif (people who remain)
    ["If management layers compress, the people who remain become more important — they hold more authority and care more about culture", "That's a very good thing for a company that manufactures belonging"],
    // Slide 5 - Shift #4 summary
    ["Shift #4: Leverage per person, not headcount", "Management becomes coaching — AI absorbs the 'doing' part of management; judgment, coaching, and strategy stay human"],
  ],
  agents: [
    // Slide 0 - Section opener
    ["Agents are doing the work — AI is shifting from tool to autonomous worker"],
    // Slide 1 - Serif (tool to agent shift)
    ["A month ago, AI was a tool — you prompt, it responds, you review", "The biggest players are converging: agents should do the work, not just assist with it"],
    // Slide 2 - 3 Signals Same Direction (grid cards)
    ["3 convergence signals all pointing the same direction:", "Claude Code: $2.5B annual revenue, 74 releases in 52 days, 4% of all GitHub commits (doubled in a month)", "OpenClaw: 250K GitHub stars in 60 days — surpassed React's 10-year record, 3.2M MAU, 925% traffic growth", "Cursor: $2B+ annual revenue — describe what you want in English, it writes/tests/demos, revenue doubled in 3 months"],
    // Slide 3 - Beyond Code (two columns)
    ["The First Domino: coding is just the start — $200B+ in agentic AI spending projected for 2026, marketing is next", "The Wild Stuff: Dario Amodei gives 70-80% probability of a billion-dollar single-person company in 2026", "A dev already built an AI agent that generated $100K+ in autonomous revenue"],
    // Slide 4 - Zero-Employee Company
    ["What if you didn't need employees at all? The zero-employee company is becoming real", "Amodei: 70-80% probability that 2026 sees the first billion-dollar company run by a single person — it might already be happening"],
    // Slide 5 - Case Study ($20K to $1.8B)
    ["Case study: Matthew Gallagher and his brother — 2 people, $20K to start, no VC", "Built a telehealth company using AI agents for operations, support, marketing, and fulfillment", "Result: $401M in 2025 sales, $1.8B projected for 2026 — on track to nearly 5x this year"],
    // Slide 6 - Serif "leverage story"
    ["This isn't a tech story — it's a leverage story", "Two people, no employees, AI handling operations/support/scale — the question is whether your competitors figure it out before you do"],
    // Slide 7 - Sequoia Capital "outcomes not tools"
    ["Sequoia's thesis: the next trillion-dollar company won't sell tools — it will sell outcomes", "For every $1 spent on software, companies spend $6 on services — the opportunity is in delivering better outcomes"],
    // Slide 8 - "We don't sell t-shirts"
    ["We don't sell t-shirts — we sell the experience, the brand moment, the culture artifact, the belonging signal", "The more AI commoditizes logistics, the more value shifts to what we're actually good at: designing the moment"],
    // Slide 9 - Shift #5 summary
    ["Shift #5: Sell outcomes, not tools", "The companies that win aren't the ones with the best software — they deliver outcomes people trust"],
  ],
  buyers: [
    // Slide 0 - Section opener
    ["When machines are the buyers — if AI is making the decisions, who are we selling to?"],
    // Slide 1 - Serif "who are we selling to"
    ["The core question: if AI is making the decisions, who are we actually selling to?", "Not enough people in our industry are asking this yet"],
    // Slide 2 - Agentic Procurement stats
    ["45% of B2B buyers already use AI as their primary research tool to identify new suppliers", "Two-thirds trust AI agents for vendor research as much as or more than Google", "90% of B2B purchases will be mediated by AI agents by 2028 — $15 trillion in spending"],
    // Slide 3 - Procurement scenario
    ["The procurement manager of tomorrow gives an AI agent a brief: '500 branded polos, $25K budget, August retreat'", "The agent researches, compares, shortlists — maybe even places the order", "The human doesn't visit a website, read an email, or take a sales call"],
    // Slide 4 - Two Lanes
    ["Lane 1 — Human Buyer: relationships, trust, personal service still win — showing up and reading the room is the differentiator", "Lane 2 — Agent Buyer: are we structured data an AI can parse? Are our case studies machine-readable? Are we in the right databases?", "We need to sell in both lanes — a completely different muscle"],
    // Slide 5 - Serif "agent can't evaluate"
    ["An AI agent can't evaluate: does this company understand my brand? Will they push back when my idea is off?", "The agent can shortlist vendors — but it can't feel the culture of a brand"],
    // Slide 6 - Prompt
    ["Discussion: How would an AI procurement agent describe Brand Blvd? Would it even find us?"],
    // Slide 7 - Shift #6 summary
    ["Shift #6: We sell what machines can't evaluate", "Transactional vendors get eaten alive by agentic procurement — but companies that sell belonging? That's where the human picks up the phone"],
  ],
  "update-closing": [
    // Slide 0 - Meta lesson
    ["Wrote the original article to make a point about speed — had to update it 30 days later because the world changed faster than expected", "That's the meta-lesson"],
    // Slide 1 - Final
    ["The companies that win build the muscle to adapt continuously", "Paying attention is half the battle — the other half is doing something about it"],
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
    a.download = "The-Future-of-Our-Industry-Presenter-Notes.pdf";
    a.click();
    URL.revokeObjectURL(url);
    setShowPdf(false);
  };

  if (!config) {
    return (
      <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Loading presentation...</p>
      </div>
    );
  }

  return (
    <article className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-[680px] mx-auto px-6 md:px-8 py-20 md:py-32">

        {/* Header */}
        <header className="mb-16 md:mb-24">
          <div className="flex items-center justify-between mb-10">
            <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-6 invert opacity-40" />
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
          <p className="text-lg text-gray-500 mb-6">The future of our industry</p>
          <div className="w-16 h-1 bg-brand-green" />
        </header>

        {/* Sections */}
        {config.sections.map((section) => (
          <div key={section.id}>
            <SectionDivider icon={section.icon} label={section.label} />
            {section.desktopSlides.map((slide, i) => (
              <div key={i} className="mb-8">
                <SlideThumbnail>{slide}</SlideThumbnail>
                {notes[section.id]?.[i] && (
                  <ul className="space-y-1 mt-2">
                    {notes[section.id][i].map((point, j) => (
                      <li key={j} className="text-[15px] text-gray-700 leading-snug flex gap-2">
                        <span className="text-brand-green mt-0.5 flex-shrink-0 text-xs">&#9679;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Footer */}
        <div className="flex items-center gap-4 mt-20 md:mt-28 mb-8">
          <div className="flex-1 h-px bg-gray-200" />
          <div className="w-2 h-2 bg-brand-green rounded-full" />
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="text-center">
          <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-5 mx-auto invert opacity-30" />
        </div>
      </div>
    </article>
  );
};

export default PresenterNotesSection;
