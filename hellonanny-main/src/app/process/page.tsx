"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";
import { ChevronRight, Send, Video, CreditCard } from "lucide-react";

const stepIcons = [Send, Video, CreditCard];
const stepPhotos = [
  "/images/mom-with-phone.jpg",
  "/images/couple-with-laptop.jpg",
  "/images/nanny-playing-baby.jpg",
];

export default function ProcessPage() {
  const { t } = useLocale();
  const steps = [t.steps.step1, t.steps.step2, t.steps.step3];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/office-operators.jpg"
          alt="Our support team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t.processPage.title}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t.processPage.subtitle}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-24">
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <div
                  key={i}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className="relative rounded-3xl overflow-hidden h-[350px] shadow-xl">
                      <Image
                        src={stepPhotos[i]}
                        alt={step.title}
                        fill
                        className="object-cover"
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
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-yellow">
        <div className="section-container text-center">
          <h2 className="text-3xl font-extrabold text-brand-black mb-6">
            {t.cta.title}
          </h2>
          <Link href="/contact" className="btn-primary">
            {t.hero.cta}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
