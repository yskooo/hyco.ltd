"use client";

import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Globe2, Zap, Navigation, BatteryCharging, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Simple counter component for trust stats
function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count % 1 !== 0 && count > 10 ? count.toFixed(1) : Math.floor(count)}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="w-full bg-white text-slate-900">
      {/* Citadel-Inspired Framed Cinematic Hero with White Frame Margins */}
      <section className="bg-white py-4 sm:py-6 md:py-8 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
          
          {/* Decorative Citadel-Style Brand Ribbon in the Left White Frame */}
          <svg
            className="absolute -left-6 md:-left-2 top-0 bottom-0 h-full w-36 pointer-events-none z-10 hidden sm:block"
            viewBox="0 0 140 760"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 120 0 C 10 160, 20 380, 70 540 C 110 680, 20 740, 10 760"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              className="drop-shadow-sm"
              opacity="0.9"
            />
          </svg>

          {/* Framed Cinematic Card */}
          <div className="relative w-full h-[74vh] min-h-[580px] max-h-[780px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-950 flex flex-col justify-between">
            
            {/* Cinematic Background AI Lab Visual */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/hero-ai-lab.jpg"
                className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
              </video>
              
              {/* High-Fidelity AI Engineering Lab Image */}
              <img
                src="/hero-ai-lab.jpg"
                alt="HYCO Group AI & Autonomous Systems Research Laboratory"
                className="absolute inset-0 w-full h-full object-cover object-center -z-10"
              />

              {/* Left-side Dark Vignette Scrim (Ensures 100% crisp typography over the lab environment) */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25"></div>
              
              {/* Precision Engineering Dot Matrix */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>
            </div>

            {/* Upper Title Area with Citadel-Grade Spacing */}
            <div className="relative z-10 w-full px-8 sm:px-12 md:px-16 lg:px-20 pt-12 sm:pt-16 md:pt-20">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="max-w-4xl"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-serif font-bold text-white tracking-tight leading-[1.08] drop-shadow-2xl">
                  Together, We <br className="hidden sm:inline" />
                  Turn Ambition <br className="hidden sm:inline" />
                  Into Action
                </h1>
              </motion.div>
            </div>

            {/* Bottom Overlay Bar for Description (Framed inside the card with Citadel Blue Wash) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-20 w-full bg-gradient-to-r from-[#0F3383]/95 via-[#133F9C]/95 to-[#1E52BF]/90 backdrop-blur-md border-t border-white/20 py-6 sm:py-8 px-8 sm:px-12 md:px-16"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-3xl">
                  <p className="text-base sm:text-lg md:text-xl text-white font-light leading-relaxed font-sans">
                    HYCO Group builds AI that matters, for people who deserve it. Deploying transformative AI and intelligent infrastructure across four high-impact ventures.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 shrink-0">
                  <a
                    href="#ventures"
                    className="inline-flex items-center gap-2 bg-white text-[#0F3383] hover:bg-slate-100 font-bold px-7 py-3.5 text-xs uppercase tracking-[0.2em] rounded transition-all shadow-md font-mono"
                  >
                    Explore Ventures <ArrowRight size={15} />
                  </a>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] rounded transition-all hover:bg-white/10 font-mono"
                  >
                    Who We Are
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Stats / Trust Bar (Executive Light) */}
      <section className="bg-white py-16 border-b border-slate-200 relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl font-bold text-[#0F3383] mb-2 font-serif"><Counter value={4} /></div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] font-mono">Core Ventures</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl font-bold text-slate-900 mb-2 font-serif">₱<Counter value={80} suffix="M+" /></div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] font-mono">Target ARR</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-5xl font-bold text-slate-900 mb-2 font-serif"><Counter value={100} suffix="k+" /></div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] font-mono">Target Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-5xl font-bold text-[#0F3383] mb-2 font-serif"><Counter value={100} suffix="%" /></div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] font-mono">ASEAN Focus</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section: Four High-Impact Ventures */}
      <section id="ventures" className="py-32 bg-[#f8fafc] text-black">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-20 md:flex justify-between items-end">
            <div className="max-w-3xl">
              <div className="flex items-center mb-4">
                <Zap className="text-[#1A46B0] mr-2" size={20} />
                <h2 className="text-xs font-bold text-[#0F3383] uppercase tracking-[0.3em] font-mono">HYCO Group</h2>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tighter uppercase font-serif">
                Four High-Impact Ventures.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Deploying transformative AI and intelligent infrastructure across four specialized operations—scaling high-value platforms across Southeast Asia.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            {/* 1. Servicio.AI (Lead Horse & Flagship) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link href="/servicio-ai" className="group flex flex-col md:flex-row bg-white border-2 border-[#1A46B0] transition-all duration-500 hover:shadow-[0_25px_50px_rgba(26,70,176,0.18)] overflow-hidden relative">
                <div className="absolute top-0 right-0 z-30 bg-[#1A46B0] text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2 flex items-center gap-2 shadow-md">
                  <span>★ Lead Horse &amp; Flagship Platform</span>
                </div>

                <div className="w-full md:w-[420px] lg:w-[500px] h-72 md:h-auto overflow-hidden relative transition-all duration-700 shrink-0 bg-slate-950 flex flex-col justify-between p-8 border-b md:border-b-0 md:border-r border-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono text-[#28A4E7]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#28A4E7] animate-pulse"></span>
                      SERVICIO AI MATCHING
                    </span>
                    <span className="text-slate-400">METRO MANILA &amp; NATIONWIDE</span>
                  </div>

                  {/* Simulated Marketplace Matching Card */}
                  <div className="my-auto bg-slate-900/95 border border-slate-800 rounded-xl p-4 shadow-xl">
                    <div className="text-[11px] text-slate-300 font-sans mb-3 bg-slate-950 p-2.5 rounded border border-slate-800 flex items-start gap-2">
                      <span className="text-[#28A4E7] font-mono font-bold text-xs mt-0.5">Prompt:</span>
                      <span>&quot;Need a licensed structural engineer in Ortigas for retrofitting review&quot;</span>
                    </div>

                    <div className="p-2.5 bg-blue-950/40 border border-blue-500/30 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <ShieldCheck size={14} className="text-[#28A4E7]" /> Engr. Marco V., PE
                        </span>
                        <span className="text-[10px] font-mono text-blue-300 font-bold bg-blue-900/50 px-1.5 py-0.5 rounded">
                          PRC Verified
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 flex items-center justify-between font-mono">
                        <span>Civil &amp; Structural · 12 yrs exp</span>
                        <span className="text-emerald-400 font-bold">Escrow Protected</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center font-mono text-xs text-slate-400 flex items-center justify-center gap-2">
                    <Globe2 size={13} className="text-[#28A4E7]" />
                    <span>&quot;Connecting clients with verified Filipino professionals&quot;</span>
                  </div>
                </div>

                <div className="p-10 md:p-12 lg:p-16 bg-white relative z-20 flex-grow flex flex-col justify-center">
                  <div className="absolute top-0 md:top-10 left-10 md:-left-1 w-12 md:w-1 h-1 md:h-12 bg-[#1A46B0]"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#0F3383] text-white flex items-center justify-center mr-6 shrink-0 shadow-md">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-3xl lg:text-4xl font-bold tracking-tight text-black font-serif">Servicio.AI</h4>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#0F3383] mt-1 font-mono">Flagship Venture</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 max-w-3xl leading-relaxed font-light">
                    Accessible, compliant AI-driven service solutions for Filipino SMEs and consumers.
                  </p>
                  <p className="text-sm text-gray-500 mb-6 max-w-3xl leading-relaxed">
                    Connecting clients with verified Filipino professionals—from licensed engineers and lawyers to academic tutors and IT experts—through intelligent natural language matching, manual credential verification, and secure escrow protection.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0F3383] px-3 py-1 rounded border border-blue-200">Verified PRC &amp; Gov ID</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0F3383] px-3 py-1 rounded border border-blue-200">AI Natural Language Match</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0F3383] px-3 py-1 rounded border border-blue-200">Escrow Payment Protection</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0F3383] px-3 py-1 rounded border border-blue-200">English &amp; Tagalog</span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#1A46B0] flex items-center transition-colors mt-auto group-hover:text-[#0F3383]">
                    Access Servicio.AI Marketplace <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* 2. ElectrifAI PH */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/electrifai" className="group flex flex-col md:flex-row-reverse bg-white border border-gray-200 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,51,131,0.12)] hover:border-[#1A46B0] overflow-hidden relative">
                <div className="absolute top-0 right-0 md:right-auto md:left-0 z-30 bg-[#0F3383] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 flex items-center gap-1.5 shadow-sm font-mono">
                  <span>⚡ Smart Energy &amp; Hardware</span>
                </div>

                <div className="w-full md:w-[400px] lg:w-[500px] h-64 md:h-auto overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                  <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" alt="ElectrifAI PH" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
                <div className="p-10 md:p-12 lg:p-16 bg-white relative z-20 flex-grow flex flex-col justify-center">
                  <div className="absolute top-0 md:top-10 right-10 md:-right-1 w-12 md:w-1 h-1 md:h-12 bg-black group-hover:bg-[#1A46B0] transition-colors duration-300"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#0F3383] text-white group-hover:bg-[#1A46B0] flex items-center justify-center mr-6 transition-colors duration-300 shrink-0">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="text-3xl lg:text-4xl font-bold tracking-tight text-black font-serif">ElectrifAI PH</h4>
                      <p className="text-xs font-mono uppercase tracking-widest text-[#0F3383] font-bold mt-1">Energy Intelligence</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 max-w-3xl leading-relaxed font-light">
                    Intelligent, data-driven smart energy monitoring and connected hardware.
                  </p>
                  <p className="text-sm text-gray-500 mb-6 max-w-3xl leading-relaxed">
                    Predictive grid telemetry and IoT-enabled energy monitoring solutions empowering utility operators, industrial plants, and commercial real estate to minimize peak surge costs and optimize carbon efficiency.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 px-3 py-1 rounded">IoT Connected Hardware</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 px-3 py-1 rounded">Telemetry &amp; Analytics</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 px-3 py-1 rounded">Peak Shaving AI</span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-black flex items-center group-hover:text-[#1A46B0] transition-colors mt-auto">
                    Explore ElectrifAI PH Platform <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* 3. LeasifAI */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/leasifai" className="group flex flex-col md:flex-row bg-white border border-gray-200 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,51,131,0.12)] hover:border-[#1A46B0] overflow-hidden relative">
                <div className="absolute top-0 right-0 z-30 bg-amber-500 text-slate-950 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 flex items-center gap-1.5 shadow-sm font-mono">
                  <span>● Status: GTM Phase</span>
                </div>

                <div className="w-full md:w-[400px] lg:w-[500px] min-h-[280px] md:min-h-0 h-auto overflow-hidden relative transition-all duration-700 shrink-0 bg-slate-50 flex flex-col items-center justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100 group-hover:bg-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A46B0]/0 to-[#1A46B0]/0 group-hover:from-[#1A46B0]/5 group-hover:to-transparent transition-colors duration-700"></div>
                  <img src="/img-folder/leasifAI.png" alt="LeasifAI Logo" className="w-20 h-20 object-contain mb-8 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 relative z-10" />
                  <p className="text-xl md:text-2xl font-bold text-center text-[#1A46B0] leading-tight relative z-10 font-serif">
                    &quot;We don&apos;t just help businesses find a space,<br />we help them find their place in the economy.&quot;
                  </p>
                </div>
                <div className="p-10 md:p-12 lg:p-16 bg-white relative z-20 flex-grow flex flex-col justify-center">
                  <div className="absolute top-0 md:top-10 left-10 md:-left-1 w-12 md:w-1 h-1 md:h-12 bg-black group-hover:bg-[#1A46B0] transition-colors duration-300"></div>
                  <div className="flex items-center mb-6">
                    <h4 className="text-3xl lg:text-4xl font-bold tracking-tight font-serif">
                      <span className="text-[#0F3383]">Leasif</span>
                      <span className="text-[#FF9500]">AI</span>
                    </h4>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 max-w-3xl leading-relaxed font-light">
                    AI-powered commercial real estate matching and automated leasing workflows.
                  </p>
                  <p className="text-sm text-gray-500 mb-6 max-w-3xl leading-relaxed">
                    Eliminating guesswork from commercial real estate with AI-driven foot traffic heatmaps, competitor radius analysis, demographic insights, and automated contract workflows.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 px-3 py-1 rounded">Footfall Heatmaps</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 px-3 py-1 rounded">ROI Forecasting</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 px-3 py-1 rounded">Automated Leasing</span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-black flex items-center group-hover:text-[#1A46B0] transition-colors mt-auto">
                    Explore LeasifAI Platform <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* 4. BerdEV */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/berdev" className="group flex flex-col md:flex-row-reverse bg-white border border-gray-200 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(40,164,231,0.15)] hover:border-[#28A4E7] overflow-hidden relative">
                <div className="absolute top-0 right-0 md:right-auto md:left-0 z-30 bg-[#0F3383] text-[#28A4E7] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 flex items-center gap-1.5 shadow-sm font-mono border-b border-[#28A4E7]/30">
                  <span>⚡ Smart EV Mobility &amp; Charging</span>
                </div>

                <div className="w-full md:w-[400px] lg:w-[500px] h-64 md:h-auto overflow-hidden relative transition-all duration-700 shrink-0 bg-slate-950 flex flex-col justify-between p-8 border-b md:border-b-0 md:border-l border-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono text-[#28A4E7]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#28A4E7] animate-ping"></span>
                      LIVE EV RADAR
                    </span>
                    <span className="text-slate-400">METRO MANILA &amp; SLEX</span>
                  </div>

                  {/* Simulated App Route Card */}
                  <div className="my-auto bg-slate-900/90 border border-slate-800 rounded-lg p-4 shadow-xl">
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-[#1A46B0]/30 text-[#28A4E7] flex items-center justify-center font-bold text-xs">
                          ⚡ DC
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white leading-tight">Shell Recharge • 120kW</div>
                          <div className="text-[10px] text-slate-400">SLEX Mamplasan • 4 Bays</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-[#28A4E7] bg-blue-950/80 border border-[#28A4E7]/30 px-2 py-0.5 rounded">
                        98% Uptime
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                      <div className="bg-slate-950 p-1.5 rounded border border-slate-800/80">
                        <div className="text-slate-400 text-[9px]">Available</div>
                        <div className="text-[#28A4E7] font-bold">2 of 4 Plugs</div>
                      </div>
                      <div className="bg-slate-950 p-1.5 rounded border border-slate-800/80">
                        <div className="text-slate-400 text-[9px]">Reliability</div>
                        <div className="text-white font-bold">Verified Today</div>
                      </div>
                      <div className="bg-slate-950 p-1.5 rounded border border-slate-800/80">
                        <div className="text-slate-400 text-[9px]">Credits</div>
                        <div className="text-amber-400 font-bold">+50 Berd Pts</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center font-mono text-xs text-slate-400 flex items-center justify-center gap-2">
                    <Navigation size={13} className="text-[#28A4E7]" />
                    <span>&quot;The Waze for Electric Vehicles&quot;</span>
                  </div>
                </div>

                <div className="p-10 md:p-12 lg:p-16 bg-white relative z-20 flex-grow flex flex-col justify-center">
                  <div className="absolute top-0 md:top-10 right-10 md:-right-1 w-12 md:w-1 h-1 md:h-12 bg-black group-hover:bg-[#28A4E7] transition-colors duration-300"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#0F3383] text-[#28A4E7] group-hover:bg-[#1A46B0] group-hover:text-white flex items-center justify-center mr-6 transition-colors duration-300 shrink-0">
                      <Navigation size={24} />
                    </div>
                    <div>
                      <h4 className="text-3xl lg:text-4xl font-bold tracking-tight text-black font-serif">BerdEV</h4>
                      <p className="text-xs font-mono uppercase tracking-widest text-[#0F3383] font-bold mt-1">
                        EV Charging &amp; Navigation Network
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 max-w-3xl leading-relaxed font-light">
                    Seamless EV charging locator and payment infrastructure for Philippine mobility.
                  </p>
                  <p className="text-sm text-gray-500 mb-6 max-w-3xl leading-relaxed">
                    The navigation and charging companion for Philippine EV drivers. Locate preferred chargers in real time, check verified station uptime, avoid broken chargers, and earn driver credits redeemable across partner retail locations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0F3383] px-3 py-1 rounded border border-blue-200">EV Charger Locator</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0F3383] px-3 py-1 rounded border border-blue-200">Live Uptime Verification</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0F3383] px-3 py-1 rounded border border-blue-200">Driver Credits &amp; Rewards</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0F3383] px-3 py-1 rounded border border-blue-200">CPO Interoperability</span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-black flex items-center group-hover:text-[#1A46B0] transition-colors mt-auto">
                    Explore BerdEV Platform <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section: HYCO Group */}
      <section id="about" className="py-32 bg-white text-black border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold text-[#0F3383] uppercase tracking-[0.3em] mb-4 font-mono">The Group</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-[1.05] tracking-tighter uppercase font-serif">
              Structured<br />For Scale.
            </h3>
            <div className="w-20 h-1 bg-[#1A46B0] mb-8"></div>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed font-light">
              Headquartered in Ortigas Center, Pasig City, <strong className="font-bold text-black">HYCO Group</strong> builds AI that matters, for people who deserve it—deploying transformative AI and intelligent infrastructure across four high-impact ventures.
            </p>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed font-light">
              We identify critical infrastructure bottlenecks across Southeast Asia and inject targeted AI solutions—powering high-tier professional marketplaces, intelligent grid telemetry, predictive commercial leasing, and electrified mobility networks.
            </p>
            <Link href="/about" className="inline-flex items-center bg-[#000000] text-white px-8 py-4 font-bold tracking-[0.2em] uppercase text-xs hover:bg-[#1A46B0] transition-colors group">
              Read Corporate Strategy <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200/80 shadow-[0_20px_50px_rgba(15,51,131,0.12)] bg-slate-950">
              <img
                src="/boardroom.jpg"
                alt="HYCO Group Executive Boardroom"
                className="w-full h-[560px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-8 md:p-10 text-white">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-[#28A4E7]">
                    Executive Governance Suite • Ortigas Center
                  </span>
                </div>
                <h4 className="text-2xl font-bold font-serif text-white tracking-tight">
                  HYCO Group Boardroom
                </h4>
                <p className="text-xs text-slate-300 mt-2 max-w-md font-light leading-relaxed">
                  Where capital allocation, AI infrastructure strategy, and operational governance converge across our four venture ecosystems.
                </p>
              </div>
            </div>

            {/* Lean Floating Metrics Tag */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-md border border-slate-200 p-5 rounded-xl shadow-xl hidden md:block">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Active Portfolio Oversight</div>
              <div className="text-lg font-bold font-serif text-[#0F3383] mt-0.5">4 Ventures • 1 Holding</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}