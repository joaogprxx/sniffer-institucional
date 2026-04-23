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
  people: '/people',
  business: '/business',
  corporate: '/corporate',
};

const LABEL: Record<Option, string> = {
  people: 'Pessoas',
  business: 'Negócios',
  corporate: 'Comunidade',
};

const TRACK_BG: Record<Option, string> = {
  people: '#eeeee8',
  business: 'rgba(0,0,0,0.25)',
  corporate: 'rgba(45,47,94,0.20)',
};

const PILL_BG: Record<Option, string> = {
  people: '#3DDC84',
  business: '#2D2F5E',
  corporate: '#00A896',
};

const PILL_SHADOW: Record<Option, string> = {
  people: '0 4px 16px -4px #3DDC8499',
  business: 'none',
  corporate: 'none',
};

const ACTIVE_TEXT: Record<Option, string> = {
  people: '#ffffff',
  business: '#00A896',
  corporate: '#2D2F5E',
};

const INACTIVE_TEXT: Record<Option, string> = {
  people: 'rgba(45,47,94,0.5)',
  business: 'rgba(255,255,255,0.45)',
  corporate: 'rgba(45,47,94,0.55)',
};

const TRANSITION_BG = { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] as const };

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

  const measure = () => {
    const idx = OPTIONS.indexOf(active);
    const btn = btnRefs.current[idx];
    const track = trackRef.current;
    if (!btn || !track) return;
    const trackBox = track.getBoundingClientRect();
    const btnBox = btn.getBoundingClientRect();
    setPillRect({ left: btnBox.left - trackBox.left, width: btnBox.width });
  };

  useLayoutEffect(() => { measure(); }, [active]);

  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active]);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] flex justify-center pointer-events-none pt-2">
      <div className="pointer-events-auto">
      <motion.div
        ref={trackRef}
        className="relative flex items-center rounded-full px-1 py-1"
        animate={{ backgroundColor: TRACK_BG[active] }}
        transition={TRANSITION_BG}
        style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.15)' }}
      >
        {/* Single always-mounted pill — slides & morphs color */}
        <motion.div
          className="absolute top-1 bottom-1 rounded-full pointer-events-none"
          animate={{
            left: pillRect.left,
            width: pillRect.width,
            backgroundColor: PILL_BG[active],
            boxShadow: PILL_SHADOW[active],
          }}
          transition={{
            left: { type: 'spring', stiffness: 420, damping: 36, mass: 0.7 },
            width: { type: 'spring', stiffness: 420, damping: 36, mass: 0.7 },
            backgroundColor: TRANSITION_BG,
            boxShadow: TRANSITION_BG,
          }}
        />

        {OPTIONS.map((option, i) => (
          <button
            key={option}
            ref={(el) => { btnRefs.current[i] = el; }}
            onClick={() => { if (option !== active) navigate(ROUTES[option]); }}
            className="relative z-10 px-4 sm:px-6 py-2 text-[13px] sm:text-sm font-bold rounded-full cursor-pointer select-none text-center min-w-[72px] sm:min-w-[90px]"
            style={{ background: 'none', border: 'none' }}
          >
            <motion.span
              animate={{
                color: active === option ? ACTIVE_TEXT[active] : INACTIVE_TEXT[active],
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ fontFamily: 'var(--font-nunito)', display: 'block' }}
            >
              {LABEL[option]}
            </motion.span>
          </button>
        ))}
      </motion.div>
      </div>
    </div>
  );
}
