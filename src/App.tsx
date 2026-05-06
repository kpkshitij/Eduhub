import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  Calendar, 
  Settings, 
  LogOut, 
  Bell, 
  HelpCircle,
  Database,
  HelpCircle as HelpIcon,
  MessageSquare,
  ChevronDown,
  Search,
  GraduationCap,
  BookOpen,
  UserCircle,
  TrendingUp,
  Cpu,
  Boxes,
  MapPin,
  Clock,
  AlertCircle,
  Award,
  PieChart,
  Printer
} from 'lucide-react';
import { EnrollmentChart } from './components/EnrollmentChart';
import { LogisticsModule } from './components/LogisticsModule';
import { ExamSchedulingModule } from './components/ExamSchedulingModule';
import { StudentDirectory } from './components/StudentDirectory';
import { GradingCenter } from './components/GradingCenter';
import { StudentResults } from './components/StudentResults';
import { FinancialsModule } from './components/FinancialsModule';
import { PrintingPipeline } from './components/PrintingPipeline';
import { ExamApprovalTracker } from './components/ExamApprovalTracker';
import { ExamPaperCreator } from './components/ExamPaperCreator';

// Types
type UserRole = 'admin' | 'professor' | 'student' | null;
type ViewType = 
  | 'dashboard' 
  | 'students' 
  | 'faculty' 
  | 'logistics' 
  | 'exams' 
  | 'analytics' 
  | 'financials' 
  | 'grading' 
  | 'courses' 
  | 'exam-creator' 
  | 'results' 
  | 'library' 
  | 'fees' 
  | 'printing-pipeline' 
  | 'approval-tracker' 
  | 'settings';

interface AuthContextType {
  role: UserRole;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

// Mock Pages
const Login = () => {
  const { login } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F5F9] p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 p-12 border border-slate-100"
      >
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/20">
            <GraduationCap className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl font-display font-black text-slate-900 tracking-tight">EDUADMIN</h1>
          <p className="text-slate-500 mt-3 font-semibold text-sm uppercase tracking-widest">Enterprise ERP Portal</p>
        </div>
        
        <div className="space-y-4">
          <button 
            onClick={() => login('admin')}
            className="group w-full flex items-center justify-center gap-3 bg-[#0F172A] text-white px-8 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <UserCircle className="w-5 h-5 text-blue-400" />
            <span>Admin Portal</span>
          </button>
          
          <button 
            onClick={() => login('professor')}
            className="group w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-100 text-slate-700 px-8 py-5 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <BookOpen className="w-5 h-5 opacity-80" />
            <span>Professor Portal</span>
          </button>
          
          <button 
            onClick={() => login('student')}
            className="group w-full flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            <GraduationCap className="w-5 h-5 opacity-80" />
            <span>Student Portal</span>
          </button>
        </div>

        <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-12">
          &copy; 2026 Institutional Systems Division
        </p>
      </motion.div>
    </div>
  );
};

