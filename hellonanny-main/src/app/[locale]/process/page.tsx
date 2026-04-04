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

const stepIcons = [Send, Video, CreditCard];

export default function ProcessPage() {
  const { t, locale } = useLocale();

  const stepsData = [
    t.processPage.steps.step1,
    t.processPage.steps.step2,
    t.processPage.steps.step3,
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
              {t.processPage.hero.title}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {t.processPage.hero.subtitle}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-24">
            {stepsData.map((step, i) => {
              const Icon = stepIcons[i];
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
                        {t.processPage.stepLabel} {i + 1}: {step.title}
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
                      {"tip" in step && (step as { tip?: string }).tip && (
                        <div className="mt-4 p-4 bg-brand-yellow/10 rounded-xl">
                          <p className="text-sm text-brand-yellow-dark font-medium">
                            {"\uD83D\uDCA1"} Tip: {(step as { tip?: string }).tip}
                          </p>
                        </div>
                      )}
                      {/* Payment logos on Step 3 */}
                      {i === 2 && (
                        <div className="mt-6">
                          <p className="text-sm text-gray-500 mb-3">Payment Methods</p>
                          <div className="flex items-center gap-3">
                            <Image src="/images/payment/promptpay.svg" alt="PromptPay / Thai QR Payment" width={80} height={36} className="h-9 w-auto" />
                            <Image src="/images/payment/visa.svg" alt="Visa" width={60} height={36} className="h-9 w-auto" />
                            <Image src="/images/payment/mastercard.svg" alt="Mastercard" width={60} height={36} className="h-9 w-auto" />
                          </div>
                          <p className="text-xs text-gray-400 mt-2">(Bank transfer, QR Code payment, Credit/Debit card upon request)</p>
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
                {t.processPage.pricing.title}
              </h2>
              <p className="text-gray-600 text-lg">
                {t.processPage.pricing.subtitle}
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="stagger">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {t.processPage.pricing.plans.map((plan, i) => {
                const isHighlight = i === 1;
                return (
                  <div
                    key={i}
                    className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      isHighlight
                        ? "border-brand-yellow scale-105"
                        : "border-gray-100"
                    }`}
                  >
                    {isHighlight && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-yellow text-brand-black text-sm font-bold rounded-full">
                        {t.processPage.pricing.mostPopular}
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
                      {"\u203B"} {plan.note}
                    </p>
                    <Link
                      href={`/${locale}/contact`}
                      className="block mt-6 text-center py-3 px-6 rounded-full font-bold text-sm transition-colors bg-brand-yellow text-brand-black hover:bg-brand-yellow-dark"
                    >
                      {t.processPage.pricing.sendRequest}
                    </Link>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-yellow">
        <div className="section-container text-center">
          <ScrollAnimation type="fade-in">
            <h2 className="text-3xl font-extrabold text-brand-black mb-4">
              {t.processPage.cta.title}
            </h2>
            <p className="text-brand-black/70 mb-6">
              {t.processPage.cta.subtitle}
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
