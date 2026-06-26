import { ArrowLeft, BookOpen, Layers, Users } from 'lucide-react';
import Link from 'next/link';

export default function Edugaite() {
  return (
    <div className="bg-hyco-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hyco-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-hyco-black/90 z-10"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="Edugaite Background" className="w-full h-full object-cover opacity-40 grayscale" />
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-20">
          <Link href="/#portfolio" className="inline-flex items-center text-hyco-light-gray hover:text-white mb-12 text-sm font-bold tracking-widest uppercase transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-hyco-blue text-white flex items-center justify-center mr-6">
              <BookOpen size={32} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">Edugaite</h1>
          </div>
          
          <p className="text-xl md:text-3xl text-gray-300 font-light max-w-3xl leading-relaxed">
            K-12 EdTech platform streamlining workflows with AI-powered lesson plans, quizzes, and grading for educators.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-hyco-black mb-6 uppercase tracking-tight">AI-Powered Education</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                Edugaite empowers K-12 teachers by automating administrative tasks and lesson generation. Through targeted AI integration, we reduce teacher burnout and enhance educational outcomes across the Philippine educational system.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <div className="p-8 border border-gray-200 hover:border-hyco-blue transition-colors">
                  <Layers className="text-hyco-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold text-hyco-black mb-3">Lesson Generation</h3>
                  <p className="text-gray-600 font-light">Automated creation of comprehensive lesson plans, quizzes, and grading rubrics tailored to curriculum standards.</p>
                </div>
                <div className="p-8 border border-gray-200 hover:border-hyco-blue transition-colors">
                  <Users className="text-hyco-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold text-hyco-black mb-3">Teacher Network</h3>
                  <p className="text-gray-600 font-light">A collaborative platform where educators share insights, resources, and best practices seamlessly.</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-hyco-light-gray p-8 border border-gray-200">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">At a Glance</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Sector</div>
                    <div className="font-bold text-hyco-black">Education Technology</div>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Target Market</div>
                    <div className="font-bold text-hyco-black">K-12 Educators</div>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Technology</div>
                    <div className="font-bold text-hyco-black">LLM Workflows & SaaS</div>
                  </div>
                </div>
                
                <button className="w-full mt-8 bg-hyco-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-hyco-blue transition-colors">
                  Access Platform
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
