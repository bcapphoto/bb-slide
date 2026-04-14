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
    fontSize: 11,
    lineHeight: 1.8,
    color: "#374151",
    paddingTop: 60,
    paddingBottom: 60,
    paddingHorizontal: 72,
  },
  h1: {
    fontFamily: "DM Serif Display",
    fontSize: 32,
    lineHeight: 1.15,
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 11,
    fontStyle: "italic",
    color: "#6B7280",
    marginBottom: 16,
  },
  h2: {
    fontFamily: "DM Serif Display",
    fontSize: 22,
    lineHeight: 1.2,
    color: "#111827",
    marginBottom: 20,
  },
  h3: {
    fontFamily: "Barlow Condensed",
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: "#6B7280",
    marginBottom: 10,
    marginTop: 28,
  },
  p: {
    marginBottom: 10,
  },
  pLast: {
    marginBottom: 24,
  },
  greenBar: {
    width: 48,
    height: 3,
    backgroundColor: green,
    marginBottom: 40,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 40,
  },
  dividerDot: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: green,
    opacity: 0.2,
    marginRight: 12,
  },
  dividerLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: "#E5E7EB",
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 4,
    paddingLeft: 12,
  },
  bullet: {
    width: 12,
    fontSize: 11,
    color: "#6B7280",
  },
  bulletText: {
    flex: 1,
  },
  accentItem: {
    paddingLeft: 14,
    borderLeftWidth: 2,
    borderLeftColor: green,
    borderLeftStyle: "solid",
    marginBottom: 8,
  },
  accentLabel: {
    color: "#111827",
    fontWeight: 600,
  },
  quote: {
    paddingLeft: 14,
    borderLeftWidth: 2,
    borderLeftColor: green,
    borderLeftStyle: "solid",
    fontStyle: "italic",
    color: "#6B7280",
    marginBottom: 12,
  },
  quoteAuthor: {
    fontStyle: "normal",
    fontSize: 9,
    color: "#9CA3AF",
    marginTop: 4,
  },
  closeH: {
    fontFamily: "DM Serif Display",
    fontSize: 18,
    color: "#111827",
    marginBottom: 14,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  footerDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: green,
  },
});

const Bullet = ({ children }: { children: string }) => (
  <View style={s.bulletItem}>
    <Text style={s.bullet}>•</Text>
    <Text style={s.bulletText}>{children}</Text>
  </View>
);

const Divider = () => (
  <View style={s.divider}>
    <View style={s.dividerDot} />
    <View style={s.dividerLine} />
  </View>
);

