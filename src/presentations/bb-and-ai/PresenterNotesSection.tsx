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
    // Slide 0 - Cover: "Don't miss this."
    [
      "Frame this as a team conversation, not a presentation. The whole point is to bring people in - not push them.",
      "Subtitle is the thesis: this is why the AI Lab exists, and the goal is to get as many of us in it as possible.",
      "Set tone: this is exciting, not scary. We're going to look at what's actually happening and what we get to do about it.",
    ],
    // Slide 1 - Karpathy quote (98/2 framing)
    [
      "Karpathy is the organizing idea for the whole talk - 98% tried ChatGPT once and moved on, 2% are watching it do real work.",
      "Both groups looking at the same tech, totally different realities. That gap is what we're going to walk through today.",
      "Don't make people feel bad for being in the 98%. Most of the world is. The point is to bring people across.",
    ],
    // Slide 2 - "I've been spending time in the 2%"
    [
      "Personal note: I'm not an expert. I've just been paying attention - reading, building, experimenting.",
      "I want to bring as many of you over as I can. That's the whole thesis of the AI Lab.",
      "This is an invitation, not a warning.",
    ],
    // Slide 3 - Discussion prompt
    [
      "Discussion: Where do you think you sit right now - closer to the 98 or the 2?",
      "Let people answer honestly. No wrong answers. Most will say closer to 98 - that's fine.",
      "Use this to take temperature of the room before diving in.",
    ],
    // Slide 4 - 6 shifts overview
    [
      "Quick map of where we're going: 6 things the 2% are watching.",
      "1) Expectations have shifted. 2) Taking over the doing. 3) Org chart dissolving. 4) Agents doing the work. 5) Workforce shifting. 6) Machines becoming the buyers.",
      "Each one ends with what I think it means for us at Brand Blvd.",
    ],
  ],
  expectations: [
    // 0 - Section opener
    ["Shift 1 of 6. Expectations have shifted. AI has reset what 'good enough' and 'on time' mean.", "Don't frame as 'we're behind.' Frame as 'the floor moved - we get to choose which side of the new floor we're on.'"],
    // 1 - Serif: immediate, not faster
    ["AI isn't just training people to expect faster. It's training them to expect immediate.", "37% of consumers go to AI first instead of Google. Nearly 50% of searches include AI summaries.", "That expectation leaks into every conversation - including the ones clients have with us."],
    // 2 - Growth chart (time to 100M users)
    ["ChatGPT hit 100M users in 2 months. Facebook took 4.5 years. 27x faster.", "When tech spreads that fast, it resets what 'normal' feels like - in months, not years.", "This is the adoption curve that trained the new expectation."],
    // 3 - Good enough, right now
    ["This is the heart of this shift: 'good enough, right now' beats 'perfect, later.'", "My photographer example - 30 minutes of lasso-tool background cutting replaced by 5 seconds in Canva.", "The market is shifting toward velocity over precision, especially at the front of the process. Think quoting, proofing, sourcing."],
    // 4 - Explore more, before pickup
    ["The 2% explore more, compare more, iterate more - before they ever pick up the phone.", "Exploration used to cost money, time, coordination. Now it costs a prompt.", "When exploration becomes free, behaviour changes. Clients arrive to the conversation further along than they used to."],
    // 5 - Gap framing
    ["The reframe: we're not 'behind.' A gap is opening between what clients are starting to expect and what most agencies are set up to deliver.", "That gap is where both the risk AND the opportunity live - we get to choose which side of it we're on.", "Avoid 'if we don't move we die' tone. Honest framing: agencies that close this gap get pulled forward."],
    // 6 - Discussion prompt
    ["Discussion: What's something you've seen a client expect lately that they wouldn't have asked for a year ago?", "Look for real examples - turnaround times, proof speed, self-serve options. Helps make the abstract concrete."],
    // 7 - Shift #1 takeaway: Good enough, right now
    ["Shift #1: Good enough, right now.", "The floor of 'good enough' moved. Velocity beats precision at the front of the process.", "The AI Lab is where we figure out how to meet the new floor together - without losing the craft on the back end."],
  ],
  "human-value": [
    // 0 - Section opener
    ["Shift 2 of 6. The 'doing' is being absorbed - drafting, sourcing, comparing, generating.", "The point isn't 'we're being replaced.' It's 'we get pulled up the value chain.'"],
    // 1 - Serif: execution cheap, judgment scarce
    ["AI handles rule-based, repetitive, information-heavy work faster, cheaper, at scale.", "Our role moves up the stack - to knowing what to do, not doing it.", "Execution gets cheap. Judgment gets scarce. That's the trade we want."],
    // 2 - 3 Quotes (Nadella / Benioff / Amodei)
    ["Nadella: people who use AI will replace people who don't.", "Benioff: real value is helping salespeople spend more time with customers, less on admin.", "Amodei: 90% of code AI-written in 3-6 months, all of it in 12.", "These aren't predictions from outsiders. These are CEOs restructuring trillion-dollar companies around this thesis."],
    // 3 - Nadella reframe (the WHY of AI Lab)
    ["This is the moment to reframe Nadella. The honest reading isn't 'figure it out yourself or get replaced.'", "The honest reading is: that's exactly why I'm not waiting. That's why we're building the AI Lab.", "Instead of 'this is on you' - the message is 'this is why I want to help.'"],
    // 4 - Pulled Up (white slide)
    ["What's getting automated: drafting proposals, pricing comparisons, sourcing - the transactional middle. Same as travel and retail.", "Where we get to live: making sure the proposal solves the right problem. Designing the moment around the merch.", "We get pulled up the value chain. That's a good thing if we're ready for it."],
    // 5 - Discussion prompt
    ["Discussion: If AI handled half your admin tomorrow, what would you do with the time?", "Open question. The answers reveal where people see their own value-add - and where we should focus the AI Lab."],
    // 6 - Shift #2 takeaway: Pulled up the stack
    ["Shift #2: We get pulled up the stack.", "Less doing, more deciding. Framing the problem. Defining success. Owning the outcome.", "That's what AI can't replace - and that's the work we get to focus on."],
  ],
  "org-charts": [
    // 0 - Section opener
    ["Shift 3 of 6. Hierarchies exist because for 2,000 years a person could only manage 3-8 people. AI breaks that constraint."],
    // 1 - Serif: Roman military
    ["3-8 person span of control hasn't changed since the Roman military. That's why we have hierarchies.", "AI doesn't need layers to coordinate. It breaks the fundamental constraint behind management structure."],
    // 2 - Block case study (3 roles, not 10 layers)
    ["Block (Square + Cash App) is restructuring around AI: 3 roles replace 10 layers.", "ICs use AI for context instead of waiting for approval. DRIs own a problem for 90 days. Player-coaches build and develop.", "Source: Sequoia Capital - 'From Hierarchy to Intelligence.' This is happening right now, not someday."],
    // 3 - Two Forces (inside vs outside)
    ["Inside our walls: 'growing the team' looks less like headcount and more like leverage per person.", "From 'who do we hire next?' to 'how do we make every person 3x more effective?'", "Outside: clients will have flatter orgs, fewer decision-makers. The org chart your SDR mapped last year might not exist next year."],
    // 4 - Serif: remaining people more important
    ["When management layers compress, the people who remain become MORE important - more authority, closer to the work, closer to the culture.", "That's a very good thing for a company that manufactures belonging."],
    // 5 - Shift #3 takeaway: Leverage per person
    ["Shift #3: Leverage per person, not headcount.", "Management becomes coaching. The 'doing' part of management gets absorbed.", "Judgment, coaching, strategy stay human."],
  ],
  agents: [
    // 0 - Section opener
    ["Shift 4 of 6. Last year AI was a tool. Now it's becoming an operator - doing the work, not just assisting."],
    // 1 - Serif: tool to agent
    ["The shift in language: from 'AI-assisted' to 'AI-executed.'", "Biggest players are converging on agents that do the work, not just help with it.", "This is the most important update from a year ago."],
    // 2 - 3 Signals Same Direction (Claude Code / OpenClaw / Cursor)
    ["Claude Code: $2.5B annual revenue. 74 releases in 52 days. 4% of all GitHub commits - doubled in a month.", "OpenClaw: 250K GitHub stars in 60 days. Surpassed React's 10-year record. 3.2M MAU. 925% traffic growth.", "Cursor: $2B+ annual revenue. Describe in English, it writes/tests/demos. Revenue doubled in 3 months.", "These aren't 3 competing tools. They're 3 signals pointing the same direction."],
    // 3 - $20K to $1.8B case study (Gallagher)
    ["Matthew Gallagher and his brother. 2 people. $20K. No VC.", "Built a telehealth company using AI agents for operations, support, marketing, fulfillment.", "$401M in 2025 sales. Projected $1.8B in 2026. Nearly 5x growth in a year.", "This is the proof point that small + AI-leveraged can play at a massive scale."],
    // 4 - Serif: leverage story
    ["This isn't a tech story. It's a leverage story.", "The same AI tools available to that 2-person startup are available to us.", "The question isn't 'is this possible?' It's 'who figures it out first?'"],
    // 5 - Sequoia: Services - The New Software
    ["Sequoia's thesis: the next trillion-dollar company won't sell tools. It will sell outcomes.", "For every $1 spent on software, companies spend $6 on services. That's where the opportunity is."],
    // 6 - We don't sell t-shirts
    ["In our context: we don't sell t-shirts. We sell the experience around the t-shirt.", "Brand moment. Culture artifact. Belonging signal.", "The more AI commoditizes logistics, the more value shifts to what we're already good at: designing the moment."],
    // 7 - Shift #4 takeaway: Sell outcomes
    ["Shift #4: Sell outcomes, not tools.", "The companies that win deliver outcomes people trust.", "That's what we already do - we just need to keep leaning into it."],
  ],
  identity: [
    // 0 - Section opener
    ["Shift 5 of 6. The workforce is shifting. This is the section where it's most important to manage tone.", "Goal: replace anxiety with agency. Don't pretend the numbers aren't real - acknowledge them, then reframe."],
    // 1 - "What most people hear" (numbers reframed)
    ["80% believe AI will impact their work. 50% worry about automation. 76K+ jobs eliminated in 2025.", "Frame these as 'what most people hear' - context for why there's so much anxiety, not a scare tactic.", "Footer is the pivot: these are real, but they're not the whole story."],
    // 2 - "Fewer people" reframed (BB version)
    ["This is the BB version - and the most important slide in this section.", "We're NOT trying to do more with fewer people. We're trying to make every person on this team more powerful, more effective, more valuable.", "AI isn't here to replace you. It's here to make you better at what you already do well. Say it directly."],
    // 3 - "Shape what comes next" + nobody is a lost cause
    ["The people who lean in get to shape what comes next.", "We're making space for as many of you as possible to be part of this.", "Critical line: nobody is a lost cause for being in the 98%. The whole point of the AI Lab is to bring people across."],
    // 4 - Discussion prompt
    ["Discussion: What part of your daily work would you most want AI to take off your plate?", "This is a pull question. People talking about what they'd hand off = people imagining themselves using AI."],
    // 5 - Merch doesn't go away
    ["Reframe for our actual product: merch and swag don't go away.", "As work shifts, belonging moves from employer identity to community identity.", "The need is changing - it's not disappearing."],
    // 6 - Where Belonging Relocates (3 grid cards)
    ["Internal: more intentional - reflects culture and values, not just fills closets.", "External: more tribal - tribes of customers, advocates, insiders, ambassadors.", "Identity: badge signalling - move from 'gifting employees' to 'manufacturing belonging.'"],
    // 7 - Shift #5 takeaway: Belonging is expanding
    ["Shift #5: Belonging is expanding.", "Tie our growth to payroll size, we're tied to a shrinking lever. Tie it to identity and belonging, we're tied to something expanding.", "This is the optimistic flip on the workforce shift - and it's specifically why BB is well-positioned."],
  ],
  buyers: [
    // 0 - Section opener
    ["Shift 6 of 6. The question almost nobody in our industry is asking yet."],
    // 1 - Serif: who are we selling to?
    ["If AI is making the decisions, who are we actually selling to?", "Pause and let it land. The buyer might not be a person anymore."],
    // 2 - Agentic Procurement Numbers
    ["45% of B2B buyers already use AI as primary research method for identifying suppliers.", "Two-thirds trust AI agents for vendor research as much as or more than Google.", "By 2028: 90% of B2B purchases mediated by AI agents - $15 trillion in spending."],
    // 3 - Procurement scenario (500 branded polos)
    ["Tomorrow's brief: '500 branded polos, $25K budget, August retreat. Find me 3 vendors.'", "Agent researches, compares, shortlists. Maybe even places the order.", "The human doesn't visit a website, read an email, or take a sales call."],
    // 4 - Two Lanes (Human Buyer / Agent Buyer)
    ["Lane 1 - Human Buyer: relationships, trust, personal service still win. The SDR call matters. Reading the room is the differentiator.", "Lane 2 - Agent Buyer: are we structured data an AI can parse? Are our case studies machine-readable? Are we in the right databases?", "It's not replacing the human sales process. It's adding a second, parallel track. We need to build for both."],
    // 5 - Serif: agent can't evaluate
    ["An AI agent can't evaluate: does this company understand my brand? Will they push back? Will they make our people feel something?", "The agent can shortlist vendors. It can't feel the culture of a brand. That's our moat."],
    // 6 - Discussion prompt
    ["Discussion: If an AI agent had to describe Brand Blvd in 2 sentences, what would we want it to say?", "This is a strategic question disguised as a fun one. The answers tell us how we should be positioning."],
    // 7 - Shift #6 takeaway: Sell what machines can't evaluate
    ["Shift #6: We sell what machines can't evaluate.", "Transactional vendors get eaten by agentic procurement.", "Companies that sell belonging? That's where the human picks up the phone."],
  ],
  "ai-lab": [
    // 0 - Section opener
    ["Pivot point. The whole article/talk has been teasing the AI Lab. Now we finally say what it is.", "Keep the energy up - this is the payoff, not homework."],
    // 1 - Hammer: small pilot, real work, 3 months
    ["The simple version: leadership + 3-5 team members. 3 months. Real work - not theory, not tutorials.", "Say it plainly. This is a pilot, not a training program."],
    // 2 - Honest part: I don't have it all figured out
    ["Say this out loud. The tools are moving too fast for anyone to have a perfect playbook.", "We're learning together. How fast we move depends on who's in the room. That's kind of the point.", "Humility here builds trust - and invites people to shape it with you."],
    // 3 - What we'll work on - part 1
    ["First 4 areas: spot the workflows, what a skill is, what an agent is, build it yourself.", "Grounded and concrete. These are things you'll actually do - not watch someone do."],
    // 4 - What we'll work on - part 2
    ["Next 4: use the tools that exist now, automate, schedule, connect systems.", "The 'work happens while you sleep' line usually lands - make eye contact there."],
    // 5 - No CS degree required
    ["Drop this in as reassurance. Curiosity + willingness + practice. That's the prereq.", "If someone's worried about being 'technical enough,' this is for them."],
    // 6 - The time commitment
    ["90 minutes per week, half day per month, homework in between.", "Say it simply. People want to know the ask.", "That's it. 3 months. Real skills they'll use every day after."],
    // 7 - Impact: hours to minutes
    ["The promise isn't 'you'll be better at AI.' It's a different relationship with your own work.", "Hours become minutes. Tedious stuff gets done automatically.", "More of what you love, less of what drains you. That's the real offer."],
    // 8 - This is the beginning
    ["First cohort becomes the teachers for everyone else.", "This isn't one-and-done - it's the beginning of something we want the whole team to be part of.", "Sets up the final soft-close: the door is open and stays open."],
  ],
  closing: [
    // 0 - Recap of 6 shifts
    ["Quick recap of all 6 shifts before the invitation.", "1) Close the gap. 2) Pulled up the stack. 3) Leverage per person. 4) Sell outcomes. 5) Belonging is expanding. 6) Sell what machines can't evaluate.", "Pause here. Let people see the whole map together."],
    // 1 - Build the muscle to adapt
    ["The companies that win aren't the ones who predict the future correctly.", "They're the ones who build the muscle to adapt continuously.", "That's exactly what the AI Lab is for - not training, not a course, a muscle we build together."],
    // 2 - Soft close: invitation
    ["Read this slowly. This is the actual ask, and the tone matters.", "If any of this gets you excited - or even just curious - that's enough. You don't need to be an expert. You just need to want to learn.", "And if this round isn't the right timing, that's OK. We see this growing - more cohorts, more people, more ways to bring everyone along.", "Pull, not push. The door is open and stays open."],
    // 3 - Final: Let's go build some cool things
    ["End on the line: 'Let's go build some cool things.'", "Apply for the AI Lab. We'd love to have you.", "Don't moralize. Don't end on stakes. End on excitement and the open door."],
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
    a.download = "Dont-Miss-This-Presenter-Notes.pdf";
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
          <p className="text-lg text-gray-500 mb-6">Don't miss this. - Brand Blvd AI Lab</p>
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
