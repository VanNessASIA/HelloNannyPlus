"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const positions = [
  "Nanny / Babysitter",
  "Maid / Housekeeper",
  "Customer Support",
  "Consulting / Coordinator",
  "Other",
];

export default function RecruitForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    position: "",
    experience: "",
    message: "",
    resumeLink: "",
  });

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "recruit", ...form }),
      });
      const data = await res.json();
      if (data.status === "success") {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-brand-black mb-2">
          Thank you for applying!
        </h3>
        <p className="text-gray-600">
          We&apos;ll review your application and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-sm text-gray-400">
        Fields marked with <span className="text-red-400">*</span> are required
      </p>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          required
          value={form.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          placeholder="e.g., Somchai Jaidee"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="e.g., +66 XXX XXX XXXX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
          />
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
            placeholder="e.g., somchai@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2.5">
          Position You&apos;re Applying For{" "}
          <span className="text-red-400">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {positions.map((pos) => (
            <button
              key={pos}
              type="button"
              onClick={() => update("position", pos)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border-2 transition-all ${
                form.position === pos
                  ? "border-brand-yellow bg-brand-yellow/10 text-brand-black"
                  : "border-gray-200 text-gray-500 hover:border-gray-300"
              }`}
            >
              {pos}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Experience & Background <span className="text-red-400">*</span>
        </label>
        <textarea
          required
          value={form.experience}
          onChange={(e) => update("experience", e.target.value)}
          rows={4}
          placeholder="Tell us about your experience, skills, and any relevant background."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Message (Optional)
        </label>
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={3}
          placeholder="Anything else you'd like us to know?"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Resume / CV Link (Optional)
        </label>
        <input
          type="url"
          value={form.resumeLink}
          onChange={(e) => update("resumeLink", e.target.value)}
          placeholder="e.g., https://drive.google.com/..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white"
        />
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
            Submit Application
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
