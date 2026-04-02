"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Locale, locales, getTranslations } from "./i18n";

type LocaleContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: ReturnType<typeof getTranslations>;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const t = getTranslations(locale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export { locales };
export type { Locale };
