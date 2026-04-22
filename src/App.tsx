/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, type CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { pageVariants, pageTransition } from './pageTransition';

function PeopleNavbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const NAV_LINKS = [
    { label: 'Funcionalidades', href: '#como-funciona' },
    { label: 'Comunidades', href: '#tribos' },
    { label: 'Sobre', href: '#' },
  ];

  const navLinkStyle: CSSProperties = {
    fontFamily: "'Ferom', Inter, sans-serif",
    fontWeight: 500,
    fontSize: '15px',
    color: 'rgba(45,47,94,0.65)',
    textDecoration: 'none',
    transition: 'color 200ms ease',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    lineHeight: 1,
  };

  return (
    <>
      {/* Floating bottom bar */}
      <div
        style={{
          position: 'fixed',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 48px)',
          maxWidth: '960px',
          zIndex: 50,
          backgroundColor: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(28px) saturate(180%)',
          WebkitBackdropFilter: 'blur(28px) saturate(180%)',
          boxShadow: '0 -2px 32px rgba(45,47,94,0.10), 0 2px 16px rgba(45,47,94,0.06)',
          borderRadius: '16px',
          border: '1px solid rgba(45,47,94,0.08)',
          height: '64px',
        }}
      >
        {/* Mobile row */}
        <div className="lg:hidden flex items-center justify-between" style={{ padding: '0 20px', height: '64px' }}>
          <a href="/" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '32px', width: 'auto' }} />
          </a>
          <button
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', alignItems: 'center', color: '#2D2F5E', marginLeft: 'auto' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop row */}
        <div
          className="hidden lg:grid"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            height: '64px',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', justifySelf: 'start' }}>
            <img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '36px', width: 'auto' }} />
          </a>

          {/* Nav links */}
          <nav aria-label="Menu principal">
            <ul style={{ display: 'flex', alignItems: 'center', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
              {NAV_LINKS.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={navLinkStyle}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#3DDC84'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(45,47,94,0.65)'; }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div style={{ justifySelf: 'end' }}>
            <button
              onClick={() => navigate('/cadastro?mode=people')}
              style={{
                background: '#3DDC84',
                border: 'none',
                borderRadius: '10px',
                padding: '10px 24px',
                fontFamily: "'Ferom', Inter, sans-serif",
                fontWeight: 700,
                fontSize: '15px',
                color: '#2D2F5E',
                cursor: 'pointer',
                transition: 'background-color 200ms ease',
                lineHeight: 1,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2FC476'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#3DDC84'; }}
            >
              Entrar na lista
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="people-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 48,
                backgroundColor: 'rgba(0,0,0,0.3)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
            />
            <motion.div
              key="people-sheet"
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
                backgroundColor: '#FFFFFF',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-8px 0 40px rgba(45,47,94,0.12)',
              }}
            >
              {/* Sheet header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(45,47,94,0.08)', flexShrink: 0 }}>
                <a href="/" onClick={() => setMobileOpen(false)}>
                  <img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '36px', width: 'auto' }} />
                </a>
                <button
                  aria-label="Fechar menu"
                  onClick={() => setMobileOpen(false)}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2D2F5E', borderRadius: '8px' }}
                >
                  <X size={22} />
                </button>
              </div>

              {/* Nav links */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '8px 24px 24px' }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {NAV_LINKS.map(item => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        style={{ display: 'flex', alignItems: 'center', padding: '16px 0', fontFamily: "'Ferom', Inter, sans-serif", fontWeight: 600, fontSize: '17px', color: '#2D2F5E', textDecoration: 'none', borderBottom: '1px solid rgba(45,47,94,0.07)', minHeight: '52px' }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA footer */}
              <div style={{ position: 'sticky', bottom: 0, backgroundColor: '#FFFFFF', padding: '20px 24px', borderTop: '1px solid rgba(45,47,94,0.08)', flexShrink: 0 }}>
                <button
                  onClick={() => { navigate('/cadastro?mode=people'); setMobileOpen(false); }}
                  style={{ background: '#3DDC84', border: 'none', borderRadius: '12px', padding: '14px 24px', fontFamily: "'Ferom', Inter, sans-serif", fontWeight: 700, fontSize: '15px', color: '#2D2F5E', cursor: 'pointer', width: '100%', lineHeight: 1 }}
                >
                  Entrar na lista
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  const { scrollY } = useScroll();
  // Move dog to the right as user scrolls down
  const dogX = useTransform(scrollY, [0, 1500], [0, 1500]);
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="text-navy antialiased min-h-screen"
      style={{ background: 'radial-gradient(ellipse 80% 50% at top left, rgba(61,220,132,0.22), transparent 60%), radial-gradient(ellipse 60% 40% at top right, rgba(51,45,89,0.14), transparent 55%), linear-gradient(180deg, #f4fbf7 0%, #eff4fb 40%, #e9eff8 100%)' }}
    >
      <PeopleNavbar />

      {/* BEGIN: HeroSection */}
      <section className="pt-20 sm:pt-24 overflow-hidden" id="hero">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo — entre o toggle e o título */}
          <div className="flex justify-center mb-10 sm:mb-12">
            <img src="./logo-sniffer-wordmark.png" alt="Sniffer" className="h-10 sm:h-12 w-auto" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-navy leading-tight mb-8">
            Tudo que acontece perto de você, <span className="text-verdeSniffer">no seu bolso.</span>
          </h1>
          <p className="text-navy/70 text-base md:text-xl max-w-2xl mx-auto mb-10">
            O aplicativo que conecta você ao pulso real da sua cidade. Descubra e viva eventos, tribos e conexões locais em tempo real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#" className="bg-verdeSniffer text-navy px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-verdeSniffer/20 no-underline inline-flex items-center justify-center">
              Começar a farejar
            </a>
            <a href="#como-funciona" className="border-2 border-navy/20 text-navy px-10 py-4 rounded-full font-bold text-lg hover:border-navy/40 transition-colors no-underline inline-flex items-center justify-center">
              Como funciona →
            </a>
          </div>
          {/* Mascote — GIF loop infinito sem corte */}
          <div className="relative flex justify-center -mt-16">
            <div className="w-full max-w-5xl">
              <motion.video
                style={{ x: dogX, background: 'transparent' }}
                className="w-full h-auto block"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="./mascote-sniffer.webm" type="video/webm" />
              </motion.video>
            </div>
          </div>
        </div>
      </section>
      {/* END: HeroSection */}

      {/* BEGIN: StepByStep */}
      <section id="como-funciona" className="relative overflow-hidden">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8 text-center"
        >
          <span className="inline-block text-xs font-black tracking-[4px] uppercase text-verdeSniffer mb-6">Como funciona</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-jakarta)' }}>
            Três passos para<br className="hidden md:block" /> farejar sua cidade.
          </h2>
        </motion.div>

        {/* ══════════ STEP 01 — FAREJAR ══════════ */}
        <div className="relative mt-16 border-t border-navy/6">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-14 grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative order-2 md:order-1"
            >
              <span className="pointer-events-none select-none absolute -top-4 -left-2 font-black leading-none" style={{ fontSize: 'clamp(4rem, 18vw, 14rem)', color: 'rgba(45,47,94,0.04)', fontFamily: 'var(--font-jakarta)', lineHeight: 0.85 }}>01</span>
              <div className="relative z-10">
                <span className="inline-block text-xs font-black tracking-[3px] uppercase text-verdeSniffer mb-5">Passo 1 de 3</span>
                <h3 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none mb-4 text-navy" style={{ fontFamily: 'var(--font-jakarta)' }}>Farejar.</h3>
                <p className="text-lg md:text-xl text-verdeSniffer font-bold mb-5 leading-snug">Detecta o pulso real ao seu redor</p>
                <p className="text-base md:text-lg text-navy/60 leading-relaxed max-w-md mb-10">Geolocalização inteligente que sabe exatamente onde o movimento está acontecendo agora — mapa em tempo real com o pulso vivo da cidade.</p>
                <ul className="space-y-4">
                  {['Mapa de calor em tempo real', 'Pins de atividade pulsantes', 'Atualização ao vivo, sem espera'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-navy">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-verdeSniffer text-navy rounded-full text-xs font-bold">✓</span>
                      <span className="text-sm md:text-base font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Visual — animated map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative w-full max-w-sm h-[280px] sm:h-[340px] md:h-[420px] rounded-3xl overflow-hidden" style={{ background: '#111128', border: '1px solid rgba(61,220,132,0.18)', boxShadow: '0 0 60px rgba(61,220,132,0.12), inset 0 0 40px rgba(61,220,132,0.04)' }}>
                {/* Grid */}
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(61,220,132,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(61,220,132,0.06) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
                {/* Heat blobs */}
                <div className="absolute rounded-full" style={{ width: 220, height: 220, background: 'radial-gradient(circle, rgba(61,220,132,0.18) 0%, transparent 70%)', left: '10%', top: '15%', filter: 'blur(28px)', animation: 'step-pulse 3.5s ease-in-out infinite' }} />
                <div className="absolute rounded-full" style={{ width: 160, height: 160, background: 'radial-gradient(circle, rgba(61,220,132,0.14) 0%, transparent 70%)', right: '8%', bottom: '20%', filter: 'blur(22px)', animation: 'step-pulse 4.2s ease-in-out infinite 0.8s' }} />
                {/* Scan line */}
                <div className="absolute left-0 right-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(61,220,132,0.8) 50%, transparent 100%)', animation: 'scan-sweep 4s linear infinite' }} />
                {/* Location pins */}
                {[
                  { top: '28%', left: '40%', delay: '0s', lg: true },
                  { top: '54%', left: '62%', delay: '0.6s', lg: false },
                  { top: '38%', left: '74%', delay: '1.1s', lg: false },
                  { top: '68%', left: '26%', delay: '0.3s', lg: false },
                  { top: '18%', left: '64%', delay: '1.5s', lg: false },
                ].map((p, i) => (
                  <div key={i} className="absolute" style={{ top: p.top, left: p.left, transform: 'translate(-50%,-50%)' }}>
                    <div className={p.lg ? 'w-3 h-3' : 'w-2 h-2'} style={{ borderRadius: '50%', background: '#3DDC84', boxShadow: '0 0 12px rgba(61,220,132,0.9)' }} />
                    <div className={`absolute ${p.lg ? '-inset-3' : '-inset-2'} rounded-full border border-verdeSniffer/40`} style={{ animation: `pin-ring ${p.lg ? '2' : '2.8'}s ease-out infinite ${p.delay}` }} />
                  </div>
                ))}
                {/* Corner brackets */}
                {['top-3 left-3 border-t-2 border-l-2', 'top-3 right-3 border-t-2 border-r-2', 'bottom-3 left-3 border-b-2 border-l-2', 'bottom-3 right-3 border-b-2 border-r-2'].map((cls, i) => (
                  <div key={i} className={`absolute w-5 h-5 ${cls} border-verdeSniffer/40`} />
                ))}
                <div className="absolute bottom-5 left-5 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'rgba(61,220,132,0.12)', border: '1px solid rgba(61,220,132,0.28)', color: '#3DDC84' }}>🐾 Farejar aqui</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ══════════ STEP 02 — CONECTAR ══════════ */}
        <div className="relative border-t border-navy/6">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-14 grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">

            {/* Visual — network graph */}
            <motion.div
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 flex justify-center"
            >
              <div className="relative w-full max-w-sm h-[280px] sm:h-[340px] md:h-[420px] rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(145deg, #EBF9EC 0%, #EEF2FF 100%)', border: '1px solid rgba(61,220,132,0.18)', boxShadow: '0 8px 48px rgba(45,47,94,0.06)' }}>
                {/* SVG connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 360" preserveAspectRatio="xMidYMid meet">
                  {[
                    [180, 180, 180, 55],
                    [180, 180, 288, 117],
                    [180, 180, 288, 243],
                    [180, 180, 180, 305],
                    [180, 180, 72, 243],
                    [180, 180, 72, 117],
                  ].map(([x1, y1, x2, y2], i) => (
                    <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="rgba(61,220,132,0.35)" strokeWidth="1.5"
                      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
                    />
                  ))}
                </svg>
                {/* Center node */}
                <div className="absolute flex items-center justify-center w-14 h-14 rounded-full font-black text-sm text-navy" style={{ top: 'calc(50% - 28px)', left: 'calc(50% - 28px)', background: '#3DDC84', boxShadow: '0 0 32px rgba(61,220,132,0.5)', zIndex: 10 }}>YOU</div>
                {/* Outer nodes */}
                {[
                  { top: '8%', left: '43%', e: '😄' },
                  { top: '26%', left: '72%', e: '🙋' },
                  { top: '58%', left: '74%', e: '👋' },
                  { top: '76%', left: '43%', e: '😎' },
                  { top: '58%', left: '11%', e: '🤝' },
                  { top: '26%', left: '13%', e: '👤' },
                ].map((n, i) => (
                  <motion.div key={i}
                    className="absolute w-11 h-11 rounded-full flex items-center justify-center text-lg bg-white shadow-md"
                    style={{ top: n.top, left: n.left, transform: 'translate(-50%,-50%)', border: '2px solid rgba(61,220,132,0.28)', zIndex: 5 }}
                    initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.09, ease: [0.34, 1.56, 0.64, 1] }}
                  >{n.e}</motion.div>
                ))}
                <div className="absolute bottom-5 left-5 text-xs font-bold px-3 py-1.5 rounded-full bg-white/80" style={{ border: '1px solid rgba(45,47,94,0.1)', color: '#2D2F5E' }}>🤝 242 na sua área</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              className="relative order-2"
            >
              <span className="pointer-events-none select-none absolute -top-4 right-0 text-right font-black leading-none" style={{ fontSize: 'clamp(4rem, 18vw, 14rem)', color: 'rgba(45,47,94,0.07)', fontFamily: 'var(--font-jakarta)', lineHeight: 0.85 }}>02</span>
              <div className="relative z-10">
                <span className="inline-block text-xs font-black tracking-[3px] uppercase text-verdeSniffer mb-5">Passo 2 de 3</span>
                <h3 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none mb-4 text-navy" style={{ fontFamily: 'var(--font-jakarta)' }}>Conectar.</h3>
                <p className="text-lg md:text-xl text-verdeSniffer font-bold mb-5 leading-snug">Encontra sua gente no bairro</p>
                <p className="text-base md:text-lg text-navy/65 leading-relaxed max-w-md mb-10">Tribos reais que compartilham seus interesses. Pessoas com o mesmo vibe a poucos metros de você, prontas para conectar agora.</p>
                <ul className="space-y-4">
                  {['Redes sociais por interesse', 'Chat com membros da tribo', 'Conexão instantânea no bairro'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-navy">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-verdeSniffer text-navy rounded-full text-xs font-bold">✓</span>
                      <span className="text-sm md:text-base font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ══════════ STEP 03 — DESCOBRIR ══════════ */}
        <div className="relative border-t border-navy/6">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16 md:py-14 grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative order-2 md:order-1"
            >
              <span className="pointer-events-none select-none absolute -top-4 -left-2 font-black leading-none" style={{ fontSize: 'clamp(4rem, 18vw, 14rem)', color: 'rgba(45,47,94,0.04)', fontFamily: 'var(--font-jakarta)', lineHeight: 0.85 }}>03</span>
              <div className="relative z-10">
                <span className="inline-block text-xs font-black tracking-[3px] uppercase text-verdeSniffer mb-5">Passo 3 de 3</span>
                <h3 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none mb-4 text-navy" style={{ fontFamily: 'var(--font-jakarta)' }}>Descobrir.</h3>
                <p className="text-lg md:text-xl text-verdeSniffer font-bold mb-5 leading-snug">Abre portas que ninguém mais vê</p>
                <p className="text-base md:text-lg text-navy/60 leading-relaxed max-w-md mb-10">Benefícios exclusivos, eventos VIP e acesso antecipado para quem está por dentro. Descobertas que ninguém mais tem.</p>
                <ul className="space-y-4">
                  {['Eventos exclusivos para insiders', 'Descontos em locais parceiros', 'Primeiros a saber de tudo'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-navy">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-verdeSniffer text-navy rounded-full text-xs font-bold">✓</span>
                      <span className="text-sm md:text-base font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Visual — star + floating benefit cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative w-full max-w-sm h-[280px] sm:h-[340px] md:h-[420px] rounded-3xl overflow-hidden" style={{ background: '#0d0d20', border: '1px solid rgba(61,220,132,0.18)', boxShadow: '0 0 60px rgba(61,220,132,0.10)' }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
                {/* Ambient glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-44 h-44 rounded-full" style={{ background: 'radial-gradient(circle, rgba(61,220,132,0.18) 0%, transparent 70%)', filter: 'blur(24px)', animation: 'step-pulse 3s ease-in-out infinite' }} />
                </div>
                {/* Compass rose — rotating */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ top: '-12%' }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
                    <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                      {/* Outer ring */}
                      <circle cx="70" cy="70" r="66" stroke="rgba(61,220,132,0.18)" strokeWidth="1"/>
                      {/* 24 tick marks around the ring */}
                      {Array.from({ length: 24 }).map((_, i) => {
                        const angle = (i * 360) / 24;
                        const rad = (angle * Math.PI) / 180;
                        const major = i % 6 === 0;
                        const r1 = major ? 58 : 61;
                        const r2 = 66;
                        return (
                          <line
                            key={i}
                            x1={70 + r1 * Math.sin(rad)}
                            y1={70 - r1 * Math.cos(rad)}
                            x2={70 + r2 * Math.sin(rad)}
                            y2={70 - r2 * Math.cos(rad)}
                            stroke="#3DDC84"
                            strokeWidth={major ? 1.5 : 0.75}
                            strokeOpacity={major ? 0.7 : 0.3}
                          />
                        );
                      })}
                      {/* Middle ring */}
                      <circle cx="70" cy="70" r="46" stroke="rgba(61,220,132,0.12)" strokeWidth="1"/>
                      {/* 4-pointed compass star */}
                      <path d="M70 18 L76 62 L70 70 L64 62 Z" fill="rgba(61,220,132,0.22)" stroke="#3DDC84" strokeWidth="1.2" strokeLinejoin="round"/>
                      <path d="M122 70 L78 76 L70 70 L78 64 Z" fill="rgba(61,220,132,0.10)" stroke="#3DDC84" strokeWidth="1.2" strokeLinejoin="round" strokeOpacity="0.6"/>
                      <path d="M70 122 L64 78 L70 70 L76 78 Z" fill="rgba(61,220,132,0.10)" stroke="#3DDC84" strokeWidth="1.2" strokeLinejoin="round" strokeOpacity="0.6"/>
                      <path d="M18 70 L62 64 L70 70 L62 76 Z" fill="rgba(61,220,132,0.10)" stroke="#3DDC84" strokeWidth="1.2" strokeLinejoin="round" strokeOpacity="0.6"/>
                      {/* 4 secondary points (45°) */}
                      <path d="M70 70 L104 36 L100 46 Z" fill="rgba(61,220,132,0.12)" stroke="#3DDC84" strokeWidth="0.8" strokeOpacity="0.4"/>
                      <path d="M70 70 L104 104 L94 100 Z" fill="rgba(61,220,132,0.12)" stroke="#3DDC84" strokeWidth="0.8" strokeOpacity="0.4"/>
                      <path d="M70 70 L36 104 L40 94 Z" fill="rgba(61,220,132,0.12)" stroke="#3DDC84" strokeWidth="0.8" strokeOpacity="0.4"/>
                      <path d="M70 70 L36 36 L46 40 Z" fill="rgba(61,220,132,0.12)" stroke="#3DDC84" strokeWidth="0.8" strokeOpacity="0.4"/>
                      {/* Center circle */}
                      <circle cx="70" cy="70" r="7" fill="#3DDC84" fillOpacity="0.9"/>
                      <circle cx="70" cy="70" r="3.5" fill="#0d0d20"/>
                    </svg>
                  </motion.div>
                </div>
                {/* Benefit cards */}
                {[
                  { text: 'Happy Hour −30%', sub: 'Expira em 2h', x: '6%', y: '58%', delay: 0.5 },
                  { text: 'Show ao vivo 🎸', sub: '500m de você', x: '48%', y: '62%', delay: 0.7 },
                  { text: 'VIP Access ✨', sub: 'Só para insiders', x: '22%', y: '12%', delay: 0.9 },
                ].map((card, i) => (
                  <motion.div key={i}
                    className="absolute px-3 py-2 rounded-xl"
                    style={{ left: card.x, top: card.y, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.11)', backdropFilter: 'blur(8px)' }}
                    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: card.delay }}
                  >
                    <p className="text-white text-xs font-bold whitespace-nowrap">{card.text}</p>
                    <p className="text-white/50 text-[10px]">{card.sub}</p>
                  </motion.div>
                ))}
                {/* Twinkle stars */}
                {[{ x: '8%', y: '10%', d: 0 }, { x: '88%', y: '7%', d: 0.6 }, { x: '91%', y: '88%', d: 1.1 }, { x: '5%', y: '87%', d: 1.7 }].map((s, i) => (
                  <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full" style={{ left: s.x, top: s.y, background: '#3DDC84', boxShadow: '0 0 6px rgba(61,220,132,0.8)' }} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2.5, repeat: Infinity, delay: s.d }} />
                ))}
                <div className="absolute bottom-5 right-5 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'rgba(61,220,132,0.14)', border: '1px solid rgba(61,220,132,0.28)', color: '#3DDC84' }}>Exclusivo 🔓</div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>
      {/* END: StepByStep */}

      {/* BEGIN: FeaturesSplit */}
      <section className="pt-14 pb-2 md:pb-2 px-4 overflow-hidden border-t border-navy/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left: Phone Mockup — order-2 on mobile so text comes first */}
          <div className="relative flex items-center justify-center h-[480px] sm:h-[640px] md:h-[680px] order-2 md:order-1">
            {/* Ambient glow behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(61,220,132,0.22) 0%, transparent 70%)', filter: 'blur(32px)' }} />
            </div>
            <img
              src="./mockup-app.png"
              alt="Sniffer App — mapa em tempo real"
              className="animate-float relative z-10 w-auto max-h-[480px] sm:max-h-[640px] md:max-h-[680px] object-contain select-none"
              style={{ filter: 'drop-shadow(0 20px 48px rgba(45,47,94,0.22)) drop-shadow(0 4px 12px rgba(45,47,94,0.10))' }}
            />
          </div>

          {/* Right: Content — order-1 on mobile so it appears first */}
          <div className="space-y-7 order-1 md:order-2">
            <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-verdeSniffer">O mapa que respira com a cidade</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-navy">A cidade inteira na palma da mão.</h2>
            <p className="text-lg text-navy/65 leading-relaxed">
              O mapa em tempo real mostra tudo: onde está o movimento agora (Farejar), quem está perto de você (Conectar), e quais eventos exclusivos só você pode acessar (Descobrir).
            </p>
            <ul className="space-y-5 pt-2">
              <li className="flex items-center gap-4">
                <div className="w-7 h-7 flex-shrink-0 bg-verdeSniffer/20 text-verdeSniffer flex items-center justify-center rounded-full text-base font-bold">✓</div>
                <span className="font-semibold text-navy/80">Mapa de calor em tempo real</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-7 h-7 flex-shrink-0 bg-verdeSniffer/20 text-verdeSniffer flex items-center justify-center rounded-full text-base font-bold">✓</div>
                <span className="font-semibold text-navy/80">Alertas de proximidade</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-7 h-7 flex-shrink-0 bg-verdeSniffer/20 text-verdeSniffer flex items-center justify-center rounded-full text-base font-bold">✓</div>
                <span className="font-semibold text-navy/80">Filtros por interesses específicos</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* END: FeaturesSplit */}

      {/* BEGIN: TribesGrid */}
      <section className="pt-2 md:pt-2 pb-14 px-4 border-t border-navy/5">
        <div className="max-w-7xl mx-auto">

          {/* ── Header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-14 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-xs font-black tracking-[4px] uppercase text-verdeSniffer mb-4">Comunidades</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">Tribos locais.</h2>
              <p className="mt-3 text-navy/55 text-lg leading-relaxed max-w-md">Sua turma já está aqui. Eles estão farejando agora.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0"
            >
              <button className="text-sm font-bold text-navy/60 border-b-2 border-verdeSniffer pb-1 uppercase tracking-wide hover:text-verdeSniffer transition-colors duration-200">
                Ver todas as tribos
              </button>
            </motion.div>
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { name: 'Café & Tech', desc: 'Networking e debates sobre o futuro da web nos cafés da cidade.', tag: 'Ativa agora', members: '242 membros', delay: 0 },
              { name: 'Corrida Noturna', desc: 'Grupos que exploram a cidade toda terça-feira depois das 21h.', tag: 'Hoje à noite', members: '1.2k membros', delay: 0.08 },
              { name: 'Circuito das Artes', desc: 'Visitas e debates sobre as exposições abertas na sua região.', tag: 'Hoje', members: '156 membros', delay: 0.16 },
              { name: 'Rota Gastronômica', desc: 'Explorando os melhores botecos e restaurantes da vizinhança.', tag: 'Sábado', members: '890 membros', delay: 0.24 },
            ].map((tribe, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: tribe.delay, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col p-7 rounded-3xl border border-navy/6 bg-white cursor-pointer overflow-hidden"
                style={{ boxShadow: '0 2px 12px rgba(45,47,94,0.04)' }}
              >
                {/* Bottom border accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-verdeSniffer scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-3xl" />

                {/* Live tag */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-verdeSniffer">
                    <span className="w-1.5 h-1.5 rounded-full bg-verdeSniffer" style={{ boxShadow: '0 0 5px rgba(61,220,132,0.8)' }} />
                    {tribe.tag}
                  </span>
                </div>

                {/* Name */}
                <h4 className="text-xl font-extrabold text-navy mb-3 leading-tight group-hover:text-verdeSniffer transition-colors duration-250">{tribe.name}</h4>

                {/* Description */}
                <p className="text-navy/55 text-sm leading-relaxed flex-1">{tribe.desc}</p>

                {/* Footer */}
                <div className="mt-6 pt-5 border-t border-navy/6 flex items-center justify-between">
                  <span className="text-xs font-semibold text-navy/40 uppercase tracking-wide">{tribe.members}</span>
                  <span className="text-xs font-bold text-verdeSniffer opacity-0 group-hover:opacity-100 transition-opacity duration-200">Entrar →</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      {/* END: TribesGrid */}

      {/* BEGIN: BottomCTA */}
      <section className="py-16 px-4 border-t border-navy/6">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs font-black tracking-[4px] uppercase text-verdeSniffer mb-5">Disponível agora</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight tracking-tight mb-5" style={{ fontFamily: 'var(--font-jakarta)' }}>
              Baixe o Sniffer<br className="hidden sm:block" /> e comece a farejar.
            </h2>
            <p className="text-navy/55 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Disponível para iOS e Android. Gratuito para começar — sem cartão de crédito.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* App Store */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-7 py-4 rounded-2xl border-2 border-navy/12 hover:border-navy/30 bg-white hover:bg-navy/2 transition-all duration-250 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/8 w-full sm:w-auto sm:min-w-[200px]"
            >
              <svg className="w-8 h-8 text-navy flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-[11px] font-semibold text-navy/50 uppercase tracking-wider leading-none mb-0.5">Disponível na</p>
                <p className="text-base font-extrabold text-navy leading-none">App Store</p>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-7 py-4 rounded-2xl border-2 border-navy/12 hover:border-navy/30 bg-white hover:bg-navy/2 transition-all duration-250 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/8 w-full sm:w-auto sm:min-w-[200px]"
            >
              {/* Google Play logo — 4 colored triangles */}
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M3.5 1.6 L13.9 12 L3.5 22.4 C3.1 22.1 2.9 21.7 2.9 21.2 V2.8 C2.9 2.3 3.1 1.9 3.5 1.6Z" fill="#4285F4"/>
                <path d="M17.6 8.1 L14.7 12 L17.6 15.9 L21.0 13.9 C21.9 13.4 21.9 10.6 21.0 10.1 Z" fill="#FBBC05"/>
                <path d="M3.5 1.6 L13.9 12 L17.6 8.1 L6.3 1.6 C5.3 1.1 4.2 1.2 3.5 1.6Z" fill="#EA4335"/>
                <path d="M3.5 22.4 L13.9 12 L17.6 15.9 L6.3 22.4 C5.3 22.9 4.2 22.8 3.5 22.4Z" fill="#34A853"/>
              </svg>
              <div className="text-left">
                <p className="text-[11px] font-semibold text-navy/50 uppercase tracking-wider leading-none mb-0.5">Disponível no</p>
                <p className="text-base font-extrabold text-navy leading-none">Google Play</p>
              </div>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-xs text-navy/35 font-medium"
          >
            iOS 15+ · Android 9+ · Gratuito
          </motion.p>

        </div>
      </section>

      {/* BEGIN: Footer */}
      <footer className="pt-10 pb-24 px-4 border-t border-navy/6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-navy/50 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center font-bold text-[10px] text-navy" style={{ background: 'linear-gradient(135deg, #3DDC84 0%, #2cc870 100%)' }}>S</div>
            <span>© 2026 Sniffer App. Belo Horizonte, MG.</span>
          </div>
          <div className="flex gap-6">
            <a className="hover:text-verdeSniffer transition-colors duration-200" href="#">Termos</a>
            <a className="hover:text-verdeSniffer transition-colors duration-200" href="#">Privacidade</a>
            <a className="hover:text-verdeSniffer transition-colors duration-200" href="#">Contato</a>
          </div>
        </div>
      </footer>
      {/* END: BottomCTA */}
    </motion.div>
  );
}
