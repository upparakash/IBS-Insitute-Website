import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import { EXAM_DATA } from '../../data/examData';
import {
  FaCheckCircle, FaArrowRight, FaDownload, FaWhatsapp,
  FaChevronDown, FaChevronUp, FaGraduationCap, FaBriefcase,
  FaCalendarAlt, FaRupeeSign, FaUsers, FaClock, FaBookOpen,
  FaTrophy, FaStar, FaClipboardList,
} from 'react-icons/fa';

const WA_BASE = 'https://wa.me/919447873644';

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden mb-3">
      <button
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(o => !o)}
      >
        <span className="font-heading font-bold text-gray-900 text-base">{title}</span>
        {open ? <FaChevronUp className="text-accent shrink-0" /> : <FaChevronDown className="text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 bg-white">{children}</div>}
    </div>
  );
}

export default function ExamPage() {
  const { examSlug } = useParams();
  const exam = EXAM_DATA[examSlug];
  const [activeTab, setActiveTab] = useState(null);

  if (!exam) {
    return (
      <Layout>
        <section className="py-32 text-center">
          <div className="container-custom">
            <div className="text-7xl mb-6">🚧</div>
            <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">Page Coming Soon</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
              We are currently building a comprehensive guide for this exam. Check back soon or explore our other resources.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/" className="btn-primary">Go to Homepage</Link>
              <Link to="/courses" className="btn-gold">View Courses</Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  const patternKeys = Object.keys(exam.examPattern);
  const activePattern = activeTab || patternKeys[0];

  return (
    <Layout>
      {/* ── 1. HERO ── */}
      <section className={`bg-gradient-to-br ${exam.color} py-16 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/exams" className="hover:text-white transition-colors">Exams</Link>
            <span>/</span>
            <span className="text-white font-medium">{exam.name}</span>
          </div>

          <div className="max-w-4xl">
            {/* Category badge */}
            <span className="inline-block bg-white/20 backdrop-blur text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-white/30">
              {exam.category}
            </span>

            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              {exam.fullName}
            </h1>
            <p className="text-white/80 text-lg mb-7">{exam.organization}</p>

            {/* Stat Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: <FaUsers size={13} />, label: 'Vacancies', value: exam.vacancies },
                { icon: <FaClock size={13} />, label: 'Age Limit', value: exam.ageLimit },
                { icon: <FaRupeeSign size={13} />, label: 'Salary Range', value: exam.salaryRange },
              ].map(pill => (
                <div key={pill.label} className="flex items-center gap-2 bg-white/15 backdrop-blur text-white px-4 py-2.5 rounded-xl text-sm border border-white/20">
                  {pill.icon}
                  <span className="text-white/70">{pill.label}:</span>
                  <span className="font-semibold">{pill.value}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {exam.ibsCourse?.available ? (
                <Link
                  to={`/courses/${exam.ibsCourse.slug}`}
                  className="btn-gold flex items-center gap-2 text-base py-3.5 px-8"
                >
                  Enroll in IBS Coaching <FaArrowRight />
                </Link>
              ) : (
                <a
                  href={`${WA_BASE}?text=I want coaching for ${exam.name}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-gold flex items-center gap-2 text-base py-3.5 px-8"
                >
                  <FaWhatsapp /> Enroll in IBS Coaching
                </a>
              )}
              <a
                href={`${WA_BASE}?text=Please send me free notes for ${exam.name}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/40 transition-all text-base backdrop-blur"
              >
                <FaDownload size={14} /> Download Free Notes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT ── */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-5">About the Exam</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{exam.about}</p>
          </div>

          <h3 className="font-heading text-xl font-bold text-gray-900 mb-5">Eligibility Criteria</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <FaGraduationCap size={22} className="text-accent" />, title: 'Education', detail: exam.eligibility.education },
              { icon: <FaClock size={20} className="text-gold" />, title: 'Age Limit', detail: exam.eligibility.age },
              { icon: <FaUsers size={20} className="text-success" />, title: 'Nationality', detail: exam.eligibility.nationality },
            ].map(card => (
              <div key={card.title} className="glass-card p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900 mb-1">{card.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SELECTION PROCESS ── */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">Selection Process</h2>
          <div className="flex flex-wrap justify-center gap-0">
            {exam.selectionProcess.map((stage, i) => (
              <div key={stage} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-base shadow-lg">
                    {i + 1}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-gray-700 text-center max-w-[90px]">{stage}</p>
                </div>
                {i < exam.selectionProcess.length - 1 && (
                  <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-r from-accent to-blue-400 mx-1 mb-6 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. EXAM PATTERN ── */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">Exam Pattern</h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {patternKeys.map(key => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  activePattern === key
                    ? 'gradient-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          {patternKeys.map(key => {
            const pattern = exam.examPattern[key];
            if (activePattern !== key) return null;
            return (
              <div key={key} className="glass-card p-6">
                <div className="flex flex-wrap gap-4 mb-5">
                  <div className="flex items-center gap-2 text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-medium">
                    <FaClock size={13} /> Duration: {pattern.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-green-50 text-green-700 px-4 py-2 rounded-xl font-medium">
                    <FaStar size={13} /> Total Marks: {pattern.totalMarks}
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="text-left p-3 font-heading font-bold text-gray-700 rounded-tl-xl">Section</th>
                        <th className="text-center p-3 font-heading font-bold text-gray-700">Questions</th>
                        <th className="text-center p-3 font-heading font-bold text-gray-700 rounded-tr-xl">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pattern.sections.map((row, i) => (
                        <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                          <td className="p-3 text-gray-700 font-medium">{row.section}</td>
                          <td className="p-3 text-center text-gray-600">{row.questions}</td>
                          <td className="p-3 text-center font-semibold text-accent">{row.marks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 5. SYLLABUS ── */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">Complete Syllabus</h2>
          <div>
            {exam.syllabus.map((item, i) => (
              <AccordionItem key={i} title={item.subject}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.topics.map(topic => (
                    <span key={topic} className="bg-accent/10 text-accent text-xs font-medium px-3 py-1.5 rounded-full border border-accent/20">
                      {topic}
                    </span>
                  ))}
                </div>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SALARY & CAREER ── */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10">Salary & Career Growth</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                  <FaRupeeSign className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900">Salary Structure</h3>
              </div>
              <div className="space-y-3">
                {[
                  ['Basic Pay', exam.salary.basic],
                  ['Gross Salary', exam.salary.gross],
                  ['Perks & Benefits', exam.salary.perks],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-3 pb-3 border-b border-gray-50 last:border-0">
                    <span className="text-gray-500 text-sm w-32 shrink-0">{k}</span>
                    <span className="text-gray-900 text-sm font-semibold">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-600 rounded-xl flex items-center justify-center">
                  <FaBriefcase className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900">Job Profile</h3>
              </div>
              <ul className="space-y-3">
                {exam.jobProfile.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <FaCheckCircle className="text-success shrink-0 mt-0.5" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Career Growth Path */}
          {exam.careerGrowth && (
            <div className="mt-8 glass-card p-7">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-5 flex items-center gap-2">
                <FaTrophy className="text-gold" /> Career Growth Path
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                {exam.careerGrowth.map((stage, i) => (
                  <div key={stage} className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-xl border border-primary/20">
                      {stage}
                    </span>
                    {i < exam.careerGrowth.length - 1 && (
                      <FaArrowRight className="text-gray-300" size={12} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 7. IMPORTANT DATES ── */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">Important Dates 2026</h2>
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="gradient-primary text-white">
                    <th className="text-left p-4 font-heading font-bold">Event</th>
                    <th className="text-left p-4 font-heading font-bold">Expected Date</th>
                  </tr>
                </thead>
                <tbody>
                  {exam.importantDates.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-primary/5 transition-colors">
                      <td className="p-4 font-medium text-gray-800 flex items-center gap-2">
                        <FaCalendarAlt className="text-accent" size={13} /> {row.event}
                      </td>
                      <td className="p-4 text-success font-semibold">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. IBS COACHING ── */}
      {exam.ibsCourse?.available && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-gold text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">IBS Coaching for {exam.name}</span>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
                    Clear {exam.name} with Expert Guidance
                  </h2>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Join India's most trusted banking coaching institute. Our expert faculty — all retired banking professionals — will guide you to success.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {exam.ibsCourse.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-white/90 text-sm">
                        <FaCheckCircle className="text-gold shrink-0" size={13} /> {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-7 text-center">
                  <p className="text-white/70 text-sm mb-1">Course Fee</p>
                  <div className="font-heading text-4xl font-extrabold text-white mb-1">{exam.ibsCourse.fee}</div>
                  <p className="text-white/60 text-sm mb-6">One-time payment • Lifetime access</p>
                  <Link
                    to={`/courses/${exam.ibsCourse.slug}`}
                    className="block w-full btn-gold text-center py-3.5 rounded-xl text-base mb-3"
                  >
                    Enroll Now <FaArrowRight className="inline ml-1" />
                  </Link>
                  <a
                    href={`${WA_BASE}?text=I want to enroll for ${exam.name} coaching at IBS`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-xl border border-white/20 transition-all text-sm"
                  >
                    <FaWhatsapp size={16} /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 9. FAQs ── */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          {exam.faqs.map((faq, i) => (
            <AccordionItem key={i} title={faq.q}>
              <p className="text-gray-600 leading-relaxed text-sm pt-1">{faq.a}</p>
            </AccordionItem>
          ))}
        </div>
      </section>

      {/* ── 10. RELATED EXAMS ── */}
      {exam.relatedExams?.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">Related Exams</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {exam.relatedExams.slice(0, 4).map(slug => {
                const related = EXAM_DATA[slug];
                if (!related) return null;
                return (
                  <Link
                    key={slug}
                    to={`/exam-hub/${slug}`}
                    className="glass-card p-6 hover:shadow-2xl transition-all group block"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${related.color} flex items-center justify-center mb-4 shadow`}>
                      <FaBookOpen className="text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-gray-900 mb-1 group-hover:text-accent transition-colors">{related.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{related.organization}</p>
                    <div className="flex items-center gap-1 text-accent text-sm font-semibold">
                      View Details <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
