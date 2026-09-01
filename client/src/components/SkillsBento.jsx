import React from 'react';
import { Box, Cpu, Wrench, Code, ArrowUpRight } from 'lucide-react';

export default function SkillsBento() {
  const services = [
    {
      num: "01",
      title: "3D CAD & Sheet Metal DFM",
      desc: "Parametric solid & surface modeling in CATIA V5 and SolidWorks. Engineered IP65 EV charging enclosures and simplified assembly DFM.",
      icon: Box,
      accent: "text-[#FF5722]",
      badgeBg: "bg-[#FF5722]/15 border-[#FF5722]/30",
      skills: ["CATIA V5", "SolidWorks", "AutoCAD", "Sheet Metal DFM"]
    },
    {
      num: "02",
      title: "Robotics & Kinematic Solvers",
      desc: "Forward and inverse kinematic mathematical solvers for spatial RPR manipulators and modular harmonic drive cobot joint structures.",
      icon: Cpu,
      accent: "text-[#00F2FE]",
      badgeBg: "bg-[#00F2FE]/15 border-[#00F2FE]/30",
      skills: ["MATLAB Simulink", "RoboAnalyzer", "Kinematics", "Harmonic Drives"]
    },
    {
      num: "03",
      title: "Additive Prototyping & CNC",
      desc: "Rapid SLA/FDM 3D printing fit verification for medical tools and Siemens/APSSDC certified CNC programming & toolpathing.",
      icon: Wrench,
      accent: "text-indigo-400",
      badgeBg: "bg-indigo-500/15 border-indigo-500/30",
      skills: ["3D Printing (FDM/SLA)", "CNC Programming", "Siemens Certified"]
    },
    {
      num: "04",
      title: "Industrial Line Automation",
      desc: "Montratec shuttle conveyor simulation and floor deployment layout drafting in AutoCAD for QFN IC semiconductor packaging lines.",
      icon: Code,
      accent: "text-emerald-400",
      badgeBg: "bg-emerald-500/15 border-emerald-500/30",
      skills: ["Montratec Simulation", "AutoCAD Layouts", "Python Scripting"]
    }
  ];

  return (
    <section id="stack" className="relative py-20 max-w-7xl mx-auto px-6">
      
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div>
          <span className="font-mono text-xs text-[#FF5722] uppercase tracking-widest block mb-2">
            // Engineering Capabilities
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            What I Can Help You With
          </h2>
        </div>
        <p className="text-slate-300 text-sm max-w-md font-light">
          From 3D CAD modeling to physical additive prototypes and kinematic validation, I deliver end-to-end mechanical solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((srv, idx) => {
          const IconComp = srv.icon;
          return (
            <div
              key={idx}
              className="folio-card p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className={`font-mono text-sm font-bold px-3 py-1 rounded-full border ${srv.badgeBg} ${srv.accent}`}>
                    {srv.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-[#FF5722] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-[#FF5722] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {srv.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {srv.skills.map((sk, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
