"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ChevronRight, ShieldCheck, Headphones, Sparkles } from "lucide-react";

export default function ServicePage() {
  const { t, locale } = useLocale();

  const features = [
    {
      icon: ShieldCheck,
      title: t.servicePage.features.reliability.title,
      desc: t.servicePage.features.reliability.desc,
      image: "/images/baby-crawling.jpg",
    },
    {
      icon: Headphones,
      title: t.servicePage.features.accessibility.title,
      desc: t.servicePage.features.accessibility.desc,
      image: "/images/headset-support.jpg",
    },
    {
      icon: Sparkles,
      title: t.servicePage.features.comfortable.title,
      desc: t.servicePage.features.comfortable.desc,
      image: "/images/cleaner-making-bed.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <Image
          src="/images/nanny-playing-baby.jpg"
          alt="Nanny playing with baby"
          fill
          className="object-cover transition-transform duration-[1.5s] hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 section-container text-center">
          <ScrollAnimation type="fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {t.servicePage.hero.title}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {t.servicePage.hero.subtitle}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-brand-gray-50">
        <div className="section-container max-w-3xl text-center">
          <ScrollAnimation type="fade-in">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.servicePage.concerns.title}
            </p>
          </ScrollAnimation>
          <ScrollAnimation type="stagger">
            <div className="mt-6 grid gap-3 text-left max-w-lg mx-auto">
              {t.servicePage.concerns.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-brand-yellow-dark font-bold">{"\u2714\uFE0F"}</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </ScrollAnimation>
          <ScrollAnimation type="fade-in" delay={200}>
            <p className="mt-8 text-gray-600 leading-relaxed">
              {t.servicePage.concerns.solution}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-20">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <ScrollAnimation key={i} type={i % 2 === 0 ? "fade-in-left" : "fade-in-right"}>
                  <div
                    className={`grid md:grid-cols-2 gap-12 items-center`}
                  >
                    <div className={i % 2 === 1 ? "md:order-2" : ""}>
                      <div className="relative rounded-3xl overflow-hidden h-[350px] shadow-xl group">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className={i % 2 === 1 ? "md:order-1" : ""}>
                      <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-brand-yellow-dark" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-brand-black mb-4">
                        {feature.title}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nanny List Airtable Embed */}
      <section className="py-20 bg-brand-gray-50">
        <div className="section-container">
          <ScrollAnimation type="fade-in">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
                {t.servicePage.nannies.title}
              </h2>
              <p className="text-gray-600 text-lg">
                {t.servicePage.nannies.subtitle}
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation type="scale-in">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/app55k7J6zqdyZVaw/shr8b8IDle44hG25C?viewControls=on"
                frameBorder="0"
                width="100%"
                height="533"
                style={{ background: "transparent", border: "1px solid #ccc" }}
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-yellow">
        <div className="section-container text-center">
          <ScrollAnimation type="fade-in">
            <h2 className="text-3xl font-extrabold text-brand-black mb-6">
              {t.cta.title}
            </h2>
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
