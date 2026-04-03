"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ChevronDown, ChevronRight } from "lucide-react";

type FAQItem = { q: string; a: string };
type FAQCategory = { category: string; key: string; items: FAQItem[] };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getFaqCategories(t: { faqPage: Record<string, any> }): FAQCategory[] {
  const fp = t.faqPage;
  return [
    {
      category: fp.categories.general,
      key: "general",
      items: [
        { q: fp.general.q1, a: fp.general.a1 },
        { q: fp.general.q2, a: fp.general.a2 },
        { q: fp.general.q3, a: fp.general.a3 },
      ],
    },
    {
      category: fp.categories.salaryCosts,
      key: "salaryCosts",
      items: [
        { q: fp.salaryCosts.q1, a: fp.salaryCosts.a1 },
        { q: fp.salaryCosts.q2, a: fp.salaryCosts.a2 },
        { q: fp.salaryCosts.q3, a: fp.salaryCosts.a3 },
      ],
    },
    {
      category: fp.categories.serviceAgreement,
      key: "serviceAgreement",
      items: [
        { q: fp.serviceAgreement.q1, a: fp.serviceAgreement.a1 },
        { q: fp.serviceAgreement.q2, a: fp.serviceAgreement.a2 },
        { q: fp.serviceAgreement.q3, a: fp.serviceAgreement.a3 },
      ],
    },
    {
      category: fp.categories.safetySecurity,
      key: "safetySecurity",
      items: [
        { q: fp.safetySecurity.q1, a: fp.safetySecurity.a1 },
      ],
    },
    {
      category: fp.categories.tipsForSuccess,
      key: "tipsForSuccess",
      items: [
        { q: fp.tipsForSuccess.q1, a: fp.tipsForSuccess.a1 },
      ],
    },
  ];
}

export default function FAQPage() {
  const { t, locale } = useLocale();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "general-0": true });

  const faqCategories = getFaqCategories(t);

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <ScrollAnimation type="fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
              {t.faqPage.title}
            </h1>
            <p className="text-brand-black/70 text-lg max-w-2xl mx-auto">
              {t.faqPage.subtitle}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="section-container max-w-3xl">
          <div className="space-y-10">
            {faqCategories.map((cat, catIdx) => (
              <ScrollAnimation key={cat.key} type="fade-in" delay={catIdx * 100}>
                <div>
                  <h2 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full" />
                    {cat.category}
                  </h2>
                  <div className="space-y-3">
                    {cat.items.map((item, i) => {
                      const key = `${cat.key}-${i}`;
                      const isOpen = openItems[key];
                      return (
                        <div
                          key={i}
                          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                        >
                          <button
                            onClick={() => toggleItem(key)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-semibold text-brand-black pr-4">
                              {item.q}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen ? "max-h-[600px]" : "max-h-0"
                            }`}
                          >
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed whitespace-pre-line">
                              {item.a}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gray-50">
        <div className="section-container text-center">
          <ScrollAnimation type="fade-in">
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              {t.cta.title}
            </h2>
            <p className="text-gray-600 mb-8">{t.cta.subtitle}</p>
            <Link href={`/${locale}/contact`} className="btn-primary shimmer">
              {t.hero.cta}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
