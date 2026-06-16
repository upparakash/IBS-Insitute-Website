import { useState } from 'react';
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaUsers, FaArrowRight, FaChair, FaPhone } from 'react-icons/fa';
import { SCHEDULE, SITE } from '../data/siteData';

export default function SchedulePage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'JAIIB / CAIIB', 'Certificate Courses', 'Bank PO / SSC'];

  const filtered = SCHEDULE.filter(item => {
    if (filter === 'All') return true;
    if (filter === 'JAIIB / CAIIB') return item.course.includes('JAIIB') || item.course.includes('CAIIB');
    if (filter === 'Certificate Courses') return !item.course.includes('JAIIB') && !item.course.includes('CAIIB') && !item.course.includes('Bank PO') && !item.course.includes('Internal');
    if (filter === 'Bank PO / SSC') return item.course.includes('Bank PO') || item.course.includes('SSC') || item.course.includes('Internal');
    return true;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            📅 Tentative Schedule 2026
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">Upcoming Batch Schedule</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            All upcoming batches for JAIIB, CAIIB, Certificate Courses and Bank Coaching — register early to secure your seat
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/courses" className="btn-gold flex items-center gap-2">Enroll Now <FaArrowRight size={12} /></Link>
            <a href={`tel:${SITE.phone}`} className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-all flex items-center gap-2">
              <FaPhone size={13} /> Call to Register
            </a>
          </div>
        </div>
      </section>

      {/* Notice banner */}
      <div className="bg-gold/10 border-b border-gold/20 py-3">
        <div className="container-custom text-center text-sm text-gray-700 font-medium">
          ⚠️ This is a <strong>tentative schedule</strong>. Dates may change. Call <a href={`tel:${SITE.phone}`} className="text-primary font-semibold hover:underline">{SITE.phone}</a> or WhatsApp us to confirm your batch.
        </div>
      </div>

      {/* Filter */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm py-4">
        <div className="container-custom flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <FaCalendarAlt className="text-primary" size={14} />
            Filter Batches:
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-all ${filter === cat ? 'bg-primary text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-500">{filtered.length} programs</div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, idx) => (
              <div key={idx} className="glass-card overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
                {/* Header */}
                <div className={`relative h-28 bg-gradient-to-br ${item.color} p-5 flex items-center gap-4`}>
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base leading-tight">{item.course}</h3>
                    <div className="text-white/80 text-xs mt-1">{item.batches.length} batch{item.batches.length > 1 ? 'es' : ''} available</div>
                  </div>
                </div>

                {/* Batch details */}
                <div className="p-5 space-y-4">
                  {item.batches.map((batch, bi) => (
                    <div key={bi} className={`rounded-xl p-4 ${bi === 0 ? 'bg-primary/5 border border-primary/15' : 'bg-gray-50 border border-gray-100'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${bi === 0 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
                          {batch.type}
                        </span>
                        {batch.seats !== null && (
                          <span className={`flex items-center gap-1 text-xs font-bold ${batch.seats <= 15 ? 'text-red-600' : 'text-success'}`}>
                            <FaChair size={10} />
                            {batch.seats <= 15 ? `Only ${batch.seats} seats left!` : `${batch.seats} seats`}
                          </span>
                        )}
                      </div>
                      <div className="space-y-1.5 text-xs text-gray-600">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt size={10} className="text-primary shrink-0" />
                          <span><strong>Start:</strong> {batch.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaClock size={10} className="text-accent shrink-0" />
                          <span><strong>Time:</strong> {batch.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaUsers size={10} className="text-gold shrink-0" />
                          <span><strong>Days:</strong> {batch.days}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-2 pt-1">
                    <Link to="/contact"
                      className="flex-1 flex items-center justify-center gap-2 btn-primary py-2.5 rounded-xl text-sm">
                      Enroll Now <FaArrowRight size={11} />
                    </Link>
                    <a href={`https://wa.me/${SITE.whatsapp}?text=Hi, I want to enroll in ${item.course} batch`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center px-3 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all text-xs font-semibold">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-center text-white">
            <h3 className="font-heading font-bold text-2xl mb-2">Need a Custom Batch?</h3>
            <p className="text-white/80 mb-5">We offer weekend batches, early morning slots and personalised coaching. Call us to schedule.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`tel:${SITE.phone}`} className="btn-gold flex items-center gap-2">
                <FaPhone size={13} /> {SITE.phone}
              </a>
              <a href={`tel:${SITE.phone2}`} className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-all flex items-center gap-2">
                <FaPhone size={13} /> {SITE.phone2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
