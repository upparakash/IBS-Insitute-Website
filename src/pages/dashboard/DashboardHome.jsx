import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import { FaArrowRight, FaClipboardList, FaTrophy, FaFireAlt, FaChartLine, FaCalendarAlt, FaBell, FaDownload, FaBook } from 'react-icons/fa';

const MY_COURSES = [
  { id: 'jaiib', name: 'JAIIB Complete Batch', progress: 65, nextClass: 'July 15 — PPB Chapter 12', color: 'from-blue-500 to-blue-700' },
  { id: 'caiib', name: 'CAIIB ABM + BFM', progress: 30, nextClass: 'July 16 — ABM Chapter 5', color: 'from-purple-500 to-purple-700' },
];

const RECENT_TESTS = [
  { name: 'JAIIB PPB Full Mock Test 1', score: 72, total: 100, date: 'June 28', status: 'Completed' },
  { name: 'JAIIB IE&IFS Chapter Test', score: 18, total: 25, date: 'June 25', status: 'Completed' },
  { name: 'CAIIB ABM Mock Test 1', score: null, date: 'July 15', status: 'Upcoming' },
];

const UPCOMING_BATCHES = [
  { title: 'JAIIB PPB Live Class', date: 'Today, 7:00 PM', faculty: 'Prof. Anil Kumar', badge: 'Live Today', badgeColor: 'bg-red-500' },
  { title: 'CAIIB ABM Revision', date: 'July 16, 6:30 PM', faculty: 'Dr. Meera Sharma', badge: 'Tomorrow', badgeColor: 'bg-blue-500' },
  { title: 'Mock Test: JAIIB Full', date: 'July 20, 10:00 AM', faculty: 'Auto-graded', badge: 'Upcoming', badgeColor: 'bg-gray-500' },
];

export default function DashboardHome() {
  const { user } = useAuth();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <DashboardLayout>
      {/* Welcome */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-6 text-white mb-6 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute -bottom-8 right-20 w-24 h-24 bg-white/5 rounded-full" />
        <div className="relative">
          <div className="text-white/80 text-sm mb-1">{greeting} 👋</div>
          <h1 className="font-heading font-bold text-2xl mb-1">{user?.name}</h1>
          <p className="text-white/75 text-sm">Keep going! You're 65% through JAIIB. Target: Pass in August 2025</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/dashboard/tests" className="bg-white text-primary font-semibold text-sm px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/90 transition-all shadow">
              <FaClipboardList size={13} /> Take Mock Test
            </Link>
            <Link to="/dashboard/courses" className="bg-white/20 hover:bg-white/30 text-white font-semibold text-sm px-4 py-2 rounded-xl border border-white/30 transition-all">
              Continue Learning
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { icon: <FaBook className="text-blue-600" size={20} />, label: 'Courses Enrolled', value: '2', bg: 'bg-blue-50' },
          { icon: <FaClipboardList className="text-purple-600" size={20} />, label: 'Tests Attempted', value: '12', bg: 'bg-purple-50' },
          { icon: <FaTrophy className="text-gold" size={20} />, label: 'Best Score', value: '89%', bg: 'bg-yellow-50' },
          { icon: <FaFireAlt className="text-red-500" size={20} />, label: 'Day Streak', value: '7 Days', bg: 'bg-red-50' },
        ].map(({ icon, label, value, bg }) => (
          <div key={label} className="glass-card p-5 flex items-center gap-3">
            <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center shrink-0`}>{icon}</div>
            <div>
              <div className="font-heading font-bold text-xl text-gray-900">{value}</div>
              <div className="text-gray-500 text-xs">{label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* My Courses */}
        <div className="lg:col-span-2 space-y-5">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-gray-900">My Courses</h2>
              <Link to="/dashboard/courses" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">View All <FaArrowRight size={10} /></Link>
            </div>
            <div className="space-y-4">
              {MY_COURSES.map(course => (
                <div key={course.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className={`w-12 h-12 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0 shadow`}>
                    🎓
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-sm truncate">{course.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5 flex items-center gap-1"><FaCalendarAlt size={9} /> {course.nextClass}</div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-bold text-primary">{course.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all" style={{ width: `${course.progress}%` }} />
                      </div>
                    </div>
                  </div>
                  <Link to={`/dashboard/courses/${course.id}`} className="shrink-0 w-9 h-9 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-xl flex items-center justify-center transition-all">
                    <FaArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Tests */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-gray-900">Recent Tests</h2>
              <Link to="/dashboard/tests" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">All Tests <FaArrowRight size={10} /></Link>
            </div>
            <div className="space-y-3">
              {RECENT_TESTS.map((t, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold
                    ${t.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' : t.score / t.total >= 0.6 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {t.status === 'Upcoming' ? '📅' : `${Math.round(t.score / t.total * 100)}%`}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 text-sm truncate">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.date} • {t.status === 'Upcoming' ? 'Scheduled' : `${t.score}/${t.total} marks`}</div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${t.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
            <Link to="/dashboard/tests" className="mt-4 block text-center text-sm font-semibold text-primary border border-primary/30 py-2.5 rounded-xl hover:bg-primary/5 transition-all">
              + Start New Mock Test
            </Link>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-5">
          {/* Upcoming classes */}
          <div className="glass-card p-6">
            <h2 className="font-heading font-bold text-gray-900 mb-4">Upcoming Classes</h2>
            <div className="space-y-3">
              {UPCOMING_BATCHES.map((b, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-medium text-gray-900 text-sm leading-snug">{b.title}</span>
                    <span className={`${b.badgeColor} text-white text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5`}>{b.badge}</span>
                  </div>
                  <div className="text-xs text-gray-500">{b.date}</div>
                  <div className="text-xs text-accent font-medium mt-0.5">{b.faculty}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance snapshot */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaChartLine className="text-primary" size={16} />
              <h2 className="font-heading font-bold text-gray-900">Performance</h2>
            </div>
            <div className="space-y-3">
              {[
                { subject: 'PPB', score: 76, color: 'bg-blue-500' },
                { subject: 'IE&IFS', score: 68, color: 'bg-purple-500' },
                { subject: 'RBWM', score: 82, color: 'bg-green-500' },
              ].map(s => (
                <div key={s.subject}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-gray-700">{s.subject}</span>
                    <span className="font-bold text-gray-900">{s.score}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <Link to="/dashboard/performance" className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:underline">
              Full Analysis <FaArrowRight size={10} />
            </Link>
          </div>

          {/* Quick downloads */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaDownload className="text-primary" size={15} />
              <h2 className="font-heading font-bold text-gray-900">Quick Downloads</h2>
            </div>
            <div className="space-y-2">
              {['JAIIB PPB Notes PDF', 'IE&IFS Formula Sheet', 'CAIIB ABM Cheatsheet'].map(d => (
                <a key={d} href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary py-2 border-b border-gray-100 last:border-0 transition-colors group">
                  <span className="text-base">📄</span>
                  <span className="flex-1 truncate">{d}</span>
                  <FaDownload size={11} className="text-gray-400 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
