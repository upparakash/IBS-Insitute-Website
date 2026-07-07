import { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useDashboard } from '../../context/DashboardContext';
import { MOCK_MATERIALS } from '../../data/mockData';
import { FaDownload, FaSearch, FaFilePdf } from 'react-icons/fa';

const COURSE_LABELS = { jaiib: 'JAIIB', caiib: 'CAIIB', 'bank-po': 'Bank PO', 'rbi-grade-b': 'RBI Grade B' };

export default function MaterialsPage() {
  const { currentStudent } = useDashboard();
  const enrolled = currentStudent?.enrolled || [];
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [downloading, setDownloading] = useState(null);

  const filtered = MOCK_MATERIALS.filter(m => {
    const matchesCourse = filter === 'all' || m.course === filter;
    const matchesEnrolled = enrolled.length === 0 || enrolled.includes(m.course);
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.topic.toLowerCase().includes(search.toLowerCase());
    return matchesCourse && matchesSearch;
  });

  const handleDownload = (m) => {
    setDownloading(m.id);
    setTimeout(() => setDownloading(null), 1500);
  };

  const courses = ['all', ...new Set(MOCK_MATERIALS.map(m => m.course))];

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="font-heading font-bold text-2xl text-gray-900 mb-1">Study Materials</h1>
        <p className="text-gray-500 text-sm">Download PDFs, notes, and formula sheets for your exam prep</p>
      </div>

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <FaSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text" placeholder="Search materials..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {courses.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${filter === c ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {c === 'all' ? 'All' : COURSE_LABELS[c] || c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(m => (
          <div key={m.id} className="glass-card p-5 hover:shadow-xl transition-all group">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                <FaFilePdf className="text-red-500" size={22} />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">{m.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">{COURSE_LABELS[m.course] || m.course}</span>
                  <span className="text-[10px] text-gray-400">{m.topic}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-3 border-b border-gray-100">
              <span>📄 {m.size}</span>
              <span>⬇️ {m.downloads.toLocaleString()} downloads</span>
            </div>
            <button
              onClick={() => handleDownload(m)}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all
                ${downloading === m.id ? 'bg-success text-white' : 'btn-primary'}`}>
              {downloading === m.id ? (
                <>✅ Downloaded!</>
              ) : (
                <><FaDownload size={12} /> Download PDF</>
              )}
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-16 text-gray-400">
            <div className="text-5xl mb-3">📂</div>
            <p className="text-sm">No materials found. Try a different search or filter.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
