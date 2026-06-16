import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { RESOURCES } from '../data/siteData';

export default function ResourcesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            📚 100% Free
          </div>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-gray-900 mb-3">
            Free <span className="text-primary">Learning Resources</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
            Access premium study materials, current affairs, RBI circulars and mock tests — completely free
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((resource, i) => (
            <Link key={i} to={resource.href}
              className="group glass-card p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">

              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {resource.icon}
                </div>

                {/* Count badge */}
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {resource.count}
                </div>

                <h3 className="font-heading font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {resource.desc}
                </p>

                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  <FaDownload size={12} /> Access Now <FaArrowRight size={11} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
