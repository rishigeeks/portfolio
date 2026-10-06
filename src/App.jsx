import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TransitSimulator from './components/TransitSimulator';
import Skills from './components/Skills';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ChecklistModal from './components/ChecklistModal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('rr_portfolio_theme') || 'dark';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('rr_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Navigation Header */}
      <Navbar
        activeTheme={theme}
        toggleTheme={toggleTheme}
        openResumeModal={() => setIsResumeOpen(true)}
        openChecklistModal={() => setIsChecklistOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        <Hero openResumeModal={() => setIsResumeOpen(true)} />
        <About />
        <Projects />
        <TransitSimulator />
        <Skills />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer openChecklistModal={() => setIsChecklistOpen(true)} />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />

    </div>
  );
}
