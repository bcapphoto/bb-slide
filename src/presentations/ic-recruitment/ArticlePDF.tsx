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
    fontFamily: "DM Serif Display",
    fontSize: 16,
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
    marginBottom: 6,
  },
  p: {
    marginBottom: 10,
  },
  pLast: {
    marginBottom: 24,
  },
  bold: {
    fontWeight: 600,
    color: "#111827",
  },
  greenBar: {
    width: 48,
    height: 3,
    backgroundColor: green,
    marginBottom: 40,
  },
  divider: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
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
    flexDirection: "row" as const,
    marginBottom: 6,
    paddingLeft: 12,
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: green,
    marginTop: 6,
    marginRight: 10,
  },
  bulletText: {
    flex: 1,
  },
  accentBox: {
    paddingLeft: 14,
    borderLeftWidth: 3,
    borderLeftColor: green,
    borderLeftStyle: "solid" as const,
    marginVertical: 16,
    paddingVertical: 4,
  },
  beforeAfter: {
    flexDirection: "row" as const,
    marginVertical: 16,
    backgroundColor: "#F9FAFB",
    borderRadius: 4,
    padding: 16,
  },
  beforeAfterCol: {
    flex: 1,
  },
  label: {
    fontFamily: "Barlow Condensed",
    fontSize: 8,
    fontWeight: 600,
    letterSpacing: 2,
    textTransform: "uppercase" as const,
    marginBottom: 6,
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
});

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <View style={s.bulletItem}>
    <View style={s.bulletDot} />
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
  <Document>
    <Page size="LETTER" style={s.page}>

      {/* Header */}
      <Text style={s.h1}>Life is better on the Blvd.</Text>
      <Text style={s.subtitle}>Why bring your book to Brand Blvd.</Text>
      <View style={s.greenBar} />

      <Text style={s.p}>Thanks for the conversation.</Text>
      <Text style={s.p}>
        Here's the thing — your book is yours. You built it. But the system behind you? It's probably not keeping up.
      </Text>
      <Text style={s.p}>
        You're waiting on mockups. Chasing approvals. Spending hours on stuff that isn't selling.
      </Text>
      <Text style={[s.p, s.bold]}>
        You don't need more motivation. You need better infrastructure.
      </Text>

      <View style={s.accentBox}>
        <Text style={[s.p, s.bold, { marginBottom: 0 }]}>
          You run your book like a business. We make your business better.
        </Text>
      </View>

      {/* Section 1 */}
      <Divider />
      <Text style={s.h2}>Walk into every meeting with an unfair advantage.</Text>
      <Text style={s.p}>Most reps show up with a PDF and a pitch. Here's what you show up with at Brand Blvd:</Text>

      <Bullet>Custom mockups — AI-generated, branded to your client, built in seconds</Bullet>
      <Bullet>Pitch decks — Fully designed, client-ready, done before you finish your coffee</Bullet>
      <Bullet>Demo stores — Live, clickable company stores your prospect can browse on the spot</Bullet>
      <Bullet>Creative concepts — Ideas turned into polished presentations, not napkin sketches</Bullet>

      <Text style={s.p}>
        All of this is powered by Magic Merch Maker — our all-in-one AI platform built in-house at Brand Blvd. It does company research automatically, generates product ideas tailored to your client's brand, creates AI mockups in seconds, assembles Creative Concept Decks, and even spins up a live demo store — all before the meeting starts.
      </Text>
      <Text style={s.p}>
        It's not a collection of disconnected tools. It's a single pipeline: research a prospect, generate ideas, build mockups, assemble a pitch, and launch a store. End to end.
      </Text>

      <View style={s.beforeAfter}>
        <View style={s.beforeAfterCol}>
          <Text style={[s.label, { color: "#6B7280" }]}>Before</Text>
          <Text style={s.p}>You spend half your week building proposals and chasing mockups.</Text>
        </View>
        <View style={s.beforeAfterCol}>
          <Text style={[s.label, { color: green }]}>After</Text>
          <Text style={[s.p, s.bold]}>You spend it closing. Magic Merch Maker does the rest.</Text>
        </View>
      </View>

      {/* Section 2 */}
      <Divider />
      <Text style={s.h2}>Stop selling products. Start selling ideas.</Text>
      <Text style={s.p}>This is the biggest shift.</Text>
      <Text style={s.p}>
        At most distributors, the conversation starts and ends with a product catalog. At Brand Blvd, it starts with an idea that makes your client's brand unforgettable.
      </Text>
      <Text style={s.p}>
        In-house creative team. Full production and execution under one roof. Magic Merch Maker handles the research and ideation; our creative team brings it to life. You pitch bigger because you can actually deliver bigger.
      </Text>

      <View style={s.beforeAfter}>
        <View style={s.beforeAfterCol}>
          <Text style={[s.label, { color: "#6B7280" }]}>Before</Text>
          <Text style={s.p}>You're a product rep in a commodity conversation.</Text>
        </View>
        <View style={s.beforeAfterCol}>
          <Text style={[s.label, { color: green }]}>After</Text>
          <Text style={[s.p, s.bold]}>You're a creative partner your clients can't replace.</Text>
        </View>
      </View>

      <View style={s.accentBox}>
        <Text style={s.p}>Plus seamless Canada + U.S. execution — your clients get North American reach with zero friction.</Text>
      </View>

      {/* Section 3 */}
      <Divider />
      <Text style={s.h2}>Build your book bigger.</Text>
      <Bullet>Best-in-class CRM and sales tools to manage your pipeline like a real business</Bullet>
      <Bullet>Preferred supplier pricing that protects your margin on every quote</Bullet>
      <Bullet>Sales collateral and enablement that makes every touchpoint sharper</Bullet>
      <Bullet>Finance and POs are handled. We manage the back-end, so you can stay in front of clients.</Bullet>

      {/* Section 4 */}
      <Divider />
      <Text style={s.h2}>You sell. We handle everything else.</Text>
      <Text style={s.pLast}>Not a phone tree. A full team.</Text>
      <Bullet>Design team — In-house creatives for the big pitches that win new business</Bullet>
      <Bullet>Customer service — Production, order management, invoicing and payments, and fulfillment — handled</Bullet>
      <Bullet>Sales development — Help sourcing contacts and prospects when you want to grow</Bullet>
      <Bullet>Self-promo budget — Show up with branded materials that make an impression</Bullet>
      <Bullet>Sample budget — Put product in your prospects' hands from day one</Bullet>

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

export default ArticlePDF;
