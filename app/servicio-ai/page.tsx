"use client";

import { motion } from 'motion/react';
import { MessageSquare, Globe2, Users, Briefcase, Zap, ShieldCheck, Headphones, Wrench, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Servicio() {
  return (
    <div className="w-full bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px]"></div>
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/30 blur-[140px] rounded-full"></div>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <Link href="/#portfolio" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={14} className="mr-2" /> Back to Ecosystem
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-1.5 bg-blue-600/20 border border-blue-400/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} className="mr-2" /> Flagship Subsidiary &amp; Primary Focus
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-8 leading-[1.08]"
            >
              Servicio. <br/>
              <span className="text-blue-400">AI Customer Support</span> &amp; <br/>
              <span className="text-slate-200">Enterprise Servicing.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-10 max-w-3xl"
            >
              The unified engine powering modern operations: An intelligent omnichannel AI customer service platform combined with end-to-end enterprise technology servicing and talent solutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#product" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors shadow-lg">
                Explore The Product
              </a>
              <a href="#servicing" className="border border-white/20 hover:border-white text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors">
                The Servicing Business
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dual Engine Overview */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">Operating Model</div>
            <h2 className="text-4xl font-serif text-[#0f172a]">The Dual-Engine Advantage</h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Most technology providers offer either software with no operational support, or traditional outsourcing with outdated tools. Servicio bridges this divide by delivering state-of-the-art AI software backed by dedicated execution teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Engine 1: Product */}
            <div className="bg-white p-10 border-2 border-blue-600 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5">
                Engine 01 : SaaS Product
              </div>
              <div className="w-14 h-14 bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Headphones size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0f172a] mb-4">
                Next-Gen Conversational &amp; Voice AI
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Autonomous, context-aware AI agents designed for BPOs, enterprises, and high-volume support operations. Resolves tier-1 and tier-2 customer inquiries across voice, chat, email, and social channels in real time.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={16} />
                  <span>Multilingual fluency across 40+ languages and dialects</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={16} />
                  <span>Persistent customer memory and cross-channel context</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={16} />
                  <span>Real-time sentiment detection and seamless agent handover</span>
                </li>
              </ul>
            </div>

            {/* Engine 2: Servicing Business */}
            <div className="bg-white p-10 border border-slate-300 shadow-xl relative overflow-hidden group hover:border-slate-800 transition-colors">
              <div className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5">
                Engine 02 : Servicing Business
              </div>
              <div className="w-14 h-14 bg-slate-100 text-slate-900 flex items-center justify-center mb-6">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0f172a] mb-4">
                Enterprise Tech Servicing &amp; Talent
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Managed implementation, continuous optimization, and high-caliber human-in-the-loop technical personnel. We ensure enterprise AI deployments integrate securely with core ERP/CRM legacy workflows.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-slate-900 shrink-0" size={16} />
                  <span>Bespoke systems integration &amp; enterprise workflow engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-slate-900 shrink-0" size={16} />
                  <span>Managed QA, human evaluation, and domain model tuning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-slate-900 shrink-0" size={16} />
                  <span>On-demand vetted technical &amp; customer operations personnel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Product Deep-Dive */}
      <section className="py-28 bg-white" id="product">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">Product Capabilities</div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0f172a]">Autonomous Customer Intelligence</h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Designed specifically to tackle the high turnover, long hold times, and operational costs plaguing contact centers today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group p-8 border border-slate-200 hover:border-blue-600 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Globe2 size={26} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0f172a] mb-3">Multilingual Fluency</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Native-level comprehension in over 40 languages, including colloquial English and Taglish nuances, ensuring natural, culturally resonant customer experiences.
              </p>
            </div>

            <div className="group p-8 border border-slate-200 hover:border-blue-600 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <MessageSquare size={26} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0f172a] mb-3">Contextual Memory</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Agents recall past customer interactions across all channels without manual CRM lookups, resolving complex inquiries without repetitive user questioning.
              </p>
            </div>

            <div className="group p-8 border border-slate-200 hover:border-blue-600 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Users size={26} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0f172a] mb-3">Human-in-the-Loop</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Seamless handoff protocol. When a scenario requires executive discretion or complex emotional nuance, the system routes the caller with structured context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Servicing Business Deep-Dive */}
      <section className="py-28 bg-[#0f172a] text-white" id="servicing">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Enterprise Servicing</div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                Beyond Software: <br />
                Full-Service Execution.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Servicio is not just a self-service software tool—we are an operating partner. For enterprise clients requiring custom orchestration, we provide end-to-end technical servicing:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Wrench size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Custom API &amp; Legacy ERP/CRM Integration</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Connecting modern LLM pipelines into Zendesk, Salesforce, SAP, and proprietary internal databases.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">SLA-Guaranteed CX Operations</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Continuous 24/7 telemetry monitoring, halluncination guardrails, and compliance audits.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Dedicated AI &amp; Software Personnel</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Deploying top-tier engineers and support leads directly onto your transformation roadmap.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-800/80 border border-slate-700 p-8 md:p-12">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">Impact Economics</div>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="border-l-2 border-blue-500 pl-6">
                  <div className="text-4xl md:text-5xl font-serif text-white mb-2">-50%</div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Cost Per Contact</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-6">
                  <div className="text-4xl md:text-5xl font-serif text-white mb-2">&lt; 3s</div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">First Response Latency</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-6">
                  <div className="text-4xl md:text-5xl font-serif text-white mb-2">92%</div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Tier-1 First Contact Resolution</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-6">
                  <div className="text-4xl md:text-5xl font-serif text-white mb-2">24/7/365</div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Continuous Uptime</p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-700">
                <p className="text-xs text-slate-400 leading-relaxed">
                  As Hardy &amp; Co.&apos;s designated lead horse, Servicio is actively driving commercial pilot rollouts and enterprise service contracts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Deploy Servicio Across Your Organization?</h2>
          <p className="text-blue-100 text-base max-w-2xl mx-auto mb-8">
            Whether you require enterprise AI agent software or a full-scale servicing and operational team, let&apos;s discuss your deployment roadmap.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-lg">
              Schedule An Executive Briefing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
