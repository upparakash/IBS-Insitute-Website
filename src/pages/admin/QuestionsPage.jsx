import { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { QUESTION_BANKS } from '../../data/mockData';
import { FaSearch, FaPlus, FaTimes, FaSave } from 'react-icons/fa';

const BANK_LABELS = {
  jaiib_ppb: 'JAIIB – PPB', jaiib_ief: 'JAIIB – IE&IFS', jaiib_afm: 'JAIIB – AFM',
  jaiib_rbwm: 'JAIIB – RBWM', caiib_abm: 'CAIIB – ABM', caiib_bfm: 'CAIIB – BFM', bank_po: 'Bank PO',
};

const BLANK_Q = { q: '', options: ['', '', '', ''], answer: 0, subject: '' };

export default function QuestionsPage() {
  const [selectedBank, setSelectedBank] = useState('jaiib_ppb');
  const [questions, setQuestions] = useState(() => {
    const stored = {};
    Object.keys(QUESTION_BANKS).forEach(k => { stored[k] = [...QUESTION_BANKS[k]]; });
    return stored;
  });
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ ...BLANK_Q, options: ['', '', '', ''] });
  const [saved, setSaved] = useState(false);

  const bankQuestions = (questions[selectedBank] || []).filter(q =>
    !search || q.q.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (e) => {
    e.preventDefault();
    const newQ = { ...form, id: Date.now() };
    setQuestions(prev => ({ ...prev, [selectedBank]: [...(prev[selectedBank] || []), newQ] }));
    setForm({ ...BLANK_Q, options: ['', '', '', ''] });
    setShowAdd(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleDelete = (id) => {
    setQuestions(prev => ({ ...prev, [selectedBank]: prev[selectedBank].filter(q => q.id !== id) }));
  };

  const updateOption = (i, val) => {
    setForm(p => { const opts = [...p.options]; opts[i] = val; return { ...p, options: opts }; });
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="font-heading font-bold text-2xl text-gray-900">Question Bank</h1>
          <p className="text-gray-500 text-sm">{Object.values(questions).reduce((s, b) => s + b.length, 0)} total questions across all banks</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl">
          <FaPlus size={12} /> Add Question
        </button>
      </div>

      {saved && (
        <div className="bg-success/10 text-success px-4 py-3 rounded-xl mb-4 text-sm font-medium border border-success/20">✅ Question added!</div>
      )}

      {/* Bank tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        {Object.keys(QUESTION_BANKS).map(k => (
          <button key={k} onClick={() => setSelectedBank(k)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${selectedBank === k ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {BANK_LABELS[k]} ({questions[k]?.length || 0})
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <FaSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search questions..." value={search} onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
      </div>

      <div className="space-y-3">
        {bankQuestions.map((q, i) => (
          <div key={q.id} className="glass-card p-5">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg shrink-0 mt-0.5">Q{i + 1}</span>
                <p className="text-gray-900 text-sm font-medium leading-relaxed">{q.q}</p>
              </div>
              <button onClick={() => handleDelete(q.id)}
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-all shrink-0">
                <FaTimes size={11} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 pl-7">
              {q.options.map((opt, j) => (
                <div key={j} className={`text-xs px-3 py-1.5 rounded-lg ${j === q.answer ? 'bg-success/10 text-success font-semibold border border-success/20' : 'bg-gray-50 text-gray-600'}`}>
                  {String.fromCharCode(65 + j)}. {opt}
                </div>
              ))}
            </div>
            {q.subject && <div className="mt-2 pl-7"><span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{q.subject}</span></div>}
          </div>
        ))}
        {bankQuestions.length === 0 && (
          <div className="text-center py-12 text-gray-400">No questions found.</div>
        )}
      </div>

      {/* Add Question Modal */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-gray-900 text-xl">Add Question</h2>
              <button onClick={() => setShowAdd(false)} className="w-8 h-8 flex items-center justify-center rounded-xl bg-gray-100"><FaTimes size={14} /></button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Question *</label>
                <textarea value={form.q} onChange={e => setForm(p => ({ ...p, q: e.target.value }))} required rows={2}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all resize-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">Options (select the correct answer)</label>
                {form.options.map((opt, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <input type="radio" name="correct" checked={form.answer === i} onChange={() => setForm(p => ({ ...p, answer: i }))}
                      className="text-primary" />
                    <span className="text-xs font-bold text-gray-500 w-4">{String.fromCharCode(65 + i)}.</span>
                    <input type="text" value={opt} onChange={e => updateOption(i, e.target.value)} required placeholder={`Option ${String.fromCharCode(65 + i)}`}
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Subject tag</label>
                <input type="text" value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} placeholder="e.g. PPB, ABM"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="flex-1 btn-primary py-2.5 rounded-xl text-sm flex items-center justify-center gap-2">
                  <FaSave size={13} /> Add Question
                </button>
                <button type="button" onClick={() => setShowAdd(false)} className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl text-sm hover:bg-gray-50">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
