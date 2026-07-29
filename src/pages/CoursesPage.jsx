import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '../layouts/Layout';
import SEOHead from '../components/SEOHead';
import { COURSE_CATEGORIES, getCoursesByCategory } from '../data/courseListingData';
import { FaArrowRight, FaShoppingCart, FaInfoCircle, FaStar, FaChevronRight, FaSearch, FaTags } from 'react-icons/fa';

/* ── course card color map per category ──────────────────────────────────── */
const CATEGORY_COLORS = {
  jaiib:          'from-[#0f2d5e] to-[#1a4080]',
  caiib:          'from-[#1a1a5e] to-[#2d2d8a]',
  professional:   'from-[#0d4f4f] to-[#1a7070]',
  iibf:           'from-[#2d1a5e] to-[#4a2d8a]',
  'sbi-jibo':     'from-[#0d2d5e] to-[#1a4a80]',
  'bank-promotion': 'from-[#0d4020] to-[#1a6035]',
  'ignou-mba':    'from-[#5e1a00] to-[#8a2d00]',
  dra:            'from-[#5e0d1a] to-[#8a1a2d]',
  'bc-bf':        'from-[#0d4a5e] to-[#1a6a80]',
  others:         'from-[#2d2d2d] to-[#4a4a4a]',
};

/* ── Single course card ───────────────────────────────────────────────────── */
function CourseCard({ course }) {
  const gradientClass = CATEGORY_COLORS[course.category] || 'from-[#0f2d5e] to-[#1a4080]';
  const waText = encodeURIComponent(`Hi IBS! I want to enroll in: ${course.brand} — ${course.title.replace(/\n/g, ' ')}`);
  const waLink = `https://wa.me/918138962298?text=${waText}`;
  const discount = Math.round((1 - parseInt(course.price.replace(/[^0-9]/g, '')) / parseInt(course.originalPrice.replace(/[^0-9]/g, ''))) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col">
      {/* Card header — dark gradient banner */}
      <div className={`relative bg-gradient-to-br ${gradientClass} px-5 py-5 flex-shrink-0`}>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 8px)' }} />

        {/* Online badge */}
        {course.badge && (
          <span className={`absolute top-3 right-3 ${course.badgeColor} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow`}>
            {course.badge}
          </span>
        )}

        {/* Popular label */}
        {course.isPopular && (
          <div className="flex items-center gap-1 mb-2">
            <span className="bg-gold text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <FaStar size={8} /> {course.popularLabel}
            </span>
          </div>
        )}

        {/* Brand + title */}
        <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">{course.brand}</p>
        <h3 className="text-white font-bold text-sm leading-snug whitespace-pre-line line-clamp-3">
          {course.title}
        </h3>

        {/* Price row */}
        <div className="flex items-end gap-2 mt-3">
          <span className="text-white font-heading font-extrabold text-2xl">{course.price}</span>
          <span className="text-white/50 text-xs line-through mb-0.5">{course.originalPrice}</span>
          {discount > 0 && (
            <span className="bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mb-0.5">{discount}% off</span>
          )}
        </div>
      </div>

      {/* Includes list */}
      <div className="px-4 py-3 flex-1">
        {course.note && (
          <p className="text-[10px] text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5 mb-2 flex items-start gap-1.5">
            <FaInfoCircle size={10} className="mt-0.5 shrink-0" />
            {course.note}
          </p>
        )}
        <ul className="space-y-1">
          {(course.includes || []).slice(0, 4).map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Action buttons */}
      <div className="px-4 pb-4 flex gap-2 mt-auto">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#1a3a6e] hover:bg-[#0f2d5e] text-white font-bold text-xs py-2.5 rounded-lg transition-all"
        >
          <FaShoppingCart size={11} />
          BUY NOW
        </a>
        <Link
          to={course.detailHref}
          className="flex-1 flex items-center justify-center gap-1.5 border border-primary text-primary hover:bg-primary hover:text-white font-semibold text-xs py-2.5 rounded-lg transition-all"
        >
          View Details <FaChevronRight size={9} />
        </Link>
      </div>
    </div>
  );
}

