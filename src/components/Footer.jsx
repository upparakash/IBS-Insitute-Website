import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaTelegram, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { SITE } from '../data/siteData';

const QUICK_LINKS = [
  { label: 'About IBS', href: '/about' },
  { label: 'Our Faculty', href: '/faculty' },
  { label: 'Results', href: '/results' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

const COURSE_LINKS = [
  { label: 'JAIIB Coaching', href: '/courses/jaiib' },
  { label: 'CAIIB Coaching', href: '/courses/caiib' },
  { label: 'Bank PO Batch', href: '/courses/bank-po' },
  { label: 'RBI Grade B', href: '/courses/rbi-grade-b' },
  { label: 'SSC CGL / CHSL', href: '/courses/ssc' },
  { label: 'Internal Promotions', href: '/courses/internal-promotions' },
  { label: 'DRA Certification', href: '/courses/dra' },
  { label: 'Mock Tests', href: '/mock-tests' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

const SOCIAL = [
  { icon: FaYoutube, href: SITE.social.youtube, label: 'YouTube', color: 'hover:bg-red-600' },
  { icon: FaTelegram, href: SITE.social.telegram, label: 'Telegram', color: 'hover:bg-blue-500' },
  { icon: FaInstagram, href: SITE.social.instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: FaFacebook, href: SITE.social.facebook, label: 'Facebook', color: 'hover:bg-blue-700' },
  { icon: FaTwitter, href: SITE.social.twitter, label: 'Twitter', color: 'hover:bg-sky-500' },
  { icon: FaLinkedin, href: SITE.social.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600' },
  { icon: FaWhatsapp, href: `https://wa.me/${SITE.whatsapp}`, label: 'WhatsApp', color: 'hover:bg-green-500' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter strip */}
      <div className="bg-gradient-to-r from-primary to-accent py-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-1">Stay Updated with IBS</h3>
              <p className="text-white/80 text-sm">Get free exam notifications, study tips & current affairs in your inbox</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 md:w-72 px-4 py-3 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-white"
              />
              <button type="submit"
                className="bg-gold hover:bg-gold/90 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-all whitespace-nowrap shadow-lg">
                Subscribe <FaArrowRight size={12} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img
                src="/logo-white.png"
                alt="IBS Bank Career"
                className="h-12 w-auto object-contain"
                onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'block'; }}
              />
              <div className="hidden font-heading font-bold text-2xl text-white">
                IBS <span className="text-gold">Bank Career</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              India's most trusted banking & finance coaching institute. Empowering 50,000+ banking professionals to achieve their career goals since 2012.
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <FaPhone size={12} className="text-gold" />
                </div>
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <FaEnvelope size={12} className="text-gold" />
                </div>
                {SITE.email}
              </a>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <FaMapMarkerAlt size={12} className="text-gold" />
                </div>
                <span className="text-gray-400 leading-snug">{SITE.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-5 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold rounded-full" />
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <Link to={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:gap-3 transition-all">
                    <FaArrowRight size={10} className="text-gold shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Courses */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-5 relative">
              Our Courses
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold rounded-full" />
            </h4>
            <ul className="space-y-2.5">
              {COURSE_LINKS.map(link => (
                <li key={link.href}>
                  <Link to={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:gap-3 transition-all">
                    <FaArrowRight size={10} className="text-gold shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Social & Accreditation */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-5 relative">
              Connect with Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold rounded-full" />
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {SOCIAL.map(({ icon: Icon, href, label, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all ${color}`}>
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <h4 className="font-heading font-bold text-white text-sm mb-3">Recognised By</h4>
            <div className="flex flex-wrap gap-2">
              {['IIBF', 'RBI', 'IBA', 'NABARD', 'ISO 9001'].map(badge => (
                <span key={badge} className="text-xs bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg font-medium border border-white/10">
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-xs text-gray-400 mb-1">IIBF Authorised Study Centre</div>
              <div className="font-heading font-bold text-white text-sm">Centre Code: IBS-2025</div>
              <div className="text-xs text-gold mt-1">✓ Verified Institution</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} IBS Bank Career. All rights reserved. | {SITE.url}</p>
          <div className="flex flex-wrap gap-4">
            {LEGAL_LINKS.map(l => (
              <Link key={l.href} to={l.href} className="hover:text-white transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
