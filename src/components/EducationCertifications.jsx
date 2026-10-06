import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { education, certifications } from '../data/portfolioData';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Timeline */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Academic Background</span>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Education History</h2>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-9 group">
                  {/* Timeline node */}
                  <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  </div>

                  <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {edu.degree}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50">
                        {edu.score}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {edu.institution}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Specialized Training */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Industry Credentials</span>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Certifications & Bootcamps</h2>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors shadow-xs"
                >
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {cert.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                    Issuer: {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
