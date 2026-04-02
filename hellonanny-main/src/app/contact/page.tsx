"use client";

import { useLocale } from "@/lib/LocaleContext";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
            {t.contactPage.title}
          </h1>
          <p className="text-brand-black/70 text-lg max-w-2xl mx-auto">
            {t.contactPage.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Buttons */}
            <div>
              <h2 className="text-2xl font-bold text-brand-black mb-8">
                {t.contact.title}
              </h2>
              <div className="space-y-4">
                <a
                  href="https://lin.ee/MGiqloS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-[#06C755]/10 rounded-2xl hover:bg-[#06C755]/20 transition-colors group"
                >
                  <div className="w-14 h-14 bg-[#06C755] rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-black group-hover:text-[#06C755] transition-colors">
                      {t.contact.lineLabel}
                    </p>
                    <p className="text-sm text-gray-500">LINE Official Account</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/66649133653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-[#25D366]/10 rounded-2xl hover:bg-[#25D366]/20 transition-colors group"
                >
                  <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-black group-hover:text-[#25D366] transition-colors">
                      {t.contact.whatsappLabel}
                    </p>
                    <p className="text-sm text-gray-500">+66 649 133 653</p>
                  </div>
                </a>
              </div>

              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-yellow-dark mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">{t.footer.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-yellow-dark mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">info@hellonanny-san.com</p>
                </div>
              </div>
            </div>

            {/* Airtable Form Placeholder */}
            <div>
              <h2 className="text-2xl font-bold text-brand-black mb-8">
                {t.contactPage.formTitle}
              </h2>
              <div className="bg-brand-gray-50 rounded-3xl p-12 border-2 border-dashed border-gray-300 text-center min-h-[400px] flex flex-col items-center justify-center">
                <Mail className="w-16 h-16 text-gray-300 mb-4" />
                <p className="text-gray-400 text-lg">
                  {t.contactPage.formPlaceholder}
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  Airtable form will be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
