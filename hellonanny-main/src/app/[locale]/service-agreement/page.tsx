"use client";

import { useLocale } from "@/lib/LocaleContext";
import ScrollAnimation from "@/components/ScrollAnimation";
import { FileText, Check, AlertTriangle, CreditCard, Shield, Ban, Scale, Mail } from "lucide-react";

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

export default function ServiceAgreementPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <ScrollAnimation type="fade-in">
            <div className="w-16 h-16 bg-brand-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
              {t.footer.links.terms}
            </h1>
            <p className="text-brand-black/60 text-sm">
              Agreement between VANNESS ASIA CO., LTD. (&ldquo;Hello Nanny&rdquo;) and the Client
            </p>
            <p className="text-brand-black/50 text-xs mt-1">
              ข้อตกลงระหว่าง บริษัท แวนเนส เอเชีย จำกัด (&ldquo;Hello Nanny&rdquo;) และลูกค้า
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-3xl space-y-8">

          {/* I. Scope of Service */}
          <ScrollAnimation type="fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-black">I. Scope of Service</h2>
                  <p className="text-sm text-gray-400">ขอบเขตการให้บริการ</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0 mt-2.5" />
                  <span>The Client agrees to use Hello Nanny to be introduced to Service Providers whose qualifications, responsibilities, and working hours are specified in the attached agreement document.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0 mt-2.5" />
                  <span>The Client agrees to pay the specified fee excluding VAT (7%) in full to Hello Nanny before receiving the contact details of the Service Provider.</span>
                </li>
              </ul>
              <ThaiText>
                <ul className="space-y-2 list-disc list-inside">
                  <li>ลูกค้าตกลงที่จะใช้บริการ Hello Nanny เพื่อรับการแนะนำผู้ให้บริการที่มีคุณสมบัติ หน้าที่ความรับผิดชอบ และชั่วโมงทำงานตามที่ระบุในเอกสารข้อตกลงแนบท้าย</li>
                  <li>ลูกค้าตกลงที่จะชำระค่าธรรมเนียมที่กำหนดไว้ (ไม่รวมภาษีมูลค่าเพิ่ม 7%) เต็มจำนวนให้แก่ Hello Nanny ก่อนที่จะได้รับข้อมูลติดต่อของผู้ให้บริการ</li>
                </ul>
              </ThaiText>
            </div>
          </ScrollAnimation>

          {/* II. Screening */}
          <ScrollAnimation type="fade-in" delay={50}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-black">II. Screening and Background Checks</h2>
                  <p className="text-sm text-gray-400">การคัดกรองและตรวจสอบประวัติ</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Hello Nanny will verify the following for Service Provider candidates:</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Identification (passport or ID card)",
                  "Work permit status (if applicable)",
                  "Criminal record check (upon request)",
                  "Employment history verification",
                  "References (contact details provided upon request)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-brand-yellow/10 rounded-xl p-4">
                <p className="text-sm text-gray-600 italic">
                  Note: While Hello Nanny verifies work permits initially, it is the Client&apos;s responsibility to confirm ongoing validity. Clients are encouraged to personally verify references before finalizing employment.
                </p>
              </div>
              <ThaiText>
                <p className="mb-2">Hello Nanny จะตรวจสอบสิ่งต่อไปนี้สำหรับผู้สมัครเป็นผู้ให้บริการ:</p>
                <ul className="space-y-1.5 list-disc list-inside mb-3">
                  <li>เอกสารระบุตัวตน (หนังสือเดินทางหรือบัตรประชาชน)</li>
                  <li>สถานะใบอนุญาตทำงาน (ถ้ามี)</li>
                  <li>การตรวจสอบประวัติอาชญากรรม (เมื่อมีการร้องขอ)</li>
                  <li>การตรวจสอบประวัติการทำงาน</li>
                  <li>บุคคลอ้างอิง (ข้อมูลติดต่อให้เมื่อมีการร้องขอ)</li>
                </ul>
                <p className="italic">หมายเหตุ: แม้ว่า Hello Nanny จะตรวจสอบใบอนุญาตทำงานในเบื้องต้น แต่เป็นความรับผิดชอบของลูกค้าในการยืนยันความถูกต้องอย่างต่อเนื่อง ลูกค้าควรตรวจสอบบุคคลอ้างอิงด้วยตนเองก่อนที่จะตัดสินใจจ้างงาน</p>
              </ThaiText>
            </div>
          </ScrollAnimation>

          {/* III. Client Responsibilities */}
          <ScrollAnimation type="fade-in" delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-black">III. Client Responsibilities</h2>
                  <p className="text-sm text-gray-400">ความรับผิดชอบของลูกค้า</p>
                </div>
              </div>
              <ol className="space-y-3 list-decimal list-inside text-gray-700">
                <li>The Client is fully responsible for supervising and managing the Service Provider&apos;s working conditions, including working hours, breaks, wages, overtime, public holidays, leave entitlements, and safety in compliance with Thai labor laws.</li>
                <li>Labor laws require that one hour of rest be provided for every 8 hours worked.</li>
              </ol>
              <ThaiText>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>ลูกค้ามีความรับผิดชอบอย่างเต็มที่ในการกำกับดูแลและจัดการสภาพการทำงานของผู้ให้บริการ รวมถึงชั่วโมงทำงาน เวลาพัก ค่าจ้าง ค่าล่วงเวลา วันหยุดนักขัตฤกษ์ สิทธิการลา และความปลอดภัยตามกฎหมายแรงงานไทย</li>
                  <li>กฎหมายแรงงานกำหนดให้มีเวลาพัก 1 ชั่วโมงสำหรับการทำงานทุก 8 ชั่วโมง</li>
                </ol>
              </ThaiText>
            </div>
          </ScrollAnimation>

          {/* IV. Refund and Replacement */}
          <ScrollAnimation type="fade-in" delay={150}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-black">IV. Refund and Replacement Policy</h2>
                  <p className="text-sm text-gray-400">นโยบายการคืนเงินและการเปลี่ยนตัว</p>
                </div>
              </div>

              <h3 className="font-bold text-brand-black mb-3 text-lg">Refund Policy</h3>
              <p className="text-gray-700 mb-4">All fees are non-refundable, except in cases of duplicate payment or as required by Thai law.</p>
              <p className="text-gray-700 mb-6">Caregivers set their own rates. Customer plans do not include caregivers&apos; salaries.</p>

              <h3 className="font-bold text-brand-black mb-3 text-lg">Replacement Plans</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { name: "Short-time", price: "4,000 THB", detail: "Choose up to 1 time", note: "5 to 14 days" },
                  { name: "Full-time", price: "7,800 THB", detail: "Choose up to 3 times", note: "Within 2 months" },
                  { name: "Part-time", price: "6,000 THB", detail: "Choose up to 2 times", note: "Weekly < 30 hours" },
                ].map((plan, i) => (
                  <div key={i} className="bg-brand-gray-50 rounded-xl p-4 text-center">
                    <p className="font-bold text-brand-black text-sm">{plan.name}</p>
                    <p className="text-xl font-extrabold text-brand-black mt-1">{plan.price}</p>
                    <p className="text-xs text-gray-600 mt-1">{plan.detail}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{plan.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">Part-time is defined as working 30 hours or less per week.</p>

              <div className="bg-brand-yellow/10 rounded-xl p-4 mt-4">
                <h4 className="font-bold text-brand-black text-sm mb-2">Special Clause (all plans)</h4>
                <p className="text-sm text-gray-600">
                  If any introduced Service Provider does not report to work at all after contact information has been exchanged, this case will not be counted as one replacement. Hello Nanny will continue to assist with replacements according to the selected plan.
                </p>
              </div>

              <ThaiText>
                <p className="font-semibold mb-2">นโยบายการคืนเงิน</p>
                <p className="mb-2">ค่าธรรมเนียมทั้งหมดไม่สามารถคืนเงินได้ ยกเว้นกรณีชำระซ้ำหรือตามที่กฎหมายไทยกำหนด</p>
                <p className="mb-4">ผู้ดูแลกำหนดอัตราค่าจ้างของตนเอง แผนบริการไม่รวมค่าจ้างของผู้ดูแล</p>
                <p className="font-semibold mb-2">แผนการเปลี่ยนตัว</p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li>Short-time (ระยะสั้น): 4,000 บาท — เลือกได้สูงสุด 1 ครั้ง (5-14 วัน)</li>
                  <li>Full-time (เต็มเวลา): 7,800 บาท — เลือกได้สูงสุด 3 ครั้ง (ภายใน 2 เดือน)</li>
                  <li>Part-time (พาร์ทไทม์): 6,000 บาท — เลือกได้สูงสุด 2 ครั้ง (สัปดาห์ละไม่เกิน 30 ชั่วโมง)</li>
                </ul>
                <p className="mb-3">พาร์ทไทม์ หมายถึง การทำงานไม่เกิน 30 ชั่วโมงต่อสัปดาห์</p>
                <p className="font-semibold mb-1">ข้อกำหนดพิเศษ (ทุกแผน)</p>
                <p>หากผู้ให้บริการที่แนะนำไม่มาทำงานเลยหลังจากแลกเปลี่ยนข้อมูลติดต่อแล้ว กรณีนี้จะไม่ถูกนับเป็นการเปลี่ยนตัวหนึ่งครั้ง Hello Nanny จะช่วยเหลือในการเปลี่ยนตัวต่อไปตามแผนที่เลือก</p>
              </ThaiText>
            </div>
          </ScrollAnimation>

          {/* V. Service Provider Terms */}
          <ScrollAnimation type="fade-in" delay={200}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-black">V. Service Provider Terms</h2>
                  <p className="text-sm text-gray-400">เงื่อนไขสำหรับผู้ให้บริการ</p>
                </div>
              </div>

              <h3 className="font-bold text-brand-black mb-3">Registration Fee</h3>
              <p className="text-gray-700 mb-4">All candidates must pay a one-time registration fee of <strong>200 THB</strong> at the time of registration. This fee is non-refundable and covers profile creation and access to our matching system.</p>

              <h3 className="font-bold text-brand-black mb-3">System Usage Fee (Only if you get a job)</h3>
              <ul className="space-y-2 mb-4">
                {[
                  "25% of your first month's salary",
                  "Pay after you start working",
                  "Includes 3-month replacement guarantee",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-brand-black mb-3">Interview Rules</h3>
              <ul className="space-y-2">
                {[
                  "Once you agree to an interview, cancellation is not allowed except for real emergencies.",
                  "If you do not answer two phone calls and fail to call back on the same day, your profile will be suspended immediately.",
                  "Repeated cases or disappearing during the process will result in permanent account deactivation.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <ThaiText>
                <p className="font-semibold mb-1">ค่าลงทะเบียน</p>
                <p className="mb-3">ผู้สมัครทุกคนต้องชำระค่าลงทะเบียนครั้งเดียว <strong>200 บาท</strong> ณ เวลาลงทะเบียน ค่าธรรมเนียมนี้ไม่สามารถคืนเงินได้ และครอบคลุมการสร้างโปรไฟล์และการเข้าถึงระบบจับคู่ของเรา</p>
                <p className="font-semibold mb-1">ค่าใช้ระบบ (เฉพาะเมื่อได้งาน)</p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li>25% ของเงินเดือนเดือนแรก</li>
                  <li>ชำระหลังจากเริ่มทำงาน</li>
                  <li>รวมการรับประกันเปลี่ยนตัว 3 เดือน</li>
                </ul>
                <p className="font-semibold mb-1">กฎการสัมภาษณ์</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>เมื่อตกลงรับการสัมภาษณ์แล้ว ไม่สามารถยกเลิกได้ ยกเว้นกรณีฉุกเฉินจริงๆ</li>
                  <li>หากไม่รับสาย 2 ครั้งและไม่โทรกลับในวันเดียวกัน โปรไฟล์จะถูกระงับทันที</li>
                  <li>กรณีที่เกิดซ้ำหรือหายไประหว่างกระบวนการจะส่งผลให้บัญชีถูกปิดถาวร</li>
                </ul>
              </ThaiText>
            </div>
          </ScrollAnimation>

          {/* VIII. Prohibited Actions */}
          <ScrollAnimation type="fade-in" delay={250}>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Ban className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-black">VIII. Prohibited Actions</h2>
                  <p className="text-sm text-red-400">การกระทำที่ห้าม</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">The Client is strictly prohibited from directly hiring or entering into any employment arrangement with Service Providers introduced by Hello Nanny for a period of <strong>12 months</strong> from the date of introduction.</p>
              <p className="text-gray-700">In case of violation, the Client agrees to pay a penalty equal to <strong>50% of the Service Provider&apos;s monthly salary</strong> or a minimum of <strong>30,000 THB</strong>, whichever is higher.</p>
              <ThaiText>
                <p className="mb-2">ลูกค้าถูกห้ามอย่างเคร่งครัดไม่ให้จ้างโดยตรงหรือทำข้อตกลงการจ้างงานใดๆ กับผู้ให้บริการที่แนะนำโดย Hello Nanny เป็นระยะเวลา <strong>12 เดือน</strong> นับจากวันที่แนะนำ</p>
                <p>ในกรณีที่ฝ่าฝืน ลูกค้าตกลงที่จะชำระค่าปรับเท่ากับ <strong>50% ของเงินเดือนรายเดือนของผู้ให้บริการ</strong> หรือขั้นต่ำ <strong>30,000 บาท</strong> แล้วแต่จำนวนใดจะสูงกว่า</p>
              </ThaiText>
            </div>
          </ScrollAnimation>

          {/* IX. Liability */}
          <ScrollAnimation type="fade-in" delay={300}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-black">IX. Liability</h2>
                  <p className="text-sm text-gray-400">ความรับผิด</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Hello Nanny is not responsible for any losses, injuries, legal claims, or disputes arising from the Client&apos;s employment relationship with the Service Provider. The Client assumes full responsibility for supervising the Service Provider in accordance with Thai labor laws.</p>
              <div className="bg-brand-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 italic">Hello Nanny acts solely as a matching and introduction service. All information about candidates is provided as reported by the candidates themselves. Once contact information has been released, Hello Nanny&apos;s responsibility is deemed fulfilled.</p>
              </div>
              <ThaiText>
                <p className="mb-2">Hello Nanny ไม่รับผิดชอบต่อความสูญเสีย การบาดเจ็บ การเรียกร้องทางกฎหมาย หรือข้อพิพาทใดๆ ที่เกิดจากความสัมพันธ์ในการจ้างงานระหว่างลูกค้าและผู้ให้บริการ ลูกค้ารับผิดชอบอย่างเต็มที่ในการกำกับดูแลผู้ให้บริการตามกฎหมายแรงงานไทย</p>
                <p className="italic">Hello Nanny ทำหน้าที่เป็นบริการจับคู่และแนะนำเท่านั้น ข้อมูลทั้งหมดเกี่ยวกับผู้สมัครเป็นข้อมูลที่ผู้สมัครรายงานด้วยตนเอง เมื่อข้อมูลติดต่อถูกส่งมอบแล้ว ถือว่า Hello Nanny ปฏิบัติหน้าที่ครบถ้วนแล้ว</p>
              </ThaiText>
            </div>
          </ScrollAnimation>

          {/* X. Validity */}
          <ScrollAnimation type="fade-in" delay={350}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-brand-yellow-dark" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-black">X. Validity of Terms</h2>
                  <p className="text-sm text-gray-400">ความมีผลของเงื่อนไข</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">These Terms become effective when the Client submits a job request on Hello Nanny&apos;s platform and agrees to the terms by checking the consent box.</p>
              <p className="text-gray-600 text-sm italic">By agreeing to these Terms of Service, you also agree to our Privacy Policy.</p>
              <ThaiText>
                <p className="mb-2">เงื่อนไขเหล่านี้จะมีผลเมื่อลูกค้าส่งคำขอจ้างงานบนแพลตฟอร์มของ Hello Nanny และยอมรับเงื่อนไขโดยทำเครื่องหมายในช่องยินยอม</p>
                <p className="italic">การยอมรับเงื่อนไขการให้บริการเหล่านี้ ถือว่าท่านยอมรับนโยบายความเป็นส่วนตัวของเราด้วย</p>
              </ThaiText>
            </div>
          </ScrollAnimation>

          {/* Contact */}
          <ScrollAnimation type="fade-in">
            <div className="bg-brand-black rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-brand-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Questions?</h3>
              <p className="text-white/50 text-xs mb-3">มีคำถาม?</p>
              <a href="mailto:info@hellonanny-san.com" className="text-brand-yellow hover:text-brand-yellow-dark transition-colors font-semibold">
                info@hellonanny-san.com
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
