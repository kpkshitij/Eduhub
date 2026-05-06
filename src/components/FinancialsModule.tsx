import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, PieChart, ArrowRight, Download } from 'lucide-react';

const transactions = [
  { id: 'TXN-901', description: 'Tuition Fees - Fall 2026 Batch', amount: '$420,000', type: 'Credit', status: 'Settled', date: 'Oct 24' },
  { id: 'TXN-852', description: 'Lab Equipment Procurement', amount: '$12,500', type: 'Debit', status: 'Pending', date: 'Oct 25' },
  { id: 'TXN-734', description: 'Faculty Payroll - Oct 2026', amount: '$285,000', type: 'Debit', status: 'Settled', date: 'Oct 20' },
  { id: 'TXN-611', description: 'Research Grant #84', amount: '$50,000', type: 'Credit', status: 'Settled', date: 'Oct 18' },
];

export const FinancialsModule = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 shrink-0">
        {[
          { label: 'Total Revenue', value: '$2.4M', color: 'text-emerald-600', icon: TrendingUp },
          { label: 'Operational Costs', value: '$1.1M', color: 'text-amber-600', icon: TrendingDown },
          { label: 'Scholarship Out', value: '$450K', color: 'text-blue-600', icon: DollarSign },
          { label: 'Net Surplus', value: '$850K', color: 'text-emerald-600', icon: TrendingUp },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <div className="flex items-end justify-between relative z-10">
              <h3 className="text-2xl font-display font-black text-slate-900">{stat.value}</h3>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0">
         <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h3 className="font-bold text-slate-900 font-display">Transaction Ledger</h3>
                <p className="text-xs text-slate-500 mt-0.5">Global institutional financial flow audit</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-500/10">
                Generate Statement
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
               <table className="w-full text-left">
                  <thead className="bg-slate-50/20 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-100">
                    <tr>
                      <th className="px-8 py-4">Transaction ID</th>
                      <th className="px-8 py-4">Description</th>
                      <th className="px-8 py-4">Amount</th>
                      <th className="px-8 py-4">Type</th>
                      <th className="px-8 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-xs">
                    {transactions.map((txn) => (
                      <tr key={txn.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-5 text-slate-500 font-mono font-bold">{txn.id}</td>
                        <td className="px-8 py-5 text-slate-900 font-bold">{txn.description}</td>
                        <td className="px-8 py-5 font-black text-slate-900 font-display">{txn.amount}</td>
                        <td className="px-8 py-5">
                           <span className={`px-2 py-1 rounded-lg font-bold text-[10px] uppercase tracking-tighter ${
                             txn.type === 'Credit' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                           }`}>
                             {txn.type}
                           </span>
                        </td>
                        <td className="px-8 py-5">
                           <div className="flex items-center gap-1.5 font-bold text-slate-500">
                              <div className={`w-1 h-1 rounded-full ${txn.status === 'Settled' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                              {txn.status}
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
               </table>
            </div>
         </div>

         <div className="space-y-8 flex flex-col">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex-1">
               <h3 className="font-bold text-slate-900 mb-6 font-display">Budget Allocation</h3>
               <div className="space-y-6">
                  {[
                    { label: 'Campus Dev', val: 120, total: 300 },
                    { label: 'R&D Grants', val: 240, total: 300 },
                    { label: 'Admin Ops', val: 80, total: 200 },
                  ].map((b, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between text-[10px] font-bold text-slate-500 tracking-wider">
                          <span>{b.label}</span>
                          <span className="text-slate-900">{(b.val/b.total*100).toFixed(0)}%</span>
                       </div>
                       <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-blue-600 h-full transition-all" style={{ width: `${(b.val/b.total*100)}%` }}></div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-2xl text-white shadow-xl shadow-blue-500/20 flex flex-col justify-between min-h-[220px]">
               <div>
                  <h4 className="text-xl font-display font-black leading-tight">Financial Resilience Index</h4>
                  <p className="text-xs text-blue-100 mt-2 opacity-80 leading-relaxed">System-wide fiscal health is rated at <span className="font-bold text-white uppercase">AAA Institutional Grade</span> based on current cash on hand.</p>
               </div>
               <button className="w-full py-4 bg-[#0F172A] text-white rounded-2xl font-black text-xs hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                 AUDIT LOGS
                 <ArrowRight className="w-3.5 h-3.5" />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};
