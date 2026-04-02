"use client";

import { LocaleProvider } from "@/lib/LocaleContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider>
      <Navbar />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
