# IBS Institute of Banking Studies — Website Development Status

**Last Updated:** 27 June 2026  
**Stack:** React 19 + Vite · Tailwind CSS · React Router DOM v6 · Framer Motion · React Icons  
**Working Directory:** `c:\Users\ADMIN\OneDrive\Desktop\IBS Insitute Website\IBS Institute Website`

---

## Quick Reference — Custom Tailwind Values

| Token | Value |
|---|---|
| `primary` | `#1A3A6B` (deep navy) |
| `accent` | `#2563EB` (blue) |
| `gold` | `#B8860B` |
| `success` | `#16A34A` |
| `.container-custom` | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| `.glass-card` | white card with border + soft shadow |
| `.btn-primary` | primary bg, white text |
| `.btn-gold` | gold bg, white text |
| `.gradient-primary` | primary → accent left-to-right |

---

## Phase 1 — UI / Header / Navigation ✅ COMPLETE

### Files Modified
| File | What Changed |
|---|---|
| `src/components/Header.jsx` | Full rewrite — logo image only (no text), mega menu for Exams, flat dropdown for Courses, standard dropdowns for others |
| `src/components/TopBar.jsx` | Color `#0B1F3E`, full-width, updated phone numbers |
| `src/components/NewsTicker.jsx` | Speed 30 s, `bg-[#EEF2FF]` bg, hover-pause, diamond separator |
| `src/data/siteData.js` | Phone numbers, ticker items, full NAV_LINKS restructure, COURSES array (10 courses) |

### Navigation Structure (NAV_LINKS in siteData.js)

| Nav Item | Type | Notes |
|---|---|---|
| **Exams** | `categories` (mega menu) | Two-panel fly-out: categories left, exams right |
| **Courses** | `children` (flat dropdown) | 10 course links |
| **Mock Tests** | plain link | `/mock-tests` |
| **IBS Vigyan App** | plain link | `/app` |
| **Interview** | `children` | 3 items |
| **Books** | `children` | 4 items |
| **Free Resources** | `children` | 4 items |
| **More** | `children` | YouTube, Blog, Articles, Others |
| **Contact Us** | plain link | `/contact` |
| **About** | plain link | `/about` |

### Exams Mega Menu — 21 Exams across 4 Categories
- **Bank & Insurance (13):** SBI PO, SBI Clerk, IBPS PO, IBPS Clerk, RRB PO, RRB Clerk, LIC AAO, LIC ADO, NICL AO, NICL Assistant, NIACL AO, NIACL Assistant, SBI Apprentice
- **SSC Exams (3):** SSC CGL, SSC CHSL, SSC MTS
- **Railway Exams (3):** RRB NTPC, RRB Group D, RRB ALP
- **Regulatory Bodies (2):** RBI Grade B, RBI Assistant

---

## Phase 2 — Content Pages ✅ COMPLETE

### 2.1 Exam Hub Pages — All 21 Exams

**Template:** `src/pages/exams/ExamPage.jsx`  
**Data file:** `src/data/examData.js`  
**Route pattern:** `/exam-hub/:examSlug`

Each exam page has 10 sections:
1. Hero with gradient + stats
2. About + eligibility grid
3. Selection process stepper
4. Exam pattern tab switcher (Prelims / Mains / Interview)
5. Syllabus accordion (subject → topics)
6. Salary & career growth
7. Important dates table
8. IBS Coaching CTA block
9. FAQs accordion
10. Related exams grid

**All 21 slugs with full data:**

