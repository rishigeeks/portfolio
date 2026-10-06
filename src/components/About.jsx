import React from 'react';
import { Target, Cpu, CheckCircle2, ShieldCheck, Terminal, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      title: "Placement Focus",
      icon: Target,
      text: "Targeting roles in Software Development Engineering (SDE), Backend Engineering, and AI Application Development."
    },
    {
      title: "Data Integrity & Architecture",
      icon: ShieldCheck,
      text: "Experience in relational SQLite table transactions, RBAC authorization, and server-side cart/price protection."
    },
    {
      title: "Zero-Dependency DSA",
      icon: Cpu,
      text: "Built 8 graph algorithms (Dijkstra, A*, Kruskal, Prim, Floyd-Warshall) from scratch with custom Min-Heap & Union-Find."
    },
    {
      title: "AI RAG & Automation",
      icon: Terminal,
      text: "Developed LLM chatbots integrated with search API RAG fallback and desktop automation utilities with SHA-256 cryptographic hashes."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            About & Placement Objective
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Engineering Practice & Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Description */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p className="text-lg font-medium text-slate-800 dark:text-slate-100">
              I am a 3rd year Computer Science & Engineering student at <strong className="text-blue-600 dark:text-blue-400">Lovely Professional University</strong> (CGPA: 7.2), passionate about writing clean, reliable software.
            </p>
            <p>
              My development mindset centers on building tangible proof behind every resume bullet. Rather than assembling simple boilerplate web apps, I prioritize understanding system mechanics: from implementing graph algorithms and heaps from scratch in JavaScript to engineering SHA-256 duplicate detection and session persistence in Python and Express.
            </p>
            <p>
              Whether it's ensuring server-side validation to prevent e-commerce price tampering or integrating search API fallbacks to eliminate AI hallucinations, I focus on building resilient software ready for placement and industry impact.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center">
                <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">4+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Core Projects</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center">
                <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">8</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Graph Algos Built</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center">
                <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">100%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Code Verified</div>
              </div>
            </div>
          </div>

          {/* Core Strengths Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
