import DashboardLayout from '../../layouts/DashboardLayout';
import { useDashboard } from '../../context/DashboardContext';
import { FaBell, FaCheckDouble, FaCalendar, FaUsers, FaTrophy, FaBook, FaInfo } from 'react-icons/fa';

const TYPE_ICON = { exam: FaCalendar, batch: FaUsers, result: FaTrophy, general: FaInfo };
const TYPE_COLOR = { exam: 'bg-blue-100 text-blue-600', batch: 'bg-purple-100 text-purple-600', result: 'bg-yellow-100 text-yellow-600', general: 'bg-gray-100 text-gray-600' };

export default function DashNotificationsPage() {
  const { notifications, markNotifRead, markAllRead, unreadCount } = useDashboard();

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading font-bold text-2xl text-gray-900 mb-1">Notifications</h1>
          <p className="text-gray-500 text-sm">{unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}</p>
        </div>
        {unreadCount > 0 && (
          <button onClick={markAllRead}
            className="flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 px-4 py-2 rounded-xl hover:bg-primary/5 transition-all">
            <FaCheckDouble size={12} /> Mark All Read
          </button>
        )}
      </div>

      <div className="space-y-3">
        {notifications.map(n => {
          const Icon = TYPE_ICON[n.type] || FaBell;
          const colorCls = TYPE_COLOR[n.type] || 'bg-gray-100 text-gray-600';
          return (
            <div key={n.id} onClick={() => !n.read && markNotifRead(n.id)}
              className={`glass-card p-5 flex gap-4 cursor-pointer transition-all hover:shadow-md ${!n.read ? 'border-l-4 border-primary bg-primary/[0.02]' : ''}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${colorCls}`}>
                <Icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <h3 className={`font-semibold text-sm leading-snug ${!n.read ? 'text-gray-900' : 'text-gray-700'}`}>{n.title}</h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {!n.read && <span className="w-2 h-2 bg-primary rounded-full" />}
                    <span className="text-xs text-gray-400">{n.date}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mt-1">{n.message}</p>
              </div>
            </div>
          );
        })}
        {notifications.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <FaBell size={40} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm">No notifications yet.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
