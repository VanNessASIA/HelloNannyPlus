"use client";

import Image from "next/image";
import { useLocale } from "@/lib/LocaleContext";
import { Target, Eye, Shield, Zap, DollarSign, Globe } from "lucide-react";

const valueIcons = [Shield, Zap, DollarSign, Globe];

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/team-portrait.jpg"
          alt="Our team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t.aboutPage.title}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t.aboutPage.subtitle}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-brand-yellow/10 rounded-3xl p-10">
              <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-brand-black" />
              </div>
              <h2 className="text-2xl font-bold text-brand-black mb-4">Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                {t.aboutPage.mission}
              </p>
            </div>
            <div className="bg-brand-gray-50 rounded-3xl p-10">
              <div className="w-14 h-14 bg-brand-black rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brand-black mb-4">Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                {t.aboutPage.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-gray-50">
        <div className="section-container">
          <h2 className="text-3xl font-extrabold text-brand-black text-center mb-12">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.aboutPage.values.map((val, i) => {
              const Icon = valueIcons[i];
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-yellow-dark" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-black mb-2">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-brand-black text-center mb-10">
            Company
          </h2>
          <div className="bg-brand-gray-50 rounded-3xl p-10">
            <dl className="space-y-6">
              <div>
                <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Company Name
                </dt>
                <dd className="text-lg font-bold text-brand-black mt-1">
                  {t.aboutPage.companyName}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Address
                </dt>
                <dd className="text-gray-700 mt-1">{t.footer.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Business Hours
                </dt>
                <dd className="text-gray-700 mt-1">{t.footer.hours}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