| Slug | Exam | Category |
|---|---|---|
| `sbi-po` | SBI PO | Bank & Insurance |
| `sbi-clerk` | SBI Clerk | Bank & Insurance |
| `ibps-po` | IBPS PO | Bank & Insurance |
| `ibps-clerk` | IBPS Clerk | Bank & Insurance |
| `rrb-po` | RRB PO | Bank & Insurance |
| `rrb-clerk` | RRB Office Assistant | Bank & Insurance |
| `lic-aao` | LIC AAO | Bank & Insurance |
| `lic-ado` | LIC ADO | Bank & Insurance |
| `nicl-ao` | NICL AO | Bank & Insurance |
| `nicl-assistant` | NICL Assistant | Bank & Insurance |
| `niacl-ao` | NIACL AO | Bank & Insurance |
| `niacl-assistant` | NIACL Assistant | Bank & Insurance |
| `sbi-apprentice` | SBI Apprentice | Bank & Insurance |
| `ssc-cgl` | SSC CGL | SSC Exams |
| `ssc-chsl` | SSC CHSL | SSC Exams |
| `ssc-mts` | SSC MTS | SSC Exams |
| `rrb-ntpc` | RRB NTPC | Railway Exams |
| `rrb-group-d` | RRB Group D | Railway Exams |
| `rrb-alp` | RRB ALP | Railway Exams |
| `rbi-grade-b` | RBI Grade B | Regulatory Bodies |
| `rbi-assistant` | RBI Assistant | Regulatory Bodies |

---

### 2.2 Course Detail Pages — All 10 Courses

**Template:** `src/pages/CourseDetailPage.jsx`  
**Data file:** `src/data/coursePageData.js`  
**Route pattern:** `/courses/:slug`

Each course detail page (FullDetailPage) has:
- Hero with price card + Enroll Now + WhatsApp + Download Brochure buttons
- Eligibility & exam details grid
- Papers/Syllabus accordion (paper → modules → topics)
- What's Included checklist
- Student Testimonials
- FAQs accordion
- Course Highlights sidebar
- Next Batch card sidebar
- WhatsApp connect sidebar

**All 10 course slugs:**

| Slug | Course | Fee |
|---|---|---|
| `jaiib` | JAIIB / DB&F | ₹9,570 |
| `caiib` | CAIIB | ₹11,440 |
| `professional-bankers` | Professional Bankers | ₹4,999 |
| `iibf` | All IIBF Certificate Courses | ₹2,200 |
| `sbi-jibo` | SBI JIBO | ₹3,999 |
| `bank-promotion` | Bank Promotion Exams | ₹2,999 |
| `ignou-mba` | IGNOU MBA | ₹48,000 |
| `dra` | DRA Certification | ₹1,500 |
| `bc-bf` | BC-BF Certification | ₹1,200 |
| `bank-po` | Bank PO / SSC Coaching | ₹30,000 |

> **Note:** `coursePageData.js` also has an `others` key (catch-all for miscellaneous courses like SIDDHI Foundation, interview coaching, etc.)

---

### 2.3 Other Content Pages

| Page | File | Route | Status |
|---|---|---|---|
| Free Resources | `src/pages/resources/FreeResourcesPage.jsx` | `/resources/*` | ✅ Built — 4 tabs: RBI Circulars, Current Affairs, PYQ, Free PDFs |
| Interview Prep | `src/pages/interview/InterviewPage.jsx` | `/interview/*` | ✅ Built — 3 tabs: Bank & Insurance, Bank Promotion, JIBO |
| Books | `src/pages/books/BooksPage.jsx` | `/books/*` | ✅ Built — 4 tabs: JAIIB, CAIIB, Bank Exams, IIBF |
| IBS Vigyan App | `src/pages/AppPage.jsx` | `/app` | ✅ Built — Download page with features, stats, CTAs |

---

### 2.4 Public Pages — Status

