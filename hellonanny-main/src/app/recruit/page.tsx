"use client";

import Image from "next/image";
import { useLocale } from "@/lib/LocaleContext";
import { MessageCircle, Phone } from "lucide-react";

export default function RecruitPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/team-meeting.jpg"
          alt="Our team collaboration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t.recruitPage.title}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t.recruitPage.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="section-container max-w-3xl text-center">
          <div className="bg-brand-gray-50 rounded-3xl p-12">
            <h2 className="text-2xl font-bold text-brand-black mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Interested in joining VANNESS ASIA? Contact us through any of these channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://lin.ee/MGiqloS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                LINE
              </a>
              <a
                href="https://wa.me/66649133653"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp gap-3"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
