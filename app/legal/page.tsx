import Link from 'next/link';
import { ShieldCheck, FileText, Scale, Eye, Lock, AlertTriangle, Building, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Legal Hub & Corporate Governance | Hardy&Co. Group',
  description: 'Corporate disclosures, SEC regulatory standing, Philippine legal framework, and governance policies for Hardy&Co. Group.',
};

export default function LegalPage() {
  return (
    <div className="w-full bg-white text-slate-900 pt-12 pb-28">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono font-bold text-[#0F3383] uppercase tracking-widest">Regulatory &amp; Compliance</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Philippine Legal Framework</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-slate-950 tracking-tight mb-6">
              Legal Hub &amp; Governance.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              Corporate disclosures, regulatory standing, Philippine statutory compliance, and operating governance for Hardy&amp;Co. Group and its four subsidiaries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Navigation / Quick Links */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl sticky top-28">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F3383] mb-4">
                Legal Documents &amp; Policies
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/privacy-policy" className="flex items-center gap-2 text-slate-700 hover:text-[#0F3383] font-medium py-1">
                    <ShieldCheck size={16} className="text-[#0F3383]" />
                    <span>Privacy Policy (RA 10173)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="flex items-center gap-2 text-slate-700 hover:text-[#0F3383] font-medium py-1">
                    <FileText size={16} className="text-[#0F3383]" />
                    <span>Terms &amp; Conditions</span>
                  </Link>
                </li>
                <li>
                  <a href="#sec" className="flex items-center gap-2 text-slate-700 hover:text-[#0F3383] font-medium py-1">
                    <Building size={16} className="text-[#0F3383]" />
                    <span>SEC Corporate Standing</span>
                  </a>
                </li>
                <li>
                  <a href="#ita" className="flex items-center gap-2 text-slate-700 hover:text-[#0F3383] font-medium py-1">
                    <Scale size={16} className="text-[#0F3383]" />
                    <span>Internet Transactions Act (RA 11967)</span>
                  </a>
                </li>
                <li>
                  <a href="#whistleblower" className="flex items-center gap-2 text-slate-700 hover:text-[#0F3383] font-medium py-1">
                    <AlertTriangle size={16} className="text-[#0F3383]" />
                    <span>Whistleblower &amp; Ethics Policy</span>
                  </a>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 space-y-3">
                <p>
                  <strong>Entity:</strong> Hardy &amp; Co. PH Inc.<br />
                  <strong>Jurisdiction:</strong> Republic of the Philippines<br />
                  <strong>Primary Venue:</strong> Pasig City, Metro Manila
                </p>
                <Link
                  href="/contact"
                  className="block text-center py-2.5 bg-white border border-slate-300 hover:border-[#0F3383] text-[#0F3383] font-bold uppercase tracking-wider rounded text-[11px] transition-colors"
                >
                  Contact Legal Secretariat
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Legal Sections */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section 1: Corporate Standing */}
            <div id="sec" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-[#0F3383] text-xs font-mono font-bold uppercase rounded">
                Section 1
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-950">
                1. Corporate Organization &amp; SEC Standing
              </h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p className="text-slate-600 leading-relaxed">
                <strong>Hardy&amp;Co. Group</strong> operates through <strong>Hardy &amp; Co. PH Inc.</strong>, a corporation duly incorporated and existing in good standing under and by virtue of the laws of the Republic of the Philippines, registered with the Securities and Exchange Commission (SEC).
              </p>
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-mono text-xs text-slate-500">Corporate Name</span>
                  <span className="font-bold text-slate-900">Hardy &amp; Co. PH Inc.</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-mono text-xs text-slate-500">Brand / Trading Style</span>
                  <span className="font-bold text-slate-900">Hardy&amp;Co. Group</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-mono text-xs text-slate-500">Principal Office</span>
                  <span className="font-bold text-slate-900">Ortigas Center, Pasig City, Metro Manila 1605, Philippines</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-slate-500">Corporate Purpose</span>
                  <span className="text-right text-xs text-slate-700 max-w-sm">Holding company, technological incubation, software development, energy telemetry, and digital marketplaces.</span>
                </div>
              </div>
            </div>

            {/* Section 2: Four Ventures Separation */}
            <div id="structure" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-[#0F3383] text-xs font-mono font-bold uppercase rounded">
                Section 2
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-950">
                2. &quot;One Company. Four Ventures.&quot; Structure
              </h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p className="text-slate-600 leading-relaxed">
                Hardy&amp;Co. Group acts as the parent holding and venture engineering parent. Each operating venture maintains distinct operational scopes, separate accounting ledgers, and tailored regulatory compliance regimes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 border border-slate-200 rounded-lg bg-white">
                  <h4 className="font-bold text-slate-900 mb-1">Servicio.AI (Flagship)</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Operates as a high-tier professional service marketplace and AI escrow intermediary under the Internet Transactions Act of 2023 and Philippine Civil Code provisions on contract and service brokerage.
                  </p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg bg-white">
                  <h4 className="font-bold text-slate-900 mb-1">ElectrifAI PH</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Intelligent grid telemetry and IoT energy hardware compliance in accordance with Philippine Department of Energy (DOE) and National Telecommunications Commission (NTC) device standards.
                  </p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg bg-white">
                  <h4 className="font-bold text-slate-900 mb-1">LeasifAI</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Geospatial analytics and automated commercial leasing under Philippine commercial property laws, Real Estate Service Act (RESA), and anonymized demographic telemetry principles.
                  </p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg bg-white">
                  <h4 className="font-bold text-slate-900 mb-1">BerdEV</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    EV navigation, locator, and payment infrastructure compliant with Republic Act No. 11697 (Electric Vehicle Industry Development Act - EVIDA) and Bangko Sentral ng Pilipinas (BSP) digital payment frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Internet Transactions Act (RA 11967) */}
            <div id="ita" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-[#0F3383] text-xs font-mono font-bold uppercase rounded">
                Section 3
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-950">
                3. Internet Transactions Act of 2023 (Republic Act No. 11967)
              </h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p className="text-slate-600 leading-relaxed">
                In strict adherence to <strong>Republic Act No. 11967 (Internet Transactions Act of 2023)</strong>, Hardy&amp;Co. Group and its platform subsidiaries (specifically Servicio.AI and BerdEV) maintain:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#0F3383] shrink-0 mt-0.5" />
                  <span><strong>E-Commerce Bureau Registry:</strong> Transparent listing of registered corporate details, DTI accreditation, and verified trade names.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#0F3383] shrink-0 mt-0.5" />
                  <span><strong>Merchant &amp; Provider Verification:</strong> Verified identity, PRC licensing confirmation, and tax identification checking for professionals on Servicio.AI.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#0F3383] shrink-0 mt-0.5" />
                  <span><strong>Consumer Redress &amp; Escrow:</strong> Dedicated dispute resolution protocols and payment escrow custody to guarantee service completion prior to fund release.</span>
                </li>
              </ul>
            </div>

            {/* Section 4: Whistleblower & Anti-Bribery Policy */}
            <div id="whistleblower" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-[#0F3383] text-xs font-mono font-bold uppercase rounded">
                Section 4
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-950">
                4. Corporate Governance &amp; Whistleblower Channel
              </h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p className="text-slate-600 leading-relaxed">
                Hardy&amp;Co. Group enforces zero tolerance for corruption, bribery, conflicts of interest, and anti-competitive practices in compliance with the <strong>Revised Corporation Code of the Philippines (RA 11232)</strong> and the <strong>Anti-Graft and Corrupt Practices Act (RA 3019)</strong>.
              </p>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg space-y-3 text-sm">
                <h4 className="font-bold text-slate-900">Confidential Whistleblower Reporting</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Employees, suppliers, contractors, and partners who observe potential non-compliance, financial misconduct, or ethical breaches may report confidentially to our independent Audit &amp; Risk Committee.
                </p>
                <div className="text-xs font-mono font-bold text-[#0F3383]">
                  Confidential Desk: <a href="mailto:governance@hyco.ltd" className="underline">governance@hyco.ltd</a>
                </div>
              </div>
            </div>

            {/* Section 5: External Links & Inquiries */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Last reviewed by Corporate Legal Counsel: Q3 2026.
              </div>
              <div className="flex gap-4">
                <Link href="/privacy-policy" className="text-xs font-bold text-[#0F3383] hover:underline uppercase font-mono">
                  Read Privacy Policy →
                </Link>
                <Link href="/terms" className="text-xs font-bold text-[#0F3383] hover:underline uppercase font-mono">
                  Read Terms of Use →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
