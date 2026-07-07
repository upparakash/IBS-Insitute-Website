import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DashboardProvider } from './context/DashboardContext';
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
import ExamPage from './pages/exams/ExamPage';
import FreeResourcesPage from './pages/resources/FreeResourcesPage';
import InterviewPage from './pages/interview/InterviewPage';
import BooksPage from './pages/books/BooksPage';
import AppPage from './pages/AppPage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Student Dashboard
import DashboardHome from './pages/dashboard/DashboardHome';
import MockTestPage from './pages/dashboard/MockTestPage';
import DashboardCoursesPage from './pages/dashboard/DashboardCoursesPage';
import CourseViewPage from './pages/dashboard/CourseViewPage';
import PerformancePage from './pages/dashboard/PerformancePage';
import MaterialsPage from './pages/dashboard/MaterialsPage';
import DashNotificationsPage from './pages/dashboard/DashNotificationsPage';
import DownloadsPage from './pages/dashboard/DownloadsPage';
import SupportPage from './pages/dashboard/SupportPage';
import SettingsPage from './pages/dashboard/SettingsPage';

// Admin Dashboard
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentsPage from './pages/admin/StudentsPage';
import CoursesAdminPage from './pages/admin/CoursesAdminPage';
import ExamsAdminPage from './pages/admin/ExamsAdminPage';
import ResourcesAdminPage from './pages/admin/ResourcesAdminPage';
import PaymentsPage from './pages/admin/PaymentsPage';
import AdminNotificationsPage from './pages/admin/AdminNotificationsPage';
import AnalyticsPage from './pages/admin/AnalyticsPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';
import QuestionsPage from './pages/admin/QuestionsPage';

const P = (props) => <ProtectedRoute {...props} />;
const A = (props) => <ProtectedRoute adminOnly {...props} />;

export default function App() {
  return (
    <AuthProvider>
      <DashboardProvider>
        <Router>
          <Routes>
            {/* Public */}
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
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:slug" element={<CourseDetailPage />} />

            {/* Auth */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Student Dashboard */}
            <Route path="/dashboard" element={<P><DashboardHome /></P>} />
            <Route path="/dashboard/courses" element={<P><DashboardCoursesPage /></P>} />
            <Route path="/dashboard/courses/:id" element={<P><CourseViewPage /></P>} />
            <Route path="/dashboard/tests" element={<P><MockTestPage /></P>} />
            <Route path="/dashboard/performance" element={<P><PerformancePage /></P>} />
            <Route path="/dashboard/materials" element={<P><MaterialsPage /></P>} />
            <Route path="/dashboard/notifications" element={<P><DashNotificationsPage /></P>} />
            <Route path="/dashboard/downloads" element={<P><DownloadsPage /></P>} />
            <Route path="/dashboard/support" element={<P><SupportPage /></P>} />
            <Route path="/dashboard/settings" element={<P><SettingsPage /></P>} />

            {/* Admin Dashboard */}
            <Route path="/admin" element={<A><AdminDashboard /></A>} />
            <Route path="/admin/students" element={<A><StudentsPage /></A>} />
            <Route path="/admin/courses" element={<A><CoursesAdminPage /></A>} />
            <Route path="/admin/exams" element={<A><ExamsAdminPage /></A>} />
            <Route path="/admin/resources" element={<A><ResourcesAdminPage /></A>} />
            <Route path="/admin/payments" element={<A><PaymentsPage /></A>} />
            <Route path="/admin/notifications" element={<A><AdminNotificationsPage /></A>} />
            <Route path="/admin/analytics" element={<A><AnalyticsPage /></A>} />
            <Route path="/admin/questions" element={<A><QuestionsPage /></A>} />
            <Route path="/admin/settings" element={<A><AdminSettingsPage /></A>} />

            {/* Exam Hub */}
            <Route path="/exam-hub/:examSlug" element={<ExamPage />} />

            {/* Free Resources */}
            <Route path="/resources/rbi-circulars" element={<FreeResourcesPage />} />
            <Route path="/resources/current-affairs" element={<FreeResourcesPage />} />
            <Route path="/resources/pyq" element={<FreeResourcesPage />} />
            <Route path="/resources/ebooks" element={<FreeResourcesPage />} />
            <Route path="/resources/*" element={<FreeResourcesPage />} />

            {/* Interview */}
            <Route path="/interview/bank-insurance" element={<InterviewPage />} />
            <Route path="/interview/bank-promotion" element={<InterviewPage />} />
            <Route path="/interview/jibo" element={<InterviewPage />} />
            <Route path="/interview/*" element={<InterviewPage />} />

            {/* Books */}
            <Route path="/books/bank-exams" element={<BooksPage />} />
            <Route path="/books/jaiib" element={<BooksPage />} />
            <Route path="/books/caiib" element={<BooksPage />} />
            <Route path="/books/iibf" element={<BooksPage />} />
            <Route path="/books/*" element={<BooksPage />} />

            {/* IBS Vigyan App */}
            <Route path="/app" element={<AppPage />} />

            {/* Misc public aliases */}
            <Route path="/mock-tests" element={<CoursesPage />} />
            <Route path="/book-demo" element={<ContactPage />} />
            <Route path="/enroll" element={<ContactPage />} />
            <Route path="/batches" element={<HomePage />} />
            <Route path="/forgot-password" element={<LoginPage />} />
            <Route path="/privacy-policy" element={<AboutPage />} />
            <Route path="/terms" element={<AboutPage />} />
            <Route path="/refund-policy" element={<AboutPage />} />
            <Route path="/disclaimer" element={<AboutPage />} />
          </Routes>
        </Router>
      </DashboardProvider>
    </AuthProvider>
  );
}
