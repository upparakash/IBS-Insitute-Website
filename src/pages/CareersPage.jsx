import { useState } from 'react';
import Layout from '../layouts/Layout';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaRupeeSign, FaArrowRight, FaUsers, FaGraduationCap, FaHandshake } from 'react-icons/fa';

const OPENINGS = [
  { id: 1, title: 'Senior Faculty — JAIIB/CAIIB', dept: 'Academic', location: 'Delhi NCR', type: 'Full-time', exp: '5+ Years', salary: '₹8-12 LPA', skills: ['Banking Knowledge', 'JAIIB/CAIIB Certified', 'Teaching'], color: 'text-blue-600' },
  { id: 2, title: 'Content Writer — Banking Domain', dept: 'Content', location: 'Remote', type: 'Full-time', exp: '2-4 Years', salary: '₹4-6 LPA', skills: ['Banking', 'Content Writing', 'SEO'], color: 'text-purple-600' },
  { id: 3, title: 'Digital Marketing Manager', dept: 'Marketing', location: 'Mumbai', type: 'Full-time', exp: '3-5 Years', salary: '₹6-10 LPA', skills: ['Google Ads', 'Facebook Ads', 'SEO'], color: 'text-green-600' },
  { id: 4, title: 'Academic Counselor', dept: 'Admissions', location: 'Delhi, Mumbai', type: 'Full-time', exp: '1-3 Years', salary: '₹3-5 LPA + Incentive', skills: ['Communication', 'Sales', 'Counseling'], color: 'text-yellow-600' },
  { id: 5, title: 'Full Stack Developer', dept: 'Tech', location: 'Bangalore / Remote', type: 'Full-time', exp: '2-4 Years', salary: '₹8-15 LPA', skills: ['React', 'Node.js', 'MongoDB'], color: 'text-red-600' },
  { id: 6, title: 'Video Editor & Graphic Designer', dept: 'Creative', location: 'Delhi NCR', type: 'Full-time / Freelance', exp: '2-3 Years', salary: '₹4-7 LPA', skills: ['Premiere Pro', 'After Effects', 'Photoshop'], color: 'text-teal-600' },
];

const BENEFITS = [
  { icon: <FaBriefcase className="text-primary" size={24} />, title: 'Competitive Salary', desc: 'Market-leading compensation with annual increments' },
  { icon: <FaClock className="text-accent" size={24} />, title: 'Flexible Hours', desc: 'Work-life balance with flexible working hours' },
  { icon: <FaGraduationCap className="text-success" size={24} />, title: 'Learning & Growth', desc: 'Continuous upskilling and certification support' },
  { icon: <FaUsers className="text-gold" size={24} />, title: 'Great Team Culture', desc: 'Collaborative environment with passionate educators' },
  { icon: <FaHandshake className="text-purple-600" size={24} />, title: 'Job Security', desc: '12+ years of stability in EdTech industry' },
  { icon: <FaRupeeSign className="text-rose-600" size={24} />, title: 'Performance Bonuses', desc: 'Quarterly & annual performance incentives' },
];

export default function CareersPage() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            💼 Join Our Team
          </div>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">
            Build Your Career at<br /><span className="text-gold">IBS Bank Career</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Join India's leading banking & finance coaching institute. Work with passionate educators, help students achieve their dreams.
          </p>
          <a href="#openings" className="btn-gold inline-flex items-center gap-2 text-base">View Open Positions <FaArrowRight size={13} /></a>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">Why Work With IBS?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join a mission-driven team that's changing lives through quality education</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="glass-card p-6 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">{b.icon}</div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="openings" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-2">Open Positions</h2>
            <p className="text-gray-600">{OPENINGS.length} positions currently available</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {OPENINGS.map(job => (
              <div key={job.id} className="glass-card p-6 hover:shadow-2xl transition-all group cursor-pointer" onClick={() => setSelected(job)}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 text-lg mb-1 group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><FaBriefcase size={10} /> {job.dept}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><FaMapMarkerAlt size={10} /> {job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg bg-gray-100 ${job.color}`}>{job.exp}</span>
                </div>

                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaRupeeSign size={12} className="text-success" />
                    <span className="font-semibold">{job.salary}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {job.skills.map(s => (
                    <span key={s} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-lg font-medium">{s}</span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  View Details & Apply <FaArrowRight size={11} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelected(null)}>
          <div className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="font-heading font-bold text-2xl text-gray-900 mb-2">{selected.title}</h2>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1.5"><FaBriefcase size={12} className="text-primary" /> {selected.dept}</span>
                  <span className="flex items-center gap-1.5"><FaMapMarkerAlt size={12} className="text-accent" /> {selected.location}</span>
                  <span className="flex items-center gap-1.5"><FaClock size={12} className="text-success" /> {selected.type}</span>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 text-2xl font-light">×</button>
            </div>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FaRupeeSign className="text-success" />
                <span className="font-bold text-gray-900">{selected.salary}</span>
                <span>•</span>
                <span>{selected.exp} Experience Required</span>
              </div>
            </div>

            <div className="space-y-5 mb-6">
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">Key Responsibilities</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {['Deliver high-quality lectures and training sessions', 'Create engaging study materials and content', 'Conduct mock tests and provide feedback', 'Mentor students and resolve their doubts'].map(t => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.skills.map(s => (
                    <span key={s} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-lg font-medium">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 btn-primary py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                Apply Now <FaArrowRight size={12} />
              </button>
              <button onClick={() => setSelected(null)} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-3">Don't See Your Role?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">We're always looking for talented individuals. Send us your resume and we'll reach out when suitable openings arise.</p>
          <a href="mailto:careers@ibsbankcareer.in" className="btn-gold inline-flex items-center gap-2 text-base">
            Send Your Resume
          </a>
        </div>
      </section>
    </Layout>
  );
}
