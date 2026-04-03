"use client";

import { useLocale } from "@/lib/LocaleContext";
import ScrollAnimation from "@/components/ScrollAnimation";
import { FileText, Check, AlertTriangle, CreditCard, Shield, Ban, Scale, Mail } from "lucide-react";

export default function ServiceAgreementPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <ScrollAnimation type="fade-in">
            <div className="w-16 h-16 bg-brand-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
              {t.footer.links.terms}
            </h1>
            <p className="text-brand-black/60 text-sm">
              Agreement between VANNESS ASIA CO., LTD. (&ldquo;Hello Nanny&rdquo;) and the Client
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-3xl space-y-8">

          {/* I. Scope of Service */}
          <ScrollAnimation type="fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">I. Scope of Service</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0 mt-2.5" />
                  <span>The Client agrees to use Hello Nanny to be introduced to Service Providers whose qualifications, responsibilities, and working hours are specified in the attached agreement document.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0 mt-2.5" />
                  <span>The Client agrees to pay the specified fee excluding VAT (7%) in full to Hello Nanny before receiving the contact details of the Service Provider.</span>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* II. Screening */}
          <ScrollAnimation type="fade-in" delay={50}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">II. Screening and Background Checks</h2>
              </div>
              <p className="text-gray-700 mb-4">Hello Nanny will verify the following for Service Provider candidates:</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Identification (passport or ID card)",
                  "Work permit status (if applicable)",
                  "Criminal record check (upon request)",
                  "Employment history verification",
                  "References (contact details provided upon request)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-brand-yellow/10 rounded-xl p-4">
                <p className="text-sm text-gray-600 italic">
                  Note: While Hello Nanny verifies work permits initially, it is the Client&apos;s responsibility to confirm ongoing validity. Clients are encouraged to personally verify references before finalizing employment.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* III. Client Responsibilities */}
          <ScrollAnimation type="fade-in" delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">III. Client Responsibilities</h2>
              </div>
              <ol className="space-y-3 list-decimal list-inside text-gray-700">
                <li>The Client is fully responsible for supervising and managing the Service Provider&apos;s working conditions, including working hours, breaks, wages, overtime, public holidays, leave entitlements, and safety in compliance with Thai labor laws.</li>
                <li>Labor laws require that one hour of rest be provided for every 8 hours worked.</li>
              </ol>
            </div>
          </ScrollAnimation>

          {/* IV. Refund and Replacement */}
          <ScrollAnimation type="fade-in" delay={150}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">IV. Refund and Replacement Policy</h2>
              </div>

              <h3 className="font-bold text-brand-black mb-3 text-lg">Refund Policy</h3>
              <p className="text-gray-700 mb-4">All fees are non-refundable, except in cases of duplicate payment or as required by Thai law.</p>
              <p className="text-gray-700 mb-6">Caregivers set their own rates. Customer plans do not include caregivers&apos; salaries.</p>

              <h3 className="font-bold text-brand-black mb-3 text-lg">Replacement Plans</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { name: "Short-time", price: "4,000 THB", detail: "Choose up to 1 time", note: "5 to 14 days" },
                  { name: "Full-time", price: "7,800 THB", detail: "Choose up to 3 times", note: "Within 2 months" },
                  { name: "Part-time", price: "6,000 THB", detail: "Choose up to 2 times", note: "Weekly < 30 hours" },
                ].map((plan, i) => (
                  <div key={i} className="bg-brand-gray-50 rounded-xl p-4 text-center">
                    <p className="font-bold text-brand-black text-sm">{plan.name}</p>
                    <p className="text-xl font-extrabold text-brand-black mt-1">{plan.price}</p>
                    <p className="text-xs text-gray-600 mt-1">{plan.detail}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{plan.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">Part-time is defined as working 30 hours or less per week.</p>

              <div className="bg-brand-yellow/10 rounded-xl p-4 mt-4">
                <h4 className="font-bold text-brand-black text-sm mb-2">Special Clause (all plans)</h4>
                <p className="text-sm text-gray-600">
                  If any introduced Service Provider does not report to work at all after contact information has been exchanged, this case will not be counted as one replacement. Hello Nanny will continue to assist with replacements according to the selected plan.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* V. Service Provider Terms */}
          <ScrollAnimation type="fade-in" delay={200}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">V. Service Provider Terms</h2>
              </div>

              <h3 className="font-bold text-brand-black mb-3">Registration Fee</h3>
              <p className="text-gray-700 mb-4">All candidates must pay a one-time registration fee of <strong>200 THB</strong> at the time of registration. This fee is non-refundable and covers profile creation and access to our matching system.</p>

              <h3 className="font-bold text-brand-black mb-3">System Usage Fee (Only if you get a job)</h3>
              <ul className="space-y-2 mb-4">
                {[
                  "25% of your first month's salary",
                  "Pay after you start working",
                  "Includes 3-month replacement guarantee",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-brand-black mb-3">Interview Rules</h3>
              <ul className="space-y-2">
                {[
                  "Once you agree to an interview, cancellation is not allowed except for real emergencies.",
                  "If you do not answer two phone calls and fail to call back on the same day, your profile will be suspended immediately.",
                  "Repeated cases or disappearing during the process will result in permanent account deactivation.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          {/* VIII. Prohibited Actions */}
          <ScrollAnimation type="fade-in" delay={250}>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Ban className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">VIII. Prohibited Actions</h2>
              </div>
              <p className="text-gray-700 mb-3">The Client is strictly prohibited from directly hiring or entering into any employment arrangement with Service Providers introduced by Hello Nanny for a period of <strong>12 months</strong> from the date of introduction.</p>
              <p className="text-gray-700">In case of violation, the Client agrees to pay a penalty equal to <strong>50% of the Service Provider&apos;s monthly salary</strong> or a minimum of <strong>30,000 THB</strong>, whichever is higher.</p>
            </div>
          </ScrollAnimation>

          {/* IX. Liability */}
          <ScrollAnimation type="fade-in" delay={300}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">IX. Liability</h2>
              </div>
              <p className="text-gray-700 mb-4">Hello Nanny is not responsible for any losses, injuries, legal claims, or disputes arising from the Client&apos;s employment relationship with the Service Provider. The Client assumes full responsibility for supervising the Service Provider in accordance with Thai labor laws.</p>
              <div className="bg-brand-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 italic">Hello Nanny acts solely as a matching and introduction service. All information about candidates is provided as reported by the candidates themselves. Once contact information has been released, Hello Nanny&apos;s responsibility is deemed fulfilled.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* X. Validity */}
          <ScrollAnimation type="fade-in" delay={350}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <h2 className="text-xl font-bold text-brand-black">X. Validity of Terms</h2>
              </div>
              <p className="text-gray-700 mb-3">These Terms become effective when the Client submits a job request on Hello Nanny&apos;s platform and agrees to the terms by checking the consent box.</p>
              <p className="text-gray-600 text-sm italic">By agreeing to these Terms of Service, you also agree to our Privacy Policy.</p>
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
