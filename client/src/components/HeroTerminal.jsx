import React, { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, Printer, Code2, Copy, Check, Terminal, Sparkles } from 'lucide-react';

export default function HeroTerminal() {
  const [typedLines, setTypedLines] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const lines = [
      { text: 'engineer.loadProfile("Pyla Amruth Varun")', type: 'cmd' },
      { text: 'Loading core mechanical & kinematics modules...', type: 'info' },
      { text: 'specialization: ["3D CAD", "EV Enclosures", "Kinematics"]', type: 'data' },
      { text: 'current_role: "Design Engineer @ DJT EV POWERTECH"', type: 'data' },
      { text: 'education: "B.Tech Mechanical Robotics (2021-2025)"', type: 'data' },
      { text: 'status: "AVAILABLE FOR ROBOTICS & AUTOMATION ROLES"', type: 'success' }
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < lines.length) {
        const item = lines[current];
        if (item) {
          setTypedLines((prev) => [...prev, item]);
        }
        current++;
      } else {
        clearInterval(interval);
      }
    }, 380);

    return () => clearInterval(interval);
  }, []);

  const handleCopyCode = () => {
    const codeText = typedLines.map(l => l.text).join('\n');
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 max-w-7xl mx-auto px-6 overflow-hidden">
      
      {/* Background Glow Overlay */}
      <div className="ambient-glow-orange top-0 left-[-150px]" />
      <div className="ambient-glow-cyan top-40 right-[-150px]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Headline Column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Greeting Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 font-mono text-xs">
            <span className="text-[#FF5722] font-semibold">Hey, I'm a</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
            <span>Robotics Hardware Specialist</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12] text-white">
            Mechanical & <br />
            <span className="gradient-text-orange">Robotics Engineer</span>
          </h1>

          {/* Subtitle Statement */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-light">
            Specializing in mechanical CAD design, robotic kinematics, motion simulation, and DFM sheet metal enclosures for industrial automation.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="btn-folio font-mono text-xs px-6 py-3.5 flex items-center gap-2.5"
            >
              Explore Featured Projects
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </a>

            <a
              href="https://linkedin.com/in/pyla-amruth-varun-33b938251"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-semibold px-5 py-3.5 rounded-full border border-white/15 text-white hover:border-[#FF5722] hover:text-[#FF5722] transition-all flex items-center gap-2"
            >
              LinkedIn Profile
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-semibold px-5 py-3.5 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Printer className="w-3.5 h-3.5 text-[#00F2FE]" />
              PDF Resume
            </a>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-lg">
            <div>
              <div className="font-heading text-2xl font-bold text-white">01</div>
              <div className="font-mono text-[11px] text-slate-400">Brand Strategy</div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-[#FF5722]">IP65</div>
              <div className="font-mono text-[11px] text-slate-400">EV Enclosures</div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-[#00F2FE]">3 DOF</div>
              <div className="font-mono text-[11px] text-slate-400">Kinematic Analysis</div>
            </div>
          </div>

        </div>

        {/* Right Column: VS Code IDE Card */}
        <div className="lg:col-span-5 w-full">
          <div className="folio-card p-0 overflow-hidden shadow-2xl">
            
            {/* Header Bar */}
            <div className="bg-[#0A0D14] px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>

              <div className="font-mono text-xs text-[#FF5722] flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                <Terminal className="w-3 h-3 text-[#FF5722]" />
                varun_profile.ts
              </div>

              <button
                onClick={handleCopyCode}
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-mono text-xs"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs space-y-2 bg-[#0B0F19] text-slate-300 min-h-[260px] overflow-x-auto">
              {typedLines.map((line, i) => {
                if (!line) return null;
                return (
                  <div key={i} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-slate-600 select-none text-[10px] w-3 text-right pt-0.5">{i + 1}</span>
                    <div className="flex-1">
                      {line.type === 'cmd' && (
                        <div>
                          <span className="text-[#FF5722] font-bold mr-1.5">&gt;</span>
                          <span className="text-white">{line.text}</span>
                        </div>
                      )}
                      {line.type === 'info' && (
                        <div className="text-slate-500">// {line.text}</div>
                      )}
                      {line.type === 'data' && (
                        <div>
                          <span className="text-indigo-400">{line.text.split(':')[0]}:</span>
                          <span className="text-emerald-400">{line.text.split(':').slice(1).join(':')}</span>
                        </div>
                      )}
                      {line.type === 'success' && (
                        <div className="text-[#00F2FE] font-semibold">✔ {line.text}</div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="flex items-center gap-2 text-[#FF5722] pt-2">
                <span className="w-2 h-3.5 bg-[#FF5722] animate-pulse" />
                <span className="text-[11px] font-mono text-slate-500">// System ready for hardware deployment</span>
              </div>
            </div>

            {/* Footer Bar */}
            <div className="bg-[#07090E] px-4 py-2.5 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span className="text-emerald-400">● Express API Active</span>
              <span className="text-slate-500">CATIA V5 Engine</span>
            </div>

          </div>
        </div>

      </div>

      {/* Tech Stack Logo Ticker Bar (Bottom of Hero in Reference Image) */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 opacity-80">
        <div className="font-mono text-xs text-slate-500 uppercase tracking-widest">Core Tooling Stack:</div>
        <div className="flex flex-wrap items-center gap-8 font-mono text-xs font-semibold text-slate-300">
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FF5722]" /> CATIA V5</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#00F2FE]" /> SolidWorks</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400" /> AutoCAD</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400" /> MATLAB Simulink</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400" /> 3D Printing (FDM/SLA)</span>
        </div>
      </div>

    </section>
  );
}
