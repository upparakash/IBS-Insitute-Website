import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import {
  FaExternalLinkAlt, FaDownload, FaWhatsapp, FaFileAlt,
  FaNewspaper, FaQuestionCircle, FaFilePdf, FaTag, FaCalendarAlt,
} from 'react-icons/fa';

const WA_BASE = 'https://wa.me/919447873644';
const RBI_SITE = 'https://rbi.org.in';

const TABS = [
  { id: 'circulars', label: 'RBI Circulars', icon: <FaFileAlt /> },
  { id: 'current-affairs', label: 'Current Affairs', icon: <FaNewspaper /> },
  { id: 'pyq', label: 'Previous Year Questions', icon: <FaQuestionCircle /> },
  { id: 'pdfs', label: 'Free PDFs', icon: <FaFilePdf /> },
];

const RBI_CIRCULARS = [
  { id: 1, title: 'Master Direction – Priority Sector Lending (Updated 2026)', date: 'June 10, 2026', category: 'Regulatory', ref: 'RBI/2026-27/34 FIDD.CO.PSL.BC.No.1/04.09.01/2026-27' },
  { id: 2, title: 'RBI Circular on Digital Lending Guidelines — Revised Framework', date: 'May 28, 2026', category: 'Digital Banking', ref: 'RBI/2026-27/29 DOR.CRE.REC.66/21.07.001/2026-27' },
  { id: 3, title: 'Prompt Corrective Action (PCA) Framework for Banks — 2026 Update', date: 'May 15, 2026', category: 'Regulatory', ref: 'RBI/2025-26/198 DOR.MON.REC.108/21.04.048/2025-26' },
  { id: 4, title: 'Monetary Policy Statement 2026-27 — June MPC Meeting Outcome', date: 'June 7, 2026', category: 'Monetary Policy', ref: 'RBI/2026-27/27 MPD/SFC/2026-27' },
  { id: 5, title: 'Guidelines on Interest Rate Risk in Banking Book (IRRBB) — 2026', date: 'April 30, 2026', category: 'Regulatory', ref: 'RBI/2025-26/185 DOR.CAP.REC.98/09.18.201/2025-26' },
  { id: 6, title: 'Master Circular — KYC Directions 2016 (Updated April 2026)', date: 'April 15, 2026', category: 'Regulatory', ref: 'RBI/2025-26/170 DOR.AML.REC.87/14.01.001/2025-26' },
  { id: 7, title: 'RBI Framework for Acceptance of Green Deposits', date: 'April 5, 2026', category: 'Regulatory', ref: 'RBI/2025-26/156 DOR.CRE.REC.77/21.07.001/2025-26' },
  { id: 8, title: 'Circular on UPI Payment Limits — Enhancement for P2P Transactions', date: 'March 20, 2026', category: 'Digital Banking', ref: 'RBI/2025-26/145 CO.DPSS.POLC.No.S-724/02.14.003/2025-26' },
  { id: 9, title: 'Master Direction on Credit Card and Debit Card Operations (2026)', date: 'March 10, 2026', category: 'Digital Banking', ref: 'RBI/2025-26/138 CO.DPSS.POLC.No.S-688/02.14.003/2025-26' },
  { id: 10, title: 'Revised Guidelines on MSME Restructuring and Credit Support 2026', date: 'February 25, 2026', category: 'Credit', ref: 'RBI/2025-26/125 DOR.STR.REC.60/21.04.048/2025-26' },
  { id: 11, title: 'Liquidity Coverage Ratio (LCR) — Amendment Circular 2026', date: 'February 12, 2026', category: 'Regulatory', ref: 'RBI/2025-26/110 DOR.LRG.REC.53/21.04.098/2025-26' },
  { id: 12, title: 'Foreign Exchange Management (Cross Border Mergers) (Amendment) Regulations 2026', date: 'January 28, 2026', category: 'Regulatory', ref: 'RBI/2025-26/98 A.P.(DIR Series) Circular No.14' },
];

