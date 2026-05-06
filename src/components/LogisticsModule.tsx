import { Package, Truck, Clock, CheckCircle2 } from 'lucide-react';

export const LogisticsModule = () => {
  const items = [
    { name: 'Physics Lab Kits', id: 'INV-001', qty: 45, status: 'In Stock', priority: 'Low' },
    { name: 'Chemistry Reagents', id: 'INV-002', qty: 12, status: 'Low Stock', priority: 'High' },
    { name: 'Generic Tablet PCs', id: 'INV-003', qty: 120, status: 'In Stock', priority: 'Medium' },
    { name: 'Classroom Projectors', id: 'INV-004', qty: 8, status: 'In Transit', priority: 'Medium' },
  ];

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">TOTAL ASSETS</p>
          <p className="text-2xl font-bold text-slate-900 font-display">4,281</p>
          <div className="mt-3 flex items-center gap-2">
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full w-[75%]"></div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">ACTIVE SHIPMENTS</p>
          <p className="text-2xl font-bold text-slate-900 font-display">18</p>
          <div className="mt-3 flex items-center gap-1.5 text-blue-600 font-bold text-[10px]">
            <span>Optimal Logistics Flow</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm bg-blue-600">
          <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest mb-1">LOGISTICS ALERTS</p>
          <p className="text-2xl font-bold text-white font-display">0</p>
          <div className="mt-3 flex items-center gap-1.5 text-blue-200 font-bold text-[10px]">
            <span>All supply lines nominal</span>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h3 className="font-bold text-slate-900 font-display">Resource Inventory</h3>
            <p className="text-xs text-slate-500 mt-0.5">Real-time equipment tracking across campuses</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-600/10">
            Create Requisition
          </button>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-[10px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100">
              <tr>
                <th className="px-8 py-4">Item Name</th>
                <th className="px-8 py-4">Serial ID</th>
                <th className="px-8 py-4">Quantity</th>
                <th className="px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-xs font-medium">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                  <td className="px-8 py-4 text-slate-900 font-bold">{item.name}</td>
                  <td className="px-8 py-4 text-slate-500 font-mono">{item.id}</td>
                  <td className="px-8 py-4 text-slate-600">{item.qty} units</td>
                  <td className="px-8 py-4">
                    <span className="flex items-center gap-2">
                       <span className={`w-1.5 h-1.5 rounded-full ${
                        item.status === 'Low Stock' ? 'bg-red-500' :
                        item.status === 'In Transit' ? 'bg-amber-500' :
                        'bg-emerald-500'
                      }`}></span>
                      <span className={`${
                        item.status === 'Low Stock' ? 'text-red-600' :
                        item.status === 'In Transit' ? 'text-amber-600' :
                        'text-emerald-600'
                      }`}>{item.status}</span>
                    </span>
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
