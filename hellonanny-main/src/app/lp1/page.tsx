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
    tag: "バケーション向け",
    name: "ショートタームプラン",
    nameEn: "Short-term (Vacation Plan)",
    price: "4,000",
    unit: "THB",
    period: "5〜14日間",
    popular: false,
    color: "border-gray-200",
    features: [
      "候補者1名のご紹介",
      "事前ヒアリング",
      "コミュニケーションサポート",
      "短期・旅行中のサポートに最適",
    ],
  },
  {
    id: "parttime",
    tag: "お試しに",
    name: "パートタイムプラン",
    nameEn: "Part-time",
    price: "6,000",
    unit: "THB",
    period: "週30時間未満",
    popular: false,
    color: "border-gray-200",
    features: [
      "候補者2名までご紹介",
      "事前ヒアリング",
      "コミュニケーションサポート",
      "週数回のサポートに最適",
    ],
  },
  {
    id: "fulltime",
    tag: "人気No.1",
    name: "フルタイムプラン",
    nameEn: "Full-time",
    price: "7,800",
    unit: "THB",
    period: "週30時間以上",
    popular: true,
    color: "border-brand-yellow",
    features: [
      "候補者3名まで（2ヶ月以内）",
      "事前ヒアリング",
      "コミュニケーションサポート",
      "毎日のサポートに最適",
      "フォローアップサポート付き",
    ],
  },
];

const REASONS = [
  {
    icon: Users,
    title: "2,000名以上の登録スタッフ",
    desc: "豊富なネットワークから、ご家族のニーズに合った最適な候補者をご紹介します。",
  },
  {
    icon: Shield,
    title: "全員身元確認済み",
    desc: "登録スタッフは全員、弊社チームによる面接と身元確認を受けています。安心してお任せください。",
  },
  {
    icon: Clock,
    title: "最短即日マッチング",
    desc: "リクエスト受領後24時間以内の候補者ご紹介を目指しています。お急ぎの方も安心です。",
  },
  {
    icon: MessageCircle,
    title: "4言語完全対応",
    desc: "日本語・英語・中国語・タイ語に対応。言語の壁なく、スムーズにコミュニケーションできます。",
  },
  {
    icon: Heart,
    title: "マッチング後払い",
    desc: "採用が決まるまで一切費用はかかりません。気に入った候補者が見つかってからのお支払いです。",
  },
];

const STEPS = [
  {
    num: "01",
    title: "無料相談・リクエスト送信",
    desc: "LINEまたはフォームから、ご希望のサービス、スケジュール、ご予算をお知らせください。",
    icon: MessageCircle,
  },
  {
    num: "02",
    title: "候補者のご紹介・面接",
    desc: "厳選された候補者をご紹介。ビデオ面接で直接確認できるので、ご自宅からでも安心です。",
    icon: Users,
  },
  {
    num: "03",
    title: "採用決定後にお支払い",
    desc: "気に入った方が見つかってからのお支払い。採用前に費用は一切かかりません。",
    icon: Heart,
  },
];

