/**
 * Sniffer Business Landing Page
 */
import { useState, useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown, ChevronLeft, ChevronRight, Check as CheckIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { pageVariants, pageTransition } from './pageTransition';
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


/* ───────────────────── Scroll-reveal hook ───────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

import { BusinessNavbar } from './components/BusinessNavbar';

export default function Business() {
  const navigate = useNavigate();
  const [currentPlanIndex, setCurrentPlanIndex] = useState(1);
  const [compareOpen, setCompareOpen] = useState(false);

  const nextPlan = () => setCurrentPlanIndex((prev: number) => (prev + 1) % 4);
  const prevPlan = () => setCurrentPlanIndex((prev: number) => (prev - 1 + 4) % 4);

  // Count-up metrics
  const m1 = useCountUp(40, 2000, 'R$ ', ' bi+');
  const m3 = useCountUp(4, 1500, '', ' planos');
  const m4 = useCountUp(1, 1000, '', ' objetivo');

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="bg-navy text-white antialiased min-h-screen pt-20"
      style={{ fontFamily: 'var(--font-nunito)', position: 'relative', overflow: 'hidden' }}
    >
      <img src="/sniffer_brandbook_bg.svg" alt="" aria-hidden="true" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', opacity: 0.04, pointerEvents: 'none', zIndex: 0 }} />

      {/* ═══════════════════ NAVBAR ═══════════════════ */}
      <BusinessNavbar />

      {/* ═══════════════════ SEÇÃO 1 — HERO ═══════════════════ */}
      <section className="pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-bold leading-[1.05] mb-6 animate-[fadeUp_0.8s_0.2s_forwards] opacity-0" style={{ fontFamily: 'var(--font-jakarta)', color: '#f2f2f2', maxWidth: '16ch', margin: '0 auto 24px' }}>
            A plataforma que dá a atenção que o seu negócio merece
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-[fadeUp_0.8s_0.4s_forwards] opacity-0">
            <button
              onClick={() => navigate('/cadastro?mode=business')}
              style={{
                background: '#50F096',
                border: 'none',
                borderRadius: '40px',
                padding: '14px 36px',
                fontFamily: "'Ferom', Inter, sans-serif",
                fontWeight: 700,
                fontSize: '20px',
                color: '#28234B',
                cursor: 'pointer',
                transition: 'background-color 200ms ease',
                lineHeight: 1,
                boxShadow: 'inset 0px -10px 16px 0px rgba(10,166,137,1)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#3cd87a'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#50F096'; }}
            >
              Faça parte
            </button>
          </div>

          <p style={{ margin: '0 auto 20px', fontSize: '15px', lineHeight: 1.65, maxWidth: '30ch', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
            Comunidade – Experiência – <span style={{ fontFamily: "'Buasley', cursive", letterSpacing: '0.01em', fontSize: '18px', color: '#ffffff' }}>comodidade</span>
          </p>
        </div>
      </section>



      {/* ═══════════════════ QUEM É A SNIFFER ═══════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6" style={{ position: 'relative' }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            {/* Header */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '3px', background: '#50F096', borderRadius: '2px' }} />
                <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', color: '#50F096', fontFamily: "'Ferom', Inter, sans-serif", textTransform: 'uppercase' as const }}>Sobre a plataforma</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: 'var(--font-jakarta)', maxWidth: '18ch', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.2em', lineHeight: 1.1 }}>
                O que é a <img src="/logo-sniffer-white.png" alt="Sniffer" style={{ height: '1em', display: 'inline-block', verticalAlign: 'middle', position: 'relative', top: '2px' }} />
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — Full narrative */}
            <Reveal delay={100}>
              <blockquote style={{ margin: '0 0 32px', padding: '0 0 0 24px', borderLeft: '3px solid #50F096', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 400, lineHeight: 1.5, color: '#FFFFFF', fontFamily: "'Ferom', Inter, sans-serif", maxWidth: '32ch' }}>
                "Confiança se constrói no bairro, de<br /><span style={{ fontFamily: "'Buasley', cursive" }}>pessoa pra pessoa</span>, olho no olho."
              </blockquote>
              <p style={{ margin: '0 0 24px', fontSize: '17px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.85, fontFamily: "'Ferom', Inter, sans-serif" }}>
                A{' '}<img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '1.05em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.12em', filter: 'brightness(0) invert(1)' }} />{' '}é uma plataforma de descoberta hiperlocal construída sobre um princípio que o dono de negócio conhece melhor do que ninguém: confiança se constrói no bairro, de pessoa pra pessoa, olho no olho.
              </p>
              <p style={{ margin: '0 0 32px', fontSize: '17px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.85, fontFamily: "'Ferom', Inter, sans-serif" }}>
                Enquanto outras plataformas vendem visibilidade baseada em quem paga mais, a{' '}<img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '1.05em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.12em', filter: 'brightness(0) invert(1)' }} />{' '}criou um ecossistema onde as pessoas recomendam de verdade — com nome, com rosto e com limite. Cada usuário tem apenas <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>7 Xodós</strong>: espaços no perfil onde ele declara publicamente em quem confia.
              </p>
              <p style={{ margin: '0 0 32px', fontSize: '32px', fontWeight: 500, color: '#50f096', lineHeight: 1.3, fontFamily: "'Ferom', Inter, sans-serif" }}>
                Quando alguém coloca o seu negócio ali, essa recomendação não some em um vácuo digital.
              </p>
              <p style={{ margin: '0 0 24px', fontSize: '17px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.85, fontFamily: "'Ferom', Inter, sans-serif" }}>
                Para você, dono de negócio, a{' '}<img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '1.05em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.12em', filter: 'brightness(0) invert(1)' }} />{' '}não é mais uma rede social pra você alimentar com conteúdo e torcer pra alguém ver. É uma <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>plataforma completa de presença, atendimento e inteligência</strong> — tudo num lugar só.
              </p>
              <p style={{ margin: 0, fontSize: '17px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, fontStyle: 'italic', fontFamily: "'Ferom', Inter, sans-serif" }}>
                A{' '}<img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '1.05em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.12em', filter: 'brightness(0) invert(1)' }} />{' '}nasceu no Brasil, fala a língua do pequeno e médio negócio, e existe pra uma coisa só: transformar a confiança que você já construiu no seu bairro em presença digital, receita e crescimento real.
              </p>
            </Reveal>

            {/* Right — Blockquote 2 + OS 7 XODÓS */}
            <Reveal delay={200}>
              <blockquote style={{ margin: '0 0 40px', padding: '0 0 0 24px', borderLeft: '3px solid #50F096', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 400, lineHeight: 1.5, color: '#FFFFFF', fontFamily: "'Ferom', Inter, sans-serif", maxWidth: '32ch' }}>
                Tudo o que você precisa para atrair{' '}<span style={{ fontFamily: "'Buasley', cursive", color: '#50F096' }}>novos clientes</span>.
              </blockquote>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '3px', background: '#50F096', borderRadius: '2px' }} />
                  <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', color: '#50F096', fontFamily: "'Ferom', Inter, sans-serif", textTransform: 'uppercase' as const }}>Produtos</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-jakarta)', letterSpacing: '0.032em' }}>
                  <span style={{ color: '#f2f2f2' }}>OS </span><span style={{ color: '#50F096' }}>7 xodós</span>
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { icon: '/icone-conectador.png', name: 'Conectador', desc: 'A preencher', href: '#' },
                  { icon: '/icone-territorio.png', name: 'Meu Território', desc: 'Seu perfil aparece na busca e no mapa pra quem está perto.', href: '/business/territorio' },
                  { icon: '/spotlight.png', name: 'Spotlight', desc: 'Sua promoção na frente das pessoas certas, na hora certa.', href: '/business/spotlight' },
                  { icon: '/icone-uivo.png', name: 'Uivo', desc: 'Canal de conversa direta com quem te procura.', href: '/business/uivo' },
                  { icon: '/icone-faro.png', name: 'Faro', desc: 'Inteligência real para você saber exatamente o que traz o cliente para a sua porta.', href: '/business/faro' },
                  { icon: '/icone-matilha.png', name: 'Matilha', desc: 'Espaço privado pra criar uma comunidade fiel.', href: '/business/matilha' },
                  { icon: '/icone-xodo.png', name: 'Xodó', desc: 'Recomendações genuínas que trabalham a seu favor.', href: '/business/xodos' },
                ].map(item => (
                  <Link
                    key={item.name}
                    to={item.href}
                    style={{ padding: '16px 20px', borderRadius: '40px', background: 'rgba(242,242,242,0.25)', border: '1px solid transparent', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px', transition: 'background 200ms ease, border-color 200ms ease' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(242,242,242,0.35)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(80,240,150,0.40)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(242,242,242,0.25)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent'; }}
                  >
                    <img src={item.icon} alt={item.name} style={{ width: '32px', height: '32px', objectFit: 'contain', flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: '14px', fontWeight: 900, color: '#50f096', display: 'block', fontFamily: "'Ferom', Inter, sans-serif" }}>{item.name}</span>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.55, fontFamily: "'Ferom', Inter, sans-serif" }}>{item.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><hr className="border-white/10" /></div>
      {/* ═══════════════════ SEÇÃO 4 — BUSINESS CARD EM DESTAQUE ═══════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <Reveal>
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold mb-4" style={{ fontFamily: 'var(--font-jakarta)', color: '#50F096', fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}>
              A vitrine completa do seu negócio
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              O Perfil do Negócio é o coração da{' '}<img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '1.05em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.12em', filter: 'brightness(0) invert(1)' }} />{' '}Business. Mais que um perfil — é uma central completa que transforma o interesse do bairro em movimento no seu caixa.
            </p>
            <ul className="space-y-4">
              {[
                'Links diretos: compra, reserva, WhatsApp, pedidos',
                'Fotos, vídeos e cardápio em feed interativo',
                'Avaliações verificadas com sistema antifraude',
                'Localização, horários e dados operacionais em tempo real',
                'Selo de Verificação (disponível a partir do plano Plus)',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-tealBusiness text-lg mt-0.5">🐾</span>
                  <span className="text-white/70 font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          </Reveal>

          {/* Right - Mockup */}
          <Reveal delay={150}>
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
                  <span className="bg-navy/5 text-navy/50 text-[10px] font-bold px-2 py-1 rounded-full">Pedido</span>
                  <span className="bg-navy/5 text-navy/50 text-[10px] font-bold px-2 py-1 rounded-full">WhatsApp</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button className="text-xs font-bold py-2 rounded-xl" style={{ background: '#0AA689', color: '#28234B' }}>Pedir agora</button>
                  <button className="border border-navy/10 text-navy/60 text-xs font-bold py-2 rounded-xl">Ver cardápio</button>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><hr className="border-white/10" /></div>

      {/* ═══════════════════ SEÇÃO 5 — PLANOS E PREÇOS (CARROSSEL) ═══════════════════ */}
      <section id="planos" className="py-20 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-3 text-white" style={{ fontFamily: 'var(--font-jakarta)' }}>
            Planos que crescem com você.
          </h2>
          <p className="text-center text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Comece grátis. Evolua quando fizer sentido. Cada plano inclui tudo que o anterior oferece.
          </p>
          </Reveal>

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
                  textBright: false,
                  features: ['1 Localização', 'Feed com cardápio/ação', 'Comunidade básica', 'Rating e Reviews', 'Suporte N1']
                },
                {
                  name: 'Plus',
                  price: 'R$ 60',
                  tagline: 'Pra quem quer se destacar.',
                  cta: 'Quero crescer',
                  style: 'bg-tealBusiness border-transparent shadow-[0_8px_30px_-6px_rgba(0,168,150,0.35)]',
                  btnStyle: 'bg-[#28234B] text-white hover:bg-[#1e1c38]',
                  titleStyle: 'text-xl sm:text-2xl font-extrabold text-white',
                  popular: true,
                  light: false,
                  textBright: false,
                  features: ['Selo de Verificação', 'Até 3 localizações', '1 promoção ativa por vez', 'Notificações restritas', 'Suporte N2']
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
                  textBright: false,
                  features: ['Ranking Automático Premium', 'Até 6 Localizações', 'Promoções Ilimitadas', 'Análises de Mercado Local', 'Suporte N3']
                },
                {
                  name: 'Enterprise',
                  price: 'R$ 230',
                  tagline: 'Pra quem manda no bairro.',
                  cta: 'Falar com especialista',
                  style: 'bg-[#1A1C42] border border-white/10 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.4)]',
                  btnStyle: 'border border-white/20 text-white hover:bg-white/5',
                  titleStyle: 'text-3xl sm:text-[2rem] font-black text-white tracking-tighter leading-none pb-1',
                  popular: false,
                  light: false,
                  textBright: true,
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
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-extrabold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-sm tracking-wide transition-transform duration-500 delay-100" style={{ backgroundColor: '#E6F6F5', color: '#28234B', transform: isActive ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0.8)', opacity: isActive ? 1 : 0 }}>
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
                      <p className={`text-[0.7rem] uppercase tracking-wider font-bold mb-4 px-2 ${plan.popular ? 'text-white/50' : plan.light ? 'text-navy/50' : plan.textBright ? 'text-white/70' : 'text-white/40'}`}>Principais Benefícios</p>
                      <ul className="space-y-3 px-2">
                        {plan.features.map(f => (
                          <li key={f} className="flex items-start text-base">
                            <CheckIcon className={`w-5 h-5 mr-2 mt-0.5 shrink-0 ${plan.popular ? 'text-white' : 'text-tealBusiness'}`} />
                            <span className={`leading-snug ${plan.popular ? 'text-white/80' : plan.light ? 'text-navy/80' : plan.textBright ? 'text-white' : 'text-white/70'}`}>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`pt-6 mt-auto border-t ${plan.popular ? 'border-white/20' : plan.light ? 'border-navy/10' : 'border-white/10'}`}>
                      <button onClick={() => navigate('/cadastro?mode=business')} className={`w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-black text-sm transition-all ${plan.btnStyle}`}>
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

          <div className="flex flex-col items-center gap-4 mt-10">
            <button
              onClick={() => navigate('/cadastro?mode=business')}
              className="px-10 py-4 rounded-2xl font-black text-base transition-all"
              style={{ background: '#50F096', color: '#28234B' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#3cd87a'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#50F096'; }}
            >
              Quero fazer parte
            </button>

            <button
              onClick={() => setCompareOpen(v => !v)}
              className="flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.50)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#50F096'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.50)'; }}
            >
              {compareOpen ? '▲' : '▼'} Comparar todos os planos
            </button>
          </div>

          {/* ── Tabela comparativa ── */}
          <AnimatePresence>
            {compareOpen && (
              <motion.div
                key="compare-table"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <div className="mt-10 overflow-x-auto">
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left', padding: '12px 16px', color: 'rgba(255,255,255,0.40)', fontWeight: 600, width: '35%', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Recurso</th>
                        {[
                          { name: 'Basic', price: 'Grátis', highlight: false },
                          { name: 'Plus', price: 'R$ 60/mês', highlight: true },
                          { name: 'Business', price: 'R$ 140/mês', highlight: false },
                          { name: 'Enterprise', price: 'R$ 230/mês', highlight: false },
                        ].map(p => (
                          <th key={p.name} style={{ textAlign: 'center', padding: '12px 8px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: p.highlight ? 'rgba(0,168,150,0.12)' : 'transparent', borderRadius: p.highlight ? '8px 8px 0 0' : 0 }}>
                            <div style={{ color: p.highlight ? '#00A896' : '#FFFFFF', fontWeight: 700 }}>{p.name}</div>
                            <div style={{ color: 'rgba(255,255,255,0.40)', fontWeight: 400, fontSize: '14px', marginTop: '2px' }}>{p.price}</div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: 'Localizações', values: ['1', 'Até 3', 'Até 6', '7+'] },
                        { label: 'Feed cardápio/ação', values: ['✓', '✓', '✓', '✓'] },
                        { label: 'Comunidade', values: ['Básica', 'Básica', 'Avançada', 'Moderada'] },
                        { label: 'Rating e Reviews', values: ['✓', '✓', '✓', '✓'] },
                        { label: 'Verificação', values: ['—', '✓', '✓', '✓'] },
                        { label: 'Promoções ativas', values: ['—', '1', 'Ilimitadas', 'Ilimitadas'] },
                        { label: 'Notificações', values: ['—', 'Restritas', '✓', '✓'] },
                        { label: 'Ranking Premium', values: ['—', '—', '✓', '✓'] },
                        { label: 'Análises de Mercado', values: ['—', '—', '✓', '✓'] },
                        { label: 'Insights Fora do Nicho', values: ['—', '—', '—', '✓'] },
                        { label: 'Integrações Custom', values: ['—', '—', '—', '✓'] },
                        { label: 'Executivo de Conta', values: ['—', '—', '—', '✓'] },
                        { label: 'Suporte', values: ['N1', 'N2', 'N3', 'Executivo'] },
                      ].map((row, ri) => (
                        <tr key={row.label} style={{ background: ri % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                          <td style={{ padding: '11px 16px', color: 'rgba(255,255,255,0.65)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{row.label}</td>
                          {row.values.map((val, ci) => (
                            <td key={ci} style={{ textAlign: 'center', padding: '11px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: ci === 1 ? 'rgba(0,168,150,0.06)' : 'transparent', color: val === '✓' ? '#00A896' : val === '—' ? 'rgba(255,255,255,0.20)' : '#FFFFFF', fontWeight: val === '✓' ? 700 : 400 }}>
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><hr className="border-white/10" /></div>

      {/* ═══════════════════ SEÇÃO 9 — CTA FINAL ═══════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6">
        <Reveal>
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
            <button onClick={() => navigate('/cadastro?mode=business')} className="px-10 py-4 rounded-full font-extrabold text-lg hover:scale-105 transition-transform" style={{ background: '#50F096', color: '#28234B', boxShadow: 'inset 0px -10px 16px 0px rgba(10,166,137,1)' }}>
              Fazer parte
            </button>
          </div>
          <p className="text-white/40 text-sm mt-6 relative z-10">
            Ou, se preferir, <a href="#" style={{ color: '#50F096' }} className="hover:underline">fale com a gente →</a>
          </p>
        </div>
        </Reveal>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer style={{ background: '#50f096', color: '#28234b', fontSize: '14px' }}>
        <div className="w-[min(calc(100%-32px),1180px)] mx-auto" style={{ padding: '48px 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <img src="/mascote-colorido.png" alt="Sniffer mascote" style={{ height: '72px', width: 'auto' }} />
            <img src="/MARCA%20SNIFFER%20-%20ROTA%20PULSANTE%20-%20RGB.png" alt="Sniffer" style={{ height: '46px', width: 'auto' }} />
          </div>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.65, maxWidth: '30ch', color: 'rgba(40,35,75,0.7)', textAlign: 'center' }}>
            Comunidade – <span style={{ fontFamily: "'Buasley', cursive", fontSize: '18px', color: '#28234b' }}>experiência</span> – comodidade
          </p>
        </div>
        <div className="w-[min(calc(100%-32px),1180px)] mx-auto" style={{ padding: '40px 0 36px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { label: 'PRODUTO', links: ['Pessoas', 'Negócios', 'Comunidade', 'Early Adopters'] },
              { label: 'EMPRESA', links: ['Quem Somos', 'Cadastro', 'Contato'] },
              { label: 'LEGAL', links: ['Termos de Uso', 'Privacidade', 'Cookies'] },
            ].map(col => (
              <div key={col.label}>
                <strong style={{ display: 'block', color: 'rgba(40,35,75,0.4)', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '16px' }}>{col.label}</strong>
                {col.links.map(l => (
                  <a key={l} href="#" style={{ display: 'block', color: 'rgba(40,35,75,0.7)', textDecoration: 'none', marginBottom: '10px', fontSize: '14px' }}>{l}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[min(calc(100%-32px),1180px)] mx-auto" style={{ borderTop: '1px solid rgba(40,35,75,0.15)', padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(40,35,75,0.6)' }}>
            © 2026 <img src="/logo-sniffer-white.png" alt="Sniffer" style={{ height: '14px', width: 'auto', opacity: 0.4 }} /> · Todos os direitos reservados.
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: 'rgba(40,35,75,0.6)' }}>
            Feito com <span style={{ color: '#28234b', margin: '0 2px' }}>♥</span> no Brasil
          </span>
        </div>
      </footer>
    </motion.div>
  );
}
