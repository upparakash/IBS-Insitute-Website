import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SLIDES = [
  {
    desktop: '/images/banners/desktop-1.jpg',
    mobile: '/images/banners/mobile-1.jpg',
    alt: 'IBS Institute of Banking Studies – 15 Years of Excellence',
  },
  {
    desktop: '/images/banners/desktop-2.jpg',
    mobile: '/images/banners/mobile-2.jpg',
    alt: 'JAIIB & CAIIB Coaching – IBS Bank Career',
  },
  {
    desktop: '/images/banners/desktop-3.jpg',
    mobile: '/images/banners/mobile-3.jpg',
    alt: 'Bank PO & SSC Coaching – IBS Bank Career',
  },
  {
    desktop: '/images/banners/desktop-4.jpg',
    mobile: '/images/banners/mobile-4.jpg',
    alt: 'Banking Excellence – IBS Institute Kerala',
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((idx) => {
    setVisible(false);
    setTimeout(() => {
      setActive(idx);
      setVisible(true);
    }, 250);
  }, []);

  const goNext = useCallback(() => {
    goTo((active + 1) % SLIDES.length);
  }, [active, goTo]);

  const goPrev = useCallback(() => {
    goTo((active - 1 + SLIDES.length) % SLIDES.length);
  }, [active, goTo]);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const slide = SLIDES[active];

  return (
    <section className="relative w-full overflow-hidden bg-primary select-none">
      {/* Images */}
      <div
        className="w-full"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.25s ease' }}
      >
        {/* Desktop banner — hidden on mobile */}
        <img
          key={`d-${active}`}
          src={slide.desktop}
          alt={slide.alt}
          draggable={false}
          className="hidden md:block w-full h-auto object-cover"
        />
        {/* Mobile banner — hidden on desktop */}
        <img
          key={`m-${active}`}
          src={slide.mobile}
          alt={slide.alt}
          draggable={false}
          className="block md:hidden w-full h-auto object-cover"
        />
      </div>

      {/* Enquire Now CTA — overlaid on the banner, mirrors the header button */}
      <Link
        to="/enquire"
        className="absolute left-4 sm:left-8 md:left-12 bottom-10 sm:bottom-14 md:bottom-16 z-20 btn-gold text-sm sm:text-base py-2.5 px-6 sm:px-8 shadow-xl hover:scale-105 transition-transform"
      >
        Enquire Now
      </Link>

      {/* Left arrow */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 bg-black/30 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm z-10"
      >
        <FaChevronLeft size={14} />
      </button>

      {/* Right arrow */}
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 bg-black/30 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm z-10"
      >
        <FaChevronRight size={14} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? 'w-7 h-2.5 bg-white shadow'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
