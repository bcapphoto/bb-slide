import { useState } from "react";
import { IconStacks, IconIdentity, IconOrgChart, IconAgent, IconTarget, IconFastForward, IconRocket } from "@/components/SectionIcons";
import bbLogoHorizontal from "@/assets/bb-logo-horizontal-white.svg";
import { Download } from "lucide-react";

const SectionDivider = ({ icon: Icon }: { icon: React.ComponentType<{ size?: number; className?: string }> }) => (
  <div className="flex items-center gap-6 my-20 md:my-28">
    <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-brand-green/10 flex items-center justify-center">
      <Icon size={36} className="text-brand-green" />
    </div>
    <div className="flex-1">
      <div className="h-px bg-gray-200" />
    </div>
  </div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg leading-[1.8] text-gray-700 mb-5">{children}</p>
);

const PLast = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg leading-[1.8] text-gray-700 mb-10">{children}</p>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">{children}</h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">{children}</h3>
);

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-900 underline decoration-brand-green/60 decoration-1 underline-offset-4 hover:decoration-brand-green transition-colors"
  >
    {children}
  </a>
);

const ArticleSection = () => {
  const [showPdf, setShowPdf] = useState(false);

  const handleDownload = async () => {
    setShowPdf(true);
    const { pdf } = await import("@react-pdf/renderer");
    const { default: ArticlePDF } = await import("./ArticlePDF");
    const blob = await pdf(<ArticlePDF />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Dont-Miss-This-Brand-Blvd-AI.pdf";
    a.click();
    URL.revokeObjectURL(url);
    setShowPdf(false);
  };

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
          Don't miss this.
        </h1>
        <p className="text-lg leading-[1.8] text-gray-500 mb-6">
          Why I started the AI Lab, and why I want as many of you in it as possible.
        </p>
        <div className="w-16 h-1 bg-brand-green" />
      </header>

      {/* ─── Intro: Bryan's observation, then Karpathy tip of hat ─── */}
      <P>
        For months now, I've been noticing something. Two groups forming around AI, right in front of us.
      </P>
      <P>
        One group tried ChatGPT once - probably the free version, probably a while ago - saw it make something up, laughed at it, and moved on. That's most people.
      </P>
      <P>
        The other group is using the latest tools every day. Watching them do things that would have been science fiction 2 years ago. Building with them. Shipping with them. The people in that group aren't a little impressed. They're stunned.
      </P>
      <P>
        Both groups are looking at the same technology. They're coming away with completely different realities. And they're talking past each other.
      </P>
      <P>
        Andrej Karpathy - one of the founders of OpenAI, formerly ran AI at Tesla - <A href="https://x.com/karpathy/status/2042334451611693415">named this split recently</A> better than I could. He called it the 98 and the 2. That framing stuck with me because it's exactly what I've been watching happen.
      </P>
      <P>
        I've been spending a lot of time in the 2%. Not because I'm an expert. Not because I think I'm special. Because I've been paying close attention - reading, building, experimenting, watching what the frontier looks like. And what I'm seeing is exciting. A little overwhelming. And honestly, something I can't keep to myself.
      </P>
      <P>
        The short version: AI is moving faster than almost anyone is ready for. ChatGPT hit 100 million users 27x faster than Facebook. OpenAI raised $100B at an $850B valuation. Nvidia sits above $3T. Anthropic is 3 years old and growing revenue 10x a year. Markets don't place trillion-dollar bets on trends. They place them on transformations. This isn't a wave. It's the tide.
      </P>
      <P>
        Here's the thing though. I've been building tools, systems, automations. Having a lot of conversations. Doing a lot of discovery. Experimenting. Trying to streamline as much as I can and help as many people on the team as possible.
      </P>
      <P>
        But I don't want to be the only one who can do this stuff. I don't want to be the only one who sees where things are going, or the only one who gets how incredible the frontier actually is right now. I want to replicate this across the team. Teach everyone to fish instead of just handing out fish.
      </P>
      <P>
        So here's what I want to walk you through. Six shifts I've been watching, what they mean for us, and then what we're doing about it.
      </P>
      <ul className="space-y-2 mb-5 pl-6 border-l-2 border-brand-green/40">
        <li className="text-lg leading-[1.8] text-gray-700">1. Expectations have shifted.</li>
        <li className="text-lg leading-[1.8] text-gray-700">2. AI is taking over the "doing."</li>
        <li className="text-lg leading-[1.8] text-gray-700">3. The org chart is dissolving.</li>
        <li className="text-lg leading-[1.8] text-gray-700">4. Agents are doing the work.</li>
        <li className="text-lg leading-[1.8] text-gray-700">5. The workforce is shifting.</li>
        <li className="text-lg leading-[1.8] text-gray-700">6. The buyer isn't a person anymore.</li>
      </ul>
      <PLast>
        And at the end, I want to tell you about the AI Lab we're launching at Brand Blvd. I'm genuinely excited for you to hear about it.
      </PLast>

      {/* ─── SECTION 1: Expectations ─── */}
      <SectionDivider icon={IconFastForward} />

      <H2>Expectations have shifted.</H2>

      <H3>The floor of "good enough" just moved</H3>
      <P>
        AI is training people to expect immediate. Not faster. Immediate. 37% of consumers now go to AI first instead of Google. Nearly 50% of Google searches include AI summaries. When the default answer to "how do I do this?" is 5 seconds and not 5 minutes, patience collapses.
      </P>
      <PLast>
        We used to tolerate friction because information had gatekeepers. AI eliminated the gatekeepers. And once that becomes normal in one domain, it becomes expected in all of them - including ours.
      </PLast>

      <H3>"Good enough, right now" beats "perfect, later"</H3>
      <P>
        As a photographer, I used to spend 20 to 30 minutes cutting backgrounds in Photoshop with the lasso tool. It was billable time. Now I upload to Canva, click a button, and 5 seconds later it's done.
      </P>
      <P>
        Is it pixel-perfect? Maybe not. But it's good enough. And it's instant. Multiply that by every small decision people make in a day and you can see the shift - the market is moving toward velocity over precision, especially in early-stage decisions.
      </P>
      <PLast>
        Think about what that means for quoting, for proofing, for sourcing. A 48-hour quote turnaround in a world where AI gives you 3 options in 3 seconds doesn't feel slow. It feels broken.
      </PLast>

      <H3>Exploration is free</H3>
      <P>
        There was a time when exploring options had a real cost. 3 campaign directions. 5 taglines. Multiple design explorations. That used to mean meetings, creative waits, agency fees. Now? Type a prompt. Get ideation in seconds.
      </P>
      <PLast>
        When exploration becomes free, behaviour changes. People test more. Compare more. Iterate more. And they expect more options, faster - before they ever pick up the phone.
      </PLast>

      <H3>Why this matters to us</H3>
      <P>
        The 2% have already been re-trained by these tools. They expect instant. They explore more, compare more, iterate more. They reach for an agency, a vendor, a specialist much later in their process than they used to.
      </P>
      <P>
        And here's the framing I want to land on - because it'd be easy to read this as "we're too slow." That's not the point.
      </P>
      <P>
        The gap between what clients are starting to expect and what most agencies are set up to deliver is widening. That gap is where both the risk and the opportunity live. The agencies that close it get pulled toward the new defaults. The ones that don't slowly look analog.
      </P>
      <PLast>
        We get to choose which side of that gap we're on. That's why the AI Lab matters now and not in 2 years.
      </PLast>

      {/* ─── SECTION 2: The Doing ─── */}
      <SectionDivider icon={IconStacks} />

      <H2>AI is taking over the "doing."</H2>

      <H3>Execution gets cheap. Judgment gets scarce.</H3>
      <P>
        AI handles rule-based, repetitive, information-heavy tasks faster, cheaper, and at scale. And it's increasingly handling complex cognitive work too - GPT-4 (3 versions old now) scored in the 90th percentile of the Bar Exam. AI systems hit gold-medal level on the International Mathematical Olympiad in 2025.
      </P>
      <P>
        The point isn't that AI is smarter than us. The point is that execution has gotten dramatically cheaper. The barrier to doing something has collapsed.
      </P>
      <P>
        AI can generate 10 campaign ideas in seconds. But it doesn't know which one fits your brand, your culture, what's politically viable, or what will actually move people. That's where we live. Our role becomes less about the doing, and more about deciding what should be done. Framing the problem. Defining success. Owning the outcome.
      </P>
      <PLast>
        The human role shifts up the stack. That's not theory - that's what the 2% are building around right now.
      </PLast>

      <H3>What the people building this are saying</H3>
      <div className="space-y-6 mb-10">
        <blockquote className="border-l-2 border-brand-green/40 pl-6 text-lg italic text-gray-600 leading-[1.8]">
          "The future of work is not about AI replacing people. It's about people who use AI replacing people who don't."
          <footer className="not-italic text-sm text-gray-500 mt-2">- Satya Nadella, CEO, Microsoft</footer>
        </blockquote>
        <blockquote className="border-l-2 border-brand-green/40 pl-6 text-lg italic text-gray-600 leading-[1.8]">
          "The real value of AI is helping salespeople spend more time with customers and less time doing administrative work."
          <footer className="not-italic text-sm text-gray-500 mt-2">- Marc Benioff, CEO, Salesforce</footer>
        </blockquote>
        <blockquote className="border-l-2 border-brand-green/40 pl-6 text-lg italic text-gray-600 leading-[1.8]">
          "We'll be there in 3-6 months, where AI is writing 90% of the code - and in 12 months, AI writes all of it."
          <footer className="not-italic text-sm text-gray-500 mt-2">- Dario Amodei, CEO, Anthropic</footer>
        </blockquote>
      </div>
      <P>
        I don't share the Nadella quote to scare anyone. I share it because it's why I'm not waiting. It's why we're building the AI Lab. Instead of telling everyone "this is on you," I want to say: this is why I want to help.
      </P>
      <PLast>
        The Lab exists so we can learn these tools together, on company time, with real projects from our real work. That's a much better answer than "good luck out there."
      </PLast>

      <H3>Why this matters to us</H3>
      <P>
        AI-empowered systems can draft proposals, compare pricing, and source products instantly. More buyers will use those tools to do parts of our current work themselves. Travel and retail already lost their transactional middlemen when search got automated. The same pressure is heading toward our industry.
      </P>
      <P>
        That doesn't break us. It pushes us closer to where the value actually is.
      </P>
      <PLast>
        If AI drafts the proposal, we make sure it solves the right problem. If AI generates comparisons, we make sure the strategy holds together. If AI sources the merch, we design the moment around it. We're not losing value - we're being pulled up the value chain. That's a good thing if we're ready for it.
      </PLast>

      {/* ─── SECTION 3: Org charts ─── */}
      <SectionDivider icon={IconOrgChart} />

      <H2>The org chart is dissolving.</H2>

      <H3>A 2,000-year-old constraint just broke</H3>
      <P>
        For 2,000 years, organizations have been built around 1 constraint: a leader can effectively manage 3 to 8 people. That number hasn't changed since the Roman military. It's why we have hierarchies. It's why middle management exists - to aggregate, translate, and route.
      </P>
      <P>
        Here's the thing... AI doesn't need layers to coordinate. It doesn't need a weekly pipeline review to know what's happening. It doesn't need 3 days of spreadsheet building so a VP can ask a question about trends.
      </P>
      <P>
        Sequoia Capital published a piece called "From Hierarchy to Intelligence" profiling Block (the company behind Cash App and Square). They built what they call a "Company World Model" - an AI system that maintains a continuously updated picture of the entire operation. The result? 3 roles instead of 10 layers:
      </P>
      <ul className="space-y-4 mb-10">
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Individual contributors</span> who use the model for context instead of waiting for management approval.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Directly Responsible Individuals</span> who own a problem for 90 days with cross-team authority.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Player-coaches</span> who build things and develop people at the same time.
        </li>
      </ul>
      <PLast>
        The "doing" part of management - gathering data, building reports, spotting trends - that's the stuff AI absorbs first. The thinking part - judgment, coaching, strategy - stays human.
      </PLast>

      <H3>Why this matters to us</H3>
      <P>
        2 things. They pull in opposite directions, which is what makes it interesting.
      </P>
      <P>
        Inside our walls, "growing the team" starts to look less like adding headcount and more like increasing leverage per person. The question shifts from "who do we hire next?" to "how do we make every person on this team 3x more effective?"
      </P>
      <P>
        Outside our walls, the companies we sell to are going to look different. Flatter orgs. Fewer decision-makers. The org chart your SDR mapped last year might not exist next year.
      </P>
      <PLast>
        Here's the part that makes me optimistic. If management layers compress, the people who remain become more important, not less. Higher leverage. More authority. Closer to the work and to the culture. That's a very good thing for a company that manufactures belonging.
      </PLast>

      {/* ─── SECTION 4: Agents ─── */}
      <SectionDivider icon={IconAgent} />

      <H2>Agents are doing the work.</H2>

      <H3>From assistant to operator</H3>
      <P>
        When I say AI is "taking over the doing," I don't just mean it's a tool you prompt and review. That was last year. The biggest players in tech are converging on the same conclusion: AI agents should do the work, not just help with it.
      </P>
      <ul className="space-y-4 mb-10">
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Anthropic's Claude</span> shipped 74 releases in 52 days. Claude Code generates over $2.5 billion in annual revenue. 4% of all public GitHub commits are now authored by Claude Code - a number that doubled in 1 month.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">OpenClaw</span> hit 250,000 GitHub stars in 60 days - surpassing React's 10-year record. 3.2 million monthly active users. Traffic grew 925% in a single month.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Cursor</span> launched version 3 on April 2. You describe what you want in plain English and it writes, tests, and demos it. Revenue doubled in 3 months. They're at over $2B annually.
        </li>
      </ul>
      <PLast>
        These aren't 3 competing tools. They're 3 signals pointing the same direction: AI isn't assisting anymore. It's executing.
      </PLast>

      <H3>$20K to $1.8B with 2 people</H3>
      <P>
        The example I can't stop thinking about is Matthew Gallagher.
      </P>
      <P>
        Gallagher and his brother launched a telehealth company with $20,000 in startup capital. No venture funding. Just the 2 of them and AI agents handling nearly everything - operations, customer support, marketing, fulfillment. The agents don't assist. They run the business.
      </P>
      <P>
        In 2025, they did $401 million in sales. In 2026, they're on track for $1.8 billion. 2 people. No employees. A $20,000 bet turned into one of the fastest-growing companies in the country.
      </P>
      <PLast>
        This isn't a tech story. It's a leverage story. The same AI tools available to a 2-person startup are available to everyone - including us. The question is who figures out how to use them first.
      </PLast>

      <H3>Why this matters to us</H3>
      <P>
        Sequoia published another piece I think is one of the most important things I've read this year: <A href="https://www.sequoiacap.com/article/ais-600b-question/">"AI's $600B Question"</A> set the scale of this shift, and their follow-up "Services: The New Software" named the mechanism. The argument: the next trillion-dollar company won't sell tools. It will sell outcomes. They split work into 2 categories:
      </P>
      <ul className="space-y-4 mb-5">
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Intelligence</span> - rule-based tasks. Coding, testing, drafting, matching. Clear inputs and outputs.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Judgment</span> - experience-driven decisions. What to build. When to ship. What to push back on. Things that need context, intuition, and accountability.
        </li>
      </ul>
      <P>
        AI has crossed the line where it handles most intelligence work autonomously. What's left is judgment. And for every dollar companies spend on software, they spend 6 on services. The opportunity isn't in better tools. It's in better outcomes.
      </P>
      <PLast>
        Now think about that in our context. We don't sell t-shirts. We sell the experience around the t-shirt - the brand moment, the culture artifact, the belonging signal. The more AI commoditizes the logistics of merch, the more the value shifts to what we're actually good at: designing the moment, framing the story, understanding what the brand needs before they can articulate it. That's what each of you does every day. And it's the thing AI can't replace.
      </PLast>

      {/* ─── SECTION 5: Workforce / Identity ─── */}
      <SectionDivider icon={IconIdentity} />

      <H2>The workforce is shifting.</H2>

      <H3>Why there's so much anxiety right now</H3>
      <P>
        Here's some context for why AI feels heavy in the air. These are the numbers most people hear:
      </P>
      <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-5">
        <li>80% of people believe AI will impact their daily work.</li>
        <li>50% worry their job could be automated.</li>
        <li>76K+ jobs eliminated in 2025.</li>
      </ul>
      <P>
        These aren't fake numbers. They're real, and they're exactly why so many people feel uneasy about AI right now. If all you ever hear is "automation eliminated 76,000 jobs," of course that's where your head goes.
      </P>
      <P>
        But that's the part of the story most people are getting. It's not the only part.
      </P>
      <PLast>
        Here at Brand Blvd, we're not trying to do more with fewer people. We're trying to make every person on this team more powerful, more effective, more valuable. AI isn't here to replace you. It's here to make you better at what you already do well. That's the version of this story I want us to be living in.
      </PLast>

      <H3>Where the upside actually is</H3>
      <P>
        Work is moving away from time spent and toward value created. That's the real shift.
      </P>
      <P>
        The people who lean into this stuff get to shape what comes next. They get to decide what their role looks like in 2 years instead of being handed it. That's why we're making space for as many of you as possible to be part of this. Not as a test. As an invitation.
      </P>
      <PLast>
        Nobody on this team is a lost cause for being in the 98%. The whole point of the Lab is to bring people across.
      </PLast>

      <H3>Why this matters to us</H3>
      <P>
        If employee attachment to traditional jobs weakens across the market, merch budgets tied strictly to payroll size are vulnerable. But the need for belonging doesn't disappear - it relocates.
      </P>
      <P>
        Work becomes a function. Identity becomes something broader. Community, values, tribe - those anchors strengthen when institutional stability weakens.
      </P>
      <ul className="space-y-4 mb-10">
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Internal</span> - Merch reflects culture and values, not just fills closets.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">External</span> - Build tribes of customers, advocates, insiders, ambassadors.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Identity</span> - Move from "gifting employees" to "manufacturing belonging."
        </li>
      </ul>
      <PLast>
        If we tie our growth to payroll size, we're tied to a shrinking lever. If we tie our growth to identity and belonging, we're tied to something expanding. That's the shift. And every person on this team is part of making it happen.
      </PLast>

      {/* ─── SECTION 6: Buyers ─── */}
      <SectionDivider icon={IconTarget} />

      <H2>The buyer isn't a person anymore.</H2>

      <H3>The question I don't think enough people are asking</H3>
      <P>
        Everything above leads to a question I don't see enough people in our industry sitting with: if AI is making the decisions, who are we actually selling to?
      </P>
      <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-5">
        <li>45% of B2B buyers already use AI as their primary research method for identifying new suppliers.</li>
        <li>Two-thirds of B2B buyers use AI agents for vendor research and rely on them as much as - or more than - Google.</li>
        <li>By 2028, analysts predict AI agents will mediate 90% of all B2B purchases - $15 trillion in spending through machines.</li>
      </ul>
      <P>
        Today, a procurement manager who needs branded merch for an event might Google it, ask a colleague, or check their inbox for a vendor they've used before.
      </P>
      <PLast>
        Tomorrow, they tell their AI procurement agent: "I need 500 branded polos for a company retreat in August. Budget is $25K. Find me 3 vendors with fast turnaround, good reviews, and sustainability options." The agent researches, compares, shortlists. Maybe even places the order. The human doesn't visit a website. Doesn't read an email. Doesn't take a sales call.
      </PLast>

      <H3>Two lanes</H3>
      <P>
        Will every company operate this way? No. Not yet. Adoption curves are messy. There will be a long, uneven transition where some buyers are fully agentic and others still want to pick up the phone. But the direction is clear, and it creates 2 distinct lanes:
      </P>
      <ul className="space-y-4 mb-10">
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Lane 1:</span> A human is still the buyer. Relationships, trust, and personal service still win. The SDR call matters. Showing up and reading the room is the differentiator. We double down on the human stuff.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Lane 2:</span> An agent is doing the research, shortlisting, or buying. How does Brand Blvd show up when the first touchpoint is an algorithm? Are we structured data an AI can parse? Are our case studies machine-readable? Are we in the right databases and feeds?
        </li>
      </ul>
      <PLast>
        It's not replacing the human sales process. It's adding a second, parallel track. Both are muscles we get to build - together.
      </PLast>

      <H3>Why this matters to us</H3>
      <P>
        If AI agents are handling the intelligence work of procurement - comparing prices, checking specs, evaluating turnaround - the only differentiator in that layer is data. And data is a commodity.
      </P>
      <P>
        But here's what an AI procurement agent can't evaluate:
      </P>
      <ul className="list-disc pl-8 space-y-1 text-lg text-gray-700 mb-5">
        <li>Does this company actually understand my brand?</li>
        <li>Will they push back when my idea is off?</li>
        <li>Will they design a merch experience that makes our people feel something?</li>
      </ul>
      <P>
        That's judgment. That's the work that requires context, intuition, accountability. That's exactly where we live. The transactional vendors - the ones just fulfilling orders - get eaten by agentic procurement. An AI agent doesn't need a sales rep to place a reorder. It just does it.
      </P>
      <PLast>
        But the companies that sell belonging, design brand moments, bring creative strategy to the table - those are the ones the human decision-maker still picks up the phone for. The agent can shortlist vendors. It can't feel the culture of a brand. We're not selling t-shirts. We're selling something machines can't evaluate. That might be the best competitive moat in an agentic world.
      </PLast>

      {/* ─── SECTION 7: The AI Lab ─── */}
      <SectionDivider icon={IconRocket} />

      <H2>So what is the AI Lab?</H2>

      <P>
        I've been talking about the AI Lab throughout this piece, but I haven't really told you what it is. So here's the simple version.
      </P>
      <P>
        The AI Lab is a small pilot group - leadership plus 3 to 5 team members - who will spend the next 3 months learning how to actually use AI as a working tool. Not theory. Not tutorials. Building real things for your real job.
      </P>
      <P>
        Here's the honest part: I don't have this all figured out. Nobody does. The tools are moving too fast for anyone to have a perfect playbook. So we're going to learn together as we go. How fast we move, what we build, what we focus on - a lot of that will depend on who's in the room. That's kind of the point.
      </P>

      <H3>What we'll be working on</H3>
      <ul className="space-y-4 mb-10">
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          How to spot the workflows in your day-to-day that are good candidates to hand over to AI.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          What a "skill" is and how it helps AI do a job the way you'd do it.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          What an "agent" is and how it's different from just chatting with ChatGPT.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          How to actually build these things yourself.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          How to use the tools that exist right now.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          How to set things up so they run on autopilot.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          How to schedule tasks so work happens while you sleep.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          How to connect your tools so your systems can talk to each other.
        </li>
      </ul>
      <PLast>
        None of that requires a computer science degree. It requires curiosity, willingness to try things, and time to practice.
      </PLast>

      <H3>The time commitment</H3>
      <ul className="space-y-4 mb-10">
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">90 minutes per week</span> - a live working session.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">A half day per month</span> - for a deeper build.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Homework in between</span> - you'll be building on your own too.
        </li>
      </ul>
      <PLast>
        That's it. 3 months. Real work. Real skills. Real things you'll use every day after.
      </PLast>

      <H3>The impact</H3>
      <P>
        If this goes the way I think it can, the people who come out of this pilot won't just be "better at AI." They'll have a different relationship with their own work. Tasks that used to eat hours will take minutes. Things you used to put off because they were tedious will get done automatically. You'll be able to do more of what you actually love, and less of the stuff that drains you.
      </P>
      <PLast>
        And the people in this first cohort will become the teachers for everyone else. This isn't a one-and-done program - it's the beginning of something we want the whole team to be part of over time.
      </PLast>

      {/* ─── CLOSING ─── */}
      <div className="my-20 md:my-28">
        <div className="h-px bg-gray-300 mb-14" />
        <h3 className="font-serif text-2xl md:text-3xl leading-tight text-gray-900 mb-6">
          So where does that leave us?
        </h3>
        <P>
          I shared all of this because you deserve to see what I'm seeing. Not the filtered version. Not the corporate-approved summary. The actual picture of what the 2% are already building around.
        </P>
        <P>
          AI is compressing time. It's taking over execution. It's dissolving org charts. Agents are doing work humans used to do. The way people buy is changing.
        </P>
        <P>
          That's a lot. I know.
        </P>
        <P>
          The companies that win in this aren't the ones who predict the future correctly. They're the ones who build the muscle to adapt continuously. To watch the signals. To ask the hard questions. To be willing to say, "what we believed last month needs revising." That's what the AI Lab is for.
        </P>
        <P>
          If any of this gets you excited - or even just curious - that's enough. Apply. You don't need to be an AI expert. You just need to want to learn.
        </P>
        <P>
          And if this round isn't the right timing for you, that's OK too. Based on how this pilot goes, we see this growing into something bigger - more cohorts, more people, more ways to make sure everyone on this team has the skills to thrive as things keep moving faster around us.
        </P>
        <P>
          This is just the beginning.
        </P>
        <p className="text-lg leading-[1.8] text-gray-700 font-medium">
          Let's go build some cool things.
        </p>
      </div>

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

export default ArticleSection;
