import React, { useState } from 'react';
import { submitContactInquiry } from '../services/api';
import { Mail, Phone, MapPin, Copy, Check, Terminal, ArrowRight, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [statusMsg, setStatusMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('amruthvarunpyla@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919052926058');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCliAction = (action) => {
    if (action === 'ping') {
      alert('Pong! Pyla Amruth Varun is online and ready for robotics engineering inquiries.');
    } else if (action === 'contact') {
      alert('Contact Document:\n{\n  "email": "amruthvarunpyla@gmail.com",\n  "phone": "+91 9052926058",\n  "location": "Visakhapatnam, AP"\n}');
    } else if (action === 'linkedin') {
      window.open('https://linkedin.com/in/pyla-amruth-varun-33b938251', '_blank');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg('');

    const res = await submitContactInquiry(formData);
    setSubmitting(false);
    if (res && res.success) {
      setStatusMsg(res.message || 'Inquiry payload received! Pyla Amruth Varun will contact you shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatusMsg('Failed to submit message. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-20 max-w-7xl mx-auto px-6">
      
      {/* Contact Banner Header */}
      <div className="folio-card p-8 sm:p-12 mb-12 bg-gradient-to-r from-[#FF5722]/20 via-[#0E131F] to-[#00F2FE]/20 border border-[#FF5722]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-[#FF5722] uppercase tracking-widest block mb-2">
            // Get In Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Contact
          </h2>
        </div>
        <p className="text-slate-300 text-sm sm:text-base max-w-md font-light">
          Let's build something great together — start the conversation today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Info & CLI Actions */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="font-mono text-xs text-[#FF5722] uppercase tracking-widest block mb-2">
              Contact Me
            </span>
            <h3 className="font-heading text-2xl font-bold text-white mb-3">
              Let's Create Something Meaningful
            </h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Whether you're starting from scratch or need a hardware redesign, I'm here to help bring your vision to life.
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs sm:text-sm">
            {/* Email Box */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#07090E] border border-white/10 hover:border-[#FF5722]/40 transition-colors">
              <div className="flex items-center gap-3 text-slate-200 min-w-0">
                <Mail className="w-4 h-4 text-[#FF5722] shrink-0" />
                <span className="truncate">amruthvarunpyla@gmail.com</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="text-[#FF5722] hover:underline flex items-center gap-1 font-bold shrink-0 ml-2"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedEmail ? 'Copied' : 'Copy'}
              </button>
            </div>

            {/* Phone Box */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#07090E] border border-white/10 hover:border-[#FF5722]/40 transition-colors">
              <div className="flex items-center gap-3 text-slate-200">
                <Phone className="w-4 h-4 text-[#FF5722] shrink-0" />
                <span>+91 9052926058</span>
              </div>
              <button
                onClick={handleCopyPhone}
                className="text-[#FF5722] hover:underline flex items-center gap-1 font-bold shrink-0 ml-2"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedPhone ? 'Copied' : 'Copy'}
              </button>
            </div>

            {/* Location Box */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#07090E] border border-white/10">
              <div className="flex items-center gap-3 text-slate-200">
                <MapPin className="w-4 h-4 text-[#00F2FE] shrink-0" />
                <span>Visakhapatnam, AP, India</span>
              </div>
              <span className="text-[#00F2FE] font-semibold">📍 Location</span>
            </div>
          </div>

          {/* CLI Buttons */}
          <div className="pt-2">
            <span className="font-mono text-xs text-slate-500 block mb-2">CLI Quick Actions:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCliAction('ping')}
                className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#07090E] border border-white/10 text-emerald-400 hover:border-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" />
                $ ping amruth
              </button>
              <button
                onClick={() => handleCliAction('contact')}
                className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#07090E] border border-white/10 text-emerald-400 hover:border-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" />
                $ cat contact.json
              </button>
              <button
                onClick={() => handleCliAction('linkedin')}
                className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#07090E] border border-white/10 text-emerald-400 hover:border-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" />
                $ open linkedin
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="folio-card p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-slate-400 block mb-1.5">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full bg-[#07090E] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FF5722] transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-slate-400 block mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@company.com"
                  className="w-full bg-[#07090E] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FF5722] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-xs text-slate-400 block mb-1.5">Subject *</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Hardware Engineering Role Inquiry"
                className="w-full bg-[#07090E] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FF5722] transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-xs text-slate-400 block mb-1.5">Message *</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your project details or opportunity description..."
                className="w-full bg-[#07090E] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FF5722] transition-colors resize-none"
              ></textarea>
            </div>

            {statusMsg && (
              <div className="p-4 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 font-mono text-xs text-[#FF5722]">
                {statusMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="btn-folio w-full font-mono text-xs px-6 py-4 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {submitting ? 'Transmitting to Express REST API...' : 'Submit Message Payload'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
