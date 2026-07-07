import { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { MOCK_MATERIALS } from '../../data/mockData';
import { FaDownload, FaFilePdf, FaCheckCircle, FaSearch } from 'react-icons/fa';

export default function DownloadsPage() {
  const [downloaded, setDownloaded] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ibs_downloads') || '[]'); } catch { return []; }
  });
  const [search, setSearch] = useState('');
  const [busy, setBusy] = useState(null);

  const allMaterials = MOCK_MATERIALS.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) || m.topic.toLowerCase().includes(search.toLowerCase())
  );

  const handleDownload = (id) => {
    setBusy(id);
    setTimeout(() => {
      const next = [...new Set([...downloaded, id])];
      setDownloaded(next);
      localStorage.setItem('ibs_downloads', JSON.stringify(next));
      setBusy(null);
    }, 1200);
  };

  const recentDownloads = MOCK_MATERIALS.filter(m => downloaded.includes(m.id));

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="font-heading font-bold text-2xl text-gray-900 mb-1">Downloads</h1>
        <p className="text-gray-500 text-sm">All your downloaded study materials in one place</p>
      </div>

      {recentDownloads.length > 0 && (
        <div className="glass-card p-5 mb-6">
          <h2 className="font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FaCheckCircle className="text-success" size={16} /> Recently Downloaded ({recentDownloads.length})
          </h2>
          <div className="space-y-2">
            {recentDownloads.map(m => (
              <div key={m.id} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                <FaFilePdf className="text-red-500 shrink-0" size={18} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-900 truncate">{m.name}</div>
                  <div className="text-xs text-gray-500">{m.size} · {m.topic}</div>
                </div>
                <FaCheckCircle className="text-success shrink-0" size={16} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative mb-5">
        <FaSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text" placeholder="Search materials..." value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allMaterials.map(m => {
          const isDone = downloaded.includes(m.id);
          return (
            <div key={m.id} className="glass-card p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                  <FaFilePdf className="text-red-500" size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">{m.name}</h3>
                  <p className="text-gray-400 text-[10px] mt-0.5">{m.topic} · {m.size}</p>
                </div>
              </div>
              <button onClick={() => handleDownload(m.id)} disabled={busy === m.id}
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all
                  ${isDone ? 'bg-success/10 text-success border border-success/20' : busy === m.id ? 'bg-gray-100 text-gray-400' : 'btn-primary'}`}>
                {busy === m.id ? (
                  <span className="animate-pulse">Downloading…</span>
                ) : isDone ? (
                  <><FaCheckCircle size={12} /> Downloaded</>
                ) : (
                  <><FaDownload size={12} /> Download</>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
