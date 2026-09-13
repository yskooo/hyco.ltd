"use client";

import { motion } from 'motion/react';
import { ArrowRight, Zap, Activity, Cpu } from 'lucide-react';

export default function ElectrifAI() {
  return (
    <div className="w-full bg-white pt-28">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" className="text-blue-900" />
          </svg>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-14 px-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center">
                  <img src="/electrifai-logo.svg" alt="ElectrifAI Logo" className="h-10 w-auto object-contain" />
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 text-[#0F3383] text-xs font-bold uppercase tracking-widest font-mono rounded-lg">
                  <Zap size={14} className="mr-2" /> A HYCO Group Subsidiary
                </div>
              </div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-serif text-[#0f172a] mb-8 leading-[1.1]"
              >
                Intelligent Energy <br/> Management.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed"
              >
                ElectrifAI leverages advanced machine learning to optimize power grids, predict consumption patterns, and reduce energy waste for utility providers and industrial complexes.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <a
                  href="https://electrifaiph.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-blue-800 transition-colors text-center font-mono inline-flex items-center justify-center gap-2"
                >
                  Launch App Prototype ↗
                </a>
                <button className="border border-slate-300 text-[#0f172a] px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-slate-50 hover:border-slate-400 transition-colors font-mono">
                  Read Whitepaper
                </button>
              </motion.div>
            </div>

            {/* Prototype Showcase Card */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">Hardware &amp; Energy Prototype</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#0F3383] bg-blue-50 px-2 py-0.5 rounded font-bold">Live v1.0</span>
                </div>
                <div className="rounded-xl overflow-hidden bg-slate-950/5 border border-slate-200/80 p-4 flex items-center justify-center min-h-[260px]">
                  <img
                    src="/electrifai-eli.svg"
                    alt="ElectrifAI Prototype Interface"
                    className="w-full h-auto max-h-[300px] object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between font-mono">
                  <span>Prototype: Intelligent Telemetry</span>
                  <a href="https://electrifaiph.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold hover:underline">
                    View Interactive →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="group">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                <Activity size={28} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0f172a] mb-4">Predictive Load Balancing</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Anticipate demand spikes before they happen. Our models analyze historical data, weather patterns, and real-time usage to balance grid loads dynamically.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                <Cpu size={28} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0f172a] mb-4">Smart Grid Integration</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Seamlessly connect legacy infrastructure with modern IoT sensors. ElectrifAI acts as the central nervous system for your distributed energy resources.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0f172a] mb-4">Anomaly Detection</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Identify power leaks, equipment degradation, and unauthorized usage instantly. Reduce maintenance costs by shifting from reactive to predictive repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image/Data Section */}
      <section className="py-32 bg-[#0f172a] text-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-900/20 translate-x-6 translate-y-6 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" 
              alt="Power Grid" 
              className="relative z-10 w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="w-12 h-1 bg-blue-500 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Powering the Transition to Sustainable Energy.</h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              By optimizing existing infrastructure, ElectrifAI helps utilities reduce their carbon footprint by up to 15% without requiring massive capital expenditure in new hardware.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <ArrowRight className="text-blue-500 mr-4 mt-1" size={20} />
                <span className="text-slate-300 text-lg">Real-time carbon intensity tracking</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-blue-500 mr-4 mt-1" size={20} />
                <span className="text-slate-300 text-lg">Automated compliance reporting</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-blue-500 mr-4 mt-1" size={20} />
                <span className="text-slate-300 text-lg">Renewable energy source prioritization</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
