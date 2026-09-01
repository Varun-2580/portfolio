import React from 'react';
import { GraduationCap, Award, Trophy, Check, ArrowRight } from 'lucide-react';

export default function EducationBento() {
  return (
    <section className="relative py-20 max-w-7xl mx-auto px-6">
      
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="font-mono text-xs text-[#FF5722] uppercase tracking-widest block mb-2">
          // Academic & Credentials
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
          Education & Certifications
        </h2>
        <p className="text-slate-300 text-sm mt-3 font-light">
          Formal engineering degree, industry verified Siemens CNC certification, and sports leadership background.
        </p>
      </div>

      {/* 3 Vertical Pricing-Style Cards (Matching Reference Image Top-Right) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        {/* Card 1: Degree */}
        <div className="folio-card p-8 flex flex-col justify-between relative">
          <div>
            <span className="font-mono text-xs text-slate-400 block mb-2">Formal Education</span>
            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              B.Tech Degree
            </h3>
            <p className="font-mono text-xs text-[#00F2FE] mb-6 font-semibold">
              Mechanical Robotics Engineering
            </p>

            <div className="font-heading text-3xl font-extrabold text-white mb-6">
              2021 – 2025
            </div>

            <ul className="space-y-3 font-mono text-xs text-slate-300 mb-8 border-t border-white/10 pt-6">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00F2FE]" />
                Gayatri Vidya Parishad College
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00F2FE]" />
                3D CAD & Kinematics Major
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00F2FE]" />
                Automation Systems Focus
              </li>
            </ul>
          </div>

          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full font-mono text-xs font-semibold py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white text-white transition-all text-center block"
          >
            View Academic Credentials
          </a>
        </div>

        {/* Card 2: Featured Certifications (Highlighted Orange Card) */}
        <div className="folio-card p-8 flex flex-col justify-between relative border-2 border-[#FF5722] shadow-[0_0_40px_rgba(255,87,34,0.3)] bg-gradient-to-b from-[#FF5722]/10 to-[#0E131F]">
          
          {/* Featured Pill Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-mono text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FF5722] text-white shadow-md">
            Verified Industry Credentials
          </div>

          <div>
            <span className="font-mono text-xs text-[#FF5722] block mb-2 mt-2">Certifications</span>
            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              CNC & Python
            </h3>
            <p className="font-mono text-xs text-[#FF5722] mb-6 font-semibold">
              Siemens & APSSDC Certified
            </p>

            <div className="font-heading text-3xl font-extrabold text-white mb-6">
              Certified
            </div>

            <ul className="space-y-3 font-mono text-xs text-slate-200 mb-8 border-t border-white/10 pt-6">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                <span><strong>Siemens CNC Training:</strong> Certified by APSSDC</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                <span><strong>Python Programming:</strong> Automation & Scripting</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                <span><strong>DFM & CNC Toolpathing:</strong> Precision Manufacturing</span>
              </li>
            </ul>
          </div>

          <a
            href="#contact"
            className="btn-folio w-full font-mono text-xs py-3.5 text-center flex items-center justify-center gap-2"
          >
            Verify Credentials
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Card 3: Leadership */}
        <div className="folio-card p-8 flex flex-col justify-between relative">
          <div>
            <span className="font-mono text-xs text-slate-400 block mb-2">Extracurricular</span>
            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              Leadership
            </h3>
            <p className="font-mono text-xs text-indigo-400 mb-6 font-semibold">
              Basketball Team Captain
            </p>

            <div className="font-heading text-3xl font-extrabold text-white mb-6">
              Champions
            </div>

            <ul className="space-y-3 font-mono text-xs text-slate-300 mb-8 border-t border-white/10 pt-6">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-400" />
                MRB Basketball Team Captain
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-400" />
                Annual Cup Champions
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-400" />
                Team Strategy & Athletics
              </li>
            </ul>
          </div>

          <div className="w-full font-mono text-xs font-semibold py-3.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-center">
            🏆 Annual Cup Winners
          </div>
        </div>

      </div>
    </section>
  );
}
