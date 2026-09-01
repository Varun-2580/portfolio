import React from 'react';
import { Download, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 py-5 px-6 backdrop-blur-xl bg-[#07090E]/85 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand logo */}
        <a href="#" className="flex items-center gap-2.5 font-heading font-extrabold text-lg tracking-tight text-white group">
          <img src="/logo.svg" alt="Varun Robotics Logo" className="w-8 h-8 rounded-lg shadow-[0_0_15px_rgba(255,87,34,0.5)] group-hover:scale-105 transition-transform" />
          <span>varun<span className="text-[#FF5722]">//</span>robotics</span>
        </a>

        {/* Center Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] px-4 py-2 rounded-full border border-white/[0.08] backdrop-blur-md">
          <a
            href="#"
            className="font-mono text-xs text-slate-300 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all"
          >
            Home
          </a>
          <a
            href="#about"
            className="font-mono text-xs text-slate-300 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all"
          >
            About
          </a>
          <a
            href="#stack"
            className="font-mono text-xs text-slate-300 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all"
          >
            Tooling
          </a>
          <a
            href="#projects"
            className="font-mono text-xs text-slate-300 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="font-mono text-xs text-slate-300 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="font-mono text-xs text-slate-300 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-semibold px-4 py-2.5 rounded-full border border-white/15 text-slate-200 hover:border-[#FF5722] hover:text-white transition-all flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5 text-[#FF5722]" />
            <span className="hidden sm:inline">Download</span> CV
          </a>
          <a
            href="#contact"
            className="btn-folio font-mono text-xs px-5 py-2.5 flex items-center gap-2"
          >
            Get in Touch
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </a>
        </div>

      </div>
    </header>
  );
}