const CATEGORY_COLORS = {
  'Monetary Policy': 'bg-blue-100 text-blue-700',
  'Regulatory': 'bg-purple-100 text-purple-700',
  'Digital Banking': 'bg-teal-100 text-teal-700',
  'Credit': 'bg-green-100 text-green-700',
};

const CURRENT_AFFAIRS = [
  { id: 1, headline: 'RBI keeps repo rate unchanged at 6.50% in June 2026 MPC meeting', date: 'June 7, 2026', desc: 'The Monetary Policy Committee voted 4-2 to hold the repo rate steady at 6.50%, maintaining an accommodative stance amid controlled inflation.', tag: 'Monetary Policy' },
  { id: 2, headline: 'SBI Q4 2026 net profit rises 18% to ₹18,432 crore', date: 'June 5, 2026', desc: 'State Bank of India reported its strongest-ever quarterly profit driven by lower provisions and healthy loan growth in retail and MSME segments.', tag: 'Bank Results' },
  { id: 3, headline: 'HDFC Bank surpasses ₹25 lakh crore in total assets — first Indian bank', date: 'June 3, 2026', desc: 'HDFC Bank crossed the ₹25 lakh crore total asset milestone, making it the first Indian private bank to achieve this feat.', tag: 'Banking Milestone' },
  { id: 4, headline: 'India\'s UPI transactions cross 15 billion mark in May 2026', date: 'June 1, 2026', desc: 'UPI recorded 15.04 billion transactions worth ₹20.45 lakh crore in May 2026, reflecting continued dominance in digital payments.', tag: 'Digital Payments' },
  { id: 5, headline: 'Finance Minister unveils ₹1.2 lakh crore MSME credit guarantee scheme', date: 'May 28, 2026', desc: 'The new MSME Credit Guarantee Scheme 2026 aims to facilitate collateral-free loans of up to ₹2 crore for small enterprises.', tag: 'Government Scheme' },
  { id: 6, headline: 'Sanjay Malhotra announces RBI\'s new Inclusive Finance Framework 2026', date: 'May 25, 2026', desc: 'RBI Governor Sanjay Malhotra unveiled the 2026 framework to extend banking access to underserved rural populations through BCs and digital channels.', tag: 'Financial Inclusion' },
  { id: 7, headline: 'IBPS announces 11,500+ vacancies for PO, Clerk and RRB 2026', date: 'May 22, 2026', desc: 'IBPS released the annual calendar for 2026-27 with 11,500+ combined vacancies across PO, Clerk, RRB Officer, and RRB Assistant exams.', tag: 'Exam Notification' },
  { id: 8, headline: 'India\'s GDP grows at 7.4% in Q4 FY 2025-26 — faster than expected', date: 'May 20, 2026', desc: 'India\'s GDP growth accelerated to 7.4% in the fourth quarter of FY 2025-26, driven by manufacturing and private consumption.', tag: 'Economy' },
  { id: 9, headline: 'Canara Bank launches AI-powered loan underwriting system', date: 'May 18, 2026', desc: 'Canara Bank partnered with a fintech firm to deploy an AI underwriting platform that reduces MSME loan turnaround to under 10 minutes.', tag: 'Technology' },
  { id: 10, headline: 'LIC reports record new business premium of ₹4.82 lakh crore in FY26', date: 'May 15, 2026', desc: 'Life Insurance Corporation of India set a new record with first-year premium collections rising 22% in FY 2025-26, capturing 62% market share.', tag: 'Insurance' },
  { id: 11, headline: 'RBI issues revised guidelines for Account Aggregator framework', date: 'May 12, 2026', desc: 'Revised AA guidelines expand data-sharing scope to include MF and insurance data, facilitating better credit underwriting by lenders.', tag: 'Regulatory' },
  { id: 12, headline: 'SEBI approves T+0 instant settlement for all listed securities from August 2026', date: 'May 10, 2026', desc: 'SEBI issued circular mandating T+0 optional same-day settlement for all listed equities, enhancing liquidity for investors.', tag: 'Capital Markets' },
  { id: 13, headline: 'Union Bank of India completes migration of Andhra Bank core banking system', date: 'May 8, 2026', desc: 'Union Bank completed the five-year integration of merged entities, now operating on a single FINACLE platform across 9,500+ branches.', tag: 'Banking Operations' },
  { id: 14, headline: 'India Post Payments Bank crosses 10 crore active accounts milestone', date: 'May 5, 2026', desc: 'IPPB crossed 10 crore active accounts, making it the third largest payments bank in India, driven by rural Jan Dhan outreach.', tag: 'Financial Inclusion' },
  { id: 15, headline: 'RBI imposes ₹2 crore penalty on Axis Bank for KYC non-compliance', date: 'May 3, 2026', desc: 'Reserve Bank of India penalised Axis Bank for deficiencies in KYC/AML processes and failure to comply with certain regulatory directions.', tag: 'Regulatory' },
];

