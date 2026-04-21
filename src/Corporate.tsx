/**
 * Sniffer Comunidade Landing Page
 */
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MapPin, BarChart3, Settings, Users, Shield, Download, ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { pageVariants, pageTransition } from './pageTransition';

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

/* ───────────────────── Comunidade Component ───────────────────── */
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
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="antialiased min-h-screen"
      style={{ fontFamily: "'Ferom', sans-serif", color: '#2D2F5E', background: '#E6F6F5' }}
    >

      {/* ═══════════════════ NAV ═══════════════════ */}
      <header className="fixed top-[68px] inset-x-0 z-50">
        <nav className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div
            className="relative flex flex-wrap items-center justify-between gap-6 py-3 px-6 lg:gap-0 lg:py-3 rounded-full transition-all duration-500"
            style={{
              background: isNavScrolled ? 'rgba(255,255,255,0.60)' : 'rgba(0,100,88,0.50)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: isNavScrolled ? '1px solid rgba(255,255,255,0.70)' : '1px solid rgba(255,255,255,0.20)',
              boxShadow: isNavScrolled ? '0 8px 32px rgba(45,47,94,0.08)' : '0 8px 32px rgba(0,0,0,0.15)',
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
                style={{ color: isNavScrolled ? '#2D2F5E' : '#fff' }}
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
                <li><a href="#solucao" className="block no-underline transition-colors duration-300" style={{ color: isNavScrolled ? 'rgba(45,47,94,0.70)' : 'rgba(255,255,255,0.90)' }}>Solução</a></li>
                <li><a href="#pilares" className="block no-underline transition-colors duration-300" style={{ color: isNavScrolled ? 'rgba(45,47,94,0.70)' : 'rgba(255,255,255,0.90)' }}>Pilares</a></li>
                <li><a href="#diferencial" className="block no-underline transition-colors duration-300" style={{ color: isNavScrolled ? 'rgba(45,47,94,0.70)' : 'rgba(255,255,255,0.90)' }}>Diferencial</a></li>
              </ul>
            </div>

            {/* Right CTA + Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} bg-white/95 lg:bg-transparent backdrop-blur-xl mt-4 lg:mt-0 w-full flex-wrap items-center justify-end space-y-6 rounded-3xl border border-navy/5 p-6 shadow-2xl shadow-navy/10 lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:p-0 lg:shadow-none`}>
              <div className="lg:hidden w-full">
                <ul className="space-y-6 text-base font-semibold list-none">
                  <li><a href="#solucao" className="block transition-colors duration-150" style={{ color: 'rgba(45,47,94,0.65)' }}>Solução</a></li>
                  <li><a href="#pilares" className="block transition-colors duration-150" style={{ color: 'rgba(45,47,94,0.65)' }}>Pilares</a></li>
                  <li><a href="#diferencial" className="block transition-colors duration-150" style={{ color: 'rgba(45,47,94,0.65)' }}>Diferencial</a></li>
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 lg:w-fit">
                <a href="/cadastro?mode=comunidade" className="text-[13px] font-bold px-6 py-2 rounded-full transition-all no-underline text-center w-full lg:w-auto" style={{ color: '#2D2F5E', background: '#FFFFFF' }}>
                  Criar Comunidade
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#00A896' }}>
        {/* Radial gradient overlays */}
        <div className="absolute -top-[40%] -right-[20%] w-[900px] h-[900px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-[30%] -left-[10%] w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(61,220,132,0.15) 0%, transparent 70%)' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(45,47,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(45,47,94,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 relative z-[2]">
          <div className="max-w-[720px] pt-[180px] pb-[160px]">
            <p className="text-xs font-medium tracking-[3px] uppercase text-[#2D2F5E] mb-8 animate-[fadeUp_0.8s_0.2s_forwards] opacity-0">
              Sniffer Comunidade · Conecte seu bairro
            </p>
            <h1
              className="font-bold leading-[1.05] text-[#2D2F5E] mb-8 animate-[fadeUp_0.8s_0.4s_forwards] opacity-0"
              style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(42px, 6vw, 72px)', letterSpacing: '-2px' }}
            >
              Seu bairro tem voz. <em className="not-italic text-white">Agora tem plataforma.</em>
            </h1>
            <p className="text-lg leading-[1.7] mb-12 font-light animate-[fadeUp_0.8s_0.6s_forwards] opacity-0" style={{ color: 'rgba(45,47,94,0.80)', maxWidth: '520px' }}>
              Ferramentas para quem organiza, mobiliza e conecta. Crie comunidades reais, gerencie eventos locais e reúna pessoas que compartilham o mesmo território.
            </p>
            <div className="flex gap-4 items-center flex-wrap animate-[fadeUp_0.8s_0.8s_forwards] opacity-0">
              <a href="/cadastro?mode=comunidade" className="inline-flex items-center gap-2.5 text-[15px] font-medium text-[#2D2F5E] bg-white px-9 py-4 rounded-full no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.30)]">
                Criar minha comunidade <ChevronRight className="size-4" />
              </a>
              <a href="#solucao" className="inline-flex items-center gap-2 text-[15px] py-4 no-underline transition-colors hover:text-white" style={{ color: 'rgba(45,47,94,0.80)' }}>
                Como funciona <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero metrics strip */}
        <div className="absolute bottom-0 inset-x-0 z-[2]" style={{ borderTop: '1px solid rgba(45,47,94,0.12)' }}>
          <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-2 md:grid-cols-4">
            {([
              { value: '500', suffix: '+', label: 'Comunidades ativas', delay: '1s' },
              { value: '50k', suffix: '+', label: 'Membros conectados', delay: '1.1s' },
              { value: 'Eventos', suffix: '', label: 'Criados em segundos', delay: '1.2s' },
              { value: 'Bairro', suffix: '', label: 'Inteligente', delay: '1.3s' },
            ] as const).map((m, i) => (
              <div
                key={i}
                className="py-9 opacity-0 animate-[fadeUp_0.6s_forwards]"
                style={{
                  animationDelay: m.delay,
                  borderRight: i < 3 ? '1px solid rgba(45,47,94,0.12)' : 'none',
                }}
              >
                <div className="font-bold text-[28px] text-[#2D2F5E]" style={{ fontFamily: "'Ferom', sans-serif", letterSpacing: '-1px' }}>
                  {m.value}<span className="text-white text-lg">{m.suffix}</span>
                </div>
                <div className="text-[13px] mt-1.5" style={{ color: 'rgba(45,47,94,0.70)', letterSpacing: '0.3px' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ VALUE PROPOSITION ═══════════════════ */}
      <section className="py-[140px]" id="solucao" style={{ background: '#E6F6F5' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[3px] uppercase text-[#00A896] mb-5">A solução</p>
            <h2 className="font-bold leading-[1.1] text-[#2D2F5E] mb-6" style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-1.5px', maxWidth: '600px' }}>
              Tudo que uma comunidade viva precisa.
            </h2>
            <p className="text-[17px] leading-[1.75] font-light mb-[72px]" style={{ color: 'rgba(45,47,94,0.60)', maxWidth: '520px' }}>
              De blocos de carnaval a grupos de corrida, de associações de bairro a coletivos culturais — a Sniffer dá estrutura ao que já existe.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ background: 'rgba(0,168,150,0.18)', border: '1px solid rgba(0,168,150,0.18)' }}>
              {([
                { icon: <Users className="size-5 stroke-[#2D2F5E]" />, title: 'Gestão de Membros', desc: 'Adicione membros, defina papéis e mantenha o grupo organizado. Cada pessoa conectada à sua comunidade com um clique.' },
                { icon: <MapPin className="size-5 stroke-[#2D2F5E]" />, title: 'Eventos Geolocalizados', desc: 'Crie eventos que aparecem para pessoas no raio certo. Seus encontros chegam a quem está perto, na hora certa.' },
                { icon: <BarChart3 className="size-5 stroke-[#2D2F5E]" />, title: 'Engajamento em Tempo Real', desc: 'Visualize quem está ativo, quais eventos geram mais movimento e como sua comunidade cresce semana a semana.' },
                { icon: <Settings className="size-5 stroke-[#2D2F5E]" />, title: 'Moderação Simples', desc: 'Controle quem entra, aprove conteúdo e mantenha o espaço seguro e alinhado com os valores do grupo.' },
                { icon: <Shield className="size-5 stroke-[#2D2F5E]" />, title: 'Identidade da Comunidade', desc: 'Perfil, logo, cores e descrição. Sua comunidade com identidade própria dentro do Sniffer.' },
                { icon: <Download className="size-5 stroke-[#2D2F5E]" />, title: 'Comunicação Direta', desc: 'Mande avisos, convites e novidades para todos os membros — sem depender de grupos de WhatsApp.' },
              ]).map((card, i) => (
                <div key={i} className="bg-white p-12 transition-all duration-300 hover:bg-[#D8F0EE] group cursor-default">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-7 transition-colors duration-300 group-hover:bg-[#00A896]" style={{ background: 'rgba(0,168,150,0.10)' }}>
                    <div className="group-hover:[&_svg]:stroke-white transition-colors">{card.icon}</div>
                  </div>
                  <h3 className="font-semibold text-lg text-[#2D2F5E] mb-3" style={{ fontFamily: "'Ferom', sans-serif", letterSpacing: '-0.3px' }}>{card.title}</h3>
                  <p className="text-sm leading-[1.7] font-light" style={{ color: 'rgba(45,47,94,0.60)' }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ PILLARS ═══════════════════ */}
      <section className="py-[140px] relative overflow-hidden" id="pilares" style={{ background: '#00A896' }}>
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none" style={{ background: 'linear-gradient(135deg, transparent 0%, rgba(45,47,94,0.08) 100%)' }} />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 relative z-[2]">
          <Reveal className="mb-20">
            <p className="text-[11px] font-medium tracking-[3px] uppercase text-[#2D2F5E] mb-5">Os Pilares</p>
            <h2 className="font-bold leading-[1.1] text-[#2D2F5E] mb-6" style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-1.5px', maxWidth: '600px' }}>
              Quatro formas de fazer seu bairro pulsar.
            </h2>
            <p className="text-[17px] leading-[1.75] font-light" style={{ color: 'rgba(45,47,94,0.75)', maxWidth: '520px' }}>
              Cada pilar foi construído para resolver uma etapa diferente da organização comunitária.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {([
              { num: '01', title: 'Conectar', desc: 'Reúna pessoas que compartilham o mesmo território ou interesse. Uma comunidade começa com uma ideia e um ponto no mapa.', tag: 'Rede local' },
              { num: '02', title: 'Mobilizar', desc: 'Crie eventos, convoque membros e meça o impacto. Da ideia ao encontro real em minutos, com tudo registrado.', tag: 'Eventos' },
              { num: '03', title: 'Crescer', desc: 'Seu grupo cresce organicamente com a geolocalização do Sniffer. Novos membros descobrem comunidades ativas no bairro deles.', tag: 'Descoberta' },
              { num: '04', title: 'Fortalecer', desc: 'Dados de engajamento que mostram o que funciona. Tome decisões com base no que a comunidade realmente quer.', tag: 'Analytics' },
            ]).map((pillar, i) => (
              <Reveal key={i}>
                <div className="rounded-2xl p-12 transition-all duration-[400ms] hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.22)', border: '1px solid rgba(45,47,94,0.12)' }}>
                  <div className="font-black text-5xl leading-none mb-6" style={{ fontFamily: "'Ferom', sans-serif", color: 'rgba(45,47,94,0.10)', letterSpacing: '-2px' }}>{pillar.num}</div>
                  <h3 className="font-semibold text-[22px] text-[#2D2F5E] mb-4" style={{ fontFamily: "'Ferom', sans-serif", letterSpacing: '-0.5px' }}>{pillar.title}</h3>
                  <p className="text-[15px] leading-[1.75] font-light mb-6" style={{ color: 'rgba(45,47,94,0.75)' }}>{pillar.desc}</p>
                  <span className="inline-block text-[11px] font-medium tracking-[1.5px] uppercase text-[#2D2F5E] px-3.5 py-1.5 rounded-full" style={{ border: '1px solid rgba(45,47,94,0.25)', background: 'rgba(45,47,94,0.08)' }}>
                    {pillar.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ DIFERENCIAL ═══════════════════ */}
      <section className="py-[140px]" id="diferencial" style={{ background: '#D0EFED' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Dashboard visual */}
            <Reveal className="relative">
              <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid rgba(0,168,150,0.20)', boxShadow: '0 24px 80px rgba(0,168,150,0.12)' }}>
                <div className="flex justify-between items-center mb-8">
                  <div className="font-semibold text-sm text-[#2D2F5E]" style={{ fontFamily: "'Ferom', sans-serif" }}>Atividade da Comunidade</div>
                  <div className="text-[10px] font-medium tracking-[1.5px] uppercase text-[#2D2F5E] px-3 py-1 rounded-full" style={{ background: 'rgba(0,168,150,0.12)' }}>Ao Vivo</div>
                </div>
                <div className="flex items-end gap-2 h-[140px] mb-6">
                  {[
                    { h: '55%', bg: 'rgba(0,168,150,0.15)' }, { h: '78%', bg: '#4E4D82' },
                    { h: '62%', bg: 'rgba(0,168,150,0.15)' }, { h: '92%', bg: '#3DDC84' },
                    { h: '45%', bg: 'rgba(0,168,150,0.15)' }, { h: '85%', bg: '#2D2F5E' },
                    { h: '70%', bg: 'rgba(0,168,150,0.15)' }, { h: '88%', bg: '#00A896' },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 rounded-t-md transition-all duration-[1200ms]" style={{ height: bar.h, background: bar.bg }} />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6" style={{ borderTop: '1px solid rgba(0,168,150,0.15)' }}>
                  {[
                    { val: '1.2k', lbl: 'Membros' },
                    { val: '38', lbl: 'Eventos/mês' },
                    { val: '94%', lbl: 'Retenção' },
                  ].map((m, i) => (
                    <div key={i}>
                      <div className="font-bold text-xl text-[#2D2F5E]" style={{ fontFamily: "'Ferom', sans-serif", letterSpacing: '-0.5px' }}>{m.val}</div>
                      <div className="text-[11px] mt-1" style={{ color: 'rgba(45,47,94,0.50)' }}>{m.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 rounded-[14px] px-7 py-5" style={{ background: '#2D2F5E', boxShadow: '0 16px 48px rgba(45,47,94,0.20)' }}>
                <div className="font-bold text-2xl text-[#3DDC84]" style={{ fontFamily: "'Ferom', sans-serif" }}>+3x</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>Engajamento</div>
              </div>
            </Reveal>

            {/* Content */}
            <Reveal>
              <p className="text-[11px] font-medium tracking-[3px] uppercase text-[#00A896] mb-5">O diferencial</p>
              <h2 className="font-bold leading-[1.1] text-[#2D2F5E] mb-6" style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-1.5px', maxWidth: '600px' }}>
                Mais do que um grupo. Uma presença no mapa.
              </h2>
              <p className="text-[17px] leading-[1.75] font-light mb-12" style={{ color: 'rgba(45,47,94,0.60)', maxWidth: '520px' }}>
                O Sniffer dá às comunidades o que grupos de WhatsApp nunca conseguiram: estrutura, visibilidade e dados.
              </p>
              <div className="flex flex-col gap-5">
                {([
                  { title: 'Visibilidade geográfica', desc: 'Sua comunidade aparece no mapa para quem mora ou passa pelo bairro. Descoberta orgânica, sem anúncios.' },
                  { title: 'Histórico de atividades', desc: 'Registro completo de eventos, membros e interações. A memória viva da sua comunidade.' },
                  { title: 'Alertas de proximidade', desc: 'Membros recebem notificações quando algo acontece perto deles. Presença ativa no cotidiano.' },
                  { title: 'Integração com o ecossistema', desc: 'Conecte sua comunidade com negócios parceiros, eventos da cidade e outras tribos do Sniffer.' },
                ]).map((feat, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-7 h-7 min-w-[28px] rounded-lg flex items-center justify-center mt-0.5" style={{ background: 'rgba(0,168,150,0.12)' }}>
                      <Check className="size-3.5 stroke-[#2D2F5E] stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[15px] text-[#2D2F5E] mb-1" style={{ fontFamily: "'Ferom', sans-serif" }}>{feat.title}</h4>
                      <p className="text-[13px] leading-[1.6] font-light" style={{ color: 'rgba(45,47,94,0.60)' }}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-[140px]" id="contato" style={{ background: '#E6F6F5' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <Reveal>
            <div className="relative rounded-3xl px-8 sm:px-16 py-20 text-center overflow-hidden" style={{ background: '#2D2F5E' }}>
              <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,168,150,0.15) 0%, transparent 70%)' }} />
              <p className="text-[11px] font-medium tracking-[3px] uppercase text-[#3DDC84] mb-7 relative z-[2]">Próximo passo</p>
              <h2 className="font-bold leading-[1.15] text-white mb-5 mx-auto relative z-[2]" style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-1.5px', maxWidth: '560px' }}>
                Sua comunidade merece um lar digital.
              </h2>
              <p className="text-base leading-[1.7] font-light mx-auto mb-10 relative z-[2]" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '440px' }}>
                Estamos construindo o Sniffer Comunidade para grupos que fazem o bairro acontecer. Entre na lista e seja dos primeiros.
              </p>
              <div className="flex gap-4 justify-center items-center flex-wrap relative z-[2]">
                <a href="/cadastro?mode=comunidade" className="inline-flex items-center gap-2.5 text-[15px] font-medium text-[#2D2F5E] bg-[#3DDC84] px-9 py-4 rounded-full no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(61,220,132,0.25)]">
                  Criar minha comunidade <ChevronRight className="size-4" />
                </a>
                <a href="#solucao" className="inline-flex items-center gap-2 text-[15px] py-4 no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Conhecer mais <ChevronRight className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="py-12" style={{ borderTop: '1px solid rgba(0,168,150,0.20)' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <a href="/corporate" className="no-underline">
            <img src="./logo-sniffer-wordmark.png" alt="Sniffer" className="h-6 w-auto" />
          </a>
          <div className="text-[13px] flex items-center gap-6" style={{ color: 'rgba(45,47,94,0.50)' }}>
            <span>© 2026 Sniffer</span>
            <a href="#" className="no-underline transition-colors hover:text-[#2D2F5E]" style={{ color: 'rgba(45,47,94,0.60)' }}>Privacidade</a>
            <a href="#" className="no-underline transition-colors hover:text-[#2D2F5E]" style={{ color: 'rgba(45,47,94,0.60)' }}>Termos</a>
          </div>
        </div>
      </footer>

    </motion.div>
  );
}
