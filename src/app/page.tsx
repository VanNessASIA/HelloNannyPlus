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
  Handshake,
  ArrowRight,
} from "lucide-react";

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

  const stepIcons = [
    <UserPlus key="s1" className="w-10 h-10 text-brand-yellow" />,
    <Search key="s2" className="w-10 h-10 text-brand-yellow" />,
    <Handshake key="s3" className="w-10 h-10 text-brand-yellow" />,
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

      {/* HERO */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-brand-yellow/10 via-white to-brand-yellow/5 overflow-hidden">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-black leading-tight mb-6">
              {t.hero.title1}
              <span className="text-brand-yellow block sm:inline"> {t.hero.titleHighlight} </span>
              {t.hero.title2}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">{t.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="https://app.hellonanny-san.com/signup_user" className="btn-primary text-lg">
                {t.hero.cta}<ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto">
              {[
                { value: t.hero.stat1Value, label: t.hero.stat1Label },
                { value: t.hero.stat2Value, label: t.hero.stat2Label },
                { value: t.hero.stat3Value, label: t.hero.stat3Label },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-brand-black">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
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

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-16 md:py-24 bg-brand-gray-50">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-brand-yellow-dark font-semibold text-sm uppercase tracking-wider mb-3">{t.howItWorks.sectionTag}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-black">{t.howItWorks.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {(["step1", "step2", "step3"] as const).map((stepKey, i) => (
              <div key={stepKey} className="relative text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-brand-yellow/20">
                  {stepIcons[i]}
                </div>
                <span className="inline-block bg-brand-yellow text-brand-black text-sm font-bold px-3 py-1 rounded-full mb-3">{i + 1}</span>
                <h3 className="font-bold text-xl text-brand-black mb-2">{t.howItWorks[stepKey].title}</h3>
                <p className="text-gray-500">{t.howItWorks[stepKey].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
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
      <section id="reviews" className="py-16 md:py-24 bg-brand-gray-50">
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
                  <div className="w-10 h-10 bg-brand-yellow/20 rounded-full flex items-center justify-center font-bold text-brand-yellow-dark">{review.name.charAt(0)}</div>
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
