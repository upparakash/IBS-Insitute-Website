import { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useDashboard } from '../../context/DashboardContext';
import { FaSearch, FaDownload, FaRupeeSign } from 'react-icons/fa';

export default function PaymentsPage() {
  const { payments, adminStats } = useDashboard();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = payments.filter(p => {
    const matchStatus = filter === 'all' || p.status === filter;
    const q = search.toLowerCase();
    const matchSearch = !search || p.studentName.toLowerCase().includes(q) || p.course.toLowerCase().includes(q) || p.txnId?.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  const totalPaid = payments.filter(p => p.status === 'Paid').reduce((s, p) => s + p.amount, 0);
  const totalPending = payments.filter(p => p.status === 'Pending').reduce((s, p) => s + p.amount, 0);

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="font-heading font-bold text-2xl text-gray-900">Payments</h1>
        <p className="text-gray-500 text-sm">{payments.length} total transactions</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Collected',  value: `₹${(totalPaid / 100000).toFixed(2)}L`, color: 'text-success',   bg: 'bg-green-50' },
          { label: 'Pending',          value: `₹${totalPending.toLocaleString()}`,     color: 'text-yellow-600', bg: 'bg-yellow-50' },
          { label: 'Transactions',     value: payments.length,                          color: 'text-primary',   bg: 'bg-blue-50' },
          { label: 'Pending Count',    value: adminStats.pendingPayments,               color: 'text-red-500',   bg: 'bg-red-50' },
        ].map(s => (
          <div key={s.label} className={`glass-card p-5 ${s.bg} rounded-2xl`}>
            <div className={`font-heading font-bold text-2xl ${s.color}`}>{s.value}</div>
            <div className="text-gray-500 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <FaSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search student, course, transaction ID..." value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
        </div>
        <div className="flex gap-2">
          {['all', 'Paid', 'Pending', 'Refunded'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold capitalize transition-all ${filter === f ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr className="text-xs text-gray-500 text-left">
                <th className="px-4 py-3 font-semibold">Transaction</th>
                <th className="px-4 py-3 font-semibold">Student</th>
                <th className="px-4 py-3 font-semibold">Course</th>
                <th className="px-4 py-3 font-semibold">Method</th>
                <th className="px-4 py-3 font-semibold text-right">Amount</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(p => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-xs text-gray-400 font-mono">{p.id}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900">{p.studentName}</div>
                    <div className="text-[10px] text-gray-400">{p.txnId}</div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{p.course}</td>
                  <td className="px-4 py-3">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-lg">{p.method}</span>
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-gray-900">₹{p.amount.toLocaleString()}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{p.date}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${
                      p.status === 'Paid' ? 'bg-green-100 text-green-700'
                      : p.status === 'Pending' ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'}`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="text-center py-12 text-gray-400">No payments found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
