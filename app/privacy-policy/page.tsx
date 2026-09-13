import Link from 'next/link';
import { Shield, Lock, Eye, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Philippine Data Privacy Act (RA 10173) | Hardy&Co. Group',
  description: 'Privacy Policy of Hardy&Co. Group in strict compliance with the Philippine Data Privacy Act of 2012 (Republic Act No. 10173) and National Privacy Commission regulations.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white text-slate-900 pt-12 pb-28">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono font-bold text-[#0F3383] uppercase tracking-widest">Republic Act No. 10173</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">National Privacy Commission (NPC) Compliance</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-slate-950 tracking-tight mb-6">
              Privacy Policy &amp; Data Protection.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              How Hardy&amp;Co. Group (Hardy &amp; Co. PH Inc.) collects, protects, processes, and manages personal data in strict compliance with the Philippine Data Privacy Act of 2012.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Summary Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl sticky top-28 space-y-6">
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F3383] mb-2">
                  Designated DPO
                </h3>
                <p className="text-sm text-slate-700 font-medium">
                  Data Protection Officer<br />
                  Hardy &amp; Co. PH Inc.<br />
                  Ortigas Center, Pasig City, PH
                </p>
                <div className="mt-2">
                  <a href="mailto:dpo@hyco.ltd" className="text-xs font-mono font-bold text-[#0F3383] hover:underline">
                    dpo@hyco.ltd
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Regulatory Body
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  National Privacy Commission (NPC)<br />
                  PICC Complex, Roxas Boulevard, Pasay City, Metro Manila<br />
                  <a href="https://privacy.gov.ph" target="_blank" rel="noreferrer" className="text-[#0F3383] underline">
                    privacy.gov.ph
                  </a>
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Scope of Policy
                </h4>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                  <li>Hardy&amp;Co. Group website</li>
                  <li>Servicio.AI professional marketplace</li>
                  <li>ElectrifAI PH telemetry platform</li>
                  <li>LeasifAI analytics system</li>
                  <li>BerdEV locator &amp; navigation network</li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="block text-center py-2.5 bg-[#0F3383] hover:bg-[#1A46B0] text-white font-bold uppercase tracking-wider rounded text-[11px] transition-colors shadow-sm"
              >
                Inquire With DPO Desk
              </Link>
            </div>
          </div>

          {/* Right Detailed Sections */}
          <div className="lg:col-span-8 space-y-12 text-slate-700 leading-relaxed">
            {/* 1. Introduction & Statutory Commitment */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-950">1. Statutory Commitment &amp; Scope</h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p>
                Hardy &amp; Co. PH Inc. (&quot;Hardy&amp;Co. Group&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to safeguarding personal data in adherence to <strong>Republic Act No. 10173</strong>, also known as the <em>Data Privacy Act of 2012 (DPA)</em>, its Implementing Rules and Regulations (IRR), and all applicable issuances of the National Privacy Commission (NPC).
              </p>
              <p>
                This Privacy Policy applies to personal information gathered through our parent group website and across our operating subsidiaries: <strong>Servicio.AI</strong>, <strong>ElectrifAI PH</strong>, <strong>LeasifAI</strong>, and <strong>BerdEV</strong>.
              </p>
            </div>

            {/* 2. Core Principles */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-950">2. Core Principles of Data Processing</h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p>
                All personal data processing under Hardy&amp;Co. Group adheres strictly to the three foundational tenets of the DPA:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-1">Transparency</h4>
                  <p className="text-xs text-slate-600">
                    Data subjects are fully apprised of the nature, purpose, and extent of processing prior to data acquisition.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-1">Legitimate Purpose</h4>
                  <p className="text-xs text-slate-600">
                    Data is handled strictly for declared, specified, and legally sanctioned commercial and operational purposes.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-1">Proportionality</h4>
                  <p className="text-xs text-slate-600">
                    Processing is restricted to the minimum information necessary to fulfill specified commercial objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Information We Collect */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-950">3. Information Collected Across Our Ventures</h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <ul className="space-y-3 text-sm">
                <li className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <strong className="text-slate-900 block mb-1">A. General Website Inquiries &amp; Investor Contact</strong>
                  <span className="text-slate-600 text-xs">Name, official email address, corporate entity, contact telephone number, and narrative communications submitted via our contact channels.</span>
                </li>
                <li className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <strong className="text-slate-900 block mb-1">B. Servicio.AI (Professional Marketplace Verification)</strong>
                  <span className="text-slate-600 text-xs">Professional Regulation Commission (PRC) licenses, government-issued identification cards, Tax Identification Numbers (TIN), educational credentials, portfolio proofs, and escrow payment settlement accounts.</span>
                </li>
                <li className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <strong className="text-slate-900 block mb-1">C. BerdEV (Mobility &amp; Navigation Network)</strong>
                  <span className="text-slate-600 text-xs">Real-time GPS geolocation telemetry (only while application is active), vehicle charging plug specifications, charger uptime ratings, and driver reward ledger histories.</span>
                </li>
                <li className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <strong className="text-slate-900 block mb-1">D. ElectrifAI PH &amp; LeasifAI (Enterprise Telemetry)</strong>
                  <span className="text-slate-600 text-xs">Industrial power consumption logs, grid meter telemetry, anonymized pedestrian foot-traffic indices, and commercial site coordinates.</span>
                </li>
              </ul>
            </div>

            {/* 4. Statutory Rights of Data Subjects */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-950">4. Your Statutory Rights Under RA 10173</h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p className="text-sm text-slate-600">
                As a data subject under Philippine law, you possess explicit rights that Hardy&amp;Co. Group rigorously upholds:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg">
                  <strong className="text-slate-900 block mb-0.5">1. Right to be Informed</strong>
                  <span className="text-slate-600">To know whether personal data pertaining to you is being or will be processed.</span>
                </div>
                <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg">
                  <strong className="text-slate-900 block mb-0.5">2. Right to Access</strong>
                  <span className="text-slate-600">To demand reasonable access to contents, sources, and recipients of your data.</span>
                </div>
                <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg">
                  <strong className="text-slate-900 block mb-0.5">3. Right to Object</strong>
                  <span className="text-slate-600">To withhold or withdraw consent to processing for direct marketing or profiling.</span>
                </div>
                <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg">
                  <strong className="text-slate-900 block mb-0.5">4. Right to Erasure or Blocking</strong>
                  <span className="text-slate-600">To suspend, withdraw, or order removal of inaccurate, outdated, or unlawfully obtained data.</span>
                </div>
                <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg">
                  <strong className="text-slate-900 block mb-0.5">5. Right to Damages</strong>
                  <span className="text-slate-600">To be indemnified for damages sustained due to inaccurate, false, or unauthorized data.</span>
                </div>
                <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg">
                  <strong className="text-slate-900 block mb-0.5">6. Right to Rectification</strong>
                  <span className="text-slate-600">To dispute inaccuracies and have your personal information immediately corrected.</span>
                </div>
                <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg">
                  <strong className="text-slate-900 block mb-0.5">7. Right to Data Portability</strong>
                  <span className="text-slate-600">To obtain an electronic, structured copy of your data for continued personal use.</span>
                </div>
                <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg">
                  <strong className="text-slate-900 block mb-0.5">8. Right to File a Complaint</strong>
                  <span className="text-slate-600">To lodge formal grievances directly with the National Privacy Commission.</span>
                </div>
              </div>
            </div>

            {/* 5. Security & Data Retention */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-950">5. Data Retention &amp; Security Standards</h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p>
                We apply bank-grade AES-256 encryption in transit (TLS 1.3) and at rest across our cloud databases. Access to personal records is governed by role-based access controls (RBAC) restricted exclusively to authorized personnel.
              </p>
              <p>
                Personal information is retained only for as long as necessary to fulfill the declared purposes, or as mandated by statutory retention periods prescribed by the Bureau of Internal Revenue (BIR) and applicable Philippine regulatory authorities (typically 5 to 10 years for financial records).
              </p>
            </div>

            {/* 6. Contacting the DPO */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <h3 className="font-serif font-bold text-slate-950 text-lg">Inquiries &amp; Privacy Requests</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To exercise any of your statutory rights, report a suspected data breach, or seek clarification on our privacy practices, please contact our Data Protection Office directly:
              </p>
              <div className="text-xs font-mono text-slate-800 space-y-1">
                <div><strong>Email:</strong> <a href="mailto:dpo@hyco.ltd" className="text-[#0F3383] underline">dpo@hyco.ltd</a></div>
                <div><strong>Physical Address:</strong> Data Protection Office, Hardy &amp; Co. PH Inc., Ortigas Center, Pasig City, Metro Manila, Philippines</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
