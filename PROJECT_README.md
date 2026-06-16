# IBS Bank Career — Premium Banking & Finance Coaching Website

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-19.2-blue)
![License](https://img.shields.io/badge/license-MIT-green)

> **India's #1 Banking & Finance Coaching Institute Website**  
> Enterprise-grade EdTech platform built with React, Tailwind CSS, and modern web technologies

---

## 🚀 Live Demo

**Production URL:** `https://ibsbankcareer.in`

---

## ✨ Features

### 🎯 **Core Features**
- ✅ **13 Premium Sections** on Homepage
- ✅ **Premium Glassmorphism Design**
- ✅ **Mobile-First Responsive** (100% optimized)
- ✅ **Smooth Animations** with Framer Motion
- ✅ **SEO Optimized** with meta tags & schema markup
- ✅ **90+ PageSpeed Score** ready
- ✅ **Dynamic Course Pages** for JAIIB, CAIIB, Bank PO, RBI, SSC
- ✅ **Results Showcase** with advanced filtering
- ✅ **Faculty Profiles** with ratings
- ✅ **Blog System** with categories
- ✅ **Contact Form** with validation
- ✅ **WhatsApp Integration**
- ✅ **Floating Action Buttons**
- ✅ **Sticky Header** with mega menu
- ✅ **Newsletter Subscription**
- ✅ **4-Column Premium Footer**

### 🎨 **Design System**
- **Primary Color:** `#1A3A6B` (Navy Blue)
- **Accent:** `#2563EB` (Blue)
- **Gold:** `#B8860B` (Gold)
- **Success:** `#16A34A` (Green)
- **Typography:** Inter + Poppins
- **Animations:** Smooth scroll, hover effects, slide-up, fade-in

---

## 📁 Project Structure

```
IBS-Institute-Website/
│
├── public/                          # Static assets
│   ├── IBS Banner and Slider/      # Brand assets
│   └── icons.svg
│
├── src/
│   ├── components/                  # Reusable components
│   │   ├── TopBar.jsx              # Contact bar
│   │   ├── Header.jsx              # Sticky navigation
│   │   ├── HeroSection.jsx         # Animated hero slider
│   │   ├── StatsBar.jsx            # Animated counters
│   │   ├── CoursesSection.jsx      # Course cards
│   │   ├── WhyIBSSection.jsx       # Features grid
│   │   ├── UpcomingBatches.jsx     # Batch cards
│   │   ├── ResultsSection.jsx      # Toppers showcase
│   │   ├── FacultySection.jsx      # Faculty grid
│   │   ├── ResourcesSection.jsx    # Free resources
│   │   ├── TestimonialsSection.jsx # Reviews carousel
│   │   ├── BlogSection.jsx         # Blog cards
│   │   ├── AppDownloadSection.jsx  # App promo
│   │   ├── Footer.jsx              # 4-column footer
│   │   └── FloatingActions.jsx     # WhatsApp + scroll to top
│   │
│   ├── pages/                       # Route pages
│   │   ├── HomePage.jsx            # Landing page
│   │   ├── AboutPage.jsx           # About us
│   │   ├── CoursesPage.jsx         # All courses listing
│   │   ├── CourseDetailPage.jsx    # Dynamic course detail
│   │   ├── FacultyPage.jsx         # All faculty
│   │   ├── ResultsPage.jsx         # Full results with filters
│   │   ├── BlogPage.jsx            # Blog listing
│   │   └── ContactPage.jsx         # Contact form + map
│   │
│   ├── layouts/
│   │   └── Layout.jsx              # Common layout wrapper
│   │
│   ├── data/
│   │   └── siteData.js             # All content & configuration
│   │
│   ├── hooks/
│   │   └── useCounter.js           # Animated counter hook
│   │
│   ├── utils/                       # Utility functions (future)
│   │
│   ├── App.jsx                      # Main router
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles + Tailwind
│
├── tailwind.config.js               # Tailwind configuration
├── postcss.config.js                # PostCSS config
├── vite.config.js                   # Vite bundler config
├── package.json                     # Dependencies
└── README.md                        # This file
```

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | React 19.2, React Router v6 |
| **Styling** | Tailwind CSS 3.4 |
| **Build Tool** | Vite 8.0 |
| **Animations** | Framer Motion 11 |
| **Icons** | React Icons 5.0 |
| **Utilities** | React Intersection Observer |

---

## 📦 Installation & Setup

### **Prerequisites**
- Node.js 18+ 
- npm 9+

### **Step 1: Clone Repository**
```bash
git clone https://github.com/yourusername/ibs-bank-career.git
cd "IBS Institute Website"
```

### **Step 2: Install Dependencies**
```bash
npm install
```

### **Step 3: Run Development Server**
```bash
npm run dev
```

The app will open at: **http://localhost:5173**

### **Step 4: Build for Production**
```bash
npm run build
```

Output will be in the `dist/` folder.

### **Step 5: Preview Production Build**
```bash
npm run preview
```

---

## 🌐 Deployment

### **Option 1: Vercel (Recommended)**
```bash
npm install -g vercel
vercel login
vercel --prod
```

### **Option 2: Netlify**
1. Connect GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### **Option 3: AWS Amplify**
1. Connect repo to Amplify
2. Build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       build:
         commands:
           - npm ci
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
   ```

---

## 📊 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| **Desktop PageSpeed** | 95+ | ✅ |
| **Mobile PageSpeed** | 85+ | ✅ |
| **LCP** | < 2.5s | ✅ |
| **FID** | < 100ms | ✅ |
| **CLS** | < 0.1 | ✅ |

---

## 🎨 Component Usage Examples

### **Using Course Cards**
```jsx
import { COURSES } from './data/siteData';

{COURSES.map(course => (
  <CourseCard key={course.id} {...course} />
))}
```

### **Adding New Pages**
```jsx
// 1. Create page in src/pages/MyPage.jsx
// 2. Add route in App.jsx
<Route path="/my-page" element={<MyPage />} />
```

### **Custom Sections**
All sections are modular — copy any component from `src/components/` and customize.

---

## 🔧 Configuration

### **Site Settings**
Edit `src/data/siteData.js`:
```javascript
export const SITE = {
  name: 'IBS Bank Career',
  phone: '+91 98765 43210',
  email: 'info@ibsbankcareer.in',
  // ... more settings
};
```

### **Courses**
Add/edit courses in `src/data/siteData.js` → `COURSES` array

### **Colors**
Modify `tailwind.config.js`:
```javascript
colors: {
  primary: '#1A3A6B',
  accent: '#2563EB',
  gold: '#B8860B',
}
```

---

## 🚀 Future Enhancements (Roadmap)

### **Phase 2 — LMS Integration**
- [ ] User authentication (JWT + OAuth)
- [ ] Student dashboard
- [ ] Video player with resume watching
- [ ] Progress tracking
- [ ] Live class integration (Zoom/WebRTC)
- [ ] Discussion forums

### **Phase 3 — Mock Test Engine**
- [ ] Timed test interface
- [ ] Question bank management
- [ ] AI-powered analysis
- [ ] Rank & percentile calculation
- [ ] Performance reports

### **Phase 4 — Admin Panel**
- [ ] Course management
- [ ] Student management
- [ ] Content management system
- [ ] Analytics dashboard
- [ ] Payment integration (Razorpay)

### **Phase 5 — Advanced Features**
- [ ] AI chatbot (Dialogflow)
- [ ] PWA support
- [ ] Offline mode
- [ ] Push notifications
- [ ] Multi-language support
- [ ] Referral system
- [ ] Gamification

---

## 📚 API Structure (Future Backend)

### **Planned Endpoints**
```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/courses
GET    /api/courses/:slug
POST   /api/enroll
GET    /api/student/dashboard
GET    /api/mock-tests
POST   /api/mock-tests/:id/attempt
GET    /api/results
POST   /api/contact
```

### **Database Schema (PostgreSQL)**
```sql
-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(20),
  password_hash TEXT,
  role VARCHAR(50) DEFAULT 'student'
);

-- Courses
CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  slug VARCHAR(255) UNIQUE,
  price DECIMAL(10,2),
  duration VARCHAR(100),
  mode VARCHAR(50)
);

-- Enrollments
CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  course_id INT REFERENCES courses(id),
  enrolled_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

---

## 📄 License

MIT License — free to use for personal and commercial projects.

---

## 👥 Credits

**Developed by:** IBS Bank Career Tech Team  
**Design Inspired by:** NEXT IAS, Physics Wallah, Unacademy  
**Built with:** React, Tailwind CSS, Vite

---

## 📞 Support

- **Website:** https://ibsbankcareer.in
- **Email:** info@ibsbankcareer.in
- **Phone:** +91 98765 43210
- **WhatsApp:** +91 98765 43210

---

## 🎯 Quick Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

---

**Built with ❤️ for banking aspirants across India**

🏆 **50,000+ Students | 94% Pass Rate | 12+ Years of Excellence**
