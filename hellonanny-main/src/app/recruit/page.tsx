"use client";

import Image from "next/image";
import {
  Briefcase,
  DollarSign,
  TrendingUp,
  Clock,
  Users,
  Heart,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";

const positions = [
  {
    icon: Users,
    title: "Nanny / Babysitter",
    desc: "Childcare for foreign families living in Bangkok. Experience with children preferred.",
  },
  {
    icon: Briefcase,
    title: "Maid / Housekeeper",
    desc: "Cleaning, cooking, and household management for expat and Thai families.",
  },
  {
    icon: Heart,
    title: "Customer Support",
    desc: "Assist families and nannies with matching process, scheduling, and communications.",
  },
  {
    icon: MessageCircle,
    title: "Consulting / Coordinator",
    desc: "Help coordinate between families and helpers. Multilingual skills are a plus.",
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    desc: "Salary is negotiable based on experience and skills.",
  },
  {
    icon: TrendingUp,
    title: "Incentive Program",
    desc: "Performance-based incentives and bonuses for great work.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    desc: "Part-time, full-time, and live-in options available.",
  },
  {
    icon: Users,
    title: "Supportive Team",
    desc: "Join a multicultural, friendly team that values your contributions.",
  },
];

export default function RecruitPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/team-meeting.jpg"
          alt="Join our team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Join Our Team
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We&apos;re looking for passionate people to help families in
            Thailand
          </p>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black mb-4">
              Who We&apos;re Looking For
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We welcome Thai nationals with experience in childcare, household
              management, customer support, or consulting. If you love helping
              families and have a positive attitude, we want to hear from you!
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {positions.map((pos, i) => {
              const Icon = pos.icon;
              return (
                <div
                  key={i}
                  className="bg-brand-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-yellow-dark" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-black mb-2">
                    {pos.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{pos.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-brand-gray-50">
        <div className="section-container">
          <h2 className="text-3xl font-extrabold text-brand-black text-center mb-12">
            Why Work With Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-black" />
                  </div>
                  <h3 className="font-bold text-brand-black mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black mb-4">
              Apply Now
            </h2>
            <p className="text-gray-600">
              Fill out the form below or contact us directly. We&apos;ll get
              back to you as soon as possible.
            </p>
          </div>

          {/* Google Form Embed */}
          <div className="bg-brand-gray-50 rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfoIS8eh-R4dEENbLTxZ_l95Ca0wZ1maOREaWTTHm-Ws-v5rw/viewform?embedded=true"
              width="100%"
              height="900"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >
              Loading...
            </iframe>
          </div>

          {/* Alternative Contact */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6">
              Or contact us directly through:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://lin.ee/MGiqloS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#06C755] text-white font-bold rounded-2xl hover:bg-[#05b34c] transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                LINE
              </a>
              <a
                href="https://wa.me/66649133653"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#1ebe5a] transition-colors shadow-md"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="mailto:info@hellonanny-san.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-black text-white font-bold rounded-2xl hover:bg-brand-black/90 transition-colors shadow-md"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
