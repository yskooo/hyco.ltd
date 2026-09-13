"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const HycoLogo = ({ dark = false }: { dark?: boolean }) => (
  <div className="flex items-center gap-3">
    <div className={`p-1.5 rounded-lg flex items-center justify-center transition-all ${dark ? 'bg-white shadow-md' : 'bg-slate-50 border border-slate-200/80'}`}>
      <img
        src="/logo.png"
        alt="Hardy&Co. Group Logo"
        className="h-10 w-auto object-contain"
      />
    </div>
    <div className="flex flex-col">
      <span className={`text-xl font-bold font-serif tracking-tight leading-none ${dark ? 'text-white' : 'text-black'}`}>
        Hardy&amp;Co.
      </span>
      <span className={`text-[10px] font-mono tracking-[0.25em] uppercase font-bold mt-1 ${dark ? 'text-[#28A4E7]' : 'text-[#0F3383]'}`}>
        GROUP
      </span>
    </div>
  </div>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-hyco-black bg-hyco-white">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-black text-slate-300 text-[11px] font-bold tracking-widest uppercase py-3 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-[#28A4E7] font-bold">Hardy&amp;Co. Group</span>
            <span className="text-slate-600">•</span>
            <span>One Company. Four Ventures.</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Investor Relations</a>
            <a href="#" className="hover:text-white transition-colors">Media</a>
            <a href="#" className="hover:text-white transition-colors">Global Offices</a>
            <div className="w-px h-3 bg-slate-700"></div>
            <a href="#" className="hover:text-[#28A4E7] transition-colors flex items-center">
              Client Portal <span className="ml-1">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-50 transition-all duration-300 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center h-20">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center group">
            <HycoLogo />
          </Link>

          {/* Center/Right: Main Nav & Search */}
          <div className="hidden lg:flex items-center h-full ml-auto space-x-10">
            <nav className="flex items-center h-full space-x-10">
              <Link href="/" className="text-[14px] font-bold tracking-wide text-black hover:text-[#1A46B0] h-full flex items-center border-b-2 border-transparent hover:border-[#1A46B0] transition-colors">Home</Link>
              <Link href="/about" className="text-[14px] font-bold tracking-wide text-black hover:text-[#1A46B0] h-full flex items-center border-b-2 border-transparent hover:border-[#1A46B0] transition-colors">About</Link>

              {/* Portfolio Dropdown */}
              <div className="relative group h-full flex items-center">
                <span className="text-[14px] font-bold tracking-wide text-black hover:text-[#1A46B0] cursor-pointer border-b-2 border-transparent hover:border-[#1A46B0] transition-colors flex items-center">
                  Four Ventures
                  <svg className="w-4 h-4 ml-1 text-slate-500 group-hover:text-[#1A46B0] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full right-0 w-[720px] bg-white shadow-2xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex p-6 gap-6 rounded-b-xl">
                  <div className="w-1/3">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0F3383] mb-1">
                      Hardy&amp;Co. Group
                    </div>
                    <h4 className="text-lg font-bold font-serif text-black mb-2">One Company. <br />Four Ventures.</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      Deploying transformative AI and intelligent infrastructure solutions across Southeast Asia.
                    </p>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#1A46B0] bg-blue-50 p-2.5 rounded border border-blue-200">
                      ★ Flagship: Servicio.AI
                    </div>
                  </div>

                  <div className="w-2/3 grid grid-cols-2 gap-3 border-l border-slate-100 pl-6">
                    {/* 1. Servicio.AI */}
                    <Link href="/servicio-ai" className="group/link p-3 hover:bg-blue-50/70 rounded-lg transition-colors border border-transparent hover:border-blue-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-black group-hover/link:text-[#1A46B0]">Servicio.AI</span>
                        <span className="text-[9px] font-bold uppercase bg-[#1A46B0] text-white px-1.5 py-0.5 rounded font-mono">Flagship</span>
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight">
                        Accessible, compliant AI-driven service solutions for Filipino SMEs and consumers.
                      </div>
                    </Link>

                    {/* 2. ElectrifAI PH */}
                    <Link href="/electrifai" className="group/link p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-black group-hover/link:text-[#1A46B0]">ElectrifAI PH</span>
                        <span className="text-[9px] font-bold uppercase bg-slate-800 text-white px-1.5 py-0.5 rounded font-mono">Energy</span>
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight">
                        Intelligent, data-driven smart energy monitoring and connected hardware.
                      </div>
                    </Link>

                    {/* 3. LeasifAI */}
                    <Link href="/leasifai" className="group/link p-3 hover:bg-amber-50/50 rounded-lg transition-colors border border-transparent hover:border-amber-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-black group-hover/link:text-[#1A46B0]">LeasifAI</span>
                        <span className="text-[9px] font-bold uppercase bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono">GTM</span>
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight">
                        AI-powered commercial real estate matching and automated leasing workflows.
                      </div>
                    </Link>

                    {/* 4. BerdEV */}
                    <Link href="/berdev" className="group/link p-3 hover:bg-emerald-50/50 rounded-lg transition-colors border border-transparent hover:border-emerald-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-black group-hover/link:text-[#1A46B0]">BerdEV</span>
                        <span className="text-[9px] font-bold uppercase bg-emerald-600 text-white px-1.5 py-0.5 rounded font-mono">Mobility</span>
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight">
                        Seamless EV charging locator and payment infrastructure for Philippine mobility.
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Search */}
            <div className="flex items-center border-l border-slate-200 pl-6">
              <button className="text-black hover:text-[#1A46B0] p-2 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-b border-slate-200 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col space-y-6">
                <Link href="/" className="text-lg font-serif font-bold text-[#0f172a] border-b border-slate-100 pb-2">Home</Link>
                <Link href="/about" className="text-lg font-serif font-bold text-[#0f172a] border-b border-slate-100 pb-2">About</Link>

                <div className="flex flex-col space-y-4">
                  <div className="text-xs font-mono font-bold text-[#0F3383] uppercase tracking-widest">
                    One Company. Four Ventures.
                  </div>
                  <div className="pl-4 flex flex-col space-y-4 border-l-2 border-slate-100">
                    <Link href="/servicio-ai" className="text-base font-bold text-[#1A46B0] flex items-center justify-between">
                      <span>Servicio.AI</span>
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-sans">Flagship</span>
                    </Link>
                    <Link href="/electrifai" className="text-base font-medium text-slate-700 hover:text-[#1A46B0] flex items-center justify-between">
                      <span>ElectrifAI PH</span>
                      <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-sans">Energy</span>
                    </Link>
                    <Link href="/leasifai" className="text-base font-medium text-slate-700 hover:text-[#1A46B0] flex items-center justify-between">
                      <span>LeasifAI</span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-sans">GTM</span>
                    </Link>
                    <Link href="/berdev" className="text-base font-medium text-slate-700 hover:text-[#1A46B0] flex items-center justify-between">
                      <span>BerdEV</span>
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-sans font-semibold">EV Mobility</span>
                    </Link>
                  </div>
                </div>

                <div className="pt-6 mt-2 border-t border-slate-200 flex flex-col space-y-4">
                  <a href="#" className="text-sm font-medium text-slate-500 uppercase tracking-wider">Investor Relations</a>
                  <a href="#" className="text-sm font-medium text-slate-500 uppercase tracking-wider">Media</a>
                  <a href="#" className="text-sm font-medium text-slate-500 uppercase tracking-wider">Global Offices</a>
                  <button className="bg-[#0F3383] hover:bg-[#1A46B0] text-white text-sm font-bold uppercase tracking-wider px-6 py-3 mt-4 w-full text-center transition-colors">
                    Client Portal
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-black text-white pt-20 pb-10 border-t-4 border-[#1A46B0]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
            <div className="lg:col-span-2 pr-8">
              <Link href="/" className="flex items-center mb-8">
                <HycoLogo dark />
              </Link>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                <strong className="text-white font-bold">Hardy&amp;Co. Group</strong> — One Company. Four Ventures. Powering Servicio.AI, ElectrifAI PH, LeasifAI, and BerdEV across Southeast Asia.
              </p>
              <button className="border border-white/20 hover:border-[#28A4E7] hover:text-[#28A4E7] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors">
                Contact Group
              </button>
            </div>

            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 text-slate-300">About Us</h4>
              <ul className="space-y-4 text-[14px] text-slate-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Corporate Overview</Link></li>
                <li><Link href="/about#team" className="hover:text-white transition-colors">Leadership &amp; Team</Link></li>
                <li><Link href="/about#team" className="hover:text-white transition-colors">Board of Directors</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Chairman&apos;s Message</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Governance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 text-slate-300">Four Ventures</h4>
              <ul className="space-y-4 text-[14px] text-slate-400">
                <li>
                  <Link href="/servicio-ai" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>Servicio.AI</span>
                    <span className="text-[9px] text-[#28A4E7] font-bold uppercase font-mono">Flagship</span>
                  </Link>
                </li>
                <li>
                  <Link href="/electrifai" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>ElectrifAI PH</span>
                    <span className="text-[9px] text-slate-400 font-mono">Energy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/leasifai" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>LeasifAI</span>
                    <span className="text-[9px] text-amber-400 font-mono">GTM</span>
                  </Link>
                </li>
                <li>
                  <Link href="/berdev" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>BerdEV</span>
                    <span className="text-[9px] text-emerald-400 font-mono">EV Mobility</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 text-slate-300">Insights</h4>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
