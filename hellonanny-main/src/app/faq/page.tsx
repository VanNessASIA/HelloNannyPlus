"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqCategories = [
  {
    category: "General",
    items: [
      {
        q: "Why Hello Nanny?",
        a: "There are many housekeeper services in Bangkok, but there are only a few that can ensure Japanese quality, overcome the language barrier, and smoothly start business partnerships. We are a company that has helped many people in the past. We at Hello Nanny are committed to providing reliable and trustworthy hospitality to our clients.",
      },
      {
        q: "What kind of people do you hire?",
        a: "At Hello Nanny, all job seekers are directly interviewed online. In addition, we select only experienced and highly motivated people through our own community route. We also keep copies of passports and IDs of all job seekers.",
      },
      {
        q: "Can I interview candidates?",
        a: "We can interview you in the following ways. You can also change nannies depending on the plan you have chosen after hiring.\n\n• Option 1: Online interview with support from our team (400 baht service fee).\n• Option 2: Online interview without our assistance (free).\n• Option 3: Direct interview with the babysitter only (deposit required).",
      },
    ],
  },
  {
    category: "Salary & Costs",
    items: [
      {
        q: "What is the approximate salary?",
        a: "Salary depends largely on the job seeker's experience and previous employment status. Those who commute will be paid more than those who live on-site (as they will have to pay for their own food and transportation costs).",
      },
      {
        q: "What about overtime work?",
        a: "Normally in Thailand it is 100 baht/hour, but it is recommended that the person be tipped according to his/her salary.",
      },
      {
        q: "About criminal check?",
        a: "If you need the criminal check for the candidates, we can arrange it for 1,000 baht per person.",
      },
    ],
  },
  {
    category: "Service Agreement",
    items: [
      {
        q: "What if the match doesn't work out?",
        a: "Hello Nanny offers a change of nanny service after hiring, depending on the plan you have chosen. If you wish to make any changes, please feel free to contact us. We also recommend that you prepare a written contract if you are concerned. By confirming details before hiring, we can greatly reduce problems. Especially common are minor problems caused by miscommunication. A written contract can eliminate these problems.",
      },
      {
        q: "Do I need a contract?",
        a: "We have samples available, so please feel free to use them if you need them. If you have any items you would like to add other than those shown in the sample, please add them.",
      },
      {
        q: "What about public holidays in Thailand?",
        a: "Most nannies or maids basically follow the Thai calendar for holidays. However, please discuss details with the person you hire.",
      },
    ],
  },
  {
    category: "Safety & Security",
    items: [
      {
        q: "What about theft?",
        a: "When hiring, the most common concern families have is about theft. When hiring a nanny, be sure to record a copy of her ID or passport, contact information, and home address and keep them at home. Also, please keep valuables, brand name items, and money in a locked cupboard or safe. Even if you do not initially have bad intentions, there is no guarantee that you will not be tempted for a moment. To prevent this, it is important to observe such habits as not lending or borrowing things, not handing over keys, and not leaving money or goods where they can be seen. Please note that we are not involved in and cannot be held responsible for any problems between families and maids or babysitters.",
      },
    ],
  },
  {
    category: "Tips for Success",
    items: [
      {
        q: "How can we get nannies to work longer?",
        a: "We believe it is very important for the employer to take action to build a smooth relationship with Nanny and keep her working for a long time. The following three points are important:\n\n1. Pay a reasonable salary. Consider the cost of meals if they live in, and transportation if they commute. If the salary is too low, it will be easier for them to find another job.\n\n2. Don't set overly strict rules, but do the minimum amount of monitoring necessary. Nannies dislike strict rules and monitoring. Provide guidance gradually over a long period of time and create a comfortable working environment.\n\n3. Be sure to praise them. Praise will motivate them. It is important to find good points and praise them rather than always pointing out the bad points.",
      },
    ],
  },
];

export default function FAQPage() {
  const { t } = useLocale();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "General-0": true });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-brand-black/70 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our service.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="section-container max-w-3xl">
          <div className="space-y-10">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-yellow rounded-full" />
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.items.map((item, i) => {
                    const key = `${cat.category}-${i}`;
                    const isOpen = openItems[key];
                    return (
                      <div
                        key={i}
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
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
