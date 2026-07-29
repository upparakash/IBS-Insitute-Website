import Layout from '../layouts/Layout';
import SEOHead from '../components/SEOHead';
import { FaYoutube, FaExternalLinkAlt, FaBell, FaPlayCircle, FaCheckCircle } from 'react-icons/fa';

const CHANNELS = [
  {
    name: 'Institute of Banking Studies (IBS)',
    handle: '@INSTITUTEOFBANKINGSTUDIESIBS',
    url: 'https://www.youtube.com/@INSTITUTEOFBANKINGSTUDIESIBS',
    description: 'Our flagship channel — live classes, faculty sessions, exam strategy talks, and updates on JAIIB, CAIIB and Bank PO batches straight from IBS.',
    tags: ['Live Classes', 'Faculty Sessions', 'Batch Updates'],
    color: 'from-red-500 to-red-700',
  },
  {
    name: 'IBS Cert Prep',
    handle: '@IBSCertPrep',
    url: 'https://www.youtube.com/@IBSCertPrep',
    description: 'Focused prep content for IIBF certificate examinations — concept breakdowns, quick revisions and exam-day tips for certification courses.',
    tags: ['IIBF Certifications', 'Quick Revision', 'Concept Videos'],
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'IBS DRA Official',
    handle: '@IBSDRAOfficial',
    url: 'https://www.youtube.com/@IBSDRAOfficial',
    description: 'Daily Recorded Assignments and practice-driven sessions to help students reinforce concepts between live classes.',
    tags: ['Daily Practice', 'Recorded Sessions', 'Assignments'],
    color: 'from-purple-500 to-purple-700',
  },
  {
    name: 'IBS JAIIB CAIIB Prep',
    handle: '@IBSJaiibCaiibPrep',
    url: 'https://www.youtube.com/@IBSJaiibCaiibPrep',
    description: 'Dedicated JAIIB & CAIIB preparation channel — paper-wise strategy, mock test discussions and last-mile revision for all four papers.',
    tags: ['JAIIB', 'CAIIB', 'Mock Test Discussion'],
    color: 'from-teal-500 to-teal-700',
  },
];

export default function YouTubeChannelsPage() {
  return (
    <Layout>
      <SEOHead
        title="IBS YouTube Channels | Free Banking Classes for JAIIB, CAIIB & Bank PO | IBS Bank Career"
        description="Explore all official IBS Bank Career YouTube channels — free live classes, IIBF certification prep, daily practice sessions and JAIIB/CAIIB strategy videos."
        keywords="IBS YouTube channel, JAIIB free classes, CAIIB free classes, IBS Cert Prep, banking exam YouTube, free bank PO videos, IBS DRA"
        canonical="/more/youtube-channels"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <FaYoutube /> Watch & Learn for Free
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">Our YouTube Channels</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A quick look at every official IBS Bank Career channel — live classes, exam strategy, daily practice and certification prep, all free to watch.
          </p>
        </div>
      </section>

      {/* Channel grid */}
      <div className="py-14 bg-gray-50 min-h-screen">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 gap-6">
            {CHANNELS.map((ch) => (
              <div key={ch.handle} className="glass-card overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className={`bg-gradient-to-br ${ch.color} p-6 text-white relative`}>
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <FaYoutube size={28} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading font-bold text-lg leading-tight truncate">{ch.name}</h3>
                      <p className="text-white/80 text-sm truncate">{ch.handle}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{ch.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {ch.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                        <FaCheckCircle size={10} /> {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={ch.url}
                      target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2.5 rounded-xl transition-all text-sm"
                    >
                      <FaBell size={12} /> Subscribe
                    </a>
                    <a
                      href={ch.url}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-accent/10 hover:bg-accent text-accent hover:text-white font-semibold px-4 py-2.5 rounded-xl transition-all text-sm whitespace-nowrap"
                    >
                      <FaPlayCircle size={13} /> Visit Channel
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-center text-white">
            <h3 className="font-heading text-xl font-bold mb-2">Never Miss a Free Class</h3>
            <p className="text-white/80 text-sm mb-5 max-w-lg mx-auto">
              Subscribe to all IBS channels and turn on notifications so you don't miss live classes, exam strategy sessions and important updates.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {CHANNELS.map((ch) => (
                <a
                  key={ch.handle}
                  href={ch.url}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-2.5 rounded-xl border border-white/30 transition-all text-sm"
                >
                  <FaExternalLinkAlt size={11} /> {ch.handle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
