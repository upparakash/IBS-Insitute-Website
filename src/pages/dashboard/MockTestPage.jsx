import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { FaClock, FaFlag, FaCheck, FaArrowLeft, FaArrowRight, FaTrophy, FaChartBar, FaRedo, FaListUl } from 'react-icons/fa';

const QUESTION_BANK = [
  { id: 1, q: 'Which of the following is the apex regulatory body for banking in India?', options: ['SEBI', 'IRDAI', 'Reserve Bank of India', 'NABARD'], answer: 2, subject: 'PPB' },
  { id: 2, q: 'The Banking Regulation Act was passed in the year:', options: ['1934', '1949', '1955', '1969'], answer: 1, subject: 'PPB' },
  { id: 3, q: 'JAIIB stands for:', options: ['Junior Associate of Indian Institute of Bankers', 'Joint Association of Indian International Banking', 'Junior Assistant of Indian Institute of Banking', 'None of these'], answer: 0, subject: 'PPB' },
  { id: 4, q: 'CRR (Cash Reserve Ratio) is maintained with:', options: ['SBI', 'RBI', 'Ministry of Finance', 'NABARD'], answer: 1, subject: 'PPB' },
  { id: 5, q: 'The minimum capital required for setting up a new private bank in India is:', options: ['₹200 Crore', '₹300 Crore', '₹500 Crore', '₹1000 Crore'], answer: 2, subject: 'PPB' },
  { id: 6, q: 'Priority Sector Lending target for domestic commercial banks is:', options: ['30%', '35%', '40%', '45%'], answer: 2, subject: 'IE&IFS' },
  { id: 7, q: 'Which instrument is NOT a Money Market instrument?', options: ['Treasury Bills', 'Commercial Paper', 'Equity Shares', 'Certificate of Deposit'], answer: 2, subject: 'IE&IFS' },
  { id: 8, q: 'SARFAESI Act was enacted in the year:', options: ['1999', '2000', '2002', '2005'], answer: 2, subject: 'PPB' },
  { id: 9, q: 'The headquarter of Reserve Bank of India is located in:', options: ['New Delhi', 'Kolkata', 'Mumbai', 'Chennai'], answer: 2, subject: 'PPB' },
  { id: 10, q: 'Basel III norms are related to:', options: ['Capital adequacy of banks', 'Customer protection', 'Insurance regulation', 'Stock market'], answer: 0, subject: 'PPB' },
  { id: 11, q: 'NPA stands for:', options: ['Non-Performing Asset', 'Net Performing Account', 'Non-Productive Advancement', 'None'], answer: 0, subject: 'IE&IFS' },
  { id: 12, q: 'The Repo Rate is the rate at which:', options: ['Banks lend to customers', 'RBI borrows from banks', 'RBI lends to banks', 'Banks lend to each other'], answer: 2, subject: 'PPB' },
  { id: 13, q: 'RTGS is used for transactions of minimum:', options: ['₹1 Lakh', '₹2 Lakh', '₹5 Lakh', '₹10 Lakh'], answer: 1, subject: 'IE&IFS' },
  { id: 14, q: 'Which of the following is a feature of Fixed Deposit?', options: ['Withdrawable anytime', 'Fixed tenure and interest rate', 'Used for daily transactions', 'No interest given'], answer: 1, subject: 'RBWM' },
  { id: 15, q: 'The concept of "Know Your Customer" is related to:', options: ['Marketing', 'Anti-money laundering compliance', 'Interest rate setting', 'Loan recovery'], answer: 1, subject: 'PPB' },
];

const TESTS = [
  { id: 1, name: 'JAIIB PPB Full Mock Test 1', subject: 'PPB', questions: 15, duration: 20, attempts: 12400 },
  { id: 2, name: 'JAIIB IE&IFS Chapter Test', subject: 'IE&IFS', questions: 15, duration: 20, attempts: 9800 },
  { id: 3, name: 'JAIIB Complete Mock Test', subject: 'All Papers', questions: 15, duration: 20, attempts: 18500 },
  { id: 4, name: 'CAIIB ABM Mock Test 1', subject: 'ABM', questions: 15, duration: 20, attempts: 7200 },
  { id: 5, name: 'Banking Current Affairs Quiz', subject: 'GK', questions: 15, duration: 15, attempts: 22000 },
  { id: 6, name: 'RBI Grade B Phase 1 Mock', subject: 'Mixed', questions: 15, duration: 20, attempts: 5600 },
];

