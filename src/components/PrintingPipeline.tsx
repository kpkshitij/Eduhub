import React, { useState } from 'react';
import { 
  Printer, 
  Package, 
  Layers, 
  CheckCircle2, 
  FileText, 
  Plus, 
  MoreHorizontal,
  LayoutGrid,
  List as ListIcon,
  Tag,
  Boxes,
  Truck
} from 'lucide-react';

interface PrintJob {
  id: string;
  course: string;
  quantity: number;
  status: 'Queued' | 'Printing' | 'Completed' | 'Stickers Generated';
  papersPerPacket: number;
  category: 'Science' | 'Arts' | 'Engineering';
}

const initialJobs: PrintJob[] = [
  { id: 'PJ-001', course: 'Distributed Architecture', quantity: 130, status: 'Stickers Generated', papersPerPacket: 50, category: 'Engineering' },
  { id: 'PJ-002', course: 'Circuit Analysis', quantity: 48, status: 'Queued', papersPerPacket: 25, category: 'Engineering' },
  { id: 'PJ-003', course: 'Classical Mechanics', quantity: 165, status: 'Printing', papersPerPacket: 50, category: 'Science' },
];

export const PrintingPipeline = () => {
  const [jobs] = useState<PrintJob[]>(initialJobs);

  return (
    <div className="space-y-6 flex flex-col h-full bg-slate-50/30">
      <div className="flex justify-between items-end shrink-0 px-2 pt-2">
        <div>
          <h2 className="text-2xl font-display font-black text-slate-900 tracking-tight">Printing & Packaging Pipeline</h2>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Institutional Production Engine</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2">
            <LayoutGrid className="w-4 h-4" />
            Grid View
          </button>
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/10 hover:bg-blue-700 transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Print Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shrink-0 px-2">
        {[
          { label: 'In Queue', value: '18', icon: ListIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Printing', value: '04', icon: Printer, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Completed', value: '142', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Sheets Used', value: '42.8K', icon: Layers, color: 'text-slate-600', bg: 'bg-slate-100' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm group">
            <div className="flex justify-between items-start mb-3">
              <div className={`p-2 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
              <MoreHorizontal className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 cursor-pointer" />
            </div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-xl font-black text-slate-900 font-display mt-0.5 tracking-tight">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col min-h-[300px]">
        <div className="px-8 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center gap-6">
            <h3 className="font-bold text-slate-900 font-display tracking-tight text-base">Active Production Jobs</h3>
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-full text-[9px] font-bold animate-pulse uppercase tracking-widest">
               <span className="w-1 h-1 bg-white rounded-full animate-ping"></span>
               Live Output
            </div>
          </div>
          <div className="flex gap-2">
             <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-all flex items-center gap-2">
                <Tag className="w-3.5 h-3.5" />
                Print Stickers
             </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/20 text-[9px] uppercase font-bold text-slate-400 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
              <tr>
                <th className="px-8 py-3">Job ID / Course</th>
                <th className="px-8 py-3">Output Specs</th>
                <th className="px-8 py-3">Packaging Hub</th>
                <th className="px-8 py-3">Status Engine</th>
                <th className="px-8 py-3 text-right">Containment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-[11px] font-medium">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50/20 transition-colors group">
                  <td className="px-8 py-4">
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-bold font-display tracking-tight text-xs">{job.course}</span>
                      <span className="text-[9px] text-slate-400 font-bold uppercase mt-0.5">ID: {job.id} &bull; {job.category}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-2">
                       <Layers className="w-3.5 h-3.5 text-slate-300" />
                       <div>
                          <p className="text-slate-900 font-bold">{job.quantity}</p>
                          <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest">A4 Security</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex flex-col">
                       <span className="text-slate-700">{Math.ceil(job.quantity / 50)} Packets</span>
                       <span className="text-[9px] text-slate-400 font-bold uppercase mt-0.5">{job.papersPerPacket} Exams / Pkt</span>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                      job.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                      job.status === 'Printing' ? 'bg-amber-50 text-amber-600' :
                      job.status === 'Stickers Generated' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button className="p-1.5 border border-slate-200 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all" title="Print Packet Sticker">
                          <Package className="w-3.5 h-3.5" />
                       </button>
                       <button className="p-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all shadow-sm" title="Containment Label">
                          <Boxes className="w-3.5 h-3.5" />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shrink-0 px-2 pb-2">
         <div className="bg-[#0F172A] p-6 rounded-[2rem] text-white flex items-center justify-between shadow-xl shadow-slate-900/20 group">
            <div>
               <h4 className="text-base font-bold font-display">Logistics Node</h4>
               <p className="text-[10px] text-slate-400 mt-1">3 batches ready for transfer.</p>
               <button className="mt-4 flex items-center gap-2 text-[9px] font-black text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest">
                  Initialize Dispatch
                  <Truck className="w-3.5 h-3.5" />
               </button>
            </div>
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
               <Package className="w-8 h-8 text-blue-500" />
            </div>
         </div>
         <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex items-center justify-between group">
            <div className="flex-1">
               <h4 className="text-base font-bold font-display text-slate-900">Resource Inventory</h4>
               <p className="text-[10px] text-slate-500 mt-1">14,200 sheets remaining.</p>
               <div className="w-32 bg-slate-100 h-1 rounded-full mt-4 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[45%]" title="45% Capacity"></div>
               </div>
            </div>
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
               <Layers className="w-8 h-8 text-slate-200" />
            </div>
         </div>
      </div>
    </div>
  );
};
