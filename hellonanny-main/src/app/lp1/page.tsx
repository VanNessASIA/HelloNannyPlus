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
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";

const LINE_URL = "https://lin.ee/8na220P";
const WHATSAPP_URL = "https://wa.me/66649133653";

const PLANS = [
  {
    id: "short",
    tag: "For Vacations",
    name: "Short-term Plan",
    nameEn: "Short-term (Vacation Plan)",
    price: "4,000",
    period: "5–14 days",
    popular: false,
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
    period: "Under 30 hrs / week",
    popular: false,
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
    period: "30+ hrs / week",
    popular: true,
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
  { icon: Users, title: "2,000+ Registered Staff", desc: "A large network of vetted nannies and maids ready to match your family's specific needs." },
  { icon: Shield, title: "100% Background Checked", desc: "Every candidate is personally interviewed and background-verified by our team before introduction." },
  { icon: Clock, title: "Same-Day Matching", desc: "We aim to introduce candidates within 24 hours of your request — no long waiting times." },
  { icon: MessageCircle, title: "4-Language Support", desc: "English, Japanese, Chinese, and Thai — no language barriers between you and your helper." },
  { icon: Heart, title: "Pay After Hiring", desc: "Zero upfront cost. You only pay the matching fee once you've found the right person." },
];

const STEPS = [
  { num: "01", title: "Free Consultation", desc: "Tell us your needs via the form, LINE, or WhatsApp — service type, schedule, and budget." },
  { num: "02", title: "Meet Your Candidates", desc: "We hand-pick matched candidates. Video interviews from home — no need to go anywhere." },
  { num: "03", title: "Hire & Pay After", desc: "Found the right fit? Then you pay. No charges until you're 100% happy with your match." },
];

const REVIEWS = [
  { text: "Thanks to Hello Nanny, we found an amazing nanny within a week. The whole process was incredibly smooth and the staff support was wonderful.", name: "Emily R.", family: "Singaporean Family", avatar: "/images/avatars/emily.svg", rating: 5 },
  { text: "I was worried about finding a Japanese-speaking nanny in Bangkok, but Hello Nanny made it happen! She's wonderful and we couldn't be happier.", name: "Yuki T.", family: "Japanese Family", avatar: "/images/avatars/yuki.svg", rating: 5 },
  { text: "The video interview feature was brilliant. Being able to meet candidates before deciding gave us total peace of mind. Very professional service.", name: "Pierre D.", family: "French Family", avatar: "/images/avatars/pierre.svg", rating: 5 },
  { text: "Affordable and reliable. We found our housekeeper through Hello Nanny and she's been with us for over a year. Highly recommended.", name: "Wei L.", family: "Chinese Family", avatar: "/images/avatars/wei.svg", rating: 5 },
];

const FAQS = [
  { q: "Is the initial consultation really free?", a: "Yes, completely free. You only pay the matching fee (based on your chosen plan) once you decide to hire someone." },
  { q: "How quickly can you introduce candidates?", a: "We typically introduce candidates within 24 hours of receiving your request. Same-day introductions are also possible." },
  { q: "Do you support English?", a: "Absolutely. Our team speaks English, Japanese, Chinese, and Thai. We can also match you with helpers who speak your preferred language." },
  { q: "What if the candidate isn't the right fit?", a: "Depending on your plan, we introduce 1–3 candidates. If none are suitable, we'll keep working with you to find a better match." },
  { q: "Do you only operate in Bangkok?", a: "We primarily serve Bangkok. If you're outside the central area, please contact us and we'll do our best to help." },
];

const helpTypes = ["Nanny / Babysitter", "Maid / Housekeeper", "Both (Nanny + Maid)"];
const howFoundOptions = ["Google Search", "Facebook / Instagram", "Friend / Referral", "LINE", "Other"];

// ─── Inline Contact Form ───────────────────────────────────────────────────────
function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [isAsap, setIsAsap] = useState(false);
  const [form, setForm] = useState({
    firstName: "", email: "", mobile: "", helpType: "",
    startDate: "", howFound: "", requirements: "",
  });

  const update = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "request",
          firstName: form.firstName,
          familyName: "",
          email: form.email,
          mobile: form.mobile,
          whatsapp: form.mobile,
          nationality: "",
          age: "",
          address: "",
          helpType: form.helpType,
          liveInOut: "",
          languages: [],
          salaryBudget: "",
          startDate: isAsap ? "ASAP" : form.startDate,
          numChildren: "",
          childrenAges: "",
          requirements: form.requirements,
          howFound: form.howFound,
        }),
      });
      const data = await res.json();
      setStatus(data.status === "success" ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-10 text-center shadow-lg">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-extrabold text-[#1A1A1A] mb-2">Request Received!</h3>
        <p className="text-gray-600 mb-4">We&apos;ll reach out within 24 hours with matched candidates — for free.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#06C755] text-white font-bold rounded-full hover:bg-[#05b34c] transition-colors">
            <MessageCircle className="w-4 h-4" /> Chat on LINE
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1ebe5d] transition-colors">
            WhatsApp Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 shadow-xl space-y-5">
      <div>
        <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-1">See Matched Candidates — Free</h3>
        <p className="text-gray-500 text-sm">No payment until you hire. We&apos;ll reply within 24 hours.</p>
      </div>

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name <span className="text-red-400">*</span></label>
          <input type="text" required value={form.firstName} onChange={(e) => update("firstName", e.target.value)}
            placeholder="e.g., Sarah" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FFC107] focus:ring-2 focus:ring-[#FFC107]/20 outline-none transition-all" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email <span className="text-red-400">*</span></label>
          <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)}
            placeholder="e.g., sarah@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FFC107] focus:ring-2 focus:ring-[#FFC107]/20 outline-none transition-all" />
        </div>
      </div>

      {/* Mobile */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile / WhatsApp <span className="text-red-400">*</span></label>
        <input type="tel" required value={form.mobile} onChange={(e) => update("mobile", e.target.value)}
          placeholder="e.g., +66 XX XXX XXXX" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FFC107] focus:ring-2 focus:ring-[#FFC107]/20 outline-none transition-all" />
      </div>

      {/* Help Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2.5">What kind of help do you need? <span className="text-red-400">*</span></label>
        <div className="flex flex-wrap gap-2">
          {helpTypes.map((type) => (
            <button key={type} type="button" onClick={() => update("helpType", type)}
              className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                form.helpType === type ? "border-[#FFC107] bg-[#FFC107]/10 text-[#1A1A1A]" : "border-gray-200 text-gray-500 hover:border-gray-300"
              }`}>
              {type}
            </button>
          ))}
        </div>
        {/* Hidden required validation */}
        <input type="text" required value={form.helpType} onChange={() => {}} className="sr-only" tabIndex={-1} />
      </div>

      {/* Start Date */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">When do you need help?</label>
        <div className="flex items-center gap-3 flex-wrap">
          <button type="button" onClick={() => { setIsAsap(!isAsap); if (!isAsap) update("startDate", ""); }}
            className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
              isAsap ? "border-[#FFC107] bg-[#FFC107]/10 text-[#1A1A1A]" : "border-gray-200 text-gray-500 hover:border-gray-300"
            }`}>
            ASAP
          </button>
          {!isAsap && (
            <input type="date" value={form.startDate} onChange={(e) => update("startDate", e.target.value)}
              className="flex-1 min-w-0 px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#FFC107] focus:ring-2 focus:ring-[#FFC107]/20 outline-none transition-all text-sm" />
          )}
        </div>
      </div>

      {/* Requirements */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Any special requirements? <span className="text-gray-400 font-normal">(optional)</span></label>
        <textarea value={form.requirements} onChange={(e) => update("requirements", e.target.value)} rows={3}
          placeholder="e.g., Japanese-speaking nanny, cooking experience, allergies..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FFC107] focus:ring-2 focus:ring-[#FFC107]/20 outline-none transition-all resize-none text-sm" />
      </div>

      {/* How Found */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">How did you find us? <span className="text-red-400">*</span></label>
        <div className="flex flex-wrap gap-2">
          {howFoundOptions.map((opt) => (
            <button key={opt} type="button" onClick={() => update("howFound", opt)}
              className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                form.howFound === opt ? "border-[#FFC107] bg-[#FFC107]/10 text-[#1A1A1A]" : "border-gray-200 text-gray-500 hover:border-gray-300"
              }`}>
              {opt}
            </button>
          ))}
        </div>
        <input type="text" required value={form.howFound} onChange={() => {}} className="sr-only" tabIndex={-1} />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm bg-red-50 p-3 rounded-xl">Something went wrong. Please try LINE or WhatsApp instead.</p>
      )}

      <button type="submit" disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 py-4 bg-[#FFC107] text-[#1A1A1A] font-extrabold text-base rounded-full hover:bg-[#E5AC00] transition-all hover:-translate-y-0.5 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "sending" ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-5 h-5" /> See Matched Candidates — Free</>
        )}
      </button>

      <p className="text-center text-gray-400 text-xs">No payment until you hire · We reply within 24 hours</p>
    </form>
  );
}

