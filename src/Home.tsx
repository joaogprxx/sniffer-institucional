import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { pageVariants, pageTransition } from './pageTransition';

const shell = 'w-[min(calc(100%-32px),1180px)] mx-auto';

const green = '#50f296';
const teal = '#0aa689';
const navy = '#332d59';
const muted = 'rgba(17,16,38,0.55)';
const surface = 'rgba(255,255,255,0.82)';
const line = 'rgba(17,16,38,0.08)';
const shadowSoft = '0 12px 36px rgba(17,16,38,0.05)';

function ProductItem({ emoji, tag, title, desc, defaultOpen = false }: { emoji: string; tag: string; title: string; desc: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: `1px solid ${line}` }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '22px 0', display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left' }}
      >
        <span style={{ fontSize: '24px', flexShrink: 0 }}>{emoji}</span>
        <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: teal, background: 'rgba(80,242,150,0.12)', padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(80,242,150,0.24)', flexShrink: 0 }}>{tag}</span>
        <span style={{ fontSize: '18px', fontWeight: 700, color: '#111026', flex: 1, fontFamily: "'Ferom', Inter, sans-serif" }}>{title}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ fontSize: '24px', color: muted, fontWeight: 300, flexShrink: 0, lineHeight: 1 }}
        >+</motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <p style={{ margin: '0 0 22px', color: muted, fontSize: '16px', lineHeight: 1.7, maxWidth: '72ch', paddingLeft: '38px' }}>{desc}</p>
      </motion.div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: `1px solid ${line}`, borderRadius: '22px', background: 'rgba(255,255,255,0.8)', padding: '0 22px', boxShadow: shadowSoft }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 700, padding: '22px 34px 22px 0', position: 'relative', fontSize: '16px', color: '#111026', fontFamily: "'Ferom', Inter, sans-serif" }}
      >
        {question}
        <span style={{ position: 'absolute', right: 0, top: '16px', fontSize: '26px', fontWeight: 400, color: muted, lineHeight: 1 }}>
          {open ? '–' : '+'}
        </span>
      </button>
      {open && (
        <p style={{ margin: '0 0 20px', color: muted, maxWidth: '70ch', fontSize: '15px', fontFamily: "'Ferom', Inter, sans-serif" }}>
          {answer}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const btnPrimary: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    padding: '14px 24px', borderRadius: '999px', fontWeight: 700,
    background: 'linear-gradient(180deg, #68f6a5 0%, #50f296 100%)',
    color: '#111026', border: '1px solid transparent', cursor: 'pointer',
    boxShadow: '0 16px 36px rgba(80,242,150,0.28)', fontSize: '15px',
    fontFamily: "'Ferom', Inter, sans-serif",
  };

  const card: React.CSSProperties = {
    padding: '28px', borderRadius: '28px', background: surface,
    border: `1px solid ${line}`, boxShadow: shadowSoft,
  };

  const sectionHead = { maxWidth: '760px', marginBottom: '24px' };

  const h2Style: React.CSSProperties = {
    margin: 0, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.02,
    letterSpacing: '-0.045em', fontWeight: 800, fontFamily: "'Ferom', Inter, sans-serif",
  };

  const subStyle: React.CSSProperties = {
    margin: '14px 0 0', color: muted, fontSize: '18px', maxWidth: '42ch',
    fontFamily: "'Ferom', Inter, sans-serif",
  };

  const faqs = [
    { q: 'O que é a Sniffer?', a: 'A Sniffer é uma plataforma de descoberta social focada em lugares, pessoas, comunidades e eventos, com uma arquitetura pensada para confiança e contexto real.' },
    { q: 'O que já existe na experiência?', a: 'A base já considera descoberta de lugares, comunidades, eventos e interação entre usuários e negócios, além de camadas estruturadas de moderação e verificação para sustentar o ecossistema.' },
    { q: 'O que torna a Sniffer diferente?', a: 'Ela não tenta ser só mapa, só rede social ou só agenda. A proposta é conectar descoberta local e participação real em um mesmo ambiente, com foco maior em autenticidade.' },
    { q: 'Preciso verificar minha conta?', a: 'Nem sempre. Em alguns casos, a Sniffer pode solicitar validações para ajudar a manter interações mais seguras e confiáveis na plataforma.' },
    { q: 'Quando a Sniffer chega?', a: 'A Sniffer está sendo construída em etapas, com abertura gradual. "Quero ser convidado" é a melhor forma de acompanhar as primeiras liberações e novidades.' },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      style={{
        background: `
          radial-gradient(circle at top left, rgba(80,242,150,0.14), transparent 28%),
          radial-gradient(circle at top right, rgba(51,45,89,0.08), transparent 24%),
          linear-gradient(180deg, #F2F2F2 0%, #ebebeb 100%)
        `,
        minHeight: '100vh',
        fontFamily: "'Ferom', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: '#111026',
        lineHeight: '1.5',
      }}
    >
      {/* ── Navbar ── */}
      <div style={{ position: 'sticky', top: '52px', zIndex: 40, backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', background: 'rgba(242,242,242,0.82)', borderBottom: '1px solid rgba(19,21,26,0.05)' }}>
        <div className={shell} style={{ minHeight: '74px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
            <img
              src="/logo-sniffer.png"
              alt="Sniffer"
              style={{ width: '40px', height: '40px', objectFit: 'contain', filter: 'drop-shadow(0 10px 18px rgba(80,242,150,0.22))' }}
            />
            <img
              src="/logo-sniffer-wordmark.png"
              alt="Sniffer"
              style={{ height: '28px', width: 'auto', maxWidth: 'min(32vw, 180px)', objectFit: 'contain' }}
            />
          </a>

          <div>
            <button onClick={() => navigate('/cadastro')} style={btnPrimary}>
              Junte-se à revolução
            </button>
          </div>
        </div>
      </div>

      <main id="top">
        {/* ── Hero ── */}
        <section style={{ padding: '54px 0 34px' }}>
          <div className={`${shell} grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
            {/* Copy */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.72)', border: `1px solid ${line}`, color: navy, fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '999px', background: green, boxShadow: '0 0 0 8px rgba(80,242,150,0.16)', flexShrink: 0 }} />
                Chegando primeiro ao Brasil
              </div>

              <h1 style={{ margin: 0, fontSize: 'clamp(40px, 5.5vw, 72px)', lineHeight: 0.95, letterSpacing: '-0.055em', maxWidth: '11ch', fontWeight: 800 }}>
                Descubra o que realmente vale a pena na sua cidade.
              </h1>

              <p style={{ margin: '22px 0 0', fontSize: 'clamp(17px, 1.8vw, 20px)', color: muted, maxWidth: '33ch' }}>
                Lugares, pessoas, comunidades e eventos conectados por contexto real — com uma experiência pensada para ser bonita, útil e muito mais confiável.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <button onClick={() => navigate('/cadastro')} style={{ ...btnPrimary, fontSize: '16px' }}>
                  Quero ser convidado
                </button>
                <a
                  href="#ao-vivo"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '14px 24px', borderRadius: '999px', fontWeight: 700, background: 'rgba(255,255,255,0.72)', border: `1px solid ${line}`, color: '#111026', textDecoration: 'none', fontSize: '16px', fontFamily: "'Ferom', Inter, sans-serif" }}
                >
                  Ver o que já está no ar
                </a>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6" style={{ color: muted, fontSize: '14px' }}>
                {['Comunidades locais', 'Eventos e interações reais', 'Baseado em confiança, não em poluição digital'].map(item => (
                  <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: navy, opacity: 0.5, flexShrink: 0 }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual — hidden on mobile */}
            <div className="hidden md:block" style={{ position: 'relative', minHeight: '560px' }}>
              {/* Glow */}
              <div style={{ position: 'absolute', inset: '4% 10% 10% 8%', borderRadius: '40px', background: 'radial-gradient(circle, rgba(80,242,150,0.24) 0%, rgba(80,242,150,0.07) 36%, transparent 68%)', filter: 'blur(18px)', zIndex: 0 }} />

              {/* Badge */}
              <div style={{ position: 'absolute', left: '20px', top: '24px', padding: '12px 14px', borderRadius: '18px', zIndex: 3, fontSize: '13px', color: navy, fontWeight: 700, background: 'rgba(255,255,255,0.9)', border: `1px solid rgba(19,21,26,0.06)`, boxShadow: shadowSoft, backdropFilter: 'blur(14px)' }}>
                Primeiras comunidades já estão surgindo
              </div>

              {/* Phone */}
              <div style={{ position: 'absolute', right: '10px', top: '12px', width: 'min(300px, 100%)', background: 'rgba(17,16,38,0.96)', borderRadius: '40px', padding: '14px', boxShadow: '0 30px 80px rgba(17,16,38,0.2)', zIndex: 2 }}>
                <div style={{ width: '34%', height: '28px', background: '#111026', borderRadius: '0 0 18px 18px', margin: '-2px auto 10px' }} />
                <div style={{ background: 'linear-gradient(180deg, rgba(80,242,150,0.12) 0%, rgba(61,220,132,0.06) 100%)', borderRadius: '28px', minHeight: '440px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src="/AppScreenshot.png"
                    alt="Screenshot do app Sniffer"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                  />
                </div>
              </div>

              {/* Event card */}
              <div style={{ position: 'absolute', left: 0, bottom: '100px', width: '220px', padding: '18px', borderRadius: '24px', zIndex: 3, background: 'rgba(255,255,255,0.9)', border: `1px solid rgba(19,21,26,0.06)`, boxShadow: shadowSoft, backdropFilter: 'blur(14px)' }}>
                <strong style={{ display: 'block', fontSize: '15px', marginBottom: '6px' }}>Hoje à noite</strong>
                <p style={{ color: muted, margin: 0, fontSize: '13px' }}>Encontro aberto com pessoas e negócios locais</p>
                <span style={{ display: 'inline-flex', marginTop: '10px', padding: '8px 12px', borderRadius: '999px', background: 'rgba(80,242,150,0.14)', color: teal, fontSize: '12px', fontWeight: 700 }}>
                  Evento em destaque
                </span>
              </div>

              {/* Floating card */}
              <div style={{ position: 'absolute', right: '-8px', bottom: '20px', width: '200px', padding: '16px', borderRadius: '20px', zIndex: 3, background: 'rgba(255,255,255,0.9)', border: `1px solid rgba(19,21,26,0.06)`, boxShadow: shadowSoft, backdropFilter: 'blur(14px)' }}>
                <strong style={{ display: 'block', fontSize: '14px', marginBottom: '6px' }}>Confiança em foco</strong>
                <p style={{ color: muted, margin: 0, fontSize: '13px' }}>Perfis, negócios e interações com camadas reais de validação e moderação.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quem Somos ── */}
        <section id="ao-vivo" style={{ padding: '42px 0' }}>
          <div className={shell}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '48px', borderRadius: '32px', background: surface, border: `1px solid ${line}`, boxShadow: shadowSoft, position: 'relative', overflow: 'hidden' }}
            >
              {/* Glow decorativo */}
              <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '999px', background: 'radial-gradient(circle, rgba(80,242,150,0.14), transparent 70%)', right: '-60px', bottom: '-60px', pointerEvents: 'none' }} />

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 14px', borderRadius: '999px', background: 'rgba(80,242,150,0.12)', border: `1px solid rgba(80,242,150,0.28)`, color: teal, fontSize: '13px', fontWeight: 700, marginBottom: '20px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: green, flexShrink: 0 }} />
                Nossa história
              </div>

              <h2 style={{ ...h2Style, marginBottom: '32px' }}>Quem Somos</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '72ch' }}>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ margin: 0, fontSize: '18px', color: muted, lineHeight: 1.7 }}
                >
                  Você já passou por uma rua mil vezes e nunca reparou naquele lugar incrível escondido ali? A Sniffer nasceu dessa mesma curiosidade. Mais que uma rede social, somos o faro que faltava no seu bairro: o elo de confiança que ajuda as pessoas a descobrirem o que realmente está vivo e pulsante ao redor delas.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{ margin: 0, fontSize: '18px', color: muted, lineHeight: 1.7 }}
                >
                  Nossa missão é simples: transformar a curiosidade em um motivo novo para sair de casa. Queremos que a vizinhança sinta o cheiro do que é autêntico e descubra lugares, sabores e experiências que estão logo ali, esperando para serem encontrados. Na Sniffer, a tecnologia não serve para te prender online, mas para te levar de volta para a calçada.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginTop: '36px' }}
              >
                <button
                  onClick={() => navigate('/cadastro')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', borderRadius: '999px', fontWeight: 700, background: 'linear-gradient(180deg, #68f6a5 0%, #50f296 100%)', color: '#111026', border: 'none', cursor: 'pointer', boxShadow: '0 16px 36px rgba(80,242,150,0.28)', fontSize: '16px', fontFamily: "'Ferom', Inter, sans-serif" }}
                >
                  Junte-se a essa revolução! →
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── No que a gente acredita ── */}
        <section id="como-funciona" style={{ padding: '42px 0' }}>
          <div className={shell}>
            <div style={sectionHead}>
              <h2 style={h2Style}>No que a gente acredita</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: '🤝',
                  title: 'Indicações reais',
                  desc: 'Quem indica seu negócio são seus vizinhos e clientes reais. Sem truques digitais — só a confiança de quem vive o bairro.',
                },
                {
                  icon: '📍',
                  title: 'Perto primeiro',
                  desc: 'Você aparece primeiro para quem já está na sua rua ou a poucos minutos, antes mesmo de pensarem em atravessar a cidade.',
                },
                {
                  icon: '✨',
                  title: 'O pequeno brilha aqui',
                  desc: 'A pizzaria do bairro, o ateliê da esquina e o novo café da rua têm a mesma prioridade que as gigantes. Seu talento local dita sua visibilidade.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ ...card, position: 'relative', overflow: 'hidden' }}
                >
                  <div style={{ fontSize: '28px', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '20px', letterSpacing: '-0.02em', fontWeight: 700 }}>{item.title}</h3>
                  <p style={{ color: muted, fontSize: '15px', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quem faz a Sniffer ── */}
        <section style={{ padding: '0 0 42px' }}>
          <div id="confianca" className={shell} style={{ padding: '48px', borderRadius: '32px', background: 'linear-gradient(135deg, #111026 0%, #332d59 100%)', color: '#F2F2F2', boxShadow: '0 30px 80px rgba(17,16,38,0.18)', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '999px', background: 'radial-gradient(circle, rgba(80,242,150,0.22), transparent 70%)', right: '-80px', top: '-80px', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '999px', background: 'radial-gradient(circle, rgba(80,242,150,0.10), transparent 70%)', left: '-40px', bottom: '-40px', pointerEvents: 'none' }} />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', maxWidth: '64ch' }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: 'rgba(80,242,150,0.12)', border: '1px solid rgba(80,242,150,0.22)', color: green, fontSize: '13px', fontWeight: 700, marginBottom: '20px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: green, flexShrink: 0 }} />
                A matilha
              </div>

              <h2 style={{ ...h2Style, color: '#F2F2F2', marginBottom: '24px' }}>Quem faz a Sniffer</h2>

              <p style={{ margin: 0, fontSize: '18px', color: 'rgba(242,242,242,0.80)', lineHeight: 1.75 }}>
                Somos uma matilha de exploradores e especialistas em tecnologia apaixonados pela vida urbana. A Sniffer nasceu de quem valoriza o que acontece na calçada: cada vitrine, cada aroma e cada porta aberta. Unimos essa sensibilidade humana a uma inteligência consciente para criar um ecossistema que protege a essência do bairro e prioriza as relações reais. Construímos a solução que faltava para transformar a curiosidade da vizinhança em movimento e presença para o seu negócio.
              </p>
            </motion.div>
          </div>
        </section>


        {/* ── Produtos — bento mural ── */}
        <section style={{ padding: '42px 0 56px', position: 'relative', overflow: 'hidden' }}>
          <style>{`
            @keyframes sonar {
              0%   { transform: translate(-50%,-50%) scale(0.2); opacity: 0.55; }
              100% { transform: translate(-50%,-50%) scale(4);   opacity: 0; }
            }
            @keyframes emoji-drift {
              0%,100% { transform: translateY(0px) rotate(0deg); }
              50%      { transform: translateY(-7px) rotate(4deg); }
            }
          `}</style>
          {/* Sonar ping — 3 ondas defasadas */}
          {[0, 1.3, 2.6].map((delay, i) => (
            <div key={i} style={{ position: 'absolute', left: '50%', top: '45%', width: '180px', height: '180px', borderRadius: '50%', border: '1.5px solid rgba(80,242,150,0.28)', pointerEvents: 'none', animation: `sonar 4s ease-out infinite ${delay}s` }} />
          ))}
          <div className={shell}>
            <div style={sectionHead}>
              <h2 style={h2Style}>O que estamos preparando para você</h2>
            </div>

            {/* Bento grid — 12 cols */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: 'auto', gap: '14px' }}>

              {/* UIVO — largo, leve tilt negativo */}
              <motion.div initial={{ opacity: 0, x: -80, y: -100, rotate: -14, filter: 'blur(10px)' }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: -0.8, filter: 'blur(0px)' }} whileHover={{ rotate: 0, scale: 1.01 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 90, damping: 14, mass: 1.1, delay: 0 }}
                style={{ gridColumn: 'span 7', padding: '28px 30px', borderRadius: '24px', background: '#ffffff', border: `1px solid ${line}`, boxShadow: '0 8px 28px rgba(17,16,38,0.07)', position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', right: '20px', top: '16px', fontSize: '52px', opacity: 0.18, lineHeight: 1, animation: 'emoji-drift 5s ease-in-out infinite' }}>💬</span>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: teal, background: 'rgba(80,242,150,0.14)', padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(80,242,150,0.26)' }}>UIVO</span>
                <h3 style={{ margin: '12px 0 8px', fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', color: '#111026' }}>Canal direto com o cliente</h3>
                <p style={{ margin: 0, fontSize: '15px', color: muted, lineHeight: 1.65, maxWidth: '46ch' }}>É o canal de comunicação direto e humano que traz o cliente para dentro da sua loja. Esqueça o caos dos grupos genéricos; o Uivo oferece um chat profissional onde o contexto do negócio e o perfil do cliente caminham juntos, acelerando reservas e vendas.</p>
              </motion.div>

              {/* XODÓ — menor, tilt positivo */}
              <motion.div initial={{ opacity: 0, x: 90, y: -80, rotate: 16, filter: 'blur(10px)' }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: 1.2, filter: 'blur(0px)' }} whileHover={{ rotate: 0, scale: 1.01 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 85, damping: 13, mass: 1.2, delay: 0.1 }}
                style={{ gridColumn: 'span 5', padding: '28px 30px', borderRadius: '24px', background: 'rgba(80,242,150,0.08)', border: '1px solid rgba(80,242,150,0.22)', boxShadow: '0 8px 28px rgba(80,242,150,0.08)', position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', right: '20px', top: '16px', fontSize: '52px', opacity: 0.22, lineHeight: 1, animation: 'emoji-drift 6s ease-in-out infinite 1s' }}>⭐</span>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: teal, background: 'rgba(80,242,150,0.18)', padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(80,242,150,0.3)' }}>XODÓ</span>
                <h3 style={{ margin: '12px 0 8px', fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', color: '#111026' }}>Selo de alta confiança</h3>
                <p style={{ margin: 0, fontSize: '15px', color: muted, lineHeight: 1.65 }}>Em um mundo de "seguidores" vazios, o Xodó é uma recomendação especial e limitada: cada usuário tem apenas <strong style={{ color: teal }}>7 slots</strong> para indicar quem realmente ama. Estar na galeria de Xodós é o maior prestígio que sua marca pode alcançar.</p>
              </motion.div>

              {/* MATILHA — médio, tilt negativo */}
              <motion.div initial={{ opacity: 0, x: -100, y: -60, rotate: -18, filter: 'blur(10px)' }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: -1.3, filter: 'blur(0px)' }} whileHover={{ rotate: 0, scale: 1.01 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 13, mass: 1.3, delay: 0.18 }}
                style={{ gridColumn: 'span 5', padding: '28px 30px', borderRadius: '24px', background: '#ffffff', border: `1px solid ${line}`, boxShadow: '0 8px 28px rgba(17,16,38,0.07)', position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', right: '20px', top: '16px', fontSize: '52px', opacity: 0.18, lineHeight: 1 }}>🐾</span>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: teal, background: 'rgba(80,242,150,0.14)', padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(80,242,150,0.26)' }}>MATILHA</span>
                <h3 style={{ margin: '12px 0 8px', fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', color: '#111026' }}>Comunidade ao redor do negócio</h3>
                <p style={{ margin: 0, fontSize: '15px', color: muted, lineHeight: 1.65 }}>Transforme vizinhos em comunidades fiéis. Crie grupos exclusivos para gerar conversas reais e encontros presenciais. Para quem quer ser mais que uma loja — quer ser o ponto de encontro oficial do bairro.</p>
              </motion.div>

              {/* FARO — largo, tilt leve */}
              <motion.div initial={{ opacity: 0, x: 60, y: -120, rotate: 12, filter: 'blur(10px)' }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0.7, filter: 'blur(0px)' }} whileHover={{ rotate: 0, scale: 1.01 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 75, damping: 12, mass: 1.4, delay: 0.08 }}
                style={{ gridColumn: 'span 7', padding: '28px 30px', borderRadius: '24px', background: 'rgba(51,45,89,0.04)', border: '1px solid rgba(51,45,89,0.10)', boxShadow: '0 8px 28px rgba(51,45,89,0.06)', position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', right: '20px', top: '16px', fontSize: '52px', opacity: 0.18, lineHeight: 1 }}>🔍</span>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: navy, background: 'rgba(51,45,89,0.08)', padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(51,45,89,0.15)' }}>FARO</span>
                <h3 style={{ margin: '12px 0 8px', fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', color: '#111026' }}>Inteligência da rua em tempo real</h3>
                <p style={{ margin: 0, fontSize: '15px', color: muted, lineHeight: 1.65, maxWidth: '50ch' }}>O Faro detecta o que as pessoas estão buscando na sua rua agora, permitindo que você adapte estoque ou promoções ao desejo da comunidade. Pare de adivinhar. É como ter um consultor que conhece o bairro todo — entregando as respostas que você precisa num painel inteligente.</p>
              </motion.div>

              {/* MEU TERRITÓRIO — full width mobile, 1/3 desktop */}
              <motion.div initial={{ opacity: 0, x: -70, y: -90, rotate: -20, filter: 'blur(10px)' }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: 1.4, filter: 'blur(0px)' }} whileHover={{ rotate: 0, scale: 1.01 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 95, damping: 14, mass: 1.0, delay: 0.22 }}
                style={{ gridColumn: 'span 4', padding: '28px 30px', borderRadius: '24px', background: '#ffffff', border: `1px solid ${line}`, boxShadow: '0 8px 28px rgba(17,16,38,0.07)', position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', right: '16px', top: '14px', fontSize: '44px', opacity: 0.18, lineHeight: 1 }}>📍</span>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: teal, background: 'rgba(80,242,150,0.14)', padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(80,242,150,0.26)' }}>MEU TERRITÓRIO</span>
                <h3 style={{ margin: '12px 0 8px', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.03em', color: '#111026' }}>Sua placa digital na esquina</h3>
                <p style={{ margin: 0, fontSize: '14px', color: muted, lineHeight: 1.65 }}>Perfil profissional completo onde a visibilidade é ligada à proximidade. Quem está a apenas 200 metros finalmente te acha.</p>
              </motion.div>

              {/* SPOTLIGHT — médio */}
              <motion.div initial={{ opacity: 0, x: 50, y: -70, rotate: 15, filter: 'blur(10px)' }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: -0.9, filter: 'blur(0px)' }} whileHover={{ rotate: 0, scale: 1.01 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 88, damping: 13, mass: 1.1, delay: 0.28 }}
                style={{ gridColumn: 'span 4', padding: '28px 30px', borderRadius: '24px', background: 'rgba(80,242,150,0.06)', border: '1px solid rgba(80,242,150,0.18)', boxShadow: '0 8px 28px rgba(80,242,150,0.06)', position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', right: '16px', top: '14px', fontSize: '44px', opacity: 0.22, lineHeight: 1 }}>🔦</span>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: teal, background: 'rgba(80,242,150,0.18)', padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(80,242,150,0.3)' }}>SPOTLIGHT</span>
                <h3 style={{ margin: '12px 0 8px', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.03em', color: '#111026' }}>Visibilidade no momento certo</h3>
                <p style={{ margin: 0, fontSize: '14px', color: muted, lineHeight: 1.65 }}>Impulsione eventos ou promoções relâmpago no exato momento em que a vizinhança está decidindo para onde ir.</p>
              </motion.div>

              {/* RASTRO — dark, destaque */}
              <motion.div initial={{ opacity: 0, x: 80, y: -60, rotate: 18, filter: 'blur(10px)' }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0.6, filter: 'blur(0px)' }} whileHover={{ rotate: 0, scale: 1.01 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 82, damping: 12, mass: 1.3, delay: 0.32 }}
                style={{ gridColumn: 'span 4', padding: '28px 30px', borderRadius: '24px', background: 'linear-gradient(135deg, #111026 0%, #332d59 100%)', border: '1px solid rgba(80,242,150,0.2)', boxShadow: '0 12px 36px rgba(17,16,38,0.2)', position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', right: '16px', top: '14px', fontSize: '44px', opacity: 0.25, lineHeight: 1, animation: 'emoji-drift 7s ease-in-out infinite 0.5s' }}>🏅</span>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: green, background: 'rgba(80,242,150,0.15)', padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(80,242,150,0.28)' }}>RASTRO</span>
                <h3 style={{ margin: '12px 0 8px', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.03em', color: '#F2F2F2' }}>Onde o legado começa</h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'rgba(242,242,242,0.72)', lineHeight: 1.65 }}>Benefícios vitalícios para os primeiros 10.000 negócios. Um distintivo de honra que ninguém mais poderá comprar — para quem acreditou desde sempre.</p>
              </motion.div>

            </div>

            <div style={{ marginTop: '28px', textAlign: 'center' }}>
              <button onClick={() => navigate('/cadastro')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', borderRadius: '999px', fontWeight: 700, background: 'linear-gradient(180deg, #68f6a5 0%, #50f296 100%)', color: '#111026', border: 'none', cursor: 'pointer', boxShadow: '0 16px 36px rgba(80,242,150,0.28)', fontSize: '16px', fontFamily: "'Ferom', Inter, sans-serif" }}>
                Junte-se a essa revolução! →
              </button>
            </div>
          </div>
        </section>

        {/* ── RASTRO Early Adopter ── */}
        <section id="rastro" style={{ padding: '42px 0' }}>
          <div className={shell}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ borderRadius: '36px', overflow: 'hidden', position: 'relative', background: '#332d59', boxShadow: '0 32px 80px rgba(17,16,38,0.35)' }}
            >
              {/* Elemento visual — coleira Sniffer (BrandBook) */}
              <img
                src="/sniffer_brandbook_bg.svg"
                alt=""
                aria-hidden="true"
                style={{ position: 'absolute', right: '-60px', top: '-30px', width: '68%', height: '130%', objectFit: 'cover', objectPosition: 'left center', opacity: 0.28, mixBlendMode: 'screen', pointerEvents: 'none', userSelect: 'none' }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0">
                {/* Conteúdo principal */}
                <div style={{ padding: '52px 48px' }}>
                  {/* Badge */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: 'rgba(80,242,150,0.12)', border: '1px solid rgba(80,242,150,0.28)', marginBottom: '24px' }}>
                    <span style={{ fontSize: '16px' }}>🏅</span>
                    <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', color: green }}>RASTRO — SELO EARLY ADOPTER</span>
                  </div>

                  <h2 style={{ margin: '0 0 8px', fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1, letterSpacing: '-0.05em', fontWeight: 800, color: '#F2F2F2' }}>
                    Você marca presença.<br />
                    <span style={{ color: green }}>A gente garante o seu lugar.</span>
                  </h2>

                  <p style={{ margin: '18px 0 32px', fontSize: '17px', color: 'rgba(242,242,242,0.7)', lineHeight: 1.7, maxWidth: '52ch' }}>
                    O rastro começa com você. Estamos reservando apenas <strong style={{ color: '#F2F2F2' }}>10.000 vagas</strong> para os negócios fundadores que vão deixar sua marca no mapa.
                  </p>

                  {/* Benefícios */}
                  <div style={{ display: 'grid', gap: '14px', marginBottom: '36px' }}>
                    {[
                      { icon: '🎁', text: '3 anos de acesso gratuito a todas as ferramentas e novos produtos da plataforma.' },
                      { icon: '🔖', text: 'Selo permanente de Fundador no seu perfil, visível para toda a rede.' },
                      { icon: '💰', text: 'Taxas reduzidas vitalícias após o período inicial de 3 anos.' },
                      { icon: '🧪', text: 'Acesso garantido ao ambiente de testes — experimente e influencie nossas inovações antes de todo o ecossistema.' },
                    ].map((b, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}
                      >
                        <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '2px' }}>{b.icon}</span>
                        <span style={{ fontSize: '15px', color: 'rgba(242,242,242,0.75)', lineHeight: 1.6 }}>{b.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <p style={{ margin: '0 0 28px', fontSize: '14px', color: 'rgba(242,242,242,0.45)', lineHeight: 1.6, maxWidth: '52ch', fontStyle: 'italic' }}>
                    Uma vez preenchidas as 10.000 vagas, o programa será selado. O status de fundador se tornará um ativo exclusivo de quem marcou a primeira trilha.
                  </p>

                  <button
                    onClick={() => navigate('/cadastro')}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 32px', borderRadius: '999px', fontWeight: 800, background: 'linear-gradient(180deg, #68f6a5 0%, #50f296 100%)', color: '#111026', border: 'none', cursor: 'pointer', boxShadow: '0 16px 48px rgba(80,242,150,0.35)', fontSize: '16px', fontFamily: "'Ferom', Inter, sans-serif", letterSpacing: '-0.01em' }}
                  >
                    Garantir minha vaga Rastro →
                  </button>
                </div>

                {/* Counter lateral */}
                <div className="hidden lg:flex" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 40px', borderLeft: '1px solid rgba(255,255,255,0.12)', minWidth: '200px', gap: '8px' }}>
                  <span style={{ fontSize: '64px', fontWeight: 900, letterSpacing: '-0.06em', color: green, lineHeight: 1, fontFamily: "'Ferom', Inter, sans-serif" }}>10k</span>
                  <span style={{ fontSize: '13px', color: 'rgba(242,242,242,0.45)', textAlign: 'center', lineHeight: 1.5 }}>vagas<br />disponíveis</span>
                  <div style={{ width: '48px', height: '2px', background: 'rgba(80,242,150,0.3)', borderRadius: '999px', margin: '8px 0' }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(80,242,150,0.6)', textAlign: 'center' }}>ACESSO<br />VITALÍCIO</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Mensageria de Confiança ── */}
        <section style={{ padding: '42px 0' }}>
          <div className={shell}>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0"
              style={{ borderRadius: '32px', overflow: 'hidden', background: surface, border: `1px solid ${line}`, boxShadow: shadowSoft }}
            >
              {/* Texto */}
              <div style={{ padding: '44px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(80,242,150,0.10)', border: '1px solid rgba(80,242,150,0.24)', marginBottom: '20px' }}>
                  <span style={{ fontSize: '14px' }}>💬</span>
                  <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.09em', color: teal }}>UIVO</span>
                </div>
                <h2 style={{ ...h2Style, marginBottom: '16px' }}>Mensageria de Confiança</h2>
                <p style={{ margin: 0, fontSize: '18px', color: muted, lineHeight: 1.75, maxWidth: '54ch' }}>
                  Conversas que geram movimento. Na Sniffer, a mensageria entende o seu território. Quando alguém te chama, você sabe exatamente como essa pessoa se conecta ao seu negócio, garantindo um atendimento personalizado e seguro. É a tecnologia servindo para fortalecer o aperto de mão digital entre você e quem realmente vive o bairro.
                </p>
              </div>

              {/* Visual lateral */}
              <div className="hidden md:flex" style={{ flexDirection: 'column', gap: '10px', padding: '44px 40px', borderLeft: `1px solid ${line}`, minWidth: '220px', justifyContent: 'center', background: 'rgba(80,242,150,0.04)' }}>
                {[
                  { label: 'Contexto do cliente', icon: '👤' },
                  { label: 'Histórico do negócio', icon: '🏪' },
                  { label: 'Atendimento seguro', icon: '🔒' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '14px', background: '#fff', border: `1px solid ${line}`, boxShadow: '0 2px 8px rgba(17,16,38,0.04)' }}
                  >
                    <span style={{ fontSize: '18px' }}>{item.icon}</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#111026' }}>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── De Vizinho para Vizinho ── */}
        <section id="vizinho" style={{ padding: '100px 0', background: 'linear-gradient(155deg, #111026 0%, #332d59 60%, #111026 100%)', position: 'relative', overflow: 'hidden' }}>
          {/* Orbs decorativos */}
          <div style={{ position: 'absolute', top: '-120px', right: '-100px', width: '480px', height: '480px', borderRadius: '50%', background: `radial-gradient(circle, ${green}0d 0%, transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(51,45,89,0.5) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div className={shell} style={{ position: 'relative', zIndex: 1 }}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-16 items-start">

              {/* Coluna principal */}
              <motion.div
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '999px', background: 'rgba(80,242,150,0.1)', border: '1px solid rgba(80,242,150,0.2)', marginBottom: '36px' }}>
                  <span>🏘️</span>
                  <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', color: green, fontFamily: "'Ferom', Inter, sans-serif" }}>DE VIZINHO PARA VIZINHO</span>
                </div>

                {/* Pull quote */}
                <blockquote style={{ margin: '0 0 44px', padding: '0 0 0 24px', borderLeft: `3px solid ${green}`, fontSize: 'clamp(28px, 3.8vw, 52px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.01em', color: '#ffffff', maxWidth: '22ch', fontFamily: "'Buasley', cursive" }}>
                  "Seu bairro sempre teve voz. Com a Sniffer, ele recupera o alcance."
                </blockquote>

                {/* Parágrafos */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '64ch', color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.8 }}>
                  <p style={{ margin: 0 }}>
                    Você lembra quando o sucesso de um lugar era simples? Alguém de confiança indicava e dizia:{' '}
                    <em style={{ color: '#fff', fontStyle: 'italic' }}>"Você precisa conhecer esse lugar"</em>.
                    Não tinha feed viciante, não tinha anúncio de multinacional. Tinha gente olhando nos olhos e dividindo o que amava no bairro.
                  </p>
                  <p style={{ margin: 0 }}>
                    Esse saber não desapareceu, ele só ficou sem caminho para circular. Ele está no cliente fiel que conhece cada esquina, na vizinha que sabe quem faz o melhor café e no amigo que sempre descobre as novidades antes de todo mundo. As grandes redes sociais tentaram substituir isso por{' '}
                    <em style={{ color: 'rgba(255,255,255,0.85)' }}>"gaiolas digitais"</em>, abafando o comércio local sob um mar de ruído.
                  </p>
                  <p style={{ margin: 0, color: green, fontWeight: 400, fontSize: '22px', fontFamily: "'Buasley', cursive", letterSpacing: '0.01em' }}>
                    A Sniffer nasceu para ser esse caminho.
                  </p>
                  <p style={{ margin: 0 }}>
                    Nós damos mobilidade ao conhecimento que já existe — vivo, real e espalhado pela comunidade. Aqui, a tecnologia não substitui ninguém; ela serve como suporte e velocidade para que a indicação da{' '}
                    <em style={{ color: 'rgba(255,255,255,0.85)' }}>"Dona Marta"</em>{' '}
                    chegue a centenas de pessoas no momento certo. A essência de um negócio querido e o toque humano são conhecimentos que nenhum sistema consegue fabricar.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: `0 8px 32px ${green}55` }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate('/cadastro')}
                  style={{ marginTop: '44px', padding: '16px 40px', borderRadius: '999px', background: green, color: navy, fontWeight: 800, fontSize: '17px', border: 'none', cursor: 'pointer', fontFamily: "'Ferom', Inter, sans-serif", letterSpacing: '-0.01em' }}
                >
                  Junte-se a essa revolução →
                </motion.button>
              </motion.div>

              {/* Coluna lateral — cartão com citação humana */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '8px' }}
              >
                {[
                  { emoji: '👴', nome: 'Seu Artur', texto: 'Abri meu bar tem 22 anos. A Sniffer colocou meu nome na boca de gente que nunca passou por aqui.' },
                  { emoji: '👩‍🍳', nome: 'Dona Marta', texto: 'Não entendo muito de tecnologia, mas entendo de comida boa. A Sniffer deixou a vizinhança saber disso.' },
                  { emoji: '🧑', nome: 'Cauã, 28 anos', texto: 'Descobri um café incrível a duas quadras de casa. Estava lá faz anos. A Sniffer me apresentou.' },
                ].map(({ emoji, nome, texto }, i) => (
                  <motion.div
                    key={nome}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    style={{ padding: '20px 22px', borderRadius: '20px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}
                  >
                    <p style={{ margin: '0 0 12px', color: 'rgba(255,255,255,0.75)', fontSize: '18px', lineHeight: 1.6, fontFamily: "'Buasley', cursive" }}>"{texto}"</p>
                    <span style={{ fontSize: '13px', color: green, fontWeight: 700, fontFamily: "'Ferom', Inter, sans-serif" }}>{emoji} {nome}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: 'linear-gradient(180deg, #332d59 0%, #111026 100%)', color: 'rgba(255,255,255,0.45)', fontSize: '14px' }}>
        {/* Grid principal */}
        <div className={shell} style={{ padding: '64px 0 44px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 5' }}>
            <img src="/logo-sniffer-white.png" alt="Sniffer" style={{ height: '36px', width: 'auto', marginBottom: '12px', display: 'block' }} />
            <p style={{ margin: '0 0 24px', fontSize: '15px', lineHeight: 1.65, maxWidth: '26ch', color: 'rgba(255,255,255,0.5)' }}>
              O faro que faltava no seu bairro. Descoberta local, confiança real.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {['Instagram', 'LinkedIn', 'TikTok'].map(s => (
                <a key={s} href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px', fontWeight: 600, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = green)}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Espaçador */}
          <div style={{ gridColumn: 'span 1' }} />

          {/* Produto */}
          <div style={{ gridColumn: 'span 2' }}>
            <strong style={{ display: 'block', color: 'rgba(255,255,255,0.3)', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '20px', fontWeight: 700 }}>PRODUTO</strong>
            {['People', 'Negócios', 'Comunidade', 'Early Adopters'].map(l => (
              <a key={l} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = green)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >{l}</a>
            ))}
          </div>

          {/* Empresa */}
          <div style={{ gridColumn: 'span 2' }}>
            <strong style={{ display: 'block', color: 'rgba(255,255,255,0.3)', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '20px', fontWeight: 700 }}>EMPRESA</strong>
            {['Quem Somos', 'Cadastro', 'Contato'].map(l => (
              <a key={l} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = green)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >{l}</a>
            ))}
          </div>

          {/* Legal */}
          <div style={{ gridColumn: 'span 2' }}>
            <strong style={{ display: 'block', color: 'rgba(255,255,255,0.3)', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '20px', fontWeight: 700 }}>LEGAL</strong>
            {['Termos de Uso', 'Privacidade', 'Cookies'].map(l => (
              <a key={l} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = green)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >{l}</a>
            ))}
          </div>
        </div>

        {/* Barra inferior */}
        <div className={shell} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
          <span>© 2026 Sniffer · Todos os direitos reservados.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Feito com <span style={{ color: green, margin: '0 2px' }}>♥</span> no Brasil
          </span>
        </div>
      </footer>
    </motion.div>
  );
}
