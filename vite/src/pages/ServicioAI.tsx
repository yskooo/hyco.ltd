import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Globe2, Users } from 'lucide-react';

export default function SerbisyowAI() {
  return (
    <div className="w-full bg-white pt-28">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <circle cx="80" cy="50" r="40" fill="currentColor" className="text-indigo-900" />
          </svg>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-8">
              <MessageSquare size={14} className="mr-2" /> A Hardy & Co. Subsidiary
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif text-[#0f172a] mb-8 leading-[1.1]"
            >
              Next-Generation <br/> Customer Service.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed"
            >
              Serbisyow AI deploys empathetic, context-aware conversational agents designed specifically for global BPOs and enterprise support centers.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button className="bg-indigo-700 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-indigo-800 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-slate-300 text-[#0f172a] px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-slate-50 hover:border-slate-400 transition-colors">
                View Case Studies
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
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white transition-colors duration-300">
                <Globe2 size={28} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0f172a] mb-4">Multilingual Fluency</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Native-level comprehension in over 40 languages. Serbisyow AI understands colloquialisms, slang, and cultural context, not just direct translations.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white transition-colors duration-300">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0f172a] mb-4">Contextual Memory</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Agents remember past interactions across all channels (voice, email, chat) to provide a seamless, personalized experience without asking users to repeat themselves.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white transition-colors duration-300">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0f172a] mb-4">Human-in-the-Loop</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Seamless escalation to human agents when emotional intelligence or complex decision-making is required, passing along full context and suggested resolutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image/Data Section */}
      <section className="py-32 bg-[#0f172a] text-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="w-12 h-1 bg-indigo-500 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Transforming the Call Center Economics.</h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              By automating up to 70% of Tier 1 and Tier 2 support queries, Serbisyow AI allows your human workforce to focus on high-value, complex customer relationships.
            </p>
            <div className="grid grid-cols-2 gap-12 mb-8">
              <div className="border-l-2 border-indigo-500 pl-6">
                <div className="text-5xl font-serif text-white mb-2">-45%</div>
                <div className="text-sm font-bold tracking-widest uppercase text-slate-400">Average Handle Time</div>
              </div>
              <div className="border-l-2 border-indigo-500 pl-6">
                <div className="text-5xl font-serif text-white mb-2">+32%</div>
                <div className="text-sm font-bold tracking-widest uppercase text-slate-400">First Contact Resolution</div>
              </div>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute inset-0 bg-indigo-900/20 -translate-x-6 translate-y-6 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" 
              alt="Customer Service" 
              className="relative z-10 w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
