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
        alt="HYCO Group Logo"
        className="h-9 w-auto object-contain"
      />
    </div>
    <div className="flex flex-col">
      <span className={`text-xl font-bold font-serif tracking-tight leading-none ${dark ? 'text-white' : 'text-slate-950'}`}>
        HYCO
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
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-slate-50 text-slate-500 text-[11px] font-medium tracking-wider uppercase py-2 border-b border-slate-200/80">
        <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-[#0F3383] font-bold">HYCO Group</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">Transformative AI &amp; Intelligent Infrastructure</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-400">Ortigas Center, Pasig City</span>
          </div>
          <div className="flex items-center space-x-6 text-xs">
            <Link href="/about" className="text-slate-500 hover:text-slate-900 transition-colors">About</Link>
            <Link href="/contact" className="text-slate-500 hover:text-slate-900 transition-colors">Inquiries</Link>
            <div className="w-px h-3 bg-slate-200"></div>
            <Link href="/contact" className="text-[#0F3383] hover:text-[#1A46B0] font-bold transition-colors flex items-center font-mono">
              Client Portal <span className="ml-1">↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center h-20">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center group">
            <HycoLogo />
          </Link>

          {/* Center/Right: Main Nav */}
          <div className="hidden lg:flex items-center h-full ml-auto space-x-8">
            <nav className="flex items-center h-full space-x-8">
              <Link href="/" className="text-[14px] font-semibold text-slate-800 hover:text-[#0F3383] h-full flex items-center border-b-2 border-transparent hover:border-[#0F3383] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-[14px] font-semibold text-slate-800 hover:text-[#0F3383] h-full flex items-center border-b-2 border-transparent hover:border-[#0F3383] transition-colors">
                About
              </Link>

              {/* Portfolio Dropdown */}
              <div className="relative group h-full flex items-center">
                <span className="text-[14px] font-semibold text-slate-800 hover:text-[#0F3383] cursor-pointer border-b-2 border-transparent hover:border-[#0F3383] transition-colors flex items-center">
                  Four Ventures
                  <svg className="w-4 h-4 ml-1 text-slate-400 group-hover:text-[#0F3383] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full right-0 w-[720px] bg-white shadow-xl border border-slate-200/90 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex p-6 gap-6 rounded-b-xl">
                  <div className="w-1/3">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0F3383] mb-1">
                      HYCO Group
                    </div>
                    <h4 className="text-lg font-bold font-serif text-slate-950 mb-2">AI That Matters.</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 font-light">
                      Deploying transformative AI and intelligent infrastructure across four high-impact ventures.
                    </p>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#0F3383] bg-blue-50 p-2.5 rounded border border-blue-100 font-mono">
                      ★ Flagship: Servicio.AI
                    </div>
                  </div>

                  <div className="w-2/3 grid grid-cols-2 gap-3 border-l border-slate-100 pl-6">
                    {/* 1. Servicio.AI */}
                    <Link href="/servicio-ai" className="group/link p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-900 group-hover/link:text-[#0F3383]">Servicio.AI</span>
                        <span className="text-[9px] font-bold uppercase bg-[#0F3383] text-white px-1.5 py-0.5 rounded font-mono">Flagship</span>
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight font-light">
                        Accessible, compliant AI-driven service solutions for Filipino SMEs and consumers.
                      </div>
                    </Link>

                    {/* 2. ElectrifAI PH */}
                    <Link href="/electrifai" className="group/link p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-900 group-hover/link:text-[#0F3383]">ElectrifAI PH</span>
                        <span className="text-[9px] font-bold uppercase bg-slate-800 text-white px-1.5 py-0.5 rounded font-mono">Energy</span>
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight font-light">
                        Intelligent, data-driven smart energy monitoring and connected hardware.
                      </div>
                    </Link>

                    {/* 3. LeasifAI */}
                    <Link href="/leasifai" className="group/link p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-900 group-hover/link:text-[#0F3383]">LeasifAI</span>
                        <span className="text-[9px] font-bold uppercase bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono">GTM</span>
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight font-light">
                        AI-powered commercial real estate matching and automated leasing workflows.
                      </div>
                    </Link>

                    {/* 4. BerdEV */}
                    <Link href="/berdev" className="group/link p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-900 group-hover/link:text-[#0F3383]">BerdEV</span>
                        <span className="text-[9px] font-bold uppercase bg-emerald-600 text-white px-1.5 py-0.5 rounded font-mono">Mobility</span>
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight font-light">
                        Seamless EV charging locator and payment infrastructure for Philippine mobility.
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="text-[14px] font-semibold text-slate-800 hover:text-[#0F3383] h-full flex items-center border-b-2 border-transparent hover:border-[#0F3383] transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center pl-2">
              <Link
                href="/contact"
                className="bg-[#0F3383] hover:bg-[#1A46B0] text-white px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider transition-colors shadow-sm"
              >
                Inquire
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-b border-slate-200 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col space-y-4">
                <Link href="/" className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-2">Home</Link>
                <Link href="/about" className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-2">About</Link>
                <Link href="/contact" className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-2">Contact</Link>

                <div className="flex flex-col space-y-3 pt-2">
                  <div className="text-xs font-mono font-bold text-[#0F3383] uppercase tracking-widest">
                    Four High-Impact Ventures
                  </div>
                  <div className="pl-4 flex flex-col space-y-3 border-l-2 border-slate-100">
                    <Link href="/servicio-ai" className="text-sm font-semibold text-slate-800 flex items-center justify-between">
                      <span>Servicio.AI</span>
                      <span className="text-[10px] bg-blue-100 text-[#0F3383] px-2 py-0.5 rounded font-mono">Flagship</span>
                    </Link>
                    <Link href="/electrifai" className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center justify-between">
                      <span>ElectrifAI PH</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">Energy</span>
                    </Link>
                    <Link href="/leasifai" className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center justify-between">
                      <span>LeasifAI</span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-mono">GTM</span>
                    </Link>
                    <Link href="/berdev" className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center justify-between">
                      <span>BerdEV</span>
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-mono">Mobility</span>
                    </Link>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href="/contact"
                    className="block bg-[#0F3383] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 w-full text-center rounded-lg transition-colors"
                  >
                    Contact Group
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Sleek, Modern Tech Group Footer */}
      <footer className="bg-white text-slate-600 pt-16 pb-12 border-t border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-100">
            {/* Brand Column */}
            <div className="lg:col-span-4 pr-0 lg:pr-8">
              <Link href="/" className="inline-block mb-5">
                <HycoLogo />
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm font-light">
                HYCO Group builds AI that matters, for people who deserve it. Deploying transformative AI and intelligent infrastructure across four high-impact ventures.
              </p>
              <div className="text-xs text-slate-400 font-mono space-y-1">
                <div>Ortigas Center, Pasig City, Metro Manila</div>
                <div><a href="mailto:contact@hyco.ltd" className="text-slate-600 hover:text-[#0F3383] transition-colors">contact@hyco.ltd</a></div>
              </div>
            </div>

            {/* Ventures */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-900 mb-4">
                Ventures
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/servicio-ai" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2">
                    <span>Servicio.AI</span>
                    <span className="text-[9px] bg-blue-50 text-[#0F3383] font-bold px-1.5 py-0.5 rounded font-mono">Flagship</span>
                  </Link>
                </li>
                <li>
                  <Link href="/electrifai" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2">
                    <span>ElectrifAI PH</span>
                    <span className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">Energy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/leasifai" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2">
                    <span>LeasifAI</span>
                    <span className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-mono">GTM</span>
                  </Link>
                </li>
                <li>
                  <Link href="/berdev" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2">
                    <span>BerdEV</span>
                    <span className="text-[9px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-mono">Mobility</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-900 mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="text-slate-500 hover:text-slate-900 transition-colors">About HYCO</Link></li>
                <li><Link href="/about#team" className="text-slate-500 hover:text-slate-900 transition-colors">Leadership &amp; Board</Link></li>
                <li><Link href="/contact" className="text-slate-500 hover:text-slate-900 transition-colors">Investor Relations</Link></li>
                <li><Link href="/contact" className="text-slate-500 hover:text-slate-900 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-900 mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/privacy-policy" className="text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-slate-500 hover:text-slate-900 transition-colors">Terms of Use</Link></li>
                <li><Link href="/legal" className="text-slate-500 hover:text-slate-900 transition-colors">Compliance</Link></li>
              </ul>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-light">
            <div>
              © {new Date().getFullYear()} HYCO Group. All rights reserved.
            </div>
            <div className="flex items-center gap-6 font-mono text-[11px]">
              <Link href="/privacy-policy" className="hover:text-slate-700 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-slate-700 transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-slate-700 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
