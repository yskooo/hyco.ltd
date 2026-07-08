"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

// --- ICONS ---
const CloseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const BotIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2c-.001.076-.01.151-.027.224A5.5 5.5 0 0 1 17.5 9h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1.5a5.5 5.5 0 0 1-3.526 3.776c.017.073.026.148.026.224a2 2 0 0 1-4 0c0-.076.009-.151.026-.224A5.5 5.5 0 0 1 6.5 19H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h1a5.5 5.5 0 0 1 3.527-4.776A2 2 0 0 1 12 2zm0 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>;
const SendIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;
const SearchIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const CheckIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D8C8C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const DefaultPlaceholderIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>;

// --- UI COMPONENTS ---
const FadeInSection = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      id={id}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
};

const GlassImagePlaceholder = ({ className, label, icon }: { className?: string, label?: string, icon?: React.ReactNode }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-[12px] border border-[#b2dede]/50 flex flex-col items-center justify-center ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-[#0D8C8C]/5 to-transparent pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E8F6F6] rounded-full blur-[60px] opacity-60" />
    <div className="relative z-10 flex flex-col items-center gap-2 text-[#006a6a]/60">
      {icon || <DefaultPlaceholderIcon />}
      {label && <span className="text-[11px] font-bold tracking-widest uppercase">{label}</span>}
    </div>
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
          vec3 colorBase = vec3(0.98, 0.976, 0.96); // #FAF9F5
          vec3 colorTeal = vec3(0.05, 0.55, 0.55); // #0D8C8C
          vec3 colorTint = vec3(0.91, 0.965, 0.965); // #E8F6F6
          
          vec3 scrollGreen = vec3(0.05, 0.65, 0.40);
          colorTint = mix(colorTint, scrollGreen, u_scroll * 0.85);
          colorBase = mix(colorBase, vec3(0.85, 0.96, 0.90), u_scroll * 0.3);
      
          float n1 = snoise(vec3(uv * 1.5, u_time * 0.1));
          float n2 = snoise(vec3(uv * 2.0 + mouse * 0.05, u_time * 0.08));
      
          float blob1 = smoothstep(0.8, 0.3, length(uv - vec2(0.2, 0.8) + n1 * 0.2));
          float blob2 = smoothstep(0.9, 0.4, length(uv - vec2(0.8, 0.3) + n2 * 0.3));
          float mouseGlow = smoothstep(0.5, 0.0, length(uv - mouse));
      
          vec3 color = colorBase;
          color = mix(color, colorTint, blob1 * 0.6);
          color = mix(color, colorTint, blob2 * 0.5);
          color = mix(color, colorTeal, mouseGlow * 0.08);
      
          gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compileShader(type: number, src: string) {
      const s = gl?.createShader(type);
      if(!s || !gl) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }
    
    const prog = gl.createProgram();
    if(!prog) return;
    
    const vertexShader = compileShader(gl.VERTEX_SHADER, vs);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if(vertexShader) gl.attachShader(prog, vertexShader);
    if(fragmentShader) gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);
    
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');
    const uScroll = gl.getUniformLocation(prog, 'u_scroll');

    let scrollNorm = 0.0;
    const handleScroll = () => {
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      scrollNorm = Math.min(1, Math.max(0, window.scrollY / maxScroll));
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
    function render(t: number) {
      if(canvas && gl) {
        gl.viewport(0, 0, canvas.width, canvas.height);
        if (uTime) gl.uniform1f(uTime, t * 0.001);
        if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
        if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
        if (uScroll) gl.uniform1f(uScroll, scrollNorm);
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

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 bg-[#FAF9F5]" />;
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
            bg-white/85 backdrop-blur-xl border border-[#b2dede]/50 
            rounded-t-3xl sm:rounded-2xl shadow-[0_20px_60px_rgba(0,103,103,0.15)] 
            flex flex-col
            ${open ? 'translate-y-0 sm:scale-100 opacity-100' : 'translate-y-full sm:translate-y-0 sm:scale-95 opacity-0 pointer-events-none'}
          `}
        >
          {/* Mobile Drag Handle */}
          <div className="w-full flex justify-center py-2 sm:hidden bg-[#0D8C8C] rounded-t-3xl">
            <div className="w-10 h-1 bg-white/30 rounded-full" />
          </div>

          <div className="bg-[#0D8C8C] text-white p-4 flex justify-between items-center sm:rounded-t-2xl">
             <div className="flex items-center gap-3">
               <div className="w-2.5 h-2.5 rounded-full bg-[#8ef3f2] animate-pulse shadow-[0_0_8px_#8ef3f2]"></div>
               <span className="font-semibold text-sm font-poppins tracking-wide">Servicio Assistant</span>
             </div>
             <button onClick={() => setOpen(false)} aria-label="Close Chat" className="hover:bg-black/10 p-1.5 rounded-md transition-colors"><CloseIcon /></button>
          </div>
          
          <div className="p-5 flex-1 sm:h-[320px] overflow-y-auto flex flex-col gap-4">
             <div className="bg-[#FAF9F5] border border-[#dcf1fb] text-[#091e25] text-[15px] p-3.5 rounded-2xl rounded-tl-sm w-[90%] shadow-sm leading-relaxed">
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
            className="w-14 h-14 bg-[#0D8C8C] text-white rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(13,140,140,0.3)] hover:scale-105 hover:bg-[#006767] transition-all group relative z-50"
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

// --- MAIN PAGE ---
export default function ServicioLandingPage() {
  const [chatOpen, setChatOpen] = useState(false);

  // Styling Tokens
  const glassPanel = "bg-white/60 backdrop-blur-[16px] border border-[#b2dede]/50 shadow-[0_8px_32px_rgba(0,106,106,0.03)]";
  const glassPanelHover = "hover:bg-white/75 hover:backdrop-blur-[24px] hover:border-[#0D8C8C]/40 hover:shadow-[0_12px_40px_rgba(0,106,106,0.06)] transition-all duration-300";
  const btnPrimary = "bg-[#0D8C8C] text-white px-6 py-2.5 rounded-lg hover:bg-[#006767] hover:shadow-[0_4px_14px_rgba(13,140,140,0.3)] transition-all duration-300 font-medium text-sm inline-flex items-center justify-center";
  const btnGhost = "text-[#006767] px-6 py-2.5 rounded-lg border border-[#b2dede]/80 hover:bg-[#0D8C8C]/5 hover:border-[#0D8C8C]/40 transition-all duration-300 font-medium text-sm inline-flex items-center justify-center";

  return (
    <div className={`${inter.variable} ${poppins.variable} font-sans text-[#091e25] min-h-screen relative overflow-x-hidden selection:bg-[#0D8C8C]/20 selection:text-[#091e25]`}>
      <ShaderBackground />
      
      <main className="pt-16 pb-24 px-6 max-w-[1280px] mx-auto space-y-32 md:space-y-48">
        
        {/* Section 1 — Hero */}
        <section className="relative text-center flex flex-col items-center pt-10 md:pt-20">
          <FadeInSection className="max-w-4xl flex flex-col items-center">
            <h1 className="font-poppins text-[36px] md:text-[48px] font-bold leading-[1.1] md:leading-[1.2] tracking-tight text-[#091e25] mb-6">
              Philippines&apos; first AI-powered professional services marketplace.
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#3d4949] leading-[1.6] max-w-2xl mb-10">
              Connecting clients with verified Filipino professionals—from home construction to legal consultation—through secure, intelligent, and localized technology.
            </p>
            
            <div className="w-full max-w-xl relative mb-10 flex">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6d7979]">
                <SearchIcon />
              </div>
              <input 
                type="text" 
                placeholder="What service are you looking for?" 
                className="w-full bg-white/80 backdrop-blur-md border border-[#b2dede] rounded-full pl-12 pr-36 py-4 text-[15px] shadow-sm focus:outline-none focus:border-[#0D8C8C] focus:ring-2 focus:ring-[#0D8C8C]/20 transition-all placeholder:text-[#6d7979]"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <button className="bg-[#0D8C8C] text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-[#006767] transition-colors">
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className={`${btnPrimary} w-full sm:w-auto !rounded-full !px-8 !py-3.5 text-[15px]`}>Post a Job</button>
              <button className={`${btnGhost} w-full sm:w-auto !rounded-full !px-8 !py-3.5 text-[15px]`}>See How It Works</button>
            </div>
          </FadeInSection>

          <FadeInSection className="w-full mt-20 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#E8F6F6] rounded-full blur-[100px] -z-10 opacity-80" />
             <GlassImagePlaceholder className="w-full aspect-[16/9] md:aspect-[21/9] shadow-2xl" label="Interface Preview" />
          </FadeInSection>
        </section>

        {/* Section 2 — Trust Bar */}
        <FadeInSection className="flex flex-col items-center">
          <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#6d7979] mb-8">Trusted by</p>
          <div className="w-full overflow-hidden relative">
             <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FAF9F5] to-transparent z-10" />
             <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FAF9F5] to-transparent z-10" />
             <div className="flex items-center gap-12 md:gap-24 overflow-x-auto no-scrollbar justify-start md:justify-center px-8 pb-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                {/* Placeholders for logos */}
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="flex-shrink-0 font-poppins font-bold text-xl text-[#3d4949] tracking-tighter">PARTNER {i}</div>
                ))}
             </div>
          </div>
        </FadeInSection>

        {/* Section 3 — The Problem & Solution */}
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 md:gap-8 lg:gap-24 items-center">
             <div>
               <h2 className="font-poppins text-[28px] md:text-[32px] font-bold leading-tight text-[#091e25] mb-8">
                 The complexity of modern sourcing.
               </h2>
               <ul className="space-y-5 text-[16px] text-[#3d4949]">
                 <li className="flex items-start gap-4">
                   <div className="w-6 h-6 rounded-full bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center flex-shrink-0 mt-0.5"><CloseIcon /></div>
                   <span>Endless scrolling through unverified profiles</span>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="w-6 h-6 rounded-full bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center flex-shrink-0 mt-0.5"><CloseIcon /></div>
                   <span>Language barriers and mismatched expectations</span>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="w-6 h-6 rounded-full bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center flex-shrink-0 mt-0.5"><CloseIcon /></div>
                   <span>Insecure payment methods and &quot;ghosting&quot; risks</span>
                 </li>
               </ul>
             </div>
             
             <div className={`${glassPanel} rounded-3xl p-8 md:p-10 relative overflow-hidden`}>
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#E8F6F6] blur-[60px] rounded-full pointer-events-none" />
                <div className="inline-block text-[12px] font-semibold tracking-widest uppercase text-[#006767] bg-[#e4f7ff] px-3 py-1 rounded-full mb-6">
                  The Servicio Standard
                </div>
                <p className="text-[16px] md:text-[18px] text-[#091e25] font-medium leading-relaxed mb-8 relative z-10">
                  An AI-powered marketplace connecting Filipino clients with verified providers — from licensed engineers to local businesses — functioning like a booking-app experience but purpose-built for services.
                </p>
                <div className="space-y-4 text-[15px] font-medium text-[#3d4949] relative z-10">
                  <div className="flex items-center gap-3"><CheckIcon /> 1. Professional Services Marketplace</div>
                  <div className="flex items-center gap-3"><CheckIcon /> 2. AI-Powered Smart Matching</div>
                  <div className="flex items-center gap-3"><CheckIcon /> 3. Trusted & Secure Transactions</div>
                </div>
             </div>
          </div>
        </FadeInSection>

        {/* Section 4 — Service Categories */}
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-block text-[12px] font-semibold tracking-widest uppercase text-[#6d7979] mb-3">Categories</div>
            <h2 className="font-poppins text-[32px] md:text-[36px] font-bold text-[#091e25]">The Elite Tier.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className={`${glassPanel} ${glassPanelHover} rounded-2xl p-8 group cursor-pointer`}>
              <div className="w-12 h-12 rounded-xl bg-[#e4f7ff] text-[#006767] flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <h3 className="font-poppins font-bold text-[18px] text-[#091e25] mb-3">Engineering & Architecture</h3>
              <p className="text-[14px] text-[#6d7979] leading-relaxed">Structural Engineering Consultation · Architectural Drafting & Design · Civil Engineering Services</p>
            </div>
            
            {/* Category 2 */}
            <div className={`${glassPanel} ${glassPanelHover} rounded-2xl p-8 group cursor-pointer`}>
              <div className="w-12 h-12 rounded-xl bg-[#e4f7ff] text-[#006767] flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3 className="font-poppins font-bold text-[18px] text-[#091e25] mb-3">Legal Services</h3>
              <p className="text-[14px] text-[#6d7979] leading-relaxed">Contract Review & Draft · Legal Consultation · Document Notarization</p>
            </div>
            
            {/* Category 3 */}
            <div className={`${glassPanel} ${glassPanelHover} rounded-2xl p-8 group cursor-pointer`}>
              <div className="w-12 h-12 rounded-xl bg-[#e4f7ff] text-[#006767] flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <h3 className="font-poppins font-bold text-[18px] text-[#091e25] mb-3">Academic & Tutoring</h3>
              <p className="text-[14px] text-[#6d7979] leading-relaxed">Academic Research Assistance · Professional Tutoring · Technical Writing Services</p>
            </div>
            
            {/* Category 4 */}
            <div className={`${glassPanel} ${glassPanelHover} rounded-2xl p-8 group cursor-pointer`}>
              <div className="w-12 h-12 rounded-xl bg-[#e4f7ff] text-[#006767] flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className="font-poppins font-bold text-[18px] text-[#091e25] mb-3">IT & Digital</h3>
              <p className="text-[14px] text-[#6d7979] leading-relaxed">Web Development · Mobile App Development · Digital Marketing</p>
            </div>
            
            {/* Category 5 */}
            <div className={`${glassPanel} ${glassPanelHover} rounded-2xl p-8 group cursor-pointer md:col-span-2 lg:col-span-1`}>
              <div className="w-12 h-12 rounded-xl bg-[#e4f7ff] text-[#006767] flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <h3 className="font-poppins font-bold text-[18px] text-[#091e25] mb-3">Local Services</h3>
              <p className="text-[14px] text-[#6d7979] leading-relaxed">Home Repairs, Maintenance, and Installation · Event Planning & Management · Photography & Videography</p>
            </div>
          </div>
        </FadeInSection>

        {/* Section 5 — How It Works */}
        <FadeInSection id="how-it-works">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-[32px] md:text-[36px] font-bold text-[#091e25]">The Frictionless Path</h2>
          </div>
          <div className="relative">
            {/* Desktop Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#bdc9c8] to-transparent -translate-y-1/2 z-0" />
            {/* Mobile Line */}
            <div className="md:hidden absolute top-0 left-6 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#bdc9c8] to-transparent z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {[
                { n: "1", title: "Describe", desc: "Tell us in your own words. English or Tagalog." },
                { n: "2", title: "Match", desc: "Receive the top 3 matched professionals instantly." },
                { n: "3", title: "Book", desc: "Review profiles and confirm your choice." },
                { n: "4", title: "Pay", desc: "Funds held securely in escrow until completion." },
                { n: "5", title: "Rate", desc: "Confirm delivery and release payment." }
              ].map((step, idx) => (
                <div key={idx} className="flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-4 group">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white border border-[#b2dede] shadow-[0_4px_12px_rgba(0,106,106,0.08)] flex items-center justify-center font-poppins font-bold text-[#0D8C8C] text-lg group-hover:bg-[#0D8C8C] group-hover:text-white transition-colors duration-300 relative z-10">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-[18px] text-[#091e25] mb-2">{step.title}</h3>
                    <p className="text-[14px] text-[#6d7979] leading-relaxed max-w-[200px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Section 6 — AI Matching Spotlight */}
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Chat Panel visual */}
            <div className={`${glassPanel} rounded-3xl overflow-hidden`}>
              <div className="bg-white/80 border-b border-[#b2dede]/30 p-4 px-6 flex items-center gap-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#8ef3f2]"></div>
                 <span className="font-poppins font-semibold text-[14px] text-[#091e25]">Servicio AI Assistant</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex justify-end">
                  <div className="bg-[#0D8C8C] text-white text-[15px] p-4 rounded-2xl rounded-tr-sm max-w-[85%] shadow-md">
                    &quot;I need to find an architect who can help with permit requirements for a small commercial building in Makati.&quot;
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white border border-[#b2dede]/50 text-[#091e25] text-[15px] p-4 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
                    &quot;I can help with that! I found 3 licensed architects in Makati specializing in commercial permits. Should I show them to you?&quot;
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Panel */}
            <div>
              <h2 className="font-poppins text-[28px] md:text-[32px] font-bold text-[#091e25] mb-6">
                Bilingual AI, Singular Precision.
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#3d4949] leading-relaxed mb-8">
                Our custom LLM understands the nuances of Filipino professional context, from local jargon to Tagalog slang, ensuring perfect communication and matching.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-poppins font-semibold text-[16px] text-[#091e25] mb-1 flex items-center gap-2"><CheckIcon /> Perfect Job Fit</h4>
                  <p className="text-[15px] text-[#6d7979] pl-6">Instantly matches your profile with the best-fit talent for your project.</p>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-[16px] text-[#091e25] mb-1 flex items-center gap-2"><CheckIcon /> Voice Commands</h4>
                  <p className="text-[15px] text-[#6d7979] pl-6">Talk to our AI in Tagalog or English for a natural, conversational experience.</p>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-[16px] text-[#091e25] mb-1 flex items-center gap-2"><CheckIcon /> Context-Aware</h4>
                  <p className="text-[15px] text-[#6d7979] pl-6">Provides personalized assistance based on your role and current needs.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Section 7 — Verification & Trust */}
        <FadeInSection className="text-center max-w-4xl mx-auto">
           <div className="w-16 h-16 mx-auto bg-[#e4f7ff] rounded-2xl flex items-center justify-center text-[#006767] mb-8">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
           </div>
           <h2 className="font-poppins text-[32px] md:text-[36px] font-bold text-[#091e25] mb-6">
             Verified Professionals, Real Protection.
           </h2>
           <p className="text-[16px] md:text-[18px] text-[#3d4949] leading-relaxed mb-6">
             Every provider on Servicio.ai submits a government ID and, where applicable, a professional license and portfolio for review. Our admin team manually reviews every credential before a provider earns the Verified badge. Clients also confirm their phone number via OTP before their first booking.
           </p>
           <p className="text-[16px] font-semibold italic text-[#006767]">
             This isn&apos;t a hurdle for providers — it&apos;s protection for you.
           </p>
        </FadeInSection>

        {/* Section 8 — Secure Payment / Escrow & Communication */}
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className={`${glassPanel} rounded-3xl p-8 md:p-12 border-t-4 border-t-[#D97706]`}>
               <h3 className="font-poppins text-[24px] font-bold text-[#091e25] mb-4">Secured by Escrow Protection</h3>
               <p className="text-[16px] text-[#3d4949] leading-relaxed mb-8">
                 No more upfront risk. Your payment is held in a secure, PCI-compliant vault and only released once you approve the final deliverable. Zero fraud. 100% peace of mind.
               </p>
               <div className="space-y-3 font-medium text-[15px] text-[#091e25]">
                 <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#D97706]" /> Fraud Monitoring</div>
                 <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#D97706]" /> Secure Withdrawals</div>
                 <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#D97706]" /> Dispute Resolution</div>
               </div>
            </div>
            
            <div className={`${glassPanel} rounded-3xl p-8 md:p-12 border-t-4 border-t-[#006767]`}>
               <h3 className="font-poppins text-[24px] font-bold text-[#091e25] mb-4">Real-time Communication</h3>
               <p className="text-[16px] text-[#3d4949] leading-relaxed">
                 Once booked, chat directly with your provider in real time — share files, clarify scope, and track progress, all inside the app.
               </p>
               <div className="mt-8 flex justify-end opacity-50 pointer-events-none">
                 <div className="bg-[#e4f7ff] border border-[#b2dede]/50 p-4 rounded-xl rounded-br-sm w-3/4 flex items-center gap-3">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#006a6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                   <span className="text-[14px] text-[#006a6a] font-medium">project_specs.pdf attached</span>
                 </div>
               </div>
            </div>
          </div>
        </FadeInSection>

        {/* Section 9 — Real-World Proof & Local Relevance */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="font-poppins text-[32px] md:text-[36px] font-bold text-[#091e25] mb-4">Quality Delivered</h2>
            <p className="text-[16px] md:text-[18px] text-[#6d7979]">Exceptional work from our verified professionals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <GlassImagePlaceholder className="w-full aspect-[4/5]" label="IMAGE 01" />
              <GlassImagePlaceholder className="w-full aspect-[4/3]" label="IMAGE 02" />
            </div>
            <div className="space-y-6 md:mt-12">
              <GlassImagePlaceholder className="w-full aspect-[3/4]" label="IMAGE 03" />
              <GlassImagePlaceholder className="w-full aspect-square" label="IMAGE 04" />
            </div>
            <div className="space-y-6">
              <GlassImagePlaceholder className="w-full aspect-[2/3]" label="IMAGE 05" />
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-[18px] md:text-[20px] font-poppins font-semibold text-[#006767]">
               Built for the Philippines, in English and Tagalog — from Metro Manila to every barangay beyond.
             </p>
          </div>
        </FadeInSection>

        {/* Section 10 — Mission Statement & Final CTA */}
        <FadeInSection className="text-center max-w-4xl mx-auto pb-12">
          <div className={`${glassPanel} rounded-3xl p-10 md:p-20 relative overflow-hidden`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#E8F6F6] blur-[80px] rounded-full -z-10 opacity-70" />
            <h2 className="font-poppins text-[36px] md:text-[44px] font-bold text-[#091e25] mb-6 tracking-tight relative z-10">
              Ready to elevate your project?
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#3d4949] leading-relaxed mb-6 max-w-2xl mx-auto relative z-10">
              Join the marketplace where technical excellence meets AI-driven speed. Experience the future of professional services in the Philippines.
            </p>
            <p className="text-[15px] font-medium text-[#006767] mb-10 relative z-10">
              Empower users with a smart, secure, and accessible marketplace for professional services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 relative z-10">
              <button className={`${btnPrimary} w-full sm:w-auto !rounded-full !px-10 !py-4 text-[16px]`}>Post a Job</button>
              <button className={`${btnGhost} w-full sm:w-auto !rounded-full !px-10 !py-4 text-[16px]`}>Become a Partner</button>
            </div>
            <p className="text-[13px] font-semibold tracking-wide uppercase text-[#6d7979] relative z-10">
              Verified professionals. Escrow-protected payments. Every time.
            </p>
          </div>
        </FadeInSection>
      </main>

      {/* Section 11 — Footer */}
      <footer className="bg-white/40 backdrop-blur-lg border-t border-[#b2dede]/50 py-12 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-center md:text-left">
             <div className="font-poppins font-bold text-xl text-[#006767] mb-2">Servicio.ai</div>
             <div className="text-[14px] text-[#6d7979]">© 2026 Servicio.ai, High-Tier Professional Marketplace.</div>
           </div>
           <div className="flex flex-wrap justify-center gap-6 text-[14px] font-medium text-[#3d4949]">
             <a href="#" className="hover:text-[#0D8C8C] transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-[#0D8C8C] transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-[#0D8C8C] transition-colors">Escrow Protection</a>
             <a href="#" className="hover:text-[#0D8C8C] transition-colors">Help Center</a>
           </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <div className="hidden sm:block">
        <ChatWidget open={chatOpen} setOpen={setChatOpen} />
      </div>
      <div className="sm:hidden">
        {/* Render Mobile Chatbot */}
        <ChatWidget open={chatOpen} setOpen={setChatOpen} />
      </div>
    </div>
  );
}
