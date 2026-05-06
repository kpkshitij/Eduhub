import React from 'react';
import { CheckCircle2, AlertCircle, FileText, Download, Save, Send } from 'lucide-react';

const assignments = [
  { id: 'ASGN-401-01', title: 'Midterm Research Paper', course: 'Adv. Mathematics 401', submissions: 42, graded: 38, dueDate: 'Oct 24', priority: 'High' },
  { id: 'ASGN-401-02', title: 'Calculus Proofs Set', course: 'Adv. Mathematics 401', submissions: 40, graded: 40, dueDate: 'Oct 20', priority: 'Normal' },
  { id: 'ASGN-302-01', title: 'Quantum Simulation Lab', course: 'Quantum Mechanics', submissions: 28, graded: 12, dueDate: 'Oct 28', priority: 'High' },
  { id: 'ASGN-105-03', title: 'Ethics in Science Essay', course: 'Research Workshop', submissions: 45, graded: 45, dueDate: 'Oct 15', priority: 'Low' },
];

export const GradingCenter = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">PENDING GRADES</p>
          <div className="flex items-end justify-between">
            <p className="text-3xl font-black text-slate-900 font-display">20</p>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <AlertCircle className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-amber-600">
            <span>Action required on 2 batches</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">AVERAGE ACCURACY</p>
          <div className="flex items-end justify-between">
            <p className="text-3xl font-black text-slate-900 font-display">94%</p>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
               <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Across all semester portals</p>
        </div>
        <div className="bg-[#0F172A] p-6 rounded-2xl shadow-xl shadow-slate-900/10 text-white flex flex-col justify-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">SEMESTER GOAL</p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold">100% On-time delivery</span>
              <span className="text-blue-400 font-black">PROGRESS</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
               <div className="bg-blue-500 h-full w-[85%]"></div>
            </div>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h3 className="font-bold text-slate-900 font-display text-lg">Active Grading Batches</h3>
            <p className="text-xs text-slate-500 mt-0.5">Automated submission tracking and transcript verification</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
              <Download className="w-3.5 h-3.5" />
              Export Records
            </button>
             <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-blue-600/10 hover:bg-blue-700 transition-all">
              Initialize New Batch
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-[10px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100">
              <tr>
                <th className="px-8 py-4">Assignment / Course</th>
                <th className="px-8 py-4">Progress Status</th>
                <th className="px-8 py-4">Submission Rate</th>
                <th className="px-8 py-4">Due Date</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-xs font-medium">
              {assignments.map((asgn) => (
                <tr key={asgn.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl ${
                        asgn.priority === 'High' ? 'bg-red-50 text-red-600' : 
                        asgn.priority === 'Normal' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm font-display tracking-tight">{asgn.title}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{asgn.course} &bull; {asgn.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="w-48">
                       <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1.5">
                          <span>{asgn.graded}/{asgn.submissions} GRADED</span>
                          <span>{Math.round((asgn.graded/asgn.submissions)*100)}%</span>
                       </div>
                       <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-1000 ${
                              asgn.graded === asgn.submissions ? 'bg-emerald-500' : 'bg-blue-500'
                            }`}
                            style={{ width: `${(asgn.graded/asgn.submissions)*100}%` }}
                          ></div>
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-slate-600 font-bold">{asgn.submissions}/50 students</td>
                  <td className="px-8 py-6 text-slate-500">{asgn.dueDate}, 2026</td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-2">
                       <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 hover:bg-slate-50 transition-all flex items-center gap-2">
                        <Save className="w-3.5 h-3.5" />
                        DRAFT
                      </button>
                      <button className={`px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all flex items-center gap-2 ${
                        asgn.graded === asgn.submissions 
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}>
                        {asgn.graded === asgn.submissions ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                        {asgn.graded === asgn.submissions ? 'PUBLISH' : 'RESUME'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
