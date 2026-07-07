import { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useDashboard } from '../../context/DashboardContext';
import { COURSE_CHAPTERS } from '../../data/mockData';
import { FaEdit, FaUsers, FaChevronDown, FaChevronUp, FaCheckCircle } from 'react-icons/fa';

const COURSES = [
  { id: 'jaiib',              name: 'JAIIB / DB&F',               fee: 9570,  color: 'from-blue-500 to-blue-700',     status: 'Active',   papers: 'IE&IFS · PPB · AFM · RBWM' },
  { id: 'caiib',              name: 'CAIIB',                      fee: 11440, color: 'from-purple-500 to-purple-700', status: 'Active',   papers: 'ABM · BFM · BRBL · Elective' },
  { id: 'professional-bankers',name: 'Professional Bankers',      fee: 4999,  color: 'from-teal-500 to-teal-700',     status: 'Active',   papers: 'Clerk→Officer · Scale I→II' },
  { id: 'iibf',               name: 'All IIBF Certificate Courses',fee: 2200, color: 'from-indigo-500 to-indigo-700', status: 'Active',   papers: 'Digital · AML/KYC · Treasury · IT' },
  { id: 'sbi-jibo',           name: 'SBI JIBO',                   fee: 3999,  color: 'from-sky-500 to-sky-700',       status: 'Active',   papers: 'Reasoning · English · GK · Computer' },
  { id: 'bank-promotion',     name: 'Bank Promotion Exams',       fee: 2999,  color: 'from-emerald-500 to-emerald-700',status:'Active',   papers: 'Written Test · Interview' },
  { id: 'ignou-mba',          name: 'IGNOU MBA',                  fee: 48000, color: 'from-rose-500 to-rose-700',     status: 'Active',   papers: '2 Years · 4 Semesters' },
  { id: 'dra',                name: 'DRA Certification',          fee: 1500,  color: 'from-orange-500 to-orange-700', status: 'Active',   papers: 'Legal · Practical' },
  { id: 'bc-bf',              name: 'BC-BF Certification',        fee: 1200,  color: 'from-cyan-500 to-cyan-700',     status: 'Active',   papers: 'IIBF Certificate' },
  { id: 'bank-po',            name: 'Bank PO / SSC Coaching',     fee: 30000, color: 'from-green-500 to-green-700',   status: 'Active',   papers: 'Prelims · Mains · Interview' },
];

export default function CoursesAdminPage() {
  const { adminStats, students } = useDashboard();
  const [openCourse, setOpenCourse] = useState(null);
  const [editFee, setEditFee] = useState({});
  const [saved, setSaved] = useState(null);

  const enrolled = (id) => students.filter(s => s.enrolled.includes(id)).length;

  const handleSaveFee = (id) => {
    setSaved(id);
    setTimeout(() => setSaved(null), 2000);
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="font-heading font-bold text-2xl text-gray-900">Course Manager</h1>
        <p className="text-gray-500 text-sm">Manage course content, fees, and enrolment</p>
      </div>

      <div className="space-y-4">
        {COURSES.map(course => {
          const chapters = COURSE_CHAPTERS[course.id] || [];
          const totalLessons = chapters.reduce((s, c) => s + c.lessons.length, 0);
          const isOpen = openCourse === course.id;

          return (
            <div key={course.id} className="glass-card overflow-hidden">
              <div className="p-5 flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center text-white text-2xl shrink-0`}>🎓</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-heading font-bold text-gray-900">{course.name}</h3>
                    <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-0.5 rounded-full">{course.status}</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{course.papers}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    <span><FaUsers size={10} className="inline mr-1" />{enrolled(course.id)} enrolled</span>
                    <span>📚 {chapters.length} chapters · {totalLessons} lessons</span>
                    <span className="font-semibold text-gray-700">₹{course.fee.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setOpenCourse(isOpen ? null : course.id)}
                    className="flex items-center gap-1.5 border border-gray-300 text-gray-700 px-3 py-2 rounded-xl text-xs font-semibold hover:bg-gray-50 transition-all">
                    {isOpen ? <><FaChevronUp size={10} /> Less</> : <><FaChevronDown size={10} /> Manage</>}
                  </button>
                </div>
              </div>

              {isOpen && (
                <div className="border-t border-gray-100 p-5">
                  {/* Fee editor */}
                  <div className="flex items-center gap-3 mb-5 p-4 bg-gray-50 rounded-2xl">
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Course Fee (₹)</label>
                      <input type="number" defaultValue={course.fee}
                        onChange={e => setEditFee(p => ({ ...p, [course.id]: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
                    </div>
                    <button onClick={() => handleSaveFee(course.id)}
                      className={`mt-5 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${saved === course.id ? 'bg-success text-white' : 'btn-primary'}`}>
                      {saved === course.id ? '✓ Saved' : 'Update Fee'}
                    </button>
                  </div>

                  {/* Chapter list */}
                  <h4 className="font-semibold text-gray-800 text-sm mb-3">Chapters & Lessons</h4>
                  <div className="space-y-2">
                    {chapters.map((ch, i) => (
                      <div key={ch.id} className="border border-gray-100 rounded-xl p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xs font-bold">{i + 1}</div>
                            <span className="font-medium text-gray-900 text-sm">{ch.title}</span>
                          </div>
                          <span className="text-xs text-gray-400">{ch.lessons.length} lessons</span>
                        </div>
                        <div className="mt-2 pl-8 space-y-1">
                          {ch.lessons.map(l => (
                            <div key={l.id} className="flex items-center justify-between text-xs text-gray-500">
                              <span className="flex items-center gap-1.5">
                                <FaCheckCircle size={9} className={l.completed ? 'text-success' : 'text-gray-300'} /> {l.title}
                              </span>
                              <span>{l.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </AdminLayout>
  );
}
