"use client";

import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, MapPin, Phone, Building2, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'General Inquiries',
    subsidiary: 'HYCO Group',
    message: '',
    company_website: '', // honeypot
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `[${formData.department} | ${formData.subsidiary}] ${formData.message}`,
          source: `Contact Page (${formData.department})`,
          company_website: formData.company_website,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        department: 'General Inquiries',
        subsidiary: 'HYCO Group',
        message: '',
        company_website: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again or email us directly.');
    }
  };

  return (
    <div className="w-full bg-white text-slate-900 pt-12 pb-28">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono font-bold text-[#0F3383] uppercase tracking-widest">Contact &amp; Inquiries</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">HYCO Group</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-slate-950 tracking-tight mb-6">
              Connect With The Group.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              Direct channels for institutional investors, commercial enterprise partners, verified talent, media representatives, and subsidiary stakeholders across Southeast Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Two Columns */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Headquarters & Department Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#0F3383] text-white flex items-center justify-center shrink-0">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-serif text-slate-950">Corporate Headquarters</h3>
                  <p className="text-xs text-slate-500 font-mono">Pasig City, Metro Manila, Philippines</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#0F3383] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Registered Office</strong>
                    <span>Ortigas Center, Pasig City, Metro Manila 1605, Philippines</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#0F3383] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Business Hours</strong>
                    <span>Monday – Friday: 9:00 AM – 6:00 PM PHT (UTC+8)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-[#0F3383] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Regulatory Disclosures</strong>
                    <span>Registered Domestic Entity in Good Standing with SEC PH</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Directory */}
            <div className="border border-slate-200 p-8 rounded-xl bg-white shadow-sm space-y-6">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#0F3383]">
                Official Communication Channel
              </h3>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/80 space-y-3">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Primary Email</div>
                <a
                  href="mailto:contact@hyco.ltd"
                  className="inline-block text-lg font-bold text-[#0F3383] hover:underline"
                >
                  contact@hyco.ltd
                </a>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  All correspondence — including institutional partnerships, venture inquiries, media requests, and data protection matters — are monitored and routed directly through our central desk.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="p-2.5 bg-slate-50 rounded border border-slate-100">
                  <span className="font-semibold text-slate-900 block">Partnerships</span>
                  Servicio, ElectrifAI, LeasifAI, BerdEV
                </div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-100">
                  <span className="font-semibold text-slate-900 block">Governance &amp; DPO</span>
                  RA 10173 &amp; Legal Compliance
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-950 mb-2">
                Submit an Official Inquiry
              </h2>
              <p className="text-sm text-slate-600 mb-8 font-light leading-relaxed">
                Please complete the form below. Inquiries are processed and routed with a target response SLA of 24–48 business hours.
              </p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-blue-50 border border-blue-200 rounded-xl text-center space-y-4"
                >
                  <div className="w-14 h-14 bg-[#0F3383] text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 font-serif">Inquiry Transmitted Successfully</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to HYCO Group. Your message has been logged in our corporate ticketing system and routed to the designated division.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 bg-[#0F3383] hover:bg-[#1A46B0] text-white text-xs font-bold uppercase tracking-widest rounded transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company_website">Website</label>
                    <input
                      id="company_website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.company_website}
                      onChange={(e) => setFormData({ ...formData, company_website: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Juan dela Cruz"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0F3383] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Official Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0F3383] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Department / Routing
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0F3383] transition-colors"
                      >
                        <option value="General Inquiries">General Executive Inquiries</option>
                        <option value="Investor Relations">Investor Relations &amp; LP Desk</option>
                        <option value="Commercial Enterprise">Commercial Enterprise Partnerships</option>
                        <option value="Talent & Careers">Executive Talent &amp; Engineering</option>
                        <option value="Press & Media">Media &amp; Communications</option>
                        <option value="Legal & Privacy">Compliance &amp; Data Privacy</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Subsidiary / Venture Focus
                      </label>
                      <select
                        value={formData.subsidiary}
                        onChange={(e) => setFormData({ ...formData, subsidiary: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0F3383] transition-colors"
                      >
                        <option value="HYCO Group">HYCO Group (Holding Entity)</option>
                        <option value="Servicio.AI">Servicio.AI (Flagship Marketplace)</option>
                        <option value="ElectrifAI PH">ElectrifAI PH (Smart Energy &amp; Hardware)</option>
                        <option value="LeasifAI">LeasifAI (Commercial Real Estate)</option>
                        <option value="BerdEV">BerdEV (EV Mobility &amp; Charging)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Inquiry Narrative <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please summarize your inquiry, scope of partnership, or required engagement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0F3383] transition-colors resize-y"
                    ></textarea>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-500 leading-relaxed">
                    By submitting this inquiry, you confirm that the provided information is accurate and consent to its processing strictly for evaluation and response in accordance with the <Link href="/privacy-policy" className="text-[#0F3383] font-bold underline">Philippine Data Privacy Act of 2012 (RA 10173)</Link>.
                  </div>

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-start gap-2">
                      <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-[#0F3383] hover:bg-[#1A46B0] text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-900/10 hover:shadow-blue-900/25 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Corporate Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
