"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const HycoLogo = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/logo.png"
    alt="HYCO Logo"
    className={`h-16 w-16 object-contain mr-2 ${dark ? 'invert' : ''}`}
  />
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
      <div className="hidden lg:block bg-hyco-black text-hyco-light-gray text-[11px] font-bold tracking-widest uppercase py-3 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 flex justify-end items-center space-x-6">
          <a href="#" className="hover:text-white transition-colors">Investor Relations</a>
          <a href="#" className="hover:text-white transition-colors">Media</a>
          <a href="#" className="hover:text-white transition-colors">Global Offices</a>
          <a href="#" className="hover:text-white transition-colors">Alumni</a>
          <div className="w-px h-3 bg-slate-600"></div>
          <a href="#" className="hover:text-white transition-colors flex items-center">
            Client Login <span className="ml-1">↗</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-hyco-white border-b border-black/5 sticky top-0 z-50 transition-all duration-300 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center h-20">
          {/* Left: Logo */}
          <Link href={pathname.startsWith('/leasifai') ? '/leasifai' : '/'} className="flex items-center group">
            <HycoLogo />
            <div className="flex flex-col leading-none hidden">
              <span className="font-sans text-2xl font-bold tracking-tight text-hyco-black group-hover:text-hyco-blue transition-colors">
                {pathname.startsWith('/leasifai') ? 'LeasifAI' : 'HYCO'}
              </span>
            </div>
          </Link>

          {/* Center/Right: Main Nav & Search */}
          <div className="hidden lg:flex items-center h-full ml-auto space-x-10">
            <nav className="flex items-center h-full space-x-10">
              <Link href="/" className="text-[14px] font-bold tracking-wide text-hyco-black hover:text-hyco-blue h-full flex items-center border-b-2 border-transparent hover:border-hyco-blue transition-colors">Home</Link>
              <Link href="/about" className="text-[14px] font-bold tracking-wide text-hyco-black hover:text-hyco-blue h-full flex items-center border-b-2 border-transparent hover:border-hyco-blue transition-colors">About</Link>

              {/* Portfolio Dropdown */}
              <div className="relative group h-full flex items-center">
                <span className="text-[14px] font-bold tracking-wide text-hyco-black hover:text-hyco-blue cursor-pointer border-b-2 border-transparent hover:border-hyco-blue transition-colors flex items-center">
                  Portfolio
                  <svg className="w-4 h-4 ml-1 text-hyco-gray group-hover:text-hyco-blue transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full right-0 w-[680px] bg-hyco-white shadow-2xl border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex p-6 gap-6 rounded-b-lg">
                  <div className="w-1/3">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Our Ecosystem</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      Transformative AI infrastructure, venture product engineering, and enterprise servicing.
                    </p>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 p-2 rounded border border-blue-100">
                      ★ Lead Horse: Servicio
                    </div>
                  </div>
                  <div className="w-2/3 grid grid-cols-2 gap-x-4 gap-y-2 border-l border-black/5 pl-6">
                    <Link href="/servicio-ai" className="group/link p-2.5 hover:bg-blue-50/60 rounded-md transition-colors border border-transparent hover:border-blue-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-hyco-black group-hover/link:text-hyco-blue">Servicio.AI</span>
                        <span className="text-[9px] font-bold uppercase bg-blue-600 text-white px-1.5 py-0.5 rounded">Lead Horse</span>
                      </div>
                      <div className="text-xs text-gray-500">High-Tier Verified Services Marketplace</div>
                    </Link>
                    <Link href="/berdev" className="group/link p-2.5 hover:bg-gray-50 rounded-md transition-colors border border-transparent hover:border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-hyco-black group-hover/link:text-hyco-blue">BerdEV</span>
                        <span className="text-[9px] font-bold uppercase bg-emerald-600 text-white px-1.5 py-0.5 rounded font-mono">EV Mobility</span>
                      </div>
                      <div className="text-xs text-gray-500">EV Navigation & Charging App</div>
                    </Link>
                    <Link href="/leasifai" className="group/link p-2.5 hover:bg-gray-50 rounded-md transition-colors border border-transparent hover:border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-hyco-black group-hover/link:text-hyco-blue">LeasifAI</span>
                        <span className="text-[9px] font-bold uppercase bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-mono">GTM</span>
                      </div>
                      <div className="text-xs text-gray-500">Commercial Real Estate AI</div>
                    </Link>
                    <Link href="/electrifai" className="group/link p-2.5 hover:bg-gray-50 rounded-md transition-colors border border-transparent hover:border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-hyco-black group-hover/link:text-hyco-blue">ElectrifAI PH</span>
                      </div>
                      <div className="text-xs text-gray-500">Energy & Grid Optimization</div>
                    </Link>
                    <Link href="/edugaite" className="group/link p-2.5 hover:bg-gray-50 rounded-md transition-colors col-span-2 border border-dashed border-gray-200 opacity-75">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-700">Edugaite</span>
                        <span className="text-[9px] font-bold uppercase text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">Paused / R&D</span>
                      </div>
                      <div className="text-[11px] text-gray-400">K-12 EdTech Workflow Platform</div>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Search */}
            <div className="flex items-center border-l border-slate-200 pl-6">
              <button className="text-hyco-black hover:text-hyco-blue p-2 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-hyco-black"
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
                  <div className="text-lg font-serif font-bold text-[#0f172a]">Portfolio</div>
                  <div className="pl-4 flex flex-col space-y-4 border-l-2 border-slate-100">
                    <Link href="/servicio-ai" className="text-base font-bold text-blue-600 hover:text-blue-700 flex items-center justify-between">
                      <span>Servicio.AI</span>
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-sans">Lead Horse</span>
                    </Link>
                    <Link href="/berdev" className="text-base font-medium text-slate-700 hover:text-blue-700 flex items-center justify-between">
                      <span>BerdEV</span>
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-sans font-semibold">EV Mobility</span>
                    </Link>
                    <Link href="/leasifai" className="text-base font-medium text-slate-600 hover:text-blue-700 flex items-center justify-between">
                      <span>LeasifAI</span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-sans">GTM</span>
                    </Link>
                    <Link href="/electrifai" className="text-base font-medium text-slate-600 hover:text-blue-700">ElectrifAI PH</Link>
                    <Link href="/edugaite" className="text-base font-medium text-slate-400 hover:text-blue-700 flex items-center justify-between">
                      <span>Edugaite</span>
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-sans">Paused</span>
                    </Link>
                  </div>
                </div>

                <div className="pt-6 mt-2 border-t border-slate-200 flex flex-col space-y-4">
                  <a href="#" className="text-sm font-medium text-slate-500 uppercase tracking-wider">Investor Relations</a>
                  <a href="#" className="text-sm font-medium text-slate-500 uppercase tracking-wider">Media</a>
                  <a href="#" className="text-sm font-medium text-slate-500 uppercase tracking-wider">Global Offices</a>
                  <a href="#" className="text-sm font-medium text-slate-500 uppercase tracking-wider">Alumni</a>
                  <button className="bg-[#0f172a] text-white text-sm font-bold uppercase tracking-wider px-6 py-3 mt-4 w-full text-center">
                    Client Login
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

      <footer className="bg-hyco-black text-hyco-white pt-20 pb-10 border-t-2 border-hyco-blue">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
            <div className="lg:col-span-2 pr-8">
              <Link href={pathname.startsWith('/leasifai') ? '/leasifai' : '/'} className="flex items-center mb-8">
                <HycoLogo dark />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Hardy &amp; Co. PH Inc. — Pioneering scalable IT and AI solutions across Southeast Asia. Powering Servicio.AI (High-Tier Professional Marketplace), BerdEV (Smart EV Mobility &amp; Charging Rewards), LeasifAI (Real Estate GTM), and ElectrifAI.
              </p>
              <button className="border border-white/20 hover:border-hyco-blue hover:text-hyco-blue text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors">
                Contact Us
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
              <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 text-slate-300">Portfolio</h4>
              <ul className="space-y-4 text-[14px] text-slate-400">
                <li>
                  <Link href="/servicio-ai" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>Servicio.AI</span>
                    <span className="text-[9px] text-blue-400 font-bold uppercase">Lead Horse</span>
                  </Link>
                </li>
                <li>
                  <Link href="/berdev" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>BerdEV</span>
                    <span className="text-[9px] text-emerald-400 font-mono">EV Mobility</span>
                  </Link>
                </li>
                <li>
                  <Link href="/leasifai" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>LeasifAI</span>
                    <span className="text-[9px] text-amber-400 font-mono">GTM</span>
                  </Link>
                </li>
                <li><Link href="/electrifai" className="hover:text-white transition-colors">ElectrifAI PH</Link></li>
                <li>
                  <Link href="/edugaite" className="text-slate-500 hover:text-white transition-colors flex items-center justify-between">
                    <span>Edugaite</span>
                    <span className="text-[9px] text-slate-500 font-mono">Paused</span>
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
