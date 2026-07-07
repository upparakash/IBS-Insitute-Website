import { useState } from 'react';
import Layout from '../layouts/Layout';
import SEOHead from '../components/SEOHead';
import { FaStar, FaPlay, FaQuoteLeft } from 'react-icons/fa';

const TESTIMONIAL_DATA = [
  { id: 1, name: 'Rahul Sharma', role: 'JAIIB — SBI', rating: 5, text: 'IBS Bank Career completely transformed my preparation approach. The faculty is exceptional and study material is top-notch. Cleared JAIIB in first attempt with 83%.', color: 'from-blue-500 to-blue-700', video: null, course: 'JAIIB' },
  { id: 2, name: 'Priya Mehta', role: 'CAIIB — PNB', rating: 5, text: 'After failing twice, IBS helped me understand the right strategy. The mock tests were so accurate! Finally cleared all CAIIB papers with great scores.', color: 'from-purple-500 to-purple-700', video: null, course: 'CAIIB' },
  { id: 3, name: 'Amit Kumar', role: 'RBI Grade B — Selected', rating: 5, text: 'Dr. Meera\'s economics classes are world-class. The structured preparation, daily tests and personalized feedback got me AIR 42 in RBI Grade B Phase 1.', color: 'from-yellow-500 to-yellow-700', video: null, course: 'RBI Grade B' },
  { id: 4, name: 'Sneha Patel', role: 'JAIIB — Bank of Baroda', rating: 5, text: 'The online platform is so user-friendly! Recorded lectures helped me study at my own pace while managing my bank job. Got 90/100 in PPB!', color: 'from-green-500 to-green-700', video: null, course: 'JAIIB' },
  { id: 5, name: 'Vikash Singh', role: 'Bank PO — SBI', rating: 5, text: 'Best coaching for Bank PO. The faculty focuses on shortcuts, time management, and actual exam patterns. Cracked SBI PO in first attempt.', color: 'from-rose-500 to-rose-700', video: null, course: 'Bank PO' },
  { id: 6, name: 'Ananya Desai', role: 'CAIIB — Canara Bank', rating: 5, text: 'IBS\'s CAIIB BFM and ABM modules are unmatched. Complex topics explained in simple Hindi and English. Highly recommend for working professionals.', color: 'from-teal-500 to-teal-700', video: null, course: 'CAIIB' },
  { id: 7, name: 'Ravi Teja', role: 'Internal Promotion — Union Bank', rating: 5, text: 'Got promoted from Clerk to PO within 6 months of joining IBS special promotion batch. The targeted syllabus and interview prep were perfect.', color: 'from-indigo-500 to-indigo-700', video: null, course: 'Promotions' },
  { id: 8, name: 'Kavita Reddy', role: 'JAIIB — Andhra Bank', rating: 5, text: 'Being from a Telugu medium background, I was worried about JAIIB. IBS faculty made everything so easy to understand. Scored 85% overall!', color: 'from-cyan-500 to-cyan-700', video: null, course: 'JAIIB' },
  { id: 9, name: 'Suresh Yadav', role: 'SSC CGL — Selected', rating: 5, text: 'Cleared SSC CGL Tier 1 and Tier 2 with IBS coaching. Quantitative aptitude classes by Rajiv Sir were phenomenal. Got 98th percentile!', color: 'from-orange-500 to-orange-700', video: null, course: 'SSC' },
];

const FILTERS = ['All', 'JAIIB', 'CAIIB', 'Bank PO', 'RBI Grade B', 'SSC', 'Promotions'];

export default function TestimonialsPage() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? TESTIMONIAL_DATA : TESTIMONIAL_DATA.filter(t => t.course === filter);

  return (
    <Layout>
      <SEOHead
        title="Student Success Stories | JAIIB CAIIB Toppers | IBS Bank Career Reviews"
        description="2,000+ student reviews from IBS Bank Career — real JAIIB toppers, CAIIB success stories, RBI Grade B selections and bank promotion success across Kerala and India."
        keywords="IBS Bank Career reviews, JAIIB success stories, CAIIB toppers Kerala, bank coaching testimonials, banking exam pass rate, IBS student results"
        canonical="/testimonials"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            💬 What Our Students Say
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">Student Success Stories</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
            Real testimonials from banking professionals who transformed their careers with IBS Bank Career
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[['8,400+', 'Reviews'], ['4.9/5', 'Rating'], ['98%', 'Satisfaction'], ['50K+', 'Students']].map(([v, l]) => (
              <div key={l} className="bg-white/15 backdrop-blur rounded-2xl p-4">
                <div className="font-heading font-extrabold text-2xl text-white">{v}</div>
                <div className="text-white/75 text-xs mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-gray-100 py-4 shadow-sm sticky top-0 z-20">
        <div className="container-custom flex flex-wrap gap-2 items-center justify-center">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-all ${filter === f ? 'bg-primary text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {f}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-500 hidden sm:block">{filtered.length} testimonials</span>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(t => (
              <div key={t.id} className="glass-card p-6 hover:shadow-2xl transition-all group relative overflow-hidden">
                <FaQuoteLeft className="absolute top-4 right-4 text-4xl text-primary/5" />
                
                <div className="relative">
                  {/* Avatar */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-lg`}>
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-gray-900">{t.name}</h3>
                      <p className="text-xs text-accent font-semibold">{t.role}</p>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(t.rating)].map((_, i) => <FaStar key={i} className="text-gold" size={11} />)}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>

                  {/* Video badge (if exists) */}
                  {t.video && (
                    <button className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
                      <FaPlay size={10} /> Watch Video Testimonial
                    </button>
                  )}

                  {/* Course badge */}
                  <span className="inline-block mt-3 text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-lg font-medium">
                    {t.course}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg font-medium">No testimonials found</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-3">Join 50,000+ Successful Students</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Your success story could be next. Start your banking exam preparation journey today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/courses" className="btn-gold flex items-center gap-2 text-base">Explore All Courses</a>
            <a href="/register" className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-lg border border-white/30 transition-all">Register Free</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
