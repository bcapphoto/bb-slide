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
  titleLabel: {
    fontFamily: "Barlow Condensed",
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: "#6B7280",
    marginBottom: 8,
  },
  h1: {
    fontFamily: "DM Serif Display",
    fontSize: 32,
    lineHeight: 1.15,
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "DM Serif Display",
    fontSize: 14,
    fontStyle: "italic",
    color: "#6B7280",
    marginBottom: 6,
  },
  greenBar: {
    width: 48,
    height: 3,
    backgroundColor: green,
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
    borderTopColor: "#00C853",
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
  divider: {
    height: 0.5,
    backgroundColor: "#E5E7EB",
    marginVertical: 8,
  },
  contactBox: {
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    borderTopStyle: "solid" as const,
    textAlign: "center" as const,
  },
  contactName: {
    fontFamily: "Barlow Condensed",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 2,
    textTransform: "uppercase" as const,
    color: green,
    marginBottom: 4,
  },
  contactDetail: {
    fontSize: 9,
    color: "#6B7280",
    marginBottom: 2,
  },
  promptQuestion: {
    fontFamily: "DM Serif Display",
    fontSize: 12,
    fontStyle: "italic",
    color: green,
    marginBottom: 4,
  },
});

const SlideBlock = ({
  num,
  desc,
  points,
  prompt,
}: {
  num: number;
  desc: string;
  points: string[];
  prompt?: string;
}) => (
  <View style={s.slideBlock} wrap={false}>
    <Text style={s.slideLabel}>Slide {num}</Text>
    <Text style={s.slideDesc}>{desc}</Text>
    {prompt && <Text style={s.promptQuestion}>"{prompt}"</Text>}
    {points.map((p, i) => (
      <Text key={i} style={s.bullet}>
        {"\u2022  "}{p}
      </Text>
    ))}
  </View>
);