const CA_TAG_COLORS = {
  'Monetary Policy': 'bg-blue-100 text-blue-700',
  'Bank Results': 'bg-green-100 text-green-700',
  'Banking Milestone': 'bg-purple-100 text-purple-700',
  'Digital Payments': 'bg-teal-100 text-teal-700',
  'Government Scheme': 'bg-orange-100 text-orange-700',
  'Financial Inclusion': 'bg-indigo-100 text-indigo-700',
  'Exam Notification': 'bg-rose-100 text-rose-700',
  'Economy': 'bg-yellow-100 text-yellow-700',
  'Technology': 'bg-cyan-100 text-cyan-700',
  'Insurance': 'bg-pink-100 text-pink-700',
  'Regulatory': 'bg-purple-100 text-purple-700',
  'Capital Markets': 'bg-lime-100 text-lime-700',
  'Banking Operations': 'bg-gray-100 text-gray-700',
};

const PYQ_PAPERS = [
  { exam: 'JAIIB 2025', year: '2025', papers: 'IE&IFS, PPB, AFM, RBWM (All 4 Papers)', color: 'from-blue-500 to-blue-700' },
  { exam: 'JAIIB 2024', year: '2024', papers: 'IE&IFS, PPB, AFM, RBWM (All 4 Papers)', color: 'from-blue-400 to-blue-600' },
  { exam: 'CAIIB 2025', year: '2025', papers: 'ABM, BFM, BRBL, Elective (All 4 Papers)', color: 'from-purple-500 to-purple-700' },
  { exam: 'CAIIB 2024', year: '2024', papers: 'ABM, BFM, BRBL, Elective (All 4 Papers)', color: 'from-purple-400 to-purple-600' },
  { exam: 'SBI PO Prelims 2025', year: '2025', papers: 'English, Quantitative Aptitude, Reasoning', color: 'from-green-500 to-green-700' },
  { exam: 'SBI PO Mains 2025', year: '2025', papers: 'All Sections + Descriptive Paper', color: 'from-green-600 to-green-800' },
  { exam: 'IBPS PO 2025', year: '2025', papers: 'Prelims + Mains (All Sections)', color: 'from-indigo-500 to-indigo-700' },
  { exam: 'RBI Grade B 2025', year: '2025', papers: 'Phase I + Phase II (ESI, FM, English)', color: 'from-amber-500 to-amber-700' },
  { exam: 'SSC CGL 2025 Tier I', year: '2025', papers: 'GA, Quant, Reasoning, English', color: 'from-red-500 to-red-700' },
  { exam: 'RBI Assistant 2025', year: '2025', papers: 'Prelims + Mains (All Papers)', color: 'from-teal-500 to-teal-700' },
];

