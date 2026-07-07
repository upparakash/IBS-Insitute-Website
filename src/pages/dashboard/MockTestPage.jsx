import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useDashboard } from '../../context/DashboardContext';
import { QUESTION_BANKS } from '../../data/mockData';
import { FaClock, FaFlag, FaCheck, FaArrowLeft, FaArrowRight, FaTrophy, FaChartBar, FaRedo, FaListUl } from 'react-icons/fa';

const TESTS = [
  { id: 'jaiib_ppb',  name: 'JAIIB – PPB Full Mock Test',        subject: 'PPB',     bank: 'jaiib_ppb',  duration: 20, attempts: 12400 },
  { id: 'jaiib_ief',  name: 'JAIIB – IE&IFS Chapter Test',       subject: 'IE&IFS',  bank: 'jaiib_ief',  duration: 20, attempts: 9800  },
  { id: 'jaiib_afm',  name: 'JAIIB – AFM Mock Test',             subject: 'AFM',     bank: 'jaiib_afm',  duration: 20, attempts: 8750  },
  { id: 'jaiib_rbwm', name: 'JAIIB – RBWM Chapter Test',         subject: 'RBWM',    bank: 'jaiib_rbwm', duration: 20, attempts: 7500  },
  { id: 'caiib_abm',  name: 'CAIIB – ABM Full Mock Test',        subject: 'ABM',     bank: 'caiib_abm',  duration: 25, attempts: 6200  },
  { id: 'caiib_bfm',  name: 'CAIIB – BFM Treasury & Forex Test', subject: 'BFM',     bank: 'caiib_bfm',  duration: 25, attempts: 5400  },
  { id: 'bank_po',    name: 'Bank PO – Mixed Mock Test',         subject: 'Mixed',   bank: 'bank_po',    duration: 20, attempts: 22000 },
];

