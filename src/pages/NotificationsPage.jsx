import { useState } from 'react';
import Layout from '../layouts/Layout';
import SEOHead from '../components/SEOHead';
import { FaBell, FaCalendarAlt, FaArrowRight, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

const NOTIFICATIONS = [
  { id: 1, title: 'JAIIB November 2026 Exam — Registration Closes 31 August 2026', date: 'July 5, 2026', category: 'JAIIB', type: 'Registration', priority: 'high', link: '#', desc: 'IIBF has opened registrations for JAIIB November 2026 examination. Last date to register is 31 August 2026. Exam likely in November 2026.' },
  { id: 2, title: 'CAIIB November 2026 Notification Released', date: 'July 3, 2026', category: 'CAIIB', type: 'Notification', priority: 'high', link: '#', desc: 'CAIIB November 2026 official notification released. Registration closes 31 August 2026. Begin preparation now.' },
  { id: 3, title: 'IBPS RRB PO / Clerk 2026 — Apply Before 5 July 2026', date: 'July 1, 2026', category: 'Bank PO', type: 'Notification', priority: 'high', link: '#', desc: 'IBPS RRB PO and Office Assistant (Clerk) 2026 notification is out. Online applications close July 5, 2026. Prelims expected in August 2026.' },
  { id: 4, title: 'SBI JIBO Notification Out — Apply by 15 July 2026', date: 'June 30, 2026', category: 'Bank PO', type: 'Notification', priority: 'high', link: '#', desc: 'SBI Junior India Based Officer (JIBO) internal promotion notification released. Eligible SBI clerical staff must apply by 15 July 2026.' },
  { id: 5, title: 'RBI Assistant 2026 Notification — Apply by 10 July 2026', date: 'June 28, 2026', category: 'RBI Grade B', type: 'Notification', priority: 'high', link: '#', desc: 'RBI has released notification for RBI Assistant 2026 vacancies. Online application closes July 10, 2026. Prelims expected in August 2026.' },
  { id: 6, title: 'SBI Circle Based Officer 2026 — Last Date 20 July 2026', date: 'June 25, 2026', category: 'Bank PO', type: 'Notification', priority: 'high', link: '#', desc: 'SBI Circle Based Officer notification is out. Online applications close July 20, 2026. This is a direct officer recruitment.' },
  { id: 7, title: 'IIBF Certificate Exam Schedule August 2026 Released', date: 'June 22, 2026', category: 'JAIIB', type: 'Exam Date', priority: 'medium', link: '#', desc: 'IIBF has released the certificate examination schedule for August 2026. Courses include Digital Banking, AML/KYC, DRA, BC-BF and more. Register before seats close.' },
  { id: 8, title: 'SBI & IBPS Exam Calendar 2026-27 Released', date: 'June 20, 2026', category: 'Bank PO', type: 'Alert', priority: 'medium', link: '#', desc: 'SBI, IBPS and RRB have released their tentative exam calendar for 2026-27. Plan your preparation accordingly. Key dates include IBPS PO Oct 2026, SBI PO Dec 2026.' },
  { id: 9, title: 'JAIIB New 4-Paper Pattern Effective 2025 — What Changed', date: 'June 18, 2026', category: 'JAIIB', type: 'Syllabus', priority: 'medium', link: '#', desc: 'IIBF revised JAIIB pattern to 4 papers (IE&IFS, PPB, AFM, RBWM) effective 2025. Old 3-paper structure no longer applies. IBS coaching covers new pattern comprehensively.' },
  { id: 10, title: 'CAIIB Elective Paper Options 2026 — Choose Wisely', date: 'June 15, 2026', category: 'CAIIB', type: 'Syllabus', priority: 'medium', link: '#', desc: 'CAIIB candidates must choose one elective paper: Rural Banking, Financial Advising, HRM, IT & Digital Banking, or Central Banking. IBS coaches all 5 electives.' },
  { id: 11, title: 'IBS New Batch Starting 17 July 2026 — IBPS/SBI/RRB/RBI', date: 'June 12, 2026', category: 'Bank PO', type: 'Alert', priority: 'medium', link: '#', desc: 'IBS Bank Career\'s Online Evening Batch for IBPS PO, SBI PO, RRB PO, and RBI Assistant starts July 17, 2026. Evening timing (6–9 PM). Limited seats — enroll now.' },
  { id: 12, title: 'IIBF DRA Exam Results — April 2026 Batch', date: 'June 10, 2026', category: 'DRA', type: 'Result', priority: 'low', link: '#', desc: 'DRA exam results for April 2026 batch declared by IIBF. 91% pass rate. IBS students achieved outstanding results in this batch.' },
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
      <SEOHead
        title="Banking Exam Notifications 2026 | JAIIB CAIIB IBPS SBI RBI | IBS Bank Career"
        description="Latest banking exam notifications 2026 — JAIIB, CAIIB registration, IBPS PO, SBI Clerk, RBI Assistant, IIBF certificate exam schedules. Stay updated with IBS Bank Career."
        keywords="JAIIB 2026 notification, CAIIB exam date 2026, IBPS PO 2026 notification, banking exam calendar 2026, bank exam alert, IIBF exam schedule 2026"
        canonical="/notifications"
      />
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
