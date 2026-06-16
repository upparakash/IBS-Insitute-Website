import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { FaCheckCircle, FaArrowRight, FaTrophy, FaUsers, FaStar, FaUniversity, FaLinkedin } from 'react-icons/fa';

const MILESTONES = [
  { year: '2011', title: 'IBS Bank Career Founded', desc: 'Mr. Satheesh Kumar S founded IBS Institute of Banking Studies in Kayamkulam, Kerala.' },
  { year: '2015', title: 'Online Platform Launch', desc: 'Launched digital learning platform serving students across India.' },
  { year: '2018', title: '10,000 Students Milestone', desc: 'Crossed 10,000 enrolled students with 92% pass rate.' },
  { year: '2021', title: 'Mobile App Launch', desc: 'IBS Bank Career App launched with 1L+ downloads in 6 months.' },
  { year: '2023', title: 'IIBF Authorised Centre', desc: 'Officially recognised as IIBF Authorised Study Centre.' },
  { year: '2024', title: '50,000 Students & 94% Pass Rate', desc: 'India\'s most trusted banking coaching institute.' },
];

const VALUES = [
  { icon: '🎯', title: 'Result-Driven', desc: 'Every decision is driven by student results and career outcomes.' },
  { icon: '🤝', title: 'Integrity', desc: 'Transparent fee, honest promises, and real student testimonials.' },
  { icon: '💡', title: 'Innovation', desc: 'Constantly evolving curriculum aligned with exam pattern changes.' },
  { icon: '❤️', title: 'Student First', desc: '24x7 support, personal mentorship, and individual attention.' },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🏛️ About IBS Bank Career
          </div>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">
            India's Most Trusted<br />
            <span className="text-gold">Banking Coaching Institute</span>
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
            Building banking careers since 2012 — with expert faculty, proven methodology, and an unbreakable commitment to student success.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/courses" className="btn-gold flex items-center gap-2">Explore Courses <FaArrowRight size={12} /></Link>
            <Link to="/contact" className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-all border border-white/30">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { icon: <FaUsers className="text-primary" size={28} />, val: '50,000+', lbl: 'Students Enrolled' },
            { icon: <FaTrophy className="text-gold" size={28} />, val: '94%', lbl: 'Pass Rate' },
            { icon: <FaStar className="text-yellow-500" size={28} />, val: '12+', lbl: 'Years of Excellence' },
            { icon: <FaUniversity className="text-accent" size={28} />, val: '30+', lbl: 'Courses' },
          ].map(({ icon, val, lbl }) => (
            <div key={lbl} className="flex flex-col items-center gap-2 p-6">
              {icon}
              <div className="font-heading font-extrabold text-3xl text-gray-900">{val}</div>
              <div className="text-gray-500 text-sm font-medium">{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">📖 Our Story</div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              From a Small Classroom to<br /><span className="text-primary">India's #1 Banking Institute</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>IBS Institute of Banking Studies was founded in 2011 by Mr. Satheesh Kumar S — a seasoned banker and visionary educator who identified a critical gap: banking professionals in Kerala lacked access to structured, expert-led exam preparation.</p>
              <p>Starting with a small centre in Kayamkulam, we built our reputation on one promise: <strong className="text-primary">delivering results</strong>. Today, with 12 branches across Kerala and 50,000+ students served, IBS is the definitive choice for every banking aspirant in South India.</p>
              <p>Our IIBF-authorised curriculum, combined with 32 retired banking professionals as faculty and a technology-driven learning platform, sets IBS apart as the most trusted banking coaching institute in Kerala.</p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              {['IIBF Authorised Centre', 'RBI Recognised', 'ISO 9001:2015 Certified'].map(b => (
                <div key={b} className="flex items-center gap-2 text-sm font-medium text-success">
                  <FaCheckCircle /> {b}
                </div>
              ))}
            </div>
          </div>

          {/* Vision/Mission */}
          <div className="space-y-5">
            {[
              { icon: '🎯', title: 'Our Mission', text: 'To make world-class banking education accessible to every aspirant in India — through expert faculty, innovative technology, and a relentless focus on results.' },
              { icon: '🌟', title: 'Our Vision', text: 'To be the most trusted lifelong learning partner for every banking professional — from first job to final promotion.' },
              { icon: '💎', title: 'Our Promise', text: '94%+ pass rate backed by expert faculty, structured curriculum, and unlimited doubt-clearing support until you succeed.' },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center text-2xl shrink-0 shadow">{item.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director / Founder */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">👤 Leadership</div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Meet Our <span className="text-primary">Founder & Director</span></h2>
          </div>
          <div className="max-w-4xl mx-auto glass-card overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 bg-gradient-to-br from-primary to-accent flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="w-36 h-36 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30 shadow-2xl">
                    <span className="text-white font-heading font-bold text-5xl">SK</span>
                  </div>
                  <div className="text-gold font-heading font-bold text-lg">Mr. Satheesh Kumar S</div>
                  <div className="text-white/80 text-sm mt-1">Founder & Director</div>
                  <div className="text-white/60 text-xs mt-1">IBS Institute of Banking Studies</div>
                  <div className="flex justify-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-gold" size={13} />)}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-xs font-bold px-3 py-1 rounded-full mb-4">
                  🏦 Seasoned Banker · Visionary Educator · 14+ Years
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Transforming Banking Education in Kerala</h3>
                <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                  <p>Mr. Satheesh Kumar S, a seasoned banking professional and visionary educator, founded the IBS Institute of Banking Studies in 2011 with a singular mission — to bridge the gap between banking aspiration and achievement in Kerala and beyond.</p>
                  <p>With over two decades of experience in the banking sector, he identified the acute need for structured, expert-led coaching for banking professionals aspiring to clear JAIIB, CAIIB, and other professional certifications. His deep understanding of bank examinations and industry requirements shaped the IBS curriculum into one of the most result-oriented programs in South India.</p>
                  <p>Under his leadership, IBS has grown from a single centre in Kayamkulam to a pan-Kerala institution with 12 branches, serving 50,000+ students across all major banking exams and IIBF certifications.</p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                  {[
                    { val: '14+', lbl: 'Years of Excellence' },
                    { val: '12', lbl: 'Centres Across Kerala' },
                    { val: '50K+', lbl: 'Students Mentored' },
                  ].map(({ val, lbl }) => (
                    <div key={lbl} className="text-center">
                      <div className="font-heading font-extrabold text-2xl text-primary">{val}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Our <span className="text-primary">Journey</span></h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden sm:block" />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="hidden sm:flex flex-col items-center shrink-0">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center text-white font-heading font-bold text-sm shadow-lg z-10">
                      {m.year}
                    </div>
                  </div>
                  <div className="glass-card p-5 flex-1">
                    <div className="sm:hidden text-xs font-bold text-accent mb-1">{m.year}</div>
                    <h3 className="font-heading font-bold text-gray-900 mb-1">{m.title}</h3>
                    <p className="text-gray-600 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Our <span className="text-primary">Core Values</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="glass-card p-7 text-center hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">{v.icon}</div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">Begin Your Banking Success Journey Today</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Join 50,000+ banking professionals who trust IBS Bank Career for their exam preparation and career growth.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/courses" className="btn-gold flex items-center gap-2 text-base">Explore All Courses <FaArrowRight /></Link>
            <Link to="/contact" className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-lg border border-white/30 transition-all">Talk to Counsellor</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