// ─── Main LP ──────────────────────────────────────────────────────────────────
export default function LP1() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">

        {/* ── Urgency Top Bar ── */}
        <div className="bg-[#1A1A1A] text-white text-center py-2.5 px-4 text-sm font-medium">
          <span className="text-[#FFC107] font-bold">✦ Viewing matched candidates is completely free.</span>
          {" "}No payment until you hire.
        </div>

        {/* ── Sticky Header ── */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center">
                <Baby className="w-4 h-4 text-[#1A1A1A]" />
              </div>
              <span className="font-extrabold text-[#1A1A1A] text-lg">Hello Nanny</span>
            </Link>
            <div className="flex items-center gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:bg-[#1ebe5d] transition-colors">
                WhatsApp
              </a>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-[#06C755] text-white text-sm font-semibold rounded-full hover:bg-[#05b34c] transition-colors">
                <MessageCircle className="w-4 h-4" /> LINE
              </a>
              <a href="#contact-form"
                className="flex items-center gap-1.5 px-4 py-2 bg-[#FFC107] text-[#1A1A1A] text-sm font-bold rounded-full hover:bg-[#E5AC00] transition-colors">
                Free Consultation <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </header>

        {/* ── Hero ── */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <Image src="/images/mom-baby-park.jpg" alt="Family in Bangkok park" fill
            className="object-cover object-[30%_50%] md:object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#1A1A1A] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <Sparkles className="w-4 h-4" />
                Bangkok&apos;s #1 Nanny &amp; Maid Matching Service
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                Find a Trusted<br />
                <span className="text-[#FFC107]">Nanny or Maid</span><br />
                in Bangkok — Fast.
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-4 leading-relaxed">
                Supporting expat families across Bangkok.<br />
                All staff background-checked. Multilingual team.{" "}
                <strong className="text-white">Pay only after hiring.</strong>
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["2,000+ Registered Staff", "100% Background Checked", "No Upfront Payment"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC107]" />{b}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFC107] text-[#1A1A1A] text-base font-extrabold rounded-full hover:bg-[#E5AC00] transition-all hover:-translate-y-0.5 shadow-lg">
                  See Matched Candidates — Free <ChevronRight className="w-5 h-5" />
                </a>
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white text-base font-bold rounded-full hover:bg-[#05b34c] transition-all hover:-translate-y-0.5 shadow-lg">
                  <MessageCircle className="w-5 h-5" /> Chat on LINE
                </a>
              </div>
              <p className="text-white/60 text-sm mt-3">No payment required until you hire</p>
            </div>
          </div>
        </section>

        {/* ── Pain Points ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-4">
                <AlertCircle className="w-4 h-4" /> Sound familiar?
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
                <div key={pain} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
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

        {/* ── Stats ── */}
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

        {/* ── Reasons ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4">Why Bangkok Families Choose Hello Nanny</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Trusted by 500+ families since 2020. Here&apos;s what makes us different.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {REASONS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-gray-50 rounded-3xl p-6 hover:shadow-md transition-shadow">
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

        {/* ── How It Works ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">3 Simple Steps</h2>
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
              <a href="#contact-form"
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#FFC107] text-[#1A1A1A] font-extrabold text-lg rounded-full hover:bg-[#E5AC00] transition-all hover:-translate-y-0.5 shadow-lg">
                See Matched Candidates — Free <ChevronRight className="w-5 h-5" />
              </a>
              <p className="text-gray-400 text-sm mt-3">No upfront payment · Pay only after hiring</p>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">Our Services</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6">
                  Nanny, Maid, or Both —<br />We&apos;ve Got You Covered
                </h2>
                <ul className="space-y-4">
                  {[
                    { title: "Live-in Nanny", desc: "Round-the-clock support. Ideal for families with young children." },
                    { title: "Live-out Nanny", desc: "Support during set hours. Flexible and adjustable to your schedule." },
                    { title: "Maid / Housekeeper", desc: "Cleaning, laundry, cooking, and all household tasks taken care of." },
                    { title: "Short-term / Vacation Support", desc: "Need cover during a trip or holiday? We offer short-term placements too." },
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
                  <Image src="/images/nanny-playing-baby.jpg" alt="Nanny with baby" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden h-52 mt-8">
                  <Image src="/images/cleaner-making-bed.jpg" alt="Housekeeper" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden h-52 -mt-8">
                  <Image src="/images/baby-crawling.jpg" alt="Baby care" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden h-52">
                  <Image src="/images/happy-family.jpg" alt="Happy family" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">Pricing</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4">Simple, Transparent Pricing</h2>
              <p className="text-gray-600 text-lg">One flat fee. No hidden costs. Pay only when you hire.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {PLANS.map((plan) => (
                <div key={plan.id}
                  className={`relative bg-white rounded-3xl border-2 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${plan.popular ? "border-[#FFC107] ring-2 ring-[#FFC107]" : "border-gray-200"}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#FFC107] text-[#1A1A1A] px-4 py-1.5 rounded-full text-sm font-extrabold whitespace-nowrap shadow">★ Most Popular</span>
                    </div>
                  )}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#FFC107]/15 text-[#E5AC00] text-xs font-semibold rounded-full mb-3">{plan.tag}</span>
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
                        <CheckCircle2 className="w-4 h-4 text-[#FFC107] flex-shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact-form"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all ${plan.popular ? "bg-[#FFC107] text-[#1A1A1A] hover:bg-[#E5AC00]" : "bg-gray-100 text-[#1A1A1A] hover:bg-gray-200"}`}>
                    Choose This Plan <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">* All plans include a pre-request consultation and communication support</p>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">Customer Reviews</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">What Our Families Say</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {REVIEWS.map(({ text, name, family, avatar, rating }) => (
                <div key={name} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
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

        {/* ── Urgency + Form ── */}
        <section id="contact-form" className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Urgency copy */}
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">Get Started Now</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4">
                  See Matched Candidates<br />
                  <span className="text-[#E5AC00]">Completely Free</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Browsing candidates costs nothing. You only pay when you&apos;ve found the right match.
                  Fill in the form and we&apos;ll reach out within 24 hours.
                </p>

                {/* Mini trust list */}
                <ul className="space-y-3 mb-8">
                  {[
                    "Free to browse — no payment until you hire",
                    "Candidates introduced within 24 hours",
                    "Multilingual team (EN / JA / ZH / TH)",
                    "Video interviews from home",
                    "Trusted by 500+ expat families in Bangkok",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#FFC107] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Alternative contact */}
                <p className="text-sm text-gray-500 mb-3">Prefer to message us directly?</p>
                <div className="flex flex-wrap gap-3">
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#06C755] text-white font-bold rounded-full hover:bg-[#05b34c] transition-colors text-sm">
                    <MessageCircle className="w-4 h-4" /> Chat on LINE
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1ebe5d] transition-colors text-sm">
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {FAQS.map(({ q, a }, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                  <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="font-bold text-[#1A1A1A] pr-4">{q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">{a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center mx-auto mb-6">
              <Baby className="w-8 h-8 text-[#1A1A1A]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Ready to Find Your<br />Perfect Helper?
            </h2>
            <p className="text-white/70 text-lg mb-2 max-w-xl mx-auto">
              Hundreds of Bangkok families trust Hello Nanny.
            </p>
            <p className="text-[#FFC107] font-bold text-lg mb-8">
              Viewing matched candidates is free. Contact us now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FFC107] text-[#1A1A1A] text-lg font-extrabold rounded-full hover:bg-[#E5AC00] transition-all hover:-translate-y-0.5 shadow-xl">
                See Matched Candidates — Free <ChevronRight className="w-5 h-5" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#25D366] text-white text-lg font-bold rounded-full hover:bg-[#1ebe5d] transition-all hover:-translate-y-0.5 shadow-xl">
                WhatsApp Us
              </a>
            </div>
            <p className="text-white/40 text-sm mt-4">No upfront payment · Pay only after hiring</p>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="py-8 bg-gray-900 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 VANNESS ASIA CO., LTD. All rights reserved.
            <span className="mx-2 text-gray-700">·</span>
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span className="mx-2 text-gray-700">·</span>
            <Link href="/en/faq" className="hover:text-gray-300 transition-colors">FAQ</Link>
          </p>
        </footer>

        {/* ── Floating Buttons (mobile) ── */}
        <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 sm:hidden">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            aria-label="WhatsApp">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 bg-[#06C755] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            aria-label="LINE">
            <MessageCircle className="w-6 h-6 text-white" />
          </a>
        </div>

      </div>
  );
}
