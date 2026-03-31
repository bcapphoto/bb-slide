import { useState } from "react";
import { IconRocket, IconLightbulb, IconChart, IconTeam } from "@/components/SectionIcons";
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
    a.download = "Brand-Blvd-IC-Recruitment.pdf";
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
            Life is better on the Blvd.
          </h1>
          <p className="font-serif text-xl md:text-2xl italic text-gray-500 mb-6">
            Why bring your book to Brand Blvd.
          </p>
          <div className="w-16 h-1 bg-brand-green" />
        </header>

        {/* Intro */}
        <div className="mb-16">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Thanks for the conversation.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Here's the thing — your book is yours. You built it. But the system behind you? It's probably not keeping up.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            You're waiting on mockups. Chasing approvals. Spending hours on stuff that isn't selling.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-medium mb-6">
            You don't need more motivation. You need better infrastructure.
          </p>
          <div className="border-l-4 border-brand-green pl-5 my-8">
            <p className="text-gray-800 text-xl font-medium leading-relaxed">
              You run your book like a business. We make your business better.
            </p>
          </div>
        </div>

        {/* SECTION 1: Unfair Advantage */}
        <SectionDivider icon={IconRocket} />

        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
          Walk into every meeting with an unfair advantage.
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Most reps show up with a PDF and a pitch. Here's what you show up with at Brand Blvd:
        </p>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Custom mockups</strong> — AI-generated, branded to your client, built in seconds</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Pitch decks</strong> — Fully designed, client-ready, done before you finish your coffee</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Demo stores</strong> — Live, clickable company stores your prospect can browse on the spot</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Creative concepts</strong> — Ideas turned into polished presentations, not napkin sketches</span>
          </li>
        </ul>

        <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-2">Before</p>
              <p className="text-gray-600 leading-relaxed">You spend half your week building proposals and chasing mockups.</p>
            </div>
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-brand-green font-bold mb-2">After</p>
              <p className="text-gray-900 leading-relaxed font-medium">You spend it closing. The tools do the rest.</p>
            </div>
          </div>
        </div>

        {/* SECTION 2: Sell Ideas */}
        <SectionDivider icon={IconLightbulb} />

        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
          Stop selling products. Start selling ideas.
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          This is the biggest shift.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          At most distributors, the conversation starts and ends with a product catalog. At Brand Blvd, it starts with an idea that makes your client's brand unforgettable.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          In-house creative team. Full production and execution under one roof. You pitch bigger because you can actually deliver bigger.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-2">Before</p>
              <p className="text-gray-600 leading-relaxed">You're a product rep in a commodity conversation.</p>
            </div>
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-brand-green font-bold mb-2">After</p>
              <p className="text-gray-900 leading-relaxed font-medium">You're a creative partner your clients can't replace.</p>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-brand-green pl-5 my-8">
          <p className="text-gray-800 text-xl font-medium leading-relaxed">
            Plus seamless Canada + U.S. execution — your clients get North American reach with zero friction.
          </p>
        </div>

        {/* SECTION 3: Build Bigger */}
        <SectionDivider icon={IconChart} />

        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
          Build your book bigger.
        </h2>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Best-in-class CRM and sales tools</strong> to manage your pipeline like a real business</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Preferred supplier pricing</strong> that protects your margin on every quote</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Sales collateral and enablement</strong> that makes every touchpoint sharper</span>
          </li>
        </ul>

        {/* SECTION 4: Full Team */}
        <SectionDivider icon={IconTeam} />

        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
          You sell. We handle everything else.
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Not a phone tree. A full team.
        </p>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Design team</strong> — In-house creatives for the big pitches that win new business</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Customer service</strong> — Production, order management, fulfillment — handled</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Sales development</strong> — Help sourcing contacts and prospects when you want to grow</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Self-promo budget</strong> — Show up with branded materials that make an impression</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Sample budget</strong> — Put product in your prospects' hands from day one</span>
          </li>
        </ul>

        {/* Closing */}
        <div className="border-t border-gray-200 mt-20 pt-12 text-center">
          <p className="font-serif text-2xl md:text-3xl italic text-gray-600 mb-4">
            Let's keep the conversation going.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            You already know us. If any of this sounds like the upgrade you've been looking for, let's talk.
          </p>
          <div className="inline-block border border-gray-200 rounded-lg px-8 py-6 text-left">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-brand-green font-bold mb-2">Jill Pascuzzi</p>
            <p className="text-gray-600 text-sm">VP of Sales, USA — Brand Blvd</p>
            <p className="text-gray-600 text-sm">jpascuzzi@brandblvd.com</p>
            <p className="text-gray-600 text-sm">1-844-639-7924 ext. 248</p>
            <p className="text-gray-600 text-sm">brandblvd.com</p>
          </div>
        </div>

      </div>
    </article>
  );
};

export default ArticleSection;
