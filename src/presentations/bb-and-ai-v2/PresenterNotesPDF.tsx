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
    <Text style={s.promptLabel}>SLIDE {num} - DISCUSSION</Text>
    <Text style={s.promptText}>{question}</Text>
  </View>
);

const PresenterNotesPDF = () => (
  <Document title="Presenter Notes - Don't miss this." author="BrandBlvd">
    <Page size="LETTER" style={s.page}>
      {/* Title */}
      <Text style={s.titleLabel}>PRESENTER NOTES</Text>
      <Text style={s.titleText}>Don't miss this.</Text>
      <View style={s.greenBar} />
      <Text style={s.subtitle}>Brand Blvd AI Lab kickoff - internal</Text>

      {/* SECTION: Home / Title */}
      <Text style={s.sectionHeader}>Home</Text>

      <SlideBlock
        num={1}
        desc="Cover - 'Don't miss this.' Subtitle: why I started the AI Lab."
        points={[
          "Frame this as a team conversation, not a presentation. The whole point is to bring people in - not push them.",
          "This is why the AI Lab exists, and the goal is to get as many of us in it as possible.",
          "Tone: exciting, not scary. We're going to look at what's actually happening and what we get to do about it.",
        ]}
      />

      <SlideBlock
        num={2}
        desc="Karpathy quote - 98/2 framing. The organizing idea for the talk."
        points={[
          "98% tried ChatGPT once and moved on. 2% are watching it do real work.",
          "Both groups are looking at the same tech, totally different realities. That gap is what we're walking through today.",
          "Don't make people feel bad for being in the 98%. Most of the world is. The point is to bring people across.",
        ]}
      />

      <SlideBlock
        num={3}
        desc="'I've been spending a lot of time in the 2%.'"
        points={[
          "Personal note: I'm not an expert. I've just been paying attention - reading, building, experimenting.",
          "I want to bring as many of you over as I can. That's the whole thesis of the AI Lab.",
          "Invitation, not a warning.",
        ]}
      />

      <PromptBlock num={4} question="Where do you think you sit right now - closer to the 98 or the 2?" />

      <SlideBlock
        num={5}
        desc="6 Shifts overview - Expectations, Doing, Org charts, Agents, Workforce, Buyers."
        points={[
          "Map of where we're going: 6 things the 2% are watching.",
          "Each one ends with what I think it means for us at Brand Blvd.",
        ]}
      />

      {/* SECTION: Expectations */}
      <Text style={s.sectionHeader}>01 - Expectations</Text>

      <SlideBlock
        num={6}
        desc="Section opener - 'Expectations have shifted.'"
        points={[
          "Shift 1 of 6. AI has reset what 'good enough' and 'on time' mean.",
          "Don't frame as 'we're behind.' Frame as 'the floor moved - we get to choose which side of it we're on.'",
        ]}
      />

      <SlideBlock
        num={7}
        desc="Serif - 'immediate, not faster.'"
        points={[
          "AI isn't just training people to expect faster. Immediate.",
          "37% of consumers go to AI first instead of Google. Nearly 50% of searches include AI summaries.",
          "That expectation leaks into every conversation - including the ones clients have with us.",
        ]}
      />

      <SlideBlock
        num={8}
        desc="Growth chart - time to 100M users."
        points={[
          "ChatGPT hit 100M users in 2 months. Facebook took 4.5 years. 27x faster.",
          "This is the adoption curve that trained the new expectation.",
        ]}
      />

      <SlideBlock
        num={9}
        desc="'Good enough, right now' beats 'perfect, later.'"
        points={[
          "Heart of the shift: velocity over precision at the front of the process.",
          "Photographer example - 30 minutes of lasso-tool background cutting replaced by 5 seconds in Canva.",
          "Think about what this means for quoting, proofing, sourcing.",
        ]}
      />

      <SlideBlock
        num={10}
        desc="Serif - explore more, before they pick up the phone."
        points={[
          "The 2% explore more, compare more, iterate more - before they ever reach out.",
          "Exploration used to cost money, time, coordination. Now it costs a prompt.",
          "Clients arrive to the conversation further along than they used to.",
        ]}
      />

      <SlideBlock
        num={11}
        desc="The Gap - reframe."
        points={[
          "Reframe: we're not 'behind.'",
          "A gap is opening between what clients are starting to expect and what most agencies are set up to deliver.",
          "That gap is where both the risk AND the opportunity live - we get to choose which side we're on.",
          "Avoid 'if we don't move we die' tone. Honest framing: agencies that close this gap get pulled forward.",
        ]}
      />

      <PromptBlock num={12} question="What's something you've seen a client expect lately that they wouldn't have asked for a year ago?" />

      <SlideBlock
        num={13}
        desc="Shift #1 - 'Good enough, right now.'"
        points={[
          "The floor of 'good enough' moved. Velocity beats precision at the front of the process.",
          "The AI Lab is where we figure out how to meet the new floor together - without losing craft on the back end.",
        ]}
      />

      {/* SECTION: The Doing */}
      <Text style={s.sectionHeader}>02 - The Doing</Text>

      <SlideBlock
        num={14}
        desc="Section opener - 'AI is taking over the doing.'"
        points={[
          "Shift 2 of 6. The 'doing' is being absorbed - drafting, sourcing, comparing, generating.",
          "Point isn't 'we're being replaced.' It's 'we get pulled up the value chain.'",
        ]}
      />

      <SlideBlock
        num={15}
        desc="Serif - execution cheap, judgment scarce."
        points={[
          "AI handles rule-based, repetitive, information-heavy work faster, cheaper, at scale.",
          "Our role moves up the stack - to knowing what to do, not doing it.",
          "Execution gets cheap. Judgment gets scarce. That's the trade we want.",
        ]}
      />

      <SlideBlock
        num={16}
        desc="Industry quotes - Nadella, Benioff, Amodei."
        points={[
          "Nadella: people who use AI replace people who don't.",
          "Benioff: real value is helping salespeople spend more time with customers, less on admin.",
          "Amodei: 90% of code AI-written in 3-6 months, all of it in 12.",
          "These are CEOs restructuring trillion-dollar companies around this thesis.",
        ]}
      />

      <SlideBlock
        num={17}
        desc="Nadella reframe - the WHY of the AI Lab."
        points={[
          "Reframe Nadella. Honest reading isn't 'figure it out yourself or get replaced.'",
          "Honest reading is: that's exactly why I'm not waiting. That's why we're building the AI Lab.",
          "Instead of 'this is on you' - the message is 'this is why I want to help.'",
        ]}
      />

      <SlideBlock
        num={18}
        desc="Pulled Up - what's automated vs. where we live."
        points={[
          "What's automated: drafting proposals, pricing comparisons, sourcing - the transactional middle. Same as travel and retail.",
          "Where we live: making sure the proposal solves the right problem. Designing the moment around the merch.",
          "We get pulled up the value chain. Good thing if we're ready for it.",
        ]}
      />

      <PromptBlock num={19} question="If AI handled half your admin tomorrow, what would you do with the time?" />

      <SlideBlock
        num={20}
        desc="Shift #2 - 'We get pulled up the stack.'"
        points={[
          "Less doing, more deciding. Framing the problem. Defining success. Owning the outcome.",
          "That's what AI can't replace - and that's the work we get to focus on.",
        ]}
      />

      {/* SECTION: Org Charts */}
      <Text style={s.sectionHeader}>03 - Org Charts</Text>

      <SlideBlock
        num={21}
        desc="Section opener - 'The org chart is dissolving.'"
        points={[
          "Shift 3 of 6. Hierarchies exist because for 2,000 years a person could only manage 3-8 people.",
          "AI breaks that constraint.",
        ]}
      />

      <SlideBlock
        num={22}
        desc="Serif - Roman military, span of control."
        points={[
          "3-8 person span of control hasn't changed since the Roman military.",
          "That's why we have hierarchies. AI doesn't need layers to coordinate.",
        ]}
      />

      <SlideBlock
        num={23}
        desc="Block case study - 3 roles, not 10 layers."
        points={[
          "Block (Square + Cash App) is restructuring around AI: 3 roles replace 10 layers.",
          "ICs use AI for context. DRIs own a problem for 90 days. Player-coaches build and develop.",
          "Source: Sequoia Capital - 'From Hierarchy to Intelligence.' Happening now, not someday.",
        ]}
      />

      <SlideBlock
        num={24}
        desc="Two Forces - inside vs. outside our walls."
        points={[
          "Inside: 'growing the team' looks less like headcount, more like leverage per person.",
          "From 'who do we hire next?' to 'how do we make every person 3x more effective?'",
          "Outside: clients will have flatter orgs. The org chart your SDR mapped last year might not exist next year.",
        ]}
      />

      <SlideBlock
        num={25}
        desc="Serif - remaining people become more important."
        points={[
          "When management layers compress, the people who remain become MORE important.",
          "More authority. Closer to the work. Closer to the culture.",
          "A very good thing for a company that manufactures belonging.",
        ]}
      />

      <SlideBlock
        num={26}
        desc="Shift #3 - 'Leverage per person, not headcount.'"
        points={[
          "Management becomes coaching. The 'doing' part of management gets absorbed.",
          "Judgment, coaching, strategy stay human.",
        ]}
      />

      {/* SECTION: Agents */}
      <Text style={s.sectionHeader}>04 - Agents</Text>

      <SlideBlock
        num={27}
        desc="Section opener - 'Agents are doing the work.'"
        points={[
          "Shift 4 of 6. Last year AI was a tool. Now it's becoming an operator.",
        ]}
      />

      <SlideBlock
        num={28}
        desc="Serif - tool to agent shift."
        points={[
          "From 'AI-assisted' to 'AI-executed.'",
          "Biggest players converging on agents that do the work, not just help.",
          "Most important update from a year ago.",
        ]}
      />

      <SlideBlock
        num={29}
        desc="3 Signals Same Direction - Claude Code, OpenClaw, Cursor."
        points={[
          "Claude Code: $2.5B annual revenue. 4% of all GitHub commits - doubled in a month.",
          "OpenClaw: 250K GitHub stars in 60 days - surpassed React's 10-year record.",
          "Cursor: $2B+ annual revenue. Describe in English, it writes/tests/demos.",
          "3 signals pointing the same direction.",
        ]}
      />

      <SlideBlock
        num={30}
        desc="Case Study - $20K to $1.8B (Gallagher)."
        points={[
          "Matthew Gallagher and his brother. 2 people. $20K. No VC.",
          "Built a telehealth company using AI agents for operations, support, marketing, fulfillment.",
          "$401M in 2025 sales. Projected $1.8B in 2026.",
          "Proof point that small + AI-leveraged can play at massive scale.",
        ]}
      />

      <SlideBlock
        num={31}
        desc="Serif - 'this is a leverage story.'"
        points={[
          "Not a tech story. A leverage story.",
          "Same AI tools available to that 2-person startup are available to us.",
          "Question isn't 'is this possible?' It's 'who figures it out first?'",
        ]}
      />

      <SlideBlock
        num={32}
        desc="Sequoia - 'Services: The New Software.'"
        points={[
          "Next trillion-dollar company won't sell tools. It will sell outcomes.",
          "For every $1 spent on software, companies spend $6 on services.",
        ]}
      />

      <SlideBlock
        num={33}
        desc="'We don't sell t-shirts.'"
        points={[
          "We don't sell t-shirts. We sell the experience around the t-shirt.",
          "Brand moment. Culture artifact. Belonging signal.",
          "More AI commoditizes logistics, more value shifts to designing the moment.",
        ]}
      />

      <SlideBlock
        num={34}
        desc="Shift #4 - 'Sell outcomes, not tools.'"
        points={[
          "Companies that win deliver outcomes people trust.",
          "That's what we already do - keep leaning in.",
        ]}
      />

      {/* SECTION: Workforce */}
      <Text style={s.sectionHeader}>05 - Workforce</Text>

      <SlideBlock
        num={35}
        desc="Section opener - 'The workforce is shifting.'"
        points={[
          "Shift 5 of 6. Manage tone carefully here. Replace anxiety with agency.",
          "Don't pretend the numbers aren't real - acknowledge them, then reframe.",
        ]}
      />

      <SlideBlock
        num={36}
        desc="'What most people hear' - 80%, 50%, 76K+."
        points={[
          "80% believe AI will impact their work. 50% worry about automation. 76K+ jobs eliminated in 2025.",
          "Frame as 'what most people hear' - context for the anxiety, not a scare tactic.",
          "Pivot: these are real, but they're not the whole story.",
        ]}
      />

      <SlideBlock
        num={37}
        desc="'Fewer people' reframed - the BB version."
        points={[
          "Most important slide in the section.",
          "We're NOT trying to do more with fewer people. We're trying to make every person more powerful, more effective, more valuable.",
          "AI isn't here to replace you. It's here to make you better at what you already do well. Say it directly.",
        ]}
      />

      <SlideBlock
        num={38}
        desc="'Shape what comes next' + nobody is a lost cause."
        points={[
          "The people who lean in get to shape what comes next.",
          "We're making space for as many of you as possible to be part of this.",
          "Nobody is a lost cause for being in the 98%. The whole point of the AI Lab is to bring people across.",
        ]}
      />

      <PromptBlock num={39} question="What part of your daily work would you most want AI to take off your plate?" />

      <SlideBlock
        num={40}
        desc="Merch and swag don't go away."
        points={[
          "Merch and swag don't go away.",
          "As work shifts, belonging moves from employer identity to community identity.",
          "Need is changing - it's not disappearing.",
        ]}
      />

      <SlideBlock
        num={41}
        desc="Where Belonging Relocates - Internal / External / Identity."
        points={[
          "Internal: more intentional - reflects culture and values, not just fills closets.",
          "External: more tribal - tribes of customers, advocates, insiders, ambassadors.",
          "Identity: badge signalling - move from 'gifting employees' to 'manufacturing belonging.'",
        ]}
      />

      <SlideBlock
        num={42}
        desc="Shift #5 - 'Belonging is expanding.'"
        points={[
          "Tie our growth to payroll size, we're tied to a shrinking lever.",
          "Tie it to identity and belonging, we're tied to something expanding.",
          "Optimistic flip on the workforce shift - and why BB is well-positioned.",
        ]}
      />

      {/* SECTION: Buyers */}
      <Text style={s.sectionHeader}>06 - Buyers</Text>

      <SlideBlock
        num={43}
        desc="Section opener - 'The buyer isn't a person anymore.'"
        points={[
          "Shift 6 of 6. The question almost nobody in our industry is asking yet.",
        ]}
      />

      <SlideBlock
        num={44}
        desc="Serif - 'who are we selling to?'"
        points={[
          "If AI is making the decisions, who are we actually selling to?",
          "Pause and let it land. The buyer might not be a person anymore.",
        ]}
      />

      <SlideBlock
        num={45}
        desc="Agentic Procurement Numbers - 45%, ⅔, 90%."
        points={[
          "45% of B2B buyers already use AI as primary research method for suppliers.",
          "Two-thirds trust AI agents for vendor research as much as or more than Google.",
          "By 2028: 90% of B2B purchases mediated by AI agents - $15T in spending.",
        ]}
      />

      <SlideBlock
        num={46}
        desc="Procurement scenario - 500 branded polos."
        points={[
          "Tomorrow's brief: '500 branded polos, $25K, August retreat. Find me 3 vendors.'",
          "Agent researches, compares, shortlists. Maybe places the order.",
          "The human doesn't visit a website, read an email, or take a sales call.",
        ]}
      />

      <SlideBlock
        num={47}
        desc="Two Lanes - Human Buyer / Agent Buyer."
        points={[
          "Lane 1 (Human): relationships, trust, personal service still win. Reading the room is the differentiator.",
          "Lane 2 (Agent): structured data, machine-readable case studies, right databases.",
          "Not replacing the human sales process. Adding a second, parallel track.",
        ]}
      />

      <SlideBlock
        num={48}
        desc="Serif - 'agent can't evaluate.'"
        points={[
          "Agent can't evaluate: does this company understand my brand? Will they push back? Will they make our people feel something?",
          "Agent can shortlist vendors. Can't feel the culture of a brand. That's our moat.",
        ]}
      />

      <PromptBlock num={49} question="If an AI agent had to describe Brand Blvd in 2 sentences, what would we want it to say?" />

      <SlideBlock
        num={50}
        desc="Shift #6 - 'We sell what machines can't evaluate.'"
        points={[
          "Transactional vendors get eaten by agentic procurement.",
          "Companies that sell belonging? That's where the human picks up the phone.",
        ]}
      />

      {/* SECTION: The AI Lab */}
      <Text style={s.sectionHeader}>07 - The AI Lab</Text>

      <SlideBlock
        num={51}
        desc="Section opener - 'The AI Lab - what we're building.'"
        points={[
          "Pivot point. We've been teasing the AI Lab throughout. Now we say what it is.",
          "This is the payoff - not homework. Keep the energy up.",
        ]}
      />

      <SlideBlock
        num={52}
        desc="Hammer - 'A small pilot. Real work. 3 months.'"
        points={[
          "Simple version: leadership + 3-5 team members. 3 months.",
          "Real work - not theory, not tutorials.",
        ]}
      />

      <SlideBlock
        num={53}
        desc="Serif - 'I don't have this all figured out.'"
        points={[
          "Say it out loud. Tools moving too fast for anyone to have a perfect playbook.",
          "We're learning together. How fast we go depends on who's in the room.",
          "Humility builds trust - and invites people to shape it with you.",
        ]}
      />

      <SlideBlock
        num={54}
        desc="What we'll be working on - part 1 (items 01-04)."
        points={[
          "Spot workflows, what a skill is, what an agent is, build it yourself.",
          "Concrete things - not theory. You'll actually do them.",
        ]}
      />

      <SlideBlock
        num={55}
        desc="What we'll be working on - part 2 (items 05-08)."
        points={[
          "Use the tools that exist now, automate, schedule, connect systems.",
          "'Work happens while you sleep' usually lands - make eye contact there.",
        ]}
      />

      <SlideBlock
        num={56}
        desc="Serif - 'No CS degree required.'"
        points={[
          "Reassurance moment. Curiosity + willingness + practice. That's the prereq.",
          "If someone's worried about being 'technical enough,' this is for them.",
        ]}
      />

      <SlideBlock
        num={57}
        desc="The time commitment - 90m / half day / homework."
        points={[
          "90 minutes per week. Half day per month. Homework in between.",
          "Say it plainly. People want to know the ask.",
          "That's it. 3 months. Real skills they'll use every day after.",
        ]}
      />

      <SlideBlock
        num={58}
        desc="Serif - 'Hours become minutes.'"
        points={[
          "The promise isn't 'you'll be better at AI.' It's a different relationship with your own work.",
          "Hours become minutes. Tedious stuff gets done automatically.",
          "More of what you love. Less of what drains you.",
        ]}
      />

      <SlideBlock
        num={59}
        desc="'This isn't one-and-done. It's the beginning.'"
        points={[
          "First cohort becomes the teachers for everyone else.",
          "Not one-and-done - something the whole team becomes part of over time.",
          "Sets up the final soft-close.",
        ]}
      />

      {/* SECTION: Invitation / Closing */}
      <Text style={s.sectionHeader}>Invitation</Text>

      <SlideBlock
        num={60}
        desc="Recap of all 6 shifts."
        points={[
          "1) Close the gap. 2) Pulled up the stack. 3) Leverage per person. 4) Sell outcomes. 5) Belonging is expanding. 6) Sell what machines can't evaluate.",
          "Pause here. Let people see the whole map together.",
        ]}
      />

      <SlideBlock
        num={61}
        desc="Build the muscle to adapt continuously."
        points={[
          "Companies that win aren't the ones who predict the future correctly.",
          "They build the muscle to adapt continuously.",
          "That's what the AI Lab is for - not training, not a course, a muscle we build together.",
        ]}
      />

      <SlideBlock
        num={62}
        desc="Soft close - the invitation."
        points={[
          "Read this slowly. This is the actual ask. Tone matters.",
          "If any of this gets you excited - or even just curious - that's enough.",
          "You don't need to be an expert. You just need to want to learn.",
          "If this round isn't the right timing, that's OK. More cohorts coming. Pull, not push.",
        ]}
      />

      <SlideBlock
        num={63}
        desc="Final - 'Let's go build some cool things.'"
        points={[
          "End on the line: 'Let's go build some cool things.'",
          "Apply for the AI Lab. We'd love to have you.",
          "Don't moralize. Don't end on stakes. End on excitement and the open door.",
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
