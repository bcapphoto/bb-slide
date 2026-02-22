import bbLogoHorizontal from "@/assets/bb-logo-horizontal-white.svg";

const ArticleSection = () => (
  <article className="bg-white text-gray-900 min-h-screen">
    <div className="max-w-[680px] mx-auto px-6 md:px-8 py-20 md:py-32">

      {/* Header */}
      <header className="mb-16 md:mb-24">
        <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-6 mb-10 invert opacity-40" />
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-gray-900 mb-6">
          The future of our industry
        </h1>
        <div className="w-16 h-1 bg-brand-green" />
      </header>

      {/* ─── SECTION 1 ─── */}
      <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-8 mt-20">
        AI is compressing time across everything
      </h2>

      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-gray-900 mb-4 mt-12">
        The speed of adoption
      </h3>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        AI tools have moved from novelty to household names. We're no longer in the "early adopter" phase - we're firmly in mainstream adoption. ChatGPT is a household name. AI is daily news. Every week brings a new breakthrough. Even at the Super Bowl - traditionally an indicator of mass-market interest - 23% of ads were AI-focused.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        37% of consumers now go to AI first instead of Google to search. And nearly 50% of Google searches now include AI summaries. This is not a niche experiment. It is infrastructure. It's a paradigm shift.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        AI has developed a reputation for being "magic" and "all-knowing." You put something in and get an answer out. Instantly. That shift in perception is what matters; AI is training people to expect immediate results. Not faster. Immediate.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        AI is reshaping patience. It's redefining what "responsive" means. It's altering how we look at services, how we value advice, and how we judge competence.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium mb-10">
        The speed of AI is becoming the speed benchmark for everything else.
      </p>

      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-gray-900 mb-4 mt-12">
        Time to 100M users
      </h3>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        ChatGPT reached 100 million users 27× faster than Facebook.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-10">
        AI isn't just fast - it's resetting what adoption looks like. Entire categories now compress from years to months. That changes consumer psychology. If something spreads that fast, it feels inevitable.
      </p>

      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-gray-900 mb-4 mt-12">
        Investment signals
      </h3>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        Capital follows conviction. And capital is flowing aggressively into AI.
      </p>
      <ul className="space-y-4 mb-10">
        <li className="text-lg md:text-xl leading-relaxed text-gray-700 pl-6 border-l-4 border-brand-green">
          <strong>OpenAI</strong> raised $100B round at a $850B valuation. It's the largest single funding round in technology history.
        </li>
        <li className="text-lg md:text-xl leading-relaxed text-gray-700 pl-6 border-l-4 border-brand-green">
          <strong>NVIDIA</strong> is at a $3T+ Market Cap. Their stock grew 200% in a single year on AI chip demand. Today, they are one of the most valuable companies in the world.
        </li>
        <li className="text-lg md:text-xl leading-relaxed text-gray-700 pl-6 border-l-4 border-brand-green">
          <strong>Lovable</strong> is only 1 year old and raised $330M, marking it as one of the largest early-stage rounds for an AI-native platform.
        </li>
        <li className="text-lg md:text-xl leading-relaxed text-gray-700 pl-6 border-l-4 border-brand-green">
          <strong>Anthropic</strong> raised $30B at $380B valuation. Their revenue has grown 10x annually, and they're only 3 years old.
        </li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium mb-10">
        Markets don't place trillion-dollar bets on trends. They place them on transformations.
      </p>

      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-gray-900 mb-4 mt-12">
        Expectation shifts
      </h3>

      <h4 className="font-display text-base md:text-lg font-bold text-gray-900 mb-3 mt-8">Patience is collapsing</h4>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        We used to tolerate friction because information had gatekeepers.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        Buying a car meant driving between dealerships, sitting across from salespeople, negotiating, and gathering brochures. Then websites reduced that friction. Now AI eliminates most of it.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
        Today, you can ask ChatGPT to compare 2 vehicles and receive:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg md:text-xl text-gray-700 mb-6">
        <li>Feature breakdowns</li>
        <li>Video reviews</li>
        <li>Consumer complaints</li>
        <li>Forum insights</li>
        <li>Known defects</li>
        <li>Ownership cost comparisons</li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-10">
        … all in minutes.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-10">
        When that becomes normal in one domain, it becomes expected in all domains.
      </p>

      <h4 className="font-display text-base md:text-lg font-bold text-gray-900 mb-3 mt-8">"Good enough" is immediate</h4>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        We are increasingly accepting that "done" beats "perfect."
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        As a photographer, I used to manually remove backgrounds in Photoshop using the lasso tool. It took 20-30 minutes. It was billable time. Now? I upload it to Canva, click a button and 5 seconds later it's done.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        Is it pixel-perfect? Maybe not. But it's good enough. And it's instant.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium mb-10">
        The market is shifting toward velocity over precision - especially in early-stage decisions.
      </p>

      <h4 className="font-display text-base md:text-lg font-bold text-gray-900 mb-3 mt-8">Exploration cost is nearing 0</h4>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
        There was a time when exploring options had a real cost. If you wanted:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg md:text-xl text-gray-700 mb-6">
        <li>3 campaign directions</li>
        <li>2 pricing models</li>
        <li>5 taglines</li>
        <li>Multiple design explorations</li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        You scheduled meetings. You waited for creative. You paid agencies. You moved slowly. Exploration required money, time, and coordination. Now? You type a prompt. You get ideation in seconds.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium mb-4">
        The cost of exploring ideas is approaching zero.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
        When exploration becomes free, behaviour changes:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg md:text-xl text-gray-700 mb-10">
        <li>People test more.</li>
        <li>Compare more.</li>
        <li>Iterate more.</li>
        <li>Expect more options faster.</li>
      </ul>

      <h4 className="font-display text-base md:text-lg font-bold text-gray-900 mb-3 mt-8">Self-sufficiency is increasing</h4>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        AI reduces early-stage dependence on specialists.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        Before calling a doctor, many people ask ChatGPT about symptoms. Before calling an agency, they generate campaign ideas themselves. Before contacting a consultant, they test their thinking alone.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-10">
        The dependency curve is flattening. And when dependency decreases, tolerance for delay decreases too.
      </p>

      <h4 className="font-display text-base md:text-lg font-bold text-gray-900 mb-3 mt-8">The takeaway</h4>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
        AI is not just improving productivity; it is rewiring expectations. If we operate with:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg md:text-xl text-gray-700 mb-6">
        <li>48-hour quote turnarounds</li>
        <li>3-day proof cycles</li>
        <li>Reorders buried in email chains</li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        We feel analog in a digital world.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-10">
        Buyers will expect real-time pricing, instant proofs, and seamless ordering. Delays won't feel slow. They'll feel broken. That's both the threat and the opportunity.
      </p>

      {/* ─── Divider ─── */}
      <div className="flex items-center gap-4 my-16 md:my-24">
        <div className="flex-1 h-px bg-gray-200" />
        <div className="w-2 h-2 bg-brand-green rounded-full" />
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* ─── SECTION 2 ─── */}
      <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-8">
        AI is taking over the "doing"
      </h2>

      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-gray-900 mb-4 mt-12">
        The human role shifts
      </h3>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        AI can perform rule-based, repetitive, information-heavy tasks faster, cheaper, and at scale. Increasingly, it can also handle complex cognitive tasks at levels comparable to - and sometimes exceeding - trained professionals.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
        AI is already outperforming humans in measurable domains:
      </p>
      <ul className="list-disc pl-8 space-y-2 text-lg md:text-xl text-gray-700 mb-6">
        <li>In software engineering benchmarks, AI models fix real-world coding issues with higher success rates than many individual developers.</li>
        <li>In 2025, AI systems from OpenAI and Google reportedly achieved performance equivalent to a gold medal on International Mathematical Olympiad-level problems.</li>
        <li>GPT-4 (which is 3 versions old) scored in the 90th percentile on the Bar Exam.</li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        The point is not that AI is smarter. The point is that execution has become dramatically cheaper and faster. The barrier to doing something has collapsed. And when execution becomes easy, it also becomes easy to execute the wrong thing - very quickly.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
        AI can generate 10 campaign ideas in seconds. But it does not know:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg md:text-xl text-gray-700 mb-6">
        <li>Which aligns with your brand.</li>
        <li>Which fits your culture.</li>
        <li>Which is politically viable internally.</li>
        <li>Which will actually drive behaviour.</li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        That is where human value shifts.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium mb-6">
        AI compresses execution. Humans must provide direction.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
        Our role becomes less about doing the doing, and more about:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg md:text-xl text-gray-700 mb-6">
        <li>Deciding what should be done.</li>
        <li>Framing the problem correctly.</li>
        <li>Defining success.</li>
        <li>Applying judgment.</li>
        <li>Taking responsibility for outcomes.</li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium mb-10">
        The human role shifts up the stack.
      </p>

      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-gray-900 mb-4 mt-12">
        Industry Leaders
      </h3>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        Leaders aren't debating whether AI will change execution. They're debating how fast.
      </p>
      <div className="space-y-6 mb-10">
        <blockquote className="border-l-4 border-brand-green pl-6 text-lg md:text-xl italic text-gray-600 leading-relaxed">
          "The future of work is not about AI replacing people. It's about people who use AI replacing people who don't."
          <footer className="not-italic text-base text-gray-500 mt-2">— <span className="text-brand-green font-bold">Satya Nadella</span>, CEO, Microsoft</footer>
        </blockquote>
        <blockquote className="border-l-4 border-brand-green pl-6 text-lg md:text-xl italic text-gray-600 leading-relaxed">
          "The real value of AI is helping salespeople spend more time with customers and less time doing administrative work."
          <footer className="not-italic text-base text-gray-500 mt-2">— <span className="text-brand-green font-bold">Marc Benioff</span>, CEO, Salesforce</footer>
        </blockquote>
        <blockquote className="border-l-4 border-brand-green pl-6 text-lg md:text-xl italic text-gray-600 leading-relaxed">
          "We'll be there in 3-6 months, where AI is writing 90% of the code — and in 12 months, AI writes all of it."
          <footer className="not-italic text-base text-gray-500 mt-2">— <span className="text-brand-green font-bold">Dario Amodei</span>, CEO, Anthropic</footer>
        </blockquote>
      </div>

      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-gray-900 mb-4 mt-12">
        Order-taking dies
      </h3>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
        Software and systems will improve rapidly. They will do things like:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg md:text-xl text-gray-700 mb-6">
        <li>Draft proposals instantly.</li>
        <li>Compare pricing automatically.</li>
        <li>Source products at scale.</li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        More buyers will use tools to do portions of our current work themselves. Automation will take a lot of the "busy work" off our hands. If we remain order-takers, we compete against something we can never keep up with.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        Industries like travel and retail eliminated transactional middlemen when search became automated. That same pressure will apply here.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium mb-4">
        As execution gets automated, we must move closer to impact.
      </p>
      <ul className="list-disc pl-8 space-y-2 text-lg md:text-xl text-gray-700 mb-6">
        <li>If AI drafts proposals, we ensure they solve the right problem.</li>
        <li>If AI generates comparisons, we ensure alignment with the strategy.</li>
        <li>If AI sources merch instantly, we design the moment around it.</li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium mb-10">
        We are not losing value. We are being forced up the value chain.
      </p>

      {/* ─── Divider ─── */}
      <div className="flex items-center gap-4 my-16 md:my-24">
        <div className="flex-1 h-px bg-gray-200" />
        <div className="w-2 h-2 bg-brand-green rounded-full" />
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* ─── SECTION 3 ─── */}
      <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-8">
        AI will restructure the employer-employee relationship
      </h2>

      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-gray-900 mb-4 mt-12">
        The workforce will shift
      </h3>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        The workforce will shift. Not incrementally, but structurally.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
        For over a century, work has been the primary anchor of our identity. We always ask, "Where do you work?" or "What do you do?" Employment has shaped:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg md:text-xl text-gray-700 mb-6">
        <li>Income</li>
        <li>Community</li>
        <li>Social status</li>
        <li>Daily rhythm</li>
        <li>Personal identity</li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        But AI will disrupt the mechanics of work itself. Not just jobs, not just the work, but the very structure and meaning of work, and our relationship with it.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
        AI increases output per employee. We know that. This means:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg md:text-xl text-gray-700 mb-6">
        <li>Fewer people can produce more.</li>
        <li>Repetitive tasks disappear.</li>
        <li>Middle layers compress.</li>
        <li>Knowledge work becomes augmented.</li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
        This isn't alarmist to say that we'll see mass unemployment overnight, but it does mean that headcount starts to become less correlated with output. When that happens, the structure of the work shifts. Companies will:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-lg md:text-xl text-gray-700 mb-6">
        <li>Hire more selectively.</li>
        <li>Automate more aggressively.</li>
        <li>Consolidate roles.</li>
        <li>Expect higher leverage per person.</li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        Work will become increasingly less about time spent and more about value created. And when work becomes more fluid, more augmented, and more efficient, people will feel less secure, less permanent and have less of their identity tied to their employer. The employee/employer relationship changes.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium mb-10">
        When employment becomes more transactional, people seek belonging elsewhere.
      </p>

      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-gray-900 mb-4 mt-12">
        The numbers
      </h3>
      <ul className="list-disc pl-8 space-y-2 text-lg md:text-xl text-gray-700 mb-6">
        <li>80% of people believe AI will impact their daily work.</li>
        <li>50% of people worry their job could be automated.</li>
        <li>76K+ jobs eliminated in 2025.</li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-10">
        Even if these numbers fluctuate year to year, the signal is consistent: work is being restructured.
      </p>

      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-gray-900 mb-4 mt-12">
        The pivot
      </h3>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        If employee attachment weakens, merch budgets tied strictly to payroll size are vulnerable. But the need for belonging does not disappear; it just relocates.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-10">
        Work becomes a function, and identity becomes something broader. Community, values, tribe - those anchors strengthen when institutional stability weakens.
      </p>

      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-gray-900 mb-4 mt-12">
        The opportunity
      </h3>
      <ul className="space-y-4 mb-10">
        <li className="text-lg md:text-xl leading-relaxed text-gray-700 pl-6 border-l-4 border-brand-green">
          <strong>Internal</strong> - Merch must reflect culture and values, not just fill closets.
        </li>
        <li className="text-lg md:text-xl leading-relaxed text-gray-700 pl-6 border-l-4 border-brand-green">
          <strong>External</strong> - Build tribes of customers, advocates, insiders, and culture ambassadors.
        </li>
        <li className="text-lg md:text-xl leading-relaxed text-gray-700 pl-6 border-l-4 border-brand-green">
          <strong>Identity</strong> - Move from "gifting employees" to "manufacturing belonging."
        </li>
      </ul>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
        If we tie our growth to payroll size, we're tied to a shrinking lever. If we tie our growth to identity and belonging, we tie our growth to something expanding. That's the shift.
      </p>

      {/* Footer */}
      <div className="flex items-center gap-4 mt-16 md:mt-24 mb-8">
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

export default ArticleSection;
