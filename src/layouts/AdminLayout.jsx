import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  FaTachometerAlt, FaUsers, FaBook,
  FaCreditCard, FaCog, FaSignOutAlt, FaBars,
  FaBell, FaSearch, FaChartLine, FaQuestionCircle,
  FaClipboardList, FaNewspaper, FaLayerGroup
} from 'react-icons/fa';

export const ADMIN_NAV = [
  { icon: FaTachometerAlt, label: 'Dashboard',    href: '/admin' },
  { icon: FaUsers,         label: 'Students',     href: '/admin/students' },
  { icon: FaBook,          label: 'Courses',      href: '/admin/courses' },
  { icon: FaLayerGroup,    label: 'Exam Pages',   href: '/admin/exams' },
  { icon: FaNewspaper,     label: 'Resources',    href: '/admin/resources' },
  { icon: FaQuestionCircle,label: 'Question Bank',href: '/admin/questions' },
  { icon: FaCreditCard,    label: 'Payments',     href: '/admin/payments' },
  { icon: FaBell,          label: 'Notifications',href: '/admin/notifications' },
  { icon: FaChartLine,     label: 'Analytics',    href: '/admin/analytics' },
  { icon: FaCog,           label: 'Settings',     href: '/admin/settings' },
];

export default function AdminLayout({ children }) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-60 bg-gray-900 z-50 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center font-bold text-white text-sm">A</div>
            <div>
              <div className="font-heading font-bold text-white text-sm">IBS Admin</div>
              <div className="text-gray-400 text-xs">Control Panel</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
          {ADMIN_NAV.map(({ icon: Icon, label, href }) => {
            const active = location.pathname === href;
            return (
              <Link key={href} to={href} onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${active ? 'bg-primary text-white' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}>
                <Icon size={15} className="shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">
              {user?.name?.[0]}
            </div>
            <div className="overflow-hidden">
              <div className="text-white text-xs font-semibold truncate">{user?.name}</div>
              <div className="text-gray-400 text-[10px]">Administrator</div>
            </div>
          </div>
          <button onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all">
            <FaSignOutAlt size={13} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 h-14 flex items-center px-5 gap-4 sticky top-0 z-30 shadow-sm">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500 hover:text-primary">
            <FaBars size={18} />
          </button>

          <div className="relative flex-1 max-w-xs">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={12} />
            <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-gray-100 text-sm rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary/30 transition-all" />
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button className="relative p-2 text-gray-500 hover:text-primary rounded-lg">
              <FaBell size={16} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
            <a href="/" target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-xs text-gray-500 hover:text-primary border border-gray-200 px-3 py-1.5 rounded-lg transition-all">
              View Site ↗
            </a>
          </div>
        </header>

        <main className="flex-1 p-5 lg:p-7 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
