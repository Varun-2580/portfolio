import React from 'react';
import { ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 max-w-7xl mx-auto px-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading & Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#FF5722] uppercase tracking-widest">
            <UserCheck className="w-4 h-4" />
            // About The Engineer
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Designer. Strategist. <br />
            <span className="gradient-text-orange">Robotics Partner.</span>
          </h2>

          <p className="text-slate-300 text-base leading-relaxed font-light">
            I am a Mechanical & Robotics Engineer passionate about building clean, functional hardware interfaces and automated mechanisms that solve complex physical challenges.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-[#FF5722] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">EV Charging Infrastructure:</strong> Engineered IP65 weather-resistant enclosures, internal thermal airflow pathways, and DFM sheet metal assemblies at DJT EV POWERTECH.
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-[#00F2FE] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Kinematic Workspace Solvers:</strong> Formulated forward/inverse kinematic mathematical solvers in MATLAB Simulink and RoboAnalyzer for 3-DOF manipulators and cobots.
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Additive Prototyping & Medical CAD:</strong> Modeled multi-axis articulating laparoscopic instruments in CATIA V5 with 3D printed physical clearance validation at Hunumax Technologies.
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="#contact"
              className="btn-folio font-mono text-xs px-6 py-3.5 inline-flex items-center gap-2"
            >
              Let's Discuss Hardware Requirements
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Persona Card */}
        <div className="lg:col-span-5">
          <div className="folio-card p-8 relative overflow-hidden text-center space-y-6">
            
            {/* Ambient Image Gradient Box */}
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-[#FF5722] to-[#00F2FE] p-1 shadow-[0_0_40px_rgba(255,87,34,0.3)]">
              <div className="w-full h-full rounded-full bg-[#07090E] flex items-center justify-center font-heading text-4xl font-extrabold text-white">
                PV
              </div>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold text-white">Pyla Amruth Varun</h3>
              <p className="font-mono text-xs text-[#FF5722] mt-1">Mechanical & Robotics Engineer</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs text-slate-300 text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Degree:</span>
                <span className="text-white font-semibold">B.Tech Mechanical Robotics</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Institution:</span>
                <span className="text-white">GVPCE (2021-2025)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="text-emerald-400 font-semibold">Visakhapatnam, AP</span>
              </div>
            </div>

            <div className="font-mono text-xs text-slate-400">
              Siemens & APSSDC Certified CNC Specialist
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
