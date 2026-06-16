import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { FaUsers, FaBook, FaRupeeSign, FaClipboardList, FaArrowUp, FaArrowDown, FaEye, FaEdit, FaTrash, FaPlus, FaFilter } from 'react-icons/fa';

const STATS = [
  { label: 'Total Students', value: '52,840', change: '+12%', up: true, icon: <FaUsers size={20} />, color: 'bg-blue-500', light: 'bg-blue-50 text-blue-600' },
  { label: 'Revenue (Month)', value: '₹18.4L', change: '+23%', up: true, icon: <FaRupeeSign size={20} />, color: 'bg-green-500', light: 'bg-green-50 text-green-600' },
  { label: 'Active Courses', value: '34', change: '+2', up: true, icon: <FaBook size={20} />, color: 'bg-purple-500', light: 'bg-purple-50 text-purple-600' },
  { label: 'Tests Attempted', value: '1,24,500', change: '+18%', up: true, icon: <FaClipboardList size={20} />, color: 'bg-gold', light: 'bg-yellow-50 text-yellow-700' },
];

const RECENT_STUDENTS = [
  { name: 'Rahul Sharma', email: 'rahul@gmail.com', course: 'JAIIB', date: 'Jun 30', amount: '₹4,999', status: 'Active' },
  { name: 'Priya Mehta', email: 'priya@email.com', course: 'CAIIB', date: 'Jun 29', amount: '₹5,999', status: 'Active' },
  { name: 'Amit Kumar', email: 'amit@email.com', course: 'RBI Grade B', date: 'Jun 28', amount: '₹9,999', status: 'Active' },
  { name: 'Sneha Patel', email: 'sneha@email.com', course: 'Bank PO', date: 'Jun 27', amount: '₹6,999', status: 'Pending' },
  { name: 'Vikash Singh', email: 'vikash@email.com', course: 'JAIIB', date: 'Jun 26', amount: '₹4,999', status: 'Active' },
];

const RECENT_PAYMENTS = [
  { txn: 'IBS-20250630-001', student: 'Rahul Sharma', course: 'JAIIB', amount: '₹4,999', method: 'Razorpay', status: 'Success' },
  { txn: 'IBS-20250629-002', student: 'Priya Mehta', course: 'CAIIB', amount: '₹5,999', method: 'UPI', status: 'Success' },
  { txn: 'IBS-20250628-003', student: 'Ananya Singh', course: 'Bank PO', amount: '₹6,999', method: 'Card', status: 'Success' },
  { txn: 'IBS-20250628-004', student: 'Mohan Lal', course: 'SSC CGL', amount: '₹3,999', method: 'UPI', status: 'Pending' },
];

