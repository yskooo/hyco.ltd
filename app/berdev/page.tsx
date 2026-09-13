"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Navigation, 
  BatteryCharging, 
  Zap, 
  ShieldCheck, 
  Award, 
  Building2, 
  Users, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  SlidersHorizontal, 
  Sparkles, 
  Share2, 
  Search, 
  ThumbsUp, 
  Coffee, 
  Clock, 
  Smartphone,
  Check
} from 'lucide-react';
import Link from 'next/link';

interface Station {
  id: string;
  name: string;
  location: string;
  network: string;
  speed: string;
  powerKw: number;
  plugs: string[];
  totalBays: number;
  availableBays: number;
  reliabilityScore: number;
  verifiedTime: string;
  creditsEarned: number;
  perk: string;
  recentReport: string;
  reportType: 'working' | 'caution';
}

const mockStations: Station[] = [
  {
    id: '1',
    name: 'Shell Recharge Mega Hub',
    location: 'SLEX Southbound, Mamplasan',
    network: 'Shell Recharge',
    speed: 'Ultra-Fast DC',
    powerKw: 120,
    plugs: ['CCS2', 'Type 2'],
    totalBays: 4,
    availableBays: 3,
    reliabilityScore: 99,
    verifiedTime: '4 mins ago',
    creditsEarned: 50,
    perk: 'Free 12oz Cafe Americano with Deli2go',
    recentReport: 'All 4 guns operational. Peak 118kW output verified on Ioniq 5.',
    reportType: 'working'
  },
  {
    id: '2',
    name: 'SM Mall of Asia North Bay',
    location: 'Seaside Blvd, Pasay City',
    network: 'SM Supermalls',
    speed: 'Fast DC',
    powerKw: 60,
    plugs: ['CCS2', 'GB/T'],
    totalBays: 6,
    availableBays: 2,
    reliabilityScore: 94,
    verifiedTime: '12 mins ago',
    creditsEarned: 35,
    perk: 'Free 2-hr priority parking voucher',
    recentReport: 'Bay 2 RFID reader back online. Security actively towing non-EV cars.',
    reportType: 'working'
  },
  {
    id: '3',
    name: 'Ayala Malls Vertis North',
    location: 'North Avenue, Quezon City',
    network: 'Ayala Land CPO',
    speed: 'Destination AC',
    powerKw: 22,
    plugs: ['Type 2'],
    totalBays: 4,
    availableBays: 4,
    reliabilityScore: 97,
    verifiedTime: '25 mins ago',
    creditsEarned: 20,
    perk: 'Earn 2x Berd Points during lunch hours (11am-2pm)',
    recentReport: 'Quiet charging floor, clean restroom access right beside the bays.',
    reportType: 'working'
  },
  {
    id: '4',
    name: 'Robinsons Magnolia Hub',
    location: 'Doña Hemady St, New Manila',
    network: 'Robinsons EV',
    speed: 'Fast DC',
    powerKw: 50,
    plugs: ['CCS2', 'CHAdeMO'],
    totalBays: 2,
    availableBays: 1,
    reliabilityScore: 88,
    verifiedTime: '18 mins ago',
    creditsEarned: 30,
    perk: '10% off at Starbucks Magnolia',
    recentReport: 'CHAdeMO plug has loose latch, but CCS2 side operates flawlessly.',
    reportType: 'caution'
  }
];

