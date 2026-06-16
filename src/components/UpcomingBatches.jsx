import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUserTie, FaLaptop, FaMapMarkerAlt, FaChair, FaArrowRight } from 'react-icons/fa';
import { BATCHES } from '../data/siteData';

export default function UpcomingBatches() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            🔥 Limited Seats
          </div>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-gray-900 mb-3">
            Upcoming <span className="text-primary">Batches</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
            Register early and secure your spot in our next premium batch
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BATCHES.map((batch) => {
            const filled = ((batch.total - batch.seats) / batch.total) * 100;
            const isAlmostFull = batch.seats <= 10;

            return (
              <div key={batch.id}
                className="glass-card p-6 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-1">{batch.course}</h3>
                    <div className="flex items-center gap-1.5 text-accent text-sm font-semibold">
                      <FaCalendarAlt size={11} /> {batch.startDate}
                    </div>
                  </div>
                  {isAlmostFull && (
                    <span className="bg-gold text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse">
                      Filling Fast
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-2.5 mb-5 pb-5 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaUserTie size={13} className="text-primary" />
                    <span className="font-medium">{batch.faculty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    {batch.mode === 'Online' ? <FaLaptop size={13} className="text-accent" /> : <FaMapMarkerAlt size={13} className="text-accent" />}
                    <span>{batch.mode}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaChair size={13} className="text-gold" />
                    <span>Only <strong className="text-primary">{batch.seats}</strong> seats left out of {batch.total}</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-gray-600 mb-2">
                    <span>Batch Filling</span>
                    <span className="font-bold text-primary">{filled.toFixed(0)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${isAlmostFull ? 'bg-gold' : 'bg-primary'}`}
                      style={{ width: `${filled}%` }} />
                  </div>
                </div>

                {/* CTA */}
                <Link to={`/register?batch=${batch.id}`}
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-accent text-white font-semibold py-3 rounded-xl transition-all group-hover:gap-3">
                  Register Now <FaArrowRight size={12} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/batches" className="text-primary hover:text-accent font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:gap-3">
            View All Batches <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
