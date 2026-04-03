"use client";

import { useLocale } from "@/lib/LocaleContext";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Shield, Lock, Eye, UserCheck, Database, RefreshCw, Mail } from "lucide-react";

function ThaiText({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px] font-bold text-gray-500 tracking-wide">TH</span>
      </div>
      <div className="text-gray-500 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const { t } = useLocale();

  const sections = [
    {
      icon: Database,
      num: "1",
      title: "Scope of Privacy Information",
      titleTh: "ขอบเขตของข้อมูลส่วนบุคคล",
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">We may collect the following types of personal information:</p>
          <ul className="space-y-2">
            {[
              "Name, email address, phone number, address",
              "Date of birth, nationality",
              "Login information, access logs, period of use, usage environment",
              "IP address, cookie information, location information, device identification information",
              "Demographic data (e.g., gender, occupation, age)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ThaiText>
            <p className="mb-3">เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลประเภทต่อไปนี้:</p>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>ชื่อ ที่อยู่อีเมล หมายเลขโทรศัพท์ ที่อยู่</li>
              <li>วันเกิด สัญชาติ</li>
              <li>ข้อมูลการเข้าสู่ระบบ บันทึกการเข้าถึง ระยะเวลาการใช้งาน สภาพแวดล้อมการใช้งาน</li>
              <li>ที่อยู่ IP ข้อมูลคุกกี้ ข้อมูลตำแหน่งที่ตั้ง ข้อมูลระบุอุปกรณ์</li>
              <li>ข้อมูลทางประชากรศาสตร์ (เช่น เพศ อาชีพ อายุ)</li>
            </ul>
          </ThaiText>
        </>
      ),
    },
    {
      icon: Lock,
      num: "2",
      title: "How We Collect Privacy Information",
      titleTh: "วิธีการเก็บรวบรวมข้อมูลส่วนบุคคล",
      content: (
        <>
          <ul className="space-y-2">
            {[
              "Information provided directly by users through registration forms or account settings.",
              "Automatically collected information through your use of our website and services (cookies, IP address, etc.).",
              "Information provided via linked external services when users choose to connect such services.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ThaiText>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>ข้อมูลที่ผู้ใช้ให้โดยตรงผ่านแบบฟอร์มลงทะเบียนหรือการตั้งค่าบัญชี</li>
              <li>ข้อมูลที่เก็บรวบรวมโดยอัตโนมัติผ่านการใช้งานเว็บไซต์และบริการของเรา (คุกกี้ ที่อยู่ IP เป็นต้น)</li>
              <li>ข้อมูลที่ได้รับผ่านบริการภายนอกที่เชื่อมต่อเมื่อผู้ใช้เลือกเชื่อมต่อบริการดังกล่าว</li>
            </ul>
          </ThaiText>
        </>
      ),
    },
    {
      icon: Eye,
      num: "3",
      title: "Purposes of Use",
      titleTh: "วัตถุประสงค์ในการใช้งาน",
      content: (
        <>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Account and service management",
              "User notifications and communications",
              "Identity verification",
              "Billing and payments",
              "Convenience features (e.g., autofill)",
              "Prevention of misuse or illegal activities",
              "User support and inquiries",
              "Statistical analysis (anonymized)",
              "Advertising and marketing",
              "Other incidental purposes as disclosed",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-gray-700">
                <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0 mt-2.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4 italic">
            By agreeing to this Privacy Policy, you explicitly consent to the use of your information for the purposes stated above.
          </p>
          <ThaiText>
            <ul className="grid sm:grid-cols-2 gap-1.5 list-disc list-inside mb-3">
              <li>การจัดการบัญชีและบริการ</li>
              <li>การแจ้งเตือนและการสื่อสารกับผู้ใช้</li>
              <li>การยืนยันตัวตน</li>
              <li>การเรียกเก็บเงินและการชำระเงิน</li>
              <li>คุณสมบัติเพื่อความสะดวก (เช่น กรอกข้อมูลอัตโนมัติ)</li>
              <li>การป้องกันการใช้งานในทางที่ผิดหรือกิจกรรมที่ผิดกฎหมาย</li>
              <li>การสนับสนุนผู้ใช้และการสอบถาม</li>
              <li>การวิเคราะห์ทางสถิติ (ข้อมูลนิรนาม)</li>
              <li>การโฆษณาและการตลาด</li>
              <li>วัตถุประสงค์อื่นที่เกี่ยวข้องตามที่เปิดเผย</li>
            </ul>
            <p className="italic">การยอมรับนโยบายความเป็นส่วนตัวนี้ ถือว่าท่านยินยอมโดยชัดแจ้งในการใช้ข้อมูลของท่านเพื่อวัตถุประสงค์ที่ระบุข้างต้น</p>
          </ThaiText>
        </>
      ),
    },
    {
      icon: Shield,
      num: "4",
      title: "Disclosure to Third Parties",
      titleTh: "การเปิดเผยต่อบุคคลที่สาม",
      content: (
        <>
          <p className="text-gray-700 leading-relaxed">
            We do not sell your personal data. We may share data with trusted partners when necessary to provide services or comply with legal obligations.
          </p>
          <ThaiText>
            <p>เราไม่จำหน่ายข้อมูลส่วนบุคคลของท่าน เราอาจแบ่งปันข้อมูลกับพันธมิตรที่เชื่อถือได้เมื่อจำเป็นเพื่อให้บริการหรือปฏิบัติตามข้อผูกพันทางกฎหมาย</p>
          </ThaiText>
        </>
      ),
    },
    {
      icon: UserCheck,
      num: "5",
      title: "User Rights",
      titleTh: "สิทธิของผู้ใช้",
      content: (
        <>
          <p className="text-gray-700 leading-relaxed">
            Users may request access, correction, deletion, or withdrawal of consent. Such requests should be directed to the contact provided below.
          </p>
          <ThaiText>
            <p>ผู้ใช้สามารถร้องขอการเข้าถึง แก้ไข ลบ หรือเพิกถอนความยินยอมได้ โดยส่งคำร้องไปยังช่องทางติดต่อที่ระบุด้านล่าง</p>
          </ThaiText>
        </>
      ),
    },
    {
      icon: Lock,
      num: "6",
      title: "Security Measures and Retention",
      titleTh: "มาตรการรักษาความปลอดภัยและการเก็บรักษา",
      content: (
        <>
          <p className="text-gray-700 leading-relaxed">
            We maintain reasonable security measures to protect your personal data. Information is retained only as long as necessary or required by law.
          </p>
          <ThaiText>
            <p>เรารักษามาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลส่วนบุคคลของท่าน ข้อมูลจะถูกเก็บรักษาเท่าที่จำเป็นหรือตามที่กฎหมายกำหนด</p>
          </ThaiText>
        </>
      ),
    },
    {
      icon: RefreshCw,
      num: "7",
      title: "Changes to this Privacy Policy",
      titleTh: "การเปลี่ยนแปลงนโยบายความเป็นส่วนตัว",
      content: (
        <>
          <p className="text-gray-700 leading-relaxed">
            This policy may be updated without prior notice. Continued use of our services after updates indicates acceptance.
          </p>
          <ThaiText>
            <p>นโยบายนี้อาจมีการปรับปรุงโดยไม่ต้องแจ้งให้ทราบล่วงหน้า การใช้บริการของเราต่อไปหลังจากการปรับปรุง ถือว่าท่านยอมรับนโยบายที่แก้ไขแล้ว</p>
          </ThaiText>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <ScrollAnimation type="fade-in">
            <div className="w-16 h-16 bg-brand-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
              {t.footer.links.privacy}
            </h1>
            <p className="text-brand-black/60 text-sm">Last Updated: March 3, 2025</p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="section-container max-w-3xl">
          <ScrollAnimation type="fade-in">
            <div className="bg-brand-gray-50 rounded-2xl p-8 border-l-4 border-brand-yellow">
              <p className="text-gray-700 leading-relaxed">
                Thank you very much for using the services provided by VANNESS ASIA CO., LTD. We are committed to complying with all applicable data protection laws, including the Thailand PDPA, the EU GDPR, and Japan&apos;s APPI. This Privacy Policy explains how we collect, use, disclose, and protect personal data, as well as the rights and choices available to data subjects.
              </p>
              <p className="text-gray-600 text-sm mt-4 italic">
                By using our services, you agree to the terms of this Policy. If you do not agree, please refrain from using our services.
              </p>
              <ThaiText>
                <p className="mb-2">ขอขอบคุณที่ใช้บริการของ บริษัท แวนเนส เอเชีย จำกัด เรามุ่งมั่นที่จะปฏิบัติตามกฎหมายคุ้มครองข้อมูลที่เกี่ยวข้องทั้งหมด รวมถึง พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล (PDPA) ของประเทศไทย, GDPR ของสหภาพยุโรป และ APPI ของญี่ปุ่น นโยบายความเป็นส่วนตัวฉบับนี้อธิบายวิธีการเก็บรวบรวม ใช้ เปิดเผย และคุ้มครองข้อมูลส่วนบุคคล รวมถึงสิทธิและทางเลือกที่มีให้แก่เจ้าของข้อมูล</p>
                <p className="italic">การใช้บริการของเราถือว่าท่านยอมรับเงื่อนไขของนโยบายนี้ หากท่านไม่เห็นด้วย กรุณาหยุดใช้บริการของเรา</p>
              </ThaiText>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-20">
        <div className="section-container max-w-3xl">
          <div className="space-y-8">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <ScrollAnimation key={i} type="fade-in" delay={i * 50}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-yellow-dark" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-brand-black">
                          {section.num}. {section.title}
                        </h2>
                        <p className="text-sm text-gray-400">{section.titleTh}</p>
                      </div>
                    </div>
                    {section.content}
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>

          {/* Contact */}
          <ScrollAnimation type="fade-in">
            <div className="mt-12 bg-brand-black rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-brand-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
              <p className="text-white/50 text-xs mb-2">ข้อมูลติดต่อ</p>
              <p className="text-white/70 text-sm mb-1">VANNESS ASIA CO., LTD.</p>
              <p className="text-white/60 text-sm mb-3">
                64/1 Room No. 210, Soi Pasi 1, Ekamai Road, Klong Tan Nuea, Wattana, Bangkok 10110
              </p>
              <a href="mailto:info@hellonanny-san.com" className="text-brand-yellow hover:text-brand-yellow-dark transition-colors font-semibold">
                info@hellonanny-san.com
              </a>
              <p className="text-white/50 text-sm mt-2">+66-64-913-3653</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
