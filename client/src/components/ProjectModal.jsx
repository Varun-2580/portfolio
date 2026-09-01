import React from 'react';
import { X, CheckCircle, ExternalLink, Github } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-card rounded-2xl max-w-2xl w-full p-8 relative border border-cyanAccent/40 shadow-[0_0_30px_rgba(0,242,254,0.15)] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-indigoAccent/20 text-indigoAccent border border-indigoAccent/30 inline-block mb-3">
          {project.category}
        </span>

        <h2 className="font-heading text-2xl font-bold text-white mb-4">
          {project.title}
        </h2>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.fullDescription || project.shortDescription}
        </p>

        {project.keyOutcomes && project.keyOutcomes.length > 0 && (
          <div className="mb-6">
            <h4 className="font-mono text-xs text-cyanAccent uppercase tracking-widest mb-3">
              Key Outcomes & Deliverables
            </h4>
            <div className="space-y-2">
              {project.keyOutcomes.map((out, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyanAccent shrink-0 mt-0.5" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <h4 className="font-mono text-xs text-cyanAccent uppercase tracking-widest mb-3">
            Tools & Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.toolsUsed &&
              project.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-3 py-1 rounded bg-cyanAccent/10 text-cyanAccent border border-cyanAccent/20"
                >
                  {tool}
                </span>
              ))}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-4 py-2 rounded-md bg-white/5 border border-white/10 hover:border-cyanAccent text-white flex items-center gap-2"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub Repository
            </a>
          )}
          {project.links?.cadLibrary && (
            <a
              href={project.links.cadLibrary}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-4 py-2 rounded-md bg-cyanAccent/10 border border-cyanAccent/30 text-cyanAccent flex items-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              CAD Model Library
            </a>
          )}
          <button
            onClick={onClose}
            className="font-mono text-xs px-4 py-2 rounded-md bg-slateSurface border border-white/10 text-slate-300 ml-auto hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