| Page | File | Status | Notes |
|---|---|---|---|
| Home | `src/pages/HomePage.jsx` | ✅ Built | Hero, stats, courses grid, testimonials, CTAs |
| About | `src/pages/AboutPage.jsx` | ✅ Built | Basic content |
| Courses List | `src/pages/CoursesPage.jsx` | ✅ Built | 10 courses, filter by mode, Enroll Now + Details buttons |
| Contact | `src/pages/ContactPage.jsx` | ✅ Built | Form + map placeholder |
| Faculty | `src/pages/FacultyPage.jsx` | ✅ Built | Static faculty cards |
| Results | `src/pages/ResultsPage.jsx` | ✅ Built | Static results data |
| Blog | `src/pages/BlogPage.jsx` | ✅ Built | Static blog posts |
| Testimonials | `src/pages/TestimonialsPage.jsx` | ✅ Built | Static |
| Gallery | `src/pages/GalleryPage.jsx` | ✅ Built | Static placeholder |
| Careers | `src/pages/CareersPage.jsx` | ✅ Built | Static |
| Centres | `src/pages/CentresPage.jsx` | ✅ Built | Branch info |
| Notifications | `src/pages/NotificationsPage.jsx` | ✅ Built | Static |
| Schedule | `src/pages/SchedulePage.jsx` | ✅ Built | Static batch schedule |

---

## Phase 2.5 — Admin Panel ✅ COMPLETE (UI Only — no real backend)

**Layout:** `src/layouts/AdminLayout.jsx`  
**Auth guard:** `ProtectedRoute` with `adminOnly` flag  
**Route prefix:** `/admin`

| Page | File | Route | Features |
|---|---|---|---|
| Dashboard | `AdminDashboard.jsx` | `/admin` | Stats cards, quick actions |
| Students | `StudentsPage.jsx` | `/admin/students` | Student table, search, filter |
| Courses Manager | `CoursesAdminPage.jsx` | `/admin/courses` | 10 courses, fee editor, chapter list |
| **Exam Pages** | `ExamsAdminPage.jsx` | `/admin/exams` | All 21 exams, category filter, View/Edit buttons |
| **Resources** | `ResourcesAdminPage.jsx` | `/admin/resources` | RBI Circulars, Current Affairs, Free PDFs tabs |
| Payments | `PaymentsPage.jsx` | `/admin/payments` | Transaction table |
| Notifications | `AdminNotificationsPage.jsx` | `/admin/notifications` | Send notifications UI |
| Analytics | `AnalyticsPage.jsx` | `/admin/analytics` | Charts placeholder |
| Questions | `QuestionsPage.jsx` | `/admin/questions` | Question bank UI |
| Settings | `AdminSettingsPage.jsx` | `/admin/settings` | Site settings UI |

> **Important:** All admin actions (add/edit/delete) are UI-only. No real database operations exist yet.

---

## Phase 2.6 — Student Dashboard ✅ COMPLETE (UI Only — mock data)

**Layout:** `src/layouts/DashboardLayout.jsx`  
**Data source:** `src/data/mockData.js`  
**Auth guard:** `ProtectedRoute`

| Page | Route | Notes |
|---|---|---|
| Dashboard Home | `/dashboard` | Stats, progress, recent activity |
| My Courses | `/dashboard/courses` | Enrolled courses list |
| Course View | `/dashboard/courses/:id` | Video player + chapters |
| Mock Tests | `/dashboard/tests` | Test list + attempt UI |
| Performance | `/dashboard/performance` | Charts, rank, percentile |
| Materials | `/dashboard/materials` | PDF downloads |
| Notifications | `/dashboard/notifications` | Alerts list |
| Downloads | `/dashboard/downloads` | Downloadable resources |
| Support | `/dashboard/support` | Ticket system UI |
| Settings | `/dashboard/settings` | Profile editor |

> **Important:** All data comes from `mockData.js`. No real API calls exist yet.

---

## Phase 2.7 — Auth Pages ✅ COMPLETE (UI Only)

| Page | File | Route | Notes |
|---|---|---|---|
| Login | `src/pages/auth/LoginPage.jsx` | `/login` | Form only — no real auth |
| Register | `src/pages/auth/RegisterPage.jsx` | `/register` | Form only |
| Auth Context | `src/context/AuthContext.jsx` | — | Mock auth, no API |

---

## Data Files Summary

