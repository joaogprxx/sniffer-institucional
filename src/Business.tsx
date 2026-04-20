/**
 * Sniffer Business Landing Page
 */
import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { Menu, X, Shield, ChevronDown, ChevronLeft, ChevronRight, Check as CheckIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
/* ───────────────────── Counter hook ───────────────────── */
function useCountUp(end: number, duration = 2000, prefix = '', suffix = '') {
  const [display, setDisplay] = useState(prefix + '0' + suffix);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = end / (duration / 16);
          const tick = () => {
            start += step;
            if (start >= end) {
              setDisplay(prefix + end.toLocaleString('pt-BR') + suffix);
              return;
            }
            setDisplay(prefix + Math.floor(start).toLocaleString('pt-BR') + suffix);
            requestAnimationFrame(tick);
          };
          tick();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, prefix, suffix]);
  return { display, ref };
}


/* ───────────────────── Navbar Solutions items ───────────────────── */
const solutionsItems = [
  { icon: '📍', label: 'Meu Território', desc: 'Presença digital completa para PMEs', href: '#como-funciona' },
  { icon: '💛', label: 'Meu Xodó', desc: 'Camada de confiança e programa de indicação', href: '#como-funciona' },
  { icon: '🐺', label: 'Matilha', desc: 'Comunidades privadas com Pack Rituals', href: '#como-funciona' },
  { icon: '💬', label: 'Uivo', desc: 'Mensageria: DM, grupos e live', href: '#como-funciona' },
  { icon: '🐾', label: 'Rastro', desc: 'Programa early adopter com badge exclusivo', href: '#como-funciona' },
  { icon: '📊', label: 'Insights', desc: 'Analytics e inteligência para o seu negócio', href: '#como-funciona' },
  { icon: '🔦', label: 'Spotlight', desc: 'Anúncio nativo no Place Card do negócio', href: '#planos' },
];

