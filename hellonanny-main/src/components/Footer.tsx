"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/lib/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="py-12 md:py-16 bg-brand-gray-900 text-gray-400">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Hello Nanny"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-bold text-white">Hello Nanny</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">{t.footer.description}</p>
            <p className="text-xs text-gray-500 font-semibold">VANNESS ASIA CO.,LTD (HEAD OFFICE)</p>
            <p className="text-xs text-gray-500 mt-1">64/1 Room No. 210, Soi Pasi 1, Ekamai Road, Klong Tan Nuea, Wattana, Bangkok 10110</p>
            <p className="text-xs text-gray-500 mt-1">TAX ID : 0105567229649</p>
            <p className="text-xs text-gray-500 mt-2">{t.footer.hours}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.service}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/service" className="hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  {t.nav.process}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t.footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t.footer.links.about}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  {t.footer.links.faq}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  {t.footer.links.blog}
                </Link>
              </li>
              <li>
                <Link href="/recruit" className="hover:text-white transition-colors">
                  {t.footer.links.recruit}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/service-agreement"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.links.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.links.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/customer-harassment-policy"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.links.harassment}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">{t.footer.operated}</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.trustmarkthai.com/callbackData/detail.do?data=a]oc`Ydf7eadcPcbee7Odf7bacb7eYbaPa]oc`Ydf7bacb7eYbaP0105567229649&markID=8"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.trustmarkthai.com/trust_banners/banner_registered/8/banner-8-s-en.png"
                alt="DBD Registered"
                width={64}
                height={64}
              />
            </a>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Hello Nanny. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
