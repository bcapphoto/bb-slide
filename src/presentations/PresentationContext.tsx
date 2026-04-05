import { createContext, useContext } from "react";
import type { PresentationConfig } from "./presentation.types";

export const PresentationContext = createContext<PresentationConfig | null>(null);
export const usePresentationConfig = () => useContext(PresentationContext);
