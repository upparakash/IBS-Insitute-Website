import Layout from '../layouts/Layout';
import SEOHead from '../components/SEOHead';
import {
  FaGooglePlay, FaApple, FaStar, FaDownload, FaUsers, FaVideo,
  FaClock, FaBook, FaMobile, FaWifi, FaChartBar, FaCheckCircle,
  FaArrowRight, FaWhatsapp, FaPlay, FaBell, FaSignInAlt,
} from 'react-icons/fa';

const WA_BASE = 'https://wa.me/919447873644';
const PLAY_STORE = 'https://play.google.com/store/apps';
const APP_STORE = 'https://www.apple.com/app-store/';
const LMS_LOGIN = 'https://learn.ibsbankcareer.in/';

const APP_STATS = [
  { value: '50K+', label: 'Downloads', icon: <FaDownload className="text-white" size={20} />, color: 'from-blue-500 to-blue-700' },
  { value: '4.8', label: 'Star Rating', icon: <FaStar className="text-white" size={20} />, color: 'from-gold to-yellow-600' },
  { value: '1000+', label: 'Videos', icon: <FaVideo className="text-white" size={20} />, color: 'from-purple-500 to-purple-700' },
  { value: '24/7', label: 'Access', icon: <FaClock className="text-white" size={20} />, color: 'from-success to-green-700' },
];

const APP_FEATURES = [
  {
    icon: <FaVideo size={26} className="text-accent" />,
    title: 'Live Classes',
    desc: 'Attend scheduled live sessions by expert faculty. Ask questions in real-time and get instant doubt resolution during class.',
    color: 'bg-accent/10',
  },
  {
    icon: <FaPlay size={26} className="text-purple-600" />,
    title: 'Recorded Sessions',
    desc: '1000+ recorded lectures sorted by subject and topic. Watch and re-watch at your own pace — anytime, anywhere.',
    color: 'bg-purple-100',
  },
  {
    icon: <FaBell size={26} className="text-gold" />,
    title: 'Daily Current Affairs',
    desc: 'Banking and economy news delivered every morning inside the app. Curated specifically for JAIIB, CAIIB, and bank exam aspirants.',
    color: 'bg-yellow-50',
  },
  {
    icon: <FaChartBar size={26} className="text-success" />,
    title: 'Mock Tests & Analytics',
    desc: 'Hundreds of mock tests and chapter-wise quizzes. Get detailed performance analytics, rank among peers, and track weak areas.',
    color: 'bg-green-50',
  },
  {
    icon: <FaBook size={26} className="text-rose-600" />,
    title: 'Study Material Downloads',
    desc: 'Download PDF notes for all subjects — JAIIB, CAIIB, Bank PO, SSC, and more. Accessible even without internet.',
    color: 'bg-rose-50',
  },
  {
    icon: <FaWifi size={26} className="text-teal-600" />,
    title: 'Offline Mode',
    desc: 'Download videos and study material for offline use. Perfect for studying during commutes or in areas with poor connectivity.',
    color: 'bg-teal-50',
  },
];

const PHONE_SCREENS = [
  {
    label: 'Home Dashboard',
    color: 'from-blue-600 to-primary',
    icon: <FaChartBar size={32} className="text-white/80" />,
    elements: ['Course Progress', 'Today\'s Class', 'Quick Quiz'],
  },
  {
    label: 'Live Class',
    color: 'from-purple-600 to-purple-800',
    icon: <FaVideo size={32} className="text-white/80" />,
    elements: ['Live Video Stream', 'Q&A Chat', 'Attendees'],
  },
  {
    label: 'Mock Tests',
    color: 'from-success to-green-700',
    icon: <FaChartBar size={32} className="text-white/80" />,
    elements: ['Score Report', 'Leaderboard', 'Review Answers'],
  },
  {
    label: 'Study Material',
    color: 'from-rose-500 to-rose-700',
    icon: <FaBook size={32} className="text-white/80" />,
    elements: ['PDF Notes', 'Downloads', 'Bookmarks'],
  },
];

const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Download the App',
    desc: 'Install IBS Vigyan from Google Play Store or Apple App Store. It\'s free to download.',
    icon: <FaDownload size={22} className="text-white" />,
    color: 'from-blue-500 to-blue-700',
  },
  {
    step: '2',
    title: 'Create Your Account',
    desc: 'Register with your mobile number, select your target exam, and enrol in your chosen course.',
    icon: <FaUsers size={22} className="text-white" />,
    color: 'from-purple-500 to-purple-700',
  },
  {
    step: '3',
    title: 'Start Learning',
    desc: 'Access live classes, recorded lectures, mock tests, PDFs, and daily current affairs — all from your phone.',
    icon: <FaPlay size={22} className="text-white" />,
    color: 'from-success to-green-700',
  },
];

