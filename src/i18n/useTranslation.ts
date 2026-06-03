import { useState, useEffect, useCallback } from "react";
import { translations, type Language } from "./translations";

function getStoredLang(): Language {
  if (typeof globalThis.window === "undefined") return "es";
  const stored = localStorage.getItem("lang") as Language | null;
  if (stored === "es" || stored === "en") return stored;
  const browser = navigator.language.split("-")[0];
  return browser === "en" ? "en" : "es";
}

export function useTranslation() {
  const [lang, setLang] = useState<Language>(getStoredLang);

  useEffect(() => {
    const onChange = () => setLang(getStoredLang());
    window.addEventListener("languagechange", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("languagechange", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const setLanguage = useCallback((newLang: Language) => {
    localStorage.setItem("lang", newLang);
    window.dispatchEvent(new Event("languagechange"));
  }, []);

  const t = translations[lang];
  return { t, lang, setLanguage };
}

