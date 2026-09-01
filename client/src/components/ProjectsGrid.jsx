import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';
import { ArrowUpRight, Filter, Layers, FolderGit2 } from 'lucide-react';

export default function ProjectsGrid({ onSelectProject }) {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Robotics', 'CAD/DFM', 'Automation', 'Biomedical', 'Avionics'];

  useEffect(() => {
    loadProjects(activeCategory);
  }, [activeCategory]);

  const loadProjects = async (cat) => {
    setLoading(true);
    const res = await fetchProjects(cat);
    if (res && res.data) {
      setProjects(res.data);
    }
    setLoading(false);
  };

  return (
    <section id="projects" className="relative py-20 max-w-7xl mx-auto px-6">
      
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div>
          <span className="font-mono text-xs text-[#FF5722] uppercase tracking-widest block mb-2">
            // Selected Work & Case Studies
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Latest Projects & Engineering
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-white/[0.04] p-1.5 rounded-full border border-white/[0.08]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-4 py-2 rounded-full transition-all ${
                activeCategory === cat
                  ? 'btn-folio font-semibold shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <div className="text-center py-20 font-mono text-sm text-[#FF5722] animate-pulse flex items-center justify-center gap-2">
          <Layers className="w-4 h-4 animate-spin" />
          Retrieving projects from MongoDB Atlas...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj._id}
              onClick={() => onSelectProject(proj)}
              className="folio-card p-7 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Header Badge & Action */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FF5722]/15 text-[#FF5722] border border-[#FF5722]/30">
                    {proj.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-[#FF5722] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#FF5722] transition-colors">
                  {proj.title}
                </h3>

                <p className="text-slate-300 text-sm mb-6 leading-relaxed font-light">
                  {proj.shortDescription}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4 pt-4 border-t border-white/10">
                  {proj.toolsUsed &&
                    proj.toolsUsed.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                </div>

                <div className="font-mono text-xs text-[#FF5722] font-bold flex items-center gap-1">
                  View Case Study Details →
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
