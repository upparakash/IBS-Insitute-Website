import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import { useDashboard } from '../../context/DashboardContext';
import { COURSE_CHAPTERS } from '../../data/mockData';
import { FaArrowRight, FaClipboardList, FaTrophy, FaFireAlt, FaChartLine, FaDownload, FaBook, FaBell } from 'react-icons/fa';

const COURSE_NAMES = { jaiib: 'JAIIB Complete Batch', caiib: 'CAIIB ABM + BFM', 'bank-po': 'Bank PO Coaching', 'rbi-grade-b': 'RBI Grade B' };
const COURSE_COLORS = { jaiib: 'from-blue-500 to-blue-700', caiib: 'from-purple-500 to-purple-700', 'bank-po': 'from-emerald-500 to-emerald-700', 'rbi-grade-b': 'from-amber-500 to-amber-700' };

export default function DashboardHome() {
  const { user } = useAuth();
  const { studentStats, currentStudent, testHistory, notifications, getProgress, unreadCount } = useDashboard();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

  const enrolled = currentStudent?.enrolled || ['jaiib'];
  const recentTests = testHistory.slice(0, 4);
  const unreadNotifs = notifications.filter(n => !n.read).slice(0, 3);

  const totalLessons = (courseId) => {
    const chapters = COURSE_CHAPTERS[courseId] || [];
    return chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);
  };

  const stats = studentStats || { coursesEnrolled: enrolled.length, avgScore: 0, testsAttempted: 0, streak: 0 };
  const bestScore = testHistory.length ? Math.max(...testHistory.map(t => t.pct || 0)) : 0;

  return (
    <DashboardLayout>
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-6 text-white mb-6 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute -bottom-8 right-20 w-24 h-24 bg-white/5 rounded-full" />
        <div className="relative">
          <div className="text-white/80 text-sm mb-1">{greeting} 👋</div>
          <h1 className="font-heading font-bold text-2xl mb-1">{user?.name || 'Student'}</h1>
          <p className="text-white/75 text-sm">
            {stats.streak > 0 ? `🔥 ${stats.streak}-day streak! Keep it up.` : 'Start studying today to build your streak!'}
            {enrolled.length > 0 && ` · ${enrolled.length} course${enrolled.length > 1 ? 's' : ''} enrolled`}
          </p>
          {unreadCount > 0 && (
            <div className="mt-2 inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
              <FaBell size={10} /> {unreadCount} new notification{unreadCount > 1 ? 's' : ''}
            </div>
          )}
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
          { icon: <FaBook className="text-blue-600" size={20} />, label: 'Courses Enrolled', value: stats.coursesEnrolled, bg: 'bg-blue-50' },
          { icon: <FaClipboardList className="text-purple-600" size={20} />, label: 'Tests Attempted', value: stats.testsAttempted, bg: 'bg-purple-50' },
          { icon: <FaTrophy className="text-yellow-500" size={20} />, label: 'Best Score', value: bestScore ? `${bestScore}%` : 'N/A', bg: 'bg-yellow-50' },
          { icon: <FaFireAlt className="text-red-500" size={20} />, label: 'Day Streak', value: `${stats.streak} day${stats.streak !== 1 ? 's' : ''}`, bg: 'bg-red-50' },
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
        {/* Left: courses + tests */}
        <div className="lg:col-span-2 space-y-5">
          {/* My Courses */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-gray-900">My Courses</h2>
              <Link to="/dashboard/courses" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">View All <FaArrowRight size={10} /></Link>
            </div>
            <div className="space-y-4">
              {enrolled.map(courseId => {
                const total = totalLessons(courseId);
                const { done, pct } = getProgress(courseId, total);
                return (
                  <div key={courseId} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                    <div className={`w-12 h-12 bg-gradient-to-br ${COURSE_COLORS[courseId] || 'from-gray-400 to-gray-600'} rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0 shadow`}>
                      🎓
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-sm truncate">{COURSE_NAMES[courseId] || courseId}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{done} of {total} lessons completed</div>
                      <div className="mt-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Progress</span>
                          <span className="font-bold text-primary">{pct}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    </div>
                    <Link to={`/dashboard/courses/${courseId}`} className="shrink-0 w-9 h-9 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-xl flex items-center justify-center transition-all">
                      <FaArrowRight size={12} />
                    </Link>
                  </div>
                );
              })}
              {enrolled.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  <div className="text-4xl mb-2">📚</div>
                  <p className="text-sm">No courses enrolled yet.</p>
                  <Link to="/courses" className="text-primary text-sm font-semibold hover:underline mt-1 block">Browse Courses →</Link>
                </div>
              )}
            </div>
          </div>

          {/* Recent Tests */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-gray-900">Recent Tests</h2>
              <Link to="/dashboard/tests" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">All Tests <FaArrowRight size={10} /></Link>
            </div>
            {recentTests.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <div className="text-4xl mb-2">📝</div>
                <p className="text-sm">No tests attempted yet. Start one below!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {recentTests.map((t) => {
                  const pct = t.pct || 0;
                  return (
                    <div key={t.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold
                        ${pct >= 60 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {pct}%
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 text-sm truncate">{t.testName}</div>
                        <div className="text-gray-500 text-xs">{new Date(t.date).toLocaleDateString('en-IN')} · {t.correct}/{t.total} correct</div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${pct >= 60 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {pct >= 60 ? 'Pass' : 'Review'}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
            <Link to="/dashboard/tests" className="mt-4 block text-center text-sm font-semibold text-primary border border-primary/30 py-2.5 rounded-xl hover:bg-primary/5 transition-all">
              + Start New Mock Test
            </Link>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-5">
          {/* Notifications */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-bold text-gray-900">Notifications</h2>
              {unreadCount > 0 && <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{unreadCount} new</span>}
            </div>
            {unreadNotifs.length === 0 ? (
              <p className="text-gray-400 text-sm text-center py-4">All caught up!</p>
            ) : (
              <div className="space-y-3">
                {unreadNotifs.map(n => (
                  <div key={n.id} className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="font-medium text-gray-900 text-xs leading-snug mb-0.5">{n.title}</div>
                    <div className="text-gray-500 text-[10px]">{n.date}</div>
                  </div>
                ))}
              </div>
            )}
            <Link to="/dashboard/notifications" className="mt-3 block text-center text-xs font-semibold text-primary hover:underline">View All →</Link>
          </div>

          {/* Performance snapshot */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaChartLine className="text-primary" size={16} />
              <h2 className="font-heading font-bold text-gray-900">Performance</h2>
            </div>
            {testHistory.length === 0 ? (
              <p className="text-gray-400 text-sm text-center py-4">Take a test to see your analysis.</p>
            ) : (
              <div className="space-y-3">
                {testHistory.slice(0, 4).map((t, i) => {
                  const pct = t.pct || 0;
                  return (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-gray-700 truncate max-w-[120px]">{t.testName?.split(' ').slice(0, 3).join(' ')}</span>
                        <span className="font-bold text-gray-900">{pct}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${pct >= 60 ? 'bg-success' : 'bg-red-400'}`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
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
              {['JAIIB PPB Complete Notes 2026', 'IE&IFS Formula Sheet', 'CAIIB ABM Cheatsheet'].map(d => (
                <a key={d} href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary py-2 border-b border-gray-100 last:border-0 transition-colors group">
                  <span className="text-base">📄</span>
                  <span className="flex-1 truncate text-xs">{d}</span>
                  <FaDownload size={11} className="text-gray-400 group-hover:text-primary" />
                </a>
              ))}
            </div>
            <Link to="/dashboard/materials" className="mt-3 block text-center text-xs font-semibold text-primary hover:underline">All Materials →</Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
