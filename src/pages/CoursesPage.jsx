import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { COURSES } from '../data/siteData';
import { FaStar, FaUsers, FaClock, FaArrowRight, FaFilter } from 'react-icons/fa';

const FILTERS = ['All', 'Online', 'Offline', 'Online + Offline'];

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? COURSES
    : COURSES.filter(c => c.mode === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🎓 All Programs
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">
            Explore Our Courses
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Industry-aligned, exam-focused banking & finance courses designed by experts
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm py-4">
        <div className="container-custom flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
            <FaFilter size={13} className="text-primary" />
            Filter by Mode:
          </div>
          <div className="flex gap-2 flex-wrap">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-all ${
                  activeFilter === f ? 'bg-primary text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                {f}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-500">{filtered.length} courses found</div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(course => (
              <div key={course.id} className="group glass-card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Header */}
                <div className={`relative h-44 bg-gradient-to-br ${course.color}`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-5xl mb-2">🎓</div>
                      <div className="font-heading font-bold text-xl">{course.name}</div>
                    </div>
                  </div>
                  {course.badge && (
                    <span className={`absolute top-3 right-3 ${course.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
                      {course.badge}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.papers.map(p => (
                      <span key={p} className="text-xs bg-primary/5 text-primary px-2 py-1 rounded-lg font-medium">{p}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-500 pb-4 mb-4 border-b border-gray-100">
                    <span className="flex items-center gap-1"><FaClock size={10} />{course.duration}</span>
                    <span className="flex items-center gap-1"><FaUsers size={10} />{course.students.toLocaleString()}</span>
                    <span className="flex items-center gap-1 text-gold font-semibold"><FaStar size={10} />{course.rating}</span>
                    <span className="ml-auto px-2 py-0.5 bg-gray-100 rounded text-gray-600">{course.mode}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-heading font-bold text-2xl text-primary">{course.fee}</div>
                      <div className="text-xs text-gray-400 line-through">{course.originalFee}</div>
                    </div>
                    <Link to={`/courses/${course.slug}`}
                      className="flex items-center gap-2 bg-primary hover:bg-accent text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all group-hover:gap-3">
                      View Course <FaArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-12 bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-center text-white">
            <h3 className="font-heading font-bold text-2xl mb-2">Can't decide which course is right for you?</h3>
            <p className="text-white/80 mb-5">Talk to our counsellors — free career guidance for banking aspirants</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn-gold flex items-center gap-2">Talk to Counsellor <FaArrowRight size={12} /></Link>
              <Link to="/book-demo" className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-all">
                Book Free Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
