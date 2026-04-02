"use client";

export default function ClientGuidelinesPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black">
            Hello Nanny Client Guidelines (Parent Policy)
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container max-w-3xl prose prose-lg">
          <p className="text-sm text-gray-500">Last Updated: March 24, 2026</p>
          <p>This Policy forms part of the Terms of Service and is binding upon all Clients.</p>

          <div className="bg-green-50 rounded-2xl p-6 my-8">
            <h3 className="text-green-800 mt-0">Our Approach</h3>
            <p className="text-green-700 mb-0">
              At Hello Nanny, our goal is to create a smooth, safe, and positive experience for both families and service providers. Most of our clients enjoy a seamless experience without any issues. These guidelines are designed to prevent misunderstandings and support a respectful, long-term working relationship.
            </p>
          </div>

          <h3>1. Nature of Our Service</h3>
          <p>Hello Nanny provides a matching and introduction service only.</p>
          <p>Hello Nanny does not employ, supervise, manage, or control any Service Provider and is not a party to any employment relationship between the Client and the Service Provider.</p>
          <p>All employment arrangements, including working conditions, wages, working hours, breaks, leave, and duties, must be agreed directly between the Client and the Service Provider in compliance with Thai labor laws.</p>

          <h3>2. Communication Conduct</h3>
          <p>Clients are expected to maintain polite, professional, and timely communication. Slow or unresponsive communication may result in delayed service.</p>
          <p>Hello Nanny staff are not available 24/7. Our response hours are Monday to Friday, 9:00 AM – 6:00 PM (Bangkok time). Messages sent outside of office hours will be responded to on the next business day.</p>

          <h3>3. Valuables, Property, and Home Responsibility</h3>
          <p>Clients are responsible for securing:</p>
          <ul>
            <li>Cash</li>
            <li>Valuables</li>
            <li>Jewelry</li>
            <li>Confidential documents</li>
            <li>Keys and access cards</li>
          </ul>
          <p>Hello Nanny is not responsible for:</p>
          <ul>
            <li>Theft or suspected theft</li>
            <li>Loss or missing items</li>
            <li>Property damage</li>
            <li>Cleaning dissatisfaction</li>
          </ul>
          <p>All such matters must be handled directly between the Client and the Service Provider.</p>

          <h3>4. No Financial Transactions</h3>
          <p>The Client and the Service Provider are strictly prohibited from:</p>
          <ul>
            <li>Lending or borrowing money</li>
            <li>Salary advances outside agreed terms</li>
            <li>Guarantees or private financial arrangements</li>
          </ul>
          <p>Hello Nanny is not responsible for any disputes or losses arising from such transactions.</p>

          <h3>5. Scope of Work and Expectations</h3>
          <p>Job responsibilities must be clearly agreed before employment begins.</p>
          <p>Problems may arise when:</p>
          <ul>
            <li>Duties are added after hiring</li>
            <li>Tasks exceed the agreed scope</li>
            <li>Workload becomes excessive</li>
          </ul>
          <p>Such conditions may affect retention and are the Client&apos;s responsibility.</p>

          <h3>6. Replacement Limitations</h3>
          <p>Replacements depend on the selected plan and candidate availability. Hello Nanny does not guarantee a replacement in every case.</p>

          <h3>7. Unacceptable Behavior</h3>
          <p>The following behaviors are not acceptable:</p>
          <ul>
            <li>Verbal abuse or aggressive language</li>
            <li>Threats or harassment</li>
            <li>Excessive or unreasonable demands</li>
            <li>Disrespect toward staff or Service Providers</li>
          </ul>
          <p>Hello Nanny reserves the right to:</p>
          <ul>
            <li>Pause communication</li>
            <li>Refuse service</li>
            <li>Suspend accounts</li>
          </ul>

          <h3>8. Social Media and Public Statements</h3>
          <p>Clients must not:</p>
          <ul>
            <li>Post false or misleading information</li>
            <li>Make defamatory or damaging statements</li>
            <li>Encourage others to spread unverified claims</li>
          </ul>
          <p>Such actions may result in account suspension and legal action under Thai law.</p>

          <h3>9. Responsibility for Disputes</h3>
          <p>All employment-related matters must be handled directly between the Client and the Service Provider, including:</p>
          <ul>
            <li>Salary</li>
            <li>Duties</li>
            <li>Working hours</li>
            <li>Performance</li>
            <li>Behavior</li>
          </ul>
          <p>Hello Nanny may provide limited support but is not obligated to investigate, mediate, or resolve disputes.</p>

          <h3>10. Legal and Safety Matters</h3>
          <p>Hello Nanny is not responsible for:</p>
          <ul>
            <li>Criminal investigations</li>
            <li>Misconduct allegations</li>
            <li>Legal disputes</li>
          </ul>
          <p>The Client must report such matters directly to the appropriate Thai authorities.</p>

          <h3>Contact</h3>
          <p>
            For questions, contact{" "}
            <a href="mailto:info@hellonanny-san.com" className="text-brand-yellow-dark hover:underline">
              info@hellonanny-san.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
