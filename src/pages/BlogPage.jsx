import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import SEOHead from '../components/SEOHead';
import { BLOGS } from '../data/siteData';
import { FaClock, FaCalendarAlt, FaSearch, FaArrowRight, FaTag } from 'react-icons/fa';

const CATEGORIES = ['All', 'JAIIB', 'CAIIB', 'RBI', 'Bank PO', 'Current Affairs', 'SSC'];

const EXTENDED_BLOGS = [
  ...BLOGS,
  { id: 5, title: 'IBPS RRB PO 2026 Notification: Complete Analysis & Eligibility', category: 'Bank PO', excerpt: 'IBPS RRB PO 2026 full notification breakdown — vacancies, age limit, qualification, exam pattern and key dates you must know.', date: 'July 2, 2026', readTime: '7 min read', color: 'from-green-500 to-green-600', href: '/blog/ibps-rrb-2026' },
  { id: 6, title: 'CAIIB BFM Module: Complete Study Strategy 2026', category: 'CAIIB', excerpt: 'Master the BFM (Bank Financial Management) module in CAIIB with this structured, topic-wise study plan used by our toppers.', date: 'June 28, 2026', readTime: '9 min read', color: 'from-violet-500 to-violet-600', href: '/blog/caiib-bfm-strategy' },
  { id: 7, title: 'JAIIB November 2026: 4-Paper Strategy & Study Plan', category: 'JAIIB', excerpt: 'Complete study strategy for JAIIB November 2026 — paper-wise prioritisation, revision schedule and last-month tips from IBS toppers.', date: 'June 25, 2026', readTime: '8 min read', color: 'from-red-500 to-red-600', href: '/blog/jaiib-nov-2026-strategy' },
  { id: 8, title: 'Banking Terminology Glossary: 200 Must-Know Terms for JAIIB & CAIIB', category: 'JAIIB', excerpt: 'Comprehensive banking glossary covering JAIIB, CAIIB and banking interview terms — from NPA to Basel norms to digital banking.', date: 'June 20, 2026', readTime: '15 min read', color: 'from-teal-500 to-teal-600', href: '/blog/banking-glossary' },
];

export default function BlogPage() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = EXTENDED_BLOGS.filter(b =>
    (category === 'All' || b.category === category) &&
    (search === '' || b.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Layout>
      <SEOHead
        title="Banking Exam Blog | JAIIB CAIIB Tips, Study Guides & Current Affairs | IBS Bank Career"
        description="Free banking exam study guides, JAIIB & CAIIB preparation tips, current affairs, and exam notifications from IBS Bank Career — Kerala's #1 banking coaching institute."
        keywords="JAIIB study tips, CAIIB preparation guide, banking exam blog, RBI Grade B notes, bank PO tips, IIBF exam guide, banking current affairs, IBS blog"
        canonical="/blog"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            📝 Knowledge Hub
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">Blog & Articles</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
            Expert insights, exam strategies, current affairs and banking career guidance
          </p>
          <div className="max-w-md mx-auto relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input type="text" placeholder="Search articles..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-3.5 rounded-2xl text-sm focus:outline-none bg-white text-gray-900 shadow-xl" />
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white border-b border-gray-100 py-4 shadow-sm">
        <div className="container-custom flex flex-wrap gap-2 items-center">
          <FaTag size={12} className="text-primary mr-1" />
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCategory(c)}
              className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-all ${category === c ? 'bg-primary text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {c}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-500">{filtered.length} articles</span>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(blog => (
              <Link key={blog.id} to={blog.href} className="group glass-card overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className={`relative h-40 bg-gradient-to-br ${blog.color} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  <span className="absolute top-3 left-3 bg-white/90 text-xs font-bold px-2.5 py-1 rounded-full shadow">{blog.category}</span>
                  <div className="text-white text-4xl relative z-10">📰</div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-base text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 pb-4 mb-3 border-b border-gray-100">
                    <span className="flex items-center gap-1"><FaCalendarAlt size={10} />{blog.date}</span>
                    <span className="flex items-center gap-1"><FaClock size={10} />{blog.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read Article <FaArrowRight size={11} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-lg font-medium">No articles found</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
