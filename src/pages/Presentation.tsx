import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PresentationShell from "@/components/presentation/PresentationShell";
import { loadPresentation, defaultSlug } from "@/presentations";
import { ThemeProvider } from "@/themes/ThemeProvider";
import { PresentationContext } from "@/presentations/PresentationContext";
import type { PresentationConfig } from "@/presentations/presentation.types";

export default function PresentationPage() {
  const { slug, section } = useParams();
  const effectiveSlug = slug || defaultSlug;
  const [config, setConfig] = useState<PresentationConfig | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadPresentation(effectiveSlug).then((c) => {
      if (c) setConfig(c);
      else setError(true);
    });
  }, [effectiveSlug]);

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Presentation not found</h1>
          <p className="text-muted-foreground">No presentation with slug "{effectiveSlug}"</p>
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  // Presenter notes: standalone page, not part of slide deck navigation
  if (section === "presenter-notes" && config.presenterNotesComponent) {
    const PresenterNotes = config.presenterNotesComponent;
    return (
      <ThemeProvider themeId={config.themeId}>
        <PresentationContext.Provider value={config}>
          <PresenterNotes />
        </PresentationContext.Provider>
      </ThemeProvider>
    );
  }

  return <PresentationShell config={config} />;
}
