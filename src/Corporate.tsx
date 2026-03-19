/**
 * Sniffer Corporate Landing Page
 */
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MapPin, BarChart3, Settings, Users, Shield, Download, ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

/* ───────────────────── Scroll-reveal hook ───────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string; key?: number | string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
}

/* ───────────────────── Corporate Component ───────────────────── */
export default function Corporate() {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="antialiased min-h-screen"
      style={{ fontFamily: "'Ferom', sans-serif", color: '#1A1A2E', background: '#FFFFFF' }}
    >

      {/* ═══════════════════ NAV ═══════════════════ */}
      <header className="fixed top-[56px] inset-x-0 z-50">
        <nav className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div
            className="relative flex flex-wrap items-center justify-between gap-6 py-3 px-6 lg:gap-0 lg:py-3 rounded-full transition-all duration-500"
            style={{
              background: isNavScrolled ? 'rgba(255,255,255,0.40)' : 'rgba(61,60,110,0.40)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: isNavScrolled ? '1px solid rgba(255,255,255,0.60)' : '1px solid rgba(255,255,255,0.15)',
              boxShadow: isNavScrolled ? '0 8px 32px rgba(45,47,94,0.08)' : '0 8px 32px rgba(0,0,0,0.20)',
            }}
          >
            <div className="flex w-full justify-between lg:w-auto">
              <a href="/corporate" className="flex items-center no-underline">
                <img
                  src={isNavScrolled ? '/logo-sniffer-wordmark.png' : '/logo-sniffer-white.png'}
                  alt="Sniffer"
                  className="h-9 w-auto transition-opacity duration-300"
                />
              </a>
              <button
                className="relative z-20 -m-1 block cursor-pointer p-2 lg:hidden transition-colors duration-300"
                style={{ color: isNavScrolled ? '#3D3C6E' : '#fff' }}
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
                <li><a href="#solucao" className="block no-underline transition-colors duration-300" style={{ color: isNavScrolled ? 'rgba(45,47,94,0.70)' : 'rgba(255,255,255,0.75)' }}>Solução</a></li>
                <li><a href="#pilares" className="block no-underline transition-colors duration-300" style={{ color: isNavScrolled ? 'rgba(45,47,94,0.70)' : 'rgba(255,255,255,0.75)' }}>Pilares</a></li>
                <li><a href="#diferencial" className="block no-underline transition-colors duration-300" style={{ color: isNavScrolled ? 'rgba(45,47,94,0.70)' : 'rgba(255,255,255,0.75)' }}>Diferencial</a></li>
              </ul>
            </div>

            {/* Right CTA + Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} bg-white/95 lg:bg-transparent backdrop-blur-xl mt-4 lg:mt-0 w-full flex-wrap items-center justify-end space-y-6 rounded-3xl border border-navy/5 p-6 shadow-2xl shadow-navy/10 lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:p-0 lg:shadow-none`}>
              <div className="lg:hidden w-full">
                <ul className="space-y-6 text-base font-semibold list-none">
                  <li><a href="#solucao" className="text-[#6B6A80] block transition-colors duration-150">Solução</a></li>
                  <li><a href="#pilares" className="text-[#6B6A80] block transition-colors duration-150">Pilares</a></li>
                  <li><a href="#diferencial" className="text-[#6B6A80] block transition-colors duration-150">Diferencial</a></li>
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 lg:w-fit">
                <a href="#contato" className="text-[13px] font-bold px-6 py-2 rounded-full transition-all no-underline text-center w-full lg:w-auto" style={{ color: '#3D3C6E', background: '#3DDC84' }}>
                  Falar com Executivo
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#3D3C6E' }}>
        {/* Radial gradient overlays */}
        <div className="absolute -top-[40%] -right-[20%] w-[900px] h-[900px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(61,220,132,0.06) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-[30%] -left-[10%] w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,168,150,0.05) 0%, transparent 70%)' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 relative z-[2]">
          <div className="max-w-[720px] pt-[180px] pb-[160px]">
            <p className="text-xs font-medium tracking-[3px] uppercase text-[#3DDC84] mb-8 animate-[fadeUp_0.8s_0.2s_forwards] opacity-0">
              Sniffer Corporate · Enterprise Intelligence
            </p>
            <h1
              className="font-bold leading-[1.05] text-white mb-8 animate-[fadeUp_0.8s_0.4s_forwards] opacity-0"
              style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(42px, 6vw, 72px)', letterSpacing: '-2px' }}
            >
              Inteligência local em <em className="not-italic text-[#3DDC84]">escala corporativa.</em>
            </h1>
            <p className="text-lg leading-[1.7] mb-12 font-light animate-[fadeUp_0.8s_0.6s_forwards] opacity-0" style={{ color: 'rgba(255,255,255,0.80)', maxWidth: '520px' }}>
              A plataforma que conecta grandes empresas ao pulso real das cidades. Dados comportamentais, presença multi-location e decisões que impactam milhões de consumidores.
            </p>
            <div className="flex gap-4 items-center flex-wrap animate-[fadeUp_0.8s_0.8s_forwards] opacity-0">
              <a href="#contato" className="inline-flex items-center gap-2.5 text-[15px] font-medium text-[#3D3C6E] bg-[#3DDC84] px-9 py-4 rounded-full no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(61,220,132,0.25)]">
                Agendar demonstração <ChevronRight className="size-4" />
              </a>
              <a href="#solucao" className="inline-flex items-center gap-2 text-[15px] py-4 no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.80)' }}>
                Conhecer a solução <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero metrics strip */}
        <div className="absolute bottom-0 inset-x-0 z-[2]" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-2 md:grid-cols-4">
            {([
              { value: '7', suffix: '+', label: 'Localizações por conta', delay: '1s' },
              { value: '360', suffix: '°', label: 'Visão do consumidor', delay: '1.1s' },
              { value: 'BI', suffix: '', label: 'Customizado e integrado', delay: '1.2s' },
              { value: 'ERP', suffix: '', label: 'Integrações sob medida', delay: '1.3s' },
            ] as const).map((m, i) => (
              <div
                key={i}
                className="py-9 opacity-0 animate-[fadeUp_0.6s_forwards]"
                style={{
                  animationDelay: m.delay,
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div className="font-bold text-[28px] text-white" style={{ fontFamily: "'Ferom', sans-serif", letterSpacing: '-1px' }}>
                  {m.value}<span className="text-[#3DDC84] text-lg">{m.suffix}</span>
                </div>
                <div className="text-[13px] mt-1.5" style={{ color: 'rgba(255,255,255,0.70)', letterSpacing: '0.3px' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ VALUE PROPOSITION ═══════════════════ */}
      <section className="py-[140px]" id="solucao" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[3px] uppercase text-[#00A896] mb-5">A solução</p>
            <h2 className="font-bold leading-[1.1] text-[#3D3C6E] mb-6" style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-1.5px', maxWidth: '600px' }}>
              Construído para quem opera em escala.
            </h2>
            <p className="text-[17px] leading-[1.75] font-light mb-[72px]" style={{ color: '#6B6A80', maxWidth: '520px' }}>
              Grandes redes, franquias e corporações precisam de mais do que presença digital. Precisam de inteligência que acompanha a complexidade do negócio.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E4E3EC] border border-[#E4E3EC] rounded-2xl overflow-hidden">
              {([
                { icon: <MapPin className="size-5 stroke-[#3D3C6E]" />, title: 'Gestão Multi-Location', desc: 'Controle centralizado de 7 ou mais unidades. Cada ponto com seu perfil, dados e performance — tudo visível em um painel único.' },
                { icon: <BarChart3 className="size-5 stroke-[#3D3C6E]" />, title: 'BI Customizado', desc: 'Dashboards sob medida com métricas que importam para o seu setor. Análises comparativas entre unidades, regiões e concorrentes.' },
                { icon: <Settings className="size-5 stroke-[#3D3C6E]" />, title: 'Integração ERP', desc: 'Conecta direto com seus sistemas de gestão. Dados fluem entre Sniffer e seu stack — sem retrabalho, sem silos.' },
                { icon: <Users className="size-5 stroke-[#3D3C6E]" />, title: 'Executivo de Conta', desc: 'Suporte dedicado com um executivo que conhece sua operação. Onboarding personalizado, acompanhamento contínuo e SLA prioritário.' },
                { icon: <Shield className="size-5 stroke-[#3D3C6E]" />, title: 'Moderação de Reviews', desc: 'Controle total sobre a reputação da marca. Moderação ativa de avaliações com sistema anti-fraude verificado pela Sniffer.' },
                { icon: <Download className="size-5 stroke-[#3D3C6E]" />, title: 'Feed Personalizado', desc: 'Conteúdo rico com fotos, vídeos e campanhas. Push notifications por raio geográfico que alcançam consumidores no momento certo.' },
              ]).map((card, i) => (
                <div key={i} className="bg-white p-12 transition-all duration-300 hover:bg-[#F8F7FC] group cursor-default">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-7 transition-colors duration-300 group-hover:bg-[#3D3C6E]" style={{ background: 'rgba(61, 60, 110, 0.08)' }}>
                    <div className="group-hover:[&_svg]:stroke-[#3DDC84] transition-colors">{card.icon}</div>
                  </div>
                  <h3 className="font-semibold text-lg text-[#3D3C6E] mb-3" style={{ fontFamily: "'Ferom', sans-serif", letterSpacing: '-0.3px' }}>{card.title}</h3>
                  <p className="text-sm leading-[1.7] font-light text-[#6B6A80]">{card.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ PILLARS ═══════════════════ */}
      <section className="py-[140px] relative overflow-hidden" id="pilares" style={{ background: '#3D3C6E' }}>
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none" style={{ background: 'linear-gradient(135deg, transparent 0%, rgba(61,220,132,0.03) 100%)' }} />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 relative z-[2]">
          <Reveal className="mb-20">
            <p className="text-[11px] font-medium tracking-[3px] uppercase text-[#3DDC84] mb-5">Os Pilares</p>
            <h2 className="font-bold leading-[1.1] text-white mb-6" style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-1.5px', maxWidth: '600px' }}>
              Quatro dimensões de inteligência corporativa.
            </h2>
            <p className="text-[17px] leading-[1.75] font-light" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '520px' }}>
              Cada pilar foi desenhado para resolver uma camada diferente da complexidade Enterprise.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {([
              { num: '01', title: 'Presença Unificada', desc: 'Todas as suas localizações sob uma identidade consistente. Perfis padronizados, informações sempre atualizadas, e uma experiência de marca única para o consumidor.', tag: 'Multi-location' },
              { num: '02', title: 'Inteligência Competitiva', desc: 'Entenda como cada unidade performa em relação à concorrência local. Benchmarks por região, gaps de mercado e demandas não atendidas no seu setor.', tag: 'Analytics' },
              { num: '03', title: 'Comunidade Proprietária', desc: 'Crie e gerencie comunidades de clientes fiéis em torno de cada unidade ou da marca como um todo. Relacionamento direto, sem intermediários.', tag: 'Engagement' },
              { num: '04', title: 'Infraestrutura Integrada', desc: 'Integrações customizadas com ERP, CRM e sistemas de gestão. A Sniffer se encaixa na infraestrutura que já existe — sem forçar migração.', tag: 'Enterprise-grade' },
            ]).map((pillar, i) => (
              <Reveal key={i}>
                <div className="rounded-2xl p-12 transition-all duration-[400ms] hover:-translate-y-1 hover:border-[rgba(61,220,132,0.15)]" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="font-black text-5xl leading-none mb-6" style={{ fontFamily: "'Ferom', sans-serif", color: 'rgba(255,255,255,0.06)', letterSpacing: '-2px' }}>{pillar.num}</div>
                  <h3 className="font-semibold text-[22px] text-white mb-4" style={{ fontFamily: "'Ferom', sans-serif", letterSpacing: '-0.5px' }}>{pillar.title}</h3>
                  <p className="text-[15px] leading-[1.75] font-light mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>{pillar.desc}</p>
                  <span className="inline-block text-[11px] font-medium tracking-[1.5px] uppercase text-[#3DDC84] px-3.5 py-1.5 rounded-full" style={{ border: '1px solid rgba(61, 220, 132, 0.2)' }}>
                    {pillar.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ DIFERENCIAL ═══════════════════ */}
      <section className="py-[140px]" id="diferencial" style={{ background: '#F8F7FC' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Dashboard visual */}
            <Reveal className="relative">
              <div className="bg-white rounded-2xl border border-[#E4E3EC] p-8" style={{ boxShadow: '0 24px 80px rgba(61, 60, 110, 0.06)' }}>
                <div className="flex justify-between items-center mb-8">
                  <div className="font-semibold text-sm text-[#3D3C6E]" style={{ fontFamily: "'Ferom', sans-serif" }}>Performance por Unidade</div>
                  <div className="text-[10px] font-medium tracking-[1.5px] uppercase text-[#00A896] px-3 py-1 rounded-full" style={{ background: 'rgba(0, 168, 150, 0.08)' }}>Tempo Real</div>
                </div>
                <div className="flex items-end gap-2 h-[140px] mb-6">
                  {[
                    { h: '55%', bg: '#E4E3EC' }, { h: '78%', bg: '#4E4D82' },
                    { h: '62%', bg: '#E4E3EC' }, { h: '92%', bg: '#3DDC84' },
                    { h: '45%', bg: '#E4E3EC' }, { h: '85%', bg: '#3D3C6E' },
                    { h: '70%', bg: '#E4E3EC' }, { h: '88%', bg: '#00A896' },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 rounded-t-md transition-all duration-[1200ms]" style={{ height: bar.h, background: bar.bg }} />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E4E3EC]">
                  {[
                    { val: '12.4k', lbl: 'Visualizações' },
                    { val: '3.2k', lbl: 'Interações' },
                    { val: '847', lbl: 'Conversões' },
                  ].map((m, i) => (
                    <div key={i}>
                      <div className="font-bold text-xl text-[#3D3C6E]" style={{ fontFamily: "'Ferom', sans-serif", letterSpacing: '-0.5px' }}>{m.val}</div>
                      <div className="text-[11px] text-[#9594A8] mt-1">{m.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 rounded-[14px] px-7 py-5" style={{ background: '#3D3C6E', boxShadow: '0 16px 48px rgba(46, 47, 99, 0.25)' }}>
                <div className="font-bold text-2xl text-[#3DDC84]" style={{ fontFamily: "'Ferom', sans-serif" }}>+34%</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>ROI comprovado</div>
              </div>
            </Reveal>

            {/* Content */}
            <Reveal>
              <p className="text-[11px] font-medium tracking-[3px] uppercase text-[#00A896] mb-5">O diferencial</p>
              <h2 className="font-bold leading-[1.1] text-[#3D3C6E] mb-6" style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-1.5px', maxWidth: '600px' }}>
                Dados que grandes empresas nunca tiveram.
              </h2>
              <p className="text-[17px] leading-[1.75] font-light mb-12" style={{ color: '#6B6A80', maxWidth: '520px' }}>
                A Sniffer vai além do que Google Business e Apple Business Connect oferecem. Inteligência comportamental profunda, benchmarks localizados e analytics preditivo.
              </p>
              <div className="flex flex-col gap-5">
                {([
                  { title: 'Análises comportamentais profundas', desc: 'Padrões de visitação, segmentação de visitantes recorrentes e previsões de pico — por unidade.' },
                  { title: 'Benchmarking hiperlocal', desc: 'Compare cada unidade contra concorrentes da mesma região e segmento.' },
                  { title: 'Inteligência preditiva', desc: 'Alertas automáticos sobre anomalias de performance e recomendações de otimização baseadas em IA.' },
                  { title: 'Demandas fora do nicho', desc: 'Descubra o que consumidores procuram na sua região e que ninguém está oferecendo.' },
                ]).map((feat, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-7 h-7 min-w-[28px] rounded-lg flex items-center justify-center mt-0.5" style={{ background: 'rgba(61, 220, 132, 0.12)' }}>
                      <Check className="size-3.5 stroke-[#3D3C6E] stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[15px] text-[#3D3C6E] mb-1" style={{ fontFamily: "'Ferom', sans-serif" }}>{feat.title}</h4>
                      <p className="text-[13px] leading-[1.6] font-light text-[#6B6A80]">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-[140px]" id="contato" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <Reveal>
            <div className="relative rounded-3xl px-8 sm:px-16 py-20 text-center overflow-hidden" style={{ background: '#3D3C6E' }}>
              <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(61,220,132,0.08) 0%, transparent 70%)' }} />
              <p className="text-[11px] font-medium tracking-[3px] uppercase text-[#3DDC84] mb-7 relative z-[2]">Próximo passo</p>
              <h2 className="font-bold leading-[1.15] text-white mb-5 mx-auto relative z-[2]" style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-1.5px', maxWidth: '560px' }}>
                Sua operação merece inteligência à altura.
              </h2>
              <p className="text-base leading-[1.7] font-light mx-auto mb-10 relative z-[2]" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '440px' }}>
                Estamos construindo o Corporate para empresas que pensam grande. Agende uma conversa com nosso time e entenda como a Sniffer pode transformar sua presença local.
              </p>
              <div className="flex gap-4 justify-center items-center flex-wrap relative z-[2]">
                <a href="#" className="inline-flex items-center gap-2.5 text-[15px] font-medium text-[#3D3C6E] bg-[#3DDC84] px-9 py-4 rounded-full no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(61,220,132,0.25)]">
                  Agendar demonstração <ChevronRight className="size-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-[15px] py-4 no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Baixar one-pager <Download className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="py-12 border-t border-[#E4E3EC]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <a href="/corporate" className="no-underline">
            <img src="/logo-sniffer-wordmark.png" alt="Sniffer" className="h-6 w-auto" />
          </a>
          <div className="text-[13px] text-[#9594A8] flex items-center gap-6">
            <span>© 2026 Sniffer</span>
            <a href="#" className="text-[#6B6A80] hover:text-[#3D3C6E] no-underline transition-colors">Privacidade</a>
            <a href="#" className="text-[#6B6A80] hover:text-[#3D3C6E] no-underline transition-colors">Termos</a>
          </div>
        </div>
      </footer>

    </motion.div>
  );
}
