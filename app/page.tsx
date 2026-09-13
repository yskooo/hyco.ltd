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
      {/* Citadel-Inspired Framed Cinematic Hero with Clean White Margins */}
      <section className="bg-white py-4 sm:py-6 md:py-8 relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          {/* Framed Cinematic Card with Grand Scale Height */}
          <div className="relative w-full h-[86vh] min-h-[740px] max-h-[960px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-950 flex flex-col justify-between">
            
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

            {/* Upper Title Area with Grand Executive Spacing */}
            <div className="relative z-10 w-full px-8 sm:px-12 md:px-16 lg:px-20 pt-16 sm:pt-24 md:pt-28">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="max-w-4xl"
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-serif font-bold text-white tracking-tight leading-[1.04] drop-shadow-2xl">
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
              className="relative z-20 w-full bg-gradient-to-r from-[#0F3383]/95 via-[#133F9C]/95 to-[#1E52BF]/90 backdrop-blur-md border-t border-white/20 py-8 sm:py-10 px-8 sm:px-14 md:px-18"
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

          {/* Static Marquee-Style Portfolio Venture Bar Below Hero Card */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0F3383] animate-pulse"></span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-slate-500">
                  Portfolio Ventures &amp; Operating Entities
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Four Active Platforms Across AI &amp; Infrastructure
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* 1. Servicio.AI */}
              <Link
                href="/servicio-ai"
                className="group p-6 md:p-7 bg-slate-50/90 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-[#0F3383]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-28 md:h-32 flex items-center justify-center mb-4 px-4">
                  <img
                    src="/servicio-logo.png"
                    alt="Servicio.AI"
                    className="h-16 sm:h-20 md:h-22 w-auto max-w-[220px] object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>
                <div className="text-center pt-4 border-t border-slate-200/80">
                  <div className="font-bold text-slate-900 text-base md:text-lg group-hover:text-[#0F3383] transition-colors flex items-center justify-center gap-1.5">
                    <span>Servicio.AI</span>
                    <ArrowRight size={15} className="text-slate-400 group-hover:text-[#0F3383] group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-1">Flagship Service AI</div>
                </div>
              </Link>

              {/* 2. ElectrifAI */}
              <Link
                href="/electrifai"
                className="group p-6 md:p-7 bg-slate-50/90 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-[#0F3383]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-28 md:h-32 flex items-center justify-center mb-4 px-4">
                  <img
                    src="/electrifai-logo.svg"
                    alt="ElectrifAI"
                    className="h-18 sm:h-22 md:h-24 w-auto max-w-[220px] object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>
                <div className="text-center pt-4 border-t border-slate-200/80">
                  <div className="font-bold text-slate-900 text-base md:text-lg group-hover:text-[#0F3383] transition-colors flex items-center justify-center gap-1.5">
                    <span>ElectrifAI</span>
                    <ArrowRight size={15} className="text-slate-400 group-hover:text-[#0F3383] group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-1">Smart Meters &amp; ELI Smart Plugs</div>
                </div>
              </Link>

              {/* 3. LeasifAI */}
              <Link
                href="/leasifai"
                className="group p-6 md:p-7 bg-slate-50/90 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-[#0F3383]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-28 md:h-32 flex items-center justify-center mb-4 px-4">
                  <img
                    src="/leasifai-logo.png"
                    alt="LeasifAI"
                    className="h-16 sm:h-20 md:h-22 w-auto max-w-[220px] object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>
                <div className="text-center pt-4 border-t border-slate-200/80">
                  <div className="font-bold text-slate-900 text-base md:text-lg group-hover:text-[#0F3383] transition-colors flex items-center justify-center gap-1.5">
                    <span>LeasifAI</span>
                    <ArrowRight size={15} className="text-slate-400 group-hover:text-[#0F3383] group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-1">Commercial Underwriting</div>
                </div>
              </Link>

              {/* 4. BerdEV (BlackGreen Text Logo) */}
              <Link
                href="/berdev"
                className="group p-6 md:p-7 bg-slate-50/90 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-600/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-28 md:h-32 flex items-center justify-center mb-4 px-4">
                  <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-950 border-2 border-emerald-500/50 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-extrabold text-2xl sm:text-3xl tracking-tight font-sans text-white">
                      Berd<span className="text-emerald-400">EV</span>
                    </span>
                  </div>
                </div>
                <div className="text-center pt-4 border-t border-slate-200/80">
                  <div className="font-bold text-slate-900 text-base md:text-lg group-hover:text-emerald-700 transition-colors flex items-center justify-center gap-1.5">
                    <span>BerdEV</span>
                    <ArrowRight size={15} className="text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="text-xs text-emerald-600 font-mono mt-1">Clean Energy EV Network</div>
                </div>
              </Link>
            </div>
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
                        <span className="text-[10px] font-mono text-[#28A4E7] bg-blue-900/50 px-1.5 py-0.5 rounded">
                          PRC #0148922
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-400">
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
                    <div className="h-16 px-5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mr-6 shrink-0 shadow-sm">
                      <img src="/servicio-logo.png" alt="Servicio.AI" className="h-11 w-auto object-contain" />
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

            {/* 2. ElectrifAI (IoT Smart Meters & ELI Smart Plugs) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row-reverse bg-white border border-gray-200 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,51,131,0.12)] hover:border-[#1A46B0] overflow-hidden relative">
                <div className="absolute top-0 right-0 md:right-auto md:left-0 z-30 bg-[#0F3383] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 flex items-center gap-1.5 shadow-sm font-mono">
                  <span>⚡ IoT Smart Meters &amp; Smart Plugs</span>
                </div>

                <div className="w-full md:w-[420px] lg:w-[500px] min-h-[300px] md:min-h-0 bg-slate-950 flex flex-col justify-between p-8 border-b md:border-b-0 md:border-l border-slate-800 shrink-0">
                  <div className="flex items-center justify-between text-xs font-mono text-[#00A5FF]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00A5FF] animate-pulse"></span>
                      ELI LIVE LOAD TELEMETRY
                    </span>
                    <span className="text-emerald-400 font-bold">-26% Meralco Cut</span>
                  </div>

                  {/* Simulated ELI Smart Plug Screen */}
                  <div className="my-auto bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-2xl">
                    <div className="flex items-center justify-between mb-2 text-[10px] font-mono text-slate-400">
                      <span>LIVE APPLIANCE DRAW</span>
                      <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">ELI Active</span>
                    </div>
                    <div className="text-3xl font-bold font-mono text-white mb-1">
                      1,284<span className="text-sm font-normal text-slate-400"> W</span>
                    </div>
                    <div className="text-xs text-[#00A5FF] font-mono mb-3">
                      ₱14.62 / hr · Aircon Sala
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-3 border-t border-slate-800">
                      <div className="bg-slate-950 p-2 rounded border border-slate-800">
                        <div className="text-slate-500">Phantom Power</div>
                        <div className="text-emerald-400 font-bold">Killed (0W)</div>
                      </div>
                      <div className="bg-slate-950 p-2 rounded border border-slate-800">
                        <div className="text-slate-500">Monthly Savings</div>
                        <div className="text-white font-bold">₱2,400 / mo</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center font-mono text-xs text-slate-400 flex items-center justify-center gap-2">
                    <Zap size={13} className="text-[#00A5FF]" />
                    <span>&quot;Make Each kWh Count!&quot;</span>
                  </div>
                </div>

                <div className="p-10 md:p-12 lg:p-16 bg-white relative z-20 flex-grow flex flex-col justify-center">
                  <div className="absolute top-0 md:top-10 right-10 md:-right-1 w-12 md:w-1 h-1 md:h-12 bg-black group-hover:bg-[#1A46B0] transition-colors duration-300"></div>
                  <div className="flex items-center mb-6">
                    <div className="h-16 px-5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mr-6 shrink-0 shadow-sm">
                      <img src="/electrifai-logo.svg" alt="ElectrifAI" className="h-12 w-auto object-contain" />
                    </div>
                    <div>
                      <h4 className="text-3xl lg:text-4xl font-bold tracking-tight text-black font-serif">ElectrifAI</h4>
                      <p className="text-xs font-mono uppercase tracking-widest text-[#0F3383] font-bold mt-1">IoT Smart Meters &amp; Smart Plugs</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-4 max-w-3xl leading-relaxed font-light">
                    Transforming ordinary electrical outlets and power lines into intelligent, bill-reducing IoT infrastructure.
                  </p>
                  <p className="text-sm text-gray-500 mb-6 max-w-3xl leading-relaxed">
                    ElectrifAI empowers Filipino homes with the <strong>ELI Smart Plug</strong>—cutting Meralco bills by up to ₱2,400/month by killing phantom-load draw and automating off-peak schedules. For utilities and commercial estates, our <strong>IoT Smart Energy Meters</strong> provide real-time consumption telemetry, AI anti-pilferage theft alerts, and automated PnL/ESG intelligence.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0F3383] px-3 py-1 rounded border border-blue-200">ELI Smart Plug (Cut ₱2,400/mo)</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 px-3 py-1 rounded">IoT Smart Meters</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 px-3 py-1 rounded">AI Anti-Pilferage Theft Alert</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 px-3 py-1 rounded">Phantom Load Eliminator</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <Link
                      href="/electrifai"
                      className="inline-flex items-center gap-2 bg-[#0F3383] hover:bg-[#1A46B0] text-white font-bold text-xs uppercase tracking-[0.15em] px-5 py-3 rounded transition-colors font-mono"
                    >
                      Explore ElectrifAI <ArrowRight size={14} />
                    </Link>
                    <a
                      href="https://electrifai.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-xs uppercase tracking-[0.15em] px-5 py-3 rounded transition-colors hover:bg-slate-50 font-mono"
                    >
                      Pre-Order ELI Plug ↗
                    </a>
                  </div>
                </div>
              </div>
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

                <div className="w-full md:w-[400px] lg:w-[500px] h-64 md:h-auto overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                  <img src="/img-folder/leasifAI.png" alt="LeasifAI Workspace" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-10 md:p-12 lg:p-16 bg-white relative z-20 flex-grow flex flex-col justify-center">
                  <div className="absolute top-0 md:top-10 left-10 md:-left-1 w-12 md:w-1 h-1 md:h-12 bg-black group-hover:bg-[#1A46B0] transition-colors duration-300"></div>
                  <div className="flex items-center mb-6">
                    <div className="h-16 px-5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mr-6 shrink-0 shadow-sm">
                      <img src="/leasifai-logo.png" alt="LeasifAI" className="h-11 w-auto object-contain" />
                    </div>
                    <div>
                      <h4 className="text-3xl lg:text-4xl font-bold tracking-tight text-black font-serif">LeasifAI</h4>
                      <p className="text-xs font-mono uppercase tracking-widest text-[#0F3383] font-bold mt-1">Commercial Underwriting</p>
                    </div>
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
              <Link href="/berdev" className="group flex flex-col md:flex-row-reverse bg-white border border-gray-200 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(40,164,231,0.15)] hover:border-emerald-600 overflow-hidden relative">
                <div className="absolute top-0 right-0 md:right-auto md:left-0 z-30 bg-slate-950 text-emerald-400 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 flex items-center gap-1.5 shadow-sm font-mono border-b border-emerald-500/40">
                  <span>⚡ Clean EV Mobility &amp; Charging</span>
                </div>

                <div className="w-full md:w-[400px] lg:w-[500px] h-64 md:h-auto overflow-hidden relative transition-all duration-700 shrink-0 bg-slate-950 flex flex-col justify-between p-8 border-b md:border-b-0 md:border-l border-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      LIVE EV RADAR
                    </span>
                    <span className="text-slate-400">METRO MANILA &amp; SLEX</span>
                  </div>

                  {/* Simulated App Route Card */}
                  <div className="my-auto bg-slate-900/90 border border-slate-800 rounded-lg p-4 shadow-xl">
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-emerald-950/80 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/30">
                          ⚡ DC
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white leading-tight">Shell Recharge • 120kW</div>
                          <div className="text-[10px] text-slate-400">SLEX Mamplasan • 4 Bays</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-400/30 px-2 py-0.5 rounded">
                        98% Uptime
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                      <div className="bg-slate-950 p-1.5 rounded border border-slate-800/80">
                        <div className="text-slate-400 text-[9px]">Available</div>
                        <div className="text-emerald-400 font-bold">2 of 4 Plugs</div>
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
                    <Navigation size={13} className="text-emerald-400" />
                    <span>&quot;The Waze for Electric Vehicles&quot;</span>
                  </div>
                </div>

                <div className="p-10 md:p-12 lg:p-16 bg-white relative z-20 flex-grow flex flex-col justify-center">
                  <div className="absolute top-0 md:top-10 right-10 md:-right-1 w-12 md:w-1 h-1 md:h-12 bg-black group-hover:bg-emerald-600 transition-colors duration-300"></div>
                  <div className="flex items-center mb-6">
                    <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-950 border border-emerald-500/40 shadow-sm mr-6 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="font-extrabold text-2xl tracking-tight font-sans text-white">
                        Berd<span className="text-emerald-400">EV</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-3xl lg:text-4xl font-bold tracking-tight text-black font-serif">BerdEV</h4>
                      <p className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold mt-1">
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