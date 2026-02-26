"use client";

import { useState } from "react";
import { Locale, locales, localeNames, getTranslations } from "@/lib/i18n";
import {
  Search,
  MapPin,
  MessageCircle,
  Video,
  Send,
  Star,
  ShieldCheck,
  Coins,
  ChevronRight,
  Check,
  Menu,
  X,
  Globe,
  UserPlus,
  ArrowRight,
  Heart,
  BadgeCheck,
  Phone,
} from "lucide-react";

/* ─── Phone Mockup Component ─── */
function PhoneMockup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Phone frame */}
      <div className="relative bg-brand-black rounded-[2.5rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-brand-black rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="relative bg-white rounded-[2rem] overflow-hidden w-[240px] h-[480px] md:w-[280px] md:h-[560px]">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── Mock App Screen: Search ─── */
function MockSearchScreen() {
  return (
    <div className="h-full bg-gray-50 p-4 text-xs">
      {/* Status bar */}
      <div className="flex justify-between items-center mb-3 text-[10px] text-gray-400">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-2 bg-gray-400 rounded-sm" />
          <div className="w-4 h-2 bg-gray-400 rounded-sm" />
        </div>
      </div>
      {/* Search bar */}
      <div className="bg-white rounded-xl p-2.5 mb-3 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2">
          <Search className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-400 text-[11px]">Search nannies...</span>
        </div>
      </div>
      {/* Filter chips */}
      <div className="flex gap-1.5 mb-3 overflow-hidden">
        <span className="bg-brand-yellow/20 text-brand-yellow-dark px-2 py-0.5 rounded-full text-[10px] font-medium whitespace-nowrap">English</span>
        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-[10px] whitespace-nowrap">Full-time</span>
        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-[10px] whitespace-nowrap">&lt;5km</span>
      </div>
      {/* Candidate cards */}
      {[
        { name: "Maria S.", dist: "1.2 km", rating: "4.9", exp: "5 yrs", verified: true },
        { name: "Suda K.", dist: "2.8 km", rating: "4.8", exp: "3 yrs", verified: true },
        { name: "Anh T.", dist: "3.5 km", rating: "4.7", exp: "7 yrs", verified: false },
      ].map((c, i) => (
        <div key={i} className="bg-white rounded-xl p-2.5 mb-2 shadow-sm border border-gray-100">
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-yellow/30 to-brand-yellow/10 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-brand-yellow-dark">{c.name.charAt(0)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-[11px] text-brand-black">{c.name}</span>
                {c.verified && <BadgeCheck className="w-3 h-3 text-blue-500" />}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] text-gray-400 flex items-center gap-0.5"><MapPin className="w-2.5 h-2.5" />{c.dist}</span>
                <span className="text-[10px] text-gray-400 flex items-center gap-0.5"><Star className="w-2.5 h-2.5 text-brand-yellow fill-brand-yellow" />{c.rating}</span>
                <span className="text-[10px] text-gray-400">{c.exp}</span>
              </div>
            </div>
            <button className="self-center bg-brand-yellow/10 text-brand-yellow-dark px-2 py-1 rounded-lg text-[10px] font-medium">View</button>
          </div>
        </div>
      ))}
      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-2 px-4">
        <div className="flex flex-col items-center gap-0.5">
          <Search className="w-4 h-4 text-brand-yellow" />
          <span className="text-[8px] text-brand-yellow font-medium">Search</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <MessageCircle className="w-4 h-4 text-gray-300" />
          <span className="text-[8px] text-gray-400">Chat</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Heart className="w-4 h-4 text-gray-300" />
          <span className="text-[8px] text-gray-400">Saved</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <UserPlus className="w-4 h-4 text-gray-300" />
          <span className="text-[8px] text-gray-400">Profile</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Mock App Screen: Chat ─── */
function MockChatScreen() {
  return (
    <div className="h-full bg-white flex flex-col text-xs">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 p-3 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-yellow/30 to-brand-yellow/10 flex items-center justify-center">
          <span className="text-xs font-bold text-brand-yellow-dark">M</span>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-[11px]">Maria S.</span>
            <BadgeCheck className="w-3 h-3 text-blue-500" />
          </div>
          <span className="text-[9px] text-green-500">Online</span>
        </div>
        <div className="ml-auto flex gap-2">
          <Phone className="w-4 h-4 text-gray-400" />
          <Video className="w-4 h-4 text-brand-yellow" />
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 p-3 space-y-2 overflow-hidden bg-gray-50">
        <div className="flex justify-start">
          <div className="bg-white rounded-xl rounded-tl-sm px-3 py-1.5 max-w-[75%] shadow-sm">
            <p className="text-[10px] text-gray-700">Hello! I saw your profile. I have 5 years experience with kids aged 2-6.</p>
            <span className="text-[8px] text-gray-400 mt-0.5 block">10:23</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-brand-yellow/20 rounded-xl rounded-tr-sm px-3 py-1.5 max-w-[75%]">
            <p className="text-[10px] text-gray-700">Great! Can you speak Japanese?</p>
            <span className="text-[8px] text-gray-400 mt-0.5 block text-right">10:24</span>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white rounded-xl rounded-tl-sm px-3 py-1.5 max-w-[75%] shadow-sm">
            <p className="text-[10px] text-gray-700">Yes! I studied Japanese for 3 years. I can communicate well with children in Japanese.</p>
            <span className="text-[8px] text-gray-400 mt-0.5 block">10:25</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-brand-yellow/20 rounded-xl rounded-tr-sm px-3 py-1.5 max-w-[75%]">
            <p className="text-[10px] text-gray-700">Wonderful! Shall we do a video call?</p>
            <span className="text-[8px] text-gray-400 mt-0.5 block text-right">10:26</span>
          </div>
        </div>
      </div>
      {/* Input */}
      <div className="bg-white border-t border-gray-100 p-2 flex items-center gap-2">
        <div className="flex-1 bg-gray-50 rounded-full px-3 py-1.5 text-[10px] text-gray-400">Type a message...</div>
        <div className="w-7 h-7 bg-brand-yellow rounded-full flex items-center justify-center">
          <Send className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
    </div>
  );
}

/* ─── Mock App Screen: Profile ─── */
function MockProfileScreen() {
  return (
    <div className="h-full bg-white text-xs overflow-hidden">
      {/* Hero photo placeholder */}
      <div className="h-32 md:h-36 bg-gradient-to-br from-brand-yellow/40 via-brand-yellow/20 to-orange-100 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full border-4 border-white bg-gradient-to-br from-brand-yellow/30 to-brand-yellow/10 flex items-center justify-center shadow-md">
          <span className="text-xl font-bold text-brand-yellow-dark">M</span>
        </div>
      </div>
      {/* Profile info */}
      <div className="pt-10 px-4 text-center">
        <div className="flex items-center justify-center gap-1">
          <span className="font-bold text-sm text-brand-black">Maria Santos</span>
          <BadgeCheck className="w-3.5 h-3.5 text-blue-500" />
        </div>
        <p className="text-[10px] text-gray-500 mt-0.5">Professional Nanny &bull; 5 yrs exp</p>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Star className="w-3 h-3 text-brand-yellow fill-brand-yellow" />
          <span className="text-[11px] font-semibold">4.9</span>
          <span className="text-[10px] text-gray-400">(47 reviews)</span>
        </div>
        <div className="flex items-center justify-center gap-1 mt-1">
          <MapPin className="w-3 h-3 text-gray-400" />
          <span className="text-[10px] text-gray-500">1.2 km away</span>
        </div>
      </div>
      {/* Tags */}
      <div className="flex flex-wrap gap-1 px-4 mt-3 justify-center">
        <span className="bg-brand-yellow/10 text-brand-yellow-dark px-2 py-0.5 rounded-full text-[9px]">English</span>
        <span className="bg-brand-yellow/10 text-brand-yellow-dark px-2 py-0.5 rounded-full text-[9px]">Japanese</span>
        <span className="bg-brand-yellow/10 text-brand-yellow-dark px-2 py-0.5 rounded-full text-[9px]">Thai</span>
        <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-[9px]">BG Checked</span>
      </div>
      {/* Action buttons */}
      <div className="flex gap-2 px-4 mt-3">
        <button className="flex-1 bg-brand-yellow text-brand-black py-1.5 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1">
          <Send className="w-3 h-3" />Offer
        </button>
        <button className="flex-1 bg-gray-100 text-gray-700 py-1.5 rounded-xl text-[10px] font-medium flex items-center justify-center gap-1">
          <MessageCircle className="w-3 h-3" />Chat
        </button>
        <button className="bg-gray-100 text-gray-700 p-1.5 rounded-xl">
          <Video className="w-3.5 h-3.5" />
        </button>
      </div>
      {/* Reviews preview */}
      <div className="px-4 mt-3">
        <div className="text-[10px] font-semibold text-brand-black mb-1.5">Recent Reviews</div>
        <div className="bg-gray-50 rounded-lg p-2">
          <div className="flex gap-1 mb-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 text-brand-yellow fill-brand-yellow" />
            ))}
          </div>
          <p className="text-[9px] text-gray-600 leading-relaxed">&ldquo;Maria is amazing with our kids! Very patient and always on time.&rdquo;</p>
          <p className="text-[8px] text-gray-400 mt-0.5">- Yuki T.</p>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [locale, setLocale] = useState<Locale>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = getTranslations(locale);

  const featureIcons = [
    <Search key="search" className="w-7 h-7" />,
    <MapPin key="map" className="w-7 h-7" />,
    <MessageCircle key="chat" className="w-7 h-7" />,
    <Video key="video" className="w-7 h-7" />,
    <Send key="offer" className="w-7 h-7" />,
    <Star key="review" className="w-7 h-7" />,
    <ShieldCheck key="safety" className="w-7 h-7" />,
    <Coins key="price" className="w-7 h-7" />,
  ];

  const featureKeys = [
    "search", "distance", "chat", "video", "offer", "review", "safety", "price",
  ] as const;

  const stepPhotos = [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold">H</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-lg text-brand-black">HelloNanny</span>
              <span className="text-brand-yellow font-extrabold text-lg">+</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-brand-black transition-colors">{t.nav.features}</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-brand-black transition-colors">{t.nav.howItWorks}</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-brand-black transition-colors">{t.nav.pricing}</a>
            <a href="#reviews" className="text-sm font-medium text-gray-600 hover:text-brand-black transition-colors">{t.nav.reviews}</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button onClick={() => setLangMenuOpen(!langMenuOpen)} className="flex items-center gap-1 text-sm text-gray-600 hover:text-brand-black px-3 py-2 rounded-lg hover:bg-gray-50">
                <Globe className="w-4 h-4" />
                {localeNames[locale]}
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-1 min-w-[140px]">
                  {locales.map((l) => (
                    <button key={l} onClick={() => { setLocale(l); setLangMenuOpen(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${locale === l ? "font-bold text-brand-yellow-dark" : "text-gray-700"}`}>
                      {localeNames[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a href="https://app.hellonanny-san.com/signup_user" className="btn-primary !py-2.5 !px-6 !text-sm">
              {t.nav.getStarted}<ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 pb-4">
            <div className="section-container flex flex-col gap-3 pt-4">
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 font-medium">{t.nav.features}</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 font-medium">{t.nav.howItWorks}</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 font-medium">{t.nav.pricing}</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 font-medium">{t.nav.reviews}</a>
              <div className="flex gap-2 pt-2">
                {locales.map((l) => (
                  <button key={l} onClick={() => { setLocale(l); setMobileMenuOpen(false); }}
                    className={`px-3 py-1.5 rounded-full text-sm ${locale === l ? "bg-brand-yellow font-bold" : "bg-gray-100 text-gray-600"}`}>
                    {localeNames[l]}
                  </button>
                ))}
              </div>
              <a href="https://app.hellonanny-san.com/signup_user" onClick={() => setMobileMenuOpen(false)} className="btn-primary text-center mt-2">{t.nav.getStarted}</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO - Split layout with phone mockup */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-16 bg-gradient-to-br from-brand-yellow/10 via-white to-brand-yellow/5 overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-brand-black leading-tight mb-6">
                {t.hero.title1}
                <span className="text-brand-yellow block"> {t.hero.titleHighlight} </span>
                {t.hero.title2}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10">
                <a href="https://app.hellonanny-san.com/signup_user" className="btn-primary text-lg">
                  {t.hero.cta}<ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto lg:mx-0">
                {[
                  { value: t.hero.stat1Value, label: t.hero.stat1Label },
                  { value: t.hero.stat2Value, label: t.hero.stat2Label },
                  { value: t.hero.stat3Value, label: t.hero.stat3Label },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-extrabold text-brand-black">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Phone Mockup with lifestyle photo background */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Background lifestyle photo */}
                <div className="absolute -inset-8 md:-inset-12 rounded-3xl overflow-hidden opacity-20 lg:opacity-30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80"
                    alt=""
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                {/* Main phone */}
                <PhoneMockup className="relative z-10">
                  <MockSearchScreen />
                </PhoneMockup>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-yellow/20 rounded-full blur-2xl z-0" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl z-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-brand-yellow-dark font-semibold text-sm uppercase tracking-wider mb-3">{t.features.sectionTag}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-black mb-4">{t.features.title}</h2>
            <p className="text-gray-600 text-lg">{t.features.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureKeys.map((key, i) => (
              <div key={key} className="group p-6 rounded-2xl border border-gray-100 hover:border-brand-yellow/50 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-14 h-14 bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-brand-yellow-dark mb-4 group-hover:bg-brand-yellow/20 transition-colors">
                  {featureIcons[i]}
                </div>
                <h3 className="font-bold text-lg text-brand-black mb-2">{t.features[key].title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.features[key].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE BANNER — ナニーがいる暮らし */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] md:h-[520px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=1600&q=80"
            alt="Happy family lifestyle"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="relative z-10 h-full flex items-center">
            <div className="section-container">
              <div className="max-w-lg">
                <span className="inline-block bg-brand-yellow/20 backdrop-blur-sm text-brand-yellow font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                  {locale === "ja" ? "✨ もっと笑顔の毎日を" : locale === "zh" ? "✨ 更多微笑的每一天" : locale === "th" ? "✨ วันที่มีรอยยิ้มมากขึ้น" : "✨ More smiles every day"}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                  {locale === "ja" ? "ナニーがいる暮らし" : locale === "zh" ? "有保姆的生活" : locale === "th" ? "ชีวิตที่มีพี่เลี้ยง" : "Life with a Nanny"}
                </h2>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                  {locale === "ja"
                    ? "子どもたちの笑顔が増える。自分の時間が生まれる。家族みんなが、もっと幸せになる。"
                    : locale === "zh"
                    ? "孩子们的笑容更多了。有了属于自己的时间。全家人都更幸福了。"
                    : locale === "th"
                    ? "รอยยิ้มของเด็กๆ เพิ่มขึ้น มีเวลาเป็นของตัวเอง ทุกคนในครอบครัวมีความสุขมากขึ้น"
                    : "More smiles from the kids. More time for yourself. A happier life for the whole family."}
                </p>
                <a href="https://app.hellonanny-san.com/signup_user" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-brand-black bg-brand-yellow rounded-full hover:bg-brand-yellow-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  {t.hero.cta}<ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APP PREVIEW - 3 phones showing different screens */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-brand-gray-50 to-white overflow-hidden">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-brand-yellow-dark font-semibold text-sm uppercase tracking-wider mb-3">App Preview</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-black mb-4">
              {locale === "ja" ? "アプリの中を覗いてみよう" : locale === "zh" ? "看看应用内部" : locale === "th" ? "ดูภายในแอป" : "See the App in Action"}
            </h2>
            <p className="text-gray-600 text-lg">
              {locale === "ja" ? "検索、チャット、プロフィール確認 — すべてがスムーズに" : locale === "zh" ? "搜索、聊天、查看资料 — 一切顺畅" : locale === "th" ? "ค้นหา แชท ดูโปรไฟล์ — ทุกอย่างราบรื่น" : "Search, chat, and review profiles — everything flows smoothly."}
            </p>
          </div>
          <div className="flex items-end justify-center gap-4 md:gap-8 overflow-hidden pb-4">
            {/* Phone 1: Search */}
            <div className="hidden md:block transform -rotate-6 opacity-90 hover:opacity-100 hover:rotate-0 transition-all duration-500">
              <PhoneMockup>
                <MockSearchScreen />
              </PhoneMockup>
              <p className="text-center text-sm font-medium text-gray-500 mt-4">
                {locale === "ja" ? "候補者を検索" : locale === "zh" ? "搜索候选人" : locale === "th" ? "ค้นหาผู้สมัคร" : "Search Candidates"}
              </p>
            </div>
            {/* Phone 2: Profile (center, larger) */}
            <div className="transform scale-100 md:scale-110 z-10">
              <PhoneMockup>
                <MockProfileScreen />
              </PhoneMockup>
              <p className="text-center text-sm font-medium text-gray-500 mt-4">
                {locale === "ja" ? "プロフィール確認" : locale === "zh" ? "查看资料" : locale === "th" ? "ดูโปรไฟล์" : "View Profiles"}
              </p>
            </div>
            {/* Phone 3: Chat */}
            <div className="hidden md:block transform rotate-6 opacity-90 hover:opacity-100 hover:rotate-0 transition-all duration-500">
              <PhoneMockup>
                <MockChatScreen />
              </PhoneMockup>
              <p className="text-center text-sm font-medium text-gray-500 mt-4">
                {locale === "ja" ? "アプリ内チャット" : locale === "zh" ? "应用内聊天" : locale === "th" ? "แชทในแอป" : "Chat In-App"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-brand-yellow-dark font-semibold text-sm uppercase tracking-wider mb-3">{t.howItWorks.sectionTag}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-black">{t.howItWorks.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {(["step1", "step2", "step3"] as const).map((stepKey, i) => (
              <div key={stepKey} className="relative text-center group">
                {/* Step photo */}
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={stepPhotos[i]}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="inline-flex items-center justify-center w-10 h-10 bg-brand-yellow text-brand-black text-lg font-bold rounded-full mb-3 shadow-md -mt-11 relative z-10 border-4 border-white">{i + 1}</span>
                <h3 className="font-bold text-xl text-brand-black mb-2 mt-2">{t.howItWorks[stepKey].title}</h3>
                <p className="text-gray-500">{t.howItWorks[stepKey].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 md:py-24 bg-brand-gray-50">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-brand-yellow-dark font-semibold text-sm uppercase tracking-wider mb-3">{t.pricing.sectionTag}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-black mb-4">{t.pricing.title}</h2>
            <p className="text-gray-600 text-lg">{t.pricing.subtitle}</p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="relative bg-white rounded-3xl border-2 border-brand-yellow shadow-xl p-8 md:p-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-black text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">{t.pricing.planName}</div>
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-gray-500">{t.pricing.currency}</span>
                  <span className="text-6xl md:text-7xl font-extrabold text-brand-black">{t.pricing.price}</span>
                  <span className="text-lg text-gray-500">{t.pricing.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {t.pricing.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-brand-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-brand-yellow-dark" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="https://app.hellonanny-san.com/signup_user" className="btn-primary w-full justify-center text-lg">
                {t.pricing.cta}<ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <p className="text-center text-sm text-gray-500 mt-4">{t.pricing.trial}</p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-center text-sm text-gray-400">{t.pricing.compare}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-yellow/5 to-white relative">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-brand-yellow-dark font-semibold text-sm uppercase tracking-wider mb-3">{t.reviews.sectionTag}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-black">{t.reviews.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.reviews.items.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className={`w-5 h-5 ${si < review.rating ? "text-brand-yellow fill-brand-yellow" : "text-gray-200"}`} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  {/* Placeholder avatar */}
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://api.dicebear.com/7.x/notionists/svg?seed=${review.name}&backgroundColor=ffc107`}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-black">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.family}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE / TRUST BANNER — Photo-driven */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Full-bleed photo */}
          <div className="relative h-[320px] lg:h-auto lg:min-h-[520px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1543342384-1f1350e27861?w=800&q=80"
              alt="Caring nanny with child"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-none" />
          </div>
          {/* Right: Trust content */}
          <div className="bg-brand-gray-50 flex items-center py-12 lg:py-20 px-6 sm:px-10 lg:px-16">
            <div className="max-w-lg">
              <span className="inline-block text-brand-yellow-dark font-semibold text-sm uppercase tracking-wider mb-3">
                {locale === "ja" ? "安心・安全" : locale === "zh" ? "安心安全" : locale === "th" ? "ปลอดภัยมั่นใจ" : "Safety & Trust"}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4 leading-tight">
                {locale === "ja" ? "ご家族の安心を\n第一に" : locale === "zh" ? "家庭安全第一" : locale === "th" ? "ความปลอดภัยของ\nครอบครัวมาก่อน" : "Your Family's Safety\nComes First"}
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed whitespace-pre-line">
                {locale === "ja"
                  ? "すべての候補者がID確認済み。バックグラウンドチェック済みの候補者には専用マークを表示。レビューや評価で他のご家庭の声も確認でき、安心してお選びいただけます。"
                  : locale === "zh"
                  ? "所有候选人均经过身份验证。通过背景调查的候选人会显示专属标记。您还可以查看其他家庭的评价和评分，安心选择。"
                  : locale === "th"
                  ? "ผู้สมัครทุกคนผ่านการยืนยันตัวตน ผู้สมัครที่ผ่านการตรวจสอบประวัติจะมีเครื่องหมายพิเศษ คุณยังสามารถดูรีวิวจากครอบครัวอื่นเพื่อเลือกอย่างมั่นใจ"
                  : "Every candidate is ID-verified. Background-checked candidates display a special badge. Plus, read reviews from other families so you can choose with confidence."}
              </p>
              {/* Trust stats row */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="text-center bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-2xl md:text-3xl font-extrabold text-brand-black">98%</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {locale === "ja" ? "満足度" : locale === "zh" ? "满意度" : locale === "th" ? "ความพึงพอใจ" : "Satisfaction"}
                  </div>
                </div>
                <div className="text-center bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-2xl md:text-3xl font-extrabold text-brand-black">500+</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {locale === "ja" ? "マッチ成立" : locale === "zh" ? "成功匹配" : locale === "th" ? "จับคู่สำเร็จ" : "Matches"}
                  </div>
                </div>
                <div className="text-center bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-2xl md:text-3xl font-extrabold text-brand-black">24h</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {locale === "ja" ? "サポート" : locale === "zh" ? "客服支持" : locale === "th" ? "สนับสนุน" : "Support"}
                  </div>
                </div>
              </div>
              <a href="https://app.hellonanny-san.com/signup_user" className="btn-primary inline-flex text-lg">
                {t.cta.button}<ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-CTA LIFESTYLE PHOTO BANNER */}
      <section className="relative overflow-hidden">
        <div className="relative h-[320px] md:h-[400px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=1600&q=80"
            alt="Family walking together"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex items-center justify-center text-center">
            <div className="section-container">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                {locale === "ja" ? "ゆとりのある暮らしを、\nあなたの家族に。" : locale === "zh" ? "给您的家庭，\n更从容的生活。" : locale === "th" ? "ชีวิตที่มีเวลามากขึ้น\nเพื่อครอบครัวของคุณ" : "A more relaxed life,\nfor your family."}
              </h2>
              <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto whitespace-pre-line">
                {locale === "ja" ? "HelloNanny+で、信頼できるお手伝いさんに出会おう" : locale === "zh" ? "在HelloNanny+上，遇见值得信赖的帮手" : locale === "th" ? "พบพี่เลี้ยงที่ไว้วางใจได้บน HelloNanny+" : "Find a trusted helper on HelloNanny+"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 md:py-24 bg-brand-black text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">{t.cta.title}</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">{t.cta.subtitle}</p>
          <a href="https://app.hellonanny-san.com/signup_user" className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-brand-black bg-brand-yellow rounded-full hover:bg-brand-yellow-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            {t.cta.button}<ArrowRight className="w-6 h-6 ml-2" />
          </a>
          <p className="text-gray-500 text-sm mt-4">{t.cta.note}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 md:py-16 bg-brand-gray-900 text-gray-400">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-brand-black">H</span>
                </div>
                <span className="font-bold text-white">HelloNanny<span className="text-brand-yellow">+</span></span>
              </div>
              <p className="text-sm leading-relaxed">{t.footer.description}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.service}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">{t.footer.links.features}</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">{t.footer.links.pricing}</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">{t.footer.links.howItWorks}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.about}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.blog}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.contact}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.legal}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://hellonanny-san.com/ServiceAgreement" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.footer.links.terms}</a></li>
                <li><a href="https://hellonanny-san.com/PrivacyPolicy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.footer.links.privacy}</a></li>
                <li><a href="https://hellonanny-san.com/announcement/customer-harassment-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.footer.links.harassment}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">{t.footer.operated}</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} HelloNanny+. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
