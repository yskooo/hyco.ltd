"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ArrowRight, BarChart3, Globe2, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      });

      // Stats Animation
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });

      // Portfolio Animation
      // Animation removed to fix visibility issues
      /*
      gsap.from('.portfolio-card', {
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
      */

      // About Animation
      gsap.from('.about-content > *', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 70%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });

      gsap.from('.about-image', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 70%',
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 mt-16">
          <div className="max-w-3xl hero-content">
            <div className="w-12 h-1 bg-blue-600 mb-8"></div>
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif text-white mb-8 tracking-tight leading-[1.1]">
              Pioneering IT & AI Solutions.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-12 font-light leading-relaxed max-w-2xl">
              Hardy & Co. is a premier holding company delivering transformative technologies across energy, customer service, and real estate. We build the infrastructure of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <a href="#portfolio" className="bg-blue-700 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-blue-800 transition-colors flex items-center">
                Explore Our Portfolio <ArrowRight size={16} className="ml-3" />
              </a>
              <Link href="/about" className="border border-slate-500 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white/10 hover:border-white transition-colors">
                Corporate Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section ref={statsRef} className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="stat-item">
              <div className="text-4xl font-serif text-[#0f172a] mb-2">3</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Core Startups</div>
            </div>
            <div className="stat-item">
              <div className="text-4xl font-serif text-[#0f172a] mb-2">$2.4B</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Assets Under Mgmt</div>
            </div>
            <div className="stat-item">
              <div className="text-4xl font-serif text-[#0f172a] mb-2">15+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Markets</div>
            </div>
            <div className="stat-item">
              <div className="text-4xl font-serif text-[#0f172a] mb-2">99.9%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" ref={portfolioRef} className="py-32 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-20 md:flex justify-between items-end">
            <div className="max-w-3xl">
              <h2 className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">Our Portfolio</h2>
              <h3 className="text-5xl font-serif text-[#0f172a] mb-6">Integrated Solutions.</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                By centralizing our core IT and AI products under Hardy & Co., we optimize operational costs, share proprietary machine learning models, and deliver unparalleled value to our enterprise clients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* ElectrifAI Card */}
            <Link href="/electrifai" className="portfolio-card group bg-white border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#0f172a]/40 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" alt="ElectrifAI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
              <div className="p-10 flex-grow flex flex-col bg-white relative">
                <div className="absolute top-0 left-10 w-12 h-1 bg-blue-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-slate-50 text-blue-700 flex items-center justify-center mr-4 border border-slate-100">
                    <BarChart3 size={20} />
                  </div>
                  <h4 className="text-2xl font-serif text-[#0f172a]">ElectrifAI</h4>
                </div>
                <p className="text-base text-slate-600 mb-8 flex-grow leading-relaxed">
                  Intelligent energy management and predictive grid optimization for utility providers and large-scale industrial complexes.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-blue-700 flex items-center group-hover:text-blue-900 transition-colors">
                  View Subsidiary <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* Servicio AI Card */}
            <Link href="/servicio-ai" className="portfolio-card group bg-white border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#0f172a]/40 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Servicio AI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
              <div className="p-10 flex-grow flex flex-col bg-white relative">
                <div className="absolute top-0 left-10 w-12 h-1 bg-blue-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-slate-50 text-blue-700 flex items-center justify-center mr-4 border border-slate-100">
                    <Globe2 size={20} />
                  </div>
                  <h4 className="text-2xl font-serif text-[#0f172a]">Servicio AI</h4>
                </div>
                <p className="text-base text-slate-600 mb-8 flex-grow leading-relaxed">
                  Connect with verified professional talent for your projects. From home construction to legal consultation, get it done with confidence.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-blue-700 flex items-center group-hover:text-blue-900 transition-colors">
                  View Subsidiary <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* LeasifAI Card */}
            <Link href="/leasifai" className="portfolio-card group bg-white border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#0f172a]/40 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop" alt="LeasifAI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
              <div className="p-10 flex-grow flex flex-col bg-white relative">
                <div className="absolute top-0 left-10 w-12 h-1 bg-blue-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-slate-50 text-blue-700 flex items-center justify-center mr-4 border border-slate-100">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="text-2xl font-serif text-[#0f172a]">LeasifAI</h4>
                </div>
                <p className="text-base text-slate-600 mb-8 flex-grow leading-relaxed">
                  Smart real estate and leasing solutions. Automated contract analysis, tenant screening, and dynamic pricing models for property managers.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-blue-700 flex items-center group-hover:text-blue-900 transition-colors">
                  View Subsidiary <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="about-content">
            <h2 className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">Corporate Overview</h2>
            <h3 className="text-5xl font-serif text-[#0f172a] mb-8 leading-tight">Strategic Vision. <br/>Operational Excellence.</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded on the principles of rigorous engineering and market foresight, Hardy & Co. is a leading IT and AI solutions provider. We identify critical inefficiencies in traditional industries and deploy targeted technologies to solve them.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Through our specialized divisions, we deliver enterprise-grade security, scalable infrastructure, and innovative AI models that empower organizations to operate smarter and faster.
            </p>
            <Link href="/about" className="inline-flex items-center text-blue-700 font-bold tracking-widest uppercase text-sm hover:text-blue-900 transition-colors group">
              Read Our Story <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative about-image">
            <div className="absolute inset-0 bg-slate-100 translate-x-6 translate-y-6 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop" 
              alt="Corporate Boardroom" 
              className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
