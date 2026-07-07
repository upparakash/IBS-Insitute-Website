import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import SEOHead from '../components/SEOHead';
import { COURSES, FACULTY } from '../data/siteData';
import { COURSE_PAGE_DATA } from '../data/coursePageData';
import {
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaClock,
  FaLaptop,
  FaFileAlt,
  FaPlay,
  FaTrophy,
  FaDownload,
  FaWhatsapp,
  FaChevronDown,
  FaQuestionCircle,
  FaShoppingCart,
  FaTools,
} from 'react-icons/fa';

/* ─── small helpers ─────────────────────────────────────────────────────── */
function discountPercent(fee, original) {
  const f = parseInt(String(fee).replace(/[^0-9]/g, ''), 10);
  const o = parseInt(String(original).replace(/[^0-9]/g, ''), 10);
  if (!f || !o) return null;
  return Math.round((1 - f / o) * 100);
}

function StarRow({ rating }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <FaStar
          key={i}
          size={12}
          className={i <= Math.round(rating) ? 'text-gold' : 'text-gray-300'}
        />
      ))}
    </span>
  );
}

/* ─── Accordion: single collapsible item ───────────────────────────────── */
function AccordionItem({ title, children, defaultOpen = false, accent = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none group"
        aria-expanded={open}
      >
        <span className={`font-heading font-bold text-gray-900 ${accent ? 'text-base' : 'text-sm'}`}>
          {title}
        </span>
        <FaChevronDown
          size={13}
          className={`text-gray-400 transition-transform duration-300 shrink-0 ml-3 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
}

/* ─── Purchase Type Selector ────────────────────────────────────────────── */
function PurchaseTypeSelector({ course }) {
  const [selectedType, setSelectedType] = useState(
    course.purchaseTypes?.[0]?.id || null
  );
  const [selectedPapers, setSelectedPapers] = useState([]);
  const [selectedElective, setSelectedElective] = useState(null);

  if (!course.purchaseTypes || course.purchaseTypes.length === 0) return null;

  const active = course.purchaseTypes.find(t => t.id === selectedType);
  const waText = encodeURIComponent(
    `Hi IBS! I want to buy the ${course.name} — ${active?.label} (${active?.subtitle})${
      selectedPapers.length ? ` | Papers: ${selectedPapers.join(', ')}` : ''
    }${selectedElective ? ` | Elective: ${selectedElective}` : ''}. Please guide me.`
  );
  const waLink = `https://wa.me/918138962298?text=${waText}`;

  const togglePaper = (p) => {
    setSelectedPapers(prev =>
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  return (
    <section className="py-10 bg-gray-50 border-b border-gray-200">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2 text-center">
            Choose Your Package
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            Select the purchase option that fits your learning style and budget
          </p>

          {/* Type cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {course.purchaseTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => { setSelectedType(type.id); setSelectedPapers([]); setSelectedElective(null); }}
                className={`relative flex flex-col items-center text-center p-4 rounded-2xl border-2 transition-all ${
                  selectedType === type.id
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-gray-200 bg-white hover:border-primary/40'
                }`}
              >
                {type.highlight && (
                  <span className={`absolute -top-2.5 left-1/2 -translate-x-1/2 ${type.highlightColor} text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap`}>
                    {type.highlight}
                  </span>
                )}
                <span className="text-2xl mb-2">{type.icon}</span>
                <span className={`font-bold text-sm ${selectedType === type.id ? 'text-primary' : 'text-gray-800'}`}>
                  {type.label}
                </span>
                <span className="text-xs text-gray-500 mt-0.5">{type.subtitle}</span>
                <span className={`font-heading font-extrabold text-sm mt-2 ${selectedType === type.id ? 'text-primary' : 'text-gray-700'}`}>
                  {type.price}
                </span>
                {type.originalPrice && (
                  <span className="text-gray-400 text-[10px] line-through">{type.originalPrice}</span>
                )}
              </button>
            ))}
          </div>

          {/* Active type details */}
          {active && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="grid lg:grid-cols-2 gap-6">

                {/* Left: what's included */}
                <div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">{active.icon}</span>
                    {active.label} — {active.subtitle}
                  </h3>
                  {active.note && (
                    <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-3 flex items-start gap-1.5">
                      <span className="mt-0.5">ℹ️</span> {active.note}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {(active.includes || []).map(inc => (
                      <li key={inc} className="flex items-start gap-2 text-sm text-gray-700">
                        <FaCheckCircle size={13} className="text-success mt-0.5 shrink-0" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: customise box (individual subject) or price + buy */}
                <div>
                  {active.isCustom ? (
                    /* Customise Box */
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <FaTools size={14} className="text-primary" />
                        <h4 className="font-bold text-primary text-sm">{active.customLabel}</h4>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">
                        Select the specific paper(s) you want to buy (1 to {active.papers?.length} subjects):
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(active.papers || []).map(paper => (
                          <button
                            key={paper}
                            onClick={() => togglePaper(paper)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                              selectedPapers.includes(paper)
                                ? 'bg-primary text-white border-primary'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-primary/50'
                            }`}
                          >
                            {paper}
                          </button>
                        ))}
                      </div>
                      {active.electivePapers && (
                        <>
                          <p className="text-xs text-gray-600 mb-2">Select your elective paper:</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {active.electivePapers.map(ep => (
                              <button
                                key={ep}
                                onClick={() => setSelectedElective(selectedElective === ep ? null : ep)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                                  selectedElective === ep
                                    ? 'bg-accent text-white border-accent'
                                    : 'bg-white text-gray-700 border-gray-300 hover:border-accent/50'
                                }`}
                              >
                                {ep}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                      {selectedPapers.length > 0 && (
                        <div className="bg-white rounded-xl p-3 mb-3 border border-primary/20">
                          <p className="text-xs text-gray-500 mb-1">Your selection:</p>
                          <p className="text-sm font-semibold text-primary">
                            {selectedPapers.join(' + ')}
                            {selectedElective ? ` + ${selectedElective} (Elective)` : ''}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {selectedPapers.length} paper{selectedPapers.length > 1 ? 's' : ''} selected
                          </p>
                        </div>
                      )}
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1da851] text-white font-bold py-3 rounded-xl transition-all text-sm"
                      >
                        <FaWhatsapp size={15} />
                        WhatsApp to Customise & Buy
                      </a>
                    </div>
                  ) : (
                    /* Standard buy */
                    <div className="flex flex-col justify-between h-full">
                      <div className="bg-primary/5 rounded-2xl p-5 mb-4 text-center border border-primary/10">
                        <div className="font-heading font-extrabold text-4xl text-primary mb-1">{active.price}</div>
                        {active.originalPrice && (
                          <div className="text-gray-400 line-through text-base">{active.originalPrice}</div>
                        )}
                        {active.originalPrice && (
                          <div className="text-success font-bold text-sm mt-1">
                            Save ₹{(parseInt(active.originalPrice.replace(/[^0-9]/g, '')) - parseInt(active.price.replace(/[^0-9]/g, ''))).toLocaleString()}
                          </div>
                        )}
                      </div>
                      <div className="space-y-2.5">
                        <a
                          href={waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full bg-[#1a3a6e] hover:bg-[#0f2d5e] text-white font-bold py-3.5 rounded-xl transition-all text-base"
                        >
                          <FaShoppingCart size={15} /> Buy Now — {active.label}
                        </a>
                        <a
                          href={waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold py-3 rounded-xl transition-all text-sm"
                        >
                          <FaWhatsapp size={15} /> Chat on WhatsApp
                        </a>
                        <p className="text-center text-xs text-gray-400">Secure payment via Razorpay</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FULL DETAIL PAGE — for courses found in COURSE_PAGE_DATA
═══════════════════════════════════════════════════════════════════════════ */
function FullDetailPage({ course }) {
  const waText = encodeURIComponent(`Hi IBS! I want to know more about the ${course.name} course.`);
  const waLink = `https://wa.me/918138962298?text=${waText}`;
  const discount = discountPercent(course.fee, course.originalFee);

  const seoTitle = `${course.name} Coaching ${course.fee} | IBS Bank Career | ${course.duration} Online + Offline`;
  const seoDesc = `Join IBS Bank Career's ${course.name} coaching — ${course.fee} (incl. study material, live classes & mock tests). ${course.students?.toLocaleString()}+ students trained. ${course.highlights?.find(h => h.label === 'Pass Rate' || h.label === 'Success Rate')?.value || '90%+'} pass rate. Next batch: ${course.nextBatch}.`;
  const seoKeywords = `${course.name} coaching, ${course.name} online classes, ${course.name} course fees, ${course.name} preparation Kerala, ${course.name} IBS, IIBF ${course.name} coaching`;

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.fullName || course.name,
    description: course.about,
    provider: {
      '@type': 'Organization',
      name: 'IBS Bank Career',
      url: 'https://ibsbankcareer.in',
    },
    offers: {
      '@type': 'Offer',
      price: course.fee?.replace(/[^0-9]/g, ''),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `https://ibsbankcareer.in/courses/${course.slug}`,
    },
    aggregateRating: course.rating ? {
      '@type': 'AggregateRating',
      ratingValue: String(course.rating),
      reviewCount: String(course.students || 100),
      bestRating: '5',
    } : undefined,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['online', 'onsite'],
      startDate: course.nextBatch,
      courseWorkload: course.duration,
    },
  };

  return (
    <Layout>
      <SEOHead
        title={seoTitle}
        description={seoDesc}
        keywords={seoKeywords}
        canonical={`/courses/${course.slug}`}
        jsonLd={courseJsonLd}
      />
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className={`bg-gradient-to-br ${course.color} py-16 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/25" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-white font-medium">{course.name}</span>
          </nav>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Left — main info */}
            <div className="lg:col-span-2">
              {course.badge && (
                <span className={`inline-block ${course.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                  {course.badge}
                </span>
              )}
              <div className="text-4xl mb-3">{course.icon}</div>
              <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                {course.name}
              </h1>
              <p className="text-white/70 text-sm mb-3">{course.fullName}</p>
              <p className="text-white/85 text-base mb-6 max-w-2xl leading-relaxed">{course.about}</p>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm px-4 py-2 rounded-xl">
                  <FaStar className="text-gold" size={13} />
                  <span>{course.rating} Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm px-4 py-2 rounded-xl">
                  <FaUsers size={13} />
                  <span>{Number(course.students).toLocaleString()}+ Students</span>
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm px-4 py-2 rounded-xl">
                  <FaClock size={13} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm px-4 py-2 rounded-xl">
                  <FaLaptop size={13} />
                  <span>{course.mode}</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to={`/enroll?course=${course.slug}`}
                  className="btn-gold flex items-center gap-2 text-base py-3.5 px-8"
                >
                  Buy Now <FaArrowRight size={13} />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-7 py-3.5 rounded-xl transition-all text-sm"
                >
                  <FaWhatsapp size={16} /> WhatsApp Us
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/30 transition-all text-sm"
                >
                  <FaDownload size={13} /> Download Brochure
                </a>
              </div>
            </div>

            {/* Right — sticky price card */}
            <div className="bg-white rounded-3xl shadow-2xl p-7 lg:sticky lg:top-6">
              <div className="text-center mb-5">
                <div className="font-heading font-extrabold text-4xl text-primary mb-1">
                  {course.fee}
                </div>
                {course.originalFee && (
                  <div className="text-gray-400 line-through text-lg">{course.originalFee}</div>
                )}
                {discount && (
                  <div className="inline-flex items-center gap-1 bg-success/10 text-success text-sm font-bold px-3 py-1 rounded-full mt-2">
                    <FaTrophy size={11} /> Save {discount}%
                  </div>
                )}
              </div>

              <div className="space-y-2.5 mb-5">
                {[
                  'Instant Access After Payment',
                  'Mobile + Desktop App Access',
                  'Lifetime Replay of Recorded Sessions',
                  'Certificate Included',
                ].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle size={13} className="text-success shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-xl p-3 mb-5 text-center">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Next Batch</span>
                <div className="font-heading font-bold text-primary text-lg mt-0.5">{course.nextBatch}</div>
                <div className="text-xs text-gray-500 mt-0.5">Limited seats — register early</div>
              </div>

              <Link
                to={`/enroll?course=${course.slug}`}
                className="block w-full text-center btn-gold py-3.5 text-base mb-3 rounded-xl"
              >
                Buy Now
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full text-center border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold py-3 rounded-xl transition-all text-sm"
              >
                <FaWhatsapp size={15} /> Chat on WhatsApp
              </a>
              <p className="text-center text-xs text-gray-500 mt-3">Secure payment via Razorpay</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Purchase type selector ───────────────────────────────────────── */}
      <PurchaseTypeSelector course={course} />

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container-custom grid lg:grid-cols-3 gap-10">

          {/* ── Main content col ──────────────────────────────── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Eligibility / Exam details */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Eligibility & Exam Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'Eligibility', value: course.eligibility },
                  { label: 'Exam Body', value: course.examBody },
                  { label: 'Passing Criteria', value: course.passingCriteria },
                  { label: 'Exam Mode', value: course.examMode },
                  ...(course.attempts ? [{ label: 'Attempts Allowed', value: course.attempts }] : []),
                ].map(({ label, value }) => (
                  <div key={label} className="glass-card p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-accent mb-1">{label}</div>
                    <div className="text-sm text-gray-700 leading-relaxed">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Papers / Syllabus Accordion */}
            {course.papers && course.papers.length > 0 && (
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Syllabus — Papers &amp; Modules
                </h2>
                <div className="space-y-3">
                  {course.papers.map((paper, pi) => (
                    <AccordionItem
                      key={paper.id}
                      defaultOpen={pi === 0}
                      accent
                      title={
                        <span className="flex items-center gap-3">
                          <span className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0">
                            {pi + 1}
                          </span>
                          <span>
                            <span className="text-accent font-bold text-sm">{paper.code}</span>
                            {' — '}
                            {paper.name}
                            {paper.questions && (
                              <span className="ml-2 text-xs text-gray-400 font-normal">
                                ({paper.questions} questions · {paper.duration})
                              </span>
                            )}
                          </span>
                        </span>
                      }
                    >
                      <div className="space-y-5 pt-2">
                        {paper.modules.map((mod, mi) => (
                          <div key={mi}>
                            <h4 className="font-semibold text-sm text-gray-800 mb-2 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-accent inline-block shrink-0" />
                              {mod.title}
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-1.5 ml-4">
                              {mod.topics.map(topic => (
                                <div key={topic} className="flex items-start gap-2 text-sm text-gray-600">
                                  <FaCheckCircle size={11} className="text-success shrink-0 mt-0.5" />
                                  {topic}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionItem>
                  ))}
                </div>
              </div>
            )}

            {/* What's Included */}
            {course.includes && course.includes.length > 0 && (
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  What's Included
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.includes.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 bg-primary/5 rounded-xl text-sm font-medium text-gray-700"
                    >
                      <FaCheckCircle size={14} className="text-success shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials */}
            {course.testimonials && course.testimonials.length > 0 && (
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Student Testimonials
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {course.testimonials.map((t, i) => (
                    <div key={i} className="glass-card p-5 border-l-4 border-gold">
                      <StarRow rating={5} />
                      <p className="text-gray-700 text-sm leading-relaxed mt-3 mb-4 italic">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-heading font-bold text-gray-900 text-sm">{t.name}</div>
                          <div className="text-xs text-gray-500">{t.bank}</div>
                        </div>
                        {t.score && (
                          <div className="bg-success/10 text-success text-xs font-bold px-2.5 py-1 rounded-full">
                            {t.score}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {course.faqs && course.faqs.length > 0 && (
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaQuestionCircle className="text-accent" size={22} />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {course.faqs.map((faq, i) => (
                    <AccordionItem key={i} title={faq.q}>
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </AccordionItem>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom CTA banner */}
            <div className={`bg-gradient-to-br ${course.color} rounded-2xl p-8 text-white relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold mb-2">Ready to Enroll?</h3>
                <p className="text-white/80 mb-6 text-sm">
                  Join {Number(course.students).toLocaleString()}+ students who have already transformed their banking career with IBS.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/enroll?course=${course.slug}`}
                    className="btn-gold flex items-center gap-2 py-3 px-7"
                  >
                    Enroll Now — {course.fee} <FaArrowRight size={12} />
                  </Link>
                  <a
                    href={`https://wa.me/918138962298?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl border border-white/30 transition-all text-sm"
                  >
                    <FaWhatsapp size={16} /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Sidebar ───────────────────────────────────────── */}
          <div className="space-y-5">

            {/* Course Highlights */}
            {course.highlights && course.highlights.length > 0 && (
              <div className="glass-card p-6">
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <FaFileAlt className="text-primary" size={16} /> Course Highlights
                </h3>
                {course.highlights.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between py-2.5 border-b border-gray-100 last:border-0 text-sm gap-3"
                  >
                    <span className="text-gray-500 shrink-0">{label}</span>
                    <span className="font-semibold text-gray-900 text-right">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Next Batch card */}
            <div className="glass-card p-6 border-l-4 border-gold">
              <div className="font-heading font-bold text-gray-900 mb-1">Next Batch Starts</div>
              <div className="text-2xl font-bold text-primary font-heading">{course.nextBatch}</div>
              <div className="text-sm text-gray-500 mt-1">Limited seats — enroll early to secure your spot</div>
              <Link
                to={`/enroll?course=${course.slug}`}
                className="mt-4 block text-center btn-gold py-2.5 rounded-xl text-sm"
              >
                Secure Your Seat
              </Link>
            </div>

            {/* WhatsApp quick connect */}
            <div className="glass-card p-6 bg-green-50/60">
              <h3 className="font-heading font-bold text-gray-900 mb-2">Have a Question?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our counsellors reply within 30 minutes on WhatsApp — 9 AM to 9 PM, 7 days a week.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1da851] text-white font-semibold py-3 rounded-xl transition-all text-sm"
              >
                <FaWhatsapp size={16} /> WhatsApp +91-81389 62298
              </a>
            </div>

            {/* Download brochure */}
            <div className="glass-card p-6 border-l-4 border-primary">
              <h3 className="font-heading font-bold text-gray-900 mb-2">
                Free Course Brochure
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Download the complete syllabus, schedule and fee details as a PDF.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 rounded-xl transition-all text-sm"
              >
                <FaDownload size={14} /> Download Brochure
              </a>
            </div>

            {/* Free demo */}
            <div className="glass-card p-6 bg-primary/5">
              <h3 className="font-heading font-bold text-gray-900 mb-2">Watch a Free Demo</h3>
              <p className="text-gray-600 text-sm mb-4">
                Experience IBS quality — watch a sample lecture before you enroll.
              </p>
              <Link
                to="/book-demo"
                className="flex items-center justify-center gap-2 w-full border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2.5 rounded-xl transition-all text-sm"
              >
                <FaPlay size={11} /> Book Free Demo Class
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FALLBACK PAGE — for courses only in siteData COURSES (legacy)
═══════════════════════════════════════════════════════════════════════════ */
function FallbackDetailPage({ course }) {
  const waText = encodeURIComponent(`Hi IBS! I want to know about ${course.name} course.`);
  const waLink = `https://wa.me/918138962298?text=${waText}`;
  const discount = discountPercent(course.fee, course.originalFee);

  const relatedFaculty = FACULTY.filter(f =>
    f.courses.some(c => c.toLowerCase().includes(course.name.split(' ')[0].toLowerCase()))
  );

  const syllabus = course.papers
    ? course.papers.map((p, i) => ({ paper: `Paper ${i + 1} — ${p}`, topics: [] }))
    : [];

  return (
    <Layout>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${course.color} py-16 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-white font-medium">{course.name}</span>
          </nav>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              {course.badge && (
                <span className={`inline-block ${course.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                  {course.badge}
                </span>
              )}
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {course.name}
              </h1>
              <p className="text-white/85 text-lg mb-6 max-w-2xl leading-relaxed">{course.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                {course.rating && (
                  <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm px-4 py-2 rounded-xl">
                    <FaStar className="text-gold" /> {course.rating} Rating
                  </div>
                )}
                {course.students && (
                  <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm px-4 py-2 rounded-xl">
                    <FaUsers size={13} /> {Number(course.students).toLocaleString()}+ Students
                  </div>
                )}
                {course.duration && (
                  <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm px-4 py-2 rounded-xl">
                    <FaClock size={13} /> {course.duration}
                  </div>
                )}
                {course.mode && (
                  <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm px-4 py-2 rounded-xl">
                    <FaLaptop size={13} /> {course.mode}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to={`/enroll?course=${course.slug}`}
                  className="btn-gold flex items-center gap-2 text-base py-3.5 px-8"
                >
                  Enroll Now <FaArrowRight />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-sm"
                >
                  <FaWhatsapp size={15} /> WhatsApp Us
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/30 transition-all text-sm"
                >
                  <FaDownload size={13} /> Download Brochure
                </a>
              </div>
            </div>

            {/* Price card */}
            <div className="bg-white rounded-3xl shadow-2xl p-7">
              <div className="text-center mb-6">
                <div className="font-heading font-extrabold text-4xl text-primary mb-1">{course.fee}</div>
                {course.originalFee && (
                  <div className="text-gray-400 line-through text-lg">{course.originalFee}</div>
                )}
                {discount && (
                  <div className="inline-flex items-center gap-1 bg-success/10 text-success text-sm font-bold px-3 py-1 rounded-full mt-2">
                    <FaTrophy size={11} /> Save {discount}%
                  </div>
                )}
              </div>
              <div className="space-y-3 mb-6">
                {['Instant Access After Payment', 'Mobile + Desktop', 'Lifetime Access', 'Certificate Included'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle size={13} className="text-success shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <Link
                to={`/enroll?course=${course.slug}`}
                className="block w-full text-center btn-gold py-3.5 text-base mb-3 rounded-xl"
              >
                Buy Now
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full text-center border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold py-3 rounded-xl transition-all text-sm"
              >
                <FaWhatsapp size={15} /> Chat on WhatsApp
              </a>
              <p className="text-center text-xs text-gray-500 mt-3">Secure payment via Razorpay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* What's included */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  '120+ HD Video Lectures',
                  'Comprehensive Study Notes (PDF)',
                  '500+ Practice Questions',
                  '5 Full Mock Tests',
                  'Doubt Clearing (WhatsApp + Live)',
                  'Mobile App Access',
                  'Daily Current Affairs',
                  'Performance Analytics',
                  'Rank & Percentile',
                  'Course Completion Certificate',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-primary/5 rounded-xl text-sm font-medium text-gray-700">
                    <FaCheckCircle size={13} className="text-success shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Papers listed */}
            {syllabus.length > 0 && (
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Papers Covered</h2>
                <div className="space-y-3">
                  {syllabus.map((s, i) => (
                    <div key={i} className="glass-card p-5 flex items-center gap-4">
                      <div className="w-9 h-9 gradient-primary rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      <span className="font-heading font-semibold text-gray-900">{s.paper}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                ['Papers Covered', (course.papers || []).join(', ')],
                ['Students Enrolled', `${Number(course.students).toLocaleString()}+`],
                ['Pass Rate', '94%+'],
                ['Language', 'Hindi + English'],
              ].filter(([, v]) => v).map(([k, v]) => (
                <div key={k} className="flex justify-between py-2.5 border-b border-gray-100 last:border-0 text-sm">
                  <span className="text-gray-500">{k}</span>
                  <span className="font-semibold text-gray-900 text-right max-w-[60%]">{v}</span>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 bg-green-50/60">
              <h3 className="font-heading font-bold text-gray-900 mb-2">Have Questions?</h3>
              <p className="text-gray-600 text-sm mb-4">Our counsellors are available 9 AM – 9 PM, 7 days a week.</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1da851] text-white font-semibold py-3 rounded-xl transition-all text-sm"
              >
                <FaWhatsapp size={15} /> WhatsApp +91-81389 62298
              </a>
            </div>

            <div className="glass-card p-6 border-l-4 border-gold">
              <div className="font-heading font-bold text-gray-900 mb-2">Next Batch Starts</div>
              <div className="text-2xl font-bold text-primary font-heading">July 2026</div>
              <div className="text-sm text-gray-600 mt-1">Limited seats — enrol early</div>
              <Link to={`/enroll?course=${course.slug}`} className="mt-4 block text-center btn-gold py-2.5 rounded-xl text-sm">
                Secure Your Seat
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   ROOT EXPORT — routes to the right page based on which dataset has data
═══════════════════════════════════════════════════════════════════════════ */
export default function CourseDetailPage() {
  const { slug } = useParams();

  // Priority: rich COURSE_PAGE_DATA → fallback: siteData COURSES
  const richCourse = COURSE_PAGE_DATA[slug];
  if (richCourse) {
    return <FullDetailPage course={richCourse} />;
  }

  const legacyCourse = COURSES.find(c => c.slug === slug) || COURSES[0];
  return <FallbackDetailPage course={legacyCourse} />;
}