const REVIEWS = [
  {
    text: "Hello Nannyのおかげで1週間以内に素晴らしいナニーが見つかりました。プロセスがとてもスムーズで、スタッフのサポートも丁寧でした。",
    name: "Emily R.",
    family: "シンガポール人家族",
    avatar: "/images/avatars/emily.svg",
    rating: 5,
  },
  {
    text: "バンコクで日本語を話せるナニーを見つけられるか不安でしたが、Hello Nannyが実現してくれました！本当に助かっています。",
    name: "Yuki T.",
    family: "日本人家族",
    avatar: "/images/avatars/yuki.svg",
    rating: 5,
  },
  {
    text: "ビデオ面接が便利でした。決める前に候補者と直接話せて、安心して採用できました。とてもプロフェッショナルなサービスです。",
    name: "Pierre D.",
    family: "フランス人家族",
    avatar: "/images/avatars/pierre.svg",
    rating: 5,
  },
  {
    text: "手頃な料金で信頼できるサービスです。Hello Nannyでメイドを見つけ、もう1年以上一緒に生活しています。",
    name: "Wei L.",
    family: "中国人家族",
    avatar: "/images/avatars/wei.svg",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "相談は本当に無料ですか？",
    a: "はい、完全無料です。採用が決まった時点でのみ、マッチング費用（プランに応じた金額）をいただきます。",
  },
  {
    q: "どのくらいで候補者を紹介してもらえますか？",
    a: "通常、リクエスト受領後24時間以内に候補者をご紹介しています。最短で即日のご紹介も可能です。",
  },
  {
    q: "日本語で対応してもらえますか？",
    a: "はい、日本語スタッフが対応いたします。また日本語を話せるナニー・メイドのご紹介も可能です。",
  },
  {
    q: "候補者が合わなかった場合はどうなりますか？",
    a: "プランに応じた人数（1〜3名）の候補者をご紹介しています。合わない場合は次の候補者をご提案します。",
  },
  {
    q: "バンコク以外でも利用できますか？",
    a: "現在はバンコクを中心にサービスを提供しています。エリア外の場合はお問い合わせください。",
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
              LINE相談
            </a>
            <Link
              href="/ja/contact"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#FFC107] text-[#1A1A1A] text-sm font-bold rounded-full hover:bg-[#E5AC00] transition-colors"
            >
              無料相談
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="/images/mom-baby-park.jpg"
          alt="バンコクで子育てする家族"
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
              バンコクNo.1 ナニー・メイド紹介サービス
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              信頼できる
              <br />
              <span className="text-[#FFC107]">ナニー・メイド</span>を
              <br />
              最短即日マッチング
            </h1>

            <p className="text-white/90 text-lg md:text-xl mb-4 leading-relaxed">
              バンコク在住のご家族をサポート。
              <br />
              全員身元確認済み・日本語対応・<strong className="text-white">採用後のみお支払い</strong>。
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["2,000名以上の登録スタッフ", "全員身元確認済み", "前払い不要"].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/30"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC107]" />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/ja/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFC107] text-[#1A1A1A] text-base font-extrabold rounded-full hover:bg-[#E5AC00] transition-all hover:-translate-y-0.5 shadow-lg"
              >
                無料でリクエストを送る
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="https://lin.ee/hellonanny"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white text-base font-bold rounded-full hover:bg-[#05b34c] transition-all hover:-translate-y-0.5 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                LINEで相談する
              </a>
            </div>
            <p className="text-white/60 text-sm mt-3">
              ※ 採用が決まるまで費用は一切かかりません
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
              こんなお悩みはありませんか？
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A]">
              バンコクでの育児・家事、一人で抱え込んでいませんか？
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "信頼できるナニーをどこで探せばいいかわからない",
              "タイ語でのやりとりに不安がある",
              "面接や採用手続きが大変そうで踏み出せない",
              "子どもと相性の良いナニーを見つけられるか心配",
              "バケーション中だけ短期でサポートしてほしい",
              "毎日の家事が追いつかず疲弊している",
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
              そのお悩み、<span className="text-[#E5AC00]">Hello Nanny</span>が解決します。
            </p>
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="py-12 bg-[#FFC107]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { num: "2,000+", label: "登録スタッフ数", icon: Users },
              { num: "500+", label: "サポートしたご家族", icon: Heart },
              { num: "100%", label: "身元確認済み", icon: Shield },
              { num: "24h", label: "最短マッチング", icon: Clock },
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
              選ばれる理由
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4">
              Hello Nannyが
              <br className="sm:hidden" />
              バンコクNO.1の理由
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              2020年のサービス開始以来、500以上のご家族から信頼をいただいています。
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
              ご利用の流れ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
              かんたん3ステップ
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line - desktop only */}
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
              href="/ja/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#FFC107] text-[#1A1A1A] font-extrabold text-lg rounded-full hover:bg-[#E5AC00] transition-all hover:-translate-y-0.5 shadow-lg"
            >
              今すぐ無料相談する
              <ChevronRight className="w-5 h-5" />
            </Link>
            <p className="text-gray-400 text-sm mt-3">前払い不要・採用後のみお支払い</p>
          </div>
        </div>
      </section>

      {/* ===== SERVICE IMAGE ===== */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">
                サービス内容
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6">
                ナニー・メイド・
                <br />
                どちらもお任せください
              </h2>
              <ul className="space-y-4">
                {[
                  { title: "住み込みナニー (Live-in)", desc: "24時間サポート。子育て中の家族に最適" },
                  { title: "通いナニー (Live-out)", desc: "指定時間のみのサポート。柔軟なスケジュール" },
                  { title: "メイド・家政婦", desc: "掃除・洗濯・料理など家事全般をサポート" },
                  { title: "短期・バケーション向け", desc: "旅行中・帰省中のスポットサポートにも対応" },
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
                <Image src="/images/nanny-playing-baby.jpg" alt="ナニーと赤ちゃん" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52 mt-8">
                <Image src="/images/cleaner-making-bed.jpg" alt="メイドによる家事" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52 -mt-8">
                <Image src="/images/baby-crawling.jpg" alt="赤ちゃんとケア" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52">
                <Image src="/images/happy-family.jpg" alt="幸せな家族" fill className="object-cover" />
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
              料金プラン
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4">
              シンプルな料金体系
            </h2>
            <p className="text-gray-600 text-lg">
              追加費用なし。採用が決まってからのお支払いです。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl border-2 ${plan.color} p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${plan.popular ? "ring-2 ring-[#FFC107]" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#FFC107] text-[#1A1A1A] px-4 py-1.5 rounded-full text-sm font-extrabold whitespace-nowrap shadow">
                      ★ 人気No.1
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
                  <span className="text-gray-500 text-sm ml-1">一括払い</span>
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
                  href="/ja/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all ${
                    plan.popular
                      ? "bg-[#FFC107] text-[#1A1A1A] hover:bg-[#E5AC00]"
                      : "bg-gray-100 text-[#1A1A1A] hover:bg-gray-200"
                  }`}
                >
                  このプランで相談する
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            ※ すべてのプランに事前ヒアリング・コミュニケーションサポートが含まれます
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">
              お客様の声
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
              ご利用いただいたご家族から
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

      {/* ===== FAQ ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#FFC107]/20 text-[#E5AC00] text-sm font-semibold rounded-full mb-4">
              よくある質問
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
              FAQ
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
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
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
            理想のヘルパーを
            <br />
            見つけましょう
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            バンコクの多くのご家族がHello Nannyを信頼しています。
            <br />
            まずは無料でご相談ください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ja/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FFC107] text-[#1A1A1A] text-lg font-extrabold rounded-full hover:bg-[#E5AC00] transition-all hover:-translate-y-0.5 shadow-xl"
            >
              無料でリクエストを送る
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="https://lin.ee/hellonanny"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#06C755] text-white text-lg font-bold rounded-full hover:bg-[#05b34c] transition-all hover:-translate-y-0.5 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              LINEで相談する
            </a>
          </div>
          <p className="text-white/40 text-sm mt-4">
            前払い不要 · 採用が決まってからのお支払い
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
            プライバシーポリシー
          </Link>
          <span className="mx-2 text-gray-700">·</span>
          <Link href="/ja/faq" className="hover:text-gray-300 transition-colors">
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
        aria-label="LINE相談"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
