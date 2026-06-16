import { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TESTIMONIALS } from '../data/siteData';

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((active + 1) % TESTIMONIALS.length);
  const prev = () => setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[active];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            💬 Student Reviews
          </div>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-3">
            What Our <span className="text-gold">Students Say</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base lg:text-lg">
            Real success stories from banking professionals who transformed their careers with IBS
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 relative">
            <FaQuoteLeft className="absolute top-6 left-6 text-primary/10 text-5xl" />

            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              {/* Avatar */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-2xl shadow-xl shrink-0`}>
                {testimonial.avatar}
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-1">{testimonial.name}</h3>
                <p className="text-accent font-semibold text-sm mb-2">{testimonial.role}</p>
                <div className="flex gap-1 justify-center md:justify-start">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-gold" size={14} />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-base lg:text-lg leading-relaxed italic mb-6">
              "{testimonial.content}"
            </p>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3">
              <button onClick={prev}
                className="w-10 h-10 rounded-full bg-primary hover:bg-accent text-white flex items-center justify-center transition-colors shadow-lg">
                <FaChevronLeft size={14} />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button onClick={next}
                className="w-10 h-10 rounded-full bg-primary hover:bg-accent text-white flex items-center justify-center transition-colors shadow-lg">
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Bottom mini cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { value: '4.9/5', label: 'Average Rating' },
              { value: '8,400+', label: 'Reviews' },
              { value: '98%', label: 'Satisfaction' },
              { value: '#1', label: 'Rated Institute' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/90 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                <div className="font-heading font-bold text-2xl text-primary mb-1">{stat.value}</div>
                <div className="text-gray-600 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
