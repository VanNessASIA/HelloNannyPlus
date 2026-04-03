export type Locale = "en" | "ja" | "zh" | "th";

export const locales: Locale[] = ["en", "ja", "zh", "th"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
  zh: "中文",
  th: "ไทย",
};

const translations = {
  en: {
    nav: {
      about: "About Hello Nanny",
      process: "Our Simple Processes",
      workWithUs: "Work With Us",
      aboutUs: "About us",
      faq: "FAQ",
      recruit: "Recruit",
      blog: "Blog",
      request: "Request",
    },
    hero: {
      welcome: "Welcome to",
      title: "Hello Nanny",
      subtitle: "in Thailand",
      description:
        "Bangkok's No.1 fastest nanny & maid matching service. Find your perfect helper with our simple 3-step process.",
      cta: "Send a Request",
    },
    stats: {
      title: "Over 2,000 Nannies Registered!",
      subtitle:
        "We have a large pool of qualified nannies and maids ready to help your family.",
    },
    whatIs: {
      sectionTag: "About Our Service",
      title: "What is Hello Nanny?",
      description:
        "Hello Nanny is a nanny and maid matching service in Bangkok, Thailand. We help foreign and Thai families find trusted helpers quickly and affordably.",
      concerns: {
        title: "Do you have these concerns?",
        items: [
          "Hard to find a reliable nanny or maid in Bangkok",
          "Language barrier makes it difficult to communicate",
          "Worried about safety and background of helpers",
          "Agency fees are too expensive",
          "Need someone who understands your culture",
        ],
      },
      solution:
        "Hello Nanny solves all these problems. We carefully screen all candidates, support multiple languages, and offer affordable matching fees.",
    },
    steps: {
      sectionTag: "Simple Process",
      title: "Get Started in 3 Steps",
      step1: {
        title: "Submit Your Request",
        desc: "Tell us what kind of help you need — nanny, maid, or both. Share your preferences and schedule.",
      },
      step2: {
        title: "Online Interview",
        desc: "We'll match you with suitable candidates. Interview them via video call from the comfort of your home.",
      },
      step3: {
        title: "Pay After Matching",
        desc: "Only pay the matching fee after you've found your perfect helper. No upfront costs.",
      },
    },
    pricing: {
      sectionTag: "Transparent Pricing",
      title: "System Usage Fee",
      subtitle: "Simple, affordable matching fees. Pay only when you find the right match.",
      plans: [
        {
          name: "Part Time",
          price: "6,000",
          currency: "฿",
          period: "one-time",
          features: [
            "Pre-Request Hearing",
            "Communication service",
            "You can choose up to 2 times",
          ],
          note: "Weekly working hours less than 30 hours",
        },
        {
          name: "Full Time",
          price: "7,800",
          currency: "฿",
          period: "one-time",
          popular: true,
          features: [
            "Pre-Request Hearing",
            "Communication service",
            "You can choose up to 3 times",
          ],
          note: "Within 2 months",
        },
        {
          name: "Short Time",
          price: "4,000",
          currency: "฿",
          period: "one-time",
          features: [
            "Pre-Request Hearing",
            "Communication service",
            "You can choose up to 1 time",
          ],
          note: "From 5 to 14 days",
        },
      ],
    },
    airtable: {
      sectionTag: "Meet Our Nannies",
      title: "Browse Registered Nannies",
      subtitle:
        "Explore profiles of our registered nannies and maids. Find the perfect match for your family.",
      placeholder: "Nanny profiles will be displayed here.",
    },
    contact: {
      sectionTag: "Get In Touch",
      title: "How to Contact Us",
      subtitle: "Reach out to us through LINE or WhatsApp. We respond quickly!",
      lineLabel: "Add us on LINE",
      whatsappLabel: "Chat on WhatsApp",
      orText: "or",
    },
    reviews: {
      sectionTag: "Trusted by Families",
      title: "Our Customer Voice",
      items: [
        {
          text: "Hello Nanny helped us find an amazing nanny within a week. The process was so smooth and the staff was very supportive.",
          name: "Emily R.",
          family: "Singapore Family",
          rating: 5,
        },
        {
          text: "We were worried about finding a Japanese-speaking nanny in Bangkok. Hello Nanny made it happen! Our nanny is wonderful.",
          name: "Yuki T.",
          family: "Japanese Family",
          rating: 5,
        },
        {
          text: "The video interview feature was great. We could meet candidates before committing. Very professional service.",
          name: "Pierre D.",
          family: "French Family",
          rating: 5,
        },
        {
          text: "Affordable and reliable. We found our maid through Hello Nanny and she's been with us for over a year now.",
          name: "Wei L.",
          family: "Chinese Family",
          rating: 5,
        },
        {
          text: "The team speaks multiple languages which made the whole process easy. Highly recommend!",
          name: "Carlos M.",
          family: "Spanish Family",
          rating: 4,
        },
        {
          text: "Quick matching and great follow-up support. Found our perfect nanny in just 3 days.",
          name: "Somchai P.",
          family: "Thai Family",
          rating: 5,
        },
      ],
    },
    cta: {
      title: "Ready to Find Your Perfect Helper?",
      subtitle:
        "Join hundreds of families in Bangkok who trust Hello Nanny. Start today!",
      button: "Send a Request",
      contactButton: "Contact Us",
      note: "No upfront payment required. Pay only after matching.",
    },
    closing: {
      tagline: "Nanny's power will enrich your life.",
    },
    footer: {
      description:
        "Bangkok's No.1 nanny and maid matching service. Connecting families with trusted helpers since 2020.",
      company: "Company",
      service: "Service",
      legal: "Legal",
      links: {
        about: "About Us",
        faq: "FAQ",
        blog: "Blog",
        recruit: "Recruit",
        contact: "Contact",
        terms: "Service Agreement",
        privacy: "Privacy Policy",
        harassment: "Client Guidelines",
      },
      companyName: "VANNESS ASIA CO., LTD.",
      address:
        "689 Bhiraj Tower at EmQuartier, 15th Floor, Unit 1501, Sukhumvit Road, North Klongton, Vadhana, Bangkok 10110",
      hours: "Mon-Fri: 9:00-18:00 / Sat-Sun: By Appointment",
      operated: "Operated by VANNESS ASIA CO., LTD.",
      rights: "All rights reserved.",
    },
    // Subpage content
    aboutPage: {
      title: "About Us",
      subtitle: "Learn more about Hello Nanny and our mission.",
      companyName: "VANNESS ASIA CO., LTD.",
      mission:
        "Our mission is to connect families in Bangkok with trusted, reliable nannies and maids. We believe every family deserves quality childcare and household support.",
      vision:
        "To be the most trusted nanny and maid matching platform in Southeast Asia.",
      values: [
        { title: "Trust & Safety", desc: "We carefully screen every candidate to ensure your family's safety." },
        { title: "Speed", desc: "Our efficient matching process gets you connected with the right helper fast." },
        { title: "Affordability", desc: "No hidden fees. Transparent, one-time matching fees that anyone can afford." },
        { title: "Multilingual", desc: "Our team and many of our nannies speak multiple languages." },
      ],
    },
    servicePage: {
      title: "What is Hello Nanny?",
      subtitle: "Your trusted nanny & maid matching service in Bangkok.",
      sections: [
        {
          title: "Find the Perfect Helper",
          desc: "Whether you need a full-time nanny, part-time maid, or temporary babysitter, we have the right match for you.",
        },
        {
          title: "Multilingual Support",
          desc: "Our nannies speak English, Japanese, Thai, Chinese, and more. We bridge the language gap for international families.",
        },
        {
          title: "Thoroughly Screened",
          desc: "Every candidate goes through ID verification and an interview process. Background-checked candidates are specially marked.",
        },
      ],
    },
    processPage: {
      title: "Our Simple Processes",
      subtitle: "Getting started is easy. Just follow these 3 simple steps.",
    },
    faqPage: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about our service.",
      items: [
        { q: "What is the approximate salary?", a: "Salary depends largely on the job seeker's experience and previous employment status. Those who commute will be paid more than those who live on-site (as they will have to pay for their own food and transportation costs)." },
        { q: "Why Hello Nanny?", a: "There are many housekeeper services in Bangkok, but there are only a few that can ensure Japanese quality, overcome the language barrier, and smoothly start business partnerships. We have helped many people in the past and are committed to providing reliable and trustworthy hospitality to our clients." },
        { q: "What kind of people do you hire?", a: "At Hello Nanny, all job seekers are directly interviewed online. We select only experienced and highly motivated people through our screening process and reference checks." },
        { q: "What if the match doesn't work out?", a: "Hello Nanny offers a change of nanny service after hiring, depending on the plan you have chosen. If you wish to make any changes, please feel free to contact us. We also recommend that you prepare a written contract to reduce miscommunication issues." },
        { q: "Do I need a contract?", a: "We have sample contracts available, so please feel free to use them if you need them. If you have any items you would like to add other than those shown in the sample, please add them." },
        { q: "What about overtime work?", a: "Normally in Thailand it is 100 baht/hour, but it is recommended that the person be tipped according to his/her salary." },
        { q: "What about public holidays in Thailand?", a: "Most nannies or maids basically follow the Thai calendar for holidays. However, please discuss details with the person you hire." },
        { q: "About criminal check?", a: "If you need the criminal-check for the candidates, we can arrange it for 1,000 baht per person." },
        { q: "What about theft?", a: "When hiring, be sure to record a copy of the nanny's ID or passport, contact information, and home address. Keep valuables, brand name items, and money in a locked cupboard or safe. It is important to observe habits such as not lending or borrowing things, not handing over keys, and not leaving money or goods where they can be seen." },
        { q: "How can we get nannies to work longer?", a: "Three points are important: 1) Pay a reasonable salary considering commute/live-in costs. 2) Don't set overly strict rules — provide guidance gradually and create a comfortable working environment. 3) Be sure to praise them — finding good points and praising them motivates them to stay longer." },
      ],
    },
    contactPage: {
      title: "Contact Us",
      subtitle: "Have questions? Reach out to us through your preferred channel.",
      formTitle: "Send Us a Request",
      formPlaceholder: "Contact form will be embedded here.",
    },
    registerPage: {
      title: "Work With Us",
      subtitle:
        "Are you a nanny or maid looking for work? Join our growing community of helpers in Bangkok.",
      benefits: [
        "Get matched with families quickly",
        "Flexible working arrangements",
        "Fair compensation",
        "Supportive community",
      ],
      contactTitle: "Register via:",
    },
    recruitPage: {
      title: "Join Our Team",
      subtitle:
        "We're looking for passionate people to join VANNESS ASIA. Help us connect families with great helpers.",
    },
  },
  ja: {
    nav: {
      about: "Hello Nannyとは？",
      process: "ご利用の流れ",
      workWithUs: "お仕事探し",
      aboutUs: "会社概要",
      faq: "よくある質問",
      recruit: "採用情報",
      blog: "ブログ",
      request: "リクエスト",
    },
    hero: {
      welcome: "ようこそ",
      title: "Hello Nanny",
      subtitle: "in Thailand",
      description:
        "バンコクNo.1のナニー・メイドマッチングサービス。簡単3ステップで理想のヘルパーが見つかります。",
      cta: "リクエストを送る",
    },
    stats: {
      title: "2,000人以上のナニーが登録中！",
      subtitle:
        "ご家族のお手伝いをする準備ができた、資格を持つナニーとメイドが多数在籍しています。",
    },
    whatIs: {
      sectionTag: "サービスについて",
      title: "Hello Nannyとは？",
      description:
        "Hello Nannyはバンコクのナニー・メイドマッチングサービスです。外国人・タイ人ファミリーが信頼できるヘルパーを迅速かつ手頃な価格で見つけるお手伝いをします。",
      concerns: {
        title: "こんなお悩みありませんか？",
        items: [
          "バンコクで信頼できるナニーやメイドが見つからない",
          "言葉の壁でコミュニケーションが難しい",
          "ヘルパーの安全性や経歴が心配",
          "エージェンシーの手数料が高すぎる",
          "自分の文化を理解してくれる人が必要",
        ],
      },
      solution:
        "Hello Nannyがこれらの悩みをすべて解決します。候補者を丁寧にスクリーニングし、多言語サポートを提供し、手頃なマッチング料金でサービスを提供しています。",
    },
    steps: {
      sectionTag: "簡単3ステップ",
      title: "3ステップで始めましょう",
      step1: {
        title: "リクエストを送信",
        desc: "必要なヘルプの種類（ナニー、メイド、または両方）をお知らせください。ご希望やスケジュールを共有してください。",
      },
      step2: {
        title: "オンライン面接",
        desc: "適切な候補者をマッチングします。ご自宅からビデオ通話で面接できます。",
      },
      step3: {
        title: "マッチング後にお支払い",
        desc: "理想のヘルパーが見つかってからマッチング料金をお支払い。前払い不要です。",
      },
    },
    pricing: {
      sectionTag: "わかりやすい料金",
      title: "システム利用料金",
      subtitle: "シンプルで手頃なマッチング料金。マッチング成立後のみお支払い。",
      plans: [
        {
          name: "パートタイム",
          price: "6,000",
          currency: "฿",
          period: "1回",
          features: [
            "事前ヒアリング",
            "コミュニケーションサービス",
            "最大2回まで選択可能",
          ],
          note: "週30時間未満の勤務",
        },
        {
          name: "フルタイム",
          price: "7,800",
          currency: "฿",
          period: "1回",
          popular: true,
          features: [
            "事前ヒアリング",
            "コミュニケーションサービス",
            "最大3回まで選択可能",
          ],
          note: "2ヶ月以内",
        },
        {
          name: "ショートタイム",
          price: "4,000",
          currency: "฿",
          period: "1回",
          features: [
            "事前ヒアリング",
            "コミュニケーションサービス",
            "最大1回まで選択可能",
          ],
          note: "5〜14日間",
        },
      ],
    },
    airtable: {
      sectionTag: "ナニー紹介",
      title: "登録ナニーを見てみよう",
      subtitle:
        "登録済みのナニー・メイドのプロフィールをご覧いただけます。ご家族にぴったりの方を見つけてください。",
      placeholder: "ナニーのプロフィールがここに表示されます。",
    },
    contact: {
      sectionTag: "お問い合わせ",
      title: "お問い合わせ方法",
      subtitle: "LINEまたはWhatsAppからお気軽にご連絡ください。迅速に対応いたします！",
      lineLabel: "LINEで友達追加",
      whatsappLabel: "WhatsAppでチャット",
      orText: "または",
    },
    reviews: {
      sectionTag: "ご利用者の声",
      title: "お客様の声",
      items: [
        {
          text: "Hello Nannyのおかげで1週間以内に素晴らしいナニーが見つかりました。プロセスがとてもスムーズで、スタッフのサポートも素晴らしかったです。",
          name: "Emily R.",
          family: "シンガポール家族",
          rating: 5,
        },
        {
          text: "バンコクで日本語が話せるナニーを見つけるのは心配でしたが、Hello Nannyが実現してくれました！素敵なナニーです。",
          name: "Yuki T.",
          family: "日本人家族",
          rating: 5,
        },
        {
          text: "ビデオ面接機能が素晴らしかったです。決める前に候補者と会うことができました。とてもプロフェッショナルなサービスです。",
          name: "Pierre D.",
          family: "フランス人家族",
          rating: 5,
        },
        {
          text: "手頃で信頼できるサービスです。Hello Nannyでメイドを見つけ、もう1年以上一緒に暮らしています。",
          name: "Wei L.",
          family: "中国人家族",
          rating: 5,
        },
        {
          text: "チームが多言語を話すので、プロセス全体がスムーズでした。強くお勧めします！",
          name: "Carlos M.",
          family: "スペイン人家族",
          rating: 4,
        },
        {
          text: "マッチングが速く、フォローアップサポートも充実。たった3日で理想のナニーが見つかりました。",
          name: "Somchai P.",
          family: "タイ人家族",
          rating: 5,
        },
      ],
    },
    cta: {
      title: "理想のヘルパーを見つけませんか？",
      subtitle:
        "バンコクの多くのご家族がHello Nannyを信頼しています。今すぐ始めましょう！",
      button: "リクエストを送る",
      contactButton: "お問い合わせ",
      note: "前払い不要。マッチング成立後のお支払いです。",
    },
    closing: {
      tagline: "ナニーの力が、あなたの生活を豊かにする。",
    },
    footer: {
      description:
        "バンコクNo.1のナニー・メイドマッチングサービス。2020年から多くのご家族と信頼できるヘルパーを繋いでいます。",
      company: "会社情報",
      service: "サービス",
      legal: "法的情報",
      links: {
        about: "会社概要",
        faq: "よくある質問",
        blog: "ブログ",
        recruit: "採用情報",
        contact: "お問い合わせ",
        terms: "利用規約",
        privacy: "プライバシーポリシー",
        harassment: "カスハラポリシー",
      },
      companyName: "VANNESS ASIA CO., LTD.",
      address:
        "689 Bhiraj Tower at EmQuartier, 15th Floor, Unit 1501, Sukhumvit Road, North Klongton, Vadhana, Bangkok 10110",
      hours: "月〜金: 9:00-18:00 / 土日: 予約制",
      operated: "運営: VANNESS ASIA CO., LTD.",
      rights: "All rights reserved.",
    },
    aboutPage: {
      title: "会社概要",
      subtitle: "Hello Nannyと私たちのミッションについて。",
      companyName: "VANNESS ASIA CO., LTD.",
      mission:
        "バンコクのご家族と信頼できるナニー・メイドを繋ぐこと。すべてのご家族が質の高いチャイルドケアと家事サポートを受けられるべきだと信じています。",
      vision:
        "東南アジアで最も信頼されるナニー・メイドマッチングプラットフォームになること。",
      values: [
        { title: "信頼と安全", desc: "すべての候補者を丁寧にスクリーニングし、ご家族の安全を確保します。" },
        { title: "スピード", desc: "効率的なマッチングプロセスで、迅速に理想のヘルパーと出会えます。" },
        { title: "手頃な価格", desc: "隠れた費用はありません。誰もが利用できる透明な1回限りのマッチング料金です。" },
        { title: "多言語対応", desc: "チームとナニーの多くが複数の言語を話します。" },
      ],
    },
    servicePage: {
      title: "Hello Nannyとは？",
      subtitle: "バンコクで信頼されるナニー・メイドマッチングサービス。",
      sections: [
        {
          title: "最適なヘルパーを見つける",
          desc: "フルタイムナニー、パートタイムメイド、一時的なベビーシッターなど、あなたにぴったりのマッチをご提供します。",
        },
        {
          title: "多言語サポート",
          desc: "ナニーは英語、日本語、タイ語、中国語などを話します。国際的なご家族の言葉の壁を解消します。",
        },
        {
          title: "徹底的なスクリーニング",
          desc: "すべての候補者がID確認と面接プロセスを経ています。バックグラウンドチェック済みの候補者は特別なマークで表示されます。",
        },
      ],
    },
    processPage: {
      title: "ご利用の流れ",
      subtitle: "始めるのは簡単です。この3つのステップに従うだけ。",
    },
    faqPage: {
      title: "よくある質問",
      subtitle: "サービスに関するよくあるご質問と回答。",
      items: [
        { q: "マッチングにどのくらい時間がかかりますか？", a: "ほとんどのご家族が3〜7日で適切なマッチを見つけています。最短24時間で見つかるケースもあります。" },
        { q: "ナニーはどの言語を話しますか？", a: "タイ語、英語、日本語、中国語など様々な言語を話すナニーがいます。言語能力でフィルタリングできます。" },
        { q: "トライアル期間はありますか？", a: "はい、ご家族とナニーの相性を確認するためにトライアル期間をお勧めしています。期間は双方で合意の上決定できます。" },
        { q: "マッチングがうまくいかない場合は？", a: "交換サポートを提供しています。保証期間内にヘルパーが合わない場合、新しいマッチを見つけるお手伝いをします。" },
        { q: "費用はいくらですか？", a: "マッチング料金はショートタイム฿4,000〜、パートタイム฿6,000、フルタイム฿7,800です。マッチング成立後の1回限りの料金です。" },
        { q: "バンコク以外でも利用できますか？", a: "現在はバンコクとその周辺エリアに特化しています。将来的にタイの他の都市への展開を計画しています。" },
        { q: "決める前に候補者と面接できますか？", a: "もちろんです！ご自宅からオンラインビデオ面接で候補者と会えるよう手配いたします。" },
        { q: "どのような支払い方法がありますか？", a: "銀行振込、クレジットカード、各種デジタル決済に対応しています。" },
      ],
    },
    contactPage: {
      title: "お問い合わせ",
      subtitle: "ご質問がありましたら、お好みの方法でお気軽にご連絡ください。",
      formTitle: "リクエストを送る",
      formPlaceholder: "お問い合わせフォームがここに埋め込まれます。",
    },
    registerPage: {
      title: "お仕事をお探しの方へ",
      subtitle:
        "ナニーやメイドとしてお仕事をお探しですか？バンコクで成長中のヘルパーコミュニティにご参加ください。",
      benefits: [
        "迅速にご家族とマッチング",
        "柔軟な勤務形態",
        "公正な報酬",
        "サポート体制の充実したコミュニティ",
      ],
      contactTitle: "登録方法:",
    },
    recruitPage: {
      title: "採用情報",
      subtitle:
        "VANNESS ASIAの一員として、ご家族と素晴らしいヘルパーを繋ぐお手伝いをしませんか？",
    },
  },
  zh: {
    nav: {
      about: "关于Hello Nanny",
      process: "简单流程",
      workWithUs: "加入我们",
      aboutUs: "关于我们",
      faq: "常见问题",
      recruit: "招聘",
      blog: "博客",
      request: "提交请求",
    },
    hero: {
      welcome: "欢迎来到",
      title: "Hello Nanny",
      subtitle: "in Thailand",
      description:
        "曼谷第一的保姆和家政匹配服务。简单3步找到理想的帮手。",
      cta: "提交请求",
    },
    stats: {
      title: "已注册保姆超过2,000人！",
      subtitle: "我们拥有大量合格的保姆和家政人员，随时准备帮助您的家庭。",
    },
    whatIs: {
      sectionTag: "关于服务",
      title: "什么是Hello Nanny？",
      description:
        "Hello Nanny是曼谷的保姆和家政匹配服务。我们帮助外国和泰国家庭快速、实惠地找到值得信赖的帮手。",
      concerns: {
        title: "您是否有这些困扰？",
        items: [
          "在曼谷很难找到可靠的保姆或家政",
          "语言障碍使沟通困难",
          "担心帮手的安全性和背景",
          "中介费用太贵",
          "需要了解你文化的人",
        ],
      },
      solution:
        "Hello Nanny解决所有这些问题。我们仔细筛选所有候选人，提供多语言支持，并以实惠的匹配费用提供服务。",
    },
    steps: {
      sectionTag: "简单流程",
      title: "3步开始",
      step1: {
        title: "提交请求",
        desc: "告诉我们您需要什么帮助——保姆、家政或两者都需要。分享您的偏好和日程。",
      },
      step2: {
        title: "在线面试",
        desc: "我们会为您匹配合适的候选人。在家中通过视频通话进行面试。",
      },
      step3: {
        title: "匹配后付款",
        desc: "找到理想帮手后才需支付匹配费用。无需预付。",
      },
    },
    pricing: {
      sectionTag: "透明定价",
      title: "系统使用费",
      subtitle: "简单、实惠的匹配费用。仅在找到合适匹配后付款。",
      plans: [
        {
          name: "兼职",
          price: "6,000",
          currency: "฿",
          period: "一次性",
          features: ["预约咨询", "沟通服务", "最多可选择2次"],
          note: "每周工作时间少于30小时",
        },
        {
          name: "全职",
          price: "7,800",
          currency: "฿",
          period: "一次性",
          popular: true,
          features: [
            "预约咨询",
            "沟通服务",
            "最多可选择3次",
          ],
          note: "2个月内",
        },
        {
          name: "短期",
          price: "4,000",
          currency: "฿",
          period: "一次性",
          features: ["预约咨询", "沟通服务", "最多可选择1次"],
          note: "5至14天",
        },
      ],
    },
    airtable: {
      sectionTag: "认识我们的保姆",
      title: "浏览注册保姆",
      subtitle: "查看我们注册保姆和家政的资料。为您的家庭找到完美匹配。",
      placeholder: "保姆资料将在此显示。",
    },
    contact: {
      sectionTag: "联系我们",
      title: "联系方式",
      subtitle: "通过LINE或WhatsApp联系我们。我们会快速回复！",
      lineLabel: "添加LINE好友",
      whatsappLabel: "WhatsApp聊天",
      orText: "或",
    },
    reviews: {
      sectionTag: "家庭信赖",
      title: "客户评价",
      items: [
        {
          text: "Hello Nanny帮我们在一周内找到了一位很棒的保姆。过程非常顺畅，工作人员非常支持。",
          name: "Emily R.",
          family: "新加坡家庭",
          rating: 5,
        },
        {
          text: "我们担心在曼谷找到会说日语的保姆。Hello Nanny实现了！我们的保姆非常好。",
          name: "Yuki T.",
          family: "日本家庭",
          rating: 5,
        },
        {
          text: "视频面试功能很棒。我们可以在决定之前见到候选人。非常专业的服务。",
          name: "Pierre D.",
          family: "法国家庭",
          rating: 5,
        },
        {
          text: "实惠又可靠。我们通过Hello Nanny找到了家政，她已经和我们在一起超过一年了。",
          name: "Wei L.",
          family: "中国家庭",
          rating: 5,
        },
        {
          text: "团队会说多种语言，整个过程变得很轻松。强烈推荐！",
          name: "Carlos M.",
          family: "西班牙家庭",
          rating: 4,
        },
        {
          text: "匹配快速，后续支持很好。仅用3天就找到了完美的保姆。",
          name: "Somchai P.",
          family: "泰国家庭",
          rating: 5,
        },
      ],
    },
    cta: {
      title: "准备好找到理想的帮手了吗？",
      subtitle: "加入曼谷数百个信赖Hello Nanny的家庭。今天就开始！",
      button: "提交请求",
      contactButton: "联系我们",
      note: "无需预付。仅在匹配成功后付款。",
    },
    closing: {
      tagline: "保姆的力量，丰富您的生活。",
    },
    footer: {
      description: "曼谷第一的保姆和家政匹配服务。自2020年起连接家庭与值得信赖的帮手。",
      company: "公司",
      service: "服务",
      legal: "法律",
      links: {
        about: "关于我们",
        faq: "常见问题",
        blog: "博客",
        recruit: "招聘",
        contact: "联系方式",
        terms: "服务协议",
        privacy: "隐私政策",
        harassment: "反骚扰政策",
      },
      companyName: "VANNESS ASIA CO., LTD.",
      address:
        "689 Bhiraj Tower at EmQuartier, 15th Floor, Unit 1501, Sukhumvit Road, North Klongton, Vadhana, Bangkok 10110",
      hours: "周一至周五: 9:00-18:00 / 周六日: 预约制",
      operated: "运营方: VANNESS ASIA CO., LTD.",
      rights: "版权所有。",
    },
    aboutPage: {
      title: "关于我们",
      subtitle: "了解Hello Nanny和我们的使命。",
      companyName: "VANNESS ASIA CO., LTD.",
      mission: "我们的使命是将曼谷的家庭与值得信赖、可靠的保姆和家政连接起来。",
      vision: "成为东南亚最值得信赖的保姆和家政匹配平台。",
      values: [
        { title: "信任与安全", desc: "我们仔细筛选每位候选人，确保您家庭的安全。" },
        { title: "速度", desc: "高效的匹配流程让您快速找到合适的帮手。" },
        { title: "实惠", desc: "没有隐藏费用。透明的一次性匹配费用。" },
        { title: "多语言", desc: "我们的团队和许多保姆都会说多种语言。" },
      ],
    },
    servicePage: {
      title: "什么是Hello Nanny？",
      subtitle: "曼谷值得信赖的保姆和家政匹配服务。",
      sections: [
        { title: "找到完美帮手", desc: "无论您需要全职保姆、兼职家政还是临时保姆，我们都能为您找到合适的匹配。" },
        { title: "多语言支持", desc: "我们的保姆会说英语、日语、泰语、中文等。为国际家庭消除语言障碍。" },
        { title: "严格筛选", desc: "每位候选人都经过身份验证和面试。通过背景调查的候选人有特殊标记。" },
      ],
    },
    processPage: {
      title: "简单流程",
      subtitle: "开始很简单。只需遵循这3个步骤。",
    },
    faqPage: {
      title: "常见问题",
      subtitle: "查找有关服务的常见问题解答。",
      items: [
        { q: "找到匹配需要多长时间？", a: "大多数家庭在3-7天内找到合适的匹配。有些在短短24小时内就找到了。" },
        { q: "保姆会说什么语言？", a: "我们的保姆会说泰语、英语、日语、中文等多种语言。" },
        { q: "有试用期吗？", a: "是的，我们建议试用期以确保家庭和保姆都合适。" },
        { q: "如果匹配不成功怎么办？", a: "我们提供更换支持。在保证期内如果不合适，我们会帮您找到新的匹配。" },
        { q: "费用是多少？", a: "匹配费用：短期฿4,000起、兼职฿6,000、全职฿7,800。一次性费用。" },
        { q: "只在曼谷运营吗？", a: "目前专注于曼谷及周边地区。计划未来扩展到其他城市。" },
        { q: "可以在决定前面试候选人吗？", a: "当然可以！我们安排在线视频面试。" },
        { q: "接受哪些支付方式？", a: "接受银行转账、信用卡和各种电子支付。" },
      ],
    },
    contactPage: {
      title: "联系我们",
      subtitle: "有问题？通过您喜欢的方式联系我们。",
      formTitle: "提交请求",
      formPlaceholder: "联系表单将在此嵌入。",
    },
    registerPage: {
      title: "加入我们",
      subtitle: "您是正在找工作的保姆或家政吗？加入我们在曼谷不断壮大的帮手社区。",
      benefits: ["快速与家庭匹配", "灵活的工作安排", "公平的报酬", "支持性社区"],
      contactTitle: "注册方式:",
    },
    recruitPage: {
      title: "加入团队",
      subtitle: "我们正在寻找热情的人加入VANNESS ASIA。帮助我们连接家庭和帮手。",
    },
  },
  th: {
    nav: {
      about: "เกี่ยวกับ Hello Nanny",
      process: "ขั้นตอนง่ายๆ",
      workWithUs: "ร่วมงานกับเรา",
      aboutUs: "เกี่ยวกับเรา",
      faq: "คำถามที่พบบ่อย",
      recruit: "รับสมัครงาน",
      blog: "บล็อก",
      request: "ส่งคำขอ",
    },
    hero: {
      welcome: "ยินดีต้อนรับสู่",
      title: "Hello Nanny",
      subtitle: "in Thailand",
      description:
        "บริการจับคู่พี่เลี้ยงและแม่บ้านอันดับ 1 ในกรุงเทพฯ ค้นหาผู้ช่วยที่สมบูรณ์แบบด้วย 3 ขั้นตอนง่ายๆ",
      cta: "ส่งคำขอ",
    },
    stats: {
      title: "พี่เลี้ยงลงทะเบียนแล้วกว่า 2,000 คน!",
      subtitle: "เรามีพี่เลี้ยงและแม่บ้านที่ผ่านการคัดกรองพร้อมช่วยเหลือครอบครัวของคุณ",
    },
    whatIs: {
      sectionTag: "เกี่ยวกับบริการ",
      title: "Hello Nanny คืออะไร?",
      description:
        "Hello Nanny คือบริการจับคู่พี่เลี้ยงและแม่บ้านในกรุงเทพฯ เราช่วยครอบครัวชาวต่างชาติและชาวไทยหาผู้ช่วยที่ไว้ใจได้อย่างรวดเร็วและราคาไม่แพง",
      concerns: {
        title: "คุณมีความกังวลเหล่านี้ไหม?",
        items: [
          "หาพี่เลี้ยงหรือแม่บ้านที่ไว้ใจได้ในกรุงเทพฯ ยาก",
          "อุปสรรคทางภาษาทำให้สื่อสารลำบาก",
          "กังวลเรื่องความปลอดภัยและประวัติของผู้ช่วย",
          "ค่าธรรมเนียมเอเจนซี่แพงเกินไป",
          "ต้องการคนที่เข้าใจวัฒนธรรมของคุณ",
        ],
      },
      solution:
        "Hello Nanny แก้ปัญหาทั้งหมดนี้ เราคัดกรองผู้สมัครอย่างรอบคอบ สนับสนุนหลายภาษา และเสนอค่าจับคู่ที่เหมาะสม",
    },
    steps: {
      sectionTag: "ขั้นตอนง่ายๆ",
      title: "เริ่มต้นใน 3 ขั้นตอน",
      step1: {
        title: "ส่งคำขอของคุณ",
        desc: "บอกเราว่าคุณต้องการความช่วยเหลือแบบไหน — พี่เลี้ยง แม่บ้าน หรือทั้งสองอย่าง",
      },
      step2: {
        title: "สัมภาษณ์ออนไลน์",
        desc: "เราจะจับคู่ผู้สมัครที่เหมาะสม สัมภาษณ์ผ่านวิดีโอคอลจากบ้านของคุณ",
      },
      step3: {
        title: "จ่ายหลังจับคู่สำเร็จ",
        desc: "จ่ายค่าจับคู่เมื่อพบผู้ช่วยที่สมบูรณ์แบบแล้วเท่านั้น ไม่ต้องจ่ายล่วงหน้า",
      },
    },
    pricing: {
      sectionTag: "ราคาโปร่งใส",
      title: "ค่าธรรมเนียมการใช้ระบบ",
      subtitle: "ค่าจับคู่ที่เรียบง่ายและเหมาะสม จ่ายเมื่อจับคู่สำเร็จเท่านั้น",
      plans: [
        {
          name: "พาร์ทไทม์",
          price: "6,000",
          currency: "฿",
          period: "ครั้งเดียว",
          features: [
            "สอบถามความต้องการล่วงหน้า",
            "บริการสื่อสาร",
            "เลือกได้สูงสุด 2 ครั้ง",
          ],
          note: "ชั่วโมงทำงานต่อสัปดาห์น้อยกว่า 30 ชั่วโมง",
        },
        {
          name: "ฟูลไทม์",
          price: "7,800",
          currency: "฿",
          period: "ครั้งเดียว",
          popular: true,
          features: [
            "สอบถามความต้องการล่วงหน้า",
            "บริการสื่อสาร",
            "เลือกได้สูงสุด 3 ครั้ง",
          ],
          note: "ภายใน 2 เดือน",
        },
        {
          name: "ระยะสั้น",
          price: "4,000",
          currency: "฿",
          period: "ครั้งเดียว",
          features: [
            "สอบถามความต้องการล่วงหน้า",
            "บริการสื่อสาร",
            "เลือกได้สูงสุด 1 ครั้ง",
          ],
          note: "5 ถึง 14 วัน",
        },
      ],
    },
    airtable: {
      sectionTag: "พบพี่เลี้ยงของเรา",
      title: "ดูพี่เลี้ยงที่ลงทะเบียน",
      subtitle: "ดูโปรไฟล์พี่เลี้ยงและแม่บ้านที่ลงทะเบียน หาคนที่เหมาะกับครอบครัวคุณ",
      placeholder: "โปรไฟล์พี่เลี้ยงจะแสดงที่นี่",
    },
    contact: {
      sectionTag: "ติดต่อเรา",
      title: "วิธีติดต่อเรา",
      subtitle: "ติดต่อเราผ่าน LINE หรือ WhatsApp เราตอบเร็ว!",
      lineLabel: "เพิ่มเพื่อนใน LINE",
      whatsappLabel: "แชทผ่าน WhatsApp",
      orText: "หรือ",
    },
    reviews: {
      sectionTag: "ครอบครัวไว้วางใจ",
      title: "เสียงจากลูกค้า",
      items: [
        {
          text: "Hello Nanny ช่วยเราหาพี่เลี้ยงที่ยอดเยี่ยมภายในหนึ่งสัปดาห์ กระบวนการราบรื่นมากและทีมงานช่วยเหลือดี",
          name: "Emily R.",
          family: "ครอบครัวสิงคโปร์",
          rating: 5,
        },
        {
          text: "เราเป็นห่วงเรื่องการหาพี่เลี้ยงที่พูดญี่ปุ่นได้ในกรุงเทพฯ Hello Nanny ทำได้! พี่เลี้ยงของเราเยี่ยมมาก",
          name: "Yuki T.",
          family: "ครอบครัวญี่ปุ่น",
          rating: 5,
        },
        {
          text: "ฟีเจอร์สัมภาษณ์วิดีโอดีมาก เราได้พบผู้สมัครก่อนตัดสินใจ บริการมืออาชีพมาก",
          name: "Pierre D.",
          family: "ครอบครัวฝรั่งเศส",
          rating: 5,
        },
        {
          text: "ราคาเหมาะสมและเชื่อถือได้ เราหาแม่บ้านผ่าน Hello Nanny และเธออยู่กับเรามากกว่าหนึ่งปีแล้ว",
          name: "Wei L.",
          family: "ครอบครัวจีน",
          rating: 5,
        },
        {
          text: "ทีมพูดได้หลายภาษาทำให้ทุกอย่างง่าย แนะนำอย่างยิ่ง!",
          name: "Carlos M.",
          family: "ครอบครัวสเปน",
          rating: 4,
        },
        {
          text: "จับคู่เร็วและติดตามดี หาพี่เลี้ยงที่สมบูรณ์แบบได้ใน 3 วัน",
          name: "Somchai P.",
          family: "ครอบครัวไทย",
          rating: 5,
        },
      ],
    },
    cta: {
      title: "พร้อมหาผู้ช่วยที่สมบูรณ์แบบแล้วหรือยัง?",
      subtitle: "เข้าร่วมครอบครัวหลายร้อยครอบครัวในกรุงเทพฯ ที่ไว้วางใจ Hello Nanny",
      button: "ส่งคำขอ",
      contactButton: "ติดต่อเรา",
      note: "ไม่ต้องจ่ายล่วงหน้า จ่ายเมื่อจับคู่สำเร็จเท่านั้น",
    },
    closing: {
      tagline: "พลังของพี่เลี้ยง จะทำให้ชีวิตคุณสมบูรณ์ยิ่งขึ้น",
    },
    footer: {
      description: "บริการจับคู่พี่เลี้ยงและแม่บ้านอันดับ 1 ในกรุงเทพฯ เชื่อมต่อครอบครัวกับผู้ช่วยที่ไว้ใจได้ตั้งแต่ 2020",
      company: "บริษัท",
      service: "บริการ",
      legal: "กฎหมาย",
      links: {
        about: "เกี่ยวกับเรา",
        faq: "คำถามที่พบบ่อย",
        blog: "บล็อก",
        recruit: "รับสมัครงาน",
        contact: "ติดต่อ",
        terms: "ข้อตกลงการให้บริการ",
        privacy: "นโยบายความเป็นส่วนตัว",
        harassment: "นโยบายป้องกันการคุกคาม",
      },
      companyName: "VANNESS ASIA CO., LTD.",
      address:
        "689 Bhiraj Tower at EmQuartier, 15th Floor, Unit 1501, Sukhumvit Road, North Klongton, Vadhana, Bangkok 10110",
      hours: "จันทร์-ศุกร์: 9:00-18:00 / เสาร์-อาทิตย์: นัดหมายล่วงหน้า",
      operated: "ดำเนินการโดย VANNESS ASIA CO., LTD.",
      rights: "สงวนลิขสิทธิ์",
    },
    aboutPage: {
      title: "เกี่ยวกับเรา",
      subtitle: "เรียนรู้เพิ่มเติมเกี่ยวกับ Hello Nanny และพันธกิจของเรา",
      companyName: "VANNESS ASIA CO., LTD.",
      mission: "พันธกิจของเราคือเชื่อมต่อครอบครัวในกรุงเทพฯ กับพี่เลี้ยงและแม่บ้านที่ไว้ใจได้",
      vision: "เป็นแพลตฟอร์มจับคู่พี่เลี้ยงและแม่บ้านที่น่าเชื่อถือที่สุดในเอเชียตะวันออกเฉียงใต้",
      values: [
        { title: "ความไว้วางใจและความปลอดภัย", desc: "เราคัดกรองผู้สมัครทุกคนอย่างรอบคอบ" },
        { title: "ความเร็ว", desc: "กระบวนการจับคู่ที่มีประสิทธิภาพ" },
        { title: "ราคาเหมาะสม", desc: "ไม่มีค่าธรรมเนียมแอบแฝง โปร่งใส" },
        { title: "หลายภาษา", desc: "ทีมงานและพี่เลี้ยงหลายคนพูดได้หลายภาษา" },
      ],
    },
    servicePage: {
      title: "Hello Nanny คืออะไร?",
      subtitle: "บริการจับคู่พี่เลี้ยงและแม่บ้านที่น่าเชื่อถือในกรุงเทพฯ",
      sections: [
        { title: "หาผู้ช่วยที่สมบูรณ์แบบ", desc: "ไม่ว่าจะต้องการพี่เลี้ยงฟูลไทม์ แม่บ้านพาร์ทไทม์ หรือพี่เลี้ยงชั่วคราว" },
        { title: "สนับสนุนหลายภาษา", desc: "พี่เลี้ยงพูดอังกฤษ ญี่ปุ่น ไทย จีน และอื่นๆ" },
        { title: "คัดกรองอย่างละเอียด", desc: "ผู้สมัครทุกคนผ่านการยืนยันตัวตนและสัมภาษณ์" },
      ],
    },
    processPage: {
      title: "ขั้นตอนง่ายๆ",
      subtitle: "เริ่มต้นง่ายๆ แค่ทำตาม 3 ขั้นตอนนี้",
    },
    faqPage: {
      title: "คำถามที่พบบ่อย",
      subtitle: "คำตอบสำหรับคำถามทั่วไปเกี่ยวกับบริการ",
      items: [
        { q: "ใช้เวลาจับคู่นานแค่ไหน?", a: "ส่วนใหญ่พบคู่ที่เหมาะใน 3-7 วัน บางครอบครัวพบใน 24 ชั่วโมง" },
        { q: "พี่เลี้ยงพูดภาษาอะไรได้บ้าง?", a: "ไทย อังกฤษ ญี่ปุ่น จีน และอื่นๆ" },
        { q: "มีช่วงทดลองไหม?", a: "มี เราแนะนำให้มีช่วงทดลองเพื่อดูความเข้ากัน" },
        { q: "ถ้าจับคู่ไม่ถูกใจล่ะ?", a: "เรามีการสนับสนุนเปลี่ยนตัวในช่วงรับประกัน" },
        { q: "ค่าใช้จ่ายเท่าไร?", a: "ระยะสั้น ฿4,000 พาร์ทไทม์ ฿6,000 ฟูลไทม์ ฿7,800 จ่ายครั้งเดียว" },
        { q: "ให้บริการนอกกรุงเทพฯ ไหม?", a: "ตอนนี้เน้นกรุงเทพฯ และปริมณฑล วางแผนขยายในอนาคต" },
        { q: "สัมภาษณ์ก่อนตัดสินใจได้ไหม?", a: "ได้แน่นอน! เราจัดสัมภาษณ์วิดีโอออนไลน์ให้" },
        { q: "รับชำระเงินแบบไหนบ้าง?", a: "โอนเงิน บัตรเครดิต และการชำระเงินดิจิทัลต่างๆ" },
      ],
    },
    contactPage: {
      title: "ติดต่อเรา",
      subtitle: "มีคำถาม? ติดต่อเราผ่านช่องทางที่คุณสะดวก",
      formTitle: "ส่งคำขอ",
      formPlaceholder: "แบบฟอร์มติดต่อจะฝังที่นี่",
    },
    registerPage: {
      title: "ร่วมงานกับเรา",
      subtitle: "คุณเป็นพี่เลี้ยงหรือแม่บ้านที่กำลังหางาน? เข้าร่วมชุมชนผู้ช่วยที่กำลังเติบโตในกรุงเทพฯ",
      benefits: ["จับคู่กับครอบครัวได้เร็ว", "การทำงานยืดหยุ่น", "ค่าตอบแทนที่เป็นธรรม", "ชุมชนที่สนับสนุน"],
      contactTitle: "ลงทะเบียนผ่าน:",
    },
    recruitPage: {
      title: "ร่วมทีม",
      subtitle: "เรากำลังมองหาคนที่มีความหลงใหลเข้าร่วม VANNESS ASIA",
    },
  },
};

export type Translations = typeof translations.en;

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.en;
}
