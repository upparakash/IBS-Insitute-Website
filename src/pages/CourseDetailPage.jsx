import { useParams, Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { COURSES, FACULTY } from '../data/siteData';
import { FaCheckCircle, FaArrowRight, FaStar, FaUsers, FaClock, FaLaptop, FaFileAlt, FaPlay, FaTrophy } from 'react-icons/fa';

const JAIIB_SYLLABUS = [
  { paper: 'Paper 1 — PPB', topics: ['Indian Financial System', 'Banking Regulation Act', 'Reserve Bank of India', 'Types of Banks', 'Banker-Customer Relationship'] },
  { paper: 'Paper 2 — IE&IFS', topics: ['Principles of Economics', 'Indian Financial System Overview', 'Financial Markets', 'Capital Markets', 'Forex Markets'] },
  { paper: 'Paper 3 — RBWM', topics: ['Retail Banking', 'Wealth Management', 'Credit Cards', 'Loan Products', 'Customer Segmentation'] },
];

const CAIIB_SYLLABUS = [
  { paper: 'Paper 1 — ABM', topics: ['Credit Management', 'Risk Management', 'Treasury Management', 'Balance Sheet Analysis', 'NPA Management'] },
  { paper: 'Paper 2 — BFM', topics: ['International Banking', 'Forex Transactions', 'Trade Finance', 'FEMA', 'Swift Operations'] },
  { paper: 'Paper 3 — BRBL', topics: ['Banking Law', 'SARFAESI Act', 'DRT Act', 'Consumer Protection', 'Cyber Law in Banking'] },
  { paper: 'Elective', topics: ['Rural Banking', 'Co-operative Banking', 'Financial Advising', 'Human Resources Management'] },
];

const INCLUDES = [
  '📹 120+ HD Video Lectures',
  '📄 Comprehensive Study Notes (PDF)',
  '🧪 500+ Practice Questions',
  '📝 5 Full Mock Tests',
  '💬 Doubt Clearing (WhatsApp + Live)',
  '📱 Mobile App Access',
  '🎯 Daily Current Affairs',
  '📊 Performance Analytics',
  '🏆 Rank & Percentile',
  '📜 Course Completion Certificate',
];

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = COURSES.find(c => c.slug === slug) || COURSES[0];
  const syllabus = slug === 'caiib' ? CAIIB_SYLLABUS : JAIIB_SYLLABUS;

  const relatedFaculty = FACULTY.filter(f => f.courses.some(c => c.toLowerCase().includes(course.name.split(' ')[0].toLowerCase())));

  return (
    <Layout>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${course.color} py-16 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-white font-medium">{course.name}</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              {course.badge && (
                <span className={`inline-block ${course.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>{course.badge}</span>
              )}
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{course.name}</h1>
              <p className="text-white/85 text-lg mb-6 max-w-2xl leading-relaxed">{course.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm px-4 py-2 rounded-xl">
                  <FaStar className="text-gold" /> {course.rating} Rating
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm px-4 py-2 rounded-xl">
                  <FaUsers size={13} /> {course.students.toLocaleString()}+ Students
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm px-4 py-2 rounded-xl">
                  <FaClock size={13} /> {course.duration}
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm px-4 py-2 rounded-xl">
                  <FaLaptop size={13} /> {course.mode}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to={`/enroll?course=${course.slug}`} className="btn-gold flex items-center gap-2 text-base py-3.5 px-8">
                  Enroll Now <FaArrowRight />
                </Link>
                <Link to="/book-demo" className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/30 transition-all flex items-center gap-2">
                  <FaPlay size={12} /> Free Demo Class
                </Link>
              </div>
            </div>

            {/* Sticky price card */}
            <div className="bg-white rounded-3xl shadow-2xl p-7">
              <div className="text-center mb-6">
                <div className="font-heading font-extrabold text-4xl text-primary mb-1">{course.fee}</div>
                <div className="text-gray-400 line-through text-lg">{course.originalFee}</div>
                <div className="inline-flex items-center gap-1 bg-success/10 text-success text-sm font-bold px-3 py-1 rounded-full mt-2">
                  <FaTrophy size={11} /> Save {Math.round((1 - parseInt(course.fee.replace(/[^0-9]/g, '')) / parseInt(course.originalFee.replace(/[^0-9]/g, ''))) * 100)}%
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {['✅ Instant Access After Payment', '📱 Mobile + Desktop', '♾️ Lifetime Access', '🎓 Certificate Included'].map(f => (
                  <div key={f} className="text-sm text-gray-700">{f}</div>
                ))}
              </div>
              <Link to={`/enroll?course=${course.slug}`} className="block w-full text-center btn-primary py-3.5 text-base mb-3 rounded-xl">Enroll Now</Link>
              <a href={`https://wa.me/${'919876543210'}?text=I want to know about ${course.name} course`} target="_blank" rel="noopener noreferrer"
                className="block w-full text-center border border-success text-success hover:bg-success hover:text-white font-semibold py-3 rounded-xl transition-all text-sm">
                💬 Chat on WhatsApp
              </a>
              <p className="text-center text-xs text-gray-500 mt-3">🔒 Secure payment via Razorpay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content tabs */}
      <section className="py-16 bg-white">
        <div className="container-custom grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* What's included */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {INCLUDES.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl text-sm font-medium text-gray-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Course Syllabus</h2>
              <div className="space-y-4">
                {syllabus.map((paper, i) => (
                  <details key={i} className="group glass-card overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-heading font-bold text-gray-900 list-none">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">{i + 1}</div>
                        {paper.paper}
                      </div>
                      <FaArrowRight size={12} className="text-gray-400 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 grid sm:grid-cols-2 gap-2">
                      {paper.topics.map(topic => (
                        <div key={topic} className="flex items-center gap-2 text-sm text-gray-600">
                          <FaCheckCircle size={11} className="text-success shrink-0" /> {topic}
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Faculty */}
            {relatedFaculty.length > 0 && (
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Your Instructors</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {relatedFaculty.slice(0, 2).map((f, i) => (
                    <div key={i} className="glass-card p-5 flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white font-bold text-xl shrink-0 shadow`}>
                        {f.initials}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-gray-900">{f.name}</h3>
                        <p className="text-xs text-accent font-semibold">{f.expertise}</p>
                        <p className="text-xs text-gray-500 mt-1">{f.qualification}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="glass-card p-6">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <FaFileAlt className="text-primary" /> Course Highlights
              </h3>
              {[
                ['Duration', course.duration],
                ['Mode', course.mode],
                ['Papers Covered', course.papers.join(', ')],
                ['Students Enrolled', `${course.students.toLocaleString()}+`],
                ['Pass Rate', '94%+'],
                ['Language', 'Hindi + English'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-2.5 border-b border-gray-100 last:border-0 text-sm">
                  <span className="text-gray-500">{k}</span>
                  <span className="font-semibold text-gray-900 text-right max-w-[60%]">{v}</span>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 bg-primary/5">
              <h3 className="font-heading font-bold text-gray-900 mb-3">📥 Free Sample</h3>
              <p className="text-gray-600 text-sm mb-4">Download free sample class & study material</p>
              <a href="#" className="block w-full text-center border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2.5 rounded-xl transition-all text-sm">
                Download Free Sample
              </a>
            </div>

            <div className="glass-card p-6 border-l-4 border-gold">
              <div className="font-heading font-bold text-gray-900 mb-2">🎯 Next Batch Starts</div>
              <div className="text-2xl font-bold text-primary font-heading">July 15, 2025</div>
              <div className="text-sm text-gray-600 mt-1">Only 12 seats remaining</div>
              <Link to="/register" className="mt-4 block text-center btn-gold py-2.5 rounded-xl text-sm">Secure Your Seat</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
