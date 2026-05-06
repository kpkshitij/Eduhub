import React from 'react';
import { Search, Filter, MoreVertical, Download, UserPlus, Mail } from 'lucide-react';

const students = [
  { id: 'STU-001', name: 'Alexander Wright', major: 'Computer Science', year: '4th Year', gpa: '3.92', status: 'Active' },
  { id: 'STU-002', name: 'Elena Rodriguez', major: 'Electrical Engineering', year: '3rd Year', gpa: '3.75', status: 'Active' },
  { id: 'STU-003', name: 'James Thompson', major: 'Business Admin', year: '2nd Year', gpa: '3.40', status: 'On Leave' },
  { id: 'STU-004', name: 'Sarah Jenkins', major: 'Fine Arts', year: '4th Year', gpa: '3.98', status: 'Active' },
  { id: 'STU-005', name: 'Michael Chen', major: 'Physics', year: '1st Year', gpa: '3.65', status: 'Active' },
  { id: 'STU-006', name: 'Amara Okafor', major: 'Architecture', year: '3rd Year', gpa: '3.88', status: 'Active' },
];

export const StudentDirectory = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full overflow-hidden">
      <div className="px-8 py-6 border-b border-slate-100 flex flex-col lg:flex-row justify-between lg:items-center gap-4 bg-slate-50/50">
        <div>
          <h3 className="font-bold text-slate-900 font-display text-lg">Student Master Directory</h3>
          <p className="text-xs text-slate-500 mt-0.5">Central records management for institution students</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search IDs or names..." 
              className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 ring-blue-500/20 outline-none w-64"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4 text-slate-600" />
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-blue-600/10 hover:bg-blue-700 transition-all flex items-center gap-2">
            <UserPlus className="w-3.5 h-3.5" />
            Enroll Student
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 text-[10px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100">
            <tr>
              <th className="px-8 py-4">Student ID</th>
              <th className="px-8 py-4">Full Name</th>
              <th className="px-8 py-4">Major / Faculty</th>
              <th className="px-8 py-4">Year Level</th>
              <th className="px-8 py-4">Cumulative GPA</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-xs font-medium">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                <td className="px-8 py-4 text-slate-500 font-mono">{student.id}</td>
                <td className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] text-slate-600">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-slate-900 font-bold">{student.name}</span>
                  </div>
                </td>
                <td className="px-8 py-4 text-slate-600">{student.major}</td>
                <td className="px-8 py-4 text-slate-600">{student.year}</td>
                <td className="px-8 py-4">
                  <span className={`px-2 py-1 rounded-lg font-bold ${
                    parseFloat(student.gpa) > 3.8 ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {student.gpa}
                  </span>
                </td>
                <td className="px-8 py-4">
                  <span className={`flex items-center gap-1.5 ${
                    student.status === 'Active' ? 'text-emerald-600' : 'text-amber-600'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      student.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                    }`}></span>
                    {student.status}
                  </span>
                </td>
                <td className="px-8 py-4 text-right">
                  <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-8 py-4 border-t border-slate-100 bg-slate-50/30 flex justify-between items-center text-[10px] font-bold text-slate-400">
        <span>Showing 6 of 12,482 students</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-lg border border-slate-200 bg-white disabled:opacity-50" disabled>PREV</button>
          <button className="px-3 py-1 rounded-lg border border-slate-200 bg-white">NEXT</button>
        </div>
      </div>
    </div>
  );
};
