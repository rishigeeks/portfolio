import React from 'react';
import { X, Download, Printer, Mail, Phone, ExternalLink, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, projects, skillsGrouped, education, certifications } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/60 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Placement Resume Preview & Print
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6 text-slate-800 dark:text-slate-200 text-sm leading-normal bg-white dark:bg-slate-900">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                {personalInfo.targetRole}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                B.Tech Computer Science & Engineering · Lovely Professional University (CGPA: {personalInfo.cgpa})
              </p>
            </div>

            <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400 font-mono">
              <div>Email: {personalInfo.email}</div>
              <div>Phone: {personalInfo.phone}</div>
              <div>GitHub: github.com/rishigeeks</div>
              <div>LinkedIn: linkedin.com/in/RishiRaj</div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              SKILLS SUMMARY
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong className="text-slate-900 dark:text-white">Languages:</strong> Python, JavaScript, Java, C, C++, SQL, HTML5, CSS3
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Frameworks:</strong> React.js, Node.js, Express.js, Flask, Tailwind CSS
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Databases & Tools:</strong> MongoDB, SQLite3, Docker, Git, Postman, Vercel
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Core Subjects:</strong> Data Structures & Algorithms, OOP, DBMS, OS, Graph Theory
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              KEY PROJECTS
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-center justify-between font-bold text-sm text-slate-900 dark:text-white">
                    <span>{proj.title} – {proj.subtitle}</span>
                    <span className="text-xs text-slate-500 font-mono font-normal">{proj.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {proj.summary}
                  </p>
                  <ul className="list-disc list-inside text-[11px] text-slate-600 dark:text-slate-400 space-y-0.5 pl-1">
                    {proj.keyFeatures.slice(0, 3).map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400">
                    Tech: {proj.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Training */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              CERTIFICATIONS & TRAINING
            </h2>
            <div className="space-y-1.5 text-xs">
              {certifications.map((c, i) => (
                <div key={i} className="flex justify-between">
                  <span><strong className="text-slate-900 dark:text-white">{c.title}</strong> – {c.issuer}</span>
                  <span className="font-mono text-slate-500">{c.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              EDUCATION
            </h2>
            <div className="space-y-2 text-xs">
              {education.map((edu, i) => (
                <div key={i} className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{edu.degree}</div>
                    <div className="text-slate-500">{edu.institution}, {edu.location}</div>
                  </div>
                  <div className="text-right font-mono">
                    <div className="font-bold text-blue-600 dark:text-blue-400">{edu.score}</div>
                    <div className="text-slate-500">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
