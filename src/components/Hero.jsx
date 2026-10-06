import React from 'react';
import { ArrowRight, Mail, FileText, Code, Sparkles, MapPin, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ openResumeModal }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Subtle Accents */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/60 mb-6 text-xs font-semibold text-blue-700 dark:text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">{personalInfo.name}</span>.
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-300">
              Building Full-Stack Applications & AI Systems.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Computer Science Undergrad at Lovely Professional University. I architect production-focused web platforms, stateful AI RAG chatbots, cryptographic desktop automation, and zero-dependency graph routing engines.
          </p>

          {/* Key Quick Facts Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>{personalInfo.location}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>CGPA: {personalInfo.cgpa} ({personalInfo.university})</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <Code className="w-3.5 h-3.5 text-indigo-500" />
              <span>Node.js · Python · React · Graph DSA</span>
            </span>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/25 transition-all hover:translate-y-[-1px]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={openResumeModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 font-semibold shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700/60"
            >
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>View & Download CV</span>
            </button>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-5 pt-6 border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Connect Directly:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                title="GitHub Repository Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-400 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-rose-500 transition-colors"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
