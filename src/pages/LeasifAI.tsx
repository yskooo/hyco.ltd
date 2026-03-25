import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Building2, FileText } from 'lucide-react';

export default function LeasifAI() {
  return (
    <div className="w-full bg-white pt-28">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <polygon points="0,100 100,0 100,100" fill="currentColor" className="text-emerald-900" />
          </svg>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-8">
              <Building2 size={14} className="mr-2" /> A Hardy & Co. Subsidiary
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif text-[#0f172a] mb-8 leading-[1.1]"
            >
              Smart Real Estate <br/> & Leasing Solutions.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed"
            >
              LeasifAI automates the entire leasing lifecycle. From AI-driven tenant screening and contract generation to dynamic pricing models for commercial and residential portfolios.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button className="bg-emerald-700 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-emerald-800 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-slate-300 text-[#0f172a] px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-slate-50 hover:border-slate-400 transition-colors">
                Explore Platform
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="group">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0f172a] mb-4">Predictive Tenant Screening</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Go beyond basic credit checks. Our models analyze thousands of data points to predict tenant reliability, reducing default rates and turnover costs.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0f172a] mb-4">Automated Contract Analysis</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Instantly generate, review, and extract key clauses from complex commercial leases. Ensure compliance and identify risk exposure across your entire portfolio.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                <Building2 size={28} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0f172a] mb-4">Dynamic Pricing Engine</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Maximize yield with algorithmic pricing that adjusts in real-time based on market demand, seasonality, local economic indicators, and property features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image/Data Section */}
      <section className="py-32 bg-[#0f172a] text-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-900/20 translate-x-6 translate-y-6 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop" 
              alt="Modern Real Estate" 
              className="relative z-10 w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="w-12 h-1 bg-emerald-500 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Institutional Grade PropTech.</h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Built for REITs, asset managers, and large-scale property developers. LeasifAI integrates directly with Yardi, RealPage, and other legacy management systems.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <ArrowRight className="text-emerald-500 mr-4 mt-1" size={20} />
                <span className="text-slate-300 text-lg">Reduce vacancy cycles by an average of 14 days</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-emerald-500 mr-4 mt-1" size={20} />
                <span className="text-slate-300 text-lg">Cut legal review time by 80%</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-emerald-500 mr-4 mt-1" size={20} />
                <span className="text-slate-300 text-lg">Increase portfolio yield by 4-7% annually</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
