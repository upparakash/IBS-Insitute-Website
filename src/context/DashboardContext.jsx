import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { MOCK_STUDENTS, MOCK_NOTIFICATIONS, MOCK_PAYMENTS, MOCK_TICKETS } from '../data/mockData';

const DashboardContext = createContext(null);

const LS = {
  get: (key, fallback = null) => { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; } },
  set: (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} },
};

export function DashboardProvider({ children }) {
  const { user } = useAuth();

  // ── Admin-wide state (shared) ──────────────────────────────────────────────
  const [students, setStudents]       = useState(() => LS.get('ibs_students', MOCK_STUDENTS));
  const [notifications, setNotifications] = useState(() => LS.get('ibs_notifications', MOCK_NOTIFICATIONS));
  const [payments, setPayments]       = useState(() => LS.get('ibs_payments', MOCK_PAYMENTS));
  const [tickets, setTickets]         = useState(() => LS.get('ibs_tickets', MOCK_TICKETS));

  // ── Per-user state ──────────────────────────────────────────────────────────
  const userKey = user?.email || 'guest';
  const [progress, setProgress]   = useState(() => LS.get(`ibs_progress_${userKey}`, {}));
  const [testHistory, setTestHistory] = useState(() => LS.get(`ibs_tests_${userKey}`, []));
  const [streak, setStreak]       = useState(() => LS.get(`ibs_streak_${userKey}`, { count: 0, lastDate: null, longest: 0 }));
  const [settings, setSettings]   = useState(() => LS.get(`ibs_settings_${userKey}`, { notifications: true, emailAlerts: true, darkMode: false, language: 'English' }));

  // ── Sync to localStorage ───────────────────────────────────────────────────
  useEffect(() => { LS.set('ibs_students', students); }, [students]);
  useEffect(() => { LS.set('ibs_notifications', notifications); }, [notifications]);
  useEffect(() => { LS.set('ibs_payments', payments); }, [payments]);
  useEffect(() => { LS.set('ibs_tickets', tickets); }, [tickets]);
  useEffect(() => { LS.set(`ibs_progress_${userKey}`, progress); }, [progress, userKey]);
  useEffect(() => { LS.set(`ibs_tests_${userKey}`, testHistory); }, [testHistory, userKey]);
  useEffect(() => { LS.set(`ibs_streak_${userKey}`, streak); }, [streak, userKey]);
  useEffect(() => { LS.set(`ibs_settings_${userKey}`, settings); }, [settings, userKey]);

  // ── Streak logic ────────────────────────────────────────────────────────────
  const recordActivity = useCallback(() => {
    const today = new Date().toISOString().split('T')[0];
    setStreak(prev => {
      if (prev.lastDate === today) return prev;
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      const newCount = prev.lastDate === yesterday ? prev.count + 1 : 1;
      return { count: newCount, lastDate: today, longest: Math.max(prev.longest, newCount) };
    });
  }, []);

  // ── Lesson completion ───────────────────────────────────────────────────────
  const markLesson = useCallback((courseId, lessonId) => {
    setProgress(prev => ({
      ...prev,
      [courseId]: { ...(prev[courseId] || {}), [lessonId]: true },
    }));
    recordActivity();
  }, [recordActivity]);

  const getProgress = useCallback((courseId, totalLessons) => {
    const done = Object.keys(progress[courseId] || {}).length;
    return { done, total: totalLessons, pct: totalLessons ? Math.round((done / totalLessons) * 100) : 0 };
  }, [progress]);

  // ── Test saving ─────────────────────────────────────────────────────────────
  const saveTest = useCallback((result) => {
    const entry = { ...result, id: Date.now(), date: new Date().toISOString() };
    setTestHistory(prev => [entry, ...prev].slice(0, 50));
    recordActivity();
    return entry;
  }, [recordActivity]);

  // ── Notification helpers ────────────────────────────────────────────────────
  const markNotifRead = useCallback((id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }, []);

  const addNotification = useCallback((notif) => {
    const entry = { ...notif, id: Date.now(), date: new Date().toISOString().split('T')[0], read: false };
    setNotifications(prev => [entry, ...prev]);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  // ── Student CRUD (admin) ────────────────────────────────────────────────────
  const addStudent = useCallback((data) => {
    const s = { ...data, id: `STU${Date.now()}`, joinDate: new Date().toISOString().split('T')[0], testScores: [], streak: 0, status: 'active' };
    setStudents(prev => [...prev, s]);
    return s;
  }, []);

  const updateStudent = useCallback((id, updates) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s));
  }, []);

  const deleteStudent = useCallback((id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  }, []);

  // ── Ticket helpers ──────────────────────────────────────────────────────────
  const addTicket = useCallback((data) => {
    const t = { ...data, id: `TKT${Date.now()}`, status: 'Open', createdAt: new Date().toISOString().split('T')[0], resolvedAt: null, messages: [{ from: 'student', text: data.firstMessage, time: new Date().toLocaleString() }] };
    setTickets(prev => [t, ...prev]);
    return t;
  }, []);

  const replyTicket = useCallback((id, msg, from = 'student') => {
    setTickets(prev => prev.map(t => t.id === id ? { ...t, messages: [...(t.messages || []), { from, text: msg, time: new Date().toLocaleString() }] } : t));
  }, []);

  const resolveTicket = useCallback((id) => {
    setTickets(prev => prev.map(t => t.id === id ? { ...t, status: 'Resolved', resolvedAt: new Date().toISOString().split('T')[0] } : t));
  }, []);

  // ── Settings ────────────────────────────────────────────────────────────────
  const updateSettings = useCallback((updates) => {
    setSettings(prev => ({ ...prev, ...updates }));
  }, []);

  // ── Derived admin stats ─────────────────────────────────────────────────────
  const adminStats = {
    totalStudents: students.length,
    activeStudents: students.filter(s => s.status === 'active').length,
    totalRevenue: payments.filter(p => p.status === 'Paid').reduce((sum, p) => sum + p.amount, 0),
    pendingPayments: payments.filter(p => p.status === 'Pending').length,
    openTickets: tickets.filter(t => t.status === 'Open').length,
    jaiibStudents: students.filter(s => s.enrolled.includes('jaiib')).length,
    caiibStudents: students.filter(s => s.enrolled.includes('caiib')).length,
    bankPoStudents: students.filter(s => s.enrolled.includes('bank-po')).length,
  };

  // ── Student's own data ──────────────────────────────────────────────────────
  const currentStudent = user?.role === 'student'
    ? (students.find(s => s.email === user.email) || null)
    : null;

  const studentStats = currentStudent ? {
    coursesEnrolled: currentStudent.enrolled.length,
    avgScore: currentStudent.testScores.length
      ? Math.round(currentStudent.testScores.reduce((a, b) => a + b, 0) / currentStudent.testScores.length)
      : 0,
    testsAttempted: testHistory.length,
    streak: streak.count,
  } : null;

  return (
    <DashboardContext.Provider value={{
      // shared state
      students, payments, notifications, tickets, unreadCount,
      // per-user
      progress, testHistory, streak, settings,
      // student helpers
      markLesson, getProgress, saveTest, currentStudent, studentStats,
      // notification helpers
      markNotifRead, markAllRead, addNotification,
      // admin CRUD
      addStudent, updateStudent, deleteStudent, adminStats,
      // ticket helpers
      addTicket, replyTicket, resolveTicket,
      // settings
      updateSettings,
      // utility
      recordActivity,
    }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error('useDashboard must be inside DashboardProvider');
  return ctx;
}
