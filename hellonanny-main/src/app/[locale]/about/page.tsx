"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

const valueIcons = [Heart, MessageCircle, Users, Globe, Target];

export default function AboutPage() {
  const { t, locale } = useLocale();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <Image
          src="/images/team-portrait.jpg"
          alt="Our team"
          fill
          className="object-cover transition-transform duration-[1.5s] hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 section-container text-center">
          <ScrollAnimation type="fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {t.aboutPage.hero.title}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {t.aboutPage.hero.subtitle}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-4xl">
          <ScrollAnimation type="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-brand-black mb-6">
                {t.aboutPage.whoWeAre.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.aboutPage.whoWeAre.description}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <ScrollAnimation type="fade-in-left">
              <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-brand-black" />
                </div>
                <h2 className="text-2xl font-bold text-brand-black mb-4">
                  {t.aboutPage.mission.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t.aboutPage.mission.description}
                </p>
              </div>
            </ScrollAnimation>
            {/* Vision */}
            <ScrollAnimation type="fade-in-right">
              <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="w-14 h-14 bg-brand-black rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-brand-black mb-4">
                  {t.aboutPage.vision.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t.aboutPage.vision.goalIntro}
                </p>
                <blockquote className="border-l-4 border-brand-yellow pl-4 italic text-brand-black font-semibold text-lg">
                  &ldquo;{t.aboutPage.vision.quote}&rdquo;
                </blockquote>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {t.aboutPage.vision.description}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <ScrollAnimation type="fade-in">
            <h2 className="text-3xl font-extrabold text-brand-black text-center mb-4">
              {t.aboutPage.values.title}
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {t.aboutPage.values.subtitle}
            </p>
          </ScrollAnimation>
          <ScrollAnimation type="stagger">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.aboutPage.values.items.map((value, i) => {
                const Icon = valueIcons[i];
                return (
                  <div
                    key={i}
                    className={`bg-brand-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                      i === 4 ? "sm:col-span-2 lg:col-span-2" : ""
                    }`}
                  >
                    <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-brand-yellow-dark" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-black mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-brand-gray-50">
        <div className="section-container max-w-3xl">
          <ScrollAnimation type="fade-in">
            <h2 className="text-3xl font-extrabold text-brand-black text-center mb-10">
              {t.aboutPage.companyInfo.title}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation type="scale-in">
            <div className="bg-white rounded-3xl p-10 shadow-md">
              <dl className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {t.aboutPage.companyInfo.companyNameLabel}
                  </dt>
                  <dd className="text-brand-black col-span-2">
                    {t.aboutPage.companyInfo.companyNameValue}
                  </dd>
                </div>
                <hr className="border-gray-100" />
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {t.aboutPage.companyInfo.serviceNameLabel}
                  </dt>
                  <dd className="text-brand-black col-span-2">
                    {t.aboutPage.companyInfo.serviceNameValue}
                  </dd>
                </div>
                <hr className="border-gray-100" />
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {t.aboutPage.companyInfo.addressLabel}
                  </dt>
                  <dd className="text-gray-700 col-span-2">
                    {t.aboutPage.companyInfo.addressValue}
                  </dd>
                </div>
                <hr className="border-gray-100" />
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {t.aboutPage.companyInfo.taxIdLabel}
                  </dt>
                  <dd className="text-gray-700 col-span-2">
                    {t.aboutPage.companyInfo.taxIdValue}
                  </dd>
                </div>
                <hr className="border-gray-100" />
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {t.aboutPage.companyInfo.businessHoursLabel}
                  </dt>
                  <dd className="text-gray-700 col-span-2">
                    {t.footer.hours}
                  </dd>
                </div>
                <hr className="border-gray-100" />
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {t.aboutPage.companyInfo.emailLabel}
                  </dt>
                  <dd className="text-gray-700 col-span-2">
                    {t.aboutPage.companyInfo.emailValue}
                  </dd>
                </div>
              </dl>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="section-container text-center">
          <ScrollAnimation type="fade-in">
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              {t.aboutPage.cta.title}
            </h2>
            <p className="text-gray-600 mb-8">
              {t.aboutPage.cta.subtitle}
            </p>
            <Link href={`/${locale}/contact`} className="btn-primary shimmer">
              {t.aboutPage.cta.button}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
