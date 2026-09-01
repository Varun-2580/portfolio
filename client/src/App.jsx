import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroTerminal from './components/HeroTerminal';
import AboutSection from './components/AboutSection';
import SkillsBento from './components/SkillsBento';
import ProjectsGrid from './components/ProjectsGrid';
import ProjectModal from './components/ProjectModal';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationBento from './components/EducationBento';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-[#FF5722] selection:text-white">
      <Navbar />
      <main>
        <HeroTerminal />
        <AboutSection />
        <SkillsBento />
        <ProjectsGrid onSelectProject={(proj) => setSelectedProject(proj)} />
        <ExperienceTimeline />
        <EducationBento />
        <ContactForm />
      </main>
      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
