"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Star,
  MessageCircle,
  Users,
  Clock,
  Shield,
  Heart,
  ChevronDown,
  Baby,
  Sparkles,
  AlertCircle,
} from "lucide-react";

const PLANS = [
  {
    id: "short",
    tag: "For Vacations",
    name: "Short-term Plan",
    nameEn: "Short-term (Vacation Plan)",
    price: "4,000",
    unit: "THB",
    period: "5–14 days",
    popular: false,
    color: "border-gray-200",
    features: [
      "1 candidate introduction",
      "Pre-request consultation",
      "Communication support",
      "Perfect for short stays & holidays",
    ],
  },
  {
    id: "parttime",
    tag: "Flexible Option",
    name: "Part-time Plan",
    nameEn: "Part-time",
    price: "6,000",
    unit: "THB",
    period: "Under 30 hrs / week",
    popular: false,
    color: "border-gray-200",
    features: [
      "Up to 2 candidate introductions",
      "Pre-request consultation",
      "Communication support",
      "Great for a few days per week",
    ],
  },
  {
    id: "fulltime",
    tag: "Most Popular",
    name: "Full-time Plan",
    nameEn: "Full-time",
    price: "7,800",
    unit: "THB",
    period: "30+ hrs / week",
    popular: true,
    color: "border-brand-yellow",
    features: [
      "Up to 3 candidates (within 2 months)",
      "Pre-request consultation",
      "Communication support",
      "Ideal for daily household support",
      "Follow-up support included",
    ],
  },
];

const REASONS = [
  {
    icon: Users,
    title: "2,000+ Registered Staff",
    desc: "A large network of vetted nannies and maids ready to match your family's specific needs.",
  },
  {
    icon: Shield,
    title: "100% Background Checked",
    desc: "Every candidate is personally interviewed and background-verified by our team before introduction.",
  },
  {
    icon: Clock,
    title: "Same-Day Matching",
    desc: "We aim to introduce candidates within 24 hours of your request. No long waiting times.",
  },
  {
    icon: MessageCircle,
    title: "4-Language Support",
    desc: "We speak English, Japanese, Chinese, and Thai — no language barriers between you and your helper.",
  },
  {
    icon: Heart,
    title: "Pay After Hiring",
    desc: "Zero upfront cost. You only pay the matching fee once you've found the right person.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Free Consultation & Request",
    desc: "Tell us your needs via LINE or our form — service type, schedule, budget, and any preferences.",
  },
  {
    num: "02",
    title: "Meet Your Candidates",
    desc: "We hand-pick matched candidates for you. Video interviews from home — no need to go anywhere.",
  },
  {
    num: "03",
    title: "Hire & Pay After",
    desc: "Found the right fit? Then you pay. No charges until you're happy with your match.",
  },
];

const REVIEWS = [
  {
    text: "Thanks to Hello Nanny, we found an amazing nanny within a week. The whole process was incredibly smooth and the staff support was wonderful.",
    name: "Emily R.",
    family: "Singaporean Family",
    avatar: "/images/avatars/emily.svg",
    rating: 5,
  },
  {
    text: "I was worried about finding a Japanese-speaking nanny in Bangkok, but Hello Nanny made it happen! She's wonderful and we couldn't be happier.",
    name: "Yuki T.",
    family: "Japanese Family",
    avatar: "/images/avatars/yuki.svg",
    rating: 5,
  },
  {
    text: "The video interview feature was brilliant. Being able to meet candidates before deciding gave us total peace of mind. Very professional service.",
    name: "Pierre D.",
    family: "French Family",
    avatar: "/images/avatars/pierre.svg",
    rating: 5,
  },
  {
    text: "Affordable and reliable. We found our housekeeper through Hello Nanny and she's been with us for over a year now. Highly recommended.",
    name: "Wei L.",
    family: "Chinese Family",
    avatar: "/images/avatars/wei.svg",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "Is the initial consultation really free?",
    a: "Yes, completely free. You only pay the matching fee (based on your chosen plan) once you decide to hire someone.",
  },
  {
    q: "How quickly can you introduce candidates?",
    a: "We typically introduce candidates within 24 hours of receiving your request. Same-day introductions are also possible.",
  },
  {
    q: "Do you offer support in English?",
    a: "Absolutely. Our team supports English, Japanese, Chinese, and Thai. We can also match you with helpers who speak your preferred language.",
  },
  {
    q: "What if the candidate isn't the right fit?",
    a: "Depending on your plan, we introduce 1–3 candidates. If none of them are suitable, we'll work with you to find better options.",
  },
  {
    q: "Do you only operate in Bangkok?",
    a: "We primarily serve Bangkok. If you're outside the central area, please contact us and we'll do our best to help.",
  },
];

