import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  MessageSquare, 
  Mail, 
  Printer, 
  FileText, 
  Users,
  Send,
  MoreVertical
} from 'lucide-react';

interface CourseApproval {
  id: string;
  course: string;
  professor: string;
  students: number;
  status: 'Approved' | 'Pending' | 'Rejected';
  paperId?: string;
  lastReminder?: string;
}

const initialApprovals: CourseApproval[] = [
  { id: 'CS-401', course: 'Distributed Architecture', professor: 'Dr. Sarah Smith', students: 124, status: 'Approved', paperId: 'PAP-CS401-26' },
  { id: 'CS-412', course: 'Machine Learning', professor: 'Prof. Jonathan Miller', students: 86, status: 'Pending', lastReminder: '2 days ago' },
  { id: 'EE-302', course: 'Circuit Analysis', professor: 'Dr. Alan Turing', students: 45, status: 'Approved', paperId: 'PAP-EE302-26' },
  { id: 'MA-201', course: 'Linear Algebra', professor: 'Prof. Grace Hopper', students: 210, status: 'Pending' },
  { id: 'PHY-105', course: 'Classical Mechanics', professor: 'Dr. Richard Feynman', students: 155, status: 'Approved', paperId: 'PAP-PHY105-26' },
];

export const ExamApprovalTracker = () => {
  const [approvals, setApprovals] = useState(initialApprovals);

  const calculatePrintingBuffer = (students: number) => {
    return Math.ceil(students * 1.05); // 5% buffer for operation cost/late reg
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-display font-black text-slate-900 tracking-tight">Exam Approval & Registry</h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Institutional verification stream</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Registry
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Course Approval Matrix</span>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
               <span className="text-[10px] font-bold text-slate-600 uppercase">3/5 Paper Ready</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left font-medium">
              <thead className="bg-slate-50/30 text-[10px] uppercase text-slate-400 border-b border-slate-100">
                <tr>
                  <th className="px-8 py-4">Course / Professor</th>
                  <th className="px-8 py-4">Registry</th>
                  <th className="px-8 py-4">Paper Status</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-xs">
                {approvals.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="text-slate-900 font-bold font-display tracking-tight text-sm">{item.course}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">{item.professor} &bull; {item.id}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-slate-700">
                        <Users className="w-3.5 h-3.5 text-slate-300" />
                        <span className="font-bold">{item.students}</span>
                        <span className="text-slate-400 text-[10px] font-bold">(+{calculatePrintingBuffer(item.students) - item.students} Buff)</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`flex items-center gap-2 font-bold ${
                        item.status === 'Approved' ? 'text-emerald-600' : 'text-amber-600'
                      }`}>
                         {item.status === 'Approved' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                         {item.status} {item.paperId && <span className="text-[10px] opacity-70">[{item.paperId}]</span>}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        {item.status !== 'Approved' ? (
                          <div className="flex gap-1">
                             <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-blue-100" title="Email Reminder">
                                <Mail className="w-4 h-4" />
                             </button>
                             <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-emerald-100" title="WhatsApp Reminder">
                                <MessageSquare className="w-4 h-4" />
                             </button>
                          </div>
                        ) : (
                          <button className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center gap-2">
                            <Printer className="w-3.5 h-3.5" />
                            Print Ready
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-[#0F172A] p-8 rounded-[2rem] shadow-xl shadow-slate-900/20 text-white relative overflow-hidden">
              <h3 className="text-lg font-bold font-display leading-tight">Printing Intelligence</h3>
              <p className="text-xs text-slate-400 mt-2 font-medium leading-relaxed">
                Aggregated system check confirms <span className="text-blue-400 font-bold">1,245 sheets</span> required for the next 24 hour print cycle including all operational buffers.
              </p>
              <div className="mt-8 space-y-4">
                 <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>Approval Progress</span>
                    <span>60%</span>
                 </div>
                 <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[60%]"></div>
                 </div>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 font-display text-sm mb-4">Registry Deadline Analysis</h4>
              <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100/50">
                 <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-amber-200/50">
                       <AlertCircle className="text-amber-600 w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-amber-900 uppercase tracking-widest">Deadline: 14 Oct</span>
                 </div>
                 <p className="text-xs text-amber-800 font-medium leading-relaxed">System is keeping a <span className="font-bold">5% operational buffer</span> for all active exams to handle late registration overrides.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const Download = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);
