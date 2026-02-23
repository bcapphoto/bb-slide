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
  src: "https://fonts.gstatic.com/s/dmserifdisplay/v17/-nFnOHM81r4j6k0gjAW3mujVU2B2G_Bx0g.woff2",
});

Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2", fontWeight: 400, fontStyle: "italic" },
    { src: "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2", fontWeight: 600 },
  ],
});

Font.register({
  family: "Barlow Condensed",
  fonts: [
    { src: "https://fonts.gstatic.com/s/barlowcondensed/v13/HTxwL3I-JCGChYJ8VI-L6OO_au7B4873z3bWuQ.woff2", fontWeight: 600 },
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
  h4: {
    fontFamily: "DM Serif Display",
    fontSize: 14,
    color: "#111827",
    marginBottom: 6,
    marginTop: 20,
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
  <Document title="The Future of Our Industry" author="BrandBlvd">
    {/* ─── PAGE 1: Title + Section 1 start ─── */}
    <Page size="LETTER" style={s.page}>
      <Text style={s.h1}>The future of our industry</Text>
      <View style={s.greenBar} />

      <Divider />

      <Text style={s.h2}>AI is compressing time across everything</Text>

      <Text style={s.h3}>The speed of adoption</Text>
      <Text style={s.p}>
        AI tools have moved from novelty to household names. We're no longer in the "early adopter" phase - we're firmly in mainstream adoption. ChatGPT is a household name. AI is daily news. Every week brings a new breakthrough. Even at the Super Bowl - traditionally an indicator of mass-market interest - 23% of ads were AI-focused.
      </Text>
      <Text style={s.p}>
        37% of consumers now go to AI first instead of Google to search. And nearly 50% of Google searches now include AI summaries. This is not a niche experiment. It is infrastructure. It's a paradigm shift.
      </Text>
      <Text style={s.p}>
        AI has developed a reputation for being "magic" and "all-knowing." You put something in and get an answer out. Instantly. That shift in perception is what matters; AI is training people to expect immediate results. Not faster. Immediate.
      </Text>
      <Text style={s.p}>
        AI is reshaping patience. It's redefining what "responsive" means. It's altering how we look at services, how we value advice, and how we judge competence.
      </Text>
      <Text style={s.pLast}>
        The speed of AI is becoming the speed benchmark for everything else.
      </Text>

      <Text style={s.h3}>Time to 100M users</Text>
      <Text style={s.p}>
        ChatGPT reached 100 million users 27× faster than Facebook.
      </Text>
      <Text style={s.pLast}>
        AI isn't just fast - it's resetting what adoption looks like. Entire categories now compress from years to months. That changes consumer psychology. If something spreads that fast, it feels inevitable.
      </Text>

      <Text style={s.h3}>Investment signals</Text>
      <Text style={s.p}>
        Capital follows conviction. And capital is flowing aggressively into AI.
      </Text>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>OpenAI</Text> raised $100B round at a $850B valuation. It's the largest single funding round in technology history.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>NVIDIA</Text> is at a $3T+ Market Cap. Their stock grew 200% in a single year on AI chip demand. Today, they are one of the most valuable companies in the world.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Lovable</Text> is only 1 year old and raised $330M, marking it as one of the largest early-stage rounds for an AI-native platform.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Anthropic</Text> raised $30B at $380B valuation. Their revenue has grown 10x annually, and they're only 3 years old.</Text>
      </View>
      <Text style={s.pLast}>
        Markets don't place trillion-dollar bets on trends. They place them on transformations.
      </Text>

      <Text style={s.h3}>Expectation shifts</Text>

      <Text style={s.h4}>Patience is collapsing</Text>
      <Text style={s.p}>
        We used to tolerate friction because information had gatekeepers.
      </Text>
      <Text style={s.p}>
        Buying a car meant driving between dealerships, sitting across from salespeople, negotiating, and gathering brochures. Then websites reduced that friction. Now AI eliminates most of it.
      </Text>
      <Text style={s.p}>Today, you can ask ChatGPT to compare 2 vehicles and receive:</Text>
      <Bullet>Feature breakdowns</Bullet>
      <Bullet>Video reviews</Bullet>
      <Bullet>Consumer complaints</Bullet>
      <Bullet>Forum insights</Bullet>
      <Bullet>Known defects</Bullet>
      <Bullet>Ownership cost comparisons</Bullet>
      <Text style={s.p}>… all in minutes.</Text>
      <Text style={s.pLast}>
        When that becomes normal in one domain, it becomes expected in all domains.
      </Text>

      <Text style={s.h4}>"Good enough" is immediate</Text>
      <Text style={s.p}>
        We are increasingly accepting that "done" beats "perfect."
      </Text>
      <Text style={s.p}>
        As a photographer, I used to manually remove backgrounds in Photoshop using the lasso tool. It took 20-30 minutes. It was billable time. Now? I upload it to Canva, click a button and 5 seconds later it's done.
      </Text>
      <Text style={s.p}>
        Is it pixel-perfect? Maybe not. But it's good enough. And it's instant.
      </Text>
      <Text style={s.pLast}>
        The market is shifting toward velocity over precision - especially in early-stage decisions.
      </Text>

      <Text style={s.h4}>Exploration cost is nearing 0</Text>
      <Text style={s.p}>
        There was a time when exploring options had a real cost. If you wanted:
      </Text>
      <Bullet>3 campaign directions</Bullet>
      <Bullet>2 pricing models</Bullet>
      <Bullet>5 taglines</Bullet>
      <Bullet>Multiple design explorations</Bullet>
      <Text style={s.p}>
        You scheduled meetings. You waited for creative. You paid agencies. You moved slowly. Exploration required money, time, and coordination. Now? You type a prompt. You get ideation in seconds.
      </Text>
      <Text style={s.p}>The cost of exploring ideas is approaching zero.</Text>
      <Text style={s.p}>When exploration becomes free, behaviour changes:</Text>
      <Bullet>People test more.</Bullet>
      <Bullet>Compare more.</Bullet>
      <Bullet>Iterate more.</Bullet>
      <Bullet>Expect more options faster.</Bullet>

      <Text style={s.h4}>Self-sufficiency is increasing</Text>
      <Text style={s.p}>AI reduces early-stage dependence on specialists.</Text>
      <Text style={s.p}>
        Before calling a doctor, many people ask ChatGPT about symptoms. Before calling an agency, they generate campaign ideas themselves. Before contacting a consultant, they test their thinking alone.
      </Text>
      <Text style={s.pLast}>
        The dependency curve is flattening. And when dependency decreases, tolerance for delay decreases too.
      </Text>

      <Text style={s.h4}>The takeaway</Text>
      <Text style={s.p}>
        AI is not just improving productivity; it is rewiring expectations. If we operate with:
      </Text>
      <Bullet>48-hour quote turnarounds</Bullet>
      <Bullet>3-day proof cycles</Bullet>
      <Bullet>Reorders buried in email chains</Bullet>
      <Text style={s.p}>We feel analog in a digital world.</Text>
      <Text style={s.pLast}>
        Buyers will expect real-time pricing, instant proofs, and seamless ordering. Delays won't feel slow. They'll feel broken. That's both the threat and the opportunity.
      </Text>

      {/* ─── SECTION 2 ─── */}
      <Divider />

      <Text style={s.h2}>AI is taking over the "doing"</Text>

      <Text style={s.h3}>The human role shifts</Text>
      <Text style={s.p}>
        AI can perform rule-based, repetitive, information-heavy tasks faster, cheaper, and at scale. Increasingly, it can also handle complex cognitive tasks at levels comparable to - and sometimes exceeding - trained professionals.
      </Text>
      <Text style={s.p}>AI is already outperforming humans in measurable domains:</Text>
      <Bullet>In software engineering benchmarks, AI models fix real-world coding issues with higher success rates than many individual developers.</Bullet>
      <Bullet>In 2025, AI systems from OpenAI and Google reportedly achieved performance equivalent to a gold medal on International Mathematical Olympiad-level problems.</Bullet>
      <Bullet>GPT-4 (which is 3 versions old) scored in the 90th percentile on the Bar Exam.</Bullet>
      <Text style={s.p}>
        The point is not that AI is smarter. The point is that execution has become dramatically cheaper and faster. The barrier to doing something has collapsed. And when execution becomes easy, it also becomes easy to execute the wrong thing - very quickly.
      </Text>
      <Text style={s.p}>AI can generate 10 campaign ideas in seconds. But it does not know:</Text>
      <Bullet>Which aligns with your brand.</Bullet>
      <Bullet>Which fits your culture.</Bullet>
      <Bullet>Which is politically viable internally.</Bullet>
      <Bullet>Which will actually drive behaviour.</Bullet>
      <Text style={s.p}>That is where human value shifts.</Text>
      <Text style={s.p}>AI compresses execution. Humans must provide direction.</Text>
      <Text style={s.p}>Our role becomes less about doing the doing, and more about:</Text>
      <Bullet>Deciding what should be done.</Bullet>
      <Bullet>Framing the problem correctly.</Bullet>
      <Bullet>Defining success.</Bullet>
      <Bullet>Applying judgment.</Bullet>
      <Bullet>Taking responsibility for outcomes.</Bullet>
      <Text style={s.pLast}>The human role shifts up the stack.</Text>

      <Text style={s.h3}>Industry Leaders</Text>
      <Text style={s.p}>Leaders aren't debating whether AI will change execution. They're debating how fast.</Text>
      <View style={s.quote}>
        <Text>"The future of work is not about AI replacing people. It's about people who use AI replacing people who don't."</Text>
        <Text style={s.quoteAuthor}>— Satya Nadella, CEO, Microsoft</Text>
      </View>
      <View style={s.quote}>
        <Text>"The real value of AI is helping salespeople spend more time with customers and less time doing administrative work."</Text>
        <Text style={s.quoteAuthor}>— Marc Benioff, CEO, Salesforce</Text>
      </View>
      <View style={s.quote}>
        <Text>"We'll be there in 3-6 months, where AI is writing 90% of the code — and in 12 months, AI writes all of it."</Text>
        <Text style={s.quoteAuthor}>— Dario Amodei, CEO, Anthropic</Text>
      </View>

      <Text style={s.h3}>Order-taking dies</Text>
      <Text style={s.p}>Software and systems will improve rapidly. They will do things like:</Text>
      <Bullet>Draft proposals instantly.</Bullet>
      <Bullet>Compare pricing automatically.</Bullet>
      <Bullet>Source products at scale.</Bullet>
      <Text style={s.p}>
        More buyers will use tools to do portions of our current work themselves. Automation will take a lot of the "busy work" off our hands. If we remain order-takers, we compete against something we can never keep up with.
      </Text>
      <Text style={s.p}>
        Industries like travel and retail eliminated transactional middlemen when search became automated. That same pressure will apply here.
      </Text>
      <Text style={s.p}>As execution gets automated, we must move closer to impact.</Text>
      <Bullet>If AI drafts proposals, we ensure they solve the right problem.</Bullet>
      <Bullet>If AI generates comparisons, we ensure alignment with the strategy.</Bullet>
      <Bullet>If AI sources merch instantly, we design the moment around it.</Bullet>
      <Text style={s.pLast}>We are not losing value. We are being forced up the value chain.</Text>

      {/* ─── SECTION 3 ─── */}
      <Divider />

      <Text style={s.h2}>AI will restructure the employer-employee relationship</Text>

      <Text style={s.h3}>The workforce will shift</Text>
      <Text style={s.p}>The workforce will shift. Not incrementally, but structurally.</Text>
      <Text style={s.p}>
        For over a century, work has been the primary anchor of our identity. We always ask, "Where do you work?" or "What do you do?" Employment has shaped:
      </Text>
      <Bullet>Income</Bullet>
      <Bullet>Community</Bullet>
      <Bullet>Social status</Bullet>
      <Bullet>Daily rhythm</Bullet>
      <Bullet>Personal identity</Bullet>
      <Text style={s.p}>
        But AI will disrupt the mechanics of work itself. Not just jobs, not just the work, but the very structure and meaning of work, and our relationship with it.
      </Text>
      <Text style={s.p}>AI increases output per employee. We know that. This means:</Text>
      <Bullet>Fewer people can produce more.</Bullet>
      <Bullet>Repetitive tasks disappear.</Bullet>
      <Bullet>Middle layers compress.</Bullet>
      <Bullet>Knowledge work becomes augmented.</Bullet>
      <Text style={s.p}>
        This isn't alarmist to say that we'll see mass unemployment overnight, but it does mean that headcount starts to become less correlated with output. When that happens, the structure of the work shifts. Companies will:
      </Text>
      <Bullet>Hire more selectively.</Bullet>
      <Bullet>Automate more aggressively.</Bullet>
      <Bullet>Consolidate roles.</Bullet>
      <Bullet>Expect higher leverage per person.</Bullet>
      <Text style={s.p}>
        Work will become increasingly less about time spent and more about value created. And when work becomes more fluid, more augmented, and more efficient, people will feel less secure, less permanent and have less of their identity tied to their employer. The employee/employer relationship changes.
      </Text>
      <Text style={s.pLast}>
        When employment becomes more transactional, people seek belonging elsewhere.
      </Text>

      <Text style={s.h3}>The numbers</Text>
      <Bullet>80% of people believe AI will impact their daily work.</Bullet>
      <Bullet>50% of people worry their job could be automated.</Bullet>
      <Bullet>76K+ jobs eliminated in 2025.</Bullet>
      <Text style={s.pLast}>
        Even if these numbers fluctuate year to year, the signal is consistent: work is being restructured.
      </Text>

      <Text style={s.h3}>The pivot</Text>
      <Text style={s.p}>
        If employee attachment weakens, merch budgets tied strictly to payroll size are vulnerable. But the need for belonging does not disappear; it just relocates.
      </Text>
      <Text style={s.pLast}>
        Work becomes a function, and identity becomes something broader. Community, values, tribe - those anchors strengthen when institutional stability weakens.
      </Text>

      <Text style={s.h3}>The opportunity</Text>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Internal</Text> - Merch must reflect culture and values, not just fill closets.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>External</Text> - Build tribes of customers, advocates, insiders, and culture ambassadors.</Text>
      </View>
      <View style={s.accentItem}>
        <Text><Text style={s.accentLabel}>Identity</Text> - Move from "gifting employees" to "manufacturing belonging."</Text>
      </View>
      <Text style={{ ...s.pLast, marginTop: 10 }}>
        If we tie our growth to payroll size, we're tied to a shrinking lever. If we tie our growth to identity and belonging, we tie our growth to something expanding. That's the shift.
      </Text>

      {/* Footer */}
      <View style={s.footer}>
        <View style={s.footerDot} />
      </View>
    </Page>
  </Document>
);

export default ArticlePDF;
