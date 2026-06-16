import { useState } from 'react';
import Layout from '../layouts/Layout';
import { TOPPERS } from '../data/siteData';
import { FaStar, FaTrophy, FaMedal, FaSearch } from 'react-icons/fa';

const EXAMS = ['All', 'JAIIB', 'CAIIB', 'RBI Grade B', 'Bank PO'];
const YEARS = ['All', '2024', '2023', '2022'];

const EXTENDED_TOPPERS = [
  ...TOPPERS,
  { name: 'Ravi Teja', initials: 'RT', score: '182/200', exam: 'JAIIB', bank: 'Union Bank of India', color: 'from-indigo-500 to-indigo-700', year: '2024' },
  { name: 'Kavita Reddy', initials: 'KR', score: '169/200', exam: 'CAIIB', bank: 'Andhra Bank', color: 'from-cyan-500 to-cyan-700', year: '2024' },
  { name: 'Suresh Yadav', initials: 'SY', score: 'AIR 28', exam: 'Bank PO', bank: 'IBPS PO Selected', color: 'from-orange-500 to-orange-700', year: '2023' },
  { name: 'Meenakshi Iyer', initials: 'MI', score: '175/200', exam: 'JAIIB', bank: 'Indian Bank', color: 'from-violet-500 to-violet-700', year: '2023' },
  { name: 'Deepak Joshi', initials: 'DJ', score: 'AIR 55', exam: 'RBI Grade B', bank: 'RBI Officer', color: 'from-amber-500 to-amber-700', year: '2023' },
  { name: 'Pooja Kumari', initials: 'PK', score: '188/200', exam: 'JAIIB', bank: 'Central Bank of India', color: 'from-lime-500 to-lime-700', year: '2022' },
];

export default function ResultsPage() {
  const [examFilter, setExamFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = EXTENDED_TOPPERS.filter(t =>
    (examFilter === 'All' || t.exam === examFilter) &&
    (yearFilter === 'All' || t.year === yearFilter) &&
    (search === '' || t.name.toLowerCase().includes(search.toLowerCase()) || t.bank.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🏆 Hall of Fame
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">Our Star Performers</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Every topper is a testament to our commitment — expert faculty, proven methodology, and relentless support
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-2xl mx-auto">
            {[['94%', 'Pass Rate'], ['12,000+', 'JAIIB Cleared'], ['8,500+', 'CAIIB Cleared'], ['5,000+', 'Bank PO Selected']].map(([v, l]) => (
              <div key={l} className="bg-white/15 backdrop-blur rounded-2xl p-4">
                <div className="font-heading font-extrabold text-2xl text-white">{v}</div>
                <div className="text-white/75 text-xs mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 py-5 shadow-sm">
        <div className="container-custom flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px] max-w-xs">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
            <input type="text" placeholder="Search by name or bank..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {EXAMS.map(e => (
              <button key={e} onClick={() => setExamFilter(e)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${examFilter === e ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {e}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {YEARS.map(y => (
              <button key={y} onClick={() => setYearFilter(y)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${yearFilter === y ? 'bg-gold text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {y}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-500 ml-auto">{filtered.length} results</div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((t, i) => (
              <div key={i} className="glass-card p-5 hover:shadow-2xl transition-all hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute top-3 right-3">
                  {i === 0 && examFilter === 'All' && <FaTrophy className="text-gold text-xl" />}
                  {i === 1 && examFilter === 'All' && <FaMedal className="text-gray-400 text-xl" />}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 leading-tight">{t.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{t.bank}</p>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-xl p-3 mb-3 text-center">
                  <div className="font-heading font-bold text-2xl text-primary">{t.score}</div>
                  <div className="text-xs text-accent font-semibold">{t.exam} • {t.year}</div>
                </div>

                <div className="flex gap-0.5 justify-center">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="text-gold" size={12} />)}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-medium">No results found for the selected filters</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