export default function LP1() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* ===== STICKY HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center">
              <Baby className="w-4 h-4 text-[#1A1A1A]" />
            </div>
            <span className="font-extrabold text-[#1A1A1A] text-lg leading-tight">
              Hello Nanny
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="https://lin.ee/hellonanny"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-[#06C755] text-white text-sm font-semibold rounded-full hover:bg-[#05b34c] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on LINE
            </a>
            <Link
              href="/en/contact"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#FFC107] text-[#1A1A1A] text-sm font-bold rounded-full hover:bg-[#E5AC00] transition-colors"
            >
              Free Consultation
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="/images/mom-baby-park.jpg"
          alt="Family in Bangkok park"
          fill
          className="object-cover object-[30%_50%] md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#1A1A1A] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              Bangkok&apos;s #1 Nanny &amp; Maid Matching Service
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Find a Trusted
              <br />
              <span className="text-[#FFC107]">Nanny or Maid</span>
              <br />
              in Bangkok — Fast.
            </h1>

            <p className="text-white/90 text-lg md:text-xl mb-4 leading-relaxed">
              Supporting expat families across Bangkok.
              <br />
              All staff background-checked. Multilingual team.{" "}
              <strong className="text-white">Pay only after hiring.</strong>
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["2,000+ Registered Staff", "100% Background Checked", "No Upfront Payment"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/30"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC107]" />
                    {badge}
                  </span>
                )
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFC107] text-[#1A1A1A] text-base font-extrabold rounded-full hover:bg-[#E5AC00] transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Send a Free Request
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="https://lin.ee/hellonanny"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white text-base font-bold rounded-full hover:bg-[#05b34c] transition-all hover:-translate-y-0.5 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on LINE
              </a>
            </div>
            <p className="text-white/60 text-sm mt-3">
              No payment required until you hire
            </p>
          </div>
        </div>
      </section>

      {/* ===== PAIN POINTS ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-4">
              <AlertCircle className="w-4 h-4" />
              Sound familiar?
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A]">
              Finding reliable help in Bangkok shouldn&apos;t be this hard.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Don't know where to find a trustworthy nanny in Bangkok",
              "Worried about language barriers with Thai-speaking helpers",
              "The interview and hiring process feels overwhelming",
              "Not sure if the helper will get along well with your kids",
              "Need short-term support during holidays or a vacation",
              "Household chores are piling up and you're exhausted",
            ].map((pain) => (
              <div
                key={pain}
                className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-500 text-xs font-bold">✕</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{pain}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg font-bold text-[#1A1A1A]">
              <span className="text-[#E5AC00]">Hello Nanny</span> takes care of all of it.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="py-12 bg-[#FFC107]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { num: "2,000+", label: "Registered Staff", icon: Users },
              { num: "500+", label: "Families Served", icon: Heart },
              { num: "100%", label: "Background Checked", icon: Shield },
              { num: "24h", label: "Same-Day Match", icon: Clock },
            ].map(({ num, label, icon: Icon }) => (
              <div key={label} className="bg-white/30 backdrop-blur rounded-2xl p-4">
                <Icon className="w-6 h-6 text-[#1A1A1A] mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A]">{num}</p>
                <p className="text-sm font-medium text-[#1A1A1A]/70 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REASONS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4">
              Why Bangkok Families
              <br className="sm:hidden" />
              {" "}Choose Hello Nanny
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by 500+ families since 2020. Here&apos;s what makes us different.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-3xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#FFC107]/20 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#E5AC00]" />
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
              3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-[#FFC107]/40 z-0" />

            {STEPS.map(({ num, title, desc }, i) => (
              <div key={i} className="relative text-center">
                <div className="relative z-10 w-20 h-20 bg-[#FFC107] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-extrabold text-[#1A1A1A]">{num}</span>
                </div>
                <h3 className="font-extrabold text-[#1A1A1A] text-xl mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#FFC107] text-[#1A1A1A] font-extrabold text-lg rounded-full hover:bg-[#E5AC00] transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Get Started for Free
              <ChevronRight className="w-5 h-5" />
            </Link>
            <p className="text-gray-400 text-sm mt-3">No upfront payment · Pay only after hiring</p>
          </div>
        </div>
      </section>

      {/* ===== SERVICE TYPES ===== */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6">
                Nanny, Maid, or Both —<br />We&apos;ve Got You Covered
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Live-in Nanny",
                    desc: "Round-the-clock support. Ideal for families with young children.",
                  },
                  {
                    title: "Live-out Nanny",
                    desc: "Support during set hours. Flexible and adjustable to your schedule.",
                  },
                  {
                    title: "Maid / Housekeeper",
                    desc: "Cleaning, laundry, cooking, and all household tasks taken care of.",
                  },
                  {
                    title: "Short-term / Vacation Support",
                    desc: "Need cover during a trip or holiday? We offer short-term placements too.",
                  },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#1A1A1A]">{title}</p>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden h-52">
                <Image
                  src="/images/nanny-playing-baby.jpg"
                  alt="Nanny with baby"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52 mt-8">
                <Image
                  src="/images/cleaner-making-bed.jpg"
                  alt="Housekeeper making bed"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52 -mt-8">
                <Image
                  src="/images/baby-crawling.jpg"
                  alt="Baby with care"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52">
                <Image
                  src="/images/happy-family.jpg"
                  alt="Happy family"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 text-lg">
              One flat fee. No hidden costs. Pay only when you hire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl border-2 ${plan.color} p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular ? "ring-2 ring-[#FFC107]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#FFC107] text-[#1A1A1A] px-4 py-1.5 rounded-full text-sm font-extrabold whitespace-nowrap shadow">
                      ★ Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#FFC107]/15 text-[#E5AC00] text-xs font-semibold rounded-full mb-3">
                    {plan.tag}
                  </span>
                  <h3 className="font-extrabold text-[#1A1A1A] text-xl">{plan.name}</h3>
                  <p className="text-gray-500 text-sm">{plan.nameEn}</p>
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-extrabold text-[#1A1A1A]">฿{plan.price}</span>
                  <span className="text-gray-500 text-sm ml-1">one-time</span>
                </div>
                <p className="text-[#E5AC00] text-sm font-semibold mb-6">{plan.period}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC107] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/en/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all ${
                    plan.popular
                      ? "bg-[#FFC107] text-[#1A1A1A] hover:bg-[#E5AC00]"
                      : "bg-gray-100 text-[#1A1A1A] hover:bg-gray-200"
                  }`}
                >
                  Choose This Plan
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            * All plans include a pre-request consultation and communication support
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">
              Customer Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
              What Our Families Say
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {REVIEWS.map(({ text, name, family, avatar, rating }) => (
              <div
                key={name}
                className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image src={avatar} alt={name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A1A] text-sm">{name}</p>
                    <p className="text-gray-500 text-xs">{family}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-[#1A1A1A] pr-4">{q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107] to-transparent" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center mx-auto mb-6">
            <Baby className="w-8 h-8 text-[#1A1A1A]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Find Your
            <br />
            Perfect Helper?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Hundreds of Bangkok families trust Hello Nanny.
            <br />
            Start with a free consultation — no commitment, no payment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FFC107] text-[#1A1A1A] text-lg font-extrabold rounded-full hover:bg-[#E5AC00] transition-all hover:-translate-y-0.5 shadow-xl"
            >
              Send a Free Request
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="https://lin.ee/hellonanny"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#06C755] text-white text-lg font-bold rounded-full hover:bg-[#05b34c] transition-all hover:-translate-y-0.5 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on LINE
            </a>
          </div>
          <p className="text-white/40 text-sm mt-4">
            No upfront payment · Pay only after hiring
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 bg-gray-900 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 VANNESS ASIA CO., LTD. All rights reserved.
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
          <span className="mx-2 text-gray-700">·</span>
          <Link href="/en/faq" className="hover:text-gray-300 transition-colors">
            FAQ
          </Link>
        </p>
      </footer>

      {/* ===== FLOATING LINE BUTTON (mobile) ===== */}
      <a
        href="https://lin.ee/hellonanny"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 sm:hidden w-14 h-14 bg-[#06C755] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Chat on LINE"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
