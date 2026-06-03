"use client";

import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from "react";
import type { Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLang(): Language {
  if (typeof globalThis.window === "undefined") return "es";
  const stored = localStorage.getItem("lang") as Language | null;
  if (stored && (stored === "es" || stored === "en")) return stored;
  const browserLang = navigator.language.split("-")[0];
  return browserLang === "en" ? "en" : "es";
}

export function LanguageProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [lang, setLangState] = useState<Language>(getInitialLang);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "es" ? "en" : "es");
  }, [lang, setLang]);

  const value = useMemo(() => ({ lang, setLang, toggleLang }), [lang, setLang, toggleLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
