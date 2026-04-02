"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function FAQPage() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
            {t.faqPage.title}
          </h1>
          <p className="text-brand-black/70 text-lg max-w-2xl mx-auto">
            {t.faqPage.subtitle}
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="section-container max-w-3xl">
          <div className="space-y-4">
            {t.faqPage.items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-brand-black pr-4">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gray-50">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-brand-black mb-4">
            {t.cta.title}
          </h2>
          <p className="text-gray-600 mb-8">{t.cta.subtitle}</p>
          <Link href="/contact" className="btn-primary">
            {t.hero.cta}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
