/**
 * Sniffer — Persistent Toggle Switcher
 * Lives outside AnimatePresence so the pill animates smoothly across page transitions.
 */
import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const OPTIONS = ['people', 'business', 'corporate'] as const;
type Option = (typeof OPTIONS)[number];

const ROUTES: Record<Option, string> = {
  people: '/',
  business: '/business',
  corporate: '/corporate',
};

const COLORS: Record<Option, string> = {
  people: '#3DDC84',
  business: '#00A896',
  corporate: '#3D3C6E',
};

const LABEL: Record<Option, string> = {
  people: 'People',
  business: 'Business',
  corporate: 'Corporate',
};

function routeToOption(pathname: string): Option {
  if (pathname.startsWith('/business')) return 'business';
  if (pathname.startsWith('/corporate')) return 'corporate';
  return 'people';
}

export function Toggle() {
  const location = useLocation();
  const navigate = useNavigate();
  const active = routeToOption(location.pathname);

  const trackRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillRect, setPillRect] = useState({ left: 4, width: 100 });

  // Measure pill position after every active change and after first paint
  const measure = () => {
    const idx = OPTIONS.indexOf(active);
    const btn = btnRefs.current[idx];
    const track = trackRef.current;
    if (!btn || !track) return;
    const trackBox = track.getBoundingClientRect();
    const btnBox = btn.getBoundingClientRect();
    setPillRect({ left: btnBox.left - trackBox.left, width: btnBox.width });
  };

  // useLayoutEffect for synchronous measurement before paint (avoids jump)
  useLayoutEffect(() => { measure(); }, [active]);

  // Also measure on resize
  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active]);

  return (
    <div
      className="fixed top-0 inset-x-0 z-[60] flex justify-center py-2"
      style={{
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div
        ref={trackRef}
        className="relative flex items-center rounded-full px-1 py-1"
        style={{
          background: '#f5f4f0',
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
        }}
      >
        {/* Single always-mounted pill — slides & morphs color */}
        <motion.div
          className="absolute top-1 bottom-1 rounded-full pointer-events-none"
          animate={{
            left: pillRect.left,
            width: pillRect.width,
            backgroundColor: COLORS[active],
            boxShadow: `0 4px 16px -4px ${COLORS[active]}99`,
          }}
          transition={{
            left: { type: 'spring', stiffness: 420, damping: 36, mass: 0.7 },
            width: { type: 'spring', stiffness: 420, damping: 36, mass: 0.7 },
            backgroundColor: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
            boxShadow: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
          }}
        />

        {OPTIONS.map((option, i) => (
          <button
            key={option}
            ref={(el) => { btnRefs.current[i] = el; }}
            onClick={() => { if (option !== active) navigate(ROUTES[option]); }}
            className="relative z-10 px-5 sm:px-7 py-2 text-[13px] sm:text-sm font-bold rounded-full cursor-pointer select-none text-center min-w-[90px] sm:min-w-[110px]"
            style={{ background: 'none', border: 'none' }}
          >
            <motion.span
              animate={{ color: active === option ? '#ffffff' : '#9e9e96' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ fontFamily: 'var(--font-nunito)', display: 'block' }}
            >
              {LABEL[option]}
            </motion.span>
          </button>
        ))}
      </div>
    </div>
  );
}
