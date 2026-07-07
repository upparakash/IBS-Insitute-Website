export const COURSE_PAGE_DATA = {

  /* ─────────────────────────────────────────────
     1. JAIIB / DB&F
  ───────────────────────────────────────────── */
  'jaiib': {
    slug: 'jaiib',
    name: 'JAIIB / DB&F',
    fullName: 'Junior Associate of the Indian Institute of Bankers / Diploma in Banking & Finance',
    icon: '🏦',
    color: 'from-blue-700 to-blue-900',
    badgeColor: 'bg-gold',
    badge: 'Most Popular',
    fee: '₹9,570',
    originalFee: '₹14,999',
    duration: '3 Months',
    mode: 'Online + Offline',
    nextBatch: 'July 17, 2026',
    rating: 4.8,
    students: 12000,
    examBody: 'Indian Institute of Banking & Finance (IIBF)',
    about:
      'JAIIB is the flagship certification for banking professionals conducted by IIBF. It covers transactional banking proficiency, financial frameworks, legal aspects and digital banking. IBS has trained 12,000+ bankers in JAIIB with a 94% first-attempt pass rate.',
    eligibility:
      'Banking professionals who have completed 2 years of confirmed service in a bank affiliated with IIBF.',
    passingCriteria:
      'Minimum 50 marks out of 100 in each paper, OR minimum 45 in each paper with 50% overall aggregate.',
    attempts: 'Maximum 3 attempts per paper within 2 years from the date of registration.',
    examMode: 'Computer Based Test (CBT) at IIBF authorised centres across India',
    papers: [
      {
        id: 1,
        code: 'IE&IFS',
        name: 'Indian Economy & Indian Financial System',
        questions: 100,
        duration: '120 minutes',
        modules: [
          {
            title: 'Indian Economic Architecture',
            topics: [
              'Indian Economy Overview',
              'Agriculture & Industry Sectors',
              'Money and Banking',
              'Inflation and Monetary Policy',
              'Economic Planning in India',
              'Government Finance and Budget',
              'International Trade and BOP',
            ],
          },
          {
            title: 'Economic Concepts Related to Banking',
            topics: [
              'Demand and Supply',
              'Market Structures',
              'Index Numbers and CPI/WPI',
              'National Income Measurement',
              'Public Finance and Taxation',
              'Economic Reforms Post-1991',
            ],
          },
          {
            title: 'Indian Financial Architecture',
            topics: [
              'Financial System Overview',
              'Banking System in India',
              'Reserve Bank of India Functions',
              'Capital Markets (SEBI)',
              'Money Markets',
              'Insurance Sector (IRDAI)',
              'Pension Sector (PFRDA)',
            ],
          },
          {
            title: 'Financial Products and Services',
            topics: [
              'Retail Banking Products',
              'Corporate Banking Products',
              'Investment Products (MF, Bonds)',
              'Insurance Products',
              'Payment Systems (NEFT, RTGS, UPI)',
              'Fintech and Digital Finance',
            ],
          },
        ],
      },
      {
        id: 2,
        code: 'PPB',
        name: 'Principles & Practices of Banking',
        questions: 100,
        duration: '120 minutes',
        modules: [
          {
            title: 'General Banking Operations',
            topics: [
              'Types of Banks',
              'Banker-Customer Relationship',
              'KYC & AML Guidelines',
              'Deposit Products',
              'PMJDY and Financial Inclusion',
              'Opening and Operating of Accounts',
            ],
          },
          {
            title: 'Functions of Banks',
            topics: [
              'Credit and Loan Products',
              'Priority Sector Lending',
              'NPA Classification and Provisioning',
              'Securities and Collateral',
              'Working Capital Finance',
              'SME and MSME Lending',
            ],
          },
          {
            title: 'Banking Technology',
            topics: [
              'Core Banking Solution (CBS)',
              'Internet Banking & Mobile Banking',
              'Card Payments (Debit/Credit)',
              'RTGS, NEFT, IMPS',
              'NACH and CTS',
              'Cyber Security in Banking',
            ],
          },
          {
            title: 'Ethics in Banks and Financial Institutions',
            topics: [
              'Code of Ethics for Bankers',
              'Governance in Banks',
              'Fair Practices Code',
              'Consumer Protection Act',
              'Banking Ombudsman Scheme',
              'Whistle Blower Policy',
            ],
          },
        ],
      },
      {
        id: 3,
        code: 'AFM',
        name: 'Accounting and Financial Management for Bankers',
        questions: 100,
        duration: '120 minutes',
        modules: [
          {
            title: 'Accounting Principles and Processes',
            topics: [
              'Accounting Standards (Ind AS)',
              'Double Entry System',
              'Trial Balance',
              'Rectification of Errors',
              'Bank Reconciliation Statement',
              'Cash Flow Statements',
            ],
          },
          {
            title: 'Financial Statements and Core Banking Systems',
            topics: [
              'Preparation of P&L Account',
              'Balance Sheet Analysis',
              'Schedule III Format',
              'Segment Reporting',
              'Bank Financial Statements',
              'Accounting in CBS',
            ],
          },
          {
            title: 'Financial Management',
            topics: [
              'Time Value of Money',
              'Capital Budgeting',
              'Cost of Capital (WACC)',
              'Leverage Analysis',
              'Working Capital Management',
              'Dividend Policy',
            ],
          },
          {
            title: 'Taxation and Costing Fundamentals',
            topics: [
              'Income Tax Basics for Banks',
              'GST Impact on Banking',
              'TDS Provisions',
              'Marginal Costing',
              'Standard Costing',
              'Cost Audit',
            ],
          },
        ],
      },
      {
        id: 4,
        code: 'RBWM',
        name: 'Retail Banking and Wealth Management',
        questions: 100,
        duration: '120 minutes',
        modules: [
          {
            title: 'Retail Banking',
            topics: [
              'Retail Banking Overview',
              'Consumer Finance Products',
              'Home Loans and LAP',
              'Auto and Personal Loans',
              'Education Loans',
              'Credit Card Management',
            ],
          },
          {
            title: 'Retail Products and Recovery',
            topics: [
              'Loan Against Securities',
              'Agriculture and Kisan Credit Card',
              'Recovery of NPA (SARFAESI)',
              'DRT and Recovery Agents',
              'Write-off and OTS Policies',
            ],
          },
          {
            title: 'Marketing of Banking Services/Products',
            topics: [
              'Marketing Mix for Banks',
              'Customer Segmentation',
              'CRM in Banking',
              'Digital Marketing for Banks',
              'Bancassurance',
              'Cross-selling Strategies',
            ],
          },
          {
            title: 'Wealth Management',
            topics: [
              'Wealth Management Concepts',
              'Investment Planning',
              'Mutual Funds',
              'Portfolio Management',
              'Tax Planning for HNI',
              'Estate Planning and Will',
            ],
          },
        ],
      },
    ],
    includes: [
      '120+ HD Live + Recorded Sessions',
      'Comprehensive Study Material (4 books)',
      '1,000+ Practice Questions per Paper',
      '5 Full Mock Tests per Paper',
      'Doubt Clearing via WhatsApp & Telegram',
      'IBS Vigyan App Access',
      'Daily Banking Current Affairs',
      'Performance Analytics Dashboard',
      'All 8 Language Support (Hindi, English, Tamil, Telugu, Malayalam, Kannada, Marathi, Bengali)',
      'Course Completion Certificate',
    ],
    highlights: [
      { label: 'Duration', value: '3 Months' },
      { label: 'Mode', value: 'Online + Offline' },
      { label: 'Papers', value: '4 Papers (IE&IFS, PPB, AFM, RBWM)' },
      { label: 'Language', value: 'English + 7 Regional Languages' },
      { label: 'Students Enrolled', value: '12,000+' },
      { label: 'Pass Rate', value: '94%+' },
      { label: 'Exam Body', value: 'IIBF' },
      { label: 'Batch Mode', value: 'Evening Batch (7–9 PM)' },
    ],
    faqs: [
      {
        q: 'What is JAIIB?',
        a: 'JAIIB (Junior Associate of the Indian Institute of Bankers) is a flagship certification exam conducted by IIBF for bank employees. It tests transactional banking proficiency across 4 papers covering economy, banking practices, accounting, and retail banking.',
      },
      {
        q: 'Who is eligible for JAIIB?',
        a: 'Any bank employee who is a member of IIBF and has completed 2 years of confirmed service in a bank is eligible to appear for JAIIB.',
      },
      {
        q: 'How many attempts are allowed?',
        a: 'A candidate gets a maximum of 3 attempts per paper within 2 years from the date of registration. After 2 years, they need to re-register.',
      },
      {
        q: 'What is the JAIIB passing criteria?',
        a: 'You need minimum 50 marks out of 100 in each paper. Alternatively, if you score 45+ in all papers with an overall aggregate of 50%, you will be considered passed.',
      },
      {
        q: 'What is the fee for IBS JAIIB coaching?',
        a: 'IBS offers JAIIB coaching starting at ₹9,570 (inclusive of all 4 papers, live classes, recordings, study material, and mock tests). EMI options are available.',
      },
      {
        q: 'Is JAIIB coaching available in regional languages?',
        a: 'Yes! IBS offers JAIIB coaching in 8 languages: Hindi, English, Tamil, Telugu, Malayalam, Kannada, Marathi, and Bengali.',
      },
    ],
    testimonials: [
      {
        name: 'Arun Kumar P',
        bank: 'SBI Kerala Circle',
        text: 'Cleared all 4 JAIIB papers in the first attempt. IBS faculty made complex topics crystal clear.',
        score: '186/200',
      },
      {
        name: 'Sreelakshmi R',
        bank: 'Canara Bank, Kayamkulam',
        text: 'Weekend batch was perfect for working bankers. The study material was comprehensive and exam-oriented.',
        score: '179/200',
      },
    ],

    purchaseTypes: [
      {
        id: 'full-course',
        label: 'Full Course',
        subtitle: 'Live + Recorded',
        icon: '🎓',
        price: '₹9,570',
        originalPrice: '₹14,999',
        highlight: 'Most Popular',
        highlightColor: 'bg-gold',
        includes: [
          '120+ HD Live + Recorded Sessions',
          'All 4 Papers (IE&IFS, PPB, AFM, RBWM)',
          'Comprehensive Study Material (4 Books)',
          '1,000+ Practice Questions per Paper',
          '5 Full Mock Tests per Paper',
          'IBS Vigyan App Access',
          'Doubt Clearing via WhatsApp & Telegram',
          '8 Language Support',
        ],
        note: 'Select 1 elective paper out of 5 at the time of buying',
      },
      {
        id: 'recorded-course',
        label: 'Recorded Course',
        subtitle: 'Self-paced',
        icon: '🎥',
        price: '₹8,613',
        originalPrice: '₹12,999',
        highlight: null,
        includes: [
          '120+ Recorded HD Sessions (All 4 Papers)',
          'Comprehensive Study Material (4 Books)',
          '1,000+ Practice Questions per Paper',
          '5 Full Mock Tests per Paper',
          'IBS Vigyan App Access',
          'Doubt Clearing via WhatsApp',
          '8 Language Support',
        ],
      },
      {
        id: 'dlp',
        label: 'DLP',
        subtitle: 'Books + Mock Tests',
        icon: '📦',
        price: '₹4,500',
        originalPrice: '₹7,000',
        highlight: 'Best Value',
        highlightColor: 'bg-green-600',
        includes: [
          '4 JAIIB Study Material Books (Printed)',
          '5 Full Mock Tests per Paper',
          '500+ Practice Questions',
          'PDF Study Notes',
          'IBS Vigyan App Access',
        ],
        note: 'No live/recorded classes — study material + mock tests only',
      },
      {
        id: 'only-books',
        label: 'Only Books',
        subtitle: '4 Printed Books',
        icon: '📚',
        price: '₹2,200',
        originalPrice: '₹3,500',
        highlight: null,
        includes: [
          'IE&IFS Book',
          'PPB Book',
          'AFM Book',
          'RBWM Book',
          'Home delivery available',
        ],
      },
      {
        id: 'individual-subject',
        label: 'Individual Subject',
        subtitle: 'Buy 1–4 Papers',
        icon: '🧩',
        price: 'From ₹2,499',
        originalPrice: null,
        highlight: 'Flexible',
        highlightColor: 'bg-primary',
        includes: [
          'Select 1, 2, 3 or 4 subject(s)',
          'Live + Recorded OR Recorded Only',
          'Subject-specific Mock Tests',
          'Subject Notes PDF',
          'IBS Vigyan App Access',
        ],
        isCustom: true,
        customLabel: 'Customise Your Package',
        papers: ['IE&IFS', 'PPB', 'AFM', 'RBWM'],
      },
    ],
  },

  /* ─────────────────────────────────────────────
     2. CAIIB
  ───────────────────────────────────────────── */
  'caiib': {
    slug: 'caiib',
    name: 'CAIIB',
    fullName: 'Certified Associate of the Indian Institute of Bankers',
    icon: '🏛️',
    color: 'from-purple-700 to-purple-900',
    badgeColor: 'bg-success',
    badge: 'New Batch',
    fee: '₹11,440',
    originalFee: '₹18,999',
    duration: '4 Months',
    mode: 'Online + Offline',
    nextBatch: 'July 20, 2026',
    rating: 4.9,
    students: 8500,
    examBody: 'Indian Institute of Banking & Finance (IIBF)',
    about:
      'CAIIB is an advanced banking certification for officers wanting to demonstrate their expertise in credit, forex, and banking law. Passing CAIIB leads to an automatic annual increment. IBS\'s expert panel of ex-AGMs and General Managers has coached 8,500+ candidates to success.',
    eligibility:
      'Candidates who have passed JAIIB and have been confirmed in service with an IIBF member bank.',
    passingCriteria:
      'Minimum 50 marks out of 100 in each paper, OR minimum 45 in each paper with 50% aggregate across all papers.',
    attempts: 'Maximum 9 attempts within 3 years from the date of first registration.',
    examMode: 'Computer Based Test (CBT) at IIBF authorised centres across India',
    papers: [
      {
        id: 1,
        code: 'ABM',
        name: 'Advanced Bank Management',
        questions: 100,
        duration: '120 minutes',
        modules: [
          {
            title: 'Statistics & Data Analytics',
            topics: [
              'Measures of Central Tendency',
              'Measures of Dispersion',
              'Probability & Normal Distribution',
              'Sampling Theory',
              'Correlation & Regression',
              'Time Series Analysis',
            ],
          },
          {
            title: 'Credit Management',
            topics: [
              'Credit Appraisal Techniques',
              'Working Capital Assessment (Turnover & MPBF)',
              'Project Finance & Term Loans',
              'Credit Rating (Internal & External)',
              'Loan Review Mechanism',
              'Stressed Assets Management',
            ],
          },
          {
            title: 'Human Resource Management',
            topics: [
              'HR Planning and Recruitment',
              'Training & Development in Banks',
              'Performance Appraisal',
              'Motivation Theories',
              'Leadership and Change Management',
              'IR & Labour Laws in Banking',
            ],
          },
          {
            title: 'Risk Management',
            topics: [
              'Types of Risks in Banking',
              'Credit Risk (PD, LGD, EAD)',
              'Market Risk — VaR & Stress Testing',
              'Operational Risk',
              'Liquidity Risk',
              'Basel III Framework & RBI Guidelines',
            ],
          },
        ],
      },
      {
        id: 2,
        code: 'BFM',
        name: 'Bank Financial Management',
        questions: 100,
        duration: '120 minutes',
        modules: [
          {
            title: 'International Banking & Forex',
            topics: [
              'Foreign Exchange Markets',
              'Exchange Rate Mechanisms',
              'Forward Contracts and Hedging',
              'FEMA Provisions',
              'SWIFT and Correspondent Banking',
              'Nostro & Vostro Accounts',
            ],
          },
          {
            title: 'Treasury Management',
            topics: [
              'Treasury Functions in Banks',
              'Money Market Instruments',
              'Government Securities',
              'Repo and Reverse Repo',
              'Call Money Market',
              'Investment Portfolio Management',
            ],
          },
          {
            title: 'Risk Management in Banking',
            topics: [
              'ALM (Asset-Liability Management)',
              'Interest Rate Risk',
              'Duration and Modified Duration',
              'Derivatives — Futures & Options',
              'Currency Swaps & Interest Rate Swaps',
              'RBI ALM Guidelines',
            ],
          },
          {
            title: 'Balance Sheet Management',
            topics: [
              'Bank Balance Sheet Structure',
              'Capital Adequacy (Basel III)',
              'CRR and SLR Requirements',
              'Profitability Ratios for Banks',
              'Net Interest Margin (NIM)',
              'Return on Assets and Equity',
            ],
          },
        ],
      },
      {
        id: 3,
        code: 'BRBL',
        name: 'Banking Regulation and Business Laws',
        questions: 100,
        duration: '120 minutes',
        modules: [
          {
            title: 'Banking Regulation',
            topics: [
              'Banking Regulation Act 1949',
              'RBI Act 1934 — Key Provisions',
              'Negotiable Instruments Act 1881',
              'Prevention of Money Laundering Act (PMLA)',
              'FEMA 1999',
              'Information Technology Act 2000',
            ],
          },
          {
            title: 'Commercial Laws for Bankers',
            topics: [
              'Indian Contract Act 1872',
              'Sale of Goods Act',
              'Transfer of Property Act',
              'Companies Act — Key Provisions',
              'Insolvency and Bankruptcy Code (IBC)',
              'Partnership Act and LLP Act',
            ],
          },
          {
            title: 'Laws on Recovery',
            topics: [
              'SARFAESI Act 2002',
              'DRT and DRAT Provisions',
              'Lok Adalat and NPA Recovery',
              'Ombudsman Scheme for Banks',
              'Consumer Protection Act 2019',
              'CIBIL and Credit Information Companies Act',
            ],
          },
          {
            title: 'Emerging Business Issues',
            topics: [
              'Right to Information Act',
              'Priority Sector Lending Regulations',
              'Financial Inclusion — RBI Guidelines',
              'Corporate Governance in Banks',
              'Anti-Money Laundering (AML) Compliance',
              'KYC Master Direction 2016',
            ],
          },
        ],
      },
      {
        id: 4,
        code: 'Elective',
        name: 'Elective Paper (Choose One)',
        questions: 100,
        duration: '120 minutes',
        modules: [
          {
            title: 'Rural Banking (Elective Option A)',
            topics: [
              'Importance of Rural Banking',
              'Agricultural Finance — KCC, RIDF',
              'Microfinance and SHGs',
              'Government Rural Schemes (PMAY, PM-KISAN)',
              'Land Revenue Records & Charge Creation',
              'Regional Rural Banks (RRBs)',
            ],
          },
          {
            title: 'Co-operative Banking (Elective Option B)',
            topics: [
              'Structure of Cooperative Banks in India',
              'State Cooperative Banks & NABARD',
              'Urban Cooperative Banks — RBI Regulation',
              'PACS — Primary Agricultural Credit Societies',
              'Issues in Cooperative Banking',
              'Recent Reforms in Cooperative Sector',
            ],
          },
          {
            title: 'Financial Advising (Elective Option C)',
            topics: [
              'Financial Planning Process',
              'Mutual Fund Distribution',
              'Insurance Advising (Life & General)',
              'Taxation in Wealth Management',
              'Estate Planning',
              'SEBI Investment Adviser Regulations',
            ],
          },
          {
            title: 'Human Resources Management (Elective Option D)',
            topics: [
              'Strategic HRM',
              'Talent Acquisition in Banks',
              'Learning & Development',
              'Performance Management System',
              'Compensation & Benefits',
              'Employee Relations & Disciplinary Proceedings',
            ],
          },
        ],
      },
    ],
    includes: [
      '150+ HD Live + Recorded Sessions',
      'Comprehensive Study Material (4 books)',
      '1,200+ Practice Questions per Paper',
      '6 Full Mock Tests per Paper',
      'Dedicated Doubt Clearing (WhatsApp, Telegram, Live)',
      'IBS Vigyan App Access',
      'Case-Study Worksheets for ABM',
      'Forex & Treasury Practice Sets for BFM',
      'Performance Analytics Dashboard',
      'All 8 Language Support',
      'Course Completion Certificate',
      'Annual Increment Documentation Guidance',
    ],
    highlights: [
      { label: 'Duration', value: '4 Months' },
      { label: 'Mode', value: 'Online + Offline' },
      { label: 'Papers', value: '4 Papers (ABM, BFM, BRBL + Elective)' },
      { label: 'Language', value: 'English + 7 Regional Languages' },
      { label: 'Students Enrolled', value: '8,500+' },
      { label: 'Pass Rate', value: '91%+' },
      { label: 'Exam Body', value: 'IIBF' },
      { label: 'Batch Mode', value: 'Evening Batch (6:30–8:30 PM)' },
    ],
    faqs: [
      {
        q: 'What is CAIIB?',
        a: 'CAIIB (Certified Associate of the Indian Institute of Bankers) is an advanced professional certification conducted by IIBF for officers in banks. Passing CAIIB entitles a banker to an automatic annual increment as per IBA guidelines.',
      },
      {
        q: 'What is the eligibility for CAIIB?',
        a: 'A candidate must have passed JAIIB and must be a confirmed employee (member of IIBF) of a scheduled bank to register for CAIIB.',
      },
      {
        q: 'How many attempts are allowed for CAIIB?',
        a: 'A candidate gets 9 attempts in 3 years from the date of first registration. Each paper can be attempted independently.',
      },
      {
        q: 'Which elective paper should I choose for CAIIB?',
        a: 'The most popular elective choices are Rural Banking (for officers in PSBs handling agriculture), Financial Advising (for wealth management), and IT (for tech-savvy bankers). IBS coaches all electives with dedicated faculty.',
      },
      {
        q: 'What is the benefit of clearing CAIIB?',
        a: 'Passing CAIIB gives one additional annual increment in salary as per IBA wage settlement. It also enhances promotion prospects significantly for Scale-II and above positions.',
      },
      {
        q: 'How is the ABM paper structured?',
        a: 'ABM covers Statistics, Credit Management, HRM and Risk Management. It is widely regarded as the toughest CAIIB paper. IBS provides specialised case-study sessions and formula sheets for ABM.',
      },
    ],
    testimonials: [
      {
        name: 'Vishnu Prasad S',
        bank: 'Federal Bank, Kochi',
        text: 'ABM paper seemed tough but IBS shortcuts and practice sets made it very manageable. Cleared all 4 papers in first attempt.',
        score: '174/200',
      },
      {
        name: 'Divya S Nair',
        bank: 'South Indian Bank, Thrissur',
        text: 'IBS made CAIIB preparation systematic and stress-free. The BFM forex sessions were exceptional.',
        score: '182/200',
      },
    ],

    purchaseTypes: [
      {
        id: 'full-course',
        label: 'Full Course',
        subtitle: 'Live + Recorded',
        icon: '🎓',
        price: '₹11,440',
        originalPrice: '₹18,999',
        highlight: 'Officers Choice',
        highlightColor: 'bg-gold',
        includes: [
          '150+ HD Live + Recorded Sessions',
          'All Papers (ABM, BFM, BRBL + Elective)',
          'Comprehensive Study Material (5 Books)',
          '1,200+ Practice Questions per Paper',
          '6 Full Mock Tests per Paper',
          'Case-Study Worksheets for ABM',
          'Forex & Treasury Practice Sets for BFM',
          'IBS Vigyan App Access',
          '8 Language Support',
        ],
        note: 'Select 1 elective (HRM / IT & Digital Banking / Rural Banking / Financial Advising / Central Banking) at time of buying',
      },
      {
        id: 'recorded-course',
        label: 'Recorded Course',
        subtitle: 'Self-paced',
        icon: '🎥',
        price: '₹9,999',
        originalPrice: '₹15,999',
        highlight: null,
        includes: [
          '150+ Recorded HD Sessions',
          'All 4 Papers Covered',
          'Study Material (5 Books)',
          '6 Full Mock Tests per Paper',
          'IBS Vigyan App Access',
          'Doubt Clearing via WhatsApp',
        ],
      },
      {
        id: 'dlp',
        label: 'DLP',
        subtitle: 'Books + Mock Tests',
        icon: '📦',
        price: '₹5,500',
        originalPrice: '₹8,500',
        highlight: 'Best Value',
        highlightColor: 'bg-green-600',
        includes: [
          '5 CAIIB Study Material Books (Printed)',
          '6 Full Mock Tests per Paper',
          '600+ Practice Questions',
          'PDF Study Notes',
          'IBS Vigyan App Access',
        ],
        note: 'No live/recorded classes — study material + mock tests only',
      },
      {
        id: 'only-books',
        label: 'Only Books',
        subtitle: '5 Printed Books',
        icon: '📚',
        price: '₹2,800',
        originalPrice: '₹4,200',
        highlight: null,
        includes: [
          'ABM Book',
          'BFM Book',
          'BRBL Book',
          'Elective Book (choose 1)',
          'Practice Sets Booklet',
        ],
      },
      {
        id: 'individual-subject',
        label: 'Individual Subject',
        subtitle: 'Buy 1–4 Papers',
        icon: '🧩',
        price: 'From ₹1,999',
        originalPrice: null,
        highlight: 'Flexible',
        highlightColor: 'bg-primary',
        includes: [
          'Select 1, 2, 3 or 4 subject(s)',
          'Live + Recorded OR Recorded Only',
          'Subject-specific Mock Tests',
          'Subject Notes PDF',
          'IBS Vigyan App Access',
        ],
        isCustom: true,
        customLabel: 'Customise Your Package',
        papers: ['ABM', 'BFM', 'BRBL', 'Elective (choose 1 of 5)'],
        electivePapers: ['HRM', 'IT & Digital Banking', 'Rural Banking', 'Financial Advising', 'Central Banking'],
      },
    ],
  },

  /* ─────────────────────────────────────────────
     3. Professional Bankers / Bank Promotion
  ───────────────────────────────────────────── */
  'professional-bankers': {
    slug: 'professional-bankers',
    name: 'Professional Bankers',
    fullName: 'Professional Bankers — Bank Promotion Coaching (Clerk to Officer | Scale I to Scale II)',
    icon: '📈',
    color: 'from-teal-700 to-teal-900',
    badgeColor: 'bg-teal-600',
    badge: 'Quick Course',
    fee: '₹4,999',
    originalFee: '₹8,999',
    duration: '2 Months',
    mode: 'Online + Offline',
    nextBatch: 'August 5, 2026',
    rating: 4.8,
    students: 7000,
    examBody: 'Individual Bank (SBI / IBPS member PSBs / Private Banks)',
    about:
      'The Professional Bankers course at IBS is designed specifically for serving bank employees who are preparing for internal promotion exams. Whether you are targeting the Clerk-to-Officer (PO/JMG Scale I) promotion or the Officer-to-Scale-II promotion, IBS provides structured preparation with retired senior bankers who have been on promotion exam committees.',
    eligibility:
      'Serving bank employees eligible for internal promotion as per their respective bank\'s promotion policy. Typically requires 3–5 years of service for Clerk-to-Officer and 4–5 years as Scale-I officer for Scale-II promotion.',
    passingCriteria:
      'Varies by bank. Generally 40–50% in written test + satisfactory interview score. Final merit list is based on written + interview + seniority marks.',
    attempts: 'As per individual bank promotion policy. Most banks allow re-attempts in subsequent years.',
    examMode: 'Written Test (OMR/Online) + Personal Interview at respective bank training centers',
    papers: [
      {
        id: 1,
        code: 'Written Test',
        name: 'Promotion Written Test Preparation',
        questions: 200,
        duration: '180 minutes',
        modules: [
          {
            title: 'Banking & Financial Awareness',
            topics: [
              'Reserve Bank of India — Functions & Policies',
              'Banking Regulation Act & Key Provisions',
              'Priority Sector Lending Guidelines',
              'NPA Classification and Recovery',
              'SARFAESI Act and DRT',
              'Government Banking Schemes',
              'Digital Banking & RBI Digital Rupee',
              'MSME and Agricultural Credit',
            ],
          },
          {
            title: 'General Awareness & Economy',
            topics: [
              'Current Affairs (Last 6 Months)',
              'Indian Economy Fundamentals',
              'Union Budget Highlights',
              'Monetary Policy — Repo, CRR, SLR',
              'International Financial Institutions',
              'Banking Sector Reforms',
              'Notable Banking Appointments',
              'Important Government Schemes',
            ],
          },
          {
            title: 'Reasoning & Aptitude',
            topics: [
              'Verbal Reasoning (Syllogism, Coding)',
              'Data Interpretation (Tables, Graphs)',
              'Quantitative Aptitude (Number Series, Simplification)',
              'Logical Reasoning',
              'Puzzles and Seating Arrangement',
              'Blood Relations',
              'Direction Sense',
            ],
          },
          {
            title: 'English Language',
            topics: [
              'Reading Comprehension',
              'Error Spotting & Sentence Correction',
              'Para Jumbles',
              'Fill in the Blanks (Banking Vocabulary)',
              'Cloze Test',
              'Word Usage',
            ],
          },
        ],
      },
      {
        id: 2,
        code: 'Interview',
        name: 'Promotion Interview Preparation',
        questions: null,
        duration: '10–15 minutes',
        modules: [
          {
            title: 'Banking Knowledge for Interview',
            topics: [
              'Your Bank — History, Products, Recent Results',
              'RBI Policy & Recent Circulars',
              'Branch Banking Practical Knowledge',
              'Credit and Loan Products',
              'Digital Banking Products of Your Bank',
              'Financial Inclusion Initiatives',
            ],
          },
          {
            title: 'Personality Development & Communication',
            topics: [
              'Body Language and Presentation Skills',
              'Group Discussion Techniques',
              'Common HR Questions with Model Answers',
              'Leadership and Team Management',
              'Situational Questions in Banking',
              'Mock Interview Sessions',
            ],
          },
        ],
      },
    ],
    includes: [
      '80+ HD Live + Recorded Sessions',
      'Bank-specific Study Notes & Cheat Sheets',
      '500+ Practice Questions (Reasoning + Banking)',
      '3 Full-Length Mock Written Tests',
      'Mock Interview Sessions (2 per student)',
      'IBS Vigyan App Access',
      'Current Affairs Digest (6 months)',
      'Performance Analytics Dashboard',
      'Language Support (Hindi & English)',
      'Course Completion Certificate',
    ],
    highlights: [
      { label: 'Duration', value: '2 Months' },
      { label: 'Mode', value: 'Online + Offline' },
      { label: 'Target', value: 'Clerk→Officer | Scale-I→Scale-II' },
      { label: 'Language', value: 'Hindi & English' },
      { label: 'Students Enrolled', value: '7,000+' },
      { label: 'Success Rate', value: '88%+' },
      { label: 'Mock Interviews', value: '2 Sessions Included' },
      { label: 'Batch Mode', value: 'Evening Batch (6–8 PM)' },
    ],
    faqs: [
      {
        q: 'Is this course bank-specific?',
        a: 'IBS covers promotion exam syllabus for all major PSBs including SBI, Canara Bank, PNB, Bank of Baroda, Union Bank and others. Faculty members are retired officers from these very banks.',
      },
      {
        q: 'What is the written test pattern for bank promotion?',
        a: 'Typically, the written test comprises Banking Awareness, General Awareness, Reasoning, and English — ranging from 100 to 200 marks over 2–3 hours depending on the bank.',
      },
      {
        q: 'Does IBS help with the promotion interview as well?',
        a: 'Yes. IBS conducts dedicated mock interview sessions with retired senior bank officers who have served on promotion interview panels. This gives candidates real-time, authentic preparation.',
      },
      {
        q: 'My bank has not yet announced promotions. When should I join?',
        a: 'It is best to start preparation at least 3 months before the expected exam. IBS offers ongoing batches so you can join anytime and access recorded sessions for the content you miss.',
      },
    ],
    testimonials: [
      {
        name: 'Vineesh Kumar H',
        bank: 'Subordinate to Clerical, SBI Palakkad',
        text: 'IBS Bank Career changed my career trajectory. The faculty\'s practical banking knowledge made all the difference. Cleared the promotion exam in first attempt!',
        score: 'Selected',
      },
      {
        name: 'Praveesh A',
        bank: 'Subordinate to Clerical, SBI Alathur',
        text: 'Excellent coaching with personalised mentorship. The mock tests were exactly like the actual exam. IBS\'s support team is available 24x7.',
        score: 'Selected',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     4. IIBF Certificate Courses (Overview page)
  ───────────────────────────────────────────── */
  'iibf': {
    slug: 'iibf',
    name: 'IIBF Certificate Courses',
    fullName: 'All IIBF Certificate & Diploma Courses — Complete Coaching by IBS',
    icon: '📜',
    color: 'from-indigo-700 to-indigo-900',
    badgeColor: 'bg-accent',
    badge: 'IIBF Authorised',
    fee: '₹850',
    originalFee: '₹2,500',
    duration: '3 Weeks – 6 Weeks',
    mode: 'Online',
    nextBatch: 'Rolling Admissions',
    rating: 4.7,
    students: 9000,
    examBody: 'Indian Institute of Banking & Finance (IIBF)',
    about:
      'IBS Institute offers comprehensive coaching for all IIBF Certificate and Diploma programmes. These short-duration professional courses are IIBF-authorised and widely recognised within the banking industry. Many PSBs offer salary increments and promotion points on completion of these certificates.',
    eligibility:
      'Varies by course. Most certificate courses are open to all bank employees who are members of IIBF. Some courses like Digital Banking and AML/KYC are open to banking aspirants as well.',
    passingCriteria:
      'Minimum 50 marks out of 100. Most exams are conducted online through IIBF designated centres.',
    attempts: 'As per individual course registration. Typically 2 attempts per year.',
    examMode: 'Online CBT through IIBF authorised centres or remote proctored examination',
    papers: [
      {
        id: 1,
        code: 'Digital Banking',
        name: 'Certificate Course in Digital Banking — ₹2,200',
        questions: 100,
        duration: '90 minutes',
        modules: [
          {
            title: 'Digital Banking Concepts',
            topics: [
              'Internet Banking & Mobile Banking',
              'UPI, IMPS, NEFT, RTGS, NACH',
              'Digital Wallets and Prepaid Instruments',
              'Fintech and Digital Lending',
              'Cryptocurrency Overview',
              'Open Banking and APIs',
            ],
          },
          {
            title: 'Cyber Security & Compliance',
            topics: [
              'Cyber Frauds and Types',
              'Social Engineering Attacks',
              'Data Privacy and GDPR',
              'IT Act 2000 Provisions',
              'RBI Cyber Security Framework',
              'Digital KYC & Video KYC',
            ],
          },
        ],
      },
      {
        id: 2,
        code: 'AML/KYC',
        name: 'Certificate in AML & KYC — ₹1,500',
        questions: 100,
        duration: '90 minutes',
        modules: [
          {
            title: 'AML Framework',
            topics: [
              'PMLA 2002 — Key Provisions',
              'Suspicious Transaction Reporting (STR)',
              'Cash Transaction Report (CTR)',
              'FATF Recommendations',
              'ED & FIU-IND',
              'Hawala and Trade-Based Money Laundering',
            ],
          },
          {
            title: 'KYC Guidelines',
            topics: [
              'RBI KYC Master Direction 2016',
              'Aadhaar-based e-KYC',
              'Customer Due Diligence (CDD)',
              'Enhanced Due Diligence (EDD)',
              'Politically Exposed Persons (PEP)',
              'Risk-Based Approach to KYC',
            ],
          },
        ],
      },
      {
        id: 3,
        code: 'Treasury',
        name: 'Certified Treasury Professional — ₹2,200',
        questions: 100,
        duration: '120 minutes',
        modules: [
          {
            title: 'Money Markets & G-Secs',
            topics: ['Call Money Market', 'Commercial Paper & CDs', 'T-Bills & Dated Securities', 'Repo Transactions', 'OMO & LAF'],
          },
          {
            title: 'Forex & Derivatives',
            topics: ['FX Markets', 'Forward Contracts & Options', 'Currency Swaps', 'ALM & Duration', 'Investment Portfolio Management'],
          },
        ],
      },
      {
        id: 4,
        code: 'IT Security',
        name: 'Certificate in IT Security — ₹1,800',
        questions: 100,
        duration: '90 minutes',
        modules: [
          {
            title: 'IT Security in Banking',
            topics: ['IS Audit', 'Network Security', 'Cloud Banking', 'Business Continuity & Disaster Recovery', 'RBI IT Framework for Banks'],
          },
        ],
      },
      {
        id: 5,
        code: 'Cyber Crimes',
        name: 'Prevention of Cyber Crimes & Fraud Management — ₹850',
        questions: 100,
        duration: '60 minutes',
        modules: [
          {
            title: 'Fraud Prevention',
            topics: ['Types of Bank Frauds', 'Phishing & Vishing', 'Card Skimming', 'Online Banking Frauds', 'Reporting Mechanism (RBI Ombudsman)'],
          },
        ],
      },
      {
        id: 6,
        code: 'Forex',
        name: 'International Trade Finance / Forex Operations — ₹2,200',
        questions: 100,
        duration: '120 minutes',
        modules: [
          {
            title: 'Trade Finance & Forex',
            topics: ['Letter of Credit (LC)', 'Bank Guarantee (BG)', 'Export-Import Documentation', 'FEMA Provisions', 'SWIFT Messages', 'RBI Forex Regulations'],
          },
        ],
      },
      {
        id: 7,
        code: 'MSME',
        name: 'MSME Finance Certification — ₹1,200',
        questions: 100,
        duration: '90 minutes',
        modules: [
          {
            title: 'MSME Lending',
            topics: ['MSME Act 2006', 'Credit Appraisal for MSMEs', 'CGTMSE Scheme', 'Mudra Loans', 'TReDS Platform', 'SIDBI Schemes'],
          },
        ],
      },
      {
        id: 8,
        code: 'Strategic Management',
        name: 'Strategic Management & Innovations in Banking — ₹1,800',
        questions: 100,
        duration: '90 minutes',
        modules: [
          {
            title: 'Banking Strategy',
            topics: ['Strategic Management Concepts', 'SWOT & PESTLE for Banks', 'Balanced Scorecard', 'Innovation in Banking (Fintech, NEO Banks)', 'Mergers & Acquisitions in Banking'],
          },
        ],
      },
      {
        id: 9,
        code: 'DRA',
        name: 'DRA Certification (Debt Recovery Agent) — ₹1,500',
        questions: 100,
        duration: '90 minutes',
        modules: [
          {
            title: 'DRA Essentials',
            topics: ['SARFAESI & DRT', 'Recovery Procedures', 'Code of Conduct for Agents', 'Legal Aspects of Recovery', 'Practical Recovery Techniques'],
          },
        ],
      },
      {
        id: 10,
        code: 'BC/BF',
        name: 'Business Correspondent / Business Facilitator — ₹1,200',
        questions: 100,
        duration: '90 minutes',
        modules: [
          {
            title: 'BC-BF Framework',
            topics: ['BC-BF Model — RBI Guidelines', 'Financial Inclusion', 'BC Products & Services', 'Micro-ATM Operations', 'AePS Transactions', 'Grievance Redressal for BCs'],
          },
        ],
      },
    ],
    includes: [
      'Course-specific Live + Recorded Sessions',
      'IIBF-aligned Study Notes (PDF)',
      '300+ Practice Questions per Course',
      '2 Full Mock Tests per Course',
      'Doubt Clearing via WhatsApp',
      'IBS Vigyan App Access',
      'Course Completion Certificate (IBS)',
      'IIBF Exam Registration Guidance',
    ],
    highlights: [
      { label: 'Duration', value: '3–6 Weeks per Course' },
      { label: 'Mode', value: 'Online (Self-paced + Live)' },
      { label: 'Courses Available', value: '10 Certificate Courses' },
      { label: 'Language', value: 'English + Hindi' },
      { label: 'Students Enrolled', value: '9,000+' },
      { label: 'Pass Rate', value: '92%+' },
      { label: 'Exam Body', value: 'IIBF' },
      { label: 'Lowest Fee', value: '₹850 (Cyber Crimes)' },
    ],
    faqs: [
      {
        q: 'Are IIBF certificate courses mandatory for bank employees?',
        a: 'Some courses like AML/KYC and Digital Banking are increasingly being made mandatory by RBI/IBA for certain roles in banks. Many banks also offer incentives for completing IIBF certificates.',
      },
      {
        q: 'Can I enrol in multiple certificate courses at once?',
        a: 'Yes. IBS offers bundle pricing for candidates enrolling in 3 or more certificate courses together. Contact us on WhatsApp for bundle offers.',
      },
      {
        q: 'How are the IIBF certificate exams conducted?',
        a: 'Most IIBF certificate exams are held online as CBT (Computer Based Tests) at authorised examination centres. Some courses also offer remote proctored exams from home.',
      },
      {
        q: 'Do these certificates help in bank promotion?',
        a: 'Yes. Several PSBs award extra marks or preference points in promotion selection for completing IIBF-recognised certificate courses.',
      },
    ],
    testimonials: [
      {
        name: 'Praveen R',
        bank: 'Assistant Manager, Indian Bank, Trichy',
        text: 'The Digital Banking and AML/KYC courses from IBS were extremely well-structured. Cleared both in one attempt.',
        score: 'Both Cleared',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     5. SBI JIBO
  ───────────────────────────────────────────── */
  'sbi-jibo': {
    slug: 'sbi-jibo',
    name: 'SBI JIBO',
    fullName: 'SBI Junior India Based Officer — Internal Promotion Exam Coaching',
    icon: '🔷',
    color: 'from-blue-800 to-indigo-900',
    badgeColor: 'bg-blue-700',
    badge: 'Notification Out',
    fee: '₹3,999',
    originalFee: '₹6,999',
    duration: '6 Weeks',
    mode: 'Online + Offline',
    nextBatch: 'July 15, 2026',
    rating: 4.8,
    students: 3500,
    examBody: 'State Bank of India (Internal)',
    about:
      'SBI JIBO (Junior India Based Officer) is an internal promotion exam for eligible SBI clerical staff to become Probationary Officers. The exam is highly competitive and IBS provides focused coaching with SBI-specific study material, pattern-based mock tests and experienced SBI officer mentors.',
    eligibility:
      'SBI clerical staff (Sub-Staff and Clerical cadre) who meet SBI\'s service and educational qualification criteria as per the JIBO notification. Typically requires graduation and minimum 3 years of confirmed service in SBI.',
    passingCriteria:
      'Cut-off determined by SBI based on written test + interview performance. No fixed minimum marks — merit-based selection.',
    attempts: 'As per SBI JIBO notification. SBI typically announces JIBO once every 1–2 years.',
    examMode: 'Written Test (Online CBT) at SBI-designated centres + Personal Interview',
    papers: [
      {
        id: 1,
        code: 'Written Test',
        name: 'SBI JIBO Written Examination',
        questions: 125,
        duration: '120 minutes',
        modules: [
          {
            title: 'Reasoning Ability (50 Marks)',
            topics: [
              'Logical Reasoning',
              'Syllogism',
              'Coding-Decoding',
              'Blood Relations',
              'Puzzles and Seating Arrangement',
              'Data Sufficiency',
              'Input-Output',
              'Alphanumeric Series',
            ],
          },
          {
            title: 'English Language (25 Marks)',
            topics: [
              'Reading Comprehension',
              'Error Detection',
              'Sentence Improvement',
              'Para Jumbles',
              'Cloze Test',
              'Fill in the Blanks',
            ],
          },
          {
            title: 'General Awareness / Banking Knowledge (25 Marks)',
            topics: [
              'SBI History, Products & Services',
              'RBI Policy and Circulars',
              'Banking Current Affairs',
              'Government Banking Schemes',
              'Important Financial News',
              'Banking Regulation Act Basics',
            ],
          },
          {
            title: 'Computer Knowledge (25 Marks)',
            topics: [
              'Computer Fundamentals',
              'MS Office Applications',
              'Internet Banking Technology',
              'Core Banking System (CBS)',
              'Networking Basics',
              'Cyber Security Awareness',
            ],
          },
        ],
      },
      {
        id: 2,
        code: 'Interview',
        name: 'JIBO Personal Interview Preparation',
        questions: null,
        duration: '15–20 minutes',
        modules: [
          {
            title: 'SBI-Specific Interview Topics',
            topics: [
              'SBI History, Vision & Mission',
              'SBI Products (YONO, Loan Products, FD Rates)',
              'Your Work Experience in SBI',
              'Current Affairs (Last 3 Months)',
              'Why do you want to become an Officer?',
              'Banking Situation-Based Questions',
            ],
          },
          {
            title: 'Mock Interview & Personality Development',
            topics: [
              'Dress Code and Professional Presentation',
              'Mock Interview Sessions (SBI Panel Style)',
              'Communication Skill Enhancement',
              'Confidence Building Exercises',
              'Common Rejection Reasons & How to Avoid Them',
            ],
          },
        ],
      },
    ],
    includes: [
      '60+ HD Live + Recorded Sessions',
      'SBI JIBO-Specific Study Notes',
      '500+ SBI-Pattern Practice Questions',
      '3 Full Mock Tests (JIBO Pattern)',
      '2 Mock Interview Sessions',
      'Daily SBI & Banking Current Affairs',
      'IBS Vigyan App Access',
      'WhatsApp Doubt Support',
      'Course Completion Certificate',
    ],
    highlights: [
      { label: 'Duration', value: '6 Weeks' },
      { label: 'Mode', value: 'Online + Offline' },
      { label: 'Target Exam', value: 'SBI JIBO (Internal)' },
      { label: 'Written Exam', value: '125 Questions / 120 Minutes' },
      { label: 'Students Enrolled', value: '3,500+' },
      { label: 'Selection Rate', value: '82%+' },
      { label: 'Mock Interviews', value: '2 Sessions Included' },
      { label: 'Next Batch', value: 'July 15, 2026' },
    ],
    faqs: [
      {
        q: 'What is SBI JIBO?',
        a: 'SBI JIBO (Junior India Based Officer) is an internal promotion channel where SBI clerical staff can become officers (JMG Scale I Probationary Officer) through a written exam and interview.',
      },
      {
        q: 'How often does SBI announce JIBO?',
        a: 'SBI typically announces JIBO every 1–2 years depending on officer vacancy requirements. It is important to stay prepared before the official notification.',
      },
      {
        q: 'What is the difference between JIBO and regular SBI PO?',
        a: 'JIBO is an internal promotion exam open only to existing SBI clerical staff. Regular SBI PO is open to all graduates. JIBO pattern emphasises SBI knowledge and reasoning over a longer period of work experience.',
      },
      {
        q: 'Does IBS have SBI-specific study material for JIBO?',
        a: 'Yes. IBS has developed a dedicated SBI JIBO study module covering SBI\'s specific products, policies, CBS system and recent initiatives — material you won\'t find in standard bank exam coaching.',
      },
    ],
    testimonials: [
      {
        name: 'Renjith Kumar G S',
        bank: 'SBI — Promoted via JIBO, Punalur',
        text: 'IBS JIBO coaching covered every aspect of the exam. Cleared written test with high marks and the mock interview sessions gave me the confidence I needed.',
        score: 'Selected',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     6. Bank Promotion Exams (General PSBs)
  ───────────────────────────────────────────── */
  'bank-promotion': {
    slug: 'bank-promotion',
    name: 'Bank Promotion Exams',
    fullName: 'Bank Promotion Exam Coaching — All PSBs (Clerical to Officer & Officer Scale Promotions)',
    icon: '🏅',
    color: 'from-green-700 to-green-900',
    badgeColor: 'bg-success',
    badge: 'In-Demand',
    fee: '₹2,999',
    originalFee: '₹5,999',
    duration: '2 Months',
    mode: 'Online',
    nextBatch: 'July 10, 2026',
    rating: 4.7,
    students: 5500,
    examBody: 'Individual Public Sector Banks',
    about:
      'IBS\'s Bank Promotion Exam course covers promotion written tests for all PSBs including SBI, Canara Bank, Bank of Baroda, PNB, Union Bank, Indian Bank and others. With retired senior officers who have served on promotion exam committees, IBS delivers insider knowledge and exam-focused coaching.',
    eligibility:
      'Bank employees eligible for promotion as per their respective bank\'s promotion policy for the relevant grade. Confirmation of service is typically required.',
    passingCriteria:
      'Depends on individual bank. Generally a combined score (written + interview + seniority) is considered for final merit list.',
    attempts: 'As per bank-specific promotion cycle. Most banks announce promotions annually.',
    examMode: 'Written Test (OMR/Online) + Interview at respective bank HR departments',
    papers: [
      {
        id: 1,
        code: 'Module 1',
        name: 'Banking & Professional Knowledge',
        questions: 100,
        duration: '120 minutes',
        modules: [
          {
            title: 'Banking Operations & Law',
            topics: [
              'Banker-Customer Relationship',
              'Types of Accounts and Deposits',
              'Credit Products and Appraisal',
              'NPA Management & Recovery',
              'SARFAESI Act',
              'Banking Regulation Act',
              'Consumer Protection in Banking',
              'Ombudsman Scheme',
            ],
          },
          {
            title: 'RBI Policies & Financial Awareness',
            topics: [
              'Monetary Policy — Repo, CRR, SLR',
              'Priority Sector Lending',
              'Financial Inclusion & Jan Dhan',
              'Digital Payments Ecosystem',
              'Union Budget Key Points',
              'Indian Economy Overview',
            ],
          },
        ],
      },
      {
        id: 2,
        code: 'Module 2',
        name: 'Aptitude, Reasoning & English',
        questions: 100,
        duration: '120 minutes',
        modules: [
          {
            title: 'Quantitative Aptitude & Reasoning',
            topics: [
              'Data Interpretation',
              'Number Series & Simplification',
              'Percentage, Profit & Loss',
              'Logical Reasoning',
              'Puzzles and Arrangements',
              'Syllogism',
            ],
          },
          {
            title: 'English Language',
            topics: [
              'Reading Comprehension',
              'Error Detection',
              'Sentence Completion',
              'Banking Vocabulary',
              'Para Jumbles',
              'Cloze Test',
            ],
          },
        ],
      },
    ],
    includes: [
      '80+ HD Live + Recorded Sessions',
      'Bank-wise Promotion Study Notes',
      '400+ Practice Questions',
      '3 Full Mock Tests',
      '2 Mock Interview Sessions',
      'Current Affairs Digest (Monthly)',
      'IBS Vigyan App Access',
      'Doubt Clearing via WhatsApp',
      'Course Completion Certificate',
    ],
    highlights: [
      { label: 'Duration', value: '2 Months' },
      { label: 'Mode', value: 'Online' },
      { label: 'Banks Covered', value: 'All Major PSBs' },
      { label: 'Language', value: 'Hindi & English' },
      { label: 'Students Enrolled', value: '5,500+' },
      { label: 'Success Rate', value: '88%+' },
      { label: 'Mock Interviews', value: '2 Sessions Included' },
      { label: 'Batch Mode', value: 'Evening Batch (6–8 PM)' },
    ],
    faqs: [
      {
        q: 'Is the course bank-specific or general?',
        a: 'IBS covers the common promotion exam pattern applicable to all PSBs. For SBI-specific content, please consider the dedicated SBI JIBO course. For all other PSBs, this general promotion course covers all the required topics.',
      },
      {
        q: 'How different is promotion exam from regular bank PO exam?',
        a: 'Promotion exams focus more heavily on professional banking knowledge, bank-specific policies, and practical banking awareness. Reasoning and English are typically less complex compared to external bank PO exams.',
      },
      {
        q: 'Do I need to take both modules?',
        a: 'IBS recommends both modules as they together cover all sections tested in promotion written exams across PSBs. Students can also opt for module-wise coaching if needed.',
      },
    ],
    testimonials: [
      {
        name: 'Sabu Joseph',
        bank: 'Subordinate to Clerical, SBI Idukki',
        text: 'The faculty\'s real banking experience makes IBS unique. They don\'t just teach theory — they share actual exam strategies from experience on promotion panels.',
        score: 'Selected',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     7. IGNOU MBA (Banking & Finance)
  ───────────────────────────────────────────── */
  'ignou-mba': {
    slug: 'ignou-mba',
    name: 'IGNOU MBA',
    fullName: 'IGNOU MBA in Banking & Finance — Distance Learning with IBS Academic Support',
    icon: '🎓',
    color: 'from-orange-700 to-red-800',
    badgeColor: 'bg-orange-600',
    badge: 'Degree Program',
    fee: '₹48,000',
    originalFee: '₹60,000',
    duration: '2 Years',
    mode: 'Distance Learning + IBS Support',
    nextBatch: 'July 2026 Session',
    rating: 4.6,
    students: 2200,
    examBody: 'Indira Gandhi National Open University (IGNOU)',
    about:
      'IBS provides dedicated academic coaching support for IGNOU\'s MBA (Banking & Finance) programme. This distance learning MBA is ideal for working bank employees who want a postgraduate degree while continuing service. IBS helps students with assignments, term-end exam preparation, and project guidance throughout the 2-year programme.',
    eligibility:
      'Graduate in any discipline from a recognised university. Working bank employees are preferred but freshers with banking interest are also eligible. No entrance exam required for IGNOU MBA.',
    passingCriteria:
      'Minimum 50% in each course (Theory + Assignment combined). Students must complete 2 terms each year over the 2-year programme for a total of 4 semesters.',
    attempts: 'Maximum 5 years to complete the MBA from the date of first registration with IGNOU.',
    examMode: 'Term End Examinations (TEE) at IGNOU regional centres — conducted twice a year (June and December)',
    papers: [
      {
        id: 1,
        code: 'Semester 1',
        name: 'First Semester (Year 1)',
        questions: null,
        duration: '3 Hours per paper',
        modules: [
          {
            title: 'Management Functions and Behaviour (MS-1)',
            topics: ['Management Concepts', 'Planning and Decision Making', 'Organisational Behaviour', 'Leadership in Banking'],
          },
          {
            title: 'Management of Human Resources (MS-2)',
            topics: ['HR Planning', 'Recruitment & Selection', 'Training in Banks', 'Performance Appraisal'],
          },
          {
            title: 'Economic and Social Environment (MS-3)',
            topics: ['Indian Economic Environment', 'Monetary Policy', 'Industrial Policy', 'Social Responsibilities of Banks'],
          },
          {
            title: 'Accounting and Finance for Managers (MS-4)',
            topics: ['Financial Statements', 'Ratio Analysis', 'Capital Budgeting', 'Working Capital Management'],
          },
        ],
      },
      {
        id: 2,
        code: 'Semester 2',
        name: 'Second Semester (Year 1)',
        questions: null,
        duration: '3 Hours per paper',
        modules: [
          {
            title: 'Management of Machines and Materials (MS-5)',
            topics: ['Operations Management', 'Supply Chain', 'Quality Management', 'Project Management'],
          },
          {
            title: 'Marketing for Managers (MS-6)',
            topics: ['Marketing Mix', 'Bank Marketing', 'Customer Behaviour', 'Digital Marketing'],
          },
          {
            title: 'Information Systems for Managers (MS-7)',
            topics: ['MIS for Banks', 'CBS Technology', 'Data Analytics', 'Digital Transformation'],
          },
          {
            title: 'Management of Finance (MS-8)',
            topics: ['Sources of Finance', 'Cost of Capital', 'Dividend Policy', 'Treasury Management'],
          },
        ],
      },
      {
        id: 3,
        code: 'Semester 3',
        name: 'Third Semester — Banking Specialisation (Year 2)',
        questions: null,
        duration: '3 Hours per paper',
        modules: [
          {
            title: 'Banking and Financial Services (MS-46)',
            topics: ['Indian Banking Structure', 'Commercial Bank Operations', 'Bank Credit Management', 'Recent Reforms'],
          },
          {
            title: 'Treasury Management in Banks (MS-493)',
            topics: ['Treasury Functions', 'Money Market', 'Forex Operations', 'Risk Management'],
          },
          {
            title: 'Regulatory and Compliance Framework (MS-494)',
            topics: ['Banking Regulation Act', 'FEMA', 'Anti Money Laundering', 'Compliance Management'],
          },
        ],
      },
      {
        id: 4,
        code: 'Semester 4',
        name: 'Fourth Semester — Project & Electives (Year 2)',
        questions: null,
        duration: '3 Hours per paper / Project',
        modules: [
          {
            title: 'Strategic Management (MS-95)',
            topics: ['Corporate Strategy', 'SWOT & PESTLE Analysis', 'Mergers in Banking', 'Digital Strategy'],
          },
          {
            title: 'Project Work (MS-100)',
            topics: ['Research Methodology', 'Project Topic Selection', 'Data Collection & Analysis', 'Report Writing & Viva'],
          },
        ],
      },
    ],
    includes: [
      'Assignment Writing Support (All 4 Semesters)',
      'Term-End Exam Preparation Notes',
      'Banking Specialisation Study Material',
      'Project Work Guidance & Mentoring',
      '50+ Recorded Sessions (Banking Subjects)',
      'Doubt Clearing via WhatsApp',
      'IGNOU Exam Pattern Mock Tests',
      'IBS Vigyan App Access',
      'Career Counselling for Working Bankers',
      'IBS Course Completion Certificate',
    ],
    highlights: [
      { label: 'Duration', value: '2 Years (4 Semesters)' },
      { label: 'Mode', value: 'Distance Learning + IBS Support' },
      { label: 'Degree Awarded By', value: 'IGNOU (Central University)' },
      { label: 'Specialisation', value: 'Banking & Finance' },
      { label: 'Exams Per Year', value: 'June & December TEE' },
      { label: 'Students Enrolled', value: '2,200+' },
      { label: 'Completion Rate', value: '87%+' },
      { label: 'IBS Support', value: 'Full 2-Year Academic Support' },
    ],
    faqs: [
      {
        q: 'Is IGNOU MBA valid for bank promotions?',
        a: 'Yes. IGNOU is a Central Government University and its MBA is recognised by UGC, DEB and all banking regulators. It carries full validity for promotion and salary revision purposes.',
      },
      {
        q: 'Can I pursue IGNOU MBA while working in a bank?',
        a: 'Absolutely. The programme is designed for working professionals. Exams are held only twice a year and IBS provides comprehensive support so you can manage both effectively.',
      },
      {
        q: 'What IBS support do I get for the IGNOU MBA?',
        a: 'IBS provides assignment writing guidance, term-end exam preparation notes, project topic selection and mentoring, doubt clearing sessions, and recorded classes for banking specialisation subjects.',
      },
      {
        q: 'What is the difference between IGNOU MBA fee and IBS coaching fee?',
        a: 'The ₹48,000 fee shown is for IBS coaching and support services. You pay IGNOU fees separately directly to IGNOU at the time of admission (currently around ₹31,500 for the full MBA programme).',
      },
      {
        q: 'Does IBS help with IGNOU admission also?',
        a: 'Yes. IBS counsellors guide candidates through the IGNOU online admission process, programme selection, regional centre details and documentation requirements.',
      },
    ],
    testimonials: [
      {
        name: 'Smitha Mohan',
        bank: 'Union Bank of India, Kollam',
        text: 'The IBS team guided me through every semester of the IGNOU MBA. Assignment support was invaluable — I could focus on banking work knowing IBS had my academics covered.',
        score: 'MBA Completed',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     8. DRA Certification
  ───────────────────────────────────────────── */
  'dra': {
    slug: 'dra',
    name: 'DRA Certification',
    fullName: 'Debt Recovery Agent (DRA) Certification — IIBF Authorised',
    icon: '📄',
    color: 'from-rose-700 to-rose-900',
    badgeColor: 'bg-rose-600',
    badge: 'IIBF Authorised',
    fee: '₹1,500',
    originalFee: '₹2,500',
    duration: '3 Weeks',
    mode: 'Online + Offline',
    nextBatch: 'Rolling Admissions',
    rating: 4.7,
    students: 4500,
    examBody: 'Indian Institute of Banking & Finance (IIBF)',
    about:
      'The DRA (Debt Recovery Agent) certification from IIBF is mandatory for all individuals and agency personnel engaged in recovery activities on behalf of banks and NBFCs. This is an IIBF-authorised course with a mandatory examination. IBS is an IIBF-approved training institute for DRA certification and has helped 4,500+ recovery agents obtain this mandatory certificate.',
    eligibility:
      'Any individual working or intending to work as a recovery agent for a bank or NBFC. Minimum qualification: 10th standard (matriculation). Sponsored candidates from banks and recovery agencies are also eligible.',
    passingCriteria:
      'Minimum 50 marks out of 100 in the IIBF DRA examination. Both papers must be passed.',
    attempts: '2 attempts per year as per IIBF examination schedule.',
    examMode: 'Online CBT at IIBF authorised examination centres',
    papers: [
      {
        id: 1,
        code: 'Paper 1',
        name: 'Legal Aspects of Debt Recovery',
        questions: 50,
        duration: '60 minutes',
        modules: [
          {
            title: 'Legal Framework for Recovery',
            topics: [
              'SARFAESI Act 2002 — Key Provisions',
              'Debt Recovery Tribunals (DRT) & DRAT',
              'Recovery of Debts Due to Banks & FIs Act 1993',
              'Civil Procedure Code (CPC) — Section 60',
              'Limitation Act and Recovery',
              'Indian Contract Act — Debt and Guarantee',
              'Insolvency and Bankruptcy Code (IBC 2016)',
              'Consumer Protection Act — Role in Recovery',
            ],
          },
          {
            title: 'RBI & IIBF Guidelines for Recovery Agents',
            topics: [
              'RBI Guidelines on Recovery Agents (2006, Updated)',
              'Code of Conduct for Recovery Agents',
              'Fair Practices Code for Banks',
              'Prohibited Recovery Methods',
              'Banking Ombudsman Complaints Related to Recovery',
              'Data Privacy and Confidentiality Obligations',
            ],
          },
        ],
      },
      {
        id: 2,
        code: 'Paper 2',
        name: 'Practical Aspects of Debt Recovery',
        questions: 50,
        duration: '60 minutes',
        modules: [
          {
            title: 'Recovery Techniques & NPA Management',
            topics: [
              'NPA Classification (Substandard, Doubtful, Loss)',
              'Early Warning Signals in Loan Accounts',
              'Recovery Strategies — Compromise, OTS, Restructuring',
              'Recovery of Secured vs Unsecured Loans',
              'Possession and Auction of Property (SARFAESI)',
              'Collection Calling Techniques and Ethics',
              'Negotiation Skills for Recovery',
              'Documentation in Recovery Process',
            ],
          },
          {
            title: 'Communication & Professional Standards',
            topics: [
              'Communication Skills for Recovery Agents',
              'Dealing with Difficult Borrowers',
              'Escalation Matrix in Recovery',
              'Do\'s and Don\'ts for Recovery Agents',
              'Case Studies — Recovery Success Stories',
              'Reporting to Bank/NBFC on Recovery',
            ],
          },
        ],
      },
    ],
    includes: [
      '30+ HD Live + Recorded Sessions',
      'DRA Study Notes (IIBF Pattern)',
      '200+ Practice Questions (Both Papers)',
      '2 Full Mock Tests (DRA Pattern)',
      'IIBF Registration Guidance',
      'Doubt Clearing via WhatsApp',
      'IBS Vigyan App Access',
      'DRA Code of Conduct Handbook',
      'Course Completion Certificate',
    ],
    highlights: [
      { label: 'Duration', value: '3 Weeks' },
      { label: 'Mode', value: 'Online + Offline' },
      { label: 'Papers', value: '2 Papers (50 Questions Each)' },
      { label: 'Mandatory For', value: 'All Bank Recovery Agents' },
      { label: 'Students Enrolled', value: '4,500+' },
      { label: 'Pass Rate', value: '93%+' },
      { label: 'Exam Body', value: 'IIBF' },
      { label: 'Approval', value: 'IIBF Authorised Training Institute' },
    ],
    faqs: [
      {
        q: 'Is DRA certification mandatory?',
        a: 'Yes. As per RBI guidelines, all recovery agents (individuals and agency staff) working for banks and NBFCs must hold a valid IIBF DRA certificate. Banks cannot engage un-certified agents.',
      },
      {
        q: 'Can I get a job as a recovery agent after DRA certification?',
        a: 'Yes. DRA certification opens opportunities with recovery agencies, banks\' recovery departments, and NBFCs. IBS also maintains a placement tie-up network to help certified candidates find employment.',
      },
      {
        q: 'How long is the DRA certificate valid?',
        a: 'The DRA certificate is valid for 3 years. After 3 years, the certificate holder must renew it by passing the IIBF DRA renewal examination.',
      },
      {
        q: 'Is the DRA exam in English only?',
        a: 'The IIBF DRA exam is available in English and Hindi. IBS provides coaching in multiple regional languages to help candidates understand the content before appearing in the IIBF examination.',
      },
    ],
    testimonials: [
      {
        name: 'Rajeevan K K',
        bank: 'Recovery Agent, Kerala Gramin Bank Network',
        text: 'IBS helped me clear the DRA certification in one attempt. The study material was clear, concise and exactly matched the IIBF exam pattern.',
        score: 'Cleared (87/100)',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     9. BC-BF Certification
  ───────────────────────────────────────────── */
  'bc-bf': {
    slug: 'bc-bf',
    name: 'BC / BF Certification',
    fullName: 'Business Correspondent / Business Facilitator Certification — IIBF',
    icon: '🤝',
    color: 'from-cyan-700 to-cyan-900',
    badgeColor: 'bg-cyan-600',
    badge: 'IIBF Certified',
    fee: '₹1,200',
    originalFee: '₹2,000',
    duration: '3 Weeks',
    mode: 'Online',
    nextBatch: 'Rolling Admissions',
    rating: 4.6,
    students: 3200,
    examBody: 'Indian Institute of Banking & Finance (IIBF)',
    about:
      'The BC-BF (Business Correspondent / Business Facilitator) certification from IIBF is designed for individuals working as banking agents in rural and semi-urban areas. BCs act as the last-mile delivery point for banking services, operating Micro ATMs, AePS terminals and opening bank accounts in unbanked villages. This IIBF certificate is increasingly required by banks for empanelling BC agents.',
    eligibility:
      'Any individual working or intending to work as a Business Correspondent or Business Facilitator for a bank. Minimum qualification: 10th standard. Must be sponsored by a Bank BC/BF network or apply directly.',
    passingCriteria:
      'Minimum 50 marks out of 100 in the IIBF BC-BF examination.',
    attempts: '2 attempts per year as per IIBF schedule.',
    examMode: 'Online CBT at IIBF authorised examination centres',
    papers: [
      {
        id: 1,
        code: 'BC-BF Exam',
        name: 'BC/BF Combined Examination',
        questions: 100,
        duration: '90 minutes',
        modules: [
          {
            title: 'Financial Inclusion & BC Model',
            topics: [
              'Financial Inclusion — RBI Policy',
              'Business Correspondent Model — Origin and Evolution',
              'RBI Guidelines on BC/BF (2006 onwards)',
              'Types of BCs — Individual, Entity, NGO',
              'Bank-BC Agreement and Obligations',
              'Accountability of BCs to Banks',
              'PMJDY — Jan Dhan Accounts',
              'Basic Savings Bank Deposit Account (BSBDA)',
            ],
          },
          {
            title: 'Technology and Products for BCs',
            topics: [
              'Micro ATM — Operations and Limits',
              'AePS (Aadhaar-enabled Payment System)',
              'Mobile Money and USSD Banking',
              'Remittance Services through BC',
              'Aadhaar Seeding and e-KYC',
              'NACH and Insurance Premium Collection',
              'Mudra Loan Facilitation by BCs',
              'Government DBT Disbursement by BCs',
            ],
          },
          {
            title: 'Banking Basics for BCs',
            topics: [
              'Types of Bank Accounts',
              'Deposits and Withdrawals',
              'Loan Products for Rural Customers',
              'Priority Sector Lending',
              'KYC and Anti-Money Laundering',
              'Grievance Redressal Mechanism',
              'Consumer Protection and Ombudsman',
              'Basic Accounting for BCs',
            ],
          },
          {
            title: 'Rural Finance & Government Schemes',
            topics: [
              'PM-KISAN and DBT Transfers',
              'MGNREGS Payments via BC',
              'Atal Pension Yojana (APY)',
              'PMJJBY and PMSBY Insurance',
              'Self-Help Groups (SHGs)',
              'National Social Assistance Programme',
              'Government Subsidy Disbursement',
            ],
          },
        ],
      },
    ],
    includes: [
      '25+ HD Recorded Sessions',
      'BC-BF Study Notes (IIBF Pattern)',
      '200+ Practice Questions',
      '2 Full Mock Tests',
      'IIBF Registration Guidance',
      'Doubt Clearing via WhatsApp',
      'IBS Vigyan App Access',
      'BC Code of Conduct & Ethics Guide',
      'Course Completion Certificate',
    ],
    highlights: [
      { label: 'Duration', value: '3 Weeks' },
      { label: 'Mode', value: 'Online' },
      { label: 'Questions', value: '100 (90 minutes)' },
      { label: 'Purpose', value: 'Financial Inclusion & Rural Banking' },
      { label: 'Students Enrolled', value: '3,200+' },
      { label: 'Pass Rate', value: '91%+' },
      { label: 'Exam Body', value: 'IIBF' },
      { label: 'Suitable For', value: 'BC Agents, Rural Entrepreneurs' },
    ],
    faqs: [
      {
        q: 'Who should do the BC-BF certification?',
        a: 'Anyone working as or planning to work as a Business Correspondent (BC) for a bank, including CSC (Common Service Centre) operators, micro-entrepreneur agents, NGO workers in rural banking, and retired bank employees working as BCs.',
      },
      {
        q: 'What is the difference between BC and BF?',
        a: 'A Business Correspondent (BC) can perform banking transactions (deposits, withdrawals, loan recovery) on behalf of the bank. A Business Facilitator (BF) can only facilitate (refer, educate, assist in documentation) without performing actual transactions.',
      },
      {
        q: 'Do banks pay BCs for their services?',
        a: 'Yes. Banks pay BCs a commission on transactions processed, accounts opened, and loans facilitated. Earnings depend on the volume of business and the specific BC agreement with the bank.',
      },
      {
        q: 'Is the BC-BF exam difficult?',
        a: 'No. The exam covers basic banking and operational knowledge. With IBS\'s focused 3-week preparation, most candidates clear it comfortably on the first attempt.',
      },
    ],
    testimonials: [
      {
        name: 'Sajeesh Kumar T',
        bank: 'BC Agent, Canara Bank Network, Alappuzha',
        text: 'The IBS BC-BF coaching was simple, practical and directly relevant to my work in the field. Cleared the IIBF exam on first attempt.',
        score: 'Cleared (79/100)',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     10. Others (Short Courses Overview)
  ───────────────────────────────────────────── */
  'others': {
    slug: 'others',
    name: 'Other Courses',
    fullName: 'Other Banking Courses — Foundation, Diploma & Specialised Programmes at IBS',
    icon: '📚',
    color: 'from-gray-700 to-gray-900',
    badgeColor: 'bg-gray-600',
    badge: 'Multiple Courses',
    fee: '₹999',
    originalFee: '₹2,500',
    duration: 'Varies',
    mode: 'Online + Offline',
    nextBatch: 'Rolling Admissions',
    rating: 4.6,
    students: 6000,
    examBody: 'IBS Institute / IGNOU / IIBF',
    about:
      'Beyond the flagship JAIIB, CAIIB and certificate programmes, IBS offers a range of short courses, foundation programmes and specialised modules for banking aspirants and working bankers. These include the Foundation Course SIDDHI for banking freshers, standalone Diploma in Banking & Finance, bank interview coaching, and current affairs subscription packages.',
    eligibility:
      'Varies by course. Foundation courses: Any graduate or final-year student. Diploma: Graduate in any discipline. Interview Coaching: Candidates who have cleared written tests of bank recruitment exams.',
    passingCriteria: 'As per individual programme requirements. IBS-certified courses have internal assessments.',
    attempts: 'As per course. Most IBS short courses have no strict attempt limits.',
    examMode: 'Internal Assessment / IIBF Exam (for IIBF-affiliated courses) / IGNOU TEE (for IGNOU programmes)',
    papers: [
      {
        id: 1,
        code: 'SIDDHI',
        name: 'Foundation Course SIDDHI — ₹4,500 (3 Months)',
        questions: null,
        duration: '3 Months',
        modules: [
          {
            title: 'Banking Fundamentals',
            topics: [
              'Introduction to Banking',
              'Types of Banks and Accounts',
              'Deposit and Credit Products',
              'Digital Banking Basics',
              'RBI and Regulatory Framework',
              'Career Paths in Banking',
            ],
          },
          {
            title: 'Quantitative & Verbal Aptitude',
            topics: [
              'Numerical Ability (Speed Maths)',
              'Data Interpretation',
              'English Grammar & Comprehension',
              'Reasoning Fundamentals',
              'Current Affairs (Banking Focus)',
              'Computer Awareness',
            ],
          },
        ],
      },
      {
        id: 2,
        code: 'DB&F',
        name: 'Diploma in Banking & Finance (Standalone) — ₹20,000 (6 Months)',
        questions: null,
        duration: '6 Months',
        modules: [
          {
            title: 'Banking & Finance Core',
            topics: [
              'Indian Banking System',
              'Financial Markets & Instruments',
              'Banking Law & Regulation',
              'Accounting for Bankers',
              'Credit and Loan Management',
              'Treasury and Forex Basics',
            ],
          },
          {
            title: 'Banking Practice',
            topics: [
              'Branch Banking Operations',
              'Digital Banking & Fintech',
              'Priority Sector & Rural Finance',
              'Risk Management Basics',
              'NPA and Recovery Management',
              'Final Project — Banking Case Study',
            ],
          },
        ],
      },
      {
        id: 3,
        code: 'Interview',
        name: 'Bank Interview Coaching — ₹999 (2 Weeks)',
        questions: null,
        duration: '2 Weeks',
        modules: [
          {
            title: 'Interview Preparation',
            topics: [
              'Bank-specific GK & Products',
              'Current Affairs for Interview',
              'Group Discussion Practice',
              'HR Questions & Model Answers',
              'Communication Skill Enhancement',
              'Mock Interview Sessions',
            ],
          },
        ],
      },
      {
        id: 4,
        code: 'Current Affairs',
        name: 'Monthly Banking Current Affairs — ₹199/Month',
        questions: null,
        duration: 'Monthly Subscription',
        modules: [
          {
            title: 'Monthly Package',
            topics: [
              'RBI Policy Decisions & Circulars',
              'Banking Sector Appointments',
              'Government Banking Schemes',
              'Important Financial Data (GDP, Inflation, Rates)',
              'International Finance News',
              'Monthly Quiz & MCQ Set',
            ],
          },
        ],
      },
    ],
    includes: [
      'Course-specific Live + Recorded Sessions',
      'Study Notes (PDF)',
      'Practice Question Sets',
      'Mock Tests (Where Applicable)',
      'IBS Vigyan App Access',
      'Doubt Clearing via WhatsApp',
      'Placement Assistance (Diploma Courses)',
      'Course Completion Certificate',
    ],
    highlights: [
      { label: 'Foundation Course', value: 'SIDDHI — ₹4,500 / 3 Months' },
      { label: 'Diploma in B&F', value: '₹20,000 / 6 Months' },
      { label: 'Interview Coaching', value: '₹999 / 2 Weeks' },
      { label: 'Current Affairs', value: '₹199 / Month' },
      { label: 'Mode', value: 'Online + Offline' },
      { label: 'Students Enrolled', value: '6,000+' },
      { label: 'Language', value: 'Hindi, English & Regional' },
      { label: 'Placement Help', value: 'Available for Diploma' },
    ],
    faqs: [
      {
        q: 'What is Foundation Course SIDDHI?',
        a: 'SIDDHI is IBS\'s entry-level banking foundation course for freshers and aspirants who are new to the banking sector. It covers basic banking concepts, aptitude preparation and career guidance — the perfect starting point before enrolling in JAIIB or bank PO courses.',
      },
      {
        q: 'Is the Diploma in Banking & Finance recognised?',
        a: 'IBS\'s Diploma in Banking & Finance is an IBS-awarded programme. While it is not equivalent to a university degree, it is widely accepted within the banking training ecosystem. For a UGC-recognised diploma, candidates should consider IGNOU programmes.',
      },
      {
        q: 'Who should take the bank interview coaching?',
        a: 'This short course is ideal for candidates who have cleared the written test for SBI PO, IBPS PO, RRB Officer, RBI Assistant or any bank recruitment and are preparing for the final interview/GD round.',
      },
      {
        q: 'What does the monthly current affairs package include?',
        a: 'Each monthly package includes a comprehensive PDF covering RBI circulars, banking sector news, government schemes, key financial statistics and a 50-question MCQ quiz — all banking-specific and updated for the current month.',
      },
    ],
    testimonials: [
      {
        name: 'Bibin Babu',
        bank: 'Selected — SBI PO',
        text: 'The IBS bank interview coaching was a complete game-changer. The mock interviews were exactly like the real SBI panel interview.',
        score: 'Selected — SBI PO',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     10. Bank PO / SSC Coaching
  ───────────────────────────────────────────── */
  'bank-po': {
    slug: 'bank-po',
    name: 'Bank PO / SSC Coaching',
    fullName: 'Complete Coaching for Bank PO, Clerk, RRB & SSC Exams — Bhopal Centre + Online',
    icon: '📚',
    color: 'from-green-700 to-green-900',
    badgeColor: 'bg-green-700',
    badge: 'Govt. Exam Coaching',
    fee: '₹30,000',
    originalFee: '₹45,000',
    duration: '12 Months',
    mode: 'Offline (Bhopal) + Online',
    nextBatch: 'August 5, 2026',
    rating: 4.8,
    students: 8700,
    examBody: 'IBPS / SBI / SSC / RRB (Various Conducting Bodies)',
    about:
      'IBS provides complete coaching for government exam aspirants targeting Bank PO (IBPS, SBI), Bank Clerk, RRB PO/Office Assistant, SSC CGL, and SSC CHSL examinations. Daily batch classes at our Bhopal centre, with full online access for outstation students.',
    eligibility:
      'Any graduate (any stream); Age 20–30 years (relaxation as per govt. norms for SC/ST/OBC/PwD)',
    passingCriteria:
      'As per official IBPS/SBI/SSC cut-off — varies yearly by post, category and state',
    attempts: 'No limit on attempts (as per individual exam rules — usually max age or year-based)',
    examMode: 'Prelims (Online MCQ) + Mains (Online MCQ + Descriptive) + Interview',
    papers: [
      {
        id: 1,
        code: 'Reasoning',
        name: 'Reasoning Ability & Computer Aptitude',
        questions: '35–50 (Prelims); 45–60 (Mains)',
        duration: '20–45 minutes per section',
        modules: [
          {
            title: 'Basic & Advanced Reasoning',
            topics: [
              'Puzzles & Seating Arrangements (Floor, Linear, Circular)',
              'Syllogisms (2/3 Statements)',
              'Blood Relations',
              'Coding-Decoding (New Pattern)',
              'Input-Output',
              'Direction Sense',
              'Inequality',
              'Machine Input-Output',
            ],
          },
          {
            title: 'Computer Aptitude (Mains)',
            topics: [
              'Computer Generations & Types',
              'Input-Output Devices',
              'Memory — RAM, ROM, Cache',
              'Operating Systems',
              'Computer Networks & Internet',
              'Cyber Security Basics',
            ],
          },
        ],
      },
      {
        id: 2,
        code: 'English',
        name: 'English Language',
        questions: '30–40 (Prelims); 35–40 (Mains)',
        duration: '20–30 minutes',
        modules: [
          {
            title: 'Grammar & Comprehension',
            topics: [
              'Reading Comprehension (Long & Short Passages)',
              'Cloze Test (New Pattern)',
              'Error Spotting',
              'Sentence Correction',
              'Fill in the Blanks',
              'Para Jumbles',
              'Sentence Connectors',
            ],
          },
          {
            title: 'Descriptive Writing (Mains)',
            topics: [
              'Letter Writing (Formal & Informal)',
              'Essay Writing (Banking & Economy Topics)',
              'Precis Writing',
            ],
          },
        ],
      },
      {
        id: 3,
        code: 'Quant',
        name: 'Quantitative Aptitude',
        questions: '35 (Prelims); 35 (Mains)',
        duration: '20–40 minutes',
        modules: [
          {
            title: 'Arithmetic',
            topics: [
              'Number System',
              'HCF & LCM',
              'Percentage',
              'Profit, Loss & Discount',
              'Simple & Compound Interest',
              'Ratio & Proportion',
              'Time, Work & Distance',
              'Partnership & Mensuration',
            ],
          },
          {
            title: 'Data Interpretation',
            topics: [
              'Bar Graph & Line Graph',
              'Pie Chart',
              'Tabular DI',
              'Missing DI & Caselet',
              'Quadratic Equations',
              'Data Sufficiency',
            ],
          },
        ],
      },
      {
        id: 4,
        code: 'GK',
        name: 'General Awareness & Banking Knowledge',
        questions: '40–50 (Mains only)',
        duration: '25–35 minutes',
        modules: [
          {
            title: 'Banking & Financial Awareness',
            topics: [
              'RBI History, Structure & Functions',
              'Monetary Policy — Repo, CRR, SLR',
              'Types of Banks & Financial Institutions',
              'Recent Banking Sector Updates',
              'Basel Norms & Capital Adequacy',
              'Payment Systems (NEFT, RTGS, UPI)',
            ],
          },
          {
            title: 'Current Affairs & Static GK',
            topics: [
              'Monthly Current Affairs (Last 6 Months)',
              'Union Budget Highlights',
              'Important Government Schemes',
              'Sports, Awards & Appointments',
              'India & World GK',
              'Science & Technology',
            ],
          },
        ],
      },
    ],
    includes: [
      '500+ HD Video Lectures (All Subjects)',
      'Printed Study Material (Reasoning, English, Maths, GK)',
      '5,000+ Practice Questions with Detailed Solutions',
      '30 Full-Length Mock Tests (Prelims + Mains Pattern)',
      'Previous Year Papers (2015–2025)',
      'Daily Live Classes at Bhopal Centre',
      'Weekly Doubt Clearing Sessions',
      'Monthly Current Affairs PDF',
      'Interview Preparation (for selected students)',
      'IBS Vigyan App Access',
      'Performance Analytics Dashboard',
    ],
    highlights: [
      { label: 'Duration', value: '12 Months' },
      { label: 'Mode', value: 'Classroom (Bhopal) + Online' },
      { label: 'Exams Covered', value: 'SBI PO, IBPS PO, RRB PO, SSC CGL, CHSL' },
      { label: 'Batch Size', value: 'Max 40 Students' },
      { label: 'Language', value: 'Hindi + English Medium' },
      { label: 'Pass Rate', value: '82%+' },
      { label: 'Classes', value: 'Daily (Morning + Evening Batch)' },
      { label: 'Students', value: '8,700+ Selections' },
      { label: 'Next Batch', value: 'August 5, 2026' },
    ],
    faqs: [
      {
        q: 'Which exams does this coaching cover?',
        a: 'SBI PO, SBI Clerk, IBPS PO, IBPS Clerk, IBPS RRB PO & Office Assistant, SSC CGL, SSC CHSL, and SSC MTS.',
      },
      {
        q: 'Are daily classes available at the Bhopal centre?',
        a: 'Yes. Daily morning (8 AM–11 AM) and evening (5 PM–8 PM) batches run at our Bhopal centre. Online students get live streaming + recordings.',
      },
      {
        q: 'How many mock tests are included?',
        a: '30 full-length mock tests (15 Prelims + 15 Mains pattern) across all subjects, plus unlimited subject-wise sectional tests.',
      },
      {
        q: 'Is online-only enrollment available?',
        a: 'Yes — complete online package with recorded lectures, live sessions, and WhatsApp doubt support is available for outstation students.',
      },
      {
        q: 'What is the next batch start date?',
        a: 'Next batch starts August 5, 2026. Early enrollment recommended — we keep batches small (max 40 students) for quality coaching.',
      },
    ],
    testimonials: [
      {
        name: 'Varun Saxena',
        bank: 'Selected in IBPS PO 2024, Bhopal',
        text: 'IBS coaching in Bhopal is excellent. Daily classes, proper study material, and frequent mock tests gave me the discipline to crack IBPS PO.',
        score: 'IBPS PO Selected',
      },
      {
        name: 'Komal Jain',
        bank: 'Selected in SBI Clerk 2025',
        text: 'The English and Reasoning coaching at IBS is very good. Daily practice sessions helped me improve my speed and accuracy significantly.',
        score: 'SBI Clerk 2025',
      },
      {
        name: 'Abhishek Yadav',
        bank: 'SSC CGL 2024, Bhopal',
        text: 'Got SSC CGL Tier I and II cleared. IBS quant coaching is top-notch. The data interpretation practice was especially helpful.',
        score: 'SSC CGL 2024',
      },
    ],
  },
};
