import { Link } from 'react-router-dom';
import { FaStar, FaUsers, FaArrowRight, FaClock, FaCheckCircle, FaTag } from 'react-icons/fa';
import { COURSES } from '../data/siteData';

export default function CoursesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-0" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            <FaTag size={11} /> Featured Programs
          </div>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-gray-900 mb-3">
            Our <span className="text-primary">Premium Courses</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
            India's most comprehensive banking & finance exam preparation courses designed by ex-bankers and RBI officers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {COURSES.map((course) => (
            <div key={course.id}
              className="group glass-card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

              {/* Image Header */}
              <div className={`relative h-44 bg-gradient-to-br ${course.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-2">🎓</div>
                    <div className="font-heading font-bold text-xl">{course.name}</div>
                  </div>
                </div>
                {course.badge && (
                  <div className={`absolute top-3 right-3 ${course.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                    {course.badge}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{course.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                {/* Course papers */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.papers.map(p => (
                    <span key={p} className="text-xs bg-primary/5 text-primary px-2 py-1 rounded-lg font-medium">{p}</span>
                  ))}
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-3 text-xs text-gray-600 mb-4 pb-4 border-b border-gray-100">
                  <span className="flex items-center gap-1"><FaClock size={10} /> {course.duration}</span>
                  <span className="flex items-center gap-1"><FaUsers size={10} /> {course.students.toLocaleString()}</span>
                  <span className="flex items-center gap-1 text-gold font-semibold"><FaStar size={10} /> {course.rating}</span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-heading font-bold text-2xl text-primary">{course.fee}</div>
                    <div className="text-xs text-gray-400 line-through">{course.originalFee}</div>
                  </div>
                  <Link to={`/courses/${course.slug}`}
                    className="flex items-center gap-2 bg-primary hover:bg-accent text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all group-hover:gap-3">
                    Enroll Now <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/courses"
            className="inline-flex items-center gap-2 btn-primary">
            View All Courses <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
