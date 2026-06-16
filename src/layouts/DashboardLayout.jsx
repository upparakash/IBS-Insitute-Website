import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  FaHome, FaBook, FaClipboardList, FaFileAlt, FaBell,
  FaCog, FaSignOutAlt, FaBars, FaTimes, FaUser, FaTrophy,
  FaChartBar, FaDownload, FaHeadset
} from 'react-icons/fa';

const NAV = [
  { icon: FaHome, label: 'Dashboard', href: '/dashboard' },
  { icon: FaBook, label: 'My Courses', href: '/dashboard/courses' },
  { icon: FaClipboardList, label: 'Mock Tests', href: '/dashboard/tests' },
  { icon: FaChartBar, label: 'Performance', href: '/dashboard/performance' },
  { icon: FaFileAlt, label: 'Study Material', href: '/dashboard/materials' },
  { icon: FaBell, label: 'Notifications', href: '/dashboard/notifications' },
  { icon: FaDownload, label: 'Downloads', href: '/dashboard/downloads' },
  { icon: FaHeadset, label: 'Support', href: '/dashboard/support' },
  { icon: FaCog, label: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-primary z-50 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-auto`}>
        {/* Logo */}
        <div className="p-5 border-b border-white/10">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-white.png" alt="IBS" className="h-8 object-contain" onError={e => { e.currentTarget.style.display = 'none'; }} />
            <span className="font-heading font-bold text-white text-lg">IBS Bank Career</span>
          </Link>
        </div>

        {/* User info */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center text-white font-bold text-sm shrink-0">
              {user?.name?.[0]?.toUpperCase() || 'U'}
            </div>
            <div className="overflow-hidden">
              <div className="text-white font-semibold text-sm truncate">{user?.name}</div>
              <div className="text-white/60 text-xs truncate">{user?.email || user?.phone}</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {NAV.map(({ icon: Icon, label, href }) => {
            const active = location.pathname === href;
            return (
              <Link key={href} to={href} onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${active ? 'bg-white text-primary shadow-lg' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}>
                <Icon size={16} className={active ? 'text-primary' : ''} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <button onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:bg-red-500/20 hover:text-red-300 transition-all">
            <FaSignOutAlt size={15} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 shadow-sm h-16 flex items-center px-5 gap-4 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-600 hover:text-primary p-2 rounded-lg">
            <FaBars size={18} />
          </button>

          <div className="flex-1">
            <h2 className="font-heading font-bold text-gray-900 text-sm">
              {NAV.find(n => n.href === location.pathname)?.label || 'Dashboard'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/dashboard/notifications" className="relative p-2 text-gray-500 hover:text-primary rounded-lg transition-colors">
              <FaBell size={17} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Link>
            <Link to="/dashboard/settings" className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-sm">
              {user?.name?.[0]?.toUpperCase() || 'U'}
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-5 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
