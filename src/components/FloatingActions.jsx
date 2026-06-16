import { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp, FaPhone, FaHeadset, FaTimes } from 'react-icons/fa';
import { SITE } from '../data/siteData';

const COURSES_OPTIONS = [
  'JAIIB', 'CAIIB', 'Bank PO / IBPS', 'RBI Grade B', 'SSC CGL / CHSL',
  'Internal Promotions', 'DRA Certification', 'Digital Banking', 'AML & KYC',
  'Treasury Professional', 'IT Security', 'Forex / Trade Finance', 'Bank Interview Training', 'Other',
];

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', course: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setCallbackOpen(false); setForm({ name: '', phone: '', course: '' }); }, 2500);
  };

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=Hi, I want to know more about IBS Bank Career courses`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-2xl shadow-2xl transition-all hover:-translate-y-1 hover:shadow-green-500/40"
      >
        <FaWhatsapp size={22} className="shrink-0" />
        <span className="hidden sm:block text-sm font-semibold whitespace-nowrap">Chat on WhatsApp</span>
      </a>

      {/* Call button */}
      <a
        href={`tel:${SITE.phone}`}
        className="fixed bottom-20 left-6 z-50 w-12 h-12 bg-primary hover:bg-accent text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all hover:-translate-y-1"
      >
        <FaPhone size={16} />
      </a>

      {/* Request Callback button */}
      <button
        onClick={() => setCallbackOpen(true)}
        className="fixed bottom-36 left-6 z-50 flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-3 py-2.5 rounded-2xl shadow-2xl transition-all hover:-translate-y-1 text-xs font-semibold"
      >
        <FaHeadset size={15} />
        <span className="hidden sm:block whitespace-nowrap">Request Callback</span>
      </button>

      {/* Request Callback Modal */}
      {callbackOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setCallbackOpen(false)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-7 animate-fadeIn">
            <button
              onClick={() => setCallbackOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
            >
              <FaTimes size={13} />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <FaHeadset className="text-gold" size={26} />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">Request a Callback</h3>
              <p className="text-gray-500 text-sm mt-1">Our counsellors will call you within 24 hours</p>
            </div>

            {submitted ? (
              <div className="text-center py-6">
                <div className="text-5xl mb-3">✅</div>
                <div className="font-heading font-bold text-gray-900 mb-1">Request Received!</div>
                <p className="text-gray-500 text-sm">Our team will call you shortly on <strong>+91 {form.phone}</strong></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                />
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">+91</span>
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    required
                    maxLength={10}
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value.replace(/\D/, '') })}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                  />
                </div>
                <select
                  value={form.course}
                  onChange={e => setForm({ ...form, course: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-gray-600"
                >
                  <option value="">Select Course of Interest</option>
                  {COURSES_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <button
                  type="submit"
                  disabled={form.phone.length !== 10}
                  className="w-full bg-gold hover:bg-gold/90 disabled:opacity-50 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all text-sm"
                >
                  <FaHeadset size={14} /> Request Callback
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We call between 9 AM – 7 PM, Mon to Sat
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary hover:bg-accent text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all hover:-translate-y-1"
        >
          <FaArrowUp size={16} />
        </button>
      )}
    </>
  );
}
