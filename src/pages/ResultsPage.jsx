import { useState } from 'react';
import Layout from '../layouts/Layout';
import SEOHead from '../components/SEOHead';
import { TOPPERS } from '../data/siteData';
import { FaStar, FaTrophy, FaMedal, FaSearch, FaGraduationCap } from 'react-icons/fa';

const EXAMS = ['All', 'JAIIB', 'CAIIB', 'RBI Grade B', 'Bank PO'];
const YEARS = ['All', '2026', '2025', '2024', '2023', '2022'];

const RESULT_STATS = [
  { value: '94%', label: 'Pass Rate', sub: 'Consistent across batches' },
  { value: '15,000+', label: 'JAIIB Cleared', sub: 'Since 2011' },
  { value: '9,500+', label: 'CAIIB Cleared', sub: 'Across all papers' },
  { value: '5,000+', label: 'Bank PO Selected', sub: 'IBPS / SBI / RRB' },
];

export default function ResultsPage() {
  const [examFilter, setExamFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = TOPPERS.filter(t =>
    (examFilter === 'All' || t.exam === examFilter) &&
    (yearFilter === 'All' || t.year === yearFilter) &&
    (search === '' ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.bank.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Layout>
      <SEOHead
        title="Student Results & Toppers | JAIIB CAIIB Pass List 2026 | IBS Bank Career Kerala"
        description="See IBS Bank Career's Hall of Fame – 15,000+ JAIIB cleared, 9,500+ CAIIB cleared, 5,000+ Bank PO selected. Real student toppers from Kerala's #1 banking coaching institute."
        keywords="JAIIB pass list Kerala, CAIIB toppers Kerala, bank exam results IBS, banking exam pass rate Kerala, JAIIB result 2026"
        canonical="/results"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🏆 Hall of Fame
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">Our Star Performers</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Every topper is a testament to our commitment — expert faculty, proven methodology, and relentless support from Kerala's #1 banking coaching institute
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {RESULT_STATS.map(({ value, label, sub }) => (
              <div key={label} className="bg-white/15 backdrop-blur rounded-2xl p-4">
                <div className="font-heading font-extrabold text-2xl lg:text-3xl text-white">{value}</div>
                <div className="text-white/90 text-sm font-semibold mt-0.5">{label}</div>
                <div className="text-white/60 text-xs mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 py-5 shadow-sm sticky top-0 z-30">
        <div className="container-custom flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[180px] max-w-xs">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
            <input
              type="text"
              placeholder="Search by name or bank..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
            />
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {EXAMS.map(e => (
              <button key={e} onClick={() => setExamFilter(e)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${examFilter === e ? 'bg-primary text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {e}
              </button>
            ))}
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {YEARS.map(y => (
              <button key={y} onClick={() => setYearFilter(y)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${yearFilter === y ? 'bg-gold text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {y}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-500 ml-auto font-medium">{filtered.length} results</div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-medium">No results found for the selected filters</p>
              <button onClick={() => { setExamFilter('All'); setYearFilter('All'); setSearch(''); }}
                className="mt-4 text-primary font-semibold underline text-sm">Clear all filters</button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((t, i) => (
                <div key={i} className="glass-card p-5 hover:shadow-2xl transition-all hover:-translate-y-1 relative overflow-hidden group">

                  {/* Rank badge */}
                  <div className="absolute top-3 right-3">
                    {i === 0 && examFilter === 'All' && yearFilter === 'All' && <FaTrophy className="text-gold text-xl" />}
                    {i === 1 && examFilter === 'All' && yearFilter === 'All' && <FaMedal className="text-gray-400 text-xl" />}
                    {i === 2 && examFilter === 'All' && yearFilter === 'All' && <FaMedal className="text-amber-600 text-xl" />}
                  </div>

                  {/* Avatar + name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0`}>
                      {t.initials.replace(/\d/g, '')}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-gray-900 leading-tight">{t.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">{t.bank}</p>
                    </div>
                  </div>

                  {/* Score box */}
                  <div className="bg-primary/5 rounded-xl p-3 mb-3 text-center">
                    <div className="font-heading font-bold text-2xl text-primary">{t.score}</div>
                    <div className="text-xs text-accent font-semibold mt-0.5 flex items-center justify-center gap-1">
                      <FaGraduationCap size={10} /> {t.exam} • {t.year}
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 justify-center mb-3">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-gold" size={12} />)}
                  </div>

                  {/* Quote */}
                  {t.quote && (
                    <p className="text-xs text-gray-500 italic leading-relaxed border-t border-gray-100 pt-3">
                      "{t.quote}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-primary to-accent text-center">
        <div className="container-custom">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-3">Your Name Could Be on This List</h2>
          <p className="text-white/80 mb-6">Join 50,000+ successful banking professionals who chose IBS Bank Career</p>
          <a href="/courses" className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg">
            Start Your Journey →
          </a>
        </div>
      </section>
    </Layout>
  );
}
