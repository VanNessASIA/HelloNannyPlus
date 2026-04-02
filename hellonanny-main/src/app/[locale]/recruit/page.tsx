"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
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
import RecruitForm from "@/components/RecruitForm";

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
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <Image
          src="/images/team-meeting.jpg"
          alt="Join our team"
          fill
          className="object-cover transition-transform duration-[1.5s] hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 section-container text-center">
          <ScrollAnimation type="fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We&apos;re looking for passionate people to help families in
              Thailand
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <ScrollAnimation type="fade-in">
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
          </ScrollAnimation>
          <ScrollAnimation type="stagger">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {positions.map((pos, i) => {
                const Icon = pos.icon;
                return (
                  <div
                    key={i}
                    className="bg-brand-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
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
          </ScrollAnimation>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-brand-gray-50">
        <div className="section-container">
          <ScrollAnimation type="fade-in">
            <h2 className="text-3xl font-extrabold text-brand-black text-center mb-12">
              Why Work With Us
            </h2>
          </ScrollAnimation>
          <ScrollAnimation type="stagger">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
          </ScrollAnimation>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-3xl">
          <ScrollAnimation type="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-brand-black mb-4">
                Apply Now
              </h2>
              <p className="text-gray-600">
                Fill out the form below or contact us directly. We&apos;ll get
                back to you as soon as possible.
              </p>
            </div>
          </ScrollAnimation>

          {/* Custom Form */}
          <ScrollAnimation type="scale-in">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
              <RecruitForm />
            </div>
          </ScrollAnimation>

          {/* Alternative Contact */}
          <ScrollAnimation type="fade-in" delay={200}>
            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-6">
                Or contact us directly through:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://lin.ee/MGiqloS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#06C755] text-white font-bold rounded-2xl hover:bg-[#05b34c] transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  LINE
                </a>
                <a
                  href="https://wa.me/66649133653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#1ebe5a] transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="mailto:info@hellonanny-san.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-black text-white font-bold rounded-2xl hover:bg-brand-black/90 transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
