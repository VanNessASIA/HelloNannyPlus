import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/lib/i18n-config";
import ClientLayout from "@/components/ClientLayout";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = (params.locale as Locale) || defaultLocale;
  const titles: Record<Locale, string> = {
    en: "Hello Nanny | Nanny & Maid Matching Service in Bangkok",
    ja: "Hello Nanny | バンコクの家政婦・ナニーマッチングサービス",
    zh: "Hello Nanny | 曼谷保姆和女仆配对服务",
    th: "Hello Nanny | บริการจัดหาแม่บ้านและพยาบาลเด็กในกรุงเทพ",
  };

  const descriptions: Record<Locale, string> = {
    en: "Find trusted nannies & maids in Bangkok. Over 2,000 registered nannies. Simple 3-step process. Pay only after matching.",
    ja: "バンコクで信頼できるナニーと家政婦を探します。2,000以上の登録ナニー。シンプルな3ステッププロセス。マッチング後にのみお支払い。",
    zh: "在曼谷寻找信任的保姆和女仆。2000多名注册保姆。简单的3步流程。仅在配对后付款。",
    th: "ค้นหาแม่บ้านและพยาบาลเด็กที่น่าเชื่อถือในกรุงเทพ มีพยาบาลเด็กที่ลงทะเบียนมากกว่า 2,000 คน กระบวนการ 3 ขั้นตอนง่าย ๆ จ่ายเพียงหลังจากจับคู่",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords:
      locale === "en"
        ? "nanny bangkok, maid bangkok, babysitter thailand, housekeeper bangkok, nanny matching service"
        : "ナニー, 家政婦, バンコク",
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      type: "website",
      url: `https://hellonanny-main.vercel.app/${locale}`,
    },
    alternates: {
      languages: {
        en: "https://hellonanny-main.vercel.app/en",
        ja: "https://hellonanny-main.vercel.app/ja",
        zh: "https://hellonanny-main.vercel.app/zh",
        th: "https://hellonanny-main.vercel.app/th",
      },
    },
  };
}

export default async function LocaleLayout(props: Props) {
  const params = await props.params;
  const locale = (params.locale as Locale) || defaultLocale;

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="antialiased">
        <ClientLayout locale={locale}>
          {props.children}
        </ClientLayout>
      </body>
    </html>
  );
}
