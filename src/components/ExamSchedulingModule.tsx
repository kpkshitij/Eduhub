import { Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';

export const ExamSchedulingModule = () => {
  const exams = [
    { title: 'Computer Science Fundamental', date: 'Dec 12', time: '09:00 AM', room: 'Hall A', status: 'Upcoming' },
    { title: 'Advanced Calculus II', date: 'Dec 14', time: '01:30 PM', room: 'Hall B', status: 'Conflict' },
    { title: 'Software Engineering', date: 'Dec 15', time: '10:00 AM', room: 'Room 402', status: 'Confirmed' },
    { title: 'Data Structures', date: 'Dec 18', time: '09:00 AM', room: 'Hall A', status: 'Pending' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight">Exam Controller</h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Semester Fall 2026 scheduling stream</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">Download Calendar</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/10">Schedule New Exam</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-8 py-4 bg-slate-50/50 border-b border-slate-100 flex justify-between items-center">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Schedule</span>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
            <div className="divide-y divide-slate-50">
              {exams.map((exam, i) => (
                <div key={i} className="px-8 py-6 flex items-center gap-8 group hover:bg-slate-50/50 transition-colors cursor-pointer">
                  <div className="text-center min-w-[70px] bg-slate-100 p-3 rounded-xl group-hover:bg-white transition-colors border border-transparent group-hover:border-slate-200">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{exam.date.split(' ')[0]}</p>
                    <p className="text-xl font-black text-slate-900 font-display">{exam.date.split(' ')[1]}</p>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h4 className="font-bold text-slate-900 text-sm">{exam.title}</h4>
                      {exam.status === 'Conflict' && (
                        <span className="flex items-center gap-1 text-[9px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">
                          <AlertCircle className="w-3 h-3" />
                          Conflict
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold tracking-tight">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-300" /> {exam.time}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-300" /> {exam.room}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 hover:bg-slate-50">EDIT</button>
                    <button className="px-3 py-1.5 bg-blue-600 rounded-lg text-[10px] font-bold text-white hover:bg-blue-700">APPROVE</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-[#0F172A] p-8 rounded-2xl shadow-xl shadow-slate-900/20 text-white relative overflow-hidden">
            <h3 className="font-bold mb-4 font-display text-lg">Allocation Intelligence</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Automated resource optimization has cleared <span className="text-blue-400 font-bold">24 hallway bottlenecks</span> for the upcoming CS finals week.
            </p>
            <button className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-500/20">
              Run Simulation
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-6 font-display">Hall Utilization</h3>
            <div className="space-y-6">
              {[
                { room: 'Main Auditorium', cap: 500, util: 85 },
                { room: 'Hall B (Tech)', cap: 200, util: 42 },
                { room: 'Old Library', cap: 80, util: 98 },
              ].map((r, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>{r.room}</span>
                    <span className={r.util > 90 ? 'text-red-500' : 'text-blue-600'}>{r.util}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${r.util > 90 ? 'bg-red-500' : 'bg-blue-600'}`} 
                      style={{ width: `${r.util}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
