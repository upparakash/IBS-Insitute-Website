import { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useDashboard } from '../../context/DashboardContext';
import { MOCK_FAQ } from '../../data/mockData';
import { FaHeadset, FaWhatsapp, FaPhone, FaChevronDown, FaChevronUp, FaPaperPlane } from 'react-icons/fa';

export default function SupportPage() {
  const { tickets, addTicket, replyTicket } = useDashboard();
  const [openFaq, setOpenFaq] = useState(null);
  const [openTicket, setOpenTicket] = useState(null);
  const [newTicket, setNewTicket] = useState({ subject: '', firstMessage: '' });
  const [replyText, setReplyText] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!newTicket.subject.trim() || !newTicket.firstMessage.trim()) return;
    addTicket(newTicket);
    setNewTicket({ subject: '', firstMessage: '' });
    setShowForm(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleReply = (ticketId) => {
    if (!replyText.trim()) return;
    replyTicket(ticketId, replyText, 'student');
    setReplyText('');
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="font-heading font-bold text-2xl text-gray-900 mb-1">Help & Support</h1>
        <p className="text-gray-500 text-sm">Get help with your courses, payments, or any issues</p>
      </div>

      {submitted && (
        <div className="bg-success/10 text-success px-4 py-3 rounded-xl mb-5 text-sm font-medium border border-success/20">
          ✅ Support ticket submitted! Our team will respond within 24 hours.
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: FAQ + tickets */}
        <div className="lg:col-span-2 space-y-6">
          {/* FAQ */}
          <div className="glass-card p-6">
            <h2 className="font-heading font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {MOCK_FAQ.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-gray-50 transition-colors">
                    <span className="font-medium text-gray-900 text-sm">{faq.q}</span>
                    {openFaq === i ? <FaChevronUp size={12} className="text-gray-400 shrink-0" /> : <FaChevronDown size={12} className="text-gray-400 shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* My Tickets */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-gray-900">My Support Tickets</h2>
              <button onClick={() => setShowForm(!showForm)}
                className="btn-primary text-xs px-4 py-2 rounded-xl">+ New Ticket</button>
            </div>

            {showForm && (
              <form onSubmit={handleCreateTicket} className="bg-primary/5 rounded-2xl p-4 mb-5 border border-primary/20 space-y-3">
                <h3 className="font-semibold text-gray-900 text-sm">Create New Ticket</h3>
                <input type="text" placeholder="Subject *" required value={newTicket.subject}
                  onChange={e => setNewTicket(p => ({ ...p, subject: e.target.value }))}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
                <textarea placeholder="Describe your issue *" rows={3} required value={newTicket.firstMessage}
                  onChange={e => setNewTicket(p => ({ ...p, firstMessage: e.target.value }))}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all resize-none" />
                <div className="flex gap-2">
                  <button type="submit" className="btn-primary text-sm px-5 py-2 rounded-xl">Submit</button>
                  <button type="button" onClick={() => setShowForm(false)} className="px-5 py-2 border border-gray-300 text-gray-600 rounded-xl text-sm hover:bg-gray-50 transition-all">Cancel</button>
                </div>
              </form>
            )}

            {tickets.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <FaHeadset size={36} className="mx-auto mb-3 opacity-30" />
                <p className="text-sm">No tickets yet. Create one above if you need help.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {tickets.map(t => (
                  <div key={t.id} className="border border-gray-100 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenTicket(openTicket === t.id ? null : t.id)}
                      className="w-full flex items-start justify-between px-4 py-4 text-left hover:bg-gray-50 transition-colors">
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{t.subject}</div>
                        <div className="text-gray-400 text-xs mt-0.5">{t.id} · {t.createdAt}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${t.status === 'Open' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                          {t.status}
                        </span>
                        {openTicket === t.id ? <FaChevronUp size={11} className="text-gray-400" /> : <FaChevronDown size={11} className="text-gray-400" />}
                      </div>
                    </button>

                    {openTicket === t.id && (
                      <div className="border-t border-gray-100 p-4 space-y-3">
                        {(t.messages || []).map((msg, i) => (
                          <div key={i} className={`flex ${msg.from === 'student' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs px-4 py-2.5 rounded-2xl text-sm ${msg.from === 'student' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}>
                              <p>{msg.text}</p>
                              <div className={`text-[10px] mt-1 ${msg.from === 'student' ? 'text-white/60' : 'text-gray-400'}`}>{msg.time}</div>
                            </div>
                          </div>
                        ))}
                        {t.status === 'Open' && (
                          <div className="flex gap-2 mt-3">
                            <input type="text" placeholder="Type a reply..." value={replyText}
                              onChange={e => setReplyText(e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
                            <button onClick={() => handleReply(t.id)}
                              className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all">
                              <FaPaperPlane size={13} />
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: contact options */}
        <div className="space-y-4">
          <div className="glass-card p-6">
            <h3 className="font-heading font-bold text-gray-900 mb-4">Contact Us Directly</h3>
            <div className="space-y-3">
              <a href="https://wa.me/918138962298" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-all">
                <FaWhatsapp className="text-green-500" size={22} />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">WhatsApp</div>
                  <div className="text-gray-500 text-xs">+91 81389 62298</div>
                </div>
              </a>
              <a href="tel:+918138962298"
                className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 transition-all">
                <FaPhone className="text-blue-500" size={18} />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Call Support</div>
                  <div className="text-gray-500 text-xs">Mon–Sat: 9 AM – 7 PM</div>
                </div>
              </a>
            </div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <h3 className="font-heading font-bold text-gray-900 mb-1">Response Time</h3>
            <div className="text-gray-500 text-sm">Tickets: 24 hours</div>
            <div className="text-gray-500 text-sm">WhatsApp: 2 hours</div>
            <div className="text-gray-500 text-sm">Calls: Immediate</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
