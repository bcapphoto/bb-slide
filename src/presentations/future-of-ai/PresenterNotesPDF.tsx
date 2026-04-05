import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "DM Serif Display",
  src: "/fonts/DMSerifDisplay-Regular.ttf",
});

Font.register({
  family: "Inter",
  fonts: [
    { src: "/fonts/Inter-Variable.ttf", fontWeight: 400 },
    { src: "/fonts/Inter-Variable.ttf", fontWeight: 400, fontStyle: "italic" },
    { src: "/fonts/Inter-Variable.ttf", fontWeight: 600 },
  ],
});

Font.register({
  family: "Barlow Condensed",
  fonts: [
    { src: "/fonts/BarlowCondensed-SemiBold.ttf", fontWeight: 600 },
  ],
});

const green = "#00C853";

const s = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 10,
    lineHeight: 1.7,
    color: "#374151",
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 60,
  },
  titleLabel: {
    fontFamily: "Barlow Condensed",
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: "#9CA3AF",
    marginBottom: 8,
  },
  titleText: {
    fontFamily: "DM Serif Display",
    fontSize: 28,
    lineHeight: 1.15,
    color: "#111827",
    marginBottom: 12,
  },
  greenBar: {
    width: 48,
    height: 3,
    backgroundColor: green,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 9,
    color: "#9CA3AF",
    marginBottom: 40,
  },
  sectionHeader: {
    fontFamily: "DM Serif Display",
    fontSize: 18,
    color: "#111827",
    marginBottom: 14,
    marginTop: 24,
  },
  slideBlock: {
    backgroundColor: "#F9FAFB",
    borderTopWidth: 2,
    borderTopColor: green,
    borderRadius: 4,
    padding: 16,
    marginBottom: 12,
  },
  slideLabel: {
    fontFamily: "Barlow Condensed",
    fontSize: 8,
    fontWeight: 600,
    letterSpacing: 2.5,
    textTransform: "uppercase",
    color: "#9CA3AF",
    marginBottom: 4,
  },
  slideDesc: {
    fontSize: 9,
    fontStyle: "italic",
    color: "#6B7280",
    marginBottom: 8,
  },
  bullet: {
    fontSize: 10,
    lineHeight: 1.7,
    color: "#374151",
    marginBottom: 4,
    paddingLeft: 12,
  },
  promptBlock: {
    backgroundColor: "#F0FDF4",
    borderTopWidth: 2,
    borderTopColor: green,
    borderRadius: 4,
    padding: 16,
    marginBottom: 12,
  },
  promptLabel: {
    fontFamily: "Barlow Condensed",
    fontSize: 8,
    fontWeight: 600,
    letterSpacing: 2.5,
    textTransform: "uppercase",
    color: green,
    marginBottom: 6,
  },
  promptText: {
    fontFamily: "DM Serif Display",
    fontSize: 12,
    color: "#111827",
    lineHeight: 1.4,
  },
  divider: {
    height: 0.5,
    backgroundColor: "#E5E7EB",
    marginVertical: 6,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  footerDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: green,
  },
});

const SlideBlock = ({
  num,
  desc,
  points,
}: {
  num: number;
  desc: string;
  points: string[];
}) => (
  <View style={s.slideBlock} wrap={false}>
    <Text style={s.slideLabel}>SLIDE {num}</Text>
    <Text style={s.slideDesc}>{desc}</Text>
    {points.map((p, i) => (
      <Text key={i} style={s.bullet}>
        {"\u2022"} {p}
      </Text>
    ))}
  </View>
);

const PromptBlock = ({ num, question }: { num: number; question: string }) => (
  <View style={s.promptBlock} wrap={false}>
    <Text style={s.promptLabel}>SLIDE {num} — DISCUSSION</Text>
    <Text style={s.promptText}>{question}</Text>
  </View>
);

