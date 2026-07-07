import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useDashboard } from '../../context/DashboardContext';
import { FaUsers, FaBook, FaRupeeSign, FaClipboardList, FaArrowRight, FaBell, FaTicketAlt, FaChartLine } from 'react-icons/fa';

export default function AdminDashboard() {
  const { adminStats, students, payments, notifications, tickets } = useDashboard();

  const recentStudents = [...students].sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate)).slice(0, 5);
  const recentPayments = [...payments].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
  const unread = notifications.filter(n => !n.read).length;

  const statCards = [
    { label: 'Total Students',    value: adminStats.totalStudents,                icon: <FaUsers size={20} />,       color: 'bg-blue-500',   light: 'bg-blue-50 text-blue-600',   link: '/admin/students' },
    { label: 'Revenue (All-time)', value: `₹${(adminStats.totalRevenue / 100000).toFixed(2)}L`, icon: <FaRupeeSign size={20} />, color: 'bg-green-500',  light: 'bg-green-50 text-green-600', link: '/admin/payments' },
    { label: 'Active Courses',    value: 4,                                       icon: <FaBook size={20} />,        color: 'bg-purple-500', light: 'bg-purple-50 text-purple-600', link: '/admin/courses' },
    { label: 'Open Tickets',      value: adminStats.openTickets,                  icon: <FaTicketAlt size={20} />,   color: 'bg-amber-500',  light: 'bg-amber-50 text-amber-600',  link: '/admin/settings' },
  ];

  const courseBreakdown = [
    { name: 'JAIIB',       count: adminStats.jaiibStudents,   color: 'bg-blue-500',   pct: Math.round((adminStats.jaiibStudents / Math.max(adminStats.totalStudents, 1)) * 100) },
    { name: 'CAIIB',       count: adminStats.caiibStudents,   color: 'bg-purple-500', pct: Math.round((adminStats.caiibStudents / Math.max(adminStats.totalStudents, 1)) * 100) },
    { name: 'Bank PO',     count: adminStats.bankPoStudents,  color: 'bg-emerald-500',pct: Math.round((adminStats.bankPoStudents / Math.max(adminStats.totalStudents, 1)) * 100) },
  ];

  return (
    <AdminLayout>
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-heading font-bold text-2xl text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 text-sm mt-0.5">Welcome back! Here's a real-time overview.</p>
        </div>
        <div className="flex gap-2">
          {unread > 0 && (
            <Link to="/admin/notifications" className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-xl text-sm font-semibold">
              <FaBell size={13} /> {unread} Unread
            </Link>
          )}
          <Link to="/admin/students" className="flex items-center gap-2 btn-primary py-2 px-4 rounded-xl text-sm">
            + Add Student
          </Link>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statCards.map(s => (
          <Link key={s.label} to={s.link} className="glass-card p-5 flex items-center gap-3 hover:shadow-xl transition-all group">
            <div className={`w-12 h-12 ${s.color} rounded-2xl flex items-center justify-center text-white shadow shrink-0`}>{s.icon}</div>
            <div className="min-w-0">
              <div className="font-heading font-bold text-2xl text-gray-900">{s.value}</div>
              <div className="text-gray-500 text-xs truncate">{s.label}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Students */}
        <div className="lg:col-span-2 space-y-5">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-gray-900">Recent Enrolments</h2>
              <Link to="/admin/students" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">View All <FaArrowRight size={10} /></Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-gray-500 border-b border-gray-100 text-left">
                    <th className="pb-3 font-semibold">Student</th>
                    <th className="pb-3 font-semibold">Courses</th>
                    <th className="pb-3 font-semibold">Joined</th>
                    <th className="pb-3 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentStudents.map(s => (
                    <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 pr-4">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 bg-gradient-to-br ${s.color} rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0`}>{s.avatar}</div>
                          <div>
                            <div className="font-medium text-gray-900">{s.name}</div>
                            <div className="text-gray-400 text-[10px]">{s.bank}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 pr-4">
                        <div className="flex flex-wrap gap-1">
                          {s.enrolled.map(c => (
                            <span key={c} className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">{c.toUpperCase()}</span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 text-gray-500 text-xs">{s.joinDate}</td>
                      <td className="py-3 text-right">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${s.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Payments */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-gray-900">Recent Payments</h2>
              <Link to="/admin/payments" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">View All <FaArrowRight size={10} /></Link>
            </div>
            <div className="space-y-3">
              {recentPayments.map(p => (
                <div key={p.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${p.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                    {p.status === 'Paid' ? '✓' : '⏳'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 text-sm truncate">{p.studentName}</div>
                    <div className="text-gray-400 text-xs">{p.course} · {p.method} · {p.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-sm">₹{p.amount.toLocaleString()}</div>
                    <span className={`text-[10px] font-bold ${p.status === 'Paid' ? 'text-green-600' : 'text-yellow-600'}`}>{p.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: course breakdown + quick links */}
        <div className="space-y-5">
          <div className="glass-card p-6">
            <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
              <FaChartLine className="text-primary" size={16} /> Enrolment by Course
            </h2>
            <div className="space-y-4">
              {courseBreakdown.map(c => (
                <div key={c.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-gray-700">{c.name}</span>
                    <span className="font-bold text-gray-900">{c.count} <span className="text-gray-400 font-normal text-xs">({c.pct}%)</span></span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${c.color} rounded-full`} style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-5">
            <h2 className="font-heading font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="space-y-2">
              {[
                { label: 'Manage Students', to: '/admin/students', icon: '👥' },
                { label: 'Course Manager', to: '/admin/courses', icon: '📚' },
                { label: 'Payments', to: '/admin/payments', icon: '💳' },
                { label: 'Question Bank', to: '/admin/questions', icon: '❓' },
                { label: 'Notifications', to: '/admin/notifications', icon: '🔔' },
                { label: 'Analytics', to: '/admin/analytics', icon: '📊' },
              ].map(item => (
                <Link key={item.to} to={item.to}
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-primary/5 hover:text-primary transition-all group text-sm font-medium text-gray-700">
                  <span className="flex items-center gap-2.5"><span>{item.icon}</span>{item.label}</span>
                  <FaArrowRight size={10} className="text-gray-400 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
