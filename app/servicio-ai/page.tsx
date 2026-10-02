"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Bricolage_Grotesque, DM_Sans, DM_Mono } from 'next/font/google';
import Image from 'next/image';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-bricolage',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
});

// --- ICONS ---
const CloseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const BotIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2c-.001.076-.01.151-.027.224A5.5 5.5 0 0 1 17.5 9h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1.5a5.5 5.5 0 0 1-3.526 3.776c.017.073.026.148.026.224a2 2 0 0 1-4 0c0-.076.009-.151.026-.224A5.5 5.5 0 0 1 6.5 19H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h1a5.5 5.5 0 0 1 3.527-4.776A2 2 0 0 1 12 2zm0 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>;
const SendIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;
const SearchIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const CheckIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D8C8C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const ArrowRightIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
const ShieldIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>;

// --- UI COMPONENTS ---
const FadeInSection = ({ children, className = "", id, delay = 0 }: { children: React.ReactNode, className?: string, id?: string, delay?: number }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={domRef}
      id={id}
      className={`transition-all duration-[900ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
};

// --- TYPING INDICATOR ---
const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-4 py-3 bg-white border border-[#b2dede]/50 rounded-2xl rounded-tl-sm w-16 shadow-sm">
    {[0, 150, 300].map(d => (
      <div key={d} className="w-2 h-2 rounded-full bg-[#0D8C8C]/50 animate-bounce" style={{ animationDelay: `${d}ms`, animationDuration: '1s' }} />
    ))}
  </div>
);

// --- SHADER COMPONENT ---
const ShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas && (canvas.width !== w || canvas.height !== h)) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    window.addEventListener('resize', syncSize);
    syncSize();

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `attribute vec2 a_position; varying vec2 v_texCoord; void main() { v_texCoord = a_position * 0.5 + 0.5; gl_Position = vec4(a_position, 0.0, 1.0); }`;
    const fs = `precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_scroll;
      
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      
      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i); 
        vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }
      
      void main() {
          vec2 uv = v_texCoord;
          vec2 mouse = u_mouse / u_resolution;
          vec3 colorBase = vec3(0.96, 0.98, 0.97); // cool off-white with a hint of teal
          vec3 colorTeal = vec3(0.05, 0.55, 0.55);
          vec3 blobColor = vec3(0.05, 0.65, 0.58);
          vec3 accentPurple = vec3(0.45, 0.72, 0.80);
          
          vec3 scrollGreen = vec3(0.04, 0.62, 0.46);
          blobColor = mix(blobColor, scrollGreen, u_scroll * 0.9);
          colorBase = mix(colorBase, vec3(0.88, 0.97, 0.94), u_scroll * 0.25);
      
          float n1 = snoise(vec3(uv.x * 2.5, uv.y * 3.5 - u_scroll * 1.8, u_time * 0.12));
          float n2 = snoise(vec3(uv.x * 3.5 + u_time * 0.06, uv.y * 2.0 - u_scroll * 1.2, u_time * 0.14));
          float n3 = snoise(vec3(uv.x * 1.8, uv.y * 2.5, u_time * 0.08 + 1.5));
          
          float wave1 = smoothstep(-0.6, 1.0, n1);
          float wave2 = smoothstep(-0.6, 1.0, n2);
          float wave3 = smoothstep(-0.3, 1.0, n3);
          
          float mouseGlow = 1.0 - smoothstep(0.0, 0.6, length(uv - mouse));
      
          vec3 color = colorBase;
          // More visible but still tasteful mixing
          color = mix(color, blobColor, wave1 * 0.09);
          color = mix(color, blobColor, wave2 * 0.07);
          color = mix(color, accentPurple, wave3 * 0.04);
          color = mix(color, colorTeal, mouseGlow * 0.12);
      
          gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compileShader(type: number, src: string) {
      const s = gl?.createShader(type);
      if (!s || !gl) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    if (!prog) return;

    const vertexShader = compileShader(gl.VERTEX_SHADER, vs);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if (vertexShader) gl.attachShader(prog, vertexShader);
    if (fragmentShader) gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');
    const uScroll = gl.getUniformLocation(prog, 'u_scroll');

    let targetScrollNorm = 0.0;
    let currentScrollY = 0;
    const handleScroll = () => {
      currentScrollY = window.scrollY;
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      targetScrollNorm = Math.min(1, Math.max(0, currentScrollY / maxScroll));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        mouse.x = (event.clientX - rect.left) / rect.width * canvas.width;
        mouse.y = (1.0 - (event.clientY - rect.top) / rect.height) * canvas.height;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    let reqId: number;
    let lastTime = 0;
    let accumulatedTime = 0;
    let lastScrollY = 0;
    let currentSpeedMultiplier = 1.0;
    let smoothedScrollNorm = targetScrollNorm;

    function render(t: number) {
      if (!lastTime) lastTime = t;
      const dt = Math.min(t - lastTime, 50);
      lastTime = t;

      smoothedScrollNorm += (targetScrollNorm - smoothedScrollNorm) * 0.08;

      const scrollVelocity = (currentScrollY - lastScrollY) / (dt || 16.6);
      lastScrollY = currentScrollY;

      const targetSpeedMultiplier = 1.0 + Math.abs(scrollVelocity) * 4.0;
      currentSpeedMultiplier += (targetSpeedMultiplier - currentSpeedMultiplier) * 0.08;

      accumulatedTime += (dt * currentSpeedMultiplier) * 0.001;

      if (canvas && gl) {
        gl.viewport(0, 0, canvas.width, canvas.height);
        if (uTime) gl.uniform1f(uTime, accumulatedTime);
        if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
        if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
        if (uScroll) gl.uniform1f(uScroll, smoothedScrollNorm);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      reqId = requestAnimationFrame(render);
    }
    render(0);

    return () => {
      window.removeEventListener('resize', syncSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(reqId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full object-cover pointer-events-none" style={{ background: '#f0faf8' }} />;
};

// --- CHATBOT WIDGET ---
const ChatWidget = ({ open, setOpen }: { open: boolean, setOpen: (v: boolean) => void }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-[#091e25]/20 backdrop-blur-sm z-40 sm:hidden transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end w-full sm:w-auto">
        {/* Modal Panel */}
        <div
          className={`
            transition-all duration-300 origin-bottom sm:origin-bottom-right
            w-full h-[85vh] sm:w-[360px] sm:h-auto sm:mb-4
            bg-white/90 backdrop-blur-xl border border-[#b2dede]/50 
            rounded-t-3xl sm:rounded-2xl shadow-[0_20px_60px_rgba(0,103,103,0.18)] 
            flex flex-col
            ${open ? 'translate-y-0 sm:scale-100 opacity-100' : 'translate-y-full sm:translate-y-0 sm:scale-95 opacity-0 pointer-events-none'}
          `}
        >
          {/* Mobile Drag Handle */}
          <div className="w-full flex justify-center py-2 sm:hidden bg-[#0D8C8C] rounded-t-3xl">
            <div className="w-10 h-1 bg-white/30 rounded-full" />
          </div>

          <div className="bg-gradient-to-r from-[#0D8C8C] to-[#0a7272] text-white p-4 flex justify-between items-center sm:rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8ef3f2] animate-pulse shadow-[0_0_8px_#8ef3f2]"></div>
              <span className="font-semibold text-sm font-serif tracking-wide">Serbisyow Assistant</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close Chat" className="hover:bg-black/10 p-1.5 rounded-md transition-colors"><CloseIcon /></button>
          </div>

          <div className="p-5 flex-1 sm:h-[320px] overflow-y-auto flex flex-col gap-4">
            <div className="bg-[#f0faf8] border border-[#dcf1fb] text-[#091e25] text-[15px] p-3.5 rounded-2xl rounded-tl-sm w-[90%] shadow-sm leading-relaxed">
              Hi! How can I help you today? Are you looking for a specific service or professional?
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              <button className="text-[13px] font-medium bg-white border border-[#0D8C8C]/30 text-[#0D8C8C] px-3.5 py-1.5 rounded-full hover:bg-[#0D8C8C]/5 transition-colors">How does it work?</button>
              <button className="text-[13px] font-medium bg-white border border-[#0D8C8C]/30 text-[#0D8C8C] px-3.5 py-1.5 rounded-full hover:bg-[#0D8C8C]/5 transition-colors">View pricing</button>
            </div>
          </div>

          <div className="p-4 border-t border-[#b2dede]/30 bg-white/60 backdrop-blur-md">
            <div className="relative group">
              <input type="text" placeholder="Type your message..." className="w-full bg-white/80 border border-[#bdc9c8] rounded-full pl-5 pr-12 py-3 text-sm focus:outline-none focus:border-[#0D8C8C] focus:ring-1 focus:ring-[#0D8C8C] transition-all shadow-inner text-[#091e25] placeholder:text-[#6d7979]" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#0D8C8C] text-white rounded-full hover:bg-[#006767] transition-colors"><SendIcon /></button>
            </div>
          </div>
        </div>

        {/* FAB */}
        <div className="hidden sm:block">
          <button
            onClick={() => setOpen(!open)}
            className="w-14 h-14 bg-gradient-to-br from-[#0D8C8C] to-[#006767] text-white rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(13,140,140,0.35)] hover:scale-105 hover:shadow-[0_6px_30px_rgba(13,140,140,0.5)] transition-all group relative z-50"
            aria-label="Have questions?"
          >
            {open ? <CloseIcon /> : <BotIcon />}
            {!open && (
              <span className="absolute right-full mr-4 bg-[#1f333a] text-white text-[13px] font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                Have questions?
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

// --- PROFESSIONAL CARD ---
const ProfessionalCard = () => (
  <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#b2dede]/60 shadow-[0_20px_60px_rgba(13,140,140,0.14)] p-5 w-[280px] sm:w-[300px]">
    <div className="flex items-start gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D8C8C] to-[#005f5f] flex items-center justify-center text-white font-serif font-bold text-lg flex-shrink-0">M</div>
      <div>
        <div className="font-serif font-bold text-[15px] text-[#091e25]">Engr. Marco V., PE</div>
        <div className="text-[12px] text-[#6d7979]">Structural · 12 yrs exp</div>
        <div className="flex items-center gap-1 mt-1">
          {[1,2,3,4,5].map(i => <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
          <span className="text-[11px] text-[#6d7979] ml-1">4.9 (47 reviews)</span>
        </div>
      </div>
      <div className="ml-auto flex-shrink-0">
        <div className="flex items-center gap-1 bg-[#e4f7ff] text-[#006767] text-[10px] font-bold px-2 py-1 rounded-full">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
          Verified
        </div>
      </div>
    </div>
    <div className="text-[12px] text-[#6d7979] bg-[#f0faf8] rounded-xl p-3 mb-3 leading-relaxed">
      &quot;Licensed structural engineer specializing in commercial permit requirements and retrofitting in Metro Manila.&quot;
    </div>
    <div className="flex items-center justify-between">
      <div>
        <div className="text-[11px] text-[#6d7979]">Starting rate</div>
        <div className="font-serif font-bold text-[#0D8C8C] text-[15px]">₱2,500/hr</div>
      </div>
      <button className="bg-[#0D8C8C] text-white text-[12px] font-semibold px-4 py-2 rounded-full hover:bg-[#006767] transition-colors shadow-md">
        Book Now
      </button>
    </div>
  </div>
);

// --- MAIN PAGE ---
export default function SerbisyowLandingPage() {
  const [chatOpen, setChatOpen] = useState(false);

  // Styling Tokens
  const glassPanel = "bg-white/55 backdrop-blur-[14px] border border-[#b2dede]/40";
  const glassPanelHover = "hover:bg-white/70 hover:border-[#0D8C8C]/30 transition-all duration-300";
  const btnPrimary = "bg-[#0D8C8C] text-white px-6 py-2.5 rounded-lg hover:bg-[#006767] transition-colors duration-200 font-semibold text-sm inline-flex items-center justify-center";
  const btnGhost = "text-[#006767] px-6 py-2.5 rounded-lg border border-[#0D8C8C]/30 hover:bg-[#0D8C8C]/6 hover:border-[#0D8C8C]/50 transition-colors duration-200 font-semibold text-sm inline-flex items-center justify-center";

  const partners = [
    { name: "BuildRight PH", icon: "🏗️" },
    { name: "LexPro Legal", icon: "⚖️" },
    { name: "TechForge Inc.", icon: "💻" },
    { name: "AcademiaPH", icon: "🎓" },
    { name: "SkillBridge", icon: "🔗" },
    { name: "ProVerify PH", icon: "✅" },
  ];

  return (
    <div className={`${bricolage.variable} ${dmSans.variable} ${dmMono.variable} font-sans text-[#091e25] min-h-screen relative selection:bg-[#0D8C8C]/20 selection:text-[#091e25]`}>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 32s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Sticky Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="sticky top-0 w-full h-screen">
          <ShaderBackground />
        </div>
      </div>

      {/* Header */}
      <header className="w-full pt-10 px-6 text-center max-w-[1280px] mx-auto relative z-40">
        <div className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#0D8C8C]">
          Serbisyow.AI
        </div>
      </header>

      <main className="pt-8 pb-24 px-6 max-w-[1280px] mx-auto space-y-28 md:space-y-44 relative z-10">

        {/* Section 1 — Hero */}
        <section className="relative text-center flex flex-col items-center pt-4 md:pt-8">
          <FadeInSection className="max-w-4xl flex flex-col items-center w-full">
            <h1 className="font-serif text-[38px] md:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-tight text-[#091e25] mb-6">
              Philippines&apos; first AI-powered<br />professional marketplace.
            </h1>
            <p className="text-[17px] md:text-[19px] text-[#3d4949] leading-[1.7] max-w-2xl mb-10">
              Connecting clients with verified Filipino professionals — from home construction to legal consultation — through secure, intelligent, and localized technology.
            </p>

            <div className="w-full max-w-xl relative mb-10 flex">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6d7979]">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="What service are you looking for?"
                className="w-full bg-white/80 border border-[#b2dede] rounded-lg pl-12 pr-32 py-4 text-[15px] focus:outline-none focus:border-[#0D8C8C] transition-colors placeholder:text-[#6d7979]"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <button className="bg-[#0D8C8C] text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#006767] transition-colors">
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button className={`${btnPrimary} w-full sm:w-auto !px-8 !py-3.5 text-[15px] gap-2`}>
                Post a Job <ArrowRightIcon />
              </button>
              <button className={`${btnGhost} w-full sm:w-auto !px-8 !py-3.5 text-[15px]`}>See How It Works</button>
            </div>
          </FadeInSection>

          {/* Hero Visual */}
          <FadeInSection className="w-full mt-16 md:mt-20" delay={150}>
            <div className="relative rounded-2xl overflow-hidden w-full aspect-[16/9] md:aspect-[21/9]">
              <Image src="/serbisyow-gallery-01.jpg" alt="Serbisyow.AI professional at work" fill style={{ objectFit: 'cover' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091e25]/35 via-transparent to-transparent" />
            </div>
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
              <ProfessionalCard />
            </div>
          </FadeInSection>
        </section>

        {/* Section 2 — Trust Bar */}
        <FadeInSection className="flex flex-col items-center">
          <p className="text-[13px] tracking-[0.1em] uppercase text-[#6d7979] mb-8">Trusted by professionals across the Philippines</p>
          <div className="w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
            <div className="marquee-track flex items-center gap-16 md:gap-24 flex-shrink-0">
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="flex-shrink-0 flex items-center gap-2 font-serif font-bold text-[17px] text-[#3d4949]/50 hover:text-[#3d4949]/80 transition-colors duration-300 cursor-default whitespace-nowrap">
                  <span>{p.icon}</span>
                  {p.name}
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Section 3 — The Problem & Solution */}
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 md:gap-8 lg:gap-24 items-center">
            <div>
              <h2 className="font-serif text-[28px] md:text-[34px] font-bold leading-tight text-[#091e25] mb-8">
                The complexity of modern sourcing.
              </h2>
              <ul className="space-y-5 text-[16px] text-[#3d4949]">
                {[
                  "Endless scrolling through unverified profiles",
                  "Language barriers and mismatched expectations",
                  "Insecure payments and \"ghosting\" risks",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${glassPanel} rounded-2xl p-8 md:p-10`}>
              <p className="text-[16px] md:text-[18px] text-[#091e25] font-medium leading-relaxed mb-8">
                An AI-powered marketplace connecting Filipino clients with verified providers — from licensed engineers to local businesses — functioning like a booking-app experience but purpose-built for services.
              </p>
              <div className="space-y-4 text-[15px] font-medium text-[#3d4949]">
                {[
                  "Professional Services Marketplace",
                  "AI-Powered Smart Matching",
                  "Trusted & Secure Transactions",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckIcon /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Section 4 — Service Categories */}
        <FadeInSection>
          <div className="mb-14">
            <h2 className="font-serif text-[32px] md:text-[38px] font-bold text-[#091e25]">The Elite Tier.</h2>
            <p className="text-[16px] text-[#6d7979] mt-3">From licensed engineers to creative professionals — all verified, all ready.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
                label: "Engineering & Architecture",
                desc: "Structural Engineering · Architectural Drafting · Civil Engineering",
                iconColor: "text-[#006767]",
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>,
                label: "Legal Services",
                desc: "Contract Review & Draft · Legal Consultation · Notarization",
                iconColor: "text-[#006767]",
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
                label: "Academic & Tutoring",
                desc: "Research Assistance · Professional Tutoring · Technical Writing",
                iconColor: "text-[#006767]",
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
                label: "IT & Digital",
                desc: "Web Development · Mobile Apps · Digital Marketing",
                iconColor: "text-[#006767]",
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
                label: "Local Services",
                desc: "Home Repairs & Maintenance · Event Planning · Photography",
                iconColor: "text-[#006767]",
              },
            ].map((cat, i) => (
              <div key={i} className={`${glassPanel} ${glassPanelHover} rounded-2xl p-7 group cursor-pointer ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className={`w-10 h-10 rounded-lg bg-[#0D8C8C]/8 ${cat.iconColor} flex items-center justify-center mb-5`}>
                  {cat.icon}
                </div>
                <h3 className="font-serif font-bold text-[17px] text-[#091e25] mb-2">
                  {cat.label}
                </h3>
                <p className="text-[14px] text-[#6d7979] leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>


        {/* Section 5 — How It Works */}
        <FadeInSection id="how-it-works">
          <div className="mb-14">
            <h2 className="font-serif text-[32px] md:text-[38px] font-bold text-[#091e25]">The Frictionless Path</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-6 left-0 w-full h-px bg-[#b2dede] z-0" />
            <div className="md:hidden absolute top-0 left-5 bottom-0 w-px bg-[#b2dede] z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {[
                { n: "1", title: "Describe", desc: "Tell us in your own words. English or Tagalog." },
                { n: "2", title: "Match", desc: "Receive the top 3 matched professionals instantly." },
                { n: "3", title: "Book", desc: "Review profiles and confirm your choice." },
                { n: "4", title: "Pay", desc: "Funds held securely in escrow until completion." },
                { n: "5", title: "Rate", desc: "Confirm delivery and release payment." },
              ].map((step, idx) => (
                <div key={idx} className="flex md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white border-2 border-[#0D8C8C] flex items-center justify-center font-serif font-bold text-[#0D8C8C] text-[16px] relative z-10">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-[17px] text-[#091e25] mb-1">{step.title}</h3>
                    <p className="text-[14px] text-[#6d7979] leading-relaxed max-w-[180px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>


        {/* Section 6 — AI Matching Spotlight */}
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Chat Panel */}
            <div className={`${glassPanel} rounded-2xl overflow-hidden`}>
              <div className="bg-[#0D8C8C] p-4 px-6 flex items-center gap-3">
                <span className="font-serif font-semibold text-[14px] text-white">Serbisyow AI Assistant</span>
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-[#0D8C8C] text-white text-[15px] p-4 rounded-2xl rounded-tr-sm max-w-[85%]">
                    &quot;I need an architect for a commercial permit in Makati.&quot;
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white border border-[#b2dede]/50 text-[#091e25] text-[15px] p-4 rounded-2xl rounded-tl-sm max-w-[85%]">
                    &quot;Found 3 licensed architects in Makati specializing in commercial permits. Want to see them?&quot;
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div>
              <h2 className="font-serif text-[28px] md:text-[34px] font-bold text-[#091e25] mb-6">
                Bilingual AI, Singular Precision.
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#3d4949] leading-relaxed mb-8">
                Our custom LLM understands the nuances of Filipino professional context — from local jargon to Tagalog slang — ensuring perfect communication and matching.
              </p>
              <div className="space-y-5">
                {[
                  { title: "Perfect Job Fit", desc: "Instantly matches your profile with the best-fit talent for your project." },
                  { title: "Voice Commands", desc: "Talk to our AI in Tagalog or English for a natural, conversational experience." },
                  { title: "Context-Aware", desc: "Provides personalized assistance based on your role and current needs." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 border-b border-[#b2dede]/30 pb-5 last:border-0 last:pb-0">
                    <div className="w-5 h-5 flex-shrink-0 mt-1"><CheckIcon /></div>
                    <div>
                      <h4 className="font-serif font-semibold text-[16px] text-[#091e25] mb-1">{item.title}</h4>
                      <p className="text-[15px] text-[#6d7979]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

  

        {/* Section 7 — Verification & Trust */}
        <FadeInSection className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-[32px] md:text-[38px] font-bold text-[#091e25] mb-6">
            Verified Professionals, Real Protection.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#3d4949] leading-relaxed mb-6">
            Every provider on Serbisyow.AI submits a government ID and, where applicable, a professional license and portfolio for review. Our admin team manually reviews every credential before a provider earns the Verified badge. Clients also confirm their phone number via OTP before their first booking.
          </p>
          <p className="text-[16px] font-medium italic text-[#006767]">
            This isn&apos;t a hurdle for providers — it&apos;s protection for you.
          </p>
        </FadeInSection>


        {/* Section 8 — Escrow & Communication */}
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${glassPanel} rounded-2xl p-8 md:p-10`} style={{ borderLeft: '3px solid #D97706' }}>
              <h3 className="font-serif text-[22px] font-bold text-[#091e25] mb-4">Secured by Escrow Protection</h3>
              <p className="text-[15px] text-[#3d4949] leading-relaxed mb-7">
                No more upfront risk. Your payment is held in a secure, PCI-compliant vault and only released once you approve the final deliverable.
              </p>
              <div className="space-y-2.5 text-[15px] text-[#091e25]">
                {["Fraud Monitoring", "Secure Withdrawals", "Dispute Resolution"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D97706]" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className={`${glassPanel} rounded-2xl p-8 md:p-10`} style={{ borderLeft: '3px solid #006767' }}>
              <h3 className="font-serif text-[22px] font-bold text-[#091e25] mb-4">Real-time Communication</h3>
              <p className="text-[15px] text-[#3d4949] leading-relaxed">
                Once booked, chat directly with your provider in real time — share files, clarify scope, and track progress, all inside the app.
              </p>
              <div className="mt-7 bg-[#f0faf8] border border-[#b2dede]/50 p-4 rounded-xl flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006a6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                <span className="text-[14px] text-[#006a6a] font-mono">project_specs.pdf attached</span>
              </div>
            </div>
          </div>
        </FadeInSection>


        {/* Section 9 — Gallery */}
        <FadeInSection>
          <div className="mb-14">
            <h2 className="font-serif text-[32px] md:text-[38px] font-bold text-[#091e25] mb-3">Quality Delivered</h2>
            <p className="text-[16px] text-[#6d7979]">Exceptional work from our verified professionals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] group">
                <Image src="/serbisyow-gallery-02.jpg" alt="Filipino legal professional" fill style={{ objectFit: 'cover' }} className="group-hover:scale-[1.03] transition-transform duration-700" />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
                <Image src="/serbisyow-gallery-03.jpg" alt="Filipino tradesperson" fill style={{ objectFit: 'cover' }} className="group-hover:scale-[1.03] transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4 md:mt-8">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] group">
                <Image src="/serbisyow-gallery-04.jpg" alt="Filipino IT developer" fill style={{ objectFit: 'cover' }} className="group-hover:scale-[1.03] transition-transform duration-700" />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-square group">
                <Image src="/serbisyow-gallery-01.jpg" alt="Filipino architect" fill style={{ objectFit: 'cover' }} className="group-hover:scale-[1.03] transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden aspect-[2/3] group">
                <Image src="/serbisyow-gallery-05.jpg" alt="Filipino photographer" fill style={{ objectFit: 'cover' }} className="group-hover:scale-[1.03] transition-transform duration-700" />
              </div>
              <div className={`${glassPanel} rounded-xl p-6`}>
                <div className="font-serif font-bold text-[34px] text-[#0D8C8C]">2,400+</div>
                <div className="text-[14px] text-[#6d7979] mt-1">Verified Professionals</div>
                <div className="mt-3 w-12 h-0.5 bg-[#0D8C8C]" />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-[18px] md:text-[20px] font-serif font-semibold text-[#006767]">
              Built for the Philippines, in English and Tagalog — from Metro Manila to every barangay beyond.
            </p>
          </div>
        </FadeInSection>


        {/* Section 10 — Final CTA */}
        <FadeInSection className="max-w-3xl mx-auto pb-12">
          <div className={`${glassPanel} rounded-2xl p-10 md:p-16`}>
            <h2 className="font-serif text-[32px] md:text-[44px] font-bold text-[#091e25] mb-5 tracking-tight">
              Ready to elevate your project?
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#3d4949] leading-relaxed mb-10 max-w-xl">
              Join the marketplace where technical excellence meets AI-driven speed. Experience the future of professional services in the Philippines.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className={`${btnPrimary} !px-8 !py-3.5 text-[15px] gap-2`}>
                Post a Job <ArrowRightIcon />
              </button>
              <button className={`${btnGhost} !px-8 !py-3.5 text-[15px]`}>Become a Partner</button>
            </div>
            <p className="text-[13px] text-[#6d7979] mt-8 uppercase tracking-widest">
              Verified professionals. Escrow-protected payments. Every time.
            </p>
          </div>
        </FadeInSection>

      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-lg border-t border-[#b2dede]/50 py-12 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <div className="font-serif font-bold text-xl bg-gradient-to-r from-[#0D8C8C] to-[#006767] bg-clip-text text-transparent mb-2">Serbisyow.AI</div>
              <div className="text-[14px] text-[#6d7979] max-w-xs">Philippines&apos; first AI-powered professional services marketplace. A HYCO Group Flagship.</div>
              <div className="flex items-center gap-3 mt-4">
                {/* Social icons */}
                {[
                  { label: "FB", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                  { label: "IG", paths: ["M16 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6z", "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"] },
                  { label: "LI", paths: ["M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", "M2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"] },
                ].map((s, i) => (
                  <a key={i} href="#" aria-label={s.label} className="w-8 h-8 rounded-lg bg-[#0D8C8C]/10 hover:bg-[#0D8C8C] text-[#006767] hover:text-white flex items-center justify-center transition-all duration-200">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {s.paths ? s.paths.map((p, j) => <path key={j} d={p}/>) : <path d={s.path}/>}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-12 text-[14px]">
              <div>
                <div className="font-serif font-semibold text-[#091e25] mb-3">Platform</div>
                <div className="space-y-2 text-[#6d7979]">
                  <div><a href="#" className="hover:text-[#0D8C8C] transition-colors">How It Works</a></div>
                  <div><a href="#" className="hover:text-[#0D8C8C] transition-colors">For Clients</a></div>
                  <div><a href="#" className="hover:text-[#0D8C8C] transition-colors">For Professionals</a></div>
                  <div><a href="#" className="hover:text-[#0D8C8C] transition-colors">Pricing</a></div>
                </div>
              </div>
              <div>
                <div className="font-serif font-semibold text-[#091e25] mb-3">Legal</div>
                <div className="space-y-2 text-[#6d7979]">
                  <div><a href="#" className="hover:text-[#0D8C8C] transition-colors">Terms of Service</a></div>
                  <div><a href="#" className="hover:text-[#0D8C8C] transition-colors">Privacy Policy</a></div>
                  <div><a href="#" className="hover:text-[#0D8C8C] transition-colors">Escrow Protection</a></div>
                  <div><a href="#" className="hover:text-[#0D8C8C] transition-colors">Help Center</a></div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#b2dede]/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-[13px] text-[#6d7979]">© 2026 Serbisyow.AI — High-Tier Professional Marketplace. A HYCO Group Company.</div>
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <div className="hidden sm:block">
        <ChatWidget open={chatOpen} setOpen={setChatOpen} />
      </div>
      <div className="sm:hidden">
        <ChatWidget open={chatOpen} setOpen={setChatOpen} />
      </div>
    </div>
  );
}
