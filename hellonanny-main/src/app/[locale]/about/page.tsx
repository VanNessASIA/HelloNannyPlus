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
              About Us
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Connecting families with trusted nannies in Thailand
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
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Hello Nanny is a nanny and maid matching service operated by
                VANNESS ASIA CO., LTD. We serve as a bridge connecting skilled
                nannies with foreign families living in Thailand, helping them find
                the perfect match for their household needs.
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
                  Mission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To be the bridge that connects skilled nannies with foreign
                  families in Thailand. We believe every family deserves reliable,
                  trustworthy childcare and household support, regardless of
                  language or cultural barriers.
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
                  Vision
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our goal is for every family to say:
                </p>
                <blockquote className="border-l-4 border-brand-yellow pl-4 italic text-brand-black font-semibold text-lg">
                  &ldquo;I&apos;m so glad I found this nanny!&rdquo;
                </blockquote>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We strive to create lasting, happy relationships between families
                  and their helpers through careful matching and ongoing support.
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
              Our Values
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              What makes Hello Nanny different from other services
            </p>
          </ScrollAnimation>
          <ScrollAnimation type="stagger">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-brand-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-brand-yellow-dark" />
                </div>
                <h3 className="text-lg font-bold text-brand-black mb-2">
                  Family-First Approach
                </h3>
                <p className="text-gray-600 text-sm">
                  We listen carefully to each family&apos;s unique rules,
                  preferences, and lifestyle to find the right match. Every family
                  is different, and we respect that.
                </p>
              </div>
              <div className="bg-brand-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-7 h-7 text-brand-yellow-dark" />
                </div>
                <h3 className="text-lg font-bold text-brand-black mb-2">
                  Breaking Language Barriers
                </h3>
                <p className="text-gray-600 text-sm">
                  We communicate with each nanny in their preferred language to
                  ensure smooth understanding. Our multilingual team bridges the
                  gap between families and helpers.
                </p>
              </div>
              <div className="bg-brand-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-brand-yellow-dark" />
                </div>
                <h3 className="text-lg font-bold text-brand-black mb-2">
                  Large & Vetted Network
                </h3>
                <p className="text-gray-600 text-sm">
                  With over 2,000 registered nannies and maids, we have a vast
                  pool of experienced candidates. All are directly interviewed and
                  verified by our team.
                </p>
              </div>
              <div className="bg-brand-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-4">
                  <Globe className="w-7 h-7 text-brand-yellow-dark" />
                </div>
                <h3 className="text-lg font-bold text-brand-black mb-2">
                  Multicultural Understanding
                </h3>
                <p className="text-gray-600 text-sm">
                  We understand the unique needs of expat families in Thailand. Our
                  service supports Japanese, English, Chinese, and Thai-speaking
                  households.
                </p>
              </div>
              <div className="bg-brand-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-2">
                <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-brand-yellow-dark" />
                </div>
                <h3 className="text-lg font-bold text-brand-black mb-2">
                  Speed & Reliability
                </h3>
                <p className="text-gray-600 text-sm">
                  Bangkok&apos;s fastest matching service. We aim to introduce
                  candidates within 24 hours of receiving your request. Quick,
                  efficient, and dependable.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-brand-gray-50">
        <div className="section-container max-w-3xl">
          <ScrollAnimation type="fade-in">
            <h2 className="text-3xl font-extrabold text-brand-black text-center mb-10">
              Company Information
            </h2>
          </ScrollAnimation>
          <ScrollAnimation type="scale-in">
            <div className="bg-white rounded-3xl p-10 shadow-md">
              <dl className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Company Name
                  </dt>
                  <dd className="text-brand-black col-span-2">
                    VANNESS ASIA CO., LTD
                  </dd>
                </div>
                <hr className="border-gray-100" />
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Service Name
                  </dt>
                  <dd className="text-brand-black col-span-2">Hello Nanny</dd>
                </div>
                <hr className="border-gray-100" />
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Address
                  </dt>
                  <dd className="text-gray-700 col-span-2">
                    64/1 Room No. 210, Soi Pasi 1, Ekamai Road, Khlong Tan Nuea,
                    Watthana, Bangkok 10110
                  </dd>
                </div>
                <hr className="border-gray-100" />
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    TAX ID
                  </dt>
                  <dd className="text-gray-700 col-span-2">0105567229649</dd>
                </div>
                <hr className="border-gray-100" />
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Business Hours
                  </dt>
                  <dd className="text-gray-700 col-span-2">
                    {t.footer.hours}
                  </dd>
                </div>
                <hr className="border-gray-100" />
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Email
                  </dt>
                  <dd className="text-gray-700 col-span-2">
                    info@hellonanny-san.com
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
              Ready to find your perfect helper?
            </h2>
            <p className="text-gray-600 mb-8">
              Tell us about your needs and we&apos;ll match you with the right
              nanny.
            </p>
            <Link href={`/${locale}/contact`} className="btn-primary shimmer">
              Send a Request
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
