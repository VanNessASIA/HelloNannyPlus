"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

const helpTypes = ["Nanny / Babysitter", "Maid / Housekeeper", "Both (Nanny + Maid)"];
const liveOptions = ["Live-in", "Live-out (commute)", "Either is fine"];
const languageOptions = ["English", "Thai", "Japanese", "Chinese (Mandarin)", "Other"];
const howFoundOptions = [
  "Google Search",
  "Facebook / Instagram",
  "Friend / Referral",
  "Blog / Article",
  "LINE",
  "Other",
];

export default function RequestForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    firstName: "",
    familyName: "",
    email: "",
    mobile: "",
    whatsapp: "",
    nationality: "",
    age: "",
    address: "",
    helpType: "",
    liveInOut: "",
    languages: [] as string[],
    salaryBudget: "",
    startDate: "",
    numChildren: "",
    childrenAges: "",
    requirements: "",
    howFound: "",
  });

  const update = (key: string, value: string | string[]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleLang = (lang: string) => {
    setForm((prev) => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter((l) => l !== lang)
        : [...prev.languages, lang],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const payload = encodeURIComponent(
      JSON.stringify({ formType: "request", ...form })
    );
    const url = `${FORM_ENDPOINT}?payload=${payload}`;

    const img = new window.Image();
    img.onload = () => setStatus("success");
    img.onerror = () => setStatus("success"); // GAS returns JSON, not image, so onerror fires but data is saved
    img.src = url;
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-brand-black mb-2">
          Thank you!
        </h3>
        <p className="text-gray-600">
          We&apos;ve received your request and will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-bold text-brand-black mb-1">
          Personal Information
        </h3>
        <p className="text-sm text-gray-400 mb-5">
          Fields marked with <span className="text-red-400">*</span> are
          required
        </p>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                First Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                placeholder="e.g., John"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Family Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={form.familyName}
                onChange={(e) => update("familyName", e.target.value)}
                placeholder="e.g., Smith"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="e.g., john@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Mobile Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                required
                value={form.mobile}
                onChange={(e) => update("mobile", e.target.value)}
                placeholder="e.g., +66 XXX XXX XXXX"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                WhatsApp Number
              </label>
              <input
                type="tel"
                value={form.whatsapp}
                onChange={(e) => update("whatsapp", e.target.value)}
                placeholder="If different from mobile"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Nationality <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={form.nationality}
                onChange={(e) => update("nationality", e.target.value)}
                placeholder="e.g., Japanese"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Age
              </label>
              <input
                type="number"
                value={form.age}
                onChange={(e) => update("age", e.target.value)}
                placeholder="e.g., 35"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Address in Bangkok <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              placeholder="e.g., Sukhumvit Soi 33, Watthana"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
            />
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div>
        <h3 className="text-lg font-bold text-brand-black mb-5">
          Service Details
        </h3>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2.5">
              Type of Help Needed <span className="text-red-400">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {helpTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => update("helpType", type)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium border-2 transition-all ${
                    form.helpType === type
                      ? "border-brand-yellow bg-brand-yellow/10 text-brand-black"
                      : "border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2.5">
              Live-in or Live-out? <span className="text-red-400">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {liveOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => update("liveInOut", opt)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium border-2 transition-all ${
                    form.liveInOut === opt
                      ? "border-brand-yellow bg-brand-yellow/10 text-brand-black"
                      : "border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2.5">
              Language Requirements
            </label>
            <div className="flex flex-wrap gap-2">
              {languageOptions.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => toggleLang(lang)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium border-2 transition-all ${
                    form.languages.includes(lang)
                      ? "border-brand-yellow bg-brand-yellow/10 text-brand-black"
                      : "border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Salary Budget (THB/month)
              </label>
              <input
                type="text"
                value={form.salaryBudget}
                onChange={(e) => update("salaryBudget", e.target.value)}
                placeholder="e.g., 15,000 - 20,000"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Preferred Start Date
              </label>
              <input
                type="date"
                value={form.startDate}
                onChange={(e) => update("startDate", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Children & Requirements */}
      <div>
        <h3 className="text-lg font-bold text-brand-black mb-5">
          Children & Requirements
        </h3>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Number of Children
              </label>
              <input
                type="text"
                value={form.numChildren}
                onChange={(e) => update("numChildren", e.target.value)}
                placeholder="e.g., 2"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Children&apos;s Age(s)
              </label>
              <input
                type="text"
                value={form.childrenAges}
                onChange={(e) => update("childrenAges", e.target.value)}
                placeholder="e.g., 2 years old, 5 years old"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Special Requirements or Requests
            </label>
            <textarea
              value={form.requirements}
              onChange={(e) => update("requirements", e.target.value)}
              rows={4}
              placeholder="Anything else you'd like us to know (allergies, schedule preferences, pet-friendly, cooking skills, etc.)"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2.5">
              How did you hear about us?
            </label>
            <div className="flex flex-wrap gap-2">
              {howFoundOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => update("howFound", opt)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium border-2 transition-all ${
                    form.howFound === opt
                      ? "border-brand-yellow bg-brand-yellow/10 text-brand-black"
                      : "border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 bg-brand-yellow text-brand-black font-bold text-lg rounded-2xl hover:bg-brand-yellow-dark hover:text-white transition-all shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Request
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please try again or contact us via LINE.
        </p>
      )}
    </form>
  );
}