const DashboardLayout = ({ children, activeView, setView }: { children: React.ReactNode, activeView: ViewType, setView: (v: ViewType) => void }) => {
  const { role, logout } = useAuth();
  
  const getNavItems = () => {
    if (role === 'admin') {
      return [
        { category: 'Institutional', items: [
          { name: 'Overview', id: 'dashboard', icon: LayoutDashboard },
          { name: 'Logistics', id: 'logistics', icon: Package },
          { name: 'Exam Planner', id: 'exams', icon: Calendar },
        ]},
        { category: 'Examination Pipeline', items: [
          { name: 'Approval Registry', id: 'approval-tracker', icon: AlertCircle },
          { name: 'Printing & Packaging', id: 'printing-pipeline', icon: Printer },
        ]},
        { category: 'People', items: [
          { name: 'Students', id: 'students', icon: Users },
          { name: 'Faculty', id: 'faculty', icon: GraduationCap },
        ]},
        { category: 'System', items: [
          { name: 'Analytics', id: 'analytics', icon: TrendingUp },
          { name: 'Financials', id: 'financials', icon: Boxes },
          { name: 'Settings', id: 'settings', icon: Settings },
        ]}
      ];
    }
    if (role === 'professor') {
      return [
        { category: 'Main Menu', items: [
          { name: 'My Courses', id: 'courses', icon: BookOpen },
          { name: 'Question Bank', id: 'grading', icon: Database }, // Using grading id for now or mapping it
          { name: 'Exam Workspace', id: 'exam-creator', icon: Calendar },
          { name: 'Analytics', id: 'results', icon: TrendingUp },
          { name: 'Help', id: 'settings', icon: HelpIcon },
        ]}
      ];
    }
    return [
      { category: 'My Studies', items: [
        { name: 'Student Portal', id: 'dashboard', icon: LayoutDashboard },
        { name: 'Learning Path', id: 'courses', icon: BookOpen },
      ]},
      { category: 'Evaluation', items: [
        { name: 'Exam Schedule', id: 'exams', icon: Calendar },
        { name: 'Academic Results', id: 'results', icon: TrendingUp },
      ]},
      { category: 'Resources', items: [
        { name: 'Campus Library', id: 'library', icon: Package },
        { name: 'Fees & Payments', id: 'financials', icon: Boxes },
        { name: 'Account Settings', id: 'settings', icon: Settings },
      ]}
    ];
  };

  const navCategories = getNavItems();

  const [selectedCourse] = useState('CS402: Artificial Intelligence & Ethics');

  const getProfileData = () => {
    switch (role) {
      case 'admin':
        return {
          name: 'Institutional Admin',
          role: 'System Controller',
          img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        };
      case 'professor':
        return {
          name: 'Dr. Julian Vane',
          role: 'Senior Faculty',
          img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        };
      case 'student':
        return {
          name: 'Alexander Wright',
          role: 'Computer Science',
          img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        };
      default:
        return {
          name: 'Guest User',
          role: 'Visitor',
          img: ''
        };
    }
  };

  const profile = getProfileData();

  return (
    <div className="flex h-screen bg-[#F1F5F9] font-sans text-slate-800 overflow-hidden">
      {/* Sidebar */}
      <aside className={`w-64 flex flex-col shrink-0 border-r ${role === 'professor' ? 'bg-[#1E3A3A] border-[#2A4F4F]' : 'bg-[#0F172A] border-slate-800'}`}>
        <div className="p-8">
          <div className="flex flex-col gap-1">
            <span className="text-white font-black text-2xl tracking-tight font-display">EduAdmin ERP</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{role} Portal</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-4 overflow-y-auto custom-scrollbar pb-8">
          {navCategories.map((cat) => (
            <div key={cat.category} className="space-y-1.5">
              {role !== 'professor' && <div className="px-4 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{cat.category}</div>}
              {cat.items.map((item) => (
                <button 
                   key={item.id} 
                   onClick={() => setView(item.id as ViewType)}
                   className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all group ${
                     activeView === item.id 
                     ? (role === 'professor' ? 'bg-white text-[#1E3A3A] shadow-lg' : 'bg-white/10 text-white shadow-sm') 
                     : 'text-slate-400 hover:text-white hover:bg-white/5'
                   }`}
                >
                   <item.icon className={`w-4 h-4 ${activeView === item.id ? (role === 'professor' ? 'text-[#1E3A3A]' : 'text-blue-400') : 'text-slate-500 group-hover:text-slate-300'}`} />
                   <span className="text-sm font-bold">{item.name}</span>
                   {activeView === item.id && role !== 'professor' && (
                     <div className="ml-auto w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                   )}
                </button>
              ))}
            </div>
          ))}
        </nav>
        
        <div className={`p-6 mt-auto border-t ${role === 'professor' ? 'border-[#2A4F4F]' : 'border-slate-800'}`}>
          <div className={`${role === 'professor' ? 'bg-white/5' : 'bg-slate-800/50'} p-4 rounded-2xl flex items-center gap-3 mb-4 border border-white/5`}>
            <div className="w-10 h-10 rounded-xl bg-slate-700/50 border border-white/10 flex items-center justify-center overflow-hidden">
               {profile.img ? (
                 <img src={profile.img} alt="Profile" className="w-full h-full object-cover" />
               ) : (
                 <UserCircle className="w-6 h-6 text-slate-400" />
               )}
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[11px] font-black text-white truncate font-display">{profile.name}</span>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{profile.role}</span>
            </div>
          </div>
          <button 
            onClick={logout} 
            className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:text-red-400 rounded-xl transition-all font-bold text-xs group"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-full">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10 shrink-0">
          <div className="flex flex-col">
            <h1 className="text-xl font-black text-slate-900 font-display tracking-tight">
              Academic Portal
            </h1>
          </div>

          {role === 'professor' && (
             <div className="flex-1 flex justify-center px-8">
                <button className="flex items-center gap-3 bg-slate-100 px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-200 transition-all">
                   {selectedCourse}
                   <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
             </div>
          )}
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <HelpCircle className="w-5 h-5" />
              </button>
              <button className="bg-[#0F172A] text-white px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-md hover:bg-slate-800">
                Profile
              </button>
            </div>
          </div>
        </header>

        <div className="p-10 flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

const AdminDashboard = () => (
  <div className="space-y-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shrink-0">
      {[
        { label: 'Total Students', value: '12,482', change: '+12%', color: 'text-blue-600', bg: 'bg-blue-50', icon: Users, progress: 85 },
        { label: 'Active Faculty', value: '842', change: '+3 new', color: 'text-indigo-600', bg: 'bg-indigo-50', icon: GraduationCap, progress: 62 },
        { label: 'Courses Active', value: '312', change: 'Stable', color: 'text-emerald-600', bg: 'bg-emerald-50', icon: BookOpen, progress: 99 },
        { label: 'Revenue', value: '$2.4M', change: '+8.4%', color: 'text-amber-600', bg: 'bg-amber-50', icon: TrendingUp, progress: 45 },
      ].map((stat) => (
        <div key={stat.label} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
          <div className="flex items-end justify-between relative z-10">
            <h3 className="text-3xl font-display font-black text-slate-900">{stat.value}</h3>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ${
                  stat.label === 'Revenue' ? 'bg-amber-500' : 
                  stat.label === 'Total Students' ? 'bg-blue-500' :
                  stat.label === 'Courses Active' ? 'bg-emerald-500' : 'bg-indigo-500'
                }`} 
                style={{ width: `${stat.progress}%` }}
              ></div>
            </div>
          </div>
          <p className={`mt-2 text-[10px] font-bold ${stat.color}`}>{stat.change} vs last semester</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-0">
      <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h3 className="font-bold text-slate-900 font-display tracking-tight">Enrollment Analytics</h3>
            <p className="text-xs text-slate-500 mt-0.5">Live student registration data stream</p>
          </div>
          <div className="flex gap-2">
             <button className="text-xs font-bold text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">Export .CSV</button>
          </div>
        </div>
        <div className="p-8 h-[400px]">
          <EnrollmentChart />
        </div>
      </div>
      
      <div className="flex flex-col gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex-1 flex flex-col">
          <h3 className="font-bold text-slate-900 mb-6 font-display">Faculty Distribution</h3>
          <div className="flex-1 flex flex-col justify-around">
            {[
              { label: 'Engineering', value: 62, color: 'bg-blue-600' },
              { label: 'Business', value: 28, color: 'bg-blue-400' },
              { label: 'Arts & Humanities', value: 10, color: 'bg-slate-300' },
            ].map((dist) => (
              <div key={dist.label} className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>{dist.label}</span>
                  <span>{dist.value}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className={`${dist.color} h-full w-[${dist.value}%]`} style={{ width: `${dist.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0F172A] p-8 rounded-2xl shadow-xl shadow-slate-900/20 text-white relative overflow-hidden shrink-0">
          <div className="relative z-10">
            <h4 className="text-lg font-bold leading-tight font-display">System Resilience</h4>
            <p className="text-xs text-slate-400 mt-2">All campus nodes are operating at optimal peak capacity.</p>
            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-xs font-bold shadow-lg shadow-blue-500/30 transition-all">
              Node Infrastructure
            </button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [role, setRole] = useState<UserRole>(null);
  const [activeView, setActiveView] = useState<ViewType>('dashboard');

  const login = (newRole: UserRole) => {
    setRole(newRole);
    setActiveView('dashboard');
  };
  const logout = () => {
    setRole(null);
    setActiveView('dashboard');
  };

  const renderContent = () => {
    // Shared / Core modules
    if (activeView === 'logistics') return <LogisticsModule />;
    if (activeView === 'exams') return <ExamSchedulingModule />;
    if (activeView === 'financials') return <FinancialsModule />;
    if (activeView === 'printing-pipeline') return <PrintingPipeline />;
    if (activeView === 'approval-tracker') return <ExamApprovalTracker />;
    if (activeView === 'exam-creator') return <ExamPaperCreator />;

    // Admin Specific Views
    if (role === 'admin') {
      if (activeView === 'dashboard') return <AdminDashboard />;
      if (activeView === 'students') return <StudentDirectory />;
      if (activeView === 'faculty') return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div>
              <h3 className="font-bold text-slate-900 font-display">Faculty Management</h3>
              <p className="text-xs text-slate-500 mt-0.5">Academic staff assignments and credentials</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all">+ Add Faculty</button>
          </div>
          <div className="p-8 space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-6 p-6 border border-slate-100 rounded-2xl group hover:border-blue-200 transition-all cursor-pointer">
                 <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">P{i}</div>
                 <div className="flex-1">
                    <h4 className="font-bold text-slate-900 font-display">Prof. Jonathan Miller {i}</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Senior Researcher &bull; Engineering</p>
                 </div>
                 <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-500 hover:bg-slate-200">PROFILE</button>
                    <button className="px-3 py-1.5 bg-blue-600 rounded-lg text-[10px] font-bold text-white hover:bg-blue-700">EDIT</button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      );
      if (activeView === 'analytics') return (
        <div className="space-y-8 h-full flex flex-col">
           <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col flex-1">
            <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <h3 className="font-bold text-slate-900 font-display">Predictive Enrollment Analytics</h3>
              <div className="flex gap-2">
                 <button className="px-3 py-1 border border-slate-200 rounded-lg text-[10px] font-bold uppercase tracking-widest">Q4 2026</button>
              </div>
            </div>
            <div className="p-8 flex-1 min-h-[400px]">
              <EnrollmentChart />
            </div>
          </div>
        </div>
      );
    }

    // Professor Specific Views
    if (role === 'professor') {
      if (activeView === 'dashboard') return (
        <div className="space-y-8">
           <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm flex justify-between items-center relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-black text-slate-900">Good Morning, Prof. Miller</h2>
              <p className="text-slate-500 mt-2 font-medium">You have 3 classes today and 12 grading items pending.</p>
              <div className="mt-8 flex gap-4">
                <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest">ACTIVE SESSION</div>
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest">3 NEW APPOINTMENTS</div>
              </div>
            </div>
            <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
               <GraduationCap className="w-16 h-16 text-slate-300" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="dashboard-card border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-6 font-display">Teaching Schedule</h3>
              <div className="space-y-6">
                {[
                  { time: '09:00 AM', subject: 'Advanced Mathematics 401', room: 'Hall A', status: 'In Progress' },
                  { time: '11:30 AM', subject: 'Quantum Mechanics', room: 'Lab 2', status: 'Next' },
                  { time: '02:00 PM', subject: 'Research Workshop', room: 'Seminar 3', status: 'Scheduled' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                     <div className="text-xs font-bold text-slate-400 w-16 pt-1">{item.time}</div>
                     <div className="flex-1 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all cursor-pointer">
                        <p className="font-bold text-slate-900 text-sm font-display tracking-tight">{item.subject}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{item.room} &bull; {item.status}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dashboard-card bg-[#0F172A] text-white border-none shadow-xl shadow-slate-900/10">
               <h3 className="font-bold mb-6 font-display">Grading Overview</h3>
               <div className="flex-1 flex flex-col justify-between h-full min-h-[220px]">
                  <div className="space-y-6">
                     <div className="flex justify-between items-end">
                        <span className="text-slate-400 text-xs font-bold">Assignment Batch #14</span>
                        <span className="text-2xl font-black">92%</span>
                     </div>
                     <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[92%] transition-all"></div>
                     </div>
                  </div>
                  <button className="w-full py-4 bg-white text-[#0F172A] rounded-2xl font-black text-xs hover:bg-slate-100 transition-all shadow-xl shadow-blue-500/10 uppercase tracking-widest" onClick={() => setActiveView('grading')}>OPEN GRADING HUB</button>
               </div>
            </div>
          </div>
        </div>
      );
      if (activeView === 'courses') return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div>
              <h3 className="font-bold text-slate-900 font-display">Course Management</h3>
              <p className="text-xs text-slate-500 mt-0.5">Assigned courses for Semester Fall 2026</p>
            </div>
          </div>
          <div className="p-8 space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center group hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm font-black text-blue-600 font-display">
                    {i}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 font-display tracking-tight">Advanced Mathematics {i}01</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">42 Students &bull; Room 30{i}</p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all uppercase tracking-widest">Manage Course</div>
              </div>
            ))}
          </div>
        </div>
      );
      if (activeView === 'grading') return <GradingCenter />;
      if (activeView === 'results') return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full flex flex-col">
           <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-slate-900 font-display">Department Results Center</h3>
          </div>
          <div className="p-10 flex-1 flex flex-col">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                   <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-4">Passing Rate</h4>
                   <div className="flex items-end gap-3">
                      <span className="text-5xl font-black text-slate-900 font-display tracking-tight">98.2%</span>
                      <TrendingUp className="text-emerald-500 w-6 h-6 mb-2" />
                   </div>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                   <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-4">Distinction Count</h4>
                   <div className="flex items-end gap-3">
                      <span className="text-5xl font-black text-slate-900 font-display tracking-tight">142</span>
                      <Award className="text-blue-500 w-6 h-6 mb-2" />
                   </div>
                </div>
             </div>
             <div className="flex-1 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center">
                <div className="text-center">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <PieChart className="w-8 h-8 text-slate-300" />
                   </div>
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Department Performance Matrix Loading...</p>
                </div>
             </div>
          </div>
        </div>
      );
    }

    // Student Specific Views
    if (role === 'student') {
      if (activeView === 'dashboard') return (
        <div className="space-y-6 text-center lg:text-left">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 p-12 rounded-[2.5rem] text-white shadow-2xl shadow-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <h1 className="text-4xl font-display font-black mb-2 relative z-10">Hello, Alexander!</h1>
            <p className="text-blue-100 font-medium opacity-90 max-w-md text-lg relative z-10">Your research paper "Modern Web Systems" was graded <span className="text-white font-black underline decoration-amber-400 underline-offset-4">A+</span> by Prof. Smith.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="dashboard-card border border-slate-200 shadow-sm">
              <h3 className="text-xl font-display font-black mb-6">Upcoming Classes</h3>
              <div className="space-y-6 text-left">
                {[
                  { day: 'THU', date: '26', title: 'Distributed Architecture', time: '10:00 AM', room: '402', color: 'bg-blue-500' },
                  { day: 'FRI', date: '27', title: 'Network Security', time: '02:00 PM', room: 'Lab 3', color: 'bg-emerald-500' },
                ].map((c, i) => (
                  <div key={i} className="flex gap-4 items-center group cursor-pointer">
                    <div className="text-center bg-slate-50 px-4 py-3 rounded-2xl min-w-[80px] group-hover:bg-blue-50 transition-colors">
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{c.day}</p>
                      <p className="text-2xl font-black text-slate-900 font-display">{c.date}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-display tracking-tight">{c.title}</p>
                      <p className="text-xs text-slate-500 font-semibold">{c.time} &bull; Room {c.room}</p>
                    </div>
                    <div className={`w-2 h-10 rounded-full ${c.color} opacity-20`}></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dashboard-card border border-slate-200 shadow-sm bg-amber-50/30">
              <h3 className="text-xl font-display font-black mb-6">Academic Alerts</h3>
              <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-amber-100 transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                  <Calendar className="w-32 h-32 text-amber-900" />
                </div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200/50 mb-6">
                  <Calendar className="text-amber-600 w-6 h-6" />
                </div>
                <p className="text-lg font-display font-black text-amber-900 tracking-tight">Semester Finals</p>
                <p className="text-sm text-amber-700 font-medium mt-2 leading-relaxed">Starting in <span className="font-black">12 days</span>. Your study resources have been updated in the library.</p>
                <button 
                  onClick={() => setActiveView('exams')}
                  className="mt-6 text-sm font-black text-amber-600 hover:translate-x-1 transition-transform inline-flex items-center gap-2"
                >
                  VIEW SCHEDULE &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      );
      if (activeView === 'results') return <StudentResults />;
      if (activeView === 'financials') return <FinancialsModule />;
      if (activeView === 'courses') return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h3 className="font-bold text-slate-900 font-display">My Learning Path</h3>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">DEGREE: CS HONORS</span>
          </div>
          <div className="p-10 space-y-8">
            {[
              { year: 'Final Year', sem: 'Semester 7', active: true, progress: 85 },
              { year: 'Third Year', sem: 'Semester 6', active: false, progress: 100 },
              { year: 'Second Year', sem: 'Semester 4', active: false, progress: 100 },
            ].map((p, i) => (
              <div key={i} className={`p-8 rounded-3xl border ${p.active ? 'border-blue-200 bg-blue-50/30' : 'border-slate-100 bg-slate-50 opacity-60'} flex justify-between items-center`}>
                 <div className="space-y-1">
                   <h4 className="font-bold text-slate-900 text-lg font-display">{p.year}</h4>
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{p.sem}</p>
                 </div>
                 <div className="flex items-center gap-8">
                    <div className="w-48 text-right">
                       <p className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase">Completion</p>
                       <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                          <div className="bg-blue-600 h-full" style={{ width: `${p.progress}%` }}></div>
                       </div>
                    </div>
                    <button className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      p.active ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-200 text-slate-500'
                    }`}>VIEW MODULES</button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      );
      if (activeView === 'library') return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
           <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h3 className="font-bold text-slate-900 font-display">Campus Digital Library</h3>
            <div className="flex gap-2">
               <input type="text" placeholder="Global search..." className="px-4 py-2 border border-slate-200 rounded-xl text-xs outline-none focus:ring-2 ring-blue-500/20" />
            </div>
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
             {[1, 2, 3, 4, 5, 6].map(i => (
               <div key={i} className="p-6 border border-slate-100 rounded-2xl group hover:border-blue-200 hover:shadow-xl hover:shadow-slate-100 transition-all cursor-pointer">
                  <div className="w-full aspect-[3/4] bg-slate-100 rounded-xl mb-4 flex items-center justify-center">
                     <BookOpen className="w-12 h-12 text-slate-300" />
                  </div>
                  <h4 className="font-bold text-slate-900 font-display tracking-tight">Resource Volume {i}</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Institutional Archive &bull; PDF</p>
               </div>
             ))}
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-3xl p-16 flex flex-col items-center justify-center border border-slate-200 shadow-sm">
        <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-6">
          <Cpu className="w-10 h-10 text-slate-300 animate-pulse" />
        </div>
        <h2 className="text-2xl font-display font-black text-slate-900 tracking-tight capitalize">{activeView.replace('-', ' ')} Module</h2>
        <p className="text-slate-500 mt-2 max-w-md text-center font-medium">This professional ERP module is being calibrated for the {role} portal. Institutional data synchronization in progress.</p>
        <button 
          onClick={() => setActiveView('dashboard')}
          className="mt-8 text-xs font-black text-blue-600 hover:underline underline-offset-8"
        >
          RETURN TO OVERVIEW
        </button>
      </div>
    );
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={!role ? <Login /> : <Navigate to="/dashboard" />} />
            <Route 
              path="/dashboard" 
              element={
                role ? (
                  <DashboardLayout activeView={activeView} setView={setActiveView}>
                    {renderContent()}
                  </DashboardLayout>
                ) : (
                  <Navigate to="/" />
                )
              } 
            />
          </Routes>
        </AnimatePresence>
      </Router>
    </AuthContext.Provider>
  );
}