const FREE_PDFS = [
  {
    category: 'JAIIB Study Notes',
    items: [
      { title: 'JAIIB — IE&IFS Complete Notes 2026', pages: '180 pages', size: '4.2 MB' },
      { title: 'JAIIB — PPB (Principles & Practices of Banking) Notes', pages: '210 pages', size: '5.1 MB' },
      { title: 'JAIIB — AFM (Accounting & Finance) Notes', pages: '165 pages', size: '3.8 MB' },
      { title: 'JAIIB — RBWM (Retail Banking & Wealth Management) Notes', pages: '145 pages', size: '3.5 MB' },
    ],
    color: 'from-blue-500 to-blue-700',
  },
  {
    category: 'CAIIB Study Notes',
    items: [
      { title: 'CAIIB — ABM (Advanced Bank Management) Notes', pages: '225 pages', size: '5.8 MB' },
      { title: 'CAIIB — BFM (Bank Financial Management) Notes', pages: '195 pages', size: '4.6 MB' },
      { title: 'CAIIB — BRBL (Banking Regulation & Business Laws) Notes', pages: '175 pages', size: '4.1 MB' },
      { title: 'CAIIB — Elective Paper Study Notes 2026', pages: '130 pages', size: '3.2 MB' },
    ],
    color: 'from-purple-500 to-purple-700',
  },
  {
    category: 'General Banking Resources',
    items: [
      { title: 'Banking Awareness Handbook 2026 — Complete Guide', pages: '320 pages', size: '7.5 MB' },
      { title: 'Current Affairs Monthly — June 2026', pages: '95 pages', size: '2.8 MB' },
      { title: 'RBI Guidelines Summary 2026 — All Key Circulars', pages: '140 pages', size: '3.6 MB' },
      { title: 'Important Banking Acts & Laws PDF — Updated 2026', pages: '110 pages', size: '3.0 MB' },
    ],
    color: 'from-teal-500 to-teal-700',
  },
];