| File | Purpose | Size |
|---|---|---|
| `src/data/siteData.js` | SITE config, TICKER_ITEMS, NAV_LINKS, COURSES (10), CERT_COURSES, BATCHES, FACULTY, STATS | ~400 lines |
| `src/data/examData.js` | All 21 exam entries (full data: eligibility, pattern, syllabus, salary, dates, FAQs) | ~2,500+ lines |
| `src/data/coursePageData.js` | All 10 course entries + `others` (full data: papers, modules, topics, includes, FAQs, testimonials) | ~2,000+ lines |
| `src/data/mockData.js` | Mock students, enrolled courses, chapters, lessons for dashboard demo | ~300 lines |

---

## Phase 3 — Backend / Real Functionality ❌ NOT STARTED

This is the entire next phase of work. Nothing below exists yet.

### 3.1 Backend Setup
- [ ] Choose backend: Node.js + Express / Firebase / Supabase
- [ ] Database schema design (users, courses, enrollments, payments, mock tests)
- [ ] REST API or GraphQL API setup
- [ ] Environment variables + `.env` file

### 3.2 Authentication (Real)
- [ ] Replace mock `AuthContext` with real JWT / Firebase Auth
- [ ] Login API integration
- [ ] Register with OTP (mobile number)
- [ ] Session persistence (localStorage / cookies)
- [ ] Password reset flow (currently routes to LoginPage as placeholder)
- [ ] Google OAuth login

### 3.3 Payment Gateway
- [ ] Razorpay integration on "Enroll Now" buttons
- [ ] Payment success/failure pages
- [ ] Order creation API
- [ ] Webhook for payment confirmation
- [ ] Enrollment auto-activation on payment success

### 3.4 Course Delivery (Student Dashboard)
- [ ] Replace `mockData.js` with real API calls
- [ ] Video hosting (Vimeo / AWS S3 / YouTube unlisted)
- [ ] Progress tracking (lesson completion stored in DB)
- [ ] Certificate generation on course completion

### 3.5 Mock Test Engine
- [ ] Question bank API (replace `QuestionsPage.jsx` static data)
- [ ] Timed test engine with auto-submit
- [ ] Answer evaluation + score calculation
- [ ] Result storage + performance history

### 3.6 Admin Panel — Real CRUD
- [ ] Connect all admin pages to real API
- [ ] Add/Edit/Delete exams in `ExamsAdminPage`
- [ ] Add/Edit/Delete resources in `ResourcesAdminPage`
- [ ] Fee update in `CoursesAdminPage` → saved to DB
- [ ] Student management (activate, deactivate, reset password)
- [ ] Send push notifications to students
- [ ] Real analytics (enrollments, revenue, active users)

### 3.7 Content Management
- [ ] Blog: real CMS (Contentful / Sanity / custom) instead of static `BlogPage.jsx`
- [ ] Results page: dynamic data from DB
- [ ] Notifications page: pull from API
- [ ] Current Affairs: admin-editable via `ResourcesAdminPage`
- [ ] RBI Circulars: auto-fetch or manual admin entry

### 3.8 WhatsApp Integration
- [ ] WhatsApp Business API for automated enrollment messages
- [ ] Currently all WhatsApp links are hardcoded to `wa.me/918138962298`

### 3.9 SEO & Performance
- [ ] `SEOHead` component already exists — needs real meta per page
- [ ] Sitemap.xml generation
- [ ] Code splitting (Vite dynamic imports) — current bundle is ~900 KB
- [ ] Image optimization (WebP, lazy loading)

### 3.10 Deployment
- [ ] Domain: ibsbankcareer.in (or new domain for IBS Institute)
- [ ] Hosting: Vercel / Netlify / VPS
- [ ] SSL certificate
- [ ] CI/CD pipeline

---

## Known Issues / Tech Debt

