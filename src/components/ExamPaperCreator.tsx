import React, { useState } from 'react';
import { 
  Sparkles, 
  Database, 
  History, 
  FileText, 
  Save, 
  Eye, 
  Printer, 
  Info,
  ChevronDown,
  Search,
  Filter,
  Pencil,
  Trash2,
  Plus
} from 'lucide-react';

interface Suggestion {
  id: string;
  tag: string;
  points: number;
  text: string;
}

const suggestions: Suggestion[] = [
  { id: 'S1', tag: "BLOOM'S: ANALYSIS", points: 10, text: 'Discuss the implications of the "Black Box" problem in deep learning models used for medical diagnostics.' },
  { id: 'S2', tag: "BLOOM'S: APPLICATION", points: 15, text: "Given a dataset with 40% noise, calculate the optimal regularization parameter using the AI Engine's suggested formula." },
  { id: 'S3', tag: "BLOOM'S: EVALUATION", points: 20, text: "Critique the ethical framework of Autonomous Vehicle logic in high-stakes accident scenarios." },
];

export const ExamPaperCreator = () => {
  const [selectedCourse] = useState('CS402: Artificial Intelligence & Ethics');

  return (
    <div className="flex flex-col gap-6 -mt-2">
      {/* Top Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-black text-slate-900 font-display tracking-tight">Exam Workspace</h1>
          </div>
          <p className="text-sm text-slate-500 font-medium">Final Term Examination - Spring 2024 Semester</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 max-w-sm">
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-8">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">SUBMISSION STATUS</span>
              <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-md text-[10px] font-black uppercase">DRAFTING</span>
            </div>
            <div className="flex gap-2 mt-2">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-[10px] text-slate-500 font-medium italic">"Awaiting admin review after final submission."</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Exam Engine Section */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-slate-400" />
          </div>
          <div>
            <h3 className="text-lg font-black font-display text-slate-900">AI Exam Engine</h3>
            <p className="text-xs text-slate-500 font-medium">Leverage institutional data to generate and refine examination materials.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <button className="flex items-center gap-6 p-8 rounded-[2rem] border-2 border-dashed border-slate-100 hover:border-blue-200 hover:bg-blue-50/20 transition-all group text-left">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-slate-400" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Generate Draft Paper</h4>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Based on syllabus & difficulty</p>
            </div>
          </button>
          <button className="flex items-center gap-6 p-8 rounded-[2rem] border-2 border-dashed border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all group text-left">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
              <Database className="w-5 h-5 text-slate-400" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Pull from Bank</h4>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Access Departmental Vault</p>
            </div>
          </button>
          <button className="flex items-center gap-6 p-8 rounded-[2rem] border-2 border-dashed border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all group text-left">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
              <History className="w-5 h-5 text-slate-400" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Import Previous Year</h4>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Load and modify past exam</p>
            </div>
          </button>
        </div>
      </div>

      {/* Main Workspace Split */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 flex-1 min-h-0">
        {/* AI Suggestions Sidebar */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col overflow-hidden max-h-[800px]">
          <div className="px-10 py-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center group">
             <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-slate-400" />
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AI SUGGESTIONS</h3>
                  </div>
                </div>
             </div>
             <div className="flex gap-4">
                <Filter className="w-4 h-4 text-slate-300 hover:text-slate-500 cursor-pointer" />
                <Search className="w-4 h-4 text-slate-300 hover:text-slate-500 cursor-pointer" />
             </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
             {suggestions.map(s => (
               <div key={s.id} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-100 transition-all group cursor-move">
                  <div className="flex justify-between items-start mb-4">
                     <span className="text-[9px] font-black text-amber-700 uppercase tracking-tighter bg-amber-50 px-2 py-1 rounded-md">
                        {s.tag}
                     </span>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {s.points} PTS
                     </span>
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                     {s.text}
                  </p>
               </div>
             ))}
          </div>
        </div>

        {/* Exam Paper Preview */}
        <div className="lg:col-span-3 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-16 relative bg-white">
             {/* Paper Document Representation */}
             <div className="flex flex-col items-center">
                <h2 className="text-3xl font-black text-slate-900 font-display tracking-tight uppercase text-center">SPRING TERM EXAMINATION 2024</h2>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-3 italic text-center">Department of Computer Science & Engineering</p>
                
                <div className="w-full mt-12 pb-10 border-b-2 border-slate-900 grid grid-cols-2 gap-y-6 px-4">
                   <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-slate-400 uppercase">COURSE:</span>
                      <span className="text-xs font-bold text-slate-900">CS402 Artificial Intelligence</span>
                   </div>
                   <div className="flex items-center justify-end gap-4">
                      <span className="text-[10px] font-black text-slate-400 uppercase">DATE:</span>
                      <span className="text-xs font-bold text-slate-900">15 May 2024</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-slate-400 uppercase">TIME:</span>
                      <span className="text-xs font-bold text-slate-900">3 Hours</span>
                   </div>
                   <div className="flex items-center justify-end gap-4">
                      <span className="text-[10px] font-black text-slate-400 uppercase">MAX MARKS:</span>
                      <span className="text-xs font-bold text-slate-900 font-display tracking-tight">100</span>
                   </div>
                </div>

                <div className="w-full mt-12 space-y-16">
                   <div className="relative group">
                      <div className="flex justify-between items-start">
                         <span className="text-sm font-black text-slate-900 font-display min-w-[2rem]">Q1.</span>
                         <div className="flex-1 pl-4">
                            <p className="text-sm text-slate-700 font-medium leading-relaxed">
                               Explain the difference between Supervised and Unsupervised learning with suitable examples. (10 Marks)
                            </p>
                         </div>
                         <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all">
                            <Pencil className="w-4 h-4 text-slate-300 hover:text-blue-500 cursor-pointer" />
                            <Trash2 className="w-4 h-4 text-slate-300 hover:text-red-500 cursor-pointer" />
                         </div>
                      </div>
                   </div>

                   <div className="relative group">
                      <div className="flex justify-between items-start">
                         <span className="text-sm font-black text-slate-900 font-display min-w-[2rem]">Q2.</span>
                         <div className="flex-1 pl-4">
                            <p className="text-sm text-slate-700 font-medium leading-relaxed">
                               Compare and contrast A* and Dijkstra's algorithm in terms of time complexity and heuristic usage. (15 Marks)
                            </p>
                         </div>
                         <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all">
                            <Pencil className="w-4 h-4 text-slate-300 hover:text-blue-500 cursor-pointer" />
                            <Trash2 className="w-4 h-4 text-slate-300 hover:text-red-500 cursor-pointer" />
                         </div>
                      </div>
                   </div>

                   {/* Drop Zone */}
                   <div className="mt-20 border-2 border-dashed border-slate-100 rounded-[2.5rem] p-16 flex flex-col items-center justify-center text-slate-300 group hover:border-slate-200 transition-all">
                      <div className="flex items-center gap-4 cursor-pointer group-hover:text-slate-400">
                         <div className="w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:border-slate-300">
                            <Plus className="w-5 h-5 text-slate-200 group-hover:text-slate-400" />
                         </div>
                         <span className="text-sm font-bold font-display uppercase tracking-widest">Click or drag question here</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="px-10 py-6 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center shrink-0">
             <div className="flex gap-8">
                <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-slate-600 uppercase tracking-[0.2em] transition-colors">
                   <Save className="w-4 h-4" />
                   SAVE DRAFT
                </button>
                <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-slate-600 uppercase tracking-[0.2em] transition-colors">
                   <Eye className="w-4 h-4" />
                   PREVIEW PDF
                </button>
             </div>
             <button className="bg-[#1E3A3A] text-white px-10 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-slate-900/10 hover:bg-[#2A4F4F] transition-all">
                Submit Final for Printing
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
