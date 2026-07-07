import { TICKER_ITEMS } from '../data/siteData';

export default function NewsTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="bg-[#EEF2FF] border-y border-primary/15 py-0 overflow-hidden relative">
      <div className="flex items-stretch">
        {/* Static label */}
        <div className="shrink-0 bg-primary text-white text-[11px] font-bold px-5 py-2.5 z-10 flex items-center gap-2 tracking-wide">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse inline-block" />
          LIVE UPDATES
        </div>

        {/* Divider */}
        <div className="w-px bg-primary/20 shrink-0" />

        {/* Scrolling ticker */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex items-center whitespace-nowrap h-full"
            style={{ animation: 'ticker-scroll 30s linear infinite' }}
            onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
          >
            {items.map((item, i) => (
              <span key={i} className="text-[12px] text-gray-800 font-medium inline-flex items-center py-2.5">
                <span className="text-primary mx-4 font-bold">◆</span>
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
      `}</style>
    </div>
  );
}
