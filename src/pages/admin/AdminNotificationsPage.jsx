import { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useDashboard } from '../../context/DashboardContext';
import { FaBell, FaPlus, FaTimes, FaCheckDouble } from 'react-icons/fa';

const TYPE_OPTIONS = ['exam', 'batch', 'result', 'general'];

export default function AdminNotificationsPage() {
  const { notifications, addNotification, markAllRead, unreadCount } = useDashboard();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ type: 'general', title: '', message: '', target: 'all' });
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.message.trim()) return;
    addNotification(form);
    setForm({ type: 'general', title: '', message: '', target: 'all' });
    setShowForm(false);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="font-heading font-bold text-2xl text-gray-900">Notifications</h1>
          <p className="text-gray-500 text-sm">{unreadCount} unread · {notifications.length} total</p>
        </div>
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <button onClick={markAllRead} className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all">
              <FaCheckDouble size={12} /> Mark All Read
            </button>
          )}
          <button onClick={() => setShowForm(true)} className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl">
            <FaPlus size={12} /> Send Notification
          </button>
        </div>
      </div>

      {sent && (
        <div className="bg-success/10 text-success px-4 py-3 rounded-xl mb-5 text-sm font-medium border border-success/20">
          ✅ Notification sent successfully!
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-lg shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-gray-900 text-xl">Send Notification</h2>
              <button onClick={() => setShowForm(false)} className="w-8 h-8 flex items-center justify-center rounded-xl bg-gray-100"><FaTimes size={14} /></button>
            </div>
            <form onSubmit={handleSend} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Type</label>
                  <select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all capitalize">
                    {TYPE_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Target</label>
                  <select value={form.target} onChange={e => setForm(p => ({ ...p, target: e.target.value }))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all">
                    <option value="all">All Students</option>
                    <option value="jaiib">JAIIB Students</option>
                    <option value="caiib">CAIIB Students</option>
                    <option value="bank-po">Bank PO Students</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Title *</label>
                <input type="text" value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} required
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Message *</label>
                <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} required rows={3}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all resize-none" />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="flex-1 btn-primary py-2.5 rounded-xl text-sm flex items-center justify-center gap-2">
                  <FaBell size={13} /> Send Notification
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl text-sm hover:bg-gray-50 transition-all">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {notifications.map(n => (
          <div key={n.id} className={`glass-card p-5 flex gap-4 ${!n.read ? 'border-l-4 border-primary' : ''}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm shrink-0 ${!n.read ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}`}>
              {n.type === 'exam' ? '📅' : n.type === 'batch' ? '👥' : n.type === 'result' ? '🏆' : '📢'}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className={`font-semibold text-sm ${!n.read ? 'text-gray-900' : 'text-gray-600'}`}>{n.title}</h3>
                <div className="flex items-center gap-2 shrink-0">
                  {!n.read && <span className="text-[10px] bg-primary text-white font-bold px-2 py-0.5 rounded-full">New</span>}
                  <span className="text-xs text-gray-400">{n.date}</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">{n.message}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] capitalize font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-lg">{n.type}</span>
                {n.target && n.target !== 'all' && (
                  <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">{n.target.toUpperCase()}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