const ArticlePDF = () => (
  <Document title="Don't miss this." author="BrandBlvd">
    {/* ─── Page 1 ─── */}
    <Page size="LETTER" style={s.page}>
      <Text style={s.h1}>Don't miss this.</Text>
      <Text style={s.subtitle}>Why I started the AI Lab, and why I want as many of you in it as possible.</Text>
      <View style={s.greenBar} />

      <Text style={s.p}>
        For months now, I've been noticing something. Two groups forming around AI, right in front of us.
      </Text>
      <Text style={s.p}>
        One group tried ChatGPT once - probably the free version, probably a while ago - saw it make something up, laughed at it, and moved on. That's most people.
      </Text>
      <Text style={s.p}>
        The other group is using the latest tools every day. Watching them do things that would have been science fiction 2 years ago. Building with them. Shipping with them. The people in that group aren't a little impressed. They're stunned.
      </Text>
      <Text style={s.p}>
        Both groups are looking at the same technology. They're coming away with completely different realities. And they're talking past each other.
      </Text>
      <Text style={s.p}>
        Andrej Karpathy - one of the founders of OpenAI, formerly ran AI at Tesla - named this split recently better than I could. He called it the 98 and the 2. That framing stuck with me because it's exactly what I've been watching happen.
      </Text>
      <Text style={s.p}>
        I've been spending a lot of time in the 2%. Not because I'm an expert. Not because I think I'm special. Because I've been paying close attention - reading, building, experimenting, watching what the frontier looks like. And what I'm seeing is exciting. A little overwhelming. And honestly, something I can't keep to myself.
      </Text>
      <Text style={s.p}>
        The short version: AI is moving faster than almost anyone is ready for. ChatGPT hit 100 million users 27x faster than Facebook. OpenAI raised $100B at an $850B valuation. Nvidia sits above $3T. Anthropic is 3 years old and growing revenue 10x a year. Markets don't place trillion-dollar bets on trends. They place them on transformations. This isn't a wave. It's the tide.
      </Text>
      <Text style={s.p}>
        Here's the thing though. I've been building tools, systems, automations. Having a lot of conversations. Doing a lot of discovery. Experimenting. Trying to streamline as much as I can and help as many people on the team as possible.
      </Text>
      <Text style={s.p}>
        But I don't want to be the only one who can do this stuff. I don't want to be the only one who sees where things are going, or the only one who gets how incredible the frontier actually is right now. I want to replicate this across the team. Teach everyone to fish instead of just handing out fish.
      </Text>
      <Text style={s.p}>
        So here's what I want to walk you through. Six shifts I've been watching, what they mean for us, and then what we're doing about it.
      </Text>
      <View style={s.accentItem}><Text>1. Expectations have shifted.</Text></View>
      <View style={s.accentItem}><Text>2. AI is taking over the "doing."</Text></View>
      <View style={s.accentItem}><Text>3. The org chart is dissolving.</Text></View>
      <View style={s.accentItem}><Text>4. Agents are doing the work.</Text></View>
      <View style={s.accentItem}><Text>5. The workforce is shifting.</Text></View>
      <View style={s.accentItem}><Text>6. The buyer isn't a person anymore.</Text></View>
      <Text style={s.pLast}>
        And at the end, I want to tell you about the AI Lab we're launching at Brand Blvd. I'm genuinely excited for you to hear about it.
      </Text>

      <Divider />

      <Text style={s.h2}>Expectations have shifted.</Text>

      <Text style={s.h3}>The floor of "good enough" just moved</Text>
      <Text style={s.p}>
        AI is training people to expect immediate. Not faster. Immediate. 37% of consumers now go to AI first instead of Google. Nearly 50% of Google searches include AI summaries. When the default answer to "how do I do this?" is 5 seconds and not 5 minutes, patience collapses.
      </Text>
      <Text style={s.pLast}>
        We used to tolerate friction because information had gatekeepers. AI eliminated the gatekeepers. Once that becomes normal in one domain, it becomes expected in all of them - including ours.
      </Text>

      <Text style={s.h3}>"Good enough, right now" beats "perfect, later"</Text>
      <Text style={s.p}>
        As a photographer, I used to spend 20 to 30 minutes cutting backgrounds in Photoshop with the lasso tool. It was billable time. Now I upload to Canva, click a button, and 5 seconds later it's done.
      </Text>
      <Text style={s.p}>
        Is it pixel-perfect? Maybe not. But it's good enough. And it's instant. The market is moving toward velocity over precision, especially at the front of the process.
      </Text>
      <Text style={s.pLast}>
        Think about what that means for quoting, for proofing, for sourcing. A 48-hour quote turnaround in a world where AI gives you 3 options in 3 seconds doesn't feel slow. It feels broken.
      </Text>

      <Text style={s.h3}>Exploration is free</Text>
      <Text style={s.p}>
        3 campaign directions. 5 taglines. Multiple design explorations. That used to mean meetings, creative waits, agency fees. Now? Type a prompt. Get ideation in seconds.
      </Text>
      <Text style={s.pLast}>
        When exploration becomes free, behaviour changes. People test more. Compare more. Iterate more. They expect more options, faster - before they ever pick up the phone.
      </Text>

      <Text style={s.h3}>Why this matters to us</Text>
      <Text style={s.p}>
        The 2% have already been re-trained by these tools. They expect instant. They explore more, compare more, iterate more. They reach for an agency, a vendor, a specialist much later in their process than they used to.
      </Text>
      <Text style={s.p}>
        And here's the framing I want to land on - because it'd be easy to read this as "we're too slow." That's not the point.
      </Text>
      <Text style={s.p}>
        The gap between what clients are starting to expect and what most agencies are set up to deliver is widening. That gap is where both the risk and the opportunity live. The agencies that close it get pulled toward the new defaults. The ones that don't slowly look analog.
      </Text>
      <Text style={s.pLast}>We get to choose which side of that gap we're on. That's why the AI Lab matters now and not in 2 years.</Text>

      <Divider />

      <Text style={s.h2}>AI is taking over the "doing."</Text>

      <Text style={s.h3}>Execution gets cheap. Judgment gets scarce.</Text>
      <Text style={s.p}>
        AI handles rule-based, repetitive, information-heavy tasks faster, cheaper, and at scale. And it's increasingly handling complex cognitive work too - GPT-4 (3 versions old now) scored in the 90th percentile of the Bar Exam. AI systems hit gold-medal level on the International Mathematical Olympiad in 2025.
      </Text>
      <Text style={s.p}>
        The point isn't that AI is smarter than us. The point is that execution has gotten dramatically cheaper. The barrier to doing something has collapsed.
      </Text>
      <Text style={s.p}>
        AI can generate 10 campaign ideas in seconds. But it doesn't know which one fits your brand, your culture, what's politically viable, or what will actually move people. That's where we live. Our role becomes less about the doing, and more about deciding what should be done. Framing the problem. Defining success. Owning the outcome.
      </Text>
      <Text style={s.pLast}>The human role shifts up the stack. That's not theory - that's what the 2% are building around right now.</Text>

      <Text style={s.h3}>What the people building this are saying</Text>
      <View style={s.quote}>
        <Text>"The future of work is not about AI replacing people. It's about people who use AI replacing people who don't."</Text>
        <Text style={s.quoteAuthor}>- Satya Nadella, CEO, Microsoft</Text>
      </View>
      <View style={s.quote}>
        <Text>"The real value of AI is helping salespeople spend more time with customers and less time doing administrative work."</Text>
        <Text style={s.quoteAuthor}>- Marc Benioff, CEO, Salesforce</Text>
      </View>
      <View style={s.quote}>
        <Text>"We'll be there in 3-6 months, where AI is writing 90% of the code - and in 12 months, AI writes all of it."</Text>
        <Text style={s.quoteAuthor}>- Dario Amodei, CEO, Anthropic</Text>
      </View>
      <Text style={s.p}>
        I don't share the Nadella quote to scare anyone. I share it because it's why I'm not waiting. It's why we're building the AI Lab. Instead of telling everyone "this is on you," I want to say: this is why I want to help.
      </Text>
      <Text style={s.pLast}>
        The Lab exists so we can learn these tools together, on company time, with real projects from our real work. That's a much better answer than "good luck out there."
      </Text>

      <Text style={s.h3}>Why this matters to us</Text>
      <Text style={s.p}>
        AI-empowered systems can draft proposals, compare pricing, and source products instantly. More buyers will use those tools to do parts of our current work themselves. Travel and retail already lost their transactional middlemen when search got automated. The same pressure is heading toward our industry.
      </Text>
      <Text style={s.p}>That doesn't break us. It pushes us closer to where the value actually is.</Text>
      <Text style={s.pLast}>
        If AI drafts the proposal, we make sure it solves the right problem. If AI generates comparisons, we make sure the strategy holds together. If AI sources the merch, we design the moment around it. We're not losing value - we're being pulled up the value chain. That's a good thing if we're ready for it.
      </Text>

      <Divider />

      <Text style={s.h2}>The org chart is dissolving.</Text>

      <Text style={s.h3}>A 2,000-year-old constraint just broke</Text>
      <Text style={s.p}>
        For 2,000 years, organizations have been built around 1 constraint: a leader can effectively manage 3 to 8 people. That number hasn't changed since the Roman military. It's why we have hierarchies. It's why middle management exists - to aggregate, translate, and route.
      </Text>
      <Text style={s.p}>
        Here's the thing... AI doesn't need layers to coordinate. It doesn't need a weekly pipeline review to know what's happening. It doesn't need 3 days of spreadsheet building so a VP can ask a question about trends.
      </Text>
      <Text style={s.p}>
        Sequoia Capital published a piece called "From Hierarchy to Intelligence" profiling Block (the company behind Cash App and Square). They built what they call a "Company World Model" - an AI system that maintains a continuously updated picture of the entire operation. The result? 3 roles instead of 10 layers:
      </Text>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Individual contributors</Text> who use the model for context instead of waiting for management approval.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Directly Responsible Individuals</Text> who own a problem for 90 days with cross-team authority.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Player-coaches</Text> who build things and develop people at the same time.</Text>
      </View>
      <Text style={s.pLast}>
        The "doing" part of management - gathering data, building reports, spotting trends - that's the stuff AI absorbs first. The thinking part - judgment, coaching, strategy - stays human.
      </Text>

      <Text style={s.h3}>Why this matters to us</Text>
      <Text style={s.p}>2 things. They pull in opposite directions, which is what makes it interesting.</Text>
      <Text style={s.p}>
        Inside our walls, "growing the team" starts to look less like adding headcount and more like increasing leverage per person. The question shifts from "who do we hire next?" to "how do we make every person on this team 3x more effective?"
      </Text>
      <Text style={s.p}>
        Outside our walls, the companies we sell to are going to look different. Flatter orgs. Fewer decision-makers. The org chart your SDR mapped last year might not exist next year.
      </Text>
      <Text style={s.pLast}>
        Here's the part that makes me optimistic. If management layers compress, the people who remain become more important, not less. Higher leverage. More authority. Closer to the work and to the culture. That's a very good thing for a company that manufactures belonging.
      </Text>

      <Divider />

      <Text style={s.h2}>Agents are doing the work.</Text>

      <Text style={s.h3}>From assistant to operator</Text>
      <Text style={s.p}>
        When I say AI is "taking over the doing," I don't just mean it's a tool you prompt and review. That was last year. The biggest players in tech are converging on the same conclusion: AI agents should do the work, not just help with it.
      </Text>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Anthropic's Claude</Text> shipped 74 releases in 52 days. Claude Code generates over $2.5 billion in annual revenue. 4% of all public GitHub commits are now authored by Claude Code - a number that doubled in 1 month.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>OpenClaw</Text> hit 250,000 GitHub stars in 60 days - surpassing React's 10-year record. 3.2 million monthly active users. Traffic grew 925% in a single month.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Cursor</Text> launched version 3 on April 2. You describe what you want in plain English and it writes, tests, and demos it. Revenue doubled in 3 months. They're at over $2B annually.</Text>
      </View>
      <Text style={s.pLast}>These aren't 3 competing tools. They're 3 signals pointing the same direction: AI isn't assisting anymore. It's executing.</Text>

      <Text style={s.h3}>$20K to $1.8B with 2 people</Text>
      <Text style={s.p}>The example I can't stop thinking about is Matthew Gallagher.</Text>
      <Text style={s.p}>
        Gallagher and his brother launched a telehealth company with $20,000 in startup capital. No venture funding. Just the 2 of them and AI agents handling nearly everything - operations, customer support, marketing, fulfillment. The agents don't assist. They run the business.
      </Text>
      <Text style={s.p}>
        In 2025, they did $401 million in sales. In 2026, they're on track for $1.8 billion. 2 people. No employees. A $20,000 bet turned into one of the fastest-growing companies in the country.
      </Text>
      <Text style={s.pLast}>
        This isn't a tech story. It's a leverage story. The same AI tools available to a 2-person startup are available to everyone - including us. The question is who figures out how to use them first.
      </Text>

      <Text style={s.h3}>Why this matters to us</Text>
      <Text style={s.p}>
        Sequoia published another piece I think is one of the most important things I've read this year: "Services: The New Software." The argument: the next trillion-dollar company won't sell tools. It will sell outcomes. They split work into 2 categories:
      </Text>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Intelligence</Text> - rule-based tasks. Coding, testing, drafting, matching. Clear inputs and outputs.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Judgment</Text> - experience-driven decisions. What to build. When to ship. What to push back on.</Text>
      </View>
      <Text style={s.p}>
        AI has crossed the line where it handles most intelligence work autonomously. What's left is judgment. And for every dollar companies spend on software, they spend 6 on services. The opportunity isn't in better tools. It's in better outcomes.
      </Text>
      <Text style={s.pLast}>
        We don't sell t-shirts. We sell the experience around the t-shirt - the brand moment, the culture artifact, the belonging signal. The more AI commoditizes the logistics of merch, the more the value shifts to what we're actually good at: designing the moment, framing the story, understanding what the brand needs before they can articulate it.
      </Text>

      <Divider />

      <Text style={s.h2}>The workforce is shifting.</Text>

      <Text style={s.h3}>Why there's so much anxiety right now</Text>
      <Text style={s.p}>Here's some context for why AI feels heavy in the air. These are the numbers most people hear:</Text>
      <Bullet>80% of people believe AI will impact their daily work.</Bullet>
      <Bullet>50% worry their job could be automated.</Bullet>
      <Bullet>76K+ jobs eliminated in 2025.</Bullet>
      <Text style={s.p}>
        These aren't fake numbers. They're real, and they're exactly why so many people feel uneasy about AI right now. If all you ever hear is "automation eliminated 76,000 jobs," of course that's where your head goes.
      </Text>
      <Text style={s.p}>But that's the part of the story most people are getting. It's not the only part.</Text>
      <Text style={s.pLast}>
        Here at Brand Blvd, we're not trying to do more with fewer people. We're trying to make every person on this team more powerful, more effective, more valuable. AI isn't here to replace you. It's here to make you better at what you already do well. That's the version of this story I want us to be living in.
      </Text>

      <Text style={s.h3}>Where the upside actually is</Text>
      <Text style={s.p}>Work is moving away from time spent and toward value created. That's the real shift.</Text>
      <Text style={s.p}>
        The people who lean into this stuff get to shape what comes next. They get to decide what their role looks like in 2 years instead of being handed it. That's why we're making space for as many of you as possible to be part of this. Not as a test. As an invitation.
      </Text>
      <Text style={s.pLast}>Nobody on this team is a lost cause for being in the 98%. The whole point of the Lab is to bring people across.</Text>

      <Text style={s.h3}>Why this matters to us</Text>
      <Text style={s.p}>
        If employee attachment to traditional jobs weakens across the market, merch budgets tied strictly to payroll size are vulnerable. But the need for belonging doesn't disappear - it relocates.
      </Text>
      <Text style={s.p}>
        Work becomes a function. Identity becomes something broader. Community, values, tribe - those anchors strengthen when institutional stability weakens.
      </Text>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Internal</Text> - Merch reflects culture and values, not just fills closets.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>External</Text> - Build tribes of customers, advocates, insiders, ambassadors.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Identity</Text> - Move from "gifting employees" to "manufacturing belonging."</Text>
      </View>
      <Text style={s.pLast}>
        If we tie our growth to payroll size, we're tied to a shrinking lever. If we tie our growth to identity and belonging, we're tied to something expanding.
      </Text>

      <Divider />

      <Text style={s.h2}>The buyer isn't a person anymore.</Text>

      <Text style={s.h3}>The question I don't think enough people are asking</Text>
      <Text style={s.p}>
        Everything above leads to a question I don't see enough people in our industry sitting with: if AI is making the decisions, who are we actually selling to?
      </Text>
      <Bullet>45% of B2B buyers already use AI as their primary research method for identifying new suppliers.</Bullet>
      <Bullet>Two-thirds of B2B buyers use AI agents for vendor research and rely on them as much as - or more than - Google.</Bullet>
      <Bullet>By 2028, analysts predict AI agents will mediate 90% of all B2B purchases - $15 trillion in spending through machines.</Bullet>
      <Text style={s.p}>
        Today, a procurement manager who needs branded merch might Google it, ask a colleague, or check their inbox for a vendor they've used.
      </Text>
      <Text style={s.pLast}>
        Tomorrow, they tell their AI procurement agent: "I need 500 branded polos for a company retreat in August. Budget is $25K. Find me 3 vendors with fast turnaround, good reviews, and sustainability options." The agent researches, compares, shortlists. Maybe even places the order. The human doesn't visit a website. Doesn't read an email. Doesn't take a sales call.
      </Text>

      <Text style={s.h3}>Two lanes</Text>
      <Text style={s.p}>
        Will every company operate this way? No. Not yet. There will be a long, uneven transition. But the direction is clear, and it creates 2 distinct lanes:
      </Text>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Lane 1:</Text> A human is still the buyer. Relationships, trust, and personal service still win. The SDR call matters. We double down on the human stuff.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Lane 2:</Text> An agent is doing the research, shortlisting, or buying. Are we structured data an AI can parse? Are our case studies machine-readable? Are we in the right databases?</Text>
      </View>
      <Text style={s.pLast}>It's not replacing the human sales process. It's adding a second, parallel track. Both are muscles we get to build - together.</Text>

      <Text style={s.h3}>Why this matters to us</Text>
      <Text style={s.p}>
        If AI agents are handling the intelligence work of procurement - comparing prices, checking specs, evaluating turnaround - the only differentiator in that layer is data. And data is a commodity.
      </Text>
      <Text style={s.p}>But here's what an AI procurement agent can't evaluate:</Text>
      <Bullet>Does this company actually understand my brand?</Bullet>
      <Bullet>Will they push back when my idea is off?</Bullet>
      <Bullet>Will they design a merch experience that makes our people feel something?</Bullet>
      <Text style={s.p}>
        That's judgment. That's exactly where we live. The transactional vendors get eaten by agentic procurement. An AI agent doesn't need a sales rep to place a reorder. It just does it.
      </Text>
      <Text style={s.pLast}>
        But the companies that sell belonging, design brand moments, bring creative strategy to the table - those are the ones the human picks up the phone for. The agent can shortlist vendors. It can't feel the culture of a brand.
      </Text>

      <Divider />

      <Text style={s.h2}>So what is the AI Lab?</Text>

      <Text style={s.p}>
        I've been talking about the AI Lab throughout this piece, but I haven't really told you what it is. So here's the simple version.
      </Text>
      <Text style={s.p}>
        The AI Lab is a small pilot group - leadership plus 3 to 5 team members - who will spend the next 3 months learning how to actually use AI as a working tool. Not theory. Not tutorials. Building real things for your real job.
      </Text>
      <Text style={s.pLast}>
        Here's the honest part: I don't have this all figured out. Nobody does. The tools are moving too fast for anyone to have a perfect playbook. So we're going to learn together as we go. How fast we move, what we build, what we focus on - a lot of that will depend on who's in the room. That's kind of the point.
      </Text>

      <Text style={s.h3}>What we'll be working on</Text>
      <View style={s.accentItem}><Text>How to spot the workflows in your day-to-day that are good candidates to hand over to AI.</Text></View>
      <View style={s.accentItem}><Text>What a "skill" is and how it helps AI do a job the way you'd do it.</Text></View>
      <View style={s.accentItem}><Text>What an "agent" is and how it's different from just chatting with ChatGPT.</Text></View>
      <View style={s.accentItem}><Text>How to actually build these things yourself.</Text></View>
      <View style={s.accentItem}><Text>How to use the tools that exist right now.</Text></View>
      <View style={s.accentItem}><Text>How to set things up so they run on autopilot.</Text></View>
      <View style={s.accentItem}><Text>How to schedule tasks so work happens while you sleep.</Text></View>
      <View style={s.accentItem}><Text>How to connect your tools so your systems can talk to each other.</Text></View>
      <Text style={s.pLast}>
        None of that requires a computer science degree. It requires curiosity, willingness to try things, and time to practice.
      </Text>

      <Text style={s.h3}>The time commitment</Text>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>90 minutes per week</Text> - a live working session.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>A half day per month</Text> - for a deeper build.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Homework in between</Text> - you'll be building on your own too.</Text>
      </View>
      <Text style={s.pLast}>
        That's it. 3 months. Real work. Real skills. Real things you'll use every day after.
      </Text>

      <Text style={s.h3}>The impact</Text>
      <Text style={s.p}>
        If this goes the way I think it can, the people who come out of this pilot won't just be "better at AI." They'll have a different relationship with their own work. Tasks that used to eat hours will take minutes. Things you used to put off because they were tedious will get done automatically. You'll be able to do more of what you actually love, and less of the stuff that drains you.
      </Text>
      <Text style={s.pLast}>
        And the people in this first cohort will become the teachers for everyone else. This isn't a one-and-done program - it's the beginning of something we want the whole team to be part of over time.
      </Text>

      <Divider />

      <Text style={s.closeH}>So where does that leave us?</Text>
      <Text style={s.p}>
        I shared all of this because you deserve to see what I'm seeing. Not the filtered version. The actual picture of what the 2% are already building around.
      </Text>
      <Text style={s.p}>
        The companies that win in this aren't the ones who predict the future correctly. They're the ones who build the muscle to adapt continuously. That's what the AI Lab is for.
      </Text>
      <Text style={s.p}>
        If any of this gets you excited - or even just curious - that's enough. Apply. You don't need to be an AI expert. You just need to want to learn.
      </Text>
      <Text style={s.p}>
        And if this round isn't the right timing for you, that's OK too. Based on how this pilot goes, we see this growing into something bigger - more cohorts, more people, more ways to make sure everyone on this team has the skills to thrive as things keep moving faster around us.
      </Text>
      <Text style={s.p}>This is just the beginning.</Text>
      <Text style={s.pLast}>Let's go build some cool things.</Text>

      <View style={s.footer}>
        <View style={s.footerDot} />
      </View>
    </Page>
  </Document>
);

export default ArticlePDF;
