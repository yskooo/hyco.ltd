import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | HYCO Group',
  description: 'How HYCO Group handles and protects personal data in compliance with the Philippine Data Privacy Act of 2012.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white text-slate-800 pt-10 pb-28">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-10 border-b border-slate-200">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F3383] mb-3">
          HYCO Group • Legal
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 font-mono">
          Effective: January 2026 • Compliant with RA 10173 (Philippine Data Privacy Act)
        </p>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 text-[15px] text-slate-600 leading-relaxed space-y-10">
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-slate-900">1. Overview</h2>
          <p>
            HYCO Group (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates technology and infrastructure platforms across Southeast Asia, including Servicio.AI, ElectrifAI PH, LeasifAI, and BerdEV. We are committed to protecting your personal information in full compliance with the <strong>Philippine Data Privacy Act of 2012 (Republic Act No. 10173)</strong> and its Implementing Rules and Regulations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-slate-900">2. Information We Collect</h2>
          <p>We collect information you provide directly to us or through your use of our platforms:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Account &amp; Contact Information:</strong> Name, official email address, phone number, and company affiliation when you submit inquiries or register on our platforms.</li>
            <li><strong>Professional Verification (Servicio.AI):</strong> Professional Regulation Commission (PRC) licenses, government-issued IDs, and credentials required to verify service providers.</li>
            <li><strong>Mobility &amp; Usage Data (BerdEV):</strong> Geolocation data (while using the app) to provide live EV charger locations, plug availability, and navigation.</li>
            <li><strong>Technical Telemetry (ElectrifAI PH &amp; LeasifAI):</strong> Grid power logs, energy telemetry, and anonymized foot-traffic data.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-slate-900">3. How We Use Your Data</h2>
          <p>Your information is processed strictly for legitimate business purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Providing, matching, and maintaining platform services and user accounts.</li>
            <li>Processing secure escrow settlements and verifying professional credentials.</li>
            <li>Real-time EV navigation, route calculation, and charging network rewards.</li>
            <li>Responding to corporate, partner, and investor inquiries.</li>
            <li>Complying with statutory reporting requirements under Philippine law.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-slate-900">4. Your Rights Under Philippine Law</h2>
          <p>
            Under the Data Privacy Act of 2012, you possess statutory rights as a data subject, including the right to be informed, to access, to object, to rectification, to erasure or blocking, and to lodge a complaint with the <strong>National Privacy Commission (NPC)</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-slate-900">5. Data Security &amp; Retention</h2>
          <p>
            We implement industry-standard AES-256 encryption, TLS 1.3 data transfer protocols, and strict access controls. Data is retained only for as long as necessary to fulfill the declared purposes or as required by regulatory retention mandates (e.g. BIR tax compliance).
          </p>
        </section>

        <section className="space-y-3 p-6 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 className="text-base font-serif font-bold text-slate-900">Data Protection Officer (DPO)</h2>
          <p className="text-sm text-slate-600">
            To exercise your privacy rights or submit privacy-related questions, contact our Data Protection Officer at:
          </p>
          <div className="text-xs font-mono text-slate-800 space-y-0.5 pt-1">
            <div>Email: <a href="mailto:dpo@hyco.ltd" className="text-[#0F3383] underline">dpo@hyco.ltd</a></div>
            <div>Office: Ortigas Center, Pasig City, Metro Manila, Philippines</div>
          </div>
        </section>
      </main>
    </div>
  );
}