/* ───────────────────── BusinessNavbar ───────────────────── */
function BusinessNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setSolutionsOpen(true);
  };
  const closeDropdown = () => {
    hoverTimer.current = setTimeout(() => setSolutionsOpen(false), 100);
  };

  // Close on Escape
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setSolutionsOpen(false);
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const navLinkStyle: CSSProperties = {
    fontFamily: "'Ferom', Inter, sans-serif",
    fontWeight: 500,
    fontSize: '15px',
    color: '#FFFFFF',
    textDecoration: 'none',
    transition: 'color 200ms ease',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    lineHeight: 1,
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: '80px',
        zIndex: 50,
        backgroundColor: 'rgba(30, 32, 70, 0.95)',
        backdropFilter: 'blur(28px) saturate(180%)',
        WebkitBackdropFilter: 'blur(28px) saturate(180%)',
        boxShadow: '0 4px 32px rgba(0, 0, 0, 0.13)',
        borderRadius: '16px',
        margin: '0 24px',
        height: '96px',
      }}
    >
      {/* ── Mobile header row ── */}
      <div className="lg:hidden flex items-center justify-between" style={{ padding: '0 20px', height: '96px' }}>
        {/* Left — Criar Conta */}
        <button
          style={{ background: '#00A896', border: 'none', borderRadius: '10px', padding: '9px 16px', fontFamily: "'Ferom', Inter, sans-serif", fontWeight: 700, fontSize: '13px', color: '#FFFFFF', cursor: 'pointer', whiteSpace: 'nowrap' }}
        >
          Junte-se a essa revolução
        </button>

        {/* Center — logo */}
        <a href="/business" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <img src="/MARCA_SNIFFER-teal-principal.png" alt="Sniffer" style={{ height: '64px', width: 'auto' }} />
        </a>

        {/* Right — hamburger */}
        <button
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Desktop header row ── */}
      <div
        className="hidden lg:grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          height: '96px',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
        }}
      >
        {/* ── Logo (col 1) ── */}
        <a href="/business" style={{ display: 'flex', alignItems: 'center', justifySelf: 'start' }}>
          <img src="/MARCA_SNIFFER-teal-principal.png" alt="Sniffer" style={{ height: '88px', width: 'auto' }} />
        </a>

        {/* ── Desktop Nav Links ── */}
        <nav aria-label="Menu principal" className="hidden lg:flex">
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a
                href="#quem-somos"
                style={navLinkStyle}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#00A896';
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF';
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none';
                }}
              >
                Quem Somos
              </a>
            </li>

            {/* Solutions dropdown */}
            <li
              style={{ position: 'relative' }}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                aria-expanded={solutionsOpen}
                aria-haspopup="menu"
                onClick={() => setSolutionsOpen(v => !v)}
                style={{ ...navLinkStyle, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Solutions
                <ChevronDown
                  size={14}
                  style={{
                    color: '#00A896',
                    transition: 'transform 200ms ease',
                    transform: solutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              {/* Dropdown panel — 3 colunas, retangular */}
              <div
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 24px)',
                  left: '50%',
                  width: '1100px',
                  backgroundColor: '#1E2046',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(51, 45, 89, 0.10)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  padding: '40px',
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr 1fr',
                  gap: 0,
                  zIndex: 100,
                  opacity: solutionsOpen ? 1 : 0,
                  transform: solutionsOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-6px)',
                  pointerEvents: solutionsOpen ? 'auto' : 'none',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                }}
              >
                {/* Col 1 — título + descrição */}
                <div style={{ paddingRight: '32px', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                  <span style={{
                    fontFamily: "'Ferom', Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#FFFFFF',
                    display: 'block',
                    marginBottom: '12px',
                  }}>Solutions</span>
                  <p style={{
                    fontFamily: "'Ferom', Inter, sans-serif",
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.60)',
                    lineHeight: 1.6,
                    maxWidth: '180px',
                    margin: 0,
                  }}>
                    Descubra os produtos Sniffer para transformar a presença digital do seu negócio local.
                  </p>
                </div>

                {/* Col 2 + 3 — grid de produtos */}
                <div style={{
                  gridColumn: 'span 2',
                  paddingLeft: '32px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr 1fr',
                  gap: '4px',
                  alignContent: 'start',
                }}>
                  {solutionsItems.map(item => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setSolutionsOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        padding: '10px 12px',
                        textDecoration: 'none',
                        backgroundColor: 'transparent',
                        transition: 'background-color 150ms ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.07)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                      }}
                    >
                      <span style={{ fontSize: '20px', lineHeight: 1, flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{
                          fontFamily: "'Ferom', Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: '14px',
                          color: '#FFFFFF',
                          display: 'block',
                        }}>{item.label}</span>
                        <span style={{
                          fontFamily: "'Ferom', Inter, sans-serif",
                          fontSize: '12px',
                          color: 'rgba(255,255,255,0.60)',
                          display: 'block',
                        }}>{item.desc}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <a
                href="#como-funciona"
                style={navLinkStyle}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#00A896';
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF';
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none';
                }}
              >
                Como Funciona
              </a>
            </li>

            <li>
              <a
                href="#planos"
                style={navLinkStyle}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#00A896';
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF';
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none';
                }}
              >
                Planos
              </a>
            </li>
          </ul>
        </nav>

        {/* ── Right: CTAs + Hamburger (col 3) ── */}
        <div style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="hidden lg:flex items-center gap-3">
            {/* CTA Criar Conta */}
            <button
              style={{
                background: '#00A896',
                border: 'none',
                borderRadius: '10px',
                padding: '10px 24px',
                fontFamily: "'Ferom', Inter, sans-serif",
                fontWeight: 700,
                fontSize: '15px',
                color: '#FFFFFF',
                cursor: 'pointer',
                transition: 'background-color 200ms ease',
                lineHeight: 1,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#009A89';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#00A896';
              }}
            >
              Junte-se a essa revolução
            </button>
          </div>

          </div>
      </div>

      {/* ── Mobile Menu: Backdrop + Sheet ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              key="mobile-backdrop"
              className="lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 48,
                backgroundColor: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
            />

            {/* Sheet panel — slides in from right */}
            <motion.div
              key="mobile-sheet"
              className="lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: 'min(360px, 90vw)',
                height: '100vh',
                zIndex: 70,
                backgroundColor: '#1E2046',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-8px 0 40px rgba(51, 45, 89, 0.18)',
              }}
            >
              {/* Sheet header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  flexShrink: 0,
                }}
              >
                <a href="/business" onClick={() => setMobileOpen(false)}>
                  <img src="/MARCA_SNIFFER-teal-principal.png" alt="Sniffer" style={{ height: '64px', width: 'auto' }} />
                </a>
                <button
                  aria-label="Fechar menu"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                  }}
                >
                  <X size={22} />
                </button>
              </div>

              {/* Nav content — scrollable body */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '8px 24px 24px' }}>
                {/* Main nav links */}
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {[
                    { label: 'Quem Somos', href: '#quem-somos' },
                    { label: 'Como Funciona', href: '#como-funciona' },
                    { label: 'Planos', href: '#planos' },
                  ].map(item => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '16px 0',
                          fontFamily: "'Ferom', Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: '17px',
                          color: '#FFFFFF',
                          textDecoration: 'none',
                          borderBottom: '1px solid rgba(255,255,255,0.08)',
                          minHeight: '52px',
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}

                  {/* Solutions accordion */}
                  <li>
                    <button
                      aria-expanded={mobileSolutionsOpen}
                      onClick={() => setMobileSolutionsOpen(v => !v)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '16px 0',
                        fontFamily: "'Ferom', Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: '17px',
                        color: '#FFFFFF',
                        background: 'none',
                        border: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                        cursor: 'pointer',
                        minHeight: '52px',
                      }}
                    >
                      Solutions
                      <ChevronDown
                        size={18}
                        style={{
                          color: '#00A896',
                          flexShrink: 0,
                          transition: 'transform 250ms ease',
                          transform: mobileSolutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </button>

                    {/* Accordion body */}
                    <AnimatePresence initial={false}>
                      {mobileSolutionsOpen && (
                        <motion.div
                          key="solutions-accordion"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <ul style={{ listStyle: 'none', margin: 0, padding: '4px 0 8px' }}>
                            {solutionsItems.map(item => (
                              <li key={item.label}>
                                <a
                                  href={item.href}
                                  onClick={() => { setMobileOpen(false); setMobileSolutionsOpen(false); }}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                    padding: '12px 0 12px 8px',
                                    textDecoration: 'none',
                                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                                  }}
                                >
                                  <span style={{ fontSize: '20px', lineHeight: 1, flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                    <span style={{
                                      fontFamily: "'Ferom', Inter, sans-serif",
                                      fontWeight: 700,
                                      fontSize: '14px',
                                      color: '#FFFFFF',
                                      display: 'block',
                                    }}>
                                      {item.label}
                                    </span>
                                    <span style={{
                                      fontFamily: "'Ferom', Inter, sans-serif",
                                      fontSize: '12px',
                                      color: 'rgba(255,255,255,0.60)',
                                      display: 'block',
                                    }}>
                                      {item.desc}
                                    </span>
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                </ul>
              </div>

              {/* CTAs — sticky footer */}
              <div
                style={{
                  position: 'sticky',
                  bottom: 0,
                  backgroundColor: '#1E2046',
                  padding: '20px 24px',
                  borderTop: '1px solid rgba(255,255,255,0.10)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  flexShrink: 0,
                }}
              >
                <button
                  style={{
                    background: '#00A896',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '14px 24px',
                    fontFamily: "'Ferom', Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    width: '100%',
                    transition: 'background-color 200ms ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#009A89';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#00A896';
                  }}
                >
                  Junte-se a essa revolução
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default function Business() {
  const [currentPlanIndex, setCurrentPlanIndex] = useState(1);

  const nextPlan = () => setCurrentPlanIndex((prev: number) => (prev + 1) % 4);
  const prevPlan = () => setCurrentPlanIndex((prev: number) => (prev - 1 + 4) % 4);

  // Count-up metrics
  const m1 = useCountUp(40, 2000, 'R$ ', ' bi+');
  const m3 = useCountUp(4, 1500, '', ' planos');
  const m4 = useCountUp(1, 1000, '', ' objetivo');

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="bg-navy text-white antialiased min-h-screen pt-20"
      style={{ fontFamily: 'var(--font-nunito)' }}
    >

      {/* ═══════════════════ NAVBAR ═══════════════════ */}
      <BusinessNavbar />

      {/* ═══════════════════ SEÇÃO 1 — HERO ═══════════════════ */}
      <section className="pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-jakarta)' }}>
            As grandes plataformas te ignoraram.{' '}
            <span style={{ color: '#00A896' }}>A Sniffer foi feita pra você.</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              style={{
                background: '#00A896',
                border: 'none',
                borderRadius: '10px',
                padding: '14px 32px',
                fontFamily: "'Ferom', Inter, sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                color: '#FFFFFF',
                cursor: 'pointer',
                transition: 'background-color 200ms ease',
                lineHeight: 1,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#009A89'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#00A896'; }}
            >
              Fazer parte
            </button>
          </div>

          <p className="text-sm text-white/40 font-medium">
            Presença · Interação · Inteligência — o que move seu negócio.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4"><hr className="border-white/10" /></div>

      {/* ═══════════════════ SEÇÃO 2 — O PROBLEMA ═══════════════════ */}
      <section id="como-funciona" className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-semibold text-center mb-14" style={{ fontFamily: 'var(--font-jakarta)' }}>
            <span style={{ letterSpacing: '-0.02em' }}>O que é a{' '}
            <img src="/MARCA_SNIFFER-teal-principal.png" alt="Sniffer" style={{ height: '2.4em', display: 'inline', verticalAlign: 'middle', marginBottom: '0.1em', marginLeft: '-0.2em', marginRight: '-0.25em' }} />
            ?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* Before */}
            <div className="border border-white/10 rounded-2xl p-8">
              <h3 className="font-extrabold text-lg mb-5 text-white/40" style={{ fontFamily: 'var(--font-jakarta)' }}>Antes</h3>
              <ul className="space-y-4">
                {['Só listagem e visualização', 'Presença sem ação', 'Zero integração operacional', 'Sem retorno mensurável'].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="text-red-400/60 font-bold mt-0.5">✕</span>
                    <span className="text-white/50 line-through">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* After */}
            <div className="border border-tealBusiness/30 bg-tealBusiness/10 rounded-2xl p-8">
              <h3 className="font-extrabold text-lg mb-5 text-white" style={{ fontFamily: 'var(--font-jakarta)' }}>Com o Sniffer</h3>
              <ul className="space-y-4">
                {['Leads verificáveis e conversões', 'Business Card com ações diretas', 'Integração com seu dia a dia', 'ROI em tempo real'].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="text-tealBusiness font-bold mt-0.5">✓</span>
                    <span className="text-white font-semibold">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-white/50 text-[0.95rem] max-w-[600px] mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-nunito)' }}>
            PMEs brasileiras investem mais de R$ 40 bilhões por ano em marketing e tecnologia. A maioria vai pra ferramentas que entregam alcance — não resultado. A gente tá aqui pra mudar isso.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><hr className="border-white/10" /></div>

      {/* ═══════════════════ SEÇÃO 4 — BUSINESS CARD EM DESTAQUE ═══════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white" style={{ fontFamily: 'var(--font-jakarta)' }}>
              Seu negócio com tudo num só lugar.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              O Business Card é o coração do Sniffer Business. Mais que um perfil — é um hub completo entre você e seu cliente.
            </p>
            <ul className="space-y-4">
              {[
                'Links diretos: compra, reserva, WhatsApp, delivery',
                'Fotos, vídeos e cardápio em feed interativo',
                'Avaliações verificadas com sistema antifraude',
                'Localização, horários e dados operacionais em tempo real',
                'Selo Verified Sniffer (a partir do Plus)',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-tealBusiness text-lg mt-0.5">🐾</span>
                  <span className="text-white/70 font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Mockup */}
          <div className="flex justify-center">
            <div className="w-[300px] sm:w-[340px] bg-white rounded-3xl shadow-xl shadow-navy/8 border border-gray-100 overflow-hidden" style={{ animation: 'float-card 6s ease-in-out infinite' }}>
              <div className="bg-gradient-to-br from-navy/80 to-navy h-32 relative flex items-end px-5 pb-3">
                <div className="bg-white rounded-xl p-1.5 shadow-md -mb-6">
                  <div className="w-12 h-12 bg-tealBusiness/20 rounded-lg flex items-center justify-center text-xl">🍔</div>
                </div>
              </div>
              <div className="px-5 pt-8 pb-5">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <h4 className="font-extrabold" style={{ fontFamily: 'var(--font-jakarta)' }}>Burger Station</h4>
                  <Shield className="w-4 h-4 text-tealBusiness" />
                </div>
                <p className="text-xs text-navy/40 mb-3">Hambúrgueria artesanal · ⭐ 4.9 · 2.1k avaliações</p>
                <div className="flex gap-2 mb-3">
                  <span className="bg-tealBusiness/10 text-tealBusiness text-[10px] font-bold px-2 py-1 rounded-full">Aberto</span>
                  <span className="bg-navy/5 text-navy/50 text-[10px] font-bold px-2 py-1 rounded-full">Delivery</span>
                  <span className="bg-navy/5 text-navy/50 text-[10px] font-bold px-2 py-1 rounded-full">WhatsApp</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-tealBusiness text-navy text-xs font-bold py-2 rounded-xl">Pedir agora</button>
                  <button className="border border-navy/10 text-navy/60 text-xs font-bold py-2 rounded-xl">Ver cardápio</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SEÇÃO 5 — PLANOS E PREÇOS (CARROSSEL) ═══════════════════ */}
      <section id="planos" className="py-20 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-3 text-white" style={{ fontFamily: 'var(--font-jakarta)' }}>
            Planos que crescem com você.
          </h2>
          <p className="text-center text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Comece grátis. Evolua quando fizer sentido. Cada plano inclui tudo do anterior.
          </p>

          <div className="relative max-w-lg mx-auto group/carousel">
            {/* Carousel Navigation Arrows */}
            <button
              onClick={prevPlan}
              className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/10 border border-white/15 rounded-full shadow-sm text-white/50 hover:text-white hover:shadow-md hover:-translate-x-1 hover:scale-105 active:scale-95 transition-all outline-none"
              aria-label="Plano anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextPlan}
              className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/10 border border-white/15 rounded-full shadow-sm text-white/50 hover:text-white hover:shadow-md hover:translate-x-1 hover:scale-105 active:scale-95 transition-all outline-none"
              aria-label="Próximo plano"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Carousel Cards Container */}
            <div className="relative w-full h-[580px] perspective-[1000px] mt-4">
              {[
                {
                  name: 'Basic',
                  price: 'Grátis',
                  tagline: 'Pra quem tá chegando.',
                  cta: 'Fazer parte',
                  style: 'border border-white/10 bg-white/[0.06] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]',
                  btnStyle: 'border border-white/20 text-white hover:bg-white/5',
                  titleStyle: 'text-xl font-bold text-white',
                  popular: false,
                  light: false,
                  features: ['1 Localização', 'Feed com cardápio/ação', 'Comunidade básica', 'Rating e Reviews', 'Suporte N1']
                },
                {
                  name: 'Plus',
                  price: 'R$ 60',
                  tagline: 'Pra quem quer se destacar.',
                  cta: 'Quero o Plus',
                  style: 'bg-tealBusiness border-transparent shadow-[0_8px_30px_-6px_rgba(0,168,150,0.35)]',
                  btnStyle: 'bg-white text-tealBusiness hover:bg-white/90',
                  titleStyle: 'text-xl sm:text-2xl font-extrabold text-white',
                  popular: true,
                  light: false,
                  features: ['Selo Verified Sniffer', 'Até 3 Localizações', '1 Promoção ativa por vez', 'Push Notification restrito', 'Suporte N2']
                },
                {
                  name: 'Business',
                  price: 'R$ 140',
                  tagline: 'Pra quem tá crescendo de verdade.',
                  cta: 'Quero o Business',
                  style: 'bg-white border-transparent shadow-[0_8px_30px_-6px_rgba(0,0,0,0.15)]',
                  btnStyle: 'bg-navy text-white hover:bg-navy/90',
                  titleStyle: 'text-2xl sm:text-3xl font-black text-navy tracking-tight',
                  popular: false,
                  light: true,
                  features: ['Ranking Automático Premium', 'Até 6 Localizações', 'Promoções Ilimitadas', 'Análises de Mercado Local', 'Suporte N3']
                },
                {
                  name: 'Enterprise',
                  price: 'R$ 230',
                  tagline: 'Pra quem manda no bairro.',
                  cta: 'Falar com especialista',
                  style: 'bg-[#1A1C42] border border-white/10 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.4)]',
                  btnStyle: 'border border-white/20 text-white hover:bg-white/5',
                  titleStyle: 'text-3xl sm:text-[2rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-tealBusiness tracking-tighter leading-none pb-1',
                  popular: false,
                  light: false,
                  features: ['Moderação Avançada', 'A partir de 7 Localizações', 'Insights Fora do Nicho', 'Integrações Customizadas', 'Executivo de Conta']
                },
              ].map((plan, index) => {
                const isActive = index === currentPlanIndex;
                const offset = index - currentPlanIndex;
                const normalizedOffset = (offset + 4) % 4;
                
                let transform = '';
                let opacity = 0;
                let zIndex = 0;
                let extraStyle = '';

                if (isActive) {
                  transform = 'translateX(0) scale(1)';
                  opacity = 1;
                  zIndex = 30;
                  extraStyle = ' shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] ring-1 ring-black/5';
                } else if (normalizedOffset === 1) { // Next
                  transform = 'translateX(55%) scale(0.85) rotateY(-12deg)';
                  opacity = 0.6;
                  zIndex = 20;
                  extraStyle = ' shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)]';
                } else if (normalizedOffset === 3) { // Previous
                  transform = 'translateX(-55%) scale(0.85) rotateY(12deg)';
                  opacity = 0.6;
                  zIndex = 20;
                  extraStyle = ' shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)]';
                } else { // Hidden (back)
                  transform = 'translateX(0) scale(0.75)';
                  opacity = 0;
                  zIndex = 10;
                }

                return (
                  <div
                    key={plan.name}
                    className={`absolute inset-0 top-0 left-0 w-full transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] rounded-3xl p-8 sm:p-10 flex flex-col ${plan.style}${extraStyle}`}
                    style={{ transform, opacity, zIndex, pointerEvents: isActive ? 'auto' : 'none' }}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[10px] sm:text-xs font-extrabold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-sm tracking-wide transition-transform duration-500 delay-100" style={{ backgroundColor: '#00877A', transform: isActive ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0.8)', opacity: isActive ? 1 : 0 }}>
                        MAIS POPULAR
                      </span>
                    )}

                    <div className="text-center mb-6">
                      <h3 className={`${plan.titleStyle} mb-1 transition-all duration-300`} style={{ fontFamily: 'var(--font-jakarta)' }}>{plan.name}</h3>
                      <div className="flex items-baseline justify-center gap-1 mb-2">
                        <span className={`text-3xl sm:text-[2.6rem] font-black leading-none ${plan.light ? 'text-navy' : 'text-white'}`} style={{ fontFamily: 'var(--font-jakarta)' }}>{plan.price}</span>
                        {plan.price !== 'Grátis' && <span className={`font-bold text-sm ${plan.popular ? 'text-white/60' : plan.light ? 'text-navy/60' : 'text-white/40'}`}>/mês</span>}
                      </div>
                      <p className={`text-sm italic ${plan.popular ? 'text-white/70' : plan.light ? 'text-navy/70' : 'text-white/50'}`}>{plan.tagline}</p>
                    </div>

                    <div className="flex-grow transition-opacity duration-500 delay-150" style={{ opacity: isActive ? 1 : 0 }}>
                      <p className={`text-[0.7rem] uppercase tracking-wider font-bold mb-4 px-2 ${plan.popular ? 'text-white/50' : plan.light ? 'text-navy/50' : 'text-white/40'}`}>Principais Entregas</p>
                      <ul className="space-y-3 px-2">
                        {plan.features.map(f => (
                          <li key={f} className="flex items-start text-sm">
                            <CheckIcon className={`w-5 h-5 mr-2 shrink-0 ${plan.popular ? 'text-white' : 'text-tealBusiness'}`} />
                            <span className={`leading-tight ${plan.popular ? 'text-white/80' : plan.light ? 'text-navy/80' : 'text-white/70'}`}>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`pt-6 mt-auto border-t ${plan.popular ? 'border-white/20' : plan.light ? 'border-navy/10' : 'border-white/10'}`}>
                      <button className={`w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-black text-sm transition-all ${plan.btnStyle}`}>
                        {plan.cta}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8 mb-6">
              {[0, 1, 2, 3].map(idx => (
                <button
                  key={idx}
                  onClick={() => setCurrentPlanIndex(idx)}
                  className="p-2.5 flex items-center justify-center"
                  aria-label={`Ir para plano ${idx + 1}`}
                >
                  <span className={`block rounded-full transition-all duration-300 ${currentPlanIndex === idx ? 'bg-tealBusiness w-6 h-2.5' : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'}`} />
                </button>
              ))}
            </div>
            

          </div>

          <p className="text-center text-white/40 text-sm mt-8 hidden">
            Todos com período de teste. Sem contrato. Cancele quando quiser.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><hr className="border-white/10" /></div>

      {/* ═══════════════════ SEÇÃO 7 — PARCEIROS SVA ═══════════════════ */}
      <section id="parceiros" className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-3 text-white" style={{ fontFamily: 'var(--font-jakarta)' }}>
            Parceiro SVA? A gente cresce junto.
          </h2>
          <p className="text-center text-white/50 text-lg mb-14 max-w-2xl mx-auto">
            O Sniffer Business foi feito pra ser a próxima geração de SVA. Se você já tem base de PMEs, infraestrutura de cobrança e canais de venda — a gente entra com a tecnologia e a proposta de valor.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10 relative">
            {/* Plus sign between */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 border-2 border-tealBusiness rounded-full items-center justify-center text-tealBusiness text-2xl font-extrabold shadow-md">+</div>

            {/* Partner */}
            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-extrabold text-lg mb-4 text-white" style={{ fontFamily: 'var(--font-jakarta)' }}>O que o parceiro traz</h3>
              <ul className="space-y-3">
                {[
                  'Base de clientes PME com relacionamento consolidado',
                  'Infraestrutura de billing e suporte escalável',
                  'Presença e alcance no mercado-alvo',
                  'Credibilidade de marca que acelera adoção',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-white/60 text-[0.9rem]">
                    <span className="text-white/30 mt-1">●</span>{t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sniffer */}
            <div className="border border-tealBusiness/30 bg-tealBusiness/10 rounded-2xl p-8">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-extrabold text-lg mb-4 text-white" style={{ fontFamily: 'var(--font-jakarta)' }}>O que a Sniffer traz</h3>
              <ul className="space-y-3">
                {[
                  'Produto completo de inteligência e performance',
                  'Proposta de valor diferenciada do mercado',
                  'Modelo de preço competitivo pra qualquer portfólio',
                  'Roadmap de evolução contínua com Sniffer Labs',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-white/70 text-[0.9rem] font-medium">
                    <span className="text-tealBusiness mt-1">●</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Distribution models */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Oferta bundled nos planos do parceiro', 'Upsell digital via canais do parceiro', 'Landing page co-branded', 'Força de vendas Enterprise dedicada'].map((m) => (
              <span key={m} className="bg-white/5 text-white/60 text-sm font-medium px-4 py-2 rounded-full">{m}</span>
            ))}
          </div>

          <div className="text-center">
            <a href="#" className="text-tealBusiness font-bold hover:underline inline-flex items-center gap-1 group">
              Quero ser parceiro SVA <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><hr className="border-white/10" /></div>

      {/* ═══════════════════ SEÇÃO 8 — NÚMEROS ═══════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 text-white" style={{ fontFamily: 'var(--font-jakarta)' }}>
            Não é promessa. É número.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { ...m1, desc: 'investidos por PMEs em marketing/tech por ano' },
              { ...m3, desc: 'do grátis ao Enterprise, sem contrato' },
              { ...m4, desc: 'ROI comprovado pro seu negócio' },
            ].map((metric, i) => (
              <div key={i} ref={metric.ref} className={`text-center ${i < 2 ? 'sm:border-r sm:border-white/10' : ''}`}>
                <p className="text-tealBusiness text-[2.5rem] sm:text-[3rem] font-extrabold leading-none mb-2" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  {metric.display}
                </p>
                <p className="text-white/50 text-[0.85rem]">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><hr className="border-white/10" /></div>

      {/* ═══════════════════ SEÇÃO 9 — CTA FINAL ═══════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[800px] mx-auto relative overflow-hidden rounded-3xl bg-navy px-8 sm:px-16 py-16 sm:py-20 text-center shadow-2xl shadow-navy/30">
          {/* Grain */}
          <div className="grain-overlay"></div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 relative z-10" style={{ fontFamily: 'var(--font-jakarta)' }}>
            Seu bairro tá cheio de clientes. Eles só não te encontraram ainda.
          </h2>
          <p className="text-white/80 text-lg mb-8 relative z-10">
            Comece grátis. Sem contrato. Sem cartão de crédito. Resultado de verdade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-tealBusiness text-navy px-10 py-4 rounded-full font-extrabold text-lg hover:scale-105 transition-transform shadow-lg shadow-tealBusiness/20">
              Fazer parte
            </button>
          </div>
          <p className="text-white/40 text-sm mt-6 relative z-10">
            Ou, se preferir, <a href="#" className="text-tealBusiness hover:underline">fale com a gente →</a>
          </p>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span className="font-extrabold" style={{ fontFamily: 'var(--font-jakarta)' }}>
              sni<span className="text-verdeSniffer/60">ff</span>er
            </span>
            <span className="text-white/30">business</span>
            <span className="ml-2">© 2026 Sniffer Business. Belo Horizonte, MG.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-tealBusiness transition-colors">Termos</a>
            <a href="#" className="hover:text-tealBusiness transition-colors">Privacidade</a>
            <a href="#" className="hover:text-tealBusiness transition-colors">Contato</a>
            <a href="/" className="hover:text-tealBusiness transition-colors font-medium">← Voltar para sniffer.app</a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
