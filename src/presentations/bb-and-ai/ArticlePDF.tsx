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
    <Page size="LETTER" style={s.page}>
      <Text style={s.h1}>Don't miss this.</Text>
      <Text style={s.subtitle}>Why I started the AI Lab, and why I want as many of you in it as possible.</Text>
      <View style={s.greenBar} />

      <Text style={s.p}>AI doesn't mean the same thing for all people.</Text>
      <Text style={s.p}>
        Most people use AI like Google. They search. They summarize. They rewrite. That's useful, but it barely scratches the surface of what these tools can actually do.
      </Text>
      <Text style={s.p}>When you look at the data, there's a gap forming in AI usage.</Text>
      <Text style={s.p}>It splits into 3 groups:</Text>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>60 to 70%</Text> use AI at a surface level. A smarter Google. Ask a question, get an answer, move on.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>20 to 30%</Text> use it for light productivity. Drafting an email. Summarizing a doc. Cleaning up some writing.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Less than 5%</Text> use it for real leverage. Automating workflows. Building agents and skills. Doing things that felt like science fiction 2 years ago.</Text>
      </View>
      <Text style={s.p}>
        Those 3 groups are looking at the same technology and coming away with completely different realities. The first group thinks it's a novelty that hallucinates sometimes whereas the third group is stunned every week by what just became possible. And they're all talking past each other.
      </Text>
      <Text style={s.p}>I spend most of my time in that third group.</Text>
      <Text style={s.p}>Not because I'm an expert.</Text>
      <Text style={s.p}>Not because I think I'm special.</Text>
      <Text style={s.p}>
        But because I've been paying attention; reading, building, experimenting, watching from the front lines. What I'm seeing is exciting. It's a little overwhelming. It's kind of science fiction.
      </Text>
      <Text style={s.p}>AI is moving faster than almost anyone is ready for.</Text>
      <Text style={s.p}>ChatGPT hit 100 million users 27x faster than Facebook.</Text>
      <Text style={s.p}>OpenAI raised $100B at an $850B valuation.</Text>
      <Text style={s.p}>Nvidia is worth over $3T.</Text>
      <Text style={s.p}>Anthropic (the company behind Claude) is 3 years old and growing 10x a year.</Text>
      <Text style={s.p}>Markets don't place trillion-dollar bets on trends. They place them on transformations. This isn't a wave. It's the tide.</Text>
      <Text style={s.p}>Here's the thing though ...</Text>
      <Text style={s.p}>
        I've been building tools, systems and automations here at Brand Blvd ever since I started. I've been having lots of conversations, asking questions, doing lots of discovery. I've been experimenting. I've been trying to streamline as much as I can and help as many people on the team as possible.
      </Text>
      <Text style={s.p}>That's my job.</Text>
      <Text style={s.p}>
        But I don't want to be the only one who can do this stuff. I don't want to be the only one who sees where things are going, or the only one who gets how incredible things are. I want to replicate that across the team. I want to teach everyone to fish instead of just giving out fish.
      </Text>
      <Text style={s.p}>First, I'm going to tell you what I've seen in AI land.</Text>
      <Text style={s.p}>Then I'm going to tell you what I think it means for us.</Text>
      <Text style={s.pLast}>Then I'm going to tell you what we're going to do about it.</Text>

      <Divider />

      <Text style={s.h2}>The 5 shifts AI has brought</Text>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>1. Expectations have shifted.</Text> What clients expect from us is changing.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>2. AI is doing the work.</Text> Execution is getting cheaper by the day.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>3. The org chart is shifting.</Text> Companies are getting flatter.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>4. The workforce is shifting.</Text> Who gets hired, and how, is changing.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>5. The buyer may not be a person anymore.</Text> AI agents are making purchasing decisions.</Text>
      </View>
      <Text style={s.pLast}>Let's walk through them.</Text>

      <Divider />

      <Text style={s.h2}>1. Expectations have shifted.</Text>

      <Text style={s.h3}>The floor of "good enough" just moved</Text>
      <Text style={s.p}>
        AI is training people to expect immediate. Not faster. Immediate. There's a difference. Faster means you shaved a few minutes off. Immediate means the wait is gone. 37% of consumers now go to AI first instead of Google. Nearly half of Google searches include AI summaries. When the default answer to "how do I do this?" is 5 seconds and not 5 minutes, patience collapses.
      </Text>
      <Text style={s.p}>We used to tolerate friction because information had gatekeepers.</Text>
      <Text style={s.pLast}>
        AI eliminated the gatekeepers. And once that becomes normal in one domain, it becomes expected in all of them - including ours.
      </Text>

      <Text style={s.h3}>"Good enough, right now" beats "perfect, later"</Text>
      <Text style={s.p}>
        As a photographer, I used to spend 20 to 30 minutes cutting backgrounds in Photoshop with the lasso tool. It was billable time. I was the expert and the only one who could do it. Now, anyone can upload a photo to Canva, click a button, and 5 seconds later it's done.
      </Text>
      <Text style={s.p}>The point isn't that quality stops mattering.</Text>
      <Text style={s.p}>
        It's that AI is collapsing the time between "I need this" and "here it is." The gap between fast and thoughtful is closing. Multiply that by every small decision people make in a day and you can see the shift.
      </Text>
      <Text style={s.p}>Think about what that means for the work we do.</Text>
      <Text style={s.pLast}>
        A 48-hour quote turnaround on a proof, in a world where AI gives you 3 options in 3 seconds, doesn't feel slow. It feels broken.
      </Text>

      <Text style={s.h3}>Exploration is free</Text>
      <Text style={s.p}>There was a time when exploring options had a real cost.</Text>
      <Text style={s.p}>3 campaign directions. 5 taglines. Multiple design explorations.</Text>
      <Text style={s.p}>That used to mean meetings, waiting for creative work, agency fees.</Text>
      <Text style={s.p}>Now? Type a prompt. You get ideation in seconds.</Text>
      <Text style={s.pLast}>
        When exploration becomes free, behaviour changes. People test more. Compare more. Iterate more. And they expect more options, faster - before they ever pick up the phone.
      </Text>

      <Text style={s.h3}>Why this matters to us</Text>
      <Text style={s.p}>
        People are starting to expect instant. They are exploring more, comparing more, iterating more on their own. They're reaching for an agency or a vendor or a specialist much later in their process than they used to.
      </Text>
      <Text style={s.p}>Don't be mistaken though.</Text>
      <Text style={s.p}>I'm not saying "we're too slow" - that's not the point.</Text>
      <Text style={s.p}>
        What I'm saying is that the gap between what clients expect and what most distributors and agencies are set up to deliver is widening. That gap is where both the risk and the opportunity live. The agencies that close it get pulled toward the new defaults. The ones that don't slowly look analog.
      </Text>
      <Text style={s.pLast}>We get to choose which side of that gap we're on.</Text>

      <Divider />

      <Text style={s.h2}>2. AI is doing the work.</Text>
      <Text style={s.pLast}>
        If expectations are the outside pressure, this is the inside shift. AI isn't just answering questions anymore. It's doing the work that used to fill our days.
      </Text>

      <Text style={s.h3}>Execution gets cheap. Judgment gets scarce.</Text>
      <Text style={s.p}>
        AI handles rule-based, repetitive, information-heavy tasks faster, cheaper, and at scale. And it's increasingly handling complex thinking too.
      </Text>
      <Text style={s.p}>GPT-4 (3 versions old now) scored in the 90th percentile of the Bar Exam.</Text>
      <Text style={s.p}>
        AI systems hit gold-medal level on the International Mathematical Olympiad in 2025. For context, that's one of the hardest math competitions in the world, and most humans who sit it are national-team level.
      </Text>
      <Text style={s.p}>The point isn't that AI is smarter than us.</Text>
      <Text style={s.p}>(Although some would argue that's already true.)</Text>
      <Text style={s.p}>The point is that execution has become dramatically cheaper.</Text>
      <Text style={s.p}>The barrier to doing something has collapsed.</Text>
      <Text style={s.p}>
        AI can generate 10 campaign ideas for a comapny in seconds. But it doesn't know which one fits their brand, their culture, what's politically viable, or what will actually move people.
      </Text>
      <Text style={s.p}>That's where we live.</Text>
      <Text style={s.p}>
        Our role becomes less about the doing, and more about deciding what should be done. Framing the problem. Defining success. Owning the outcome.
      </Text>
      <Text style={s.pLast}>
        When you can "do" something quicker than ever, you can also "do" the wrong thing quicker than ever. So taste and judgement are more important than ever before. That's why our role and our value shifts up the stack.
      </Text>

      <Text style={s.h3}>From assistant to operator</Text>
      <Text style={s.p}>
        This isn't hypothetical. The biggest players in tech are all converging on the same conclusion. AI should "do" the work, not just "help" with it.
      </Text>
      <Text style={s.p}>
        Quick primer before the examples: the AI tools you may have used, like ChatGPT, mostly answer questions. The new generation of tools can actually perform tasks. Write the document. Send the email. Build the report. Place the order. And now they're even doing it autonomously, without direction from a human.
      </Text>
      <Text style={s.p}>
        Claude Code, OpenClaw, Cursor. You don't need to know what any of these tools do day-to-day. The point is this: all of the big-market bets and all of the biggest players in AI are all telling the same story:
      </Text>
      <Text style={s.pLast}>AI isn't assisting anymore. It's executing. And often times - by itself.</Text>

      <Text style={s.h3}>$20K to $1.8B with 2 people</Text>
      <Text style={s.p}>Here's the most extreme example I've seen.</Text>
      <Text style={s.p}>
        Matthew Gallagher launched a telehealth company with $20,000. He set it up with AI agents handling nearly everything - operations, customer support, marketing, fulfillment. The agents don't assist. They run the business.
      </Text>
      <Text style={s.p}>In 2025, they did $401 million in sales. He just hired his brother. In 2026, they're on track for $1.8 billion. 2 people. No employees.</Text>
      <Text style={s.p}>
        Is this the typical story? No. It's an extreme outlier. Most companies aren't going to run on 2 people and a pile of AI agents. But it shows what's now possible. And those same AI tools are available to everyone, including us.
      </Text>
      <Text style={s.pLast}>
        The important question isn't "will we run Brand Blvd with 2 people?" The question is "who figures out how to use these tools first, and points them at the right problems?"
      </Text>

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
        <Text>"We'll be there in 3 to 6 months, where AI is writing 90% of the code - and in 12 months, AI writes all of it."</Text>
        <Text style={s.quoteAuthor}>- Dario Amodei, CEO of Anthropic (the company behind Claude)</Text>
      </View>
      <Text style={s.p}>
        There's some doom and gloom and scare tactics around AI that has people thinking it'll replace them.
      </Text>
      <Text style={s.p}>Let's be clear. Will there be some displacement in the workforce? Certainly.</Text>
      <Text style={s.p}>
        But I believe it'll mostly be the case for those who don't adapt and change and elevate. The ones who are displaced are the ones who don't shift their value up the stack.
      </Text>
      <Text style={s.p}>I don't say that to scare anyone.</Text>
      <Text style={s.p}>I share it because it's why we're not waiting.</Text>
      <Text style={s.pLast}>Instead of saying "figure it out" we are saying "we want to help."</Text>

      <Text style={s.h3}>A useful way to think about it</Text>
      <Text style={s.p}>
        Sequoia Capital (one of the most respected venture capital firms in the world) published a piece called "Services: The New Software." The argument is that the opportunities of the future don't come from selling tools. They come from selling outcomes.
      </Text>
      <Text style={s.p}>They split work into 2 categories:</Text>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Intelligence</Text> - rule-based tasks. Coding, testing, drafting, matching. Clear inputs, clear outputs.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Judgment</Text> - experience-driven decisions. What to build. When to ship. What to push back on. Things that need context, intuition, and accountability.</Text>
      </View>
      <Text style={s.p}>
        AI has crossed the line where it handles most intelligence work on its own. What's left is judgment. And for every dollar companies spend on software, they spend 6 on services.
      </Text>
      <Text style={s.pLast}>The opportunity isn't in better tools. It's in better outcomes.</Text>

      <Text style={s.h3}>Why this matters to us</Text>
      <Text style={s.p}>
        AI-powered systems can draft proposals, compare pricing, and source products instantly. More buyers will use those tools to do parts of our current work themselves. Travel and retail already lost their transactional middlemen when search got automated. The same pressure is heading toward our industry.
      </Text>
      <Text style={s.p}>That doesn't break us. It pushes us closer to where the value actually is.</Text>
      <Text style={s.p}>If AI drafts the proposal, we make sure it solves the right problem.</Text>
      <Text style={s.p}>If AI generates comparisons, we make sure the strategy holds together.</Text>
      <Text style={s.p}>If AI sources the merch, we design the moment around it.</Text>
      <Text style={s.p}>
        The more AI handles the transactional layer of this industry, the more value shifts to strategy, creative thinking, and the ability to understand what a client needs before they can articulate it. Taste and judgement.
      </Text>
      <Text style={s.p}>That's not a new skill for this team.</Text>
      <Text style={s.p}>It's what we've always done. AI just makes the case for it louder.</Text>
      <Text style={s.pLast}>And it's the thing AI can't replace.</Text>

      <Divider />

      <Text style={s.h2}>3. The org chart is shifting.</Text>
      <Text style={s.pLast}>
        So far we've looked at clients and at the work itself. Now let's look at how companies are actually structured, because that's changing too.
      </Text>

      <Text style={s.h3}>A 2,000-year-old constraint just broke</Text>
      <Text style={s.p}>
        For 2,000 years, organizations have been built around 1 constraint: a leader can effectively manage 3 to 8 people. That number hasn't changed since the Roman military. It's why we have hierarchies. It's why middle management exists - to aggregate, translate, and route information up and down the org.
      </Text>
      <Text style={s.p}>Here's the thing, though ...</Text>
      <Text style={s.p}>AI doesn't need layers to coordinate.</Text>
      <Text style={s.p}>
        AI doesn't need a weekly pipeline review to know what's happening. It doesn't need 3 days of spreadsheet building to get answers about trends.
      </Text>
      <Text style={s.p}>
        Sequoia published another piece called "From Hierarchy to Intelligence" profiling Block, the company behind Cash App and Square. Block built what they call a "Company World Model" - basically an AI system that keeps a live, up-to-the-minute picture of everything happening inside the business. Sales, operations, product, support, all of it. In one place. Always current.
      </Text>
      <Text style={s.p}>The result?</Text>
      <Text style={s.p}>
        A handful of senior roles making decisions, with AI handling the bulk of what middle management used to do. The "doing" part of management - gathering data, building reports, spotting trends - that's the stuff AI absorbs first.
      </Text>
      <Text style={s.p}>The thinking part - judgment, coaching, strategy - that stays human.</Text>
      <Text style={s.pLast}>
        I'm not saying we're cutting layers at Brand Blvd. I'm saying the shape of organizations is changing out there in the market, and the companies we sell to may look different soon, too.
      </Text>

      <Text style={s.h3}>Why this matters to us</Text>
      <Text style={s.p}>This matters for 2 reasons.</Text>
      <Text style={s.p}>
        First, inside our walls. "Growing our team" starts to look less like adding headcount and more like increasing leverage per person. The question shifts from "who do we hire next?" to "how do we make every person on this team 3x more effective?"
      </Text>
      <Text style={s.p}>
        Second, outside our walls. The companies we sell to are going to look different. Flatter orgs. Fewer decision-makers. The org chart we mapped last year might not exist next year.
      </Text>
      <Text style={s.p}>But here's the good news.</Text>
      <Text style={s.pLast}>
        If management layers compress, the people who remain become more important, not less. Higher leverage. More authority. Closer to the work and to the culture. That's a good thing for a company like ours - one built on relationships and creative thinking.
      </Text>

      <Divider />

      <Text style={s.h2}>4. The workforce is shifting.</Text>
      <Text style={s.pLast}>
        We've looked at clients, at work, and at org structure. Now let's look at who's actually on the other end of a sales calls, and how that's changing.
      </Text>

      <Text style={s.h3}>Why there's so much anxiety right now</Text>
      <Text style={s.p}>Here's some context for why AI feels heavy.</Text>
      <Text style={s.p}>These are the numbers most people hear:</Text>
      <Bullet>80% of people believe AI will impact their daily work.</Bullet>
      <Bullet>50% worry their job could be automated.</Bullet>
      <Bullet>76,000+ jobs eliminated in 2025.</Bullet>
      <Text style={s.p}>These aren't fake numbers.</Text>
      <Text style={s.p}>
        They're real, and they're exactly why so many people feel uneasy about AI right now. If all you ever hear is "automation eliminated 76,000 jobs," of course that's where your head goes.
      </Text>
      <Text style={s.p}>But at Brand Blvd, we're not trying to do more with fewer people.</Text>
      <Text style={s.p}>
        We're trying to make every person on this team more powerful, more effective, more valuable. AI isn't here to replace you. It's here to make you better at what you already do well.
      </Text>
      <Text style={s.pLast}>That's the story we need to be living in.</Text>

      <Text style={s.h3}>Why this matters to us</Text>
      <Text style={s.p}>A lot of companies aren't like us.</Text>
      <Text style={s.p}>And that's important to understand because it directly affects our business.</Text>
      <Text style={s.p}>Here's the logic ...</Text>
      <Text style={s.p}>The employer/employee relationship is going to shift.</Text>
      <Text style={s.p}>
        Fewer full-time employees at a lot of companies. More contractors, freelancers, fractional roles, AI agents doing work people used to do. If that plays out, the total headcount our clients pay for goes down.
      </Text>
      <Text style={s.p}>Now connect that to what we sell.</Text>
      <Text style={s.p}>
        A big chunk of our industry's revenue is tied to employee gifting, onboarding kits, milestone swag, event merch. If companies have fewer employees, those budgets shrink. Pure math. A merch strategy built on "how many people do you employ?" becomes a shrinking target.
      </Text>
      <Text style={s.p}>Or, the budget stays the same and they need to buy less kits and swag, but better kits and swag. We can do that.</Text>
      <Text style={s.p}>Either weay - the need for belonging doesn't go away. It relocates.</Text>
      <Text style={s.p}>
        When people's relationship with their employer weakens, they anchor harder to the other things that give them identity. Community. Values. Tribe. Shared purpose. Events they care about. Causes they believe in.
      </Text>
      <Text style={s.pLast}>
        If we tie our growth to payroll size, we're tied to a potentially shrinking lever. If we tie our growth to identity and belonging - to the moments and the tribes and the experiences - we're tied to something expanding.
      </Text>

      <Divider />

      <Text style={s.h2}>5. The buyer may not be a person anymore.</Text>
      <Text style={s.pLast}>This one's the biggest mind-bender.</Text>

      <Text style={s.h3}>The question not enough people are asking</Text>
      <Text style={s.p}>
        Everything above leads to a question that enough people aren't asking: if AI is making the decisions and doing the work, who are we actually selling to?
      </Text>
      <Bullet>45% of B2B buyers already use AI as their primary research method for identifying new suppliers.</Bullet>
      <Bullet>Two-thirds of B2B buyers use AI agents for vendor research and rely on them as much as, or more than, Google.</Bullet>
      <Bullet>By 2028, analysts predict AI agents will mediate 90% of all B2B purchases - $15 trillion in spending flowing through machines.</Bullet>
      <Text style={s.p}>
        Today, a procurement manager who needs branded merch for an event might Google it, ask a colleague, or check their inbox for a vendor they've used before.
      </Text>
      <Text style={s.p}>
        Tomorrow, they tell their AI procurement agent: "I need 500 branded polos for a company retreat in August. Budget is $25K. Find me 3 vendors with fast turnaround, good reviews, and sustainability options."
      </Text>
      <Text style={s.pLast}>
        The agent researches, compares, shortlists. Maybe even places the order. The human doesn't visit a website. Doesn't read an email. Doesn't take a sales call.
      </Text>

      <Text style={s.h3}>Two lanes</Text>
      <Text style={s.p}>Will every company operate this way? No. Not yet. Adoption curves are messy.</Text>
      <Text style={s.p}>
        There will be a long, uneven transition where some buyers are fully agentic and others still want to pick up the phone. But the direction is clear, and it creates 2 distinct lanes:
      </Text>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Lane 1:</Text> A human is still the buyer. Relationships, trust, and personal service still win. The sales call still matters. Showing up and reading the room is the differentiator. We double down on the human stuff.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Lane 2:</Text> An AI agent is doing the research, shortlisting, or buying. The question here is different. How does Brand Blvd show up when the first touchpoint is an algorithm? Can an AI actually find us when it's searching the web? Can it understand what we do and who we do it well for? Are we showing up in the sources, directories, and feeds that AI agents pull from when they make recommendations?</Text>
      </View>
      <Text style={s.p}>This isn't replacing the human sales process.</Text>
      <Text style={s.p}>It's adding a second, parallel track.</Text>
      <Text style={s.pLast}>Both are muscles we get to build - together.</Text>

      <Text style={s.h3}>Why this matters to us</Text>
      <Text style={s.p}>
        If AI agents are handling the intelligence work of procurement - comparing prices, checking specs, evaluating turnaround - the only differentiator in that layer is data. And data is a commodity.
      </Text>
      <Text style={s.p}>But here's what an AI procurement agent can't evaluate:</Text>
      <Bullet>Does this company actually understand my brand?</Bullet>
      <Bullet>Will they push back when my idea is off?</Bullet>
      <Bullet>Will they design a merch experience that makes our people feel something?</Bullet>
      <Text style={s.p}>That's judgment. That's taste.</Text>
      <Text style={s.p}>That's the work that requires context, intuition, accountability.</Text>
      <Text style={s.p}>That's exactly where we live.</Text>
      <Text style={s.pLast}>
        The distributors competing purely on speed and price will feel this first. An AI agent can reorder from a catalogue without a sales rep involved. That commoditized layer of the market gets disrupted.
      </Text>

      <Divider />

      <Text style={s.closeH}>So where does that leave us?</Text>
      <Text style={s.p}>I share all of this because you deserve to see it.</Text>
      <Text style={s.p}>
        AI is compressing time. It's taking over execution. It's reshaping org charts. The workforce is changing. The way people buy is changing.
      </Text>
      <Text style={s.p}>That's a lot. I know.</Text>
      <Text style={s.p}>
        The companies that will win aren't the ones who predict the future. They're the ones who build the muscle to adapt. To watch the signals. To get curious. To ask hard questions.
      </Text>
      <Text style={s.pLast}>
        The companies who win are the ones willing to say "we don't know what we don't know" but are hungry to learn it.
      </Text>

      <Divider />

      <Text style={s.h2}>So what is the AI Lab?</Text>
      <Text style={s.p}>We're launching the AI Lab.</Text>
      <Text style={s.p}>
        It's the start of a much bigger initiative here at Brand Blvd, aimed at moving our team from surface-level AI use into real leverage. That top group I mentioned at the start? The less than 5% building, automating, and doing things that feel like science fiction? That's where we're going. Together. It's how we're starting to address all the shifts we just walked through.
      </Text>
      <Text style={s.p}>
        It's going to start as a small pilot group - leadership plus a couple of other Brandies. We'll spend the next 3 months learning how to actually use AI as a working tool. Not theory. Not tutorials. Building real things for your real job.
      </Text>
      <Text style={s.p}>And let me be honest.</Text>
      <Text style={s.pLast}>
        I don't have the whole AI Lab figured out. The structure. The content. The sequence. The tools are moving too fast for anyone to have a perfect playbook. So we're going to learn together as we go. How fast we move, what we build, what we focus on - a lot of that will depend on who's in the room. That's kind of the point.
      </Text>

      <Text style={s.h3}>What we'll be working on</Text>
      <View style={s.accentItem}><Text>What a "skill" is and how it helps AI do a job the way you'd do it.</Text></View>
      <View style={s.accentItem}><Text>What an "agent" is and how it's different from just chatting with ChatGPT.</Text></View>
      <View style={s.accentItem}><Text>How to actually build these things yourself.</Text></View>
      <View style={s.accentItem}><Text>How to spot your own workflows that are good candidates for AI.</Text></View>
      <View style={s.accentItem}><Text>How to use the tools that exist right now.</Text></View>
      <View style={s.accentItem}><Text>How to set things up so they run on autopilot.</Text></View>
      <View style={s.accentItem}><Text>How to schedule tasks to run automatically.</Text></View>
      <View style={s.accentItem}><Text>How to connect your tools so your systems can talk to each other.</Text></View>
      <Text style={s.p}>None of this requires a computer science degree.</Text>
      <Text style={s.pLast}>It requires curiosity, willingness to try things, and time to practice.</Text>

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
      <Text style={s.pLast}>Real work. Real skills. Real things you'll use every day after.</Text>

      <View style={s.footer}>
        <View style={s.footerDot} />
      </View>
    </Page>
  </Document>
);

export default ArticlePDF;
