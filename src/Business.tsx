/**
 * Sniffer Business Landing Page
 */
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, MessageCircle, BarChart3, MapPin, Star, Phone, ShoppingBag, Clock, Shield, ChevronDown, ChevronLeft, ChevronRight, Check as CheckIcon } from 'lucide-react';
import { motion } from 'motion/react';
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

/* ───────────────────── Comparison Table Data ───────────────────── */
const tableCategories = [
  {
    name: 'ATENDIMENTO',
    rows: [
      { feature: 'Suporte Técnico N1', basic: true, plus: true, business: true, enterprise: true },
      { feature: 'Suporte Técnico N2', basic: false, plus: true, business: true, enterprise: true },
      { feature: 'Suporte Técnico N3', basic: false, plus: false, business: true, enterprise: true },
      { feature: 'Executivo de Conta', basic: false, plus: false, business: false, enterprise: true },
    ],
  },
  {
    name: 'EXPOSIÇÃO',
    rows: [
      { feature: 'Rating (ranqueamento)', basic: true, plus: true, business: true, enterprise: true },
      { feature: 'Reviews (avaliações)', basic: true, plus: true, business: true, enterprise: true },
      { feature: 'Selo Verified Sniffer', basic: false, plus: true, business: true, enterprise: true },
      { feature: 'Ranking Search & Mapping', basic: false, plus: false, business: true, enterprise: true },
      { feature: 'Moderação de Reviews', basic: false, plus: false, business: false, enterprise: true },
    ],
  },
  {
    name: 'LOCALIZAÇÃO',
    rows: [
      { feature: '1 localização', basic: true, plus: true, business: true, enterprise: true },
      { feature: '2 a 3 localizações', basic: false, plus: true, business: true, enterprise: true },
      { feature: '4 a 6 localizações', basic: false, plus: false, business: true, enterprise: true },
      { feature: 'A partir de 7 localizações', basic: false, plus: false, business: false, enterprise: true },
    ],
  },
  {
    name: 'INTELIGÊNCIA',
    rows: [
      { feature: 'Volume de visualizações', basic: true, plus: true, business: true, enterprise: true },
      { feature: 'Volume de interações e pesquisas', basic: false, plus: true, business: true, enterprise: true },
      { feature: 'Análises comparativas de mercado', basic: false, plus: false, business: true, enterprise: true },
      { feature: 'BI customizado e integrado', basic: false, plus: false, business: false, enterprise: true },
      { feature: 'Demandas fora do nicho na região', basic: false, plus: false, business: false, enterprise: true },
    ],
  },
  {
    name: 'ADVERTISING',
    rows: [
      { feature: 'Feed com cardápio/ação', basic: true, plus: true, business: true, enterprise: true },
      { feature: 'Criação de comunidade', basic: true, plus: true, business: true, enterprise: true },
      { feature: '1 promoção ativa por vez', basic: false, plus: true, business: true, enterprise: true },
      { feature: 'Enviar arquivo/foto/vídeo', basic: false, plus: false, business: true, enterprise: true },
      { feature: 'Promoções ilimitadas', basic: false, plus: false, business: true, enterprise: true },
      { feature: 'Feed personalizado (fotos/vídeos)', basic: false, plus: false, business: false, enterprise: true },
      { feature: 'Push notification (raio X km)', basic: false, plus: false, business: false, enterprise: true },
    ],
  },
  {
    name: 'TECNOLOGIA',
    rows: [
      { feature: 'Sniffer Labs Store (SLS)', basic: false, plus: false, business: true, enterprise: true },
      { feature: 'Integrações automatizadas (Google, Meta, Apple)', basic: false, plus: false, business: true, enterprise: true },
      { feature: 'Integrações customizadas (ERP/etc)', basic: false, plus: false, business: false, enterprise: true },
    ],
  },
];

const Check = () => <span className="text-verdeSniffer font-bold text-lg">✓</span>;
const Dash = () => <span className="text-gray-500 text-lg">—</span>;

