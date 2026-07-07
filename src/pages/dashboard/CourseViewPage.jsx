import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useDashboard } from '../../context/DashboardContext';
import { COURSE_CHAPTERS } from '../../data/mockData';
import { FaCheckCircle, FaPlayCircle, FaLock, FaClock, FaArrowLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const COURSE_META = {
  jaiib:       { name: 'JAIIB Complete Batch',   color: 'from-blue-500 to-blue-700'     },
  caiib:       { name: 'CAIIB ABM + BFM',        color: 'from-purple-500 to-purple-700' },
  'bank-po':   { name: 'Bank PO Coaching',        color: 'from-emerald-500 to-emerald-700' },
  'rbi-grade-b':{ name:'RBI Grade B',            color: 'from-amber-500 to-amber-700'   },
};

export default function CourseViewPage() {
  const { id } = useParams();
  const { getProgress, markLesson, progress } = useDashboard();
  const [openChapter, setOpenChapter] = useState(0);
  const [playingLesson, setPlayingLesson] = useState(null);

  const meta = COURSE_META[id] || { name: id, color: 'from-gray-400 to-gray-600' };
  const chapters = COURSE_CHAPTERS[id] || [];
  const totalLessons = chapters.reduce((s, c) => s + c.lessons.length, 0);
  const { done, pct } = getProgress(id, totalLessons);
  const completedSet = new Set(Object.keys(progress[id] || {}));

  const handleMarkComplete = (lessonId) => {
    markLesson(id, lessonId);
    setPlayingLesson(null);
  };

  return (
    <DashboardLayout>
      <Link to="/dashboard/courses" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-5 transition-colors">
        <FaArrowLeft size={11} /> Back to Courses
      </Link>

      {/* Course header */}
      <div className={`bg-gradient-to-br ${meta.color} rounded-3xl p-6 text-white mb-6`}>
        <h1 className="font-heading font-bold text-2xl mb-2">{meta.name}</h1>
        <div className="flex items-center gap-4 text-white/80 text-sm mb-4">
          <span>📚 {totalLessons} lessons</span>
          <span>✅ {done} completed</span>
          <span>📊 {pct}% done</span>
        </div>
        <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* Playing lesson overlay */}
      {playingLesson && (
        <div className="glass-card p-6 mb-6 border-2 border-primary/30 bg-primary/5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-xs font-bold text-primary mb-1">NOW PLAYING</div>
              <h3 className="font-heading font-bold text-gray-900 text-lg">{playingLesson.title}</h3>
              <div className="flex items-center gap-1 text-gray-500 text-xs mt-1"><FaClock size={10} /> {playingLesson.duration}</div>
            </div>
            <button onClick={() => setPlayingLesson(null)} className="text-gray-400 hover:text-gray-700 text-lg">✕</button>
          </div>
          {/* Simulated video player */}
          <div className="bg-gray-900 rounded-2xl h-52 flex items-center justify-center mb-4">
            <div className="text-center text-white">
              <div className="text-5xl mb-3">▶️</div>
              <div className="text-sm text-gray-300">Recorded lecture — {playingLesson.duration}</div>
              <div className="text-xs text-gray-500 mt-1">Full video available in IBS App</div>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => handleMarkComplete(playingLesson.id)}
              className="flex-1 bg-success text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-success/90 transition-all text-sm">
              <FaCheckCircle size={14} /> Mark as Complete
            </button>
            <button onClick={() => setPlayingLesson(null)}
              className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Chapters */}
      <div className="space-y-4">
        {chapters.map((chapter, ci) => {
          const chDone = chapter.lessons.filter(l => completedSet.has(l.id)).length;
          const isOpen = openChapter === ci;
          return (
            <div key={chapter.id} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenChapter(isOpen ? -1 : ci)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${chDone === chapter.lessons.length ? 'bg-success text-white' : 'bg-primary/10 text-primary'}`}>
                    {chDone === chapter.lessons.length ? '✓' : `${ci + 1}`}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-gray-900 text-sm">{chapter.title}</div>
                    <div className="text-gray-500 text-xs">{chDone}/{chapter.lessons.length} lessons completed</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex h-1.5 w-20 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${(chDone / chapter.lessons.length) * 100}%` }} />
                  </div>
                  {isOpen ? <FaChevronUp size={12} className="text-gray-400" /> : <FaChevronDown size={12} className="text-gray-400" />}
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-gray-100">
                  {chapter.lessons.map((lesson, li) => {
                    const isDone = completedSet.has(lesson.id);
                    const isPlaying = playingLesson?.id === lesson.id;
                    return (
                      <div key={lesson.id}
                        className={`flex items-center gap-3 px-5 py-3.5 border-b border-gray-50 last:border-0 ${isPlaying ? 'bg-primary/5' : 'hover:bg-gray-50'} transition-colors`}>
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${isDone ? 'bg-success text-white' : 'bg-gray-100 text-gray-500'}`}>
                          {isDone ? <FaCheckCircle size={12} /> : li + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm font-medium ${isDone ? 'text-gray-500 line-through' : 'text-gray-900'} truncate`}>{lesson.title}</div>
                          <div className="text-xs text-gray-400 flex items-center gap-1"><FaClock size={9} /> {lesson.duration}</div>
                        </div>
                        {isDone ? (
                          <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-0.5 rounded-lg">Done</span>
                        ) : (
                          <button onClick={() => setPlayingLesson(lesson)}
                            className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-all">
                            <FaPlayCircle size={11} /> Watch
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
