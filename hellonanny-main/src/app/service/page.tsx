"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";
import { ChevronRight, ShieldCheck, Headphones, Sparkles } from "lucide-react";

export default function ServicePage() {
  const { t } = useLocale();

  const features = [
    {
      icon: ShieldCheck,
      title: "Reliability",
      desc: "When searching for a nanny, many challenges arise — language barriers, uncertainty about salary, and selecting the right person. We conduct preliminary hearings with clients and communicate your requests in the nanny's native language to prevent mismatches and facilitate smooth communication.",
      image: "/images/baby-crawling.jpg",
    },
    {
      icon: Headphones,
      title: "Accessibility",
      desc: "All interviews can be completed online. Once you select your preferred nannies, we promptly confirm their latest availability. We send you a questionnaire form in advance to ensure smooth communication, and our team is available to assist during interviews if needed.",
      image: "/images/headset-support.jpg",
    },
    {
      icon: Sparkles,
      title: "Comfortable & Elegant Days",
      desc: "The presence of a nanny makes your daily life as elegant as living in a hotel. Especially for those raising children, it will be a great support allowing you to enjoy quality time with your family while household tasks are taken care of by experienced professionals.",
      image: "/images/cleaner-making-bed.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/nanny-playing-baby.jpg"
          alt="Nanny playing with baby"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            What is Hello Nanny?
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We provide a matching service for babysitters, housekeepers, nannies, and maids in Thailand.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-brand-gray-50">
        <div className="section-container max-w-3xl text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Do you have these concerns?
          </p>
          <div className="mt-6 grid gap-3 text-left max-w-lg mx-auto">
            {[
              "How much does a nanny get paid?",
              "Where should I hire someone from?",
              "Is it okay if I don't speak the language?",
              "I'm raising my children and don't have time for interviews.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-brand-yellow-dark font-bold">✔️</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-600 leading-relaxed">
            We started this service to solve concerns that everyone encounters when hiring household help in Bangkok. Using our network of experienced helpers, we want to give families peace of mind — answering your questions anytime and easily.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-20">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className={`grid md:grid-cols-2 gap-12 items-center`}
                >
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className="relative rounded-3xl overflow-hidden h-[350px] shadow-xl">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Nanny List Airtable Embed */}
      <section className="py-20 bg-brand-gray-50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
              Available Nannies & Maids
            </h2>
            <p className="text-gray-600 text-lg">
              Browse our registered helpers. Filter by experience, language, and availability.
            </p>
          </div>
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
