import Link from 'next/link';
import { ShieldCheck, FileText, Scale } from 'lucide-react';

export const metadata = {
  title: 'Legal & Compliance | HYCO Group',
  description: 'Legal policies, statutory compliance, and corporate disclosures for HYCO Group.',
};

export default function LegalPage() {
  return (
    <div className="w-full bg-white text-slate-800 pt-10 pb-28">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-10 border-b border-slate-200">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F3383] mb-3">
          HYCO Group • Governance
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-4 tracking-tight">
          Legal &amp; Compliance
        </h1>
        <p className="text-sm text-slate-500 font-mono">
          Regulatory framework and statutory policies governing HYCO Group platforms.
        </p>
      </section>

      {/* Cards Grid */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/privacy-policy"
            className="p-8 border border-slate-200 rounded-xl hover:border-[#0F3383] hover:shadow-md transition-all group bg-white"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0F3383] flex items-center justify-center mb-4 group-hover:bg-[#0F3383] group-hover:text-white transition-colors">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg font-bold font-serif text-slate-900 mb-2">Privacy Policy</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              How we collect, protect, and process personal data in compliance with the Philippine Data Privacy Act of 2012 (RA 10173).
            </p>
          </Link>

          <Link
            href="/terms"
            className="p-8 border border-slate-200 rounded-xl hover:border-[#0F3383] hover:shadow-md transition-all group bg-white"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0F3383] flex items-center justify-center mb-4 group-hover:bg-[#0F3383] group-hover:text-white transition-colors">
              <FileText size={20} />
            </div>
            <h3 className="text-lg font-bold font-serif text-slate-900 mb-2">Terms of Use</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              User agreements, intellectual property protections, and governing law in the Republic of the Philippines.
            </p>
          </Link>
        </div>

        {/* Corporate Disclosure */}
        <section className="p-8 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
          <h2 className="text-base font-serif font-bold text-slate-900">Corporate Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 font-mono">
            <div>
              <span className="text-slate-400 block mb-0.5">Operating Entity</span>
              <strong className="text-slate-900 font-sans text-sm">HYCO Group</strong>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Registered Office</span>
              <strong className="text-slate-900 font-sans text-sm">Ortigas Center, Pasig City, Metro Manila</strong>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Corporate Structure</span>
              <strong className="text-slate-900 font-sans text-sm">One Company. Four Ventures.</strong>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Contact Inquiries</span>
              <strong className="text-[#0F3383] font-sans text-sm">contact@hyco.ltd</strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
