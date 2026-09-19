"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "hi" | "en";
type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("hi");

  useEffect(() => {
    const saved = window.localStorage.getItem("schoolLanguage") as Language | null;
    if (saved === "hi" || saved === "en") setLanguageState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("schoolLanguage", language);
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage: setLanguageState
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
