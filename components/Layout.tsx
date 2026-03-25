"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const SilverEmblem = ({ dark = false }: { dark?: boolean }) => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
    <defs>
      <linearGradient id={`silver-${dark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={dark ? "#ffffff" : "#f8fafc"} />
        <stop offset="50%" stopColor={dark ? "#cbd5e1" : "#cbd5e1"} />
        <stop offset="100%" stopColor={dark ? "#94a3b8" : "#64748b"} />
      </linearGradient>
    </defs>
    <path d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z" fill={`url(#silver-${dark ? 'dark' : 'light'})`} />
    <text x="50" y="65" fontFamily="'Playfair Display', serif" fontSize="48" fill={dark ? "#0f172a" : "#1e293b"} textAnchor="middle" fontWeight="bold">H</text>
  </svg>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-[#1e293b] text-slate-300 text-[11px] font-medium tracking-wide uppercase py-2">
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
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 transition-all duration-300 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center h-20">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center group">
            <SilverEmblem />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#0f172a] group-hover:text-blue-800 transition-colors">
                Hardy & Co.
              </span>
            </div>
          </Link>

          {/* Center/Right: Main Nav & Search */}
          <div className="hidden lg:flex items-center h-full ml-auto space-x-10">
            <nav className="flex items-center h-full space-x-10">
              <Link href="/" className="text-[14px] font-semibold text-[#0f172a] hover:text-blue-700 h-full flex items-center border-b-2 border-transparent hover:border-blue-700 transition-colors">Home</Link>
              <Link href="/about" className="text-[14px] font-semibold text-[#0f172a] hover:text-blue-700 h-full flex items-center border-b-2 border-transparent hover:border-blue-700 transition-colors">About</Link>
              
              {/* Portfolio Dropdown */}
              <div className="relative group h-full flex items-center">
                <span className="text-[14px] font-semibold text-[#0f172a] hover:text-blue-700 cursor-pointer border-b-2 border-transparent hover:border-blue-700 transition-colors flex items-center">
                  Portfolio
                  <svg className="w-4 h-4 ml-1 text-slate-400 group-hover:text-blue-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                
                {/* Mega Menu Dropdown */}
                <div className="absolute top-full right-0 w-[600px] bg-white shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex p-6 gap-6 rounded-b-lg">
                  <div className="w-1/3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Our Startups</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Discover our consolidated portfolio of AI-driven solutions transforming industries globally.
                    </p>
                  </div>
                  <div className="w-2/3 grid grid-cols-2 gap-x-4 gap-y-2 border-l border-slate-100 pl-6">
                    <Link href="/electrifai" className="group/link p-3 hover:bg-slate-50 rounded-md transition-colors">
                      <div className="text-sm font-bold text-[#0f172a] group-hover/link:text-blue-700 mb-1">ElectrifAI</div>
                      <div className="text-xs text-slate-500">Energy & Grid Optimization</div>
                    </Link>
                    <Link href="/servicio-ai" className="group/link p-3 hover:bg-slate-50 rounded-md transition-colors">
                      <div className="text-sm font-bold text-[#0f172a] group-hover/link:text-blue-700 mb-1">Servicio AI</div>
                      <div className="text-xs text-slate-500">Professional Talent Collective</div>
                    </Link>
                    <Link href="/leasifai" className="group/link p-3 hover:bg-slate-50 rounded-md transition-colors">
                      <div className="text-sm font-bold text-[#0f172a] group-hover/link:text-blue-700 mb-1">LeasifAI</div>
                      <div className="text-xs text-slate-500">Real Estate & Leasing Tech</div>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Search */}
            <div className="flex items-center border-l border-slate-200 pl-6">
              <button className="text-[#0f172a] hover:text-blue-700 p-2 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-[#0f172a]"
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
                  <Link href="/electrifai" className="text-base font-medium text-slate-600 hover:text-blue-700">ElectrifAI</Link>
                  <Link href="/servicio-ai" className="text-base font-medium text-slate-600 hover:text-blue-700">Servicio AI</Link>
                  <Link href="/leasifai" className="text-base font-medium text-slate-600 hover:text-blue-700">LeasifAI</Link>
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

      <footer className="bg-[#0f172a] text-white pt-20 pb-10 border-t-4 border-blue-800">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
            <div className="lg:col-span-2 pr-8">
              <Link href="/" className="flex items-center mb-8">
                <SilverEmblem dark />
                <div className="flex flex-col leading-none">
                  <span className="font-serif text-2xl font-bold tracking-tight text-white">
                    Hardy & Co.
                  </span>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Pioneering IT and AI solutions. We consolidate, optimize, and scale transformative technologies across energy, customer service, and real estate sectors globally.
              </p>
              <button className="border border-slate-600 hover:border-white text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors">
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
                <li><Link href="/electrifai" className="hover:text-white transition-colors">ElectrifAI</Link></li>
                <li><Link href="/servicio-ai" className="hover:text-white transition-colors">Servicio AI</Link></li>
                <li><Link href="/leasifai" className="hover:text-white transition-colors">LeasifAI</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Future Ventures</a></li>
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
