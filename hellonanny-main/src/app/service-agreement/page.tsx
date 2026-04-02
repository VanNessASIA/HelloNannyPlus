"use client";

import { useLocale } from "@/lib/LocaleContext";

export default function ServiceAgreementPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black">
            {t.footer.links.terms}
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container max-w-3xl prose prose-lg">
          <h2>Hello Nanny in Thailand Terms of Service</h2>
          <p>
            This Agreement (&ldquo;Agreement&rdquo;) is between VANNESS ASIA CO., LTD.
            (&ldquo;Hello Nanny&rdquo;) and the Service Receiver (&ldquo;Client&rdquo;).
          </p>

          <h3>I. Scope of Service</h3>
          <ul>
            <li>The Client agrees to use Hello Nanny to be introduced to Service Providers whose qualifications, responsibilities, and working hours are specified in the attached agreement document.</li>
            <li>The Client agrees to pay the specified fee excluding VAT (7%) in full to Hello Nanny before receiving the contact details of the Service Provider.</li>
          </ul>

          <h3>II. Screening and Background Checks</h3>
          <p>Hello Nanny will verify the following for Service Provider candidates:</p>
          <ul>
            <li>Identification (passport or ID card)</li>
            <li>Work permit status (if applicable)</li>
            <li>Criminal record check (upon request)</li>
            <li>Employment history verification (previous work experience)</li>
            <li>References (contact details provided upon request)</li>
          </ul>
          <p className="text-sm text-gray-600">
            Note: While Hello Nanny verifies the presence of a work permit initially, it is the Client&apos;s responsibility to confirm ongoing validity, expiration dates, and further details of the work permit. Hello Nanny does not guarantee the ongoing validity of work permits after initial verification. Clients are encouraged to personally verify references and employment history before finalizing employment.
          </p>

          <h3>III. Client Responsibilities</h3>
          <ol>
            <li>The Client is fully responsible for supervising and managing the Service Provider&apos;s working conditions, including working hours, breaks, wages, overtime, public holidays, leave entitlements, and safety in compliance with Thai labor laws.</li>
            <li>Labor laws require that one hour of rest be provided for every 8 hours worked.</li>
          </ol>

          <h3>IV. Refund and Replacement Policy</h3>
          <h4>Refund Policy</h4>
          <p>All fees are non-refundable, except in cases of duplicate payment or as required by Thai law.</p>
          <p>Caregivers set their own rates. The following customer plans do not include caregivers&apos; salaries.</p>
          <p>This pricing offers replacements if the customer or service provider is not satisfied. However, there are rare cases where, due to the customer&apos;s location, behavior, or actions, or other reasons outside Hello Nanny&apos;s control, a replacement cannot be arranged. In such cases, Hello Nanny is not responsible for providing a replacement. If your behavior or actions result in Hello Nanny banning you, Hello Nanny is not responsible for any replacement or unpaid amounts. By paying your invoice, you agree to no refunds and to all of Hello Nanny&apos;s legal terms.</p>

          <h4>Replacement Policy</h4>
          <ul>
            <li><strong>Short-time:</strong> 3,000 THB for up to 1 replacement (From 5 to 15 days).</li>
            <li><strong>Full-time:</strong> 7,800 THB for up to 3 replacements (within a 2-month warranty period).</li>
            <li><strong>Part-time:</strong> 6,000 THB for up to 1 replacement (within a 2-month warranty period).</li>
          </ul>
          <p>Part-time is defined as working 30 hours or less per week.</p>

          <h4>Special Clause (applies to all plans)</h4>
          <p>If any introduced Service Provider does not report to work at all after contact information has been exchanged (never shows up even once), this case will not be counted as one replacement — whether it happens with the first, second, or third candidate. Hello Nanny will continue to assist the Client with replacements according to the selected plan.</p>
          <p>Payments are non-refundable, except when the issue is directly caused by Hello Nanny&apos;s own mistake or negligence.</p>

          <h3>V. Service Provider Terms (For Nannies, Babysitters, Housekeepers)</h3>
          <h4>Registration Fee</h4>
          <p>All candidates must pay a one-time registration fee of 200 THB at the time of registration.</p>
          <ul>
            <li>This fee is non-refundable.</li>
            <li>It covers profile creation and access to our matching system.</li>
          </ul>

          <h4>System Usage Fee (Only if you get a job)</h4>
          <ul>
            <li>25% of your first month&apos;s salary</li>
            <li>Pay after you start working</li>
            <li>Includes 3-month replacement guarantee</li>
          </ul>
          <p>The System Usage Fee is not deducted from your salary. It must be paid directly to Hello Nanny.</p>

          <h4>Additional Terms</h4>
          <ul>
            <li>If you are banned from Hello Nanny due to your actions or behavior, Hello Nanny is not responsible for supporting your future job placement.</li>
            <li>All fees — including the registration fee and system usage fee — are strictly non-refundable, regardless of the payment method.</li>
            <li>By making any payment, you are deemed to have agreed to these terms and to all legal conditions set by Hello Nanny.</li>
          </ul>

          <h4>Interview Rules</h4>
          <ul>
            <li>Once you agree to an interview, cancellation is not allowed except for real emergencies.</li>
            <li>If you do not answer two phone calls and fail to call back on the same day, your profile will be suspended immediately.</li>
            <li>Repeated cases or disappearing during the process will result in permanent account deactivation.</li>
          </ul>

          <h3>VIII. Prohibited Actions</h3>
          <p>The Client is strictly prohibited from directly hiring or entering into any employment arrangement with Service Providers introduced by Hello Nanny for a period of 12 months from the date of introduction.</p>
          <p>In case of violation, the Client agrees to pay a penalty equal to 50% of the Service Provider&apos;s monthly salary or a minimum of 30,000 THB, whichever is higher, as a System Usage Fee.</p>

          <h3>IX. Liability</h3>
          <p>Hello Nanny is not responsible for any losses, injuries, legal claims, or disputes arising directly or indirectly from the Client&apos;s employment relationship with the Service Provider. The Client assumes full responsibility for supervising and managing the Service Provider in accordance with Thai labor laws.</p>

          <h4>Liability Disclaimer</h4>
          <p>Hello Nanny acts solely as a matching and introduction service between Clients and Service Providers. All information about candidates is provided as reported by the candidates themselves. Hello Nanny shall not be held liable for any issues, misunderstandings, or damages arising from incorrect, outdated, or incomplete information provided by the candidates.</p>
          <p>Once candidate contact information has been released, Hello Nanny&apos;s responsibility is deemed fulfilled under this Agreement.</p>

          <h3>X. Validity of Terms of Service</h3>
          <p>These Terms become effective when the Client submits a job request on Hello Nanny&apos;s platform and agrees to the terms by checking the consent box. Requests cannot be submitted without agreement acceptance. These Terms remain effective until terminated or amended by Hello Nanny, with notice provided through the platform or via email notification.</p>
          <p>By agreeing to these Terms of Service, you also agree to our Privacy Policy.</p>

          <h3>Contact</h3>
          <p>
            For questions about this agreement, contact{" "}
            <a href="mailto:info@hellonanny-san.com" className="text-brand-yellow-dark hover:underline">
              info@hellonanny-san.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
