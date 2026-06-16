import Layout from '../layouts/Layout';
import { FACULTY } from '../data/siteData';
import { FaStar, FaUsers, FaGraduationCap, FaBriefcase, FaLinkedin } from 'react-icons/fa';

export default function FacultyPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">Our Expert Faculty</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Learn from ex-bankers, RBI officers and national award-winning educators with decades of real-world experience</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <p className="text-center text-gray-500 text-sm mb-8">
            Our panel of <strong className="text-primary">32 retired banking professionals</strong> from SBI, PNB, Canara Bank, BOI, ICICI and more — bringing real banking experience to your exam prep.
          </p>
        </div>
        <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FACULTY.map((f, i) => (
            <div key={i} className="glass-card overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 group">
              <div className={`relative h-52 bg-gradient-to-br ${f.color} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="text-white font-heading font-bold text-6xl relative z-10">{f.initials}</div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 text-xs font-bold px-2 py-1 rounded-lg shadow">
                  <FaStar className="text-gold" size={10} /> {f.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-gray-900 mb-0.5">{f.name}</h3>
                <p className="text-accent text-xs font-semibold mb-3">{f.expertise}</p>
                <div className="space-y-2 text-xs text-gray-600 mb-4">
                  <div className="flex items-center gap-2"><FaGraduationCap className="text-primary shrink-0" />{f.qualification}</div>
                  <div className="flex items-center gap-2"><FaBriefcase className="text-accent shrink-0" />{f.experience}</div>
                  <div className="flex items-center gap-2"><FaUsers className="text-success shrink-0" />{f.students.toLocaleString()}+ Students</div>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-2">{f.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {f.courses.map(c => <span key={c} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{c}</span>)}
                </div>
                <a href={f.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-primary text-primary hover:bg-primary hover:text-white text-sm font-semibold py-2 rounded-lg transition-all">
                  <FaLinkedin size={13} /> View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
