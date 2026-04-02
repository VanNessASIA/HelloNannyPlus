"use client";

import Image from "next/image";
import { useLocale } from "@/lib/LocaleContext";
import ScrollAnimation from "@/components/ScrollAnimation";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";

export default function RegisterPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <Image
          src="/images/resume-review.jpg"
          alt="Join as a nanny"
          fill
          className="object-cover transition-transform duration-[1.5s] hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 section-container text-center">
          <ScrollAnimation type="fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {t.registerPage.title}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {t.registerPage.subtitle}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="section-container max-w-3xl">
          <ScrollAnimation type="scale-in">
            <div className="bg-brand-yellow/10 rounded-3xl p-10 mb-12">
              <h2 className="text-2xl font-bold text-brand-black mb-6">
                Benefits
              </h2>
              <ul className="space-y-4">
                {t.registerPage.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-yellow-dark flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="fade-in">
            <h2 className="text-2xl font-bold text-brand-black mb-6 text-center">
              {t.registerPage.contactTitle}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://lin.ee/MGiqloS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line gap-3 text-lg px-10 py-4 hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                LINE
              </a>
              <a
                href="https://wa.me/66649133653"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp gap-3 text-lg px-10 py-4 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                WhatsApp
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