/* ── Category stats for hero strip ──────────────────────────────────────── */
const CATEGORY_STATS = {
  jaiib:          { students: '12,000+', rate: '94%', papers: '4 Papers', next: 'July 17, 2026' },
  caiib:          { students: '8,500+',  rate: '91%', papers: '4 Papers', next: 'July 20, 2026' },
  professional:   { students: '7,000+',  rate: '88%', papers: '5 Tracks', next: 'July 5, 2026' },
  iibf:           { students: '9,000+',  rate: '92%', papers: '17 Courses', next: 'Rolling' },
  'sbi-jibo':     { students: '3,500+',  rate: '82%', papers: 'Written + Interview', next: 'July 15, 2026' },
  'bank-promotion': { students: '5,500+', rate: '88%', papers: '6 Levels', next: 'July 10, 2026' },
  'ignou-mba':    { students: '2,200+',  rate: '87%', papers: '2 Programs', next: 'July Session' },
  dra:            { students: '4,500+',  rate: '93%', papers: '2 Papers', next: 'Rolling' },
  'bc-bf':        { students: '3,200+',  rate: '91%', papers: '1 Exam', next: 'Rolling' },
  others:         { students: '6,000+',  rate: '85%', papers: 'Multiple', next: 'Rolling' },
};

const CATEGORY_DESC = {
  jaiib: 'IIBF\'s flagship certification for banking professionals. Covers 4 papers — IE&IFS, PPB, AFM and RBWM. Choose from Full Course, Recorded, DLP, Books or individual paper options.',
  caiib: 'Advanced certification for bank officers. Covers ABM, BFM, BRBL and one elective paper. Get 1 additional annual increment upon clearing all papers.',
  professional: 'Track-based coaching for serving bank employees targeting internal promotions. Choose your specialisation track — Credit, Treasury, Accounting, IT or International Banking.',
  iibf: 'All 17 IIBF Certificate and Diploma programmes at one place. Short-duration, exam-focused coaching with IIBF-aligned study materials.',
  'sbi-jibo': 'Targeted coaching for SBI clerical staff appearing for the Junior India Based Officer (JIBO) internal promotion exam.',
  'bank-promotion': 'Promotion exam coaching for all PSBs — Sub-staff to Clerical, Clerk to Officer, and all Officer Scale promotions up to SMGS-IV.',
  'ignou-mba': 'IGNOU MBA support for working bank employees. UGC-recognised 2-year distance MBA in Banking & Finance or Financial Management.',
  dra: 'IIBF-authorised Debt Recovery Agent certification — mandatory for all bank and NBFC recovery agents.',
  'bc-bf': 'IIBF Business Correspondent / Business Facilitator certification for banking agents operating in rural and semi-urban areas.',
  others: 'NISM certifications, Foundation Course SIDDHI, Diploma in Banking & Finance, and other specialised programmes.',
};

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function CoursesPage() {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'jaiib';
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [searchQuery, setSearchQuery] = useState('');

  const courses = useMemo(() => {
    const list = getCoursesByCategory(activeCategory);
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.brand.toLowerCase().includes(q)
    );
  }, [activeCategory, searchQuery]);

  const activeCat = COURSE_CATEGORIES.find(c => c.id === activeCategory);
  const stats = CATEGORY_STATS[activeCategory] || {};

  return (
    <Layout>
      <SEOHead
        title="Banking Exam Courses | JAIIB CAIIB IIBF Promotion Coaching | IBS Bank Career"
        description="Choose from 80+ banking courses — JAIIB, CAIIB, All IIBF Certificates, SBI JIBO, Bank Promotion Exams, IGNOU MBA, DRA, BC-BF and more. Expert coaching by retired senior bankers."
        keywords="JAIIB course fees, CAIIB coaching online, IIBF certificate courses, SBI JIBO coaching, bank promotion exam, IGNOU MBA banking, DRA certification, BC-BF certification"
        canonical="/courses"
      />

      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-accent py-10">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
            <FaTags size={11} /> 80+ Courses Across 12 Categories
          </div>
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-2">
            All Courses
          </h1>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            Expert coaching by 32+ retired senior bankers · 50,000+ success stories · 94% pass rate
          </p>
        </div>
      </section>

      {/* ── Main layout: sidebar + content ────────────────────────────────── */}
      <section className="py-8 bg-gray-50 min-h-screen">
        <div className="container-custom">
          <div className="flex gap-6">

            {/* ── Left sidebar — categories ─────────────────────────────── */}
            <aside className="hidden lg:flex flex-col shrink-0" style={{ width: '220px' }}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                <div className="px-4 py-3 bg-primary/5 border-b border-gray-100">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">Categories</p>
                </div>
                <nav className="py-1">
                  {COURSE_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveCategory(cat.id); setSearchQuery(''); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-all border-l-4 ${
                        activeCategory === cat.id
                          ? 'bg-primary text-white font-semibold border-l-white'
                          : 'text-gray-700 font-medium border-l-transparent hover:bg-primary/5 hover:text-primary hover:border-l-primary/30'
                      }`}
                    >
                      <span className="text-base leading-none">{cat.icon}</span>
                      <span className="leading-tight">{cat.label}</span>
                      {activeCategory === cat.id && (
                        <FaChevronRight size={9} className="ml-auto text-white/70 shrink-0" />
                      )}
                    </button>
                  ))}
                </nav>
                {/* Quick contact */}
                <div className="m-3 p-3 bg-primary/5 rounded-xl text-center border border-primary/10">
                  <p className="text-xs text-gray-600 mb-2">Need guidance choosing?</p>
                  <a
                    href="https://wa.me/918138962298?text=Hi%20IBS!%20I%20need%20help%20choosing%20a%20course."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
              </div>
            </aside>

            {/* ── Right content ─────────────────────────────────────────── */}
            <div className="flex-1 min-w-0">

              {/* Category header strip */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{activeCat?.icon}</span>
                      <h2 className="font-heading font-bold text-xl text-gray-900">{activeCat?.label}</h2>
                    </div>
                    <p className="text-sm text-gray-600 max-w-2xl">{CATEGORY_DESC[activeCategory]}</p>
                  </div>
                  {/* Stats pills */}
                  <div className="flex flex-wrap gap-2 shrink-0">
                    {stats.students && (
                      <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1.5 rounded-full font-semibold">
                        👥 {stats.students} Students
                      </span>
                    )}
                    {stats.rate && (
                      <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1.5 rounded-full font-semibold">
                        🏆 {stats.rate} Pass Rate
                      </span>
                    )}
                    {stats.next && (
                      <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1.5 rounded-full font-semibold">
                        📅 Next: {stats.next}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile category scroll */}
              <div className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
                {COURSE_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setSearchQuery(''); }}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                      activeCategory === cat.id
                        ? 'bg-primary text-white shadow'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-primary/40'
                    }`}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}
              </div>

              {/* Search within category */}
              <div className="relative mb-5">
                <FaSearch size={13} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Search in ${activeCat?.label}...`}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 shadow-sm"
                />
              </div>

              {/* Course cards grid */}
              {courses.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                  <div className="text-4xl mb-3">🔍</div>
                  <p className="text-gray-500">No courses found matching "{searchQuery}"</p>
                  <button onClick={() => setSearchQuery('')} className="mt-3 text-primary text-sm font-semibold hover:underline">
                    Clear search
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-xs text-gray-500 mb-3 ml-0.5">{courses.length} course{courses.length !== 1 ? 's' : ''} in {activeCat?.label}</p>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {courses.map(course => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </>
              )}

              {/* Bottom CTA */}
              <div className="mt-8 bg-gradient-to-r from-primary to-accent rounded-2xl p-6 text-center text-white">
                <h3 className="font-heading font-bold text-xl mb-1">Can't decide which course is right for you?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Talk to our counsellors — free career guidance for banking aspirants
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/contact" className="btn-gold flex items-center gap-2 text-sm">
                    Talk to Counsellor <FaArrowRight size={11} />
                  </Link>
                  <a
                    href="https://wa.me/918138962298?text=Hi%20IBS!%20I%20need%20course%20guidance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all"
                  >
                    💬 WhatsApp Now
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
