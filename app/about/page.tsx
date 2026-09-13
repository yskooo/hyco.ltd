"use client";

import { motion } from 'motion/react';
import { useState } from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import teamData from '@/data/team.json';

type TeamMember = {
  id: string;
  name: string;
  role: string;
  category: string;
  image?: string;
  bio?: string;
  initials?: string;
  subsidiary?: string;
};

function MemberPortrait({ member, size = "large" }: { member: TeamMember; size?: "small" | "large" | "chairman" }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(member.image && member.image.trim().length > 0 && !imgError);

  const aspectClass = size === "chairman" ? "aspect-[3/4] w-full" : "aspect-square w-full";

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 ${aspectClass} border border-white/10 group-hover:border-blue-500/50 transition-all duration-500 shadow-xl`}>
      {hasImage ? (
        <img
          src={member.image}
          alt={member.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-slate-900 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,85,255,0.15),transparent_70%)]"></div>
          <div className="w-20 h-20 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center mb-4 text-2xl font-serif font-bold text-blue-400 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all duration-300 relative z-10">
            {member.initials || member.name.slice(0, 2).toUpperCase()}
          </div>
          <div className="relative z-10">
            <span className="text-[9px] tracking-[0.2em] font-mono uppercase text-slate-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
              HYCO Leadership
            </span>
          </div>
        </div>
      )}

      {member.subsidiary && (
        <div className="absolute top-3 right-3 z-20">
          <span className="text-[9px] font-bold uppercase tracking-widest bg-blue-600 text-white px-2.5 py-1 rounded shadow-md">
            {member.subsidiary}
          </span>
        </div>
      )}
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const chairman = teamData.board.find((m) => m.role.toLowerCase().includes("chairman")) || teamData.board[0];
  const allBoard = teamData.board;
  const executives = teamData.executives;
  const growthOps = teamData.growthAndOperations;
  const productEng = teamData.productAndEngineering;

  const totalMembers = allBoard.length + executives.length + growthOps.length + productEng.length;

  return (
    <div className="w-full bg-white pt-20">
      {/* Story Section */}
      <section className="py-20 md:py-28 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="w-12 h-1 bg-[#0F3383] mb-6"></div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono font-bold text-[#0F3383] uppercase tracking-widest">HYCO Group</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-mono text-[#1A46B0] font-bold uppercase tracking-wider">Four High-Impact Ventures</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-slate-950 mb-8 leading-tight">
              HYCO Group
            </h1>
            <p className="text-xl font-medium text-slate-800 mb-6 leading-relaxed">
              A premier technology holding group engineering scalable AI infrastructure, venture products, and intelligent enterprise platforms across Southeast Asia.
            </p>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              <strong>HYCO Group builds AI that matters, for people who deserve it.</strong> We identify fundamental operational friction across traditional commerce, enterprise services, grid infrastructure, and mobility—deploying transformative AI and intelligent infrastructure across four high-impact ventures.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#1A46B0] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-black">Servicio.AI (Flagship)</h4>
                  <p className="text-xs text-slate-500">Accessible, compliant AI-driven service solutions for Filipino SMEs and consumers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#1A46B0] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-black">ElectrifAI PH</h4>
                  <p className="text-xs text-slate-500">Intelligent, data-driven smart energy monitoring and connected hardware.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#1A46B0] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-black">LeasifAI</h4>
                  <p className="text-xs text-slate-500">AI-powered commercial real estate matching and automated leasing workflows.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#1A46B0] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-black">BerdEV</h4>
                  <p className="text-xs text-slate-500">Seamless EV charging locator and payment infrastructure for Philippine mobility.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-slate-100 translate-x-6 translate-y-6 z-0"></div>
            <div className="relative z-10 bg-black text-white p-8 md:p-12 shadow-2xl border border-slate-800">
              <div className="text-xs font-mono font-bold text-[#28A4E7] uppercase tracking-widest mb-4">Corporate Snapshot</div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Capital Allocation &amp; Operating Group</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Operating with institutional rigor from Pasig City, Metro Manila, HYCO Group anchors core governance, compliance, and IP while empowering each of the four ventures with autonomous engineering and commercial acceleration.
              </p>
              <div className="space-y-4 text-xs tracking-wider uppercase text-slate-400 font-mono">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Headquarters</span>
                  <span className="text-white font-bold">Ortigas Center, Pasig City, PH</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Operating Name</span>
                  <span className="text-white font-bold">HYCO Group</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Structure</span>
                  <span className="text-[#28A4E7] font-bold">Four High-Impact Ventures</span>
                </div>
                <div className="flex justify-between">
                  <span>Leadership Bench</span>
                  <span className="text-white font-bold">{totalMembers} Members</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="py-24 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,85,255,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Shield size={14} /> Board Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Message from the Chairman of the Board</h2>
            <div className="w-16 h-1 bg-blue-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="md:col-span-4 group">
              <MemberPortrait member={chairman} size="chairman" />
              <div className="mt-6">
                <h3 className="text-2xl font-serif font-semibold text-white">{chairman.name}</h3>
                <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mt-1.5">{chairman.role}</p>
                <p className="text-xs text-slate-400 mt-2">{chairman.category}</p>
              </div>
            </div>

            <div className="md:col-span-8">
              <blockquote className="text-2xl md:text-3xl font-serif text-slate-200 italic leading-relaxed mb-8">
                &quot;Engineering sustainable, high-impact enterprise technology requires more than novelty—it demands unwavering governance, architectural rigor, and relentless focus on market-tested value. At HYCO Group, we are positioning ASEAN as a crucible for practical, transformative artificial intelligence.&quot;
              </blockquote>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-6">
                Under Engr. Gerhard P. Tan&apos;s board guidance, HYCO Group combines technical engineering standards with disciplined commercialization—ensuring our flagship operations like <strong>Servicio.AI</strong>, smart EV mobility platform <strong>BerdEV</strong>, and geospatial platform <strong>LeasifAI</strong> scale on resilient foundations.
              </p>

              {/* Boardroom Feature Showcase */}
              <div className="mt-8 rounded-xl overflow-hidden border border-white/15 relative group shadow-2xl">
                <img
                  src="/boardroom.jpg"
                  alt="HYCO Group Boardroom"
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-semibold">
                        Ortigas Center Executive Chambers
                      </div>
                      <div className="text-sm font-bold text-white">
                        HYCO Group Boardroom &amp; Governance Center
                      </div>
                    </div>
                    <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-2.5 py-1 rounded border border-white/20 self-start sm:self-auto">
                      Strategic Advisory Desk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase & Navigation Tabs */}
      <section className="py-28 bg-slate-50" id="team">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">Our People</div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#0f172a]">Leadership & Team</h2>
              <p className="text-base text-slate-600 mt-3 max-w-2xl">
                The executives, engineers, advisors, and strategists driving HYCO Group and its operating subsidiaries.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Team" },
                { id: "board", label: "Board of Directors" },
                { id: "executives", label: "Executive Leadership" },
                { id: "growth", label: "Growth & Operations" },
                { id: "engineering", label: "Product & Engineering" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                    activeTab === tab.id
                      ? "bg-[#0f172a] text-white border-[#0f172a] shadow-md"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section: Board of Directors */}
          {(activeTab === "all" || activeTab === "board") && (
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-serif font-bold text-[#0f172a]">Board of Directors</h3>
                <div className="h-px bg-slate-300 flex-grow"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {allBoard.map((member, idx) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="group bg-white p-4 border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    <MemberPortrait member={member} />
                    <div className="mt-4 flex flex-col flex-grow">
                      <h4 className="text-lg font-serif font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-xs text-blue-700 font-bold uppercase tracking-wider mt-1 min-h-[32px] flex items-center">
                        {member.role}
                      </p>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed flex-grow">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Executive Leadership */}
          {(activeTab === "all" || activeTab === "executives") && (
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-serif font-bold text-[#0f172a]">Executive Leadership (C-Suite)</h3>
                <div className="h-px bg-slate-300 flex-grow"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {executives.map((member, idx) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="group bg-white p-4 border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    <MemberPortrait member={member} />
                    <div className="mt-4 flex flex-col flex-grow">
                      <h4 className="text-lg font-serif font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-xs text-blue-700 font-bold uppercase tracking-wider mt-1 min-h-[32px] flex items-center">
                        {member.role}
                      </p>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed flex-grow">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Growth & Operations */}
          {(activeTab === "all" || activeTab === "growth") && (
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-serif font-bold text-[#0f172a]">Growth & Executive Office</h3>
                <div className="h-px bg-slate-300 flex-grow"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {growthOps.map((member, idx) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="group bg-white p-4 border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    <MemberPortrait member={member} />
                    <div className="mt-4 flex flex-col flex-grow">
                      <h4 className="text-lg font-serif font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-xs text-blue-700 font-bold uppercase tracking-wider mt-1 min-h-[32px] flex items-center">
                        {member.role}
                      </p>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed flex-grow">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Product & Engineering */}
          {(activeTab === "all" || activeTab === "engineering") && (
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-serif font-bold text-[#0f172a]">Product & Engineering</h3>
                <div className="h-px bg-slate-300 flex-grow"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {productEng.map((member, idx) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="group bg-white p-4 border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    <MemberPortrait member={member} />
                    <div className="mt-4 flex flex-col flex-grow">
                      <h4 className="text-lg font-serif font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-xs text-blue-700 font-bold uppercase tracking-wider mt-1 min-h-[32px] flex items-center">
                        {member.role}
                      </p>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed flex-grow">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* JSON Info Banner for the User */}
          <div className="mt-16 p-6 bg-blue-50 border border-blue-200 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wide">
                Easily Update Images and Bios via JSON
              </h4>
              <p className="text-xs text-blue-700 mt-1">
                To replace any placeholder with an actual photo, simply open <code className="font-mono bg-blue-100 px-1.5 py-0.5 rounded text-blue-950 font-bold">data/team.json</code> and paste your image URL or path in the <code className="font-mono">&quot;image&quot;</code> property.
              </p>
            </div>
            <Link
              href="/#portfolio"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-widest rounded transition-colors shrink-0"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
