"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const HycoLogo = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/logo.png"
    alt="HYCO Logo"
    className={`h-16 w-16 object-contain mr-2 ${dark ? 'invert' : ''}`}
  />
);

const LeasifaiLogo = ({ dark = false }: { dark?: boolean }) => (
  <div className="flex items-center gap-3">
    <img src="/img-folder/leasifAI.png" alt="LeasifAI Logo" className="h-16 w-auto object-contain" />
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
                <div className="absolute top-full right-0 w-[600px] bg-hyco-white shadow-2xl border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex p-6 gap-6 rounded-b-lg">
                  <div className="w-1/3">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Our Startups</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Discover our consolidated portfolio of AI-driven solutions transforming industries globally.
                    </p>
                  </div>
                  <div className="w-2/3 grid grid-cols-2 gap-x-4 gap-y-2 border-l border-black/5 pl-6">
                    <Link href="/electrifai" className="group/link p-3 hover:bg-gray-50 rounded-md transition-colors">
                      <div className="text-sm font-bold text-hyco-black group-hover/link:text-hyco-blue mb-1">ElectrifAI PH</div>
                      <div className="text-xs text-gray-500">Energy & Grid Optimization</div>
                    </Link>
                    <Link href="/leasifai" className="group/link p-3 hover:bg-gray-50 rounded-md transition-colors">
                      <div className="text-sm font-bold text-hyco-black group-hover/link:text-hyco-blue mb-1">LeasifAI</div>
                      <div className="text-xs text-gray-500">Real Estate & Leasing Tech</div>
                    </Link>
                    <Link href="/servicio-ai" className="group/link p-3 hover:bg-gray-50 rounded-md transition-colors">
                      <div className="text-sm font-bold text-hyco-black group-hover/link:text-hyco-blue mb-1">Serbisyow.AI</div>
                      <div className="text-xs text-gray-500">Professional Talent Collective</div>
                    </Link>
                    <Link href="/edugaite" className="group/link p-3 hover:bg-gray-50 rounded-md transition-colors">
                      <div className="text-sm font-bold text-hyco-black group-hover/link:text-hyco-blue mb-1">Edugaite</div>
                      <div className="text-xs text-gray-500">K-12 EdTech Platform</div>
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
                    <Link href="/electrifai" className="text-base font-medium text-slate-600 hover:text-blue-700">ElectrifAI PH</Link>
                    <Link href="/leasifai" className="text-base font-medium text-slate-600 hover:text-blue-700">LeasifAI</Link>
                    <Link href="/servicio-ai" className="text-base font-medium text-slate-600 hover:text-blue-700">Serbisyow.AI</Link>
                    <Link href="/edugaite" className="text-base font-medium text-slate-600 hover:text-blue-700">Edugaite</Link>
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
                Pioneering IT and AI solutions. We consolidate, optimize, and scale transformative technologies across energy, customer service, and real estate sectors globally.
              </p>
              <button className="border border-white/20 hover:border-hyco-blue hover:text-hyco-blue text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors">
                Contact Us
              </button>
            </div>

            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 text-slate-300">About Us</h4>
              <ul className="space-y-4 text-[14px] text-slate-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Corporate Overview</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Board of Directors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our History</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 text-slate-300">Portfolio</h4>
              <ul className="space-y-4 text-[14px] text-slate-400">
                <li><Link href="/electrifai" className="hover:text-white transition-colors">ElectrifAI PH</Link></li>
                <li><Link href="/leasifai" className="hover:text-white transition-colors">LeasifAI</Link></li>
                <li><Link href="/servicio-ai" className="hover:text-white transition-colors">Serbisyow.AI</Link></li>
                <li><Link href="/edugaite" className="hover:text-white transition-colors">Edugaite</Link></li>
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