function TestListing({ onStart }) {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="font-heading font-bold text-2xl text-gray-900 mb-1">Mock Test Engine</h1>
        <p className="text-gray-500 text-sm">India's most advanced banking exam test series — AI-powered analysis included</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Tests Available', value: '500+', color: 'text-primary' },
          { label: 'Attempts Today', value: '2,840', color: 'text-accent' },
          { label: 'Your Best Rank', value: '#142', color: 'text-gold' },
          { label: 'Avg Score', value: '72%', color: 'text-success' },
        ].map(s => (
          <div key={s.label} className="glass-card p-5 text-center">
            <div className={`font-heading font-extrabold text-3xl ${s.color}`}>{s.value}</div>
            <div className="text-gray-500 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TESTS.map(test => (
          <div key={test.id} className="glass-card p-6 hover:shadow-xl transition-all group">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-lg">{test.subject}</span>
              <span className="text-xs text-gray-500 flex items-center gap-1"><FaClock size={10} /> {test.duration} min</span>
            </div>
            <h3 className="font-heading font-bold text-gray-900 mb-2">{test.name}</h3>
            <div className="flex gap-4 text-xs text-gray-500 mb-5 pb-4 border-b border-gray-100">
              <span>📝 {test.questions} Questions</span>
              <span>👥 {test.attempts.toLocaleString()} Attempts</span>
            </div>
            <button onClick={() => onStart(test)}
              className="w-full btn-primary py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
              Start Test <FaArrowRight size={11} />
            </button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

function TestScreen({ test, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(test.duration * 60);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) return;
    const t = setInterval(() => {
      setTimeLeft(s => {
        if (s <= 1) { clearInterval(t); handleSubmit(); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [submitted]);

  const handleSubmit = useCallback(() => setSubmitted(true), []);

  const toggleFlag = () => {
    setFlagged(f => {
      const s = new Set(f);
      s.has(current) ? s.delete(current) : s.add(current);
      return s;
    });
  };

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const getStatus = (i) => {
    if (answers[i] !== undefined && flagged.has(i)) return 'answered-flagged';
    if (answers[i] !== undefined) return 'answered';
    if (flagged.has(i)) return 'flagged';
    if (i === current) return 'current';
    return 'unanswered';
  };

  const statusStyle = {
    'answered': 'bg-success text-white',
    'answered-flagged': 'bg-purple-500 text-white',
    'flagged': 'bg-gold text-white',
    'current': 'bg-primary text-white ring-2 ring-primary/50',
    'unanswered': 'bg-gray-100 text-gray-600 hover:bg-gray-200',
  };

  const q = QUESTION_BANK[current];

  if (submitted) {
    const correct = QUESTION_BANK.filter((q, i) => answers[i] === q.answer).length;
    const pct = Math.round(correct / QUESTION_BANK.length * 100);
    const rank = Math.floor(Math.random() * 500) + 100;

    return (
      <DashboardLayout>
        <div className="max-w-2xl mx-auto">
          <div className={`rounded-3xl p-8 text-center mb-6 ${pct >= 60 ? 'bg-gradient-to-br from-success to-green-700' : 'bg-gradient-to-br from-red-500 to-red-700'}`}>
            <div className="text-6xl mb-3">{pct >= 80 ? '🏆' : pct >= 60 ? '✅' : '📚'}</div>
            <div className="text-white text-lg mb-1 font-medium">{pct >= 80 ? 'Outstanding!' : pct >= 60 ? 'Good Job!' : 'Keep Practicing!'}</div>
            <div className="font-heading font-extrabold text-6xl text-white">{pct}%</div>
            <div className="text-white/80 text-sm mt-1">{correct}/{QUESTION_BANK.length} correct</div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Score', value: `${correct}/${QUESTION_BANK.length}`, icon: '📝' },
              { label: 'Accuracy', value: `${pct}%`, icon: '🎯' },
              { label: 'Your Rank', value: `#${rank}`, icon: '🏅' },
              { label: 'Percentile', value: `${100 - Math.round(rank / 1000 * 100)}th`, icon: '📊' },
            ].map(s => (
              <div key={s.label} className="glass-card p-4 text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-heading font-bold text-xl text-gray-900">{s.value}</div>
                <div className="text-gray-500 text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Subject analysis */}
          <div className="glass-card p-6 mb-5">
            <h3 className="font-heading font-bold text-gray-900 mb-4 flex items-center gap-2"><FaChartBar className="text-primary" /> Subject-wise Analysis</h3>
            {['PPB', 'IE&IFS', 'RBWM'].map(sub => {
              const subQs = QUESTION_BANK.filter(q => q.subject === sub);
              const subCorrect = subQs.filter((q, i) => {
                const idx = QUESTION_BANK.indexOf(q);
                return answers[idx] === q.answer;
              }).length;
              const subPct = subQs.length ? Math.round(subCorrect / subQs.length * 100) : 0;
              return (
                <div key={sub} className="mb-3">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-gray-700">{sub}</span>
                    <span className="font-bold text-gray-900">{subCorrect}/{subQs.length} ({subPct}%)</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${subPct >= 60 ? 'bg-success' : 'bg-red-400'}`} style={{ width: `${subPct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Solution review */}
          <div className="glass-card p-6 mb-5">
            <h3 className="font-heading font-bold text-gray-900 mb-4">Solutions Review</h3>
            <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
              {QUESTION_BANK.map((q, i) => (
                <div key={i} className={`p-4 rounded-xl text-sm ${answers[i] === q.answer ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <div className="font-medium text-gray-900 mb-2">Q{i + 1}. {q.q}</div>
                  <div className="space-y-1">
                    {q.options.map((opt, j) => (
                      <div key={j} className={`px-3 py-1.5 rounded-lg text-xs ${j === q.answer ? 'bg-green-600 text-white font-semibold' : answers[i] === j ? 'bg-red-400 text-white' : 'bg-white text-gray-700'}`}>
                        {String.fromCharCode(65 + j)}. {opt}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => onFinish()} className="flex-1 border border-primary text-primary font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/5 transition-all">
              <FaRedo size={13} /> Retake Test
            </button>
            <Link to="/dashboard" className="flex-1 btn-primary py-3 rounded-xl text-center font-semibold text-sm flex items-center justify-center gap-2">
              <FaChartBar size={13} /> Go to Dashboard
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        {/* Header bar */}
        <div className="bg-primary rounded-2xl px-5 py-3 flex items-center justify-between mb-5 text-white">
          <div>
            <div className="text-xs text-white/70">Question {current + 1} of {QUESTION_BANK.length}</div>
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
          {/* Question */}
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
                className="flex items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed">
                <FaArrowLeft size={12} /> Previous
              </button>
              {current < QUESTION_BANK.length - 1 ? (
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

          {/* Palette */}
          <div className={`glass-card p-4 ${paletteOpen ? 'block' : 'hidden lg:block'}`}>
            <h3 className="font-heading font-bold text-gray-900 text-sm mb-3">Question Palette</h3>
            <div className="grid grid-cols-4 gap-1.5 mb-4">
              {QUESTION_BANK.map((_, i) => (
                <button key={i} onClick={() => { setCurrent(i); setPaletteOpen(false); }}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${statusStyle[getStatus(i)]}`}>
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="space-y-1.5 text-xs">
              {[['bg-success text-white', 'Answered'], ['bg-gold text-white', 'Flagged'], ['bg-gray-100 text-gray-600', 'Not Visited']].map(([cls, lbl]) => (
                <div key={lbl} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${cls}`} /> {lbl}
                </div>
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
