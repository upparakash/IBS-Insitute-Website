import Layout from '../layouts/Layout';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CENTRES } from '../data/siteData';

export default function CentresPage() {
  const headOffice = CENTRES.find(c => c.type === 'Head Office');
  const corporateOffice = CENTRES.find(c => c.type === 'Corporate Office');
  const branches = CENTRES.filter(c => c.type === 'Centre');

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            📍 Our Locations
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">IBS Bank Career Centres</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
            Present across 12 locations in India — join us at a centre near you or study online from anywhere
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[['12+', 'Centres'], ['50K+', 'Students'], ['8', 'Languages'], ['All India', 'Online']].map(([v, l]) => (
              <div key={l} className="bg-white/15 backdrop-blur rounded-2xl p-4">
                <div className="font-heading font-extrabold text-2xl text-white">{v}</div>
                <div className="text-white/75 text-xs mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head & Corporate Offices */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <h2 className="font-heading font-bold text-2xl text-gray-900 mb-6 text-center">Main Offices</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[headOffice, corporateOffice].filter(Boolean).map(centre => (
              <div key={centre.id} className="glass-card overflow-hidden border-2 border-gold/30">
                <div className={`relative h-24 bg-gradient-to-br ${centre.color} p-5 flex items-center justify-between`}>
                  <div>
                    <h3 className="font-heading font-bold text-white text-xl">{centre.city}</h3>
                    <p className="text-white/80 text-sm">{centre.area}</p>
                  </div>
                  <span className="bg-gold text-white text-xs font-bold px-3 py-1.5 rounded-full">{centre.type}</span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-sm text-gray-600">
                    <FaMapMarkerAlt size={13} className="text-primary shrink-0 mt-0.5" />
                    <span>{centre.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <FaPhone size={12} className="text-accent shrink-0" />
                    <a href={`tel:${centre.phone}`} className="hover:text-primary transition-colors font-medium">{centre.phone}</a>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <FaEnvelope size={12} className="text-gold shrink-0" />
                    <a href={`mailto:${centre.email}`} className="hover:text-primary transition-colors">{centre.email}</a>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <FaClock size={12} className="text-success shrink-0" />
                    <span>{centre.hours}</span>
                  </div>
                  <a href={centre.mapUrl} target="_blank" rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
                    <FaMapMarkerAlt size={12} /> Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Centres */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="font-heading font-bold text-2xl text-gray-900 mb-2 text-center">Regional Centres</h2>
          <p className="text-gray-500 text-sm text-center mb-8">We are expanding rapidly — contact us to confirm the nearest centre and available courses</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {branches.map(centre => (
              <div key={centre.id} className="glass-card overflow-hidden hover:shadow-2xl transition-all group hover:-translate-y-1">
                {/* Header */}
                <div className={`relative h-24 bg-gradient-to-br ${centre.color} p-4 flex items-center justify-between`}>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg">{centre.city}</h3>
                    <p className="text-white/75 text-xs">{centre.area}</p>
                  </div>
                  <span className={`${centre.badge} text-white text-[10px] font-bold px-2 py-1 rounded-full`}>{centre.type}</span>
                </div>

                <div className="p-5">
                  <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-start gap-2 text-xs text-gray-600">
                      <FaMapMarkerAlt size={11} className="text-primary shrink-0 mt-0.5" />
                      <span>{centre.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <FaPhone size={10} className="text-accent shrink-0" />
                      <a href={`tel:${centre.phone}`} className="hover:text-primary transition-colors">{centre.phone}</a>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <FaClock size={10} className="text-success shrink-0" />
                      <span>{centre.hours}</span>
                    </div>
                  </div>

                  {/* Courses */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {centre.courses.map(c => (
                        <span key={c} className="flex items-center gap-1 text-[10px] text-success bg-success/10 px-2 py-0.5 rounded-lg font-medium">
                          <FaCheckCircle size={8} /> {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a href={centre.mapUrl} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 border border-primary text-primary hover:bg-primary hover:text-white font-semibold text-xs py-2 rounded-lg transition-all">
                      <FaMapMarkerAlt size={10} /> Directions
                    </a>
                    <Link to="/contact"
                      className="flex-1 flex items-center justify-center gap-1.5 btn-primary py-2 rounded-lg text-xs">
                      Enquire <FaArrowRight size={9} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 text-center border border-primary/20">
            <div className="text-5xl mb-4">🌐</div>
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">Study from Anywhere — 8 Languages</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              No centre nearby? Our online program offers live classes, 1000+ recorded sessions, and study materials in Hindi, English, Tamil, Telugu, Malayalam, Kannada, Marathi & Bengali.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/courses" className="btn-primary flex items-center gap-2">Explore Online Courses <FaArrowRight size={12} /></Link>
              <Link to="/contact" className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-all">Talk to Counsellor</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
