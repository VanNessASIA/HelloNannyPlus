"use client";

import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import RequestForm from "@/components/RequestForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <ScrollAnimation type="fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
              Send a Request
            </h1>
            <p className="text-brand-black/70 text-lg max-w-2xl mx-auto">
              Tell us about your family&apos;s needs and we&apos;ll match you with
              the perfect nanny or maid.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20 bg-brand-gray-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Custom Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <ScrollAnimation type="fade-in-left">
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
                  <RequestForm />
                </div>
              </ScrollAnimation>
            </div>

            {/* Sidebar - Contact Methods */}
            <div>
              <ScrollAnimation type="fade-in-right">
                <div className="sticky top-24 space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-brand-black mb-4">
                      Other Ways to Reach Us
                    </h2>
                    <div className="space-y-3">
                      <a
                        href="https://lin.ee/MGiqloS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-[#06C755]/10 rounded-2xl hover:bg-[#06C755]/20 transition-all duration-300 group hover:-translate-y-0.5"
                      >
                        <div className="w-11 h-11 bg-[#06C755] rounded-xl flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-brand-black group-hover:text-[#06C755] transition-colors">
                            LINE
                          </p>
                          <p className="text-xs text-gray-500">
                            Official Account
                          </p>
                        </div>
                      </a>
                      <a
                        href="https://wa.me/66649133653"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-[#25D366]/10 rounded-2xl hover:bg-[#25D366]/20 transition-all duration-300 group hover:-translate-y-0.5"
                      >
                        <div className="w-11 h-11 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-brand-black group-hover:text-[#25D366] transition-colors">
                            WhatsApp
                          </p>
                          <p className="text-xs text-gray-500">
                            +66 649 133 653
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Office Info */}
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="font-bold text-brand-black mb-4 text-sm">
                      Office Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-brand-yellow-dark mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-brand-black">
                            VANNESS ASIA CO., LTD
                          </p>
                          <p className="text-xs text-gray-600">
                            64/1 Room No. 210, Soi Pasi 1, Ekamai Road, Khlong
                            Tan Nuea, Watthana, Bangkok 10110
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-brand-yellow-dark mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-gray-600">
                          info@hellonanny-san.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Response Note */}
                  <div className="bg-brand-yellow/10 rounded-2xl p-6">
                    <p className="text-sm text-brand-black font-semibold mb-1">
                      Response Time
                    </p>
                    <p className="text-xs text-gray-600">
                      We typically respond within 24 hours on business days. For
                      urgent requests, please contact us via LINE or WhatsApp.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
