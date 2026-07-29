import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaShoppingCart, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { NAV_LINKS } from '../data/siteData';

/* ─── Single exam link row used across the mega-menu right panel ────────── */
function MegaLink({ child }) {
  return (
    <Link
      to={child.href}
      className="block px-3 py-1.5 text-sm leading-snug text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
    >
      {child.label}
    </Link>
  );
}

/* ─── Two-panel mega menu: categories left, items right ────────────────── */
function MegaMenu({ item }) {
  const [activeCat, setActiveCat] = useState(null);
  const active = activeCat !== null ? item.categories[activeCat] : null;
  const grouped = Boolean(active?.groups);

  return (
    <div
      className="absolute top-full left-0 hidden group-hover:block z-50 pt-2"
      onMouseLeave={() => setActiveCat(null)}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 flex overflow-hidden">

        {/* Left panel — category list (shown as soon as the nav item is hovered) */}
        <div className="bg-gray-50 border-r border-gray-100 py-2 shrink-0" style={{ width: '188px' }}>
          <div className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {item.label}
          </div>
          {item.categories.map((cat, i) => (
            <button
              key={cat.heading}
              onMouseEnter={() => setActiveCat(i)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-150 flex items-center justify-between gap-2 ${
                activeCat === i
                  ? 'bg-primary text-white font-semibold'
                  : 'text-gray-700 hover:bg-primary/8 hover:text-primary font-medium'
              }`}
            >
              <span className="leading-tight">{cat.heading}</span>
              <FaChevronRight
                size={8}
                className={`shrink-0 ${activeCat === i ? 'text-white' : 'text-gray-300'}`}
              />
            </button>
          ))}
        </div>

        {/* Right panel — only appears once a category (e.g. Bank Exams) is hovered */}
        {active && (
          <div className="py-3" style={{ width: grouped ? '720px' : '280px' }}>
            <div className="px-5 pb-2.5 mb-2 text-[10px] font-bold text-primary/60 uppercase tracking-widest border-b border-gray-100">
              {active.heading}
            </div>

            {grouped ? (
              /* Sub-grouped: each group in its own labelled column (Bank Exams) */
              <div className="px-3 grid grid-cols-3 gap-x-6 gap-y-5">
                {active.groups.map((group) => (
                  <div key={group.heading}>
                    <div className="px-3 pb-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wide">
                      {group.heading}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      {group.items.map((child) => (
                        <MegaLink key={child.label} child={child} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Flat list of items */
              <div className="px-3 flex flex-col gap-0.5">
                {active.items.map((child) => (
                  <MegaLink key={child.label} child={child} />
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

/* ─── Mobile category accordion ────────────────────────────────────────── */
function MobileCategoryMenu({ item, closeMobile }) {
  const [openCat, setOpenCat] = useState(null);

  return (
    <div className="ml-4 flex flex-col gap-0.5 mb-2">
      {item.categories.map((cat, i) => (
        <div key={cat.heading}>
          <button
            onClick={() => setOpenCat(openCat === i ? null : i)}
            className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
          >
            <span>{cat.heading}</span>
            <FaChevronRight
              size={10}
              className={`transition-transform duration-200 ${openCat === i ? 'rotate-90 text-primary' : 'text-gray-400'}`}
            />
          </button>
          {openCat === i && (
            <div className="ml-3 flex flex-col gap-0.5 pb-1">
              {cat.groups ? (
                /* Sub-grouped category (Bank Exams): heading label + its items */
                cat.groups.map((group) => (
                  <div key={group.heading}>
                    <div className="px-4 pt-2 pb-1 text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                      {group.heading}
                    </div>
                    {group.items.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={closeMobile}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))
              ) : (
                cat.items.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    onClick={closeMobile}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                    {child.label}
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Mobile children menu (flat list + expandable subItems) ───────────── */
function MobileChildrenMenu({ items, closeMobile }) {
  const [openSub, setOpenSub] = useState(null);
  return (
    <div className="ml-4 flex flex-col gap-0.5 mb-2">
      {items.map((child) => (
        <div key={child.label}>
          {child.subItems ? (
            <>
              <button
                onClick={() => setOpenSub(openSub === child.label ? null : child.label)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              >
                <span className="flex items-center gap-2">
                  {child.icon && <span>{child.icon}</span>}
                  {child.label}
                  {child.badge && <span className="text-[10px] bg-gold text-white px-1.5 py-0.5 rounded-full">{child.badge}</span>}
                </span>
                <FaChevronRight size={9} className={`transition-transform ${openSub === child.label ? 'rotate-90 text-primary' : 'text-gray-400'}`} />
              </button>
              {openSub === child.label && (
                <div className="ml-4 flex flex-col gap-0.5 pb-1">
                  {child.subItems.map((sub) => (
                    <Link key={sub.label} to={sub.href} onClick={closeMobile}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                      <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link to={child.href} onClick={closeMobile}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
              {child.icon && <span>{child.icon}</span>}
              {child.label}
              {child.badge && <span className="text-[10px] bg-gold text-white px-1.5 py-0.5 rounded-full">{child.badge}</span>}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Header ────────────────────────────────────────────────────────────── */
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

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`w-full z-50 transition-all duration-300 ${sticky ? 'fixed top-0 bg-white shadow-xl' : 'relative bg-white'}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo-blue.png"
              alt="IBS Bank Career"
              className="h-10 lg:h-14 w-auto object-contain"
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {NAV_LINKS.map((item) => (
              <div key={item.label} className="relative group">

                {/* ── Mega menu (items with categories) ── */}
                {item.categories ? (
                  <>
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-primary/5 transition-all whitespace-nowrap">
                      {item.label}
                      <FaChevronDown size={10} className="transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <MegaMenu item={item} />
                  </>

                ) : item.children ? (
                  /* ── Standard flat dropdown (with optional flyout subItems) ── */
                  <>
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-primary/5 transition-all whitespace-nowrap">
                      {item.label}
                      <FaChevronDown size={10} className="transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 hidden group-hover:block z-50 pt-2">
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 min-w-[230px] grid grid-cols-1 gap-0.5">
                        {item.children.map((child) => (
                          child.subItems ? (
                            /* ── Child with flyout submenu ── */
                            <div key={child.label} className="relative group/sub">
                              <div className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all cursor-pointer">
                                <span className="flex items-center gap-2">
                                  {child.icon && <span className="text-base leading-none">{child.icon}</span>}
                                  <span>{child.label}</span>
                                </span>
                                <div className="flex items-center gap-1">
                                  {child.badge && (
                                    <span className="text-[10px] bg-gold text-white px-1.5 py-0.5 rounded-full font-medium">{child.badge}</span>
                                  )}
                                  <FaChevronRight size={8} className="text-gray-400 group-hover/sub:text-primary transition-colors shrink-0" />
                                </div>
                              </div>
                              {/* Flyout panel */}
                              <div className="absolute left-full top-0 hidden group-hover/sub:block z-50 pl-1.5" style={{ minWidth: '230px' }}>
                                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2">
                                  <div className="px-3 py-1.5 text-[10px] font-bold text-primary/60 uppercase tracking-widest border-b border-gray-100 mb-1">
                                    {child.label}
                                  </div>
                                  {child.subItems.map((sub) => (
                                    <Link
                                      key={sub.label}
                                      to={sub.href}
                                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" />
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all group/item"
                            >
                              <span className="flex items-center gap-2">
                                {child.icon && <span className="text-base leading-none">{child.icon}</span>}
                                {child.label}
                              </span>
                              <div className="flex items-center gap-1">
                                {child.badge && (
                                  <span className="text-[10px] bg-gold text-white px-1.5 py-0.5 rounded-full font-medium">{child.badge}</span>
                                )}
                                <FaChevronRight size={8} className="text-gray-400 group-hover/item:text-primary transition-colors" />
                              </div>
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  </>

                ) : (
                  /* ── Plain link ── */
                  <Link
                    to={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-primary/5 transition-all whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}

              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              >
                <FaSearch size={15} />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2 w-72 z-50">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search courses, topics..."
                    className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                  />
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

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary rounded-lg transition-colors"
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <div key={item.label}>

                {item.categories ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                    >
                      {item.label}
                      <FaChevronDown size={12} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpanded === item.label && (
                      <MobileCategoryMenu item={item} closeMobile={closeMobile} />
                    )}
                  </>

                ) : item.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                    >
                      {item.label}
                      <FaChevronDown size={12} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpanded === item.label && (
                      <MobileChildrenMenu items={item.children} closeMobile={closeMobile} />
                    )}
                  </>

                ) : (
                  <Link
                    to={item.href}
                    onClick={closeMobile}
                    className="block px-4 py-3 text-sm font-semibold text-gray-800 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                  >
                    {item.label}
                  </Link>
                )}

              </div>
            ))}

            <div className="pt-3 border-t border-gray-100 flex gap-2">
              <Link to="/login" onClick={closeMobile} className="flex-1 text-center py-2.5 border border-primary text-primary text-sm font-semibold rounded-xl hover:bg-primary/5 transition-all">Login</Link>
              <Link to="/register" onClick={closeMobile} className="flex-1 text-center py-2.5 btn-gold text-sm rounded-xl">Register Free</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
