"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Navigation, 
  BatteryCharging, 
  Zap, 
  ShieldCheck, 
  Award, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  Coffee, 
  Clock, 
  Smartphone,
  Check,
  Leaf,
  Sun,
  Gauge,
  Gift,
  Compass,
  TrendingDown,
  Sparkles,
  ParkingCircle,
  Car
} from 'lucide-react';
import Link from 'next/link';

interface Station {
  id: string;
  name: string;
  location: string;
  region: 'Metro Manila' | 'SLEX & South' | 'NLEX & North' | 'Tagaytay' | 'Cebu';
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
  offPeakHour: string;
  ecoSavingsKg: number;
  coordinates: { x: number; y: number }; // Relative map coordinate percentages
}

const mockStations: Station[] = [
  {
    id: '1',
    name: 'Shell Recharge Mega Hub Mamplasan',
    location: 'SLEX Southbound, Biñan / Mamplasan, Laguna',
    region: 'SLEX & South',
    network: 'Shell Recharge',
    speed: 'Ultra-Fast DC',
    powerKw: 120,
    plugs: ['CCS2', 'Type 2'],
    totalBays: 4,
    availableBays: 3,
    reliabilityScore: 99,
    verifiedTime: '4 mins ago',
    creditsEarned: 50,
    perk: 'Free 12oz Cafe Americano at Deli2go',
    recentReport: 'All 4 guns operational. Peak 118kW output verified on Hyundai Ioniq 5.',
    reportType: 'working',
    offPeakHour: '10:00 PM – 06:00 AM (₱22/kWh vs ₱28)',
    ecoSavingsKg: 28.4,
    coordinates: { x: 52, y: 64 }
  },
  {
    id: '2',
    name: 'SM Mall of Asia Solar EV Bay',
    location: 'North Parking, Seaside Blvd, Pasay City',
    region: 'Metro Manila',
    network: 'SM Supermalls',
    speed: 'Fast DC & Solar AC',
    powerKw: 60,
    plugs: ['CCS2', 'GB/T'],
    totalBays: 6,
    availableBays: 4,
    reliabilityScore: 96,
    verifiedTime: '9 mins ago',
    creditsEarned: 40,
    perk: 'Complimentary 2-Hour Priority EV Mall Parking',
    recentReport: 'Bay 3 RFID & GCash online. Dedicated security actively preventing ICE blocking.',
    reportType: 'working',
    offPeakHour: '08:00 PM – 11:00 PM (100% Solar Offset)',
    ecoSavingsKg: 19.8,
    coordinates: { x: 44, y: 46 }
  },
  {
    id: '3',
    name: 'Ayala Malls Vertis North',
    location: 'North Avenue, Diliman, Quezon City',
    region: 'Metro Manila',
    network: 'Ayala Land EV',
    speed: 'Smart Destination AC',
    powerKw: 22,
    plugs: ['Type 2'],
    totalBays: 4,
    availableBays: 4,
    reliabilityScore: 98,
    verifiedTime: '15 mins ago',
    creditsEarned: 25,
    perk: 'Earn 2x BerdePoints during lunch hours',
    recentReport: 'Spacious bays with wide turning radius, spotless facilities next to floor elevator.',
    reportType: 'working',
    offPeakHour: '01:00 PM – 04:00 PM (Solar Peak)',
    ecoSavingsKg: 12.5,
    coordinates: { x: 50, y: 32 }
  },
  {
    id: '4',
    name: 'Bonifacio High Street Central Hub',
    location: '7th Avenue cor 30th St, BGC, Taguig',
    region: 'Metro Manila',
    network: 'Ayala Land EV',
    speed: 'Ultra-Fast DC',
    powerKw: 100,
    plugs: ['CCS2', 'Type 2'],
    totalBays: 4,
    availableBays: 2,
    reliabilityScore: 97,
    verifiedTime: '7 mins ago',
    creditsEarned: 45,
    perk: '15% Off at Single Origin Coffee',
    recentReport: 'BGC Marshals actively patrolling. CCS2 gun delivers smooth 98kW ramp-up.',
    reportType: 'working',
    offPeakHour: '09:00 PM – 05:00 AM',
    ecoSavingsKg: 24.1,
    coordinates: { x: 54, y: 48 }
  },
  {
    id: '5',
    name: 'Shell Recharge NLEX Balagtas Northbound',
    location: 'NLEX KM 30, Balagtas, Bulacan',
    region: 'NLEX & North',
    network: 'Shell Recharge',
    speed: 'Ultra-Fast DC',
    powerKw: 150,
    plugs: ['CCS2', 'CHAdeMO'],
    totalBays: 4,
    availableBays: 3,
    reliabilityScore: 99,
    verifiedTime: '12 mins ago',
    creditsEarned: 50,
    perk: 'Complimentary Bottled Water & Travel Kit',
    recentReport: 'Fastest charger on the North corridor. Topped up 20% to 80% in 19 minutes.',
    reportType: 'working',
    offPeakHour: '11:00 PM – 05:00 AM (Eco Grid Rate)',
    ecoSavingsKg: 35.0,
    coordinates: { x: 42, y: 22 }
  },
  {
    id: '6',
    name: 'Tagaytay Highlands Eco Station',
    location: 'Belle View Drive, Tagaytay City, Cavite',
    region: 'Tagaytay',
    network: 'Solarius EV',
    speed: 'Solar Destination AC',
    powerKw: 22,
    plugs: ['Type 2', 'GB/T'],
    totalBays: 4,
    availableBays: 3,
    reliabilityScore: 95,
    verifiedTime: '22 mins ago',
    creditsEarned: 35,
    perk: 'Free Club Lounge Scenic View Pass',
    recentReport: '100% solar microgrid powered. Perfect stop after scenic mountain elevation climb.',
    reportType: 'working',
    offPeakHour: '10:00 AM – 03:00 PM (100% Solar Microgrid)',
    ecoSavingsKg: 18.2,
    coordinates: { x: 38, y: 78 }
  },
  {
    id: '7',
    name: 'Cebu IT Park Skyrise Alpha Hub',
    location: 'Salinas Drive, Lahug, Cebu City',
    region: 'Cebu',
    network: 'SM & Ayala CPO',
    speed: 'Fast DC & AC Dual',
    powerKw: 60,
    plugs: ['CCS2', 'Type 2'],
    totalBays: 4,
    availableBays: 2,
    reliabilityScore: 94,
    verifiedTime: '18 mins ago',
    creditsEarned: 40,
    perk: '₱100 F&B Dining Voucher at The Walk',
    recentReport: 'High-speed DC bay working with seamless contactless app tap.',
    reportType: 'working',
    offPeakHour: '09:00 PM – 06:00 AM',
    ecoSavingsKg: 21.6,
    coordinates: { x: 68, y: 82 }
  },
  {
    id: '8',
    name: 'Robinsons Magnolia Clean Energy Bay',
    location: 'Doña Hemady St, New Manila, Quezon City',
    region: 'Metro Manila',
    network: 'Robinsons EV',
    speed: 'Fast DC',
    powerKw: 50,
    plugs: ['CCS2', 'CHAdeMO'],
    totalBays: 2,
    availableBays: 1,
    reliabilityScore: 91,
    verifiedTime: '28 mins ago',
    creditsEarned: 30,
    perk: '10% Discount at Robinsons Department Store',
    recentReport: 'CCS2 connector working smoothly. Security assists in opening reserved bay.',
    reportType: 'caution',
    offPeakHour: '01:00 PM – 05:00 PM',
    ecoSavingsKg: 14.3,
    coordinates: { x: 48, y: 38 }
  }
];

