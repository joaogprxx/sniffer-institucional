import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { pageVariants, pageTransition } from './pageTransition';

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

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}>
      {children}
    </div>
  );
}

const shell = 'w-[min(calc(100%-32px),1180px)] mx-auto';

export default function Corporate() {
  const navigate = useNavigate();

  const btnPrimary = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    padding: '10px 16px', borderRadius: '999px', fontWeight: 700,
    background: '#00A896',
    color: '#ffffff', border: '1px solid rgba(255,255,255,0.65)', cursor: 'pointer',
    boxShadow: '0 8px 24px rgba(0,168,150,0.35)', fontSize: '13px',
    fontFamily: "'Ferom', Inter, sans-serif", whiteSpace: 'nowrap' as const,
    pointerEvents: 'auto' as const,
  };

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

      {/* ═══════════════════ NAV (People-style) ═══════════════════ */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '48px', zIndex: 75, background: 'transparent', pointerEvents: 'none' }}>
        <div className={shell} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', pointerEvents: 'none' }}>
          <a href="/corporate" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit', pointerEvents: 'auto' }}>
            <img src="/mascote-navbar.png" alt="Sniffer" style={{ height: '44px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 10px 18px rgba(80,242,150,0.22))' }} />
            <img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '28px', width: 'auto', maxWidth: 'min(32vw, 160px)', objectFit: 'contain' }} />
          </a>
          <button onClick={() => navigate('/cadastro?mode=comunidade')} style={btnPrimary}>
            Faça Parte
          </button>
        </div>
      </div>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#00A896' }}>
        <div className="absolute -top-[40%] -right-[20%] w-[900px] h-[900px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-[30%] -left-[10%] w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(61,220,132,0.12) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 relative z-[2]">
          <div className="max-w-[760px] pt-[180px] pb-[160px]">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full animate-[fadeUp_0.8s_0.1s_forwards] opacity-0" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
              <span className="w-[6px] h-[6px] rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[2px] uppercase text-white">Comunidade Sniffer</span>
            </div>
            <h1
              className="font-bold leading-[1.05] text-white mb-8 animate-[fadeUp_0.8s_0.3s_forwards] opacity-0"
              style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(42px, 6vw, 72px)', letterSpacing: '-2px' }}
            >
              O bairro inteiro na<br />
              palma da <em className="not-italic text-white">sua mão.</em>
            </h1>
            <p className="text-lg leading-[1.7] mb-12 font-semibold animate-[fadeUp_0.8s_0.5s_forwards] opacity-0" style={{ color: 'rgba(255,255,255,0.90)', maxWidth: '560px' }}>
              A Sniffer é a plataforma onde pessoas descobrem o melhor do seu bairro através de quem elas mais confiam. Não é algoritmo.<br />É gente real recomendando gente real.
            </p>
            <div className="flex gap-4 items-center flex-wrap animate-[fadeUp_0.8s_0.7s_forwards] opacity-0">
              <a href="/cadastro?mode=comunidade" className="inline-flex items-center gap-2.5 text-[15px] font-medium text-[#2D2F5E] bg-white px-9 py-4 rounded-full no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.30)]">
                Criar minha comunidade <ChevronRight className="size-4" />
              </a>
              <a href="#quem-somos" className="inline-flex items-center gap-2 text-[15px] py-4 no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.80)' }}>
                Conheça a Sniffer <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* ═══════════════════ QUEM SOMOS ═══════════════════ */}
      <section className="py-[140px]" id="quem-somos" style={{ background: '#E6F6F5' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-[#00A896] mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-[#00A896]" />
              Quem somos
            </p>
            <h2 className="font-bold leading-[1.1] text-[#2D2F5E] mb-6" style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-1.5px', maxWidth: '560px' }}>
              A confiança nasce no olho no olho. A{' '}
              <img
                src="/logo-sniffer-wordmark.png"
                alt="Sniffer"
                style={{ height: '0.85em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.12em', filter: 'brightness(0) saturate(100%) invert(15%) sepia(40%) saturate(600%) hue-rotate(215deg) brightness(85%)' }}
              />{' '}
              cria o caminho para ela circular.
            </h2>
            <p className="text-[17px] leading-[1.8] font-light mb-6" style={{ color: 'rgba(45,47,94,0.65)', maxWidth: '540px' }}>
              Somos a plataforma que resolveu algo simples, mas esquecido pela tecnologia: a indicação de quem a gente confia vale mais do que qualquer anúncio. Enquanto redes tradicionais vendem visibilidade para quem paga mais, a{' '}
              <img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '0.85em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.12em', filter: 'brightness(0) saturate(100%) invert(15%) sepia(40%) saturate(600%) hue-rotate(215deg) brightness(85%)' }} />{' '}
              está construindo uma rede baseada em confiança — onde pessoas recomendam de verdade, com nome, com rosto e com responsabilidade.
            </p>
            <p className="text-[17px] leading-[1.8] font-light" style={{ color: 'rgba(45,47,94,0.65)', maxWidth: '540px' }}>
              Na{' '}
              <img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '0.85em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.12em', filter: 'brightness(0) saturate(100%) invert(15%) sepia(40%) saturate(600%) hue-rotate(215deg) brightness(85%)' }} />,{' '}
              cada pessoa tem seus 7 Xodós: espaços no perfil para declarar publicamente sua confiança nos lugares que ama. Aqui, recomendações não se perdem em algoritmos. Elas ganham alcance, conectam vizinhos e levam pessoas reais até negócios que merecem ser descobertos. Não reinventamos o boca a boca. Estamos dando estrutura para ele crescer — e escala para ele voltar a mover o que está ao seu redor.
            </p>
          </Reveal>

          <Reveal>
            <div className="relative rounded-2xl p-10" style={{ background: 'rgba(0,168,150,0.08)', border: '1px solid rgba(0,168,150,0.15)', overflow: 'hidden' }}>
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, #3DDC84, #00A896)' }} />
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-bold text-[#2D2F5E]" style={{ fontFamily: "'Ferom', sans-serif", fontSize: '4rem', lineHeight: 1, letterSpacing: '-3px' }}>7</span>
                <span className="text-base font-medium" style={{ color: 'rgba(45,47,94,0.55)' }}>Xodós por perfil</span>
              </div>
              <p className="text-[15px] leading-[1.7] font-light pt-5" style={{ color: 'rgba(45,47,94,0.70)', borderTop: '1px solid rgba(0,168,150,0.12)' }}>
                Cada pessoa escolhe apenas 7. Não é seguir. Não é curtir. É uma declaração pública de confiança, limitada, deliberada e visível pra toda a rede.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ O CONECTADOR ═══════════════════ */}
      <section className="py-[140px] relative overflow-hidden" id="conectador" style={{ background: '#00A896' }}>
        <div className="absolute right-[-300px] top-[-200px] w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(45,47,94,0.08) 0%, transparent 70%)' }} />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-[2]">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-white mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-white" />
              A comunidade
            </p>
            <h2 className="font-bold leading-[1.1] text-white mb-6" style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-1.5px', maxWidth: '520px' }}>
              Feita pra quem já constrói o bairro e quer ir além.
            </h2>
            <p className="text-[17px] leading-[1.8] font-semibold mb-6" style={{ color: 'rgba(255,255,255,0.90)', maxWidth: '520px' }}>
              Você já organiza o churrasco do prédio, já criou o grupo do condomínio, já indicou o melhor restaurante pra todo mundo. Você é quem conecta as pessoas ao redor. A Sniffer foi construída pra gente como você, e te dá as ferramentas que nenhum grupo de mensagens consegue oferecer.
            </p>
            <p className="text-[17px] leading-[1.8] font-semibold" style={{ color: 'rgba(255,255,255,0.90)', maxWidth: '520px' }}>
              Na Sniffer, você não é só mais um membro. Você é o Conectador: a pessoa que transforma vizinhos em comunidade, que dá voz ao comércio local, que faz o bairro funcionar como rede. E agora, tudo isso tem nome, tem estrutura e tem alcance.
            </p>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl p-10" style={{ background: 'rgba(255,255,255,0.22)', border: '1px solid rgba(255,255,255,0.20)' }}>
              <img src="/matilha-icon.png" alt="Matilha" className="w-32 h-32 object-contain mb-6" />
              <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Ferom', sans-serif" }}>O Conectador</h3>
              <p className="text-[13px] font-semibold tracking-[1px] uppercase text-white mb-6">Fundador de Comunidade</p>
              <blockquote className="text-[16px] leading-[1.7] font-light italic pl-5 mb-6" style={{ color: 'rgba(255,255,255,0.90)', borderLeft: '2px solid rgba(255,255,255,0.35)' }}>
                "Eu conheço todo mundo no bairro. O problema é que cada conversa está num grupo diferente, cada indicação se perde, e ninguém lembra quem recomendou quem. Eu quero um lugar onde tudo isso tenha valor."
              </blockquote>
              <div className="flex flex-wrap gap-2">
                {['Organizador nato', '35–45 anos', 'Urbano', 'Líder de comunidade', 'Usuário avançado', 'Curador local'].map(trait => (
                  <span key={trait} className="text-[12px] font-medium px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', color: '#FFFFFF' }}>
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ FUNCIONALIDADES ═══════════════════ */}
      <section className="py-[140px]" id="funcionalidades" style={{ background: '#E6F6F5' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-[#00A896] mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-[#00A896]" />
              Funcionalidades
            </p>
            <h2 className="font-bold leading-[1.1] text-[#2D2F5E] mb-6" style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-1.5px', maxWidth: '560px' }}>
              Tudo o que você precisa pra fazer seu bairro pulsar.
            </h2>
            <p className="text-[17px] leading-[1.75] font-light mb-16" style={{ color: 'rgba(45,47,94,0.60)', maxWidth: '520px' }}>
              Cada ferramenta da Sniffer foi desenhada pra quem vive a comunidade de verdade, não pra quem assiste de longe.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden" style={{ background: 'rgba(0,168,150,0.15)', border: '1px solid rgba(0,168,150,0.15)' }}>
              {([
                {
                  icon: '🐺',
                  title: 'Matilha',
                  desc: 'Crie comunidades privadas com regras, rituais recorrentes e convite por aprovação. Seu grupo, suas regras. Sem barulho, sem caos.',
                  tag: 'Comunidade privada',
                },
                {
                  icon: '💛',
                  title: 'Xodó',
                  desc: 'Escolha seus 7 Xodós, as pessoas, negócios e comunidades em quem você mais confia. Uma recomendação pública, limitada e com peso real na rede.',
                  tag: 'Confiança',
                },
                {
                  icon: '📅',
                  title: 'Eventos',
                  desc: 'Crie eventos dentro da sua comunidade ou do seu negócio. Com data, local, RSVP e notificação automática. O bairro inteiro sabe o que está acontecendo.',
                  tag: 'Agenda local',
                },
                {
                  icon: '📍',
                  title: 'Descoberta local',
                  desc: 'Busca por nome, categoria e mapa. Encontre negócios, pessoas e comunidades perto de você, rankeados por confiança, não por quem pagou mais.',
                  tag: 'Mapa + Busca',
                },
              ]).map((card, i) => (
                <div key={i} className="bg-white p-12 transition-all duration-300 hover:bg-[#D8F0EE] group cursor-default">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-7 transition-colors duration-300">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-xl text-[#2D2F5E] mb-3" style={{ fontFamily: "'Ferom', sans-serif", letterSpacing: '-0.3px' }}>{card.title}</h3>
                  <p className="text-[15px] leading-[1.7] font-light mb-4" style={{ color: 'rgba(45,47,94,0.60)' }}>{card.desc}</p>
                  <span className="text-[11px] font-semibold tracking-[1px] uppercase" style={{ color: 'rgba(0,168,150,0.70)' }}>{card.tag}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ PLATAFORMA ═══════════════════ */}
      <section className="py-[140px]" id="plataforma" style={{ background: '#D0EFED' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <Reveal className="mb-16">
            <p className="text-[14px] font-semibold tracking-[3px] uppercase text-[#00A896] mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-[#00A896]" />
              A plataforma
            </p>
            <h2 className="font-bold leading-[1.1] text-[#2D2F5E] mb-6" style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(34px, 4vw, 52px)', letterSpacing: '-1.5px', maxWidth: '560px' }}>
              Cada camada resolve um problema real.
            </h2>
            <p className="text-[20px] leading-[1.75] font-light" style={{ color: 'rgba(45,47,94,0.60)', maxWidth: '540px' }}>
              A Sniffer é construída em camadas que trabalham juntas. Cada uma entrega valor sozinha, e todas se alimentam entre si.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-col">
              {([
                { num: '01', name: 'Core', desc: 'Perfis de pessoas, negócios e comunidades. Feed cronológico, posts com foto, comentários e curtidas. A base de tudo.' },
                { num: '02', name: 'Matilha', desc: 'Comunidades privadas com rituais recorrentes, convite por aprovação, regras visíveis e data de validade. Pertencimento com estrutura.' },
                { num: '03', name: 'Xodó', desc: '7 espaços de confiança no perfil de cada pessoa e negócio. Recomendação pública, limitada e com impacto real na descoberta.' },
                { num: '04', name: 'Eventos', desc: 'Eventos dentro de comunidades e negócios com data, local, RSVP e notificação automática. O bairro inteiro sabe o que está acontecendo.' },
                { num: '05', name: 'Marketplace', desc: 'Ofertas, reservas e transações dentro da rede de confiança. Monetização por assinatura, sem comissão sobre vendas.' },
              ]).map((layer, i, arr) => (
                <div key={i} className="grid gap-12 py-8 group transition-colors duration-200 cursor-default" style={{ gridTemplateColumns: '160px 1fr', borderBottom: i < arr.length - 1 ? '1px solid rgba(0,168,150,0.15)' : 'none' }}>
                  <div className="font-bold text-[19px] tracking-[1px] pt-0.5 transition-colors duration-200 group-hover:text-[#00A896]" style={{ fontFamily: "'Ferom', sans-serif", color: '#2D2F5E' }}>
                    {layer.num} {layer.name}
                  </div>
                  <div className="text-[19px] leading-[1.8] font-light" style={{ color: 'rgba(45,47,94,0.65)' }}>{layer.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-[140px]" style={{ background: '#E6F6F5' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <Reveal>
            <div className="relative rounded-3xl px-8 sm:px-16 py-20 text-center overflow-hidden" style={{ background: '#00A896' }}>
              <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(61,220,132,0.12) 0%, transparent 70%)' }} />
              <p className="text-[11px] font-semibold tracking-[3px] uppercase text-white mb-7 relative z-[2]">Faça parte</p>
              <h2 className="font-bold leading-[1.15] text-white mb-5 mx-auto relative z-[2]" style={{ fontFamily: "'Ferom', sans-serif", fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-1.5px', maxWidth: '540px' }}>
                Seu bairro merece uma <span style={{ color: '#50F296' }}>comunidade real.</span>
              </h2>
              <p className="text-base leading-[1.7] font-light mx-auto mb-10 relative z-[2]" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '440px' }}>
                A Sniffer está chegando. Assuma a liderança e crie a rede da sua vizinhança.
              </p>
              <div className="flex gap-4 justify-center items-center flex-wrap relative z-[2]">
                <a href="/cadastro?mode=comunidade" className="inline-flex items-center gap-2.5 text-[15px] font-medium text-white bg-[#2D2F5E] px-9 py-4 rounded-full no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(45,47,94,0.25)]">
                  Fundar minha comunidade <ChevronRight className="size-4" />
                </a>
                <a href="#quem-somos" className="inline-flex items-center gap-2 text-[15px] py-4 no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Conhecer mais <ChevronRight className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="py-12" style={{ background: '#00A896', borderTop: '1px solid rgba(45,47,94,0.12)' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <a href="/corporate" className="no-underline">
            <img src="/logo-sniffer-white.png" alt="Sniffer" className="h-6 w-auto" />
          </a>
          <div className="flex items-center gap-6 text-[13px]" style={{ color: 'rgba(255,255,255,0.70)' }}>
            <span>© 2026 Sniffer</span>

            <a href="#" className="no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.70)' }}>Contato</a>
          </div>
        </div>
      </footer>

    </motion.div>
  );
}
