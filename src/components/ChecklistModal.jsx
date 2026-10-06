import React, { useState } from 'react';
import { X, CheckSquare, ShieldCheck, Award, ExternalLink, Sparkles } from 'lucide-react';
import { pesChecklistItems } from '../data/portfolioData';

export default function ChecklistModal({ isOpen, onClose }) {
  const [items, setItems] = useState(pesChecklistItems);

  if (!isOpen) return null;

  const toggleCheck = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const completedCount = items.filter(i => i.checked).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-emerald-50/50 dark:bg-emerald-950/30">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                PES 390 Placement Verification Checklist
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Self-Assessment criteria from Unit 3 Content Creation Student Manual
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
          <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
            <span className="text-slate-700 dark:text-slate-300">Readiness Score: {completedCount}/{items.length} Criteria Passed</span>
            <span className="text-emerald-600 dark:text-emerald-400">{progressPercent}% Placement Ready</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full transition-all duration-500 rounded-full" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Checklist Items */}
        <div className="p-6 overflow-y-auto space-y-3 custom-scrollbar">
          {items.map((item) => (
            <label
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                item.checked
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60 text-slate-900 dark:text-slate-100'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400'
              }`}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {}}
                className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 dark:bg-slate-800 dark:border-slate-700"
              />
              <span className="text-xs sm:text-sm font-medium leading-snug">
                {item.label}
              </span>
            </label>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Unit 3 Content Creation Skills · PES 390
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
          >
            Done Verification
          </button>
        </div>

      </div>
    </div>
  );
}
