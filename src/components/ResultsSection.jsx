import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaTrophy, FaMedal, FaArrowRight } from 'react-icons/fa';
import { TOPPERS } from '../data/siteData';

export default function ResultsSection() {
  const [filter, setFilter] = useState('All');
  const exams = ['All', 'JAIIB', 'CAIIB', 'RBI Grade B', 'Bank PO'];
  
  const filtered = filter === 'All' ? TOPPERS : TOPPERS.filter(t => t.exam === filter);

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            🏆 Success Stories
          </div>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-gray-900 mb-3">
            Our <span className="text-primary">Star Performers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg mb-6">
            Meet the achievers who cracked their banking exams in first attempt with IBS Bank Career
          </p>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {exams.map(exam => (
              <button key={exam} onClick={() => setFilter(exam)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  filter === exam
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                {exam}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filtered.map((topper, i) => (
            <div key={i}
              className="glass-card p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">

              {/* Badge */}
              <div className="absolute top-4 right-4">
                {i === 0 && <FaTrophy className="text-gold text-2xl" />}
                {i === 1 && <FaMedal className="text-gray-400 text-2xl" />}
                {i === 2 && <FaMedal className="text-amber-600 text-2xl" />}
              </div>

              <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${topper.color} flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0`}>
                  {topper.initials}
                </div>

                <div className="flex-1">
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-0.5">{topper.name}</h3>
                  <div className="text-sm text-gray-500 mb-2">{topper.bank}</div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-gold" size={11} />)}
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 mb-3">
                <div className="text-xs text-gray-500 mb-0.5">Score / Rank</div>
                <div className="font-heading font-bold text-2xl text-primary">{topper.score}</div>
                <div className="text-xs text-accent font-semibold mt-1">{topper.exam} • {topper.year}</div>
              </div>

              {topper.quote && (
                <div className="text-xs text-gray-500 italic leading-relaxed border-t border-gray-100 pt-3">
                  "{topper.quote}"
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/results"
            className="inline-flex items-center gap-2 btn-primary">
            View All Results <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
