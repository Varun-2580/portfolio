import React from 'react';
import { Briefcase, Calendar, MapPin, Award, ArrowUpRight } from 'lucide-react';

export default function ExperienceTimeline() {
  const experiences = [
    {
      year: "2025 – Present",
      role: "Design Engineer",
      company: "DJT EV POWERTECH",
      tag: "Featured Role",
      accent: "border-[#FF5722] text-[#FF5722]",
      badgeBg: "bg-[#FF5722]/15 text-[#FF5722] border-[#FF5722]/30",
      description: "Leading mechanical design for high-power DC fast EV charging enclosures in CATIA V5 (IP65 weatherproofing, DFM). Simulating Montratec conveyor systems for QFN packaging lines.",
      highlights: ["IP65 Weatherproof Enclosures", "Montratec Conveyor Flow Simulation", "AutoCAD Deployment Blueprinting"]
    },
    {
      year: "2024 – 2025",
      role: "Engineering Intern",
      company: "Hunumax Technologies",
      tag: "Biomedical & AGVs",
      accent: "border-[#00F2FE] text-[#00F2FE]",
      badgeBg: "bg-[#00F2FE]/15 text-[#00F2FE] border-[#00F2FE]/30",
      description: "Modeled multi-axis articulating laparoscopic surgical instruments in CATIA V5. Fabricated SLA 3D printed physical clearance fit verification models and AGV drive-unit test fixtures.",
      highlights: ["Laparoscopic Articulating Tool", "SLA Additive Fit Verification", "AGV Kinematic Simulations"]
    },
    {
      year: "2024",
      role: "Robotics Intern",
      company: "Dreambots",
      tag: "Cobot Kinematics",
      accent: "border-indigo-400 text-indigo-400",
      badgeBg: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
      description: "Designed modular cobot arm joint assemblies featuring zero-backlash harmonic drive gearboxes. Executed mathematical kinematic workspace reach analysis.",
      highlights: ["Harmonic Drive Joint Modules", "Workspace Reach Envelopes", "Singularity Avoidance Solvers"]
    }
  ];

  return (
    <section id="experience" className="relative py-20 max-w-7xl mx-auto px-6">
      
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#FF5722] uppercase tracking-widest mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            // Career Milestones
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Proud Moments, Shared Success
          </h2>
        </div>
        <p className="text-slate-300 text-sm max-w-md font-light">
          A summary of industry impact across EV charging infrastructure, medical robotics, and collaborative automation.
        </p>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="folio-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
          >
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full border ${exp.badgeBg}`}>
                  {exp.tag}
                </span>
                <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.year}
                </span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-white group-hover:text-[#FF5722] transition-colors">
                {exp.role} <span className="text-[#FF5722]">@ {exp.company}</span>
              </h3>

              <p className="text-slate-300 text-sm font-light max-w-3xl leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.highlights.map((h, hIdx) => (
                  <span
                    key={hIdx}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="font-mono text-xl font-extrabold text-white/40 group-hover:text-white transition-colors shrink-0">
              {exp.year.split('–')[0].trim()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