function TestListing({ onStart }) {
  const { testHistory } = useDashboard();
  const attempts = testHistory.length;
  const avg = attempts ? Math.round(testHistory.reduce((s, t) => s + (t.pct || 0), 0) / attempts) : 0;
  const best = attempts ? Math.max(...testHistory.map(t => t.pct || 0)) : 0;

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="font-heading font-bold text-2xl text-gray-900 mb-1">Mock Test Engine</h1>
        <p className="text-gray-500 text-sm">JAIIB, CAIIB, Bank PO — exam-pattern questions with detailed analytics</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Tests Available', value: `${TESTS.length}`, color: 'text-primary' },
          { label: 'Your Attempts',   value: attempts, color: 'text-accent' },
          { label: 'Average Score',   value: avg ? `${avg}%` : 'N/A', color: 'text-gold' },
          { label: 'Best Score',      value: best ? `${best}%` : 'N/A', color: 'text-success' },
        ].map(s => (
          <div key={s.label} className="glass-card p-5 text-center">
            <div className={`font-heading font-extrabold text-3xl ${s.color}`}>{s.value}</div>
            <div className="text-gray-500 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TESTS.map(test => {
          const myAttempts = testHistory.filter(t => t.testId === test.id);
          const lastScore = myAttempts[0]?.pct;
          return (
            <div key={test.id} className="glass-card p-6 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-lg">{test.subject}</span>
                <span className="text-xs text-gray-500 flex items-center gap-1"><FaClock size={10} /> {test.duration} min</span>
              </div>
              <h3 className="font-heading font-bold text-gray-900 mb-2">{test.name}</h3>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                <span>📝 {QUESTION_BANKS[test.bank]?.length || 15} Qs</span>
                <span>👥 {test.attempts.toLocaleString()} Attempts</span>
              </div>
              {lastScore !== undefined && (
                <div className="text-xs font-medium text-gray-600 mb-3">
                  Last: <span className={`font-bold ${lastScore >= 60 ? 'text-success' : 'text-red-500'}`}>{lastScore}%</span>
                  {' · '}{myAttempts.length} attempt{myAttempts.length !== 1 ? 's' : ''}
                </div>
              )}
              <div className="border-t border-gray-100 pt-4">
                <button onClick={() => onStart(test)}
                  className="w-full btn-primary py-2.5 rounded-xl text-sm flex items-center justify-center gap-2">
                  {lastScore !== undefined ? 'Retake Test' : 'Start Test'} <FaArrowRight size={11} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}

function TestScreen({ test, onFinish }) {
  const { saveTest } = useDashboard();
  const questions = QUESTION_BANKS[test.bank] || [];
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(test.duration * 60);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = useCallback(() => {
    const correct = questions.filter((q, i) => answers[i] === q.answer).length;
    const pct = Math.round((correct / questions.length) * 100);
    const entry = saveTest({ testId: test.id, testName: test.name, correct, total: questions.length, pct });
    setResult({ correct, total: questions.length, pct, answers: { ...answers }, savedEntry: entry });
  }, [answers, questions, test, saveTest]);

  useEffect(() => {
    if (result) return;
    const t = setInterval(() => {
      setTimeLeft(s => {
        if (s <= 1) { clearInterval(t); handleSubmit(); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [result, handleSubmit]);

  const toggleFlag = () => {
    setFlagged(f => { const s = new Set(f); s.has(current) ? s.delete(current) : s.add(current); return s; });
  };

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const getStatus = (i) => {
    if (result?.answers[i] !== undefined && flagged.has(i)) return 'answered-flagged';
    if (result ? result.answers[i] !== undefined : answers[i] !== undefined) return 'answered';
    if (flagged.has(i)) return 'flagged';
    if (i === current) return 'current';
    return 'unanswered';
  };

  const statusStyle = {
    'answered':         'bg-success text-white',
    'answered-flagged': 'bg-purple-500 text-white',
    'flagged':          'bg-gold text-white',
    'current':          'bg-primary text-white ring-2 ring-primary/50',
    'unanswered':       'bg-gray-100 text-gray-600 hover:bg-gray-200',
  };

  if (result) {
    const { correct, total, pct } = result;
    const pass = pct >= 60;
    // Group by subject for analysis
    const bySubject = {};
    questions.forEach((q, i) => {
      if (!bySubject[q.subject]) bySubject[q.subject] = { total: 0, correct: 0 };
      bySubject[q.subject].total++;
      if (result.answers[i] === q.answer) bySubject[q.subject].correct++;
    });

    return (
      <DashboardLayout>
        <div className="max-w-2xl mx-auto">
          <div className={`rounded-3xl p-8 text-center mb-6 ${pass ? 'bg-gradient-to-br from-success to-green-700' : 'bg-gradient-to-br from-red-500 to-red-700'}`}>
            <div className="text-6xl mb-3">{pct >= 80 ? '🏆' : pass ? '✅' : '📚'}</div>
            <div className="text-white font-medium mb-1">{pct >= 80 ? 'Outstanding!' : pass ? 'Good Job!' : 'Keep Practicing!'}</div>
            <div className="font-heading font-extrabold text-6xl text-white">{pct}%</div>
            <div className="text-white/80 text-sm mt-1">{correct}/{total} correct</div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Score',      value: `${correct}/${total}`, icon: '📝' },
              { label: 'Accuracy',   value: `${pct}%`,             icon: '🎯' },
              { label: 'Result',     value: pass ? 'PASS' : 'FAIL', icon: '📊' },
              { label: 'Duration',   value: `${test.duration} min`, icon: '⏱️' },
            ].map(s => (
              <div key={s.label} className="glass-card p-4 text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className={`font-heading font-bold text-lg ${s.label === 'Result' ? (pass ? 'text-success' : 'text-red-500') : 'text-gray-900'}`}>{s.value}</div>
                <div className="text-gray-500 text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Subject analysis */}
          <div className="glass-card p-6 mb-5">
            <h3 className="font-heading font-bold text-gray-900 mb-4 flex items-center gap-2"><FaChartBar className="text-primary" /> Subject Analysis</h3>
            {Object.entries(bySubject).map(([sub, data]) => {
              const p = Math.round((data.correct / data.total) * 100);
              return (
                <div key={sub} className="mb-3">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-gray-700">{sub}</span>
                    <span className="font-bold text-gray-900">{data.correct}/{data.total} ({p}%)</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${p >= 60 ? 'bg-success' : 'bg-red-400'}`} style={{ width: `${p}%` }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Solutions */}
          <div className="glass-card p-6 mb-5">
            <h3 className="font-heading font-bold text-gray-900 mb-4">Solutions Review</h3>
            <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
              {questions.map((q, i) => (
                <div key={i} className={`p-4 rounded-xl text-sm ${result.answers[i] === q.answer ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <div className="font-medium text-gray-900 mb-2">Q{i + 1}. {q.q}</div>
                  <div className="space-y-1">
                    {q.options.map((opt, j) => (
                      <div key={j} className={`px-3 py-1.5 rounded-lg text-xs ${j === q.answer ? 'bg-green-600 text-white font-semibold' : result.answers[i] === j ? 'bg-red-400 text-white' : 'bg-white text-gray-700'}`}>
                        {String.fromCharCode(65 + j)}. {opt}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => onFinish()}
              className="flex-1 border border-primary text-primary font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/5 transition-all">
              <FaRedo size={13} /> Retake Test
            </button>
            <Link to="/dashboard/performance"
              className="flex-1 btn-primary py-3 rounded-xl text-center font-semibold text-sm flex items-center justify-center gap-2">
              <FaChartBar size={13} /> View Analytics
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const q = questions[current];

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <div className="bg-primary rounded-2xl px-5 py-3 flex items-center justify-between mb-5 text-white">
          <div>
            <div className="text-xs text-white/70">Q {current + 1} of {questions.length}</div>
            <div className="font-heading font-bold text-sm">{test.name}</div>
          </div>
          <div className={`flex items-center gap-2 font-heading font-bold text-lg ${timeLeft < 60 ? 'text-red-300 animate-pulse' : 'text-white'}`}>
            <FaClock size={16} /> {fmt(timeLeft)}
          </div>
          <button onClick={() => setPaletteOpen(!paletteOpen)}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all">
            <FaListUl size={11} /> Palette
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-5">
          <div className="lg:col-span-3 glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-lg">{q.subject}</span>
              <button onClick={toggleFlag}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${flagged.has(current) ? 'bg-gold text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                <FaFlag size={10} /> {flagged.has(current) ? 'Flagged' : 'Flag'}
              </button>
            </div>
            <p className="font-medium text-gray-900 text-base mb-6 leading-relaxed">{q.q}</p>
            <div className="space-y-3 mb-6">
              {q.options.map((opt, i) => (
                <button key={i} onClick={() => setAnswers(a => ({ ...a, [current]: i }))}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-left text-sm font-medium transition-all ${answers[current] === i ? 'border-primary bg-primary/10 text-primary' : 'border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${answers[current] === i ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                  {answers[current] === i && <FaCheck className="ml-auto text-primary shrink-0" size={13} />}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}
                className="flex items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-40">
                <FaArrowLeft size={12} /> Previous
              </button>
              {current < questions.length - 1 ? (
                <button onClick={() => setCurrent(c => c + 1)}
                  className="flex items-center gap-2 btn-primary px-4 py-2.5 rounded-xl text-sm">
                  Next <FaArrowRight size={12} />
                </button>
              ) : (
                <button onClick={handleSubmit}
                  className="flex items-center gap-2 bg-success hover:bg-success/90 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-lg">
                  <FaCheck size={12} /> Submit Test
                </button>
              )}
            </div>
          </div>

          <div className={`glass-card p-4 ${paletteOpen ? 'block' : 'hidden lg:block'}`}>
            <h3 className="font-heading font-bold text-gray-900 text-sm mb-3">Question Palette</h3>
            <div className="grid grid-cols-4 gap-1.5 mb-4">
              {questions.map((_, i) => (
                <button key={i} onClick={() => { setCurrent(i); setPaletteOpen(false); }}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${statusStyle[getStatus(i)]}`}>
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="space-y-1.5 text-xs">
              {[['bg-success text-white','Answered'],['bg-gold text-white','Flagged'],['bg-gray-100 text-gray-600','Not Answered']].map(([cls,lbl]) => (
                <div key={lbl} className="flex items-center gap-2"><div className={`w-4 h-4 rounded ${cls}`} /> {lbl}</div>
              ))}
            </div>
            <button onClick={handleSubmit}
              className="mt-4 w-full bg-success text-white font-semibold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:bg-success/90 transition-all">
              <FaCheck size={11} /> Submit Test
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function MockTestPage() {
  const [activeTest, setActiveTest] = useState(null);
  if (activeTest) return <TestScreen test={activeTest} onFinish={() => setActiveTest(null)} />;
  return <TestListing onStart={setActiveTest} />;
}
