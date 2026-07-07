import AdminLayout from '../../layouts/AdminLayout';
import { useDashboard } from '../../context/DashboardContext';
import { FaChartLine, FaUsers, FaRupeeSign, FaTrophy } from 'react-icons/fa';

export default function AnalyticsPage() {
  const { students, payments, adminStats } = useDashboard();

  const monthlyRevenue = [
    { month: 'Jan', rev: 285000 }, { month: 'Feb', rev: 342000 }, { month: 'Mar', rev: 398000 },
    { month: 'Apr', rev: 450000 }, { month: 'May', rev: 412000 }, { month: 'Jun', rev: adminStats.totalRevenue },
  ];
  const maxRev = Math.max(...monthlyRevenue.map(m => m.rev));

  const cityBreakdown = students.reduce((acc, s) => {
    acc[s.city] = (acc[s.city] || 0) + 1; return acc;
  }, {});
  const topCities = Object.entries(cityBreakdown).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const maxCity = topCities[0]?.[1] || 1;

  const courseEnrolment = [
    { name: 'JAIIB',      count: adminStats.jaiibStudents,   color: 'bg-blue-500' },
    { name: 'CAIIB',      count: adminStats.caiibStudents,   color: 'bg-purple-500' },
    { name: 'Bank PO',    count: adminStats.bankPoStudents,  color: 'bg-emerald-500' },
  ];
  const totalEnrolled = courseEnrolment.reduce((s, c) => s + c.count, 0) || 1;

  const bankBreakdown = students.reduce((acc, s) => {
    const bank = s.bank?.split(' – ')[0] || s.bank || 'Other';
    acc[bank] = (acc[bank] || 0) + 1; return acc;
  }, {});
  const topBanks = Object.entries(bankBreakdown).sort((a, b) => b[1] - a[1]).slice(0, 5);

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="font-heading font-bold text-2xl text-gray-900">Analytics</h1>
        <p className="text-gray-500 text-sm">Platform-wide performance metrics and insights</p>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { icon: <FaUsers size={18} className="text-blue-600" />,   label: 'Total Students',  value: adminStats.totalStudents,   bg: 'bg-blue-50'   },
          { icon: <FaUsers size={18} className="text-green-600" />,  label: 'Active Students', value: adminStats.activeStudents,  bg: 'bg-green-50'  },
          { icon: <FaRupeeSign size={18} className="text-gold" />,   label: 'Total Revenue',   value: `₹${(adminStats.totalRevenue / 100000).toFixed(1)}L`, bg: 'bg-yellow-50' },
          { icon: <FaTrophy size={18} className="text-purple-600" />,label: 'Pass Rate (est.)', value: '94%',                   bg: 'bg-purple-50' },
        ].map(s => (
          <div key={s.label} className={`glass-card p-5 ${s.bg} rounded-2xl flex items-center gap-3`}>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow shrink-0">{s.icon}</div>
            <div>
              <div className="font-heading font-bold text-xl text-gray-900">{s.value}</div>
              <div className="text-gray-500 text-xs">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue chart */}
        <div className="glass-card p-6">
          <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
            <FaChartLine className="text-primary" /> Monthly Revenue (₹)
          </h2>
          <div className="flex items-end gap-3 h-40">
            {monthlyRevenue.map(m => (
              <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[9px] text-gray-500 font-bold">₹{(m.rev / 1000).toFixed(0)}K</span>
                <div className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg transition-all"
                  style={{ height: `${(m.rev / maxRev) * 120}px` }} />
                <span className="text-[10px] text-gray-500">{m.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Course breakdown donut-ish */}
        <div className="glass-card p-6">
          <h2 className="font-heading font-bold text-gray-900 mb-5">Course Enrolment Split</h2>
          <div className="space-y-4">
            {courseEnrolment.map(c => {
              const pct = Math.round((c.count / totalEnrolled) * 100);
              return (
                <div key={c.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-gray-700">{c.name}</span>
                    <span className="font-bold text-gray-900">{c.count} <span className="text-gray-400 font-normal text-xs">({pct}%)</span></span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${c.color} rounded-full`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top cities */}
        <div className="glass-card p-6">
          <h2 className="font-heading font-bold text-gray-900 mb-5">Students by City</h2>
          <div className="space-y-3">
            {topCities.map(([city, count]) => (
              <div key={city}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">{city}</span>
                  <span className="font-bold text-gray-900">{count}</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: `${(count / maxCity) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banks */}
        <div className="glass-card p-6">
          <h2 className="font-heading font-bold text-gray-900 mb-5">Students by Bank</h2>
          <div className="space-y-3">
            {topBanks.map(([bank, count]) => (
              <div key={bank} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-sm font-medium text-gray-700 truncate max-w-[200px]">{bank}</span>
                <span className="font-bold text-primary">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
