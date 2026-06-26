"use client";

import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Globe2, ShieldCheck, Zap } from 'lucide-react';
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
    <div className="w-full bg-hyco-black text-hyco-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Futuristic Technology Background" 
            className="w-full h-full object-cover opacity-60 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-hyco-black/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-hyco-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl glass-panel p-8 md:p-12"
          >
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-16 h-1 bg-hyco-blue mb-8 origin-left"
            ></motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative z-20 text-5xl md:text-7xl lg:text-[90px] font-bold text-white mb-8 tracking-tighter leading-[1.05] uppercase"
            >
              The Catalyst<br/>For ASEAN AI.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-2xl text-gray-300 mb-12 font-light leading-relaxed max-w-2xl"
            >
              <strong className="font-bold text-white tracking-widest">HYCO</strong> is building AI that matters, for people who deserve it. Deploying transformative AI and infrastructure solutions across energy, talent, real estate, and education.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              <a href="#portfolio" className="bg-hyco-blue text-white px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-hyco-black transition-all duration-300 flex items-center shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                Explore Portfolio <ArrowRight size={18} className="ml-3" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section className="bg-hyco-black py-16 border-y border-white/10 relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl font-bold text-white mb-2"><Counter value={4} /></div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Core Subsidiaries</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl font-bold text-white mb-2">₱<Counter value={80} suffix="M+" /></div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Target ARR</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-5xl font-bold text-white mb-2"><Counter value={100} suffix="k+" /></div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Target Users</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-5xl font-bold text-white mb-2"><Counter value={100} suffix="%" /></div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">ASEAN Focus</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-hyco-light-gray text-hyco-black">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-20 md:flex justify-between items-end">
            <div className="max-w-3xl">
              <div className="flex items-center mb-4">
                <Zap className="text-hyco-blue mr-2" size={20} />
                <h2 className="text-xs font-bold text-hyco-blue uppercase tracking-[0.3em]">Our Ecosystem</h2>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold text-hyco-black mb-6 tracking-tighter uppercase">Integrated Dynamics.</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                By centralizing our core IT and AI products under <strong className="font-bold">HYCO</strong>, we optimize operational throughput, share proprietary ML models, and deliver unparalleled enterprise value.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* ElectrifAI Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link href="/electrifai" className="group block bg-white border border-gray-200 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-hyco-blue h-full overflow-hidden relative">
                <div className="h-64 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 bg-hyco-black/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                  <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" alt="ElectrifAI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
                <div className="p-10 bg-white relative z-20 h-full flex flex-col">
                  <div className="absolute top-0 left-10 w-12 h-1 bg-hyco-black group-hover:bg-hyco-blue transition-colors duration-300"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-hyco-black text-white group-hover:bg-hyco-blue flex items-center justify-center mr-4 transition-colors duration-300">
                      <BarChart3 size={24} />
                    </div>
                    <h4 className="text-2xl font-bold tracking-tight text-hyco-black">ElectrifAI PH</h4>
                  </div>
                  <p className="text-base text-gray-600 mb-8 flex-grow leading-relaxed font-light">
                    Intelligent energy management and predictive grid optimization for utility providers and industrial complexes.
                  </p>
                  <div className="text-xs font-bold uppercase tracking-widest text-hyco-black flex items-center group-hover:text-hyco-blue transition-colors">
                    Access Platform <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Servicio AI Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/servicio-ai" className="group block bg-white border border-gray-200 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-hyco-blue h-full overflow-hidden relative">
                <div className="h-64 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 bg-hyco-black/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Servicio AI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
                <div className="p-10 bg-white relative z-20 h-full flex flex-col">
                  <div className="absolute top-0 left-10 w-12 h-1 bg-hyco-black group-hover:bg-hyco-blue transition-colors duration-300"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-hyco-black text-white group-hover:bg-hyco-blue flex items-center justify-center mr-4 transition-colors duration-300">
                      <Globe2 size={24} />
                    </div>
                    <h4 className="text-2xl font-bold tracking-tight text-hyco-black">Serbisyow.AI</h4>
                  </div>
                  <p className="text-base text-gray-600 mb-8 flex-grow leading-relaxed font-light">
                    Global verified professional talent collective. Advanced matching algorithms for home construction to legal consultation.
                  </p>
                  <div className="text-xs font-bold uppercase tracking-widest text-hyco-black flex items-center group-hover:text-hyco-blue transition-colors">
                    Access Platform <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* LeasifAI Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/leasifai" className="group block bg-white border border-gray-200 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-hyco-blue h-full overflow-hidden relative">
                <div className="h-64 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 bg-hyco-black/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                  <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop" alt="LeasifAI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
                <div className="p-10 bg-white relative z-20 h-full flex flex-col">
                  <div className="absolute top-0 left-10 w-12 h-1 bg-hyco-black group-hover:bg-hyco-blue transition-colors duration-300"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-hyco-black text-white group-hover:bg-hyco-blue flex items-center justify-center mr-4 transition-colors duration-300">
                      <ShieldCheck size={24} />
                    </div>
                    <h4 className="text-2xl font-bold tracking-tight text-hyco-black">LeasifAI</h4>
                  </div>
                  <p className="text-base text-gray-600 mb-8 flex-grow leading-relaxed font-light">
                    Smart real estate logistics. Automated contract analysis, tenant screening, and dynamic yield optimization models.
                  </p>
                  <div className="text-xs font-bold uppercase tracking-widest text-hyco-black flex items-center group-hover:text-hyco-blue transition-colors">
                    Access Platform <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Edugaite Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/edugaite" className="group block bg-white border border-gray-200 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-hyco-blue h-full overflow-hidden relative">
                <div className="h-64 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 bg-hyco-black/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                  <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="Edugaite" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
                <div className="p-10 bg-white relative z-20 h-full flex flex-col">
                  <div className="absolute top-0 left-10 w-12 h-1 bg-hyco-black group-hover:bg-hyco-blue transition-colors duration-300"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-hyco-black text-white group-hover:bg-hyco-blue flex items-center justify-center mr-4 transition-colors duration-300">
                      <Globe2 size={24} />
                    </div>
                    <h4 className="text-2xl font-bold tracking-tight text-hyco-black">Edugaite</h4>
                  </div>
                  <p className="text-base text-gray-600 mb-8 flex-grow leading-relaxed font-light">
                    K-12 EdTech platform streamlining workflows with AI-powered lesson plans, quizzes, and grading for educators.
                  </p>
                  <div className="text-xs font-bold uppercase tracking-widest text-hyco-black flex items-center group-hover:text-hyco-blue transition-colors">
                    Access Platform <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white text-hyco-black border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold text-hyco-blue uppercase tracking-[0.3em] mb-4">The Group</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-hyco-black mb-8 leading-[1.05] tracking-tighter uppercase">Structured<br/>For Scale.</h3>
            <div className="w-20 h-1 bg-hyco-black mb-8"></div>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed font-light">
              Headquartered in Ortigas Center, Pasig City, <strong className="font-bold text-hyco-black">HYCO</strong> is a leading technology holding group. We identify critical inefficiencies in traditional sectors and inject targeted AI infrastructure.
            </p>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed font-light">
              Through our specialized subsidiaries, we deliver enterprise-grade security, scalable processing, and innovative learning models that empower global organizations to operate smarter.
            </p>
            <Link href="/about" className="inline-flex items-center bg-hyco-black text-white px-8 py-4 font-bold tracking-[0.2em] uppercase text-xs hover:bg-hyco-blue transition-colors group">
              Read Corporate Strategy <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-hyco-black translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop" 
              alt="Corporate Boardroom" 
              className="relative z-10 w-full h-[600px] object-cover grayscale border-4 border-white shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Glass decoration */}
            <div className="absolute -bottom-10 -left-10 z-20 w-48 h-48 glass-panel-white hidden md:flex items-center justify-center p-6 text-hyco-black border-l-4 border-hyco-blue">
              <div className="font-bold text-lg uppercase tracking-widest text-center">ASEAN<br/>Focused</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}