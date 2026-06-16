import { useState } from 'react';
import Layout from '../layouts/Layout';
import { FaBell, FaCalendarAlt, FaArrowRight, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

const NOTIFICATIONS = [
  { id: 1, title: 'JAIIB May/June 2025 Exam Registration Begins', date: 'June 30, 2025', category: 'JAIIB', type: 'Registration', priority: 'high', link: '#', desc: 'IIBF has opened registrations for JAIIB May/June 2025 examination. Last date to apply is July 20, 2025.' },
  { id: 2, title: 'CAIIB November 2025 Notification Released', date: 'June 28, 2025', category: 'CAIIB', type: 'Notification', priority: 'high', link: '#', desc: 'CAIIB November 2025 official notification released. Exams will be held on November 22-23, 2025.' },
  { id: 3, title: 'IBPS PO 2025-26 Official Notification', date: 'June 25, 2025', category: 'Bank PO', type: 'Notification', priority: 'high', link: '#', desc: 'IBPS has released official notification for IBPS PO 2025-26 with 4455 vacancies across member banks.' },
  { id: 4, title: 'RBI Grade B 2025 Preliminary Exam Date Announced', date: 'June 20, 2025', category: 'RBI Grade B', type: 'Exam Date', priority: 'high', link: '#', desc: 'RBI Grade B 2025 Phase 1 examination scheduled for August 17, 2025. Admit cards available from August 5.' },
  { id: 5, title: 'SSC CGL 2025 Tier 1 Exam Schedule Released', date: 'June 18, 2025', category: 'SSC', type: 'Exam Date', priority: 'medium', link: '#', desc: 'SSC CGL 2025 Tier 1 will be held from September 13 to September 30, 2025.' },
  { id: 6, title: 'SBI PO 2025 Final Results Declared', date: 'June 15, 2025', category: 'Bank PO', type: 'Result', priority: 'high', link: '#', desc: 'SBI PO 2025 final merit list published. 2,000 candidates selected across all circles.' },
  { id: 7, title: 'IBPS Clerk 2025-26 Notification Expected in August', date: 'June 12, 2025', category: 'Bank PO', type: 'Alert', priority: 'medium', link: '#', desc: 'IBPS Clerk 2025-26 notification expected in second week of August 2025.' },
  { id: 8, title: 'JAIIB New Syllabus Implementation from 2025', date: 'June 10, 2025', category: 'JAIIB', type: 'Syllabus', priority: 'medium', link: '#', desc: 'IIBF has revised JAIIB syllabus effective from November 2025 exams. Check new module structure.' },
  { id: 9, title: 'RBI Assistant 2025 Notification Released', date: 'June 8, 2025', category: 'RBI Grade B', type: 'Notification', priority: 'medium', link: '#', desc: 'RBI has released notification for 926 Assistant vacancies. Online application window opens July 1.' },
  { id: 10, title: 'NABARD Grade A 2025 Exam Date Announced', date: 'June 5, 2025', category: 'Other', type: 'Exam Date', priority: 'low', link: '#', desc: 'NABARD Grade A 2025 preliminary exam date announced as August 10, 2025.' },
  { id: 11, title: 'CAIIB ABM Module Change Effective November 2025', date: 'June 2, 2025', category: 'CAIIB', type: 'Syllabus', priority: 'medium', link: '#', desc: 'Important changes announced in CAIIB ABM module topics. New case study based questions added.' },
  { id: 12, title: 'IIBF DRA Exam Results — March 2025 Batch', date: 'May 30, 2025', category: 'DRA', type: 'Result', priority: 'low', link: '#', desc: 'DRA exam results for March 2025 batch declared. Pass percentage: 78%.' },
];

const CATEGORIES = ['All', 'JAIIB', 'CAIIB', 'Bank PO', 'RBI Grade B', 'SSC', 'DRA', 'Other'];
const TYPES = ['All', 'Notification', 'Registration', 'Exam Date', 'Result', 'Syllabus', 'Alert'];

const PRIORITY_STYLE = {
  high: 'bg-red-100 text-red-700 border-l-4 border-red-500',
  medium: 'bg-yellow-50 text-yellow-700 border-l-4 border-yellow-400',
  low: 'bg-gray-50 border-l-4 border-gray-300',
};
const PRIORITY_BADGE = {
  high: 'bg-red-500 text-white',
  medium: 'bg-yellow-500 text-white',
  low: 'bg-gray-300 text-gray-700',
};

export default function NotificationsPage() {
  const [category, setCategory] = useState('All');
  const [type, setType] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = NOTIFICATIONS.filter(n =>
    (category === 'All' || n.category === category) &&
    (type === 'All' || n.type === type) &&
    (search === '' || n.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🔔 Exam Alerts
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">Notifications & Alerts</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
            Stay ahead — all banking exam notifications, registration dates, results and syllabus updates in one place
          </p>
          <div className="max-w-md mx-auto relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input type="text" placeholder="Search notifications..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-3.5 rounded-2xl text-sm focus:outline-none bg-white text-gray-900 shadow-xl" />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 py-4 shadow-sm sticky top-0 z-20">
        <div className="container-custom space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-gray-500 uppercase mr-1">Exam:</span>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${category === c ? 'bg-primary text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-gray-500 uppercase mr-1">Type:</span>
            {TYPES.map(t => (
              <button key={t} onClick={() => setType(t)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${type === t ? 'bg-accent text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {t}
              </button>
            ))}
            <span className="ml-auto text-sm text-gray-500">{filtered.length} notifications</span>
          </div>
        </div>
      </section>

      {/* Notifications list */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="space-y-3">
            {filtered.map(notif => (
              <div key={notif.id} className={`glass-card p-5 ${PRIORITY_STYLE[notif.priority]} hover:shadow-lg transition-all group`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <FaBell className="text-primary" size={16} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-lg">{notif.category}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${PRIORITY_BADGE[notif.priority]}`}>
                        {notif.priority === 'high' ? '🔥 Urgent' : notif.priority === 'medium' ? '📌 Important' : '📋 Info'}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-lg">{notif.type}</span>
                    </div>

                    <h3 className="font-heading font-bold text-gray-900 text-base mb-1.5 group-hover:text-primary transition-colors leading-snug">
                      {notif.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">{notif.desc}</p>

                    <div className="flex items-center justify-between mt-2">
                      <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                        <FaCalendarAlt size={10} /> {notif.date}
                      </span>
                      <a href={notif.link} className="flex items-center gap-1.5 text-accent font-semibold text-xs hover:underline group-hover:gap-2 transition-all">
                        View Details <FaExternalLinkAlt size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <FaBell className="text-6xl mx-auto mb-4 opacity-20" />
              <p className="text-lg font-medium">No notifications found</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe strip */}
      <section className="py-12 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-2">Never Miss an Exam Notification</h2>
          <p className="text-white/80 mb-6 text-sm">Get instant alerts on WhatsApp & Email for all banking exam updates</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={`https://wa.me/919876543210?text=Subscribe me to IBS exam alerts`} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-lg">
              📱 WhatsApp Alerts
            </a>
            <a href="/register" className="bg-white text-primary font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-all hover:bg-gray-100">
              📧 Email Alerts <FaArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