const chargingPartners = [
  {
    name: 'Shell Recharge',
    category: 'High-Speed Highway Hubs',
    coverage: 'NLEX, SLEX & Metro Manila',
    power: 'Up to 150kW DC',
    highlight: 'Ultra-fast corridor corridors with convenience amenities',
    badge: 'Premier CPO'
  },
  {
    name: 'Ayala Land EV',
    category: 'Township & Mall Destinations',
    coverage: 'BGC, Makati, Vertis, Nuvali, Cebu',
    power: '22kW – 100kW DC',
    highlight: 'Integrated lifestyle destination charging across mixed-use estates',
    badge: 'Integrated Network'
  },
  {
    name: 'SM Supermalls EV',
    category: 'Nationwide Commercial Network',
    coverage: '80+ Malls Nationwide',
    power: '50kW – 60kW DC / AC',
    highlight: 'Largest commercial foot-traffic charging footprint in the Philippines',
    badge: 'Nationwide Reach'
  },
  {
    name: 'Robinsons Malls EV',
    category: 'Urban Commercial Hubs',
    coverage: 'Metro Manila, Cavite, Iloilo',
    power: '22kW – 60kW DC',
    highlight: 'Seamless destination charging at key regional lifestyle centers',
    badge: 'Urban Corridor'
  },
  {
    name: 'Solarius EV',
    category: 'Solar Microgrid Charging',
    coverage: 'Resorts, Golf Clubs & Cavite',
    power: '100% Clean Solar AC/DC',
    highlight: 'True zero-emission energy harvested directly from solar canopies',
    badge: '100% Renewable'
  },
  {
    name: 'Unioil Clean Energy',
    category: 'Pioneering Fuel Station Network',
    coverage: 'EDSA, C5 & Major Arterials',
    power: '50kW DC Fast',
    highlight: 'Early Philippine champion of hybrid & battery electric mobility',
    badge: 'Pioneer Network'
  }
];

