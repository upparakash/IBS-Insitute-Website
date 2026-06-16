import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaShoppingCart, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { NAV_LINKS } from '../data/siteData';

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full z-50 transition-all duration-300 ${sticky ? 'fixed top-0 bg-white shadow-xl' : 'relative bg-white'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo-blue.png"
              alt="IBS Bank Career"
              className="h-10 lg:h-14 w-auto object-contain"
              onError={e => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden items-center gap-1" aria-hidden>
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">IBS</div>
              <div>
                <div className="font-heading font-bold text-primary text-sm leading-tight">IBS Bank</div>
                <div className="font-heading font-bold text-accent text-sm leading-tight">Career</div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {NAV_LINKS.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-primary/5 transition-all whitespace-nowrap">
                      {item.label} <FaChevronDown size={10} className="transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 hidden group-hover:block z-50 pt-1">
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-[240px] grid grid-cols-1 gap-1 animate-slideUp">
                        {item.children.map((child) => (
                          <Link key={child.label} to={child.href}
                            className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all group/item">
                            <span className="flex items-center gap-2">
                              {child.icon && <span>{child.icon}</span>}
                              {child.label}
                            </span>
                            <div className="flex items-center gap-1">
                              {child.badge && (
                                <span className="text-[10px] bg-gold text-white px-1.5 py-0.5 rounded-full font-medium">{child.badge}</span>
                              )}
                              <FaChevronRight size={9} className="text-gray-400 group-hover/item:text-primary transition-colors" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-primary/5 transition-all whitespace-nowrap">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <button onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                <FaSearch size={15} />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2 w-72 z-50">
                  <input autoFocus type="text" placeholder="Search courses, topics..."
                    className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30" />
                </div>
              )}
            </div>

            <button className="hidden sm:flex p-2 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all relative">
              <FaShoppingCart size={15} />
              <span className="absolute -top-1 -right-1 bg-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </button>

            <Link to="/enquire" className="hidden md:flex btn-primary text-sm py-2.5 px-5">
              Enquire Now
            </Link>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary rounded-lg transition-colors">
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="container-custom py-4 flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                      {item.label}
                      <FaChevronDown size={12} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-4 flex flex-col gap-0.5 mb-2">
                        {item.children.map((child) => (
                          <Link key={child.label} to={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                            {child.icon && <span>{child.icon}</span>}
                            {child.label}
                            {child.badge && <span className="text-[10px] bg-gold text-white px-1.5 py-0.5 rounded-full">{child.badge}</span>}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.href} onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold text-gray-800 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 flex gap-2">
              <Link to="/login" onClick={() => setMobileOpen(false)} className="flex-1 text-center py-2.5 border border-primary text-primary text-sm font-semibold rounded-xl hover:bg-primary/5 transition-all">Login</Link>
              <Link to="/register" onClick={() => setMobileOpen(false)} className="flex-1 text-center py-2.5 btn-gold text-sm rounded-xl">Register Free</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
