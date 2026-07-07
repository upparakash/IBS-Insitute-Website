import { useState } from 'react';
import { FaPhone, FaEnvelope, FaYoutube, FaTelegram, FaInstagram, FaFacebook, FaWhatsapp, FaGlobe, FaChevronDown } from 'react-icons/fa';
import { SITE, LANGUAGES } from '../data/siteData';

const socialLinks = [
  { icon: FaYoutube, href: SITE.social.youtube, color: 'hover:text-red-400' },
  { icon: FaTelegram, href: SITE.social.telegram, color: 'hover:text-blue-400' },
  { icon: FaInstagram, href: SITE.social.instagram, color: 'hover:text-pink-400' },
  { icon: FaFacebook, href: SITE.social.facebook, color: 'hover:text-blue-500' },
  { icon: FaWhatsapp, href: `https://wa.me/${SITE.whatsapp}`, color: 'hover:text-green-400' },
];

export default function TopBar() {
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('English');

  return (
    <div className="bg-[#0B1F3E] text-white text-xs">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between py-2.5 gap-2">
        {/* Left — contact */}
        <div className="flex items-center gap-4">
          <a href={`tel:${SITE.phone}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <FaPhone className="text-gold text-[10px]" />
            {SITE.phone}
          </a>
          <a href={`tel:${SITE.phone2}`} className="hidden md:flex items-center gap-1.5 hover:text-gold transition-colors">
            <FaPhone className="text-gold text-[10px]" />
            {SITE.phone2}
          </a>
          <a href={`mailto:${SITE.email}`} className="hidden lg:flex items-center gap-1.5 hover:text-gold transition-colors">
            <FaEnvelope className="text-gold text-[10px]" />
            {SITE.email}
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Social icons */}
          <div className="hidden sm:flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, color }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className={`text-gray-400 transition-colors ${color}`}>
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="hidden sm:flex items-center gap-1.5 border-l border-white/20 pl-3 hover:text-gold transition-colors"
            >
              <FaGlobe size={11} className="text-gold" />
              <span className="font-medium">{activeLang}</span>
              <FaChevronDown size={9} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 min-w-[130px]">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang}
                    onClick={() => { setActiveLang(lang); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors hover:bg-primary/5 hover:text-primary
                      ${activeLang === lang ? 'text-primary bg-primary/5' : 'text-gray-700'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Auth links */}
          <div className="flex items-center gap-2 border-l border-white/20 pl-3">
            <a href="/login" className="hover:text-gold transition-colors font-medium">Login</a>
            <span className="text-white/30">|</span>
            <a href="/register" className="bg-gold hover:bg-gold/90 text-white px-3 py-0.5 rounded font-medium transition-all">
              Register Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
