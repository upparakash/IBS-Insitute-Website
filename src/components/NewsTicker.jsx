import { TICKER_ITEMS } from '../data/siteData';

export default function NewsTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="bg-gold/10 border-b border-gold/20 py-2 overflow-hidden relative">
      <div className="flex items-center">
        {/* Static label */}
        <div className="shrink-0 bg-gold text-white text-xs font-bold px-4 py-1 z-10 flex items-center gap-1.5">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse inline-block" />
          LIVE UPDATES
        </div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden flex-1 ml-3">
          <div
            className="flex gap-0 whitespace-nowrap"
            style={{
              animation: 'ticker-scroll 60s linear infinite',
            }}
          >
            {items.map((item, i) => (
              <span key={i} className="text-xs text-gray-700 font-medium inline-flex items-center">
                <span className="text-gold mx-4">★</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .flex:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
