import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import { useDashboard } from '../../context/DashboardContext';
import { COURSE_CHAPTERS } from '../../data/mockData';
import { FaArrowRight, FaLock, FaCheckCircle, FaPlayCircle, FaExternalLinkAlt } from 'react-icons/fa';

const COURSE_META = {
  jaiib:       { name: 'JAIIB Complete Batch',    color: 'from-blue-500 to-blue-700',     exam: 'Nov 2026',  papers: 'PPB · IE&IFS · AFM · RBWM' },
  caiib:       { name: 'CAIIB ABM + BFM',         color: 'from-purple-500 to-purple-700', exam: 'Dec 2026',  papers: 'ABM · BFM · BRBL' },
  'bank-po':   { name: 'Bank PO Coaching',         color: 'from-emerald-500 to-emerald-700',exam:'Oct 2026', papers: 'Quant · Reasoning · English · GK' },
  'rbi-grade-b':{ name:'RBI Grade B Complete',     color: 'from-amber-500 to-amber-700',  exam: 'Sep 2026',  papers: 'Phase I · Phase II · Interview' },
};

export default function DashboardCoursesPage() {
  const { user } = useAuth();
  const { currentStudent, getProgress } = useDashboard();
  const enrolled = currentStudent?.enrolled || ['jaiib'];

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="font-heading font-bold text-2xl text-gray-900 mb-1">My Courses</h1>
        <p className="text-gray-500 text-sm">Continue your exam preparation — all enrolled courses below</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {enrolled.map(courseId => {
          const meta = COURSE_META[courseId] || { name: courseId, color: 'from-gray-400 to-gray-600', exam: '', papers: '' };
          const chapters = COURSE_CHAPTERS[courseId] || [];
          const totalLessons = chapters.reduce((s, c) => s + c.lessons.length, 0);
          const { done, pct } = getProgress(courseId, totalLessons);

          return (
            <div key={courseId} className="glass-card overflow-hidden hover:shadow-2xl transition-all group">
              <div className={`bg-gradient-to-br ${meta.color} p-6 text-white`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">🎓</div>
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">Enrolled</span>
                </div>
                <h3 className="font-heading font-bold text-xl mb-1">{meta.name}</h3>
                <p className="text-white/75 text-xs">{meta.papers}</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-gray-500">{done}/{totalLessons} lessons</span>
                  <span className="font-bold text-primary">{pct}%</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all" style={{ width: `${pct}%` }} />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <span>📅 Next exam: {meta.exam}</span>
                </div>
                <div className="flex gap-2">
                  <Link to={`/dashboard/courses/${courseId}`}
                    className="flex-1 btn-primary py-2.5 rounded-xl text-sm flex items-center justify-center gap-2">
                    {pct === 0 ? 'Start Learning' : 'Continue'} <FaArrowRight size={11} />
                  </Link>
                  <Link to="/dashboard/tests"
                    className="px-4 py-2.5 border border-primary text-primary rounded-xl text-sm font-semibold hover:bg-primary/5 transition-all">
                    Test
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Available courses to explore */}
      <div className="glass-card p-6">
        <h2 className="font-heading font-bold text-gray-900 mb-1">Explore More Courses</h2>
        <p className="text-gray-500 text-sm mb-5">Enrol in additional courses to expand your banking career</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(COURSE_META)
            .filter(([id]) => !enrolled.includes(id))
            .map(([id, meta]) => (
              <div key={id} className="rounded-2xl border border-gray-200 p-4 hover:border-primary/40 hover:shadow-md transition-all">
                <div className={`w-10 h-10 bg-gradient-to-br ${meta.color} rounded-xl flex items-center justify-center text-white mb-3`}>🎓</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{meta.name}</h3>
                <p className="text-gray-400 text-xs mb-3">{meta.papers}</p>
                <Link to="/contact" className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline">
                  Enquire <FaExternalLinkAlt size={9} />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
