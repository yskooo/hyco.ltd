import { motion } from 'motion/react';

export default function About() {
  const boardMembers = [
    { name: "Sarah Jenkins", role: "Board Member", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
    { name: "David Chen", role: "Board Member", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
    { name: "Michael Ross", role: "Board Member", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
    { name: "Elena Rodriguez", role: "Board Member", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" }
  ];

  const executives = [
    { name: "James Hardy", role: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
    { name: "Anita Patel", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=800&auto=format&fit=crop" },
    { name: "Marcus Thorne", role: "Chief Operating Officer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <div className="w-full bg-white pt-28">
      {/* Story Section */}
      <section className="py-20 md:py-32 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-12 h-1 bg-blue-600 mb-6"></div>
            <h2 className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">Our Story</h2>
            <h1 className="text-5xl md:text-6xl font-serif text-[#0f172a] mb-8 leading-tight">
              Engineering the Future of IT & AI Solutions.
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Hardy & Co. began with a singular vision: to bridge the gap between cutting-edge artificial intelligence research and practical, enterprise-grade IT solutions. Founded by industry veterans, we recognized that traditional businesses were struggling to integrate rapidly evolving technologies.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we are a premier holding company. Through our specialized divisions—ElectrifAI, Serbisyow AI, and LeasifAI—we deliver transformative technologies that optimize operations, enhance customer experiences, and drive sustainable growth across global markets.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-slate-100 translate-x-6 translate-y-6 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Hardy & Co. Office" 
              className="relative z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-serif text-[#0f172a] mb-6">Message from the Chairman</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
            <div className="md:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=800&auto=format&fit=crop" 
                alt="Robert Hardy, Chairman" 
                className="w-full aspect-[3/4] object-cover grayscale shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-6 text-center md:text-left">
                <h3 className="text-2xl font-serif font-semibold text-[#0f172a]">Robert Hardy</h3>
                <p className="text-xs text-blue-700 font-bold uppercase tracking-widest mt-2">Chairman & Founder</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <blockquote className="text-2xl md:text-3xl font-serif text-slate-700 italic leading-relaxed mb-10">
                "At Hardy & Co., we believe that technology should serve as an amplifier of human potential. Our commitment is to build robust, scalable IT and AI solutions that not only solve today's complex challenges but also anticipate the needs of tomorrow's enterprise."
              </blockquote>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                With over three decades of experience in enterprise technology and strategic investments, Robert founded Hardy & Co. to consolidate fragmented technological innovations into cohesive, market-ready solutions.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" alt="Signature" className="h-16 opacity-40" style={{ filter: 'invert(1)' }} referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Executives Section */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-4xl font-serif text-[#0f172a] mb-6">Executive Leadership</h2>
            <p className="text-lg text-slate-600 max-w-2xl">Our executive team brings together decades of expertise in artificial intelligence, enterprise software, and global operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {executives.map((exec, idx) => (
              <motion.div key={exec.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group">
                <div className="overflow-hidden mb-6 shadow-lg">
                  <img src={exec.img} alt={exec.name} className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#0f172a]">{exec.name}</h3>
                <p className="text-xs text-blue-700 font-bold uppercase tracking-widest mt-2">{exec.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-32 bg-[#0f172a] text-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-4xl font-serif mb-6">Board of Directors</h2>
            <div className="w-16 h-1 bg-blue-600"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {boardMembers.map((member, idx) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <img src={member.img} alt={member.name} className="w-full aspect-square object-cover mb-6 opacity-70 hover:opacity-100 transition-opacity duration-500 grayscale" referrerPolicy="no-referrer" />
                <h3 className="text-xl font-serif font-semibold">{member.name}</h3>
                <p className="text-sm text-slate-400 mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