const COURSE_PERFORMANCE = [
  { course: 'JAIIB', enrolled: 12450, passRate: 94, revenue: '₹6.2L', trend: 'up' },
  { course: 'CAIIB', enrolled: 8300, passRate: 91, revenue: '₹4.9L', trend: 'up' },
  { course: 'Bank PO', enrolled: 15600, passRate: 78, revenue: '₹8.1L', trend: 'up' },
  { course: 'RBI Grade B', enrolled: 4200, passRate: 82, revenue: '₹4.1L', trend: 'down' },
  { course: 'SSC CGL', enrolled: 9800, passRate: 72, revenue: '₹3.9L', trend: 'up' },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <AdminLayout>
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-heading font-bold text-2xl text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 text-sm mt-0.5">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all">
            <FaFilter size={12} /> Filter
          </button>
          <button className="flex items-center gap-2 btn-primary py-2 px-4 rounded-lg text-sm">
            <FaPlus size={12} /> Add Student
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {STATS.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-11 h-11 ${stat.color} rounded-xl flex items-center justify-center text-white shadow`}>
                {stat.icon}
              </div>
              <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${stat.up ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {stat.up ? <FaArrowUp size={9} /> : <FaArrowDown size={9} />} {stat.change}
              </span>
            </div>
            <div className="font-heading font-extrabold text-2xl text-gray-900">{stat.value}</div>
            <div className="text-gray-500 text-xs mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Revenue bar chart (visual only) */}
      <div className="grid lg:grid-cols-3 gap-5 mb-5">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-heading font-bold text-gray-900">Monthly Revenue</h2>
            <span className="text-xs bg-green-100 text-green-700 font-bold px-2.5 py-1 rounded-lg">+23% vs last month</span>
          </div>
          <div className="flex items-end gap-2 h-40">
            {[65, 72, 58, 80, 75, 90, 85, 95, 78, 88, 92, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: `${h}%` }} />
                <span className="text-[9px] text-gray-400">
                  {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Course enrollment breakdown */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-heading font-bold text-gray-900 mb-5">Enrollment Split</h2>
          <div className="space-y-3">
            {[
              { label: 'JAIIB', pct: 35, color: 'bg-blue-500' },
              { label: 'Bank PO', pct: 28, color: 'bg-green-500' },
              { label: 'CAIIB', pct: 18, color: 'bg-purple-500' },
              { label: 'SSC CGL', pct: 12, color: 'bg-yellow-500' },
              { label: 'Others', pct: 7, color: 'bg-gray-400' },
            ].map(c => (
              <div key={c.label}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-medium text-gray-700">{c.label}</span>
                  <span className="font-bold text-gray-900">{c.pct}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${c.color} rounded-full`} style={{ width: `${c.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tables */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-5">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex gap-1">
            {[['students', 'Recent Students'], ['payments', 'Recent Payments'], ['courses', 'Course Performance']].map(([key, label]) => (
              <button key={key} onClick={() => setActiveTab(key)}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${activeTab === key ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                {label}
              </button>
            ))}
          </div>
          <Link to={`/admin/${activeTab}`} className="text-sm text-primary font-semibold hover:underline">View All →</Link>
        </div>

        <div className="overflow-x-auto">
          {activeTab === 'students' && (
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  {['Student', 'Course', 'Join Date', 'Amount', 'Status', 'Actions'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {RECENT_STUDENTS.map((s, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center text-white text-xs font-bold">
                          {s.name[0]}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{s.name}</div>
                          <div className="text-gray-500 text-xs">{s.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5"><span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-lg font-medium">{s.course}</span></td>
                    <td className="px-5 py-3.5 text-gray-600 text-xs">{s.date}</td>
                    <td className="px-5 py-3.5 font-semibold text-gray-900">{s.amount}</td>
                    <td className="px-5 py-3.5">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${s.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex gap-2">
                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><FaEye size={13} /></button>
                        <button className="p-1.5 text-yellow-500 hover:bg-yellow-50 rounded-lg transition-colors"><FaEdit size={13} /></button>
                        <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><FaTrash size={13} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'payments' && (
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  {['Transaction ID', 'Student', 'Course', 'Amount', 'Method', 'Status'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {RECENT_PAYMENTS.map((p, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 font-mono text-xs text-gray-600">{p.txn}</td>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{p.student}</td>
                    <td className="px-5 py-3.5"><span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-lg font-medium">{p.course}</span></td>
                    <td className="px-5 py-3.5 font-bold text-gray-900">{p.amount}</td>
                    <td className="px-5 py-3.5 text-gray-600 text-xs">{p.method}</td>
                    <td className="px-5 py-3.5">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{p.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'courses' && (
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  {['Course', 'Enrolled', 'Pass Rate', 'Revenue', 'Trend', 'Action'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COURSE_PERFORMANCE.map((c, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-gray-900">{c.course}</td>
                    <td className="px-5 py-3.5 text-gray-700">{c.enrolled.toLocaleString()}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${c.passRate >= 80 ? 'bg-success' : 'bg-yellow-400'}`} style={{ width: `${c.passRate}%` }} />
                        </div>
                        <span className="font-bold text-gray-900 text-xs">{c.passRate}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 font-bold text-success">{c.revenue}</td>
                    <td className="px-5 py-3.5">
                      <span className={`flex items-center gap-1 text-xs font-bold ${c.trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
                        {c.trend === 'up' ? <FaArrowUp size={9} /> : <FaArrowDown size={9} />}
                        {c.trend === 'up' ? 'Growing' : 'Declining'}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <button className="text-xs text-primary font-semibold hover:underline">Manage</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Add New Course', icon: '📚', href: '/admin/courses', color: 'border-blue-200 hover:border-blue-400' },
          { label: 'Upload Question', icon: '❓', href: '/admin/questions', color: 'border-purple-200 hover:border-purple-400' },
          { label: 'Send Notification', icon: '🔔', href: '/admin/notifications', color: 'border-yellow-200 hover:border-yellow-400' },
          { label: 'View Analytics', icon: '📊', href: '/admin/analytics', color: 'border-green-200 hover:border-green-400' },
        ].map(a => (
          <Link key={a.label} to={a.href}
            className={`bg-white border-2 ${a.color} rounded-2xl p-5 flex items-center gap-3 hover:shadow-md transition-all group`}>
            <span className="text-2xl">{a.icon}</span>
            <span className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors">{a.label}</span>
          </Link>
        ))}
      </div>
    </AdminLayout>
  );
}
