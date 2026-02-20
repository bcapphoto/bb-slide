import React from "react";

interface PromptSlideProps {
  question: string;
}

const PromptSlide: React.FC<PromptSlideProps> = ({ question }) => (
  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
    {/* Large background question mark */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <span className="font-serif text-[40rem] md:text-[50rem] leading-none text-primary/[0.06] -translate-y-8">
        ?
      </span>
    </div>

    {/* Subtle corner accents */}
    <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
    <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-primary/30" />

    <div className="max-w-4xl px-10 md:px-20 text-center">
      <p className="font-display text-xs uppercase tracking-[0.5em] text-primary font-bold mb-8">
        Discuss
      </p>
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl italic leading-snug text-foreground">
        {question}
      </h2>
      <div className="mt-10 mx-auto w-16 h-[2px] bg-primary/40" />
    </div>
  </div>
);

export default PromptSlide;