const PresenterNotesPDF = () => (
  <Document>
    {/* Page 1: Title + Home section + Advantage section */}
    <Page size="LETTER" style={s.page}>

      {/* Title area */}
      <Text style={s.titleLabel}>Presenter Notes</Text>
      <Text style={s.h1}>Life is better on the Blvd.</Text>
      <Text style={s.subtitle}>Brand Blvd · Confidential</Text>
      <View style={s.greenBar} />

      {/* ── SECTION: HOME ── */}
      <Text style={s.sectionHeader}>Home</Text>

      <SlideBlock
        num={1}
        desc="Cover slide — Brand Blvd logo, 'Life is better on the Blvd.' headline."
        points={[
          "Welcome them warmly — this is a conversation, not a pitch.",
          "Set the tone: 'We built this to show you what it actually looks like to be on the Blvd.'",
          "Mention that everything in this deck reflects real tools and real support they'd have access to.",
          "Let them know this is a leave-behind — they can revisit it anytime.",
        ]}
      />

      <SlideBlock
        num={2}
        desc="Video slide — Personal welcome from Jill Pascuzzi, VP of Sales."
        points={[
          "Play the video if presenting live; mention it's there for async viewing too.",
          "Jill's welcome sets the personal tone — this isn't a corporate pitch.",
          "Transition: 'Jill wanted to share a quick message before we dive in.'",
        ]}
      />

      <SlideBlock
        num={3}
        desc="Serif statement — 'Your book is yours. But the system behind you isn't keeping up.'"
        points={[
          "Pause here — let the statement land. This is the core tension.",
          "Acknowledge their success: 'You've built something real. The question is whether your current setup matches that.'",
          "Pivot: 'You don't need more motivation. You need better infrastructure.'",
          "This is empathy first — validate before you sell.",
        ]}
      />

      <SlideBlock
        num={4}
        desc="White overview — Four pillars: Unfair Advantage, Ideas, Build Bigger, Full Team."
        points={[
          "Walk through each pillar briefly: 'Here's what changes when you plug in.'",
          "These are the four themes of the rest of the conversation.",
          "Don't linger — this is a roadmap slide. Keep it moving.",
          "Gauge their reaction: which pillar gets their attention?",
        ]}
      />

      {/* ── SECTION: UNFAIR ADVANTAGE ── */}
      <Text style={s.sectionHeader}>01 — Unfair Advantage</Text>

      <SlideBlock
        num={5}
        desc="Section opener — 'Walk into every meeting with an unfair advantage.'"
        points={[
          "Transition: 'Let's start with what happens before you even sit down with a prospect.'",
          "Frame it as a competitive edge, not just tools.",
          "Most reps at other distributors don't have anything close to this.",
        ]}
      />

      <SlideBlock
        num={6}
        desc="Serif statement — 'Most reps show up with a PDF and a pitch.'"
        points={[
          "Let them picture their current process — they'll relate.",
          "The contrast is powerful: PDF vs. a full creative arsenal.",
          "Ask casually: 'What does your current pre-meeting prep look like?'",
        ]}
      />

      <SlideBlock
        num={7}
        desc="Grid — Four toolkit items: AI mockups, pitch decks, demo stores, creative concepts."
        points={[
          "Custom mockups: AI-generated, branded to the client, built in seconds via Magic Merch Maker.",
          "Pitch decks: Fully designed and client-ready, assembled automatically.",
          "Demo stores: Live, clickable company stores the prospect can browse on the spot.",
          "Creative concepts: Ideas turned into polished presentations, not napkin sketches.",
          "Emphasize speed: all of this happens before the meeting starts.",
        ]}
      />

      <SlideBlock
        num={8}
        desc="Video slide — Bryan Caporicci introduces Magic Merch Maker."
        points={[
          "Play the demo video — this is the 'wow' moment.",
          "Bryan walks through the end-to-end pipeline: research, ideation, mockups, pitch deck, demo store.",
          "Key message: it's one integrated system, not a collection of disconnected tools.",
          "If no video available, describe the workflow verbally using the next slides.",
        ]}
      />

      <SlideBlock
        num={9}
        desc="Magic Merch Maker showcase — UI walkthrough of the platform."
        points={[
          "Show the interface: company research happens automatically.",
          "AI generates product ideas tailored to the client's brand.",
          "Mockups are created in seconds — not hours of back-and-forth with a decorator.",
          "The system assembles a Creative Concept Deck ready to present.",
        ]}
      />

      <SlideBlock
        num={10}
        desc="Product gallery — AI-generated mockup examples."
        points={[
          "Point out the quality and variety of mockups.",
          "These are real examples of what gets generated automatically.",
          "Mention that the prospect sees branded, professional visuals — not blank templates.",
          "This is what sets Brand Blvd reps apart in competitive presentations.",
        ]}
      />

      <SlideBlock
        num={11}
        desc="Before / After comparison — from chasing mockups to closing deals."
        points={[
          "Before: 'You spend half your week building proposals and chasing mockups.'",
          "After: 'You spend it closing. The tools do the rest.'",
          "Let them do the mental math on hours saved per week.",
          "This is ROI they can feel immediately.",
        ]}
      />

      <SlideBlock
        num={12}
        desc="Discussion prompt — 'How much time do you spend on things that aren't actually selling?'"
        points={[
          "Pause for a real answer. This is a conversation, not a monologue.",
          "Listen for pain points: mockup turnaround, proposal building, chasing approvals.",
          "Whatever they say, tie it back: 'That's exactly what we eliminate.'",
          "Don't rush past this — their answer tells you what matters most to them.",
        ]}
      />

      <SlideBlock
        num={13}
        desc="Section closer — 'You sell. We arm you.' with Magic Merch Maker summary."
        points={[
          "Recap the advantage: AI-powered mockups, pitch decks, demo stores, and creative — all built for you.",
          "The headline: 'You sell. We arm you.'",
          "Transition to next section: 'Now let's talk about what you're actually selling.'",
        ]}
      />

    </Page>

    {/* Page 2: Ideas + Build + Team + Closing */}
    <Page size="LETTER" style={s.page}>

      {/* ── SECTION: SELL IDEAS ── */}
      <Text style={s.sectionHeader}>02 — Sell Ideas</Text>

      <SlideBlock
        num={14}
        desc="Section opener — 'Stop selling products. Start selling ideas.'"
        points={[
          "This is the biggest mindset shift in the whole presentation.",
          "Frame it: 'At most distributors, you're a product rep. Here, you're a creative partner.'",
          "The conversation with clients starts with ideas, not catalogs.",
        ]}
      />

      <SlideBlock
        num={15}
        desc="Serif statement — Catalog conversation vs. unforgettable brand ideas."
        points={[
          "At most distributors, the conversation starts and ends with a product catalog.",
          "At Brand Blvd, it starts with an idea that makes the client's brand unforgettable.",
          "Let them picture the difference in how a client perceives them.",
        ]}
      />

      <SlideBlock
        num={16}
        desc="Grid — In-house creative, production under one roof, Canada + U.S. reach."
        points={[
          "In-house creative team: full design capabilities for big pitches that win new business.",
          "Production under one roof: Magic Merch Maker handles research and ideation; the creative team brings it to life.",
          "Seamless Canada + U.S. execution: North American reach with zero friction.",
          "Key message: you pitch bigger because you can actually deliver bigger.",
        ]}
      />

      <SlideBlock
        num={17}
        desc="Before / After — product rep vs. creative partner."
        points={[
          "Before: 'You're a product rep in a commodity conversation.'",
          "After: 'You're a creative partner your clients can't replace.'",
          "This reframes their entire value proposition to clients.",
          "The shift from replaceable vendor to indispensable partner is everything.",
        ]}
      />

      <SlideBlock
        num={18}
        desc="Discussion prompt — 'When's the last time a client came to you for an idea — not just a reorder?'"
        points={[
          "This question reveals whether they're stuck in order-taker mode.",
          "If they can't think of a recent example, that's the point.",
          "Tie it back: 'At Brand Blvd, that becomes the norm — not the exception.'",
        ]}
      />

      <SlideBlock
        num={19}
        desc="Section closer — 'Creative partner, not catalog rep.'"
        points={[
          "In-house creative, full production, and seamless cross-border execution.",
          "You pitch bigger because you can deliver bigger.",
          "Transition: 'Now let's talk about building your book.'",
        ]}
      />

      {/* ── SECTION: BUILD BIGGER ── */}
      <Text style={s.sectionHeader}>03 — Build Bigger</Text>

      <SlideBlock
        num={20}
        desc="Section opener — 'Build your book bigger.'"
        points={[
          "Shift from creative tools to business infrastructure.",
          "Frame: 'The tools and the team are great — but what about the business behind it?'",
          "This section is about margins, pipeline, and growth systems.",
        ]}
      />

      <SlideBlock
        num={21}
        desc="White slide — 'Run it like a business.' Four business tools."
        points={[
          "Best-in-class CRM: Manage your pipeline like a real business, not sticky notes.",
          "Preferred supplier pricing: Protect your margin on every single quote.",
          "Sales collateral and enablement: Every touchpoint sharper, every conversation stronger.",
          "Finance and POs handled: We manage the back-end so the rep stays in front of clients.",
          "You run your book like a business — we make your business better.",
          "These are the back-office advantages that compound over time.",
        ]}
      />

      <SlideBlock
        num={22}
        desc="Serif statement — 'You don't need more motivation. You need better infrastructure.'"
        points={[
          "This echoes the hook from the intro — now it's landing with more context.",
          "They've seen the creative tools, the ideas platform — now the infrastructure.",
          "Let the statement breathe. It's a mic-drop moment.",
        ]}
      />

      <SlideBlock
        num={23}
        desc="Discussion prompt — 'What part of your current setup slows you down the most?'"
        points={[
          "Listen carefully — this reveals their biggest frustration.",
          "Common answers: quoting, mockups, CRM, supplier communication.",
          "Connect their answer to a specific Brand Blvd solution.",
          "This is where you personalize the pitch to their reality.",
        ]}
      />

      <SlideBlock
        num={24}
        desc="Section closer — 'Better tools. Bigger book.'"
        points={[
          "CRM, preferred pricing, sales enablement — a system that helps you grow, not just survive.",
          "Transition: 'One more thing — the team behind all of this.'",
        ]}
      />

      {/* ── SECTION: FULL TEAM ── */}
      <Text style={s.sectionHeader}>04 — Full Team</Text>

      <SlideBlock
        num={25}
        desc="Section opener — 'A full team behind you.'"
        points={[
          "Transition: 'Everything we've shown you — someone is actually behind it.'",
          "This is about people, not just technology.",
          "The message: you're never on your own.",
        ]}
      />

      <SlideBlock
        num={26}
        desc="Serif statement — 'You sell. We handle everything else. Not a phone tree. A full team.'"
        points={[
          "Contrast with their current experience at other distributors.",
          "Emphasize: not a phone tree, not a ticketing system — real people.",
          "This is operational support, not just lip service.",
        ]}
      />

      <SlideBlock
        num={27}
        desc="Grid — Design team, customer service, sales development."
        points={[
          "Design team: In-house creatives for the big pitches that win new business.",
          "Customer service: Production, order management, invoicing and payments and fulfillment — all handled so you stay in front of clients.",
          "Sales development: Help sourcing contacts and prospects when you want to grow your book.",
          "These aren't promises — they're people already in place.",
        ]}
      />

      <SlideBlock
        num={28}
        desc="White slide — Self-promo budget and sample budget."
        points={[
          "Self-promo budget: Show up with branded materials that make a professional impression.",
          "Sample budget: Put product in your prospects' hands from day one.",
          "These budgets remove friction from the prospecting process.",
          "Mention specific examples if possible — branded lookbooks, sample kits, etc.",
        ]}
      />

      <SlideBlock
        num={29}
        desc="Discussion prompt — 'What would you do differently with a full team backing every deal?'"
        points={[
          "This plants a seed — get them dreaming about what's possible.",
          "Listen for what they wish they had: more time, bigger pitches, better follow-through.",
          "Whatever they say, affirm it: 'That's exactly what the team enables.'",
        ]}
      />

      <SlideBlock
        num={30}
        desc="Section closer — 'You sell. We handle everything else.'"
        points={[
          "Design, customer service, sales development, budgets, and infrastructure — all behind you.",
          "This is the complete picture: tools + ideas + business + team.",
          "Transition to closing: 'Let's bring it all together.'",
        ]}
      />

      {/* ── SECTION: CLOSING ── */}
      <Text style={s.sectionHeader}>Summary</Text>

      <SlideBlock
        num={31}
        desc="Recap slide — Four pillars summarized with 'Life is better on the Blvd.' closing."
        points={[
          "Walk through the four pillars one more time, briefly: Unfair Advantage, Creative Partner, Build Bigger, Full Team.",
          "End with: 'Life is better on the Blvd. Let's keep the conversation going.'",
          "Hand off to Jill's contact info — make the next step concrete.",
          "Ask: 'What stood out to you most? What do you want to explore further?'",
          "Leave them with confidence: their book is theirs — Brand Blvd just makes it better.",
        ]}
      />

      {/* Contact */}
      <View style={s.contactBox}>
        <Text style={{ fontFamily: "DM Serif Display", fontSize: 16, fontStyle: "italic", color: "#374151", marginBottom: 12 }}>
          Let's keep the conversation going.
        </Text>
        <Text style={s.contactName}>Jill Pascuzzi</Text>
        <Text style={s.contactDetail}>VP of Sales, USA — Brand Blvd</Text>
        <Text style={s.contactDetail}>jpascuzzi@brandblvd.com</Text>
        <Text style={s.contactDetail}>1-844-639-7924 ext. 248</Text>
        <Text style={s.contactDetail}>brandblvd.com</Text>
      </View>

    </Page>
  </Document>
);

export default PresenterNotesPDF;
