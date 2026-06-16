import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { BLOGS } from '../data/siteData';

export default function BlogSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            📝 Latest Updates
          </div>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-gray-900 mb-3">
            Blog & <span className="text-primary">Articles</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
            Stay updated with the latest banking exam notifications, study tips, and industry news
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {BLOGS.map((blog) => (
            <Link key={blog.id} to={blog.href}
              className="group glass-card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

              {/* Thumbnail */}
              <div className={`relative h-40 bg-gradient-to-br ${blog.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="relative text-white text-center p-4">
                  <div className="text-4xl mb-2">📰</div>
                  <div className="font-heading font-bold text-sm leading-tight">{blog.category}</div>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow">
                  {blog.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading font-bold text-base text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt size={10} /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock size={10} /> {blog.readTime}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Article <FaArrowRight size={11} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog"
            className="inline-flex items-center gap-2 btn-primary">
            View All Articles <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
