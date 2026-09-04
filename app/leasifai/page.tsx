"use client";

import { motion, AnimatePresence } from 'motion/react';
import { Target, Users, MapPin, Eye, Layers, ShieldCheck, Building2, ChevronRight, BarChart3, Search, Zap, Check, Menu, X, ArrowRight, Play, LineChart, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const intelligenceFeatures = [
  {
    icon: Target,
    title: "Location Intelligence",
    description: "Instantly assess the viability of any commercial space with comprehensive demographic and geographic data.",
  },
  {
    icon: Eye,
    title: "Competitive Intelligence",
    description: "Visualize where your rivals are located and identify underserved gaps in the market before they do.",
  },
  {
    icon: Users,
    title: "Foot Traffic",
    description: "Access anonymized movement data to understand peak hours, demographics, and corridor density.",
  },
  {
    icon: LineChart,
    title: "ROI Forecasting",
    description: "Predict revenue and long-term profitability based on historical data and market trends.",
  },
  {
    icon: Zap,
    title: "Smart Matching",
    description: "Our matching engine pairs your brand's DNA with locations that historically outperform for your niche.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description: "Every property on our platform undergoes a rigorous 12-point verification process for total peace of mind.",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Understand",
    description: "Define your ideal customer and spatial requirements.",
  },
  {
    number: 2,
    title: "Analyze",
    description: "AI processes foot traffic, demographics, and competitors.",
  },
  {
    number: 3,
    title: "Predict",
    description: "Get revenue forecasts and footfall heatmaps.",
  },
  {
    number: 4,
    title: "Decide",
    description: "Commit with confidence using data-backed insights.",
  },
];

const plans = [
  {
    name: "STARTER",
    title: "FREE",
    price: "₱0",
    period: "/mo",
    features: ["Basic Property Search", "5 Monthly Listings", "Standard Dashboard"],
    cta: "Get Started",
    outlined: true,
  },
  {
    name: "PROFESSIONAL",
    title: "PRO",
    price: "₱499",
    period: "/mo",
    features: ["Advanced AI Feasibility", "Full Foot Traffic Access", "Competitor Heatmaps", "Priority Notifications"],
    cta: "Start Free Trial",
    popular: true,
    dark: true,
  },
  {
    name: "ENTERPRISE",
    title: "PREMIUM",
    price: "₱1,299",
    period: "/mo",
    features: ["Dedicated Site Manager", "Custom ML Reports", "API Data Integration", "Legal Review Services"],
    cta: "Contact Sales",
    gradient: true,
  },
];

const teamMembers = [
  "Wency Geraldo",
  "Argee Bueno",
  "Gabriel Palattao",
  "Jhonathan Bufete",
  "Erin Comendador",
  "Daniel Caparro",
];

const demoLocations = [
  {
    name: "Alabang",
    business: "Coffee Shop",
    img: "/img-folder/coffee_shop_mockup.jpg",
    bbox: "121.025,14.415,121.055,14.435",
    data: { footfall: "18.2k", roi: "14 Months", match: "88%", competitors: 12, feasibility: "High" }
  },
  {
    name: "BGC",
    business: "Laundry",
    img: "/img-folder/laundry_shop_mockup.jpg",
    bbox: "121.040,14.545,121.060,14.560",
    data: { footfall: "45.1k", roi: "8 Months", match: "94%", competitors: 3, feasibility: "Very High" }
  },
  {
    name: "Makati",
    business: "Restaurant",
    img: "/img-folder/restaurant_mockup.jpg",
    bbox: "121.010,14.550,121.035,14.565",
    data: { footfall: "62.4k", roi: "18 Months", match: "91%", competitors: 45, feasibility: "High" }
  },
  {
    name: "Mandaluyong",
    business: "Apparel Shop",
    img: "/img-folder/apparel_shop_mockup.jpg",
    bbox: "121.030,14.570,121.060,14.590",
    data: { footfall: "28.9k", roi: "24 Months", match: "82%", competitors: 8, feasibility: "Medium" }
  }
];

export default function LeasifAI() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [demoPhase, setDemoPhase] = useState<'typing' | 'analyzing' | 'result' | 'wait'>('typing');
  const [typedText, setTypedText] = useState("");
  const [activeChecklist, setActiveChecklist] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (demoPhase === 'typing') {
      const targetText = demoLocations[demoStep].name;
      if (typedText.length < targetText.length) {
        timeout = setTimeout(() => {
          setTypedText(targetText.slice(0, typedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setDemoPhase('analyzing');
          setActiveChecklist(0);
        }, 600);
      }
    } else if (demoPhase === 'analyzing') {
      if (activeChecklist < 3) {
        timeout = setTimeout(() => {
          setActiveChecklist(prev => prev + 1);
        }, 800); // 800ms per step
      } else {
        timeout = setTimeout(() => {
          setDemoPhase('result');
        }, 600);
      }
    } else if (demoPhase === 'result') {
      timeout = setTimeout(() => {
        setDemoPhase('wait');
      }, 5000);
    } else if (demoPhase === 'wait') {
      setTypedText("");
      setActiveChecklist(0);
      setDemoStep((prev) => (prev + 1) % demoLocations.length);
      setDemoPhase('typing');
    }

    return () => clearTimeout(timeout);
  }, [demoPhase, typedText, activeChecklist, demoStep]);

  const currentLocation = demoLocations[demoStep];

  return (
    <div className="w-full bg-white font-sans text-slate-900 selection:bg-[#144BBD] selection:text-white">
      {/* NAVBAR */}
      <nav className="relative z-10 bg-white border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/img-folder/leasifAI.png" alt="LeasifAI Logo" className="h-12 w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-bold text-slate-600 hover:text-[#144BBD] transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm font-bold text-slate-600 hover:text-[#144BBD] transition-colors">How it Works</Link>
            <Link href="#pricing" className="text-sm font-bold text-slate-600 hover:text-[#144BBD] transition-colors">Pricing</Link>
                <button onClick={() => setIsModalOpen(true)} className="hidden md:block bg-[#144BBD] text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md hover:bg-[#0D3A94] transition-colors">
                  Get Started
                </button>
          </div>
          <button className="md:hidden text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0D3A94] to-[#144BBD] min-h-[calc(100vh-80px)] py-20 md:py-32 flex items-center">
        <div className="absolute inset-0 opacity-15">
          <div className="w-full h-full" style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 600"><rect fill="%23fff" opacity="0.05" width="1280" height="600"/></svg>')`,
            backgroundSize: 'cover',
          }} />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col xl:flex-row items-center gap-10 md:gap-16 xl:gap-20 w-full">
          <div className="flex-1 max-w-3xl text-center xl:text-left z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-4 py-2 bg-[#FF9500]/20 text-[#FF9500] rounded-full text-[11px] font-bold uppercase tracking-[0.6px] mb-8 border border-[#FF9500]/30">
                Next-Gen Location Intelligence
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[80px] font-extrabold leading-[1.05] text-white mb-6" style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: '-0.03em' }}>
                Find the right space.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9500] to-[#FACC15]">Back it with data.</span>
              </h1>
              <p className="text-base md:text-xl lg:text-2xl text-white/80 max-w-[600px] mx-auto xl:mx-0 mb-10 leading-relaxed font-medium">
                Eliminate the guesswork from commercial real estate. Get AI-driven foot traffic analysis, competitor mapping, and ROI forecasting instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
                <button onClick={() => setIsModalOpen(true)} className="bg-[#FF9500] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-[#e68600] transition-colors flex items-center justify-center">
                  Analyze a Location <ArrowRight size={20} className="ml-2" />
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 text-white text-base font-bold rounded-xl border-2 border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto backdrop-blur-sm">
                  <Play size={18} className="mr-2" /> See How It Works
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full max-w-[650px] relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 0 }} 
              animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }} 
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Interactive AI Visualization Mockup */}
              <div className="relative bg-slate-900/40 backdrop-blur-2xl rounded-2xl border border-white/20 p-2 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9500]/20 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4ADE80]/20 rounded-full blur-[80px]" />
                
                <div className="bg-slate-900/80 rounded-xl border border-white/10 overflow-hidden">
                  <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 bg-[#F87171] rounded-full" />
                    <div className="w-3 h-3 bg-[#FACC15] rounded-full" />
                    <div className="w-3 h-3 bg-[#4ADE80] rounded-full" />
                    <div className="ml-4 px-3 py-1 bg-white/5 rounded text-white/40 text-xs font-mono flex-1 truncate">
                      leasifai.com/analyze/metro-manila
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Target Area</div>
                        <div className="text-white font-bold text-xl flex items-center gap-2">
                          <MapPin size={20} className="text-[#FF9500]" /> BGC, Taguig
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Match Score</div>
                        <div className="text-[#4ADE80] font-black text-3xl">94%</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-white/5 rounded-lg border border-white/5 flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                          <Users className="text-[#38BDF8]" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-bold">12.4k Daily Footfall</div>
                          <div className="text-white/50 text-sm">Peak hours: 11AM - 2PM</div>
                        </div>
                        <div className="text-[#4ADE80] text-sm font-bold">+14%</div>
                      </div>
                      
                      <div className="p-4 bg-white/5 rounded-lg border border-white/5 flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                          <LineChart className="text-[#FACC15]" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-bold">High Growth Corridor</div>
                          <div className="text-white/50 text-sm">Projected ROI: 18 Months</div>
                        </div>
                        <div className="text-[#FACC15] text-sm font-bold">Top 5%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST / VALUE STATEMENT */}
      <section className="py-24 bg-slate-50 flex flex-col items-center justify-center text-center px-6 border-b border-slate-200">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl">
          <Target size={48} className="text-[#144BBD] mx-auto mb-8 opacity-20" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D3A94] leading-tight" style={{ fontFamily: "'Manrope', sans-serif" }}>
            "Commercial real estate shouldn't be a guessing game."
          </h2>
          <div className="w-24 h-1 bg-[#FF9500] mx-auto mt-12 rounded-full"></div>
        </motion.div>
      </section>

      {/* REAL IMAGE + DATA OVERLAY */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
              See what others can't.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transform standard street views into rich, data-dense landscapes. We overlay the metrics that matter directly onto the physical world.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
            <div className="w-full h-[400px] md:h-[600px] bg-slate-100 relative flex items-center justify-center overflow-hidden">
               {/* Static OpenStreetMap Background (Alabang Area) */}
               <iframe 
                 src="https://www.openstreetmap.org/export/embed.html?bbox=121.015%2C14.415%2C121.045%2C14.435&layer=mapnik" 
                 className="absolute inset-0 pointer-events-none opacity-50 grayscale border-none"
                 style={{ width: '100%', height: '100%', minWidth: '100%', minHeight: '100%', position: 'absolute', top: 0, left: 0 }}
               ></iframe>
               
               {/* Map Nodes (Pin + Card wrappers) */}
               
               {/* Traffic Flow Node */}
               <div className="absolute top-[25%] left-[50%] md:top-[38%] md:left-[40%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 scale-75 md:scale-100">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8, y: 10 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                   className="bg-white/95 backdrop-blur shadow-xl rounded-xl p-4 border border-slate-100 flex items-center gap-3 mb-2 z-20"
                 >
                   <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Users size={20} className="text-emerald-600" />
                   </div>
                   <div>
                     <div className="text-xs font-bold text-slate-400 uppercase">Traffic Flow</div>
                     <div className="font-black text-slate-800">High Density</div>
                   </div>
                 </motion.div>
                 <motion.div
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                   transition={{ delay: 0.8, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                   className="flex flex-col items-center z-10"
                 >
                   <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40 text-white">
                     <Users size={24} />
                   </div>
                   <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-emerald-500 -mt-[2px]" />
                 </motion.div>
               </div>

               {/* Competitor Node */}
               <div className="absolute top-[45%] left-[50%] md:top-[60%] md:left-[65%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 scale-75 md:scale-100">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8, y: 10 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                   className="bg-white/95 backdrop-blur shadow-xl rounded-xl p-4 border border-slate-100 flex items-center gap-3 mb-2 z-20"
                 >
                   <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                      <Building2 size={20} className="text-rose-600" />
                   </div>
                   <div>
                     <div className="text-xs font-bold text-slate-400 uppercase">Direct Competitor</div>
                     <div className="font-black text-slate-800">0.2 mi away</div>
                   </div>
                 </motion.div>
                 <motion.div
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                   transition={{ delay: 1.0, y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 } }}
                   className="flex flex-col items-center z-10"
                 >
                   <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/40 text-white">
                     <Building2 size={24} />
                   </div>
                   <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-rose-500 -mt-[2px]" />
                 </motion.div>
               </div>

               {/* Ideal Location Node */}
               <div className="absolute top-[70%] left-[50%] md:top-[62%] md:left-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 scale-75 md:scale-100">
                 <motion.div
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                   transition={{ delay: 1.2, y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}
                   className="flex flex-col items-center z-10"
                 >
                   <div className="w-12 h-12 bg-[#144BBD] rounded-full flex items-center justify-center shadow-lg shadow-[#144BBD]/40 text-white">
                     <Check size={24} />
                   </div>
                   <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-[#144BBD] -mt-[2px]" />
                 </motion.div>
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8, y: -10 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
                   className="bg-[#144BBD] shadow-2xl rounded-xl p-4 flex items-center gap-3 text-white border border-[#144BBD]/50 mt-2 z-20"
                 >
                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Check size={20} className="text-white" />
                   </div>
                   <div>
                     <div className="text-xs font-bold text-white/70 uppercase">Ideal Location</div>
                     <div className="font-black">Available for Lease</div>
                   </div>
                 </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEASIFAI INTELLIGENCE */}
      <section id="features" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#144BBD] font-bold tracking-wider uppercase text-sm mb-4 block">Platform Features</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Know the opportunity before you commit.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our intelligence engine provides you with institutional-grade data, simplified for rapid decision-making.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {intelligenceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-[#F8FAFF] border border-[#E5EEFF] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#144BBD] transition-colors">
                    <Icon size={28} className="text-[#144BBD] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section className="py-24 bg-[#0D3A94] text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Watch LeasifAI analyze a location.
              </h2>
              <p className="text-xl text-white/70 mb-10">
                Experience the power of our real-time analysis engine. Input any address and let our models generate a comprehensive feasibility report in seconds.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4 bg-slate-900/50 rounded-xl p-2 border border-white/10 mb-6">
                  <div className="pl-4">
                    <Search className="text-white/40" />
                  </div>
                  <div className="flex-1 text-white font-medium flex items-center h-full min-h-[24px]">
                    {typedText.length === 0 && demoPhase === 'typing' ? (
                      <span className="text-white/30">Enter an address or area...</span>
                    ) : (
                      typedText
                    )}
                    {demoPhase === 'typing' && (
                      <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 h-5 bg-[#FF9500] ml-1" />
                    )}
                  </div>
                  <button className={`px-6 py-3 rounded-lg font-bold shadow-lg transition-colors ${demoPhase === 'analyzing' ? 'bg-[#e68600] text-white' : 'bg-[#FF9500] text-white'}`}>
                    Analyze
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <div className="w-5 h-5 rounded-full border-2 border-white/20 flex items-center justify-center">
                       {demoPhase === 'typing' ? null : 
                        demoPhase === 'analyzing' && activeChecklist === 0 ? <Loader2 size={12} className="text-[#FF9500] animate-spin" /> : 
                        <Check size={12} className="text-[#4ADE80]" />}
                     </div>
                     <span className={`font-medium ${demoPhase === 'typing' ? 'text-white/40' : 'text-white/80'}`}>Scanning local demographics...</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-5 h-5 rounded-full border-2 border-white/20 flex items-center justify-center">
                       {demoPhase === 'typing' || (demoPhase === 'analyzing' && activeChecklist < 1) ? null : 
                        demoPhase === 'analyzing' && activeChecklist === 1 ? <Loader2 size={12} className="text-[#FF9500] animate-spin" /> : 
                        <Check size={12} className="text-[#4ADE80]" />}
                     </div>
                     <span className={`font-medium ${demoPhase === 'typing' || (demoPhase === 'analyzing' && activeChecklist < 1) ? 'text-white/40' : 'text-white/80'}`}>Mapping competitors in 5km radius...</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-5 h-5 rounded-full border-2 border-white/20 flex items-center justify-center">
                       {demoPhase === 'typing' || (demoPhase === 'analyzing' && activeChecklist < 2) ? null : 
                        demoPhase === 'analyzing' && activeChecklist === 2 ? <Loader2 size={12} className="text-[#FF9500] animate-spin" /> : 
                        <Check size={12} className="text-[#4ADE80]" />}
                     </div>
                     <span className={`font-medium ${demoPhase === 'typing' || (demoPhase === 'analyzing' && activeChecklist < 2) ? 'text-white/40' : 'text-white'}`}>Calculating projected ROI...</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full relative">
               <div className="aspect-auto h-[800px] md:h-auto md:aspect-[4/3] bg-slate-800 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center p-2 md:p-8">
                  <AnimatePresence mode="wait">
                    {demoPhase === 'result' || demoPhase === 'wait' ? (
                      <motion.div 
                        key={currentLocation.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 w-full h-full bg-slate-900 flex flex-col md:flex-row p-4 gap-4"
                      >
                        {/* LEFT COLUMN: Map Only */}
                        <div className="w-full h-[250px] md:h-full md:w-1/2 rounded-2xl overflow-hidden relative border border-white/10 shadow-lg flex-shrink-0">
                             <iframe 
                               width="100%" 
                               height="100%" 
                               frameBorder="0" 
                               scrolling="no" 
                               src={`https://www.openstreetmap.org/export/embed.html?bbox=${currentLocation.bbox}&layer=mapnik`}
                               className="absolute inset-0 w-full h-full pointer-events-none opacity-80 grayscale border-none"
                               style={{ minWidth: '100%', minHeight: '100%' }}
                             ></iframe>
                             <div className="absolute inset-0 bg-[#0D3A94]/20 pointer-events-none"></div>
                        </div>
                        
                        {/* RIGHT COLUMN: Data + Mockup */}
                        <div className="w-full md:w-1/2 flex-1 flex flex-col gap-3 overflow-y-auto pb-4 md:pb-0 pr-2 md:pr-0">
                           {/* Top: Data Card */}
                           <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-2xl w-full flex-shrink-0">
                             <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Target Area</div>
                             <div className="text-white font-bold text-xl flex items-center gap-2 mb-4">
                               <MapPin size={20} className="text-[#FF9500]" /> {currentLocation.name}
                             </div>
                             
                             <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Proposed Business</div>
                             <div className="text-[#38BDF8] font-bold text-lg mb-4">
                               {currentLocation.business}
                             </div>

                             <div className="grid grid-cols-2 gap-3 mb-4">
                               <div>
                                 <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Match</div>
                                 <div className="text-[#4ADE80] font-black text-2xl">{currentLocation.data.match}</div>
                               </div>
                               <div>
                                 <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Feasibility</div>
                                 <div className="text-white font-bold text-lg">{currentLocation.data.feasibility}</div>
                               </div>
                               <div>
                                 <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Foot Traffic</div>
                                 <div className="text-white font-bold text-lg">{currentLocation.data.footfall}</div>
                               </div>
                               <div>
                                 <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Competitors</div>
                                 <div className="text-white font-bold text-lg">{currentLocation.data.competitors} <span className="text-xs font-normal text-white/50">within 5km</span></div>
                               </div>
                             </div>
                             
                             <div className="pt-3 border-t border-white/10">
                               <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Projected ROI</div>
                               <div className="text-[#FACC15] font-black text-xl">{currentLocation.data.roi}</div>
                             </div>
                           </div>

                           {/* Bottom: Mockup Image */}
                           <div className="flex-1 rounded-2xl overflow-hidden relative border border-white/10 shadow-lg bg-slate-800">
                             <img src={currentLocation.img} alt={currentLocation.business} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                             <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 text-xs font-bold uppercase rounded text-white border border-white/10">
                               Location Mockup
                             </div>
                           </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="placeholder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center w-full h-full text-center relative overflow-hidden bg-slate-900"
                      >
                        {/* Radar sweeping background */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                          <div className="w-[150vw] h-[150vw] md:w-[800px] md:h-[800px] max-w-[800px] max-h-[800px] flex-shrink-0 rounded-full border border-[#38BDF8]/30 relative flex items-center justify-center">
                            <div className="w-[75%] h-[75%] rounded-full border border-[#38BDF8]/20 flex items-center justify-center">
                               <div className="w-[66%] h-[66%] rounded-full border border-[#38BDF8]/10" />
                            </div>
                            <motion.div 
                               animate={{ rotate: 360 }}
                               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                               className="absolute inset-0 rounded-full"
                               style={{ background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(56, 189, 248, 0.4) 360deg)' }}
                            />
                          </div>
                        </div>

                        {/* Central Icon & Text */}
                        <div className="relative z-10 flex flex-col items-center">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <Target size={64} className="text-[#38BDF8] mb-6 opacity-80" />
                          </motion.div>
                          <div className="text-[#38BDF8] font-mono uppercase tracking-widest text-sm animate-pulse">
                            {demoPhase === 'typing' ? '[ AWAITING TARGET INPUT ]' : '[ RUNNING FEASIBILITY MODELS... ]'}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
              How it works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A streamlined process to take you from searching to signing with absolute confidence.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-slate-100 z-0 rounded-full" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 bg-white rounded-full border-[6px] border-slate-50 shadow-xl flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 border-2 border-[#144BBD] rounded-full opacity-20" />
                    <span className="text-[#144BBD] text-3xl font-black">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REAL-WORLD SCENARIO */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col xl:flex-row">
             <div className="xl:w-1/2 bg-white relative min-h-[400px] border-r border-slate-100">
               <img src="/img-folder/milestones.jpg" alt="LeasifAI Milestones and Pitching Events" className="absolute inset-0 w-full h-full object-contain p-2 md:p-6" />
             </div>
             <div className="xl:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-slate-50">
                <div className="inline-flex items-center px-4 py-1.5 bg-[#144BBD]/10 text-[#144BBD] font-bold text-xs uppercase tracking-wider rounded-full mb-6 w-max">
                  Our Philosophy
                </div>
                <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                  "The right location isn't always the busiest one."
                </h3>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  A high-traffic street can look like the perfect opportunity—but traffic alone doesn’t tell the whole story. Businesses need to understand who passes by, when they pass, what competitors are nearby, and whether the location actually fits their market.
                </p>
                <div className="h-1 w-12 bg-[#144BBD] rounded-full mb-6"></div>
                <p className="text-slate-700 text-lg leading-relaxed font-bold">
                  LeasifAI brings these insights together, helping businesses move beyond guesswork and make smarter, data-backed leasing decisions.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <div className="w-16 h-16 bg-[#F8FAFF] rounded-2xl flex items-center justify-center mb-8 border border-[#E5EEFF]">
                <Target size={32} className="text-[#144BBD]" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To democratize high-stakes real estate intelligence, making institutional-grade data accessible to every business owner, from local startups to global enterprises.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#FFF4E5] rounded-2xl flex items-center justify-center mb-8 border border-[#FFE1B2]">
                <Eye size={32} className="text-[#FF9500]" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To eliminate the guesswork from commercial leasing by providing AI-driven insights that empower tenants and owners to make data-backed decisions with absolute confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Meet The Team
            </h2>
            <p className="text-slate-600 text-lg">Expertise in Real Estate, AI, and Big Data.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {teamMembers.map((name, index) => {
              const initials = name.split(" ").map(n => n[0]).join("");
              return (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-center group"
                >
                  <div className="w-32 h-32 mx-auto bg-white rounded-full border border-slate-200 shadow-md flex items-center justify-center mb-6 group-hover:border-[#144BBD] group-hover:shadow-xl transition-all">
                    <span className="text-[#144BBD] text-2xl font-black">{initials}</span>
                  </div>
                  <h3 className="text-slate-900 text-lg font-bold">{name}</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">Team Member</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLANS (PRICING) */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Flexible Plans
            </h2>
            <div className="inline-flex items-center gap-4 bg-slate-50 p-2 rounded-xl border border-slate-200">
              <span className="text-slate-900 text-sm font-bold px-4">Monthly</span>
              <div className="w-12 h-6 bg-[#144BBD] rounded-full p-1 flex items-center justify-end cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
              <div className="flex items-center gap-2 px-4">
                <span className="text-slate-500 text-sm font-bold">Annually</span>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">Save 20%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-3xl p-10 flex flex-col ${
                  plan.dark
                    ? "bg-[#144BBD] text-white shadow-2xl scale-105 z-10"
                    : plan.gradient
                    ? "bg-gradient-to-br from-[#0D3A94] to-[#144BBD] text-white shadow-xl"
                    : "bg-white border border-slate-200 shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF9500] text-white text-xs font-black uppercase tracking-wider px-6 py-2 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                <p className={`text-sm font-bold uppercase tracking-[1.5px] mb-4 ${
                  plan.dark || plan.gradient ? "text-white/70" : "text-[#144BBD]"
                }`}>{plan.name}</p>
                <p className={`text-3xl font-black mb-2 ${
                  plan.dark || plan.gradient ? "text-white" : "text-slate-900"
                }`}>{plan.title}</p>
                <div className="flex items-baseline gap-1 mb-10">
                  <span className={`text-5xl font-black ${
                    plan.dark || plan.gradient ? "text-white" : "text-slate-900"
                  }`}>{plan.price}</span>
                  <span className={`text-base font-medium ${
                    plan.dark || plan.gradient ? "text-white/60" : "text-slate-500"
                  }`}>{plan.period}</span>
                </div>

                <div className="flex-1 flex flex-col gap-5 mb-10">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check size={18} className={`mt-0.5 shrink-0 ${plan.dark || plan.gradient ? "text-[#FF9500]" : "text-[#144BBD]"}`} />
                      <span className={`text-base font-medium ${
                        plan.dark || plan.gradient ? "text-white/90" : "text-slate-600"
                      }`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    plan.dark || plan.gradient
                      ? "bg-[#FF9500] text-white hover:bg-[#e68600] shadow-xl"
                      : "bg-[#F8FAFF] text-[#144BBD] border border-[#E5EEFF] hover:bg-[#144BBD] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 bg-[#0D3A94] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 600"><rect fill="%23fff" opacity="0.05" width="1280" height="600"/></svg>')`,
            backgroundSize: 'cover',
          }} />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Your next location is a business decision.
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
              Join the smart businesses that are eliminating leasing risks. Get unprecedented visibility into your next commercial space.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center px-10 py-5 bg-[#FF9500] text-white text-lg font-bold rounded-xl shadow-2xl hover:bg-[#e68600] transition-colors hover:scale-105 active:scale-95 duration-200">
              BOOK A DEMO <ArrowRight size={24} className="ml-3" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* MODAL (LEAD CAPTURE) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden border border-slate-200"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="p-8 md:p-12">
                <div className="w-16 h-16 bg-[#144BBD]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={32} className="text-[#144BBD]" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2" style={{ fontFamily: "'Manrope', sans-serif" }}>Get Early Access</h3>
                <p className="text-slate-600 mb-8">Enter your details and our team will reach out to schedule a personalized walkthrough.</p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Work Email</label>
                    <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#144BBD]/50 focus:border-[#144BBD]" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Company Name</label>
                    <input type="text" placeholder="Acme Retail" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#144BBD]/50 focus:border-[#144BBD]" />
                  </div>
                  <button className="w-full bg-[#144BBD] text-white font-bold py-4 rounded-xl mt-4 hover:bg-[#0D3A94] transition-colors shadow-lg">
                    Join Waitlist
                  </button>
                </form>
                <p className="text-center text-xs text-slate-400 mt-6">By joining, you agree to our Terms of Service & Privacy Policy.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
