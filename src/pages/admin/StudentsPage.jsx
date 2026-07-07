import { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useDashboard } from '../../context/DashboardContext';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaEye, FaTimes, FaSave } from 'react-icons/fa';

const COURSE_OPTIONS = ['jaiib', 'caiib', 'bank-po', 'rbi-grade-b'];
const COURSE_LABELS = { jaiib: 'JAIIB', caiib: 'CAIIB', 'bank-po': 'Bank PO', 'rbi-grade-b': 'RBI Grade B' };

const BLANK = { name: '', email: '', phone: '', bank: '', city: '', enrolled: [], qualification: 'Graduate', status: 'active', avatar: '', color: 'from-blue-500 to-blue-700' };

export default function StudentsPage() {
  const { students, addStudent, updateStudent, deleteStudent } = useDashboard();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [modal, setModal] = useState(null); // 'add' | 'edit' | 'view'
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(BLANK);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const filtered = students.filter(s => {
    const matchStatus = filter === 'all' || s.status === filter;
    const q = search.toLowerCase();
    const matchSearch = !search || s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q) || s.bank?.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  const openAdd = () => { setForm({ ...BLANK }); setModal('add'); };
  const openEdit = (s) => { setForm({ ...s }); setSelected(s); setModal('edit'); };
  const openView = (s) => { setSelected(s); setModal('view'); };
  const closeModal = () => { setModal(null); setSelected(null); setForm(BLANK); };

  const handleSave = () => {
    if (!form.name.trim() || !form.email.trim()) return;
    if (modal === 'add') {
      addStudent({ ...form, avatar: form.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() });
    } else if (modal === 'edit') {
      updateStudent(selected.id, form);
    }
    closeModal();
  };

  const toggleCourse = (c) => {
    setForm(p => ({
      ...p, enrolled: p.enrolled.includes(c) ? p.enrolled.filter(x => x !== c) : [...p.enrolled, c]
    }));
  };

  const confirmDelete = (s) => setDeleteConfirm(s);
  const doDelete = () => { deleteStudent(deleteConfirm.id); setDeleteConfirm(null); };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="font-heading font-bold text-2xl text-gray-900">Students</h1>
          <p className="text-gray-500 text-sm">{students.length} total · {students.filter(s => s.status === 'active').length} active</p>
        </div>
        <button onClick={openAdd} className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl">
          <FaPlus size={12} /> Add Student
        </button>
      </div>

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <FaSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search by name, email, bank..." value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
        </div>
        <div className="flex gap-2">
          {['all', 'active', 'inactive'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold capitalize transition-all ${filter === f ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr className="text-xs text-gray-500 text-left">
                <th className="px-4 py-3 font-semibold">Student</th>
                <th className="px-4 py-3 font-semibold">Bank</th>
                <th className="px-4 py-3 font-semibold">Courses</th>
                <th className="px-4 py-3 font-semibold">Joined</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(s => (
                <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0`}>{s.avatar}</div>
                      <div>
                        <div className="font-medium text-gray-900">{s.name}</div>
                        <div className="text-gray-400 text-[10px]">{s.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{s.bank}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {s.enrolled.map(c => (
                        <span key={c} className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">{c.toUpperCase()}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{s.joinDate}</td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${s.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button onClick={() => openView(s)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all"><FaEye size={13} /></button>
                      <button onClick={() => openEdit(s)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition-all"><FaEdit size={13} /></button>
                      <button onClick={() => confirmDelete(s)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-all"><FaTrash size={12} /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="text-center py-12 text-gray-400">No students found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {(modal === 'add' || modal === 'edit') && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-gray-900 text-xl">{modal === 'add' ? 'Add Student' : 'Edit Student'}</h2>
              <button onClick={closeModal} className="w-8 h-8 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-all"><FaTimes size={14} /></button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email *</label>
                  <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone</label>
                  <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">City</label>
                  <input type="text" value={form.city} onChange={e => setForm(p => ({ ...p, city: e.target.value }))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Bank Name</label>
                <input type="text" value={form.bank} onChange={e => setForm(p => ({ ...p, bank: e.target.value }))}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">Enrolled Courses</label>
                <div className="flex flex-wrap gap-2">
                  {COURSE_OPTIONS.map(c => (
                    <button key={c} type="button" onClick={() => toggleCourse(c)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${form.enrolled.includes(c) ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                      {COURSE_LABELS[c]}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Status</label>
                <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value }))}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleSave} className="flex-1 btn-primary flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm">
                <FaSave size={13} /> {modal === 'add' ? 'Add Student' : 'Save Changes'}
              </button>
              <button onClick={closeModal} className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {modal === 'view' && selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-gray-900">Student Profile</h2>
              <button onClick={closeModal} className="w-8 h-8 flex items-center justify-center rounded-xl bg-gray-100"><FaTimes size={14} /></button>
            </div>
            <div className="text-center mb-5">
              <div className={`w-16 h-16 bg-gradient-to-br ${selected.color} rounded-2xl flex items-center justify-center text-white font-heading font-bold text-2xl mx-auto mb-3`}>{selected.avatar}</div>
              <h3 className="font-heading font-bold text-gray-900 text-lg">{selected.name}</h3>
              <p className="text-gray-500 text-sm">{selected.bank}</p>
            </div>
            <div className="space-y-2 text-sm">
              {[['Email', selected.email], ['Phone', selected.phone], ['City', selected.city], ['Joined', selected.joinDate], ['Status', selected.status]].map(([k, v]) => (
                <div key={k} className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">{k}</span>
                  <span className="text-gray-900 font-semibold capitalize">{v}</span>
                </div>
              ))}
              <div className="flex justify-between py-2">
                <span className="text-gray-500 font-medium">Courses</span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {selected.enrolled.map(c => <span key={c} className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{c.toUpperCase()}</span>)}
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 bg-gray-50 rounded-2xl p-3 text-center">
              {[['Streak', `${selected.streak || 0}d`], ['Tests', selected.testScores?.length || 0], ['Avg Score', selected.testScores?.length ? `${Math.round(selected.testScores.reduce((a,b)=>a+b,0)/selected.testScores.length)}%` : 'N/A']].map(([k,v]) => (
                <div key={k}><div className="font-bold text-primary text-lg">{v}</div><div className="text-gray-400 text-[10px]">{k}</div></div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
            <div className="text-4xl mb-3">⚠️</div>
            <h3 className="font-heading font-bold text-gray-900 mb-2">Delete Student?</h3>
            <p className="text-gray-500 text-sm mb-5">This will permanently remove <strong>{deleteConfirm.name}</strong> from the system.</p>
            <div className="flex gap-3">
              <button onClick={doDelete} className="flex-1 bg-red-500 text-white font-semibold py-2.5 rounded-xl hover:bg-red-600 transition-all text-sm">Delete</button>
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 border border-gray-300 text-gray-700 font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-all text-sm">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
