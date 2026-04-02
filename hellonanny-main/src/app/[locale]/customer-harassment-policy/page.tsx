"use client";

import ScrollAnimation from "@/components/ScrollAnimation";
import { ShieldAlert, Heart, MessageCircle, Home, Ban, DollarSign, Briefcase, RefreshCw, Megaphone, Scale, Shield, Mail } from "lucide-react";

export default function ClientGuidelinesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <ScrollAnimation type="fade-in">
            <div className="w-16 h-16 bg-brand-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldAlert className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
              Hello Nanny Client Guidelines
            </h1>
            <p className="text-brand-black/60 text-sm">Last Updated: March 24, 2026</p>
            <p className="text-brand-black/70 text-sm mt-2">This Policy forms part of the Terms of Service and is binding upon all Clients.</p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-3xl space-y-8">

          {/* Our Approach - Highlight card */}
          <ScrollAnimation type="scale-in">
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-green-800">Our Approach</h2>
              </div>
              <p className="text-green-700 leading-relaxed">
                At Hello Nanny, our goal is to create a smooth, safe, and positive experience for both families and service providers. Most of our clients enjoy a seamless experience without any issues. These guidelines are designed to prevent misunderstandings and support a respectful, long-term working relationship.
              </p>
            </div>
          </ScrollAnimation>

          {/* 1. Nature of Our Service */}
          <ScrollAnimation type="fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">1. Nature of Our Service</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>Hello Nanny provides a <strong>matching and introduction service only</strong>.</p>
                <p>Hello Nanny does not employ, supervise, manage, or control any Service Provider and is not a party to any employment relationship between the Client and the Service Provider.</p>
                <p>All employment arrangements must be agreed directly between the Client and the Service Provider in compliance with Thai labor laws.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* 2. Communication Conduct */}
          <ScrollAnimation type="fade-in" delay={50}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">2. Communication Conduct</h2>
              </div>
              <p className="text-gray-700 mb-3">Clients are expected to maintain polite, professional, and timely communication. Slow or unresponsive communication may result in delayed service.</p>
              <div className="bg-brand-yellow/10 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  <strong>Office Hours:</strong> Monday to Friday, 9:00 AM – 6:00 PM (Bangkok time). Messages sent outside of office hours will be responded to on the next business day.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* 3. Valuables */}
          <ScrollAnimation type="fade-in" delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Home className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">3. Valuables, Property, and Home Responsibility</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-brand-black text-sm mb-2">Clients must secure:</p>
                  <ul className="space-y-1.5">
                    {["Cash", "Valuables", "Jewelry", "Confidential documents", "Keys and access cards"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-brand-black text-sm mb-2">Hello Nanny is not responsible for:</p>
                  <ul className="space-y-1.5">
                    {["Theft or suspected theft", "Loss or missing items", "Property damage", "Cleaning dissatisfaction"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* 4. No Financial Transactions */}
          <ScrollAnimation type="fade-in" delay={150}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">4. No Financial Transactions</h2>
              </div>
              <p className="text-gray-700 mb-3">The Client and the Service Provider are strictly prohibited from:</p>
              <ul className="space-y-2">
                {["Lending or borrowing money", "Salary advances outside agreed terms", "Guarantees or private financial arrangements"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          {/* 5. Scope of Work */}
          <ScrollAnimation type="fade-in" delay={200}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">5. Scope of Work and Expectations</h2>
              </div>
              <p className="text-gray-700 mb-3">Job responsibilities must be clearly agreed before employment begins. Problems may arise when:</p>
              <ul className="space-y-2">
                {["Duties are added after hiring", "Tasks exceed the agreed scope", "Workload becomes excessive"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          {/* 6. Replacement Limitations */}
          <ScrollAnimation type="fade-in" delay={250}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">6. Replacement Limitations</h2>
              </div>
              <p className="text-gray-700">Replacements depend on the selected plan and candidate availability. Hello Nanny does not guarantee a replacement in every case.</p>
            </div>
          </ScrollAnimation>

          {/* 7. Unacceptable Behavior */}
          <ScrollAnimation type="fade-in" delay={300}>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Ban className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">7. Unacceptable Behavior</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-brand-black text-sm mb-2">Not acceptable:</p>
                  <ul className="space-y-1.5">
                    {["Verbal abuse or aggressive language", "Threats or harassment", "Excessive or unreasonable demands", "Disrespect toward staff or Service Providers"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-brand-black text-sm mb-2">Hello Nanny reserves the right to:</p>
                  <ul className="space-y-1.5">
                    {["Pause communication", "Refuse service", "Suspend accounts"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* 8. Social Media */}
          <ScrollAnimation type="fade-in" delay={350}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Megaphone className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">8. Social Media and Public Statements</h2>
              </div>
              <p className="text-gray-700 mb-3">Clients must not:</p>
              <ul className="space-y-2 mb-4">
                {["Post false or misleading information", "Make defamatory or damaging statements", "Encourage others to spread unverified claims"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 italic">Such actions may result in account suspension and legal action under Thai law.</p>
            </div>
          </ScrollAnimation>

          {/* 9. Responsibility */}
          <ScrollAnimation type="fade-in" delay={400}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">9. Responsibility for Disputes</h2>
              </div>
              <p className="text-gray-700 mb-3">All employment-related matters must be handled directly between the Client and the Service Provider, including:</p>
              <div className="flex flex-wrap gap-2">
                {["Salary", "Duties", "Working hours", "Performance", "Behavior"].map((item, i) => (
                  <span key={i} className="px-3 py-1.5 bg-brand-gray-50 rounded-full text-sm text-gray-700 font-medium">{item}</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">Hello Nanny may provide limited support but is not obligated to investigate, mediate, or resolve disputes.</p>
            </div>
          </ScrollAnimation>

          {/* 10. Legal */}
          <ScrollAnimation type="fade-in" delay={450}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">10. Legal and Safety Matters</h2>
              </div>
              <p className="text-gray-700 mb-3">Hello Nanny is not responsible for criminal investigations, misconduct allegations, or legal disputes. The Client must report such matters directly to the appropriate Thai authorities.</p>
            </div>
          </ScrollAnimation>

          {/* Contact */}
          <ScrollAnimation type="fade-in">
            <div className="bg-brand-black rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-brand-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Questions?</h3>
              <a href="mailto:info@hellonanny-san.com" className="text-brand-yellow hover:text-brand-yellow-dark transition-colors font-semibold">
                info@hellonanny-san.com
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
