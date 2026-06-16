import { FaGooglePlay, FaApple, FaMobile, FaCheckCircle } from 'react-icons/fa';

const FEATURES = [
  'Live & Recorded Classes',
  'Offline Study Material',
  'Mock Tests & Analysis',
  'Daily Current Affairs',
  'Doubt Resolution',
  'Progress Tracking',
];

export default function AppDownloadSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              📱 Available Now
            </div>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-4">
              Learn On The Go with<br />
              <span className="text-gold">IBS Bank Career App</span>
            </h2>
            <p className="text-white/80 text-base lg:text-lg mb-6 leading-relaxed max-w-lg">
              India's most advanced banking exam prep app — 50,000+ students are already achieving their banking dreams on mobile.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {FEATURES.map(f => (
                <div key={f} className="flex items-center gap-2 text-white/90 text-sm">
                  <FaCheckCircle className="text-gold shrink-0" size={14} />
                  {f}
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5 shadow-lg">
                <FaGooglePlay className="text-green-600 text-xl" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-600 leading-none">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5 shadow-lg">
                <FaApple className="text-gray-900 text-xl" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-600 leading-none">DOWNLOAD ON</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-8">
              {[['4.8★', 'App Rating'], ['1L+', 'Downloads'], ['50K+', 'Active Users']].map(([val, lbl]) => (
                <div key={lbl} className="text-white">
                  <div className="font-heading font-bold text-2xl">{val}</div>
                  <div className="text-white/70 text-xs">{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone shell */}
              <div className="w-64 h-[500px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] border-4 border-gray-700 shadow-2xl relative overflow-hidden">
                {/* Screen */}
                <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                  {/* App UI mockup */}
                  <div className="h-full bg-gradient-to-b from-primary to-accent flex flex-col">
                    {/* Status bar */}
                    <div className="h-10 bg-primary flex items-center justify-between px-6 pt-2">
                      <span className="text-white text-[10px]">9:41</span>
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className={`h-2 bg-white rounded-sm ${i < 3 ? 'w-1' : 'w-0.5 opacity-40'}`} />
                        ))}
                      </div>
                    </div>

                    {/* App header */}
                    <div className="bg-white/95 mx-3 mt-3 rounded-2xl p-3 shadow-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <FaMobile className="text-primary text-sm" />
                        <span className="text-primary font-bold text-xs">IBS Bank Career</span>
                      </div>
                      <div className="text-gray-900 font-bold text-xs">Good Morning, Rahul! 👋</div>
                      <div className="text-gray-500 text-[10px]">Ready for today's preparation?</div>
                    </div>

                    {/* Cards */}
                    <div className="mx-3 mt-3 space-y-2 flex-1">
                      {[
                        { icon: '📹', title: 'Continue Watching', sub: 'JAIIB PPB - Chapter 12' },
                        { icon: '📝', title: 'Daily Mock Test', sub: '25 Questions • 30 min' },
                        { icon: '📰', title: 'Current Affairs', sub: 'Today\'s Banking News' },
                      ].map((item, i) => (
                        <div key={i} className="bg-white/90 backdrop-blur rounded-xl p-2.5 flex items-center gap-2">
                          <div className="text-lg">{item.icon}</div>
                          <div>
                            <div className="text-gray-900 font-bold text-[10px]">{item.title}</div>
                            <div className="text-gray-500 text-[9px]">{item.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-12 top-20 bg-white rounded-2xl shadow-xl p-3 animate-float">
                <div className="text-xl mb-0.5">🎯</div>
                <div className="text-xs font-bold text-gray-900">94%</div>
                <div className="text-[10px] text-gray-500">Pass Rate</div>
              </div>
              <div className="absolute -right-8 bottom-24 bg-white rounded-2xl shadow-xl p-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xl mb-0.5">⭐</div>
                <div className="text-xs font-bold text-gray-900">4.8★</div>
                <div className="text-[10px] text-gray-500">App Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
