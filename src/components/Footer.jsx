import React from 'react';
import { ArrowUp, Mail, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ openChecklistModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-12 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
              RR
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-sm">
                {personalInfo.name} Digital Portfolio
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                PES 390 Placement-Ready Online Portfolio · LPU CSE
              </p>
            </div>
          </div>

          {/* Verification Badge */}
          <button
            onClick={openChecklistModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 transition-colors"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>PES 390 Placement Criteria Verified</span>
          </button>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors text-xs font-semibold flex items-center gap-1.5"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} Rishi Raj. Designed & Built for Industry Placement.
          </p>
          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors">Email</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