| Issue | Location | Priority |
|---|---|---|
| Bundle is ~900 KB (no code splitting) | `vite.config.js` | Medium |
| `SEOHead` component used inconsistently across pages | Various pages | Low |
| `mockData.js` still drives dashboard — will break when real auth added | `src/data/mockData.js` | High (Phase 3) |
| Auth context is mock — anyone can "login" as admin | `src/context/AuthContext.jsx` | High (Phase 3) |
| Enroll Now links go to `/enroll?course=X` which renders `ContactPage` | `App.jsx` line 137 | Medium |
| `/enquire` route in header doesn't exist — will 404 | `src/components/Header.jsx` | Low |
| Gallery page has placeholder images | `src/pages/GalleryPage.jsx` | Low |
| Old `ibsbankcareer.in` site returns 404 on most pages | External | N/A |

---

## Route Map (Complete)

```
/                          → HomePage
/about                     → AboutPage
/faculty                   → FacultyPage
/contact                   → ContactPage
/results                   → ResultsPage
/blog                      → BlogPage
/testimonials              → TestimonialsPage
/gallery                   → GalleryPage
/careers                   → CareersPage
/centres                   → CentresPage
/notifications             → NotificationsPage
/schedule                  → SchedulePage
/courses                   → CoursesPage (10 course cards)
/courses/:slug             → CourseDetailPage (full detail from coursePageData.js)
/exam-hub/:examSlug        → ExamPage (full detail from examData.js)
/resources/rbi-circulars   → FreeResourcesPage
/resources/current-affairs → FreeResourcesPage
/resources/pyq             → FreeResourcesPage
/resources/ebooks          → FreeResourcesPage
/interview/bank-insurance  → InterviewPage
/interview/bank-promotion  → InterviewPage
/interview/jibo            → InterviewPage
/books/bank-exams          → BooksPage
/books/jaiib               → BooksPage
/books/caiib               → BooksPage
/books/iibf                → BooksPage
/app                       → AppPage (IBS Vigyan)
/login                     → LoginPage
/register                  → RegisterPage
/dashboard                 → DashboardHome (protected)
/dashboard/courses         → DashboardCoursesPage (protected)
/dashboard/courses/:id     → CourseViewPage (protected)
/dashboard/tests           → MockTestPage (protected)
/dashboard/performance     → PerformancePage (protected)
/dashboard/materials       → MaterialsPage (protected)
/dashboard/notifications   → DashNotificationsPage (protected)
/dashboard/downloads       → DownloadsPage (protected)
/dashboard/support         → SupportPage (protected)
/dashboard/settings        → SettingsPage (protected)
/admin                     → AdminDashboard (admin only)
/admin/students            → StudentsPage (admin only)
/admin/courses             → CoursesAdminPage (admin only)
/admin/exams               → ExamsAdminPage (admin only)
/admin/resources           → ResourcesAdminPage (admin only)
/admin/payments            → PaymentsPage (admin only)
/admin/notifications       → AdminNotificationsPage (admin only)
/admin/analytics           → AnalyticsPage (admin only)
/admin/questions           → QuestionsPage (admin only)
/admin/settings            → AdminSettingsPage (admin only)
```

---

## Session History

| Session | Date | Work Done |
|---|---|---|
| Session 1 | 27 Jun 2026 | Phase 1: Header, TopBar, Ticker, NAV_LINKS restructure, phone numbers |
| Session 2 | 27 Jun 2026 | Phase 2: All 21 exam pages (examData.js + ExamPage.jsx), all 10 course detail pages (coursePageData.js + CourseDetailPage.jsx), FreeResourcesPage, InterviewPage, BooksPage, AppPage, Admin pages (ExamsAdminPage, ResourcesAdminPage), CoursesPage Enroll+Details buttons, App.jsx routes |
| Session 3 | 27 Jun 2026 | siteData COURSES updated to 10 courses, bank-po added to coursePageData, Courses nav dropdown reverted to flat list, Exams nav converted to two-panel mega menu (MegaMenu component in Header.jsx) |
