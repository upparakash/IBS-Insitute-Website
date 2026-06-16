import { Link } from 'react-router-dom';
import { FaLinkedin, FaStar, FaGraduationCap, FaBriefcase, FaUsers, FaArrowRight } from 'react-icons/fa';
import { FACULTY } from '../data/siteData';

export default function FacultySection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            👨‍🏫 Expert Mentors
          </div>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-gray-900 mb-3">
            Learn from <span className="text-primary">Industry Experts</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
            Our faculty comprises ex-bankers, RBI officers, and national award-winning educators with decades of experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {FACULTY.slice(0, 4).map((faculty, i) => (
            <div key={i}
              className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">

              {/* Avatar Header */}
              <div className={`relative h-40 bg-gradient-to-br ${faculty.color} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/5" />
                <div className="relative text-white font-heading font-bold text-5xl">
                  {faculty.initials}
                </div>
                {/* Rating badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded-lg shadow">
                  <FaStar className="text-gold" size={10} />
                  <span className="text-gray-900">{faculty.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">{faculty.name}</h3>
                <p className="text-accent text-xs font-semibold mb-3">{faculty.expertise}</p>

                <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600 text-xs">
                    <FaGraduationCap size={12} className="text-primary" />
                    {faculty.qualification}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-xs">
                    <FaBriefcase size={11} className="text-accent" />
                    {faculty.experience}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-xs">
                    <FaUsers size={11} className="text-success" />
                    {faculty.students.toLocaleString()}+ Students
                  </div>
                </div>

                <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-2">
                  {faculty.description}
                </p>

                {/* Courses taught */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {faculty.courses.map(c => (
                    <span key={c} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{c}</span>
                  ))}
                </div>

                <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm py-2 rounded-lg transition-all">
                  <FaLinkedin size={14} /> Connect
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/faculty"
            className="inline-flex items-center gap-2 btn-primary">
            Meet All Faculty <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