export default function BerdEV() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'fast' | 'perks'>('all');
  const [activeTab, setActiveTab] = useState<'drivers' | 'partners'>('drivers');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filteredStations = mockStations.filter(station => {
    if (selectedFilter === 'fast') return station.powerKw >= 50;
    if (selectedFilter === 'perks') return station.creditsEarned >= 35;
    return true;
  });

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setWaitlistEmail('');
    }, 4000);
  };

  return (
    <div className="w-full bg-[#05090e] text-slate-100 pt-24 font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* Glow Effects & Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#059669_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-15"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-16 md:py-28 border-b border-slate-800/80">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 hover:text-emerald-300 mb-8 transition-colors group"
          >
            <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
            Back to Ecosystem Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-widest mb-6 rounded-full">
                <Zap size={14} className="animate-pulse text-emerald-400" />
                Community EV Navigation &amp; Rewards Platform
              </div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05] text-white uppercase"
              >
                The Waze For <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Electric Vehicles.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl"
              >
                Never arrive at a broken charger, an offline RFID card reader, or an ICE-blocked bay again. <strong className="text-white font-semibold">BerdEV</strong> empowers EV owners to locate real-time, working, and preferred chargers, rank station reliability through crowdsourced community intel, and earn reward credits on every journey.
              </motion.p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a 
                  href="#radar-demo"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] flex items-center gap-2"
                >
                  <Navigation size={16} /> Test Live Radar
                </a>
                <a 
                  href="#waitlist"
                  className="border border-slate-700 hover:border-emerald-400 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center gap-2 bg-slate-900/50"
                >
                  <Smartphone size={16} /> Join Driver Waitlist
                </a>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 max-w-lg">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white font-mono">98.6%</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Reliability Score</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400 font-mono">480+</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Stations Mapped</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 font-mono">₱0</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Hardware CapEx</div>
                </div>
              </div>

            </div>

            {/* Right Hero Visual: Interactive Live EV Navigation App Mockup */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[420px] bg-slate-900/90 border border-slate-700/80 rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
                
                {/* Header status */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    BERDEV RADAR v1.4
                  </div>
                  <div className="text-slate-400 flex items-center gap-1">
                    <BatteryCharging size={14} className="text-emerald-400" />
                    <span>84% • 312 KM</span>
                  </div>
                </div>

                {/* Simulated Map Viewport */}
                <div className="relative h-56 my-4 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-4">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
                  
                  {/* Radar sweep */}
                  <div className="absolute w-48 h-48 rounded-full border border-emerald-500/20 animate-pulse"></div>
                  <div className="absolute w-28 h-28 rounded-full border border-cyan-500/30"></div>

                  {/* Driver Pin */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-9 h-9 bg-emerald-500 text-slate-950 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.8)]">
                      <Navigation size={18} className="transform rotate-45" />
                    </div>
                    <span className="mt-1 bg-slate-900/90 text-white text-[10px] font-mono px-2 py-0.5 rounded border border-slate-700">
                      You (SLEX KM 34)
                    </span>
                  </div>

                  {/* Station Pins */}
                  <div className="absolute top-4 right-8 bg-slate-900/90 border border-emerald-500/60 p-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                    <Zap size={13} className="text-emerald-400" />
                    <div className="text-[9px] font-mono text-white">
                      <span className="text-emerald-400 font-bold">120kW DC</span> • 2 Bays Open
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-6 bg-slate-900/90 border border-cyan-500/60 p-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                    <Coffee size={13} className="text-cyan-400" />
                    <div className="text-[9px] font-mono text-white">
                      <span className="text-cyan-400 font-bold">Ayala Vertis</span> • +50 Pts
                    </div>
                  </div>
                </div>

                {/* Live Card Info */}
                <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-xs font-bold text-white uppercase">Shell Recharge SLEX Mamplasan</div>
                      <div className="text-[11px] text-slate-400">Southbound Tollway Rest Stop • 3.2 km ahead</div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950 border border-emerald-500/40 px-2 py-0.5 rounded font-mono">
                      99% Uptime
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-300 mb-3 font-mono">
                    <span className="text-emerald-400 font-bold">3 of 4 Bays Free</span>
                    <span>•</span>
                    <span>CCS2 (120kW)</span>
                    <span>•</span>
                    <span className="text-amber-400">+50 Credits</span>
                  </div>

                  <div className="text-[11px] text-slate-400 bg-slate-900 p-2.5 rounded border border-slate-800/80 flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span>&quot;Both DC plugs verified working 4 mins ago by @EV_Rider_PH&quot;</span>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <ShieldCheck size={14} className="text-emerald-400" /> Verified Uptime Engine
                  </span>
                  <span className="text-emerald-400 font-mono text-[11px] font-bold">
                    TAP TO NAVIGATE →
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Station Radar Demonstration */}
      <section className="py-20 md:py-28 relative z-10 border-b border-slate-800/80 bg-slate-950/60" id="radar-demo">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Search size={14} /> Live Interactive Preview
              </div>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
                Find Reliable Chargers. Fast.
              </h2>
              <p className="text-slate-400 text-base md:text-lg font-light max-w-2xl mt-2">
                Filter by charging speed, verified uptime, or partner rewards. Experience how BerdEV eliminates charging anxiety for daily commuters and road-trippers alike.
              </p>
            </div>

            {/* Filter Toggle Buttons */}
            <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-lg border border-slate-800 shrink-0 font-mono text-xs">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded font-bold transition-all ${
                  selectedFilter === 'all' 
                    ? 'bg-emerald-500 text-slate-950 shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Stations ({mockStations.length})
              </button>
              <button
                onClick={() => setSelectedFilter('fast')}
                className={`px-4 py-2 rounded font-bold transition-all ${
                  selectedFilter === 'fast' 
                    ? 'bg-emerald-500 text-slate-950 shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ⚡ Fast DC Only (50kW+)
              </button>
              <button
                onClick={() => setSelectedFilter('perks')}
                className={`px-4 py-2 rounded font-bold transition-all ${
                  selectedFilter === 'perks' 
                    ? 'bg-emerald-500 text-slate-950 shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🎁 High Rewards
              </button>
            </div>
          </div>

          {/* Station Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredStations.map((station) => (
              <div 
                key={station.id}
                className="bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Top tags */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {station.network}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1">
                      <ShieldCheck size={14} /> {station.reliabilityScore}%
                    </span>
                  </div>

                  {/* Station Name & Location */}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">
                    {station.name}
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                    <MapPin size={12} className="text-slate-500 shrink-0" /> {station.location}
                  </p>

                  {/* Charger Specifications */}
                  <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 text-xs font-mono">
                    <div>
                      <span className="text-slate-500 text-[10px] block">POWER</span>
                      <span className="font-bold text-white">{station.powerKw} kW ({station.speed})</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">AVAILABILITY</span>
                      <span className="font-bold text-emerald-400">{station.availableBays}/{station.totalBays} Free</span>
                    </div>
                  </div>

                  {/* Plugs Available */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {station.plugs.map((plug, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded">
                        {plug}
                      </span>
                    ))}
                  </div>

                  {/* Partner Perk Badge */}
                  <div className="bg-emerald-950/40 border border-emerald-500/20 p-2.5 rounded-lg mb-4 flex items-start gap-2 text-xs text-emerald-300">
                    <Award size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-emerald-400">+{station.creditsEarned} Berd Credits</span>
                      <span className="text-[11px] text-slate-300">{station.perk}</span>
                    </div>
                  </div>

                  {/* Crowdsourced Report */}
                  <div className="text-[11px] text-slate-400 italic mb-4 border-l-2 border-slate-700 pl-2.5">
                    &quot;{station.recentReport}&quot;
                    <div className="text-[10px] text-slate-500 not-italic font-mono mt-0.5">
                      Verified {station.verifiedTime}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <button className="w-full bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white font-bold py-2.5 text-xs font-mono uppercase tracking-widest rounded transition-all duration-300 flex items-center justify-center gap-2">
                  <Navigation size={14} /> Navigate In BerdEV
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* The 4 Core Value Pillars */}
      <section className="py-24 relative z-10 border-b border-slate-800/80" id="pillars">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-3">
              Comprehensive Platform Capabilities
            </div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Built Specifically for the EV Lifestyle.
            </h2>
            <p className="text-slate-400 text-lg font-light mt-4 leading-relaxed">
              Standard navigation apps treat charging like normal gas stations. BerdEV accounts for plug compatibility, real-time power draw, queue wait times, and crowd-verified reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Pillar 1: Smart Station Finder */}
            <div className="p-8 bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Navigation size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Universal Charger Finder</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light mb-4">
                Aggregate all charging point operators (CPOs) into one single intuitive map. Filter by exact connector (CCS2, Type 2, GB/T), minimum charging speed (kW), and location type (malls, highways, hotels).
              </p>
              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4 font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" /> Multi-network aggregation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" /> Turn-by-turn EV range routing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" /> 24/7 access verification
                </li>
              </ul>
            </div>

            {/* Pillar 2: Reliability & Community Scoring */}
            <div className="p-8 bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Crowdsourced Reliability</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light mb-4">
                Just like Waze alerts drivers to road hazards, BerdEV drivers flag broken plugs, offline payment terminals, queue lengths, and ICE cars parked illegally in charging stalls.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4 font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" /> Live broken charger flags
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" /> ICE-ing &amp; blocked stall alerts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" /> Real-time queue length meters
                </li>
              </ul>
            </div>

            {/* Pillar 3: Credits & Rewards */}
            <div className="p-8 bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">BerdEV Credits &amp; Perks</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light mb-4">
                Get rewarded for being an active community member. Earn BerdEV Credits every time you verify a station status, review a charger, or charge during off-peak grid periods.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4 font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" /> Check-in &amp; status bounties
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" /> Redeemable charging discounts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" /> Retail, dining &amp; coffee vouchers
                </li>
              </ul>
            </div>

            {/* Pillar 4: Brand & CPO Partnerships */}
            <div className="p-8 bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Partnerships &amp; Marketing</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light mb-4">
                EV drivers dwell for 30–60 minutes while charging. BerdEV connects commercial landlords, mall operators, and lifestyle brands to high-income EV owners through targeted perks and promotions.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4 font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" /> Foot-traffic stimulation for malls
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" /> CPO network utilization analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" /> In-app sponsored charging promos
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Software & Partnership Strategic Advantage */}
      <section className="py-24 relative z-10 bg-slate-950/40 border-b border-slate-800/80">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-3">
                Asset-Light Strategic Thesis
              </div>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
                Why Software &amp; Partnerships Win the EV Race.
              </h2>
              <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed mb-6">
                Building proprietary physical charging stations requires tens of millions in hardware, grid permits, and real estate leasing. HYCO Group recognized that the greatest bottleneck isn&apos;t just physical plugs—it is <strong>software fragmentation and driver uncertainty</strong>.
              </p>
              <p className="text-sm text-slate-400 font-light leading-relaxed mb-8">
                BerdEV is the neutral, high-utility layer that sits between fragmented Charging Point Operators (CPOs) and daily EV drivers. By focusing purely on user experience, real-time telemetry, gamified rewards, and commercial marketing partnerships, BerdEV scales nationwide with zero hardware capital expenditure.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-lg flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Universal CPO Aggregation</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Drivers don&apos;t want 10 different apps for 10 different charging networks. BerdEV provides one single interface for discovery, route calculation, and reliable reviews.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-lg flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Commercial Real Estate Monetization</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Malls and shopping centers partner with BerdEV to direct EV owners into their dining and retail stores while their cars charge, creating verifiable commercial ROI.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-lg flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Synergy with HYCO Group Ecosystem</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      BerdEV leverages <strong className="text-white">Servicio.AI</strong> for automated 24/7 AI driver assistance and customer support, and <strong className="text-white">LeasifAI</strong> for high-yield commercial site selection data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Comparison Box */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400"></div>

                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6 pb-4 border-b border-slate-800 flex items-center justify-between">
                  <span>ECOSYSTEM COMPARISON</span>
                  <span className="text-emerald-400 font-bold">THE BERDEV ADVANTAGE</span>
                </div>

                <div className="space-y-6 text-xs font-mono">
                  <div>
                    <div className="text-slate-500 mb-1">TRADITIONAL CHARGING NETWORKS</div>
                    <div className="p-3 bg-red-950/20 border border-red-900/30 rounded text-slate-300 font-sans">
                      ❌ Heavy capital expenditure in hardware, cables, and civil works. Walled-garden apps that lock out competitors. Drivers arrive to find broken plugs or gas cars blocking bays.
                    </div>
                  </div>

                  <div>
                    <div className="text-emerald-400 font-bold mb-1">BERDEV PLATFORM MODEL</div>
                    <div className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded text-slate-200 font-sans space-y-2">
                      <div className="flex items-center gap-2 font-bold text-white">
                        <Check size={16} className="text-emerald-400" /> Software-First &amp; Zero Hardware CapEx
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        Cross-network aggregation, crowd-sourced reliability scoring (Waze-style community intel), and high-margin affiliate/advertising revenue from commercial partners and CPOs.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3 font-sans">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Who Benefits Most?
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <div className="font-bold text-white">EV Drivers</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Reliable plugs &amp; rewards</div>
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <div className="font-bold text-white">CPO Operators</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Higher bay utilization</div>
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <div className="font-bold text-white">Retail Malls</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Foot traffic &amp; spend</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Driver Waitlist & Partnership Inquiries */}
      <section className="py-24 relative z-10" id="waitlist">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest mb-6 rounded-full">
            <Sparkles size={14} /> Early Access &amp; Commercial Partnerships
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-6">
            Get On The Fast Track With BerdEV.
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Whether you are an EV owner seeking hassle-free road trips or a charging point operator wanting to maximize charger utilization, BerdEV connects your journey.
          </p>

          {/* Tab Selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs">
              <button
                onClick={() => setActiveTab('drivers')}
                className={`px-6 py-2.5 rounded font-bold transition-all ${
                  activeTab === 'drivers' 
                    ? 'bg-emerald-500 text-slate-950 shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                For EV Drivers (Waitlist)
              </button>
              <button
                onClick={() => setActiveTab('partners')}
                className={`px-6 py-2.5 rounded font-bold transition-all ${
                  activeTab === 'partners' 
                    ? 'bg-emerald-500 text-slate-950 shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                For CPOs &amp; Commercial Brands
              </button>
            </div>
          </div>

          {/* Driver Waitlist Tab */}
          {activeTab === 'drivers' && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 md:p-10 max-w-xl mx-auto text-left shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Join the Mobile Beta</h3>
              <p className="text-xs text-slate-400 mb-6">
                Receive early access on iOS and Android, plus 100 free BerdEV launch credits on your first station verification.
              </p>

              {submitted ? (
                <div className="p-4 bg-emerald-950/60 border border-emerald-500/40 rounded-lg text-center text-emerald-300 text-sm font-mono flex items-center justify-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  <span>You&apos;re on the waitlist! We&apos;ll notify you when beta slots open.</span>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1.5">
                      Your Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      placeholder="driver@example.com"
                      className="w-full bg-slate-950 border border-slate-700 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 text-xs uppercase tracking-[0.2em] rounded transition-all duration-300 font-mono shadow-lg"
                  >
                    Request Early Access (+100 Berd Credits)
                  </button>
                  <p className="text-[10px] text-slate-500 text-center font-mono">
                    Zero spam. Only invites and software roadmap announcements.
                  </p>
                </form>
              )}
            </div>
          )}

          {/* Partner Inquiries Tab */}
          {activeTab === 'partners' && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 md:p-10 max-w-xl mx-auto text-left shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Partner with BerdEV</h3>
              <p className="text-xs text-slate-400 mb-6">
                Connect your charging point network, sponsor EV driver perks, or feature your commercial property on our live navigation map.
              </p>
              
              <div className="space-y-4 font-mono text-xs">
                <div className="p-3.5 bg-slate-950 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">OPERATORS &amp; CPOs</span>
                  <span className="text-white font-bold text-sm font-sans mt-0.5 block">API &amp; Telemetry Integration</span>
                  <span className="text-slate-400 text-[11px] font-sans">Plug into BerdEV&apos;s live uptime indexing and eliminate driver confusion.</span>
                </div>
                <div className="p-3.5 bg-slate-950 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">MALLS &amp; RETAILERS</span>
                  <span className="text-white font-bold text-sm font-sans mt-0.5 block">Targeted Dwell-Time Marketing</span>
                  <span className="text-slate-400 text-[11px] font-sans">Turn 45-minute EV charging sessions into verifiable in-store retail foot traffic.</span>
                </div>
                <a
                  href="mailto:contact@hyco.ltd?subject=BerdEV%20Partnership%20Inquiry"
                  className="block text-center w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 text-xs uppercase tracking-[0.2em] rounded transition-all duration-300 font-mono shadow-lg"
                >
                  Contact Ecosystem Team (contact@hyco.ltd)
                </a>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Ecosystem Footer CTA */}
      <section className="py-16 border-t border-slate-800/80 bg-slate-950 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-xs font-mono text-slate-400 mb-2">HYCO GROUP VENTURES</div>
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">
            Discover Our Other Strategic Ventures
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link 
              href="/servicio-ai" 
              className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-blue-500 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
            >
              Servicio (Lead Horse CX) →
            </Link>
            <Link 
              href="/leasifai" 
              className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-amber-500 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
            >
              LeasifAI (Real Estate GTM) →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
