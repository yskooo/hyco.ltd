"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  Zap,
  Activity,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Users,
  Landmark,
  TrendingDown,
  Sparkles,
  Plug,
  Gauge,
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function ElectrifAI() {
  // Interactive Meralco Bill Calculator State
  const [bill, setBill] = useState<number>(8000);

  // Projected savings calculation based on 24% - 26% pilot data
  const estimatedSavings = Math.round(bill * 0.26);
  const phantomSavings = Math.round(bill * 0.08);
  const offPeakSavings = Math.round(bill * 0.10);
  const behavioralSavings = Math.round(bill * 0.08);
  const annualSavings = estimatedSavings * 12;
  const paybackMonths = (1490 / estimatedSavings).toFixed(1);

  return (
    <div className="w-full bg-white text-slate-900 pt-24">
      {/* Top Banner: Hybrid IoT Hardware Announcement */}
      <div className="bg-[#001027] text-white py-2.5 px-4 text-xs font-mono border-b border-blue-900/50">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A5FF] animate-ping"></span>
            <span className="text-[#00A5FF] font-bold">ELECTRIFAI HARDWARE:</span>
            <span className="text-slate-300">Smart Meters for Grids &amp; ELI Smart Plugs for Households</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="https://electrifai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#00A5FF] hover:underline flex items-center gap-1 font-bold">
              Pre-Order ELI Plug (₱1,490) <ExternalLink size={12} />
            </a>
            <span className="text-slate-600">|</span>
            <a href="https://electrifaiph.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white flex items-center gap-1">
              Smart Meter Portal <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section: Make Each kWh Count! */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#eef2f3] via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none bg-[#00A5FF]/10 animate-pulse"></div>
        <div className="absolute bottom-10 left-[-100px] w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none bg-blue-900/10"></div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-14 px-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center">
                  <img src="/electrifai-logo.svg" alt="ElectrifAI" className="h-10 w-auto object-contain" />
                </div>
                <div className="inline-flex items-center px-3.5 py-1.5 bg-blue-50 border border-blue-200/80 text-[#0F3383] text-xs font-bold uppercase tracking-widest font-mono rounded-lg">
                  <Zap size={14} className="mr-1.5 text-[#00A5FF]" /> A HYCO Group Subsidiary
                </div>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A0A0B] leading-[1.08] mb-6 font-serif"
              >
                Make Each <br />
                <span className="text-[#00A5FF]">kWh</span> Count!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg sm:text-xl text-slate-700 max-w-2xl leading-relaxed font-light mb-8"
              >
                The future of energy isn&apos;t just about generating more power, but consuming smarter. ElectrifAI builds connected <strong>IoT Smart Meters</strong> for commercial grids and the <strong>ELI Smart Plug</strong> to stop electricity waste hiding in your Meralco bill.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <a
                  href="#eli-smart-plug"
                  className="bg-[#00A5FF] hover:bg-[#0091E6] text-white px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all shadow-lg hover:shadow-cyan-500/25 rounded-xl font-mono inline-flex items-center gap-2"
                >
                  <Plug size={16} /> Pre-Order ELI Plug (₱1,490)
                </a>
                <a
                  href="#smart-meters"
                  className="bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-900 px-8 py-4 text-sm font-bold tracking-wider uppercase transition-colors rounded-xl font-mono inline-flex items-center gap-2"
                >
                  <Gauge size={16} className="text-[#0F3383]" /> Smart Meter Solutions
                </a>
              </motion.div>

              {/* Fast Proof Metrics */}
              <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="text-3xl font-extrabold text-[#00A5FF] font-sans">₱2,400</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">Avg. Monthly Bill Cut</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 font-sans">24-26%</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">Verified Bill Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 font-sans">90s</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">Plug &amp; Play Setup</div>
                </div>
              </div>
            </div>

            {/* Right Hero Hardware & Prototype Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden text-white">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00A5FF] animate-pulse"></span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      ELI Smart Plug Telemetry
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00A5FF] bg-blue-950 px-2.5 py-1 rounded border border-blue-800/80 font-bold">
                    Matter 1.2 IoT
                  </span>
                </div>

                {/* ELI Screen Simulator */}
                <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-2xl p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-widest text-slate-400">APPLIANCE: AIRCON SALA (1.5 HP)</span>
                    <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">LIVE LOAD</span>
                  </div>

                  <div className="text-5xl font-mono font-bold text-white mb-1 tracking-tight">
                    1,284 <span className="text-lg font-normal text-slate-400">W</span>
                  </div>
                  <div className="text-sm font-mono text-[#00A5FF] mb-6">
                    ₱14.62 / hour · Inverter Mode Active
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-xs font-mono">
                    <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                      <div className="text-slate-400 text-[10px] uppercase">Phantom Power</div>
                      <div className="text-emerald-400 font-bold mt-1">KILLED (0W STANDBY)</div>
                    </div>
                    <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                      <div className="text-slate-400 text-[10px] uppercase">Est. Monthly Savings</div>
                      <div className="text-[#00A5FF] font-bold mt-1">₱2,400 / MONTH</div>
                    </div>
                  </div>
                </div>

                {/* Secondary Prototype Illustration Link */}
                <div className="mt-5 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                      <img src="/electrifai-eli.svg" alt="ELI" className="h-6 w-auto object-contain" />
                    </div>
                    <div>
                      <div className="font-bold text-white">ELI Hardware Architecture</div>
                      <div className="text-[11px] text-slate-400">2-Year PH Warranty · Free Nationwide Shipping</div>
                    </div>
                  </div>
                  <a
                    href="https://electrifai.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00A5FF] hover:underline font-mono font-bold text-[11px] flex items-center gap-1 shrink-0"
                  >
                    View Pre-Order ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: ELI SMART PLUG (B2C Household Meralco Bill Cutter) */}
      <section id="eli-smart-plug" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#00A5FF] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              CONSUMER IOT INNOVATION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-950 mt-4 mb-4">
              ELI Smart Plug: Cut Your Meralco Bill by ₱2,400/Month.
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              The Philippines suffers from the highest residential electricity rates in Southeast Asia (~₱12.80/kWh). ELI turns ordinary wall outlets into intelligent energy controllers that expose hidden waste, in pesos.
            </p>
          </div>

          {/* 3 Pillars of ELI Savings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#00A5FF] flex items-center justify-center mb-6">
                <TrendingDown size={28} />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-950 mb-3">Phantom-Load Killer</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Appliances left on standby (smart TVs, consoles, microwave clocks, chargers) silently bleed power 24/7. ELI automatically cuts phantom vampire draw down to 0W.
              </p>
              <div className="text-xs font-mono font-bold text-[#00A5FF] bg-blue-50 p-2.5 rounded-lg border border-blue-100">
                Saves ~₱640 / month on typical homes
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-950 mb-3">Off-Peak Smart Shifting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Automatically schedules high-load appliances (washing machines, water heaters, air coolers) to run when tariffs and baseline grid demand are cheapest.
              </p>
              <div className="text-xs font-mono font-bold text-amber-600 bg-amber-50 p-2.5 rounded-lg border border-amber-100">
                Saves ~₱480 / month in automated scheduling
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <Gauge size={28} />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-950 mb-3">Pesos, Not Cryptic kWh</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Other apps report meaningless numbers like &quot;1.4 kWh&quot;. ELI immediately tells you: &quot;Aircon sala is costing ₱14.62 / hr right now,&quot; triggering instinctive family savings.
              </p>
              <div className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                Saves ~₱640 / month in behavioral awareness
              </div>
            </div>
          </div>

          {/* Interactive Meralco Bill Calculator */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 md:p-14 text-white shadow-2xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00A5FF] font-bold uppercase tracking-widest mb-3">
                  <Calculator size={14} /> Interactive Savings Calculator
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
                  How much will <span className="text-[#00A5FF]">you</span> stop paying Meralco?
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-8 font-light">
                  Drag the slider to your current typical monthly electric bill. Pilot data from 247 households shows an average savings of 24% to 26% in Month 1.
                </p>

                {/* Slider Component */}
                <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-slate-400 uppercase">Your Monthly Meralco Bill</span>
                    <span className="text-3xl font-bold font-mono text-[#00A5FF]">₱{bill.toLocaleString()}</span>
                  </div>

                  <input
                    type="range"
                    min={2000}
                    max={30000}
                    step={500}
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00A5FF]"
                  />

                  <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                    <span>₱2,000 / mo</span>
                    <span>₱15,000 / mo</span>
                    <span>₱30,000 / mo</span>
                  </div>

                  {/* Preset quick buttons */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800/80">
                    {[3000, 6000, 8000, 12000, 20000].map((val) => (
                      <button
                        key={val}
                        onClick={() => setBill(val)}
                        className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                          bill === val
                            ? 'bg-[#00A5FF] text-white border-[#00A5FF]'
                            : 'bg-slate-800/70 text-slate-400 border-slate-700 hover:text-white'
                        }`}
                      >
                        ₱{val.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <div className="text-slate-400 text-[10px]">Phantom Cut</div>
                    <div className="text-white font-bold mt-1">₱{phantomSavings.toLocaleString()}</div>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <div className="text-slate-400 text-[10px]">Off-Peak Shift</div>
                    <div className="text-white font-bold mt-1">₱{offPeakSavings.toLocaleString()}</div>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <div className="text-slate-400 text-[10px]">Behavioral</div>
                    <div className="text-white font-bold mt-1">₱{behavioralSavings.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              {/* Projected Output Card */}
              <div className="lg:col-span-6 bg-gradient-to-b from-blue-950/70 to-slate-900 p-8 rounded-3xl border border-blue-500/30 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#00A5FF] font-bold mb-2">
                    Projected Household Savings
                  </div>
                  <div className="text-5xl sm:text-6xl font-extrabold font-sans text-white mb-2">
                    ₱{estimatedSavings.toLocaleString()}
                    <span className="text-lg font-normal text-slate-400"> / month</span>
                  </div>
                  <p className="text-sm text-slate-300 mb-8">
                    Equivalent to <strong className="text-emerald-400">₱{annualSavings.toLocaleString()}</strong> saved every year back into your family budget.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pb-6 mb-6 border-b border-slate-800 text-xs font-mono">
                    <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase">Device Payback</span>
                      <span className="text-lg font-bold text-white">{paybackMonths} months</span>
                    </div>
                    <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase">Pre-Order Price</span>
                      <span className="text-lg font-bold text-emerald-400">₱1,490 (30% off)</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-300 font-mono mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span>Founders Edition with Numbered Aluminum Chassis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span>Matter Standard: Compatible with Apple, Google, Alexa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span>Free nationwide delivery + 2-year replacement warranty</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://electrifai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#00A5FF] to-blue-600 hover:from-blue-600 hover:to-[#00A5FF] text-white py-4 rounded-xl font-bold font-mono text-center uppercase tracking-widest text-sm shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Join Waitlist &amp; Pre-Order ELI ↗
                </a>
              </div>

            </div>
          </div>

          {/* Real Pilot Proof: Maria L. Case Study */}
          <div className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                  VERIFIED PILOT STUDY
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-3 mb-2">
                  Quezon City Household: ₱8,400 → ₱6,180
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  4-person household with a 1.5HP inverter aircon, water heater, and family refrigerator. Saved <strong>₱2,220 in month one (-26%)</strong> with zero changes to family comfort.
                </p>
                <blockquote className="border-l-4 border-[#00A5FF] pl-4 italic text-sm text-slate-700 font-serif">
                  &quot;Ang weird, hindi ko naman binawasan ang aircon. ELI just told me when to use what — and the bill dropped like that.&quot;
                  <footer className="not-italic text-xs font-mono font-bold text-slate-500 mt-1">
                    — Maria L., Quezon City (Pilot Household #042)
                  </footer>
                </blockquote>
              </div>

              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-red-50/70 border border-red-200 rounded-2xl">
                  <div className="text-xs font-mono font-bold text-red-600 uppercase mb-1">Before ELI (October)</div>
                  <div className="text-3xl font-bold text-red-700 font-sans mb-3">₱8,400</div>
                  <ul className="text-xs space-y-1.5 text-slate-600 font-mono">
                    <li>• Aircon Sala: ₱4,200 (50%)</li>
                    <li>• Water Heater: ₱1,640 (19%)</li>
                    <li>• Refrigerator: ₱1,280 (15%)</li>
                    <li>• Phantom Standby: ₱560 (7%)</li>
                  </ul>
                </div>

                <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
                  <div className="text-xs font-mono font-bold text-emerald-600 uppercase mb-1">With ELI (November)</div>
                  <div className="text-3xl font-bold text-emerald-700 font-sans mb-3">₱6,180</div>
                  <ul className="text-xs space-y-1.5 text-slate-700 font-mono">
                    <li>• Aircon Sala: ₱3,120 (-26%)</li>
                    <li>• Water Heater: ₱980 (-40% off-peak)</li>
                    <li>• Refrigerator: ₱1,280 (steady)</li>
                    <li>• Phantom Standby: ₱240 (-57% killed)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: INDUSTRIAL & UTILITY IOT SMART METERS (B2B & B2G Focus) */}
      <section id="smart-meters" className="py-24 bg-[#0A0A0B] text-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#00A5FF] bg-blue-950 px-4 py-1.5 rounded-full border border-blue-800">
              COMMERCIAL &amp; UTILITY INFRASTRUCTURE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mt-4 mb-4">
              IoT Smart Energy Meters &amp; Grid Telemetry
            </h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              Industrial facilities, real estate conglomerates, and electric cooperatives lose hundreds of millions of pesos annually to power pilferage, phase imbalances, and unmonitored surge spikes.
            </p>
          </div>

          {/* 6 Core Smart Meter Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00A5FF]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-[#00A5FF] flex items-center justify-center mb-6">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-2">Real-Time Grid Monitoring</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                IoT-enabled voltage, active/reactive power, harmonic distortion, and phase balance telemetry streaming at sub-second frequency.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00A5FF]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-2">AI Pilferage Theft Alert</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Instantly detects illegal line taps, meter tampering, bypasses, and unmetered power theft using physics-informed neural networks.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00A5FF]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                <TrendingDown size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-2">Peak Shaving AI</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Automatically curtails non-critical loads during peak demand surcharge windows, saving up to 22% on enterprise commercial electric bills.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00A5FF]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-2">PnL &amp; ESG Analytics</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Translates physical kWh consumption into executive P&amp;L accounting reports and audited Scope 2 GHG greenhouse gas sustainability compliance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00A5FF]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-2">Small Language Model (SLM)</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Domain-specific energy AI copilot allowing facility managers to ask in plain English: &quot;Which HVAC unit is consuming abnormal current?&quot;
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00A5FF]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-2">Sub-Tenant Automated Billing</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Commercial building owners can deploy sub-meters with automated tenant invoicing, dispute-free transparency, and revenue collection.
              </p>
            </div>
          </div>

          {/* Three Target Clientele Segments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-[#00A5FF]" size={24} />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A5FF]">B2C Market</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Households &amp; Tenants</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Equipping residential consumers with the ELI smart plug for real-time peso visibility, phantom power eradication, and bill cuts.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="text-[#00A5FF]" size={24} />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A5FF]">B2B Enterprise</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Malls, Plants &amp; Towers</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Deploying distributed IoT sub-meters, predictive equipment health alerts, and automated peak-tariff shaving across commercial sites.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="text-[#00A5FF]" size={24} />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A5FF]">B2G Utilities</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Electric Coops &amp; Gov</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Partnering with rural electric cooperatives and local government units to stamp out electricity theft and modernize distribution grids.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-black border border-blue-900/60 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold font-serif text-white mb-2">
                Need an Enterprise Smart Meter Pilot?
              </h4>
              <p className="text-sm text-slate-400">
                Contact our engineering team for utility-grade pilots, cooperative trials, or commercial real estate deployment.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href="https://electrifaiph.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00A5FF] hover:bg-[#0091E6] text-white px-7 py-3.5 rounded-xl font-bold font-mono text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-2"
              >
                Launch Smart Meter Portal ↗
              </a>
              <Link
                href="/contact"
                className="border border-white/30 hover:border-white text-white px-6 py-3.5 rounded-xl font-bold font-mono text-xs uppercase tracking-widest transition-colors hover:bg-white/10"
              >
                Inquire With HYCO Group
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: LEADERSHIP TEAM */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#0F3383]">
              ELECTRIFAI EXECUTIVE LEADERSHIP
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-950 mt-3 mb-3">
              Energy Engineers &amp; Technologists
            </h2>
            <p className="text-sm text-slate-600 font-light">
              Spearheaded by Filipino licensed engineers and hardware innovators shaping intelligent power systems across Southeast Asia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl text-center">
              <div className="w-16 h-16 rounded-full bg-slate-200 mx-auto mb-3 flex items-center justify-center font-bold text-slate-700 font-mono">
                GT
              </div>
              <div className="text-sm font-bold text-slate-900">Engr. Gerhard P. Tan</div>
              <div className="text-xs text-[#00A5FF] font-mono mt-0.5">Chairman</div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl text-center">
              <div className="w-16 h-16 rounded-full bg-slate-200 mx-auto mb-3 flex items-center justify-center font-bold text-slate-700 font-mono">
                DC
              </div>
              <div className="text-sm font-bold text-slate-900">Daniel Caparro</div>
              <div className="text-xs text-[#00A5FF] font-mono mt-0.5">Chief Executive Officer</div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl text-center">
              <div className="w-16 h-16 rounded-full bg-slate-200 mx-auto mb-3 flex items-center justify-center font-bold text-slate-700 font-mono">
                HP
              </div>
              <div className="text-sm font-bold text-slate-900">Harold Patacsil</div>
              <div className="text-xs text-[#00A5FF] font-mono mt-0.5">Chief Technology Officer</div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl text-center">
              <div className="w-16 h-16 rounded-full bg-slate-200 mx-auto mb-3 flex items-center justify-center font-bold text-slate-700 font-mono">
                RM
              </div>
              <div className="text-sm font-bold text-slate-900">Engr. Raeselyn Macorol</div>
              <div className="text-xs text-[#00A5FF] font-mono mt-0.5">Chief Research Officer</div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl text-center">
              <div className="w-16 h-16 rounded-full bg-slate-200 mx-auto mb-3 flex items-center justify-center font-bold text-slate-700 font-mono">
                AR
              </div>
              <div className="text-sm font-bold text-slate-900">Arjay Rosel</div>
              <div className="text-xs text-[#00A5FF] font-mono mt-0.5">Chief Marketing Officer</div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl text-center">
              <div className="w-16 h-16 rounded-full bg-slate-200 mx-auto mb-3 flex items-center justify-center font-bold text-slate-700 font-mono">
                CL
              </div>
              <div className="text-sm font-bold text-slate-900">Christian Joel Lazo</div>
              <div className="text-xs text-[#00A5FF] font-mono mt-0.5">Chief Operations Officer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Return to HYCO Portfolio Bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600 font-mono">
            ElectrifAI is a wholly owned subsidiary of <strong>HYCO Group</strong>.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/servicio-ai" className="text-xs font-mono text-slate-500 hover:text-[#0F3383] transition-colors">
              ← Servicio.AI
            </Link>
            <Link href="/leasifai" className="text-xs font-mono text-slate-500 hover:text-[#0F3383] transition-colors">
              LeasifAI →
            </Link>
            <Link href="/berdev" className="text-xs font-mono text-slate-500 hover:text-emerald-600 transition-colors">
              BerdEV →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