const rewardsCatalogue = [
  {
    title: 'Free 2-Hour Priority EV Parking',
    cost: '150 BerdePoints',
    partner: 'SM & Ayala Malls',
    category: 'Parking',
    description: 'Guaranteed priority EV bay access with zero parking tariff for the first 120 minutes.'
  },
  {
    title: '₱200 Charging Rebate Voucher',
    cost: '300 BerdePoints',
    partner: 'Shell Recharge & Solarius',
    category: 'Power Credit',
    description: 'Direct credit deduction applied to your next high-speed DC charging session.'
  },
  {
    title: 'Free Artisanal Coffee & Pastry',
    cost: '120 BerdePoints',
    partner: 'Deli2go & Partner Cafes',
    category: 'Dining & Rest',
    description: 'Relax with premium freshly brewed coffee while your EV charges along highway hubs.'
  },
  {
    title: 'Eco Car Wash & Ceramic Detailing',
    cost: '450 BerdePoints',
    partner: 'AutoSpa Eco PH',
    category: 'Vehicle Care',
    description: 'Waterless eco-friendly car wash using biodegradable wash formulas.'
  }
];

export default function BerdEV() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All Regions');
  const [selectedSpeed, setSelectedSpeed] = useState<'all' | 'ultrafast' | 'fast'>('all');
  const [activeStationId, setActiveStationId] = useState<string>('1');
  const [activeTab, setActiveTab] = useState<'drivers' | 'partners' | 'rewards'>('drivers');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filteredStations = mockStations.filter(station => {
    const matchesRegion = selectedRegion === 'All Regions' || station.region === selectedRegion;
    const matchesSpeed = 
      selectedSpeed === 'all' || 
      (selectedSpeed === 'ultrafast' && station.powerKw >= 100) ||
      (selectedSpeed === 'fast' && station.powerKw >= 50 && station.powerKw < 100);
    return matchesRegion && matchesSpeed;
  });

  const activeStation = mockStations.find(s => s.id === activeStationId) || mockStations[0];

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
    <div className="w-full bg-[#FAFCF8] text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Top Breadcrumb & Environment Status Bar */}
      <div className="bg-emerald-50/70 border-b border-emerald-100 py-3 text-xs">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-3">
          <Link 
            href="/#ventures" 
            className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 hover:text-emerald-950 transition-colors group"
          >
            <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
            Back to HYCO Group Portfolio
          </Link>
          <div className="flex items-center gap-4 text-emerald-800 font-mono text-[11px]">
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Philippine Clean Grid Uptime: 99.4%
            </span>
            <span className="hidden sm:inline text-emerald-300">•</span>
            <span className="hidden sm:inline">
              Off-Peak Eco Tariff Active: 10PM – 6AM
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section: Clean Energy Light Theme */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24 border-b border-emerald-100 bg-gradient-to-b from-white via-[#F4F9F2] to-[#FAFCF8]">
        {/* Subtle Organic Background Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-7">
              {/* Berde Clean Energy Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-widest mb-6 rounded-full shadow-sm">
                <Leaf size={14} className="text-emerald-600" />
                <span>Berde = Clean Energy &amp; Smart Mobility</span>
              </div>

              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05] text-slate-950 uppercase font-serif"
              >
                The Waze For <br />
                <span className="text-emerald-600">Clean Energy</span> EV Drivers.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8 max-w-2xl"
              >
                <strong>BerdEV</strong> (<em className="text-emerald-700 font-normal">berde = green</em>) transforms Philippine electric vehicle driving. Find live, verified charging stations, navigate via energy-conserving eco-routes, avoid grid congestion during off-peak hours, and earn valuable <strong className="text-emerald-800 font-semibold">BerdePoints</strong> on every clean kilometer.
              </motion.p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a 
                  href="#live-map"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 text-xs uppercase tracking-[0.2em] rounded-lg transition-all duration-300 shadow-lg shadow-emerald-700/15 flex items-center gap-2 font-mono"
                >
                  <Navigation size={16} /> Explore Live Station Map
                </a>
                <a 
                  href="#rewards"
                  className="border border-emerald-300 hover:border-emerald-600 text-emerald-800 bg-white hover:bg-emerald-50 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-lg transition-colors flex items-center gap-2 font-mono shadow-sm"
                >
                  <Gift size={16} className="text-emerald-600" /> View Rewards &amp; Perks
                </a>
              </div>

              {/* Energy Conservation Metric Highlights */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-emerald-100 max-w-xl">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-700 font-mono">412,800+</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-mono">Kg CO₂ Avoided</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 font-mono">480+</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-mono">Verified Stations</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-teal-700 font-mono">84%</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-mono">Off-Peak Grid Use</div>
                </div>
              </div>

            </div>

            {/* Right Hero Visual: Clean Light Radar Mockup */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[440px] bg-white border border-emerald-200/90 rounded-2xl p-6 shadow-[0_20px_60px_rgba(5,150,105,0.08)]">
                
                {/* Header status */}
                <div className="flex items-center justify-between pb-4 border-b border-emerald-100 text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    BERDEV RADAR • MANILA
                  </div>
                  <div className="text-slate-600 flex items-center gap-1.5 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                    <BatteryCharging size={14} className="text-emerald-600" />
                    <span className="font-semibold">82% • 310 KM</span>
                  </div>
                </div>

                {/* Eco-Driving Tip Bar */}
                <div className="mt-3 p-2.5 bg-emerald-50/80 rounded-lg border border-emerald-200/60 flex items-center gap-2 text-xs text-emerald-900">
                  <TrendingDown size={16} className="text-emerald-600 shrink-0" />
                  <span className="font-mono text-[11px]">
                    <strong>Eco-Route Active:</strong> Regenerative braking saves 14% on SLEX route.
                  </span>
                </div>

                {/* Simulated Radar Canvas */}
                <div className="relative h-60 my-4 bg-gradient-to-b from-[#EBF5E9] to-[#F2FAF0] rounded-xl overflow-hidden border border-emerald-200 flex items-center justify-center p-4">
                  {/* Subtle Grid Lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
                  
                  {/* Radar Circles */}
                  <div className="absolute w-52 h-52 rounded-full border border-emerald-400/30"></div>
                  <div className="absolute w-32 h-32 rounded-full border border-emerald-500/40"></div>

                  {/* Driver Pin */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/40 border-2 border-white">
                      <Navigation size={18} className="transform rotate-45" />
                    </div>
                    <span className="mt-1 bg-white text-slate-900 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-sm border border-emerald-200">
                      You (SLEX Mamplasan)
                    </span>
                  </div>

                  {/* Nearby Station Floating Pins */}
                  <div className="absolute top-4 right-4 bg-white/95 border border-emerald-300 p-2 rounded-lg shadow-md flex items-center gap-2">
                    <Zap size={14} className="text-emerald-600" />
                    <div className="text-[10px] font-mono text-slate-900">
                      <strong className="text-emerald-700">120kW DC</strong> • 3 Open
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/95 border border-teal-300 p-2 rounded-lg shadow-md flex items-center gap-2">
                    <Sun size={14} className="text-amber-500" />
                    <div className="text-[10px] font-mono text-slate-900">
                      <strong className="text-teal-700">Solar Hub</strong> • +50 Pts
                    </div>
                  </div>
                </div>

                {/* Quick Info Card */}
                <div className="bg-[#F8FAF7] border border-emerald-100 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-1.5">
                    <div>
                      <div className="text-xs font-bold text-slate-900 uppercase">Shell Recharge Mamplasan</div>
                      <div className="text-[11px] text-slate-500">3.2 km ahead • Verified 4 mins ago</div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-mono">
                      99% Uptime
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-600 mb-2 font-mono">
                    <span className="text-emerald-700 font-bold">3 of 4 Bays Free</span>
                    <span>•</span>
                    <span>CCS2 (120kW)</span>
                    <span>•</span>
                    <span className="text-amber-700 font-semibold">+50 BerdePoints</span>
                  </div>

                  <div className="text-[11px] text-emerald-900 bg-emerald-50 p-2 rounded border border-emerald-200/70 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>&quot;Both DC guns delivering peak 118kW. Clean cafe next door.&quot;</span>
                  </div>
                </div>

                {/* Bottom Interactive Bar */}
                <div className="mt-3 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1 text-slate-500 text-[11px]">
                    <ShieldCheck size={14} className="text-emerald-600" /> Community Verified
                  </span>
                  <a href="#live-map" className="text-emerald-700 font-bold hover:underline">
                    VIEW ALL PINS →
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Energy Efficiency & Conservation Pillars */}
      <section className="py-20 bg-white border-b border-emerald-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Leaf size={14} className="text-emerald-600" /> Energy Stewardship
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-950 uppercase tracking-tight">
              Driving Clean. Charging Smarter.
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light mt-3 leading-relaxed">
              BerdEV isn&apos;t just a locator—it is an intelligent energy optimizer designed to conserve Philippine grid reserves, protect your vehicle&apos;s battery longevity, and reward conscious driving habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 bg-[#FBFDFB] rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Regenerative Eco-Routing</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light mb-4">
                Our elevation-aware routing algorithm prioritizes terrain with optimal regenerative braking zones. Save up to 18% battery charge on mountain corridors to Tagaytay or Baguio.
              </p>
              <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
                ✓ Up to 18% Energy Savings
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 bg-[#FBFDFB] rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 mb-6 group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Off-Peak Grid Scheduling</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light mb-4">
                Avoid charging during brownout-risk peak grid hours (2 PM – 6 PM). BerdEV automatically recommends charging during overnight valley hours (10 PM – 6 AM) with lower tariffs and double rewards.
              </p>
              <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                ✓ 2x BerdePoints on Off-Peak
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 bg-[#FBFDFB] rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                <Gauge size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">80% Battery Longevity Guard</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light mb-4">
                Protect lithium-ion chemistry. BerdEV prompts fast DC charging up to 80% to avoid thermal throttling and prevent long bay congestion, leaving highway chargers free for other drivers.
              </p>
              <div className="text-xs font-mono font-bold text-teal-700 uppercase tracking-wider">
                ✓ Extended Battery Health
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Map & Live Station Radar Section */}
      <section className="py-24 bg-[#FAFCF8] border-b border-emerald-100" id="live-map">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <div>
              <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest mb-2 flex items-center gap-2">
                <MapPin size={14} className="text-emerald-600" /> Interactive Radar
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-950 uppercase tracking-tight">
                Live Philippine Charging Locations
              </h2>
              <p className="text-slate-600 text-base md:text-lg font-light mt-2 max-w-2xl">
                Click any pin on the interactive map or select from the live station feed below to inspect real-time bay occupancy, power speeds, tariffs, and community reports.
              </p>
            </div>

            {/* Region Selectors */}
            <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-xl border border-emerald-200 shadow-sm font-mono text-xs">
              {['All Regions', 'Metro Manila', 'SLEX & South', 'NLEX & North', 'Tagaytay', 'Cebu'].map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3.5 py-2 rounded-lg font-semibold transition-colors ${
                    selectedRegion === reg
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-emerald-800 hover:bg-emerald-50'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Map Canvas + Details Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Visual Map Viewport */}
            <div className="lg:col-span-7 bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 text-xs font-mono">
                <span className="font-bold text-slate-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  RADAR SCANNER • PHILIPPINES
                </span>
                <span className="text-slate-500">
                  Showing {filteredStations.length} Verified Hubs
                </span>
              </div>

              {/* Graphical Map Board */}
              <div className="relative h-[480px] bg-gradient-to-br from-[#EEF7EC] via-[#F4FAF2] to-[#E9F3E6] rounded-xl overflow-hidden border border-emerald-200/90 shadow-inner flex items-center justify-center">
                
                {/* Geographic Grid Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
                
                {/* Visual Island Outline / Highway Traces */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 stroke-emerald-600" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* NLEX / SLEX Backbone */}
                  <path d="M 40 10 Q 48 30 50 50 T 52 80 T 65 95" fill="none" strokeWidth="1.2" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="12" fill="none" strokeWidth="0.8" />
                  <circle cx="50" cy="50" r="28" fill="none" strokeWidth="0.5" />
                </svg>

                {/* Clickable Station Pins */}
                {filteredStations.map((station) => {
                  const isSelected = station.id === activeStationId;
                  return (
                    <button
                      key={station.id}
                      onClick={() => setActiveStationId(station.id)}
                      style={{
                        top: `${station.coordinates.y}%`,
                        left: `${station.coordinates.x}%`
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20 group focus:outline-none`}
                    >
                      {/* Pulsing ring when selected */}
                      {isSelected && (
                        <span className="absolute -inset-2 rounded-full bg-emerald-500/30 animate-ping pointer-events-none"></span>
                      )}

                      <div className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md border transition-transform ${
                        isSelected 
                          ? 'bg-emerald-600 text-white border-emerald-700 scale-110' 
                          : 'bg-white text-slate-800 border-emerald-300 hover:scale-105'
                      }`}>
                        <Zap size={12} className={isSelected ? 'text-white' : 'text-emerald-600'} />
                        <span className="text-[11px] font-mono font-bold whitespace-nowrap">
                          {station.powerKw}kW ({station.availableBays}/{station.totalBays})
                        </span>
                      </div>

                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block bg-slate-900 text-white text-[10px] font-mono py-1 px-2 rounded whitespace-nowrap z-30 shadow-lg">
                        {station.name}
                      </div>
                    </button>
                  );
                })}

                {/* Map Control Bar Overlay */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md border border-emerald-200 py-1.5 px-3 rounded-lg text-[11px] font-mono text-slate-600 shadow-sm">
                  Click any pin to inspect station diagnostics
                </div>

                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md border border-emerald-200 py-1.5 px-3 rounded-lg text-[11px] font-mono text-emerald-800 font-bold shadow-sm flex items-center gap-1.5">
                  <Leaf size={13} className="text-emerald-600" />
                  Eco-Roamed Network
                </div>
              </div>

            </div>

            {/* Right Column: Selected Station Live Diagnostics Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-emerald-500/80 rounded-2xl p-6 md:p-8 shadow-lg relative">
                
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded font-bold">
                      {activeStation.network}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-950 mt-2">
                      {activeStation.name}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                      <MapPin size={13} className="text-emerald-600 shrink-0" />
                      {activeStation.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-700 font-mono">
                      {activeStation.reliabilityScore}%
                    </div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Reliability</div>
                  </div>
                </div>

                {/* Bay Status & Specs Grid */}
                <div className="grid grid-cols-3 gap-3 my-5 py-4 border-y border-slate-100 font-mono text-xs">
                  <div className="p-2.5 bg-[#F9FCF8] rounded-lg border border-emerald-100">
                    <span className="text-slate-400 block text-[10px] uppercase">Available Bays</span>
                    <strong className="text-emerald-700 text-sm font-bold">
                      {activeStation.availableBays} of {activeStation.totalBays} Free
                    </strong>
                  </div>
                  <div className="p-2.5 bg-[#F9FCF8] rounded-lg border border-emerald-100">
                    <span className="text-slate-400 block text-[10px] uppercase">Max Power</span>
                    <strong className="text-slate-900 text-sm font-bold">
                      {activeStation.powerKw} kW DC
                    </strong>
                  </div>
                  <div className="p-2.5 bg-[#F9FCF8] rounded-lg border border-emerald-100">
                    <span className="text-slate-400 block text-[10px] uppercase">Plug Types</span>
                    <strong className="text-slate-900 text-xs font-bold">
                      {activeStation.plugs.join(', ')}
                    </strong>
                  </div>
                </div>

                {/* Eco Savings & Off-Peak Tip */}
                <div className="space-y-3 mb-6">
                  <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200/80 flex items-start gap-2.5 text-xs text-emerald-950">
                    <Sun size={18} className="text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold font-mono text-emerald-900">Recommended Eco-Charge Window</div>
                      <div className="text-[11px] text-emerald-800 mt-0.5">{activeStation.offPeakHour}</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900 font-mono">Recent Community Intel ({activeStation.verifiedTime})</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">&quot;{activeStation.recentReport}&quot;</div>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200 flex items-start gap-2.5 text-xs text-amber-950">
                    <Gift size={18} className="text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold font-mono text-amber-900">Partner Perk Available</div>
                      <div className="text-[11px] text-amber-800 mt-0.5">{activeStation.perk} (+{activeStation.creditsEarned} BerdePoints)</div>
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="mailto:contact@hyco.ltd?subject=BerdEV%20Navigation%20Request"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 text-xs uppercase tracking-wider rounded-lg text-center font-mono shadow-md transition-colors"
                  >
                    Start Eco-Navigation →
                  </a>
                  <button
                    onClick={() => alert(`Station report submitted for ${activeStation.name}! Thank you for keeping the BerdEV community updated.`)}
                    className="px-4 py-3.5 border border-slate-300 hover:border-emerald-600 text-slate-700 rounded-lg text-xs font-mono font-bold hover:bg-emerald-50 transition-colors"
                    title="Confirm station is working"
                  >
                    ✓ Report Working
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Charging Station Partners Network */}
      <section className="py-24 bg-white border-b border-emerald-100" id="partners">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Building2 size={14} className="text-emerald-600" /> Infrastructure Ecosystem
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-950 uppercase tracking-tight">
              Charging Network &amp; Host Partners
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light mt-3 leading-relaxed">
              BerdEV integrates via open standard OCPI roaming APIs with premier Charge Point Operators (CPOs), commercial landlords, and energy leaders across the Philippines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chargingPartners.map((partner, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-[#FAFCF8] rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded">
                      {partner.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-semibold">{partner.power}</span>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-1">{partner.name}</h3>
                  <div className="text-xs text-emerald-800 font-medium mb-3 font-mono">{partner.category}</div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                    {partner.highlight}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                  <MapPin size={12} className="text-emerald-600 shrink-0" />
                  <span>Coverage: {partner.coverage}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CPO Partner Callout */}
          <div className="mt-12 p-8 bg-gradient-to-r from-emerald-50 via-[#F3F9F1] to-teal-50 rounded-2xl border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold font-serif text-slate-950 mb-1">
                Operate a Commercial Charging Station or Fleet?
              </h4>
              <p className="text-xs md:text-sm text-slate-600 max-w-2xl font-light">
                List your bays on the BerdEV network. Eliminate ICE parking abuse, optimize off-peak kilowatt throughput, and direct high-intent EV drivers straight to your mall or retail venue.
              </p>
            </div>
            <a
              href="mailto:contact@hyco.ltd?subject=BerdEV%20CPO%20Partner%20Inquiry"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-mono font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg whitespace-nowrap shadow-sm transition-colors"
            >
              Partner With BerdEV →
            </a>
          </div>

        </div>
      </section>

      {/* Rewards & BerdePoints Program */}
      <section className="py-24 bg-[#FAFCF8] border-b border-emerald-100" id="rewards">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Gift size={14} className="text-emerald-600" /> Driver Incentives
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-950 uppercase tracking-tight">
              Earn BerdePoints On Every Clean KM
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light mt-3 leading-relaxed">
              We reward eco-friendly habits. Charge during off-peak windows, drive efficiently, and verify station availability for fellow drivers to unlock charging discounts and merchant perks.
            </p>
          </div>

          {/* How to Earn Points Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold mb-4 font-mono text-sm">
                +50
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Off-Peak Charging</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Charge between 10 PM and 6 AM when the Philippine grid has abundant clean base capacity.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 font-bold mb-4 font-mono text-sm">
                +30
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Eco-Driving Rating</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Achieve &gt;90% regenerative braking efficiency and smooth acceleration on city routes.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700 font-bold mb-4 font-mono text-sm">
                +40
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Community Intel Report</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Confirm gun status, verify RFID connectivity, or flag blocked bays to help the community.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-[#0F3383] font-bold mb-4 font-mono text-sm">
                +100
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">100% Solar-Powered Hubs</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Top up at certified solar microgrid canopies (e.g. Solarius resorts &amp; eco-destinations).
              </p>
            </div>
          </div>

          {/* Rewards Redemption Showcase */}
          <h3 className="text-2xl font-bold font-serif text-slate-950 mb-6">
            Redeemable Perks &amp; Partner Benefits
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewardsCatalogue.map((reward, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-emerald-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {reward.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-800">
                      {reward.cost}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">{reward.title}</h4>
                  <div className="text-[11px] font-mono text-slate-400 mb-3">{reward.partner}</div>
                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-4">
                    {reward.description}
                  </p>
                </div>
                <button
                  onClick={() => alert(`Reward claimed! Connect your EV account in BerdEV mobile to redeem ${reward.title}.`)}
                  className="w-full py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 hover:text-white bg-emerald-50 hover:bg-emerald-600 border border-emerald-200 rounded-lg transition-colors"
                >
                  Redeem Perk
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Driver Waitlist & Ecosystem Contact */}
      <section className="py-24 bg-white" id="waitlist">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-widest mb-6 rounded-full">
            <Smartphone size={14} /> BerdEV iOS &amp; Android Beta
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-950 uppercase tracking-tight mb-4">
            Join The Clean Mobility Movement
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Get early access to live station radars, automated eco-routing, and instant 250 welcome BerdePoints when our mobile app launches in Q3 2026.
          </p>

          <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              required
              placeholder="Enter your email (e.g. driver@domain.ph)"
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              className="flex-grow px-4 py-3.5 text-sm rounded-lg border border-slate-300 focus:border-emerald-600 focus:outline-none bg-slate-50 font-sans"
            />
            <button 
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg whitespace-nowrap shadow-md transition-colors"
            >
              Get Early Access
            </button>
          </form>

          {submitted && (
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-mono inline-block">
              ✓ You&apos;re on the priority list! 250 Welcome BerdePoints reserved for {waitlistEmail}.
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500">
            <span>Part of HYCO Group Ecosystem</span>
            <span>•</span>
            <a href="mailto:contact@hyco.ltd" className="text-emerald-700 hover:underline">
              contact@hyco.ltd
            </a>
            <span>•</span>
            <span>Ortigas Center, Pasig City, Philippines</span>
          </div>

        </div>
      </section>

    </div>
  );
}
