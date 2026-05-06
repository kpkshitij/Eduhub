import React from 'react';
import { Award, TrendingUp, BookOpen, AlertCircle, Download, FileText } from 'lucide-react';

const results = [
  { code: 'CS-401', course: 'Distributed Architecture', credits: 4, grade: 'A+', gpa: '4.0', status: 'Completed' },
  { code: 'CS-412', course: 'Machine Learning', credits: 3, grade: 'A', gpa: '3.9', status: 'Completed' },
  { code: 'ENG-201', course: 'Technical Writing', credits: 2, grade: 'B+', gpa: '3.3', status: 'Completed' },
  { code: 'CS-499', course: 'Senior Capstone Project', credits: 6, grade: 'IP', gpa: '-', status: 'In Progress' },
  { code: 'PHY-301', course: 'Quantum Principles', credits: 3, grade: 'A-', gpa: '3.7', status: 'Completed' },
];

export const StudentResults = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
       <div className="bg-[#0F172A] p-12 rounded-[2.5rem] text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end gap-8">
            <div>
               <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-black tracking-tight">Academic Achievement</h2>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">Institutional Transcript &bull; Fall 2026</p>
                </div>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-10">
                 <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">CUMULATIVE GPA</p>
                    <p className="text-4xl font-black text-white font-display">3.92</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">CREDITS EARNED</p>
                    <p className="text-4xl font-black text-white font-display">124</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">CLASS RANK</p>
                    <p className="text-4xl font-black text-white font-display">Top 5%</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">DEAN'S LIST</p>
                    <p className="text-4xl font-black text-blue-400 font-display italic">Yes</p>
                 </div>
               </div>
            </div>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-xs hover:bg-slate-100 transition-all shadow-xl shadow-white/5 flex items-center gap-3">
              <Download className="w-4 h-4" />
              DOWNLOAD TRANSCRIPT
            </button>
          </div>
       </div>

       <div className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
          <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div>
              <h3 className="font-bold text-slate-900 font-display text-lg tracking-tight">Current Course Assessment</h3>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">Detailed grade breakdown per credit module</p>
            </div>
            <div className="flex gap-4">
               <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest px-4 py-2 border border-slate-200 rounded-xl">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  Performance +2.4%
               </div>
            </div>
          </div>

          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 text-[10px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100">
                <tr>
                  <th className="px-10 py-5">Course Code</th>
                  <th className="px-10 py-5">Full Course Title</th>
                  <th className="px-10 py-5">Credits</th>
                  <th className="px-10 py-5">Grade / GPA</th>
                  <th className="px-10 py-5">Completion Status</th>
                  <th className="px-10 py-5 text-right">Records</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-xs font-medium">
                {results.map((res) => (
                  <tr key={res.code} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                    <td className="px-10 py-6 text-slate-500 font-mono font-bold">{res.code}</td>
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                          <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <span className="text-slate-900 font-bold text-sm font-display tracking-tight">{res.course}</span>
                      </div>
                    </td>
                    <td className="px-10 py-6 text-slate-600 font-bold uppercase tracking-widest text-[10px]">{res.credits} Units</td>
                    <td className="px-10 py-6">
                       <div className="flex items-baseline gap-2">
                          <span className={`text-xl font-black font-display ${
                            res.grade.startsWith('A') ? 'text-emerald-600' : 
                            res.grade === 'IP' ? 'text-blue-500' : 'text-slate-700'
                          }`}>{res.grade}</span>
                          <span className="text-[10px] text-slate-400 font-bold">({res.gpa})</span>
                       </div>
                    </td>
                    <td className="px-10 py-6">
                       <span className={`flex items-center gap-2 font-bold ${
                         res.status === 'Completed' ? 'text-emerald-600' : 'text-blue-500'
                       }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            res.status === 'Completed' ? 'bg-emerald-500' : 'bg-blue-500 animate-pulse'
                          }`}></div>
                          {res.status}
                       </span>
                    </td>
                    <td className="px-10 py-6 text-right">
                       <button className="text-slate-300 hover:text-slate-600 transition-colors">
                          <FileText className="w-5 h-5" />
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shrink-0">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex items-center gap-6 group hover:translate-y-[-4px] transition-all">
             <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                <AlertCircle className="w-8 h-8 text-blue-600" />
             </div>
             <div>
                <h4 className="font-bold text-slate-900 font-display">Academic Standing Warning</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">No alerts detected. You are currently meeting all requirements for the Global Scholar program.</p>
             </div>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex items-center gap-6 group hover:translate-y-[-4px] transition-all">
             <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                <Award className="w-8 h-8 text-emerald-600" />
             </div>
             <div>
                <h4 className="font-bold text-slate-900 font-display">Special Recognition</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Early graduation eligibility confirmed for Spring 2027 based on current course trajectory.</p>
             </div>
          </div>
       </div>
    </div>
  );
};
