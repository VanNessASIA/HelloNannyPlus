"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, locales } from "@/lib/LocaleContext";
import { localeNames } from "@/lib/i18n";
import { ChevronRight, Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navLinks = [
    { href: "/service", label: t.nav.about },
    { href: "/process", label: t.nav.process },
    { href: "/register", label: t.nav.workWithUs },
    { href: "/about", label: t.nav.aboutUs },
    { href: "/faq", label: t.nav.faq },
    { href: "/recruit", label: t.nav.recruit },
    { href: "/blog", label: t.nav.blog },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-brand-yellow z-50 shadow-sm">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="Hello Nanny"
            width={44}
            height={44}
            className="rounded-xl shadow-sm"
          />
          <div className="leading-tight">
            <span className="font-bold text-lg text-brand-black">Hello Nanny</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-black/80 hover:text-brand-black transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 text-sm text-brand-black/80 hover:text-brand-black px-3 py-2 rounded-lg hover:bg-brand-yellow-dark/20"
            >
              <Globe className="w-4 h-4" />
              {localeNames[locale]}
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-1 min-w-[140px] z-50">
                {locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLocale(l);
                      setLangMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                      locale === l
                        ? "font-bold text-brand-yellow-dark"
                        : "text-gray-700"
                    }`}
                  >
                    {localeNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white bg-brand-black rounded-full hover:bg-gray-800 transition-colors"
          >
            {t.nav.request}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-yellow border-t border-brand-yellow-dark/20 pb-4">
          <div className="section-container flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-brand-black font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 flex-wrap">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLocale(l);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    locale === l
                      ? "bg-brand-black text-white font-bold"
                      : "bg-white/50 text-brand-black"
                  }`}
                >
                  {localeNames[l]}
                </button>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-white bg-brand-black rounded-full mt-2"
            >
              {t.nav.request}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
