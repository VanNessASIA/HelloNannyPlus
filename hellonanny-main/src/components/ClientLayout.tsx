"use client";

import { LocaleProvider } from "@/lib/LocaleContext";
import { Locale } from "@/lib/i18n-config";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <LocaleProvider locale={locale}>
      <Navbar />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
