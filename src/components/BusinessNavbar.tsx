import { useState, useEffect, useRef, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';

export const solutionsItems = [
  { icon: '💛', label: 'Xodós', desc: 'Camada de confiança e programa de indicação', href: '/business/xodos' },
  { icon: '🐺', label: 'Matilha', desc: 'Comunidades privadas com Pack Rituals', href: '/business/matilha' },
  { icon: '💡', label: 'Spotlight', desc: 'Promoções hiperlocais com alcance real', href: '/business/spotlight' },
  { icon: '📣', label: 'Uivo', desc: 'Canal de atendimento direto dentro da Sniffer', href: '/business/uivo' },
  { icon: '🐾', label: 'Rastro', desc: 'Programa de fundadores — 10.000 vagas', href: '/business/rastro' },
  { icon: '📊', label: 'Insights', desc: 'Analytics e inteligência para o seu negócio', href: '/business#como-funciona' },
  { icon: '🔍', label: 'Faro', desc: 'Inteligência local — dados que viram decisão', href: '/business/faro' },
  { icon: '🤝', label: 'SVA', desc: 'Parceria para operadoras e distribuidores', href: '/business#parceiros' },
];

export function BusinessNavbar() {
  const navigate = useNavigate();
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
        backgroundColor: 'rgba(51, 45, 89, 0.95)',
        backdropFilter: 'blur(28px) saturate(180%)',
        WebkitBackdropFilter: 'blur(28px) saturate(180%)',
        boxShadow: '0 4px 32px rgba(0, 0, 0, 0.13)',
        borderRadius: '16px',
        maxWidth: 'min(960px, calc(100% - 48px))',
        margin: '0 auto',
        height: '96px',
      }}
    >
      {/* ── Mobile header row ── */}
      <div className="lg:hidden flex items-center justify-between" style={{ padding: '0 20px', height: '96px' }}>
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
                href="/business#quem-somos"
                style={navLinkStyle}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#0AA689';
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
                    color: '#0AA689',
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
                  backgroundColor: '#332D59',
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
                href="/business#planos"
                style={navLinkStyle}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#0AA689';
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
              onClick={() => navigate('/cadastro?mode=business')}
              style={{
                background: '#0AA689',
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
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#098F75';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0AA689';
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
                backgroundColor: '#332D59',
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
                    { label: 'Quem Somos', href: '/business#quem-somos' },
                    { label: 'Planos', href: '/business#planos' },
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
                          color: '#0AA689',
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
                  backgroundColor: '#332D59',
                  padding: '20px 24px',
                  borderTop: '1px solid rgba(255,255,255,0.10)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  flexShrink: 0,
                }}
              >
                <button
                  onClick={() => navigate('/cadastro?mode=business')}
                  style={{
                    background: '#0AA689',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '14px 24px',
                    fontFamily: "'Ferom', Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    width: '100%',
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