const PresenterNotesPDF = () => (
  <Document title="Presenter Notes — The Future of Our Industry" author="BrandBlvd">
    <Page size="LETTER" style={s.page}>
      {/* ─── Title Area ─── */}
      <Text style={s.titleLabel}>PRESENTER NOTES</Text>
      <Text style={s.titleText}>The future of our industry</Text>
      <View style={s.greenBar} />
      <Text style={s.subtitle}>Brand Blvd · Confidential</Text>

      {/* ═══════════════════════════════════════
          SECTION 1: Title
         ═══════════════════════════════════════ */}
      <Text style={s.sectionHeader}>Title</Text>

      <SlideBlock
        num={1}
        desc="Cover slide — large AI typography, Brand Blvd logo, subtitle."
        points={[
          "Welcome everyone. Today we're talking about AI — not as a buzzword, but as a force reshaping our industry.",
          "This isn't speculative. This is happening now, and it affects how we sell, how we operate, and what we sell.",
          "Three big shifts: time compression, the death of transactional work, and the restructuring of identity and belonging.",
        ]}
      />

      <PromptBlock num={2} question="What is 1 way AI has changed how you act or make decisions?" />

      <SlideBlock
        num={3}
        desc="Overview — three pillars with icons."
        points={[
          "AI is compressing time across everything — speed is the new default.",
          "AI is taking over the 'doing' — execution is cheap, judgment is scarce.",
          "AI will restructure the employer-employee relationship — identity shifts from employer to community.",
          "These three themes are the backbone of the presentation. Everything ties back here.",
        ]}
      />

      {/* ═══════════════════════════════════════
          SECTION 2: AI is Compressing Time
         ═══════════════════════════════════════ */}
      <Text style={s.sectionHeader}>AI is compressing time</Text>

      <SlideBlock
        num={4}
        desc="Section opener — '01: AI is compressing time across everything.'"
        points={[
          "This section is about speed — adoption speed, expectation speed, decision speed.",
          "AI tools are no longer niche. ChatGPT is a household name. 23% of Super Bowl ads were AI-focused.",
          "37% of consumers now go to AI first instead of Google. 50% of Google searches include AI summaries.",
          "AI is training people to expect immediate results. Not faster — immediate.",
        ]}
      />

      <SlideBlock
        num={5}
        desc="Serif statement — 'household names' and 'immediate' emphasized."
        points={[
          "The perception shift matters most: AI feels 'magic' and 'all-knowing.'",
          "People put something in, get an answer out. Instantly. That resets what 'responsive' means.",
          "AI is reshaping patience, redefining how we value advice, and how we judge competence.",
        ]}
      />

      <SlideBlock
        num={6}
        desc="Growth chart — time to 100M users comparison."
        points={[
          "ChatGPT reached 100M users 27x faster than Facebook.",
          "When something spreads that fast, it feels inevitable. Entire categories compress from years to months.",
          "This isn't just a tech stat — it changes consumer psychology about what's normal.",
        ]}
      />

      <SlideBlock
        num={7}
        desc="Investment signals grid — OpenAI, NVIDIA, Lovable, Anthropic."
        points={[
          "Capital follows conviction. These numbers show where the smart money is going.",
          "OpenAI: $100B round at $850B valuation — largest single funding round in tech history.",
          "NVIDIA: $3T+ market cap, stock grew 200% in one year on AI chip demand.",
          "Lovable: $330M raised at 1 year old — massive early-stage AI-native round.",
          "Anthropic: $30B at $380B valuation, revenue growing 10x annually, only 3 years old.",
          "Markets don't place trillion-dollar bets on trends. They place them on transformations.",
        ]}
      />

      <SlideBlock
        num={8}
        desc="White slide — Expectation Shifts (4 numbered items)."
        points={[
          "Patience is collapsing: buying a car used to mean driving between dealerships. Now ChatGPT compares models instantly.",
          "'Good enough' is immediate: background removal in Photoshop took 30 min. Canva does it in 5 seconds.",
          "Exploration cost is nearing 0: 3 campaign directions used to require meetings and agencies. Now it's a prompt.",
          "Self-sufficiency is increasing: people ask AI before calling a specialist.",
          "When this becomes normal in one domain, it becomes expected in all domains.",
        ]}
      />

      <SlideBlock
        num={9}
        desc="Serif statement — 'It's rewiring expectation.'"
        points={[
          "This is the key takeaway: AI isn't just a productivity tool. It changes what people expect.",
          "The speed of AI is becoming the speed benchmark for everything else.",
        ]}
      />

      <SlideBlock
        num={10}
        desc="The 'analog in a digital world' slide — 48-hour turnarounds, 3-day proofs."
        points={[
          "If we still operate with 48-hour quote turnarounds, 3-day proof cycles, reorders buried in email — we feel broken, not just slow.",
          "Buyers will expect real-time pricing, instant proofs, and seamless ordering.",
          "This is both the threat and the opportunity.",
        ]}
      />

      <PromptBlock num={11} question="If you were our client, what part of our process would frustrate you?" />

      <SlideBlock
        num={12}
        desc="Shift #1 takeaway — 'Instant is the new standard.'"
        points={[
          "Automate reorders, quoting, proofs, and standard workflows.",
          "Remove unnecessary delay. Operational excellence buys us the right to be strategic.",
          "This is the foundation — get the basics to instant so we can focus on high-value work.",
        ]}
      />

      {/* ═══════════════════════════════════════
          SECTION 3: AI is Taking Over the "Doing"
         ═══════════════════════════════════════ */}
      <Text style={s.sectionHeader}>Companies are investing like it's permanent</Text>

      <SlideBlock
        num={13}
        desc="Section opener — '02: AI is taking over the doing.'"
        points={[
          "This section is about the human role. If AI handles execution, what do we do?",
          "AI outperforms humans in measurable domains: coding benchmarks, math olympiad, 90th percentile Bar Exam.",
          "Execution is dramatically cheaper and faster. The barrier to 'doing something' has collapsed.",
        ]}
      />

      <SlideBlock
        num={14}
        desc="Serif statement — rule-based tasks faster, cheaper, at scale."
        points={[
          "AI can generate 10 campaign ideas in seconds. But it doesn't know which aligns with your brand, fits your culture, or will actually drive behavior.",
          "The human role shifts: less about doing, more about deciding what should be done.",
          "Framing the problem correctly. Defining success. Applying judgment. Taking responsibility.",
        ]}
      />

      <SlideBlock
        num={15}
        desc="Industry leaders quotes — Nadella, Benioff, Amodei."
        points={[
          "Nadella (Microsoft): 'People who use AI will replace people who don't.'",
          "Benioff (Salesforce): 'AI helps salespeople spend more time with customers, less on admin.'",
          "Amodei (Anthropic): 'In 12 months, AI writes all the code.' — and this was said months ago.",
          "These are not hypotheticals. These are CEOs restructuring trillion-dollar companies around this thesis.",
        ]}
      />

      <SlideBlock
        num={16}
        desc="White slide — 'Order-Taking Dies.'"
        points={[
          "Software will draft proposals, compare pricing, and source products instantly.",
          "If we remain order-takers, we compete against something we can never keep up with.",
          "Industries like travel and retail already eliminated transactional middlemen. Same pressure applies to us.",
          "Conclusion: evolve from order-takers to collaborators and advisors.",
        ]}
      />

      <PromptBlock num={17} question="If AI handled 50% of admin tomorrow, would our reps know what to do with the extra time?" />

      <SlideBlock
        num={18}
        desc="Shift #2 takeaway — 'Death of transactional sales.'"
        points={[
          "We win on framing, interpretation, judgment, context, and strategy — not on sending catalogues.",
          "If AI drafts proposals, we ensure they solve the right problem. If AI sources merch, we design the moment around it.",
          "We're not losing value — we're being forced up the value chain.",
        ]}
      />

      {/* ═══════════════════════════════════════
          SECTION 4: What Can't Be Replaced
         ═══════════════════════════════════════ */}
      <Text style={s.sectionHeader}>What can't be replaced</Text>

      <SlideBlock
        num={19}
        desc="Section opener — '03: AI will restructure the employer-employee relationship.'"
        points={[
          "This section is about identity, belonging, and what happens when work becomes more transactional.",
          "For over a century, work has been the primary anchor of identity: income, community, social status, daily rhythm.",
          "AI increases output per employee. Fewer people produce more. Middle layers compress.",
        ]}
      />

      <SlideBlock
        num={20}
        desc="Serif statement — workforce will shift, not if but when."
        points={[
          "This isn't alarmist — it's structural. Headcount becomes less correlated with output.",
          "Companies will hire more selectively, automate more aggressively, consolidate roles.",
          "Work becomes less about time spent and more about value created.",
          "When employment becomes more transactional, people seek belonging elsewhere.",
        ]}
      />

      <SlideBlock
        num={21}
        desc="White slide — The Numbers (80%, 50%, 76K+)."
        points={[
          "80% of people believe AI will impact their daily work.",
          "50% worry their job could be automated.",
          "76K+ jobs eliminated in 2025 — data entry, telemarketing, admin support.",
          "The signal is consistent: work is being restructured.",
        ]}
      />

      <PromptBlock num={22} question="If our clients reduced headcount by 20%, what happens to our revenue?" />

      <SlideBlock
        num={23}
        desc="'That doesn't mean merch goes away' — serif statement on white."
        points={[
          "Key reframe: merch doesn't disappear. The driver changes.",
          "As AI reshapes work, belonging shifts from employer identity to community identity.",
          "People still need to belong somewhere. That need gets stronger when institutional stability weakens.",
        ]}
      />

      <SlideBlock
        num={24}
        desc="The Opportunity grid — Internal, External, Identity."
        points={[
          "Internal: merch must reflect culture and values, not just fill closets.",
          "External: build tribes — customers, advocates, insiders, culture ambassadors.",
          "Identity: move from 'gifting employees' to 'manufacturing belonging.'",
          "If we tie growth to payroll size, we're tied to a shrinking lever. Tie it to identity and belonging instead.",
        ]}
      />

      <SlideBlock
        num={25}
        desc="Shift #3 takeaway — 'Identity-driven community merch.'"
        points={[
          "Merch becomes badge signalling, not office swag.",
          "This is our biggest strategic pivot: from HR-driven fulfillment to culture-driven branding.",
          "The opportunity is expanding, not shrinking — if we position correctly.",
        ]}
      />

      {/* ═══════════════════════════════════════
          SECTION 5: 30-Day Update Intro
         ═══════════════════════════════════════ */}
      <Text style={s.sectionHeader}>30-day update intro</Text>

      <SlideBlock
        num={26}
        desc="'30 Days Later' title slide — white background, +30 watermark."
        points={[
          "Transition moment: I wrote the original article about a month ago. I thought it would hold up. It didn't.",
          "Not because I was wrong — but because new signals emerged faster than I expected.",
          "The speed I wrote about in section 1 is happening to the article itself. That's the meta-lesson.",
        ]}
      />

      <SlideBlock
        num={27}
        desc="Three new themes overview — org charts, agents, buyers."
        points={[
          "Three things have shifted my thinking: the org chart is dissolving, agents are doing the work, machines are becoming the buyers.",
          "Consider this the 'yes, and...' to everything in the first half.",
        ]}
      />

      {/* ═══════════════════════════════════════
          SECTION 6: The Org Chart is Dissolving
         ═══════════════════════════════════════ */}
      <Text style={s.sectionHeader}>The org chart is dissolving</Text>

      <SlideBlock
        num={28}
        desc="Section opener — '04: The org chart is dissolving.'"
        points={[
          "For 2,000 years, a leader could manage 3-8 people. That's why hierarchies exist.",
          "Middle management exists to coordinate — aggregate, translate, route information.",
          "AI doesn't need layers to coordinate. It doesn't need weekly pipeline reviews or 3-day spreadsheet builds.",
        ]}
      />

      <SlideBlock
        num={29}
        desc="Serif statement — Roman military, hierarchies, AI doesn't need layers."
        points={[
          "The span-of-control constraint has been fixed for 2,000 years. AI breaks it.",
          "Sequoia Capital published 'From Hierarchy to Intelligence' — profiling how Block is restructuring.",
          "This isn't theoretical. Companies are already doing it.",
        ]}
      />

      <SlideBlock
        num={30}
        desc="Case Study: Block — 3 Roles, Not 10 Layers."
        points={[
          "Block (Square + Cash App) built a 'Company World Model' — AI that maintains a live picture of the entire operation.",
          "Result: 3 roles replace 10 layers. ICs use AI for context. DRIs own problems for 90 days. Player-coaches build and develop.",
          "The manager role transforms from information processor to coach and decision-maker.",
          "Source: Sequoia Capital.",
        ]}
      />

      <SlideBlock
        num={31}
        desc="Two opposing forces — inside vs. outside our walls."
        points={[
          "Inside: 'growing the team' looks less like headcount, more like leverage per person.",
          "The question shifts from 'who do we hire?' to 'how do we make every person 3x more effective?'",
          "Outside: companies we sell to will have flatter orgs, fewer decision-makers, fewer middle managers.",
          "The org chart your SDR mapped last year might not exist next year.",
        ]}
      />

      <SlideBlock
        num={32}
        desc="Serif statement — remaining people become more important, not less."
        points={[
          "If management layers compress, the people who remain hold more authority and care more about culture.",
          "That's a very good thing for a company that manufactures belonging.",
          "Fewer people, but each one matters more. Our product becomes more valuable, not less.",
        ]}
      />

      <SlideBlock
        num={33}
        desc="Shift #4 takeaway — 'Leverage per person, not headcount.'"
        points={[
          "Management becomes coaching. AI absorbs the 'doing' part of management first.",
          "The thinking part — judgment, coaching, strategy — stays human.",
          "This applies to our team and our clients' teams.",
        ]}
      />

      {/* ═══════════════════════════════════════
          SECTION 7: Agents Are the New Workforce
         ═══════════════════════════════════════ */}
      <Text style={s.sectionHeader}>Agents are doing the work</Text>

      <SlideBlock
        num={34}
        desc="Section opener — '05: Agents are doing the work.'"
        points={[
          "A month ago, AI was a tool — prompt, respond, review. Now the biggest players agree: agents should do the work, not just assist.",
          "This is the most important shift in the update section.",
        ]}
      />

      <SlideBlock
        num={35}
        desc="Serif statement — agents should do the work, not just assist."
        points={[
          "The language has changed from 'AI-assisted' to 'AI-executed.'",
          "We went from 'use AI to help' to 'AI does it and you review.'",
          "This is a fundamental shift in the human-AI relationship.",
        ]}
      />

      <SlideBlock
        num={36}
        desc="The Convergence — Claude Code, OpenClaw, Cursor stats."
        points={[
          "Claude Code: $2.5B annual revenue. 4% of all GitHub commits — doubled in a single month.",
          "OpenClaw: 250K GitHub stars in 60 days, surpassing React's 10-year record. 3.2M monthly active users.",
          "Cursor: $2B+ annual revenue. Describe what you want in English — it writes, tests, and demos it.",
          "These aren't 3 competing tools. They're 3 signals pointing the same direction.",
        ]}
      />

      <SlideBlock
        num={37}
        desc="Beyond Code — first domino, $200B+ agentic spending."
        points={[
          "Coding is the most visible example because it's easiest to agentify. But it's just the first domino.",
          "$200B+ in agentic AI spending projected for 2026. Marketing is next.",
          "Dario Amodei gives 70-80% probability that 2026 sees the first billion-dollar company run by a single person.",
        ]}
      />

      <SlideBlock
        num={38}
        desc="The Zero-Employee Company question."
        points={[
          "What if you didn't need employees at all? This reframes the question entirely.",
          "From 'will AI take jobs?' to 'what does a company even look like when agents can do the work?'",
          "This isn't science fiction. It might already be happening.",
        ]}
      />

      <SlideBlock
        num={39}
        desc="Case Study: $20K to $1.8 Billion telehealth company."
        points={[
          "Matthew Gallagher and his brother: 2 people, $20K to start, no VC, no team of 50.",
          "Built a telehealth company using AI agents for operations, support, marketing, fulfillment.",
          "$401M in 2025 sales. Projected $1.8B in 2026 — nearly 5x growth.",
          "The most compelling proof that the zero-employee model works at scale.",
        ]}
      />

      <SlideBlock
        num={40}
        desc="'This isn't a tech story. It's a leverage story.'"
        points={[
          "Two people. No employees. AI handling operations, support, and scale.",
          "The question isn't whether this is possible. It's whether your competitors figure it out before you do.",
        ]}
      />

      <SlideBlock
        num={41}
        desc="Sequoia Capital — 'sell outcomes, not tools.'"
        points={[
          "Sequoia published 'Services: The New Software.' The next trillion-dollar company won't sell tools — it will sell outcomes.",
          "For every dollar spent on software, companies spend $6 on services.",
          "We don't sell t-shirts. We sell the experience around the t-shirt — the brand moment, the culture artifact, the belonging signal.",
          "The more AI commoditizes logistics, the more value shifts to designing the moment.",
        ]}
      />

      <SlideBlock
        num={42}
        desc="Shift #5 takeaway — 'Sell outcomes, not tools.'"
        points={[
          "The companies that win aren't the ones with the best software. They deliver outcomes people trust.",
          "This is our strategic position: we sell what automation can't replicate.",
        ]}
      />

      {/* ═══════════════════════════════════════
          SECTION 8: Leverage is Being Redefined (Buyers)
         ═══════════════════════════════════════ */}
      <Text style={s.sectionHeader}>When machines are the buyers</Text>

      <SlideBlock
        num={43}
        desc="Section opener — '06: When machines are the buyers.'"
        points={[
          "Everything above leads to a question not enough people are asking: if AI is making the decisions, who are we selling to?",
          "This isn't philosophical. It's literal and it's already happening.",
        ]}
      />

      <SlideBlock
        num={44}
        desc="Serif statement — 'who are we selling to?'"
        points={[
          "Pause and let this land. The buyer might not be a person anymore.",
          "This changes everything about how we position, how we're found, and how we close.",
        ]}
      />

      <SlideBlock
        num={45}
        desc="Agentic Procurement numbers — 45%, two-thirds, 90%."
        points={[
          "45% of B2B buyers already use AI as primary research method for identifying new suppliers.",
          "Two-thirds of B2B buyers use AI agents for vendor research — rely on them as much as or more than Google.",
          "By 2028: 90% of all B2B purchases mediated by AI agents — $15 trillion in spending through machines.",
        ]}
      />

      <SlideBlock
        num={46}
        desc="The procurement manager scenario — 500 branded polos."
        points={[
          "Tomorrow's scenario: 'I need 500 branded polos, $25K budget, find me 3 vendors.'",
          "The agent researches, compares, shortlists. Maybe places the order.",
          "The human doesn't visit a website, read an email, or take a sales call.",
          "If we're not structured data an AI can parse, we don't exist in this world.",
        ]}
      />

      <SlideBlock
        num={47}
        desc="Two Lanes — Human Buyer vs. Agent Buyer."
        points={[
          "Lane 1 (Human Buyer): relationships, trust, personal service still win. Double down on the human stuff.",
          "Lane 2 (Agent Buyer): structured data, machine-readable case studies, right databases. Completely different muscle.",
          "It's not replacing the human sales process. It's adding a second, parallel track.",
          "We need to build for both simultaneously.",
        ]}
      />

      <SlideBlock
        num={48}
        desc="Serif statement — AI can't evaluate 'does this company understand my brand?'"
        points={[
          "An AI agent can't evaluate brand understanding, creative pushback, or emotional design.",
          "Transactional vendors get eaten alive by agentic procurement.",
          "But companies that sell belonging, creative strategy, brand moments? That's where the human picks up the phone.",
          "The agent can shortlist. But it can't feel the culture of a brand. That's our moat.",
        ]}
      />

      <PromptBlock num={49} question="How would an AI procurement agent describe Brand Blvd? Would it even find us?" />

      <SlideBlock
        num={50}
        desc="Shift #6 takeaway — 'We sell what machines can't evaluate.'"
        points={[
          "Transactional vendors get eaten alive. Companies that sell belonging win.",
          "We're selling something machines can't evaluate. That might be the best competitive moat in an agentic world.",
        ]}
      />

      {/* ═══════════════════════════════════════
          SECTION 9: Closing
         ═══════════════════════════════════════ */}
      <Text style={s.sectionHeader}>Closing</Text>

      <SlideBlock
        num={51}
        desc="Meta-lesson — 'I had to update this 30 days later. That's the point.'"
        points={[
          "I wrote the original article to make a point about speed. Then I had to update it 30 days later.",
          "That's the meta-lesson. The world is changing faster than our ability to document it.",
          "The companies that win are not the ones who predict the future correctly. They build the muscle to adapt continuously.",
        ]}
      />

      <SlideBlock
        num={52}
        desc="Final slide — 'Paying attention is half the battle. The other half is doing something about it.'"
        points={[
          "Recap the 6 shifts: instant is the standard, death of transactional sales, identity-driven merch, leverage per person, sell outcomes, sell what machines can't evaluate.",
          "Paying attention is half the battle. The other half is doing something about it.",
          "That's what we're doing at Brand Blvd. This isn't just an observation — it's a call to action.",
          "Thank the room. Open for questions or discussion.",
        ]}
      />

      {/* Footer */}
      <View style={s.footer}>
        <View style={s.footerDot} />
      </View>
    </Page>
  </Document>
);

export default PresenterNotesPDF;
