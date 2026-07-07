import { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { FaEdit, FaTrash, FaPlus, FaCheckCircle, FaNewspaper, FaFilePdf, FaCalendarAlt } from 'react-icons/fa';

const RESOURCES = {
  rbi_circulars: [
    { id: 1, title: 'Master Direction – Priority Sector Lending (Updated 2026)', date: 'June 10, 2026', category: 'Regulatory', status: 'Active' },
    { id: 2, title: 'Digital Lending Guidelines – Revised Framework 2026', date: 'May 28, 2026', category: 'Digital Banking', status: 'Active' },
    { id: 3, title: 'Prompt Corrective Action Framework – Updated 2026', date: 'May 15, 2026', category: 'Regulatory', status: 'Active' },
    { id: 4, title: 'RBI Circular on Wilful Defaulters – Enhanced Framework', date: 'April 30, 2026', category: 'Credit', status: 'Active' },
    { id: 5, title: 'Foreign Exchange Management – Revised Limits 2026', date: 'April 20, 2026', category: 'Forex', status: 'Active' },
  ],
  current_affairs: [
    { id: 1, title: 'RBI keeps repo rate unchanged at 6.50% – June 2026 MPC', date: 'June 7, 2026', category: 'Monetary Policy', status: 'Active' },
    { id: 2, title: 'SBI Q4 FY2026 net profit rises 18% to ₹18,432 crore', date: 'June 5, 2026', category: 'Banking', status: 'Active' },
    { id: 3, title: 'IBPS announces CRP PO/MT-XVI notification for 2026', date: 'June 3, 2026', category: 'Recruitment', status: 'Active' },
    { id: 4, title: 'India\'s GDP grows at 7.4% in Q4 FY2026', date: 'June 1, 2026', category: 'Economy', status: 'Active' },
  ],
  free_pdfs: [
    { id: 1, title: 'JAIIB IE&IFS Complete Notes 2026', exam: 'JAIIB', pages: '120', status: 'Active' },
    { id: 2, title: 'JAIIB PPB Study Material 2026', exam: 'JAIIB', pages: '145', status: 'Active' },
    { id: 3, title: 'CAIIB ABM Notes 2026', exam: 'CAIIB', pages: '160', status: 'Active' },
    { id: 4, title: 'Banking Awareness Handbook 2026', exam: 'General', pages: '95', status: 'Active' },
    { id: 5, title: 'Current Affairs Monthly – June 2026', exam: 'General', pages: '48', status: 'Active' },
  ],
};

const TABS = ['RBI Circulars', 'Current Affairs', 'Free PDFs'];

export default function ResourcesAdminPage() {
  const [tab, setTab] = useState(0);
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  return (
    <AdminLayout>
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-heading font-bold text-2xl text-gray-900">Resources Manager</h1>
          <p className="text-gray-500 text-sm mt-0.5">Manage RBI Circulars, Current Affairs and Free PDF resources</p>
        </div>
        <button onClick={() => setAdding(!adding)}
          className="flex items-center gap-2 btn-primary py-2 px-4 rounded-xl text-sm">
          <FaPlus size={11} /> Add Resource
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'RBI Circulars', count: RESOURCES.rbi_circulars.length, icon: FaNewspaper, color: 'bg-yellow-500' },
          { label: 'Current Affairs', count: RESOURCES.current_affairs.length, icon: FaCalendarAlt, color: 'bg-blue-500' },
          { label: 'Free PDFs', count: RESOURCES.free_pdfs.length, icon: FaFilePdf, color: 'bg-red-500' },
        ].map(s => (
          <div key={s.label} className="glass-card p-5 flex items-center gap-3">
            <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center text-white shrink-0`}>
              <s.icon size={14} />
            </div>
            <div>
              <div className="font-heading font-bold text-xl text-gray-900">{s.count}</div>
              <div className="text-gray-500 text-xs">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Add Panel */}
      {adding && (
        <div className="glass-card p-5 mb-5 border-l-4 border-primary">
          <h3 className="font-heading font-semibold text-gray-900 mb-4">Add New Resource</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Title</label>
              <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Resource title..."
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Type</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary">
                <option>RBI Circular</option>
                <option>Current Affairs</option>
                <option>Free PDF</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="btn-primary py-2 px-5 rounded-xl text-sm">Save Resource</button>
            <button onClick={() => setAdding(false)} className="border border-gray-300 text-gray-600 px-5 py-2 rounded-xl text-sm hover:bg-gray-50">Cancel</button>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {TABS.map((t, i) => (
          <button key={t} onClick={() => setTab(i)}
            className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-all ${
              tab === i ? 'bg-primary text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>
            {t}
          </button>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          {tab === 0 && (
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr className="text-xs text-gray-500 text-left">
                  <th className="px-5 py-3.5 font-semibold">Title</th>
                  <th className="px-4 py-3.5 font-semibold">Date</th>
                  <th className="px-4 py-3.5 font-semibold">Category</th>
                  <th className="px-4 py-3.5 font-semibold">Status</th>
                  <th className="px-4 py-3.5 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {RESOURCES.rbi_circulars.map(r => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="px-5 py-3.5 font-medium text-gray-900">{r.title}</td>
                    <td className="px-4 py-3.5 text-gray-500 text-xs">{r.date}</td>
                    <td className="px-4 py-3.5"><span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">{r.category}</span></td>
                    <td className="px-4 py-3.5"><span className="flex items-center gap-1 text-xs text-success font-semibold"><FaCheckCircle size={10} /> {r.status}</span></td>
                    <td className="px-4 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="text-xs text-primary border border-primary/30 bg-primary/5 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 transition-all"><FaEdit size={9} /></button>
                        <button className="text-xs text-red-500 border border-red-200 bg-red-50 px-2.5 py-1.5 rounded-lg hover:bg-red-100 transition-all"><FaTrash size={9} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {tab === 1 && (
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr className="text-xs text-gray-500 text-left">
                  <th className="px-5 py-3.5 font-semibold">Headline</th>
                  <th className="px-4 py-3.5 font-semibold">Date</th>
                  <th className="px-4 py-3.5 font-semibold">Category</th>
                  <th className="px-4 py-3.5 font-semibold">Status</th>
                  <th className="px-4 py-3.5 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {RESOURCES.current_affairs.map(r => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="px-5 py-3.5 font-medium text-gray-900">{r.title}</td>
                    <td className="px-4 py-3.5 text-gray-500 text-xs">{r.date}</td>
                    <td className="px-4 py-3.5"><span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{r.category}</span></td>
                    <td className="px-4 py-3.5"><span className="flex items-center gap-1 text-xs text-success font-semibold"><FaCheckCircle size={10} /> {r.status}</span></td>
                    <td className="px-4 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="text-xs text-primary border border-primary/30 bg-primary/5 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 transition-all"><FaEdit size={9} /></button>
                        <button className="text-xs text-red-500 border border-red-200 bg-red-50 px-2.5 py-1.5 rounded-lg hover:bg-red-100 transition-all"><FaTrash size={9} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {tab === 2 && (
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr className="text-xs text-gray-500 text-left">
                  <th className="px-5 py-3.5 font-semibold">PDF Title</th>
                  <th className="px-4 py-3.5 font-semibold">Exam</th>
                  <th className="px-4 py-3.5 font-semibold">Pages</th>
                  <th className="px-4 py-3.5 font-semibold">Status</th>
                  <th className="px-4 py-3.5 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {RESOURCES.free_pdfs.map(r => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="px-5 py-3.5 font-medium text-gray-900">{r.title}</td>
                    <td className="px-4 py-3.5"><span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">{r.exam}</span></td>
                    <td className="px-4 py-3.5 text-gray-500 text-xs">{r.pages} pages</td>
                    <td className="px-4 py-3.5"><span className="flex items-center gap-1 text-xs text-success font-semibold"><FaCheckCircle size={10} /> {r.status}</span></td>
                    <td className="px-4 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="text-xs text-primary border border-primary/30 bg-primary/5 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 transition-all"><FaEdit size={9} /></button>
                        <button className="text-xs text-red-500 border border-red-200 bg-red-50 px-2.5 py-1.5 rounded-lg hover:bg-red-100 transition-all"><FaTrash size={9} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
