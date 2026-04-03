import { lazy, Suspense, useState } from "react";
import { IconFastForward, IconStacks, IconIdentity, IconUpdate, IconOrgChart, IconAgent, IconTarget } from "@/components/SectionIcons";
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
    a.download = "The-Future-of-Our-Industry.pdf";
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
            {showPdf ? "Generating…" : "Download PDF"}
          </button>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-gray-900 mb-6">
          The future of our industry
        </h1>
        <div className="w-16 h-1 bg-brand-green" />
      </header>

      {/* ─── SECTION 1 ─── */}
      <SectionDivider icon={IconFastForward} label="Compressing Time" />

      <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
        AI is compressing time across everything
      </h2>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        The speed of adoption
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        AI tools have moved from novelty to household names. We're no longer in the "early adopter" phase - we're firmly in mainstream adoption. ChatGPT is a household name. AI is daily news. Every week brings a new breakthrough. Even at the Super Bowl - traditionally an indicator of mass-market interest - 23% of ads were AI-focused.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        37% of consumers now go to AI first instead of Google to search. And nearly 50% of Google searches now include AI summaries. This is not a niche experiment. It is infrastructure. It's a paradigm shift.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        AI has developed a reputation for being "magic" and "all-knowing." You put something in and get an answer out. Instantly. That shift in perception is what matters; AI is training people to expect immediate results. Not faster. Immediate.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        AI is reshaping patience. It's redefining what "responsive" means. It's altering how we look at services, how we value advice, and how we judge competence.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        The speed of AI is becoming the speed benchmark for everything else.
      </p>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        Time to 100M users
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        ChatGPT reached 100 million users 27× faster than Facebook.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        AI isn't just fast - it's resetting what adoption looks like. Entire categories now compress from years to months. That changes consumer psychology. If something spreads that fast, it feels inevitable.
      </p>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        Investment signals
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Capital follows conviction. And capital is flowing aggressively into AI.
      </p>
      <ul className="space-y-4 mb-10">
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">OpenAI</span> raised $100B round at a $850B valuation. It's the largest single funding round in technology history.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">NVIDIA</span> is at a $3T+ Market Cap. Their stock grew 200% in a single year on AI chip demand. Today, they are one of the most valuable companies in the world.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Lovable</span> is only 1 year old and raised $330M, marking it as one of the largest early-stage rounds for an AI-native platform.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Anthropic</span> raised $30B at $380B valuation. Their revenue has grown 10x annually, and they're only 3 years old.
        </li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        Markets don't place trillion-dollar bets on trends. They place them on transformations.
      </p>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        Expectation shifts
      </h3>

      <h4 className="font-serif text-xl text-gray-900 mb-3 mt-10">Patience is collapsing</h4>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        We used to tolerate friction because information had gatekeepers.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Buying a car meant driving between dealerships, sitting across from salespeople, negotiating, and gathering brochures. Then websites reduced that friction. Now AI eliminates most of it.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        Today, you can ask ChatGPT to compare 2 vehicles and receive:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg text-gray-700 mb-5">
        <li>Feature breakdowns</li>
        <li>Video reviews</li>
        <li>Consumer complaints</li>
        <li>Forum insights</li>
        <li>Known defects</li>
        <li>Ownership cost comparisons</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        … all in minutes.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        When that becomes normal in one domain, it becomes expected in all domains.
      </p>

      <h4 className="font-serif text-xl text-gray-900 mb-3 mt-10">"Good enough" is immediate</h4>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        We are increasingly accepting that "done" beats "perfect."
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        As a photographer, I used to manually remove backgrounds in Photoshop using the lasso tool. It took 20-30 minutes. It was billable time. Now? I upload it to Canva, click a button and 5 seconds later it's done.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Is it pixel-perfect? Maybe not. But it's good enough. And it's instant.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        The market is shifting toward velocity over precision - especially in early-stage decisions.
      </p>

      <h4 className="font-serif text-xl text-gray-900 mb-3 mt-10">Exploration cost is nearing 0</h4>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        There was a time when exploring options had a real cost. If you wanted:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg text-gray-700 mb-5">
        <li>3 campaign directions</li>
        <li>2 pricing models</li>
        <li>5 taglines</li>
        <li>Multiple design explorations</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        You scheduled meetings. You waited for creative. You paid agencies. You moved slowly. Exploration required money, time, and coordination. Now? You type a prompt. You get ideation in seconds.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        The cost of exploring ideas is approaching zero.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        When exploration becomes free, behaviour changes:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg text-gray-700 mb-10">
        <li>People test more.</li>
        <li>Compare more.</li>
        <li>Iterate more.</li>
        <li>Expect more options faster.</li>
      </ul>

      <h4 className="font-serif text-xl text-gray-900 mb-3 mt-10">Self-sufficiency is increasing</h4>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        AI reduces early-stage dependence on specialists.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Before calling a doctor, many people ask ChatGPT about symptoms. Before calling an agency, they generate campaign ideas themselves. Before contacting a consultant, they test their thinking alone.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        The dependency curve is flattening. And when dependency decreases, tolerance for delay decreases too.
      </p>

      <h4 className="font-serif text-xl text-gray-900 mb-3 mt-10">The takeaway</h4>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        AI is not just improving productivity; it is rewiring expectations. If we operate with:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg text-gray-700 mb-5">
        <li>48-hour quote turnarounds</li>
        <li>3-day proof cycles</li>
        <li>Reorders buried in email chains</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        We feel analog in a digital world.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        Buyers will expect real-time pricing, instant proofs, and seamless ordering. Delays won't feel slow. They'll feel broken. That's both the threat and the opportunity.
      </p>

      {/* ─── SECTION 2 ─── */}
      <SectionDivider icon={IconStacks} label="The Doing" />

      <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
        AI is taking over the "doing"
      </h2>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        The human role shifts
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        AI can perform rule-based, repetitive, information-heavy tasks faster, cheaper, and at scale. Increasingly, it can also handle complex cognitive tasks at levels comparable to - and sometimes exceeding - trained professionals.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        AI is already outperforming humans in measurable domains:
      </p>
      <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-5">
        <li>In software engineering benchmarks, AI models fix real-world coding issues with higher success rates than many individual developers.</li>
        <li>In 2025, AI systems from OpenAI and Google reportedly achieved performance equivalent to a gold medal on International Mathematical Olympiad-level problems.</li>
        <li>GPT-4 (which is 3 versions old) scored in the 90th percentile on the Bar Exam.</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        The point is not that AI is smarter. The point is that execution has become dramatically cheaper and faster. The barrier to doing something has collapsed. And when execution becomes easy, it also becomes easy to execute the wrong thing - very quickly.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        AI can generate 10 campaign ideas in seconds. But it does not know:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg text-gray-700 mb-5">
        <li>Which aligns with your brand.</li>
        <li>Which fits your culture.</li>
        <li>Which is politically viable internally.</li>
        <li>Which will actually drive behaviour.</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        That is where human value shifts.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        AI compresses execution. Humans must provide direction.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        Our role becomes less about doing the doing, and more about:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg text-gray-700 mb-5">
        <li>Deciding what should be done.</li>
        <li>Framing the problem correctly.</li>
        <li>Defining success.</li>
        <li>Applying judgment.</li>
        <li>Taking responsibility for outcomes.</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        The human role shifts up the stack.
      </p>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        Industry Leaders
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-6">
        Leaders aren't debating whether AI will change execution. They're debating how fast.
      </p>
      <div className="space-y-6 mb-10">
        <blockquote className="border-l-2 border-brand-green/40 pl-6 text-lg italic text-gray-600 leading-[1.8]">
          "The future of work is not about AI replacing people. It's about people who use AI replacing people who don't."
          <footer className="not-italic text-sm text-gray-500 mt-2">— Satya Nadella, CEO, Microsoft</footer>
        </blockquote>
        <blockquote className="border-l-2 border-brand-green/40 pl-6 text-lg italic text-gray-600 leading-[1.8]">
          "The real value of AI is helping salespeople spend more time with customers and less time doing administrative work."
          <footer className="not-italic text-sm text-gray-500 mt-2">— Marc Benioff, CEO, Salesforce</footer>
        </blockquote>
        <blockquote className="border-l-2 border-brand-green/40 pl-6 text-lg italic text-gray-600 leading-[1.8]">
          "We'll be there in 3-6 months, where AI is writing 90% of the code — and in 12 months, AI writes all of it."
          <footer className="not-italic text-sm text-gray-500 mt-2">— Dario Amodei, CEO, Anthropic</footer>
        </blockquote>
      </div>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        Order-taking dies
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        Software and systems will improve rapidly. They will do things like:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg text-gray-700 mb-5">
        <li>Draft proposals instantly.</li>
        <li>Compare pricing automatically.</li>
        <li>Source products at scale.</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        More buyers will use tools to do portions of our current work themselves. Automation will take a lot of the "busy work" off our hands. If we remain order-takers, we compete against something we can never keep up with.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Industries like travel and retail eliminated transactional middlemen when search became automated. That same pressure will apply here.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        As execution gets automated, we must move closer to impact.
      </p>
      <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-5">
        <li>If AI drafts proposals, we ensure they solve the right problem.</li>
        <li>If AI generates comparisons, we ensure alignment with the strategy.</li>
        <li>If AI sources merch instantly, we design the moment around it.</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        We are not losing value. We are being forced up the value chain.
      </p>

      {/* ─── SECTION 3 ─── */}
      <SectionDivider icon={IconIdentity} label="Identity" />

      <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
        AI will restructure the employer-employee relationship
      </h2>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        The workforce will shift
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        The workforce will shift. Not incrementally, but structurally.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        For over a century, work has been the primary anchor of our identity. We always ask, "Where do you work?" or "What do you do?" Employment has shaped:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg text-gray-700 mb-5">
        <li>Income</li>
        <li>Community</li>
        <li>Social status</li>
        <li>Daily rhythm</li>
        <li>Personal identity</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        But AI will disrupt the mechanics of work itself. Not just jobs, not just the work, but the very structure and meaning of work, and our relationship with it.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        AI increases output per employee. We know that. This means:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg text-gray-700 mb-5">
        <li>Fewer people can produce more.</li>
        <li>Repetitive tasks disappear.</li>
        <li>Middle layers compress.</li>
        <li>Knowledge work becomes augmented.</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        This isn't alarmist to say that we'll see mass unemployment overnight, but it does mean that headcount starts to become less correlated with output. When that happens, the structure of the work shifts. Companies will:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg text-gray-700 mb-5">
        <li>Hire more selectively.</li>
        <li>Automate more aggressively.</li>
        <li>Consolidate roles.</li>
        <li>Expect higher leverage per person.</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Work will become increasingly less about time spent and more about value created. And when work becomes more fluid, more augmented, and more efficient, people will feel less secure, less permanent and have less of their identity tied to their employer. The employee/employer relationship changes.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        When employment becomes more transactional, people seek belonging elsewhere.
      </p>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        The numbers
      </h3>
      <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-5">
        <li>80% of people believe AI will impact their daily work.</li>
        <li>50% of people worry their job could be automated.</li>
        <li>76K+ jobs eliminated in 2025.</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        Even if these numbers fluctuate year to year, the signal is consistent: work is being restructured.
      </p>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        The pivot
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        If employee attachment weakens, merch budgets tied strictly to payroll size are vulnerable. But the need for belonging does not disappear; it just relocates.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        Work becomes a function, and identity becomes something broader. Community, values, tribe - those anchors strengthen when institutional stability weakens.
      </p>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        The opportunity
      </h3>
      <ul className="space-y-4 mb-10">
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Internal</span> - Merch must reflect culture and values, not just fill closets.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">External</span> - Build tribes of customers, advocates, insiders, and culture ambassadors.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Identity</span> - Move from "gifting employees" to "manufacturing belonging."
        </li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700">
        If we tie our growth to payroll size, we're tied to a shrinking lever. If we tie our growth to identity and belonging, we tie our growth to something expanding. That's the shift.
      </p>

      {/* ─── UPDATE: 30 DAYS LATER ─── */}
      <div className="my-20 md:my-28">
        <div className="h-px bg-gray-300 mb-20 md:mb-28" />
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-green/10 flex items-center justify-center">
            <IconUpdate size={28} className="text-brand-green" />
          </div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 font-bold">Addendum</p>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-6">
          Update: 1 month later, and I already need to add to this
        </h2>
        <p className="text-lg leading-[1.8] text-gray-700 mb-5">
          I wrote this article about a month ago. I thought it would hold up for a while. It didn't.
        </p>
        <p className="text-lg leading-[1.8] text-gray-700 mb-5">
          Not because I was wrong. The themes still stand. But new signals emerged in the last 30 days that I didn't fully see coming. The speed I wrote about in the first section? It's happening to the article itself.
        </p>
        <p className="text-lg leading-[1.8] text-gray-700 mb-10">
          So rather than rewrite what's above, I'm adding to it. Consider this the "yes, and..." to everything you just read. 3 things have shifted my thinking since.
        </p>
      </div>

      {/* ─── UPDATE SECTION 1: Org Charts ─── */}
      <SectionDivider icon={IconOrgChart} label="Org Charts" />

      <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
        The org chart is dissolving
      </h2>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        The management layer problem
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        For 2,000 years, organizations have been designed around one constraint: a leader can only effectively manage 3 to 8 people. That's it. That number hasn't changed since the Roman military. It's why we have hierarchies. It's why we have middle management. It's why every company ends up looking roughly the same from the top down.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        The entire purpose of those layers is coordination. Information flows up. Decisions flow down. Middle management exists to aggregate, translate, and route.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Here's the thing... AI doesn't need layers to coordinate. It doesn't need a weekly pipeline review to know what's happening. It doesn't need someone spending 3 days building a spreadsheet just so a VP can ask a question about trends. It doesn't need a standing meeting to surface data that should have been surfaced automatically.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Sequoia Capital published a piece recently called "From Hierarchy to Intelligence." It profiles how Block (the company behind Cash App and Square) is replacing what hierarchy does - the coordination function itself. Not giving employees AI tools and calling it innovation. Actually restructuring.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        They built what they call a "Company World Model" - an AI system that maintains a continuously updated picture of the entire operation. The AI holds the context that managers used to hold. The result? 3 roles instead of 10 layers:
      </p>
      <ul className="space-y-4 mb-10">
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Individual contributors</span> who use the model for context instead of waiting for management approval.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Directly Responsible Individuals</span> who own a specific problem for 90 days with cross-team authority.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Player-coaches</span> who build things and develop people at the same time.
        </li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        No information routers. No meeting schedulers. No slide-deck preparers. The manager role doesn't disappear. But it transforms from information processor to coach and decision-maker. The "doing" part of management - gathering data, building reports, spotting trends - that's exactly the kind of work AI absorbs first. The thinking part - judgment, coaching, strategy - that stays human.
      </p>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        So what does this change?
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        2 things. And they pull in opposite directions, which is what makes this interesting.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Inside our walls, "growing the team" starts to look less like adding headcount and more like increasing leverage per person. The question shifts from "who do we hire next?" to "how do we make every person 3× more effective?"
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        Outside our walls, the companies we're selling to are going to look different:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg text-gray-700 mb-5">
        <li>Flatter orgs.</li>
        <li>Fewer decision-makers.</li>
        <li>Fewer middle managers to navigate in a deal.</li>
        <li>The org chart your SDR mapped last year might not exist next year.</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        But here's the part that actually makes me optimistic... If management layers compress, the people who remain become more important, not less. They're higher leverage. They hold more authority. They care more about culture and belonging because they're closer to the work.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        That's a very good thing for a company that manufactures belonging.
      </p>

      {/* ─── UPDATE SECTION 2: Agents ─── */}
      <SectionDivider icon={IconAgent} label="Agents" />

      <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
        Agents are doing the work
      </h2>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        The convergence
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        A month ago, when I talked about AI "taking over the doing," I was mostly talking about AI as a tool. You prompt it. It responds. You review. A human is in the loop the whole time.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        What's changed isn't the idea. It's the speed at which the biggest players are converging on the same conclusion: agents should do the work, not just assist with it.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        3 examples from the last few months:
      </p>
      <ul className="space-y-4 mb-10">
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Anthropic's Claude</span> shipped 74 releases in 52 days. Claude Code now generates over $2.5 billion in annual revenue and accounts for more than half of all enterprise spending on Anthropic products. 4% of all public GitHub commits are now authored by Claude Code - a number that doubled in a single month.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">OpenClaw</span> launched and hit 250,000 GitHub stars in 60 days - surpassing React's 10-year record. It now has 3.2 million monthly active users. Its traffic grew 925% in a single month.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Cursor</span> launched version 3 on April 2. You describe what you want built in plain English and the system writes it, tests it, and demos it. Their revenue doubled in 3 months. They're at over $2 billion annually.
        </li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        These aren't 3 competing tools. They're 3 signals pointing the same direction: AI isn't assisting anymore. It's executing.
      </p>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        Beyond code
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Coding is the most visible example because it's the easiest to agentify. The inputs and outputs are structured. The feedback loops are fast. But it's just the first domino.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Marketing is next. The $200+ billion in agentic AI spending projected for 2026 isn't speculative - it's capital chasing a thesis that agents can deploy complex work products in domains that are finally ready to receive them. Security teams are using agents to analyze unfamiliar code. Research teams are using them to build data visualizations. Non-technical employees are using them to debug network issues.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        And then there's the really wild stuff. An open-source project called Paperclip launched in March 2026 and hit 30,000 GitHub stars in 3 weeks. What does it do? It lets you build a company run entirely by AI agents. Org charts, budgets, reporting lines, governance - all orchestrated by agents. Zero humans required.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        A developer named Nat Eliason built an AI agent called Felix using OpenClaw. It operates autonomously and has generated over $100,000 in revenue. Matthew Gallagher launched a telehealth company with $20,000 and AI tools - $401 million in sales in 2025, on track for $1.8 billion this year.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        Dario Amodei, CEO of Anthropic, gives a 70-80% probability that 2026 is the year we see the first billion-dollar company run by a single person. This reframes the question from "will AI take jobs?" to something more fundamental: what does a company even look like when agents can do the work?
      </p>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        Services are the new software
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Sequoia Capital published another piece I think is one of the most important things I've read this year. It's called "Services: The New Software." The argument: the next trillion-dollar company won't sell tools. It will sell outcomes.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        They break work into 2 categories:
      </p>
      <ul className="space-y-4 mb-5">
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Intelligence</span> - rule-based tasks. Coding, testing, contract drafting, invoice matching. Things with clear inputs and outputs.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Judgment</span> - experience-driven decisions. What to build. When to ship. What strategy to pursue. Things that require context, intuition, and accountability.
        </li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        AI has crossed the threshold where it handles most intelligence work autonomously. What remains is judgment. And here's the kicker: for every dollar companies spend on software, they spend 6 dollars on services. The opportunity isn't in building better tools. It's in delivering better outcomes.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Think about that in the context of what we do. We don't sell t-shirts. We sell the experience around the t-shirt - the brand moment, the culture artifact, the belonging signal. The more AI commoditizes the logistics of merch, the more the value shifts to what we're actually good at: designing the moment. Framing the story. Understanding what the brand needs before they can articulate it.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        The companies that win in this world aren't the ones with the best software. They're the ones that deliver outcomes people trust.
      </p>

      {/* ─── UPDATE SECTION 3: Buyers ─── */}
      <SectionDivider icon={IconTarget} label="Buyers" />

      <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
        When machines are the buyers
      </h2>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        The question no one is asking
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Here's the section that kept me up at night. And honestly? I'm still not sure I've fully wrapped my head around it.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Everything above - the flattening org charts, the agents doing work, the services-as-outcomes shift - all of it leads to a question that I don't think enough people in our industry are asking: If AI is making the decisions... who are we selling to?
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        I don't mean philosophically. I mean literally:
      </p>
      <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-5">
        <li>45% of B2B buyers already use AI as their primary research method for identifying new suppliers.</li>
        <li>Two-thirds of B2B buyers use AI agents for vendor research and rely on them as much as - or more than - Google.</li>
        <li>By 2028, analysts predict AI agents will mediate 90% of all B2B purchases - $15 trillion in spending through machines.</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Think about what happens when a procurement manager needs branded merch for an event. Today, they might Google it. Ask a colleague. Check their inbox for a vendor they've used before.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Tomorrow? They tell their AI procurement agent: "I need 500 branded polos for a company retreat in August. Budget is $25K. Find me 3 vendors with fast turnaround, good reviews, and sustainability options."
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        The agent researches. Compares. Shortlists. Maybe it even places the order. The human doesn't visit a website. Doesn't read an email. Doesn't take a sales call.
      </p>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        The spectrum
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        Will every company operate this way? No. Not yet. Enterprise adoption curves are messy. Small businesses will lag. Relationship-heavy industries will resist longer. There will be a long, uneven transition where some buyers are fully agentic and others still want to pick up the phone.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        But the direction is clear. And it creates 2 distinct lanes:
      </p>
      <ul className="space-y-4 mb-10">
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Lane 1:</span> Companies where a human is still the buyer. Relationships, trust, and personal service still win. The SDR call matters. Showing up and reading the room is the differentiator. We double down on the human stuff.
        </li>
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          <span className="text-gray-900">Lane 2:</span> Companies where an agent is doing the research, shortlisting, or buying. The question becomes: how does Brand Blvd show up when the first touchpoint is an algorithm, not a person? Are we structured data that an AI can parse? Are our case studies and value propositions machine-readable? Are we in the right databases and data feeds?
        </li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        It's a completely different muscle. And it's not replacing the human sales process. It's adding a second, parallel track.
      </p>

      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        The Brand Blvd angle
      </h3>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        OK so here's why I'm actually optimistic about this. If AI agents are handling the intelligence work of procurement - comparing prices, checking specs, evaluating turnaround times - then the only differentiator in that layer is data. And data is a commodity.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-4">
        But here's what an AI procurement agent can't evaluate:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg text-gray-700 mb-5">
        <li>Does this company actually understand my brand?</li>
        <li>Will they push back when my idea is off?</li>
        <li>Will they design a merch experience that makes our people feel something?</li>
      </ul>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        That's judgment. That's the thing Sequoia was talking about - work that requires context, intuition, accountability. And that's exactly where we live.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        The transactional vendors - the ones just fulfilling orders - will get eaten alive by agentic procurement. An AI agent doesn't need a sales rep to place a reorder. It just does it. The order-takers I talked about in the original article? This is how they die. Not slowly. Fast.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">
        But the companies that sell belonging, that design brand moments, that bring creative strategy to the table? Those are the ones the human decision-maker still picks up the phone for.
      </p>
      <p className="text-lg leading-[1.8] text-gray-700 mb-10">
        The agent can shortlist vendors. But it can't feel the culture of a brand. We're not selling t-shirts. We're selling something machines can't evaluate. And that might be the best competitive moat in an agentic world.
      </p>

      {/* ─── UPDATE CLOSING ─── */}
      <div className="my-20 md:my-28">
        <div className="h-px bg-gray-300 mb-14" />
        <h3 className="font-serif text-2xl md:text-3xl leading-tight text-gray-900 mb-6">
          The update to the update
        </h3>
        <p className="text-lg leading-[1.8] text-gray-700 mb-5">
          I wrote the original article to make a point about how fast things are moving. About how AI is compressing time.
        </p>
        <p className="text-lg leading-[1.8] text-gray-700 mb-5">
          And then I had to update it 30 days later because the world changed faster than I realized.
        </p>
        <p className="text-lg leading-[1.8] text-gray-700 mb-5">
          That's the meta-lesson. The speed of change isn't slowing down. It's compounding.
        </p>
        <p className="text-lg leading-[1.8] text-gray-700 mb-5">
          The companies that win are not the ones who predict the future correctly. They're the ones who build the muscle to adapt continuously. To watch the signals. To ask the hard questions. To be willing to say, "what we believed last month needs revising."
        </p>
        <p className="text-lg leading-[1.8] text-gray-700 mb-5">
          That's what we're doing at Brand Blvd. Not because we have all the answers. But because we're paying attention. And in a world moving this fast, paying attention is half the battle.
        </p>
        <p className="text-lg leading-[1.8] text-gray-700">
          The other half is doing something about it.
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
