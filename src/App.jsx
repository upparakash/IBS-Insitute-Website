import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import ContactPage from './pages/ContactPage';
import FacultyPage from './pages/FacultyPage';
import ResultsPage from './pages/ResultsPage';
import BlogPage from './pages/BlogPage';
import TestimonialsPage from './pages/TestimonialsPage';
import GalleryPage from './pages/GalleryPage';
import CareersPage from './pages/CareersPage';
import CentresPage from './pages/CentresPage';
import NotificationsPage from './pages/NotificationsPage';
import SchedulePage from './pages/SchedulePage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Student Dashboard
import DashboardHome from './pages/dashboard/DashboardHome';
import MockTestPage from './pages/dashboard/MockTestPage';

// Admin Dashboard
import AdminDashboard from './pages/admin/AdminDashboard';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/centres" element={<CentresPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          
          {/* Courses */}
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          
          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Student Dashboard (Protected) */}
          <Route path="/dashboard" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
          <Route path="/dashboard/courses" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
          <Route path="/dashboard/courses/:id" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
          <Route path="/dashboard/tests" element={<ProtectedRoute><MockTestPage /></ProtectedRoute>} />
          <Route path="/dashboard/performance" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
          <Route path="/dashboard/materials" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
          <Route path="/dashboard/notifications" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
          <Route path="/dashboard/downloads" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
          <Route path="/dashboard/support" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
          <Route path="/dashboard/settings" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
          
          {/* Admin Dashboard (Protected - Admin Only) */}
          <Route path="/admin" element={<ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/*" element={<ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>} />
          
          {/* Resources & Exam Hub */}
          <Route path="/resources/*" element={<BlogPage />} />
          <Route path="/exam-hub/*" element={<BlogPage />} />
          
          {/* Misc */}
          <Route path="/mock-tests" element={<CoursesPage />} />
          <Route path="/book-demo" element={<ContactPage />} />
          <Route path="/enroll" element={<ContactPage />} />
          <Route path="/batches" element={<HomePage />} />
          <Route path="/forgot-password" element={<LoginPage />} />
          
          {/* Legal */}
          <Route path="/privacy-policy" element={<AboutPage />} />
          <Route path="/terms" element={<AboutPage />} />
          <Route path="/refund-policy" element={<AboutPage />} />
          <Route path="/disclaimer" element={<AboutPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
