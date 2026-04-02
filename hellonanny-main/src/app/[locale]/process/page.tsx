"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  ChevronRight,
  Send,
  Video,
  CreditCard,
  Check,
} from "lucide-react";

const stepPhotos = [
  "/images/mom-with-phone.jpg",
  "/images/couple-with-laptop.jpg",
  "/images/nanny-playing-baby.jpg",
];

export default function ProcessPage() {
  const { t, locale } = useLocale();

  const steps = [
    {
      icon: Send,
      title: "Submit Your Request",
      desc: "Send us your requirements via LINE or our contact form. Tell us what kind of help you need — nanny, maid, or both.",
      details: [
        "Using our unique AI system, we carefully select candidates from our registered staff based on your needs.",
        "You'll receive a list of potential matches within 1 business day.",
        "If no immediate matches are available, we will advertise your request to find new candidates.",
      ],
    },
    {
      icon: Video,
      title: "Online Interview",
      desc: "Choose how you'd like to conduct your interview:",
      details: [
        "Option 1: Online interview with support from our team (400 baht service fee).",
        "Option 2: Online interview without our assistance (free).",
        "Option 3: Direct interview with the babysitter only (deposit required).",
      ],
      tip: "This is the time to ask questions, address concerns about salary, and confirm whether the candidate meets your expectations.",
    },
    {
      icon: CreditCard,
      title: "Pay After Matching",
      desc: "Pay the referral fee after confirming the match.",
      details: [
        "Payment Methods: Bank transfer, QR Code, Credit/Debit card (upon request).",
        "Payment must be made in full before service starts.",
        "After Matching Support: We'll support both you and your staff to ensure a smooth start.",
        "Replacement Policy: If an issue arises, you can replace staff depending on your selected plan.",
      ],
    },
  ];

  const plans = [
    {
      name: "Part-time",
      price: "6,000",
      badge: "Affordable plan",
      features: [
        "Pre-Request Hearing",
        "Communication service",
        "Up to 2 replacements",
      ],
      note: "Weekly working hours less than 30 hours",
      highlight: false,
    },
    {
      name: "Full-time",
      price: "7,800",
      badge: "Regular plan",
      features: [
        "Pre-Request Hearing",
        "Communication service",
        "Up to 3 replacements",
      ],
      note: "Weekly working hours 30 hours or more",
      highlight: true,
    },
    {
      name: "Short-time",
      price: "3,000",
      badge: "Trial plan",
      features: [
        "Pre-Request Hearing",
        "Communication service",
        "1 replacement",
      ],
      note: "5 to 15 days trial period",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <Image
          src="/images/office-operators.jpg"
          alt="Our support team"
          fill
          className="object-cover transition-transform duration-[1.5s] hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 section-container text-center">
          <ScrollAnimation type="fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Our Simple 3-Step Process
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Getting started is easy. Find your perfect helper today.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-24">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollAnimation key={i} type={i % 2 === 0 ? "fade-in-left" : "fade-in-right"}>
                  <div
                    className="grid md:grid-cols-2 gap-12 items-center"
                  >
                    <div className={i % 2 === 1 ? "md:order-2" : ""}>
                      <div className="relative rounded-3xl overflow-hidden h-[350px] shadow-xl group">
                        <Image
                          src={stepPhotos[i]}
                          alt={step.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-6 left-6 w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-2xl font-extrabold text-brand-black">
                            {i + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={i % 2 === 1 ? "md:order-1" : ""}>
                      <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-brand-yellow-dark" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-brand-black mb-4">
                        Step {i + 1}: {step.title}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {step.desc}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-600">
                            <Check className="w-5 h-5 text-brand-yellow-dark flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      {step.tip && (
                        <div className="mt-4 p-4 bg-brand-yellow/10 rounded-xl">
                          <p className="text-sm text-brand-yellow-dark font-medium">
                            💡 Tip: {step.tip}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-brand-gray-50">
        <div className="section-container">
          <ScrollAnimation type="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
                System Usage Fee
              </h2>
              <p className="text-gray-600 text-lg">
                One-time fee only. No hidden charges. Nanny salaries are set separately.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="stagger">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    plan.highlight
                      ? "border-brand-yellow scale-105"
                      : "border-gray-100"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-yellow text-brand-black text-sm font-bold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-brand-black mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-500">{plan.badge}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-extrabold text-brand-black">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-1">THB</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-brand-yellow-dark" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-400 text-center">
                    ※ {plan.note}
                  </p>
                  <Link
                    href={`/${locale}/contact`}
                    className="block mt-6 text-center py-3 px-6 rounded-full font-bold text-sm transition-colors bg-brand-yellow text-brand-black hover:bg-brand-yellow-dark"
                  >
                    Send a Request
                  </Link>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-yellow">
        <div className="section-container text-center">
          <ScrollAnimation type="fade-in">
            <h2 className="text-3xl font-extrabold text-brand-black mb-4">
              Find your helper today!
            </h2>
            <p className="text-brand-black/70 mb-6">
              Send us your request now and get matched within 24 hours.
            </p>
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
