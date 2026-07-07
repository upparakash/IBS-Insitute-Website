import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import {
  FaBook, FaShoppingCart, FaWhatsapp, FaTag, FaStar,
  FaCheckCircle, FaArrowRight,
} from 'react-icons/fa';

const WA_BASE = 'https://wa.me/919447873644';

const TABS = [
  { id: 'bank-exams', label: 'Bank Exams' },
  { id: 'jaiib', label: 'JAIIB Book Set' },
  { id: 'caiib', label: 'CAIIB Book Set' },
  { id: 'iibf', label: 'IIBF Certificate Courses' },
];

const BOOK_COLORS = [
  'from-blue-500 to-blue-700',
  'from-purple-500 to-purple-700',
  'from-green-500 to-green-700',
  'from-teal-500 to-teal-700',
  'from-rose-500 to-rose-700',
  'from-amber-500 to-amber-700',
  'from-indigo-500 to-indigo-700',
  'from-cyan-500 to-cyan-700',
];

function BookCard({ book, idx }) {
  const color = book.color || BOOK_COLORS[idx % BOOK_COLORS.length];
  const waMsg = `I want to buy the book: ${book.title}`;
  return (
    <div className="glass-card overflow-hidden hover:shadow-2xl transition-all group flex flex-col">
      {/* Cover */}
      <div className={`bg-gradient-to-br ${color} p-8 flex flex-col items-center justify-center min-h-[160px] relative`}>
        {book.isSet && (
          <span className="absolute top-3 right-3 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
            Best Value
          </span>
        )}
        {book.badge && !book.isSet && (
          <span className="absolute top-3 right-3 bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full border border-white/30">
            {book.badge}
          </span>
        )}
        <FaBook size={36} className="text-white/90 mb-3" />
        <p className="text-white/80 text-xs text-center leading-tight">{book.publisher || 'IIBF / IBS Publication'}</p>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-gray-900 text-sm mb-1 leading-snug">{book.title}</h3>
        {book.subtitle && <p className="text-xs text-gray-500 mb-3">{book.subtitle}</p>}
        {book.includes && (
          <div className="mb-3">
            {book.includes.map(item => (
              <div key={item} className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                <FaCheckCircle className="text-success" size={10} /> {item}
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-heading font-extrabold text-2xl text-primary">{book.price}</span>
            {book.originalPrice && (
              <span className="text-gray-400 line-through text-sm">{book.originalPrice}</span>
            )}
            {book.originalPrice && (
              <span className="text-xs font-bold text-success bg-success/10 px-2 py-0.5 rounded-full">
                Save {Math.round((1 - parseInt(book.price.replace(/[^0-9]/g, '')) / parseInt(book.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <a
              href={`${WA_BASE}?text=${encodeURIComponent(waMsg)}`}
              target="_blank" rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 btn-gold py-2.5 rounded-xl text-sm"
            >
              <FaWhatsapp size={14} /> Buy Now
            </a>
            <button
              disabled
              className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-400 font-semibold py-2.5 rounded-xl text-sm cursor-not-allowed"
              title="Cart feature launching soon"
            >
              <FaShoppingCart size={13} /> Add to Cart — Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const BANK_EXAMS_BOOKS = [
  {
    title: 'Banking Awareness & Current Affairs 2026',
    subtitle: 'Complete reference for all banking recruitment exams',
    publisher: 'IBS Publication',
    price: '₹350',
    originalPrice: '₹499',
    badge: 'Updated',
    color: 'from-blue-600 to-blue-800',
  },
  {
    title: 'Quantitative Aptitude for Bank PO/Clerk 2026',
    subtitle: '3,000+ solved problems with shortcuts & tricks',
    publisher: 'IBS Publication',
    price: '₹450',
    originalPrice: '₹599',
    color: 'from-green-600 to-green-800',
  },
  {
    title: 'Reasoning Ability for Bank Exams',
    subtitle: 'Covers all reasoning types for Prelims & Mains',
    publisher: 'IBS Publication',
    price: '₹420',
    originalPrice: '₹550',
    color: 'from-purple-600 to-purple-800',
  },
  {
    title: 'English Language for Banking Exams 2026',
    subtitle: 'Grammar, vocab, reading comprehension for all bank exams',
    publisher: 'IBS Publication',
    price: '₹380',
    originalPrice: '₹499',
    color: 'from-teal-600 to-teal-800',
  },
  {
    title: 'Bank PO Complete Guide 2026',
    subtitle: 'All-in-one for SBI PO, IBPS PO, RBI — Prelims to Interview',
    publisher: 'IBS Publication',
    price: '₹699',
    originalPrice: '₹999',
    badge: 'Bestseller',
    color: 'from-rose-600 to-rose-800',
  },
];

const JAIIB_BOOKS = [
  {
    title: 'JAIIB — Indian Economy & Indian Financial System (IE&IFS)',
    subtitle: 'Paper 1 | Published by IIBF',
    publisher: 'IIBF Official Textbook',
    price: '₹650',
    originalPrice: null,
    badge: 'IIBF Official',
    color: 'from-blue-600 to-blue-800',
  },
  {
    title: 'JAIIB — Principles & Practices of Banking (PPB)',
    subtitle: 'Paper 2 | Published by IIBF',
    publisher: 'IIBF Official Textbook',
    price: '₹650',
    originalPrice: null,
    badge: 'IIBF Official',
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'JAIIB — Accounting & Finance for Bankers (AFM)',
    subtitle: 'Paper 3 | Published by IIBF',
    publisher: 'IIBF Official Textbook',
    price: '₹600',
    originalPrice: null,
    badge: 'IIBF Official',
    color: 'from-indigo-600 to-indigo-800',
  },
  {
    title: 'JAIIB — Retail Banking & Wealth Management (RBWM)',
    subtitle: 'Paper 4 | Published by IIBF',
    publisher: 'IIBF Official Textbook',
    price: '₹650',
    originalPrice: null,
    badge: 'IIBF Official',
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    title: 'JAIIB Complete Book Set — All 4 Papers',
    subtitle: 'IE&IFS + PPB + AFM + RBWM — Save ₹350',
    publisher: 'IIBF Official Textbooks',
    price: '₹2,200',
    originalPrice: '₹2,550',
    isSet: true,
    includes: ['Paper 1: IE&IFS', 'Paper 2: PPB', 'Paper 3: AFM', 'Paper 4: RBWM'],
    color: 'from-blue-700 to-primary',
  },
];

const CAIIB_BOOKS = [
  {
    title: 'CAIIB — Advanced Bank Management (ABM)',
    subtitle: 'Compulsory Paper 1 | Published by IIBF',
    publisher: 'IIBF Official Textbook',
    price: '₹750',
    originalPrice: null,
    badge: 'IIBF Official',
    color: 'from-purple-600 to-purple-800',
  },
  {
    title: 'CAIIB — Bank Financial Management (BFM)',
    subtitle: 'Compulsory Paper 2 | Published by IIBF',
    publisher: 'IIBF Official Textbook',
    price: '₹700',
    originalPrice: null,
    badge: 'IIBF Official',
    color: 'from-purple-500 to-purple-700',
  },
  {
    title: 'CAIIB — Banking Regulation & Business Laws (BRBL)',
    subtitle: 'Compulsory Paper 3 | Published by IIBF',
    publisher: 'IIBF Official Textbook',
    price: '₹700',
    originalPrice: null,
    badge: 'IIBF Official',
    color: 'from-violet-600 to-violet-800',
  },
  {
    title: 'CAIIB — Elective Paper (Rural Banking / Co-operative / Financial Advising)',
    subtitle: 'Elective Paper 4 | Published by IIBF',
    publisher: 'IIBF Official Textbook',
    price: '₹600',
    originalPrice: null,
    badge: 'IIBF Official',
    color: 'from-violet-500 to-violet-700',
  },
  {
    title: 'CAIIB Complete Book Set — All 4 Papers',
    subtitle: 'ABM + BFM + BRBL + Elective — Save ₹250',
    publisher: 'IIBF Official Textbooks',
    price: '₹2,500',
    originalPrice: '₹2,750',
    isSet: true,
    includes: ['ABM — Advanced Bank Management', 'BFM — Bank Financial Management', 'BRBL — Banking Regulation & Business Laws', 'Elective Paper'],
    color: 'from-purple-700 to-purple-900',
  },
];

const IIBF_BOOKS = [
  {
    title: 'DRA (Debt Recovery Agent) Study Material',
    subtitle: 'IIBF-authorised study guide for DRA certification',
    publisher: 'IIBF / Authorised Study Material',
    price: '₹500',
    originalPrice: '₹700',
    badge: 'IIBF Authorised',
    color: 'from-rose-600 to-rose-800',
  },
  {
    title: 'Digital Banking — Certificate Course Study Guide 2026',
    subtitle: 'Covers digital payments, fintech, internet banking & cyber security',
    publisher: 'IIBF Publication',
    price: '₹450',
    originalPrice: '₹600',
    badge: 'IIBF Certified',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'AML / KYC Certification Study Material',
    subtitle: 'Anti-money laundering & KYC compliance for IIBF exam',
    publisher: 'IIBF Publication',
    price: '₹400',
    originalPrice: '₹550',
    badge: 'IIBF Certified',
    color: 'from-green-600 to-green-800',
  },
  {
    title: 'Business Correspondent / Business Facilitator (BC-BF) Study Guide',
    subtitle: 'Complete study material for BC/BF certification exam',
    publisher: 'IIBF Publication',
    price: '₹350',
    originalPrice: '₹500',
    badge: 'IIBF Certified',
    color: 'from-teal-600 to-teal-800',
  },
];

const BOOK_TABS = {
  'bank-exams': BANK_EXAMS_BOOKS,
  'jaiib': JAIIB_BOOKS,
  'caiib': CAIIB_BOOKS,
  'iibf': IIBF_BOOKS,
};

const TAB_DESCRIPTIONS = {
  'bank-exams': 'Comprehensive books for SBI PO, IBPS PO/Clerk, RBI Grade B, and other banking recruitment exams.',
  'jaiib': 'Official IIBF textbooks for all 4 JAIIB papers — IE&IFS, PPB, AFM, and RBWM. Get the complete set at a discounted price.',
  'caiib': 'Official IIBF textbooks for all CAIIB compulsory and elective papers. Save with the complete book set.',
  'iibf': 'Study materials for IIBF certificate courses — DRA, Digital Banking, AML/KYC, and BC/BF.',
};

export default function BooksPage() {
  const [activeTab, setActiveTab] = useState('bank-exams');
  const books = BOOK_TABS[activeTab];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-5 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Books</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
              <FaBook size={26} className="text-white" />
            </div>
            <div>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white">Banking Books Store</h1>
              <p className="text-white/80 mt-1">IIBF official textbooks, bank exam guides, and certificate course materials</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            {[
              { label: 'JAIIB & CAIIB Official Books', icon: '📚' },
              { label: 'Delivered across India', icon: '🚚' },
              { label: 'Order via WhatsApp', icon: '💬' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2 bg-white/15 text-white text-sm px-4 py-2 rounded-xl">
                <span>{item.icon}</span> {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
        <div className="container-custom">
          <div className="flex gap-1 py-2 overflow-x-auto">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'gradient-primary text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="container-custom">

          {/* Section Header */}
          <div className="mb-8">
            <p className="text-gray-600 max-w-2xl">{TAB_DESCRIPTIONS[activeTab]}</p>
          </div>

          {/* Special set highlight */}
          {(activeTab === 'jaiib' || activeTab === 'caiib') && (
            <div className={`mb-8 rounded-2xl p-5 border-2 border-gold bg-gold/5 flex items-center gap-4 flex-wrap`}>
              <FaStar className="text-gold" size={22} />
              <div className="flex-1 min-w-0">
                <p className="font-heading font-bold text-gray-900">
                  {activeTab === 'jaiib' ? 'Save ₹350 on JAIIB Complete Set!' : 'Save ₹250 on CAIIB Complete Set!'}
                </p>
                <p className="text-gray-600 text-sm">
                  Buy all {activeTab === 'jaiib' ? '4 JAIIB' : '4 CAIIB'} books together and get a special bundle discount vs buying individually.
                </p>
              </div>
              <a
                href={`${WA_BASE}?text=I want to buy the ${activeTab === 'jaiib' ? 'JAIIB' : 'CAIIB'} complete book set`}
                target="_blank" rel="noopener noreferrer"
                className="btn-gold flex items-center gap-2 whitespace-nowrap"
              >
                <FaWhatsapp /> Order Set
              </a>
            </div>
          )}

          {/* Book Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {books.map((book, i) => (
              <BookCard key={i} book={book} idx={i} />
            ))}
          </div>

          {/* Ordering Info */}
          <div className="glass-card p-7 mb-8">
            <h3 className="font-heading font-bold text-xl text-gray-900 mb-5 flex items-center gap-2">
              <FaShoppingCart className="text-accent" /> How to Order Books
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { step: '1', title: 'Click Buy Now', desc: 'Tap "Buy Now" on any book or set. You\'ll be connected to our WhatsApp.' },
                { step: '2', title: 'Confirm Your Order', desc: 'Share your name, delivery address, and pin code with our team on WhatsApp.' },
                { step: '3', title: 'Pay & Receive', desc: 'Pay via UPI, bank transfer, or COD. Books dispatched within 1–2 business days.' },
              ].map(s => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white font-bold shrink-0">{s.step}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{s.title}</h4>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-7 text-center text-white">
            <h3 className="font-heading text-2xl font-bold mb-2">Looking for Something Specific?</h3>
            <p className="text-white/80 text-sm mb-5">
              Can't find the book you need? Message us on WhatsApp and we'll source it for you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`${WA_BASE}?text=I am looking for a specific banking book`}
                target="_blank" rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <FaWhatsapp /> Message on WhatsApp
              </a>
              <Link to="/courses" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-2.5 rounded-xl border border-white/30 transition-all text-sm">
                View Online Courses <FaArrowRight size={12} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
