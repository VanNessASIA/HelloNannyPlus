"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";
import { ChevronRight } from "lucide-react";

const sectionPhotos = [
  "/images/baby-crawling.jpg",
  "/images/headset-support.jpg",
  "/images/cleaner-making-bed.jpg",
];

export default function ServicePage() {
  const { t } = useLocale();

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
            {t.servicePage.title}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t.servicePage.subtitle}
          </p>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-20">
            {t.servicePage.sections.map((section, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative rounded-3xl overflow-hidden h-[350px] shadow-xl">
                    <Image
                      src={sectionPhotos[i]}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-yellow-dark text-sm font-semibold rounded-full mb-4">
                    0{i + 1}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-brand-black mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {section.desc}
                  </p>
                </div>
              </div>
            ))}
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
