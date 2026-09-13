import Link from 'next/link';
import { FileCheck, Shield, Scale, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | Hardy&Co. Group',
  description: 'Terms and Conditions governing the use of Hardy&Co. Group websites, platforms, and corporate services under the laws of the Republic of the Philippines.',
};

export default function TermsPage() {
  return (
    <div className="w-full bg-white text-slate-900 pt-12 pb-28">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono font-bold text-[#0F3383] uppercase tracking-widest">Governing Framework</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Philippine Jurisdiction</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-slate-950 tracking-tight mb-6">
              Terms &amp; Conditions.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              Standard operating terms, intellectual property protections, venture disclaimers, and user obligations governing interaction with Hardy&amp;Co. Group digital assets.
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
                  Operating Entity
                </h3>
                <p className="text-sm text-slate-700 font-medium">
                  Hardy &amp; Co. PH Inc.<br />
                  SEC Domestic Corporation<br />
                  Ortigas Center, Pasig City, PH
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Governing Law
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Republic of the Philippines.<br />
                  Exclusive dispute venue: Proper Courts of Pasig City, Metro Manila.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Related Policies
                </h4>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>
                    <Link href="/privacy-policy" className="text-[#0F3383] font-bold hover:underline">
                      Privacy Policy (RA 10173) →
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal" className="text-[#0F3383] font-bold hover:underline">
                      Corporate Governance &amp; SEC →
                    </Link>
                  </li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="block text-center py-2.5 bg-[#0F3383] hover:bg-[#1A46B0] text-white font-bold uppercase tracking-wider rounded text-[11px] transition-colors shadow-sm"
              >
                Inquire With Legal Counsel
              </Link>
            </div>
          </div>

          {/* Right Detailed Sections */}
          <div className="lg:col-span-8 space-y-12 text-slate-700 leading-relaxed">
            {/* 1. Acceptance */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-950">1. Acceptance of Terms</h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p>
                By accessing, browsing, or utilizing the web portals, APIs, or informational materials provided by <strong>Hardy &amp; Co. PH Inc.</strong> (&quot;Hardy&amp;Co. Group&quot;), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions and our Privacy Policy.
              </p>
              <p>
                If you do not agree to these terms, you must discontinue access to our platforms immediately.
              </p>
            </div>

            {/* 2. Intellectual Property */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-950">2. Intellectual Property Rights</h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p>
                All content, monograms, logos, designs, proprietary machine learning models, text, graphics, and code featured on this site are the exclusive intellectual property of Hardy &amp; Co. PH Inc. or licensed appropriately.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600">
                Trademarks and trade names including <strong>Hardy&amp;Co. Group</strong>, <strong>Servicio.AI</strong>, <strong>ElectrifAI PH</strong>, <strong>LeasifAI</strong>, and <strong>BerdEV</strong> are proprietary trade symbols protected under the Intellectual Property Code of the Philippines (Republic Act No. 8293). Unauthorized reproduction, reverse engineering, or scraping is strictly prohibited.
              </div>
            </div>

            {/* 3. Subsidiary & Platform Disclaimers */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-950">3. Subsidiary Specific User Agreements</h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p>
                Hardy&amp;Co. Group operates under a holding architecture. Users transacting on specific subsidiary platforms are subject to additional venture-specific terms:
              </p>
              <ul className="space-y-3 text-sm">
                <li className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <strong className="text-slate-900 block mb-0.5">Servicio.AI</strong>
                  <span className="text-slate-600 text-xs">Governed by client-professional escrow terms, PRC verification agreements, and dispute resolution guidelines under RA 11967.</span>
                </li>
                <li className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <strong className="text-slate-900 block mb-0.5">BerdEV</strong>
                  <span className="text-slate-600 text-xs">Governed by driver navigation terms, crowdsourced station accuracy disclaimers, and partner credit redemption protocols.</span>
                </li>
                <li className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <strong className="text-slate-900 block mb-0.5">ElectrifAI PH &amp; LeasifAI</strong>
                  <span className="text-slate-600 text-xs">Governed by enterprise Service Level Agreements (SLAs), IoT hardware warranty terms, and commercial leasing master service agreements.</span>
                </li>
              </ul>
            </div>

            {/* 4. Forward-Looking Statements Disclaimer */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-950">4. Investor &amp; Strategic Information Disclaimer</h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p>
                Informational figures regarding Target ARR, user growth, valuation, and venture scaling presented across our web presence are forward-looking statements made for strategic orientation. They do not constitute an offer to sell or the solicitation of an offer to buy any security, nor shall there be any sale of securities in any jurisdiction in which such offer would be unlawful prior to registration under the Securities Regulation Code (RA 8799).
              </p>
            </div>

            {/* 5. Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-950">5. Limitation of Liability</h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p>
                To the maximum extent permitted by Philippine law, Hardy&amp;Co. Group shall not be liable for any indirect, incidental, consequential, special, or exemplary damages resulting from your access to or inability to access this website, or reliance on information contained herein.
              </p>
            </div>

            {/* 6. Governing Law & Dispute Resolution */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-950">6. Governing Law &amp; Jurisdiction</h2>
              <div className="w-12 h-1 bg-[#0F3383]"></div>
              <p>
                These Terms and Conditions shall be governed by, construed, and enforced in accordance with the laws of the Republic of the Philippines, without giving effect to any principles of conflicts of law.
              </p>
              <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-lg text-xs text-slate-700">
                Any legal action, suit, or proceeding arising out of or relating to these Terms shall be instituted exclusively in the competent courts of <strong>Pasig City, Metro Manila, Philippines</strong>, to the exclusion of all other courts.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
