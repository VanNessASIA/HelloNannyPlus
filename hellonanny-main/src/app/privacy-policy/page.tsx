"use client";

import { useLocale } from "@/lib/LocaleContext";

export default function PrivacyPolicyPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black">
            {t.footer.links.privacy}
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container max-w-3xl prose prose-lg">
          <h2>Privacy Policy</h2>
          <p className="text-sm text-gray-500">Last Updated: March 3, 2025</p>
          <p>
            Thank you very much for using the services provided by VANNESS ASIA CO., LTD. (hereinafter, &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to complying with all applicable data protection laws, including, but not limited to, the Thailand Personal Data Protection Act (&ldquo;PDPA&rdquo;), the EU General Data Protection Regulation (&ldquo;GDPR&rdquo;), and the Act on the Protection of Personal Information in Japan (&ldquo;APPI&rdquo;). This Privacy Policy explains how we collect, use, disclose, and protect personal data, as well as the rights and choices available to data subjects.
          </p>
          <p>By using our services, you agree to the terms of this Policy. If you do not agree, please refrain from using our services.</p>

          <h3>1. Scope of Privacy Information</h3>
          <p>We may collect the following types of personal information:</p>
          <ul>
            <li>Name, email address, phone number, address</li>
            <li>Date of birth, nationality</li>
            <li>Login information, access logs, period of use, usage environment</li>
            <li>IP address, cookie information, location information, device identification information</li>
            <li>Demographic data (e.g., gender, occupation, age)</li>
          </ul>

          <h3>2. How We Collect Privacy Information</h3>
          <ul>
            <li>Information provided directly by users through registration forms or account settings.</li>
            <li>Automatically collected information through your use of our website and services (cookies, IP address, etc.).</li>
            <li>Information provided via linked external services when users choose to connect such services.</li>
          </ul>

          <h3>3. Purposes of Use</h3>
          <ul>
            <li>Account and service management</li>
            <li>User notifications and communications</li>
            <li>Identity verification</li>
            <li>Billing and payments (including collection of System Usage Fees)</li>
            <li>Convenience features (e.g., autofill)</li>
            <li>Prevention of misuse or illegal activities</li>
            <li>User support and inquiries</li>
            <li>Statistical analysis (anonymized)</li>
            <li>Advertising and marketing</li>
            <li>Other incidental purposes as disclosed</li>
          </ul>
          <p>By agreeing to this Privacy Policy, you explicitly consent to the use of your information for the purposes stated above.</p>

          <h3>4. Disclosure to Third Parties</h3>
          <p>We do not sell your personal data. We may share data with trusted partners when necessary to provide services or comply with legal obligations.</p>

          <h3>5. User Rights</h3>
          <p>Users may request access, correction, deletion, or withdrawal of consent. Such requests should be directed to the contact provided below.</p>

          <h3>6. Security Measures and Retention</h3>
          <p>We maintain reasonable security measures to protect your personal data. Information is retained only as long as necessary or required by law.</p>

          <h3>7. Changes to this Privacy Policy</h3>
          <p>This policy may be updated without prior notice. Continued use of our services after updates indicates acceptance.</p>

          <h3>8. Contact Information</h3>
          <p>Company Name: VANNESS ASIA CO., LTD.</p>
          <p>Address: 64/1 Room No. 210, Soi Pasi 1, Ekamai Road, Klong Tan Nuea, Wattana, Bangkok 10110, Thailand</p>
          <p>
            Email:{" "}
            <a href="mailto:info@hellonanny-san.com" className="text-brand-yellow-dark hover:underline">
              info@hellonanny-san.com
            </a>
          </p>
          <p>Telephone: +66-64-913-3653</p>
        </div>
      </section>
    </div>
  );
}
