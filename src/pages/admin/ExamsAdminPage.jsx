import { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { FaEdit, FaEye, FaCheckCircle, FaExternalLinkAlt, FaLayerGroup } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EXAM_PAGES = [
  // Bank & Insurance
  { slug: 'sbi-po',          name: 'SBI PO',           category: 'Bank & Insurance', status: 'Live', vacancies: '~1,500',  difficulty: 'High' },
  { slug: 'sbi-clerk',       name: 'SBI Clerk',        category: 'Bank & Insurance', status: 'Live', vacancies: '~8,000',  difficulty: 'Medium' },
  { slug: 'ibps-po',         name: 'IBPS PO',          category: 'Bank & Insurance', status: 'Live', vacancies: '~4,000',  difficulty: 'High' },
  { slug: 'ibps-clerk',      name: 'IBPS Clerk',       category: 'Bank & Insurance', status: 'Live', vacancies: '~6,000',  difficulty: 'Medium' },
  { slug: 'rrb-po',          name: 'RRB PO',           category: 'Bank & Insurance', status: 'Live', vacancies: '~3,000',  difficulty: 'Medium' },
  { slug: 'rrb-clerk',       name: 'RRB Office Assistant', category: 'Bank & Insurance', status: 'Live', vacancies: '~5,000', difficulty: 'Medium' },
  { slug: 'lic-aao',         name: 'LIC AAO',          category: 'Bank & Insurance', status: 'Live', vacancies: '~300',    difficulty: 'High' },
  { slug: 'lic-ado',         name: 'LIC ADO',          category: 'Bank & Insurance', status: 'Live', vacancies: '~500',    difficulty: 'Medium' },
  { slug: 'nicl-ao',         name: 'NICL AO',          category: 'Bank & Insurance', status: 'Live', vacancies: '~200',    difficulty: 'High' },
  { slug: 'nicl-assistant',  name: 'NICL Assistant',   category: 'Bank & Insurance', status: 'Live', vacancies: '~400',    difficulty: 'Medium' },
  { slug: 'niacl-ao',        name: 'NIACL AO',         category: 'Bank & Insurance', status: 'Live', vacancies: '~150',    difficulty: 'High' },
  { slug: 'niacl-assistant', name: 'NIACL Assistant',  category: 'Bank & Insurance', status: 'Live', vacancies: '~300',    difficulty: 'Medium' },
  { slug: 'sbi-apprentice',  name: 'SBI Apprentice',   category: 'Bank & Insurance', status: 'Live', vacancies: '~8,000',  difficulty: 'Low' },
  // SSC
  { slug: 'ssc-cgl',         name: 'SSC CGL',          category: 'SSC Exams',        status: 'Live', vacancies: '~17,000', difficulty: 'High' },
  { slug: 'ssc-chsl',        name: 'SSC CHSL',         category: 'SSC Exams',        status: 'Live', vacancies: '~3,000',  difficulty: 'Medium' },
  { slug: 'ssc-mts',         name: 'SSC MTS',          category: 'SSC Exams',        status: 'Live', vacancies: '~8,000',  difficulty: 'Low' },
  // Railway
  { slug: 'rrb-ntpc',        name: 'RRB NTPC',         category: 'Railway Exams',    status: 'Live', vacancies: '~11,000', difficulty: 'Medium' },
  { slug: 'rrb-group-d',     name: 'RRB Group D',      category: 'Railway Exams',    status: 'Live', vacancies: '~1,03,769', difficulty: 'Low' },
  { slug: 'rrb-alp',         name: 'RRB ALP',          category: 'Railway Exams',    status: 'Live', vacancies: '~9,000',  difficulty: 'High' },
  // Regulatory
  { slug: 'rbi-grade-b',     name: 'RBI Grade B',      category: 'Regulatory Bodies',status: 'Live', vacancies: '~291',    difficulty: 'Very High' },
  { slug: 'rbi-assistant',   name: 'RBI Assistant',    category: 'Regulatory Bodies',status: 'Live', vacancies: '~450',    difficulty: 'High' },
];

const CATEGORIES = ['All', 'Bank & Insurance', 'SSC Exams', 'Railway Exams', 'Regulatory Bodies'];

const diffColor = {
  'Low': 'bg-green-100 text-green-700',
  'Medium': 'bg-yellow-100 text-yellow-700',
  'High': 'bg-orange-100 text-orange-700',
  'Very High': 'bg-red-100 text-red-700',
};

export default function ExamsAdminPage() {
  const [category, setCategory] = useState('All');

  const filtered = category === 'All' ? EXAM_PAGES : EXAM_PAGES.filter(e => e.category === category);

  const counts = CATEGORIES.slice(1).reduce((acc, cat) => {
    acc[cat] = EXAM_PAGES.filter(e => e.category === cat).length;
    return acc;
  }, {});

  return (
    <AdminLayout>
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-heading font-bold text-2xl text-gray-900">Exam Pages</h1>
          <p className="text-gray-500 text-sm mt-0.5">Manage all {EXAM_PAGES.length} exam pages across 4 categories</p>
        </div>
        <Link to="/" target="_blank" className="flex items-center gap-2 btn-primary py-2 px-4 rounded-xl text-sm">
          <FaEye size={12} /> Preview Site
        </Link>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Bank & Insurance', count: counts['Bank & Insurance'], color: 'bg-blue-500' },
          { label: 'SSC Exams', count: counts['SSC Exams'], color: 'bg-orange-500' },
          { label: 'Railway Exams', count: counts['Railway Exams'], color: 'bg-green-500' },
          { label: 'Regulatory Bodies', count: counts['Regulatory Bodies'], color: 'bg-amber-500' },
        ].map(c => (
          <div key={c.label} className="glass-card p-5 flex items-center gap-3">
            <div className={`w-10 h-10 ${c.color} rounded-xl flex items-center justify-center text-white shrink-0`}>
              <FaLayerGroup size={14} />
            </div>
            <div>
              <div className="font-heading font-bold text-xl text-gray-900">{c.count}</div>
              <div className="text-gray-500 text-xs">{c.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap mb-4">
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)}
            className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-all ${
              category === cat ? 'bg-primary text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>
            {cat} {cat !== 'All' && `(${counts[cat]})`}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr className="text-xs text-gray-500 text-left">
                <th className="px-5 py-3.5 font-semibold">Exam Name</th>
                <th className="px-4 py-3.5 font-semibold">Category</th>
                <th className="px-4 py-3.5 font-semibold">Vacancies</th>
                <th className="px-4 py-3.5 font-semibold">Difficulty</th>
                <th className="px-4 py-3.5 font-semibold">Status</th>
                <th className="px-4 py-3.5 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(exam => (
                <tr key={exam.slug} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="font-semibold text-gray-900">{exam.name}</div>
                    <div className="text-xs text-gray-400">/exam-hub/{exam.slug}</div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg font-medium">{exam.category}</span>
                  </td>
                  <td className="px-4 py-3.5 text-gray-600 text-xs">{exam.vacancies}</td>
                  <td className="px-4 py-3.5">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${diffColor[exam.difficulty]}`}>{exam.difficulty}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="flex items-center gap-1 text-xs text-success font-semibold">
                      <FaCheckCircle size={10} /> {exam.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link to={`/exam-hub/${exam.slug}`} target="_blank"
                        className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary border border-gray-200 px-2.5 py-1.5 rounded-lg transition-all">
                        <FaExternalLinkAlt size={9} /> View
                      </Link>
                      <button className="flex items-center gap-1 text-xs text-primary border border-primary/30 bg-primary/5 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 transition-all">
                        <FaEdit size={9} /> Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-3 text-center">
        Exam page content is managed via <code className="bg-gray-100 px-1 py-0.5 rounded">src/data/examData.js</code>
      </p>
    </AdminLayout>
  );
}
