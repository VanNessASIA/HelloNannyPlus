"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";
import {
  ChevronRight,
  Star,
  CheckCircle2,
  Users,
  Clock,
  Shield,
  Heart,
  Send,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

const stepPhotos = [
  "/images/mom-with-phone.jpg",
  "/images/couple-with-laptop.jpg",
  "/images/nanny-playing-baby.jpg",
];

export default function Home() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <Image
          src="/images/mom-baby-park.jpg"
          alt="Mother and child in park"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 section-container">
          <div className="max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <p className="text-brand-yellow font-semibold text-lg mb-2 animate-fade-in">
              {t.hero.welcome}
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2 animate-fade-in-up">
              {t.hero.title}
            </h1>
            <p className="text-3xl md:text-4xl font-light text-white mb-6 animate-fade-in-up">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-white/90 mb-8 max-w-lg animate-fade-in-up">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up">
              <Link href="/contact" className="btn-primary">
                {t.hero.cta}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/service" className="inline-flex items-center px-6 py-3 text-sm font-bold rounded-full border-2 border-white bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors">
                {t.nav.about}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="bg-brand-yellow py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
            {t.stats.title}
          </h2>
          <p className="text-brand-black/70 text-lg max-w-2xl mx-auto mb-10">
            {t.stats.subtitle}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: "2,000+", label: "Nannies" },
              { icon: Heart, value: "500+", label: "Families" },
              { icon: Shield, value: "100%", label: "Screened" },
              { icon: Clock, value: "24h", label: "Same-Day Match" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <stat.icon className="w-8 h-8 text-brand-yellow-dark mx-auto mb-3" />
                <p className="text-2xl md:text-3xl font-extrabold text-brand-black">
                  {stat.value}
                </p>
                <p className="text-sm text-brand-black/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT IS HELLO NANNY ===== */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow-dark text-sm font-semibold rounded-full mb-4">
              {t.whatIs.sectionTag}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
              {t.whatIs.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t.whatIs.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-xl">
              <Image
                src="/images/mom-reading-kids.jpg"
                alt="Mother reading with kids"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-black mb-6">
                {t.whatIs.concerns.title}
              </h3>
              <ul className="space-y-4">
                {t.whatIs.concerns.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-yellow-dark flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-brand-yellow/10 rounded-2xl border border-brand-yellow/30">
                <p className="text-brand-black font-medium">
                  {t.whatIs.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIFESTYLE PHOTO BANNER ===== */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/happy-family.jpg"
          alt="Happy family portrait"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-brand-yellow font-semibold text-lg mb-2">
              Life with a Nanny
            </p>
            <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto px-4">
              {t.closing.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ===== 3 STEPS ===== */}
      <section className="py-20 bg-brand-gray-50">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow-dark text-sm font-semibold rounded-full mb-4">
              {t.steps.sectionTag}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black">
              {t.steps.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[t.steps.step1, t.steps.step2, t.steps.step3].map(
              (step, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={stepPhotos[i]}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center font-bold text-brand-black shadow-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow-dark text-sm font-semibold rounded-full mb-4">
              {t.pricing.sectionTag}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-8 transition-shadow ${
                  plan.popular
                    ? "bg-brand-black text-white shadow-2xl scale-105"
                    : "bg-white border-2 border-gray-100 shadow-lg hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-yellow text-brand-black text-xs font-bold rounded-full">
                    POPULAR
                  </span>
                )}
                <h3
                  className={`text-xl font-bold mb-4 ${
                    plan.popular ? "text-white" : "text-brand-black"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className={`text-4xl font-extrabold ${
                      plan.popular ? "text-brand-yellow" : "text-brand-black"
                    }`}
                  >
                    {plan.currency}
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-white/60" : "text-gray-400"
                    }`}
                  >
                    / {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular
                            ? "text-brand-yellow"
                            : "text-brand-yellow-dark"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-white/80" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-colors ${
                    plan.popular
                      ? "bg-brand-yellow text-brand-black hover:bg-brand-yellow-dark"
                      : "bg-brand-black text-white hover:bg-gray-800"
                  }`}
                >
                  {t.hero.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AIRTABLE EMBED ===== */}
      <section className="py-20 bg-brand-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow-dark text-sm font-semibold rounded-full mb-4">
              {t.airtable.sectionTag}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
              {t.airtable.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.airtable.subtitle}
            </p>
          </div>
          <div className="bg-white rounded-3xl p-12 border-2 border-dashed border-gray-300 text-center">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">{t.airtable.placeholder}</p>
            <p className="text-gray-300 text-sm mt-2">
              Airtable embed will be placed here
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT METHODS ===== */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow-dark text-sm font-semibold rounded-full mb-4">
              {t.contact.sectionTag}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
              {t.contact.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://lin.ee/MGiqloS"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line gap-3 text-lg px-10 py-4"
            >
              <MessageCircle className="w-6 h-6" />
              {t.contact.lineLabel}
            </a>
            <span className="text-gray-400 font-medium">
              {t.contact.orText}
            </span>
            <a
              href="https://wa.me/66649133653"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp gap-3 text-lg px-10 py-4"
            >
              <Phone className="w-6 h-6" />
              {t.contact.whatsappLabel}
            </a>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow-dark text-sm font-semibold rounded-full mb-4">
              {t.reviews.sectionTag}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black">
              {t.reviews.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.reviews.items.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${
                        j < review.rating
                          ? "text-brand-yellow fill-brand-yellow"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Image
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.name}&backgroundColor=FFC107`}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm text-brand-black">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-500">{review.family}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24">
        <Image
          src="/images/family-on-bed.jpg"
          alt="Happy family together"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/70" />
        <div className="relative z-10 section-container text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/contact" className="btn-primary">
              <Send className="w-5 h-5 mr-2" />
              {t.cta.button}
            </Link>
            <a
              href="https://lin.ee/MGiqloS"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.cta.contactButton}
            </a>
          </div>
          <p className="text-white/50 text-sm">{t.cta.note}</p>
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="py-16 bg-brand-yellow">
        <div className="section-container text-center">
          <p className="text-2xl md:text-3xl font-bold text-brand-black">
            {t.closing.tagline}
          </p>
        </div>
      </section>
    </div>
  );
}