export default function FreeResourcesPage() {
  const [activeTab, setActiveTab] = useState('circulars');

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
            <span className="text-white font-medium">Free Resources</span>
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">Free Resources</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            RBI Circulars, Current Affairs, Previous Year Papers, and Free Study PDFs — all in one place for banking exam aspirants.
          </p>
        </div>
      </section>

      {/* Tab Bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
        <div className="container-custom">
          <div className="flex overflow-x-auto gap-1 py-2">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'gradient-primary text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="container-custom">

          {/* ── RBI CIRCULARS ── */}
          {activeTab === 'circulars' && (
            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900">RBI Circulars & Master Directions</h2>
                  <p className="text-gray-500 text-sm mt-1">Latest regulatory circulars from Reserve Bank of India (2025–2026)</p>
                </div>
                <a href={RBI_SITE} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-accent font-semibold hover:underline">
                  Visit RBI Website <FaExternalLinkAlt size={11} />
                </a>
              </div>

              <div className="grid gap-4">
                {RBI_CIRCULARS.map(c => (
                  <div key={c.id} className="glass-card p-5 hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${CATEGORY_COLORS[c.category] || 'bg-gray-100 text-gray-700'}`}>
                            {c.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <FaCalendarAlt size={10} /> {c.date}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-base leading-snug">{c.title}</h3>
                        <p className="text-xs text-gray-400 font-mono">{c.ref}</p>
                      </div>
                      <a
                        href={RBI_SITE}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm bg-accent/10 hover:bg-accent text-accent hover:text-white font-semibold px-4 py-2 rounded-xl transition-all whitespace-nowrap"
                      >
                        <FaExternalLinkAlt size={11} /> View Circular
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center glass-card p-6">
                <p className="text-gray-600 mb-3">Want all RBI circulars compiled and explained for exam preparation?</p>
                <a
                  href={`${WA_BASE}?text=Please send me the RBI Circulars Study Notes for 2026`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2"
                >
                  <FaWhatsapp /> Get Compiled Notes on WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* ── CURRENT AFFAIRS ── */}
          {activeTab === 'current-affairs' && (
            <div>
              <div className="mb-6">
                <h2 className="font-heading text-2xl font-bold text-gray-900">Banking Current Affairs</h2>
                <p className="text-gray-500 text-sm mt-1">May–June 2026 — Important banking & economy updates for your exams</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {CURRENT_AFFAIRS.map(item => (
                  <div key={item.id} className="glass-card p-5 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${CA_TAG_COLORS[item.tag] || 'bg-gray-100 text-gray-700'}`}>
                        <FaTag className="inline mr-1" size={9} />{item.tag}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <FaCalendarAlt size={10} /> {item.date}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 leading-snug text-sm">{item.headline}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-primary to-accent rounded-2xl p-7 text-center text-white">
                <h3 className="font-heading text-xl font-bold mb-2">Get Daily Current Affairs for Free</h3>
                <p className="text-white/80 text-sm mb-5">Join our WhatsApp group to receive daily banking current affairs, RBI updates, and exam notifications.</p>
                <a
                  href={`${WA_BASE}?text=Please add me to the IBS Daily Current Affairs group`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2"
                >
                  <FaWhatsapp /> Join WhatsApp Group
                </a>
              </div>
            </div>
          )}

          {/* ── PREVIOUS YEAR QUESTIONS ── */}
          {activeTab === 'pyq' && (
            <div>
              <div className="mb-6">
                <h2 className="font-heading text-2xl font-bold text-gray-900">Previous Year Question Papers</h2>
                <p className="text-gray-500 text-sm mt-1">Download solved PYQs for JAIIB, CAIIB, Bank PO, RBI and SSC exams</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {PYQ_PAPERS.map((paper, i) => (
                  <div key={i} className="glass-card overflow-hidden hover:shadow-xl transition-shadow">
                    <div className={`bg-gradient-to-br ${paper.color} p-5 text-white`}>
                      <div className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full inline-block mb-3">{paper.year}</div>
                      <h3 className="font-heading font-bold text-lg leading-tight">{paper.exam}</h3>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-gray-600 mb-4">{paper.papers}</p>
                      <a
                        href={`${WA_BASE}?text=I want PYQ papers for ${paper.exam}`}
                        target="_blank" rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-accent/10 hover:bg-accent text-accent hover:text-white font-semibold py-2.5 rounded-xl transition-all text-sm"
                      >
                        <FaDownload size={13} /> Download Papers
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 glass-card p-6 text-center border-l-4 border-gold">
                <FaWhatsapp size={28} className="text-green-500 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-gray-900 mb-2">Can't find what you need?</h3>
                <p className="text-gray-600 text-sm mb-4">Contact us on WhatsApp and we'll share the specific paper you're looking for — free of charge.</p>
                <a
                  href={`${WA_BASE}?text=Please share PYQ papers for banking exams`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2"
                >
                  <FaWhatsapp /> Message on WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* ── FREE PDFs ── */}
          {activeTab === 'pdfs' && (
            <div>
              <div className="mb-6">
                <h2 className="font-heading text-2xl font-bold text-gray-900">Free Study PDFs</h2>
                <p className="text-gray-500 text-sm mt-1">Download comprehensive study materials for JAIIB, CAIIB, and banking exams</p>
              </div>

              {FREE_PDFS.map((group, gi) => (
                <div key={gi} className="mb-8">
                  <div className={`bg-gradient-to-r ${group.color} text-white px-6 py-4 rounded-t-2xl`}>
                    <h3 className="font-heading font-bold text-lg">{group.category}</h3>
                  </div>
                  <div className="bg-white rounded-b-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
                    {group.items.map((item, ii) => (
                      <div key={ii} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors gap-4 flex-wrap">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center shrink-0`}>
                            <FaFilePdf className="text-white" size={16} />
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-gray-900 text-sm truncate">{item.title}</p>
                            <p className="text-xs text-gray-400">{item.pages} &nbsp;|&nbsp; {item.size}</p>
                          </div>
                        </div>
                        <a
                          href={`${WA_BASE}?text=Please send me the PDF: ${item.title}`}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm bg-success/10 hover:bg-success text-success hover:text-white font-semibold px-4 py-2 rounded-xl transition-all whitespace-nowrap"
                        >
                          <FaDownload size={12} /> Download
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-center text-white">
                <h3 className="font-heading text-xl font-bold mb-2">Want the Complete Study Package?</h3>
                <p className="text-white/80 text-sm mb-5 max-w-lg mx-auto">
                  Get access to 200+ study PDFs, video lectures, mock tests, and daily current affairs — all in one IBS coaching bundle.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/courses" className="btn-gold inline-flex items-center gap-2">Explore Courses</Link>
                  <a
                    href={`${WA_BASE}?text=Tell me about IBS complete study package`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-2.5 rounded-xl border border-white/30 transition-all text-sm"
                  >
                    <FaWhatsapp /> Chat with Us
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}
