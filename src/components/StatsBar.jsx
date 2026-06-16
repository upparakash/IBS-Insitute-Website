import { useCounter } from '../hooks/useCounter';
import { STATS } from '../data/siteData';

function StatItem({ stat }) {
  const { count, ref } = useCounter(stat.value, 2200);

  return (
    <div ref={ref} className="flex items-center gap-4 p-6 group">
      <div className="text-4xl">{stat.icon}</div>
      <div>
        <div className="font-heading font-extrabold text-3xl lg:text-4xl text-primary leading-none">
          {count.toLocaleString()}{stat.suffix}
        </div>
        <div className="text-gray-600 font-medium text-sm mt-1">{stat.label}</div>
      </div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="relative bg-white border-y border-gray-100 shadow-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3" />
      <div className="container-custom relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
          {STATS.map((stat, i) => (
            <div key={i} className="hover:bg-primary/3 transition-colors">
              <StatItem stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
