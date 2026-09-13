import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use | HYCO Group',
  description: 'Terms and Conditions governing the use of HYCO Group platforms, websites, and services.',
};

export default function TermsPage() {
  return (
    <div className="w-full bg-white text-slate-800 pt-10 pb-28">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-10 border-b border-slate-200">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F3383] mb-3">
          HYCO Group • Legal
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-4 tracking-tight">
          Terms of Use
        </h1>
        <p className="text-sm text-slate-500 font-mono">
          Last Updated: January 2026 • Governing Law: Republic of the Philippines
        </p>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 text-[15px] text-slate-600 leading-relaxed space-y-10">
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the websites, applications, and services provided by HYCO Group (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not access or use our platforms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-slate-900">2. Platform Architecture &amp; Subsidiaries</h2>
          <p>
            HYCO Group operates as a technology venture group. Individual platforms—including <strong>Servicio.AI</strong> (verified professional marketplace), <strong>ElectrifAI PH</strong> (energy monitoring), <strong>LeasifAI</strong> (commercial location intelligence), and <strong>BerdEV</strong> (EV navigation &amp; charging network)—may feature specific user terms, escrow guidelines, and service agreements that apply to transactions conducted thereon.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-slate-900">3. Intellectual Property</h2>
          <p>
            All content, trademarks, software code, proprietary machine learning models, logos, and monograms displayed on our platforms are the intellectual property of HYCO Group and protected under the Intellectual Property Code of the Philippines (Republic Act No. 8293). Unauthorized reproduction, scraping, or reverse engineering is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-slate-900">4. User Conduct &amp; Prohibitions</h2>
          <p>When interacting with our platforms, you agree not to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Submit fraudulent credentials, false licensing, or counterfeit identification.</li>
            <li>Interfere with network security, payment escrow protocols, or grid telemetry feeds.</li>
            <li>Use automated bots, spiders, or scrapers without express written consent.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-slate-900">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted under Philippine law, HYCO Group and its affiliates shall not be liable for indirect, incidental, or consequential damages arising from the use or inability to use our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-slate-900">6. Governing Law &amp; Jurisdiction</h2>
          <p>
            These Terms of Use are governed by and construed in accordance with the laws of the <strong>Republic of the Philippines</strong>. Any dispute arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts of <strong>Pasig City, Metro Manila, Philippines</strong>.
          </p>
        </section>

        <section className="space-y-3 p-6 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 className="text-base font-serif font-bold text-slate-900">Corporate Inquiries</h2>
          <p className="text-sm text-slate-600">
            For legal notices or questions regarding these terms, please contact:
          </p>
          <div className="text-xs font-mono text-slate-800 space-y-0.5 pt-1">
            <div>Email: <a href="mailto:contact@hyco.ltd" className="text-[#0F3383] underline">contact@hyco.ltd</a></div>
            <div>Office: Ortigas Center, Pasig City, Metro Manila, Philippines</div>
          </div>
        </section>
      </main>
    </div>
  );
}
