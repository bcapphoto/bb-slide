import { useState } from "react";
import { IconRocket, IconLightbulb, IconChart, IconTeam } from "@/components/SectionIcons";
import bbLogoHorizontal from "@/assets/bb-logo-horizontal-white.svg";
import { Download, Play, Linkedin, Phone, MessageSquare, Mail, Calendar } from "lucide-react";
import { MMMArticleGallery, TeamCreativeArticleGallery } from "./TeamCreativeUI";

const mmmGalleryAll: string[] = [
  "lifestyle_1771623752575.jpg",
  "lifestyle_1771864508176.jpg",
  "lifestyle_1771949969169.jpg",
  "lifestyle_1771970952692.jpg",
  "lifestyle_1772116231422.jpg",
  "lifestyle_1772289610212.jpg",
  "lifestyle_1772553153837.jpg",
  "lifestyle_1772553162379.jpg",
  "lifestyle_1773685480355.jpg",
  "lifestyle_1773929954800.jpg",
  "lifestyle_1774026059126.jpg",
  "lifestyle_1774275098208.jpg",
  "lifestyle_1774446919145.jpg",
  "lifestyle_1774458491605.jpg",
  "lifestyle_1775489367391.jpg",
  "lifestyle_1775845343465.jpg",
  "lifestyle_1776268893751.jpg",
  "lifestyle_1776337898138.jpg",
].map((f) => `/images/mmm-gallery/${f}`);

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
            We'd love to have you join us at Brand Blvd!
          </p>
          <div className="w-16 h-1 bg-brand-green" />
        </header>

        {/* Jill's welcome video */}
        <div className="mb-16">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4 aspect-video flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950" />
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-10">
              <div className="w-20 h-20 rounded-full bg-brand-green/90 flex items-center justify-center mb-6 shadow-lg">
                <Play size={32} className="text-gray-900 ml-1" fill="currentColor" />
              </div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-brand-green font-bold mb-2">A Personal Welcome</p>
              <p className="font-serif text-2xl md:text-3xl text-white mb-2">Jill Pascuzzi</p>
              <p className="text-gray-400 text-sm md:text-base">VP of Sales, USA - Brand Blvd</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm italic leading-relaxed text-center">
            Video walkthrough - available in the live presentation.
          </p>
        </div>

        {/* Intro */}
        <div className="mb-16">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            You've already built a great book of business. You've got the clients and the relationships. You know promo. You know what it takes to win.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            But the system behind you? It's probably not keeping up.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            You're waiting on mockups. Chasing approvals. Spending hours on stuff that isn't selling.
          </p>
          <p className="text-gray-800 text-xl font-medium leading-relaxed mb-6">
            You need a better system. You need a better team.
          </p>
          <div className="border-l-4 border-brand-green pl-5 my-8">
            <p className="text-gray-800 text-xl font-medium leading-relaxed">
              Brand Blvd can be that team. We'd love for you to join us!
            </p>
          </div>
        </div>

        {/* SECTION 1: Unfair Advantage */}
        <SectionDivider icon={IconRocket} />

        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
          Walk into every meeting with an unfair advantage.
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Most reps show up with a PDF and a pitch. Not our people, though. When you're on the Brand Blvd team, here's what you show up with:
        </p>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Custom mockups</strong> - AI-generated, branded to your client, built in seconds</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Pitch decks</strong> - Fully designed, client-ready, done before your morning coffee</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Demo stores</strong> - Live, clickable company stores your prospect can try on the spot</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Creative concepts</strong> - Ideas turned into polished presentations, not napkin sketches</span>
          </li>
        </ul>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          All of this is powered by <strong>Magic Merch Maker</strong> - our in-house, custom-built AI-first sales enablement tool. It does company research automatically, generates product ideas tailored to your client's brand, creates AI mockups in seconds, assembles Creative Concept Decks, and even spins up a live demo store - all before the meeting starts!
        </p>

        <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-2">Before</p>
              <p className="text-gray-600 leading-relaxed">You spend half your week building mockups and chasing approvals.</p>
            </div>
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-brand-green font-bold mb-2">After</p>
              <p className="text-gray-900 leading-relaxed font-medium">You spend it closing. Magic Merch Maker does the rest.</p>
            </div>
          </div>
        </div>

        {/* SECTION 2: See the Magic in Action */}
        <SectionDivider icon={IconLightbulb} />

        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
          See the magic in action.
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Don't just take our word for it. Meet Bryan, our VP of Growth and Innovation. He has almost 15 years of SaaS experience building products, and he brings that level of innovation to Brand Blvd. Watch him show you what you can do with Magic Merch Maker.
        </p>

        {/* Video Callout */}
        <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-8 aspect-video flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-10">
            <div className="w-20 h-20 rounded-full bg-brand-green/90 flex items-center justify-center mb-6 shadow-lg">
              <Play size={32} className="text-gray-900 ml-1" fill="currentColor" />
            </div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-brand-green font-bold mb-2">Video Walkthrough</p>
            <p className="font-serif text-2xl md:text-3xl text-white mb-2">Bryan Caporicci</p>
            <p className="text-gray-400 text-sm md:text-base">VP of Growth and Innovation, Brand Blvd</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm italic leading-relaxed mb-8 text-center">
          Video walkthrough - available in the live presentation.
        </p>

        <p className="text-gray-800 text-xl font-medium leading-relaxed mb-10">
          And this is just the beginning...
        </p>

        {/* MMM AI-generated mockups gallery */}
        <div className="mb-10">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-3">Real AI Mockups</p>
          <p className="text-gray-600 text-base leading-relaxed mb-5">
            A few of the mockups our team has built with Magic Merch Maker - every one of these was AI-generated in seconds, branded to the client, ready to present.
          </p>
          <MMMArticleGallery images={mmmGalleryAll} />
        </div>

        {/* SECTION 3: Sell Ideas */}
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
          In-house creative team. Full production and execution under one roof. Magic Merch Maker handles the research and ideation; our creative team brings it to life. You pitch bigger because you can actually deliver bigger.
        </p>

        {/* Team Creative work gallery + PDF lightbox */}
        <div className="mb-10">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-3">Real Creative Work</p>
          <p className="text-gray-600 text-base leading-relaxed mb-5">
            A peek at some of the decks our in-house creative team has put together - the kind of work that turns a meeting into a pitch, and a pitch into a win.
          </p>
          <TeamCreativeArticleGallery />
        </div>

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
            Plus seamless Canada + US logistics and execution - your clients get North American reach with zero friction.
          </p>
        </div>

        {/* SECTION 4: Build Bigger */}
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
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Finance and POs are handled.</strong> We manage the back-end, so you can stay in front of clients.</span>
          </li>
        </ul>

        {/* SECTION 5: Full Team */}
        <SectionDivider icon={IconTeam} />

        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
          A full team behind you. Not a phone tree.
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          You sell. We'll handle everything else.
        </p>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Design team</strong> - In-house creatives for the big pitches that win new business</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Customer service</strong> - Production, order management, invoicing and payments and fulfillment - handled</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Sales development</strong> - Help sourcing contacts and prospects when you want to grow</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Self-promo budget</strong> - Show up with branded materials that make an impression</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
            <span className="text-gray-700 text-lg leading-relaxed"><strong>Sample budget</strong> - Put product in your prospects' hands from day one</span>
          </li>
        </ul>

        {/* Closing CTA */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-8">
            Like what you see? Let's not overthink it.
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            If you're even a little curious, we should talk.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Worst case? You get a fresh perspective on how this industry could work.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Best case? Things start to move a whole lot faster.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed font-medium mb-8">
            I'd genuinely love to meet you. Pick your move:
          </p>

          {/* Jill's Contact Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 mb-10">
            <div className="mb-6 pb-6 border-b border-gray-200">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-brand-green font-bold mb-2">Jill Pascuzzi</p>
              <p className="text-gray-600 text-sm">Brand Blvd</p>
            </div>

            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/jillpascuzzi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-sm bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                    <Linkedin size={18} className="text-brand-green" />
                  </span>
                  <span className="flex-1 pt-1">
                    <span className="block text-gray-900 font-medium group-hover:text-brand-green transition-colors">DM me on LinkedIn</span>
                    <span className="block text-gray-500 text-sm">linkedin.com/in/jillpascuzzi</span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+19059886910"
                  className="flex items-start gap-4 group"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-sm bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                    <Phone size={18} className="text-brand-green" />
                  </span>
                  <span className="flex-1 pt-1">
                    <span className="block text-gray-900 font-medium group-hover:text-brand-green transition-colors">Call me</span>
                    <span className="block text-gray-500 text-sm">905-988-6910 (old school still works)</span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="sms:+19059886910"
                  className="flex items-start gap-4 group"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-sm bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                    <MessageSquare size={18} className="text-brand-green" />
                  </span>
                  <span className="flex-1 pt-1">
                    <span className="block text-gray-900 font-medium group-hover:text-brand-green transition-colors">Text me</span>
                    <span className="block text-gray-500 text-sm">905-988-6910 (new school is even better)</span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:jpascuzzi@brandblvd.com"
                  className="flex items-start gap-4 group"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-sm bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                    <Mail size={18} className="text-brand-green" />
                  </span>
                  <span className="flex-1 pt-1">
                    <span className="block text-gray-900 font-medium group-hover:text-brand-green transition-colors">Shoot me an email</span>
                    <span className="block text-gray-500 text-sm">jpascuzzi@brandblvd.com</span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="https://meetings.hubspot.com/jill-pascuzzi/lets-talk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-sm bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                    <Calendar size={18} className="text-brand-green" />
                  </span>
                  <span className="flex-1 pt-1">
                    <span className="block text-gray-900 font-medium group-hover:text-brand-green transition-colors">Book a meeting</span>
                    <span className="block text-gray-500 text-sm">meetings.hubspot.com/jill-pascuzzi/lets-talk</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Or don't. But you'll probably keep doing things the same way.
          </p>

          <div className="border-l-4 border-brand-green pl-5 my-8">
            <p className="text-gray-800 text-xl font-medium leading-relaxed">
              And if you've read this far... I'm guessing you're ready for something different.
            </p>
          </div>
        </div>

      </div>
    </article>
  );
};

export default ArticleSection;