/* ───────────────────── Main Component ───────────────────── */
export default function Business() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const [currentPlanIndex, setCurrentPlanIndex] = useState(1); // Start with 'Plus'

  const nextPlan = () => setCurrentPlanIndex((prev) => (prev + 1) % 4);
  const prevPlan = () => setCurrentPlanIndex((prev) => (prev - 1 + 4) % 4);

  // Count-up metrics
  const m1 = useCountUp(40, 2000, 'R$ ', ' bi+');
  const m2 = useCountUp(3, 1500, '', ' pilares');
  const m3 = useCountUp(4, 1500, '', ' planos');
  const m4 = useCountUp(1, 1000, '', ' objetivo');

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="bg-white text-navy antialiased min-h-screen" 
      style={{ fontFamily: 'var(--font-nunito)' }}
    >

      {/* ═══════════════════ NAVBAR ═══════════════════ */}
      <header className="fixed top-[56px] inset-x-0 z-50">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 px-6 lg:gap-0 lg:py-3 bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg shadow-navy/5 rounded-full">
            <div className="flex w-full justify-between lg:w-auto">
              <a href="/business" className="flex items-center">
                <img src="/logo-sniffer-wordmark.png" alt="Sniffer" className="h-8 w-auto" />
              </a>
              <button
                className="relative z-20 -m-1 block cursor-pointer p-2 lg:hidden text-navy"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="size-6 duration-200" /> : <Menu className="size-6 duration-200" />}
              </button>
            </div>

            {/* Desktop Center Links */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm font-semibold list-none">
                <li><a href="#como-funciona" className="text-navy/70 hover:text-verdeSniffer block transition-colors duration-150">Como funciona</a></li>
                <li><a href="#planos" className="text-navy/70 hover:text-verdeSniffer block transition-colors duration-150">Planos</a></li>
                <li><a href="#parceiros" className="text-navy/70 hover:text-verdeSniffer block transition-colors duration-150">Para parceiros</a></li>
              </ul>
            </div>

            {/* Right CTA + Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} bg-white/95 lg:bg-transparent backdrop-blur-xl mt-4 lg:mt-0 w-full flex-wrap items-center justify-end space-y-6 rounded-3xl border border-navy/5 p-6 shadow-2xl shadow-navy/10 lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:p-0 lg:shadow-none`}>
              <div className="lg:hidden w-full">
                <ul className="space-y-6 text-base font-semibold list-none">
                  <li><a href="#como-funciona" className="text-navy/70 hover:text-verdeSniffer block transition-colors duration-150">Como funciona</a></li>
                  <li><a href="#planos" className="text-navy/70 hover:text-verdeSniffer block transition-colors duration-150">Planos</a></li>
                  <li><a href="#parceiros" className="text-navy/70 hover:text-verdeSniffer block transition-colors duration-150">Para parceiros</a></li>
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 lg:w-fit">
                <button className="bg-verdeSniffer text-navy px-6 py-2 rounded-full font-bold hover:opacity-90 transition-all text-sm w-full lg:w-auto shadow-sm">
                  Começar grátis
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ═══════════════════ SEÇÃO 1 — HERO ═══════════════════ */}
      <section className="pt-40 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-verdeSniffer/20 bg-verdeSniffer/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-verdeSniffer animate-pulse"></span>
              <span className="text-xs font-bold text-navy/70 tracking-wide">Novo modelo SVA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-jakarta)' }}>
              Seu negócio não precisa de mais visibilidade. Precisa de{' '}
              <span className="text-verdeSniffer" style={{ textDecoration: 'underline', textDecorationColor: 'rgba(120,200,122,0.3)', textUnderlineOffset: '6px', textDecorationThickness: '3px' }}>resultado.</span>
            </h1>

            <p className="text-navy/80 text-lg leading-relaxed mb-8 max-w-[560px]" style={{ fontFamily: 'var(--font-nunito)' }}>
              O Sniffer Business transforma presença digital em leads verificáveis, conversões reais e inteligência de mercado. Tudo o que o modelo antigo prometeu — e nunca entregou.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-verdeSniffer text-navy px-8 py-3.5 rounded-full font-extrabold text-base hover:scale-105 transition-transform shadow-lg shadow-verdeSniffer/20">
                Começar grátis
              </button>
              <a href="#planos" className="border border-navy/15 text-navy/60 px-8 py-3.5 rounded-full font-bold text-base hover:border-navy/30 transition-all">
                Ver planos ↓
              </a>
            </div>

            <p className="text-sm text-navy/40 font-medium">
              Presença · Interação · Inteligência — os três pilares que movem seu negócio.
            </p>
          </div>

          {/* Right — Business Card Mockup */}
          <div className="flex justify-center">
            <div className="relative w-[320px] sm:w-[360px]" style={{ animation: 'float-card 6s ease-in-out infinite' }}>
              <div className="bg-white rounded-3xl shadow-2xl shadow-navy/10 border border-gray-100 overflow-hidden" style={{ transform: 'perspective(1000px) rotateY(-3deg) rotateX(1deg)' }}>
                {/* Card cover */}
                <div className="bg-gradient-to-br from-verdeSniffer/30 to-verdeSniffer/10 h-36 flex items-end justify-between px-5 pb-4">
                  <div className="bg-white rounded-2xl p-2 shadow-md -mb-8">
                    <div className="w-14 h-14 bg-verdeSniffer/20 rounded-xl flex items-center justify-center text-2xl">🍕</div>
                  </div>
                  <div className="flex items-center gap-1 bg-white/80 backdrop-blur px-2.5 py-1 rounded-full text-xs font-bold text-navy">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" /> 4.8
                  </div>
                </div>
                {/* Card body */}
                <div className="px-5 pt-10 pb-5">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-extrabold text-lg" style={{ fontFamily: 'var(--font-jakarta)' }}>Pizzaria Bella Massa</h3>
                    <Shield className="w-4 h-4 text-verdeSniffer" />
                  </div>
                  <p className="text-navy/50 text-xs mb-4 flex items-center gap-1"><MapPin className="w-3 h-3" /> Próximo a você · 800m</p>

                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[
                      { icon: <Phone className="w-4 h-4" />, label: 'Ligar' },
                      { icon: <ShoppingBag className="w-4 h-4" />, label: 'Pedir' },
                      { icon: <MessageCircle className="w-4 h-4" />, label: 'Chat' },
                      { icon: <Clock className="w-4 h-4" />, label: 'Horários' },
                    ].map((a) => (
                      <div key={a.label} className="flex flex-col items-center gap-1 p-2 rounded-xl bg-navy/[0.03] text-navy/60 text-[10px] font-semibold">
                        {a.icon}
                        {a.label}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-navy/40">
                    <span className="bg-verdeSniffer/10 text-verdeSniffer px-2 py-0.5 rounded-full font-bold">Aberto</span>
                    <span>Fecha às 23h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4"><hr className="border-gray-200" /></div>

      {/* ═══════════════════ SEÇÃO 2 — O PROBLEMA ═══════════════════ */}
      <section id="como-funciona" className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14" style={{ fontFamily: 'var(--font-jakarta)' }}>
            O modelo antigo parou no tempo.<br className="hidden sm:block" /> Seu negócio, não.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* Before */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="font-extrabold text-lg mb-5 text-navy/50" style={{ fontFamily: 'var(--font-jakarta)' }}>Antes</h3>
              <ul className="space-y-4">
                {['Só listagem e visualização', 'Presença sem ação', 'Zero integração operacional', 'Sem retorno mensurável'].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="text-red-400/60 font-bold mt-0.5">✕</span>
                    <span className="text-gray-500 line-through">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* After */}
            <div className="border border-verdeSniffer/20 bg-verdeSniffer/[0.03] rounded-2xl p-8">
              <h3 className="font-extrabold text-lg mb-5 text-navy" style={{ fontFamily: 'var(--font-jakarta)' }}>Com o Sniffer</h3>
              <ul className="space-y-4">
                {['Leads verificáveis e conversões', 'Business Card com ações diretas', 'Integração com seu dia a dia', 'ROI em tempo real'].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="text-verdeSniffer font-bold mt-0.5">✓</span>
                    <span className="text-navy font-semibold">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-500 text-[0.95rem] max-w-[600px] mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-nunito)' }}>
            PMEs brasileiras investem mais de R$ 40 bilhões por ano em marketing e tecnologia. A maioria vai pra ferramentas que entregam alcance — não resultado. A gente tá aqui pra mudar isso.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><hr className="border-gray-200" /></div>

      {/* ═══════════════════ SEÇÃO 3 — TRÊS PILARES ═══════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14" style={{ fontFamily: 'var(--font-jakarta)' }}>
            Três pilares. Um só objetivo:<br />seu negócio crescer.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                icon: <Search className="w-7 h-7 text-verdeSniffer" />,
                title: 'Presença',
                subtitle: 'Seja encontrado e escolhido.',
                text: 'Business Card digital com links diretos pra compra, reserva, WhatsApp e delivery. Avaliações verificadas, selo Sniffer e posição no ranking de busca e mapa. Não é listagem — é vitrine que vende.',
              },
              {
                num: '02',
                icon: <MessageCircle className="w-7 h-7 text-verdeSniffer" />,
                title: 'Interação',
                subtitle: 'Engaje e converta clientes de verdade.',
                text: 'Crie sua comunidade de clientes fiéis. Promoções diretas com controle de validade e limite. Push notification por raio geográfico. Feed com cardápio, fotos e vídeos. Seu público, no seu território.',
              },
              {
                num: '03',
                icon: <BarChart3 className="w-7 h-7 text-verdeSniffer" />,
                title: 'Inteligência',
                subtitle: 'Decida com dados, não com achismo.',
                text: 'Dashboard com volume de visualizações, interações e pesquisas. Análise comparativa com concorrentes da região. Detecção de demandas não atendidas no seu bairro. A padaria do bairro com a mesma inteligência de uma grande rede.',
              },
            ].map((card) => (
              <div
                key={card.num}
                className="relative border border-gray-200 border-b-[3px] border-b-transparent rounded-[20px] p-9 overflow-hidden group hover:shadow-lg hover:border-b-verdeSniffer transition-all duration-300"
              >
                {/* Decorative number */}
                <span className="absolute top-4 right-4 text-[5rem] font-extrabold leading-none text-verdeSniffer/[0.08] select-none" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  {card.num}
                </span>
                <div className="mb-5">{card.icon}</div>
                <h3 className="font-extrabold text-xl mb-1" style={{ fontFamily: 'var(--font-jakarta)' }}>{card.title}</h3>
                <p className="text-verdeSniffer font-semibold text-sm mb-3">{card.subtitle}</p>
                <p className="text-navy/60 text-[0.9rem] leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><hr className="border-gray-200" /></div>

      {/* ═══════════════════ SEÇÃO 4 — BUSINESS CARD EM DESTAQUE ═══════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-jakarta)' }}>
              Seu negócio com tudo num só lugar.
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-8">
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
                  <span className="text-verdeSniffer text-lg mt-0.5">🐾</span>
                  <span className="text-navy/70 font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Mockup */}
          <div className="flex justify-center">
            <div className="w-[300px] sm:w-[340px] bg-white rounded-3xl shadow-xl shadow-navy/8 border border-gray-100 overflow-hidden" style={{ animation: 'float-card 6s ease-in-out infinite' }}>
              <div className="bg-gradient-to-br from-navy/80 to-navy h-32 relative flex items-end px-5 pb-3">
                <div className="bg-white rounded-xl p-1.5 shadow-md -mb-6">
                  <div className="w-12 h-12 bg-verdeSniffer/20 rounded-lg flex items-center justify-center text-xl">🍔</div>
                </div>
              </div>
              <div className="px-5 pt-8 pb-5">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <h4 className="font-extrabold" style={{ fontFamily: 'var(--font-jakarta)' }}>Burger Station</h4>
                  <Shield className="w-4 h-4 text-verdeSniffer" />
                </div>
                <p className="text-xs text-navy/40 mb-3">Hambúrgueria artesanal · ⭐ 4.9 · 2.1k avaliações</p>
                <div className="flex gap-2 mb-3">
                  <span className="bg-verdeSniffer/10 text-verdeSniffer text-[10px] font-bold px-2 py-1 rounded-full">Aberto</span>
                  <span className="bg-navy/5 text-navy/50 text-[10px] font-bold px-2 py-1 rounded-full">Delivery</span>
                  <span className="bg-navy/5 text-navy/50 text-[10px] font-bold px-2 py-1 rounded-full">WhatsApp</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-verdeSniffer text-navy text-xs font-bold py-2 rounded-xl">Pedir agora</button>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-3" style={{ fontFamily: 'var(--font-jakarta)' }}>
            Planos que crescem com você.
          </h2>
          <p className="text-center text-navy/50 text-lg mb-10 max-w-xl mx-auto">
            Comece grátis. Evolua quando fizer sentido. Cada plano inclui tudo do anterior.
          </p>

          <div className="relative max-w-lg mx-auto group/carousel">
            {/* Carousel Navigation Arrows */}
            <button 
              onClick={prevPlan} 
              className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white border border-gray-100 rounded-full shadow-sm text-navy/40 hover:text-navy hover:shadow-md hover:-translate-x-1 hover:scale-105 active:scale-95 transition-all outline-none"
              aria-label="Plano anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={nextPlan} 
              className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white border border-gray-100 rounded-full shadow-sm text-navy/40 hover:text-navy hover:shadow-md hover:translate-x-1 hover:scale-105 active:scale-95 transition-all outline-none"
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
                  cta: 'Começar grátis', 
                  style: 'border border-gray-200 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]', 
                  btnStyle: 'border border-navy/15 text-navy hover:bg-navy/5',
                  titleStyle: 'text-xl font-bold text-navy',
                  popular: false,
                  features: ['1 Localização', 'Feed com cardápio/ação', 'Comunidade básica', 'Rating e Reviews', 'Suporte N1']
                },
                { 
                  name: 'Plus', 
                  price: 'R$ 60', 
                  tagline: 'Pra quem quer se destacar.', 
                  cta: 'Quero o Plus', 
                  style: 'border border-verdeSniffer/40 bg-white shadow-[0_8px_30px_-6px_rgba(120,200,122,0.15)] ring-1 ring-verdeSniffer/10', 
                  btnStyle: 'bg-verdeSniffer text-navy hover:bg-verdeSniffer/90',
                  titleStyle: 'text-xl sm:text-2xl font-extrabold text-navy',
                  popular: true,
                  features: ['Selo Verified Sniffer', 'Até 3 Localizações', '1 Promoção ativa por vez', 'Push Notification restrito', 'Suporte N2']
                },
                { 
                  name: 'Business', 
                  price: 'R$ 140', 
                  tagline: 'Pra quem tá crescendo de verdade.', 
                  cta: 'Quero o Business', 
                  style: 'border border-gray-200 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]', 
                  btnStyle: 'bg-navy text-white hover:bg-navy/90', 
                  titleStyle: 'text-2xl sm:text-3xl font-black text-navy tracking-tight',
                  popular: false,
                  features: ['Ranking Automático Premium', 'Até 6 Localizações', 'Promoções Ilimitadas', 'Análises de Mercado Local', 'Suporte N3']
                },
                { 
                  name: 'Enterprise', 
                  price: 'R$ 230', 
                  tagline: 'Pra quem manda no bairro.', 
                  cta: 'Falar com especialista', 
                  style: 'border border-gray-200 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]', 
                  btnStyle: 'bg-offWhiteBg border border-navy text-navy hover:bg-navy/5', 
                  titleStyle: 'text-3xl sm:text-[2rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-navy to-verdeSniffer tracking-tighter leading-none pb-1',
                  popular: false,
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
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-verdeSniffer text-navy text-[10px] sm:text-xs font-extrabold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-sm tracking-wide transition-transform duration-500 delay-100" style={{ transform: isActive ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0.8)', opacity: isActive ? 1 : 0 }}>
                        MAIS POPULAR
                      </span>
                    )}

                    <div className="text-center mb-6">
                      <h3 className={`${plan.titleStyle} mb-1 transition-all duration-300`} style={{ fontFamily: 'var(--font-jakarta)' }}>{plan.name}</h3>
                      <div className="flex items-baseline justify-center gap-1 mb-2">
                        <span className="text-3xl sm:text-[2.6rem] font-black text-navy leading-none" style={{ fontFamily: 'var(--font-jakarta)' }}>{plan.price}</span>
                        {plan.price !== 'Grátis' && <span className="text-navy/40 font-bold text-sm">/mês</span>}
                      </div>
                      <p className="text-navy/50 text-sm italic">{plan.tagline}</p>
                    </div>

                    <div className="flex-grow transition-opacity duration-500 delay-150" style={{ opacity: isActive ? 1 : 0 }}>
                      <p className="text-[0.7rem] uppercase tracking-wider font-bold text-navy/40 mb-4 px-2">Principais Entregas</p>
                      <ul className="space-y-3 px-2">
                        {plan.features.map(f => (
                          <li key={f} className="flex items-start text-sm">
                            <CheckIcon className="w-5 h-5 text-verdeSniffer mr-2 shrink-0" />
                            <span className="text-navy/70 leading-tight">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-auto border-t border-gray-100/50">
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
                  <span className={`block rounded-full transition-all duration-300 ${currentPlanIndex === idx ? 'bg-verdeSniffer w-6 h-2.5' : 'w-2.5 h-2.5 bg-navy/10 hover:bg-navy/20'}`} />
                </button>
              ))}
            </div>
            
            <div className="text-center">
              <a href="#tabela-comparativa" className="inline-flex items-center gap-1.5 text-sm font-bold text-navy/60 hover:text-verdeSniffer transition-colors">
                Comparar todas as funcionalidades
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

          </div>

          <p className="text-center text-navy/40 text-sm mt-8 hidden">
            Todos com período de teste. Sem contrato. Cancele quando quiser.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><hr className="border-gray-200" /></div>

      {/* ═══════════════════ SEÇÃO 6 — TABELA COMPARATIVA ═══════════════════ */}
      <section id="tabela-comparativa" className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14" style={{ fontFamily: 'var(--font-jakarta)' }}>
            Compare os planos em detalhe.
          </h2>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-hidden border border-gray-200 rounded-2xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th scope="col" className="text-left py-4 px-6 font-bold text-navy/40 w-[280px]">Recurso</th>
                  <th scope="col" className="text-center py-4 px-4">
                    <div className="font-extrabold text-navy" style={{ fontFamily: 'var(--font-jakarta)' }}>Basic</div>
                    <div className="text-navy/50 text-xs font-bold">Grátis</div>
                  </th>
                  <th scope="col" className="text-center py-4 px-4 bg-verdeSniffer/[0.03]">
                    <div className="font-extrabold text-navy" style={{ fontFamily: 'var(--font-jakarta)' }}>Plus</div>
                    <div className="text-navy/50 text-xs font-bold">R$ 60/mês</div>
                  </th>
                  <th scope="col" className="text-center py-4 px-4">
                    <div className="font-extrabold text-navy" style={{ fontFamily: 'var(--font-jakarta)' }}>Business</div>
                    <div className="text-navy/50 text-xs font-bold">R$ 140/mês</div>
                  </th>
                  <th scope="col" className="text-center py-4 px-4">
                    <div className="font-extrabold text-navy" style={{ fontFamily: 'var(--font-jakarta)' }}>Enterprise</div>
                    <div className="text-navy/50 text-xs font-bold">R$ 230/mês</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableCategories.map((cat) => (
                  <>
                    <tr key={cat.name}>
                      <td colSpan={5} className="bg-offWhiteBg px-6 py-2.5 uppercase text-[0.7rem] font-bold text-navy tracking-[1px]" style={{ fontFamily: 'var(--font-jakarta)' }}>
                        {cat.name}
                      </td>
                    </tr>
                    {cat.rows.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? '' : 'bg-navy/[0.01]'}>
                        <td className="py-3 px-6 text-navy/70 font-medium">{row.feature}</td>
                        <td className="text-center py-3">{row.basic ? <Check /> : <Dash />}</td>
                        <td className="text-center py-3 bg-verdeSniffer/[0.03]">{row.plus ? <Check /> : <Dash />}</td>
                        <td className="text-center py-3">{row.business ? <Check /> : <Dash />}</td>
                        <td className="text-center py-3">{row.enterprise ? <Check /> : <Dash />}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile accordion */}
          <div className="lg:hidden space-y-3">
            {['Basic', 'Plus', 'Business', 'Enterprise'].map((plan) => {
              const priceMap: Record<string, string> = { Basic: 'Grátis', Plus: 'R$ 60/mês', Business: 'R$ 140/mês', Enterprise: 'R$ 230/mês' };
              const keyMap: Record<string, 'basic' | 'plus' | 'business' | 'enterprise'> = { Basic: 'basic', Plus: 'plus', Business: 'business', Enterprise: 'enterprise' };
              const isOpen = expandedPlan === plan;
              return (
                <div key={plan} className={`border rounded-2xl overflow-hidden ${plan === 'Plus' ? 'border-verdeSniffer' : 'border-gray-200'}`}>
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setExpandedPlan(isOpen ? null : plan)}
                  >
                    <div>
                      <span className="font-extrabold text-lg" style={{ fontFamily: 'var(--font-jakarta)' }}>{plan}</span>
                      <span className="ml-3 text-navy/50 text-sm font-bold">{priceMap[plan]}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-navy/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 space-y-4">
                      {tableCategories.map((cat) => (
                        <div key={cat.name}>
                          <p className="text-[0.65rem] font-bold text-navy/40 uppercase tracking-[1px] mb-2" style={{ fontFamily: 'var(--font-jakarta)' }}>{cat.name}</p>
                          <ul className="space-y-1.5">
                            {cat.rows.map((row) => (
                              <li key={row.feature} className="flex items-center gap-2 text-sm">
                                {row[keyMap[plan]] ? <Check /> : <Dash />}
                                <span className={row[keyMap[plan]] ? 'text-navy/70' : 'text-gray-400'}>{row.feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><hr className="border-gray-200" /></div>

      {/* ═══════════════════ SEÇÃO 7 — PARCEIROS SVA ═══════════════════ */}
      <section id="parceiros" className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-3" style={{ fontFamily: 'var(--font-jakarta)' }}>
            Parceiro SVA? A gente cresce junto.
          </h2>
          <p className="text-center text-navy/50 text-lg mb-14 max-w-2xl mx-auto">
            O Sniffer Business foi feito pra ser a próxima geração de SVA. Se você já tem base de PMEs, infraestrutura de cobrança e canais de venda — a gente entra com a tecnologia e a proposta de valor.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10 relative">
            {/* Plus sign between */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-verdeSniffer rounded-full items-center justify-center text-verdeSniffer text-2xl font-extrabold shadow-md">+</div>

            {/* Partner */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-extrabold text-lg mb-4" style={{ fontFamily: 'var(--font-jakarta)' }}>O que o parceiro traz</h3>
              <ul className="space-y-3">
                {[
                  'Base de clientes PME com relacionamento consolidado',
                  'Infraestrutura de billing e suporte escalável',
                  'Presença e alcance no mercado-alvo',
                  'Credibilidade de marca que acelera adoção',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-navy/60 text-[0.9rem]">
                    <span className="text-navy/30 mt-1">●</span>{t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sniffer */}
            <div className="border border-verdeSniffer/20 bg-verdeSniffer/[0.03] rounded-2xl p-8">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-extrabold text-lg mb-4" style={{ fontFamily: 'var(--font-jakarta)' }}>O que a Sniffer traz</h3>
              <ul className="space-y-3">
                {[
                  'Produto completo de inteligência e performance',
                  'Proposta de valor diferenciada do mercado',
                  'Modelo de preço competitivo pra qualquer portfólio',
                  'Roadmap de evolução contínua com Sniffer Labs',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-navy/70 text-[0.9rem] font-medium">
                    <span className="text-verdeSniffer mt-1">●</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Distribution models */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Oferta bundled nos planos do parceiro', 'Upsell digital via canais do parceiro', 'Landing page co-branded', 'Força de vendas Enterprise dedicada'].map((m) => (
              <span key={m} className="bg-offWhiteBg text-navy/60 text-sm font-medium px-4 py-2 rounded-full">{m}</span>
            ))}
          </div>

          <div className="text-center">
            <a href="#" className="text-verdeSniffer font-bold hover:underline inline-flex items-center gap-1 group">
              Quero ser parceiro SVA <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><hr className="border-gray-200" /></div>

      {/* ═══════════════════ SEÇÃO 8 — NÚMEROS ═══════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14" style={{ fontFamily: 'var(--font-jakarta)' }}>
            Não é promessa. É número.
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { ...m1, desc: 'investidos por PMEs em marketing/tech por ano' },
              { ...m2, desc: 'Presença, Interação e Inteligência integrados' },
              { ...m3, desc: 'do grátis ao Enterprise, sem contrato' },
              { ...m4, desc: 'ROI comprovado pro seu negócio' },
            ].map((metric, i) => (
              <div key={i} ref={metric.ref} className={`text-center ${i < 3 ? 'lg:border-r lg:border-gray-200' : ''}`}>
                <p className="text-verdeSniffer text-[2.5rem] sm:text-[3rem] font-extrabold leading-none mb-2" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  {metric.display}
                </p>
                <p className="text-gray-500 text-[0.85rem]">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><hr className="border-gray-200" /></div>

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
            <button className="bg-verdeSniffer text-navy px-10 py-4 rounded-full font-extrabold text-lg hover:scale-105 transition-transform shadow-lg shadow-verdeSniffer/20">
              Começar grátis agora
            </button>
          </div>
          <p className="text-white/40 text-sm mt-6 relative z-10">
            Ou, se preferir, <a href="#" className="text-verdeSniffer hover:underline">fale com a gente →</a>
          </p>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="border-t border-gray-200 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-navy/40 text-sm">
            <span className="font-extrabold" style={{ fontFamily: 'var(--font-jakarta)' }}>
              sni<span className="text-verdeSniffer/60">ff</span>er
            </span>
            <span className="text-navy/30">business</span>
            <span className="ml-2">© 2026 Sniffer Business. Belo Horizonte, MG.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-navy transition-colors">Termos</a>
            <a href="#" className="hover:text-navy transition-colors">Privacidade</a>
            <a href="#" className="hover:text-navy transition-colors">Contato</a>
            <a href="/" className="hover:text-verdeSniffer transition-colors font-medium">← Voltar para sniffer.app</a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
