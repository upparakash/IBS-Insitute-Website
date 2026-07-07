import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import {
  FaChevronDown, FaChevronUp, FaWhatsapp, FaMicrophone,
  FaUsers, FaClock, FaCheckCircle, FaArrowRight, FaLightbulb,
} from 'react-icons/fa';

const WA_BASE = 'https://wa.me/919447873644';

const TABS = [
  { id: 'bank-insurance', label: 'Bank & Insurance Exams' },
  { id: 'bank-promotion', label: 'Bank Promotion Exam' },
  { id: 'jibo', label: 'JIBO (SBI)' },
];

function QAAccordion({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden mb-3">
      <button
        className="w-full flex items-start justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors gap-3"
        onClick={() => setOpen(o => !o)}
      >
        <span className="font-semibold text-gray-900 text-sm leading-relaxed">{q}</span>
        {open
          ? <FaChevronUp className="text-accent shrink-0 mt-0.5" size={14} />
          : <FaChevronDown className="text-gray-400 shrink-0 mt-0.5" size={14} />
        }
      </button>
      {open && (
        <div className="px-5 pb-5 bg-blue-50/50 border-t border-gray-50">
          <div className="flex gap-2 mt-4">
            <FaLightbulb className="text-gold shrink-0 mt-0.5" size={15} />
            <div>
              <p className="text-xs font-bold text-gold mb-1 uppercase tracking-wide">Model Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const BANK_INSURANCE_QA = [
  {
    q: 'Why do you want to join the banking sector?',
    a: 'Banking offers a stable, respected career with clear growth opportunities. I am drawn to the sector because it plays a vital role in the national economy — from enabling personal financial goals of citizens to supporting large infrastructure projects. The diverse roles available, competitive salary, job security, and the opportunity to serve millions of customers make banking an ideal career choice for me.',
  },
  {
    q: 'What is NPA and how do banks manage it?',
    a: 'NPA stands for Non-Performing Asset. A loan or advance is classified as NPA when the borrower fails to repay principal or interest for 90 days or more. Banks manage NPAs through: (1) Early Warning Signals — identifying stressed accounts early, (2) Restructuring — restructuring loans for temporarily stressed borrowers, (3) SARFAESI Act — empowering banks to recover dues without court intervention, (4) DRTs — Debt Recovery Tribunals for faster recovery, (5) Asset Reconstruction Companies, and (6) IBC — Insolvency and Bankruptcy Code for large corporate defaults.',
  },
  {
    q: 'Explain the difference between NEFT, RTGS and IMPS.',
    a: 'NEFT (National Electronic Funds Transfer) is a batch-based fund transfer system operating in half-hourly cycles, available 24x7, for any amount. RTGS (Real Time Gross Settlement) settles transactions individually and in real time — used for high-value transactions above ₹2 lakhs, also 24x7. IMPS (Immediate Payment Service) is an instant, real-time interbank transfer available 24x7, 365 days, for amounts up to ₹5 lakhs. RTGS is best for large transactions needing immediate settlement; NEFT for non-urgent transfers; IMPS for quick mobile/internet transfers.',
  },
  {
    q: 'What is the role of RBI in the Indian economy?',
    a: 'The Reserve Bank of India functions as: (1) Monetary Authority — controlling inflation through repo rate, CRR, SLR, and OMOs; (2) Banker to Government — managing government accounts and debt; (3) Banker to Banks — acting as lender of last resort; (4) Regulator of Banks — issuing banking licenses and supervision; (5) Foreign Exchange Manager — maintaining forex reserves; (6) Currency Issuer — sole authority to issue currency notes; (7) Payment System Regulator — overseeing NEFT, RTGS, UPI; and (8) Developmental Role — promoting financial inclusion and rural credit.',
  },
  {
    q: 'What is the difference between Public Sector Banks and Private Sector Banks?',
    a: 'Public Sector Banks (PSBs) are banks where the government holds more than 50% stake — e.g., SBI, PNB, Canara Bank. They focus on social objectives including financial inclusion, priority sector lending, and reaching underserved areas. Private Sector Banks are majority owned by private shareholders — e.g., HDFC Bank, ICICI Bank, Axis Bank. They are known for technology adoption, customer service, and profitability. PSBs have wider rural reach; private banks lead in digital innovation and service quality.',
  },
  {
    q: 'What is Priority Sector Lending?',
    a: 'Priority Sector Lending (PSL) is an RBI directive requiring banks to mandatorily direct a portion of their credit to specified priority sectors. Domestic commercial banks must lend 40% of Adjusted Net Bank Credit (ANBC) to priority sectors. These sectors include Agriculture (18%), MSME, Export Credit, Education, Housing, Social Infrastructure, and Renewable Energy. PSL ensures credit flow to economically weaker sections and promotes inclusive growth. Shortfalls must be deposited with NABARD, NHB, or SIDBI.',
  },
  {
    q: 'What is CASA ratio and why is it important for banks?',
    a: 'CASA ratio (Current Account Savings Account ratio) measures the proportion of deposits held in current and savings accounts relative to total deposits. A higher CASA ratio is beneficial because: CASA deposits carry very low or zero interest cost compared to term deposits, thus lowering the bank\'s cost of funds. Banks with high CASA ratios have better Net Interest Margins (NIM), higher profitability, and lower dependence on expensive bulk deposits. SBI has one of India\'s highest CASA ratios at over 45%.',
  },
  {
    q: 'Where do you see yourself in five years?',
    a: 'In five years, I see myself as a confident banking professional with expertise in branch operations, credit, and customer management. I aim to have cleared JAIIB and CAIIB certifications to enhance my professional banking knowledge. I aspire to take on team leadership responsibilities, contribute to my branch\'s targets, and grow into a managerial role. I am committed to continuous learning and aligning my growth with the bank\'s objectives.',
  },
  {
    q: 'What is Know Your Customer (KYC) and why is it important?',
    a: 'KYC (Know Your Customer) is a mandatory process through which banks verify the identity and address of their customers before opening accounts or offering services. KYC requirements include: (1) Identity proof — Aadhaar, PAN, Passport; (2) Address proof — Utility bill, Aadhaar; (3) Recent photograph; and (4) PAN for financial transactions. KYC is important to: prevent money laundering and terrorist financing, detect fraudulent accounts, maintain compliance with AML/CFT regulations, and protect the bank from financial crime risk.',
  },
  {
    q: 'What are the major banking sector reforms in India in recent years?',
    a: 'Key banking reforms include: (1) Bank Mergers — 10 PSBs merged into 4 to create stronger banks (2017-2020); (2) Insolvency and Bankruptcy Code 2016 — faster NPA resolution; (3) SARFAESI Amendment — strengthened recovery mechanism; (4) Digital Banking — UPI, IMPS, Account Aggregator framework; (5) Small Finance Banks and Payments Banks — to promote financial inclusion; (6) PCA Framework — early intervention for stressed banks; (7) Basel III norms — stronger capital requirements; and (8) IBC — resolution of large corporate insolvencies.',
  },
];

const BANK_PROMOTION_QA = [
  {
    q: 'What are your key contributions in your current role?',
    a: 'In my current role as [Clerk/Officer], I have consistently exceeded targets in CASA mobilisation, bringing in [X] new accounts. I successfully handled a portfolio of [X] loan accounts with zero NPA. I played a key role in implementing the new CBS upgrade at our branch, training junior staff. I also improved our branch\'s Digital Banking adoption rate by 25% by actively promoting UPI and mobile banking to customers. My CSAT scores have consistently been in the top quartile of our zone.',
  },
  {
    q: 'What is the NPA position of your branch?',
    a: 'Our branch\'s current NPA stands at [X]% of total advances, which is [above/below] the zonal average of [X]%. I have been actively involved in monitoring our watch-listed accounts and initiating Early Warning Signal reports for potentially stressed accounts. We have successfully recovered [₹X lakhs] in the current financial year through personal follow-ups and SARFAESI proceedings on two accounts. Our branch has achieved [X]% NPA reduction compared to last year.',
  },
  {
    q: 'What changes would you make if given branch management responsibility?',
    a: 'My first priority would be to conduct a thorough branch audit — reviewing liability accounts, loan portfolio quality, and regulatory compliance. I would focus on improving staff morale through clear target setting and recognition. For business growth, I would identify local potential — whether trade finance, MSME credit, or CASA — and develop a specific acquisition strategy. I would ensure all regulatory returns are submitted on time and staff are updated on new RBI guidelines through weekly briefings.',
  },
  {
    q: 'How do you handle a dissatisfied customer in banking?',
    a: 'I follow the LEARN framework: Listen — let the customer explain fully without interruption; Empathise — acknowledge their frustration; Apologise — for any inconvenience caused even if the bank is not at fault; Resolve — take immediate action within my authority; and Notify — follow up within the promised time. For unresolved issues I escalate to the Branch Manager immediately. Customer satisfaction is a key banking metric and I treat every complaint as an opportunity to strengthen trust.',
  },
  {
    q: 'What is the priority sector lending target and what is your branch\'s performance?',
    a: 'RBI mandates domestic commercial banks to lend 40% of ANBC to priority sectors. Key sub-targets include Agriculture (18%, of which 10% to small/marginal farmers) and Weaker Sections (12%). Our branch currently has [X]% of advances in priority sectors. We have focused particularly on KCC (Kisan Credit Card) accounts and PM Mudra Yojana loans. We have disbursed [₹X lakhs] under PMAY (housing), [₹X lakhs] under PM SVANidhi, and are working to improve our agri-credit portfolio.',
  },
  {
    q: 'What key banking acts and regulations do you consider critical to know for promotion?',
    a: 'Critical acts for branch management: (1) Banking Regulation Act 1949 — powers, licensing, supervision; (2) RBI Act 1934 — RBI\'s monetary and regulatory functions; (3) SARFAESI Act 2002 — security interest enforcement; (4) FEMA 1999 — foreign exchange; (5) Prevention of Money Laundering Act 2002 — AML compliance; (6) Consumer Protection Act 2019 — redressal framework; (7) Right to Information Act 2005 — transparency obligations; (8) IBC 2016 — insolvency resolution; and (9) Negotiable Instruments Act 1881 — cheques and bills.',
  },
  {
    q: 'How do you assess the creditworthiness of a loan applicant?',
    a: 'I use the 5 Cs of credit evaluation: (1) Character — past repayment history, CIBIL score, references; (2) Capacity — income adequacy, DSCR, cash flows; (3) Capital — own funds invested, net worth; (4) Collateral — security offered against the loan, valuation, liquidity; (5) Conditions — economic conditions, sectoral trends, end-use of funds. I also check for group exposures, related-party transactions, and verify compliance with RBI\'s income recognition and asset classification norms before recommending a credit proposal.',
  },
  {
    q: 'What are the key RBI guidelines you follow in your current branch role?',
    a: 'I regularly comply with: (1) KYC/AML norms — periodic customer due diligence; (2) PSL reporting — quarterly priority sector submissions; (3) IRAC norms — asset classification and provisioning; (4) Interest rate guidelines — MCLR-based lending; (5) Cash management — vault limits and currency chest operations; (6) Fraud reporting — STR submissions to FIU within prescribed timelines; (7) PCAF — regular monitoring of flagged accounts; (8) Consumer protection guidelines — grievance redressal timelines; and (9) Safe Deposit Locker guidelines (2023 RBI circular).',
  },
];

const JIBO_QA = [
  {
    q: 'What is JIBO and what is the role of a Junior India Based Officer at SBI?',
    a: 'JIBO stands for Junior India Based Officer — a specialist officer role introduced by SBI for promotion of experienced clerical staff or direct recruitment of specialists. JIBOs handle responsibilities including credit appraisal, trade finance, forex operations, priority sector monitoring, or digital banking implementation at branch/regional level. The role bridges operational experience with officer-level accountability, and offers a fast-track to Scale II within 2–3 years of performance.',
  },
  {
    q: 'What is your understanding of SBI\'s digital transformation strategy?',
    a: 'SBI\'s digital transformation is centered around three pillars: (1) YONO (You Only Need One) — India\'s largest banking super-app with over 7 crore registered users for banking, lending, insurance, and investments; (2) API Banking — enabling corporate clients to integrate banking services into their own systems; (3) SBI YONO Business — dedicated platform for MSME banking. SBI has also invested in AI-driven credit decisioning, digital account opening with Video KYC, and leads India\'s UPI transaction volumes among public sector banks.',
  },
  {
    q: 'How would you handle a complex trade finance transaction as a JIBO?',
    a: 'For a trade finance transaction — say a Letter of Credit — my approach would be: (1) Verify the creditworthiness of the applicant, existing facilities, and collateral; (2) Check compliance with FEMA, UCPDC guidelines (UCP 600), and RBI\'s foreign trade guidelines; (3) Ensure pre-shipment and post-shipment documents are in order; (4) Coordinate with the correspondent bank for LC confirmation if needed; (5) Monitor drawdown and ensure proceeds are credited within RBI-prescribed timelines; (6) File e-BRC and report to EDPMS. I would also ensure hedging options are explained to the customer to manage forex risk.',
  },
  {
    q: 'Tell us about SBI\'s financial performance and your awareness of its operations.',
    a: 'SBI is India\'s largest public sector bank with total assets exceeding ₹70 lakh crore. In FY 2025-26, SBI reported a net profit of over ₹70,000 crore, maintaining its position as the most profitable PSB in India. Its CASA ratio stands at approximately 47%. SBI has the largest branch network in India with over 22,000 branches and 60,000+ ATMs. It leads in home loan disbursements, MSME credit, and agri-credit. SBI\'s gross NPA has improved significantly to below 2.5%, reflecting strong recovery and credit discipline.',
  },
  {
    q: 'What is your approach to achieving branch targets without compromising compliance?',
    a: 'I believe targets and compliance are complementary, not conflicting. My approach: (1) Understand the regulatory boundaries first — what products can be sold to which segments, what documentation is needed; (2) Build a pipeline of qualified leads rather than pushing products to unsuitable customers; (3) Use data from CBS to identify cross-sell opportunities within existing customers — reducing acquisition cost; (4) Ensure all staff are trained on latest RBI consumer protection guidelines; (5) Report any mis-selling risk to management immediately. Sustainable targets are built on trust, not shortcuts.',
  },
  {
    q: 'Why should SBI select you as a JIBO over other candidates?',
    a: 'I bring [X years] of hands-on branch banking experience, which means I understand both the operational and customer-facing realities of banking. I have cleared JAIIB, demonstrating my commitment to professional development. I have a track record of [CASA mobilisation/NPA recovery/digital adoption] that directly contributes to branch profitability. I am already familiar with SBI\'s internal systems, culture, and compliance framework. My goal is not just a promotion but to take on greater accountability for business and team outcomes — and JIBO is exactly the platform I need for that.',
  },
  {
    q: 'What is YONO and how does it benefit SBI customers?',
    a: 'YONO (You Only Need One) is SBI\'s integrated digital banking platform that offers a single interface for banking, lending, insurance, investments, shopping, and lifestyle services. Key benefits for customers: (1) Instant account opening with Video KYC; (2) Pre-approved personal, auto, and home loans disbursed in minutes; (3) Mutual fund and insurance purchases without branch visit; (4) YONO Pay — UPI and contactless NFC payments; (5) Personalised offers and cashback; (6) 24x7 self-service with chatbot support. YONO has over 7 crore registered users and processes millions of transactions daily.',
  },
  {
    q: 'How would you manage a team of clerks as a newly promoted JIBO?',
    a: 'As a first-time officer leading a team, I would: (1) Hold a team meeting on day one to understand each member\'s strengths, challenges, and aspirations; (2) Set clear, fair, measurable targets aligned with branch goals; (3) Lead by example — being the most knowledgeable and most customer-focused person in the room; (4) Create a weekly review mechanism to track progress without micromanaging; (5) Celebrate achievements publicly and address underperformance privately; (6) Encourage team members to pursue JAIIB/CAIIB certifications; (7) Ensure a psychologically safe environment where staff can escalate issues without fear.',
  },
];

const SECTION_META = {
  'bank-insurance': {
    title: 'Bank & Insurance Exam Interview',
    format: 'Panel interview with 3–5 senior officers/external members',
    duration: '15–25 minutes',
    panel: '3 to 5 panellists including a banker, HR representative, and domain expert',
    topics: [
      'Banking Awareness (RBI policies, schemes, current affairs)',
      'Current economic & financial news (last 3 months)',
      'Why banking — motivation and career goals',
      'Basic banking knowledge — NPA, CASA, priority sector',
      'Situational & behavioural questions',
      'Academic background and general knowledge',
    ],
    qa: BANK_INSURANCE_QA,
  },
  'bank-promotion': {
    title: 'Bank Promotion Exam Interview',
    format: 'In-house panel of senior branch/zonal officers evaluating existing staff',
    duration: '20–35 minutes',
    panel: '3–4 senior officers including Branch Manager, Regional Head representative',
    topics: [
      'Branch performance — CASA, advances, NPA data',
      'RBI circulars and regulatory updates (last 6 months)',
      'Banking acts and compliance knowledge',
      'Credit appraisal and risk management',
      'Team management and leadership approach',
      'Technology and digital banking at branch level',
    ],
    qa: BANK_PROMOTION_QA,
  },
  jibo: {
    title: 'SBI JIBO Interview',
    format: 'Structured panel interview by SBI Circle/Zonal HR and senior DGM/GM',
    duration: '25–40 minutes',
    panel: '4–5 panellists: HR, DGM/GM, Subject Expert, external member',
    topics: [
      'SBI operations, financials, and digital transformation (YONO)',
      'Trade finance, forex, and credit operations',
      'Branch target achievement and banking technology',
      'Leadership and team management',
      'RBI regulations and SBI policies',
      'Career motivation and vision for the JIBO role',
    ],
    qa: JIBO_QA,
  },
};

export default function InterviewPage() {
  const [activeTab, setActiveTab] = useState('bank-insurance');
  const section = SECTION_META[activeTab];

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
            <span className="text-white font-medium">Interview Preparation</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
              <FaMicrophone size={24} className="text-white" />
            </div>
            <div>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white">Interview Preparation</h1>
              <p className="text-white/80 mt-1">Expert guidance for banking interviews — questions, answers & strategies</p>
            </div>
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
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-2">{section.title}</h2>
          <p className="text-gray-500 mb-8">Prepare for your interview with expert tips and model answers</p>

          {/* Interview Format */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { icon: <FaUsers size={20} className="text-accent" />, title: 'Interview Format', value: section.format },
              { icon: <FaClock size={20} className="text-gold" />, title: 'Duration', value: section.duration },
              { icon: <FaMicrophone size={20} className="text-success" />, title: 'Panel Composition', value: section.panel },
            ].map(card => (
              <div key={card.title} className="glass-card p-5 flex gap-4">
                <div className="w-11 h-11 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900 text-sm mb-1">{card.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Topics */}
          <div className="glass-card p-7 mb-10">
            <h3 className="font-heading font-bold text-xl text-gray-900 mb-5 flex items-center gap-2">
              <FaCheckCircle className="text-success" size={18} /> Key Topics to Prepare
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {section.topics.map((topic, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <div className="w-6 h-6 gradient-primary rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">{i + 1}</div>
                  {topic}
                </div>
              ))}
            </div>
          </div>

          {/* Q&A Section */}
          <div className="mb-10">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">
              Common Interview Questions & Model Answers
            </h3>
            {section.qa.map((item, i) => (
              <QAAccordion key={i} q={`Q${i + 1}. ${item.q}`} a={item.a} />
            ))}
          </div>

          {/* IBS Interview Coaching CTA */}
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 lg:p-10 relative overflow-hidden text-white">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-gold text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">IBS Interview Coaching</span>
                <h3 className="font-heading text-3xl font-bold mb-4">Ace Your Banking Interview with Expert Mentorship</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Our interview coaching program is conducted by retired banking professionals who have themselves sat on interview panels. Get personalised mock interviews, GD sessions, and feedback on your answers.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    '1-on-1 Mock Interview Sessions',
                    'Group Discussion Training',
                    'Banking Awareness Quick Revision',
                    'Personality Development Tips',
                    'Body Language & Communication',
                    'Current Affairs for Interview',
                  ].map(f => (
                    <div key={f} className="flex items-start gap-2 text-white/90 text-sm">
                      <FaCheckCircle className="text-gold shrink-0 mt-0.5" size={12} /> {f}
                    </div>
                  ))}
                </div>
                <div className="text-2xl font-heading font-bold mb-1">₹999 <span className="text-lg font-normal text-white/60 line-through">₹1,999</span></div>
                <p className="text-white/60 text-sm">2-week program | Online Mode | Ex-banker panel</p>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  to="/courses/bank-interview"
                  className="flex items-center justify-center gap-2 btn-gold py-4 text-base rounded-xl"
                >
                  Enroll in Interview Coaching <FaArrowRight />
                </Link>
                <a
                  href={`${WA_BASE}?text=I want to join IBS Interview Preparation program`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold py-4 rounded-xl border border-white/30 transition-all"
                >
                  <FaWhatsapp size={18} /> Chat on WhatsApp
                </a>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-white/80 text-xs">Call us directly</p>
                  <a href="tel:+919447873644" className="text-white font-bold text-lg">+91-944 787 3644</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