export default function AppPage() {
  return (
    <Layout>
      <SEOHead
        title="IBS Vigyan App | Free Banking Exam App | JAIIB CAIIB Mock Tests | Download Now"
        description="Download the IBS Vigyan App — free banking exam app with JAIIB, CAIIB, bank PO mock tests, live classes, recorded videos, and daily current affairs. 1 lakh+ downloads on Android & iOS."
        keywords="IBS Vigyan app download, JAIIB app, CAIIB mock test app, banking exam app India, free banking app, IBS Bank Career app, banking study app Android"
        canonical="/app"
      />
      {/* ── 1. HERO ── */}
      <section className="bg-gradient-to-br from-primary via-blue-700 to-accent py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full blur-2xl" />

        <div className="container-custom relative z-10">
          <div className="flex justify-end mb-6">
            <a
              href={LMS_LOGIN}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm px-5 py-2.5 rounded-xl border border-white/30 backdrop-blur transition-all"
            >
              <FaSignInAlt size={14} /> Student Login
            </a>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gold text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">
                India's Banking Learning App
              </span>
              <h1 className="font-heading text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                IBS <span className="text-gold">Vigyan</span> App
              </h1>
              <p className="text-2xl text-white/80 font-heading mb-4">
                Banking Career in Your Pocket
              </p>
              <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-lg">
                Live classes, 1000+ recorded sessions, mock tests, daily current affairs, and downloadable study material — all in one powerful app for banking aspirants.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={PLAY_STORE}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-2xl transition-all border border-white/10 shadow-lg"
                >
                  <FaGooglePlay size={22} className="text-green-400" />
                  <div>
                    <div className="text-xs text-white/60 leading-none">Get it on</div>
                    <div className="font-bold text-base leading-tight">Google Play</div>
                  </div>
                </a>
                <a
                  href={APP_STORE}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-2xl transition-all border border-white/10 shadow-lg"
                >
                  <FaApple size={24} className="text-white" />
                  <div>
                    <div className="text-xs text-white/60 leading-none">Download on the</div>
                    <div className="font-bold text-base leading-tight">App Store</div>
                  </div>
                </a>
              </div>

              {/* Mini Rating */}
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <FaStar key={i} className="text-gold" size={16} />)}
                </div>
                <span className="text-white font-bold">4.8</span>
                <span className="text-white/60 text-sm">— Rated by 2,000+ students</span>
              </div>
            </div>

            {/* App Mockup Hero */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Main phone */}
                <div className="w-56 h-[480px] bg-white rounded-[3rem] shadow-2xl border-8 border-gray-900 relative overflow-hidden mx-auto">
                  <div className="h-6 bg-gray-900 rounded-t-2xl flex justify-center pt-2">
                    <div className="w-16 h-1.5 bg-gray-700 rounded-full" />
                  </div>
                  <div className="bg-gradient-to-br from-primary to-accent h-full px-3 py-4">
                    {/* App UI Mockup */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-heading font-bold text-sm">IBS Vigyan</span>
                      <div className="w-7 h-7 bg-white/20 rounded-full" />
                    </div>
                    <div className="bg-white/20 rounded-2xl p-3 mb-3">
                      <p className="text-white/70 text-xs">Today's Class</p>
                      <p className="text-white font-bold text-sm">JAIIB — PPB Paper</p>
                      <p className="text-white/80 text-xs">7:00 PM • Prof. Naresh Joshi</p>
                      <div className="mt-2 flex items-center gap-1.5 bg-gold/90 text-white text-xs font-bold px-3 py-1.5 rounded-full w-fit">
                        <FaPlay size={8} /> Join Now
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {[
                        { label: 'Mock Tests', val: '127 done', color: 'bg-white/15' },
                        { label: 'Streak', val: '14 days', color: 'bg-white/15' },
                      ].map(item => (
                        <div key={item.label} className={`${item.color} rounded-xl p-2.5`}>
                          <p className="text-white/70 text-xs">{item.label}</p>
                          <p className="text-white font-bold text-sm">{item.val}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/15 rounded-xl p-2.5">
                      <p className="text-white/70 text-xs mb-1">Your Progress</p>
                      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-gold w-[65%] rounded-full" />
                      </div>
                      <p className="text-white text-xs mt-1 font-semibold">65% Complete</p>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -right-4 top-16 bg-white rounded-2xl shadow-xl p-3 text-center w-20">
                  <div className="text-2xl font-extrabold text-primary font-heading">4.8</div>
                  <div className="flex justify-center gap-0.5 my-0.5">
                    {[1,2,3,4,5].map(i => <FaStar key={i} size={8} className="text-gold" />)}
                  </div>
                  <p className="text-xs text-gray-500">Rating</p>
                </div>
                <div className="absolute -left-6 bottom-20 bg-white rounded-2xl shadow-xl p-3 text-center w-20">
                  <div className="text-2xl font-extrabold text-primary font-heading">50K</div>
                  <p className="text-xs text-gray-500">Downloads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. APP STATS ── */}
      <section className="py-14 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {APP_STATS.map((stat, i) => (
              <div key={i} className="glass-card p-6 text-center hover:shadow-xl transition-shadow">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="font-heading text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FEATURES ── */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-bold text-sm uppercase tracking-widest">App Features</span>
            <h2 className="font-heading text-4xl font-bold text-gray-900 mt-2 mb-3">Everything You Need to Succeed</h2>
            <p className="text-gray-500 max-w-xl mx-auto">IBS Vigyan brings your entire banking exam preparation into one seamless mobile experience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APP_FEATURES.map((feature, i) => (
              <div key={i} className="glass-card p-7 hover:shadow-xl transition-all group">
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. APP SCREENSHOTS ── */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-3">See the App in Action</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Clean, intuitive design built specifically for banking aspirants and working bankers.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {PHONE_SCREENS.map((screen, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Phone frame */}
                <div className="w-40 h-72 bg-gray-900 rounded-[2rem] p-1.5 shadow-2xl">
                  <div className={`w-full h-full rounded-[1.7rem] bg-gradient-to-br ${screen.color} flex flex-col items-center justify-center gap-3 overflow-hidden p-4`}>
                    <div className="w-10 h-1 bg-white/30 rounded-full mb-1" />
                    {screen.icon}
                    <p className="text-white font-heading font-bold text-xs text-center">{screen.label}</p>
                    <div className="w-full space-y-1.5">
                      {screen.elements.map(el => (
                        <div key={el} className="bg-white/20 rounded-lg px-3 py-1.5 text-white text-xs text-center">{el}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-600">{screen.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ── */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-3">Get Started in 3 Simple Steps</h2>
            <p className="text-gray-500">From download to first lesson in under 5 minutes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="relative">
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%_-_16px)] w-8 z-10">
                    <FaArrowRight className="text-gray-300" size={20} />
                  </div>
                )}
                <div className="glass-card p-7 text-center hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="font-heading font-extrabold text-4xl text-gray-100 mb-2">{step.step}</div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. DOWNLOAD CTA ── */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-700 to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <FaMobile size={36} className="text-white" />
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
              Download IBS Vigyan Today
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Join 50,000+ students and working bankers who are accelerating their banking careers with the IBS Vigyan App. Free to download. Courses start at ₹999.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <a
                href={PLAY_STORE}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-7 py-4 rounded-2xl transition-all border border-white/10 shadow-xl"
              >
                <FaGooglePlay size={26} className="text-green-400" />
                <div className="text-left">
                  <div className="text-xs text-white/60 leading-none">Get it on</div>
                  <div className="font-bold text-lg leading-tight">Google Play</div>
                </div>
              </a>
              <a
                href={APP_STORE}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-7 py-4 rounded-2xl transition-all border border-white/10 shadow-xl"
              >
                <FaApple size={28} className="text-white" />
                <div className="text-left">
                  <div className="text-xs text-white/60 leading-none">Download on the</div>
                  <div className="font-bold text-lg leading-tight">App Store</div>
                </div>
              </a>
            </div>

            <p className="text-white/60 text-sm mb-6">— or —</p>

            <a
              href={`${WA_BASE}?text=Please send me the IBS Vigyan App download link`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-7 py-3.5 rounded-2xl border border-white/30 transition-all"
            >
              <FaWhatsapp size={18} /> Get App Link via WhatsApp
            </a>

            <div className="mt-10 flex flex-wrap gap-6 justify-center text-white/70 text-sm">
              {[
                { icon: <FaCheckCircle size={14} className="text-gold" />, text: 'Free Download' },
                { icon: <FaCheckCircle size={14} className="text-gold" />, text: 'No Credit Card Required' },
                { icon: <FaCheckCircle size={14} className="text-gold" />, text: 'Works on Android & iOS' },
                { icon: <FaCheckCircle size={14} className="text-gold" />, text: 'Offline Study Mode' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2">{item.icon} {item.text}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
