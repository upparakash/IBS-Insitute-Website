import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useDashboard } from '../../context/DashboardContext';
import { FaTrophy, FaChartBar, FaFireAlt, FaArrowRight, FaClipboardList } from 'react-icons/fa';

export default function PerformancePage() {
  const { testHistory, streak, currentStudent } = useDashboard();

  const avgScore = testHistory.length
    ? Math.round(testHistory.reduce((s, t) => s + (t.pct || 0), 0) / testHistory.length)
    : 0;
  const bestScore = testHistory.length ? Math.max(...testHistory.map(t => t.pct || 0)) : 0;
  const passCount = testHistory.filter(t => (t.pct || 0) >= 60).length;

  // Group by subject
  const bySubject = {};
  testHistory.forEach(t => {
    if (!bySubject[t.testName]) bySubject[t.testName] = [];
    bySubject[t.testName].push(t.pct || 0);
  });

  // Score trend for last 8 tests
  const trend = testHistory.slice(0, 8).reverse();

  const ScoreBar = ({ pct, label }) => (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-600 truncate max-w-[200px]">{label}</span>
        <span className="font-bold text-gray-900 ml-2">{pct}%</span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all ${pct >= 80 ? 'bg-success' : pct >= 60 ? 'bg-accent' : 'bg-red-400'}`}
          style={{ width: `${pct}%` }} />
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="font-heading font-bold text-2xl text-gray-900 mb-1">Performance Analytics</h1>
        <p className="text-gray-500 text-sm">Track your progress across all mock tests and chapters</p>
      </div>

      {/* Overview stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { icon: <FaClipboardList size={20} className="text-blue-600" />, label: 'Tests Attempted',  value: testHistory.length, bg: 'bg-blue-50' },
          { icon: <FaChartBar size={20} className="text-purple-600" />,    label: 'Average Score',   value: avgScore ? `${avgScore}%` : 'N/A', bg: 'bg-purple-50' },
          { icon: <FaTrophy size={20} className="text-yellow-500" />,     label: 'Best Score',       value: bestScore ? `${bestScore}%` : 'N/A', bg: 'bg-yellow-50' },
          { icon: <FaFireAlt size={20} className="text-red-500" />,       label: 'Current Streak',   value: `${streak.count} day${streak.count !== 1 ? 's' : ''}`, bg: 'bg-red-50' },
        ].map(({ icon, label, value, bg }) => (
          <div key={label} className="glass-card p-5 flex items-center gap-3">
            <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center shrink-0`}>{icon}</div>
            <div>
              <div className="font-heading font-bold text-xl text-gray-900">{value}</div>
              <div className="text-gray-500 text-xs">{label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Score trend */}
          {trend.length > 0 && (
            <div className="glass-card p-6">
              <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
                <FaChartBar className="text-primary" /> Score Trend (Last {trend.length} Tests)
              </h2>
              <div className="flex items-end gap-2 h-32">
                {trend.map((t, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-[9px] text-gray-500 font-bold">{t.pct}%</span>
                    <div className="w-full rounded-t-lg transition-all" style={{
                      height: `${(t.pct / 100) * 96}px`,
                      background: t.pct >= 80 ? '#16A34A' : t.pct >= 60 ? '#2563EB' : '#ef4444',
                    }} />
                  </div>
                ))}
              </div>
              <div className="flex items-end gap-2 mt-1">
                {trend.map((t, i) => (
                  <div key={i} className="flex-1 text-center">
                    <span className="text-[8px] text-gray-400">{i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-success rounded" /> ≥80%</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-accent rounded" /> 60-79%</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-400 rounded" /> &lt;60%</div>
              </div>
            </div>
          )}

          {/* All test history */}
          <div className="glass-card p-6">
            <h2 className="font-heading font-bold text-gray-900 mb-5">Test History</h2>
            {testHistory.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <div className="text-4xl mb-3">📝</div>
                <p className="text-sm mb-4">No tests attempted yet.</p>
                <Link to="/dashboard/tests" className="btn-primary py-2.5 px-6 rounded-xl text-sm">Start Mock Test</Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs text-gray-500 text-left">
                      <th className="pb-3 font-semibold">Test Name</th>
                      <th className="pb-3 font-semibold text-center">Score</th>
                      <th className="pb-3 font-semibold text-center">%</th>
                      <th className="pb-3 font-semibold text-center">Result</th>
                      <th className="pb-3 font-semibold text-right">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {testHistory.map((t) => (
                      <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 pr-4 text-gray-900 max-w-[200px] truncate">{t.testName}</td>
                        <td className="py-3 text-center text-gray-700">{t.correct}/{t.total}</td>
                        <td className="py-3 text-center font-bold text-gray-900">{t.pct}%</td>
                        <td className="py-3 text-center">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${(t.pct || 0) >= 60 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {(t.pct || 0) >= 60 ? 'Pass' : 'Review'}
                          </span>
                        </td>
                        <td className="py-3 text-right text-gray-500 text-xs">{new Date(t.date).toLocaleDateString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          {/* Streak info */}
          <div className="glass-card p-6 text-center">
            <FaFireAlt className="text-red-500 mx-auto mb-2" size={36} />
            <div className="font-heading font-extrabold text-4xl text-gray-900 mb-1">{streak.count}</div>
            <div className="text-gray-500 text-sm mb-4">Day Streak</div>
            <div className="grid grid-cols-2 gap-3 text-center border-t border-gray-100 pt-4">
              <div>
                <div className="font-heading font-bold text-xl text-primary">{streak.longest}</div>
                <div className="text-gray-400 text-xs">Longest</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl text-success">{passCount}</div>
                <div className="text-gray-400 text-xs">Tests Passed</div>
              </div>
            </div>
          </div>

          {/* Pass rate */}
          {testHistory.length > 0 && (
            <div className="glass-card p-6">
              <h3 className="font-heading font-bold text-gray-900 mb-4">Pass Rate</h3>
              <div className="text-center mb-4">
                <div className="font-heading font-extrabold text-3xl text-primary">
                  {Math.round((passCount / testHistory.length) * 100)}%
                </div>
                <div className="text-gray-500 text-xs">{passCount} of {testHistory.length} tests passed</div>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-success rounded-full" style={{ width: `${Math.round((passCount / testHistory.length) * 100)}%` }} />
              </div>
            </div>
          )}

          <div className="glass-card p-6">
            <h3 className="font-heading font-bold text-gray-900 mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <Link to="/dashboard/tests" className="flex items-center justify-between p-3 bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors group">
                <span className="text-sm font-medium text-gray-800">Take a Mock Test</span>
                <FaArrowRight size={11} className="text-primary" />
              </Link>
              <Link to="/dashboard/materials" className="flex items-center justify-between p-3 bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors group">
                <span className="text-sm font-medium text-gray-800">Study Materials</span>
                <FaArrowRight size={11} className="text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
