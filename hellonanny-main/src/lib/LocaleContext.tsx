"use client";

import { createContext, useContext, ReactNode } from "react";
import { Locale, locales, getTranslations } from "./i18n";

type LocaleContextType = {
  locale: Locale;
  t: ReturnType<typeof getTranslations>;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const t = getTranslations(locale);

  return (
    <LocaleContext.Provider value={{ locale, t }}>
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
